function OR_mssg(msg) {
  if (window.process && window.process.stdout) {
    process.stdout.write(">> " + msg + "\n");
  } else if (window.dump) {
    dump(">> " + msg + "\n");
  } else {
    console.log(">> " + msg);
  }
}

let OR_setDelay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }
)}

const __ID = document.getElementById;
const __CN = document.getElementsByClassName;
const __TN = document.getElementsByTagName;

let OR_videos;

function OR_setFullView(fullScreen) {
  let controls = document.getElementById("preRight");
  let header = document.getElementsByClassName("Header")[0];

  let fullview = controls.style.display != "none";
  let classListAction = fullview ? "add" : "remove";
  let displayStyle = fullview ? "none" : "";
  let displayStyleInv = fullview ? "" : "none";

  document.body.classList[classListAction]("or_fullview_body");
  controls.style.display = displayStyle;

  if (fullview) {
    if (fullScreen) {
      nw.Window.get().enterFullscreen();
    }
    header.addEventListener("mouseenter", OR_fullviewShowHideHeader);
    header.addEventListener("mouseleave", OR_fullviewShowHideHeader);
  } else {
    nw.Window.get().leaveFullscreen();
    header.removeEventListener("mouseenter", OR_fullviewShowHideHeader);
    header.removeEventListener("mouseleave", OR_fullviewShowHideHeader);
  }

  document.getElementById("diag_cmv_fullview").style.display = displayStyle;
  document.getElementById("diag_cmv_fullview_fullscreen").style.display = displayStyle;
  document.getElementById("diag_cmv_default_view").style.display = displayStyleInv;

  if (!fullview) {
    // In case header is showing, hide it.
    OR_fullviewShowHideHeader({ type: 'mouseleave' });
  }
}

let toolbarAncestry = {}

function OR_fullviewShowHideHeader(evt) {
  let header = document.getElementsByClassName("Header")[0];
  let box = document.getElementById("main_preview_h5_box");
  let toolbar = document.getElementsByClassName("view-toolbar")[0];

  let clAction = evt.type == "mouseenter" ? "add" : "remove";
  header.classList[clAction]("or_fullview_display_header");
  box.classList[clAction]("or_fullview_display_toolbar");

  if (evt.type == "mouseenter") {
    toolbarAncestry.nextSibling = toolbar.nextSibling;
    toolbarAncestry.parentNode = toolbar.parentNode;
    header.appendChild(toolbar);

    // In case quick settings is open, hide them.
    let controls = document.getElementById("preRight");
    controls.style.display = "none";
    controls.classList.remove("or_preright_fv_controls");
  } else {
    if (toolbarAncestry.parentNode) {
      toolbarAncestry.parentNode.insertBefore(toolbar, toolbarAncestry.nextSibling);
    }
  }
}

function OR_showhideControls() {
  let controls = document.getElementById("preRight");

  if (controls.style.display == "none") {
    controls.style.display = "";
    controls.classList.add("or_preright_fv_controls");
    // In case header is showing, hide it.
    OR_fullviewShowHideHeader({ type: 'mouseleave' });
  } else {
    controls.style.display = "none";
    controls.classList.remove("or_preright_fv_controls");
  }
}

function OR_getModifierKeysCode(keys) {
  var ctrl = keys.ctrlKey ? 1 : 0;
  var meta = keys.metaKey ? 2 : 0;
  var shift = keys.shiftKey ? 4 : 0;
  var alt = keys.altKey ? 8 : 0;

  return ctrl + meta + shift + alt;
}

function OR_onKeydown(evt) {
  if (false) {
    OR_mssg("OR_onKeydown : " + evt.keyCode + " " + OR_getModifierKeysCode(evt) +
            " " + evt.altKey + " " + evt.metaKey +
            " " + evt.ctrlKey + " " + evt.shiftKey);
  }
}

function OR_onContextmenu(evt) {
  if (evt.type == "contextmenu") {
    evt.preventDefault();
    return;
  }

  let target = evt.target;
  let cmenu = document.getElementById("dialog_context_menu_video");

  if (evt.button == 2) {
    if (target.classList.contains("h5_video-fill") && target.classList.contains("bc-h5_player")) {
      if (cmenu) {
        cmenu.style.display = "block";
        cmenu.style.left = evt.clientX + "px";
        cmenu.style.top = evt.clientY + "px";
      }
    }
  } else if (cmenu.contains(target)) {
OR_mssg("HERE HERE HERE !!!!" + target.outerHTML);
    if (target.getAttribute("name") == "radio_group_video_res" || target.getAttribute("data-name") == "radio_group_video_res") {
      let radioElem = target.hasAttribute("data-name") ? target.previousElementSibling : target;

      let map = { "0": "preview_play_substream", "1": "preview_play_balancestream", "2": "preview_play_mainstream" }
OR_mssg("    radioElem: " + radioElem.name + "    " + radioElem.getAttribute("data-sel") + "    " + map[radioElem.getAttribute("data-sel")]);
      document.getElementById(map[radioElem.getAttribute("data-sel")]).click();
    }
  } else {
    cmenu.style.display = "none";
  }

OR_mssg("OR_onContextmenu: " + evt.type + "    " + evt.button + "    " + evt.target + "    " + evt.target.id + "    " + evt.target.className + "    " + cmenu);
}

function updateInlineStyle(elem, param, value, important) {
  let currentStyle = elem.getAttribute("style") || "";
  let newParamStyle = value ? param + ": " + value + (important ? " !important;" : "") : "";

  if (!currentStyle && value) {
    elem.setAttribute("style", newParamStyle);
  } else if (currentStyle.indexOf(param + ":") > -1) {
    let regex = new RegExp(param + ": [^;]*;");
    elem.setAttribute("style", currentStyle.replace(regex, newParamStyle).trim());
  } else if (value) {
    elem.setAttribute("style", (currentStyle + " " + newParamStyle).trim());
  }

  if (!elem.getAttribute("style")) {
    elem.removeAttribute("style");
  }
}

function OR_onWheel(evt) {
  let zoomIn = evt.deltaY < 0;

  if (!OR_videos || !OR_videos.length) {
    OR_videos = Array.from(document.getElementsByTagName("video"));
  }

  let video = OR_videos[0];
  if (video) {
    let videoParent = video.parentNode;
    let videoParentRect = videoParent.getBoundingClientRect();
    let videoParentWid = videoParentRect.right - videoParentRect.left;
    let videoParentHt = videoParentRect.bottom - videoParentRect.top;

    let videoRect = video.getBoundingClientRect();
    let videoWid = videoRect.right - videoRect.left;
    let videoHt = videoRect.bottom - videoRect.top;

    // TODO: Find out why video.style is not working so we don't have to use
    // the updateInlineStyle hack.

    let newWidth = zoomIn ? parseInt(videoWid + (videoWid / 20)) : parseInt(videoWid - (videoWid / 20));
    let newHeight = zoomIn ? parseInt(videoHt + (videoHt / 20)) : parseInt(videoHt - (videoHt / 20));

    if (newHeight > videoParentHt) {
      // TODO: WHY DOESN'T SETTING video.style.width/video.style.height ??????
      // Using updateInlineStyle hack instead.
      //video.style.width = newWidth + "px !important";
      //video.style.height = newHeight + "px !important";
      updateInlineStyle(video, "width", newWidth + "px", true);
      updateInlineStyle(video, "height", newHeight + "px", true);

      let videoX = evt.clientX - videoRect.left;
      let videoY = evt.clientY - videoRect.top;

  OR_mssg("OR_onWheel: " + videoX + "," + videoY + "    zoomIn: " + zoomIn + "    " + OR_videos.length + "    " + video.style.transform);

      let videoOffsetX = 0;
      let videoOffsetY = 0;

      let transform = video.style.transform;
      if (transform) {
        let arr = transform.split("px, ");
        videoOffsetX = parseInt(arr[0].replace(/[^0-9-]+/g, ""));
        videoOffsetY = parseInt(arr[1].replace(/[^0-9-]+/g, ""));
      }

      videoOffsetX = zoomIn ? Math.round(videoOffsetX - (videoX / 20)) : Math.round(videoOffsetX + (videoX / 20));
      videoOffsetY = zoomIn ? Math.round(videoOffsetY - (videoY / 20)) : Math.round(videoOffsetY + (videoY / 20));
      video.style.transform = "translate(" + videoOffsetX + "px, " + videoOffsetY + "px)";

    } else {
      updateInlineStyle(video, "width");
      updateInlineStyle(video, "height");
      video.style.transform = "";
      video.style.transform = "";
    }

OR_mssg("    videoParent: " + videoParentWid + "x" + videoParentHt + "    video: " + videoWid + "x" + videoHt + "    " + video.outerHTML + "    " + video.style.transform);

  }
}

let OR_videoDragInitData = {};

function OR_onMousedown(evt) {
  let initialTarget = evt.target;
  let videoParentWid;
  let videoParentHt;
  let videoWidth;
  let videoHeight;

  if (initialTarget.localName == "video") {
    let video = initialTarget;
    video.addEventListener("mousemove", OR_onVideoDrag);
    window.addEventListener("mouseup", () => {
      video.removeEventListener("mousemove", OR_onVideoDrag);
    }, { once: true });
    OR_videoDragInitData.x = evt.clientX;
    OR_videoDragInitData.y = evt.clientY;
    OR_videoDragInitData.videoOffsetX = 0;
    OR_videoDragInitData.videoOffsetY = 0;

    let transform = video.style.transform;
    if (transform) {
      let arr = transform.split("px, ");
      OR_videoDragInitData.videoOffsetX = parseInt(arr[0].replace(/[^0-9-]+/g, ""));
      OR_videoDragInitData.videoOffsetY = parseInt(arr[1].replace(/[^0-9-]+/g, ""));
OR_mssg("OR_onMousedown: " + OR_videoDragInitData.videoOffsetX + "," + OR_videoDragInitData.videoOffsetY);
    }

    let videoParent = video.parentNode;
    let videoParentRect = videoParent.getBoundingClientRect();
    videoParentWid = videoParentRect.right - videoParentRect.left;
    videoParentHt = videoParentRect.bottom - videoParentRect.top;

    let videoRect = video.getBoundingClientRect();
    videoWidth = videoRect.right - videoRect.left;
    videoHeight = videoRect.bottom - videoRect.top;
  }

  function OR_onVideoDrag(evt) {
    let video = initialTarget;
    let videoOffsetX = evt.clientX - OR_videoDragInitData.x + OR_videoDragInitData.videoOffsetX;
    let videoOffsetY = evt.clientY - OR_videoDragInitData.y + OR_videoDragInitData.videoOffsetY;

    videoOffsetX = Math.min(0, Math.max(videoOffsetX, videoParentWid - videoWidth));
    videoOffsetY = Math.min(0, Math.max(videoOffsetY, videoParentHt - videoHeight));

OR_mssg("OR_onVideoDrag:     translate(" + videoOffsetX + "px, " + videoOffsetY + "px)");

    video.style.transform = "translate(" + videoOffsetX + "px, " + videoOffsetY + "px)";
  }
}

window.addEventListener("keydown", OR_onKeydown);
window.addEventListener("contextmenu", OR_onContextmenu);
window.addEventListener("mousedown", OR_onContextmenu);
window.addEventListener("mousedown", OR_onMousedown);
window.addEventListener("wheel", OR_onWheel);
