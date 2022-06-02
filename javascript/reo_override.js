PlayerPreview.previewChangePlayStreamSel = function(sel) {
OR_mssg("PlayerPreview.previewChangePlayStreamSel YYY:    sel: " + sel);

  // We're taking over.  Set default sel to 1.
  sel = 1;

  let streamCB = document.getElementById("dialog_context_menu_video");

  let elems = Array.from(streamCB.children);
  for (let elem of elems) {
    if (elem.name == "radio_group_video_res" && elem.checked) {
      sel = parseInt(elem.getAttribute("data-sel"));
    }
  }

  PlayerPreview.previewStreamSel = parseInt(sel);
  $('.pb_play_start_pop_div .selected').removeClass('selected');

  clearInterval(PlayerPreview.streamSelectorTimerId);
  PlayerPreview.streamSelectorTimerId = false;

  switch (PlayerPreview.previewStreamSel) {
    case EnumStreamType.CLEAR:
      if (PCE.isReadable("videoClip")) {

        $("#pre_clip_container").hide();
        ViewClip.setSchedule(false);
      }
      $("#preview_play_mainstream").addClass('selected');

      break;
    case EnumStreamType.FLUENT:
      if (PCE.isReadable("videoClip")) {

        $("#pre_clip_container").show();
        ViewClip.setSchedule(true);
      }
      $("#preview_play_substream").addClass('selected');
      break;
    case EnumStreamType.CLIP:
      if (PCE.isReadable("videoClip")) {

        $("#pre_clip_container").show();
        ViewClip.setSchedule(true);
      }
      $("#preview_play_substream").addClass('selected');
      break;
    case EnumStreamType.BALANCED:
      if (PCE.isReadable("videoClip")) {

        $("#pre_clip_container").hide();
        ViewClip.setSchedule(false);
      }
      $("#preview_play_balancestream").addClass('selected');
      break;
    case EnumStreamType.AUTO:
      if (PCE.isReadable("videoClip")) {

        $("#pre_clip_container").hide();
        ViewClip.setSchedule(false);
      }
      $("#preview_play_auto").addClass('selected');
      break;
  }

};

