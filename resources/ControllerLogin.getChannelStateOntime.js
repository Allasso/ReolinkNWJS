ControllerLogin.getChannelStateOntime = function(upgradedCallback, isUpgrading){

  isUpgrading = !!isUpgrading;

  ControllerLogin.timerAutoRefresher && clearInterval(ControllerLogin.timerAutoRefresher);

  ControllerLogin.timerAutoRefresher = setInterval(function(){

    CGI.clearCommands();

    CGI.prepareCommand('GetAbility', {
      "User": {
        "userName": ControllerLogin.userName
      }
    });

    CGI.prepareCommand('GetDevInfo', {});

    CGI.commitCommands(function(cmd, data) {
//mssg("ControllerLogin.getChannelStateOntime => call CGI.commitCommands => SUCCESS: " + cmd + "    " + JSON.stringify(data));
//mssg("ControllerLogin.getChannelStateOntime => call CGI.commitCommands => SUCCESS: " + cmd + "    " + data);

      switch (cmd) {
        case 'GetAbility':
          PCE.init(data.Ability);
          ControllerLogin.abilities = data.Ability;
          break;
        case 'GetDevInfo':
          ControllerMain.deviceInfo = data.DevInfo;
          break;
        default:
          bc_alert('alert.unexpected_result');
          break;
      }
    }, function(cmd, errno, msg) {
//mssg("ControllerLogin.getChannelStateOntime => call CGI.commitCommands => FAILURE: " + cmd + "    " + data);

      if (!isUpgrading) {
        CGI.autoErrorHandler(cmd, errno, msg);
      } else {
        if (errno === -6 && upgradedCallback) {
          upgradedCallback();
        }
      }
    });

  },8000);
}

