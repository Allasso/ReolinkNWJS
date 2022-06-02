/**
 * class CGI
 * æä¾›è¿œç¨‹é…ç½®çš„è®¿é—®æŽ¥å£ã€‚
 */
function CGI() {
  throw { "msg": "Don't NEW a singleton," };
}

EventListener.apply(CGI);


(function() {
  var _cgi_logined = false;
  var _location = 'LOGIN';
  CGI.login = function() {
    _cgi_logined = true;
  };
  CGI.isLogined = function() {
    return _cgi_logined;
  };

  CGI.setLocation = function(loc) {
    _location = loc;
  };

  CGI.getLocation = function() {
    return _location;
  };

  /**
   * æœ¬æ–¹æ³•ç”¨äºŽå‘é€å•æ¡å‘½ä»¤è¯·æ±‚ã€‚
   */
  CGI.sendCommand = function(cmd, param, onSuccess, onFailed, action, onTimeout, timeout) {
console.log("CGI.sendCommand");
    if (action === undefined) { action = 0; } else { action = 1; }
    if (!timeout) { timeout = 15000; }
    var dataStr = JSON.stringify([{
      cmd: cmd,
      action: action,
      param: param
    }]);
    console.dbg('request params: ' + JSON.stringify(dataStr));
    if (cmd !== 'Login' && cryptoUtils.hasAesKey()) {
      dataStr = cryptoUtils.encrypt(dataStr);
    }

    (function(loc) {
      var requestURL = 'cgi-bin/api.cgi?cmd=' + cmd + (cmd !== 'Login' ? '&token=' + localStorage.getItem('token') : '');
      var requestMethod = 'POST';
      $.ajax({ /* Reboot request with no response. */
        url: requestURL,
        type: requestMethod, // debug with GET method.
        contentType: 'application/json',
        timeout: timeout,
        data: dataStr,
        success: function(data, status, xhr) {
          if (CGI.getLocation() != loc) {
            return;
          }

          try {
            if (cmd === 'Login' && !param.Digest) {
              var resHeader = xhr.getResponseHeader('WWW-Authenticate').replace('Digest', '');
              var resHeaderArr = resHeader.split(',');
              var getVal = function(name) {
                var res = '';
                for (let index = 0; index < resHeaderArr.length; index++) {
                  const element = resHeaderArr[index];
                  var elementArr = element.trim().split('=');
                  if (elementArr[0] === name) {
                    res = elementArr[1];
                  }
                }
                return res.replace(/"/g, '');
              }
              var res = {
                Realm: getVal('realm'),
                Qop: getVal('qop'),
                Nonce: getVal('nonce'),
                Nc: getVal('nc'),
                Method: requestMethod,
                Uri: requestURL
              };
              onSuccess(res);
              return;
            }
            try {
              data = cryptoUtils.decrypt(data);
            } catch (error) {
              data = JSON.parse(data);
              if (!(data[0].cmd === 'Login' && data[0].code === 1 && data[0].error && data[0].error.rspCode === -7)) {
                throw error;
              }
            }
            console.dbg('response data: ' + JSON.stringify(data));
            if (data[0]) {
              if (data[0].cmd == cmd) {
                if (data[0].code == 0) {
                  if (action) {
                    onSuccess(data[0].value, data[0].range, data[0].initial);
                  } else {
                    onSuccess(data[0].value);
                  }
                  delete data[0];
                } else {
                  if (CGI.isLogined() && (data[0].error.rspCode == -6 || data[0].error.rspCode == -27)) {
                    bc_alert('Login expired, for security reason, please login again.', 'error');
                    setTimeout(function() {
                      ControllerMain.onLogout();
                    }, 3000);
                  } else {
                    onFailed(data[0].cmd, data[0].error.rspCode, data[0].error.detail);
                  }
                }
              } else {
                onFailed(data[0].cmd, 0xffffffff, 'Device responsed a wrong command result.');
              }
            } else {
              onFailed(data[0].cmd, 0xfffffffe, 'Device responsed a result in wrong format.');
            }
          } catch (e) {
            onFailed(cmd, 0xfffffffc, 'Failed to parse the data from device.');
            return;
          }
        },
        "error": function(e) {
          console.error(cmd + ' err: ' + JSON.stringify(e));
          if (e && e.statusText == 'timeout') {
            if (onTimeout && typeof onTimeout === 'function') {
              //å­˜åœ¨ä¸”æ˜¯function
              onTimeout();
            } else {
              onFailed(cmd, 0xfffffffb, 'Network timeout.');
            }
            return;
          }
          if (CGI.getLocation() != loc) {
            return;
          }
          onFailed(cmd, 0xfffffffd, 'Network connection failure.');
        },
        "complete": function(XHR, TS) {
          XHR = null;
        }
      });
    })(this.getLocation());
  };

  /**
   * æœ¬æ–¹æ³•ç”¨äºŽå‘é€å•æ¡Setå‘½ä»¤è¯·æ±‚ã€‚
   * @TODO ä»…ç”¨äºŽDEBUG!!!!
   */
  CGI.sendSetCommand = CGI.sendCommand;

  CGI.cmds = [];

  CGI.clearCommands = function() {
    this.cmds = [];
  };

  CGI.prepareCommand = function(cmd, param, action) {

    if (action === undefined) { action = 0; } else { action = 1; }

    this.cmds.push(JSON.stringify({
      "cmd": cmd,
      "action": action,
      "param": param
    }));
  };

  CGI.operatorErrorHandler = function(msg) {
    if (!msg) {
      msg = ' Error:<br>Operation failed due to unknown reason.';
    }else{
      msg = ' Error:<br>' + msg;
    }

    bc_alert(msg, 'error');

  };

  CGI.autoErrorHandler = function(cmd, errno, msg) {
    var msg = EnumCGIError[errno];
    if (!msg) {
      msg = cmd + ' Error(' + errno + '):<br>Operation failed due to unknown reason.';
    }
    bc_alert(msg, 'error');

    console.dbg('-------- Error Begin --------');
    console.dbg('Command: ', cmd);
    console.dbg('Code:  ', errno);
    console.dbg('Detail:  ', msg);
    console.dbg('--------- Error End ---------');
  };

  CGI.commitCommands = function(onSuccess, onFailed, onAllDone, onTimeout, timeout, callFrom) {
    if (!timeout) { timeout = 15000; }
    var dataStr = '[' + CGI.cmds.join(',') + ']';
    console.dbg('request params: ' + JSON.stringify(dataStr));
    if (cryptoUtils.hasAesKey()) {
      dataStr = cryptoUtils.encrypt(dataStr);
    }
//mssg("CGI.commitCommands:    dataStr: " + dataStr + "    " + callFrom);

//try { lk.lk = lk.lk; } catch(e) { mssg(e.stack) }

    (function(loc) {
      $.ajax({
        url: "cgi-bin/api.cgi?token=" + localStorage.getItem('token'),
        type: "POST",
        contentType: "application/json",
        data: dataStr,
        timeout: timeout,
        success: function(data) {
          if (CGI.getLocation() != loc) {
            return;
          }
          try {
            try {
              data = cryptoUtils.decrypt(data);
            } catch (error) {
              data = JSON.parse(data);
              if (!(data.length === 1 && data[0].cmd === 'Unknown' && data[0].code === 1 && data[0].error && data[0].error.rspCode === -6)) {
                throw error;
              }
            }
            console.dbg('response data: ' + JSON.stringify(data));
//mssg('    SUCCESS: response data: ' + JSON.stringify(data));
//mssg('    SUCCESS: response data: ' + data.length);
            var len = data.length;
            for (var i = 0; i < len; ++i) {

              if (data[i]) {
                if (data[i].code == 0) {
//mssg('        calling onSuccess() 1');
                  onSuccess(data[i].cmd, data[i].value, data[i].range, data[i].initial);
                } else {
                  if (CGI.isLogined() && (data[i].error.rspCode == -6 || data[i].error.rspCode == -27)) {
                    bc_alert('Login expired, for security reason, please login again.', 'error');
                    setTimeout(function() {
                      ControllerMain.onLogout();
                    }, 2000);
                  } else {
//mssg('        calling onFailed() 1');
                    onFailed(data[i].cmd, data[i].error.rspCode, data[i].error.detail);
                  }
                }
              } else {
//mssg('        calling onFailed() 2');
                onFailed(data[i].cmd, 0xfffffffe, 'Device responsed a result in wrong format.');
              }
            }
            if (onAllDone !== undefined) {
//mssg('        calling onAllDone() 1');
              onAllDone();
            }
          } catch (e) {
//mssg('        calling onFailed() 3');
            onFailed('?', 0xfffffffc, 'Failed to parse the data from device.');
            return;
          }
        },
        "error": function(e) {
          console.error(cmd + ' err: ' + JSON.stringify(e));
//mssg('    FAILED: response data: ' + JSON.stringify(data));
//mssg('    FAILED: response data: ' + data);
          if (e && e.statusText == 'timeout') {
            if (onTimeout && typeof onTimeout === 'function') {
              //å­˜åœ¨ä¸”æ˜¯function
              onTimeout();
            } else {
//mssg('        calling onFailed() 4');
              onFailed('?', 0xfffffffb, 'Network timeout.');
            }
            return;
          }
          if (CGI.getLocation() != loc) {
            return;
          }
//mssg('        calling onFailed() 5');
          onFailed('?', 0xfffffffd, 'Network connection failure.');
        },
        "complete": function(XHR, TS) {
          XHR = null
        }
      });
    })(this.getLocation());
  };

})();
