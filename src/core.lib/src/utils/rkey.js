const _0x20cd4b=_0x7394;(function(_0x3c304d,_0x90a571){const _0x149216=_0x7394,_0xf5552c=_0x3c304d();while(!![]){try{const _0x2d3954=parseInt(_0x149216(0x1b6))/0x1*(-parseInt(_0x149216(0x1b9))/0x2)+-parseInt(_0x149216(0x1a4))/0x3+parseInt(_0x149216(0x1b0))/0x4*(parseInt(_0x149216(0x1aa))/0x5)+-parseInt(_0x149216(0x1ac))/0x6*(parseInt(_0x149216(0x1b1))/0x7)+parseInt(_0x149216(0x1a3))/0x8+-parseInt(_0x149216(0x1ab))/0x9*(parseInt(_0x149216(0x1b7))/0xa)+parseInt(_0x149216(0x1b4))/0xb;if(_0x2d3954===_0x90a571)break;else _0xf5552c['push'](_0xf5552c['shift']());}catch(_0x381aaa){_0xf5552c['push'](_0xf5552c['shift']());}}}(_0x3db7,0xdc95f));import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x20cd4b(0x1b8)]='';[_0x20cd4b(0x1a5)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x2c8ee4){const _0x36b417=_0x20cd4b;this[_0x36b417(0x1b8)]=_0x2c8ee4;}async['getRkey'](){const _0x37faf1=_0x20cd4b,_0x468f3a={'TowEn':function(_0x3c69a1,_0x3e1548,_0x52f958){return _0x3c69a1(_0x3e1548,_0x52f958);}};if(this[_0x37faf1(0x1b3)]())try{await this[_0x37faf1(0x1b2)]();}catch(_0x1862ef){_0x468f3a[_0x37faf1(0x1a7)](logError,_0x37faf1(0x1b5),_0x1862ef);}return this[_0x37faf1(0x1a5)];}['isExpired'](){const _0x5f44ef=_0x20cd4b,_0x59f46f={'DJgQl':function(_0x4dc90f,_0xa1f559){return _0x4dc90f/_0xa1f559;},'xzlAn':function(_0x464340,_0x48ba59){return _0x464340>_0x48ba59;}},_0x504967=_0x59f46f[_0x5f44ef(0x1ae)](new Date()[_0x5f44ef(0x1a6)](),0x3e8);return _0x59f46f[_0x5f44ef(0x1ba)](_0x504967,this[_0x5f44ef(0x1a5)][_0x5f44ef(0x1a8)]);}async[_0x20cd4b(0x1b2)](){const _0x4e0c6d=_0x20cd4b,_0x171110={'OQWTk':_0x4e0c6d(0x1af)};this[_0x4e0c6d(0x1a5)]=await RequestUtil[_0x4e0c6d(0x1ad)](this[_0x4e0c6d(0x1b8)],_0x171110[_0x4e0c6d(0x1a9)]);}}export const rkeyManager=new RkeyManager('http://napcat-sign.wumiao.wang:2082/rkey');function _0x7394(_0xf20c91,_0x26b7f4){const _0x3db7c2=_0x3db7();return _0x7394=function(_0x7394bc,_0x5c5e96){_0x7394bc=_0x7394bc-0x1a3;let _0x4db9bb=_0x3db7c2[_0x7394bc];return _0x4db9bb;},_0x7394(_0xf20c91,_0x26b7f4);}function _0x3db7(){const _0x473d83=['HttpGetJson','DJgQl','GET','47420JokVXy','12344290TfSjJT','refreshRkey','isExpired','26940760vGVHYS','获取rkey失败','38cqyhVt','3192790NbpLke','serverUrl','7488lwEGJD','xzlAn','2572904RhXkhR','1878594yRRmaK','rkeyData','getTime','TowEn','expired_time','OQWTk','415AYDtdu','9maWHUN','6Qmcdhj'];_0x3db7=function(){return _0x473d83;};return _0x3db7();}