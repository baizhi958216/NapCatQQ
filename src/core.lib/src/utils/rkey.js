function _0x5d95(_0x3ee631,_0x53a901){const _0x16872d=_0x1687();return _0x5d95=function(_0x5d95e6,_0xe25baf){_0x5d95e6=_0x5d95e6-0x1bd;let _0x4d5989=_0x16872d[_0x5d95e6];return _0x4d5989;},_0x5d95(_0x3ee631,_0x53a901);}const _0x35d1b9=_0x5d95;(function(_0x2c21ad,_0x138c81){const _0xbffae1=_0x5d95,_0x2d6ca3=_0x2c21ad();while(!![]){try{const _0x3c48d8=-parseInt(_0xbffae1(0x1bf))/0x1+-parseInt(_0xbffae1(0x1cc))/0x2*(-parseInt(_0xbffae1(0x1c6))/0x3)+-parseInt(_0xbffae1(0x1d0))/0x4+parseInt(_0xbffae1(0x1c0))/0x5+-parseInt(_0xbffae1(0x1c3))/0x6*(-parseInt(_0xbffae1(0x1c7))/0x7)+-parseInt(_0xbffae1(0x1c8))/0x8+-parseInt(_0xbffae1(0x1c5))/0x9*(-parseInt(_0xbffae1(0x1be))/0xa);if(_0x3c48d8===_0x138c81)break;else _0x2d6ca3['push'](_0x2d6ca3['shift']());}catch(_0x46d064){_0x2d6ca3['push'](_0x2d6ca3['shift']());}}}(_0x1687,0x8a7b3));function _0x1687(){const _0x5a509c=['isExpired','434gPRtQy','rtKOG','expired_time','GjAhJ','4105084WxjFKp','rkeyData','refreshRkey','getTime','serverUrl','710090zwmYHK','1115026SvomdG','1784720ekApRe','获取rkey失败','IHMIp','198omqSAa','http://napcat-sign.wumiao.wang:2082/rkey','99ePwHtS','7536mLqZol','240233qtmXSz','857264phHlRf','getRkey','GET'];_0x1687=function(){return _0x5a509c;};return _0x1687();}import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';class RkeyManager{['serverUrl']='';[_0x35d1b9(0x1d1)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x1edb7c){const _0x364dfc=_0x35d1b9;this[_0x364dfc(0x1bd)]=_0x1edb7c;}async[_0x35d1b9(0x1c9)](){const _0x485691=_0x35d1b9,_0x4e3dd2={'IHMIp':function(_0x4ad572,_0x282f51,_0x696c5d){return _0x4ad572(_0x282f51,_0x696c5d);},'HDbcs':_0x485691(0x1c1)};if(this[_0x485691(0x1cb)]())try{await this[_0x485691(0x1d2)]();}catch(_0x3f41e7){_0x4e3dd2[_0x485691(0x1c2)](logError,_0x4e3dd2['HDbcs'],_0x3f41e7);}return this['rkeyData'];}['isExpired'](){const _0x26c540=_0x35d1b9,_0x464e94={'rtKOG':function(_0x1c3275,_0x22a9af){return _0x1c3275/_0x22a9af;},'GjAhJ':function(_0x57cb07,_0x552a78){return _0x57cb07>_0x552a78;}},_0x31bbe1=_0x464e94[_0x26c540(0x1cd)](new Date()[_0x26c540(0x1d3)](),0x3e8);return _0x464e94[_0x26c540(0x1cf)](_0x31bbe1,this[_0x26c540(0x1d1)][_0x26c540(0x1ce)]);}async[_0x35d1b9(0x1d2)](){const _0x519335=_0x35d1b9,_0x512f8e={'KeqYc':_0x519335(0x1ca)};this[_0x519335(0x1d1)]=await RequestUtil['HttpGetJson'](this[_0x519335(0x1bd)],_0x512f8e['KeqYc']);}}export const rkeyManager=new RkeyManager(_0x35d1b9(0x1c4));