// @ts-nocheck
// ⚠️ 本文件由 build 自动生成（小组件源码拼接+分段混淆），勿手改
// 源码: 03-Scriptable项目/00-主工程/小组件源码/scripting版/源码/
const BG_PAGE = { light: "#f4f4f7", dark: "#1c1c1e" };
const BG_CARD = { light: "#ffffff", dark: "#2c2c2e" };
const TEXT_MAIN = { light: "#1c1c1e", dark: "#ffffff" };
const TEXT_SUB = { light: "#8e8e93", dark: "#98989d" };
const TEXT_FAINT = { light: "#a9a9b2", dark: "#8e8e93" };
const LINE = { light: "#d1d1d6", dark: "#48484a" };
const BAR_TRACK = { light: "#e5e5ea", dark: "#3a3a3c" };
const C_OK = "#34c759";
const C_WARN = "#ff9500";
const C_BAD = "#ff3b30";
const C_BLUE = "#007aff";
const C_GOLD = "#D4AF37";
const SIG = { ok: C_OK, warn: C_WARN, bad: C_BAD };
const C_GRAY = "#8e8e93";
const INK = "rgba(120,120,128,1)";
const INK_TRACK = "rgba(120,120,128,0.28)";
const INK_DIM = "rgba(120,120,128,0.45)";
const R_CARD_MEDIUM = 14;
const R_CARD_SMALL = 12;
const R_TAG = 7;
const R_BAR = 2;
const TAG_PAD = { top: 3, leading: 7, bottom: 3, trailing: 7 };
const BAR_FALLBACK_W = 50;
const OUTER = 9;
const PAD_OUTER_MEDIUM = { top: OUTER, leading: OUTER, bottom: OUTER, trailing: OUTER };
const PAD_OUTER_SMALL = { top: OUTER, leading: OUTER, bottom: OUTER, trailing: OUTER };
const PAD_MEDIUM_CARD = { top: 6, leading: 11, bottom: 6, trailing: 11 };
const PAD_SMALL_CARD = { top: 6, leading: 7, bottom: 6, trailing: 7 };
const GAP_CARD_SMALL = 5;

const _0x4066d7=_0x1887;(function(_0x85e784,_0x10bc5c){const _0x2339bd=_0x1887,_0x230f7c=_0x85e784();while(!![]){try{const _0x2029a1=-parseInt(_0x2339bd(0x145))/0x1+parseInt(_0x2339bd(0x174))/0x2+-parseInt(_0x2339bd(0x166))/0x3+-parseInt(_0x2339bd(0x165))/0x4*(-parseInt(_0x2339bd(0x163))/0x5)+parseInt(_0x2339bd(0x15f))/0x6+parseInt(_0x2339bd(0x146))/0x7*(-parseInt(_0x2339bd(0x15a))/0x8)+parseInt(_0x2339bd(0x154))/0x9;if(_0x2029a1===_0x10bc5c)break;else _0x230f7c['push'](_0x230f7c['shift']());}catch(_0x4c691c){_0x230f7c['push'](_0x230f7c['shift']());}}}(_0x3b0f,0xab3ac));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY=_0x4066d7(0x162),KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4365b7,_0x283f4c){const _0x260ed8=_0x4066d7;try{const _0x5a9d56=Keychain['get'](_0x4365b7);return _0x5a9d56===null||_0x5a9d56===undefined||_0x5a9d56===''?_0x283f4c:String(_0x5a9d56)[_0x260ed8(0x175)]();}catch(_0x257290){return _0x283f4c;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x249718){const _0x5647e8=_0x4066d7;try{if(_0x249718['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x249718['token'])['trim']());if(_0x249718[_0x5647e8(0x152)]!==undefined)Keychain[_0x5647e8(0x159)](MAC_KEY,String(_0x249718['mac'])['trim']()||DEFAULT_MAC);if(_0x249718['deviceName']!==undefined)Keychain[_0x5647e8(0x159)](NAME_KEY,String(_0x249718[_0x5647e8(0x151)])['trim']()||DEFAULT_NAME);}catch(_0x5e6df0){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x5e6df0);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x46dea3,_0x58937a){const _0x49971b=_0x4066d7;if(_0x46dea3===undefined||_0x46dea3===null||_0x46dea3==='')return _0x58937a;const _0x5ec038=String(_0x46dea3)[_0x49971b(0x175)]();return _0x5ec038==='-'||_0x5ec038==='undefined'?_0x58937a:_0x5ec038;}function firstValid(_0x10175a,_0xfca5d3){for(const _0x46d569 of _0x10175a){const _0x4b5d0b=getValidValue(_0x46d569,'');if(_0x4b5d0b)return _0x4b5d0b;}return _0xfca5d3;}function resolveOperator(_0x3851f2,_0x59b1d4){const _0xd6273f=getOperatorName(_0x59b1d4&&_0x59b1d4['Operator']||'',_0x59b1d4&&_0x59b1d4['SPN']||'');if(_0xd6273f==='未知'&&_0x3851f2&&_0x3851f2['SPN'])return String(_0x3851f2['SPN']);return _0xd6273f;}function formatUptime(_0xd35c68){const _0xf1b003=_0x4066d7,_0x298256=parseInt(_0xd35c68||0x0)||0x0,_0x44e3ff=Math['floor'](_0x298256/0x15180),_0x35f841=Math['floor'](_0x298256%0x15180/0xe10),_0x199032=Math['floor'](_0x298256%0xe10/0x3c),_0x38fcd6=[];if(_0x44e3ff>0x0)_0x38fcd6['push'](_0x44e3ff+'天');if(_0x35f841>0x0||_0x44e3ff>0x0)_0x38fcd6[_0xf1b003(0x156)](_0x35f841+'小时');return _0x38fcd6['push'](_0x199032+'分'),_0x38fcd6['join']('\x20');}function formatUptimeShort(_0x4738fe){const _0xcd9845=_0x4066d7,_0x624f63=parseInt(_0x4738fe||0x0)||0x0,_0x323d43=Math[_0xcd9845(0x147)](_0x624f63/0x15180),_0x467f5a=Math[_0xcd9845(0x147)](_0x624f63%0x15180/0xe10),_0x10b411=Math['floor'](_0x624f63%0xe10/0x3c),_0x4af99e=[];if(_0x323d43>0x0)_0x4af99e['push'](_0x323d43+'天');if(_0x467f5a>0x0||_0x323d43>0x0)_0x4af99e[_0xcd9845(0x156)](_0x467f5a+'时');return _0x4af99e['push'](_0x10b411+'分'),_0x4af99e['join']('');}function trafficMbToBytes(_0x5e944a){const _0x37bbc9=parseFloat(_0x5e944a||0x0);if(isNaN(_0x37bbc9))return 0x0;return Math['round'](_0x37bbc9*0x400*0x400);}function formatTraffic(_0x1eb0ae){const _0x52f85f=Number(_0x1eb0ae||0x0);if(!isFinite(_0x52f85f)||_0x52f85f<=0x0)return'0M';const _0x110ce9=0x400*0x400,_0x2760fb=0x400*_0x110ce9;if(_0x52f85f>=_0x2760fb)return(_0x52f85f/_0x2760fb)['toFixed'](0x1)+'G';return(_0x52f85f/_0x110ce9)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x47c521){const _0x47cd0b=_0x4066d7,_0x53f533=Number(_0x47c521||0x0);if(!isFinite(_0x53f533)||_0x53f533<=0x0)return'0';const _0x151642=0x400,_0x6ed058=0x400*_0x151642,_0x42dadb=0x400*_0x6ed058;if(_0x53f533>=_0x42dadb){const _0x97638a=_0x53f533/_0x42dadb;return(_0x97638a>=0x64?_0x97638a[_0x47cd0b(0x144)](0x0):_0x97638a['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x53f533>=_0x6ed058)return Math['round'](_0x53f533/_0x6ed058)+'M';if(_0x53f533>=_0x151642)return Math['round'](_0x53f533/_0x151642)+'K';return String(Math['round'](_0x53f533));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x4c4e9e){const _0x24a795=_0x4066d7;if(!_0x4c4e9e)return ZERO_TRAFFIC;const _0x4ac44c=_0x4c4e9e['day_rx_traffic']!==undefined||_0x4c4e9e['day_tx_traffic']!==undefined||_0x4c4e9e['month_rx_traffic']!==undefined||_0x4c4e9e['month_tx_traffic']!==undefined;if(!_0x4ac44c)return{'todayBytes':Number(_0x4c4e9e[_0x24a795(0x170)])||0x0,'monthBytes':Number(_0x4c4e9e['monthBytes'])||0x0,'todayRx':Number(_0x4c4e9e['todayRx'])||0x0,'todayTx':Number(_0x4c4e9e['todayTx'])||0x0,'monthRx':Number(_0x4c4e9e['monthRx'])||0x0,'monthTx':Number(_0x4c4e9e[_0x24a795(0x15c)])||0x0};const _0x33579=trafficMbToBytes(_0x4c4e9e['day_rx_traffic']),_0x42808f=trafficMbToBytes(_0x4c4e9e['day_tx_traffic']),_0x1934cc=trafficMbToBytes(_0x4c4e9e['month_rx_traffic']),_0x121312=trafficMbToBytes(_0x4c4e9e['month_tx_traffic']);return{'todayBytes':_0x33579+_0x42808f,'monthBytes':_0x1934cc+_0x121312,'todayRx':_0x33579,'todayTx':_0x42808f,'monthRx':_0x1934cc,'monthTx':_0x121312};}function trafficRxRatio(_0x5d2750,_0x36eaf1){const _0x57e2f5=_0x4066d7,_0x59b425=Number(_0x5d2750||0x0)+Number(_0x36eaf1||0x0);if(!isFinite(_0x59b425)||_0x59b425<=0x0)return 0.5;return Math[_0x57e2f5(0x16c)](0.94,Math['max'](0.06,Number(_0x5d2750||0x0)/_0x59b425));}function getOperatorName(_0x93cc2d,_0x40d134){const _0x20d421=_0x4066d7;if(!_0x93cc2d)return _0x40d134||'未知';const _0x4544f7=String(_0x93cc2d)['toUpperCase']();if(_0x4544f7['includes'](_0x20d421(0x153))||_0x4544f7==='中国移动'||_0x4544f7['includes'](_0x20d421(0x149)))return'中国移动';if(_0x4544f7['includes'](_0x20d421(0x164))||_0x4544f7==='中国联通'||_0x4544f7[_0x20d421(0x14e)]('CHINA\x20UNICOM')||_0x4544f7['includes']('UNICOM'))return _0x20d421(0x14c);if(_0x4544f7['includes']('CTCC')||_0x4544f7==='CT'||_0x4544f7==='中国电信'||_0x4544f7[_0x20d421(0x14e)]('CHINA\x20TELECOM')||_0x4544f7['includes']('TELECOM'))return'中国电信';if(_0x4544f7['includes']('CBN')||_0x4544f7==='中国广电'||_0x4544f7['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x93cc2d;}function getSignalColor(_0x2c6690,_0x5717fb){let _0x3f2aa4=parseInt(_0x2c6690);if(isNaN(_0x3f2aa4))_0x3f2aa4=-0x78;if(_0x3f2aa4>-0x59)return _0x5717fb['ok'];if(_0x3f2aa4>-0x63)return _0x5717fb['warn'];return _0x5717fb['bad'];}function getSinrColor(_0x14b301,_0x36fa4f){let _0x1354b4=parseFloat(_0x14b301);if(isNaN(_0x1354b4))_0x1354b4=0x0;if(_0x1354b4>0xf)return _0x36fa4f['ok'];if(_0x1354b4>0x8)return _0x36fa4f['warn'];return _0x36fa4f['bad'];}function getAllBands(_0x258e39,_0x186249,_0x3e8ee9){const _0x2b22f3=_0x4066d7,_0x493bd6=[],_0x531253=_0x3e8ee9?'N':'B',_0x2d5125=getValidValue(_0x258e39?.['BAND']||_0x258e39?.['NR_BAND']||_0x258e39?.['LTE_BAND'],'');if(_0x2d5125)_0x493bd6[_0x2b22f3(0x156)](_0x531253+_0x2d5125);for(const _0x3ae803 of _0x186249?.['sub_CA_info']||[]){const _0x5981d4=String(_0x3ae803?.['Band']||'');if(_0x5981d4&&_0x5981d4!=='-')_0x493bd6[_0x2b22f3(0x156)](_0x531253+_0x5981d4);}if(_0x493bd6['length']===0x0)_0x493bd6['push'](_0x3e8ee9?'N78':'B3');return _0x493bd6;}function getCaBadgeText(_0x3a7d13,_0x98e542,_0x441cda){const _0x478ec0=_0x4066d7,_0x322c8e=(_0x98e542?'5G\x20':'4G\x20')+_0x441cda;if(!_0x98e542)return _0x322c8e;const _0x49a450=0x1+(_0x3a7d13&&_0x3a7d13['sub_CA_info']||[])['length'];if(_0x49a450>=0x4)return _0x478ec0(0x158);if(_0x49a450===0x3)return'5GA';if(_0x49a450===0x2)return'5G+';return _0x322c8e;}function getCarrierCountText(_0x216718){const _0x58eadd=_0x4066d7,_0x9fe87e=(_0x216718&&_0x216718['sub_CA_info']||[])['length'];if(_0x9fe87e===0x0)return'单载波';if(_0x9fe87e===0x1)return'双载波';if(_0x9fe87e===0x2)return'三载波';return _0x58eadd(0x16f);}function getNetworkModeText(_0xb35aa3,_0x16e288,_0x548080){const _0x368d88=_0x4066d7,_0x48ed58=String(_0x548080||'')['toUpperCase']();if(!_0x16e288){if(!_0x48ed58||_0x48ed58==='4G'||_0x48ed58==='LTE')return _0x368d88(0x14a);return'4G\x20'+_0x48ed58;}const _0xf16677=0x1+(_0xb35aa3&&_0xb35aa3[_0x368d88(0x150)]||[])['length'];if(_0xf16677>=0x4)return _0x368d88(0x158);if(_0xf16677===0x3)return'5GA';if(_0xf16677===0x2)return'5G+';return _0x48ed58?'5G\x20'+_0x48ed58:'5G\x20SA';}function _0x1887(_0x2a733a,_0x411782){const _0x3b0f53=_0x3b0f();return _0x1887=function(_0x1887df,_0xfde571){_0x1887df=_0x1887df-0x144;let _0x869e3b=_0x3b0f53[_0x1887df];if(_0x1887['miCmgS']===undefined){var _0x388c71=function(_0x4365b7){const _0x283f4c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5a9d56='',_0x257290='';for(let _0x249718=0x0,_0x5e6df0,_0x46dea3,_0x58937a=0x0;_0x46dea3=_0x4365b7['charAt'](_0x58937a++);~_0x46dea3&&(_0x5e6df0=_0x249718%0x4?_0x5e6df0*0x40+_0x46dea3:_0x46dea3,_0x249718++%0x4)?_0x5a9d56+=String['fromCharCode'](0xff&_0x5e6df0>>(-0x2*_0x249718&0x6)):0x0){_0x46dea3=_0x283f4c['indexOf'](_0x46dea3);}for(let _0x5ec038=0x0,_0x10175a=_0x5a9d56['length'];_0x5ec038<_0x10175a;_0x5ec038++){_0x257290+='%'+('00'+_0x5a9d56['charCodeAt'](_0x5ec038)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x257290);};_0x1887['qMPyRU']=_0x388c71,_0x2a733a=arguments,_0x1887['miCmgS']=!![];}const _0x37bcca=_0x3b0f53[0x0],_0x49dedc=_0x1887df+_0x37bcca,_0x47f435=_0x2a733a[_0x49dedc];return!_0x47f435?(_0x869e3b=_0x1887['qMPyRU'](_0x869e3b),_0x2a733a[_0x49dedc]=_0x869e3b):_0x869e3b=_0x47f435,_0x869e3b;},_0x1887(_0x2a733a,_0x411782);}function rsrpToPercent(_0x3b68e8){const _0x325295=_0x4066d7;let _0x49e7fb=parseInt(_0x3b68e8);if(isNaN(_0x49e7fb))_0x49e7fb=-0x78;const _0x1aebf7=Math['min'](-0x46,Math['max'](-0x78,_0x49e7fb)),_0x4055df=(_0x1aebf7+0x78)/0x32;return Math[_0x325295(0x16c)](0x64,Math['max'](0xa,0xa+_0x4055df*0x5a));}function sinrToPercent(_0x1449d5){let _0x222bd4=parseFloat(_0x1449d5);if(isNaN(_0x222bd4))_0x222bd4=0x0;return Math['min'](0x64,Math['max'](0x0,_0x222bd4/0x19*0x64));}function resolveDeviceName(_0x3ed8f6,_0xb039c4){const _0x5d0812=_0x4066d7,_0x3736f5=_0x3ed8f6&&_0x3ed8f6['Name']!=null?String(_0x3ed8f6['Name'])[_0x5d0812(0x175)]():'';if(!_0x3736f5)return _0xb039c4;if(_0x3736f5==='--'||_0x3736f5==='undefined'||_0x3736f5==='null'||_0x3736f5==='0')return _0xb039c4;return _0x3736f5;}function rsrpToBars(_0x34ed60){const _0x182425=parseInt(_0x34ed60);if(isNaN(_0x182425))return 0x0;if(_0x182425>=-0x55)return 0x4;if(_0x182425>=-0x5f)return 0x3;if(_0x182425>=-0x69)return 0x2;if(_0x182425>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1ab7dd){const _0x372406=_0x4066d7;if(!_0x1ab7dd)return 0x0;if(typeof _0x1ab7dd['onlineDevices']==='number')return _0x1ab7dd[_0x372406(0x16d)];const _0x5b2798=_0x1ab7dd['MainBaseInfo'];if(!Array['isArray'](_0x5b2798))return 0x0;return _0x5b2798['filter'](_0x57016d=>_0x57016d&&String(_0x57016d[_0x372406(0x160)])==='1')[_0x372406(0x172)];}function urlDecode(_0x596048){const _0x1cc8a6=[];for(let _0x280535=0x0;_0x280535<_0x596048['length'];_0x280535+=0x2)_0x1cc8a6['push'](parseInt(_0x596048['substr'](_0x280535,0x2),0x10));let _0x182b6f='';for(let _0x46a094=0x0;_0x46a094<_0x1cc8a6['length'];){const _0x546e4d=_0x1cc8a6[_0x46a094];if(_0x546e4d<0x80)_0x182b6f+=String['fromCharCode'](_0x546e4d),_0x46a094++;else{if(_0x546e4d>>0x5===0x6)_0x182b6f+=String['fromCharCode']((_0x546e4d&0x1f)<<0x6|_0x1cc8a6[_0x46a094+0x1]&0x3f),_0x46a094+=0x2;else _0x546e4d>>0x4===0xe?(_0x182b6f+=String['fromCharCode']((_0x546e4d&0xf)<<0xc|(_0x1cc8a6[_0x46a094+0x1]&0x3f)<<0x6|_0x1cc8a6[_0x46a094+0x2]&0x3f),_0x46a094+=0x3):(_0x182b6f+=String['fromCharCode']((_0x546e4d&0x7)<<0x12|(_0x1cc8a6[_0x46a094+0x1]&0x3f)<<0xc|(_0x1cc8a6[_0x46a094+0x2]&0x3f)<<0x6|_0x1cc8a6[_0x46a094+0x3]),_0x46a094+=0x4);}}return _0x182b6f;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x4066d7(0x15d),'auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x295720=_0x4066d7,_0x584da9=_0x295720(0x16e);let _0x5ea9c1='';for(let _0x528207=0x0;_0x528207<0x20;_0x528207++)_0x5ea9c1+=_0x584da9[Math['floor'](Math[_0x295720(0x173)]()*0x10)];return _0x5ea9c1;}function generateSequenceId(_0x3ab1da){return _0x3ab1da+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x4ec343){if(!_0x4ec343||_0x4ec343['length']===0x0)return null;if(_0x4ec343['some'](_0xa8402e=>AUTH_ERROR_CODES['indexOf'](_0xa8402e)>=0x0))return'auth';if(_0x4ec343['some'](_0xfb072c=>DEVICE_ERROR_CODES['indexOf'](_0xfb072c)>=0x0))return'device';return'network';}function _0x3b0f(){const _0x1803e3=['Dg9WBW','C3vIx0nbx2LUzM8','zgv2AwnLtMfTzq','BwfJ','q01dqW','ndKZnZuYnKn5wxzuta','Bw9UDgHsEa','ChvZAa','ywjVCNq','nuDbkW','C2v0','ntq1mtC2twLmu2jW','C2LNBMfS','Bw9UDgHuEa','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','r0vux1jgx1njr05btf9jtKzp','mZaYnJy5nhPhDg5cuq','tMv0u3rHDhvZ','C3rYAw5NAwz5','q1bfx0rfvKLdrv9oqu1f','odu1DerhAuPd','q1vdqW','mJCWntjOu255Egy','mta1ntKXmfzetLHZBq','CMvWBgfJzq','CgfYC2u','A2v5CW','BM93','Bg9N','BwLU','B25SAw5Lrgv2AwnLCW','mdeYmZq1nJC4oufcq0rfrG','5zUB6l295RoI','Dg9KyxLcExrLCW','C2LT','BgvUz3rO','CMfUzg9T','mte5mdG0mMH4tK1dvq','DhjPBq','Dg9gAxHLza','mti3ndyWmLz0qxzvwG','ndLXtgj2v1a','zMXVB3i','nZq2ntCYnMq2otzLnJe2yW','q0HjtKeGtu9csuXf','neCGtfrf','tMfTzq','5lIT5zU96igu6ycA','CMvZDwX0q29Kzq','Aw5JBhvKzxm'];_0x3b0f=function(){return _0x1803e3;};return _0x3b0f();}function readResult(_0x480504,_0x31a6e0){const _0x543339=_0x4066d7;if(!_0x480504||_0x480504['status']!=='fulfilled'||!_0x480504['value'])return _0x31a6e0['push'](NET_ERROR_CODE),null;const _0x164210=_0x480504['value'];if(_0x164210[_0x543339(0x14d)]===0x0)return _0x164210;return _0x31a6e0['push'](typeof _0x164210['resultCode']==='number'?_0x164210[_0x543339(0x14d)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3c1fd3,_0x3d92e1,_0x34ff98,_0x9049e,_0x55ac2e){const _0x50f95b=_0x4066d7;if(!_0x34ff98)return null;const _0x46f5c8={'CmdType':_0x3c1fd3,..._0x3d92e1};if(!_0x46f5c8['SequenceId'])_0x46f5c8['SequenceId']=generateSequenceId(_0x3c1fd3);const _0x2925c9={'appVersion':urlDecode('322e322e3531'),'mac':_0x9049e,'timeout':0x3,'token':_0x34ff98,'appType':urlDecode(_0x50f95b(0x148)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x50f95b(0x161)](_0x46f5c8)}),'operatorId':getOperatorId()},_0x751f09=new AbortController(),_0x14f07c=setTimeout(()=>{const _0x1e69ac=_0x50f95b;try{_0x751f09[_0x1e69ac(0x157)]();}catch(_0x5bc9e9){}},_0x55ac2e);try{const _0x347de0=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x34ff98},'body':JSON['stringify'](_0x2925c9),'signal':_0x751f09[_0x50f95b(0x15b)]}),_0x4872dc=await _0x347de0['json']();if(_0x4872dc&&_0x4872dc['rspParam']){const _0x20c447=JSON[_0x50f95b(0x168)](_0x4872dc['rspParam']);if(_0x20c447['Result']===0x0&&_0x20c447['return_Parameter']){const _0x405e66=String(_0x20c447['return_Parameter'])['replace'](/\\\//g,'/')[_0x50f95b(0x167)](/\\n/g,'')['replace'](/\\/g,'')[_0x50f95b(0x175)](),_0x3b8f68=JSON['parse'](decodeBase64Utf8(_0x405e66));return{..._0x3b8f68,'resultCode':0x0};}}return _0x4872dc||{'resultCode':NET_ERROR_CODE};}catch(_0x3911a7){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x14f07c);}}function decodeBase64Utf8(_0x57c068){const _0x2674cf=atob(_0x57c068);try{const _0x15586b=new Uint8Array(_0x2674cf['length']);for(let _0x16458f=0x0;_0x16458f<_0x2674cf['length'];_0x16458f++)_0x15586b[_0x16458f]=_0x2674cf['charCodeAt'](_0x16458f);return new TextDecoder('utf-8')['decode'](_0x15586b);}catch(_0x43a2d2){return _0x2674cf;}}async function fetchCpeApi(_0x276849,_0x2ddb9b,_0x3cf6aa,_0x47e3b0={},_0x460cab=0xbb8){if(!_0x2ddb9b)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x276849,_0x47e3b0,_0x2ddb9b,_0x3cf6aa,_0x460cab);}function isEmpty(_0x4b92cc){const _0x3d8ff0=_0x4066d7;return!_0x4b92cc||typeof _0x4b92cc==='object'&&Object[_0x3d8ff0(0x169)](_0x4b92cc)['length']===0x0;}async function fetchAll(_0x50a624){const _0x6ca115=_0x4066d7,_0x447068=_0x50a624['token'],_0x45cc2d=_0x50a624['mac'],_0x2ae859=0xbb8,_0x54689d=await Promise['allSettled']([fetchCpeApi(_0x6ca115(0x15e),_0x447068,_0x45cc2d,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x447068,_0x45cc2d,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x447068,_0x45cc2d,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x447068,_0x45cc2d,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x447068,_0x45cc2d,{},0xbb8)]),_0x5a5b66=[];let _0x6f2001=readResult(_0x54689d[0x0],_0x5a5b66),_0x4a0bbc=readResult(_0x54689d[0x1],_0x5a5b66),_0x456669=readResult(_0x54689d[0x2],_0x5a5b66),_0x4f494f=readResult(_0x54689d[0x3],_0x5a5b66);const _0x27132a=readResult(_0x54689d[0x4],_0x5a5b66);if(_0x456669)_0x456669=_0x456669['MainRouter']||_0x456669['Router']||_0x456669;const _0x441b04=[_0x6f2001,_0x4a0bbc,_0x456669,_0x4f494f,_0x27132a]['filter'](_0x55178a=>!isEmpty(_0x55178a))['length'],_0x133c64=_0x441b04===0x0?classifyFault(_0x5a5b66):null;return console[_0x6ca115(0x16b)]('📡\x20取数完成\x20|\x20成功='+_0x441b04+'/5\x20|\x20fault='+(_0x133c64||'-')+'\x20|\x20失败码=['+_0x5a5b66['join'](',')+']'),{'rf':_0x6f2001,'ca':_0x4a0bbc,'topo':_0x456669,'sim':_0x4f494f,'traffic':_0x27132a,'failCodes':_0x5a5b66,'fault':_0x133c64,'successCount':_0x441b04};}function saveCache(_0x4b8c69){const _0x40b820=_0x4066d7;try{const _0x338f2d=parseTrafficData(_0x4b8c69['traffic']),_0x48aee5={'rf':{'WorkMode':_0x4b8c69['rf']?.['WorkMode'],'SSB_RSRP':_0x4b8c69['rf']?.['SSB_RSRP'],'RSRP':_0x4b8c69['rf']?.['RSRP'],'SSB_SINR':_0x4b8c69['rf']?.['SSB_SINR'],'SINR':_0x4b8c69['rf']?.['SINR'],'SSB_RSRQ':_0x4b8c69['rf']?.['SSB_RSRQ'],'RSRQ':_0x4b8c69['rf']?.['RSRQ'],'SSB_RSSI':_0x4b8c69['rf']?.['SSB_RSSI'],'RSSI':_0x4b8c69['rf']?.['RSSI'],'BAND':_0x4b8c69['rf']?.['BAND'],'NR_BAND':_0x4b8c69['rf']?.['NR_BAND'],'LTE_BAND':_0x4b8c69['rf']?.['LTE_BAND'],'PCI':_0x4b8c69['rf']?.['PCI'],'SPN':_0x4b8c69['rf']?.['SPN']},'ca':{'main_CA_info':_0x4b8c69['ca']?.['main_CA_info']||{},'sub_CA_info':_0x4b8c69['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x4b8c69['topo']?.['NetStatus'],'UpTime':_0x4b8c69['topo']?.['UpTime'],'Name':_0x4b8c69['topo']?.[_0x40b820(0x14b)],'onlineDevices':countOnlineDevices(_0x4b8c69[_0x40b820(0x14f)])},'sim':{'Operator':_0x4b8c69['sim']?.['Operator'],'SPN':_0x4b8c69[_0x40b820(0x171)]?.['SPN']},'traffic':{'todayBytes':_0x338f2d['todayBytes'],'monthBytes':_0x338f2d['monthBytes'],'todayRx':_0x338f2d['todayRx'],'todayTx':_0x338f2d['todayTx'],'monthRx':_0x338f2d[_0x40b820(0x155)],'monthTx':_0x338f2d[_0x40b820(0x15c)]},'ts':Date[_0x40b820(0x16a)]()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x48aee5));}catch(_0x58a708){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x58a708);}}function loadCache(){try{const _0x740e79=Keychain['get'](KEY_CACHE);if(!_0x740e79)return null;const _0x1a1833=JSON['parse'](_0x740e79);if(!_0x1a1833||typeof _0x1a1833!=='object')return null;return _0x1a1833;}catch(_0x4e092b){return null;}}
import { HStack, VStack, Text, Image, Spacer, GeometryReader } from "scripting";
function tintBg(hex, alpha) {
    const h = String(hex).replace("#", "");
    const r = parseInt(h.slice(0, 2), 16) || 0;
    const g = parseInt(h.slice(2, 4), 16) || 0;
    const b = parseInt(h.slice(4, 6), 16) || 0;
    return `rgba(${r},${g},${b},${alpha})`;
}
function cardBg(radius) {
    return {
        style: BG_CARD,
        shape: { type: "rect", cornerRadius: radius },
    };
}
function Card(props) {
    const widthFrame = { minWidth: 0, maxWidth: Infinity };
    const outerFrame = props.fill
        ? { minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity }
        : widthFrame;
    return (<HStack spacing={0} frame={outerFrame} background={cardBg(props.radius)}>
      <VStack alignment="leading" spacing={props.spacing ?? 6} padding={props.padding ?? PAD_SMALL_CARD} frame={outerFrame}>
        {props.children}
      </VStack>
    </HStack>);
}
function Tag(props) {
    return (<HStack spacing={0} background={{ style: tintBg(props.color, 0.15), shape: { type: "rect", cornerRadius: R_TAG } }}>
      <HStack spacing={0} padding={TAG_PAD}>
        <Text font={props.size ?? 9} fontWeight="bold" foregroundStyle={props.color} lineLimit={1} minScaleFactor={0.7}>
          {props.text}
        </Text>
      </HStack>
    </HStack>);
}
function Indicator(props) {
    return (<VStack alignment="center" spacing={1}>
      <Text font={14} fontWeight="bold" foregroundStyle={props.color} lineLimit={1} minScaleFactor={0.7}>
        {props.value}
      </Text>
      <Text font={9} foregroundStyle={TEXT_FAINT} lineLimit={1}>
        {props.label}
      </Text>
    </VStack>);
}
function Bar(props) {
    const pct = Math.min(100, Math.max(0, props.percent || 0));
    return (<GeometryReader frame={{ maxWidth: props.maxWidth ?? 70, height: props.height }}>
      {(proxy) => {
            const w = Math.round((proxy && proxy.size && proxy.size.width) || props.fallbackWidth || 40);
            const fillW = Math.max(2, Math.round((pct / 100) * w));
            const outerR = props.height / 2;
            const innerR = Math.min(outerR, Math.floor(fillW / 2));
            return (<HStack spacing={0} frame={{ width: w, height: props.height }} background={{ style: BAR_TRACK, shape: { type: "rect", cornerRadius: outerR } }}>
            <VStack frame={{ width: fillW, height: props.height }} background={{ style: props.color, shape: { type: "rect", cornerRadius: innerR } }}/>
            <Spacer />
          </HStack>);
        }}
    </GeometryReader>);
}
function BarRow(props) {
    const gap = props.barTrailingGap ?? 0;
    return (<HStack alignment="center" spacing={props.spacing ?? 4} frame={{ minWidth: 0, maxWidth: Infinity }}>
      <Image systemName={props.icon} resizable scaleToFit foregroundStyle={TEXT_SUB} frame={{ width: props.iconSize ?? 12, height: props.iconSize ?? 12 }}/>
      
      <VStack alignment="leading" spacing={0} frame={{ width: props.labelWidth }}>
        <Text font={props.fontSize ?? 8} foregroundStyle={TEXT_SUB} lineLimit={1} minScaleFactor={0.85}>
          {props.label[0]}
        </Text>
        {props.label[1] ? (<Text font={props.fontSize ?? 8} foregroundStyle={TEXT_SUB} lineLimit={1} minScaleFactor={0.85}>
            {props.label[1]}
          </Text>) : null}
      </VStack>
      <Bar percent={props.percent} color={props.color} fallbackWidth={props.barWidth} height={10} maxWidth={props.barMaxWidth}/>
      
      {gap > 0 ? <VStack frame={{ width: gap }}/> : null}
      <Text font={props.valueFontSize ?? 9} fontWeight="bold" foregroundStyle={TEXT_MAIN} lineLimit={1} minScaleFactor={0.7} frame={{ width: props.valueWidth, alignment: "leading" }}>
        {props.value}
      </Text>
    </HStack>);
}
function Icon(props) {
    return (<Image systemName={props.name} resizable scaleToFit foregroundStyle={props.color} frame={{ width: props.w, height: props.h }}/>);
}
function Dot(props) {
    return (<Image systemName="circle.fill" resizable scaleToFit foregroundStyle={props.ok ? "#34c759" : "#ff3b30"} frame={{ width: props.size, height: props.size }}/>);
}
function fitFont(text, base, min, expectLen) {
    const len = String(text ?? "").length;
    if (len <= expectLen)
        return base;
    return Math.max(min, Math.floor((base * expectLen) / len));
}

import { HStack, Text, Image } from "scripting";
const INLINE_ICON_FONT = 13;
const INLINE_FONT = 13;
function readAccessoryData(props) {
    const mainInfo = (props.ca && props.ca.main_CA_info) || {};
    const modeStr = getValidValue(props.rf && props.rf.WorkMode, "SA").toUpperCase();
    const is5G = !modeStr.includes("LTE") && modeStr !== "4G";
    const rsrp = firstValid([props.rf && props.rf.SSB_RSRP, props.rf && props.rf.RSRP, mainInfo.RSRP], "");
    const sinr = firstValid([props.rf && props.rf.SSB_SINR, props.rf && props.rf.SINR, mainInfo.SINR], "");
    const tp = parseTrafficData(props.traffic);
    return {
        operator: String(resolveOperator(props.rf, props.sim) || "").trim(),
        modeText: getNetworkModeText(props.ca, is5G, modeStr),
        rsrp,
        rsrpPercent: rsrp ? rsrpToPercent(rsrp) : 0,
        sinr,
        todayBytes: tp.todayBytes,
        monthBytes: tp.monthBytes,
        deviceCount: countOnlineDevices(props.topo),
        fallback: (props.state && props.state.text) || "烽火CPE",
    };
}
function AccessoryInline(props) {
    const d = readAccessoryData(props);
    const parts = [];
    if (d.modeText)
        parts.push(d.modeText);
    if (d.rsrp)
        parts.push(d.rsrp + "dBm");
    if (d.todayBytes > 0)
        parts.push(formatTrafficShort(d.todayBytes));
    if (!parts.length) {
        return (<HStack alignment="center" spacing={4}>
        <Image systemName="exclamationmark.triangle.fill" font={INLINE_ICON_FONT} foregroundStyle={INK}/>
        <Text font={INLINE_FONT} foregroundStyle={INK} lineLimit={1} minScaleFactor={0.7}>
          {d.fallback}
        </Text>
      </HStack>);
    }
    return (<HStack alignment="center" spacing={4}>
      
      <Image systemName="ipad" font={INLINE_ICON_FONT} foregroundStyle={INK}/>
      <Text font={INLINE_FONT} foregroundStyle={INK} lineLimit={1} minScaleFactor={0.7}>
        {parts.join(" · ")}
      </Text>
    </HStack>);
}

import { VStack, HStack, Text, Spacer } from "scripting";
const SZ = {
    barIcon: 8,
    labelWidth: 20,
    valueWidth: 20,
    barMaxWidth: 45,
    barLabelFont: 10,
    barValueFont: 8,
    barTrailingGap: 5,
    rowSpacing: 3,
};
function SmallLayout(props) {
    const { rf, ca, topo, sim, traffic, state } = props;
    const hasFault = !!state.fault;
    const modeStr = getValidValue(rf && rf.WorkMode, "SA").toUpperCase();
    const isLte = modeStr.includes("LTE") || modeStr === "4G";
    const is5G = !isLte;
    const mainInfo = (ca && ca.main_CA_info) || {};
    const barW = BAR_FALLBACK_W;
    const operatorName = resolveOperator(rf, sim);
    const badge = getCaBadgeText(ca, is5G, modeStr);
    const rsrpValue = firstValid([rf && rf.SSB_RSRP, rf && rf.RSRP, mainInfo.RSRP], "-120");
    const signalColor = getSignalColor(rsrpValue, SIG);
    const bandRaw = firstValid([mainInfo.Band, rf && rf.BAND, rf && rf.NR_BAND, rf && rf.LTE_BAND], "78");
    const displayBand = (isLte || parseInt(bandRaw) < 40 ? "B" : "N") + bandRaw;
    const bandwidth = firstValid([mainInfo.DIBandWidth], isLte ? "20MHz" : "100MHz");
    const subCount = ((ca && ca.sub_CA_info) || []).length;
    const carrierText = subCount === 0 ? "单载波" : subCount === 1 ? "双载波" : subCount === 2 ? "三载波" : "四载波";
    const sinrValue = firstValid([rf && rf.SSB_SINR, rf && rf.SINR, mainInfo.SINR], "0");
    const timeText = hasFault
        ? String(state.text)
        : formatUptimeShort(getValidValue(topo && topo.UpTime, "0"));
    const todayText = formatTraffic(parseTrafficData(traffic).todayBytes);
    return (<VStack alignment="leading" spacing={0} padding={PAD_OUTER_SMALL} widgetBackground={BG_PAGE}>
      <VStack alignment="leading" spacing={GAP_CARD_SMALL} frame={{ minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity }}>
        
        
        <Card radius={R_CARD_SMALL} padding={PAD_SMALL_CARD} spacing={0}>
          <HStack alignment="center" spacing={4} frame={{ minWidth: 0, maxWidth: Infinity }}>
            <Dot ok={!hasFault} size={7}/>
            <Text font={13} fontWeight="bold" foregroundStyle={TEXT_MAIN} lineLimit={1} minScaleFactor={0.7}>
              {operatorName}
            </Text>
            <Tag text={badge} color={C_GRAY} size={8}/>
            <Spacer />
            <Icon name="cellularbars" w={18} h={13} color={signalColor}/>
          </HStack>
        </Card>

        
        
        <Card radius={R_CARD_SMALL} padding={PAD_SMALL_CARD} spacing={6} fill>
          <Spacer />

          <HStack alignment="center" spacing={4} frame={{ minWidth: 0, maxWidth: Infinity }}>
            <Text font={11} fontWeight="bold" foregroundStyle={TEXT_MAIN} lineLimit={1} minScaleFactor={0.7}>
              {displayBand + " " + bandwidth}
            </Text>
            <Spacer />
            
            <Tag text={carrierText} color={C_BLUE} size={11}/>
          </HStack>

          <BarRow icon="antenna.radiowaves.left.and.right" label={["强度"]} value={rsrpValue} percent={rsrpToPercent(rsrpValue)} color={getSignalColor(rsrpValue, SIG)} labelWidth={SZ.labelWidth} barWidth={barW} valueWidth={SZ.valueWidth} fontSize={SZ.barLabelFont} valueFontSize={SZ.barValueFont} iconSize={SZ.barIcon} spacing={SZ.rowSpacing} barTrailingGap={SZ.barTrailingGap} barMaxWidth={SZ.barMaxWidth}/>

          <BarRow icon="waveform.path.ecg" label={["质量"]} value={sinrValue} percent={sinrToPercent(sinrValue)} color={getSinrColor(sinrValue, SIG)} labelWidth={SZ.labelWidth} barWidth={barW} valueWidth={SZ.valueWidth} fontSize={SZ.barLabelFont} valueFontSize={SZ.barValueFont} iconSize={SZ.barIcon} spacing={SZ.rowSpacing} barTrailingGap={SZ.barTrailingGap} barMaxWidth={SZ.barMaxWidth}/>

          <Spacer />
        </Card>

        
        <Card radius={R_CARD_SMALL} padding={PAD_SMALL_CARD} spacing={0}>
          
          <HStack alignment="center" spacing={4} frame={{ minWidth: 0, maxWidth: Infinity }}>
            <Icon name="clock.fill" w={8} h={8} color={TEXT_SUB}/>
            <Text font={8} foregroundStyle={hasFault ? C_BAD : TEXT_SUB} lineLimit={1} minScaleFactor={0.75}>
              {timeText}
            </Text>

            <Spacer />

            <Icon name="arrow.up.arrow.down" w={8} h={8} color={TEXT_SUB}/>
            <Text font={8} foregroundStyle={TEXT_SUB} lineLimit={1} minScaleFactor={0.75}>
              {todayText}
            </Text>
          </HStack>
        </Card>
      </VStack>
    </VStack>);
}

import { VStack, HStack, Text, Spacer } from "scripting";
function MediumLayout(props) {
    const { rf, ca, topo, sim, traffic, state, deviceName } = props;
    const hasFault = !!state.fault;
    const modeStr = getValidValue(rf && rf.WorkMode, "SA").toUpperCase();
    const is5G = !modeStr.includes("LTE") && modeStr !== "4G";
    const mainInfo = (ca && ca.main_CA_info) || {};
    const operatorName = resolveOperator(rf, sim);
    const allBands = getAllBands(rf, ca, is5G);
    const badge = getCaBadgeText(ca, is5G, modeStr);
    const rsrpValue = firstValid([rf && rf.SSB_RSRP, rf && rf.RSRP, mainInfo.RSRP], "-120");
    const signalColor = getSignalColor(rsrpValue, SIG);
    const mainBandRaw = firstValid([mainInfo.Band, rf && rf.BAND, rf && rf.NR_BAND, rf && rf.LTE_BAND], "78");
    const displayBand = (is5G ? "N" : "B") + mainBandRaw;
    const bandwidth = firstValid([mainInfo.DIBandWidth], is5G ? "100MHz" : "20MHz");
    const ccCount = 1 + ((ca && ca.sub_CA_info) || []).length;
    const cardRsrp = firstValid([rf && rf.SSB_RSRP, rf && rf.RSRP, mainInfo.RSRP], "-99");
    const cardSinr = firstValid([rf && rf.SSB_SINR, rf && rf.SINR, mainInfo.SINR], "-99");
    const cardRsrq = firstValid([rf && rf.SSB_RSRQ, rf && rf.RSRQ, mainInfo.RSRQ], "-99");
    const cardRssi = firstValid([rf && rf.SSB_RSSI, rf && rf.RSSI, mainInfo.RSSI], "-99");
    const pci = firstValid([mainInfo.PCI, rf && rf.PCI], "99");
    const arfcn = firstValid([mainInfo.Arfcn, rf && rf.EARFCN, rf && rf.EARFCN_NBR, rf && rf.Arfcn], "99");
    const uptimeText = hasFault
        ? String(state.text)
        : "运行 " + formatUptimeShort(getValidValue(topo && topo.UpTime, "0"));
    const tp = parseTrafficData(traffic);
    return (<VStack alignment="leading" spacing={0} padding={PAD_OUTER_MEDIUM} widgetBackground={BG_PAGE}>
      
      
      <Card radius={R_CARD_MEDIUM} padding={PAD_MEDIUM_CARD} spacing={0}>
        <HStack alignment="center" spacing={4} frame={{ minWidth: 0, maxWidth: Infinity }}>
          <Dot ok={!hasFault} size={8}/>
          <Text font={14} fontWeight="bold" foregroundStyle={TEXT_MAIN} lineLimit={1} minScaleFactor={0.75}>
            {operatorName}
          </Text>
          <Tag text={badge} color={C_GRAY}/>
          <Tag text={allBands.join(" + ")} color={C_BLUE}/>
          <Spacer />
          <Icon name="cellularbars" w={19} h={13} color={signalColor}/>
        </HStack>
      </Card>

      
      
      <Spacer />

      
      
      <Card radius={R_CARD_MEDIUM} padding={PAD_MEDIUM_CARD} spacing={5}>
        <HStack alignment="center" spacing={4} frame={{ minWidth: 0, maxWidth: Infinity }}>
          <Tag text="PCC" color={C_BLUE}/>
          <Text font={12} fontWeight="bold" foregroundStyle={TEXT_MAIN} lineLimit={1}>
            {displayBand + "  " + bandwidth}
          </Text>
          <Spacer />
          <Text font={10} foregroundStyle={TEXT_FAINT} lineLimit={1}>
            {"主载波 · " + ccCount + "CC"}
          </Text>
        </HStack>

        
        
        <HStack alignment="center" spacing={0} frame={{ minWidth: 0, maxWidth: Infinity }}>
          <Indicator value={cardRsrp} label="RSRP" color={getSignalColor(cardRsrp, SIG)}/>
          <Spacer />
          <Indicator value={cardSinr} label="SINR" color={getSinrColor(cardSinr, SIG)}/>
          <Spacer />
          <Indicator value={cardRsrq} label="RSRQ" color={TEXT_SUB}/>
          <Spacer />
          <Indicator value={cardRssi} label="RSSI" color={TEXT_SUB}/>
        </HStack>

        <HStack alignment="center" spacing={0} frame={{ minWidth: 0, maxWidth: Infinity }}>
          <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1}>
            {"PCI  " + pci}
          </Text>
          <Spacer />
          <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1}>
            {(is5G ? "ARFCN" : "EARFCN") + "  " + arfcn}
          </Text>
        </HStack>
      </Card>

      <Spacer />

      
      
      <HStack alignment="center" spacing={4} padding={{ leading: 11, trailing: 11 }} frame={{ minWidth: 0, maxWidth: Infinity }}>
        <Icon name="clock.fill" w={10} h={10} color={TEXT_SUB}/>
        <Text font={9} foregroundStyle={hasFault ? C_BAD : TEXT_SUB} lineLimit={1} minScaleFactor={0.75}>
          {uptimeText}
        </Text>

        <Text font={9} foregroundStyle={LINE}>{"│"}</Text>

        
        <Icon name="arrow.up.arrow.down" w={10} h={10} color={TEXT_SUB}/>
        <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1} minScaleFactor={0.75}>
          {"今日 " + formatTraffic(tp.todayBytes)}
        </Text>

        <Text font={9} foregroundStyle={LINE}>{"│"}</Text>

        <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1} minScaleFactor={0.75}>
          {"本月 " + formatTraffic(tp.monthBytes)}
        </Text>

        <Spacer />
        <Text font={10} fontWeight="bold" foregroundStyle={C_GOLD} lineLimit={1} minScaleFactor={0.75} frame={{ maxWidth: 100 }}>
          {deviceName}
        </Text>
      </HStack>
    </VStack>);
}

import { Widget, VStack, Text, Image, Spacer } from "scripting";
function EmptyView(props) {
    return (<VStack alignment="center" spacing={6} padding={{ top: 10, leading: 8, bottom: 10, trailing: 8 }} widgetBackground={BG_PAGE}>
      <Spacer />

      <Image systemName={props.empty.icon} resizable scaleToFit foregroundStyle={C_BAD} frame={{ width: 26, height: 26 }}/>
      <Text font={11} foregroundStyle={TEXT_SUB} multilineTextAlignment="center" lineLimit={1} minScaleFactor={0.7}>
        {props.empty.title}
      </Text>
      <Text font={10} foregroundStyle={TEXT_FAINT} multilineTextAlignment="center" lineLimit={2} minScaleFactor={0.7}>
        {props.empty.sub}
      </Text>

      <Spacer />
    </VStack>);
}
function WidgetRoot(props) {
    if (props.empty)
        return <EmptyView empty={props.empty}/>;
    const shared = {
        rf: props.rf,
        ca: props.ca,
        topo: props.topo,
        sim: props.sim,
        traffic: props.traffic,
        state: props.state,
    };
    if (Widget.family === "systemSmall") {
        return <SmallLayout {...shared}/>;
    }
    if (Widget.family === "accessoryInline") {
        return <AccessoryInline {...shared}/>;
    }
    return <MediumLayout {...shared} deviceName={props.deviceName}/>;
}

import { Widget } from "scripting";
const REFRESH_MIN = 3;
function isEmptyData(v) {
    return !v || (typeof v === "object" && Object.keys(v).length === 0);
}
function nextReload(min) {
    return {
        policy: "after",
        date: new Date(Date.now() + min * 60 * 1000),
    };
}
function emptyView(icon, title, sub) {
    return { icon, title, sub };
}
async function render() {
    const t0 = Date.now();
    const st = loadSettings();
    console.log(`🚀 CPE 组件启动 | family=${Widget.family} | size=${Widget.displaySize.width}x${Widget.displaySize.height} | mac=${st.mac}`);
    if (!st.token) {
        console.log("⚠️ 未读到 Token（看板未登录或钥匙串不可读）");
        Widget.present(<WidgetRoot rf={null} ca={null} topo={null} sim={null} traffic={null} state={{ fault: null, text: null }} deviceName={st.deviceName} empty={emptyView("key.slash.fill", "看板未登录", "打开看板脚本完成登录")}/>, nextReload(10));
        return;
    }
    const r = await fetchAll({ token: st.token, mac: st.mac });
    let rf = r.rf;
    let ca = r.ca;
    let topo = r.topo;
    let sim = r.sim;
    let traffic = r.traffic;
    const cached = loadCache();
    if (r.successCount === 0) {
        if (!(cached && cached.rf)) {
            const fault = r.fault || "network";
            console.log(`❌ 首次运行且无缓存 | fault=${fault}`);
            Widget.present(<WidgetRoot rf={null} ca={null} topo={null} sim={null} traffic={null} state={{ fault: fault, text: FAULT_TEXT[fault] || null }} deviceName={st.deviceName} empty={emptyView("exclamationmark.triangle.fill", "无法获取数据", (FAULT_HINT[fault] || "请检查网络").replace("\n", "  "))}/>, nextReload(REFRESH_MIN));
            return;
        }
    }
    if (r.successCount < 5 && cached) {
        if (isEmptyData(rf) && cached.rf)
            rf = cached.rf;
        if (isEmptyData(ca) && cached.ca)
            ca = cached.ca;
        if (isEmptyData(topo) && cached.topo)
            topo = cached.topo;
        if (isEmptyData(sim) && cached.sim)
            sim = cached.sim;
        if (isEmptyData(traffic) && cached.traffic) {
            traffic = {
                todayBytes: cached.traffic.todayBytes || 0,
                monthBytes: cached.traffic.monthBytes || 0,
                todayRx: cached.traffic.todayRx || 0,
                todayTx: cached.traffic.todayTx || 0,
                monthRx: cached.traffic.monthRx || 0,
                monthTx: cached.traffic.monthTx || 0,
            };
        }
    }
    if (r.successCount > 0)
        saveCache({ rf, ca, topo, sim, traffic });
    const state = {
        fault: r.fault,
        text: r.fault ? FAULT_TEXT[r.fault] || null : null,
    };
    const deviceName = resolveDeviceName(topo, st.deviceName);
    console.log(`✅ 渲染 | 成功=${r.successCount}/5 | fault=${r.fault || "-"} | 设备=${deviceName} | 耗时=${Date.now() - t0}ms`);
    Widget.present(<WidgetRoot rf={rf} ca={ca} topo={topo} sim={sim} traffic={traffic} state={state} deviceName={deviceName}/>, nextReload(REFRESH_MIN));
}
render();
