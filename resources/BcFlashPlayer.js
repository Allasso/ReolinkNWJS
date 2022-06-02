//播放器单元
function BcFlashPlayerItem(domId) {
	var _domId;
	var _me = this;
	var onReadyHandler;
	var setupParams;
	domId = domId + "_wrapper";
	isFlashPluginEffective = false;
	setTimeout(function(){
		_me.init(domId);
	},0);
	this.init = function(domId)
	{
		//嵌入新flash 郑桂深2016年5月28日17:48:49
	    var swfVersionStr = "9.0.0";
	    var xiSwfUrlStr = "swf/playerProductInstall.swf";
	    var flashvars = {};
	    var params = {};
	    params.quality = "high";
		params.pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
		params.type="application/x-shockwave-flash";
	    params.bgcolor = "#000000";
	    params.allowscriptaccess = "sameDomain";
	    params.allowfullscreen = "true";
		params.wmode = "Opaque";
	    var attributes = {};
	    attributes.id = domId;
	    attributes.name = domId;
	    attributes.align = "middle";
	    swfobject.embedSWF("swf/bcFlashPlayer.swf", domId,
	        "100%", "100%",
	        swfVersionStr, xiSwfUrlStr,
	        flashvars, params, attributes,swfloadCompleteHandler);
	    _domId = domId;
		this.addFlashPlayerDirecter(domId);
		this.setPosition(domId);

	}

	this.addFlashPlayerDirecter = function (domId)
	{
		if(isFlashPluginEffective)
		{
			return;
		}
		var flashPlayerDirecter = '<div class ="flashPlayerDirecter"><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p><div>';
		$("#" + domId).append(flashPlayerDirecter);
		$(".flashPlayerDirecter").css({"margin-top": $('#preview_plugin_container').innerHeight()/ 2,"margin-left": $('#preview_plugin_container').innerWidth()/ 2});
	}

	var setupTryTime = 0;
	var isStop = false;
	var swfloadCompleteHandler = function(){
		console.dbg("swf load complete !");
		var me = this;
		setTimeout(function(){
			if(swfobject.getObjectById(_domId) && swfobject.getObjectById(_domId).setup) {
				//参数为测试值
				if(setupParams)
				{
					var data = {"id": _domId,"version" : ControllerMain.appVersion};
					if(FPlayer.getMode() == EnumCurState.PLAYBACK) {
						data["isPlayBack"] = 1;
					}
					swfobject.getObjectById(_domId).setup(setupParams.file, 0, setupParams.seekTo == undefined ? 1 : setupParams.seekTo, setupParams.rtmp.bufferlength, data);
				}
				//准备好后执行的函数
				if (onReadyHandler) {
					onReadyHandler.apply(window);
				}
				setupTryTime = 100;
				isStop = true;
				isFlashPluginEffective = true;
			}else {
				if (setupTryTime > 10) {
					setupTryTime = 0;
					isStop = true;
				} else {
					console.dbg("try to setup");
					if(!isStop)
					{
						swfloadCompleteHandler();
					}
					setupTryTime++;
				}
			}
		},500)
	}

	//未实现函数
	this.onSetupError = function(callbackFun)
	{
		return this;
	}

	//加载flash后执行的函数
	this.onReady = function(callbackFun)
	{
		onReadyHandler = callbackFun;

		return this;
	}

	this.setup = function(params){
		//swfobject.createCSS("#" + domId);//, "display:block;text-align:left;z-index:9999;position:absolute");
		setupParams = params;
		swfloadCompleteHandler();
		return this;
	}

	this.setPosition = function(domId) {
		var mode = domId.indexOf('PLAYBACK') === -1 ? EnumCurState.PREVIEW : EnumCurState.PLAYBACK,
			channel = Number(/\d+/.exec(domId)[0]),
			view = ViewManager.getViewObject(ChannelManager.get(channel).getViewId(), mode),
			chPos = view.getClientArea();

        $('#fplayer' + mode + '-' + channel).css({
            "height": chPos.height,
            "width": chPos.width,
            "left": chPos.left,
            "top": chPos.top
        });
	};

	this.setSize = function(w,h,_x,_y)
	{
		var loc = this;
		if(swfobject.getObjectById(_domId) && swfobject.getObjectById(_domId).setSize)
		{
			swfobject.getObjectById(_domId).setSize(w,h,_x,_y);
		}else
		{
			setTimeout(function(){
				loc.setSize(w,h,_x,_y);
			},500)
		}
	}

	this.setVolume = function(v)
	{
		if(!swfobject.getObjectById(_domId))
			return;
		swfobject.getObjectById(_domId).setVolume(v);
		return this;
	}
	this.stop = function()
	{
		if(!swfobject.getObjectById(_domId)){
			return;
		}
		try{
			swfobject.getObjectById(_domId).stop();
		}catch(err)
		{

		}
		$("#" + _domId).css({
			"visibility":"hidden"
		});
		return this;
	}
	this.play = function()
	{
		$("#" + _domId).css({
			"visibility":"visible"
		});
		swfobject.getObjectById(_domId).play();
	}
	this.destroy = function()
	{
		swfobject.getObjectById(_domId).stop();
	}
	this.remove = function()
	{
		swfobject.getObjectById(_domId).stop();
	}
	this.playUrl = function(url){
		$("#" + _domId).css({
			"visibility":"visible"
		});
		swfobject.getObjectById(_domId).playUrl(url);
	}
	this.getState = function(){
		return swfobject.getObjectById(_domId).getState();
	}
	this.pause = function(){
		return swfobject.getObjectById(_domId).pause();
	}
	this.continuePlay = function(){
		$("#" + _domId).css({
			"visibility":"visible"
		});
		return swfobject.getObjectById(_domId).continuePlay();
	}

	this.openLogInfo = function(isShow)
	{
		if(swfobject.getObjectById(_domId))
		{
			return swfobject.getObjectById(_domId).openLogInfo(isShow);
		}
	}
	this.setBufferTime = function(bufferTime)
	{
		if(swfobject.getObjectById(_domId) && swfobject.getObjectById(_domId).setBufferTime){
			swfobject.getObjectById(_domId).setBufferTime(bufferTime);
		}
		return;
	}
	this.getVolume = function()
	{
		if(swfobject.getObjectById(_domId) && swfobject.getObjectById(_domId).getVolume){
			return swfobject.getObjectById(_domId).getVolume();
		}
	}

	this.setExactFit = function(turnOn)
	{
OR_mssg("BcFlashPlayer.setExactFit");
		if(turnOn)
		{
			turnOn = 0;
		}else
		{
			turnOn = 1;
		}
		swfobject.getObjectById(_domId).setDisplayMode(turnOn);
	}
	this.stretching = function()
	{
		return swfobject.getObjectById(_domId).stretching();
	}
	this.afterGetFps = function(obj)
	{
		if(swfobject.getObjectById(_domId) && swfobject.getObjectById(_domId).afterGetFps){
			return swfobject.getObjectById(_domId).afterGetFps(obj);
		}
	}

};
EventListener.apply(BcFlashPlayer);

var playerObj = {};
function BcFlashPlayer(domId)
{
   if(playerObj[domId])
   {
   		try{
   			//清除flash数据
   			playerObj[domId].stop();
   		}catch(err)
   		{

   		}
	   	delete playerObj[domId];
   }
   playerObj[domId] = new BcFlashPlayerItem(domId);
   return playerObj[domId];
}
function getBcFlashPlayerByDomId(domId)
{
   if(playerObj[domId])
   {
   		return playerObj[domId];
   }
   return null;
}

function getFps(channel,id)
{
	CGI.sendCommand('GetEnc', {"channel": channel}, function(data) {
		flashAfterGetFps(data);
	}, function (cmd, errno, msg) {
		console.dbg("get fps err");
	},null,function(){
		var data = {};
		data.Enc.mainStream.frameRate = 30;
		data.Enc.subStream.frameRate = 30;
		flashAfterGetFps(data);
	});

	var flashAfterGetFps = function(data)
	{
		var obj = {};
		obj.mainStream = data.Enc.mainStream.frameRate;
		obj.subStream  = data.Enc.subStream.frameRate;
		obj.extStream  = 25;

		if(id.split("_").length > 1)
		{
			id = id.split("_")[0];
		}
		getBcFlashPlayerByDomId(id).afterGetFps(obj);
	}
};
