const _0x5d90db=_0x6e1f;(function(_0x24d76c,_0x417026){const _0x3934dc=_0x6e1f,_0x409f34=_0x24d76c();while(!![]){try{const _0x4cfa41=parseInt(_0x3934dc(0xed))/0x1*(-parseInt(_0x3934dc(0xef))/0x2)+parseInt(_0x3934dc(0x104))/0x3+parseInt(_0x3934dc(0x10a))/0x4*(parseInt(_0x3934dc(0x101))/0x5)+-parseInt(_0x3934dc(0xf8))/0x6+-parseInt(_0x3934dc(0xf2))/0x7*(-parseInt(_0x3934dc(0x10e))/0x8)+parseInt(_0x3934dc(0xf6))/0x9+-parseInt(_0x3934dc(0xf0))/0xa;if(_0x4cfa41===_0x417026)break;else _0x409f34['push'](_0x409f34['shift']());}catch(_0x4a3355){_0x409f34['push'](_0x409f34['shift']());}}}(_0x14c8,0x57274));import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();function _0x14c8(){const _0x10b5d5=['184UFZlkf','friendUid','jkeAr','getFriends','开始获取好友列表','获取好友列表超时','613921sxNnsp','push','2ebyoMa','4830650gKakYu','sSrfY','81284CyEMsa','approvalFriendRequest','getBuddyService','nbjed','4085010bxbJes','getBuddyList','2314320zqoTdO','set','session','onBuddyListChange','mYCGi','LrPsD','bdKyy','rHmbs','bMJFx','91380bYbqII','reqTime','onLoginSuccess','2095116ctrGGY','QjJIv','handleFriendRequest','uid','获取好友列表完成','Kyync','92OSXxDD','buddyList','uin','addListener'];_0x14c8=function(){return _0x10b5d5;};return _0x14c8();}function _0x6e1f(_0xcd1082,_0x5d4c43){const _0x14c83d=_0x14c8();return _0x6e1f=function(_0x6e1ff1,_0x4f413c){_0x6e1ff1=_0x6e1ff1-0xea;let _0x4f990d=_0x14c83d[_0x6e1ff1];return _0x4f990d;},_0x6e1f(_0xcd1082,_0x5d4c43);}buddyListener[_0x5d90db(0xfb)]=_0x5744b0=>{const _0x82bd68=_0x5d90db,_0x227be2={'sSrfY':function(_0x431ad6,_0x5c27df){return _0x431ad6(_0x5c27df);}};for(const [_0x1d1533,_0xec0bdc]of buddyChangeTasks){_0x227be2[_0x82bd68(0xf1)](_0xec0bdc,_0x5744b0),buddyChangeTasks['delete'](_0x1d1533);}},setTimeout(()=>{const _0x2ed984=_0x5d90db;napCatCore[_0x2ed984(0x103)](()=>{const _0x44d31e=_0x2ed984;napCatCore[_0x44d31e(0x10d)](buddyListener);});},0x64);export class NTQQFriendApi{static async[_0x5d90db(0xea)](_0x32de31=![]){const _0x48b08d=_0x5d90db,_0x288b91={'LrPsD':function(_0x442fab,_0x49808e){return _0x442fab(_0x49808e);},'bdKyy':_0x48b08d(0xec),'mYCGi':_0x48b08d(0x108),'rHmbs':_0x48b08d(0xeb),'QjJIv':function(_0x47ec31,_0x89c564,_0x200124){return _0x47ec31(_0x89c564,_0x200124);},'NvRGy':function(_0xc59d70){return _0xc59d70();}};return new Promise((_0x32f1e2,_0x331e5f)=>{const _0x1ad213=_0x48b08d,_0x4f7658={'nbjed':_0x288b91[_0x1ad213(0xfc)],'bMJFx':function(_0x13d235,_0x51359a){const _0x1e3247=_0x1ad213;return _0x288b91[_0x1e3247(0xfd)](_0x13d235,_0x51359a);},'Kyync':function(_0x527c70,_0x555e27,_0x4d031a){return _0x527c70(_0x555e27,_0x4d031a);},'jkeAr':_0x288b91[_0x1ad213(0xff)]};let _0x1317c0=![];_0x288b91[_0x1ad213(0x105)](setTimeout,()=>{const _0x2a78fe=_0x1ad213;!_0x1317c0&&(_0x288b91[_0x2a78fe(0xfd)](logDebug,_0x288b91[_0x2a78fe(0xfe)]),_0x331e5f('获取好友列表超时'));},0x1388);const _0x254032=[],_0x321bb8=_0x304f26=>{const _0x7f8575=_0x1ad213;for(const _0x440f1c of _0x304f26){for(const _0x40aae7 of _0x440f1c[_0x7f8575(0x10b)]){_0x254032[_0x7f8575(0xee)](_0x40aae7),uid2UinMap[_0x40aae7[_0x7f8575(0x107)]]=_0x40aae7[_0x7f8575(0x10c)];}}_0x1317c0=!![],logDebug(_0x4f7658[_0x7f8575(0xf5)],_0x254032),_0x4f7658[_0x7f8575(0x100)](_0x32f1e2,_0x254032);};buddyChangeTasks[_0x1ad213(0xf9)](_0x288b91['NvRGy'](randomUUID),_0x321bb8),napCatCore[_0x1ad213(0xfa)][_0x1ad213(0xf4)]()[_0x1ad213(0xf7)](_0x32de31)['then'](_0x1e963c=>{const _0x1bea4b=_0x1ad213;_0x4f7658[_0x1bea4b(0x109)](logDebug,_0x4f7658[_0x1bea4b(0x110)],_0x1e963c);});});}static async[_0x5d90db(0x106)](_0x15a498,_0x30ed3c){const _0x4a1120=_0x5d90db;napCatCore[_0x4a1120(0xfa)][_0x4a1120(0xf4)]()?.[_0x4a1120(0xf3)]({'friendUid':_0x15a498[_0x4a1120(0x10f)],'reqTime':_0x15a498[_0x4a1120(0x102)],'accept':_0x30ed3c});}}