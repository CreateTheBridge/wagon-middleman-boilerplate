/*!
 * VERSION: beta 0.6.3
 * DATE: 2014-12-31
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(e,t,s){var o=function(){e.call(this,"cssRule"),this._overwriteProps.length=0},n=window.document,i=s.prototype.setRatio,l=o.prototype=new s;return l._propName="cssRule",l.constructor=o,o.version="0.6.3",o.API=2,o.getRule=function(e){var t,s,o,i,l=n.all?"rules":"cssRules",r=n.styleSheets,u=r.length,c=":"===e.charAt(0);for(e=(c?"":",")+e.toLowerCase()+",",c&&(i=[]);--u>-1;){try{if(s=r[u][l],!s)continue;t=s.length}catch(p){console.log(p);continue}for(;--t>-1;)if(o=s[t],o.selectorText&&-1!==(","+o.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!c)return o.style;i.push(o.style)}}return i},l._onInitTween=function(e,t,o){if(void 0===e.cssText)return!1;var i=e._gsProxy=e._gsProxy||n.createElement("div");return this._ss=e,this._proxy=i.style,i.style.cssText=e.cssText,s.prototype._onInitTween.call(this,i,t,o),!0},l.setRatio=function(e){i.call(this,e),this._ss.cssText=this._proxy.cssText},e.activate([o]),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();