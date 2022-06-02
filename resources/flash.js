var EnumFPlayerType = {
    "PREVIEW_PLAYER": 0,
    "PLAYBACK_PLAYER": 1
};

var BufferTimeConfig = {
    "FLUENT_BUFFER": 1.6,
    "BALANCE_BUFFER": 0.8,
    "CLEAR_BUFFER": 0.6
};
/**
 * This class introduces the Flash Video Player for Baichuan API.
 */
function FPlayer(channel, mode) {
    var _channel = channel;
    var _mode = mode;
    var _$player;
    var _player;
    var _ready = false;
    var _enabledEvent = [
        "ready"
    ];
    var _eventMaps = {
        "play": "onPlay",
        "error": "onError",
        "pause": "onPause",
        "idle": "onIdle",
        "buffer": "onBuffer",
        "ready": "onReady",
        "walking": "onTime"
    };

    function _getRawId(channel) {
        return 'fplayer' + _mode + '-' + channel;
    }

    function _getDOMId(channel) {
        return _getRawId(channel, _mode) + '_wrapper';
    }

    this.getStream = function() {
        return FPlayer.getCurrentStreamType();
    };

    EventListener.apply(this);

    this._on = this.on;

    this.on = function(e, fn) {
        if (_eventMaps[e] && _enabledEvent.indexOf(e) < 0) {
            (function(fplayer) {
                _enabledEvent.push(e);
                _player[_eventMaps[e]](function(args) {
                    fplayer.trigger(e, args);
                });
            })(this);
        }

        return this._on(e, fn);
    };

    _$player = $('#' + _getDOMId(_channel, _mode));

    this.isReady = function() {
        return _player === null ? false : true;
    };

    this.getMode = this.getType = function() {
        return _mode;
    };

    this.getChannel = function() {
        return _channel;
    };

    this.isPlaying = function() {
        if (!_player) {
            return false;
        }
        var isplaying = _player.getState();
        console.dbg(isplaying);
        return _player.getState && _player.getState() == 'PLAYING';
    };

    this.isIdle = function() {
        return _player.getState && _player.getState() == 'IDLE';
    };

    this.setVolume = function(v) {
        return _player.setVolume(v);
    };

    this.getVolume = function() {
        return _player.getVolume();
    };

    this.isBuffering = function() {
        return _player.getState() == 'BUFFERING';
    };

    this.isPaused = function() {
        return _player.getState() == 'PAUSED';
    };

    this.load = function(url) {
        _player.load([{ "file": url }]);
        return this;
    };

    this.destroy = function() {
        this.stop();
        // _$player.remove();
        $('#' + _getDOMId(_channel, _mode)).remove();
        $('#' + _getRawId(_channel, _mode)).remove();
    };

    this.play = function() {
        if (!this.isReady()) {
            return this;
        }
        if (!this.isPlaying()) {
            if (this.getType() === EnumCurState.PREVIEW) {
                FPlayer.setCurrentStreamType(FPlayer.tempStream == undefined ? this.getStream() : FPlayer.tempStream);
            }
            _player.play();
            this._setVol();
        }
        return this;
    };

    this._setVol = function() {
        if (FPlayer.getMode() === EnumCurState.PLAYBACK) {
            _player.setVolume(PlayerPlayback.getVolume());
        } else {
            _player.setVolume(PlayerPreview.getVolume());
        }
    }

    this.pause = function() {
        if (!this.isReady()) {
            return this;
        }
        if (this.isPlaying()) {
            _player.pause();
        }
        return this;
    };

    this.stop = function() {
        if (!this.isReady()) {
            return this;
        }
        //if (!this.isIdle()) {
        if (_player) {
            _player.stop();
        }
        if (this.getType() === EnumCurState.PREVIEW) {
            FPlayer.tempStream = this.getStream();
        }
        return this;
    };

    this.hide = function() {
        var $tempLayer = $('#' + _getRawId(_channel, _mode));
        // if (!$tempLayer.is(':visible')) {
        //     return this;
        // }

        $tempLayer.css({ "width": '0px' });
        $tempLayer.css({ "height": '0px' });
        return this.trigger('hide');
    };

    this.show = function() {
        var $tempLayer = $('#' + _getRawId(_channel, _mode));
        return this.trigger('show');
    };

    this.seek = function(pos) {
        _player.seek(pos);
    };

    this.playUrl = function(url) {
        _player.playUrl(url);
    };

    this.setPosition = function() {
        var chPos, $channel;
        var view;

        if (_$player.length == 0) {
            return this;
        }

        view = ViewManager.getViewObject(ChannelManager.get(_channel).getViewId(), EnumCurState.PREVIEW);

        chPos = view.getClientArea();

        $channel = $('#channelitem' + _channel);
        if (!_player) {
            return this;
        }
        _player.setSize(chPos.width, chPos.height, chPos.left, 0);

        $('#' + _getRawId(_channel, _mode)).css({
            "height": chPos.height,
            "width": chPos.width,
            "left": chPos.left,
            "top": chPos.top
        });
        return this;
    };

    this.playStream = function(streamType, url) {
        if (this.getStream() != streamType) {
            FPlayer.setCurrentStreamType(streamType);
            this.playUrl(url);
            this.setPosition();
        } else {
            this.play();
        }
    };

    this.isExactFit = function() {
        return _player && _player.stretching();
    };

    this.setExactFit = function(turnOn) {
OR_mssg("flash.js: setExactFit:turnOn: " + turnOn);
        _player.setExactFit(turnOn);
        if (!turnOn) {
            //如果是0
            this.params && (this.params.stretching = 'screen');
        } else {
            //如果是1
            this.params && (this.params.stretching = 'exactfit');
        }
    };

    this.getPlaylist = function() {
        return _player.getPlaylist();
    };

    this.getSafeRegion = function() {
        return _player.getSafeRegion();
    };
    this.continuePlay = function() {
        return _player.continuePlay();
    };
    this.setBufferTime = function(tempBufferTime) {
        return _player.setBufferTime(tempBufferTime);
    };

    this.updateEncode = function() {
        _player.destroy();
        _player.continuePlay();
    };

    this.setup = function(args) {
        var me = this;
        if ($('#' + _getDOMId(_channel, _mode)).length == 0 && $('#' + _getRawId(_channel, _mode)).length == 0) {
            $('#preview_plugin_container')
                .append('<div id="' + _getRawId(_channel, _mode) + '"></div>');
            $("#" + _getRawId(_channel, _mode)).css({
                "position": "relative",
                "z-index": "99",
                "height": "1200px",
            });
            console.dbg('Flash Player: Opened Video URL ', args.url);
            _$player = $('#' + _getRawId(_channel, _mode));

            //添加子节点让flash替换
            _$player.append('<div id="' + _getRawId(_channel, _mode) + "_wrapper" + '"></div>');
            (function(fplayer) {
                if (!fplayer.params) {
                    fplayer.params = {

                        "file": args.url,
                        "flashplayer": "swf/BcFlashPlayer.swf",
                        "fallback": 'false',
                        "stretching": 'exactfit',
                        /* 拉伸适配 */
                        "autostart": true,
                        "rtmp": {
                            "bufferlength": fplayer.getType() === EnumCurState.PLAYBACK ? 1.5 : 0.6,
                        },
                        "skin": 'swf/five.xml?timeVersion=' + (new Date()).getTime(),
                        "modes": "flash"
                    };
                }
                FPlayer.setCurrentStreamType(args.stream);
                if (fplayer.getType() === EnumCurState.PLAYBACK) {
                    fplayer.params.seekTo = args.seekTo;
                    console.dbg('Flash Player<PlayBack>: Seek To', args.seekTo);
                }
                BcFlashPlayer(_getRawId(_channel, _mode)).setup(fplayer.params).onSetupError(function(args) {
                    console.dbg('BcFlashPlayer onSetupError: ', args.message);
                }).onReady(function() {

                    if (_ready) {
                        return;
                    }
                    _ready = true;
                    _player = getBcFlashPlayerByDomId(_getRawId(_channel, _mode));
                    me.setPosition();

                    FPlayer.trigger('ready', [fplayer]);

                    this.onVolume = function(args) {
                        console.dbg('Volume changed to', args.volume);
                    }
                    console.openFlashDebuger = function(isOpen) {
                        if (isOpen) {
                            _player.openLogInfo(true);
                        } else {
                            _player.openLogInfo(false);
                        }
                    }
                    this.onPlay = function(args) {

                        if (args.newstate == 'PLAYING') {
                            if (fplayer.getType() === EnumCurState.PLAYBACK && !fplayer.isSeekd) {
                                fplayer.isSeekd = true;
                                if (fplayer.params.seekTo > 0) {
                                    _player.seek(fplayer.params.seekTo);
                                }
                            }
                            FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.PLAYING, EnumViewStatus.PLAYING]);
                            console.dbg('Flash Player Event: onPlay -', args);
                            me._setVol();
                        }
                    };

                    this.onError = function(args) {
                        console.dbg('Flash Player Event: onError -', args);
                        FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.CLOSED, EnumViewStatus.ERROR]);
                    };
                    me._setVol();
                    this.onBuffer = function(args) {
                        console.dbg('Flash Player Event: onBuffer -', args);
                        if (args.newstate == 'BUFFERING') {
                            FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.PLAYING, EnumViewStatus.BUFFERING]);
                        }
                    };

                    this.onFullscreen = function(args) {
                        if (args.fullscreen) {
                            this.setControls(false);
                        } else {
                            this.setControls(true);
                        }
                    };

                    this.onPause = function(args) {
                        console.dbg('Flash Player Event: onPause -', args);
                        if (args.newstate == 'PAUSED') {
                            FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.CLOSED, EnumViewStatus.PAUSED]);
                        }
                    };

                    this.onIdle = function(args) {
                        console.dbg('Flash Player Event: onStop -', args);
                        FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.CLOSED, EnumViewStatus.PAUSED]);
                    };

                    this.onComplete = function(args) {
                        console.dbg('Flash Player Event: onComplete -', args);
                        FPlayer.trigger('statechange', [fplayer, EnumChannelStatus.CLOSED, EnumViewStatus.CLOSED]);
                        FPlayer.trigger('complete', [fplayer]);
                    };
                    //每隔500毫秒接受一次
                    this.onTime = function(args) {
                        if (fplayer.isSeekd) {
                            fplayer.params.seekTo = args.position;
                        }
                        FPlayer.trigger('walking', [fplayer, args]);
                    }

                });
                FPlayer.trigger('statechange', [me, EnumChannelStatus.PLAYING, EnumViewStatus.BUFFERING]);
                _$player = $('#' + _getDOMId(_channel, _mode)).addClass('fplayer');
            })(this);
            return this;
        }

        return this;
    };
};

EventListener.apply(FPlayer);

(function() {

    var _players = {
        "PREVIEW": {},
        "PLAYBACK": {}
    };

    var _mode = EnumCurState.PREVIEW;

    FPlayer.setMode = function(mode) {
        switch (mode) {
            case EnumCurState.PREVIEW:
            case EnumCurState.PLAYBACK:
                break;
            default:
                return false;
        }
        _mode = mode;
        return true;
    };

    FPlayer.getMode = function() {
        return _mode;
    };

    FPlayer.open = function(channel, args) {
        if (_players[_mode][channel] === undefined) {
            _players[_mode][channel] = (new FPlayer(channel, _mode)).setup(args);
        }
        return _players[_mode][channel];
    };

    FPlayer.close = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }

        //直播不销毁
        if (_mode != EnumCurState.PREVIEW) {
            this.trigger('statechange', [_players[_mode][channel], EnumChannelStatus.CLOSED, EnumViewStatus.CLOSED]);
            _players[_mode][channel].destroy();
            delete _players[_mode][channel];
        }
        return this;
    };

    FPlayer.play = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }
        _players[_mode][channel].play();
        return this;
    };
    FPlayer.continuePlay = function(channel) {
        if (_players[_mode][channel] === undefined) {
            throw { "message": "No such a player.", "name": "FlashPlayer" };
        }
        _players[_mode][channel].continuePlay();
        return this;
    };


    FPlayer.pause = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }
        _players[_mode][channel].pause();
        return this;
    };

    FPlayer.stop = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }
        _players[_mode][channel].stop();
        return this;
    };

    FPlayer.show = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }
        _players[_mode][channel].show();
        return this;
    };

    FPlayer.hide = function(channel) {
        if (_players[_mode][channel] === undefined) {
            return this;
        }
        _players[_mode][channel].hide();
        return this;
    };

    FPlayer.get = function(channel) {
        return _players[_mode][channel];
    };

    FPlayer.setCurrentStreamType = function(streamType) {
        this._streamType = streamType;
        if (_players[_mode][0] === undefined) {
            return this;
        }
        var tempBufferTime = BufferTimeConfig.CLEAR_BUFFER; // big stream
        if (streamType == EnumStreamType.FLUENT || streamType == EnumStreamType.CLIP) {
            tempBufferTime = BufferTimeConfig.FLUENT_BUFFER; // low stream
        } else if (streamType == EnumStreamType.BALANCED) {
            tempBufferTime = BufferTimeConfig.BALANCE_BUFFER; //middle stream
        }
        _players[_mode][0].setBufferTime(tempBufferTime);
        return this;
    };
    FPlayer.getCurrentStreamType = function() {
        return this._streamType;
    }
})();
