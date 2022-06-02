/**********************************************************/
/***** Functions and variables we want available
       before script finishes loading *****/

const cookieId = "IDnwjsTranscriptionHelper";
let fs;
let gui;
let win;
let isNWJS = false;
let userConfig;
let exec;
let execSync;
let path = require('path');
let nwDirData = path.dirname(process.execPath);
let nwDir = nwDirData.split(" ")[0].replace(/\/Frameworks\/nwjs/, "");
let configFilepath = nwDir + "/Resources/app.nw/resources/config.json";

nw.App.registerGlobalHotKey(new nw.Shortcut({
  key: "Escape",
  active: function () {
    nw.Window.get().leaveFullscreen();

    reolinkPageIframe = document.getElementById("reolink_page");
    let rlWin = reolinkPageIframe.contentWindow;
    if (rlWin && rlWin.OR_setFullModePreviewStyles) {
      rlWin.OR_setFullModePreviewStyles(true);
    }
  }
}));

function mssg(msg) {
  if (isNWJS) {
    process.stdout.write(">> " + msg + "\n");
  } else if (window.dump) {
    dump(">> " + msg + "\n");
  } else {
    console.log(">> " + msg);
  }
}

let setDelay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }
)}

function readCookie(name) {
  var cookieValue = 0
  var nameEQ = cookieId + name+"=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++){
    var cookieString = cookieArray[i];
    var cookieString = cookieString.replace(/^ +/, '');
    if (cookieString.indexOf(nameEQ) == 0){
      cookieValue = cookieString.substring(nameEQ.length, cookieString.length);
    }
  }
  return cookieValue;
}

function writeCookie(topic, value) {
  var date = new Date();
  date.setDate(date.getDate()+(90));
  var expires = date.toGMTString();

  document.cookie = cookieId + topic + "=" + value + "; expires="+expires+"; path=/";
}

function initWindowPosition(win) {
  var confStr = readCookie("UserConfig");
  if (!confStr) {
    return;
  }

  // Just let JSON throw error.
  var conf = JSON.parse(confStr);

  if (!conf.windowPos) {
    return;
  }

  var { x, y, width, height } = conf.windowPos;

  // Assume if we have one property, all the rest are there.
  if (x) {
    win.x = x;
    win.y = y;
    win.width = width;
    win.height = height;
  }
}

/**********************************************************/
/***** Initialize stuff for NWJS *****/

try {
  if (require) {
    console.log("Running in nw.js.");

    fs = require('fs');
    gui = require('nw.gui');
    win = gui.Window.get();
    os = require('os');

    let cp = require('child_process');
    exec = cp.exec;
    execSync = cp.execSync;

    userConfig = os.homedir() + "/.transcription_helper.conf";

    initWindowPosition(win);

    win.on('close', onWindowClose);
    isNWJS = true;

    console.log("Version : " + process.versions['node-webkit']);

    //var Typo = require("typo-js");
  }
} catch(e) {
  console.log("Not running in nw.js - some functions may not be operational.");
}

/**********************************************************/
/***** Initialize globals *****/

let reolinkPageIframe;

let maxBright = 224;
let minBright = 80;
let maxContrast = 224;
let minContrast = 124;
let saturationDay = 128;
let saturationNight = 128;
let sharpnessDay = 128;
let sharpnessNight = 128;

let latitude = 36.93;
let longitude = -103.22;

let mornStartOffset = -.6666;
let mornEndOffset = -.1666;
let eveStartOffset = 0;
let eveEndOffset = .5;
let mornOvercastShift = 0;
let eveOvercastShift = 0;

let schedMargin = .05;

let scratchpadWindow;

/**********************************************************/
/***** Run stuff *****/

function init() {
  //OR_delegate();

  //reolinkPageIframe = document.getElementById("reolink_page");

  /*
  setTimeout(() => {
    let rlDoc = reolinkPageIframe.contentDocument,
mssg("rlDoc: " + rlDoc);
  }, 5000);
  */

  window.addEventListener("message", (evt) => {
    let data = JSON.parse(evt.data);
    mssg("RECEIVING END: PARENT: " + evt.data);

    if (data.topic == "scratchpad") {
      if (data.context == "reolink") {
        evalCodeInReolinkEnv(data.code);
      }
    }
  });

  window.addEventListener("keydown", onKeydown);
  initParams();
}

function evalCodeInReolinkEnv(code) {
//mssg("evalCodeInReolinkEnv: " + code);
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;
  rlWin.eval(code);
}

function initParams(configData) {
  if (!configData) {
    let configStr = "";
    configData = {};

    if (fs.existsSync(configFilepath)) {
      configStr = fs.readFileSync(configFilepath);
    }
    if (configStr) {
      configData = JSON.parse(configStr);
    }
  }

  let ps = configData.presetsScheduling;

//mssg("INIT PARAMES: " + ps["bright_night"] + "    " + typeof(ps["bright_night"]));

  maxBright = ps && typeof(ps["bright_night"]) == "number" ? ps["bright_night"] : 224;
  minBright = ps && typeof(ps["bright_day"]) == "number" ? ps["bright_day"] : 80;
  maxContrast = ps && typeof(ps["contrast_night"]) == "number" ? ps["contrast_night"] : 224;
  minContrast = ps && typeof(ps["contrast_day"]) == "number" ? ps["contrast_day"] : 124;

  saturationDay = ps && typeof(ps["saturation_night"]) == "number" ? ps["saturation_night"] : 128;
  saturationNight = ps && typeof(ps["saturation_day"]) == "number" ? ps["saturation_day"] : 128;
  sharpnessDay = ps && typeof(ps["sharpness_night"]) == "number" ? ps["sharpness_night"] : 128;
  sharpnessNight = ps && typeof(ps["sharpness_day"]) == "number" ? ps["sharpness_day"] : 128;

  latitude = ps && typeof(ps.latitude) == "number" ? ps.latitude : 36.93;
  longitude = ps && typeof(ps.longitude) == "number" ? ps.longitude : -103.22;

  mornStartOffset = ps && typeof(ps.mornStartOffset) == "number" ? ps.mornStartOffset : -.6666;
  mornEndOffset = ps && typeof(ps.mornEndOffset) == "number" ? ps.mornEndOffset : -.1666;

  eveStartOffset = ps && typeof(ps.eveStartOffset) == "number" ? ps.eveStartOffset : 0;
  eveEndOffset = ps && typeof(ps.eveEndOffset) == "number" ? ps.eveEndOffset : .5;

  mornOvercastShift = ps && typeof(ps.mornOvercastShift) == "number" ? ps.mornOvercastShift : .2666;
  eveOvercastShift = ps && typeof(ps.eveOvercastShift) == "number" ? ps.eveOvercastShift : 0;

//mssg("INIT PARAMES: " + minBright);

}

function reolinkPageLoaded(evt) {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;

  rlWin.addEventListener("click", OR_mouseEventListener, true);
  rlWin.addEventListener("keydown", onKeydown);

  OR_delegate(rlWin);
}

function OR_delegate(rlWin) {
//mssg("OR_delegate");

  let countLoginTimer = 0;

  let loginTimer = setInterval(() => {
    if (OR_login()) {
      clearInterval(loginTimer);
    }
    if (countLoginTimer == 240) {
      alert("Login timed out");
      clearInterval(loginTimer);
    }
    countLoginTimer++;
  }, 500);

  let countSetupFirstRun = true;

  let setupTimer = setInterval(() => {
    // This runs continuously, as switching views will wipe out the setup, and
    // we don't get load/unload events when this happens.  We'll check for the
    // presence of one of our injected elements to see if we need to run setup.
    OR_setup();
  }, 500);
}

function overrideJS() {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;

  let filenames = [
    "javascript/reo_main.js",
    "javascript/reo_override.js",
    //"resources/ControllerFlash.js",
    //"resources/BcFlashPlayer.js",
    //"resources/BcH5Player.js",
    //"resources/flash.js",
  ];

  for (let fname of filenames) {
    let filepath = nwDir + "/Resources/app.nw/" + fname;
    let dataStr = fs.readFileSync(filepath, "utf8");
    rlWin.eval(dataStr);
  }
}

function injectHTML() {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;

  let filenames = [
    "html/reo_main.html",
  ];

  let html = "";

  for (let fname of filenames) {
    let filepath = nwDir + "/Resources/app.nw/" + fname;
    html += fs.readFileSync(filepath, "utf8");
  }

  let node = rlWin.document.createElement("div");
  node.id = "OR_html_insert_node";
  node.innerHTML = html;
  rlWin.document.body.appendChild(node);
}

function injectCSS() {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;

  let filenames = [
    "styles/reo_main.css",
  ];

  let css = "";

  for (let fname of filenames) {
    let filepath = nwDir + "/Resources/app.nw/" + fname;
    css += fs.readFileSync(filepath, "utf8");
  }

  let style = rlWin.document.createElement("style");
  style.id = "OR_insert_css";
  style.innerHTML = css;
  rlWin.document.body.appendChild(style);
}

function OR_login() {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlDoc = reolinkPageIframe.contentDocument;

  if (!rlDoc) {
    return false;
  }

  let username = rlDoc.getElementById("login_text_username");
  let password = rlDoc.getElementById("login_text_password");

  if (!username || !password) {
    return false;
  }

  // First override javascript and inject HTML.
  overrideJS();
  injectHTML();
  injectCSS();

  let loginButton = rlDoc.getElementById("login_login_button");
  let streamButton = rlDoc.getElementById("default-stream-clear");

  username.value = "admin";
  password.value = "adminadmin";

  //streamButton.click();
  loginButton.click();

  return true;
}

let btnZoomInc;
let btnZoomDec;
let btnFocusInc;
let btnFocusDec;

function OR_setup() {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlDoc = reolinkPageIframe.contentDocument;

  if (!rlDoc) {
    return;
  }

  if (rlDoc.getElementsByClassName("slider_info_box").length) {
    return;
  }

  let rlWin = reolinkPageIframe.contentWindow;
  let zoom = rlDoc.getElementById("ptz-zoom");
  let focus = rlDoc.getElementById("ptz-focus");
  let ptzControlHead = rlDoc.getElementById("ptz_control_head");
  let ptzControlCntnr = rlDoc.getElementById("ptz_control_container");
  let ptzUBControlCntnr = rlDoc.getElementById("ptz_upgraded_base_control_container");

  if (!zoom || !focus || !ptzControlHead) {
    return;
  }

  let zoomRange = zoom.getElementsByClassName("ui-slider-range")[0];
  let zoomHandle = zoom.getElementsByClassName("ui-slider-handle")[0];
  let focusRange = focus.getElementsByClassName("ui-slider-range")[0];
  let focusHandle = focus.getElementsByClassName("ui-slider-handle")[0];

  if (!zoomRange || !zoomHandle || !focusRange || !focusHandle) {
//mssg("zoomRange,zoomHandle,focusRange,focusHandle not loaded...");
    return;
  }

  let imageItems = [
    { id: "ptz-zoom", sliderFactor: 34 },
    { id: "ptz-focus", sliderFactor: 241 },
    { id: "image-bright", sliderFactor: 255 },
    { id: "image-contrast", sliderFactor: 255 },
    { id: "image-saturation", sliderFactor: 255 },
    { id: "image-sharpen", sliderFactor: 255 }
  ];

  for (let { id, sliderFactor } of imageItems) {
    let cntnr = rlDoc.getElementById(id);
    let range = cntnr.children[0];

    let info = rlDoc.createElement("div");
    info.className = "slider_info_box";

    cntnr.style.position = "relative";
    cntnr.appendChild(info);

    let rangeWid = Math.round(parseFloat(range.style.width) * sliderFactor / 100);
    info.textContent = rangeWid;

    if (id == "image-bright") {
      cntnr.parentNode.parentNode.style.marginTop = "14px";
    }

    setInterval(() => {
      try {
        if (range) {
          let rangeWid = Math.round(parseFloat(range.style.width) * sliderFactor / 100);
          info.textContent = rangeWid;
        }
      } catch(e) {}
    }, 200);
  }

  // Create Image preset buttons.

  let basicImageSettings = rlDoc.getElementById("basic-image-settings");
  let presetButtonDay = rlDoc.createElement("div");
  let presetButtonNight = rlDoc.createElement("div");
  let presetsSchedulingButton = rlDoc.createElement("div");

  presetButtonDay.id = "preset_button_day";
  presetButtonDay.className = "preset_buttons";
  presetButtonDay.textContent = "Presets Day";

  presetButtonNight.id = "preset_button_night";
  presetButtonNight.className = "preset_buttons";
  presetButtonNight.textContent = "Presets Night";

  presetsSchedulingButton.id = "presets_scheduling_button";
  presetsSchedulingButton.className = "preset_buttons";
  presetsSchedulingButton.textContent = "Manage Presets/Scheduling";

  let buttonsCntnr = basicImageSettings.children[5];
  buttonsCntnr.style.position = "relative";
  buttonsCntnr.appendChild(presetButtonDay);
  buttonsCntnr.appendChild(presetButtonNight);
  buttonsCntnr.appendChild(presetsSchedulingButton);

  // End

  let btnsPtzInc = Array.from(ptzUBControlCntnr.getElementsByClassName("pre_ptz_control_increase"));
  let btnsPtzDec = Array.from(ptzUBControlCntnr.getElementsByClassName("pre_ptz_control_decrease"));

  btnZoomDec = btnsPtzDec[0];
  btnZoomInc = btnsPtzInc[0];
  btnFocusDec = btnsPtzDec[1];
  btnFocusInc = btnsPtzInc[1];

  let prePtzContainer = rlDoc.getElementById("pre_ptz_container");
  let prePtzArrows = rlDoc.getElementById("pre_ptz_arrows");
  prePtzContainer.style.height = "150px";
  prePtzContainer.style.maxHeight = "150px";
  prePtzArrows.classList.remove("header_arrows_stren");
  prePtzArrows.classList.add("header_arrows_extend");

  let preImgContainer = rlDoc.getElementById("pre_img_container");
  let preImgArrows = rlDoc.getElementById("pre_img_arrows");
  preImgContainer.style.height = "320px";
  preImgArrows.classList.remove("header_arrows_stren");
  preImgArrows.classList.add("header_arrows_extend");

  rlDoc.getElementById("basic-osd-settings").classList.remove("visible");
  rlDoc.getElementById("basic-encode-settings").classList.remove("visible");
  rlDoc.getElementById("basic-image-settings").classList.add("visible");

  let basicSettingHeader = rlDoc.getElementById("basic_setting_header");
  let bshElems = Array.from(basicSettingHeader.children);
  for (elem of bshElems) {
    if (elem.getAttribute("bc-bind-id") == "basic-image-settings") {
      elem.classList.add("selected");
    } else {
      elem.classList.remove("selected");
    }
  }

  setTimeout(() => {
    initScheduling();
  }, 2000);
}

function dialogManagePresetsScheduling(close) {
  let dialog = document.getElementById("dialog_presets_scheduling");

  if (close) {
    dialog.style.display = "none";
    dialog.removeEventListener("mousedown", onMouseEventDMPS);
    return;
  }

  let params = [
    { id: "diag_ps_bright_day", val: minBright },
    { id: "diag_ps_contrast_day", val: minContrast },
    { id: "diag_ps_saturation_day", val: saturationDay },
    { id: "diag_ps_sharpness_day", val: sharpnessDay },
    { id: "diag_ps_bright_night", val: maxBright },
    { id: "diag_ps_contrast_night", val: maxContrast },
    { id: "diag_ps_saturation_night", val: saturationNight },
    { id: "diag_ps_sharpness_night", val: sharpnessNight },
    { id: "diag_ps_morn_start_offset", val: mornStartOffset },
    { id: "diag_ps_morn_end_offset", val: mornEndOffset },
    { id: "diag_ps_eve_start_offset", val: eveStartOffset },
    { id: "diag_ps_eve_end_offset", val: eveEndOffset },
  ];

  for (let { id, val } of params) {
    let input = document.getElementById(id);
    input.value = val;
  }

  let info = document.getElementById("diag_ps_overcast_shift_info");
  let slbase = document.getElementById("diag_ps_overcast_slider_base");
  let range = document.getElementById("diag_ps_overcast_slider_range");
  let handle = document.getElementById("diag_ps_overcast_slider_handle");

  let slbaseWid = parseInt(window.getComputedStyle(slbase).getPropertyValue("width"));

  // slbaseWid is 0 because we haven't opened
  let width = mornOvercastShift * 2 * slbaseWid;
  info.textContent = (mornOvercastShift * 60) + " minutes";

  range.style.width = width + "px";
  handle.style.left = (width - 11) + "px";

  dialog.style.display = "block";
  dialog.addEventListener("mousedown", onMouseEventDMPS);
}

let ovcstSliderHandleOrigPos = {};

function onMouseEventDMPS(evt) {
  let target = evt.target;
  let slbase = document.getElementById("diag_ps_overcast_slider_base");
  let range = document.getElementById("diag_ps_overcast_slider_range");
  let handle = document.getElementById("diag_ps_overcast_slider_handle");
  let info = document.getElementById("diag_ps_overcast_shift_info");

  let slRect = slbase.getBoundingClientRect();
  let slbaseWid = slRect.right - slRect.left;

  let rangeRect = range.getBoundingClientRect();
  let rangeLeft = rangeRect.left;
  let rangeRight = rangeRect.right;
  let rangeWid = rangeRight - rangeLeft;

  if (target.id == "diag_ps_overcast_slider_handle") {
    if (evt.type = "mousedown") {
      window.addEventListener("mousemove", onMouseMoveHandle);
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", onMouseMoveHandle);
        ovcstSliderHandleOrigPos = {};
      });
      let rangeRect = range.getBoundingClientRect();
      let rangeWid = rangeRect.right - rangeRect.left;

      ovcstSliderHandleOrigPos = { mouseOrig: evt.clientX, rangeOrig: rangeWid };
    }
  }

  function onMouseMoveHandle(evt) {
    let { mouseOrig, rangeOrig } = ovcstSliderHandleOrigPos;
    if (typeof(mouseOrig) == "undefined") {
      return;
    }

    let x = evt.clientX;
    let deltaX = x - mouseOrig;

    let newWidth = Math.max(0, Math.min(slbaseWid, rangeWid + deltaX));
    range.style.width = newWidth + "px";
    // 11 is half the width of the handle.
    handle.style.left = (newWidth - 11) + "px";

    // 30 represents 30 minutes, which is the maximum.
    let value = Math.round((newWidth / slbaseWid) * 30);
    info.textContent = value + " minutes";
  }
}

function initScheduling() {
  runSchedule();

  setInterval(() => {
    runSchedule();
  }, 60000);
}

function runSchedule() {
  // Get sunrise and sunset times and put in decimal form.
  let times = SunCalc.getTimes(new Date(), latitude, longitude);
  let sunrise = times.sunrise.getHours() + (times.sunrise.getMinutes() / 60);
  let sunset = times.sunset.getHours() + (times.sunset.getMinutes() / 60);

//mssg("sunrise: " + sunrise + "    sunset: " + sunset);

// Diagnostic and testing:
/*
sunrise = 5;
sunset = 10;
mornStartOffset = 0;
mornEndOffset = .0166;
eveStartOffset = 0;
eveEndOffset = .0166;
schedMargin = .01;
mornOvercastShift = 0;
*/

  let mornStart = sunrise + mornStartOffset + mornOvercastShift;
  let mornEnd = sunrise + mornEndOffset + mornOvercastShift;
  let eveStart = sunset + eveStartOffset + eveOvercastShift;
  let eveEnd = sunset + eveEndOffset + eveOvercastShift;

//mssg("start/end times:    morning: " + mornStart + "    " + mornEnd + "    evening: " + eveStart + "    " + eveEnd);
//mssg("offset values:    morning: " + mornStartOffset + "    " + mornEndOffset + "    evening: " + eveStartOffset + "    " + eveEndOffset);

// Diagnostic and testing:
//mornStart = 9.2;
//mornEnd = 9.2166;
//eveStart = 9.25;
//eveEnd = 9.2666;

  let dateObj = new Date();
  let hrs = dateObj.getHours();
  let mins = dateObj.getMinutes();
  let secs = dateObj.getSeconds();

let hrsStr = ("0" + hrs).replace(/.*(..)/, "$1");
let minsStr = ("0" + mins).replace(/.*(..)/, "$1");
let secsStr = ("0" + secs).replace(/.*(..)/, "$1");
let timeStr = hrsStr + ":" + minsStr + ":" + secsStr;

//mssg("    timeStr: " + timeStr + "    minBright: " + minBright + "    maxBright: " + maxBright + "    minContrast: " + minContrast + "    maxContrast: " + maxContrast);

  // Convert to decimal hours

  hrsDecimal = hrs + (mins / 60) + (secs / 3600);

  let isMorning = mornStart < mornEnd && hrsDecimal > (mornStart - schedMargin) && hrsDecimal < (mornEnd + schedMargin);
  let isEvening = eveStart < eveEnd && hrsDecimal > (eveStart - schedMargin) && hrsDecimal < (eveEnd + schedMargin);

//mssg("    mornStart: " + mornStart + "    isMorning: " + isMorning + "    " + (mornStart < mornEnd) + "    " + (hrsDecimal > (mornStart - schedMargin)) + "    " + (hrsDecimal < (mornEnd + schedMargin)));

  let start = isMorning ? mornStart : eveStart;
  let end = isMorning ? mornEnd : eveEnd;

  let spanBright = maxBright - minBright;
  let spanContrast = maxContrast - minContrast;

//mssg("isMorning: " + isMorning);

  if (isMorning && isMorning == isEvening) {
mssg("Morning/Evening transition conflict");
  } else if (isMorning || isEvening) {

//mssg("start: " + start);
//mssg("end: " + end);

    let val = Math.max(Math.min(hrsDecimal, end), start);
    let mult;

    if (isMorning) {
      mult = 1 - ((val - start) / (end - start));
    } else {
      mult = (val - start) / (end - start);
    }

//mssg("val: " + val);
//mssg("mult: " + mult);

    let bright = Math.round((mult * spanBright) + minBright);
    let contrast = Math.round((mult * spanContrast) + minContrast);

    let rlWin = reolinkPageIframe.contentWindow;
    rlWin.CGI.sendCommand('SetImage', { "Image": { "bright":bright,"channel":0,"contrast":contrast,"hue":128,"saturation":128,"sharpen":128 }}, function() {}, function() {});
    updateControlsUI({"SetImage":{ "bright":bright,"channel":0,"contrast":contrast,"hue":128,"saturation":128,"sharpen":128 }}, rlWin);

mssg("    update:    timeStr: " + timeStr + "    bright: " + bright + "    contrast: " + contrast + "    sunrise: " + times.sunrise.getHours() + ":" + times.sunrise.getMinutes() + "    sunset: " + times.sunset.getHours() + ":" + times.sunset.getMinutes() + "    minBright: " + minBright + "    maxBright: " + maxBright + "    minContrast: " + minContrast + "    maxContrast: " + maxContrast);

  }
}

function OR_mouseEventListener(evt) {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;
  let rlDoc = reolinkPageIframe.contentDocument;

  let target = evt.target;
//mssg("OR_mouseEventListener: " + evt.type + "    " + target + "    " + target.id + "    " + target.className);

  if (evt.type == "click") {
    if (target.classList.contains("pre_head_arrows") || target.classList.contains("pre_head_titile") || target.parentNode.classList.contains("pre_head_titile")) {
      evt.stopPropagation();
//mssg("PREVENT DEFAULT");

      let arr = [
        { ctrlHead: "ptz_control_head", arrow: "pre_ptz_arrows", container: "pre_ptz_container", height: "150px" },
        { ctrlHead: "pre_img_control_head", arrow: "pre_img_arrows", container: "pre_img_container", height: "320px" },
        { ctrlHead: "advanced_control_head", arrow: "pre_adv_arrows", container: "pre_advanced_container", height: "165px" },
        { ctrlHead: "clip_control_head", arrow: "pre_clip_arrows", container: "pre_clip_container", height: "300px" },
      ];

      for (let { ctrlHead, arrow, container, height } of arr) {
        if (rlDoc.getElementById(ctrlHead).contains(target)) {
          let arrowElem = rlDoc.getElementById(arrow);
          let cntnrElem = rlDoc.getElementById(container);
          if (arrowElem.classList.contains("header_arrows_stren")) {
            cntnrElem.style.height = height;
            arrowElem.classList.remove("header_arrows_stren");
            arrowElem.classList.add("header_arrows_extend");
          } else {
            cntnrElem.style.height = "30px";
            arrowElem.classList.add("header_arrows_stren");
            arrowElem.classList.remove("header_arrows_extend");
          }
        }
      }

      return;
    }

    //rlWin.CGI.sendCommand('SetImage',       { "Image": { "bright":bright,"channel":0,"contrast":contrast,"hue":128,"saturation":128,"sharpen":128 }}, function() {}, function() {});
    //rlWin.CGI.sendCommand('StartZoomFocus', { "ZoomFocus": { "channel":0,"pos":218,"op":"FocusPos" }}, function() {}, function() {});

    // [{"cmd":"SetImage","action":0,"param":{"Image":{"bright":74,"channel":0,"contrast":125,"hue":128,"saturation":128,"sharpen":128}}}]
    // [{"cmd":"StartZoomFocus","action":0,"param":{"ZoomFocus":{"channel":0,"pos":218,"op":"FocusPos"}}}]

    if (target.id == "preset_button_day") {
      evt.stopPropagation();
      let confirmed = rlWin.confirm("Are you sure you want to switch to day preset values?");
      if (confirmed) {
        rlWin.CGI.sendCommand('SetImage', { "Image": { "bright":80,"channel":0,"contrast":124,"hue":128,"saturation":128,"sharpen":128 }}, function() {}, function() {});
        // {"ZoomFocus":{"channel":0,"focus":{"pos":218},"zoom":{"pos":34}}}
        updateControlsUI({"SetImage":{ "bright":80,"channel":0,"contrast":124,"hue":128,"saturation":128,"sharpen":128 }}, rlWin);
      }
      return;
    }
    if (target.id == "preset_button_night") {
      evt.stopPropagation();
      let confirmed = rlWin.confirm("Are you sure you want to switch to night preset values?");
      if (confirmed) {
        rlWin.CGI.sendCommand('SetImage', { "Image": { "bright":224,"channel":0,"contrast":224,"hue":128,"saturation":128,"sharpen":128 }}, function() {}, function() {});
        // {"ZoomFocus":{"channel":0,"focus":{"pos":218},"zoom":{"pos":34}}}
        updateControlsUI({"SetImage":{ "bright":224,"channel":0,"contrast":224,"hue":128,"saturation":128,"sharpen":128 }}, rlWin);
      }
      return;
    }
    if (target.id == "ptz_base_zoom_image") {
      rlWin.CGI.sendCommand('StartZoomFocus', { "ZoomFocus": { "channel":0,"pos":34,"op":"ZoomPos" }}, function() {}, function() {});
      setTimeout(() => {
        // Get the zoom-focus data from the camera.
        // [{"cmd":"GetZoomFocus","action":0,"param":{"channel":0}}]
        rlWin.CGI.sendCommand('GetZoomFocus', { "channel":0 }, function(data) { updateControlsUI(data, rlWin) }, function() { updateControlsUI("GetZoomFocus failed") });
      }, 500);
      return;
    }
    if (target.id == "presets_scheduling_button") {
      dialogManagePresetsScheduling();
      return;
    }
    if (target.id == "ptz_base_focus_image") {
      // button:
      // [{"cmd":"PtzCtrl","action":0,"param":{"channel":0,"op":"FocusStepDec","speed":32}}]
      // [{"cmd":"PtzCtrl","action":0,"param":{"channel":0,"op":"FocusStepInc","speed":32}}]

      // [{"cmd":"PtzCtrl","action":0,"param":{"channel":0,"op":"ZoomStepDec","speed":32}}]
      //rlWin.CGI.sendCommand('PtzCtrl', { "channel":0,"op":"FocusStepInc","speed":32 }, function() {}, function() {});

      // [{"cmd":"StartZoomFocus","action":0,"param":{"ZoomFocus":{"channel":0,"pos":218,"op":"FocusPos"}}}]

      // Hysteresis control: First focus to a lower value, give time for motor to adjust, then increase to target value.
      rlWin.CGI.sendCommand('StartZoomFocus', { "ZoomFocus": { "channel":0,"pos":214,"op":"FocusPos" }}, function() {}, function() {});
      setTimeout(() => {
        rlWin.CGI.sendCommand('StartZoomFocus', { "ZoomFocus": { "channel":0,"pos":218,"op":"FocusPos" }}, function() {}, function() {});
        setTimeout(() => {
          // Get the zoom-focus data from the camera.
          // [{"cmd":"GetZoomFocus","action":0,"param":{"channel":0}}]
          rlWin.CGI.sendCommand('GetZoomFocus', { "channel":0 }, function(data) { updateControlsUI(data, rlWin) }, function() { updateControlsUI("GetZoomFocus failed") });
        }, 500);
      }, 2000);

      return;
    }

    // slider:
    // [{"cmd":"StartZoomFocus","action":0,"param":{"ZoomFocus":{"channel":0,"pos":34,"op":"ZoomPos"}}}]
    // [{"cmd":"GetZoomFocus","action":0,"param":{"channel":0}}]
    // button:
    // [{"cmd":"PtzCtrl","action":0,"param":{"channel":0,"op":"ZoomStepDec","speed":32}}]
    // [{"cmd":"PtzCtrl","action":0,"param":{"channel":0,"op":"ZoomStepInc","speed":32}}]
    // [{"cmd":"GetZoomFocus","action":0,"param":{"channel":0}}]
  }
}

function updateControlsUI(data, rlWin) {
//mssg("updateControlsUI: " + data);

  if (typeof(data) == "string") {
    return;
  }

  let rlDoc = rlWin.document;

  if (data["SetImage"]) {
    // eg: {"SetImage":{ "bright":80,"channel":0,"contrast":124,"hue":128,"saturation":128,"sharpen":128 }}

    let si = data["SetImage"];

    let val = si.bright;
    let widPcnt = Math.round((val / 255) * 1000000) / 10000;
    let elem = rlDoc.getElementById("image-bright");
    let range = elem.children[0];
    let slider =  elem.children[1];
    range.style.width = widPcnt + "%";
    slider.style.left = widPcnt + "%";

    val = si.contrast;
    widPcnt = Math.round((val / 255) * 1000000) / 10000;
    elem = rlDoc.getElementById("image-contrast");
    range = elem.children[0];
    slider =  elem.children[1];
    range.style.width = widPcnt + "%";
    slider.style.left = widPcnt + "%";

    return;
  }
  if (data["ZoomFocus"]) {
    // eg: {"ZoomFocus":{"channel":0,"focus":{"pos":218},"zoom":{"pos":34}}}

    let zf = data["ZoomFocus"];

    let zoomPos = zf.zoom.pos;
    let widPcnt = Math.round((zoomPos / 34) * 1000000) / 10000;

//mssg("Zoom: widPcnt: " + widPcnt);

    let ptzZoom = rlDoc.getElementById("ptz-zoom");
    let range = ptzZoom.children[0];
    let slider =  ptzZoom.children[1];
    let info = ptzZoom.children[2];

    range.style.width = widPcnt + "%";
    slider.style.left = widPcnt + "%";
    info.textContent = zoomPos;

    let focusPos = zf.focus.pos;
    widPcnt = Math.round((focusPos / 241) * 1000000) / 10000;

//mssg("focus: widPcnt: " + widPcnt);

    let ptzFocus = rlDoc.getElementById("ptz-focus");
    range = ptzFocus.children[0];
    slider =  ptzFocus.children[1];
    info = ptzFocus.children[2];

    range.style.width = widPcnt + "%";
    slider.style.left = widPcnt + "%";
    info.textContent = focusPos;

    return;
  }
}

function savePresetsScheduling() {
  let inputIds = [
    "diag_ps_bright_day",
    "diag_ps_contrast_day",
    "diag_ps_saturation_day",
    "diag_ps_sharpness_day",
    "diag_ps_bright_night",
    "diag_ps_contrast_night",
    "diag_ps_saturation_night",
    "diag_ps_sharpness_night"
  ];

  let data = {};

  for (let inputId of inputIds) {
    let input = document.getElementById(inputId);
    let key = inputId.replace(/diag_ps_/, "");
    let val = Math.max(0, Math.min(255, parseInt(input.value)));
    data[key] = parseInt(input.value);
  }

  let slbase = document.getElementById("diag_ps_overcast_slider_base");
  let range = document.getElementById("diag_ps_overcast_slider_range");

  let slRect = slbase.getBoundingClientRect();
  let slbaseWid = slRect.right - slRect.left;

  let rangeRect = range.getBoundingClientRect();
  let rangeWid = rangeRect.right - rangeRect.left;

  // mornOvercastShift and eveOvercastShift are expressed in decimal hours,
  // thus we divide by 60.  (After rounding to the nearest full minute.)
  mornOvercastShift = Math.round((rangeWid / slbaseWid) * 30) / 60;
  eveOvercastShift = (0 - mornOvercastShift);

  data.eveOvercastShift = eveOvercastShift;
  data.mornOvercastShift = mornOvercastShift;

  let configStr = "";
  let configData = {};

  if (fs.existsSync(configFilepath)) {
    configStr = fs.readFileSync(configFilepath);
  }
  if (configStr) {
    configData = JSON.parse(configStr);
  }

  configData.presetsScheduling = data;
  initParams(configData);

  dialogManagePresetsScheduling(true);

  fs.writeFileSync(configFilepath, JSON.stringify(configData));
}

function onWindowClose() {
  if (!win.isFullscreen) {
    updateConfig("windowPos");
  }
  this.close(true);
}

function updateConfig(confType, params) {
  var confStr = readCookie("UserConfig");

  var conf;
  try {
    conf = confStr ? JSON.parse(confStr) : {};
  } catch (e) {
    conf = {};
  }

  if (confType == "windowPos") {
    conf.windowPos = { x: win.x, y: win.y, width: win.width, height: win.height };
  }

  if (confType == "farParams") {
    conf.farParams = params;
  }

  writeCookie("UserConfig", JSON.stringify(conf));
}

function getModifierKeysCode(keys) {
  var ctrl = keys.ctrlKey ? 1 : 0;
  var meta = keys.metaKey ? 2 : 0;
  var shift = keys.shiftKey ? 4 : 0;
  var alt = keys.altKey ? 8 : 0;

  return ctrl + meta + shift + alt;
}

function onKeydown(evt) {
  reolinkPageIframe = document.getElementById("reolink_page");
  let rlWin = reolinkPageIframe.contentWindow;

  if (false) {
    mssg("onKeydown : " + evt.keyCode + " " + getModifierKeysCode(evt) +
            " " + evt.altKey + " " + evt.metaKey +
            " " + evt.ctrlKey + " " + evt.shiftKey);
  }

  // Meta + Opt + F -- set full view mode.
  if (evt.keyCode == 70 && (getModifierKeysCode(evt) == 10 || getModifierKeysCode(evt) == 9)) {
    rlWin.OR_setFullView();
    return;
  }

  // Meta + Opt + Shift + F -- set full view mode and fullscreen.
  if (evt.keyCode == 70 && (getModifierKeysCode(evt) == 14 || getModifierKeysCode(evt) == 13)) {
    rlWin.OR_setFullView(true);
    return;
  }

  // Meta + Opt + V -- show/hide controls when in full view mode.
  if (evt.keyCode == 86 && (getModifierKeysCode(evt) == 10 || getModifierKeysCode(evt) == 9)) {
    rlWin.OR_showhideControls();
    return;
  }

  // Meta + R -- reload.
  if (evt.keyCode == 82 && (getModifierKeysCode(evt) == 2 || getModifierKeysCode(evt) == 1)) {
    //location.reload();
    location.href = location.href;
    return;
  }

  // Meta + Opt + S -- Open JS Scratchpad.
  if (evt.keyCode == 83 && (getModifierKeysCode(evt) == 10 || getModifierKeysCode(evt) == 9)) {
    gui.Window.open("../html/js_scratchpad.html", { position: "center" }, function(newWin) {
      scratchpadWindow = newWin;
      /*
      // Diagnostic.
      scratchpadWindow.on("loaded", function(){
        scratchpadWindow.window.postMessage(JSON.stringify({ some: "MESSAGE FROM PARENT WINDOW" }), "*");
      });
      */
    });
    return;
  }

  /*
  // Meta + Opt + I -- replace FLV in Reolink page.
  if (evt.keyCode == 73 && getModifierKeysCode(evt) == 10) {
    overrideJS();
    return;
  }
  */

  function dumpProperties(obj, leadingSpaces) {
    leadingSpaces = leadingSpaces || "";

    if (leadingSpaces.length > 256) {
      return;
    }

    for (let name in obj) {
      if (/needCleanupSourceBuffer/.test(name)) {
        mssg(leadingSpaces + "FOUND 1! ");
      }
      if (/_maxListeners/.test(name)) {
        mssg(leadingSpaces + name);
      }
      if (name == "p" || name =="s" || name == "9") {
        mssg(leadingSpaces + name);
      }
      //mssg("XXX: " + leadingSpaces + name.replace(/Buffer/, "Xuffer"));
      dumpProperties(obj[name], leadingSpaces + "  ");
    }
  }

  // Meta + Opt + P -- dump properties.
  if (evt.keyCode == 80 && getModifierKeysCode(evt) == 10) {
    //mssg("AAAAAAAA needCleanupSourceBuffer".replace(/Buffer/, "Xuffer"));
    mssg("AAAAAAAA");

    dumpProperties(rlWin.flvjs);

    mssg("ZZZZZZZZ");
    //mssg("ZZZZZZZZ needCleanupSourceBuffer".replace(/Buffer/, "Xuffer"));
    return;
  }

}

window.addEventListener("load", init);
