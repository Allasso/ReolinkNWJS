// js/client.config.js?timeVersion=1620806528092

var clientInfo = {
  "version": "v1.0.274"
};

// view-source:http://192.168.1.252/js/libs/es6-promise.js?timeVersion=1620806528092

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);

// view-source:http://192.168.1.252/js/bc-model.js?timeVersion=1620806528092


function bcModelMap(modelData, modelName, $parent) {
  var $fields;
  if ($parent) {
    $fields = $parent.find('[bc-model=' + modelName + ']');
  } else {
    $fields = $('[bc-model=' + modelName + ']');
  }
  $fields.each(function() {
    var field = $(this).attr('bc-model-field');
    switch ($(this).get(0).tagName) {
    case 'SELECT':
    case 'INPUT':
      switch ($(this).attr('type')) {
      case 'checkbox':

        if ($(this).is(':checked') != modelData[field]) {
          $(this).click();
        }
        break;
      case 'radio':
        if (!$(this).is(':checked')) {
          if ($(this).val() == modelData[field]) {
            $(this).click();
          }
        }

        break;
      default:
        $(this).val(modelData[field]);
      }
      break;

    case 'IMG':

      $(this).attr("src", modelData[field]);
      break;

    default:
      $(this).text(modelData[field]);
      break;
    }
  });
}

function bcModelGuard(modelRange, modelName, $parent) {
  var $fields;
  if ($parent) {
    $fields = $parent.find('[bc-model=' + modelName + ']');
  } else {
    $fields = $('[bc-model=' + modelName + ']');
  }
  $fields.each(function() {
    var field = $(this).attr('bc-model-field');
    if (modelRange[field] === undefined) {
      return;
    }
    switch ($(this).get(0).tagName) {
    case 'INPUT':
      switch ($(this).attr('type')) {
      case 'number':
        $(this).attr(modelRange[field]);
        break;
      default:
        $(this).attr('maxlength', modelRange[field].maxLen);
      }
      break;

    default:
      break;
    }
  });
}

// view-source:http://192.168.1.252/js/pce.js?timeVersion=1620806528092

/**
 * Privileges Controlling Engine
 */
function PCE() {
  throw {
    "msg": "Unable to new a Singleton object."
  }
}

(function() {

  var privileges;

  var features;

  var getFeature = function(name, channel) {

    if (typeof channel === "number") {

      if (privileges.abilityChn !== undefined && privileges.abilityChn[channel] !== undefined && privileges.abilityChn[channel][name] !== undefined) {

        return privileges.abilityChn[channel][name];
      }
    }
    else if (privileges[name] !== undefined) {

      return privileges[name];
    }

    return null;
  };

  PCE.init = function(inputAbs) {

    privileges = inputAbs;

    features = [];

    for (var feature in inputAbs) {

      if (typeof(feature) !== "string") {

        continue;
      }

      if (feature !== "abilityChn") {

        features.push(feature);
      }
      else {

        inputAbs.abilityChn.forEach(function(chFeatures) {

          for (var feature in chFeatures) {

            if (typeof(feature) !== "string") {

              continue;
            }

            if (features.indexOf(feature) === -1) {

              features.push(feature);
            }
          }
        });
      }
    }

  };

  PCE.existFeature = function(name, channel) {

    var feature = getFeature(name, channel);

    return feature ? true : false;
  };

  PCE.checkVersion = function(name, channel, version) {

    var feature = getFeature(name, channel);

    if (feature && feature.ver == version) {

      return true;
    }

    return false;
  };

  PCE.hasFeature = function(name, channel) {

    var feature = getFeature(name, channel);

    return feature && feature.ver ? true : false;
  };

  PCE.getFeatureVersion = function(name, channel) {

    var feature = getFeature(name, channel);

    return feature ? feature.ver : null;
  };

  var detectPermission = function(name, channel, right) {

    var feature = getFeature(name, channel);

    if (feature !== null && feature.ver && (feature.permit & right)) {

      return true;
    }

    return false;
  };

  PCE.isReadable = function(name, channel) {

    return detectPermission(name, channel, 4);
  };

  PCE.isWritable = function(name, channel) {

    return detectPermission(name, channel, 2);
  };

  PCE.isExecutable = function(name, channel) {

    return detectPermission(name, channel, 1);
  };

  PCE.listFeatures = function() {

    return features;
  };

})();

// view-source:http://192.168.1.252/js/libs/glDatePicker.min.js?timeVersion=1620806528092

/*! glDatePicker v2.0  | Tue Jan 1 2013 | http://glad.github.com/glDatePicker/ */;
(function(){$.fn.glDatePicker=function(a){var G=this.data("glDatePicker");return!G?this.each(function(){return $(this).data("glDatePicker",new O(this,a))}):!0===a?G:this};$.fn.glDatePicker.defaults={cssName:"default",zIndex:1,borderSize:1,calendarOffset:{x:0,y:1},showAlways:!1,hideOnClick:!0,allowMonthSelect:!0,allowYearSelect:!0,todayDate:new Date,selectedDate:null,prevArrow:"\u25c4",nextArrow:"\u25ba",selectableDates:null,selectableDateRange:null,specialDates:null,selectableMonths:null,selectableYears:null,
selectableDOW:null,monthNames:null,dowNames:null,dowOffset:0,onClick:function(a,G,g){a.val((g.getMonth()+1)+'/'+g.getDate()+'/'+g.getFullYear())},onHover:function(){},onShow:function(a){a.show()},onHide:function(a){a.hide()},firstDate:null};var O=function(){function a(a,g){var d=this;d.el=$(a);var b=d.el;d.options=$.extend(!0,{},$.fn.glDatePicker.defaults,g);var c=d.options;d.calendar=$($.find("[gldp-el="+b.attr("gldp-id")+" ]"));c.selectedDate=c.selectedDate||c.todayDate;c.firstDate=(new Date(c.firstDate||c.selectedDate))._first();
(b.attr("gldp-id")||"").length||b.attr("gldp-id","gldp-"+Math.round(1E10*Math.random()));b.addClass("gldp-el").bind("click",function(b){d.show(b)}).bind("focus",function(b){d.show(b)});d.calendar.length&&!c.showAlways&&d.calendar.hide();$(document).bind("mouseup",function(a){var a=a.target,c=d.calendar;!b.is(a)&&(!c.is(a)&&0===c.has(a).length&&c.is(":visible"))&&d.hide()});d.render()}a.prototype={show:function(){$.each($(".gldp-el").not(this.el),function(a,g){if(g.length)g.options.onHide(g.calendar)});
this.options.onShow(this.calendar)},hide:function(){if(this.options&&!this.options.showAlways)this.options.onHide(this.calendar)},render:function(a){var g=this,d=g.el,b=g.options,c=g.calendar,j="gldp-"+b.cssName,t=b.todayDate._val(),u=t.time,h=b.borderSize+"px",y=function(b,m,a){for(var c=[],e=b;e<=m;e++)c.push(e);if(a){var d=[];$.each(a,function(a,c){c>=b&&(c<=m&&0>d._indexOf(c))&&d.push(c)});c=d.length?d:c}c.sort();return c},H=y(0,11,b.selectableMonths),v=y(t.year-50,t.year+50,b.selectableYears),
y=y(0,6,b.selectableDOW),z=b.dowNames||"Sun Mon Tue Wed Thu Fri Sat".split(" "),t=b.monthNames||"January February March April May June July August September October November December".split(" "),f=d.outerWidth(),e,k=f/7+6*(b.borderSize/7),f=f/8+7*(b.borderSize/8);c.length?eval(c.data("is"))||(f=c.outerWidth(),e=c.outerHeight(),k=f/7+6*(b.borderSize/7),f=e/8+7*(b.borderSize/8)):(g.calendar=c=$("<div/>").attr("gldp-el",d.attr("gldp-id")).data("is",!0).css({display:b.showAlways?void 0:"none",zIndex:b.zIndex,
width:7*k+"px"}),$("body").append(c));d.is(":visible")||c.hide();c.removeClass().addClass(j).children().remove();j=function(){var i=d.offset();c.css({top:i.top+d.outerHeight()+b.calendarOffset.y+"px",left:i.left+b.calendarOffset.x+"px"})};$(window).resize(j);j();var j={width:k+"px",height:f+"px",lineHeight:f+"px"},f=function(i){for(var m=new Date(b.firstDate),i=i||0;;){m.setMonth(m.getMonth()+i);m.setDate(Math.min(1,m._max()));if(0==i)break;var c=m._val(),a=c.year;if(-1!=H._indexOf(c.month))if(-1!=
v._indexOf(a))break;else if(a<v[0]||a>v[v.length-1])return null}return m},A=f(-1),B=f(1),f=b.firstDate=f();e=f._val();var I=e.month,J=e.year,f=new Date(f);e=Math.abs(Math.min(6,Math.max(0,b.dowOffset)));var l=f.getDay()-e,l=1>l?-7-l:-l,z=z.concat(z).slice(e,e+7);f._add(l);e=$("<div/>").addClass(" core border monyear ").css($.extend({},j,{borderWidth:h+" 0 0 "+h})).append($("<a/>").addClass("prev-arrow"+(A?"":"-off")).html(b.prevArrow)).mousedown(function(){return!1}).click(function(i){""!=b.prevArrow&&
A&&(i.stopPropagation(),A&&(b.firstDate=A,g.render()))});k=5*k-5*b.borderSize+b.borderSize;k=$("<div/>").addClass(" core border monyear title").css($.extend({},j,{width:k+"px",borderTopWidth:h,marginLeft:"-"+h}));l=$("<div/>").addClass(" core border monyear ").css($.extend({},j,{marginLeft:"-"+h,borderWidth:h+" "+h+" 0 0"})).append($("<a/>").addClass("next-arrow"+(B?"":"-off")).html(b.nextArrow)).mousedown(function(){return!1}).click(function(i){""!=b.nextArrow&&B&&(i.stopPropagation(),B&&(b.firstDate=
B,g.render()))});c.append(e).append(k).append(l);for(l=e=0;7>e;e++)for(var q=0;7>q;q++,l++){var C=new Date(f),n="day",r=b.zIndex+l,w=$("<div/>");if(e){C._add(q+7*(e-1));var p=C._val(),x=p.time,K=null,s=!0,D=function(b,a){!0===b.repeatYear&&a.setYear(p.year);!0===b.repeatMonth&&a.setMonth(p.month);return a._val()};w.html(p.date);b.selectableDateRange&&(s=!1,$.each(b.selectableDateRange,function(b,a){var c=a.from,d=a.to||null,d=d||new Date(a.from.getFullYear(),a.from.getMonth(),a.from._max()),c=D(a,
c),d=D(a,d);if(x>=c.time&&x<=d.time)return s=!0}));if(b.selectableDates){if(b.selectableDateRange&&!s||s&&!b.selectableDateRange)s=!1;$.each(b.selectableDates,function(b,a){if(D(a,a.date).time==x)return s=!0})}!s||0>v._indexOf(p.year)||0>H._indexOf(p.month)||0>y._indexOf(p.day)?n="noday":(n="sun mon tue wed thu fri sat".split(" ")[p.day],I!=p.month&&(n+=" outday"),u==x&&(n="today",r+=50),b.selectedDate._time()==x&&(n="selected",r+=51),b.specialDates&&$.each(b.specialDates,function(b,a){D(a,a.date).time==
x&&(n=a.cssClass||"special",r+=52,K=a.data)}),w.mousedown(function(){return!1}).hover(function(a){a.stopPropagation();a=$(this).data("data");b.onHover(d,w,a.date,a.data)}).click(function(a){a.stopPropagation();a=$(this).data("data");b.selectedDate=b.firstDate=a.date;g.render(function(){!b.showAlways&&b.hideOnClick&&g.hide()});b.onClick(d,$(this),a.date,a.data)}))}else n="dow",w.html(z[q]),C=null;$.extend(j,{borderTopWidth:h,borderBottomWidth:h,borderLeftWidth:0<e||!e&&!q?h:0,borderRightWidth:0<e||
!e&&6==q?h:0,marginLeft:0<q?"-"+h:0,marginTop:0<e?"-"+h:0,zIndex:r});w.data("data",{date:C,data:K}).addClass(" core border "+n).css(j);c.append(w)}var N=function(a){b.allowMonthSelect&&(L.css({display:!a?"none":"inline-block"}),E.css({display:!a?"inline-block":"none"}));b.allowYearSelect&&(M.css({display:a?"none":"inline-block"}),F.css({display:a?"inline-block":"none"}))},u=function(){b.firstDate=new Date(F.val(),E.val(),1);g.render()},E=$("<select/>").hide().change(u),F=$("<select/>").hide().change(u),
L=$("<span/>").html(t[I]).mousedown(function(){return!1}).click(function(a){a.stopPropagation();N(!1)}),M=$("<span/>").html(J).mousedown(function(){return!1}).click(function(a){a.stopPropagation();N(!0)});$.each(t,function(a,c){if(b.allowMonthSelect&&-1!=H._indexOf(a)){var d=$("<option/>").html(c).attr("value",a);a==I&&d.attr("selected","selected");E.append(d)}});$.each(v,function(a,c){if(b.allowYearSelect){var d=$("<option/>").html(c).attr("value",c);c==J&&d.attr("selected","selected");F.append(d)}});
u=$("<div/>").append(L).append(E).append(M).append(F);k.children().remove();k.append(u);(a||function(){})()}};return a}();Date.prototype._clear=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this};Date.prototype._time=function(){return this._clear().getTime()};Date.prototype._max=function(){return[31,28+(1==(new Date(this.getYear(),1,29)).getMonth()?1:0),31,30,31,30,31,31,30,31,30,31][this.getMonth()]};Date.prototype._add=function(a){this.setDate(this.getDate()+
a)};Date.prototype._first=function(){var a=new Date(this);a.setDate(1);return a};Date.prototype._val=function(){this._clear();return{year:this.getFullYear(),month:this.getMonth(),date:this.getDate(),time:this.getTime(),day:this.getDay()}};Array.prototype._indexOf=function(a){return $.inArray(a,this)}})();

// view-source:http://192.168.1.252/js/libs/uuidv4.min.js?timeVersion=1620806528092

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).uuidv4=e()}(this,(function(){"use strict";var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),e=new Uint8Array(16);function n(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);return function(t,e,r){var u=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var d=0;d<16;++d)e[u+d]=i[d];return e||function(t,e){var n=e||0,r=o;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")}(i)}}));

// view-source:http://192.168.1.252/js/bc-ctrls.js?timeVersion=1620806528092


function range(b,e) {var r = []; for (i = b; i <= e; ++i) {r.push(i);} return r;}

(function() {
  var _stack = [];
  var _stackData = {};

  _stack.dequeue = function() {
    var r = this.splice(0,1);
    if (r.length) {
      return r[0];
    }
    return undefined;
  };

  window.bc_alert = function (msg, failed, alertId, location) {
    var id = 'alert-' + Math.floor(Math.random() * (new Date()).getTime());
    var $obj;
    if (alertId) {
      id = alertId;
    } else {
      _stack.push(id);
      _stackData[id] = {
        "msg": msg,
        "failed": failed,
        "location": CGI.getLocation()
      }
      if (_stack.length > 1) {
        return ;
      }
    }
    if (location != undefined && location != CGI.getLocation()) {
      (function() {
        var id = _stack.dequeue();
        delete _stackData[id];
        if (_stack.length > 0) {
          id = _stack[0];
          bc_alert(_stackData[id].msg, _stackData[id].failed, true, _stackData[id].location);
        }
      })();
      return;
    }
    $('body').append('<div id="' + id + '" class="bc-alert"><div></div><p class="alert-status"></p><p class="alert-msg"></p></div>');
    $obj = $('#' + id);
    if (failed == 'error') {
      $obj.addClass('error');
    }
    if (failed == 'error') {
      $obj.find('p.alert-msg').html(msg);
      $obj.find('p.alert-status').text('Failed');
    } else if (failed == 'ok') {
      $obj.find('p.alert-msg').html(msg);
      $obj.find('p.alert-status').text('Succeed');
    } else {
      $obj.find('p.alert-msg').remove();
      $obj.find('p').text('Saved');
    }

    (function($obj) {
      var h = setTimeout(function() {
        $obj.css({"opacity": 0});
        setTimeout(function() {
          var id = _stack.dequeue();
          $obj.remove();
          delete _stackData[id];
          if (_stack.length > 0) {
            id = _stack[0];
            bc_alert(_stackData[id].msg, _stackData[id].failed, true, _stackData[id].location);
          }
        }, 300);
      }, 3000);
      $obj.css({
        "left": (window.innerWidth - $obj.outerWidth()) / 2,
        "top": (window.innerHeight - $obj.outerHeight()) / 2,
        "opacity": 1
      }).on('click', function() {
        clearTimeout(h);
        $obj.unbind('click');
        $obj.css({"opacity": 0});
        setTimeout(function() {
          var id = _stack.dequeue();
          $obj.remove();
          delete _stackData[id];
          if (_stack.length > 0) {
            id = _stack[0];
            bc_alert(_stackData[id].msg, _stackData[id].failed, true, _stackData[id].location);
          }
        }, 300);
      });
    })($obj);
  };

})();

var periodPickerTypes = 'Enable:green:1|Disable:grey:0';

/**
 * ç”¨äºŽæž„é€ ä¸€ä¸ªæ¯å‘¨å°æ—¶å—é€‰æ‹©å™¨ï¼ˆPeriod Pickerï¼‰
 * ä½œè€…ï¼šç™¾å·è§†ç•Œ æ›¾é¹è¾‰
 * æ—¶é—´ï¼š2016-02-18
 */
function initPeriodPicker($obj) {
  var $es = $obj.find('tbody tr');
  var i = 0, types;
  var ppid = $obj.attr('id');
  var color0;
  var colors = [];
  types = periodPickerTypes.split('|');
  for (var j in types) {
    var type = types[j];
    if (typeof(type) != 'string')
      continue;
    type = type.split(':');
    if (j == 0) {
      color0 = type[1];
    }
    colors.push(type[1]);
    var tid = 'color-' + ppid + '-' + type[1];
    $('#' + $obj.attr('id') + '-selector').append('<input type="radio" id="' + tid + '" bc-color="' + type[1] + '" name="color-' + ppid + '"><label style="background: ' + type[1] + ';" for="' + tid + '">' + type[0] + '</label>');
    $('#' + tid).on('click',function() {
      $obj.attr('bc-color', $(this).attr('bc-color'));
    });
  }
  $('#' + $obj.attr('id') + '-selector').find('input[type=radio]').eq(0).click();
  i = 0;
  $es.each(function() {
    var j = 0;
    for (; j < 24; j++)
      $(this).append('<td class="ppker-timeblock" bc-day="' + i + '" bc-hour="' + j + '" style="background-color:' + color0 + '" bc-color="' + color0 + '" id="' + ppid + '-' + i + '-' + j + '"></td>');
    i++;
  });
  (function($obj, colors) {
    $obj.on('click', '.ppker-timeblock', function() {
      if ($obj.attr('disabled'))
        return false;
      var i = colors.indexOf($(this).attr('bc-color'));
      if (i == -1) {
        i = 0;
      } else {
        i = (i + 1) % colors.length;
      }
      $(this).attr('bc-color', colors[i]);
      $(this).css({'background-color': colors[i]});
    });
  })($obj, colors);
  $obj.attr('bc-color', color0);
  (function($obj, $mask) {
    var _beginX, _beginY;
    var _endX, _endY;
    var _dragging = false;
    $obj.on('mousedown', function(e) {
      if ($(this).attr('disabled'))
        return false;
      if (_dragging)
        return;
      if (e.button == 0 && !e.ctrlKey && !e.shiftKey) {
        _beginX = e.clientX - $obj.offset().left;
        _beginY = e.clientY - $obj.offset().top;
        _dragging = true;
      }
    }).on('mouseup', function(e) {
      if (!_dragging)
        return ;
      $mask.hide();
      _endX = e.clientX - $obj.offset().left;
      _endY = e.clientY - $obj.offset().top;
      _dragging = false;
      if (_beginX == _endX && _beginY == _endY) {
        return ;
      }
      var pos0 = {
        "x": Math.min(_beginX, _endX),
        "y": Math.min(_beginY, _endY)
      }, pos1 = {
        "x": Math.max(_beginX, _endX),
        "y": Math.max(_beginY, _endY)
      }, beginPos = null, endPos = null;
      function chkPointInRange(point, pos0, pos1) {
        if (point.x >= pos0.x && point.x <= pos1.x) {
          if (point.y >= pos0.y && point.y <= pos1.y)
            return true;
        }
        return false;
      }
      function chkBlockInRange($block, pos0, pos1) {
        var x = $block.offset().left - $obj.offset().left;
        var y = $block.offset().top - $obj.offset().top;
        if (chkPointInRange(pos0, {
          "x": x,
          "y": y
        }, {
          "x": x + $block.width(),
          "y": y + $block.height()
        })) {
          beginPos = {
            "x": parseInt($block.attr('bc-hour')),
            "y": parseInt($block.attr('bc-day'))
          };
        }
        if (chkPointInRange(pos1, {
          "x": x,
          "y": y
        }, {
          "x": x + $block.width(),
          "y": y + $block.height()
        })) {
          endPos = {
            "x": parseInt($block.attr('bc-hour')),
            "y": parseInt($block.attr('bc-day'))
          };
        }
      }
      var currMode = $obj.attr('data-mode');
      var $tbody = $obj.find('tbody[data-mode="' + currMode + '"]');
      $tbody.find('.ppker-timeblock').each(function() {
        chkBlockInRange($(this), pos0, pos1);
      });
      if (endPos !== null && beginPos !== null) {
        for (i = beginPos.y; i <= endPos.y; i++) {
          for (var j = beginPos.x; j <= endPos.x; j++) {
            $tbody.find('.ppker-timeblock[bc-day=' + i + '][bc-hour=' + j + ']')
            .attr('bc-color', $obj.attr('bc-color'))
            .css({'background-color': $obj.attr('bc-color')});
          }
        }
      }

    }).on('mousemove', function(e) {
      if (!_dragging)
        return;
      _endX = e.clientX - $obj.offset().left;
      _endY = e.clientY - $obj.offset().top;
      if (!$mask.is(':visible'))
        $mask.show();
      $mask.css({
        "left": $obj.offset().left + Math.min(_beginX, _endX) - $('.remote-main-view').offset().left,
        "top": $obj.offset().top + Math.min(_beginY, _endY) + $('.remote-main-view').scrollTop() - $('.remote-main-view').offset().top,
        "width": Math.max(_beginX, _endX) - Math.min(_beginX, _endX),
        "height": Math.max(_beginY, _endY) - Math.min(_beginY, _endY)
      });
    });
  })($obj, $obj.find('div.period-picker-mask'));
}

/**
 * æ ¹æ®æè¿°å­—ç¬¦ä¸²å¯¹æ—¶é—´é€‰æ‹©å™¨è¿›è¡Œèµ‹å€¼ã€‚
 */
function bitbltPeriodPicker($obj, sourceDat) {
  var tmp, map = {};
  var dat = JSON.parse(JSON.stringify(sourceDat));
  tmp = periodPickerTypes.split('|');
  for (var j in tmp) {
    var type = tmp[j];
    if (typeof(type) != 'string')
      continue;
    type = type.split(':');
    map[type[2]] = type[1];
  }

  var copy = {
    MD: 'Any Motion',
    TIMING: 'Regular',
    AI_PEOPLE: 'Human',
    AI_FACE: 'Face',
    AI_VEHICLE: 'Vehicle'
  }
  var detectionModeName = 'Detection';
  var detectionNames = ["MD", "AI_PEOPLE", "AI_FACE", "AI_VEHICLE"];
  var id = $obj.attr('id');
  var tablesNames = Object.keys(dat);
  var $tabsSelectWrap = $('#' + id + '-tabs-wrap');
  var $submodes = $('#' + id + '-submodes');
  var checkedMds = [];
  var detectionInited = false;

  var videoLossKey = 'VL';
  var $videoLossBox = $('#' + id + '-videoloss-box');
  var videolossIndex = tablesNames.findIndex(function (name) {
    return name === videoLossKey;
  })
  if (!~videolossIndex) {
    $videoLossBox.remove();
  } else {
    var videoLossEnable = dat[videoLossKey].includes('1');
    $videoLossBox.find('input').attr("checked",videoLossEnable);
    tablesNames.splice(videolossIndex, 1);
  }

  for (var index = 0; index < tablesNames.length; index++) {
    var element = tablesNames[index];
    var isDetectionNames = detectionNames.includes(element);
    const NAME = isDetectionNames ? detectionModeName : element;
    var tabId = id + '-tab-' + NAME;
    var hasDetectionNamesTab = !!$tabsSelectWrap.find('.tab-select-item[id="' + tabId + '"]').length;
    if (isDetectionNames) {
      var submodeId = id + '-submode-' + element;
      $submodes.append('<input type="checkbox" name="' + id + '-submodes" id="' + submodeId + '" value="' + element + '"><label for="' + submodeId + '">' + copy[element] + '</label>')
      var setted = dat[element].includes('1');

      if (setted) {
        checkedMds.push(element);
      }
    }

    if (!isDetectionNames || !hasDetectionNamesTab) {
      $tabsSelectWrap.append('<div class="tab-select-item" data-mode="' + NAME + '" id="' + tabId + '">' + (isDetectionNames ? detectionModeName : copy[element]) + '</div>');
      $('#' + tabId).on('click',function() {
        $obj.attr('data-mode', NAME);
        $obj.find('tbody').hide();
        $obj.find('tbody[data-mode="' + NAME + '"]').show();
        $(this).parent().find('.tab-select-item').removeClass('active');
        $(this).addClass('active');
        if ($(this).attr('id') === (id + '-tab-' + detectionModeName)) {
          $submodes.show();
        } else {
          $submodes.hide();
        }
      });
    }

    if (isDetectionNames && detectionInited && checkedMds[0] !== element ) {
      continue;
    }

    if (isDetectionNames) {
      detectionInited = true;
    }

    if ($obj.find('tbody[data-mode="' + NAME + '"]').length) {
      $obj.find('tbody[data-mode="' + NAME + '"]').remove();
    }

    var $newTbody = $obj.find('tbody[data-mode="demo"]').clone();
    $newTbody.attr('data-mode', NAME);
    $obj.find('table').append($newTbody);

    for (var i = 0; i < 7; i++) {
      for (var t = 0; t < 24; t++) {
        var color = map[dat[element][i * 24 + t]];
        var $block = $newTbody.find('[bc-day=' + i + '][bc-hour=' + t + ']');
        $block.attr('bc-color', color).css({
          "background-color": color
        });
      }
    }
  }

  $obj.find('tbody[data-mode="demo"]').remove();

  $tabsSelectWrap.find('.tab-select-item').eq(0).click();
  var $checkInput = $submodes.find('input');
  if (!checkedMds.length) {
    checkedMds.push($checkInput.eq(0).val())
  }
  $checkInput.val(checkedMds);

  $checkInput.on('click',function() {
    var currCheckedMds = [];
    $checkInput.each(function() {
      if ($(this).is(':checked')) {
        currCheckedMds.push($(this).val());
      }
    })
    var thisVal = $(this).val();
    if (currCheckedMds.length === 1 && currCheckedMds[0] === thisVal || currCheckedMds.length === 0) {
      $checkInput.val([thisVal]);
    }
  });
}

/**
 * èŽ·å–æ—¶é—´é€‰æ‹©å™¨çš„å€¼ã€‚
 */
function getPeriodPickerBits($obj) {
  var tmp, map = {};

  tmp = periodPickerTypes.split('|');
  for (var j in tmp) {
    var type = tmp[j];
    if (typeof(type) != 'string')
      continue;
    type = type.split(':');
    map[type[1]] = type[2];
  }
  var id = $obj.attr('id');
  var $submodes = $('#' + id + '-submodes');

  var res = {};
  var getTargetData = function ($target) {
    var checkedMdsRes = '';
    for (var i = 0; i < 7; i++) {
      for (var t = 0; t < 24; t++) {
        var color = $target.find('[bc-day=' + i + '][bc-hour=' + t + ']').attr('bc-color');
        checkedMdsRes += map[color];
      }
    }
    return checkedMdsRes;
  }
  var $tabsSelectWrap = $('#' + id + '-tabs-wrap');
  var $checkInput = $submodes.find('input');
  var detectionModeName = 'Detection';

  $tabsSelectWrap.find('.tab-select-item').each(function() {
    var currMode = $(this).attr('data-mode');
    if (currMode === detectionModeName) {
      var checkedMds = [];
      var noCheckedMds = []
      $checkInput.each(function () {
        var inputMode = $(this).val();
        if ($(this).is(':checked')) {
          checkedMds.push(inputMode)
        } else {
          noCheckedMds.push(inputMode)
        }
      })
      var $detectTbody = $obj.find('tbody[data-mode="' + detectionModeName + '"]')
      var checkedMdsDataString = getTargetData($detectTbody);
      checkedMds.forEach(function(mode) {
        res[mode] = checkedMdsDataString
      })
      var nonCheckedMdsDataString = checkedMdsDataString.replace(/\d/g, 0);
      noCheckedMds.forEach(function (mode) {
        res[mode] = nonCheckedMdsDataString
      })
    } else {

      res[currMode] = getTargetData($obj.find('tbody[data-mode="' + currMode + '"]'));
    }


  })

  var $videoLossBox = $('#' + id + '-videoloss-box');
  if (!!$videoLossBox.length) {
    for (var key in res) {
      res['VL'] = res[key].replace(/\d/g, ~~($videoLossBox.val));
      break;
    }
  }

  return res;
}

function onBindedVisibleClick() {
  var Ids = $(this).attr('bc-bind-visible');
  Ids = Ids.split('|');
  if ($(this).is(':checked')) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).show();
    });
  } else {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).hide();
    });
  }
}

function onBindedValue2Text() {
  var Ids = $(this).attr('bc-bind-value-to-text');
  Ids = Ids.split('|');
  (function($this) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).text($this.val());
    });
  })($(this));
}

function onBindedInvisibleClick() {
  var Ids = $(this).attr('bc-bind-invisible');
  Ids = Ids.split('|');
  if ($(this).is(':checked')) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).hide();
    });
  } else {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).show();
    });
  }
}

function onBindedDisablerClick() {
  var Ids = $(this).attr('bc-bind-disable');
  Ids = Ids.split('|');
  if ($(this).is(':checked')) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).attr('disabled', true);
    });
  } else {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).removeAttr('disabled');
    });
  }
}

function onBindedEnablerClick() {
  var Ids = $(this).attr('bc-bind-enable');
  Ids = Ids.split('|');
  if ($(this).is(':checked')) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).removeAttr('disabled');
    });
  } else {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).attr('disabled', true);
    });
  }
}

function onShowPasswordClick() {
  var Ids = $(this).attr('bc-bind-show-password');
  Ids = Ids.split('|');
  if ($(this).is(':checked')) {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).attr('type', 'text');
    });
  } else {
    $(Ids).each(function() {
      if (this.length)
        $('#' + this).attr('type', 'password');
    });
  }
}

function bindEnabler($checkbox) {
  $checkbox.each(function() {
    if ($(this).attr('bc-bind-enable')) {
      onBindedEnablerClick.call(this);
      $(this).on('click', onBindedEnablerClick);
    }
  });
};

function bindDisabler($checkbox) {
  $checkbox.each(function() {
    if ($(this).attr('bc-bind-disable')) {
      onBindedDisablerClick.call(this);
      $(this).on('click', onBindedDisablerClick);
    }
  });
};

function bindVisibler($checkbox) {
  $checkbox.each(function() {
    if ($(this).attr('bc-bind-visible')) {
      onBindedVisibleClick.call(this);
      $(this).on('click', onBindedVisibleClick);
    }
  });
};

function bindInvisibler($checkbox) {
  $checkbox.each(function() {
    if ($(this).attr('bc-bind-invisible')) {
      onBindedInvisibleClick.call(this);
      $(this).on('click', onBindedInvisibleClick);
    }
  });
};

function bindValue2Text($textbox) {
  $textbox.each(function() {
    if ($(this).attr('bc-bind-value-to-text')) {
      onBindedValue2Text.call(this);
      $(this).on('keydown', onBindedValue2Text).on('keyup', onBindedValue2Text).on('change', onBindedValue2Text);
    }
  });
};

function bindShowPassword($textbox) {
  $textbox.each(function() {
    if ($(this).attr('bc-bind-show-password')) {
      $(this).on('click', onShowPasswordClick);
    }
  });
};

// view-source:http://192.168.1.252/js/bc_enum.js?timeVersion=1620806528092

/*----------------------------------------------------------------------------
 *
 * 								æŽ¥å£æžšä¸¾ç±»
 *
 *----------------------------------------------------------------------------*/

/*
 * description: 		å½“å‰é¡µé¢
 */
var EnumCurState = {

  PREVIEW: "PREVIEW",
  PLAYBACK: "PLAYBACK",
  LOGIN: "LOGIN",
  LOADING: "LOADING",
  DOWNLOAD: "DOWNLOAD",
  INFO: "INFO",
  CONFIG: "CONFIG"
};

/*
 * description: 					ptzæ¨¡å¼ï¼ˆ0ä¸ºä¸æ”¯æŒptz	ï¼›1ä¸ºAFæ¨¡å¼ï¼›2ä¸ºPTZæ¨¡å¼ï¼‰
 */
var EnumPTZMode = {

  NONE: 0,
  AF: 1,
  PTZ: 2
};


/*
 * description: 					è¿žæŽ¥ç±»åž‹ (0ä¸ºipï¼›1ä¸ºp2p)
 */
var EnumLoginType = {

  IP: 0,
  UID: 1
};

/*
 * description: 					loginè¿”å›žç»“æžœ (0ä¸ºæˆåŠŸï¼›-1ä¸ºå¤±è´¥ï¼Œ -2ä¸ºç”¨æˆ·åæˆ–å¯†ç é”™è¯¯)
 */
var EnumLoginResult = {

  SUCCESS: 0,
  FAIL: -1,
  PASSWORD_ERROR: -2
};

/*
 * description: 					é€šé“çŠ¶æ€
 */
var EnumChannelStatus = {
  CLOSED: 0,
  PLAYING: 1
};

/*
 * description: 					è§†å›¾çŠ¶æ€
 */
var EnumViewStatus = {
  CLOSED: 0,
  PAUSED: 1,
  PLAYING: 2,
  ERROR: 3,
  BUFFERING: 4
};

/*
 * description: 					ç”»é¢æ¨¡å¼ï¼ˆ1ä¸ºä¸€ç”»é¢ï¼›4ä¸ºå››ç”»é¢ï¼›9ä¸ºä¹ç”»é¢ï¼›16ä¸ºåå…­ç”»é¢ï¼‰
 */
var EnumScreenMode = {

  ONE: 1,
  FOUR: 4,
  NINE: 9,
  SIXTEEN: 16
};

/*
 * description: 					ç æµç±»åž‹ï¼ˆ0ä¸ºå°ç æµï¼›1ä¸ºè¾…åŠ©ç æµï¼›2ä¸ºå¤§ç æµï¼›3ä¸ºè‡ªåŠ¨ï¼‰
 */
var EnumStreamType = {

  FLUENT: 0,
  BALANCED: 1,
  CLEAR: 2,
  CLIP: 4,
  AUTO: 3
};

var EnumRTMPStreamType = [
  1, 2, 0, 0, 3
];

/*
 * description: 					HSBç±»åž‹ï¼ˆ0ä¸ºhueï¼›1ä¸ºsaturationï¼›2ä¸ºbrightnessï¼›3ä¸ºcontrastï¼‰
 */
var EnumHSBType = {

  HUE: 0,
  SATURATION: 1,
  BRIGHTNESS: 2,
  CONTRAST: 3
};

/*
 * description: 					æ˜¯å¦è‡ªåŠ¨åˆ‡æ¢ç æµ  (treuä¸ºè‡ªåŠ¨   ï¼›   falseä¸ºæ‰‹åŠ¨)
 */
var EnumIsAutoStream = {
  AUTO: true,
  MANUAL: false
};

/*
 * description:  å³è¾¹æ å…ƒç´ åˆ—è¡¨é¡ºåº
 */
var EnumPreRightItem = {
  CHANNELS: 0,
  PTZ: 1,
  PRESET: 2,
  IMG: 3,
  ADV: 4,
  CROP: 5
};

/**
 * description:  ptz presetèœå•ç±»åž‹
 */
var EnumPrePresetMenuType = {
  PRESET: 0,
  CRUISE: 1
};

/**
 * description:  å›žæ”¾æ˜¾ç¤ºæ–‡ä»¶ç±»åž‹
 */
var EnumPbShowFileType = {
  SCHEDULE: 1 << 0,
  MANUAL: 1 << 1,
  ALARM: 1 << 2,
  ALL: 1 << 3
};

/**
 * description:		å›žæ”¾mode
 */
var EnumPbChannelMode = {
  ONE: 0,
  FOUR: 1
};

var EnumPBPlayState = {
  "PLAYING": 0,
  "IDLE": 1,
  "PAUSED": 2
};

var EnumPTZType = {
  "NONE": 0,
  "AF": 1,
  "PTZ": 2,
  "PT": 3,
  "PTZS": 4,
  "GM8136S_PTZ": 5
};

var EnumPatrolType = {
  "NONE": 0,
  "NORMAL": 1
};

var g_device;
var g_flashMode = false;
var g_sliderIsMouseDown = false;

var EnumCGIError = {
  "-3": "Failed to recognize the file format.",
  "-5": "No more available connections.",
  "-4": "Wrong input, please check again.",
  "-6": "Session expired, please log in again.",
  "-7": "Invalid username or password.",
  "-8": "Operation timeout! Please try again later.",
  "-9": "The upgrade method is not supported.",
  "-12": "Failed to get configuration, please try again.",
  "-13": "Failed to verify configuration, please try again.",
  "-20": "No enough memory for urgrade.",
  "-26": "You are not allowed to do this.",
  "-27": "Your account is invalid, please login again.",
  "-28": "The new user name has been taken.",
  "-29": "Failed to add more users because youâ€™ve reached the max number limit.",
  "-30": "Failed to upgrade as the selected package is identical with the current version.",
  "-31": "Device is busy, please try again later.",
  "-32": "Specific network address is conficted with other machine.",
  "-33": "Please type in the CAPTCHA in the image.",
  "-34": "Require binding email address",
  "-35": "Failed to bind",
  "-36": "Network timeout",
  "-37": "The password is incorrect",
  "-38": "UID is not valid",
  "-39": "The cloud account doesn't exist.",
  "-41": "Sorry,cloud storage is not available.",
  "-43": "Fail to bind",
  "-44": "An unknown error has occurred.",
  "-45": "Please type in the CAPTCHA in the image.",
  "-100": "Configuration test failed.",
  "-200": "FTP Login Failed.",
  "-201": "FTP Create Dir Failed.",
  "-202": "FTP Upload Failed.",
  "-203": "FTP Connect Server Failed.",
  0xfffffffa: "Location is changed.",
  0xffffffff: "Fatal error: Device responsed with an unexpected command result.",
  0xfffffffe: "Fatal error: Device returned a result with the invalid format..",
  0xfffffffc: "Fatal error: Failed to recognize data from the device.",
  0xfffffffd: "Network error: Unable to connect to device.",
  0xfffffffb: "Network error: Request timeout."
};

var EnumStreamFullNames = [
  'sub', 'extern', 'main', 'main', 'clip'
];

var EnumFlvStatus = {
  "normal": 0,
  "loading": 1,
  "disconnect": 2,
  'pause': 3,
  'stop': 4,
  'nofile': 5
};

var EnumFlvStretching = {
  'exactfit': 0,
  'screen': 1
}

var EnumPtzCheckState = {
  NEED_CHECK: 0,
  CHECKING: 1,
  CHECKED: 2
}

// view-source:http://192.168.1.252/js/utilities.js?timeVersion=1620806528092

/*
 *
 * tool function å·¥å…·å‡½æ•°
 *
 */

if (!String.prototype.repeat) {
  String.prototype.repeat = function(l) {
    var rtn = '';
    while (l-- > 0) {
      rtn += this;
    }
    return rtn;
  }
}

if (!String.random) {
  String.random = function(l) {
    var rtn = '', seed="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    while (l-- > 0) {
      rtn += seed[Math.floor(Math.random() * seed.length)];
    }
    return rtn;
  }
}

if (!String.prototype.leftPad) {
  String.prototype.leftPad = function(v, l) {
    var rtn = this, t = this;
    while ((t = v + t).length <= l) {
      rtn = t;
    }
    if (rtn.length < l) {
      rtn = v.substr(0, l - rtn.length) + rtn;
    }
    return rtn;
  }
}

if (!Date.prototype.getUnixDate) {
  Date.prototype.getUnixDate = function() {
    return this.getFullYear()
         + '-'+ (this.getMonth() + 1).toString().leftPad('0', 2)
         + '-' + this.getDate().toString().leftPad('0', 2)
         + ' ' + this.getHours().toString().leftPad('0', 2)
         + ':' + this.getMinutes().toString().leftPad('0', 2)
         + ':' + this.getSeconds().toString().leftPad('0', 2);
  };
}

if (!Date.prototype.getUnixDateOnly) {
  Date.prototype.getUnixDateOnly = function() {
    return this.getFullYear()
         + '-'+ (this.getMonth() + 1).toString().leftPad('0', 2)
         + '-' + this.getDate().toString().leftPad('0', 2);
  };
}

if (!Date.prototype.getUnixTimeOnly) {
  Date.prototype.getUnixTimeOnly = function() {
    return this.getHours().toString().leftPad('0', 2)
         + ':' + this.getMinutes().toString().leftPad('0', 2)
         + ':' + this.getSeconds().toString().leftPad('0', 2);
  };
}

if (!String.formatSize) {
  String.formatSize = function(size, ac) {
    if (!ac)
      ac = 1;
    var k = size * 1.0;
    var i = 0;
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    while (k >= 1048576) {
      i++;
      k /= 1024.0;
    }
    if (k >= 1024) {
      i++;
      k /= 1024.0;
    }
    return {'num': k>0?k.toFixed(ac):'0', 'unit': units[i]};
  };
}

/*
 * description: 					é”™è¯¯ç æžšä¸¾ç±»
 *
 */
var EnumErrorCode = {

	NOT_SUPPORT_IE_8 			: 			-10,
	NOT_SUPPORT_CANVAS 			: 			-11,
	DOWNLOAD_IE_PLUGIN 			: 			-12
}

/*
 * functionï¼š						æŽ§åˆ¶å°æ‰“å°
 * param:
 * 		string message: 			æŽ§åˆ¶å°æ‰“å°å†…å®¹
 * return:
 * 		void
 *
 */
function log(target, message) {

  if(!target) {

    target = "";
  }
  if(!message) {

    message = "";
  }
  var target = message + " ----- " + target;
  console.dbg(target)
}

/*
 *
 * function: 				èŒƒå›´çŸ«æ­£ï¼Œå¯¹è¶…å‡ºèŒƒå›´çš„å€¼è¿›è¡Œè¾¹å€¼çŸ«æ­£å³ï¼ŒèŒƒå›´ï¼ˆ1-100ï¼‰åˆ™ -1æ—¶ä¸º1 ï¼Œ101æ—¶ä¸º100
 * param:
 * 		int_32 baseData: 	å¾…çŸ«æ­£çš„å€¼
 * 		int_32 rangeStart:  èŒƒå›´å¼€å§‹å€¼
 * 		int_32 rangeEnd:	èŒƒå›´ç»“æŸå€¼
 * return:
 * 		int retï¼š			è¿”å›žçŸ«æ­£çš„å€¼ï¼ˆrangeStart-rangeEndï¼‰
 * 		default: 			é»˜è®¤çŸ«æ­£å¤±è´¥ -1
 *
 */
function adjustRange(baseData, rangeStart, rangeEnd) {

	var tag = getFuncName(arguments);
	try {

		if(rangeStart > rangeEnd) {

			log(tag, "range start is bigger than end");
			return -1;
		}
		if(baseData < rangeStart) {

			return rangeStart;
		} else if(baseData > rangeEnd) {

			return rangeEnd;
		}
		return baseData
	} catch(e) {

		log(tag, e.message);
		return -1;
	}

}

/*
 *
 * function: 				æ ¡éªŒåºå·æ˜¯å¦åœ¨èŒƒå›´å†…
 * param:
 * 		int_32 baseData: 	å¾…æ ¡éªŒçš„å€¼
 * 		int_32 rangeStart:  èŒƒå›´å¼€å§‹å€¼
 * 		int_32 rangeEnd:	èŒƒå›´ç»“æŸå€¼
 * return:
 * 		int retï¼š			æ ¡éªŒç»“æžœï¼ˆtrue ä¸ºåœ¨èŒƒå›´å†…ï¼Œ falseä¸ºåœ¨èŒƒå›´å¤–æˆ–è€…æ ¡éªŒå¤±è´¥ï¼‰
 * 		default: 			æ ¡éªŒå¤±è´¥ false
 *
 */
function isInRange(baseData, rangeStart, rangeEnd) {

	var tag = getFuncName(arguments);
	try {

		if(rangeStart > rangeEnd) {

			log(tag, "range start is bigger than end");
			return false;
		}
		if(rangeStart > baseData || rangeEnd < baseData) {

			return false;
		}
		return true;
	} catch(e) {

		log(tag, e.message);
		return false;
	}
}

/*
 *
 * function: 						åˆ¤æ–­æ˜¯å¦æ˜¯å­—ç¬¦ä¸²æ ¼å¼
 * paramï¼š
 * 		obj	value:					åˆ¤æ–­çš„å€¼
 * return:
 * 		boolean: 					trueä¸ºæ˜¯å­—ç¬¦ä¸²ï¼Œfalseä¸ºä¸æ˜¯å­—ç¬¦ä¸²
 *
 */
function isString(value){

	var tag = getFuncName(arguments);
	return (typeof value == 'string') && value.constructor == String;
}

/*
 *
 * function: 						å‡½æ•°åŠ¨æ€å‚æ•°è°ƒç”¨
 * paramï¼š
 * 		function functionName:		å‡½æ•°åç§°
 * 		array paramArray:			å‚æ•°æ•°ç»„
 * return:
 * 		void
 *
 */
function doCallBack(functionName, paramArray) {

	var tag = getFuncName(arguments);
	if(!functionName) {

		log(tag, "function name is null")
		return;
	}
	return functionName.apply(this, paramArray);
}

/*
 *
 * function: 						èŽ·å–æ–¹æ³•åç§°ï¼ˆä½¿ç”¨èŒƒå›´ä¸º function fun(){]è¿™ç§ç±»åž‹ï¼Œ
 * 											var fun = function(){}è¿™ç§ç±»åž‹ï¼Œæš‚æ—¶ä¸æ”¯æŒï¼‰
 * paramï¼š
 * 		arguments argumentValues:	jså‡½æ•°çš„å‚æ•°å±žæ€§
 * return:
 * 		string ret: 				å‡½æ•°æ–¹æ³•
 * 		default:					""
 *
 */
function getFuncName (argumentValues){

	var tag = "getFuncName";
	try {

		var tmp = argumentValues.callee.toString();
		var re = /function\s*(\w*)/i;
		var matches = re.exec(tmp);
		return matches[1];
	} catch(e) {

		log(tag, e.message);
		return ""
	}
}

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var base64DecodeChars = new Array(
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
                  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
                  -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
                  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
                  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function utf16to8(str) {
  var out, i, len, c;

  out = "";
  len = str.length;
  for(i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
    }
  }
  return out;
}

function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = str.length;
  i = 0;
  while(i < len) {
    c = str.charCodeAt(i++);
    switch(c >> 4)
    {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += str.charAt(i-1);
        break;
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x0F) << 12) |
                       ((char2 & 0x3F) << 6) |
                       ((char3 & 0x3F) << 0));
        break;
    }
  }

  return out;
}

function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;

  len = str.length;
  i = 0;
  out = "";
  while(i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if(i == len)
    {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if(i == len)
    {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}

function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;

  len = str.length;
  i = 0;
  out = "";
  while(i < len) {
    /* c1 */
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c1 == -1);
    if(c1 == -1)
      break;

    /* c2 */
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c2 == -1);
    if(c2 == -1)
      break;

    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    /* c3 */
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if(c3 == 61)
        return out;
      c3 = base64DecodeChars[c3];
    } while(i < len && c3 == -1);
    if(c3 == -1)
      break;

    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

    /* c4 */
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if(c4 == 61)
        return out;
      c4 = base64DecodeChars[c4];
    } while(i < len && c4 == -1);
    if(c4 == -1)
      break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  return out;
}

//input base64 encode
function str_decode(str){
  return utf8to16(base64decode(str));
}

function str_encode(str){
  return base64encode(utf16to8(str));
}


// array
Array.prototype.in_array = function(e) {

  for(var i = 0; i < this.length; ++ i) {

    if(this[i] == e) {
      return true;
    }
  }

  return false;
}

//
function GetArgsFromHref(sArgName) {

  var sHref = window.location.href;
  var args = sHref.split("?");
  var retval = "";

  if(args[0] == sHref) /*â‰¤Å’Â ËÅ’â„¢Ã¸â€™*/
  {
    return retval; /*Å’ï¬â€“Ã‹â—ŠË†Â»Å’âˆ«Å’Â¥Â¶Â¿ÃŒ*/
  }
  var str = args[1];
  args = str.split("&");
  for(var i = 0; i < args.length; i ++)
  {
    str = args[i];
    var arg = str.split("=");
    if(arg.length <= 1) continue;
    if(arg[0] == sArgName) retval = arg[1];
  }
  return retval;
}

//
function oneToZeroOne(num) {

  var numString = num.toString();
  numString.length == 1 ? numString = "0" + numString : numString = numString;
  return numString;
}

function isIe() {
  //æ–¹ä¾¿IEæµè§ˆå™¨è°ƒè¯•ï¼Œæœ€åŽå¯æ³¨é‡Šåˆ é™¤
  var strPlatform  = navigator.platform.toLowerCase();
  var strUserAgent = navigator.userAgent.toLowerCase();

  if (strPlatform.indexOf("win32") != -1
    || strUserAgent.indexOf("windows nt") != -1)
  {
    if (strUserAgent.indexOf("chromeframe") != -1)
    {
      return true;
    }
    else if (strUserAgent.indexOf("chrome") != -1
         || strUserAgent.indexOf("firefox") != -1
         || strUserAgent.indexOf("safari")  != -1)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  else
  {
    return false;
  }
}

function isSafari()
{
  var strUserAgent = navigator.userAgent.toLowerCase();
  if(strUserAgent.indexOf("safari") != -1 && strUserAgent.indexOf("chrome") == -1 ){
    return true;
  }
  return false;
}

function isOldEdge() {
  var strUserAgent = navigator.userAgent.toLowerCase();
  if(strUserAgent.indexOf("edge") !== -1) {
    return true;
  }
  return false;
}

function isMac() {

  if(String(navigator.platform).indexOf("Mac") < 0) {
    return false;
  } else {
    return true;
  }
}

function LOG(text) {

  console.dbg(text);
}

if (Object.defineProperty) {

  Object.defineProperty(console, "isDebug", {

    "get" : function() {

      return this.__isDebug;
    },

    "set" : function(v) {

      this.__isDebug = v;

      if (v) {

        this.dbg = this.debug;

      } else {

        this.dbg = function() {};
      }
    }
  });

  console.dbg = function() {};

} else {

  console.dbg = function() {
    if (this.isDebug) {
      this.debug.apply(this, arguments);
      this.trace();
    }
  };

}

if (window.location.search.indexOf('debug') >= 0) {
  console.isDebug = true;
}

function isValidValue(v) {
  return !(v === null || v === undefined);
}
/** no semicolon input */
function containsSemicolon(list) {
  for(key in list) {
    if(typeof list[key] == "string" && list[key].indexOf(';') >= 0) {
      return true;
    }
  }
  return false;
}

function setCookie(name, value, time) {

  var expires = '';
  if ((typeof(time)==="number") && (time!==Infinity) && !isNaN(time)) {
    var date = new Date();
    date.setTime(date.getTime() + time);
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + '=' + value + '; path=/; ' + expires;

}

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

function allowFlv() {

  setCookie('is_allow_flv', '', -3600);

}

function closeFlv() {

  setCookie('is_allow_flv', 'not_allowed', 24 * 60 * 60 * 1000);

}

function isAllowFlv() {
  return getCookie('is_allow_flv') !== 'not_allowed';
}

function isBrowserSupportFlv() {  // åˆ¤æ–­æµè§ˆå™¨æ˜¯å¦æ”¯æŒflv
  return (!isIe()) && flvjs.isSupported();
}

function flashCheck() {  // åˆ¤æ–­æ˜¯å¦ä½¿ç”¨flashæ’­æ”¾
  return !isAllowFlv() || !isBrowserSupportFlv();
}

function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// view-source:http://192.168.1.252/js/utils-classes.js?timeVersion=1620806528092


/**
 * class WebLoader
 * ç”¨äºŽå¼‚æ­¥åŠ è½½èµ„æº
 */
function WebLoader(onOkay, onFail) {
  var _cnt = 0;
  var _completed = 0;
  var _vars = {};

  this.onOkay = onOkay;
  this.onFail = onFail;

  this.fail = function(data) {
    this.onFail && this.onFail(data);
    this.onFail = undefined;
    return this;
  };

  this.success = function () {
    _completed++;
    if (_completed == _cnt) {
      this.onOkay && this.onOkay(_vars);
      this.onOkay = undefined;
    }
    return this;
  };

  this.regVar = function (n, v) {
    _vars[n] = v;
    return this;
  };

  this.listen = function (fn) {
    _cnt++;
    fn(this);
    return this;
  };

  this.loadAjax = function (dataId, ajaxCfg) {
    var loader = this;
    ajaxCfg.success = function (dat) {
      loader.regVar(dataId, dat);
      loader.success();
    };
    ajaxCfg.error = function (e) {
      loader.fail(dataId);
    };
    ajaxCfg.dataType = 'text';
    ajaxCfg.complete = function(XHR, TS) { XHR = null; };
    $.ajax(ajaxCfg);
    _cnt++;
    return this;
  };

  this.loadCSS = function (dataId, url) {

    var loader = this;

    var tag = document.createElement('link');
    tag.href = url;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.id = dataId;
    tag.onload = tag.onreadystatechange = function() {

      if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {

        loader.success();

      } else {

        loader.fail();
      }
    };

    document.getElementsByTagName('head')[0].appendChild(tag);

    _cnt++;
    return this;
  };

}

function EventListener() {
  var _eventList = {};

  /**
   * Bind a function as an event listener.
   */
  this.on = function(e, fn) {
    if (!_eventList[e]) {
      _eventList[e] = [];
    }
    _eventList[e].push(fn);
    return this;
  };

  /**
   * Unbind an event's listeners.
   */
  this.unbind = function(e) {
    _eventList[e] = [];
    return this;
  };

  /**
   * Invoke an event.
   */
  this.trigger = function(e, args) {
    var elist = _eventList[e];

    if (!elist) {
      return this;
    }

    for ( var i in elist) {
      if (elist[i].apply(this, args) === false)
        break;
    }

    return this;
  };

  /**
   * Invoke an event in async way.
   */
  this.asyncTrigger = function(e, args) {
    var elist = _eventList[e];

    if (!elist) {
      return this;
    }

    (function(elist, obj, args) {
      setTimeout(function() {
        for ( var i in elist) {
          if (elist[i].apply(obj, args) === false)
            break;
        }
      }, 0);
    })(elist, this, args);

    return this;
  };
}

// view-source:http://192.168.1.252/js/ViewWaiting.js?timeVersion=1620806528092


function ViewWaiting(cfg) {

  var $obj;

  EventListener.apply(this);

  this.id = cfg.id ? cfg.id: String.random(32);
  this.text = cfg.text? cfg.text: 'Operating...';

  cfg.cancel && this.on('cancel', cfg.cancel);

  function createView(id, text) {
    var $rtn;
    $('body').append('<div id="view-wait-' + id + '" class="view-wait-frame default-hidden"><div class="view-wait-helper"></div><div class="view-wait-hc-helper"><div class="view-wait-helper"></div><div class="view-wait-box"><div class="wait-image"></div><div class="wait-text"></div><div class="wait-text wait-text-tips" style="margin-top: 8px; font-weight: bold; color: gray;">Please wait a while.</div></div><div class="view-wait-helper"></div></div><div class="view-wait-helper"></div></div>');
    $rtn = $('#view-wait-' + id);
    $rtn.find('.wait-text').eq(0).html(text);
    return $rtn;
  }

  $obj = $('#view-wait-' + this.id);

  if (!$obj.length) {
    $obj = createView(this.id, this.text);
  }

  this.setText = function(text) {
    $obj.find('.wait-text').eq(0).html(text);
  };

  this.$ = function() {
    return $obj;
  };

  this.show = function (text) {
    if (text !== undefined) {
      this.setText(text);
    }
    $obj.removeClass('default-hidden');
    ViewWaiting.resize();
  };

  this.hide = function () {
    $obj.addClass('default-hidden');
  };

  this.cancel = function () {
    this.hide();
    this.trigger('cancel');
  };

  this.destroy = function() {
    $obj.remove();
  };

  this.setQuickCancel = function(flag) {
    if (flag) {
      $obj.unbind('click');
      (function(view, $obj) {
        $obj.on('click', function(e) {

          if ($(e.target).attr('id') == $(this).attr('id') || $(e.target).hasClass('view-wait-helper')) {
            view.cancel();
          }
        });
      })(this, $obj);
    } else {
      $obj.unbind('click');
    }
  };

  this.setQuickCancel(cfg.quickCancel);

}

ViewWaiting.resize = function() {
  $('.view-wait-frame').height($(window).innerHeight());
  $('.view-wait-frame').width($(window).innerWidth());
};

// view-source:http://192.168.1.252/js/ViewManager.js?timeVersion=1620806528092

/**
 * ViewManager ç±»è´Ÿè´£å„ä¸ªè§†å›¾çš„é›†ä¸­ç®¡ç†ã€‚
 *
 * ä½œè€…ï¼šéŸ¦å®
 * æ—¥æœŸï¼š2016-01-22 14:30
 */

/**
 * class ViewManager
 *
 * Events:
 *
 *   onDrop(View viewObj, jQuery $viewObj, jQuery $channelObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨æ‹–æ”¾äº‹ä»¶è§¦å‘æ—¶å‘ç”Ÿçš„
 *   View viewObj     è§†å›¾å¯¹è±¡
 *   jQuery $viewObj    è§†å›¾jQueryå¯¹è±¡
 *   jQuery $channelObj   é€šé“jQueryå¯¹è±¡
 *
 *   onClose(View viewObj, jQuery $viewObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨é€šé“ç»‘å®šè¢«å…³é—­æ—¶å‘ç”Ÿçš„
 *   View viewObj     è§†å›¾å¯¹è±¡
 *   jQuery $viewObj    è§†å›¾jQueryå¯¹è±¡
 *
 *   onSnap(View viewObj, jQuery $viewObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨æˆªå›¾æŒ‰é’®è¢«å•å‡»æ—¶å‘ç”Ÿçš„
 *   View viewObj     è§†å›¾å¯¹è±¡
 *   jQuery $viewObj    è§†å›¾jQueryå¯¹è±¡
 *
 *   onRecord(View viewObj, jQuery $viewObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨å½•åƒæŒ‰é’®è¢«å•å‡»æ—¶å‘ç”Ÿçš„
 *   View viewObj     è§†å›¾å¯¹è±¡
 *   jQuery $viewObj    è§†å›¾jQueryå¯¹è±¡
 */
function ViewManager() {
  throw {"msg": "Don't NEW a singleton."};
}

EventListener.apply(ViewManager);

(function() {

  var _screenViews = EnumScreenMode.NINE;

  var _mode = EnumCurState.LOGIN;

  var _curPage = 0;

  var _curPageCount = 1;

	var _maxViews = {
		"PREVIEW" : 16,
		"PLAYBACK" : 4
	};

	var _viewObjs = {
		"PREVIEW" : [],
		"PLAYBACK" : []
	};

	var _storedStatus = {
		"PREVIEW" : null,
		"PLAYBACK" : null
	};

	/**
	 * å‚¨å­˜å½“å‰æ¨¡å¼ä¸‹å¹³é¢çš„çŠ¶æ€ä¿¡æ¯ã€‚
	 */
	ViewManager.storeScreen = function () {
		if (!this.checkMode())
			return false;

		_storedStatus[_mode] = {
			"selectedView": this.getSelectedView().getId(),
			"currentPage": _curPage,
			"currentPageCount": _curPageCount,
			"screenView": _screenViews
		};

		return true;
	};

	/**
	 * è¿˜åŽŸä¸Šæ¬¡å‚¨å­˜çš„ï¼Œå½“å‰æ¨¡å¼ä¸‹å¹³é¢çš„çŠ¶æ€ä¿¡æ¯ã€‚
	 */
	ViewManager.recoverScreen = function () {
		if (!this.checkMode() || !_storedStatus[_mode])
			return false;

		this.getViewObject(_storedStatus[_mode].selectedView).setSelected();
		_curPage = _storedStatus[_mode].currentPage;
		_curPageCount = _storedStatus[_mode].currentPageCount;
		_screenViews = _storedStatus[_mode].screenView;

		_storedStatus[_mode] = null;

		return true;
	};

	/**
	 * æœ¬æ–¹æ³•æ£€æŸ¥ å½“å‰mode æ˜¯å¦ä¸º ViewManager çš„å¯ç”¨å·¥ä½œæ¨¡å¼
	 */
	ViewManager.checkMode = function () {
		if (_mode == EnumCurState.PREVIEW || _mode == EnumCurState.PLAYBACK)
			return true;
		return false;
	};

  ViewManager.setMode = function(mode) {
  	_mode = mode;
  	return this;
  };

  ViewManager.getMode = function() {
  	return _mode;
  };

	ViewManager.getMaxPage = function() {
		return _curPageCount;
	}

	//èŽ·å–æœ€å¤§Viewå€¼
  ViewManager.getMaxViewNumber = function() {
  	if (this.checkMode())
  		return _maxViews[_mode];
  	return null;
  };

	//èŽ·å–ç”»é¢æ•°
  ViewManager.getScreenViews = function() {
    return _screenViews;
  };

	//è®¾ç½®å½“å‰ç”»é¢æ•°
  ViewManager.setScreenViews = function(newScreenViews) {
  	switch(newScreenViews){
		case EnumScreenMode.ONE:
		case EnumScreenMode.FOUR:
		case EnumScreenMode.NINE:
		case EnumScreenMode.SIXTEEN:
			break;
		default:
			return false;
  	}
  	_screenViews = newScreenViews;
  	_curPageCount = Math.ceil(this.getMaxViewNumber() / _screenViews);
  	return true;
  };

	//èŽ·å–å½“å‰é¡µ
  ViewManager.getCurrentPage = function() {
    return _curPage;
  };

	//è®¾ç½®å½“å‰é¡µ
  ViewManager.setCurrentPage = function(newPage) {
    if (newPage >= 0 && newPage < this.getMaxPage()) {
      _curPage = newPage;
      return true;
    }
    return false;
  };

  ViewManager.getViewObject = function(index) {
  	if (this.checkMode())
  		return _viewObjs[_mode][index];
  	return null;
  };

  ViewManager.init = function(){
  	for (var mode in _maxViews) {
	  	for(var i = 0; i < _maxViews[mode]; i++) {
	  		var viewObj = new View(i, mode);
	  		viewObj.setup();
	  		_viewObjs[mode].push(viewObj);
	  	}
			_viewObjs[mode][0].setSelected();
	  }

  	this.initEvents();
  	delete this.init;
  };

	/**
	 * ç»‘å®šå¹³é¢åˆ‡æ¢æŽ§åˆ¶å™¨çš„äº‹ä»¶
	 */
	ViewManager.initEvents = function () {

    // preview buttom button

    $("#preview_preview_screen_button").click(function () {
    	ViewManager.showPreviousPage();
    });

    $("#preview_next_screen_button").click(function () {
    	ViewManager.showNextPage();
    });

    $("#preview_screen_1").click(function () {
    	ViewManager.showScreen(EnumScreenMode.ONE);
    });

    $("#preview_screen_4").click(function () {
    	ViewManager.showScreen(EnumScreenMode.FOUR);
    });

    $("#preview_screen_9").click(function () {
    	ViewManager.showScreen(EnumScreenMode.NINE);
    });

    $("#preview_screen_16").click(function () {
    	ViewManager.showScreen(EnumScreenMode.SIXTEEN);
    });

		delete this.initEvents;

	};

	/**
	 *  æ ¹æ®è§†å›¾æ•°æ˜¾ç¤ºå¯¹åº”çš„å±å¹•
	 *  ä¼šåˆ‡æ¢åˆ°å½“å‰é€‰æ‹©çš„è§†å›¾å¯¹åº”çš„é¡µé¢
	 * @param EnumScreenMode scrm
	 */
	ViewManager.showScreen = function (scrm, doforce) {
		if(this.getScreenViews() === scrm && !doforce)
			return;

		this.setScreenViews(scrm);
		this.setCurrentPage(Math.floor(this.getSelectedView().getId() / this.getScreenViews()));
		this.updateView();
	};

	/**
	 * åˆ‡æ¢ä¸‹ä¸€é¡µ
	 */
	ViewManager.showNextPage = function () {
		var curPage = this.getCurrentPage();
		var maxPage = this.getMaxPage();
		if(curPage < maxPage - 1){
			this.setCurrentPage(curPage + 1);
			this.updateView();
		}
	};

	/**
	 * åˆ‡æ¢ä¸Šä¸€é¡µ
	 */
	ViewManager.showPreviousPage = function () {
		var curPage = this.getCurrentPage();
		if(curPage > 0){
			this.setCurrentPage(curPage - 1);
			this.updateView();
		}
	};

	ViewManager.getSelectedView = function () {
		var $obj = $('.view-block.selected[bc-view-mode="' + _mode + '"]');
		if ($obj.length == 0)
			return null;
		return this.getViewObject(parseInt($obj.attr('bc-view-id')));
	};


  ViewManager.updateView = function(){
  	if (!this.checkMode())
  		return false;
		var length = (1 + this.getCurrentPage()) * this.getScreenViews();

		$('.' + VIEW_DOM_CLASS).hide();
		$('.fplayer-mask').hide();

		var viewLength = Math.sqrt(this.getScreenViews());

		for(var index = this.getCurrentPage() * this.getScreenViews(); index < length; index++){
			var viewObj = this.getViewObject(index);
			if(viewObj != null ){
				viewObj.resize(viewLength, index % this.getScreenViews());
				viewObj.show();
				// var channel = viewObj.getChannelId();
				// if((channel != null) && (channel >= 0 && channel < ChannelManager.getNumber())){
				// 	var channelObj = ChannelManager.get(channel);
				// 	var channelStatus = channelObj.getStatus();
				// 	if(EnumChannelStatus.CLOSED === channelStatus){
				// 		continue;
				// 	}
				// 	var isAuto = channelObj.getAuto();
				// 	var streamType = channelObj.getStream();
				// 	channelObj.open(streamType, isAuto);
				// }
			}else{
				continue;
			}

		}

		this.trigger('updateView');
	};

	ViewManager.showScreenByChannels = function (){
		var channelCount = ChannelManager.getNumber();
    channelCount = 16;
    var $screen1 = $("#preview_screen_1");
    var $screen4 = $("#preview_screen_4");
    var $screen9 = $("#preview_screen_9");
    var $screen16 = $("#preview_screen_16");
    var $scrollView = $("#preview_li_scroll");
    var $previewScrennControl = $("#preview_screnn_control");

    var $preScreenContainer = $("#pre_toolbar_screen_container");
    if (channelCount <= 1) {
      $screen1.hide();
      $screen4.hide();
      $screen9.hide();
      $screen16.hide();
    } else if (channelCount > 1 && channelCount <= 4) {
      $screen1.show();
      $screen4.show();
      $screen9.hide();
      $screen16.hide();
    } else if (channelCount > 4 && channelCount <= 9) {
      $screen1.show();
      $screen4.show();
      $screen9.show();
      $screen16.hide();
    } else {

      $screen1.show();
      $screen4.show();
      $screen9.show();
      $screen16.show();
    }

    if (channelCount <= 1) {
      $preScreenContainer.hide();
    } else {
      $preScreenContainer.show();
    }
	};

})();

// view-source:http://192.168.1.252/js/View.js?timeVersion=1620806528092

/**
 * View ç±»æä¾›å„ä¸ªå…·ä½“è§†å›¾çš„æ“ä½œæŽ¥å£ï¼Œç”± ViewManager ç±»ç»Ÿä¸€ç®¡ç†ã€‚
 *
 * ä½œè€…ï¼šæ›¾é¹è¾‰
 * æ—¥æœŸï¼š2016-01-22 14:50
 */
var VIEW_DOM_ID_PREFIX = 'view-block-';
var VIEW_DOM_CLASS = 'view-block';

function View(id, mode) {

  var _mode = mode,
    _id = id,
    _$this = null,
    _channel = null,
    _status;

  EventListener.apply(this);

  /**
   * åˆ¤æ–­æ˜¯å¦æ­£åœ¨å½•åƒã€‚
   */
  this.isRecording = function () {
    return _$this.find('.view-record.onwork').length == 1;
  };

  /**
   * ç»‘å®šä¸€ä¸ªé€šé“
   * @param uint id   è¢«ç»‘å®šçš„é€šé“å·
   */
  this.bindChannel = function(id) {
    _$this.attr('bc-channel-id', id).find('.view-channel-id').text(id + 1);
    _$this.removeClass('no-channel');
    _channel = id;
    return this;
  };

  /**
   * ä¸Žå½“å‰ç»‘å®šçš„é€šé“è§£ç»‘
   */
  this.unbindChannel = function() {
    if (this.isEmpty()) {
      return this;
    }
    _$this.addClass('no-channel');
    var id = _channel;
    _$this.removeAttr('bc-channel-id').find('.view-channel-id').text('00');
    _channel = null;
    return this;
  };

  /**
   * æœ¬ View æ˜¯å¦å·²ç»åˆ›å»ºã€‚
   */
  this.isAvailable = function() {
    return _$this !== null;
  };

  /**
   * èŽ·å–å½“å‰ View çš„å¯è§†åŒºå°ºå¯¸ã€‚
   * @return jQuery
   */
  this.getClientArea = function() {
    var rtn = {
      "top": 2 + parseFloat(_$this.css('top')) + _$this.find('.view-toolbar').outerHeight(),
      "left": 2 + parseFloat(_$this.css('left'))
    };
    rtn.height = _$this.height() - _$this.find('.view-toolbar').outerHeight();
    rtn.width = _$this.width();
    return rtn;
  };

  /**
   * æ˜¯å¦æœ‰ç»‘å®šé€šé“ã€‚
   */
  this.isEmpty = function() {
    return _channel === null;
  };

  /**
   * èŽ·å–é€šé“å·ï¼Œå¦‚æžœå½“å‰æœªç»‘å®šï¼Œè¿”å›ž null
   */
  this.getChannelId = function() {
    return _channel;
  };

  /**
   * èŽ·å–å·¥ä½œæ¨¡å¼ï¼ˆPreview/Playbackï¼‰
   */
  this.getMode = function() {
    return _mode;
  };

  /**
   * èŽ·å–è§†å›¾ ID
   */
  this.getId = function() {
    return _id;
  };

  /**
   * è®¾ç½®è¯¥è§†å›¾ä¸ºé€‰ä¸­è§†å›¾
   */
  this.setSelected = function() {
    $('.' + VIEW_DOM_CLASS + '.selected[bc-view-mode="' + _mode + '"]').removeClass('selected');
    _$this.addClass('selected');
    ViewManager.trigger('selected', [this]);
    return this;
  };

  /**
   * åˆ¤æ–­è§†å›¾æ˜¯å¦è¢«é€‰ä¸­ã€‚
   */
  this.isSelected = function() {
    return _$this.hasClass('selected');
  };

  /**
   * æ˜¾ç¤ºè¯¥è§†å›¾
   */
  this.show = function() {
    _$this.show();
    this.trigger('show');
    return this;
  };

  /**
   * éšè—è¯¥è§†å›¾
   */
  this.hide = function() {
    _$this.hide();
    this.trigger('hide');
    return this;
  };

  /**
   * åˆ·æ–°æ ‡é¢˜å¤„æ˜¾ç¤ºçš„ChannelçŠ¶æ€
   * @param EnumViewStatus status   æ–°çš„æ’­æ”¾çŠ¶æ€
   * @param EnumStreamType  streamType å½“å‰ç æµç±»åž‹
   */
  this.updateStatus = function(status, streamType) {
    var $status = _$this.find('.view-channel-status');
    var streamTypes = ['Fluent', 'Balanced', 'Clear', "Auto", "Clip"];
    _$this.removeClass('playing');
    switch (status) {
    case EnumViewStatus.BUFFERING:
      $status.text('Buffering');
      break;
    case EnumViewStatus.ERROR:
      $status.text('Error Occured');
      break;
    case EnumViewStatus.PAUSED:
      $status.text('Paused');
      break;
    case EnumViewStatus.PLAYING:
      _$this.addClass('playing');
      if (streamTypes[streamType] !== undefined) {
        $status.text(streamTypes[streamType]);
      } else
        $status.text('Error');
      break;
    case EnumViewStatus.CLOSED: //ç›´æŽ¥è¢«éšè—äº†ï¼Œä¸æ˜¾ç¤º
    default:
      break;
    }
    _status = status;

    _$this.find('.view-fill').attr('title', 'Center').addClass('exfit');
  };

  this.getStatus = function () {
    return _status;
  };

  /**
   * è®¡ç®—è¯¥è§†å›¾çš„ DOM Id
   * @param int id
   * @param string mode
   */
  function _getDOMId(id, mode) {
    return VIEW_DOM_ID_PREFIX + mode + '-' + _id;
  }

  if ($('#' + _getDOMId(_id, _mode)).length > 0) {
    throw {"msg": "This view block was already created."};
  }

  /**
   * åˆ›å»ºè§†å›¾çš„DOMå¯¹è±¡
   */
  this.setup = function() {

    var domId = _getDOMId(_id, _mode);
    var $title = $('<div id="' + domId + '-toolbar" class="view-toolbar"><div class="view-title">CH <span class="view-channel-id">00</span> - <span class="view-channel-status">Paused</span></div></div>');
    _$this = $('<div id="' + domId + '" bc-view-mode="' + _mode + '" bc-view-id="' + _id + '" class="' + VIEW_DOM_CLASS + ' no-channel"></div>');

    var $playerWraper = flashCheck() ? $('#preview_plugin_container') : $('.h5_player_wrapper');

    $playerWraper.append(_$this);

    _$this.append($title);

    (function(viewObj, domId, $obj, $title) {
      var $tmp;

      if(isBrowserSupportFlv()) {
        $tmp = $('<div title="" id="' + domId + '-switch" class="view-tool-button view-switch-player"></div>');
        $title.append($tmp);
        if(flashCheck()) {
          $tmp.attr('title', 'Switch to HTML5 player');
          $tmp.addClass('h5-player');
        } else {
          $tmp.attr('title', 'Switch to flash player');
          $tmp.addClass('flash-player');
        }
        $tmp.on('click', function() {
          $(this).hasClass('h5-player') ? allowFlv() : closeFlv();
          location.reload();
        });

      }
      $tmp = $('<div title="Center" id="' + domId + '-fill" class="view-tool-button view-fill exfit"></div>');
      $title.append($tmp);
      $tmp.on('click', function() {
        ViewManager.trigger('fillmode', [viewObj, $obj]);
        return false;
      });
      if (viewObj.getMode() === EnumCurState.PLAYBACK) {
        $tmp = $('<div title="Download" id="' + domId + '-download" class="view-tool-button view-download"></div>');
        $title.append($tmp);
        $tmp.on('click', function() {
          if (ControllerLogin.chkPermission('recDownload', 'read', 0)) {
            ViewManager.trigger('download', [viewObj, $obj]);
          } else {
            bc_alert("You have no permission to download video.", "error");
          }
          return false;
        });
      } else {
        $tmp = $('<div title="WLAN" id="' + domId + '-network" class="view-tool-button view-network-style view-wifi"></div>');
        $title.prepend($tmp);
        $tmp = $('<div title="Snap" id="' + domId + '-snap" class="view-tool-button view-snap"></div>');
        $title.append($tmp);
        $tmp.on('click', function() {
          if (ControllerLogin.chkPermission('snap', 'read', 0)) {
            ViewManager.trigger('snap', [viewObj, $obj]);
          } else {
            bc_alert("You have no permission to download video.", "error");
          }
          return false;
        });

        if (ControllerLogin.chkLowestVersion('supportFLswitch', 0, 0)) {
          $btnLightup = $('<div title="floodlight" id="' + domId + '-floodlight" class="view-tool-button view-floodlight"></div>');
          $title.append($btnLightup);
          $btnLightup.on('click', function() {
            ViewManager.trigger('lightup', [viewObj, $obj]);
            return false;
          });
        }
      }

      $tmp = $('<div title="Close" id="' + domId + '-shutdown" class="view-tool-button view-shutdown"></div>');
      $title.append($tmp);
      $tmp.on('click', function() {
        ViewManager.trigger('close', [viewObj, $obj]);
        $(this).addClass('no-channel');
        return false;
      });

      $obj.droppable({"drop": function(ev, ui) {
        ViewManager.trigger('drop', [viewObj, $obj, ui.draggable.parent()]);
      }});

      $obj.on('click', function(e) {
        viewObj.setSelected();
        ViewManager.trigger('click', [viewObj, $obj]);
      });

      $obj.on('dblclick', function() {
        ViewManager.trigger('dblclick', [viewObj, $obj]);
      });

    })(this, domId, _$this, $title);
    delete this.setup;

    return this;
  };

  /**
   * è°ƒæ•´è§†å›¾çš„ä½ç½®å’Œå°ºå¯¸ã€‚
   * @param int length æ¯è¡Œæˆ–æ¯åˆ—æœ‰å¤šå°‘ä¸ªè§†å›¾
   * @param int pos  è¯¥è§†å›¾æ‰€åœ¨çš„ä½ç½®ï¼ˆç›¸å¯¹äºŽå½“å‰é¡µï¼‰ã€‚
   */
  this.resize = function(length, pos) {

    $('#preview_main_ocx').width($(window).innerWidth() - 240);
    var $playerWraper = flashCheck() ? $('#preview_plugin_container') : $('.h5_player_wrapper');
    var height = $playerWraper.height() / length;
    var width = ($(window).innerWidth() - 240) / length;
    var x;
    var cr;

    if (length == 1) {
      _$this.height(height - 4);
      _$this.width(width - 4);
    } else {
      _$this.height(height);
      _$this.width(width);
    }

    x = pos % length;
    _$this.css({"left": x * width});

    x = Math.floor(pos / length);
    _$this.css({"top": x * height});

  };


}

// view-source:http://192.168.1.252/js/Channel.js?timeVersion=1620806528092

/*
 * Channel ç±»è´Ÿè´£å¯¹æ¯ä¸ª Channel çš„å¤„ç†ï¼Œå¹¶è½¬å‘ç»™ ChannelManager é›†ä¸­å¤„ç†ã€‚
 *
 * ä½œè€…ï¼šæ›¾é¹è¾‰
 * æ—¥æœŸï¼š2016-01-22 16:15
 */
function Channel(id, mode) {

	var _id = id,
		_mode = mode,
		_$this = null,
		_stream = EnumStreamType.FLUENT,
		_status = EnumChannelStatus.CLOSED,
		_ptzSpeed = 32,
		_hueValue = 150,
		_saturationValue = 150,
		_contrastValue = 150,
		_lightValue = 150,
		_auto = true,
		_viewId = null;

	EventListener.apply(this);

	/**
	 * è¿”å›žå½“å‰é€šé“ç»‘å®šçš„è§†å›¾ IDï¼Œå¦‚æžœæœªç»‘å®šåˆ™è¿”å›ž nullã€‚
	 */
	this.getViewId = function () {
		return _viewId;
	};

	this.getId = function () {
		return _id;
	};

	this.getMode = function () {
		return _mode;
	};

	/**
	 * è®¾ç½®  èŽ·å–é€šé“æ˜¯å¦è‡ªåŠ¨é€‰æ‹©ç æµ
	 */
	this.setAuto = function (auto){
		_auto = auto;
		return this;
	}
	this.getAuto = function() {
		return _auto;
	}

	/**
	 * è®¾ç½®å’Œè¿”å›žHSBã€PTZSpeedå€¼
	 *
	 */
	this.setLightValue = function(value) {
		_lightValue = value;
		return this;
	};
	this.getLightValue = function() {
		return _lightValue;
	};

	this.setHueValue = function(value) {
		_hueValue = value;
		return this;
	};
	this.getHueValue = function() {
		return _hueValue;
	};

	this.setSaturationValue = function(value) {
		_saturationValue = value;
		return this;
	};
	this.getSaturationValue = function() {
		return _saturationValue;
	};

	this.setContrastValue = function(value) {
		_contrastValue = value;
		return this;
	};
	this.getContrastValue = function() {
		return _contrastValue;
	};

	this.setPTZSpeedValue = function(value) {
		_ptzSpeed = value;
		return this;
	};
	this.getPTZSpeedValue = function() {
		return _ptzSpeed;
	};

	/**
	 * å°†è¯¥é€šé“ä¸ŽæŒ‡å®šIDçš„è§†å›¾ç»‘å®šã€‚
	 */
	this.bindView = function (id) {
		_viewId = id;
		_$this.attr('bc-view-id', id);
		return this;
	};

	/**
	 * å°†è¯¥é€šé“ä¸ŽæŒ‡å®šIDçš„è§†å›¾ç»‘å®šã€‚
	 */
	this.unbindView = function (id) {
		_viewId = null;
		_$this.removeAttr('bc-view-id');
		return this;
	};

	/**
	 * è®¾ç½®å½“å‰é€šé“çš„çŠ¶æ€ã€‚
	 * @param EnumChannelStatus status
	 */
	this.setStatus = function (status) {
		switch (status) {
		case EnumChannelStatus.PLAYING:
	    _$this.find('.CH_btn').removeClass('CH_btn-danger_disable').addClass('CH_btn-danger_active');
  		_$this.find('.channel_status_icon').removeClass('channel_status_icon_disconnected').addClass('channel_status_icon_connected');
  		break;
		case EnumChannelStatus.CLOSED:
  		_$this.find('.CH_btn').removeClass('CH_btn-danger_active').addClass('CH_btn-danger_disable');
    	_$this.find('.channel_status_icon').removeClass('channel_status_icon_connected').addClass('channel_status_icon_disconnected');
    	break;
    default:
    	return false;
		}
		_status = status;
		return true;
	};

	/**
	 * èŽ·å–å½“å‰é€šé“çš„çŠ¶æ€ã€‚
	 * @return EnumChannelStatus
	 */
	this.getStatus = function () {
		return _status;
	};

	/**
	 * èŽ·å–é€šé“çš„ç æµç±»åž‹ã€‚
	 * @return EnumStreamType
	 */
	this.getStream = function () {
		return _stream;
	};

	/**
	 * æ›´æ–°é€šé“çš„ç æµç±»åž‹ã€‚
	 * @param EnumStreamType newStream
	 */
	this.updateStream = function (newStream) {
		_stream = newStream;
		switch (newStream) {
		case EnumStreamType.FLUENT:
			_$this.find('.text_right').text('F');
			break;
		case EnumStreamType.CLIP:
			_$this.find('.text_right').text('C');
			break;
		case EnumStreamType.CLEAR:
			_$this.find('.text_right').text('M');
			break;
		case EnumStreamType.BALANCED:
			_$this.find('.text_right').text('B');
			break;
		default: /* é»˜è®¤ä¸º AUTO*/
		case EnumStreamType.AUTO:
			_$this.find('.text_right').text('A');
		}
		return this;
	};

	/**
	 * æ‰“å¼€å½“å‰é€šé“ï¼Œæˆ–åˆ‡æ¢ç æµã€‚
	 * @param EnumStreamType param_name
	 */
	this.open = function (newStream, newAutoStatus) {
		ChannelManager.trigger('open', [this, _$this, newStream === undefined ? _stream : newStream, newAutoStatus]);
		return this;
	};

	/**
	 * æš‚åœå½“å‰é€šé“ã€‚
	 */
	this.pause = function () {
		ChannelManager.trigger('pause', [this, _$this]);
		return this;
	};

  this.setReplayData = function (url, seekTo) {
    this.url = url;
    this.seekTo = seekTo;
  }

	/**
	 * å…³é—­å½“å‰é€šé“ã€‚
	 */
	this.close = function () {
		ChannelManager.trigger('close', [this, _$this]);
		return this;
	};

	function _createPreviewChannel(id) {
		var $itemLayout = $('<div class="CH_btn-group" bc-channel-id="'
						+ id
						+ '"> <div class="channel_view_item CH_btn_sized1 channel_view_item_bg"><span class="channel_status_icon channel_status_icon_disconnected"></span><span class="channel_status_text_center">'
						+ "CH " + oneToZeroOne(id + 1)
						+ '</span><label class="text_right">F</label></div><div title="Stream" class="CH_btn CH_btn-danger dropdown-toggle" data-toggle="dropdown"></div> <ul class="dropdown-menu CH_dropdown-menu_margin" bc-channel-id="'
						+ id
						+ '" role="menu"> <li><a href="javascript: void(0);" class="bc-channel-menu-clear">Clear</a></li><li class="divider"></li><li><a href="javascript: void(0);" class="bc-channel-menu-balanced">Balanced </a></li><li class="divider"></li><li><a href="javascript: void(0);" class="bc-channel-menu-fluent">Fluent</a></li><li class="divider"></li><li><a href="javascript: void(0);" class="bc-channel-menu-auto">Auto</a></li></ul></div>');
		$('#channelItems').append($itemLayout);
		$itemLayout.find('div.channel_view_item').draggable({
  		"revert": true,
  		"start": function() {
    		$('.preRight').css({
    			"overflow": "visible"
    		}).find('.preLeft').css({
    			"overflow": "visible"
    		});
    		$('#channelItems').css({
    			"overflow-y": "visible"
    		});
    	},
    	"stop": function() {
    		$('#channelItems').css({
    			"overflow-y": "auto"
    		});
    	}
  	});
  	$itemLayout.find('.dropdown-menu a.bc-channel-menu-clear').on('click', function() {
  		ChannelManager.get(parseInt($(this).parent().parent().attr('bc-channel-id'))).open(EnumStreamType.CLEAR, false);
  	});
  	$itemLayout.find('.dropdown-menu a.bc-channel-menu-balanced').on('click', function() {
  		ChannelManager.get(parseInt($(this).parent().parent().attr('bc-channel-id'))).open(EnumStreamType.BALANCED, false);
  	});
  	$itemLayout.find('.dropdown-menu a.bc-channel-menu-fluent').on('click', function() {
  		ChannelManager.get(parseInt($(this).parent().parent().attr('bc-channel-id'))).open(EnumStreamType.FLUENT, false);
  	});
  	$itemLayout.find('.dropdown-menu a.bc-channel-menu-auto').on('click', function() {
  		ChannelManager.get(parseInt($(this).parent().parent().attr('bc-channel-id'))).open(EnumStreamType.AUTO, true);
  	});
  	return $itemLayout;
	}

	function _createPlaybackChannel(id) {
		var $itemLayout = $('<div class="CH_btn-group" bc-channel-id="'
						+ id
						+ '"> <div class="channel_view_item CH_pb_btn_sized channel_view_item_bg" data-toggle="button"> '
	          + '<span class="channel_status_icon channel_status_icon_disconnected"></span>'
	          + '<span class="channel_status_text_center">'
	          + 'CH '
	          + oneToZeroOne(id + 1) + '</span></div>');
		$('#pb_channels_content').append($itemLayout);
		$itemLayout.find('div.channel_view_item').draggable({
  		"revert": true,
  		"start": function() {
    		$('.preRight_Playback').css({
    			"overflow": "visible"
    		}).find('.preLeft').css({
    			"overflow": "visible"
    		});
    		$('#pb_channels_content').css({
    			"overflow-y": "visible"
    		});
    	},
    	"stop": function() {
    		$('#pb_channels_content').css({
    			"overflow-y": "auto"
    		});
    	}
  	});
  	return $itemLayout;
	}

	this.setup = function () {
		if (_mode == EnumCurState.PREVIEW) {
			_$this = _createPreviewChannel(_id);
		} else {
			_$this = _createPlaybackChannel(_id);
      _stream = EnumStreamType.FLUENT;
		}
		delete this.setup;
		return this;
	}
}

// view-source:http://192.168.1.252/js/ChannelManager.js?timeVersion=1620806528092

/*
 * ChannelManager ç±»è´Ÿè´£ç®¡ç†æ‰€æœ‰é€šé“ã€‚
 *
 * ä½œè€…ï¼šæ›¾é¹è¾‰
 * æ—¥æœŸï¼š2016-01-22 16:15
 */

/**
 * class ChannelManager
 *
 * Events:
 *
 *   onInited()
 *   è¯¥äº‹ä»¶æ˜¯åœ¨åˆå§‹åŒ–å®ŒæˆåŽè§¦å‘
 *
 *   onOpen(Channel channelObj, jQuery $channelObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨ä¸€ä¸ªé€šé“éœ€è¦è¢«æ‰“å¼€æ—¶è§¦å‘ã€‚
 *   Channel channelObj    é€šé“å¯¹è±¡
 *   jQuery $channelObj    é€šé“jQueryå¯¹è±¡
 *
 *   onClose(Channel channelObj, jQuery $channelObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨ä¸€ä¸ªé€šé“éœ€è¦è¢«å…³é—­æ—¶è§¦å‘ã€‚
 *   Channel channelObj    é€šé“å¯¹è±¡
 *   jQuery $channelObj    è§†å›¾jQueryå¯¹è±¡
 *
 *   onPause(Channel channelObj, jQuery $channelObj)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨ä¸€ä¸ªé€šé“éœ€è¦è¢«æš‚åœæ—¶è§¦å‘ã€‚
 *   Channel channelObj    é€šé“å¯¹è±¡
 *   jQuery $channelObj    é€šé“jQueryå¯¹è±¡
 *
 *   onStreamChange(Channel channelObj, jQuery $channelObj, EnumStreamType newType, EnumStreamType oldType)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨ä¸€ä¸ªé€šé“éœ€è¦è¢«æ›´æ–°ç æµç±»åž‹æ—¶è§¦å‘ã€‚
 *   Channel channelObj    é€šé“å¯¹è±¡
 *   jQuery $channelObj    é€šé“jQueryå¯¹è±¡
 *   EnumStreamType newType  æ–°çš„ç æµç±»åž‹å€¼
 *   EnumStreamType oldType  æ—§çš„ç æµç±»åž‹å€¼
 *
 *   onModeChange(EnumCurState newMode, EnumCurState oldMode)
 *   è¯¥äº‹ä»¶æ˜¯åœ¨å·¥ä½œæ¨¡å¼è¢«ä¿®æ”¹æ—¶è§¦å‘ã€‚
 *   EnumCurState newMode  æ–°çš„å·¥ä½œæ¨¡å¼
 *   EnumCurState oldMode  æ—§çš„å·¥ä½œæ¨¡å¼
 *
 */
function ChannelManager() {
	throw {"msg": "Don't NEW a singleton."};
}

EventListener.apply(ChannelManager);

(function() {

	var _channelNum = 0;

	var _mode = EnumCurState.PREVIEW;

	var _channels = {
		"PREVIEW": [],
		"PLAYBACK": []
	};

	/**
	 * èŽ·å–ä¸€ä¸ª Channel å¯¹è±¡
	 * @param int id     Channel Id
	 */
	ChannelManager.get = function(id) {
		return _channels[_mode][id];
	};

	/**
	 * èŽ·å–å½“å‰å·¥ä½œæ¨¡å¼
	 */
	ChannelManager.getMode = function() {
		return _mode;
	};

	/**
	 * è®¾ç½®å½“å‰å·¥ä½œæ¨¡å¼
	 * @param EnumCurState mode  å·¥ä½œæ¨¡å¼
	 * @return boolean
	 */
	ChannelManager.setMode = function(mode) {
		var oldMode = _mode;
		switch (mode) {
		case EnumCurState.PLAYBACK:
		case EnumCurState.PREVIEW:
			break;
		default:
			return false;
		}
		_mode = mode;
		this.trigger('modechange', [mode, oldMode]);
		return true;
	};

	/**
	 * èŽ·å–å½“å‰æœ€å¤§é€šé“æ•°ã€‚
	 */
	ChannelManager.getNumber = function () {
		return _channelNum;
	};

	/**
	 * åˆå§‹åŒ– Channel åˆ—è¡¨
	 * @param int channelNum æ€»çš„é€šé“æ•°
	 */
	ChannelManager.init = function (channelNum) {
		_channelNum = channelNum;
		for (var i = 0; i < channelNum; i++) {
			_channels[EnumCurState.PREVIEW].push((new Channel(i, EnumCurState.PREVIEW)).setup());
			_channels[EnumCurState.PLAYBACK].push((new Channel(i, EnumCurState.PLAYBACK)).setup());
		}
		this.trigger('inited');
		delete this.init;
	};

	/**
	 * æ‰¹é‡å…³é—­æŒ‡å®šé€šé“ã€‚
	 * @param array channels
	 */
	ChannelManager.close = function (channels) {
		for (var i in channels) {
      typeof(channels[i]) == 'number' && this.get(channels[i]) && this.get(channels[i]).close();

		}
		return this;
	};

	/**
	 * æ‰¹é‡æ‰“å¼€æŒ‡å®šé€šé“ã€‚
	 * @param array channels
	 */
	ChannelManager.open = function (channels, streamType, isAuto) {
		for (var i in channels) {
			typeof(channels[i]) == 'number' && this.get(channels[i]).open(streamType, isAuto);
		}
		return this;
	};

	/**
	 * æ‰¹é‡æš‚åœæŒ‡å®šé€šé“ã€‚
	 * @param array channels
	 */
	ChannelManager.pause = function (channels) {
		for (var i in channels) {
			typeof(channels[i]) == 'number' && this.get(channels[i]).pause();
		}
		return this;
	};

})();

// view-source:http://192.168.1.252/js/ControllerMain.js?timeVersion=1620806528092

function ControllerMain() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ControllerMain);

var ua = navigator.userAgent.toLowerCase();
var isOldIE = ua.match(/msie/) ? true : false;

(function() {

  var _viewArray = [
    "loginDiv",
    "downloadDiv",
    "playerDiv",
    "loadingDiv",
    "infoViewDiv",
    "TimelineBox",
    "previewDiv",
    "player_bar",
    "preRight",
    "remote-config-app"
  ];

  ControllerMain.appVersion = clientInfo.version;

  ControllerMain.setAppVersion = function(version) {

    $("#app_version").html(version);
  };

  /**
   * åˆå§‹åŒ–æ•´ä½“é¡µé¢
   */
  ControllerMain.init = function(uid, username, password, downLoadPath, pluginDes, loginType, language, streamType) {

    var tag = getFuncName(arguments);

    // åˆå§‹åŒ–è®¾å¤‡
    g_device = new Device();
    console.dbg("Created a new device object.");

    ControllerLogin.init && ControllerLogin.init();

    // åˆå§‹åŒ–popover

    $("#popover_content_wrapper").hide();
    $("#playback_play_popover").hide();
    $("#preview_play_popover").hide();

    ControllerMain.showLoginPage();
    delete this.init;
  };

  /**
   * åˆå§‹åŒ–é¡¶éƒ¨æŽ§åˆ¶æ 
   */
  ControllerMain.initUI = function() {

    $([
      'cpu_button',
      'path_config_button'
    ]).each(function() {
      $('#' + this).remove();
    });
    // set button listener
    $("#menu_preview_button").on('click', function() {

      if (!PlayerPreview.isRefreshingRightBar) {
        ControllerMain.showPreviewPlayer();
        //ControllerMain.trigger('try_h5_preview');
      }
    });

    $("#menu_playback_button").on('click', function() {
      ControllerMain.showPlaybackPlayer();
    });

    $("#navigation_bar_remoteconfig").on('click', function() {
      if (ControllerLogin.level !== 'admin' && ControllerLogin.userName !== 'admin') {
        return;
      }
      ControllerMain.trigger('gotoRemoteConfig');
    });

    $("#navigation_bar_back").on('click', function() {
      ControllerMain.trigger('logout');
    });

    this.onLogout = function(target) {
      if (!target) { target = ''; }
      var url = target + window.location.pathname + '?' + (new Date()).getTime();
      document.cookie = '';
      window.localStorage.clear();
      if (console.isDebug) {
        url += '&debug=1';
      }
      if (console.isTracing) {
        url += '&trace=1';
      }
      window.location.href = url;
    };

    $(window).on('resize', function() {
      ControllerMain.trigger('resize');
    });

    ControllerMain.on('resize', function() {
      if (ViewManager.getMode() != EnumCurState.PLAYBACK) {
        $('#TimelineBox').hide();
      } else {
        $('#TimelineBox').css({ 'top': $('#preContent').offset().top + $('#preContent').outerHeight() }).show();
      }
      ControllerDownload.resize();
      ControllerSnap.resize();
      ViewManager.updateView();
    });

    ControllerRemoteConfig.init && ControllerRemoteConfig.init();

  };

  /**
   * å¼•å¯¼åŒº
   */
  ControllerMain.boot = function() {
    if (isOldIE) {
      return;
    }
    var loginUID = 0;
    var loginUserName = 0;
    var loginPassword = 0;
    var downLoadPath = 0;
    var pluginDes = 0;
    var loginType = 0;
    var language = 0;
    var streamType = 0;
    // Worning: cgi set interface
    ControllerMain.init(loginUID, loginUserName, loginPassword, downLoadPath, pluginDes, loginType, language, streamType);

    delete this.boot;
  };

  /**
   * åˆ‡æ¢åˆ°è¿œç¨‹é…ç½®è§†å›¾
   */
  ControllerMain.showConfigPage = function() {
    ViewManager.storeScreen();
    for (var i in _viewArray) {
      if (typeof(_viewArray[i]) == 'string')
        $('#' + _viewArray[i]).css({
          "visibility": 'hidden'
        });
    }
    $('#TimelineBox').hide();
    ControllerMain.hidePlayers();
    $('.fplayer').hide();
    $('#playerDiv').css({ "visibility": 'visible' });
    remoteConfigManager.showPage();
    $('.menu_view_item.selected').removeClass('selected');
    $("#navigation_bar_remoteconfig").addClass("selected");
    $('.view-block').hide();
    $('#preRight_Playback').hide();
    ViewManager.setMode(EnumCurState.CONFIG);
  };

  ControllerMain.hideConfigPage = function() {
    ControllerRemoteConfig.trigger('beforeUnload');
    ControllerRemoteConfig.unbind('beforeUnload');
    remoteConfigManager.hidePage();
  };

  /**
   * åˆ‡æ¢åˆ°ç™»å½•è§†å›¾
   */
  ControllerMain.showLoginPage = function() {
    if($('body').hasClass('no-balanced')){
      $('#default-stream-fluent').attr('checked','checked');
    }
    CGI.setLocation('LOGIN');
    for (var i in _viewArray) {
      if (typeof(_viewArray[i]) == 'string')
        $('#' + _viewArray[i]).css({
          "visibility": 'hidden'
        });
    }
    $('#loginDiv').css({ "visibility": 'visible' });
    ViewManager.setMode(EnumCurState.LOGIN);
    ChannelManager.setMode(EnumCurState.LOGIN);
    $("#loginDiv").show();
    $('[data-toggle="popover"]').popover('hide');
  };

  /**
   * åˆ‡æ¢åˆ°æ¶ˆæ¯è§†å›¾
   */
  ControllerMain.showInfoPage = function(infoType) {
    for (var i in _viewArray) {
      if (typeof(_viewArray[i]) == 'string')
        $('#' + _viewArray[i]).css({ "visibility": 'hidden' });
    }
    $('#infoViewDiv').css({ "visibility": 'visible' });
    ViewManager.setMode(EnumCurState.INFO);
    ChannelManager.setMode(EnumCurState.INFO);


    var infoString = "";
    switch (infoType) {
      case EnumErrorCode.NOT_SUPPORT_CANVAS:
        infoString = "Your browser does not support the canvas, please upgrade your browser!";
        break;
      case EnumErrorCode.NOT_SUPPORT_IE_8:
        infoString = "Your browser does not support the canvas, please upgrade your browser!";
        break;
      case EnumErrorCode.DOWNLOAD_IE_PLUGIN:
        infoString = "Your browser does not support the canvas, please upgrade your browser!";
        break;
      default:
        infoString = "Unknown error was found, please contact with Baichuan!";
        break;
    }
    $("#info_tip_text").text(infoString);

  };

  /**
   * åˆ‡æ¢åˆ°é¢„è§ˆè§†å›¾
   */
  ControllerMain.showPreviewPlayer = function() {

    if (ViewManager.getMode() == EnumCurState.PREVIEW)
      return;
    try {

      if ( !flashCheck() ) {
        BcH5Player.showStatusImg(EnumFlvStatus.normal);
      }
    } catch (error) {
      console.error(error);
    }

    PlayerPreview.waiter.show('Refreshing the channel configurations...');

    CGI.setLocation(EnumCurState.PREVIEW);
    ControllerMain.hideConfigPage();

    ControllerMain.hidePlayers();
    ControllerMain.trigger('switchPreviewMode');
    $('.menu_view_item.selected').removeClass('selected');
    $("#menu_preview_button").addClass("selected");

    var $playerContainer = flashCheck() ? $("#preview_plugin_container") : $('.h5_player_wrapper');

    $playerContainer.removeClass('playbackMode');

    $(['player_bar', 'playerDiv', 'preRight', 'previewDiv']).each(function() {
      $('#' + this).css({ "visibility": 'visible' });
    });

    $('#TimelineBox').css({ "visibility": 'hidden' })
    $("#loginDiv").hide();
    $("#infoViewDiv").hide();
    $("#downloadDiv").hide();

    $("#preRight_Playback").hide();
    //mirroré»˜è®¤éšè—
    $("#pre_image_mirr_container").show();

    $("#preContent").css({
      "bottom": "0px"
    });
    $("#preview_main_ocx").css({
      "bottom": "0px"
    });

    $playerContainer.css({
      "bottom": "55px"
    });

    $('[data-toggle="popover"]').popover('hide');
    ChannelManager.setMode(EnumCurState.PREVIEW);
    ViewManager.storeScreen();
    ViewManager.setMode(EnumCurState.PREVIEW);
    if (!ViewManager.recoverScreen()) {
      ViewManager.setScreenViews(EnumScreenMode.NINE);
      ViewManager.setCurrentPage(0);
    }
    ViewManager.updateView();
    if ( !flashCheck() ) {
      BcH5Player.init();
    }
    if (ViewManager.getSelectedView()) {
      $('#view-block-PREVIEW-' + ViewManager.getSelectedView().getId()).click();
    } else {
      if (!PlayerPreview.isRefreshingRightBar) {
        $('#view-block-PREVIEW-0').click();
      }
    }
  };

  ControllerMain.hidePlayers = function() {
    var m = ChannelManager.getNumber();
    var i = 0;
    if (ChannelManager.get(0).getMode() == EnumCurState.PLAYBACK) {
      for (var i = 0; i < m; ++i) {
        try {
          if ( flashCheck() ) {
            FPlayer.close(i);
          } else {
            BcH5Player.destroy();
          }
        } catch (e) {}
      }
    } else {
      for (var i = 0; i < m; ++i) {
        try {
          if ( flashCheck() ) {
            FPlayer.stop(i);
            FPlayer.hide(i);
          } else {
            BcH5Player.destroy();
          }
        } catch (e) {

        }
      }
    }
  }

  ControllerMain.enableAbility = function(ab) {

    $('#previewDiv .ab-enable-' + ab + ' .ui-slider').slider({ 'disabled': false });
    $('#previewDiv .ab-enable-' + ab + ' button').removeAttr('disabled');
    $('#previewDiv .ab-enable-' + ab + ' select').removeAttr('disabled');
    $('#previewDiv .ab-enable-' + ab + ' input').removeAttr('disabled');
  }

  ControllerMain.disableAbility = function(ab) {

    $('#previewDiv .ab-enable-' + ab + ' .ui-slider').slider({ 'disabled': true });
    $('#previewDiv .ab-enable-' + ab + ' button').attr('disabled', true);
    $('#previewDiv .ab-enable-' + ab + ' select').attr('disabled', true);
    $('#previewDiv .ab-enable-' + ab + ' input').attr('disabled', true);
  }

  /**
   * åˆ‡æ¢åˆ°å›žæ”¾è§†å›¾
   */
  ControllerMain.showPlaybackPlayer = function() {

    if (ViewManager.getMode() == EnumCurState.PLAYBACK) {
      return;
    }

    try {

      if ( !flashCheck() ) {
        BcH5Player.showStatusImg(EnumFlvStatus.normal);
      }
    } catch (error) {
      console.error(error);
    }

    ViewReplaySearch.waiter.show();
    CGI.setLocation(EnumCurState.PLAYBACK);
    ControllerMain.hideConfigPage();

    ControllerMain.hidePlayers();
    ControllerMain.trigger('switchPlaybackMode');
    $('.menu_view_item.selected').removeClass('selected');
    $("#menu_playback_button").addClass("selected");
    $('#TimelineBox').show();
    $(['TimelineBox', 'playerDiv', 'previewDiv']).each(function() {
      $('#' + this).css({ "visibility": 'visible' });
    });
    $(['preRight', 'player_bar']).each(function() {
      $('#' + this).css({ "visibility": 'hidden' })
    });
    $('#preRight_Playback').show();
    $("#loginDiv").hide();
    $("#preRight_Playback").show();
    $("#preContent").css({
      bottom: "176px"
    });
    $("#preview_main_ocx").css({
      bottom: "0px"
    });
    var $playerContainer = flashCheck() ? $("#preview_plugin_container") : $('.h5_player_wrapper');

    $playerContainer.css({
      bottom: "0px"
    });

    $playerContainer.addClass('playbackMode');

    $('[data-toggle="popover"]').popover('hide');

    ChannelManager.setMode(EnumCurState.PLAYBACK);
    ViewManager.storeScreen();
    ViewManager.setMode(EnumCurState.PLAYBACK);
    if (!ViewManager.recoverScreen()) {
      ViewManager.setScreenViews(EnumScreenMode.FOUR);
      ViewManager.setCurrentPage(0);
    }
    ViewManager.updateView();
    g_device.channels.forEach(function(ch) {
      ch.playbackFiles = [];
    });
    g_bcDatePicker.setDate(new Date(), true);

    ViewReplaySearch.isFirstVisited = 0;
    ControllerFlash.setView(ViewManager.getViewObject(0), 0);
    ViewManager.showScreen(EnumScreenMode.ONE);
    $('#view-block-PLAYBACK-0-shutdown').remove();
    // PlayerPlayback.setVolume(50);
    PlayerPlayback.trigger('monthChange', [(new Date()).getFullYear(), (new Date()).getMonth() + 1]);
    $('#TimelineBox').css({ 'top': $('#preContent').offset().top + $('#preContent').outerHeight() });

    PlayerPlayback.resetState();
    ControllerMain.trigger('resize');
    g_pbFileBarCanvas.setScale(1);
    g_pbFileBarCanvas.autoScale();
    g_pbFileBarCanvas.redrawPlaybackTool();
  };

  ControllerMain.resetTitleBar = function() {

    var isCanReplay = g_device.canReplay;

    var $pb_item_view = $("#menu_playback_button");

    if (isCanReplay) {

      $pb_item_view.show();
    } else {

      $pb_item_view.hide();
    }
  };

})();

if (isOldIE) {

  function showOldTips() {
    var outFrame = document.getElementById('old-browser-deny');
    var inFrame = document.getElementById('access-deny');
    var winHeight = window.innerHeight || window.screen.height;
    var winWidth = window.innerWidth || window.screen.width;
    outFrame.style.height = winHeight + 'px';
    outFrame.style.width = winWidth + 'px';
    outFrame.style.display = 'block';
    ControllerMain.boot = function() {};
    inFrame.style.marginTop = (winHeight - 212) / 2 + 'px';
  }

  if (!window.addEventListener) {
    setTimeout(showOldTips, 500);
  } else {
    $(showOldTips);
  }

  document.getElementById('old-browser-deny');

} else {

  $(function onGlobalInit() {

    $('body').append('<img src="img/op-no.png" style="display: none">');
    $('body').append('<img src="img/op-ok.png" style="display: none">');
    $('body').append('<img src="img/loading.gif" style="display: none">');

    PlayerPlayback.init && PlayerPlayback.init();

    PlayerPreview.init && PlayerPreview.init();

    // for the number input fixed.
    $('body').on('change', 'input[type=number]', function() {
      if ($(this).attr('disabled-auto-fixed') !== undefined) {
        return;
      }
      if ($(this).attr('max') !== undefined && $(this).attr('max') !== null) {
        if (parseInt($(this).val()) > parseInt($(this).attr('max'))) {
          $(this).val($(this).attr('max'));
        }
      }
      if ($(this).attr('min') !== undefined && $(this).attr('max') !== null) {
        if (parseInt($(this).val()) < parseInt($(this).attr('min'))) {
          $(this).val($(this).attr('min'));
        }
      }
    });
    $('.form_icon').each(function() {
      var $ref = $(this).parent().find('input');
      if ($ref.length == 0) return;
      $(this).css({
        "left": $ref.offset().left - $('.login_form_wrapper').offset().left
      });

    });
    $('#view-login-password').css({
      "left": $('#login_text_password').parent().offset().left - $('.login_form_wrapper').offset().left + $('#login_text_password').parent().width() + 8
    }).on('click', function() {
      if ($('#login_text_password').attr('type').toLowerCase() == 'text') {
        $('#login_text_password').attr('type', "password");
        $(this).attr("src", "img/eye-open.png").attr("title", "Show Password");
      } else {
        $('#login_text_password').attr("type", "text");
        $(this).attr("src", "img/eye-close.png").attr("title", "Hide Password");
      }
    }).show();
    ControllerMain.setAppVersion(ControllerMain.appVersion);
  });
}

// view-source:http://192.168.1.252/js/ControllerDownload.js?timeVersion=1620806528092

/**
 * ControllerDownload ç±» è´Ÿè´£å¤„ç†å½•åƒä¸‹è½½ä¸šåŠ¡
 */
function ControllerDownload() {
	throw {"msg": "Don't NEW a singleton."};
}

ControllerDownload.show = function (chId) {
  this.init && this.init();

  ControllerDownload.refresh(chId);
  $('#download-dialog').show();

  this.resize();
};

ControllerDownload.hide = function () {
  $('#download-dialog').hide();
};

ControllerDownload.resize = function () {
  $('#download-dialog').css({
    "height": window.innerHeight,
    "width": window.innerWidth
  });
  $('#download-dialog .bc-dialog').css({
    "top": (window.innerHeight - $('#download-dialog .bc-dialog').innerHeight()) / 2,
    "left": (window.innerWidth - $('#download-dialog .bc-dialog').innerWidth()) / 2
  });
};

/**
 * æ›´æ–°ä¸‹è½½å¯¹è¯æ¡†çš„ title
 */
ControllerDownload.refresh = function (chId) {
  var files = g_device.channels[chId].playbackFiles;
  $('#download-channel-id').text(chId + 1);
  $('#download-file-list').html('');

  /*
  if ($('#download-select-all').is(':checked')) {
    $('#download-select-all').click();
  }
  */

  $('#download-date').text(PlayerPlayback.bcDatePicker.getSearchDate().getUnixDateOnly());
  if (files && files.length > 0) {
    for (var i = 0; i < files.length; ++i) {
      this.addFile(files[i]);
    }
  }

  $('#download-do').attr('disabled', true);

  setTimeout(function() {
    $('#download-file-list-header .dl-row-file-size').css({
      "margin-right": $('#download-file-list-header').innerWidth() - $('#download-file-list > div').outerWidth()
    });
  }, 0);
};

/**
 * æŠŠé€šé“ ipc çš„å½•åƒæ–‡ä»¶æ˜¾ç¤ºåœ¨ä¸‹è½½å¯¹è¯æ¡†ä¸­
 */
ControllerDownload.addFile = function (file) {
  var $obj = $('#download-file-list');
  var size = String.formatSize(file.size, 1);

  var displayName = file.fileName.replace(/_\d{8}_\d{6}_/, '_' + file.startTime.getUnixDateOnly().replace(/\-/g, '') + '_' + file.startTime.getUnixTimeOnly().replace(/\:/g, '') + '_');
  var html = '<div><div><input name="select-download" type="' + this.inputType + '"></div>';
  html += '<div class="dl-row-name" real-name="' + file.fileName + '" title="' + displayName + '">' + displayName + '</div>';
  html += '<div class="dl-row-begin-time" title="' + file.startTime.getUnixDate() + '">' + file.startTime.getUnixTimeOnly() + '</div>';
  html += '<div class="dl-row-end-time" title="' + file.endTime.getUnixDate() + '">' + file.endTime.getUnixTimeOnly() + '</div>';
  html += '<div class="dl-row-file-size">' + size.num + ' ' + size.unit + '</div></div>';
  $obj.append(html);
};

ControllerDownload.init = function () {
  $('#download-dialog').on('click', function(e) {
    if (e.target.id == 'download-dialog') {
      ControllerDownload.hide();
    }
  });

  this.status = 'idle';

  /*
  this.waiter = new ViewWaiting({
    "id": "download-waiting",
    "text": "downloading will run in backstage, don't close the page..."
  });
  */

  $('#download-dialog').find('.bc-dialog-close').on('click', function() {
    ControllerDownload.hide();
  });
  if ( true ) {
  // if (ControllerLogin.isIE || isSafari()) {
    this.inputType = 'radio';
    //$('#download-select-all').attr('disabled', true);
  } else {
    this.inputType = 'checkbox';
    $('#download-select-all').on('click', function() {
      var checked = $(this).is(':checked');
      $('#download-file-list input').each(function() {
        if ($(this).is(':checked') != checked) {
          $(this).click();
        }
      })
    });
  }

  // æ²¡æœ‰é€‰æ‹©ä»»ä½•ä¸‹è½½æ–‡ä»¶æ—¶ï¼Œä¸‹è½½æŒ‰é’®ç½®ç°
  $('#download-file-list').on('click', 'input', function () {
    setTimeout(function() {
      if ($('#download-file-list input:checked').length == 0 && !ControllerLogin.isIE) {
        $('#download-do').attr('disabled', true);
      } else {
        $('#download-do').removeAttr('disabled');
      }
    }, 0);
  });
  $('#download-file-list').on('click', '>div>div:nth-child(n+2)', function () {
    $(this).parent().find('input').click();
  });


  $('#download-do').on('click', function() {

    $(this).attr('disabled', true);
    $('#download-file-list input:checked').each(function() {

      var elemIF = document.createElement("iframe");
      var $nameObj = $(this).parent().parent().find('.dl-row-name');

      elemIF.id = String.random(32);
      elemIF.src = window.location.protocol + '//' + window.location.host + '/cgi-bin/api.cgi?cmd=Download&source=' + $nameObj.attr('real-name') + '&output=' + $nameObj.text().replace(/\//g, '_') + '&token=' + localStorage.getItem('token');
      elemIF.style.display = "none";

      document.body.appendChild(elemIF);

    });
    $(this).removeAttr('disabled');
  });

  delete this.init;
};

// view-source:http://192.168.1.252/js/ControllerPatrolModifier.js?timeVersion=1620806528092


function ControllerPatrolModifier() {
	throw {"msg": "Don't NEW a singleton."};
}

(function(CPM) {

  this.show = function (patrol) {
    this.init && this.init();
    this.resize();

    this.refresh(patrol);
    $('#patrol-modifier').show(200);
  };

  this.hide = function () {
    $('#patrol-modifier').hide(200);
  };

  this.resize = function () {
    $('#patrol-modifier').css({
      "height": window.innerHeight,
      "width": window.innerWidth
    });
    $('#patrol-modifier .bc-dialog').css({
      "top": (window.innerHeight - $('#patrol-modifier .bc-dialog').innerHeight()) / 2,
      "left": (window.innerWidth - $('#patrol-modifier .bc-dialog').innerWidth()) / 2
    });
  };

  function mapLine(preset, $preset) {
    var presetData = getPresetsData();
    $preset.data('preset', preset);
    $preset.find('.patrol-row-preset').text(presetData[preset.id - 1].name);
    $preset.find('.patrol-row-time').text(preset.dwellTime);
    $preset.find('.patrol-row-speed').text(preset.speed);
  }

  function getPresetsData() {
    return g_device.channels[CPM.channel].data.ptzPreset;
  }

  this.refresh = function(patrol) {

    this.channel = patrol.channel;

    $('#patrols-list').html('');

    for (var i = 1; i <= 16; i++) {
      $('#patrols-list').append('<div class="patrol-row" patrol-index="' + (i - 1) + '">'
          + '<div class="patrol-row-index">' + i.toString().leftPad('0', 2) + '</div>'
          + '<div class="patrol-row-preset"></div>'
          + '<div class="patrol-row-time"></div>'
          + '<div class="patrol-row-speed"></div>'
          + '</div>');
    }

    $('#mod-patrol-drop').attr('disabled', true);
    $('#mod-patrol-edit').val('Edit');

    this.patrol = patrol;

    $('#editing-patrol-ch-id').text(this.channel);

    $('#editing-patrol-id').text(patrol.id);

    if (patrol.preset) {
      for (var i = 0; i < patrol.preset.length; i++) {
        var $preset = $('[patrol-index=' + i + ']');
        mapLine(patrol.preset[i], $('[patrol-index=' + i + ']'));
      }
    }

    setTimeout(function() {
      if (ControllerLogin.abilities.abilityChn[patrol.channel].ptzType.ver === EnumPTZType.GM8136S_PTZ) {

        $('#patrols-list-header .patrol-row-time').css({
          "margin-right": $('#patrols-list-header').innerWidth() - $('#patrols-list > div').outerWidth()
        });
        $('.patrol-row-speed').hide();
      } else {

        $('#patrols-list-header .patrol-row-speed').css({
          "margin-right": $('#patrols-list-header').innerWidth() - $('#patrols-list > div').outerWidth()
        });
      }
    }, 0);
  };

  this.saveRow = function() {

    if ($('#patrol-modifier .selected').length == 0) {
      return true;
    }

    var $preset = $('#patrol-modifier .selected');
    var preset = $preset.data('preset');
    var presetData = getPresetsData();
    var $select;
    var range = g_device.channels[CPM.channel].limits.ptzPatrol;

    if (!$preset.length) {
      return true;
    }

    $select = $preset.find('.patrol-row-preset select');

    if (!$select.length) {
      return true;
    }

    preset = {
      "id": parseInt($select.val()),
      "dwellTime": parseInt($preset.find('.patrol-row-time input').val()),
      "speed": parseInt($preset.find('.patrol-row-speed input').val())
    };
    if (preset.id == 0) {
      preset = undefined;
    } else {
      if (preset.dwellTime < range.preset.dwellTime.min || preset.dwellTime > range.preset.dwellTime.max) {
        bc_alert('Time of preset is out of range(' + range.preset.dwellTime.min + '~' + range.preset.dwellTime.max + ').', 'error');
        return false;
      }
      if (preset.speed < range.preset.speed.min || preset.speed > range.preset.speed.max) {
        bc_alert('Speed of preset is out of range(' + range.preset.speed.min + '~' + range.preset.speed.max + ').', 'error');
        return false;
      }
    }

    if (preset) {
      mapLine(preset, $preset);
      $preset.data('preset', preset);
    } else {
      $preset.data('preset', null);
      $preset.find('.patrol-row-time').text('');
      $preset.find('.patrol-row-speed').text('');
      $preset.find('.patrol-row-preset').text('');
    }

    $('#mod-patrol-drop').attr('disabled', true);
    $('#mod-patrol-edit').removeAttr('disabled');

    return true;

  };

  this.init = function () {
    $('#patrol-modifier').on('click', function(e) {
      if (e.target.id == 'patrol-modifier') {
        CPM.hide();
      }
    });

    $('#patrols-list').on('click', '.patrol-row', function() {
      if ($('#patrol-modifier .selected').attr('patrol-index') == $(this).attr('patrol-index')) {
        return;
      }
      if (ControllerPatrolModifier.saveRow()) {
        $('#patrol-modifier .selected').removeClass('selected');
        $(this).addClass('selected');
      }
    }).on('dblclick', '.patrol-row', function(e) {
      $('#mod-patrol-edit').click();
    });

    $('#patrol-modifier').find('.bc-dialog-close').on('click', function() {
      CPM.hide();
    });

    $('#mod-patrol-edit').on('click', function() {

      if ($('#patrol-modifier .selected').length == 0 || $('#patrol-modifier .selected input').length > 0) {
        return;
      }

      var $preset = $('#patrol-modifier .selected');
      var preset = $preset.data('preset');
      var presetData = getPresetsData();
      var $select;

      var range = g_device.channels[CPM.channel].limits.ptzPatrol;

      $('#mod-patrol-drop').removeAttr('disabled');
      $(this).attr('disabled', true);

      $preset.find('.patrol-row-preset').html('<select><option value="0" style="color: #bbb;">(None)</option></select>');
      $preset.find('.patrol-row-time').html('<input max="' + range.preset.dwellTime.max + '" min="' + range.preset.dwellTime.min + '" type="number" value="' + range.preset.dwellTime.min + '">');
      $preset.find('.patrol-row-speed').html('<input max="' + range.preset.speed.max + '" min="' + range.preset.speed.min + '" type="number" value="' + range.preset.speed.min + '">');

      $select = $preset.find('.patrol-row-preset select');

      $(presetData).each(function() {
        if (this.enable) {
          $select.append($('<option value="' + this.id + '"></option>').text(this.name));
        }
      });

      if (preset) {
        $preset.find('.patrol-row-time input').each(function() {
          $(this).css({"width": $(this).parent().innerWidth() - 16});
        }).val(preset.dwellTime);
        $preset.find('.patrol-row-speed input').each(function() {
          $(this).css({"width": $(this).parent().innerWidth() - 16});
        }).val(preset.speed);
        $select.val(preset.id).each(function() {
          $(this).width($(this).parent().innerWidth() - 16);
        });
        if (!isValidValue($select.val())) {
          $select.val(0);
        }
      } else {
        $preset.find('.patrol-row-time input').each(function() {
          $(this).css({"width": $(this).parent().innerWidth() - 16});
        });
        $preset.find('.patrol-row-speed input').each(function() {
          $(this).css({"width": $(this).parent().innerWidth() - 16});
        });
        $select.each(function() {
          $(this).width($(this).parent().innerWidth() - 16);
        });
      }

    });

    $('#mod-patrol-drop').on('click', function() {
      $(this).attr('disabled', true);
      var $preset = $('#patrol-modifier .selected');
      var preset = $preset.data('preset');
      if (preset) {
        mapLine(preset, $preset);
      } else {
        $preset.find('.patrol-row-time').text('');
        $preset.find('.patrol-row-speed').text('');
        $preset.find('.patrol-row-preset').text('');
      }
      $('#mod-patrol-edit').removeAttr('disabled');
    });

    $('#mod-patrol-clear').on('click', function() {
      var $el;
      if ($('#patrol-modifier .selected').length > 0 && $('#patrol-modifier .selected').data('preset')) {
        $el = $('#patrol-modifier .selected');
      } else {
        $el = $('.patrol-row');
      }
      $el.each(function() {
        if ($(this).data('preset')) {
          $(this).data('preset', null);
          $(this).find('.patrol-row-time').text('');
          $(this).find('.patrol-row-speed').text('');
          $(this).find('.patrol-row-preset').text('');
        }
      });
      $el.removeClass('selected');
    });

    $('#mod-patrol-save').on('click', function() {
      CPM.patrol.preset = [];
      try {
        CPM.saveRow();
      } catch (e) {

      }
      $('.patrol-row').each(function() {
        if ($(this).data('preset')) {
          CPM.patrol.preset.push($(this).data('preset'));
        }
      });
      ViewPTZPreset.savePatrol(CPM.patrol);
    });

    delete this.init;
  };

}).apply(ControllerPatrolModifier, [ControllerPatrolModifier]);

// view-source:http://192.168.1.252/js/ControllerSnap.js?timeVersion=1620806528092


function ControllerSnap() {
	throw {"msg": "Don't NEW a singleton."};
}

ControllerSnap.show = function (chId) {
  this.init && this.init();
  this.resize();
  this.refresh(chId);
  this.waiter.show();
};

ControllerSnap.hide = function () {
  $('#snap-dialog').hide(200);
};

ControllerSnap.resize = function () {
  $('#snap-dialog').css({
    "height": window.innerHeight,
    "width": window.innerWidth
  });
  $('#snap-dialog .bc-dialog').css({
    "top": (window.innerHeight - $('#snap-dialog .bc-dialog').innerHeight()) / 2,
    "left": (window.innerWidth - $('#snap-dialog .bc-dialog').innerWidth()) / 2
  });
  $('#snap-dialog .bc-dialog-vessel').height($('#snap-dialog').innerHeight() - $('#snap-dialog .bc-dialog-title').outerHeight());
  (function() {
    $(this).css({
      "max-width": "100%",
      "max-height": "100%"
    });
    if ($(this).height() < $('#snap-dialog .bc-dialog-vessel').innerHeight()) {
      $(this).css({"margin-top": ($('#snap-dialog .bc-dialog-vessel').innerHeight() - $(this).outerHeight()) / 2});
    } else {
      $(this).css({"margin-top": 0});
    }
    $(this).show();

  }).apply($('#snap-dialog img'));
};

ControllerSnap.refresh = function (chId) {
  var imgId = 'snap-img-' + String.random(8);
  $('#snap-channel-id').text(chId + 1);
  var imgsrc = 'cgi-bin/api.cgi?cmd=Snap&channel=' + chId + '&rs=' + String.random(16) + "&token=" + localStorage.getItem('token');
  $('#snap-dialog .bc-dialog-vessel').html('<img style="display:none;" id="' + imgId + '" src="' + imgsrc + '">');
  $('#snap-dialog img#' + imgId).load(function() {
    $('#snap-dialog').show(200);
    $(this).css({
      "max-width": $('#snap-dialog .bc-dialog-vessel').innerWidth(),
      "max-height": $('#snap-dialog .bc-dialog-vessel').innerHeight()
    });
    if ($(this).height() < $('#snap-dialog .bc-dialog-vessel').innerHeight()) {
      $(this).css({"margin-top": ($('#snap-dialog .bc-dialog-vessel').innerHeight() - $(this).height()) / 2});
    } else {
      $(this).css({"margin-top": 0});
    }
    ControllerSnap.waiter.hide();
    $(this).show();
  }).error(function(err) {
    ControllerSnap.waiter.hide();
    bc_alert('Failed to snap image.', 'error');
  });
};

ControllerSnap.init = function () {
  $('#snap-dialog').on('click', function(e) {
    if (e.target.id == 'snap-dialog') {
      ControllerSnap.hide();
    }
  });
  $('#snap-dialog').find('.bc-dialog-close').on('click', function() {
    ControllerSnap.hide();
  });
  this.waiter = new ViewWaiting({
    "id": "loading-snap",
    "text": "Snapping image..."
  });
  $('#snap-dialog > .bc-dialog').on('dblclick', function() {
    if ($('#snap-dialog').hasClass('fullscreen')) {
      $('#snap-dialog').removeClass('fullscreen');
    } else {
      $('#snap-dialog').addClass('fullscreen')
    }
    ControllerSnap.resize();
  });
  delete this.init;
};

// view-source:http://192.168.1.252/js/ControllerRemoteConfig.js?timeVersion=1620806528092

/**
 * class ControllerRemoteConfig
 * æä¾›è¿œç¨‹é…ç½®ç•Œé¢çš„æŽ§åˆ¶æŽ¥å£ã€‚
 */
function ControllerRemoteConfig() {
	throw {"msg": "Don't NEW a singleton,"};
}

EventListener.apply(ControllerRemoteConfig);

(function() {
	var _curPage = null;

  ControllerRemoteConfig.showLoadWaiter = function() {
    ControllerRemoteConfig.waiter.show('Loading configurations...');
  };

  ControllerRemoteConfig.showSaveWaiter = function() {
    ControllerRemoteConfig.waiter.show('Saving configurations...');
  };

  ControllerRemoteConfig.showTestWaiter = function() {
    ControllerRemoteConfig.waiter.show('Testing configurations...');
  };

	ControllerRemoteConfig.init = function () {
    ControllerMain.on('resize', function() {
      if ($('.remote-main-view').length > 0) {
        $('.remote-main-view').css({
          "width": $(window).innerWidth() - 250,
          "height": $(window).innerHeight() - $('#remote-tabs').offset().top - $('#remote-tabs').outerHeight()
        });
        $('.remote-main-view').trigger('inner-resize');
        setTimeout(function() {
          if ($('.remote-main-view').outerWidth() < $(window).innerWidth() - 250) {
            $('.remote-main-view').css({
              "width": $(window).innerWidth() - 250
            });
            $('.remote-main-view').trigger('inner-resize');
          }
        }, 50);
      }
    });
		delete this.init;
	};

  /**
   * åŠ è½½è¿œç¨‹é…ç½®ä¸»ç•Œé¢ã€‚
   */
	ControllerRemoteConfig.loadMainView = function () {
    var ld;
    if (remoteConfigManager.isExist()) {
      return;
    }
    ControllerMain.showConfigPage();
    ControllerRemoteConfig.unbind('beforeUnload');

    if (clientInfo.version !== ControllerMain.appVersion) {

      bc_alert(
        "App detected that firmware of your device has been upgraded, now it will reload this App.",
        "ok"
      );
      $(".bc-alert .alert-status").text("Reloading");

      setTimeout(function() {

        window.location.href = window.location.pathname + '?' + (new Date()).getTime();
      }, 3000);

      throw new Error("Abort to reload.");
    }

  };

  /**
   * åŠ è½½æŒ‡å®šé¡µé¢ã€‚
   */
  ControllerRemoteConfig.loadPage = function(name) {
    this.showLoadWaiter();
    var ld = new WebLoader(function(vars) {
      var $obj = $('.remote-main-view');
      var cnt = 0;
      var $inner;
      CGI.setLocation(name + (Math.random() * (new Date()).getTime()));
      ControllerRemoteConfig.trigger('beforeUnload');
      ControllerRemoteConfig.unbind('beforeUnload');
      $obj.html('');
      $obj.append(vars.html);
      eval(vars.js);
      $inner = $obj.find('#config-frame');
      _curPage = name;
      bindEnabler($obj.find('input[type=checkbox]'));
      bindShowPassword($obj.find('input[type=checkbox]'));
      bindDisabler($obj.find('input[type=checkbox]'));
      bindVisibler($obj.find('input[type=checkbox]'));
      bindInvisibler($obj.find('input[type=checkbox]'));
      bindValue2Text($obj.find('input[type=text]'))
      ControllerRemoteConfig.setupPeriodPicker($obj);
      ControllerRemoteConfig.trigger('load-' + name, [$obj]);
      $inner.before('<section></section>');
      $inner.after('<section></section>');
    }, function () {
      bc_alert('Failed to open configuration page' + name, 'error');
    });

    ld = null;
  };

  ControllerRemoteConfig.detectAbility = function (name, rights, channel) {
    if (ControllerLogin.chkPermission(name, rights, channel)) {
      $('.remote-main-view .tips').hide();
      if ($('.remote-main-view').find('.ab-enable-' + name).length > 0) {
        $('.remote-main-view').find('.ab-enable-' + name).show();
      }
      return true;
    } else {
      $('.remote-main-view .tips').show();
      if ($('.remote-main-view').find('.ab-enable-' + name).length > 0) {
        $('.remote-main-view').find('.ab-enable-' + name).hide();
      }
      return false;
    }
  };

  /**
   * æŒ‡å®šè¡¨å•ç‰¹å®šå­—æ®µå¯ç¼–è¾‘
   */
  ControllerRemoteConfig.resetWritable = function (names) {

    for (var i = 0; i < names.length; ++i) {
      var name = names[i];
      var $sels = $('.remote-main-view').find('.ab-enable-' + name);
      $sels.find('select').removeAttr('disabled');
      $sels.find('input').removeAttr('disabled');
      $sels.find('button').removeAttr('disabled');
      $sels.find('.ui-slider').slider({'disabled': false});
      $('.remote-main-view .cfg-commiter input').attr('disabled', true);
    }
  };

  /**
   * æ£€æµ‹è¡¨å•æ˜¯å¦å¯ç¼–è¾‘ æ¥ç¡®å®š æäº¤æŒ‰é’®çš„å¯æ“ä½œæ€§
   */
  ControllerRemoteConfig.detectWritable = function (names, channel) {
    var cnt = names.length;
    for (var i = 0; i < names.length; ++i) {
      var name = names[i];
      var $sels = $('.remote-main-view').find('.ab-enable-' + name);
      if (!PCE.isWritable(name, channel)) {
        $sels.find('select').attr('disabled', true);
        $sels.find('input').attr('disabled', true);
        $sels.find('button').attr('disabled', true);
        $sels.find('.ui-slider').slider({'disabled': true});

        cnt--;
      } else {
        $sels.find('select').removeAttr('disabled');
        $sels.find('input').removeAttr('disabled');
        $sels.find('button').removeAttr('disabled');
        $sels.find('.ui-slider').slider({'disabled': false});
      }
    }
    if (cnt > 0) {
      $('.remote-main-view .cfg-commiter input').removeAttr('disabled');
    } else {
      $('.remote-main-view .cfg-commiter input').attr('disabled', true);
    }
    return cnt;
  };

  ControllerRemoteConfig.defaultErrorHandle = function(cmd, errno, msg) {
    ControllerRemoteConfig.waiter && ControllerRemoteConfig.waiter.hide();
    CGI.autoErrorHandler(cmd, errno, msg);
  };

  /**
   * ç»™å·¦ä¾§èœå•ç»‘å®šäº‹ä»¶
   */
  ControllerRemoteConfig.registerEvents = function () {
    $('#config-tree > li > p').on('click', function () {
      if (!$(this).parent().hasClass('expended')) {
        $('#config-tree > li.expended').removeClass('expended');
        $(this).parent().addClass('expended');
      }
    });
    $('.config-tree li').on('click', function () {
      if (!$(this).hasClass('selected')) {
        $('.config-tree li.selected').removeClass('selected');
        $(this).addClass('selected');
        $('#remote-tabs > *').remove();
        $(this).find('tab-define').each(function() {
          $('#remote-tabs').append('<div page-id="' + $(this).attr('id') + '" id="tab-' + $(this).attr('id') + '">' + $(this).text() + '</div>');
        });
        $('#remote-tabs > div:first-child').click();
      }
    });
    $('#remote-tabs').on('click', 'div', function() {
      if (!$(this).hasClass('selected')) {
        $('#remote-tabs .selected').removeClass('selected');
        $(this).addClass('selected');
        ControllerRemoteConfig.loadPage($(this).attr('page-id'));
      }
    });
  };

  ControllerRemoteConfig.setupPeriodPicker = function($obj) {
    $obj.find('.bc-period-picker').each(function() {
      initPeriodPicker($(this));
    });
  };

  ControllerRemoteConfig.setupSlider = function($obj) {
    $obj.find('.bc-ctrl-slider').each(function() {
      $(this).slider({
      	min: 1,
		    	max: 50,
		    	value: 10
		  });
		  $(this).bind('slidechange',function(event,ui){
		  	var id = $(this).attr("id");
		  	refresh(id);
		  }).trigger('slidechange');
    });
    $obj.find('.bc-ctrl-advanced-slider').each(function() {
      $(this).slider({
      	min: 0,
		    	max: 255,
		    	value: 128
		  });
		  $(this).bind('slidechange',function(event,ui){
		  	var id = $(this).attr("id");
		  	refresh(id);
		  }).trigger('slidechange');
    });
  };

})();

function refresh(id){
	var slider = $("#"+id).slider('value');
	$("#"+id+"-text").text(slider);
}

function osdGetItemPosition(x, y){
  return y + ' ' + x;
}

function osdGetItemPositionValue(index){
  var tmp = index.split(' ');
  return {
    "x" : tmp[1],
    "y" : tmp[0]
  };
}

// view-source:http://192.168.1.252/js/modules/ViewOSD.js?timeVersion=1620806528092

/**
 * ViewOSD ç±»è´Ÿè´£é¢„è§ˆç•Œé¢çš„ OSD æŽ§åˆ¶
 */
function ViewOSD() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewOSD);

(function() {

  ViewOSD.refreshView = function() {

    var ch = ControllerFlash.getSelectedChannelInfo();
    ControllerMain.disableAbility('osd');
    if (!ch) {
      return;
    }
    ControllerMain.enableAbility('osd');

    var d = ch.data.osd;
    if (d.osdChannel.enable != $('#osd-name-select').is(':checked')) {
      setTimeout(function() {
        $('#osd-name-select').click();
      }, 100);
    }
    $('#osd-name').attr('maxlength', ch.limits.osd.osdChannel.name.maxLen).val(d.osdChannel.name);
    $("#osd-name-postion-settings-select").html('');
    $(ch.limits.osd.osdChannel.pos).each(function() {
      $("#osd-name-postion-settings-select").append('<option value="' + this + '">' + this + '</option>');
    });
    $("#osd-date-time-position-select").html('');
    $(ch.limits.osd.osdTime.pos).each(function() {
      $("#osd-date-time-position-select").append('<option value="' + this + '">' + this + '</option>');
    });
    if (d.osdTime.pos == '') {
      $('#osd-date-time-position-select').val(ch.initials.osd.osdTime.pos);
    } else {
      $('#osd-date-time-position-select').val(d.osdTime.pos);
    }
    if (d.osdChannel.pos == '') {
      $('#osd-name-postion-settings-select').val(ch.initials.osd.osdChannel.pos);
    } else {
      $('#osd-name-postion-settings-select').val(d.osdChannel.pos);
    }
    if (d.osdTime.enable != $('#osd-date-select').is(':checked')) {
      setTimeout(function() {
        $('#osd-date-select').click();
      }, 100);
    }
    $('#osd-date-time-position-select').val(d.osdTime.pos);

    if (!ControllerLogin.chkPermission('osd', 'write', ch.index)) {
      ControllerMain.disableAbility('osd');
    }

    $('#osd-name-select').click().click();
    $('#osd-date-select').click().click();

  };

  ViewOSD.initUI = function() {

    $('#osd-name-select').on('click', function() {
      if ($(this).is(':checked')) {
        $('#osd-name').removeAttr('disabled');
        $('#osd-name-postion-settings-select').removeAttr('disabled');
      } else {
        $('#osd-name').attr('disabled', true);
        $('#osd-name-postion-settings-select').attr('disabled', true);
      }
    });

    $('#osd-date-select').on('click', function() {
      if ($(this).is(':checked')) {
        $('#osd-date-time-position-select').removeAttr('disabled');
      } else {
        $('#osd-date-time-position-select').attr('disabled', true);
      }
    });

    $('#preview-commit-osd').on('click', function() {
      var osdName = $('#osd-name').val().trim();
      if (osdName != "" && !validators.devicename(osdName)) {
        bc_alert('Camera name can only consist of alphabet or digtal charactors.', 'error');
        return;
      }

      var viewObj = ViewManager.getSelectedView();
      if (viewObj.getChannelId() == null) {
        return;
      }
      var chObj = ChannelManager.get(viewObj.getChannelId());

      if ($('#osd-name-postion-settings-select').val() == $('#osd-date-time-position-select').val() && $('#osd-name-postion-settings-select').val() != "Other Configuration") {
        if ($('#osd-name-select').is(':checked') && $('#osd-date-select').is(':checked')) {
          bc_alert('Don\'t select a same position for both date and OSD.', 'error');
          return;
        }
      }

      $('#preview-commit-osd').attr('disabled', true);
      PlayerPreview.waiter.show('Saving OSD settings...');
      CGI.sendCommand('SetOsd', {
        "Osd": {
          "channel": chObj.getId(),
          "osdChannel": {
            "name": osdName,
            "enable": $('#osd-name-select').is(':checked') ? 1 : 0,
            "pos": $('#osd-name-postion-settings-select').val()
          },
          "osdTime": {
            "enable": $('#osd-date-select').is(':checked') ? 1 : 0,
            "pos": $('#osd-date-time-position-select').val()
          }
        }
      }, function(d) {
        PlayerPreview.waiter.hide();
        if( osdName != ControllerMain.deviceInfo.name ) {
          ControllerMain.deviceInfo.name = osdName;
        }
        bc_alert('OSD configured successfully.');
        $('#preview-commit-osd').removeAttr('disabled');
      }, function(cmd, errno, msg) {
        PlayerPreview.waiter.hide();
        CGI.autoErrorHandler(cmd, errno, msg);
        $('#preview-commit-osd').removeAttr('disabled');
      });
    });
  };

})();

// view-source:http://192.168.1.252/js/modules/ViewISP.js?timeVersion=1620806528092


/**
 * ViewISP ç±»è´Ÿè´£é¢„è§ˆç•Œé¢çš„ ISP æŽ§åˆ¶
 */
function ViewISP() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewISP);

(function() {
  var _batchOp = false;

  ViewISP.restoreDefault = function(chId) {
    var ch = ControllerFlash.getSelectedChannelInfo();
    var fieldOptions, fieldData;

    if (!ch) {
      return; // æ— é€‰ä¸­
    }

    this.restoring = true;

    fieldOptions = ch.limits.isp;
    fieldData = ch.initials.isp;

    $('#pv-adv-channel').val(fieldData.channel);

    $('#pv-gain-begin').val(fieldData.gain.min);
    $('#pv-gain-end').val(fieldData.gain.max);

    $('#pv-shutter-begin').val(fieldData.shutter.min);
    $('#pv-shutter-end').val(fieldData.shutter.max);

    $('#pv-red-gain').slider({
      "min": fieldOptions.redGain.min,
      "max": fieldOptions.redGain.max,
      "value": fieldData.redGain
    });

    $('#pv-blue-gain').slider({
      "min": fieldOptions.blueGain.min,
      "max": fieldOptions.blueGain.max,
      "value": fieldData.blueGain
    });

    $('#pv-gain-begin').attr({
      "max": fieldOptions.gain.max,
      "min": fieldOptions.gain.min,
      "title": fieldOptions.gain.min + '~' + fieldOptions.gain.max
    }).val(fieldData.gain.min);

    $('#pv-gain-end').attr({
      "max": fieldOptions.gain.max,
      "min": fieldOptions.gain.min,
      "title": fieldOptions.gain.min + '~' + fieldOptions.gain.max
    }).val(fieldData.gain.max);

    $('#pv-shutter-begin').attr({
      "max": fieldOptions.shutter.max,
      "min": fieldOptions.shutter.min,
      "title": fieldOptions.shutter.min + '~' + fieldOptions.shutter.max
    }).val(fieldData.shutter.min);

    $('#pv-shutter-end').attr({
      "max": fieldOptions.shutter.max,
      "min": fieldOptions.shutter.min,
      "title": fieldOptions.shutter.min + '~' + fieldOptions.shutter.max
    }).val(fieldData.shutter.max);

    $('#pv-blc').slider({
      "min": fieldOptions.blc.min,
      "max": fieldOptions.blc.max,
      "value": fieldData.blc
    });

    $('#pv-drc').slider({
      "min": fieldOptions.drc.min,
      "max": fieldOptions.drc.max,
      "value": fieldData.drc
    });

    $('#pv-anti-flicker').html('');
    $(fieldOptions.antiFlicker).each(function() {
      $('#pv-anti-flicker').append('<option value="' + this + '">' + this + '</option>');
    });
    $('#pv-anti-flicker').val(fieldData.antiFlicker);

    $('#pv-exposure').html('');

    if (ControllerLogin.chkLowestVersion('ispExposureMode', 0, chId) && ControllerLogin.chkPermission('ispExposureMode', 'write', chId)) {
      $('#pv-exposure').parents('tr').show();

      $(fieldOptions.exposure).each(function() {
        $('#pv-exposure').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-exposure').val(fieldData.exposure).trigger('change');
    } else {
      $('.pv-exposure').hide();
      $('#pv-exposure').parents('tr').hide();
    }

    $('#pv-white-balance').html('');
    $(fieldOptions.whiteBalance).each(function() {
      $('#pv-white-balance').append('<option value="' + this + '">' + this + '</option>');
    });
    $('#pv-white-balance').val(fieldData.whiteBalance).trigger('change');

    $('#pv-backlight').html('');
    if (ControllerLogin.chkLowestVersion('ispBackLight', 0, chId) && ControllerLogin.chkPermission('ispBackLight', 'write', chId)) {
      $('#pv-backlight').parents('tr').show();

      var EnumBackLightNames = {
        "DynamicRangeControl": "Dynamic Range",
        "BackLightControl": "Back-Light",
        "Off": "Off"
      };

      $(fieldOptions.backLight).each(function() {
        $('#pv-backlight').append('<option value="' + this + '">' + EnumBackLightNames[this] + '</option>');
      });
      $('#pv-backlight').val(fieldData.backLight).trigger('change');
    } else {
      $('#pv-backlight').parents('tr').hide();
      $('.pv-blc').hide();
      $('.pv-drc').hide();
    }


    $('#pv-daynight').html('');

    if (ControllerLogin.chkLowestVersion('ispDayNight', 0, chId)) {

      $(fieldOptions.dayNight).each(function() {
        $('#pv-daynight').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-daynight').val(fieldData.dayNight);
      $('.pv-daynight-box').show();

    } else {
      $('.pv-daynight-box').hide();
    }

    if (PCE.getFeatureVersion("powerLed", fieldData.channel) > 0) {
      $('#pv-power-light').html('');
      $(ch.limits.powerControl.state).each(function() {
        $('#pv-power-light').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-power-light').val(ch.initials.powerControl.state);
    }

    if ( PCE.getFeatureVersion('white_balance', chId) === 0 ) {  // èƒ½åŠ›é›†é€šé“ä¸­ï¼Œwhite_balanceå­—æ®µç‰ˆæœ¬å·ä¸º0æ—¶ï¼Œéšè—ç™½å¹³è¡¡è®¾ç½®
      $('#pv-white-balance').parents('tr').hide();
    } else {
      $('#pv-white-balance').parents('tr').show();
    }

    $('#pv-adv-commit').click();

  };

  ViewISP.refreshView = function(chId) {
    var chId = chId === undefined ? ControllerFlash.getSelectedChannel().getId() : chId;
    var ch = ControllerFlash.getSelectedChannelInfo();
    var fieldOptions, fieldData;

    ControllerMain.disableAbility('isp');

    if (!ch) {
      return; // æ— é€‰ä¸­
    }

    ControllerMain.enableAbility('isp');

    fieldOptions = ch.limits.isp;
    fieldData = ch.data.isp;

    $('#pv-adv-channel').val(fieldData.channel);

    $('#pv-gain-begin').val(fieldData.gain.min);
    $('#pv-gain-end').val(fieldData.gain.max);

    $('#pv-shutter-begin').val(fieldData.shutter.min);
    $('#pv-shutter-end').val(fieldData.shutter.max);

    $('#pv-red-gain').slider({
      "min": fieldOptions.redGain.min,
      "max": fieldOptions.redGain.max,
      "value": fieldData.redGain
    });

    $('#pv-blue-gain').slider({
      "min": fieldOptions.blueGain.min,
      "max": fieldOptions.blueGain.max,
      "value": fieldData.blueGain
    });

    $('#pv-gain-begin').attr({
      "max": fieldOptions.gain.max,
      "min": fieldOptions.gain.min,
      "title": fieldOptions.gain.min + '~' + fieldOptions.gain.max
    }).val(fieldData.gain.min);

    $('#pv-gain-end').attr({
      "max": fieldOptions.gain.max,
      "min": fieldOptions.gain.min,
      "title": fieldOptions.gain.min + '~' + fieldOptions.gain.max
    }).val(fieldData.gain.max);

    $('#pv-shutter-begin').attr({
      "max": fieldOptions.shutter.max,
      "min": fieldOptions.shutter.min,
      "title": fieldOptions.shutter.min + '~' + fieldOptions.shutter.max
    }).val(fieldData.shutter.min);

    $('#pv-shutter-end').attr({
      "max": fieldOptions.shutter.max,
      "min": fieldOptions.shutter.min,
      "title": fieldOptions.shutter.min + '~' + fieldOptions.shutter.max
    }).val(fieldData.shutter.max);

    $('#pv-blc').slider({
      "min": fieldOptions.blc.min,
      "max": fieldOptions.blc.max,
      "value": fieldData.blc
    });

    $('#pv-drc').slider({
      "min": fieldOptions.drc.min,
      "max": fieldOptions.drc.max,
      "value": fieldData.drc
    });

    _batchOp = true;

    if ($('#pv-rotation').is(':checked') != fieldData.rotation) { $('#pv-rotation').click(); }

    if ($('#pv-mirroring').is(':checked') != fieldData.mirroring) { $('#pv-mirroring').click(); }

    _batchOp = false;

    if (PCE.isReadable("ledControl")) {

      $('#pv-led-light').html('');
      $(ch.limits.ledControl.state).each(function() {
        $('#pv-led-light').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-led-light').val(ch.data.ledControl.state);
    }

    if (PCE.getFeatureVersion("powerLed", fieldData.channel) > 0) {

      $('#pv-power-light').html('');
      $(ch.limits.powerControl.state).each(function() {
        $('#pv-power-light').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-power-light').val(ch.data.powerControl.state);
    }

    $('#pv-anti-flicker').html('');
    $(fieldOptions.antiFlicker).each(function() {
      $('#pv-anti-flicker').append('<option value="' + this + '">' + this + '</option>');
    });
    $('#pv-anti-flicker').val(fieldData.antiFlicker);


    $('#pv-exposure').html('');

    if (ControllerLogin.chkLowestVersion('ispExposureMode', 0, chId) && ControllerLogin.chkPermission('ispExposureMode', 'write', chId)) {
      $('#pv-exposure').parents('tr').show();
      $(fieldOptions.exposure).each(function() {
        $('#pv-exposure').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-exposure').val(fieldData.exposure).trigger('change');
    } else {
      $('#pv-exposure').parents('tr').hide();
      $('.pv-exposure').hide();
    }

    $('#pv-white-balance').html('');
    $(fieldOptions.whiteBalance).each(function() {
      $('#pv-white-balance').append('<option value="' + this + '">' + this + '</option>');
    });
    $('#pv-white-balance').val(fieldData.whiteBalance).trigger('change');

    $('#pv-backlight').html('');
    if (ControllerLogin.chkLowestVersion('ispBackLight', 0, chId) && ControllerLogin.chkPermission('ispBackLight', 'write', chId)) {
      $('#pv-backlight').parents('tr').show();
      var EnumBackLightNames = {
        "DynamicRangeControl": "Dynamic Range",
        "BackLightControl": "Back-Light",
        "Off": "Off"
      };

      $(fieldOptions.backLight).each(function() {
        $('#pv-backlight').append('<option value="' + this + '">' + EnumBackLightNames[this] + '</option>');
      });
      $('#pv-backlight').val(fieldData.backLight).trigger('change');
    } else {
      $('#pv-backlight').parents('tr').hide();
      $('.pv-blc').hide();
      $('.pv-drc').hide();
    }

    $('#pv-daynight').html('');
    if (ControllerLogin.chkLowestVersion('ispDayNight', 0, chId)) {

      $(fieldOptions.dayNight).each(function() {
        $('#pv-daynight').append('<option value="' + this + '">' + this + '</option>');
      });
      $('#pv-daynight').val(fieldData.dayNight);
      $('.pv-daynight-box').show();

    } else {
      $('.pv-daynight-box').hide();

    }

    if (!ControllerLogin.chkPermission('isp', 'write', ch.index)) {
      ControllerMain.disableAbility('isp');
    }

    if ( PCE.getFeatureVersion('white_balance', chId) === 0 ) {
      $('#pv-white-balance').parents('tr').hide();
    } else {
      $('#pv-white-balance').parents('tr').show();
    }
  };

  ViewISP.initUI = function() {

    $('#pv-blc').slider({
      "range": "min",
      "value": 50,
      "min": 0,
      "max": 100
    });

    $('#pv-drc').slider({
      "range": "min",
      "value": 50,
      "min": 0,
      "max": 100
    });

    $('#pv-blue-gain').slider({
      "range": "min",
      "value": 50,
      "min": 0,
      "max": 100
    });

    $('#pv-red-gain').slider({
      "range": "min",
      "value": 50,
      "min": 0,
      "max": 100
    });

    $('#pv-adv-default').on('click', function() {
      ViewISP.restoreDefault(parseInt($('#pv-adv-channel').val()));
    });

    $('#pv-gain-begin').on('change', function() {
      var vB = parseInt($(this).val()),
        vE = parseInt($('#pv-gain-end').val());
      if (vB > vE) {
        $('#pv-gain-end').val(vB);
      }
    });

    $('#pv-gain-end').on('change', function() {
      var vB = parseInt($('#pv-gain-begin').val()),
        vE = parseInt($(this).val());
      if (vB > vE) {
        $('#pv-gain-begin').val(vE);
      }
    });

    $('#pv-shutter-begin').on('change', function() {
      var vB = parseInt($(this).val()),
        vE = parseInt($('#pv-shutter-end').val());
      if (vB > vE) {
        $('#pv-shutter-end').val(vB);
      }
    });

    $('#pv-shutter-end').on('change', function() {
      var vB = parseInt($('#pv-shutter-begin').val()),
        vE = parseInt($(this).val());
      if (vB > vE) {
        $('#pv-shutter-begin').val(vE);
      }
    });

    $('#pv-adv-commit').on('click', function() {
      $(this).attr('disabled', true);
      var id = parseInt($('#pv-adv-channel').val());
      if (id < 0) {
        return bc_alert('Please select a view firstly.', 'error');
      }

      if (ViewISP.restoring) {
        PlayerPreview.waiter.show('Restoring advanced settings...');
      } else {
        PlayerPreview.waiter.show('Saving advanced settings...');
      }

      var prs = [];
      prs.push(new Promise(function(resolve, reject) {

        const ISP = {
          "channel": id,
          "antiFlicker": $('#pv-anti-flicker').val(),
          "blueGain": parseInt($('#pv-blue-gain').slider('value')),
          "redGain": parseInt($('#pv-red-gain').slider('value')),
          "whiteBalance": $('#pv-white-balance').val(),
          "rotation": $('#pv-rotation').is(':checked') ? 1 : 0,
          "mirroring": $('#pv-mirroring').is(':checked') ? 1 : 0
        };

        const exposureVal = $('#pv-exposure').val();

        if (!!exposureVal) {
          ISP.exposure = exposureVal;
          ISP.gain = {
            min: parseInt($('#pv-gain-begin').val()),
            max: parseInt($('#pv-gain-end').val())
          }
          ISP.shutter = {
            "min": parseInt($('#pv-shutter-begin').val()),
            "max": parseInt($('#pv-shutter-end').val())
          }
        }

        const dayNightVal = $('#pv-daynight').val();
        if (!!dayNightVal) {
          ISP.dayNight = dayNightVal;
        }

        const backLightVal = $('#pv-backlight').val();

        if (!!backLightVal) {
          ISP.backLight = backLightVal;
          ISP.blc = parseInt($('#pv-blc').slider('value'));
          ISP.drc = parseInt($('#pv-drc').slider('value'));
        }

        CGI.sendCommand('SetIsp', {
          "Isp": ISP
        }, resolve,
        function(cmd, errno, msg) {
          reject({
            "cmd": cmd,
            "errno": errno,
            "msg": msg
          });
        });
      }));

      prs.push(new Promise(function(resolve, reject) {

        if (!PCE.isReadable("ledControl") || !PCE.isExecutable("ledControl")) {

          return resolve();
        }

        CGI.sendCommand("SetIrLights", {
          "IrLights": {
            "state": $('#pv-led-light').val()
          }
        }, resolve,
        function(cmd, errno, msg) {
          reject({
            "cmd": cmd,
            "errno": errno,
            "msg": msg
          });
        });
      }));

      // å¢žåŠ å¯¹ç”µæºç¯çš„é…ç½®æ“ä½œ
      prs.push(new Promise(function(resolve, reject) {

        if(PCE.getFeatureVersion('powerLed', id) <= 0 || ! PCE.isExecutable('powerLed', id)) {
          return resolve();
        }

        CGI.sendCommand(
          'SetPowerLed',
          {
            "PowerLed": {
              "state": $('#pv-power-light').val(),
              "channel": id
            },
          },
          resolve,
          function(cmd, errno, msg) {
            reject({
              "cmd": cmd,
              "errno": errno,
              "msg": msg
            });
          }
        );
      }));

      Promise.all(prs).then(function() {
        PlayerPreview.waiter.hide();
        bc_alert();
        $('#pv-adv-commit').removeAttr('disabled');
      }, function(error) {

        PlayerPreview.waiter.hide();
        CGI.autoErrorHandler(error.cmd, error.errno, error.msg);
        $('#pv-adv-commit').removeAttr('disabled');
      });
    });

    $('#pv-mirroring').on('click', function() {
      if (_batchOp) {
        return;
      }
      var id = parseInt($('#pv-adv-channel').val());
      $(this).attr('disabled', true);
      $('#pv-adv-commit').attr('disabled', true);

      g_device.channels[id].data.isp.mirroring = $('#pv-mirroring').is(':checked') ? 1 : 0;

      CGI.sendCommand('SetIsp', { "Isp": g_device.channels[id].data.isp }, function() {
        if (!$('#pv-mirroring').hasClass('image-isp-reset')) {
          bc_alert();
        }
        $('#pv-mirroring').removeClass('image-isp-reset');
        $('#pv-mirroring').removeAttr('disabled');
        $('#pv-adv-commit').removeAttr('disabled');
      }, function(cmd, errno, msg) {
        CGI.autoErrorHandler(cmd, errno, msg);
        $('#pv-mirroring').removeAttr('disabled');
        $('#pv-adv-commit').removeAttr('disabled');
      });
    });

    $('#pv-rotation').on('click', function() {
      if (_batchOp) {
        return;
      }
      var id = parseInt($('#pv-adv-channel').val());
      $(this).attr('disabled', true);
      $('#pv-adv-commit').attr('disabled', true);

      g_device.channels[id].data.isp.rotation = $('#pv-rotation').is(':checked') ? 1 : 0;

      CGI.sendCommand('SetIsp', { "Isp": g_device.channels[id].data.isp }, function() {
        if (!$('#pv-rotation').hasClass('image-isp-reset')) {
          bc_alert();
        }
        $('#pv-rotation').removeClass('image-isp-reset');
        $('#pv-rotation').removeAttr('disabled');
        $('#pv-adv-commit').removeAttr('disabled');
      }, function(cmd, errno, msg) {
        CGI.autoErrorHandler(cmd, errno, msg);
        $('#pv-rotation').removeAttr('disabled');
        $('#pv-adv-commit').removeAttr('disabled');
      });
    });

    $('#pv-exposure').on('change', function() {

      $('.pv-exposure').hide();
      switch ($(this).val()) {
        case 'Auto':
          break;
        case 'LowNoise':
          $('#pv-gain').show();
          break;
        case 'Anti-Smearing':
          $('#pv-shutter').show();
          break;
        case 'Manual':
          $('#pv-gain').show();
          $('#pv-shutter').show();
          break;
        default:
          break;
      }
    });

    $('#pv-white-balance').on('change', function() {

      $('.pv-white-balance').hide();
      switch ($(this).val()) {
        case 'Auto':
          break;
        case 'Manual':
          if( PCE.getFeatureVersion('white_balance', parseInt($('#pv-adv-channel').val())) !== 0 ) {
            $('.pv-white-balance').show();
          }
          break;
        default:
          break;
      }
    });

    $('#pv-backlight').on('change', function() {

      $('.pv-backlight').hide();
      switch ($(this).val()) {
        case 'Auto':
          break;
        case 'BackLightControl':
          $('.pv-blc').show();
          break;
        case 'DynamicRangeControl':
          $('.pv-drc').show();
          break;
        default:
          break;
      }
    });
  };
})();

// view-source:http://192.168.1.252/js/modules/ViewImage.js?timeVersion=1620806528092


/**
 * ViewImage ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„å›¾åƒæŽ§åˆ¶
 */
function ViewImage() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewImage);

(function() {
  var _batchOp = false;

  ViewImage.refreshView = function() {
    var chObj = ControllerFlash.getSelectedChannel();
    ControllerMain.disableAbility('image');
    if (!chObj) {
      return;
    }
    ControllerMain.enableAbility('image');
    var ch = g_device.channels[chObj.getId()];

    $(['bright', 'contrast', 'saturation', 'sharpen']).each(function() {
      $('#image-' + this).prop('outerHTML', '<div id="image-' + this + '"></div>');
      (function(eId) {
        $('#image-' + eId).slider({
          "range": "min",
          "value": ch.data.image[eId],
          "min": ch.limits.image[eId].min,
          "max": ch.limits.image[eId].max,
          "change": function(v) {
            if (_batchOp) {
              return;
            }
            var chObj = ControllerFlash.getSelectedChannel();
            if (!chObj) {
              return;
            }
            var ch = g_device.channels[chObj.getId()];
            if (!ch.data.image) {
              return;
            }
            ch.data.image[eId] = $('#image-' + eId).slider('value');

            CGI.sendCommand('SetImage', {
              "Image": ch.data.image
            }, function() {}, function(cmd, errno, msg) {
              CGI.autoErrorHandler(cmd, errno, msg);
            });
          }
        });
      })(this);
    });

    if (!ControllerLogin.chkPermission('image', 'write', ch.index)) {
      ControllerMain.disableAbility('image');
    }
  };

  ViewImage.initUI = function() {


    $('#pv-image-default').on('click', function() {
      var chObj = ControllerFlash.getSelectedChannel();
      if (!chObj) {
        return;
      }
      var ch = g_device.channels[chObj.getId()];
      var fieldData = ch.initials.isp;
      if (!ch.data.image) {
        return;
      }
      _batchOp = true;
      $(['bright', 'contrast', 'saturation', 'sharpen']).each(function() {
        $('#image-' + this).slider({
          "value": ch.initials.image[this]
        });
        ch.data.image[this] = ch.initials.image[this];
      });

      if ($('#pv-rotation').is(':checked') != fieldData.rotation) { $('#pv-rotation').addClass('image-isp-reset').click(); }

      if ($('#pv-mirroring').is(':checked') != fieldData.mirroring) { $('#pv-mirroring').addClass('image-isp-reset').click(); }

      $('#pv-image-default').attr('disabled', true);

      CGI.sendCommand('SetImage', {
        "Image": ch.data.image
      }, function() {
        bc_alert();
        _batchOp = false;
        $('#pv-image-default').removeAttr('disabled');
      }, function(cmd, errno, msg) {
        CGI.autoErrorHandler(cmd, errno, msg);
        _batchOp = false;
        $('#pv-image-default').removeAttr('disabled');
      });

    });
  };


})();

// view-source:http://192.168.1.252/js/modules/ViewEncode.js?timeVersion=1620806528092


/**
 * ViewEncode ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„ç¼–ç æŽ§åˆ¶
 */
function ViewEncode() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewEncode);

(function() {

  var _originalResolution = undefined; // æ­¤å˜é‡ç”¨äºŽæš‚å­˜ä¸Šæ¬¡ä¿å­˜çš„ resolution å€¼
  var _originalProfile = undefined;  // æ­¤å˜é‡ç”¨äºŽæš‚å­˜ä¸Šæ¬¡ä¿å­˜çš„ profile å€¼

  var isResolutionChange = false,
    isProfileChange = false;

  ViewEncode.getCurrentData = function() {  // è¿”å›žå½“å‰ç æµçš„ç›¸å…³é…ç½®
    var chObj = ControllerFlash.getSelectedChannel();
    if (!chObj) {
      return null;
    }

    if (this.isMainStream()) {

      if(_originalResolution == undefined) {
        _originalResolution = g_device.channels[chObj.getId()].data.encode.mainStream.size;
      }
      if(_originalProfile == undefined) {
        _originalProfile = g_device.channels[chObj.getId()].data.encode.mainStream.profile;
      }
      return g_device.channels[chObj.getId()].data.encode.mainStream;
    } else {

      if(_originalResolution == undefined) {
        _originalResolution = g_device.channels[chObj.getId()].data.encode.subStream.size;
      }
      if(_originalProfile == undefined) {
        _originalProfile = g_device.channels[chObj.getId()].data.encode.subStream.profile;
      }
      return g_device.channels[chObj.getId()].data.encode.subStream;
    }
  };

  ViewEncode.getAllData = function() {
    var chObj = ControllerFlash.getSelectedChannel();
    if (!chObj) {
      return null;
    }

    return g_device.channels[chObj.getId()].data.encode;
  };

  ViewEncode.getCurrentSetting = function() {

    var chObj = ControllerFlash.getSelectedChannel();
    if (!chObj) {
      return null;
    }
    var setting = this.pickRange(chObj);
    if (this.isMainStream()) {
      return setting.mainStream;
    } else {
      return setting.subStream;
    }
  };

  ViewEncode.pickRange = function(chObj) {
    var settings = g_device.channels[chObj.getId()].limits.encode;
    var data = g_device.channels[chObj.getId()].data.encode;
    var setting = null;
    for (var i = 0; i < settings.length; ++i) {
      if (data.mainStream.size == settings[i].mainStream.size) {
        setting = settings[i];
        break;
      }
    }
    return setting;
  };

  ViewEncode.isMainStream = function() {
    return ($('#record-stream-select').val() == 'main');
  };

  ViewEncode.disableAll = function() {
    $('#basic-encode-settings *').attr('disabled', true);
  };

  ViewEncode.enableAll = function() {

    $('#basic-encode-settings *').removeAttr('disabled');
  };

  ViewEncode.refreshView = function() {
    $('#encode-resolution-select').html('');
    $('#encode-frame-rate-select').html('');
    $('#encode-maxinum-bit-select').html('');
    if (ControllerLogin.chkLowestVersion('supportGop', 0, 0)) {
      $('.interframe-space-box').show();
      $('#interframe-space').val(10);
    } else {
      $('.interframe-space-box').hide();
    }

    var chObj = ControllerFlash.getSelectedChannel();
    ControllerMain.disableAbility('enc');

    if (!chObj) {
      return;
    }
    ControllerMain.enableAbility('enc');

    var setting = this.getCurrentSetting();
    var data = this.getCurrentData();
    var ranges = g_device.channels[chObj.getId()].limits.encode;
    var audio = g_device.channels[chObj.getId()].data.encode.audio;

    if (this.isMainStream()) {

      if (audio !== undefined && chObj.getId() < ControllerMain.deviceInfo.audioNum) {

        $('#record-audio-select-vessel').show();

        if ($('#record-audio-select').is(':checked') != audio) {

          $('#record-audio-select').click();
        }

      } else {

        $('#record-audio-select-vessel').hide();
      }

      for (var i = 0; i < ranges.length; ++i) {

        $('#encode-resolution-select').append('<option value="' + ranges[i].mainStream.size + '">' + ranges[i].mainStream.size + '</option>');
      }
    } else {
      $('#record-audio-select-vessel').hide();
      $('#encode-resolution-select').append('<option value="' + setting.size + '">' + setting.size + '</option>');
    }

    $('#encode-resolution-select').val(data.size);


    for (var i = 0; i < setting.bitRate.length; ++i) {
      $('#encode-maxinum-bit-select').append('<option value="' + setting.bitRate[i] + '">' + setting.bitRate[i] + '</option>');
    }

    for (var i = 0; i < setting.frameRate.length; ++i) {
      $('#encode-frame-rate-select').append('<option value="' + setting.frameRate[i] + '">' + setting.frameRate[i] + '</option>');
    }

    $('#encode-profile-select-vessel').hide();

    if (setting.profile) {
      $('#encode-profile-select').html('');
      for (var i = 0; i < setting.profile.length; ++i) {
        $('#encode-profile-select').append('<option value="' + setting.profile[i] + '">' + setting.profile[i] + '</option>');
      }
      $('#encode-profile-select').val(data.profile);
    }

    $('#encode-maxinum-bit-select').val(data.bitRate);
    $('#encode-frame-rate-select').val(data.frameRate);
    if (ControllerLogin.chkLowestVersion('supportGop', 0, 0)) {
      $('#interframe-space').val(data.gop).attr('max', setting.gop.max).attr('min', setting.gop.min);
      $('#interframe-space').parents('.interframe-space-box').find('.interframe-space-range').text(setting.gop.min + '-' + setting.gop.max);
    }

    if (!ControllerLogin.chkPermission('enc', 'write', chObj.getId())) {
      ControllerMain.disableAbility('enc');
    }
  };

  ViewEncode.initUI = function() {

    isResolutionChange = false;
    isProfileChange = false;

    $('#record-stream-select').on('change', function() {  // ç æµæ›´æ”¹ï¼šencodeå…¶ä»–é…ç½®å¯å–å€¼èŒƒå›´å¯èƒ½å‘ç”Ÿå˜åŒ–

      _originalResolution = undefined;
      _originalProfile = undefined;
      ViewEncode.refreshView();
    });

    $('#encode-resolution-select').on('change', function() {

      var chObj = ControllerFlash.getSelectedChannel();

      if (!chObj) {
        return;
      }

      ViewEncode.getCurrentData().size = $(this).val();

      var data = g_device.channels[chObj.getId()].data.encode;
      var range = ViewEncode.pickRange(chObj);

      if (ViewEncode.isMainStream()) { // å¼ºåˆ¶ä¿®æ”¹ä¸ºé»˜è®¤ç çŽ‡å’Œå¸§çŽ‡
        data.subStream.bitRate = range.subStream.default.bitRate;
        data.subStream.frameRate = range.subStream.default.frameRate;

        data.mainStream.bitRate = range.mainStream.default.bitRate;
        data.mainStream.frameRate = range.mainStream.default.frameRate;
      }
      ViewEncode.refreshView();
    });

    $('#record-audio-select').on('click', function() {
      var data = ViewEncode.getAllData();
      if (data.audio !== undefined) {
        data.audio = $(this).is(':checked') ? 1 : 0;
      }
    });

    $('#encode-frame-rate-select').on('change', function() {

      ViewEncode.getCurrentData().frameRate = parseInt($(this).val());

    });

    $('#encode-maxinum-bit-select').on('change', function() {

      ViewEncode.getCurrentData().bitRate = parseInt($(this).val());

    });

    $('#interframe-space').on('change', function() {
      var max = parseInt($(this).attr('max'));
      var min = parseInt($(this).attr('min'));
      var val = parseInt($(this).val());
      if (isNaN(val)) {
        ViewEncode.getCurrentData().gop = min;
        $(this).val(min);
      } else {
        ViewEncode.getCurrentData().gop = Math.max(min, Math.min(max, val));
      }

    });


    $('#encode-profile-select').on('change', function() {

      ViewEncode.getCurrentData().profile = $(this).val();

    });

    $('#preview_commit_encode').on('click', function() {

      $(this).attr('disabled', true);

      var chObj = ControllerFlash.getSelectedChannel();

      if (!chObj) {
        return;
      }

      PlayerPreview.waiter.show('Saving encode settings...');

      if(ViewEncode.getCurrentData().size != _originalResolution) {
        isResolutionChange = true;
        _originalResolution = ViewEncode.getCurrentData().size;
      }

      if(ViewEncode.getCurrentData().profile != _originalProfile) {
        isProfileChange = true;
        _originalProfile = ViewEncode.getCurrentData().profile;
      }

      var data = g_device.channels[chObj.getId()].data.encode;
      CGI.sendCommand('SetEnc', {
        "Enc": data
      }, function() {
        PlayerPreview.waiter.hide();
        if (isProfileChange || isResolutionChange) {
          bc_alert('Save encoding configuration successfully.<br>Now device will reboot, please wait and login later.', 'ok');
          setTimeout(function() {
            ControllerMain.onLogout();
          }, 3000);
        } else {
          bc_alert('Save encoding configuration successfully.', 'ok');
        }

        isResolutionChange = false;
        isProfileChange = false;
        _originalResolution = undefined;
        _originalProfile = undefined;

        $('#preview_commit_encode').removeAttr('disabled');
      }, function(cmd, errno, msg) {
        PlayerPreview.waiter.hide();
        CGI.autoErrorHandler(cmd, errno, msg);
        $('#preview_commit_encode').removeAttr('disabled');
      });

    });

    delete this.initUI;

  };


})();

// view-source:http://192.168.1.252/js/modules/ViewPTZAction.js?timeVersion=1620806528092


/**
 * ViewPTZAction ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„ PTZ åŠ¨ä½œæŽ§åˆ¶
 */
function ViewPTZAction() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewPTZAction);

(function() {

  ViewPTZAction.zoomFocusTimer = null;  // zoom-focus æ»‘åŠ¨æ“ä½œæŽ§åˆ¶å™¨ï¼šå»¶æ—¶æ˜¯ä¸ºäº†é¿å…é¢‘ç¹è¯·æ±‚

  ViewPTZAction.zoomFocusStepTimer = null;  // zoom-focus å•æ­¥ç‚¹å‡»æ“ä½œæŽ§åˆ¶å™¨

  ViewPTZAction.getZoomFocusTimer_1 = null;  // å•æ­¥ç‚¹å‡»æ“ä½œæˆ–å‘é€stopä¹‹åŽèŽ·å–æœ€æ–°çš„zoom-focusä¿¡æ¯ï¼šå»¶æ—¶æ˜¯ä¸ºäº†ç­‰å¾…æ“ä½œå®Œæˆ

  ViewPTZAction.getZoomFocusTimer_2 = null;  // æ“ä½œzoomä¹‹åŽèŽ·å–æœ€æ–°çš„focuså€¼ï¼šå®šæ—¶åŽ»èŽ·å–focuså€¼ï¼Œç›´è‡³èŽ·å–çš„å€¼ä¸å†å˜åŒ–

  ViewPTZAction.zoomFocusTriggerTime = null;  // è®°å½•æŒ‰ä¸‹ zoom-focus å•æ­¥æ“ä½œçš„æ—¶é—´
  ViewPTZAction.zoomFocusSSTimer = null;  // è¿›è¡Œå•æ­¥æ“ä½œæ—¶ï¼Œå‘é€å¤šä¸€æ¡â€œptzCtrlâ€çš„è®¡æ—¶å™¨

  ViewPTZAction.zoomFocusOp = null;  // zoomPos || focusPos

  ViewPTZAction.speed = 32;

  ViewPTZAction.autoTimer = null;

  ViewPTZAction.isPatrolRunning = false;

  ViewPTZAction.on('channelChange', function(chId) {
    this.channel = chId;
    $("#slider_ptz_speed").slider({
      "value": this.getPTZSpeed()
    });
    this.speed = this.getPTZSpeed();
  });

  ViewPTZAction.isAutoWillStop = function() {

    var viewObj = ViewManager.getSelectedView();

    if (viewObj !== null) {

      var channel = viewObj.getChannelId();

      if (ControllerLogin.abilities.abilityChn[channel]) {

        return ControllerLogin.abilities.abilityChn[channel].ptzType.ver === EnumPTZType.GM8136S_PTZ;
      }
    }

    return false;
  };

  // èŽ·å–ptzspeed
  ViewPTZAction.getPTZSpeed = function() {
    var viewObj = ViewManager.getSelectedView();
    if (viewObj !== null) {
      var channel = viewObj.getChannelId();
      var channelObj = ChannelManager.get(channel);
      if ((channel !== null) && (channel >= 0 && channel < ChannelManager.getNumber())) {
        return channelObj.getPTZSpeedValue();
      } else {
        return 32;
      }
    } else {
      return 32;
    }
  };

  // å•æ­¥æ“ä½œ æˆ– PtzCtrl å‘½ä»¤åŽï¼ŒèŽ·å– zoom-focus ä½ç½®
  ViewPTZAction.getZoomFocusPos = function() {
    CGI.sendCommand('GetZoomFocus', {
      "channel": ViewPTZAction.channel
    }, function(res) {
      $('#ptz-zoom').slider('option', 'value', res.ZoomFocus.zoom.pos);
      g_device.channels[ViewPTZAction.channel].data.zoom_focus['zoom'].pos = $('#ptz-zoom').slider('value');
      $('#ptz-focus').slider('option', 'value', res.ZoomFocus.focus.pos);
      g_device.channels[ViewPTZAction.channel].data.zoom_focus['focus'].pos = $('#ptz-focus').slider('value');

      var actionSource = $('.being-action.ptz-action-cmd-v2');
      if(actionSource.length == 0) {
        return;
      }
      actionSource.removeClass('being-action');
      if(actionSource.attr('title').indexOf('Zoom') != -1) {  // æ“ä½œçš„æ˜¯ focus
        if( ViewPTZAction.getZoomFocusTimer_2 ) {
          clearInterval(ViewPTZAction.getZoomFocusTimer_2);
        }
        ViewPTZAction.getZoomFocusTimer_2 = setInterval(function() {
          CGI.sendCommand('GetZoomFocus', {
            "channel": ViewPTZAction.channel
          }, function(res) {
            if(res.ZoomFocus.focus.pos === $('#ptz-focus').slider('value')) {
              clearInterval(ViewPTZAction.getZoomFocusTimer_2);
            } else {
              $('#ptz-focus').slider('option', 'value', res.ZoomFocus.focus.pos);
              g_device.channels[ViewPTZAction.channel].data.zoom_focus['focus'].pos = $('#ptz-focus').slider('value');
            }
          }, function(cmd, errno, msg) {
            CGI.autoErrorHandler(cmd, errno, msg);
          });
        }, 2000);
      }
    }, function(cmd, errno, msg) {
      CGI.autoErrorHandler(cmd, errno, msg);
    });
  }

  ViewPTZAction.on('ptzAction', function(ac) {

    if (this.isPatrolRunning !== false) {
      $('[patrol-id=' + this.isPatrolRunning + ']').click();
      $('#ptz_cruise_stop_btn').click();
      return;
    }

    if (this.status != 'idle') {

      if (this.status != 'stopping' && this.action == 'Auto') {

        this.trigger('ptzRelease');
      }
      return;
    }

    this.action = ac;

    var params = {
      "channel": this.channel,
      "op": ac,
      "speed": this.speed
    };

    this.status = 'sending';

    CGI.sendCommand('PtzCtrl', params, function() {

      if (ViewPTZAction.status == 'stopping') {

        ViewPTZAction.status = 'working';
        ViewPTZAction.trigger('ptzRelease');

      } else {

        if (ViewPTZAction.action === "Auto") {

          ViewPTZAction.autoTimer = setTimeout(function() {

            ViewPTZAction.status = "idle";
            ViewPTZAction.autoTimer = null;

          }, 60000);
        }

        ViewPTZAction.status = 'working';
      }

      ViewPTZAction.action = ac;

      console.dbg('PTZ Start Action -', ac);

    }, function(cmd, errno, msg) {

      CGI.autoErrorHandler(cmd, errno, msg);

      if (ViewPTZAction.status == 'stopping') {
        ViewPTZAction.status = 'working';
        ViewPTZAction.trigger('ptzRelease');
      } else {
        ViewPTZAction.status = 'working';
      }

    });
  });

  ViewPTZAction.on('ptzRelease', function() {

    if (this.status == 'idle') {
      return;
    }

    if (this.isPatrolRunning !== false) {
      $('[patrol-id=' + this.isPatrolRunning + ']').click();
      $('#ptz_cruise_controllers').click();
      return;
    }
    if (this.status == 'stopping') {
      return;
    }
    if (this.status == 'sending') {
      this.status = 'stopping';
      return;
    }

    if (this.status == 'working') {

      this.status = 'sendingStop';

      setTimeout(function() {
        CGI.sendCommand('PtzCtrl', {
          "channel": ViewPTZAction.channel,
          "op": "Stop"
        }, function() {

          if (ViewPTZAction.autoTimer) {

            clearTimeout(ViewPTZAction.autoTimer);
            ViewPTZAction.autoTimer = null;
          }

          ViewPTZAction.status = 'idle';
          ViewPTZAction.action = 'none';

          if( PCE.getFeatureVersion('ptzCtrl', ViewPTZAction.channel) == 2 ) {
            if( ViewPTZAction.getZoomFocusTimer_1 ) {
              clearTimeout(ViewPTZAction.getZoomFocusTimer_1);
            }
            ViewPTZAction.getZoomFocusTimer_1 = setTimeout(ViewPTZAction.getZoomFocusPos, 1000);
          }

          console.dbg('PTZ Stopped.');

        }, CGI.autoErrorHandler);
      }, 200);
    }
  });

  ViewPTZAction.timerAutoRefresher = null;
  ViewPTZAction.ptzCheckState = -1;

  ViewPTZAction.getPtzCheckState = function(init) {
    CGI.sendCommand('GetPtzCheckState', {
      "channel": 0
    }, function(res) {
      if (ViewPTZAction.ptzCheckState !== EnumPtzCheckState.CHECKED) {
        ViewPTZAction.ptzCheckState = res.PtzCheckState;
      }
      switch (ViewPTZAction.ptzCheckState) {
        case EnumPtzCheckState.NEED_CHECK:
          $('#ptz-adjust-mask').addClass('show-mask');
          $('#pre_ptz_container-mask').removeClass('show-mask');
          break;
        case EnumPtzCheckState.CHECKING:
          $('#ptz-adjust-mask').removeClass('show-mask');
          $('#pre_ptz_container-mask').addClass('show-mask');
          if (!!init) {
            ViewPTZAction.timerAutoRefresher = setInterval(() => {
              if (ViewPTZAction.ptzCheckState === EnumPtzCheckState.CHECKING) {
                ViewPTZAction.getPtzCheckState();
              } else {
                clearInterval(ViewPTZAction.timerAutoRefresher);
              }
            }, 2000);
          }
          break;
        default:
          $('#ptz-adjust-mask').removeClass('show-mask');
          $('#pre_ptz_container-mask').removeClass('show-mask');
          break;
      }
    }, function(cmd, errno, msg) {
      CGI.autoErrorHandler(cmd, errno, msg);
    });
  }

  ViewPTZAction.initUI = function() {

    this.status = 'idle';
    this.action = 'none';

    this.acting = false;
    this.actingAuto = false;

    $('#ptz_control_container').one('click', function() {
      if (ControllerLogin.chkVersion('supportPtzCheck', 1, 0)) {
        ViewPTZAction.getPtzCheckState(true);
      }
    })

    $('#ptz-adjust-btn').on('click', function() {
      $('#ptz-adjust-mask').removeClass('show-mask');
      $('#pre_ptz_container-mask').addClass('show-mask');
      CGI.sendCommand('PtzCheck', {
        "channel": 0
      }, function() {
        $('#ptz-adjust-mask').removeClass('show-mask');
        $('#pre_ptz_container-mask').removeClass('show-mask');
      }, function(cmd, errno, msg) {
        CGI.autoErrorHandler(cmd, errno, msg);
      },
      0, function() {
        //è¶…æ—¶
      }, 120000);
    })

    // ptz speed
    $("#slider_ptz_speed").slider({
      range: "min",
      value: ViewPTZAction.getPTZSpeed(), // g_plugin.preview.getPreviewPTZSpeed(),
      min: 1,
      max: 64,
      slide: function(event, ui) {
        ViewPTZAction.speed = ui.value;
        if (ChannelManager.get(ViewPTZAction.channel)) {
          ChannelManager.get(ViewPTZAction.channel).setPTZSpeedValue(ui.value);
        }
        $("#amount_ptz_speed").val(ui.value);
      }
    });

    $("#amount_ptz_speed").val(ViewPTZAction.speed = $("#slider_ptz_speed").slider("value"));

    // preview ptz direction button

    function releasePTZDirection(e) {

      if ($(this).attr('ptz-ac') == 'Auto' || ViewPTZAction.action == 'Auto') {
        return;
      }

      if ($(this).attr('ptz-ac') != ViewPTZAction.action) {
        return;
      }

      ViewPTZAction.trigger('ptzRelease');
    };


    $(".ptz-action-cmd").each(function() {
      $(this)
        .on('blur', releasePTZDirection)
        .on('mouseup', function(e) {

          if (e.button != 0 || $(this).attr('ptz-ac') == 'Auto' || ViewPTZAction.action == 'Auto') {
            return;
          }

          ViewPTZAction.trigger('ptzRelease');
        })
        .on('mouseleave', releasePTZDirection)
        .mousedown(function(e) {
          if (e.button != 0) { return; }
          ViewPTZAction.trigger('ptzAction', [$(this).attr('ptz-ac')]);
        });
    });

    $("#ptz_dir_center").mousedown(function(e) {
      if (e.button != 0) { return; }
      ViewPTZAction.trigger('ptzAction', ["Auto"]);
    });

    delete this.initUI;
  };


  ViewPTZAction.refreshView = function() {


    var chId = ViewPTZAction.channel;
    var ch = g_device.channels[chId];
    if(PCE.getFeatureVersion('ptzCtrl', chId) == 2) {
      $('#ptz_dir_control_container').addClass('ptzctrl-version2');
      // æ·»åŠ æ»‘æ†æ»‘åŠ¨ç›‘å¬äº‹ä»¶
      $(['focus', 'zoom']).each(function() {
        $('#ptz-' + this).prop('outerHTML', '<div id="ptz-' + this + '"></div>');
        (function(eId) {
          $('#ptz-' + eId).slider({
            "range": "min",
            "value": ch.data.zoom_focus[eId].pos,
            "min": ch.limits.zoom_focus[eId].pos.min,
            "max": ch.limits.zoom_focus[eId].pos.max,
            "step": 1,
            "stop": function(eve) {  // 300ms å†…æ»‘åŠ¨å¤šæ¬¡ï¼Œåªå‘é€ä¸€æ¬¡è¯·æ±‚

              if( ViewPTZAction.zoomFocusTimer ) {
                clearTimeout( ViewPTZAction.zoomFocusTimer );
              }
              ViewPTZAction.zoomFocusTimer = setTimeout(function() {
                ch.data.zoom_focus[eId].pos = $('#ptz-' + eId).slider('value');
                if(eId == 'zoom') {
                  ViewPTZAction.zoomFocusOp = 'ZoomPos';
                } else {
                  ViewPTZAction.zoomFocusOp = 'FocusPos';
                }
                CGI.sendCommand('StartZoomFocus', {
                  "ZoomFocus": {
                    'channel': ViewManager.getSelectedView().getChannelId(),
                    'pos': $('#ptz-' + eId).slider('value'),
                    'op': ViewPTZAction.zoomFocusOp
                  }
                }, function() {
                  if(ViewPTZAction.zoomFocusOp == 'ZoomPos') {
                    if( ViewPTZAction.getZoomFocusTimer_2 ) {
                      clearInterval(ViewPTZAction.getZoomFocusTimer_2);
                    }
                    var wait6Secs = 0;
                    ViewPTZAction.getZoomFocusTimer_2 = setInterval(function() {
                      CGI.sendCommand('GetZoomFocus', {
                        "channel": ViewPTZAction.channel
                      }, function(res) {
                        if(wait6Secs <= 6) {
                          wait6Secs += 2;
                          $('#ptz-focus').slider('option', 'value', res.ZoomFocus.focus.pos);
                          ch.data.zoom_focus['focus'].pos = $('#ptz-focus').slider('value');
                        } else {
                          if(res.ZoomFocus.focus.pos === $('#ptz-focus').slider('value')) {
                            clearInterval(ViewPTZAction.getZoomFocusTimer_2);
                          } else {
                            $('#ptz-focus').slider('option', 'value', res.ZoomFocus.focus.pos);
                            ch.data.zoom_focus['focus'].pos = $('#ptz-focus').slider('value');
                          }
                        }
                      }, function(cmd, errno, msg) {
                        CGI.autoErrorHandler(cmd, errno, msg);
                      });
                    }, 2000);
                  }
                }, function(cmd, errno, msg) {
                  CGI.autoErrorHandler(cmd, errno, msg);
                });
              }, 300);
            }
          });
        })(this);
      });

      $('#ptz_upgraded_base_control_container .ptz-action-cmd-v2').each(function() {

        $(this)
        .off('blur')
        .on('blur', function() {
          ViewPTZAction.trigger('ptzRelease');
        })
        .off('mouseup')
        .on('mouseup', function(e) {
          if (e.button != 0) {
            return;
          }
          if( ViewPTZAction.zoomFocusTriggerTime && (new Date().getTime() - ViewPTZAction.zoomFocusTriggerTime <= 1000) ) { // æŒ‰ä¸‹å•æ­¥æ“ä½œæŒ‰é’®ä¸è¶…è¿‡1sï¼Œä¸éœ€è¦å¤šå‘é€ä¸€æ¡â€œPtzCtrlâ€å‘½ä»¤
            clearTimeout(ViewPTZAction.zoomFocusSSTimer);
          } else {
            ViewPTZAction.trigger('ptzRelease');  // æŒ‰ä¸‹å•æ­¥æ“ä½œæŒ‰é’®è¶…è¿‡1sï¼Œä¼šå¤šå‘é€ä¸€æ¡â€œPtzCtrlâ€å‘½ä»¤ï¼Œæ¾å¼€éœ€è¦å‘é€â€œstopâ€å‘½ä»¤
          }
        })
        .off('mouseleave')
        .on('mouseleave', function() {
          if( ViewPTZAction.zoomFocusTriggerTime && (new Date().getTime() - ViewPTZAction.zoomFocusTriggerTime <= 1000) ) {  // ä½œç”¨åŒ mouseup
            clearTimeout(ViewPTZAction.zoomFocusSSTimer);
          } else {
            ViewPTZAction.trigger('ptzRelease');
          }
        })
        .off('mousedown')
        .on('mousedown',function(e) {
          if (e.button != 0) {
            return;
          }

          var source = $(e.target);
          ViewPTZAction.zoomFocusTriggerTime = new Date().getTime();
          var op = '';
          switch(source.attr('ptz-ac')) {
            case 'ZoomDec':
              op = 'ZoomStepDec';
              break;
            case 'ZoomInc':
              op = 'ZoomStepInc';
              break;
            case 'FocusDec':
              op = 'FocusStepDec';
              break;
            case 'FocusInc':
              op = 'FocusStepInc';
              break;
            default:
              break;
          }
          if(! op) {
            return false;
          }

          if( ! ViewPTZAction.zoomFocusStepTimer ) {
            ViewPTZAction.zoomFocusStepTimer = setTimeout(function() {
              source.addClass('being-action'); // ç”¨æ¥åŽç»­åˆ¤æ–­ç‚¹å‡»çš„æ˜¯zoomè¿˜æ˜¯focus
              CGI.sendCommand('PtzCtrl', {
                "channel": ViewPTZAction.channel,
                "op": op,
                "speed": ViewPTZAction.speed
              }, function() {
                ViewPTZAction.zoomFocusStepTimer = null;
                if(ViewPTZAction.getZoomFocusTimer_1) {
                  clearTimeout(ViewPTZAction.getZoomFocusTimer_1);
                }
                ViewPTZAction.getZoomFocusTimer_1 = setTimeout(function() {
                  ViewPTZAction.getZoomFocusPos();
                }, 1000);
              }, function(cmd, errno, msg) {
                ViewPTZAction.zoomFocusStepTimer = null;
                CGI.autoErrorHandler(cmd, errno, msg);
              });
            }, 0);
          }

          if(ViewPTZAction.zoomFocusSSTimer) {
             clearTimeout(ViewPTZAction.zoomFocusSSTimer);
             ViewPTZAction.zoomFocusSSTimer = null;
          }
          ViewPTZAction.zoomFocusSSTimer = setTimeout(function() {
            source.addClass('being-action');
            ViewPTZAction.trigger('ptzAction', [source.attr('ptz-ac')]);
          }, 1000);
        });

      });
    } else {
      $('#ptz_upgraded_base_control_container').remove();
    }

  };

})();

// view-source:http://192.168.1.252/js/modules/ViewPTZPreset.js?timeVersion=1620806528092


/**
 * ViewPTZPreset ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„ PTZ é¢„ç½®ç‚¹å’Œå·¡èˆªæŽ§åˆ¶
 */
function ViewPTZPreset() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewPTZPreset);

(function() {

  var $presetVessel;
  var $cruiseVessel;

  var $presetDelButton;
  var $presetCallButton;
  var $presetSetButton;
  var $presetRenameButton;

  var $patrolRunButton;
  var $patrolStopButton;
  var $patrolModifyButton;

  var _preset_menu_sel = EnumPrePresetMenuType.PRESET;

  this.refreshPresetMenuSel = function() {

    if (EnumPrePresetMenuType.PRESET == _preset_menu_sel) {

      $("#pre_preset_menu_preset_view").addClass("pre_preset_menu_item_sel");
      $("#pre_preset_menu_cruise_view").removeClass("pre_preset_menu_item_sel");
      $("#pre_preset_preset_container").show();
      $("#pre_preset_cruise_container").hide();

    } else if (EnumPrePresetMenuType.CRUISE == _preset_menu_sel) {

      $("#pre_preset_menu_preset_view").removeClass("pre_preset_menu_item_sel");
      $("#pre_preset_menu_cruise_view").addClass("pre_preset_menu_item_sel");
      $("#pre_preset_preset_container").hide();
      $("#pre_preset_cruise_container").show();
    }
  };

  this.initUI = function() {

    $("#pre_preset_menu_preset_view").click(function(event) {

      if (_preset_menu_sel == EnumPrePresetMenuType.PRESET) {

        return;
      }
      _preset_menu_sel = EnumPrePresetMenuType.PRESET;
      ViewPTZPreset.refreshPresetMenuSel();

    });

    $("#pre_preset_menu_cruise_view").click(function(event) {
      if (_preset_menu_sel == EnumPrePresetMenuType.CRUISE) {
        return;
      }

      _preset_menu_sel = EnumPrePresetMenuType.CRUISE;
      ViewPTZPreset.refreshPresetMenuSel();
    });

    $presetCallButton = $('#ptz_preset_call_btn');
    $presetDelButton = $('#ptz_preset_del_btn');
    $presetSetButton = $('#ptz_preset_set_btn');

    $patrolRunButton = $('#ptz_cruise_run_btn');
    $patrolStopButton = $('#ptz_cruise_stop_btn');
    $patrolModifyButton = $('#ptz_cruise_modify_btn');

    $presetVessel = $('#pre_preset_preset_listContainer');
    $cruiseVessel = $('#pre_preset_cruise_listContainer');

    $presetVessel.on('click', 'div', function(e) {

      if (e.target.nodeName != 'SPAN' && e.target.nodeName != 'DIV') {
        return;
      }

      var preset = ViewPTZPreset.getSelectedPreset();

      if ($(e.target).hasClass('pre_preset_list_name')) {
        if ($(this).hasClass('selected')) {
          if ($(this).find('input').length == 0) {
            $(this).find('.pre_preset_list_name').html('<input maxlength="' + ViewPTZPreset.maxNameLength + '" type="text" id="preset-name-modifier">');
            $('#preset-name-modifier').val(preset.name).focus();
            return;
          }
        }
      }

      if (!$(this).hasClass('selected') && $presetVessel.find('input').length > 0) {
        var newName = $presetVessel.find('input').val();
        if (newName == preset.name) {
          $presetVessel.find('.selected .pre_preset_list_name').text(newName);
        } else {
          ViewPTZPreset.renamePresetPoint(preset, newName);
        }
        return;
      }

      $presetVessel.find('.selected').removeClass('selected');
      $(this).addClass('selected');

      if ($(this).find('.pre_preset_list_status').text() == 'Set') {
        $('#ptz_preset_controllers button').removeAttr('disabled');
      } else {
        $('#ptz_preset_controllers button').attr('disabled', true);
        $presetSetButton.removeAttr('disabled').text('Set');
      }
    });

    $presetVessel.on('dblclick', 'div', function(e) {

      if (e.target.nodeName != 'SPAN' && e.target.nodeName != 'DIV') {
        return;
      }

      if ($(e.target).hasClass('pre_preset_list_name')) {
        return;
      }

      if ($(this).find('.pre_preset_list_status').text() == 'Set') {
        $presetCallButton.click();
      } else {
        $presetSetButton.click();
      }

      return false;
    });

    $cruiseVessel.on('click', 'a', function() {
      $cruiseVessel.find('.selected').removeClass('selected');
      $(this).addClass('selected');
      if ($(this).find('.pre_preset_list_status').text() == 'Running') {
        $('#ptz_cruise_controllers button').removeAttr('disabled');
        $patrolRunButton.attr('disabled', true);
      } else {
        $('#ptz_cruise_controllers button').attr('disabled', true);
        $('#ptz_cruise_stop_btn').removeAttr('disabled');
        $patrolRunButton.removeAttr('disabled');
      }
      $patrolModifyButton.removeAttr('disabled');
    });

    $presetDelButton.on('click', function() {
      var point = ViewPTZPreset.getSelectedPreset();
      if (!point) {
        return;
      }
      ViewPTZPreset.removePresetPoint(point);
    });

    $presetSetButton.on('click', function() {
      var point = ViewPTZPreset.getSelectedPreset();
      if (!point) {
        return;
      }

      ViewPTZPreset.setPresetPoint(point);

    });

    $presetCallButton.on('click', function() {
      var point = ViewPTZPreset.getSelectedPreset();
      if (!point) {
        return;
      }
      if (point.enable) {
        ViewPTZPreset.callPresetPoint(point);
      } else {
        $(this).attr('disable', true);
      }
    });

    $patrolRunButton.on('click', function() {
      var patrol = ViewPTZPreset.getSelectedPatrol();
      if (!patrol) {
        return;
      }
      if (!patrol.running) {
        ViewPTZPreset.runPatrol(patrol);
      } else {
        $(this).attr('disable', true);
      }
    });

    $patrolStopButton.on('click', function() {
      var patrol = ViewPTZPreset.getSelectedPatrol();
      if (!patrol) {
        return;
      }
      ViewPTZPreset.stopPatrol(patrol);
    });

    $patrolModifyButton.on('click', function() {
      var patrol = ViewPTZPreset.getSelectedPatrol();
      if (!patrol) {
        return;
      }
      ControllerPatrolModifier.show(patrol);
    });

    delete this.initUI;
  };

  this.callPresetPoint = function(point) {
    PlayerPreview.waiter.show('Calling PTZ-Preset point...');
    CGI.sendCommand('PtzCtrl', {
      "channel": point.channel,
      "op": "ToPos",
      "speed": ViewPTZAction.speed,
      "id": point.id
    }, function() {
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      PlayerPreview.waiter.hide();
      CGI.autoErrorHandler(cmd, errno, msg);
    });
  };

  this.runPatrol = function(patrol) {
    if (patrol.running != 0) {
      return;
    }
    PlayerPreview.waiter.show('Starting a PTZ-Patrol...');
    CGI.sendCommand('PtzCtrl', {
      "channel": patrol.channel,
      "op": "StartPatrol",
      "id": patrol.id
    }, function() {
      $patrolRunButton.attr('disabled', true);
      $patrolStopButton.removeAttr('disabled');
      patrol.running = 1;
      ViewPTZAction.isPatrolRunning = patrol.id;
      $('[patrol-id=' + patrol.id + ']').find('.pre_preset_list_status').text('Running');
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      PlayerPreview.waiter.hide();
      CGI.autoErrorHandler(cmd, errno, msg);
    });
  };

  this.stopPatrol = function(patrol) {
    PlayerPreview.waiter.show('Stopping a PTZ-Patrol...');
    CGI.sendCommand('PtzCtrl', {
      "channel": patrol.channel,
      "op": "StopPatrol",
      "id": patrol.id
    }, function() {
      patrol.running = 0;
      ViewPTZAction.isPatrolRunning = false;
      $patrolRunButton.removeAttr('disabled');
      $('[patrol-id=' + patrol.id + ']').find('.pre_preset_list_status').text('Idle');
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      PlayerPreview.waiter.hide();
      CGI.autoErrorHandler(cmd, errno, msg);
    });
  };

  this.renamePresetPoint = function(point, newName) {
    var enableTarget = point.enable,
      enableOld = point.enable;
    var oldName = point.name;
    if (newName.trim() == '') {
      ViewPTZPreset.refreshView();
      $('[preset-id=' + point.id + ']').click();
      return;
    }
    point.name = newName;
    if (point.enable) {
      delete point.enable;
    } else {
      point.enable = enableTarget = 1;
    }
    PlayerPreview.waiter.show('Renaming a PTZ-Preset point...');
    CGI.sendCommand('SetPtzPreset', { "PtzPreset": point }, function() {
      point.enable = enableTarget;
      ViewPTZPreset.refreshView();
      $('[preset-id=' + point.id + ']').click();
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      point.name = oldName;
      point.enable = enableOld;
      CGI.autoErrorHandler(cmd, errno, msg);
      PlayerPreview.waiter.hide();
    });
  };

  this.removePresetPoint = function(point) {
    PlayerPreview.waiter.show('Removing PTZ-Preset point...');
    point.enable = 0;
    CGI.sendCommand('SetPtzPreset', { "PtzPreset": point }, function() {
      point.name = 'pos' + point.id;
      ViewPTZPreset.refreshView();
      $('[preset-id=' + point.id + ']').click();
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      CGI.autoErrorHandler(cmd, errno, msg);
      PlayerPreview.waiter.hide();
    });
  };

  this.savePatrol = function(patrol) {
    PlayerPreview.waiter.show('Saving PTZ-Patrol settings...');
    patrol.enable = 1;
    delete patrol.name;
    CGI.sendCommand('SetPtzPatrol', { "PtzPatrol": patrol }, function() {
      ViewPTZPreset.refreshView();
      $('[patrol-id=' + patrol.id + ']').click();
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      CGI.autoErrorHandler(cmd, errno, msg);
      PlayerPreview.waiter.hide();
    });
  };

  this.setPresetPoint = function(point) {
    if ($presetVessel.find('input').length > 0) {
      if ($presetVessel.find('input').val() == "") {
        return;
      }
      point.name = $presetVessel.find('input').val();
    }
    PlayerPreview.waiter.show('Setting PTZ-Preset point...');
    point.enable = 1;
    CGI.sendCommand('SetPtzPreset', { "PtzPreset": point }, function() {
      ViewPTZPreset.refreshView();
      $('[preset-id=' + point.id + ']').click();
      PlayerPreview.waiter.hide();
    }, function(cmd, errno, msg) {
      CGI.autoErrorHandler(cmd, errno, msg);
      PlayerPreview.waiter.hide();
    });
  };

  this.getSelectedPreset = function() {
    var ch = ControllerFlash.getSelectedChannelInfo();
    var $selected = $presetVessel.find('.selected');

    if (!ch || $selected.length == 0) {
      return null;
    }

    return ch.data.ptzPreset[parseInt($selected.attr('preset-id')) - 1];
  };

  this.getSelectedPatrol = function() {
    var ch = ControllerFlash.getSelectedChannelInfo();
    var $selected = $cruiseVessel.find('.selected');

    if (!ch || $selected.length == 0) {
      return null;
    }

    return ch.data.ptzPatrol[parseInt($selected.attr('patrol-index'))];
  };

  this.maxNameLength = 16;

  this.refreshView = function() {

    var ch = ControllerFlash.getSelectedChannelInfo();

    $('.pre_preset_preset_list_base_item').remove();

    if (!ch) {
      return;
    }

    $('.ptz-preset-modifier').hide();
    $('.ptz-preset-normal').show();

    var presetData = ch.data.ptzPreset;
    var patrolData = ch.data.ptzPatrol;
    if (ControllerLogin.chkVersion("ptzPreset", EnumPatrolType.NORMAL, ch.index) && ControllerLogin.chkPermission('ptzPreset', 'exec', ch.index)) {

      this.maxNameLength = ch.limits.ptzPreset.name.maxLen;

      for (var j = 0; j < presetData.length; ++j) {
        var presetPoint = presetData[j];
        $presetVessel.append('<div class="' +
          'pre_preset_preset_list_base_item pre_preset_preset_list_item' +
          '" preset-id="' +
          presetPoint.id +
          '">' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_id">' +
          presetPoint.id +
          '</span>' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_name" title="' + presetPoint.name + '">' + presetPoint.name + '</span>' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_status">' + (presetPoint.enable ? 'Set' : 'Unused') + '</span>' +
          '</div>');
        if (presetPoint.name.trim().length == 0) {
          $('[preset-id=' + presetPoint.id + ']').find('.pre_preset_list_name').text('--noname--');
        }
      }
    }

    if (ControllerLogin.chkVersion("ptzPatrol", EnumPatrolType.NORMAL, ch.index) && ControllerLogin.chkPermission('ptzPatrol', 'exec', ch.index)) {
      var patrolLine = patrolData[0];
      if (patrolLine) {

        $cruiseVessel.append('<a patrol-index="0" class="' +
          'pre_preset_preset_list_base_item pre_preset_preset_list_item' +
          '" href="javascript:void(0)" patrol-id="' +
          patrolLine.id +
          '">' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_id">' +
          patrolLine.id +
          '</span>' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_name">Cruise Path 0</span>' +
          '<span class="pre_preset_preset_list_item_item pre_preset_list_status">' + (patrolLine.running ? 'Running' : 'Idle') + '</span>' +
          '</a>');
      }
    }

    if( $presetVessel.children().length == 0 ) {
      $('#pre_preset_preset_container').hide();
      if( $cruiseVessel.children().length != 0 ) {
        $('.prev_preset_menu_container').hide();
      }
    }
  };

}).apply(ViewPTZPreset);

// view-source:http://192.168.1.252/js/modules/ViewClip.js?timeVersion=1620806528092


/**
 * ViewClip ç±»è´Ÿè´£ é¢„è§ˆç•Œé¢çš„è§†é¢‘æŠ å›¾æŽ§åˆ¶
 */
function ViewClip() {
  throw { "msg": "Don't NEW a singleton." };
}

EventListener.apply(ViewClip);

(function() {

  var $statusCtrl;
  var $clipFrame;
  var $clipBox;
  var $dragSpot_lt, $dragSpot_rt, $dragSpot_lb, $dragSpot_rb;

  var _ratio;
  // var refreshWorking = false;

  var isMoving, moveTaskId, startId;
  var moveTarget; // æŠ å›¾å°å°çª—ç›¸å¯¹ $clipFrame çš„åç§»
  var preCoordinate;
  var isEnabledClip, updateTimer;
  var isSchedWorking = false;  // æ˜¯å¦è¿›è¡Œå®šæ—¶åˆ·æ–°çš„ä¾æ®ä¹‹ä¸€
  var isDragged = false;  // åˆ¤æ–­é¼ æ ‡æ¾å¼€å‰æ˜¯æ‹‰ä¼¸æŠ å›¾æ¡†è¿˜æ˜¯ç‚¹å‡»ç§»åŠ¨æŠ å›¾æ¡†
  var draggingSpot = null;

  // var first;

  var resolutionSize = { // ä¸»ç æµåˆ†è¾¨çŽ‡
    "height": 1440,
    "width": 2560
  };

  var windowSize = { // é¢„è§ˆå°çª—å£çš„å°ºå¯¸
    "height": 360,
    "width": 640
  };

  var boxSize = {  // ä¸å¯æ‹‰ä¼¸æŠ å›¾å°å°çª—çš„å°ºå¯¸
    "height": 360,
    "width": 640
  };

  var drowBox = {  // å¯æ‹‰ä¼¸æŠ å›¾å°å°çª—çš„å°ºå¯¸
    "height": 0,
    "width": 0
  };

  var boxPos = {  // æŠ å›¾å°å°çª—ç›¸å¯¹ $clipFrame çš„åç§»
    "top": 0,
    "left": 0
  };

  var minBox = {  // å­ç æµåˆ†è¾¨çŽ‡
    "height": 0,
    "width": 0
  };

  this.setSchedule = function(status) {

    isSchedWorking = status;
  };

  this.initUI = function() {

    $statusCtrl = $("#toggle-clip-status");
    $clipFrame = $("#clip-view-frame");
    $clipBox = $("#clip-target-view");
    $dragSpot_lt = $clipBox.find('.left-top-spot');
    $dragSpot_rt = $clipBox.find('.right-top-spot');
    $dragSpot_lb = $clipBox.find('.left-bottom-spot');
    $dragSpot_rb = $clipBox.find('.right-bottom-spot');

    $statusCtrl.on("click", function() {

      ViewClip.toggleStatus();  // åˆ‡æ¢æŠ å›¾ç•Œé¢å¯æ“ä½œæ€§ï¼Œåˆ‡æ¢ç æµç±»åž‹
    });

    windowSize.width = $clipFrame.innerWidth();

    _ratio = resolutionSize.width / $clipFrame.innerWidth();

    $clipFrame.css({  // èŽ·å¾—ç­‰å®½é«˜æ¯”çš„é¢„è§ˆå°çª—å£
      "height": resolutionSize.height / _ratio
    });

    this.refreshBgImg(0);  // åˆ·æ–°å³ä¾§æŠ å›¾é¢„è§ˆçª—å£

    this.onAutoUpdatePos(); // getCropï¼Œå®šæ—¶æ›´æ–°å³ä¾§æŠ å›¾ç•Œé¢

    var fixedTargetPosOnWeb = function() {  // è¾¹ç¼˜ä½ç½®å¤„ç†

      if (moveTarget.left < 0) {

        moveTarget.left = 0;

      } else if (moveTarget.left + $clipBox.width() > $clipFrame.innerWidth()) {

        moveTarget.left = $clipFrame.innerWidth() - $clipBox.width();
      }

      if (moveTarget.top < 0) {

        moveTarget.top = 0;

      } else if (moveTarget.top + $clipBox.height() > $clipFrame.innerHeight()) {

        moveTarget.top = $clipFrame.innerHeight() - $clipBox.height();
      }
    };

    var doMove = function(pos) { // å“åº”ä¸æ”¯æŒæ‹‰ä¼¸çš„æ‹–åŠ¨æ“ä½œï¼ˆåªç§»åŠ¨æŠ å›¾å°å°çª—çš„ä½ç½®ï¼‰

      moveTaskId = String.random(16);

      (function(id) {

        setTimeout(function() {

          if (moveTaskId !== id) {

            return;
          }

          ViewClip.setNewPos(pos, function() {

            if (moveTaskId === id) {

              ViewClip.switchAutoUpdate(true);
            }
          });

        }, 250);
      })(moveTaskId);
    };

    var onLoose = function(e) {  // ç›¸åº”é¼ æ ‡æ¾å¼€æ“ä½œï¼Œè®¾ç½®æŠ å›¾å°å°çª—å®½é«˜ / åªç§»åŠ¨ä½ç½®ï¼ŒèŽ·å–å¯¹åº”çš„æŠ å›¾æµ

      e.stopPropagation();
      e.preventDefault();

      if (isMoving) {

        if (moveTaskId === startId) {

          if(PCE.getFeatureVersion('videoClip') == 2){

            if(isDragged) {  // é¼ æ ‡æ¾å¼€å‰æŠ å›¾å°å°çª—è¢«æ‹‰ä¼¸

              $clipFrame.off("mousemove", onResize).off("mouseup", onLoose).off("mouseleave", onLoose);
              isDragged = false;

            } else {

              $clipFrame.off("mousemove", onDrag).off("mouseup", onLoose).off("mouseleave", onLoose);

            }

          }

          (function(id) {

            ViewClip.setNewPos(moveTarget, function() {  // èŽ·å–å½“å‰æŠ å›¾å°å°çª—å†…çš„è§†é¢‘æµ

              if (moveTaskId === id) {

                ViewClip.switchAutoUpdate(true);
              }
            });

          })(moveTaskId);
        }

        isMoving = false;
      }
    };

    var onMousedown = function(e) {

      e.stopPropagation();
      e.preventDefault();

      if (!ViewClip.isEnabledClip() || !PCE.isWritable("videoClip")) {
        return;
      }
      isMoving = true;

      startId = moveTaskId = String.random(16);
      ViewClip.switchAutoUpdate(false);

      preCoordinate = {
        "top": e.clientY - $clipFrame.offset().top,
        "left": e.clientX - $clipFrame.offset().left
      };

      moveTarget = {
        "left": $clipBox.offset().left - $clipFrame.offset().left,
        "top": $clipBox.offset().top - $clipFrame.offset().top
      };

      if($(e.target).hasClass('drag-spot')) {

        isDragged = true;
        draggingSpot = $(e.target);
        $clipFrame.on("mousemove", onResize).on("mouseup", onLoose).on("mouseleave", onLoose);

      } else {

        $clipFrame.on("mousemove", onDrag).on("mouseup", onLoose).on("mouseleave", onLoose);

      }

    };

    var onDrag = function(e) {  // æ‹–æ‹½æ•´ä¸ªæŠ å›¾çª—å£ï¼Œåˆ™åªç§»åŠ¨æŠ å›¾å°å°çª—

      e.stopPropagation();
      e.preventDefault();

      if (isMoving && !isDragged) {

        moveTarget.left += (e.clientX - $clipFrame.offset().left - preCoordinate.left); // æ°´å¹³ç§»åŠ¨
        moveTarget.top += (e.clientY - $clipFrame.offset().top - preCoordinate.top); // ä¸Šä¸‹ç§»åŠ¨

        preCoordinate = {
          "left": e.clientX - $clipFrame.offset().left,
          "top": e.clientY - $clipFrame.offset().top
        };

        fixedTargetPosOnWeb();
        ViewClip.setBoxPos(moveTarget);

      }

    };

    var onResize = function(e) {  // å³æ—¶æ›´æ–°æŠ å›¾å°å°çª—çš„å°ºå¯¸å’Œå®šä½

      e.stopPropagation();
      e.preventDefault();

      if (isMoving) {

        if(PCE.getFeatureVersion('videoClip') == 2){ // æ”¯æŒæ‹‰ä¼¸ï¼ŒèŽ·å–æ‹‰ä¼¸çš„å®½é«˜

          if(isDragged) {

            var h, w;

            var _this = draggingSpot;

            var wh_ratio = drowBox.width / drowBox.height;

            // åŒºåˆ†æ‹–æ‹½çš„å¯¹è±¡
            if(_this.hasClass('left-top-spot')) {  // å·¦ä¸Šç‚¹

              h = moveTarget.top + drowBox.height - (e.clientY - $clipFrame.offset().top);
              w = h * ( resolutionSize.width / resolutionSize.height );
              if( w < minBox.width || h < minBox.height ){
                w = minBox.width;
                h = minBox.height
              }
              if(h != drowBox.height) {
                moveTarget.left -= (h - drowBox.height) * wh_ratio;
                moveTarget.top -= (h - drowBox.height);
              }

            } else if(_this.hasClass('right-top-spot')) { // å³ä¸Šç‚¹

              h = moveTarget.top + drowBox.height - (e.clientY - $clipFrame.offset().top);
              w = h * ( resolutionSize.width / resolutionSize.height );
              if( w < minBox.width || h < minBox.height ){
                w = minBox.width;
                h = minBox.height
              }
              if(h != drowBox.height) {
                moveTarget.top -= (h - drowBox.height);
              }

            } else if(_this.hasClass('left-bottom-spot')) { // å·¦ä¸‹ç‚¹

              h = e.clientY - $clipBox.offset().top;
              w = h * ( resolutionSize.width / resolutionSize.height );
              if( w < minBox.width || h < minBox.height ){
                w = minBox.width;
                h = minBox.height
              }
              if(h != drowBox.height) {
                moveTarget.left -= (h - drowBox.height) * wh_ratio;
              }

            } else if(_this.hasClass('right-bottom-spot')) { // å³ä¸‹ç‚¹

              h = e.clientY - $clipBox.offset().top;
              w = h * ( resolutionSize.width / resolutionSize.height );
              if( w < minBox.width || h < minBox.height ){
                w = minBox.width;
                h = minBox.height
              }

            }

            drowBox = {
              "width": w,
              "height": h
            };

            ViewClip.setDrewBoxWidth();
            fixedTargetPosOnWeb();
            ViewClip.setBoxPos(moveTarget);

          }

        }

      }

    };

    $clipBox.on("mousedown", onMousedown);
    $dragSpot_lt.on("mousedown", onMousedown);
    $dragSpot_lb.on("mousedown", onMousedown);
    $dragSpot_rt.on("mousedown", onMousedown);
    $dragSpot_rb.on("mousedown", onMousedown);

    isEnabledClip = window.localStorage.getItem("/player/preview/clip") == 1;

    delete this.initUI;
  };

  this.isEnabledClip = function() {

    return isEnabledClip;
  };

  this.switchAutoUpdate = function(status) { // åˆ‡æ¢è‡ªåŠ¨æ›´æ–°çš„çŠ¶æ€ï¼ˆæ˜¯å¦è‡ªåŠ¨æ›´æ–°ï¼‰

    if (status) {

      if (updateTimer) {

        return;
      }

      updateTimer = setTimeout(function(id) {

        if (moveTaskId === id) {

          ViewClip.onAutoUpdatePos(moveTaskId);
        }

      }, 1000, moveTaskId);
    }
    else {

      if (typeof updateTimer === "number") {

        clearTimeout(updateTimer);
      }

      updateTimer = null;
    }
  }

  this.onAutoUpdatePos = function(asyncId) { // å®šæ—¶æ›´æ–°å³å›¾é¢„è§ˆæŠ å›¾ç•Œé¢

    if (asyncId !== moveTaskId) {

      return;
    }

    // no refresh when collapsed
    if (!isEnabledClip || isSchedWorking == false || ViewManager.getMode() != EnumCurState.PREVIEW || !PlayerPreview.allRightSections[5].isShow) {

      $clipBox.hide();
      $clipFrame.addClass('disabled');
      updateTimer = setTimeout(function() {

        if (asyncId === moveTaskId) {

          ViewClip.onAutoUpdatePos(moveTaskId);
        }

      }, 500);
      return;
    }

    (function(id) {

      CGI.sendCommand("GetCrop", {}, function(data) {

        if (asyncId !== moveTaskId) {
          return;
        }

        resolutionSize.height = data.Crop.mainHeight;
        resolutionSize.width = data.Crop.mainWidth;

        _ratio = resolutionSize.width / windowSize.width;

        minBox.height = data.Crop.minHeight / _ratio ;
        minBox.width = data.Crop.minWidth / _ratio;

        drowBox.height = data.Crop.cropHeight / _ratio;
        drowBox.width = data.Crop.cropWidth / _ratio;

        windowSize.height = resolutionSize.height / _ratio;

        $clipFrame.css({
          "height": windowSize.height
        });

        boxPos.top = data.Crop.topLeftY / _ratio;
        boxPos.left = data.Crop.topLeftX / _ratio;

        boxSize.height = data.Crop.cropHeight / _ratio;
        boxSize.width = data.Crop.cropWidth / _ratio;

        refreshClipStatus();

        if(PCE.getFeatureVersion('videoClip') == 2){

          if( drowBox.width < minBox.width || drowBox.height < minBox.height ){

            drowBox.width = minBox.width;
            drowBox.height = minBox.height;

          }

          ViewClip.setDrewBoxWidth();  // è®¾ç½®å®½é«˜ä¸º drowBox
        }else{
          ViewClip.setBoxPosSize();  // è®¾ç½®å®½é«˜ä¸º boxSize
        }

        ViewClip.setBoxPos(boxPos);

        if (!$clipBox.is(":visible")) {

          $clipBox.show();
        }
        $clipFrame.removeClass('disabled');

        updateTimer = setTimeout(function(id) {

          ViewClip.onAutoUpdatePos(id);

        }, 5000, moveTaskId);

      }, function(a,b,c) {

        ControllerRemoteConfig.defaultErrorHandle(a,b,c);

        updateTimer = setTimeout(function(id) {

          ViewClip.onAutoUpdatePos(id);

        }, 5000, moveTaskId);
      });
    })(asyncId);

  };

  var refreshClipStatus = function() {

    if (ViewClip.isEnabledClip()) {

      $statusCtrl.text("Disable Clips");
    }
    else {

      $statusCtrl.text("Enable Clips");
    }
  };

  this.toggleStatus = function() {  // åˆ‡æ¢ç æµç±»åž‹ï¼Œåˆ‡æ¢æŠ å›¾ç•Œé¢å¯æ“ä½œæ€§

    var chObj = ControllerFlash.getSelectedChannel();

    if (this.isEnabledClip()) {

      $clipBox.hide();
      $clipFrame.addClass('disabled');
      isEnabledClip = false;
      window.localStorage.setItem("/player/preview/clip", 0);
    }
    else {

      isEnabledClip = true;
      window.localStorage.setItem("/player/preview/clip", 1);
    }

    this.switchAutoUpdate(isEnabledClip);
    refreshClipStatus();

    if (chObj.getStream() == EnumStreamType.FLUENT || chObj.getStream() == EnumStreamType.CLIP) {

      if (this.isEnabledClip()) {

        chObj.open(EnumStreamType.CLIP);
      }
      else {

        chObj.open(EnumStreamType.FLUENT);
      }

    }
  };

  this.setNewPos = function(webPos, callback) {  // èŽ·å–æŠ å›¾éƒ¨åˆ†çš„ç æµ GetCrop

    var topLeftX = Math.floor(webPos.left * _ratio),
      topLeftY = Math.floor(webPos.top * _ratio);

    if( topLeftX < 0 ){
      topLeftX = 0;
    }

    if( topLeftY < 0 ){
      topLeftY = 0;
    }

    if( PCE.getFeatureVersion('videoClip') == 2 ){

      var cropWidth = Math.floor( drowBox.width * _ratio ),
        cropHeight = Math.floor( drowBox.height * _ratio );

      if( cropWidth + topLeftX  > resolutionSize.width || cropHeight + topLeftY > resolutionSize.height ){
        this.onAutoUpdatePos();
        return;
      }

      var crop = {
        "topLeftX": topLeftX,
        "topLeftY": topLeftY,
        "cropWidth": cropWidth,
        "cropHeight": cropHeight,
        "mainWidth": resolutionSize.width,
        "mainHeight": resolutionSize.height,
        "screenWidth": resolutionSize.width,
        "screenHeight": resolutionSize.height
      }

    }else{

      var crop = {
        "topLeftX": topLeftX,
        "topLeftY": topLeftY,
        "screenWidth": resolutionSize.width,
        "screenHeight": resolutionSize.height
      }

    }

    CGI.sendCommand("SetCrop", {
      "Crop": crop
    },function(data) {

      window.localStorage.setItem("/player/preview/clip", 1);
      callback && callback(true);

    }, function(a,b,c) {
      callback && callback(false);
      ControllerRemoteConfig.defaultErrorHandle(a,b,c);
    });
  };

  this.refreshBgImg = function(chId) {  // åˆ·æ–°å³ä¾§æŠ å›¾é¢„è§ˆçª—å£

    // no refresh when collapsed
    if (isSchedWorking == false || ViewManager.getMode() != EnumCurState.PREVIEW || !PlayerPreview.allRightSections[5].isShow) {

      return setTimeout(function() {

        ViewClip.refreshBgImg(chId);

      }, 500);
    }

    var tag = document.createElement("img");
    var tagId = String.random(16);
    tag.src = "cgi-bin/api.cgi?cmd=Snap&channel=" + chId + "&width=320&height=180&rs=" + String.random(16) + "&token=" + localStorage.getItem("token");
    tag.id = "clip-bg-ldr-" + tagId;
    $(tag).css({
      "capacity": 0,
      "height": 0,
      "width": 0
    });

    tag.onerror = tag.onabort = tag.onload = tag.onreadystatechange = function() {

      setTimeout(function() {

        ViewClip.refreshBgImg(chId);

      }, 10000);

      $clipFrame.css({
        "background-image": "url(" + tag.src + ")"
      });

      $("#clip-bg-ldr-" + tagId).remove();
      tag = null;
      tagId = null;
    };

    document.getElementById("pre_clip_container").appendChild(tag);
  };

  this.setBoxPos = function(pos) { // è®¾ç½®æŠ å›¾å°å°çª—çš„ä½ç½®

    if (pos.top + drowBox.height > windowSize.height) {
      pos.top = windowSize.height - drowBox.height;
    }

    if (pos.left + drowBox.width > windowSize.width) {
      pos.left = windowSize.width - drowBox.width;
    }

    $clipBox.css(pos);
  };

  this.setBoxPosSize = function() {  // è®¾ç½®ä¸å¯æ‹‰ä¼¸çš„æŠ å›¾å°å°çª—çš„å®½é«˜

    $clipBox.css({
      "height": boxSize.height,
      "width": boxSize.width
    });
  };

  this.setDrewBoxWidth = function() { // è®¾ç½®å¯æ‹‰ä¼¸æŠ å›¾å°å°çª—çš„å®½é«˜

    $clipBox.css({
      "height": drowBox.height,
      "width": drowBox.width
    });

  };

}).apply(ViewClip);

// view-source:http://192.168.1.252/js/platform_support.js?timeVersion=1620806528092


/*
 * description: 					æµè§ˆå™¨ç±»åž‹æžšä¸¾ç±»
 *
 */
var EnumBroserType = {

  IE 					: 			"msie",
  IE11 				: 			"trident",
  FIRFOX 				: 			"firefox",
  CHROME 				: 			"chrome",
  OPERA 				: 			"opera",
  SAFARI 				: 			"safari",
  OTHER 				: 			"other"
}

/*
 * description: 					ç³»ç»Ÿå¹³å°
 *
 */
var EnumSystemPlatform = {

  MAC 				: 			"mac",
  WIN64 				: 			"win64",
  WIN32 				: 			"win32",
  OTHER 				: 			"other"
}

/*
 * description: 					æµè§ˆå™¨ç±»åž‹æžšä¸¾ç±»
 *
 */
var EnumPluginType = {

  ACTIVIEX_32			: 			"activeX_32",
  ACTIVIEX_64 		: 			"activeX_64",
  NPAPI_MAC 			: 			"npapi_mac",
  NPAPI_WIN 			: 			"npapi_win",
  FLASH				:			"flash",
  OTHRE				:			"other"
}

/*
 * description: 					æ’ä»¶ä¸‹è½½åœ°å€
 */
var EnumPluginDownLoadURL = {

  ACTIVIEX_32 		:			"DvrWebClient_win32.exe",
  ACTIVIEX_64			:			"DvrWebClient_win64.exe",
  NPAPI_MAC			:			"DvrWebClient_macNp.exe",
  NPAPI_WIN			:			"DvrWebClient_winNp.exe",
}

/*----------------------------------------------------------------------------
 *
 * 								åŽ»å¹³å°æŽ¥å£
 *
 *----------------------------------------------------------------------------*/

/*
 * function:   						æ¯”è¾ƒä¸¤ä¸ªç‰ˆæœ¬å·çš„å¤§å°
 * parame:
 * 		string version_1: 			ç‰ˆæœ¬1ï¼Œï¼ˆæ ¼å¼ä¸º4ä½ç‚¹åˆ†åˆ¶ï¼Œå¦‚1.0.0.0)
 * 		string version_2:			ç‰ˆæœ¬2ï¼Œï¼ˆæ ¼å¼ä¸º4ä½ç‚¹åˆ†åˆ¶ï¼Œå¦‚1.0.0.0)
 * return:
 * 		int ret: 					æ¯”è¾ƒç»“æžœ
 * 									è¿”å›ž ï¼1 åˆ™ version_1 < version_2
 * 									è¿”å›ž 0   åˆ™ version_1 == version_2
 * 									è¿”å›ž 1   åˆ™ version_1 > version_2
 */
function compareVersion(version_1, version_2) {

  var words_1 = version_1.split(".");

  var words_2 = version_2.split(".");

  var length = Math.min(words_1.length, words_2.length);

  for (var i = 0; i < length; i ++) {

    var shortVersion_1 = Number(words_1[i]);

    var shortVersion_2 = Number(words_2[i]);

    if (shortVersion_1 > shortVersion_2) {

      return 1;

    }
    else if (shortVersion_1 < shortVersion_2) {

      return -1;
    }
  }

  if (words_1.length > words_2.length) {

    return 1;
  }
  else if (words_1.length < words_2.length) {

    return -1;
  }

  return 0;
}


/*
 * functionï¼š						èŽ·å–å½“å‰æµè§ˆå™¨ç±»åž‹
 * param:
 * return:
 * 		borserinfo:					æµè§ˆå™¨ä¿¡æ¯ï¼ˆbrowserä¸ºæµè§ˆå™¨åç§°ï¼Œ verä¸ºæµè§ˆå™¨ç‰ˆæœ¬ï¼‰
 *
 */
function getBrowserInfo() {

  var browserInfo = {};
  var userAngent = navigator.userAgent.toLowerCase();
  var info =/(msie|firefox|chrome|trident|opera|version).*?([\d.]+)/;
  var data = userAngent.match(info);
  browserInfo.browser = data[1].replace(/version/, "'safari");
  browserInfo.ver = data[2];
  return browserInfo;
}

/*
 * functionï¼š						èŽ·å–å½“å‰ç³»ç»Ÿå¹³å°
 * param:
 * return:
 * 		string systemPlatform:		å¹³å°ä¿¡æ¯ï¼ˆmacä¸ºmac ç³»ç»Ÿï¼› win64ä¸ºwindows 64ä½ï¼›win32ä¸ºwindows 32ä½ï¼Œotherä¸ºå…¶ä»–ç³»ç»Ÿï¼‰
 * 		dafult: 					å…¶ä»–ç³»ç»Ÿ other
 */
function getSystemPlatform() {

  var systemPlatform = EnumSystemPlatform.WIN32;
  var tmpPlatform  = navigator.platform.toLowerCase();
  var isMac = (tmpPlatform.indexOf("mac") != -1);
  var isWin = (tmpPlatform.indexOf("win") != -1);
  if(isMac){

    systemPlatform = EnumSystemPlatform.MAC;
  } else if(isWin){

    var isWin64 = (navigator.platform.indexOf("win64") != -1);
    if(isWin64) {

      systemPlatform = EnumSystemPlatform.WIN64;
    } else {

      systemPlatform = EnumSystemPlatform.WIN32;
    }
  } else {

    systemPlatform = EnumSystemPlatform.OTHER;
  }
  return systemPlatform;
}

/*
 * function:						èŽ·å–æµè§ˆå™¨æ”¯æŒçš„æ¡ä»¶
 * param:
 * return:
 * 		int ret:					0ä¸ºæ”¯æŒï¼Œ-10ä¸ºieæµè§ˆå™¨ä½ŽäºŽ9ï¼Œ-11ä¸ºä¸æ”¯æŒcanvas
 */
function getBroserSupport() {

  var browserInfo = getBrowserInfo();
  if(EnumBroserType.IE == browserInfo.browser) {

    var versions = browserInfo.ver.split(".");
    if(versions[0] < 10) {

      return EnumErrorCode.NOT_SUPPORT_IE_8;
    }
  }

  if(supports_canvas()) {

    return EnumErrorCode.NOT_SUPPORT_CANVAS;
  }
  return 0;
}

/*
 * function:						èŽ·å–æµè§ˆå™¨æ˜¯å¦æ”¯æŒcanvas
 * param:
 * return:
 * 		int ret:					trueä¸ºæ”¯æŒï¼Œfalseä¸ºä¸æ”¯æŒ
 */
function supports_canvas() {

  return !document.createElement('canvas').getContext;
}

// view-source:http://192.168.1.252/js/baseClass.js?timeVersion=1620806528092


//preview control item
function PreviewCtrolItem() {

  this.name = "";
  this.containerView = 0;
  this.headerView = 0;
  this.maxHeight = 0;
  this.isShow = false;

}

function DateButtonData() {

  this.type = 0; // æ—¥åŽ†æŒ‰é”®ç±»åž‹: month å‘ä¸Šã€month å‘ä¸‹ã€todayã€ year å‘ä¸Šã€ year å‘ä¸‹ã€ ä¸Šæœˆ æ—¥ã€ å½“å‰æœˆ æ—¥ã€ ä¸‹æœˆæ—¥
  this.left = 0;
  this.top = 0;
  this.width = 0;
  this.height = 0;
  this.value = {};
  this.value.year = 0;
  this.value.month = 0;
  this.value.day = 0;
}

// view-source:http://192.168.1.252/js/bcDatePicker.js?timeVersion=1620806528092


/*---------------------------BC DatePicker----------------------------*/

var g_bcDatePicker;

///
var COLOR_TRANSPARENT = "rgba(255,255,255, 0)";
var COLOR_BULUE = "rgba(60, 191, 252, 1)";
var COLOR_LIGH_BULUE = "rgba(60, 191, 252, 0.5)";
var COLOR_BLACK = "rgba(0, 0, 0, 1)";
var COLOR_WHITE = "rgba(255, 255, 255, 1)";
var COLOR_GRAY = "rgba(126, 126, 126, 1)"
var COLOR_DARK_GRAY = "rgba(62, 62, 62, 1)";
var COLOR_GREEN = "rgba(163, 201, 74, 1)";
var COLOR_ORANGE = "rgba(255,165, 0, 1)";

var MONTH_IMAGE_WIDHT = 20;
var MONTH_TEXT_WIDTH = 60;
var MONTH_MARGING = 5;

var MONTH_BG_HEIGHT = 20;

var WEEK_BG_HEIGHT = 30;
var WEEK_ITEM_WIDTH = 32;
var WEEK_MARGING = 2;

var DAY_ITME_WIDTH = 32;
var DAY_ITEM_HEIGHT = 25;
var DAY_MARGIN = 2;

var IMAGE_TYPE_LEFT = 0;
var IMAGE_TYPE_RIGHT = 1;
var IMAGE_TYPE_CIRCLE = 2;

// æ—¥åŽ†æŒ‰é”®ç±»åž‹: month å‘ä¸Šã€month å‘ä¸‹ã€todayã€ year å‘ä¸Šã€ year å‘ä¸‹ã€ ä¸Šæœˆ æ—¥ã€ å½“å‰æœˆ æ—¥ã€ ä¸‹æœˆæ—¥

var BUTTON_TYPE_MONTH_LEFT = 46;
var BUTTON_TYPE_MONTH_RIGHT = 45;
var BUTTON_TYPE_TODAY = 44;
var BUTTON_TYPE_YEAR_LEFT = 43;
var BUTTON_TYPE_YEAR_RIGHT = 42;
var BUTTON_TYPE_LAST_MONTH_DAY = 0;
var BUTTON_TYPE_CUR_MONTH_DAY = 1;
var BUTTON_TYPE_NEXT_MONTH_DAY = 2;

function BCDatePicker() {
  //date data
  this.monthTexts = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  this.weekTexts = new Array("SU", "MO", "TU", "WE", "TH", "FR", "SA");
  this.todayDate = new Date();

  // user to check
  this.selYear = 0;
  this.selMonth = 0;
  this.selDay = 0;

  // user sel to search date
  this.realSelYear = 0;
  this.realSelMonth = 0;
  this.reaLSelDay = 0;

  this.selDate = new Date();

  this.yearMonthHeight = 0;
  this.weekHeigh = 0;
  this.dayItemHeight = 0;

  this.buttonBgColor = 0;
  this.selColor = 0;
  this.hoverColor = 0;
  this.realDayColor = 0;
  this.notRealDayColor = 0;
  this.backgroundColor = 0;
  this.bgWidth = 0;
  this.bgHeight = 0;
  this.canvas;
  this.context;
  this.mousePosition = {};
  this.lineNumber = 6;

  this.buttonData = new Array();
  this.canReplayDates = new Array();
}

BCDatePicker.prototype.initDatePicker = function() {
  this.canvas = document.getElementById("pb_search_date_piker");
  if(null == this.canvas) {

    return;
  }
  this.selYear = this.todayDate.getFullYear();
  this.selMonth = this.todayDate.getMonth() + 1;
  this.selDay = this.todayDate.getDate();

  this.realSelYear = this.selYear;
  this.realSelMonth = this.selMonth;
  this.reaLSelDay = this.selDay;

  this.bgWidth = this.canvas.width;
  this.bgHeight = this.canvas.height;
  this.context = this.canvas.getContext("2d");

  this.canReplayDates.length = 0;

  //
  this.monthTexts
  this.lineNumber = 6;

  for(var i = 0 ; i < 47; ++ i) {

    this.buttonData[i] = new DateButtonData();
  }

  //month left img
  var month_img_left = MONTH_MARGING;
  var month_img_top = MONTH_MARGING;
  this.buttonData[BUTTON_TYPE_MONTH_LEFT].type = BUTTON_TYPE_MONTH_LEFT;
  this.buttonData[BUTTON_TYPE_MONTH_LEFT].left = month_img_left;
  this.buttonData[BUTTON_TYPE_MONTH_LEFT].top = month_img_top;
  this.buttonData[BUTTON_TYPE_MONTH_LEFT].width = MONTH_IMAGE_WIDHT;
  this.buttonData[BUTTON_TYPE_MONTH_LEFT].height = MONTH_IMAGE_WIDHT;

  //month right img
  var month_img_right = month_img_left + MONTH_IMAGE_WIDHT + MONTH_TEXT_WIDTH;
  var month_img_top = MONTH_MARGING;
  this.buttonData[BUTTON_TYPE_MONTH_RIGHT].type = BUTTON_TYPE_MONTH_RIGHT;
  this.buttonData[BUTTON_TYPE_MONTH_RIGHT].left = month_img_right;
  this.buttonData[BUTTON_TYPE_MONTH_RIGHT].top = month_img_top;
  this.buttonData[BUTTON_TYPE_MONTH_RIGHT].width = MONTH_IMAGE_WIDHT;
  this.buttonData[BUTTON_TYPE_MONTH_RIGHT].height = MONTH_IMAGE_WIDHT;

  //today img
  var today_img_left = month_img_right + MONTH_IMAGE_WIDHT;
  var today_img_top = MONTH_MARGING;
  this.buttonData[BUTTON_TYPE_TODAY].type = BUTTON_TYPE_TODAY;
  this.buttonData[BUTTON_TYPE_TODAY].left = today_img_left;
  this.buttonData[BUTTON_TYPE_TODAY].top = today_img_top;
  this.buttonData[BUTTON_TYPE_TODAY].width = MONTH_IMAGE_WIDHT;
  this.buttonData[BUTTON_TYPE_TODAY].height = MONTH_IMAGE_WIDHT;

  //year left img
  var year_img_left = today_img_left + MONTH_IMAGE_WIDHT;
  var year_img_top = MONTH_MARGING;
  this.buttonData[BUTTON_TYPE_YEAR_LEFT].type = BUTTON_TYPE_YEAR_LEFT;
  this.buttonData[BUTTON_TYPE_YEAR_LEFT].left = year_img_left;
  this.buttonData[BUTTON_TYPE_YEAR_LEFT].top = year_img_top;
  this.buttonData[BUTTON_TYPE_YEAR_LEFT].width = MONTH_IMAGE_WIDHT;
  this.buttonData[BUTTON_TYPE_YEAR_LEFT].height = MONTH_IMAGE_WIDHT;

  //year right img
  var year_img_right = year_img_left + MONTH_IMAGE_WIDHT + MONTH_TEXT_WIDTH;
  var year_img_top = MONTH_MARGING;
  this.buttonData[BUTTON_TYPE_YEAR_RIGHT].type = BUTTON_TYPE_YEAR_RIGHT;
  this.buttonData[BUTTON_TYPE_YEAR_RIGHT].left = year_img_right;
  this.buttonData[BUTTON_TYPE_YEAR_RIGHT].top = year_img_top;
  this.buttonData[BUTTON_TYPE_YEAR_RIGHT].width = MONTH_IMAGE_WIDHT;
  this.buttonData[BUTTON_TYPE_YEAR_RIGHT].height = MONTH_IMAGE_WIDHT;

  function getOffsetOnCanvas(canvas, x, y) {

    var bbox = $(canvas).offset();

    return {
      "x": x- bbox.left,
      "y": y - bbox.top
    };
  }
  this.canvas.onmousemove = function(e) {
    var point={};
    point = getOffsetOnCanvas(g_bcDatePicker.canvas, e.pageX, e.pageY);
    if(point.x < 0 || point.x > g_bcDatePicker.canvas.width || point.y < 0 || point.y > g_bcDatePicker.canvas.height) {
      return;
    }
    g_bcDatePicker.mousePosition = point;
    g_bcDatePicker.reDrawDatePicker();
  };

  this.canvas.onmouseout = function(e) {
    g_bcDatePicker.mousePosition.x = -1;
    g_bcDatePicker.mousePosition.y = -1;
    g_bcDatePicker.reDrawDatePicker();
  }

  this.canvas.onclick = function(e) {
    var point={};
    point = getOffsetOnCanvas(g_bcDatePicker.canvas, e.pageX, e.pageY);
    if(point.x < 0 || point.x > g_bcDatePicker.canvas.width || point.y < 0 || point.y > g_bcDatePicker.canvas.height) {
      return;
    }
    g_bcDatePicker.mousePosition = point;
    var getViewData = getClickViewData(g_bcDatePicker.mousePosition, g_bcDatePicker.buttonData);
    if(null == getViewData) {

      return;
    }
    else {

      var displayMonthChange = false;

      switch(getViewData.type) {
        case BUTTON_TYPE_LAST_MONTH_DAY:{

          g_bcDatePicker.selMonth = g_bcDatePicker.selMonth - 1;
          var time = updateYearAndMonth(g_bcDatePicker.selYear, g_bcDatePicker.selMonth);
          g_bcDatePicker.selYear = time.year;
          g_bcDatePicker.selMonth = time.month;
          g_bcDatePicker.selDay = getViewData.value.day;
          g_bcDatePicker.realSelYear = g_bcDatePicker.selYear;
          g_bcDatePicker.realSelMonth = g_bcDatePicker.selMonth;
          g_bcDatePicker.reaLSelDay = g_bcDatePicker.selDay;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }
        case BUTTON_TYPE_CUR_MONTH_DAY:{

          g_bcDatePicker.selDay = getViewData.value.day;
          g_bcDatePicker.realSelYear = g_bcDatePicker.selYear;
          g_bcDatePicker.realSelMonth = g_bcDatePicker.selMonth;
          g_bcDatePicker.reaLSelDay = g_bcDatePicker.selDay;
          PlayerPlayback.trigger('dayChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);
          break;
        }

        case BUTTON_TYPE_NEXT_MONTH_DAY:{

          g_bcDatePicker.selMonth = g_bcDatePicker.selMonth + 1;
          var time = updateYearAndMonth(g_bcDatePicker.selYear, g_bcDatePicker.selMonth);
          g_bcDatePicker.selYear = time.year;
          g_bcDatePicker.selMonth = time.month;
          g_bcDatePicker.selDay = getViewData.value.day;
          g_bcDatePicker.realSelYear = g_bcDatePicker.selYear;
          g_bcDatePicker.realSelMonth = g_bcDatePicker.selMonth;
          g_bcDatePicker.reaLSelDay = g_bcDatePicker.selDay;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }

        case BUTTON_TYPE_MONTH_LEFT: {

          g_bcDatePicker.selMonth = g_bcDatePicker.selMonth - 1;
          var time = updateYearAndMonth(g_bcDatePicker.selYear, g_bcDatePicker.selMonth);
          g_bcDatePicker.selYear = time.year;
          g_bcDatePicker.selMonth = time.month;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }

        case BUTTON_TYPE_MONTH_RIGHT: {

          g_bcDatePicker.selMonth = g_bcDatePicker.selMonth + 1;
          var time = updateYearAndMonth(g_bcDatePicker.selYear, g_bcDatePicker.selMonth);
          g_bcDatePicker.selYear = time.year;
          g_bcDatePicker.selMonth = time.month;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }

        case BUTTON_TYPE_YEAR_LEFT: {

          g_bcDatePicker.selYear = g_bcDatePicker.selYear - 1;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }

        case BUTTON_TYPE_YEAR_RIGHT: {

          g_bcDatePicker.selYear = g_bcDatePicker.selYear + 1;
          PlayerPlayback.trigger('monthChange', [g_bcDatePicker.selYear, g_bcDatePicker.selMonth]);

          //
          displayMonthChange = true;
          break;
        }

        case BUTTON_TYPE_TODAY: {

          g_bcDatePicker.selYear = g_bcDatePicker.todayDate.getFullYear();
          g_bcDatePicker.selMonth = g_bcDatePicker.todayDate.getMonth() + 1;
          g_bcDatePicker.selDay = g_bcDatePicker.todayDate.getDate();
          g_bcDatePicker.realSelYear = g_bcDatePicker.selYear;
          g_bcDatePicker.realSelMonth = g_bcDatePicker.selMonth;
          g_bcDatePicker.reaLSelDay = g_bcDatePicker.selDay;

          //
          displayMonthChange = true;
          break;
        }

        default :
          break;

      }

      g_bcDatePicker.reDrawDatePicker();
    }
  }

  this.drawDatePicker();
}

BCDatePicker.prototype.setDate = function(date, noRefresh) {

  if (!noRefresh && (g_bcDatePicker.selYear != date.getFullYear() || g_bcDatePicker.selMonth != date.getMonth() + 1)) {
    PlayerPlayback.trigger('monthChange', [date.getFullYear(), date.getMonth() + 1]);
  }

  g_bcDatePicker.selYear = date.getFullYear();
  g_bcDatePicker.selMonth = date.getMonth() + 1;
  g_bcDatePicker.selDay = date.getDate();
  g_bcDatePicker.realSelYear = g_bcDatePicker.selYear;
  g_bcDatePicker.realSelMonth = g_bcDatePicker.selMonth;
  g_bcDatePicker.reaLSelDay = g_bcDatePicker.selDay;

  this.reDrawDatePicker();

};

BCDatePicker.prototype.refreshCanReplayList = function(isCanReplayList) {

  this.canReplayDates = isCanReplayList;
  this.reDrawDatePicker();
}

BCDatePicker.prototype.getSearchDate = function() {

  this.selDate.setFullYear(this.realSelYear);
  this.selDate.setMonth(this.realSelMonth - 1);
  this.selDate.setDate(this.reaLSelDay);
  this.selDate.setHours(0);
  this.selDate.setMinutes(0);
  this.selDate.setSeconds(0);

  return new Date(this.selDate);
}

BCDatePicker.prototype.drawDatePicker = function() {

  this.context.clearRect(0, 0, this.bgWidth, this.bgHeight);

  //draw background
  var gradient = this.context.createLinearGradient(0,0,0,300);
  gradient.addColorStop(0,"#ffffff");
  gradient.addColorStop(1,"#ffffff");

  this.context.fillStyle = gradient;
  this.context.fillRect(0, 0 , this.bgWidth, this.bgHeight);

  //daw months and years

  //month left img
  drawImageButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[BUTTON_TYPE_MONTH_LEFT].left, this.buttonData[BUTTON_TYPE_MONTH_LEFT].top, this.buttonData[BUTTON_TYPE_MONTH_LEFT].width, this.buttonData[BUTTON_TYPE_MONTH_LEFT].height, IMAGE_TYPE_LEFT);

  //month text
  var month_text_left = this.buttonData[BUTTON_TYPE_MONTH_LEFT].left + MONTH_IMAGE_WIDHT + MONTH_TEXT_WIDTH /2;
  var month_text_top = MONTH_MARGING + 1 + MONTH_BG_HEIGHT / 2;
  this.context.font="normal normal normal 15px normal";
  this.context.textAlign = "center";
  this.context.textBaseline = "middle";
  this.context.fillStyle = COLOR_BULUE;
  this.context.fillText(getMonthTextByMonth(this.selMonth, this.monthTexts), month_text_left, month_text_top);

  //month right img
  drawImageButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[BUTTON_TYPE_MONTH_RIGHT].left, this.buttonData[BUTTON_TYPE_MONTH_RIGHT].top, this.buttonData[BUTTON_TYPE_MONTH_RIGHT].width , this.buttonData[BUTTON_TYPE_MONTH_RIGHT].height, IMAGE_TYPE_RIGHT);

  //today img
  drawImageButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[BUTTON_TYPE_TODAY].left, this.buttonData[BUTTON_TYPE_TODAY].top, this.buttonData[BUTTON_TYPE_TODAY].width, this.buttonData[BUTTON_TYPE_TODAY].height, IMAGE_TYPE_CIRCLE);

  //year left img
  drawImageButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[BUTTON_TYPE_YEAR_LEFT].left, this.buttonData[BUTTON_TYPE_YEAR_LEFT].top, this.buttonData[BUTTON_TYPE_YEAR_LEFT].width, this.buttonData[BUTTON_TYPE_YEAR_LEFT].height, IMAGE_TYPE_LEFT);

  //year text
  var year_text_left = this.buttonData[BUTTON_TYPE_YEAR_LEFT].left + MONTH_IMAGE_WIDHT + MONTH_TEXT_WIDTH /2;
  var year_text_top = MONTH_MARGING + 1 +  MONTH_BG_HEIGHT / 2;

  this.context.font="normal normal normal 15px normal";
  this.context.textAlign = "center";
  this.context.textBaseline = "middle";
  this.context.fillStyle = COLOR_BULUE;
  this.context.fillText(this.selYear, year_text_left, year_text_top);

  //year right img
  drawImageButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[BUTTON_TYPE_YEAR_RIGHT].left, this.buttonData[BUTTON_TYPE_YEAR_RIGHT].top, this.buttonData[BUTTON_TYPE_YEAR_RIGHT].width, this.buttonData[BUTTON_TYPE_YEAR_RIGHT].height, IMAGE_TYPE_RIGHT);

  // draw week views
  for(var i = 0; i < 7; ++i) {
    var itemLeft = WEEK_MARGING + i * WEEK_ITEM_WIDTH + WEEK_ITEM_WIDTH / 2;
    var itemTop = MONTH_MARGING + MONTH_BG_HEIGHT + WEEK_BG_HEIGHT / 2;

    this.context.font="normal normal bold 12px arial";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillStyle = COLOR_BLACK;
    this.context.fillText(this.weekTexts[i], itemLeft, itemTop);
  }

  // draw day views
  var firstDayIndex = getFirstDay(this.selYear, this.selMonth);
  var curMonthDaysCount = getDaysBayYearAndMonth(this.selYear, this.selMonth);
  var lastTime = updateYearAndMonth(this.selYear, this.selMonth - 1);
  var nextTime = updateYearAndMonth(this.selYear, this.selMonth + 1);
  var lastMonthDaysCount = getDaysBayYearAndMonth(lastTime.year, lastTime.month);
  var dayTexts = new Array();
  for(var i = 0; i < 7; ++ i) {
    for(var j = 0; j < 6; ++ j) {


      if((j * 7 + i) < firstDayIndex) {

        dayTexts[j * 7 + i] = (lastMonthDaysCount + (j * 7 + i) - firstDayIndex) % lastMonthDaysCount + 1;
        this.buttonData[j * 7 + i].type = BUTTON_TYPE_LAST_MONTH_DAY;
        this.buttonData[j * 7 + i].value.year = lastTime.year;
        this.buttonData[j * 7 + i].value.month = lastTime.month;
      } else if((j * 7 + i) < firstDayIndex + curMonthDaysCount) {

        dayTexts[j * 7 + i] = (j * 7 + i) - firstDayIndex + 1;
        this.buttonData[j * 7 + i].type = BUTTON_TYPE_CUR_MONTH_DAY;
        this.buttonData[j * 7 + i].value.year = this.selYear;
        this.buttonData[j * 7 + i].value.month = this.selMonth;
      } else if ((j * 7 + i) >= firstDayIndex + curMonthDaysCount) {

        dayTexts[j * 7 + i] = (j * 7 + i) - (firstDayIndex + curMonthDaysCount) + 1;
        this.buttonData[j * 7 + i].type = BUTTON_TYPE_NEXT_MONTH_DAY;
        this.buttonData[j * 7 + i].value.year = nextTime.year;
        this.buttonData[j * 7 + i].value.month = nextTime.month;
      }

      var itemLeft = DAY_MARGIN + i * DAY_ITME_WIDTH;
      var itemTop = MONTH_MARGING + MONTH_BG_HEIGHT + WEEK_BG_HEIGHT + DAY_ITEM_HEIGHT * j;
      this.buttonData[j * 7 + i].left = itemLeft;
      this.buttonData[j * 7 + i].top = itemTop;
      this.buttonData[j * 7 + i].width = DAY_ITME_WIDTH;
      this.buttonData[j * 7 + i].height = DAY_ITEM_HEIGHT;
      this.buttonData[j * 7 + i].value.day = dayTexts[j * 7 + i];
      var isSelDay = getIsSelDay(this.buttonData[j * 7 + i], this.realSelYear, this.realSelMonth, this.reaLSelDay);
      drawTextButton(this.context, this.mousePosition.x, this.mousePosition.y, this.buttonData[j * 7 + i], isSelDay, this.canReplayDates);
    }
  }
}

function updateYearAndMonth(year, month) {
  var time = {};
  var totalMonth = year * 12 + month - 1;

  time.year = parseInt(totalMonth / 12);
  time.month = totalMonth % 12 + 1;

  return time;

}

function getIsSelDay(buttonData, realSelYear, realSelMonth, reaLSelDay) {
  if(buttonData.value.year == realSelYear && buttonData.value.month == realSelMonth && buttonData.value.day == reaLSelDay) {

    return true;
  }
  return false;
}

function getMonthTextByMonth(month, monthTexts) {

  return monthTexts[month - 1];
}

function isInButton(mouseX, mouseY, left, top, buttonWidth, buttonHeight) {

  if(mouseX > left && mouseX < left + buttonWidth && mouseY > top && mouseY < top + buttonHeight) {
    return true;
  }
  return false;
}

function drawImageButton(context, mouseX, mouseY, buttonLeft, buttonTop, buttonWidth, buttonHeight, imageType) {
  var isInBut = isInButton(mouseX, mouseY, buttonLeft, buttonTop, buttonWidth, buttonHeight);
  //draw button bg
  context.fillStyle = COLOR_TRANSPARENT;
  context.fillRect(buttonLeft, buttonTop, buttonWidth, buttonHeight);

  if(IMAGE_TYPE_LEFT == imageType) {

    if(isInBut) {

      context.fillStyle = COLOR_BULUE;//å¡«å……é¢œè‰²,é»˜è®¤æ˜¯é»‘è‰²
    } else {

      context.fillStyle = COLOR_DARK_GRAY;//å¡«å……é¢œè‰²,é»˜è®¤æ˜¯é»‘è‰²
    }
    var startX = buttonLeft + buttonWidth / 4;
    var startY = buttonTop + buttonHeight / 2;

    var endX = buttonLeft + buttonWidth * 3 / 4;
    var endY1 = buttonTop + buttonHeight / 4;
    var endY2 = buttonTop + buttonHeight * 3 / 4;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY1);
    context.lineTo(endX, endY2);
    context.fill();
    context.closePath();

  } else if(IMAGE_TYPE_RIGHT == imageType) {

    if(isInBut) {

      context.fillStyle = COLOR_BULUE;
    } else {

      context.fillStyle = COLOR_DARK_GRAY;
    }
    var startX = buttonLeft + buttonWidth * 3 / 4;
    var startY = buttonTop + buttonHeight / 2;

    var endX = buttonLeft + buttonWidth / 4;
    var endY1 = buttonTop + buttonHeight / 4;
    var endY2 = buttonTop + buttonHeight * 3 / 4;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY1);
    context.lineTo(endX, endY2);
    context.fill();
    context.closePath();
  } else if(IMAGE_TYPE_CIRCLE == imageType) {

    if(isInBut) {

      context.fillStyle = COLOR_BULUE;
    } else {

      context.fillStyle = COLOR_DARK_GRAY;
    }

    context.beginPath();
    context.arc(buttonLeft + buttonWidth / 2, buttonTop + buttonHeight / 2, buttonWidth / 5, 0, 360, false);
    context.fill();//ç”»å®žå¿ƒåœ†
    context.closePath();
  }
}

function getClickViewData(mousePosition, buttonDatas) {

  for(var i = 0; i < buttonDatas.length; ++ i) {
    var buttonData = buttonDatas[i];
    if(isInButton(mousePosition.x, mousePosition.y, buttonData.left, buttonData.top, buttonData.width, buttonData.height)) {
      return buttonData;
    } else {
      continue;
    }
  }
  return null;
}

function drawTextButton(context, mouseX, mouseY, buttonData, isSelDay, canReplayDates) {
  var buttonLeft = buttonData.left;
  var buttonTop = buttonData.top;
  var buttonWidth = buttonData.width;
  var buttonHeight = buttonData.height;
  var text = buttonData.value.day;
  var isInBut = isInButton(mouseX, mouseY, buttonLeft, buttonTop, buttonWidth, buttonHeight);

  var textColor = COLOR_BLACK;
  if(BUTTON_TYPE_CUR_MONTH_DAY == buttonData.type) {
    textColor = COLOR_BLACK;
  } else {
    textColor = COLOR_GRAY;
  }
  var stroke = false;
  var fill = false;
  //draw button bg
  if(isInBut) {
    context.fillStyle = COLOR_LIGH_BULUE;
    textColor = COLOR_WHITE;
    fill = true;
  } else {

    context.fillStyle = COLOR_TRANSPARENT;

    for(var i = 0; i < canReplayDates.length; ++ i) {

      if((buttonData.value.year == canReplayDates[i].getFullYear())
      && (buttonData.value.month == canReplayDates[i].getMonth() + 1)
      && (buttonData.value.day == canReplayDates[i].getDate())) {
        context.fillStyle = COLOR_ORANGE;
        textColor = COLOR_WHITE;
        fill = true;
        break;
      }

    }

  }

  if(isSelDay) {

    if (!fill) {
      context.fillStyle = COLOR_TRANSPARENT;
      textColor = COLOR_BLACK;
    }

    context.strokeStyle = COLOR_BULUE;
    context.lineWidth = 2;
    stroke = true;
  }
  if (fill) {
    context.roundRect(buttonLeft + 2, buttonTop + 2, buttonWidth - 4, buttonHeight - 4, 3, true, false);
  }
  if (stroke) {
    context.roundRect(buttonLeft + 1, buttonTop + 1, buttonWidth - 2, buttonHeight - 2, 3, false, true);
  }
  context.fillStyle = textColor;
  context.font="normal normal normal 12px arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, buttonLeft + buttonWidth / 2, buttonTop + buttonHeight / 2);
}

//èŽ·å–æ—¥åŽ†ä¿¡æ¯

//æ˜¯å¦é—°å¹´
function isLeapYear(year) {

  return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0) ? true : false;
}

var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//è¿”å›žæŸæœˆå¤©æ•°
function getDaysBayYearAndMonth(year, month) {

  var rtn = monthDays[month - 1];

  if (month === 2 && isLeapYear(year)) {
    rtn++;
  }

  return rtn;
}

//æŸå¹´æŸæœˆç¬¬ä¸€å¤©æ˜¯å‘¨å‡
function getFirstDay(year, month) {

  var date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(1);

  return date.getDay(); //è¿”å›žæ˜¯å‘¨å‡ ï¼Œ 0 ä¸ºå‘¨æ—¥
}

BCDatePicker.prototype.reDrawDatePicker = function () {

  this.drawDatePicker();
}

// view-source:http://192.168.1.252/js/libs/bootstrap.min.js?timeVersion=1620806528092

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

// view-source:http://192.168.1.252/js/channelinfo.js?timeVersion=1620806528092

/*
 * Channel class
 *
 *
 */

function _Channel() {

  this.index = 0;
  this.isPreviewSel = false;
  this.isPlaybackSel = false;
  this.playbackFiles = new Array()

}

function ChannelInfo(index, isPreviewSel, isPlaybackSel) {

  this.index = index;
  this.isPreviewSel = isPreviewSel;
  this.isPlaybackSel = isPlaybackSel;
  this.data = {
  };
  this.limits = {
  };
  this.initials = {
  };
  this.playbackFiles = [];
}

// view-source:http://192.168.1.252/js/device.js?timeVersion=1620806528092

/**
 * Device class
 *
 *
 */

function Device() {

  this.language = "";
  this.uid = "";
  this.hostName = "";
  this.port = "";
  this.userName = "";
  this.password = "";
  this.streamType = "";
  this.loginType = "IP"
  this.deviceName = "";
  this.channelCount = 0;
  this.channels = new Array();
  this.ptzMode = 0;
  this.isIPC = false;
  this.canReplay = true;
  this.canReplaySubStream = false;
}

Device.prototype.refreshChannels = function() {

  this.channels.length = 0;

  for(var i = 0; i < this.channelCount; ++ i) {
    var channel = new ChannelInfo(i, false, false);
    this.channels.push(channel);
  }
}

// view-source:http://192.168.1.252/js/myScript.js?timeVersion=1620806528092


/*!
	Slider Default
 */


var slider = $.widget( "ui.slider", $.ui.mouse, {
	version: "1.11.0",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();

		this.element
			.addClass( "ui-slider" +
				" ui-slider-" + this.orientation +
				" ui-widget1" +
				" ui-widget1-content" +
				" ui-corner-all");

		this._refresh();
		this._setOption( "disabled", this.options.disabled );

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
			handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this.handle = this.handles.eq( 0 );

		this.handles.each(function( i ) {
			$( this ).data( "ui-slider-handle-index", i );
		});
	},

	_createRange: function() {
		var options = this.options,
			classes = "";

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[0], options.values[0] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice(0);
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div></div>" )
					.appendTo( this.element );

				classes = "ui-slider-range" +
				// note: this isn't the most fittingly semantic framework class for this element,
				// but worked best visually with a variety of themes
				" ui-widget1-header ui-corner-all";
			} else {
				this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
					// Handle range switching from true to min/max
					.css({
						"left": "",
						"bottom": ""
					});
			}

			this.range.addClass( classes +
				( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this.element
			.removeClass( "ui-slider" +
				" ui-slider-horizontal" +
				" ui-slider-vertical" +
				" ui-widget1" +
				" ui-widget1-content" +
				" ui-corner-all" );

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each(function( i ) {
			var thisDistance = Math.abs( normValue - that.values(i) );
			if (( distance > thisDistance ) ||
				( distance === thisDistance &&
					(i === that._lastChangedValue || that.values(i) === o.min ))) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		});

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		closestHandle
			.addClass( "ui-state-active" )
			.focus();

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
				( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
				( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this.handles.removeClass( "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_start: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}
		return this._trigger( "start", event, uiHash );
	},

	_slide: function( event, index, newVal ) {
		var otherVal,
			newValues,
			allowed;

		if ( this.options.values && this.options.values.length ) {
			otherVal = this.values( index ? 0 : 1 );

			if ( ( this.options.values.length === 2 && this.options.range === true ) &&
					( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
				) {
				newVal = otherVal;
			}

			if ( newVal !== this.values( index ) ) {
				newValues = this.values();
				newValues[ index ] = newVal;
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal,
					values: newValues
				} );
				otherVal = this.values( index ? 0 : 1 );
				if ( allowed !== false ) {
					this.values( index, newVal );
				}
			}
		} else {
			if ( newVal !== this.value() ) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal
				} );
				if ( allowed !== false ) {
					this.value( newVal );
				}
			}
		}
	},

	_stop: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}

		this._trigger( "stop", event, uiHash );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;

			this._trigger( "change", event, uiHash );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this.options.values && this.options.values.length ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		if ( key === "disabled" ) {
			this.element.toggleClass( "ui-state-disabled", !!value );
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this.element
					.removeClass( "ui-slider-horizontal ui-slider-vertical" )
					.addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for ( i = 0; i < valsLength; i += 1 ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "min":
			case "max":
				this._animateOff = true;
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this.options.values && this.options.values.length ) {
			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i+= 1) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = (val - this._valueMin()) % step,
			alignValue = val - valModStep;

		if ( Math.abs(valModStep) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed(5) );
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.options.max;
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this.options.values && this.options.values.length ) {
			this.handles.each(function( i ) {
				valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						$( event.target ).addClass( "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this.options.values && this.options.values.length ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				$( event.target ).removeClass( "ui-state-active" );
			}
		}
	}
});


/*!
 Slider #02
 */


var slider = $.widget( "ui.slider2", $.ui.mouse, {
	version: "1.11.0",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();

		this.element
			.addClass( "ui-slider2" +
				" ui-slider2-" + this.orientation +
				" ui-widget2" +
				" ui-widget2-content" +
				" ui-corner2-all");

		this._refresh();
		this._setOption( "disabled", this.options.disabled );

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider2-handle" ).addClass( "ui-state2-default ui-corner2-all" ),
			handle = "<span class='ui-slider2-handle ui-state2-default' tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this.handle = this.handles.eq( 0 );

		this.handles.each(function( i ) {
			$( this ).data( "ui-slider2-handle-index", i );
		});
	},

	_createRange: function() {
		var options = this.options,
			classes = "";

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[0], options.values[0] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice(0);
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div></div>" )
					.appendTo( this.element );

				classes = "ui-slider2-range" +
				// note: this isn't the most fittingly semantic framework class for this element,
				// but worked best visually with a variety of themes
				" ui-widget2-header ui-corner2-all";
			} else {
				this.range.removeClass( "ui-slider2-range-min ui-slider2-range-max" )
					// Handle range switching from true to min/max
					.css({
						"left": "",
						"bottom": ""
					});
			}

			this.range.addClass( classes +
				( ( options.range === "min" || options.range === "max" ) ? " ui-slider2-range-" + options.range : "" ) );
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this.element
			.removeClass( "ui-slider2" +
				" ui-slider2-horizontal" +
				" ui-slider2-vertical" +
				" ui-widget2" +
				" ui-widget2-content" +
				" ui-corner2-all" );

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each(function( i ) {
			var thisDistance = Math.abs( normValue - that.values(i) );
			if (( distance > thisDistance ) ||
				( distance === thisDistance &&
					(i === that._lastChangedValue || that.values(i) === o.min ))) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		});

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		closestHandle
			.addClass( "ui-state2-active" )
			.focus();

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider2-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
				( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
				( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
		};

		if ( !this.handles.hasClass( "ui-state2-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this.handles.removeClass( "ui-state2-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_start: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}
		return this._trigger( "start", event, uiHash );
	},

	_slide: function( event, index, newVal ) {
		var otherVal,
			newValues,
			allowed;

		if ( this.options.values && this.options.values.length ) {
			otherVal = this.values( index ? 0 : 1 );

			if ( ( this.options.values.length === 2 && this.options.range === true ) &&
					( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
				) {
				newVal = otherVal;
			}

			if ( newVal !== this.values( index ) ) {
				newValues = this.values();
				newValues[ index ] = newVal;
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal,
					values: newValues
				} );
				otherVal = this.values( index ? 0 : 1 );
				if ( allowed !== false ) {
					this.values( index, newVal );
				}
			}
		} else {
			if ( newVal !== this.value() ) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal
				} );
				if ( allowed !== false ) {
					this.value( newVal );
				}
			}
		}
	},

	_stop: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}

		this._trigger( "stop", event, uiHash );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;

			this._trigger( "change", event, uiHash );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this.options.values && this.options.values.length ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		if ( key === "disabled" ) {
			this.element.toggleClass( "ui-state2-disabled", !!value );
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this.element
					.removeClass( "ui-slider2-horizontal ui-slider2-vertical" )
					.addClass( "ui-slider2-" + this.orientation );
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for ( i = 0; i < valsLength; i += 1 ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "min":
			case "max":
				this._animateOff = true;
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this.options.values && this.options.values.length ) {
			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i+= 1) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = (val - this._valueMin()) % step,
			alignValue = val - valModStep;

		if ( Math.abs(valModStep) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed(5) );
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.options.max;
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this.options.values && this.options.values.length ) {
			this.handles.each(function( i ) {
				valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider2-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						$( event.target ).addClass( "ui-state2-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this.options.values && this.options.values.length ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider2-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				$( event.target ).removeClass( "ui-state2-active" );
			}
		}
	}
});

// view-source:http://192.168.1.252/js/pbFileBarCanvas.js?timeVersion=1620806528092

// ----------------------------------------pbFileBarCanvas View---------------------------------

var g_pbFileBarCanvas;

///
function PbFileBarCanvas() {
  this.TAG = "pbFileBarCanvas";
  this.channelWidth = 80;
  this.baseItemWidth;
  this.itemWidth;
  this.itemHeight;
  this.markHeight = 20;
  this.timeShowWidth = 50;

  this.grid_cols = 24;
  this.grid_rows = 4;
  this.translateX = 0;
  this.dx = 0;
  this.division = 60;

  this.offset = 0.5; //ç”»çº¿åç§»
  this.scale = 1;
  this.maxScale = 5;

  this.mouse = {};
  this.isMouseIn = false;
  this.timeCenterX;
  this.curTimeX;
  this.curTimeSecond = 0;
  this.moveTimeX = 0;
  this.moveTimeSecond = 0;

  //æ»šåŠ¨æ¡
  this.scrollMouse = {};
  this.scrollBgWidth;
  this.scrollBgHeight;

  this.scrollViewX = 0;
  this.scrollViewY;
  this.scrollViewHeight;
  this.scrollViewWidth;
  this.isScrollView;
  this.isScrollMouseOut;
  this.scrollDx = 0;

  //fileInfo
  this.canvasPositions = new Array();
  this.realDrawPositions = new Array();
  this.fileHeight;

  this.startTime = new Date();
}


PbFileBarCanvas.prototype.drawPBToolbar = function() {
  var canvas = document.getElementById("playback_toolbar_bg");
  if(null == canvas) {
    return;
  }

  var bgWidth = canvas.width;
  var bgHeight = canvas.height;


  var context = canvas.getContext("2d");

  context.clearRect(0, 0, bgWidth, bgHeight); //æ¸…ç©ºå†…å®¹

  // ç»˜åˆ¶èƒŒæ™¯
  var gradient = context.createLinearGradient(0,0,0,300);

  gradient.addColorStop(0,"#8b8786");
  gradient.addColorStop(1,"#8b8786");

  context.fillStyle = gradient;

  context.fillRect(0, 0, bgWidth, bgHeight);

  context.fillStyle = '#3d3a39';

  //darw time bg
  context.fillRect(0, 0, bgWidth, this.itemHeight);

  //draw files
  var fileColor = "rgba(60,191,252,0.9)";
  this.realDrawPositions = [];
  this.canvasPositions = [0,-1,-1,-1];
  for(var i = 0; i < this.canvasPositions.length; ++ i) {
    if(!(this.realDrawPositions.in_array(this.canvasPositions[i]))) {

      this.realDrawPositions.push(this.canvasPositions[i]);
    } else {

      continue;
    }

    var channel = g_device.channels[i];

    if(null == channel) {

      continue;
    }
    for(var j = 0; j < channel.playbackFiles.length; ++ j){
      //if(!PlayerPlayback.isFileTypeSel(channel.playbackFiles[j])) {

        //  continue;
      //}
      fileColor = this.getColorByfileType(channel.playbackFiles[j].type);
      this.drawFile(context, channel.playbackFiles[j], i, fileColor , j);
    }

  }

  //æ—¶é—´è¡¨æ ¼
  context.beginPath();

  context.lineWidth = 1;
  context.strokeStyle='#000000';

  //ç”»æ—¶é—´è¡¨æ ¼ç«–çº¿
  for (var col = 0; col <= this.grid_cols; col ++) {
    var startY;
    var endY;
    var start_end_X;
    var x;
    var y;
    if(0 == col) {

      if(this.translateX + col * this.itemWidth > this.channelWidth) {


        this.translateX = this.channelWidth;
      }
    } else if(this.grid_cols == col) {

      if(this.translateX + col * this.itemWidth <= bgWidth)	{

        this.translateX = 	bgWidth - col * this.itemWidth;
      }
    }
    x = this.translateX + col * this.itemWidth;
    if(0 == col || (this.grid_cols) == col) {

      y = 0;
    } else {

      y = this.markHeight;
    }
    startY = Math.round(y) + 0.5;
    endY = Math.round(this.markHeight + this.grid_rows * this.itemHeight) - 0.5;
    start_end_X = Math.round(x) - 0.5;
    context.moveTo(start_end_X, startY);
    context.lineTo(start_end_X, endY);
  }

  //ç»˜åˆ¶æ—¶é—´è¡¨æ ¼æ¨ªçº¿
  for(var row = 0; row <= this.grid_rows + 1; row ++){
    var startX;
    var endX;
    var start_end_Y;

    var y ;
    if(0 == row) {
      y = 0;
    } else {
      y = this.markHeight + (row - 1) * this.itemHeight;
    }
    startX = toLineUsePix(this.channelWidth);
    endX = Math.round(this.channelWidth + this.grid_cols * this.itemWidth) - 0.5;
    start_end_Y = Math.round(y) - 0.5;
    context.moveTo(startX, start_end_Y);
    context.lineTo(endX, start_end_Y);
  }

  //ç»˜åˆ¶æ—¶é—´æ–‡å­—
  var moveTextColor = "rgba(221,13,55,1)"
  var notMoveTextColor = "rgba(229,212,212,0.9)"
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = "rgba(229,212,212,0.9)";
  for(var i = 0; i < this.grid_cols; ++ i) {
    if(0 == i) {
      continue;
    }
    var x;
    var y;
    var dx = -200;
    x = this.translateX + this.itemWidth * i;
    y = this.itemHeight / 2;
    var time;
    if(60 !== this.division) {

      var hour = parseInt(i / parseInt(60 / this.division));
      var min = i % parseInt(60 / this.division);
      time = hour + ":" + oneToZeroOne(min * this.division);
    } else {

      time = i.toString();
    }


    context.fillText(time, x, y);
  }
  context.stroke();


  context.beginPath();
  context.fillStyle = '#3d3a39';
  //draw channel bg
  context.fillRect(0, 0, this.channelWidth, bgHeight);

  //é€šé“è¡¨æ ¼ç«–çº¿
  for (var col = 0; col <= 0; col ++) {
    var startY;
    var endY;
    var start_end_X;
    var x;
    var y;
    x = this.channelWidth + col * this.itemWidth;
    if(0 == col || (this.grid_cols) == col) {

      y = 0;
    } else {

      y = this.markHeight;
    }
    startY = Math.round(y) + 0.5;
    endY = Math.round(this.markHeight + this.grid_rows * this.itemHeight) - 0.5;
    start_end_X = Math.round(x) - 0.5;
    context.moveTo(start_end_X, startY);
    context.lineTo(start_end_X, endY);
  }

  //é€šé“è¡¨æ ¼æ¨ªçº¿
  for(var row = 0; row <= this.grid_rows + 1; row ++){
    var startX;
    var endX;
    var start_end_Y;

    var y ;
    if(0 == row) {
      y = 0;
    } else {
      y = this.markHeight + (row - 1) * this.itemHeight;
    }
    startX = toLineUsePix(0);
    endX = Math.round(this.channelWidth) - 0.5;
    start_end_Y = Math.round(y) - 0.5;
    context.moveTo(startX, start_end_Y);
    context.lineTo(endX, start_end_Y);
  }
  context.stroke();

  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#e5d4d4';

  //draw curDate
  var curDateX = 0;
  var curDateY = 0;
  curDateX = this.channelWidth / 2;
  curDateY = this.itemHeight / 2;
  var curDateString = oneToZeroOne(this.startTime.getMonth() + 1) + "-" + oneToZeroOne(this.startTime.getDate()) + "-" + this.startTime.getFullYear();
  context.fillText(curDateString, curDateX, curDateY);

  //draw channels
  for(var j = 0; j < this.grid_rows; ++ j) {

    var x;
    var y;
    x = this.channelWidth / 2;
    y = (j + 2) * this.itemHeight - this.itemHeight / 2;
    var channelString = "";
    if(this.canvasPositions[j] < 0) {

      channelString = "No channel";
    } else {

      channelString = "CH " + oneToZeroOne(this.canvasPositions[j] + 1);
    }

    context.fillText(channelString, x, y);
  }

  //draw curentLine
  var curBgColor = "rgba(56,31,34,0.9)";
  var curLineColor = "rgba(221,13,55,1)";
  var curTimeX = toLineUsePix(this.secondToPix(this.curTimeSecond) + this.translateX);
  var curTimeString = this.formatSeconds(this.curTimeSecond);
  if(curTimeX >= this.channelWidth) {

    this.drawTimeSelLine(context, curTimeX, curLineColor, curBgColor, curTimeString);
  }


  //draw moveLine
  var moveTimeX = this.mouse.x;
  this.moveTimeX = moveTimeX - this.translateX;
  this.moveTimeSecond = this.pixToSecond(this.moveTimeX);
  var moveTimeString = this.formatSeconds(this.moveTimeSecond);
  if(moveTimeX < this.channelWidth) {
    moveTimeX = toLineUsePix(this.channelWidth);
  } else {
    moveTimeX = toLineUsePix(moveTimeX);
  }
  var moveBgColor = "rgba(82,119,82,0.9)";
  var moveLineColor = "rgba(8,224,8,1)";

  this.drawTimeSelLine(context, moveTimeX, moveLineColor, moveBgColor, moveTimeString);
}

/*
 *
 * context: ä¸Šä¸‹æ–‡
 * cornX: å°–å˜´xåæ ‡
 * cornY: å°–å˜´Yåæ ‡
 * width : å†…å®¹å®½åº¦
 * height : å†…å®¹å®½åº¦
 * text: å†…å®¹
 * bgColor : èƒŒæ™¯é¢œè‰²
 * textColor : æ–‡å­—é¢œè‰²
 * left : æ˜¾ç¤ºåœ¨å·¦è¾¹è¿˜æ˜¯å³è¾¹
 */
PbFileBarCanvas.prototype.drawTimeText = function(context, cornX, cornY, width, height, text, bgColor, textColor, left) {
  var x;
  var y;
  var cornWidth = 2;
  context.fillStyle = bgColor;
  if(left) {

    x = cornX - cornWidth - width;
    y = cornY - height / 2;

  } else {

    x = cornX + cornWidth;
    y = cornY - height / 2;
  }

  var radius = 1;
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  if(left) {

    context.lineTo(x + width, y + height / 2 - cornWidth);
    context.lineTo(cornX, cornY);
    context.lineTo(x + width, y + height / 2 + cornWidth);

  }
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y+ height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  if(!left) {

    context.lineTo(x, y + height / 2 + cornWidth);
    context.lineTo(cornX, cornY);
    context.lineTo(x , y + height / 2 - cornWidth);
  }
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
  context.fill();
  context.fillStyle = textColor;
  if(left) {

    context.fillText(text, x + width / 2, cornY);
  } else {

    context.fillText(text, x + width / 2, cornY);
  }
  context.stroke();
}

// ç»˜åˆ¶é€‰æ‹©çš„æ—¶é—´çº¿
PbFileBarCanvas.prototype.drawTimeSelLine = function(context, moveX, lineColor, bgColor, time) {

  context.beginPath();
  var lineHeight = toLineUsePix(this.markHeight + this.grid_rows * this.itemHeight);
  context.strokeStyle = lineColor;
  context.fillStyle = lineColor;
  context.moveTo(moveX, 0.5);
  context.lineTo(moveX, lineHeight);
  var timeX;
  if(moveX >= this.timeCenterX) {

    timeX = moveX - this.timeShowWidth;
  } else {

    timeX = moveX;
  }
  context.textAlign = "start";
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  var timeY = this.offset;
  context.fillStyle = bgColor;
  context.fillRect(timeX, timeY, this.timeShowWidth, this.markHeight);

  context.fillStyle = lineColor;
  context.fillText(time, timeX + this.timeShowWidth / 2, timeY + this.markHeight / 2);

  context.stroke();
}

PbFileBarCanvas.prototype.drawFile = function(context, fileInfo, position, bgColor, index) {
  var fileY = this.markHeight + position * this.itemHeight + (this.itemHeight - this.fileHeight) / 2;
  var startSecond = fileInfo.startTime.getTime() / 1000;
  var startX = this.secondToPix((fileInfo.startTime.getTime() - this.startTime.getTime()) / 1000) + this.translateX;
  var endSecond = fileInfo.endTime.getTime() / 1000;
  var fileWidth = this.secondToPix(endSecond - startSecond);

  startx = startX < 0 ? 0 : startX;

  if(fileWidth < 0 ) {
    return;
  }
  context.fillStyle = bgColor;
  context.fillRect(startX, fileY, fileWidth, this.fileHeight);

}

PbFileBarCanvas.prototype.getColorByfileType = function(fileType) {

  var blueColor = "rgba(60, 191, 252, 1.0)";

  var oringeColor = "rgba(244, 104, 66, 1.0)";

  var greenColor = "rgba(163, 201, 74,1.0)";

  var selColor;

  switch(fileType) {
    case EnumPbShowFileType.SCHEDULE : {

      selColor = blueColor;
      break;
    }

    case EnumPbShowFileType.MANUAL : {

      selColor = greenColor;
      break;
    }

    case EnumPbShowFileType.ALARM : {

      selColor = oringeColor;
      break;
    }


    default:

      selColor = blueColor;
      break;
  }

  return selColor;
}

PbFileBarCanvas.prototype.getHoursSecond = function(time) {

  return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
}

PbFileBarCanvas.prototype.drawScrollBar = function() {

  var canvas = document.getElementById("playback_toolbar_scroll");
  if(null == canvas) {

    return;
  }
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, this.scrollBgWidth, this.scrollBgHeight); //Ã¦Â¸â€¦Ã§Â©ÂºÃ¥â€ â€¦Ã¥Â®Â¹

  // ç»˜åˆ¶èƒŒæ™¯
  var gradient = context.createLinearGradient(0,0,0,300);

  gradient.addColorStop(0,"#3d3a39");
  gradient.addColorStop(1,"#8b8786");

  context.fillStyle = gradient;

  context.fillRect(0, 0, this.scrollBgWidth, this.scrollBgHeight);
  //ç»˜åˆ¶æ»‘å—
  if(this.scrollViewX < 0) {

    this.scrollViewX = 0;
  }
  if(this.scrollViewX + this.scrollViewWidth > this.scrollBgWidth) {

    this.scrollViewX = this.scrollBgWidth - this.scrollViewWidth;
  }
  context.fillStyle = "rgba(242,240,234, 0.8)";
  context.roundRect(this.scrollViewX, this.scrollViewY, this.scrollViewWidth, this.scrollViewHeight, 5, true, true);
}

PbFileBarCanvas.prototype.redrawPlaybackTool = function() {

  this.drawPBToolbar();
  this.drawScrollBar();
}

CanvasRenderingContext2D.prototype.roundRect =
function(x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  this.beginPath();
  this.moveTo(x + radius, y);
  this.lineTo(x + width - radius, y);
  this.quadraticCurveTo(x + width, y, x + width, y + radius);
  this.lineTo(x + width, y + height - radius);
  this.quadraticCurveTo(x + width, y + height, x + width - radius, y+ height);
  this.lineTo(x + radius, y + height);
  this.quadraticCurveTo(x, y + height, x, y + height - radius);
  this.lineTo(x, y + radius);
  this.quadraticCurveTo(x, y, x + radius, y);
  this.closePath();
  if (stroke) {
    this.stroke();
  }
  if (fill) {
    this.fill();
  }
};


PbFileBarCanvas.prototype.initPlaybackToolbar = function() {

  var canvas = document.getElementById("playback_toolbar_bg");
  if(null == canvas) {

    return;
  }
  var content = document.getElementById("playbaack_toolbar_content");
  var contentWidth = content.clientWidth;
  var context = canvas.getContext("2d");
  canvas.width = contentWidth;
  var bgWidth = canvas.width;
  var bgHeight = canvas.height;

  this.grid_cols = 24;
  this.baseItemWidth = (bgWidth - this.channelWidth) / this.grid_cols;
  this.itemWidth = this.baseItemWidth * this.scale;
  this.itemHeight = (bgHeight) / (this.grid_rows + 1);
  this.markHeight = this.itemHeight;
  this.translateX = this.dx + this.channelWidth;

  this.timeCenterX = toLineUsePix((canvas.width - this.channelWidth) / 2);

  var curDate = new Date();
  var curSecond = curDate.getHours() * 3600 + curDate.getMinutes() * 60 + curDate.getSeconds();
  this.curTimeSecond = curSecond;
  this.curTimeX = this.secondToPix(this.curTimeSecond);

  canvas.onmousemove = function(e) {

    if(null == g_pbFileBarCanvas) {

      return;

    }
    if(g_pbFileBarCanvas.isScrollView) {
      return;
    }
    var point={};
    point = getPointOnCanvas(canvas, e.pageX, e.pageY);
    if(point.x < g_pbFileBarCanvas.channelWidth) {
      return;
    }
    g_pbFileBarCanvas.mouse = point;
    g_pbFileBarCanvas.isMouseIn = true;
    g_pbFileBarCanvas.redrawPlaybackTool();

  };

  canvas.onmouseout = canvas.onmouseleave = function(e) {
    if(null == g_pbFileBarCanvas) {

      return;

    }
    if(g_pbFileBarCanvas.isScrollView) {
      return;
    }
    g_pbFileBarCanvas.isMouseIn = false;
  };

  canvas.onmousedown = function(e) {
    if(null == g_pbFileBarCanvas) {

      return;

    }
    if(g_pbFileBarCanvas.isScrollView) {
      return;
    }
    var point={};
    point = getPointOnCanvas(canvas, e.pageX, e.pageY);
    if(point.x < g_pbFileBarCanvas.channelWidth) {
      return;
    }
    g_pbFileBarCanvas.mouse = point;
    g_pbFileBarCanvas.curTimeSecond = g_pbFileBarCanvas.moveTimeSecond;
    g_pbFileBarCanvas.isMouseIn = true;
    g_pbFileBarCanvas.redrawPlaybackTool();
    PlayerPlayback.timelineDidSeekToDate(g_pbFileBarCanvas.secondeToDate(g_pbFileBarCanvas.curTimeSecond));
  }

  if (canvas.addEventListener) {
    canvas.addEventListener('DOMMouseScroll', this.gridScrollFunc, false);
  }//W3C
  canvas.onmousewheel = g_pbFileBarCanvas.gridScrollFunc;


  // scrollbar
  var scrollCanvas = document.getElementById("playback_toolbar_scroll");
  if(null == scrollCanvas) {

    return;
  }
  var scrollContext = scrollCanvas.getContext("2d");
  scrollCanvas.width = contentWidth;
  this.scrollBgWidth = scrollCanvas.width;
  this.scrollBgHeight = scrollCanvas.height;
  this.updateScrollWidth();
  this.scrollViewHeight = this.scrollBgHeight - 4;
  this.scrollViewY = (this.scrollBgHeight - this.scrollViewHeight) / 2;
  this.updateScrollViewX();
  this.isScrollView = false;
  this.isScrollMouseOut = false;

  scrollCanvas.onmousedown = this.scrollbarMouseDown;
  scrollCanvas.onmousemove = this.scrollbarMouseMove;
  scrollCanvas.onmouseup = this.scrollbarMouseUp;
  $('#playbaack_toolbar_content').on('mouseleave', this.scrollbarMouseUp);
  scrollCanvas.onmouseout = this.scrollbarMouseOut;

  document.addEventListener('mousedown', this.documentMouseDown, false);
  document.addEventListener('mousemove', this.documentMouseMove, false);
  document.addEventListener('mouseup', this.documentMouseUp, false);

  //fileData
  this.fileHeight = 0.75 * this.itemHeight;

  this.redrawPlaybackTool();
}

PbFileBarCanvas.prototype.setChannelMode = function(channelMode) {

  if(EnumPbChannelMode.FOUR == channelMode) {

    this.grid_rows = 4;
  } else if(EnumPbChannelMode.ONE == channelMode) {

    this.grid_rows = 1;
  } else {

    this.grid_rows = 4;
  }

  this.redrawPlaybackTool();
}

PbFileBarCanvas.prototype.updateTranslateX = function() {

  this.translateX = this.channelWidth - (this.scale * this.grid_cols* this.baseItemWidth) * (this.scrollViewX / this.scrollBgWidth);
}

/*
 * update scrollbar width
 *
 */
PbFileBarCanvas.prototype.updateScrollWidth = function() {

  if(0 == this.scale) {

    this.scale = 1;
  }
  this.scrollViewWidth = (24 / (this.scale * this.grid_cols)) * this.scrollBgWidth;
}

/*
 * update scrollbar x location
 *
 */
PbFileBarCanvas.prototype.updateScrollViewX = function() {

  if(0 == this.scale) {

    this.scale = 1;
  }
  this.scrollViewX = (this.channelWidth - this.translateX) / (this.grid_cols * this.baseItemWidth * this.scale) * this.scrollBgWidth;
}

PbFileBarCanvas.prototype.isInScrollView = function(canvas, e) {

  this.scrollMouse = getPointOnCanvas(canvas, e.pageX  , e.pageY)
  if(this.scrollMouse.x >= this.scrollViewX && this.scrollMouse.x <= this.scrollViewWidth + this.scrollViewX) {

    return true;
  }
  return false;
}

PbFileBarCanvas.prototype.scrollbarMouseDown = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  var scrollCanvas = document.getElementById("playback_toolbar_scroll");
  if(null == scrollCanvas) {

    return;
  }
  g_pbFileBarCanvas.isScrollView = true;
  if(!(g_pbFileBarCanvas.isInScrollView(scrollCanvas, e))) {

    g_pbFileBarCanvas.scrollMouse = getPointOnCanvas(scrollCanvas, e.pageX, e.pageY);
    g_pbFileBarCanvas.scrollViewX = g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollViewWidth / 2;
    if(g_pbFileBarCanvas.scrollViewX > g_pbFileBarCanvas.scrollBgWidth - g_pbFileBarCanvas.scrollViewWidth) {

      g_pbFileBarCanvas.scrollViewX = g_pbFileBarCanvas.scrollBgWidth - g_pbFileBarCanvas.scrollViewWidth;
    }
    g_pbFileBarCanvas.updateTranslateX();
    g_pbFileBarCanvas.redrawPlaybackTool();
  } else {

    g_pbFileBarCanvas.scrollDx = g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollViewX;
  }
}

PbFileBarCanvas.prototype.scrollbarMouseMove = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  if(g_pbFileBarCanvas.isScrollView) {

    var scrollCanvas = document.getElementById("playback_toolbar_scroll");
    if(null == scrollCanvas) {

      return;
    }

    g_pbFileBarCanvas.scrollMouse = getPointOnCanvas(scrollCanvas, e.pageX, e.pageY);
    var scrollX;
    if(!g_pbFileBarCanvas.isInScrollView(scrollCanvas, e)) {

      scrollX = Math.round(g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollViewWidth / 2);
    } else {

      scrollX = Math.round(g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollDx);
    }
    if(scrollX < 0) {

      scrollX = 0;
    }
    if(scrollX + g_pbFileBarCanvas.scrollViewWidth > g_pbFileBarCanvas.scrollBgWidth) {

      scrollX = g_pbFileBarCanvas.scrollBgWidth - g_pbFileBarCanvas.scrollViewWidth;
    }
    g_pbFileBarCanvas.scrollViewX = scrollX;
    g_pbFileBarCanvas.updateTranslateX();
    g_pbFileBarCanvas.redrawPlaybackTool();
  }

}

PbFileBarCanvas.prototype.scrollbarMouseUp = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  g_pbFileBarCanvas.isScrollView = false;
  g_pbFileBarCanvas.isScrollMouseOut = false;
}

PbFileBarCanvas.prototype.scrollbarMouseOut = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  g_pbFileBarCanvas.isScrollMouseOut = true;
}

PbFileBarCanvas.prototype.documentMouseDown = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  g_pbFileBarCanvas.isScrollView = true;

}

PbFileBarCanvas.prototype.documentMouseMove = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  if(g_pbFileBarCanvas.isScrollView && g_pbFileBarCanvas.isScrollMouseOut && !g_pbFileBarCanvas.isMouseIn) {

    var scrollCanvas = document.getElementById("playback_toolbar_scroll");
    if(null == scrollCanvas) {

      return;
    }
    g_pbFileBarCanvas.scrollMouse = getPointOnCanvas(scrollCanvas, e.pageX, e.pageY);
    var scrollX;
    if(!g_pbFileBarCanvas.isInScrollView(scrollCanvas, e)) {

      scrollX = Math.round(g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollViewWidth / 2);
    } else {

      scrollX = Math.round(g_pbFileBarCanvas.scrollMouse.x - g_pbFileBarCanvas.scrollDx);
    }
    if(scrollX < 0) {

      scrollX = 0;
    }
    if(scrollX + g_pbFileBarCanvas.scrollViewWidth > g_pbFileBarCanvas.scrollBgWidth) {

      scrollX = g_pbFileBarCanvas.scrollBgWidth - g_pbFileBarCanvas.scrollViewWidth;
    }
    g_pbFileBarCanvas.scrollViewX = scrollX;
    g_pbFileBarCanvas.updateTranslateX();
    g_pbFileBarCanvas.redrawPlaybackTool();
  }

}

PbFileBarCanvas.prototype.documentMouseUp = function(e) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  if(g_pbFileBarCanvas.isScrollView) {

    g_pbFileBarCanvas.isScrollView = false;
    g_pbFileBarCanvas.isScrollMouseOut = false;
  }
}


PbFileBarCanvas.prototype.scrollbarMove = function(event) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  var scrollCanvas = document.getElementById("playback_toolbar_scroll");
  if(null == scrollCanvas) {

    return;
  }
  if (event.targetTouches.length == 1) {
    event.preventDefault();// é˜»æ­¢æµè§ˆå™¨é»˜è®¤äº‹ä»¶ï¼Œé‡è¦
    var touch = event.targetTouches[0];
    // æŠŠå…ƒç´ æ”¾åœ¨æ‰‹æŒ‡æ‰€åœ¨çš„ä½ç½®
    g_pbFileBarCanvas.scrollViewX = getPointOnCanvas(scrollCanvas, event.pageX, event.pageY);
  }
  g_pbFileBarCanvas.redrawPlaybackTool();
}

PbFileBarCanvas.prototype.autoScale = function() {
  var intScale = g_pbFileBarCanvas.getScale();

  switch (intScale) {
  case 1:
    g_pbFileBarCanvas.division = 60;
    break;
  case 2:
    g_pbFileBarCanvas.division = 30;
    break;
  case 3:
    g_pbFileBarCanvas.division = 10;
    break;
  case 4:
    g_pbFileBarCanvas.division = 5;
    break;
  case 5:
    g_pbFileBarCanvas.division = 1;
    break;
  default:
    g_pbFileBarCanvas.division = 60;
    break;
  }

  g_pbFileBarCanvas.grid_cols = (60 / g_pbFileBarCanvas.division) * 24;

  g_pbFileBarCanvas.itemWidth = g_pbFileBarCanvas.baseItemWidth * g_pbFileBarCanvas.scale;
  var moveLocation = g_pbFileBarCanvas.secondToPix(g_pbFileBarCanvas.moveTimeSecond);
  g_pbFileBarCanvas.translateX = g_pbFileBarCanvas.mouse.x - moveLocation;
  g_pbFileBarCanvas.updateScrollWidth();
  g_pbFileBarCanvas.updateScrollViewX();

};

PbFileBarCanvas.prototype.getScale = function() {
  return parseInt(g_pbFileBarCanvas.scale);
};

PbFileBarCanvas.prototype.setScale = function(s) {
  var r = g_pbFileBarCanvas.getScaleRange();
  if (s > r.max || s < r.min) {
    return false;
  }
  g_pbFileBarCanvas.scale = s;
  return true;
};

PbFileBarCanvas.prototype.getScaleRange = function() {
  return {
    "max": g_pbFileBarCanvas.maxScale,
    "min": 1
  };
};

PbFileBarCanvas.prototype.gridScrollFunc = function (event) {
  if(null == g_pbFileBarCanvas) {

    return;
  }
  var direct = 0;
  var e = event || window.event;
  var deltaY = 0;
  var deltaX = 0;

  if (e.wheelDelta) {//IE/Opera/Chrome

    deltaY = e.wheelDelta;
    if(isMac()) {
      deltaY = -e.wheelDeltaY;
      deltaX = -e.wheelDeltaX;
    } else {
      if (e.wheelDelta !== undefined) {
        deltaY = e.wheelDelta;
        deltaX = 0;
      } else {
        deltaY = e.wheelDeltaY;
        deltaX = e.wheelDeltaX;
      }
    }
  } else if (e.detail) {//Firefox

    deltaY = -e.detail * 10;
  }
  if(Math.abs(deltaY) > Math.abs(deltaX)) {

    g_pbFileBarCanvas.scale = g_pbFileBarCanvas.scale + deltaY / 360;
    if(g_pbFileBarCanvas.scale < 1) {

      g_pbFileBarCanvas.scale = 1;
    } else if(g_pbFileBarCanvas.scale > g_pbFileBarCanvas.maxScale) {

      g_pbFileBarCanvas.scale = g_pbFileBarCanvas.maxScale;
    }
    g_pbFileBarCanvas.autoScale();

  } else {
    g_pbFileBarCanvas.scrollViewX = g_pbFileBarCanvas.scrollViewX + deltaX;
    if(g_pbFileBarCanvas.scrollViewX < 0) {

      g_pbFileBarCanvas.scrollViewX = 0;
    }
    if(g_pbFileBarCanvas.scrollViewX + g_pbFileBarCanvas.scrollViewWidth > g_pbFileBarCanvas.scrollBgWidth) {

      g_pbFileBarCanvas.scrollViewX = g_pbFileBarCanvas.scrollBgWidth - g_pbFileBarCanvas.scrollViewWidth;
    }
    g_pbFileBarCanvas.updateTranslateX();
  }

  g_pbFileBarCanvas.redrawPlaybackTool();
  return false;
}


function toLineUsePix(num) {
  return Math.round(num) + 0.5;
}

function getPointOnCanvas(canvas, x, y) {

  var bbox = canvas.getBoundingClientRect();

  return { x: x- bbox.left *(canvas.width / bbox.width),

  y:y - bbox.top  * (canvas.height / bbox.height)

  };

}

PbFileBarCanvas.prototype.pixToSecond = function(pix) {
  if(0 == this.itemWidth) {
    return 0;
  }
  return ((this.division * 60) / this.itemWidth) * pix;
}

PbFileBarCanvas.prototype.secondToPix = function(second) {

  return (this.itemWidth / (this.division * 60)) * second;
}

PbFileBarCanvas.prototype.formatSeconds = function(value) {
  var second = parseInt(value);// ç§’
  var min = 0;// åˆ†
  var hour = 0;// å°æ—¶
  if(second >= 60) {
    min = parseInt(second / 60);
    second = parseInt(second % 60);
    if(min >= 60) {
      hour = parseInt(min / 60);
      min = parseInt(min % 60);
    }
  }

  var result = "";

  var result = oneToZeroOne(parseInt(hour)) + ":" +
  oneToZeroOne(parseInt(min)) + ":" + oneToZeroOne(parseInt(second));
  return result;
}

function oneToZeroOne(num) {

  var numString = num.toString();
  numString.length == 1 ? numString = "0" + numString : numString = numString;
  return numString;
}

PbFileBarCanvas.prototype.setCanvasPositionArray = function(positions) {

  this.canvasPositions = positions;
  this.redrawPlaybackTool();
}

PbFileBarCanvas.prototype.setSearchStartTime = function(startDate) {

  this.startTime = startDate;
}

PbFileBarCanvas.prototype.secondeToDate = function(seconde) {

  var mSecond = seconde * 1000 + this.startTime.getTime();

  return new Date(mSecond);
}

PbFileBarCanvas.prototype.refreshCanvasByCurSecond = function(second) {
  //update curent time
  this.curTimeSecond = second;

  this.redrawPlaybackTool();
}

// view-source:http://192.168.1.252/js/pbFileInfo.js?timeVersion=1620806528092

// JavaScript Document

function _FileInfo() {
  this.channelIndex = -1;
	this.fileName = 0;
	this.startTime = 0;
	this.endTime = 0;
	this.type = 0;
  this.duration = 0;
}


function FileInfo(iChannelIndex, iFileName, iStartTime, iEndTime, iFileSize, iType, streamType) {
  this.channelIndex = iChannelIndex;
	this.fileName = iFileName;
	this.startTime = iStartTime;
	this.endTime = iEndTime;
	this.type = iType;
  this.duration = iEndTime.getTime() - iStartTime.getTime();
  this.streamType = streamType;
	this.size = iFileSize;
}
