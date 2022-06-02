/**
 * h5 player using flvjs
 */
function BcH5Player() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(BcH5Player);

(function($) {

  BcH5Player.init = function(newStream, settingCenterplayerWrap) {

    this.chObj = ChannelManager.get(0);

    if (this.chObj.getViewId() === null) {
      return;
    }
    this.networkErrTime = 3;  // 超过 networkErrTime 秒 就进入loading状态
    // #osd-player 和 #motion-player 情况
    this.isSettingCenter = !!settingCenterplayerWrap;
    this.h5playerWrapper = $('.h5_player_wrapper');
    this.flashPlayerWrapper = $('#preview_plugin_container');
    this.playbackUrlSet = [];  // playbackResources
    this.timelineWalkTimer = null;
    this.jumpToEndBufferTimer = null;

    this.isloaded = false;
    this.stretching = EnumFlvStretching.exactfit;
    // 直播时连续出现0速度的次数
    this.zeroSpeedCounts = 0;

    this.seekTo = this.chObj.seekTo;

    this._streamType = newStream !== undefined ? newStream : this.chObj.getStream();

    this._initMode = this.chObj.getMode();

    this._volume = parseInt(window.localStorage.getItem('/player/' + this._initMode.toLowerCase() + '/volume'))/100;

    this.infoElm = {
      bshow:false,
      elm:$('#bc-h5-watch'),
      elm_close:$('#bc-h5-watch-close'),
      elm_loader : $('#bc-h5-watch-loader'),
      elm_player : $('#bc-h5-watch-player'),
      elm_meta : $('#bc-h5-watch-meta'),
      elm_cursegidx : $('#bc-h5-watch-cursegidx'),
      elm_drops:    $('#bc-h5-watch-drops'),
      elm_decode  : $('#bc-h5-watch-decode'),
      elm_corrupt  : $('#bc-h5-watch-corrupt'),
      elm_speed:    $('#bc-h5-watch-speed'),
      elm_segcount:   $('#bc-h5-watch-segcount'),
      elm_url:    $('#bc-h5-watch-url'),
      elm_current:$('#bc-h5-watch-current'),
      elm_sbstart:$('#bc-h5-watch-sbstart'),
      elm_sbend:$('#bc-h5-watch-sbend'),
      elm_fixes:$('#bc-h5-watch-fixes'),
      elm_err:    $('#bc-h5-watch-err'),
    };

    try {
      // ------ invoke h5 player ------
      console.dbg('------ Run H5 player ------');
      this.h5playerWrapper.removeClass('hide').removeClass('vis-hide');
      this.flashPlayerWrapper.addClass('hide');

      if (this._initMode === EnumCurState.PLAYBACK) {
        if (this.flv_player && this.chObj.url === this.playUrl) {  // 在当前文件seek
          this.$liveVideo[0].currentTime = this.chObj.seekTo;
          this.$liveVideo[0].play();
          return;
        }
      }

      if ( typeof this.flv_player !== "undefined" && this.flv_player !== null ) {
        this.destroy();
      }

      $('#osd-player .h5_player_wrapper').remove();
      $('#motion-player .h5_player_wrapper').remove();
      $('#' + _getRawId(0, 'PREVIEW')).remove();
      $('#' + _getRawId(0, 'PLAYBACK')).remove();

      var _$player;

      if ( !this.isSettingCenter ) {
        this.h5playerWrapper.append('<div id="' + _getRawId(0, this._initMode) + '"></div>');
        $("#" + _getRawId(0, this._initMode)).css({
          "position": "relative",
          "z-index": "99",
          "height": "1200px",
        });
        _$player = $('#' + _getRawId(0, this._initMode));

      } else {
        $(settingCenterplayerWrap).append('<div class="h5_player_wrapper"></div>');
        this.h5playerWrapper = $(settingCenterplayerWrap).find('.h5_player_wrapper');
        _$player = this.h5playerWrapper;
      }

      _$player.append(
        '<video class="h5_video-fill bc-h5_player" autoplay muted></video>' +
        '<img class="bc-h5_pause status-box ab-center" src="">' +
        '<img class="bc-h5_disconnect status-box ab-center" src="./img/flv/disconnect.png">' +
        '<img class="bc-h5_nofile status-box ab-center" src="./img/flv/nofile.png">' +
        '<a class="bc-h5_canplay ab-center"><img src="./img/flv/webapp_play.png"></a>' +
        '<div class="bc-h5_loading status-box ab-center">' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
        '</div>'
      );

      var _this = this;

      var contextmenuOption = [
        {
          text: "Show Media Info",
          icon: "",
          alias: "1-1",
          action: function() {
            _this.showInfo(true);
          }
        },
        {
          type: "splitLine"
        },
        {
          text: "reolink player V1.0.0.1",
          icon: "",
          alias: "1-2",
          action: function() {}
        }
      ];
      $(".bc-h5_player").contextmenu({
        width: 350,
        items: contextmenuOption,
        onContextMenu:true,
        onShow: true,
        alias: 'h5-context'
      });

      this.statusImg = this.h5playerWrapper.find('.status-box');
      this.disconnectImg = this.h5playerWrapper.find('.bc-h5_disconnect');
      this.nofileImg = this.h5playerWrapper.find('.bc-h5_nofile');
      this.loadingImg = this.h5playerWrapper.find('.bc-h5_loading');
      this.$liveVideo = this.h5playerWrapper.find('.bc-h5_player');
      this.$liveCanplay = this.h5playerWrapper.find('.bc-h5_canplay');

      if( this._initMode === EnumCurState.PLAYBACK) {
        this.showStatusImg(EnumFlvStatus.normal);
        this.mediaDataSource = {  // "NativePlayer(mp4) doesn't support multipart playback!"
          type: 'mp4',
          isLive: false,
          hasAudio: true,
          hasVideo: true
        };

        if (
          (ViewReplaySearch.getUsingDay() && this.chObj.playingDay != ViewReplaySearch.getUsingDay().getUnixDateOnly())
          || this.chObj.playingStream != ViewReplaySearch.getSelectedStream()
        ) {
          this.destroy();
          return;
        }

        var ch = g_device.channels[this.chObj.getId()];

        if ( ch.playbackFiles.length == 0 || !ch.playbackFiles[this.chObj.playingFile] ) {
          this.nofile();
          return;
        }

        var fileName = ch.playbackFiles[this.chObj.playingFile].fileName;
        this.playUrl = PlayerPlayback.constructMP4Url(fileName);
        this.flv_load();
        PlayerPlayback.updateState(EnumPBPlayState.PLAYING);

        function playback() {
          var file;
          if (
            _this.getMode() !== EnumCurState.PLAYBACK
            || (ViewReplaySearch.getUsingDay() && _this.chObj.playingDay != ViewReplaySearch.getUsingDay().getUnixDateOnly())
            || _this.chObj.playingStream != ViewReplaySearch.getSelectedStream()
          ) {
            _this.destroy();
            return;
          }
          var ch = g_device.channels[_this.chObj.getId()];
          if (ch.playbackFiles.length > ++_this.chObj.playingFile) {
            file = ch.playbackFiles[_this.chObj.playingFile];
            ViewReplaySearch.seek(file.startTime);
          } else {
            _this.nofile();
          }
        }

        this.$liveVideo.on('ended', playback);

      } else {
        this.playUrl = PlayerPreview.constructRTMPUrl(0, this._streamType);
        this.mediaDataSource = {
          type: 'flv',
          isLive: true,
          hasAudio: true,
          hasVideo: true
        };

        this.flv_load();
      }

    } catch(e) {
      console.error(e);
    }
  };

  BcH5Player.getStream = function () {

    return this._streamType;

  }

  BcH5Player.setStream = function (streamType) {

    this._streamType = streamType;

  }

  function _getRawId(channel, _mode) {
    return 'fplayer' + _mode + '-' + channel;
  }

  BcH5Player.getMode = function () {
    return this.chObj.getMode();
  }

  BcH5Player.getViewStatus = function () {
    return ViewManager.getViewObject(this.chObj.getViewId()).getStatus();
  }

  BcH5Player.show = function () {
    this.$liveVideo.show();
  }

  BcH5Player.setPosition = function() {
    try {
      var view = ViewManager.getViewObject(this.chObj.getViewId());

      var chPos = view.getClientArea();

      $('#' + _getRawId(0, this.getMode())).css({
        "height": chPos.height,
        "width": chPos.width,
        "left": chPos.left,
        "top": chPos.top
      });
    } catch (error) {
      return;
    }

  };

  BcH5Player.isExactFit = function () {
    return this.stretching == EnumFlvStretching.exactfit;
  }

  BcH5Player.setExactFit = function (turnOn) {
OR_mssg("BcH5Player.setExactFit");
    if (!turnOn) {
      this.stretching = EnumFlvStretching.screen;
      this.$liveVideo.removeClass('h5_video-fill');
    } else {
      this.stretching = EnumFlvStretching.exactfit;
      this.$liveVideo.addClass('h5_video-fill');
    }
  }

  BcH5Player.showStatusImg = function(status) {

    try {

      this.statusImg.hide();
      switch (status) {
        case EnumFlvStatus.loading:
          this.loadingImg.show();
          break;
        case EnumFlvStatus.disconnect:
          this.disconnectImg.show();
          break;
        case EnumFlvStatus.nofile:
          this.nofileImg.show();
          break;
        default:
          break;
      }
    } catch (error) {
      return;
    }

  }

  // reduce time delay of live playback
  BcH5Player.jumpToEndBuffer = function() {
    if(!this.flv_player) {
      return;
    }
    var video = this.$liveVideo[0],
      buffered = video.buffered;
    if(buffered.length > 0) {
      var start = buffered.start(0)
      var end = buffered.end(buffered.length - 1);
      var dis = end - video.currentTime;
      var resetTime;
      if(this.getStream() === EnumStreamType.FLUENT || this.getStream() === EnumStreamType.CLIP) {  // 分码流追帧
        if(dis < 2.3) {
          return;
        }
        resetTime = (start + end) / 2 > (end - 1.8) ? (start + end) / 2 : (end - 1.8);
      } else {
        if(dis < 1.3) {
          return;
        }
        resetTime = (start + end) / 2 > (end - 0.8) ? (start + end) / 2 : (end - 0.8);
      }
      video.currentTime = resetTime;
      video.play();
      console.dbg('delay ' + dis + 's, reset currentTime: ' + video.currentTime + ' endTime: ' + end);
    }
  };

  // 持续追帧
  BcH5Player.resetRetardation = function() {
    clearTimeout(this.jumpToEndBufferTimer);
    if(!this.flv_player || this.getMode() === EnumCurState.PLAYBACK) {
      return;
    }
    var _this = this;
    this.jumpToEndBufferTimer = setTimeout(function () {
      _this.jumpToEndBuffer();
      _this.resetRetardation();
    }, 30000);
  };

  BcH5Player.flv_init = function() {
    this.isloaded = false;
    this.zeroSpeedCounts = 0;
    clearTimeout(this.timelineWalkTimer);
    this.timelineWalkTimer = null;
    clearTimeout(this.jumpToEndBufferTimer);
    this.jumpToEndBufferTimer = null;
    this.showStatusImg(EnumFlvStatus.loading);
  }

  BcH5Player.flv_load = function(url, mse) {

    this.show();

    if(url) {
      this.playUrl = url;
    }
    if(mse) {
      this.mediaDataSource = mse;
    }

    this.mediaDataSource['url'] = this.playUrl;

    this.flv_load_mse();
  };

  BcH5Player.flv_load_mse = function() {

    var _this = this;
    var _config = {};

    if (typeof this.flv_player !== "undefined") {
      if (this.flv_player != null) {
        this.destroy();
      }
    }

    if(this.mediaDataSource.isLive) {
      _config = {
        enableWorker: false,
        enableStashBuffer: false,
        stashInitialSize: 2000,
        autoCleanupSourceBuffer: true,
        autoCleanupMaxBackwardDuration: 10,
        autoCleanupMinBackwardDuration: 2
      };
      if(isSafari() && (this.getStream() === EnumStreamType.FLUENT || this.getStream() === EnumStreamType.CLIP)) {  // safari 小码流预览需要放宽缓冲清除时间
        _config.autoCleanupMaxBackwardDuration = 16;
      }
    }

    this.flv_init(this.metadata);

    this.flv_player = flvjs.createPlayer(this.mediaDataSource, _config);

    this.flv_player.attachMediaElement(this.$liveVideo[0]);

    if(this.mediaDataSource.isLive) {

      // 推流中途断开，需要开启监听，当推流重开，服务器通过监听的接口通知前端重新load
      this.flv_player.on(flvjs.Events.ERROR, function (errorType, errorDetail, errorInfo) {
        _this.updateErrinfo(errorDetail, errorInfo);
        _this.zeroSpeedCounts = 0;
        _this.showStatusImg(EnumFlvStatus.disconnect);
        _this.trigger('statechange', [_this, EnumChannelStatus.CLOSED, EnumViewStatus.ERROR]);

      });

      // 推流端断流处理（推流恢复时，player不会自动继续播放）
      this.flv_player.on(flvjs.Events.METADATA_ARRIVED, function (info) {  // load触发：第一次不触发
        if (!_this.isloaded) {
          _this.showStatusImg(EnumFlvStatus.normal);
          _this.isloaded = true;
        } else {
          _this.flv_load();
        }
      });

    } else {

      this.flv_player.on(flvjs.Events.ERROR, function (errorType, errorDetail, errorInfo) {
        _this.updateErrinfo(errorDetail, errorInfo);
      });

    }

    this.$liveVideo.one('canplay', function() {

      if(isOldEdge() && _this.mediaDataSource.isLive && (_this.getStream() === EnumStreamType.FLUENT || _this.getStream() === EnumStreamType.CLIP)) {  // 旧版edge小码流预览延迟1s开始播放，解决因数据不足播放卡顿的问题
        setTimeout(function() {
          _this.flv_player.currentTime = 0;
        }, 1000);
      } else if(isSafari() && !_this.mediaDataSource.isLive) {  // fix: player on safari needs to set currentTime after 'canplay'
        _this.$liveVideo[0].currentTime = _this.chObj.seekTo;
      }
      if (!_this.$liveVideo.paused) {
        _this.play();
      } else {
        _this.$liveCanplay.show();
      }
      _this.setVolume(_this._volume);  // 自动播放时初始化播放器的音量
    });

    this.$liveCanplay.one('click', function() {

      _this.play();
    });

    // 网络差及断网处理（网络恢复时，player自动开始继续播放）
    const maxZeroSpeedCounts = this.networkErrTime * 2;
    this.flv_player.on(flvjs.Events.STATISTICS_INFO, function (info) {
      _this.updateStatinfo(info);
      if (info.speed !== 0) {  // 说明有流
        _this.zeroSpeedCounts = 0;
        _this.showStatusImg(EnumFlvStatus.normal);
        if ( !_this.isSettingCenter ) {
          if (_this.getViewStatus() != EnumViewStatus.PLAYING && _this.getViewStatus() != EnumViewStatus.PAUSED) {
            _this.trigger('statechange', [_this, EnumChannelStatus.PLAYING, EnumViewStatus.PLAYING]);
          }
        }
      } else {
        ++_this.zeroSpeedCounts;
        if(_this.zeroSpeedCounts >= maxZeroSpeedCounts) {
          _this.showStatusImg(EnumFlvStatus.loading);
          if ( !_this.isSettingCenter ) {
            if (_this.getViewStatus() != EnumViewStatus.BUFFERING && _this.getViewStatus() != EnumViewStatus.PAUSED) {
              _this.trigger('statechange', [_this, EnumChannelStatus.PLAYING, EnumViewStatus.BUFFERING]);
            }
          }
        }
      }
    });

    this.flv_player.on(flvjs.Events.MEDIA_INFO, function (mediaInfo) {
      _this.updateMediainfo(mediaInfo);
    });

    this.flv_player.load();

    this.trigger('statechange', [this, EnumChannelStatus.PLAYING, EnumViewStatus.BUFFERING]);

    this.setPosition();

    this.flv_seekto(this.seekTo);

    if (!this.mediaDataSource.isLive) {
      this.activeTimeline();
    }

    this.infoElm.elm_close.click(function(){
      _this.showInfo(false);
    });

  };

  BcH5Player.handleMedia = function(info) {


  };

  BcH5Player.play = function() {
    if(typeof this.flv_player === "undefined" || this.flv_player === null) {
      this.flv_load();
    }
    this.flv_player.play();

    this.setVolume(this._volume);

    this.trigger('statechange', [this, EnumChannelStatus.PLAYING, EnumViewStatus.PLAYING]);
    this.$liveCanplay.remove();
    this.resetRetardation();

  };

  BcH5Player.pause = function () {
    if ( this.getMode() === EnumCurState.PLAYBACK ) {
      this.flv_player.pause();
      this.trigger('statechange', [this, EnumChannelStatus.PLAYING, EnumViewStatus.PAUSED]);
      this.showStatusImg(EnumFlvStatus.pause);
    } else {
      this.stop();
    }
  }

  BcH5Player.stop = function () {
    this.destroy();
    this.showStatusImg(EnumFlvStatus.stop);
  }

  BcH5Player.nofile = function () {
    this.destroy();
    this.showStatusImg(EnumFlvStatus.nofile);
  }


  // 切换另一个通道前 | 更改播放源前 要先destroy
  BcH5Player.destroy = function() {
    if(!this.flv_player) {
      return;
    }
    this.showInfo(false);
    this.flv_player.pause();
    this.flv_player.unload();
    this.flv_player.detachMediaElement();
    this.flv_player.destroy();
    this.flv_player = null;
    clearTimeout(this.timelineWalkTimer);
    this.timelineWalkTimer = null;
    clearTimeout(this.jumpToEndBufferTimer);
    this.jumpToEndBufferTimer = null;
    this.trigger('statechange', [this, EnumChannelStatus.CLOSED, EnumViewStatus.CLOSED]);

  };

  BcH5Player.setVolume = function (volume) {

    if(typeof volume === "number") {

      this._volume = volume;
      this.flv_player && (this.flv_player.volume = this._volume);
      if(volume !== 0) {  // 声音不为0，一定是手动调整了音量控件，可以开放音频播放（有交互时开放音频播放，不会影响视频自动播放）

        this.$liveVideo[0].muted = false;
        this.$liveVideo.removeAttr('muted');
      }
    }

  };

  // 时间轴走动
  BcH5Player.activeTimeline = function() {
    if(!this.flv_player || this.getMode() !== EnumCurState.PLAYBACK) {
      clearTimeout(this.timelineWalkTimer);
      return;
    }
    var _this = this;
    this.timelineWalkTimer = setTimeout( function () {
      _this.trigger('walking', [_this.$liveVideo[0].currentTime]);
      _this.activeTimeline();
    }, 500);

  }

  BcH5Player.flv_seekto = function(currentSecond) {

    var currentTime = currentSecond ? currentSecond : 0;
    this.$liveVideo[0].currentTime = parseFloat(currentTime);
    this.seekTo = 0;

  }

  BcH5Player.isInfoshow = function(){
     if(this.infoElm == null || this.infoElm.elm == null ){
       return false;
     }
     return this.infoElm.bshow;
  }

  BcH5Player.showInfo = function(bshow){
    if(this.infoElm == null || this.infoElm.elm == null ){
      console.dbg("null ptr");
      return;
    }
    if(bshow){
      this.infoElm.elm.show();
      this.infoElm.bshow = true;
    }else{
      this.infoElm.elm.hide();
      this.infoElm.bshow = false;
    }
  }
  BcH5Player.updateMediainfo = function(mediaInfo){

    if(this.infoElm === null || this.infoElm.elm === null ){
      return;
    }

    if(!this.infoElm.bshow){
      return;
    }

    if(this.infoElm.elm_meta != null){
      this.infoElm.elm_meta.text(JSON.stringify(mediaInfo.metadata));
    }
  }

  BcH5Player.updateStatinfo = function(statInfo){

    if(this.infoElm === null || this.infoElm.elm === null ){
      return;
    }

    if(!this.infoElm.bshow){
      return;
    }

    if(this.infoElm.elm_loader != null){
      this.infoElm.elm_loader.text(statInfo.loaderType);
    }

    if(this.infoElm.elm_player != null){
      this.infoElm.elm_player.text(statInfo.playerType);
    }

    if(this.infoElm.elm_cursegidx != null){
      this.infoElm.elm_cursegidx.text(statInfo.currentSegmentIndex);
    }

    if(this.infoElm.elm_drops != null){
      this.infoElm.elm_drops.text(statInfo.droppedFrames);
    }

    if(this.infoElm.elm_decode != null){
      this.infoElm.elm_decode.text(statInfo.decodedFrames);
    }

    if(this.infoElm.elm_corrupt != null){
      this.infoElm.elm_corrupt.text(statInfo.corruptedFrames);
    }

    if(this.infoElm.elm_speed != null){
      this.infoElm.elm_speed.text(statInfo.speed + "KBps");
    }

    if(this.infoElm.elm_segcount != null){
      this.infoElm.elm_segcount.text(statInfo.totalSegmentCount);
    }

    if(this.infoElm.elm_current != null){
      this.infoElm.elm_current.text(statInfo.current);
    }

    if(this.infoElm.elm_sbstart != null){
      this.infoElm.elm_sbstart.text(statInfo.sbStart);
    }

    if(this.infoElm.elm_sbend != null){
      this.infoElm.elm_sbend.text(statInfo.sbEnd);
    }

    if(this.infoElm.elm_fixes != null){
      this.infoElm.elm_fixes.text(statInfo.fixes);
    }

    if(this.infoElm.elm_url != null){
      this.infoElm.elm_url.text(statInfo.url);
    }
  }

  BcH5Player.updateErrinfo = function(errorDetail,errorInfo){
    console.dbg("errorDetail:", errorDetail);
    console.dbg("errorInfo:", errorInfo);
    if(this.infoElm === null || this.infoElm.elm === null ){
      return;
    }

    if(!this.infoElm.bshow){
      return;
    }

    if(this.infoElm.elm_err != null){
      this.infoElm.elm_err.text(JSON.stringify(errorDetail) + JSON.stringify(errorInfo));
    }
  }

})(jQuery);
