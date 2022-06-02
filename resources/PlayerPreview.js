/**
 * PlayerPreview ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„æ’­æ”¾æŽ§åˆ¶
 */
function PlayerPreview() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(PlayerPreview);

(function() {

  PlayerPreview.setVolume = function(v) {
    $('#preview_sound_slid').slider2({
      "value": v
    });
    window.localStorage.setItem("/player/preview/volume", v);
  };

  PlayerPreview.getVolume = function(v) {
    return $('#preview_sound_slid').slider2('value');
  };

  PlayerPreview.constructRTMPUrl = function(chId, streamType) {
    var streamShortNames = [
      'sub', 'ext', 'main', 'main', 'mobile'
    ];

    if (ControllerLogin.abilities.abilityChn[chId] && ControllerLogin.abilities.abilityChn[chId].live.ver == 2) {

      if (streamType === EnumStreamType.BALANCED) {
        streamType = EnumStreamType.FLUENT;
      }
    }

    var url;

    if ( flashCheck() ) {

      url = 'rtmp://' + window.location.hostname + ':' + ControllerFlash.rtmpPort + '/bcs/channel' + chId + '_' + streamShortNames[streamType] + '.bcs' +
        '?token=' + ControllerLogin.token +
        '&channel=' + chId +
        '&stream=' + EnumRTMPStreamType[streamType];
    } else {
      // 'http://192.168.3.82:80/flv?port=1935&app=bcs&stream=channel0_main.bcs';
      var port = window.location.port ? ':' + window.location.port : '';
      url = window.location.protocol + '//' + window.location.hostname + port
        + '/flv?port=' + ControllerFlash.rtmpPort + '&app=bcs&stream=channel' + chId + '_' + streamShortNames[streamType] + '.bcs&token=' + ControllerLogin.token;
    }

    console.dbg('PlayerPreview.constructRTMPUrl:', url);
    return url;
  }

  PlayerPreview.init = function() {

    this.waiter = new ViewWaiting({
      "id": "pv-waiter"
    });

    this.sliderIsMouseDown = false;

    this.previewSoundVal = 0;

    this.previewStreamSel = EnumStreamType.FLUENT;

    this.streanIntervalId = 0;
    this.extendIntervalId = 0;
    this.isShow = true;

    this.rightSections = []; // real show items

    this.allRightSections = []; // all right view items

    this.isRightViewShow = true;

    this.presetListItemSel = 0;

    this.trigger('init');

    this.initEvents();

    this.initPreviewRightData();

    ViewPTZAction.initUI && ViewPTZAction.initUI();

    ViewPTZPreset.initUI && ViewPTZPreset.initUI();

    ViewEncode.initUI && ViewEncode.initUI();

    ViewOSD.initUI && ViewOSD.initUI();

    ViewImage.initUI && ViewImage.initUI();

    ViewISP.initUI && ViewISP.initUI();

    ViewClip.initUI && ViewClip.initUI();

    $('.pre_head_titile').on('click', function() {
      var selView = ViewManager.getSelectedView();
      if (ViewManager.getMode() !== EnumCurState.PREVIEW || !selView) {
        return;
      }

      if ($(this).parent().parent().height() < 50 && !PlayerPreview.isRefreshingRightBar) {
        $('#view-block-PREVIEW-' + selView.getId() + '-toolbar').click();
      }
    });

    delete this.init;
  };

  PlayerPreview.initEvents = function() {

    PlayerPreview.streamSelectorTimerId = false;

    // å…¨éƒ¨æ’­æ”¾æŒ‰é’®
    $('#preview_button_start').on('click', function() {
      if ($('.popover-content #pv-stream-selector').length > 0) {
        return;
      }

      if (PlayerPreview.streamSelectorTimerId) {
        clearInterval(PlayerPreview.streamSelectorTimerId);
      }

      PlayerPreview.streamSelectorTimerId = setInterval(function() {

        if (false === PlayerPreview.streamSelectorTimerId) {
          return;
        }

        if ($('#preview_button_start:hover').length == 1 || $('#pv-stream-selector .pb_play_start_pop_a:hover').length > 0) {
          return;
        }

        if ($('.popover-content #pv-stream-selector').length > 0) {
          $('#preview_button_start').click();
        }

        clearInterval(PlayerPreview.streamSelectorTimerId);
        PlayerPreview.streamSelectorTimerId = false;

      }, 3000);
    }).popover({
      html: true,
      trigger: "click",
      placement: 'top',
      content: function() {

        return $('#preview_play_popover').html();
      }
    });

    // ç›‘å¬ç æµç±»åž‹åˆ‡æ¢
    // å½“å‰é¢„è§ˆå¤„äºŽåœæ­¢çŠ¶æ€ï¼Œæˆ–è€…åˆ‡æ¢äº†ä¸åŒçš„ç æµç±»åž‹æ—¶ï¼Œéœ€è¦åšå‡ºå¤„ç†
    $("body").on("click", "a#preview_play_mainstream", function() {
      var chObjId = ViewManager.getSelectedView().getChannelId();   // èŽ·å–å½“å‰é¢„è§ˆçš„é€šé“id
      var chObj = ChannelManager.get(chObjId);
      if($(this).hasClass('disabled')) {
        bc_alert(ControllerFlash.h265NotSupport, 'error');
        return;
      }
      if(chObj.getStatus() === EnumChannelStatus.CLOSED || !$(this).hasClass('selected')) {
        PlayerPreview.trigger('playAllStream', [EnumStreamType.CLEAR]);
        $('.dropdown-select-content .selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    $("body").on("click", "a#preview_play_balancestream", function() {
      var chObjId = ViewManager.getSelectedView().getChannelId();
      var chObj = ChannelManager.get(chObjId);
      if($(this).hasClass('disabled')) {
        bc_alert(ControllerFlash.h265NotSupport, 'error');
        return;
      }
      if(chObj.getStatus() === EnumChannelStatus.CLOSED || !$(this).hasClass('selected')) {
        PlayerPreview.trigger('playAllStream', [EnumStreamType.BALANCED]);
        $('.dropdown-select-content .selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    $("body").on("click", "a#preview_play_substream", function() {
      var chObjId = ViewManager.getSelectedView().getChannelId();
      var chObj = ChannelManager.get(chObjId);
      if($(this).hasClass('disabled')) {
        bc_alert(ControllerFlash.h265NotSupport, 'error');
        return;
      }
      if(chObj.getStatus() === EnumChannelStatus.CLOSED || !$(this).hasClass('selected')) {
        PlayerPreview.trigger('playAllStream', [EnumStreamType.FLUENT]);
        $('.dropdown-select-content .selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    $("body").on("click", "a#preview_play_auto", function() {
      var chObjId = ViewManager.getSelectedView().getChannelId();
      var chObj = ChannelManager.get(chObjId);
      if($(this).hasClass('disabled')) {
        bc_alert(ControllerFlash.h265NotSupport, 'error');
        return;
      }
      if(chObj.getStatus() === EnumChannelStatus.CLOSED || !$(this).hasClass('selected')) {
        PlayerPreview.trigger('playAllStream', [EnumStreamType.AUTO]);
        $('.dropdown-select-content .selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    // å…¨éƒ¨æš‚åœæŒ‰é’®
    $("#preview_stopall_button").click(function() {
      PlayerPreview.trigger('stopAllStream');
    });

    // default button

    $("#preview_default_button").click(function() {
      PlayerPreview.trigger('setDefaultHSB');
    });

    $("#channels_control_head").click(PlayerPreview.onRightHeadClick);

    $("#ptz_control_head").click(PlayerPreview.onRightHeadClick);

    $("#pre_img_control_head").click(PlayerPreview.onRightHeadClick);

    $("#advanced_control_head").click(PlayerPreview.onRightHeadClick);

    $("#clip_control_head").click(PlayerPreview.onRightHeadClick);

    delete this.initEvents;
  };

  PlayerPreview.reload = function() {
    PlayerPreview.initRightViewPos();
    ViewManager.updateView();

    ViewPTZPreset.refreshPresetMenuSel();

    ViewManager.showScreenByChannels();
    PlayerPreview.showPTZByDevice();
    PlayerPreview.initPreviewPop();
  };


  PlayerPreview.initPreviewRightData = function() {
    // only init once
    var channelsView = document.getElementById("preview_channels_views");
    var channelsHeaderView = document.getElementById("pre_channels_arrows");
    var ptzView = document.getElementById("pre_ptz_container");
    var ptzHeaderView = document.getElementById("pre_ptz_arrows");
    var imgView = document.getElementById("pre_img_container");
    var imgHeaderView = document.getElementById("pre_img_arrows");
    var advanceView = document.getElementById("pre_advanced_container");
    var advHeaderView = document.getElementById("pre_adv_arrows");
    var clipView = document.getElementById("pre_clip_container");
    var clipHeaderView = document.getElementById("pre_clip_arrows");

    var previewChannelsItem = new PreviewCtrolItem();
    previewChannelsItem.name = EnumPreRightItem.CHANNELS;
    previewChannelsItem.containerView = channelsView;
    previewChannelsItem.headerView = channelsHeaderView;
    previewChannelsItem.maxHeight = channelsView.offsetHeight;
    previewChannelsItem.isShow = true;

    PlayerPreview.allRightSections[0] = previewChannelsItem;

    var previewPTZItem = new PreviewCtrolItem();
    previewPTZItem.name = EnumPreRightItem.PTZ;
    previewPTZItem.containerView = ptzView;
    previewPTZItem.headerView = ptzHeaderView;
    previewPTZItem.maxHeight = ptzView.offsetHeight;
    previewPTZItem.isShow = true;

    PlayerPreview.allRightSections[1] = previewPTZItem;

    var previewImgItem = new PreviewCtrolItem();
    previewImgItem.name = EnumPreRightItem.IMG;
    previewImgItem.containerView = imgView;
    previewImgItem.headerView = imgHeaderView;
    previewImgItem.maxHeight = imgView.offsetHeight;
    previewImgItem.isShow = true;

    PlayerPreview.allRightSections[3] = previewImgItem;

    var previewAdvItem = new PreviewCtrolItem();
    previewAdvItem.name = EnumPreRightItem.ADV;
    previewAdvItem.containerView = advanceView;
    previewAdvItem.headerView = advHeaderView;
    previewAdvItem.maxHeight = advanceView.offsetHeight;
    previewAdvItem.isShow = true;

    PlayerPreview.allRightSections[4] = previewAdvItem;

    previewAdvItem = new PreviewCtrolItem();
    previewAdvItem.name = EnumPreRightItem.CROP;
    previewAdvItem.containerView = clipView;
    previewAdvItem.headerView = clipHeaderView;
    previewAdvItem.maxHeight = clipView.offsetHeight;
    previewAdvItem.isShow = true;

    PlayerPreview.allRightSections[5] = previewAdvItem;

    $('#basic_setting_header > span').on('click', function() {
      $('#basic_setting_header .selected').removeClass('selected');
      $(this).addClass('selected');
      $('.basic_setting_box.visible').removeClass('visible');
      $('#' + $(this).attr('bc-bind-id')).addClass('visible');
    });

  };

  PlayerPreview.initRightViewPos = function() {

    PlayerPreview.rightSections = [];

    var viewObj = ViewManager.getSelectedView();
    var ch;
    if (ControllerMain.deviceInfo.channelNum > 1) {

      $("#preview_channels_views").show();
      PlayerPreview.rightSections
        .push(PlayerPreview.allRightSections[0]);
    } else {

      $("#preview_channels_views").hide();
    }

    if (viewObj && viewObj.getChannelId() !== null) {

      if (ControllerLogin.chkPermission('ptzCtrl', 'exec', 0)) {

        $("#pre_ptz_container").show();
        PlayerPreview.rightSections.push(PlayerPreview.allRightSections[1]);
      } else {
        $("#pre_ptz_container").hide();
      }

    }
    PlayerPreview.rightSections.push(PlayerPreview.allRightSections[3]);

    $("#pre_advanced_container").show();
    PlayerPreview.rightSections.push(PlayerPreview.allRightSections[4]);

    if (PCE.isReadable("videoClip")) {

      PlayerPreview.rightSections.push(PlayerPreview.allRightSections[5]);
    }
    else {

      $(PlayerPreview.allRightSections[5].containerView).hide();
    }

    for (var i = 0; i < PlayerPreview.rightSections.length; ++i) {

      if (0 == i) {

        PlayerPreview.rightSections[i].containerView.style.top = 0 + 'px';
      } else {
        var curViewTop = 0;
        for (var j = 1; j < i + 1; j++) {

          if (PlayerPreview.rightSections[j - 1].isShow) {

            curViewTop += PlayerPreview.rightSections[j - 1].maxHeight;
          } else {

            curViewTop += 30;
          }
        }
        PlayerPreview.rightSections[i].containerView.style.top = curViewTop +
          'px';
      }
    }

    $("#ptz_control_head").click();

  };

  PlayerPreview.redrawRightView = function(chId) {

    var ptType = ControllerLogin.abilities.abilityChn[chId].ptzType.ver;
    switch (ptType) {
      case EnumPTZType.AF:
        $('#ptz_base_focus_reduce').attr("style", "");
        [
          'pre_preset_preset_container',
          'ptz_dir_control_container',
          'pre_preset_cruise_container',
          'ptz_base_iris_reduce',
          'ptz_base_iris_image',
          'ptz_base_iris_add'
        ].forEach(function(v) {
          $('#' + v).hide();
        });
        ['prev_preset_menu_container', 'ptz_speed'].forEach(function(v) {
          $('.' + v).hide();
        });
        [
          'ptz_base_zoom_reduce',
          'ptz_base_zoom_image',
          'ptz_base_zoom_add',
          'ptz_base_focus_reduce',
          'ptz_base_focus_image',
          'ptz_base_focus_add'
        ].forEach(function(v) {
          $('#' + v).show();
        });
        $('#ptz_base_control_container').css({
          "float": "none",
          "margin-left": "auto",
          "margin-right": "auto",
          "margin-top": "0px",
          "width": "95%"
        });
        $('#ptz_base_focus_reduce').css({
          "margin-left": 16
        });
        PlayerPreview.allRightSections[1].maxHeight = 450;
        $('#ptz-title').text('Optical Zoom');
        break;
      case EnumPTZType.PT:
        $('#ptz_base_control_container').attr("style", "margin-top: 33px;");
        $('#ptz_base_focus_reduce').attr("style", "");
        $("#pre_preset_menu_preset_view").click();

        [
          'pre_preset_preset_container',
          'ptz_dir_control_container'
        ].forEach(function(v) {
          $('#' + v).show();
        });
        $('#ptz_dir_control_container').css({ 'margin-left': 60 });
        [
          'ptz_base_zoom_reduce',
          'ptz_base_zoom_image',
          'ptz_base_zoom_add',
          'ptz_base_focus_reduce',
          'ptz_base_focus_image',
          'ptz_base_focus_add',
          'ptz_base_iris_reduce',
          'ptz_base_iris_image',
          'ptz_base_iris_add',
          'pre_preset_cruise_container',
          'pre_preset_menu_cruise_view',
          'ptz_base_control_container'
        ].forEach(function(v) {
          $('#' + v).hide();
        });
        $('.ptz_speed').hide();
        $('.prev_preset_menu_container').css({ 'visibility': 'hidden', 'margin-top': '-40px' });
        PlayerPreview.allRightSections[1].maxHeight = 410;
        $('#ptz-title').text('PTZ');
        break;
      case EnumPTZType.PTZ:
      case EnumPTZType.PTZS:
        $('#ptz_base_control_container').attr("style", "");
        $('#ptz_base_focus_reduce').attr("style", "");
        $("#pre_preset_menu_preset_view").click();

        [
          'ptz_base_zoom_reduce',
          'ptz_base_zoom_image',
          'ptz_base_zoom_add',
          'ptz_base_focus_reduce',
          'ptz_base_focus_image',
          'ptz_base_focus_add',
          'ptz_base_iris_reduce',
          'ptz_base_iris_image',
          'ptz_base_iris_add',
          'pre_preset_preset_container',
          'ptz_dir_control_container',
          'ptz_base_control_container'
        ].forEach(function(v) {
          $('#' + v).show();
        });
        $('#pre_preset_cruise_container').hide();
        ['prev_preset_menu_container', 'ptz_speed'].forEach(function(v) {
          $('.' + v).show();
        });
        PlayerPreview.allRightSections[1].maxHeight = 450;
        $('#ptz-title').text('PTZ');
        break;
      case EnumPTZType.GM8136S_PTZ:
        $('#ptz_base_control_container').attr("style", "");
        $('#ptz_base_focus_reduce').attr("style", "");
        $("#pre_preset_menu_preset_view").click();

        [
          'ptz_base_zoom_reduce',
          'ptz_base_zoom_image',
          'ptz_base_zoom_add',
          'ptz_base_focus_reduce',
          'ptz_base_focus_image',
          'ptz_base_focus_add',
          'pre_preset_preset_container',
          'ptz_dir_control_container',
          'ptz_base_iris_reduce',
          'ptz_base_iris_image',
          'ptz_base_iris_add'
        ].forEach(function(v) {
          $('#' + v).show();
        });
        $('#pre_preset_cruise_container').hide();
        ['prev_preset_menu_container'].forEach(function(v) {
          $('.' + v).show();
        });
        $('.ptz_speed').hide();
        PlayerPreview.allRightSections[1].maxHeight = 410;
        $('#ptz-title').text('PTZ');
        $("#slider_ptz_speed").slider({
          "value": 10
        });
        break;
    }

    if (PCE.getFeatureVersion('ptzCtrl', chId) == 2) {
      $('#ptz_upgraded_base_control_container').show();
      $('#ptz_base_control_container').hide();
    }

    if(PCE.getFeatureVersion('ptzDirection', chId) == 1) {
      [
        'up_lef',
        'up_right',
        'center',
        'down_lef',
        'down_right'
      ].forEach(function(v) {
        $('#ptz_dir_' + v).addClass('invisible');
      });
    }

    if (ControllerLogin.chkVersion("ptzPatrol", EnumPatrolType.NONE, chId)) {
      $('#pre_preset_menu_preset_view').click();
      if (ptType !== EnumPTZType.AF) {
        PlayerPreview.allRightSections[1].maxHeight -= 30;
      }
      $('.prev_preset_menu_container').hide();
    } else {
      $('.prev_preset_menu_container').show();
    }
    var minHeight = 30;
    for (var i = 0; i < PlayerPreview.rightSections.length; ++i) {

      var maxHeight = PlayerPreview.rightSections[i].maxHeight;
      if (PlayerPreview.rightSections[i].isShow) {
        PlayerPreview.extendView(i, PlayerPreview.rightSections, maxHeight);
      } else {
        PlayerPreview.strenView(i, PlayerPreview.rightSections, minHeight);
      }
    }
  };

  PlayerPreview.onRightHeadClick = function() {
    var minHeight = 30;
    for (var i = 0; i < PlayerPreview.rightSections.length; ++i) {

      var maxHeight = PlayerPreview.rightSections[i].maxHeight;
      if (EnumPreRightItem[$(this).attr('contain-name')] == PlayerPreview.rightSections[i].name) {
        PlayerPreview.extendClick(i,
          PlayerPreview.rightSections,
          minHeight, maxHeight);
      } else if (PlayerPreview.rightSections[i].isShow) {
        PlayerPreview.extendClick(i,
          PlayerPreview.rightSections,
          minHeight, maxHeight);
      }
    }
  };

  // extend view click
  PlayerPreview.extendClick = function(clickWitch, controlViews, minHeight, maxHeight) {

    var previewCtrolItem = controlViews[clickWitch];
    if (previewCtrolItem.isShow) {

      previewCtrolItem.isShow = false;
      PlayerPreview.strenView(clickWitch, controlViews, minHeight);
    } else {

      previewCtrolItem.isShow = true;
      PlayerPreview.extendView(clickWitch, controlViews, maxHeight);
    }
  };

  PlayerPreview.strenView = function(clickWitch, controlViews, minHeight) {
    var controlView = controlViews[clickWitch].containerView;
    var headerView = controlViews[clickWitch].headerView;
    headerView.className = "pre_head_arrows header_arrows_stren";
    var itemViewHeights = new Array();

    for (var i = 0; i < controlViews.length; ++i) {

      var itemView = controlViews[i].containerView;
      if (clickWitch == i) {

        itemViewHeights.push(minHeight);
      } else {

        itemViewHeights.push(itemView.offsetHeight);
      }
    }

    for (var j = 0; j < controlViews.length; ++j) {

      var $itemView = $(controlViews[j].containerView);
      if (clickWitch == j) {

        $itemView.css({
          height: minHeight
        });
      } else if (j > clickWitch) {

        var itemTop = 0
        for (var k = 0; k < itemViewHeights.length; ++k) {

          if (k < j) {

            itemTop = itemTop + itemViewHeights[k];
          }
        }
        $itemView.css({
          top: itemTop
        });
      }

    }
  };

  PlayerPreview.extendView = function(clickWitch, controlViews, maxHeight) {

    var controlView = controlViews[clickWitch].containerView;
    var headerView = controlViews[clickWitch].headerView;
    headerView.className = "pre_head_arrows header_arrows_extend";
    var itemViewHeights = new Array();

    for (var i = 0; i < controlViews.length; ++i) {

      var itemView = controlViews[i].containerView;
      if (clickWitch == i) {

        itemViewHeights.push(maxHeight);
      } else {

        itemViewHeights.push(itemView.offsetHeight);
      }
    }

    for (var j = 0; j < controlViews.length; ++j) {

      var $itemView = $(controlViews[j].containerView);
      if (clickWitch == j) {

        $itemView.css({
          height: maxHeight
        });
      } else if (j > clickWitch) {

        var itemTop = 0
        for (var k = 0; k < itemViewHeights.length; ++k) {

          if (k < j) {

            itemTop = itemTop + itemViewHeights[k];
          }
        }
        $itemView.css({
          top: itemTop
        });
      }

    }

  };

  PlayerPreview.previewChangePlayStreamSel = function(sel) {
OR_mssg("PlayerPreview.previewChangePlayStreamSel:    sel: " + sel);

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

  PlayerPreview.initPreviewPop = function() {
    PlayerPreview.previewChangePlayStreamSel(PlayerPreview.previewStreamSel);
    if (null != g_device && g_device.isIPC) {

      $("#preview_sub_auto_divider").hide();
      $("#preview_play_auto").hide();
    } else {

      $("#preview_sub_auto_divider").show();
      $("#preview_play_auto").show();
    }
  };


  /*
   * preview stream change callback
   *
   */
  PlayerPreview.streamDidChangeCallback = function() {

    $('#channelItems > .CH_btn-group').each(function() {
      var channel = parseInt($(this).attr('bc-channel-id'));
      switch (g_channelStreamType[channel]) {
        case EnumStreamType.CLEAR:
          $(this).find('.text_right').text('M');
          break;
        case EnumStreamType.BALANCED:
          $(this).find('.text_right').text('B');
          break;
        case EnumStreamType.FLUENT:
          $(this).find('.text_right').text('F');
          break;
        case EnumStreamType.CLIP:
          $(this).find('.text_right').text('C');
          break;
        case EnumStreamType.AUTO:
          $(this).find('.text_right').text('A');
        default:
          break;
      }
    });

  };

  PlayerPreview.showPTZByDevice = function() {

    if (g_device.hasPtz) {

      $("#preview_ptz_layout").show();
      $("#OSDContainer").css({
        "top": "326"
      });
    } else {

      $("#preview_ptz_layout").hide();
      $("#OSDContainer").css({
        "top": "0"
      });
    }
  };



})();
