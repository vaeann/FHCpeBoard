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

(function(_0x28d07f,_0x2e2df6){const _0x453538=_0x14b3,_0x2a2b0f=_0x28d07f();while(!![]){try{const _0x3ee57e=parseInt(_0x453538(0xfe))/0x1+-parseInt(_0x453538(0xf8))/0x2*(-parseInt(_0x453538(0x117))/0x3)+parseInt(_0x453538(0x10c))/0x4+parseInt(_0x453538(0xf2))/0x5*(parseInt(_0x453538(0x10b))/0x6)+-parseInt(_0x453538(0xf0))/0x7*(-parseInt(_0x453538(0x10d))/0x8)+-parseInt(_0x453538(0x10e))/0x9+-parseInt(_0x453538(0x11d))/0xa*(parseInt(_0x453538(0x10f))/0xb);if(_0x3ee57e===_0x2e2df6)break;else _0x2a2b0f['push'](_0x2a2b0f['shift']());}catch(_0x5a856f){_0x2a2b0f['push'](_0x2a2b0f['shift']());}}}(_0x1ba9,0xbf1f4));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x583c9a,_0x584304){const _0xb3f36f=_0x14b3;try{const _0xa49b60=Keychain['get'](_0x583c9a);return _0xa49b60===null||_0xa49b60===undefined||_0xa49b60===''?_0x584304:String(_0xa49b60)[_0xb3f36f(0xf4)]();}catch(_0x30638b){return _0x584304;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xaacede){const _0xb87e6a=_0x14b3;try{if(_0xaacede['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0xaacede['token'])['trim']());if(_0xaacede['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0xaacede['mac'])['trim']()||DEFAULT_MAC);if(_0xaacede['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0xaacede['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x2668b9){console[_0xb87e6a(0x10a)]('⚠️\x20保存设置失败\x20|\x20'+_0x2668b9);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x3f967e,_0x560018){if(_0x3f967e===undefined||_0x3f967e===null||_0x3f967e==='')return _0x560018;const _0x478c78=String(_0x3f967e)['trim']();return _0x478c78==='-'||_0x478c78==='undefined'?_0x560018:_0x478c78;}function firstValid(_0x111f3c,_0x5d34c3){for(const _0x2e93fb of _0x111f3c){const _0x1601c5=getValidValue(_0x2e93fb,'');if(_0x1601c5)return _0x1601c5;}return _0x5d34c3;}function resolveOperator(_0x364f58,_0x2e2211){const _0x4c8355=getOperatorName(_0x2e2211&&_0x2e2211['Operator']||'',_0x2e2211&&_0x2e2211['SPN']||'');if(_0x4c8355==='未知'&&_0x364f58&&_0x364f58['SPN'])return String(_0x364f58['SPN']);return _0x4c8355;}function formatUptime(_0x5abed3){const _0x3aa9f6=_0x14b3,_0x3104f9=parseInt(_0x5abed3||0x0)||0x0,_0x5c4336=Math['floor'](_0x3104f9/0x15180),_0xb9ab69=Math[_0x3aa9f6(0xfc)](_0x3104f9%0x15180/0xe10),_0xc6948f=Math['floor'](_0x3104f9%0xe10/0x3c),_0x38161a=[];if(_0x5c4336>0x0)_0x38161a['push'](_0x5c4336+'天');if(_0xb9ab69>0x0||_0x5c4336>0x0)_0x38161a['push'](_0xb9ab69+'小时');return _0x38161a['push'](_0xc6948f+'分'),_0x38161a['join']('\x20');}function formatUptimeShort(_0x5acc0e){const _0x3dc0ec=parseInt(_0x5acc0e||0x0)||0x0,_0x24424d=Math['floor'](_0x3dc0ec/0x15180),_0x34a935=Math['floor'](_0x3dc0ec%0x15180/0xe10),_0x56a878=Math['floor'](_0x3dc0ec%0xe10/0x3c),_0xe76591=[];if(_0x24424d>0x0)_0xe76591['push'](_0x24424d+'天');if(_0x34a935>0x0||_0x24424d>0x0)_0xe76591['push'](_0x34a935+'时');return _0xe76591['push'](_0x56a878+'分'),_0xe76591['join']('');}function trafficMbToBytes(_0x3360e4){const _0x4dc200=parseFloat(_0x3360e4||0x0);if(isNaN(_0x4dc200))return 0x0;return Math['round'](_0x4dc200*0x400*0x400);}function formatTraffic(_0x27649d){const _0x472c39=Number(_0x27649d||0x0);if(!isFinite(_0x472c39)||_0x472c39<=0x0)return'0M';const _0x5630e9=0x400*0x400,_0x18849=0x400*_0x5630e9;if(_0x472c39>=_0x18849)return(_0x472c39/_0x18849)['toFixed'](0x1)+'G';return(_0x472c39/_0x5630e9)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x458ad3){const _0x1dd000=_0x14b3,_0x325527=Number(_0x458ad3||0x0);if(!isFinite(_0x325527)||_0x325527<=0x0)return'0';const _0xad2247=0x400,_0x3b1c5a=0x400*_0xad2247,_0x2cbd75=0x400*_0x3b1c5a;if(_0x325527>=_0x2cbd75){const _0x1b10b7=_0x325527/_0x2cbd75;return(_0x1b10b7>=0x64?_0x1b10b7['toFixed'](0x0):_0x1b10b7['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x325527>=_0x3b1c5a)return Math[_0x1dd000(0xff)](_0x325527/_0x3b1c5a)+'M';if(_0x325527>=_0xad2247)return Math['round'](_0x325527/_0xad2247)+'K';return String(Math['round'](_0x325527));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x2b90a1){const _0x549d7d=_0x14b3;if(!_0x2b90a1)return ZERO_TRAFFIC;const _0x10b94a=_0x2b90a1['day_rx_traffic']!==undefined||_0x2b90a1['day_tx_traffic']!==undefined||_0x2b90a1['month_rx_traffic']!==undefined||_0x2b90a1[_0x549d7d(0xfa)]!==undefined;if(!_0x10b94a)return{'todayBytes':Number(_0x2b90a1['todayBytes'])||0x0,'monthBytes':Number(_0x2b90a1['monthBytes'])||0x0,'todayRx':Number(_0x2b90a1['todayRx'])||0x0,'todayTx':Number(_0x2b90a1['todayTx'])||0x0,'monthRx':Number(_0x2b90a1['monthRx'])||0x0,'monthTx':Number(_0x2b90a1['monthTx'])||0x0};const _0x9f142e=trafficMbToBytes(_0x2b90a1['day_rx_traffic']),_0x2e34ee=trafficMbToBytes(_0x2b90a1['day_tx_traffic']),_0x2a284e=trafficMbToBytes(_0x2b90a1['month_rx_traffic']),_0xff5b19=trafficMbToBytes(_0x2b90a1['month_tx_traffic']);return{'todayBytes':_0x9f142e+_0x2e34ee,'monthBytes':_0x2a284e+_0xff5b19,'todayRx':_0x9f142e,'todayTx':_0x2e34ee,'monthRx':_0x2a284e,'monthTx':_0xff5b19};}function trafficRxRatio(_0x31e098,_0x5085bb){const _0x6d7e7=Number(_0x31e098||0x0)+Number(_0x5085bb||0x0);if(!isFinite(_0x6d7e7)||_0x6d7e7<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x31e098||0x0)/_0x6d7e7));}function getOperatorName(_0x2a0db1,_0x11485f){const _0x36cbb6=_0x14b3;if(!_0x2a0db1)return _0x11485f||'未知';const _0x4c1ba1=String(_0x2a0db1)['toUpperCase']();if(_0x4c1ba1['includes']('CMCC')||_0x4c1ba1==='中国移动'||_0x4c1ba1['includes'](_0x36cbb6(0xf6)))return'中国移动';if(_0x4c1ba1[_0x36cbb6(0x106)]('CUCC')||_0x4c1ba1==='中国联通'||_0x4c1ba1['includes']('CHINA\x20UNICOM')||_0x4c1ba1['includes']('UNICOM'))return'中国联通';if(_0x4c1ba1['includes'](_0x36cbb6(0x104))||_0x4c1ba1==='CT'||_0x4c1ba1===_0x36cbb6(0x109)||_0x4c1ba1['includes']('CHINA\x20TELECOM')||_0x4c1ba1[_0x36cbb6(0x106)]('TELECOM'))return'中国电信';if(_0x4c1ba1[_0x36cbb6(0x106)]('CBN')||_0x4c1ba1===_0x36cbb6(0xf9)||_0x4c1ba1['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x2a0db1;}function getSignalColor(_0x114384,_0x20ea5f){const _0x50dbc3=_0x14b3;let _0x41888a=parseInt(_0x114384);if(isNaN(_0x41888a))_0x41888a=-0x78;if(_0x41888a>-0x59)return _0x20ea5f['ok'];if(_0x41888a>-0x63)return _0x20ea5f[_0x50dbc3(0x11a)];return _0x20ea5f['bad'];}function getSinrColor(_0x43213f,_0x2b768a){let _0x1dd4ca=parseFloat(_0x43213f);if(isNaN(_0x1dd4ca))_0x1dd4ca=0x0;if(_0x1dd4ca>0xf)return _0x2b768a['ok'];if(_0x1dd4ca>0x8)return _0x2b768a['warn'];return _0x2b768a['bad'];}function getAllBands(_0x513ab8,_0xd088c2,_0x5d7adb){const _0x35e55c=_0x14b3,_0x3b848c=[],_0x4f5a53=_0x5d7adb?'N':'B',_0x395cda=getValidValue(_0x513ab8?.['BAND']||_0x513ab8?.['NR_BAND']||_0x513ab8?.['LTE_BAND'],'');if(_0x395cda)_0x3b848c['push'](_0x4f5a53+_0x395cda);for(const _0x253923 of _0xd088c2?.['sub_CA_info']||[]){const _0x3ad060=String(_0x253923?.['Band']||'');if(_0x3ad060&&_0x3ad060!=='-')_0x3b848c['push'](_0x4f5a53+_0x3ad060);}if(_0x3b848c[_0x35e55c(0x113)]===0x0)_0x3b848c[_0x35e55c(0x114)](_0x5d7adb?'N78':'B3');return _0x3b848c;}function _0x1ba9(){const _0x550be6=['BgvUz3rO','ChvZAa','r0vux1njtv9jtKzp','C29Tzq','mJq5DMHjtfvo','CMvWBgfJzq','tfrf','D2fYBG','C3rYAw5NAwz5','C3vIx0nbx2LUzM8','mtq3odC4mZbtuuPiAuW','mtq4mJzbwgPgEvm','uenj','mJKWndvMBwTVBeS','5lIj6l295RoI','DhjPBq','ywXSu2v0DgXLza','q0HjtKeGtu9csuXf','tLjFqKfora','mtqWnJzVqvbduxq','5lIT5zU95BM/55s1','Bw9UDgHFDhHFDhjHzMzPyW','Aw5KzxHpzG','zMXVB3i','lZuGFcbMyxvSDd0','mJu4nty3AgPvAvn0','CM91BMq','BwfJ','nuCGu0e','u1ncx1jtuLe','Bw9UDgHuEa','q1rdqW','ANnVBG','Aw5JBhvKzxm','C2LT','Dg9WBW','5lIT5zU955s15l+H','Bg9N','mtuXohD6u1vvBG','mtaYodK5mKfKr0vRra','mtm2mfDqC1zowq','nJaWota0oeTjCNPNCW','mtfQqLDLB3G','CgfYC2u','nuCR','nuCG'];_0x1ba9=function(){return _0x550be6;};return _0x1ba9();}function getCaBadgeText(_0x3eab70,_0x24d21c,_0x499965){const _0x3725ce=_0x14b3,_0x531f1d=(_0x24d21c?'5G\x20':'4G\x20')+_0x499965;if(!_0x24d21c)return _0x531f1d;const _0x3ed021=0x1+(_0x3eab70&&_0x3eab70['sub_CA_info']||[])['length'];if(_0x3ed021>=0x4)return'5GA+';if(_0x3ed021===0x3)return'5GA';if(_0x3ed021===0x2)return _0x3725ce(0x111);return _0x531f1d;}function getCarrierCountText(_0xa10916){const _0x37d0b1=_0x14b3,_0xf8b52f=(_0xa10916&&_0xa10916['sub_CA_info']||[])['length'];if(_0xf8b52f===0x0)return'单载波';if(_0xf8b52f===0x1)return'双载波';if(_0xf8b52f===0x2)return _0x37d0b1(0xf3);return'四载波';}function getNetworkModeText(_0x58a999,_0x5c0f23,_0x32854f){const _0xdd8325=_0x14b3,_0x469e5c=String(_0x32854f||'')['toUpperCase']();if(!_0x5c0f23){if(!_0x469e5c||_0x469e5c==='4G'||_0x469e5c===_0xdd8325(0x119))return'4G\x20LTE';return'4G\x20'+_0x469e5c;}const _0x568018=0x1+(_0x58a999&&_0x58a999['sub_CA_info']||[])['length'];if(_0x568018>=0x4)return'5GA+';if(_0x568018===0x3)return'5GA';if(_0x568018===0x2)return'5G+';return _0x469e5c?_0xdd8325(0x112)+_0x469e5c:_0xdd8325(0x101);}function rsrpToPercent(_0x252d70){let _0x3a686a=parseInt(_0x252d70);if(isNaN(_0x3a686a))_0x3a686a=-0x78;const _0x10bbf0=Math['min'](-0x46,Math['max'](-0x78,_0x3a686a)),_0x3ecba3=(_0x10bbf0+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x3ecba3*0x5a));}function sinrToPercent(_0x47b3b8){let _0x2b6b85=parseFloat(_0x47b3b8);if(isNaN(_0x2b6b85))_0x2b6b85=0x0;return Math['min'](0x64,Math['max'](0x0,_0x2b6b85/0x19*0x64));}function _0x14b3(_0x312ab1,_0x429ba4){const _0x1ba9fd=_0x1ba9();return _0x14b3=function(_0x14b3b6,_0x481de3){_0x14b3b6=_0x14b3b6-0xf0;let _0x3167db=_0x1ba9fd[_0x14b3b6];if(_0x14b3['tsejMH']===undefined){var _0x54e2db=function(_0x583c9a){const _0x584304='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xa49b60='',_0x30638b='';for(let _0xaacede=0x0,_0x2668b9,_0x3f967e,_0x560018=0x0;_0x3f967e=_0x583c9a['charAt'](_0x560018++);~_0x3f967e&&(_0x2668b9=_0xaacede%0x4?_0x2668b9*0x40+_0x3f967e:_0x3f967e,_0xaacede++%0x4)?_0xa49b60+=String['fromCharCode'](0xff&_0x2668b9>>(-0x2*_0xaacede&0x6)):0x0){_0x3f967e=_0x584304['indexOf'](_0x3f967e);}for(let _0x478c78=0x0,_0x111f3c=_0xa49b60['length'];_0x478c78<_0x111f3c;_0x478c78++){_0x30638b+='%'+('00'+_0xa49b60['charCodeAt'](_0x478c78)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x30638b);};_0x14b3['ejgUhW']=_0x54e2db,_0x312ab1=arguments,_0x14b3['tsejMH']=!![];}const _0x2ea244=_0x1ba9fd[0x0],_0x202455=_0x14b3b6+_0x2ea244,_0x3ae702=_0x312ab1[_0x202455];return!_0x3ae702?(_0x3167db=_0x14b3['ejgUhW'](_0x3167db),_0x312ab1[_0x202455]=_0x3167db):_0x3167db=_0x3ae702,_0x3167db;},_0x14b3(_0x312ab1,_0x429ba4);}function resolveDeviceName(_0x2f8e65,_0x345020){const _0x49af8b=_0x2f8e65&&_0x2f8e65['Name']!=null?String(_0x2f8e65['Name'])['trim']():'';if(!_0x49af8b)return _0x345020;if(_0x49af8b==='--'||_0x49af8b==='undefined'||_0x49af8b==='null'||_0x49af8b==='0')return _0x345020;return _0x49af8b;}function rsrpToBars(_0x593acd){const _0x2c2229=parseInt(_0x593acd);if(isNaN(_0x2c2229))return 0x0;if(_0x2c2229>=-0x55)return 0x4;if(_0x2c2229>=-0x5f)return 0x3;if(_0x2c2229>=-0x69)return 0x2;if(_0x2c2229>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x54200f){if(!_0x54200f)return 0x0;if(typeof _0x54200f['onlineDevices']==='number')return _0x54200f['onlineDevices'];const _0x263860=_0x54200f['MainBaseInfo'];if(!Array['isArray'](_0x263860))return 0x0;return _0x263860['filter'](_0x3befd8=>_0x3befd8&&String(_0x3befd8['NetStatus'])==='1')['length'];}function urlDecode(_0x44370e){const _0x5c35ea=[];for(let _0x1b4d07=0x0;_0x1b4d07<_0x44370e['length'];_0x1b4d07+=0x2)_0x5c35ea['push'](parseInt(_0x44370e['substr'](_0x1b4d07,0x2),0x10));let _0x242b2d='';for(let _0x51202e=0x0;_0x51202e<_0x5c35ea['length'];){const _0x171756=_0x5c35ea[_0x51202e];if(_0x171756<0x80)_0x242b2d+=String['fromCharCode'](_0x171756),_0x51202e++;else{if(_0x171756>>0x5===0x6)_0x242b2d+=String['fromCharCode']((_0x171756&0x1f)<<0x6|_0x5c35ea[_0x51202e+0x1]&0x3f),_0x51202e+=0x2;else _0x171756>>0x4===0xe?(_0x242b2d+=String['fromCharCode']((_0x171756&0xf)<<0xc|(_0x5c35ea[_0x51202e+0x1]&0x3f)<<0x6|_0x5c35ea[_0x51202e+0x2]&0x3f),_0x51202e+=0x3):(_0x242b2d+=String['fromCharCode']((_0x171756&0x7)<<0x12|(_0x5c35ea[_0x51202e+0x1]&0x3f)<<0xc|(_0x5c35ea[_0x51202e+0x2]&0x3f)<<0x6|_0x5c35ea[_0x51202e+0x3]),_0x51202e+=0x4);}}return _0x242b2d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0xb2fc6f='0123456789ABCDEF';let _0x20e5fe='';for(let _0x3e4421=0x0;_0x3e4421<0x20;_0x3e4421++)_0x20e5fe+=_0xb2fc6f[Math['floor'](Math['random']()*0x10)];return _0x20e5fe;}function generateSequenceId(_0x2f54b3){return _0x2f54b3+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x3bd44f){const _0x57201a=_0x14b3;if(!_0x3bd44f||_0x3bd44f[_0x57201a(0x113)]===0x0)return null;if(_0x3bd44f['some'](_0x2afa60=>AUTH_ERROR_CODES['indexOf'](_0x2afa60)>=0x0))return'auth';if(_0x3bd44f[_0x57201a(0x116)](_0x9fbbbb=>DEVICE_ERROR_CODES[_0x57201a(0xfb)](_0x9fbbbb)>=0x0))return'device';return'network';}function readResult(_0x41e286,_0x38fd94){if(!_0x41e286||_0x41e286['status']!=='fulfilled'||!_0x41e286['value'])return _0x38fd94['push'](NET_ERROR_CODE),null;const _0x23775f=_0x41e286['value'];if(_0x23775f['resultCode']===0x0)return _0x23775f;return _0x38fd94['push'](typeof _0x23775f['resultCode']==='number'?_0x23775f['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3bf18e,_0x310974,_0x55facd,_0x1932d0,_0x5622c2){const _0x2404d5=_0x14b3;if(!_0x55facd)return null;const _0xbc3308={'CmdType':_0x3bf18e,..._0x310974};if(!_0xbc3308['SequenceId'])_0xbc3308['SequenceId']=generateSequenceId(_0x3bf18e);const _0x8f033a={'appVersion':urlDecode('322e322e3531'),'mac':_0x1932d0,'timeout':0x3,'token':_0x55facd,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x2404d5(0x11b)](_0xbc3308)}),'operatorId':getOperatorId()},_0x53f511=new AbortController(),_0x3435d3=setTimeout(()=>{try{_0x53f511['abort']();}catch(_0x471351){}},_0x5622c2);try{const _0x242ba0=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x55facd},'body':JSON['stringify'](_0x8f033a),'signal':_0x53f511['signal']}),_0x187d00=await _0x242ba0[_0x2404d5(0x105)]();if(_0x187d00&&_0x187d00['rspParam']){const _0x45dd9f=JSON['parse'](_0x187d00['rspParam']);if(_0x45dd9f['Result']===0x0&&_0x45dd9f['return_Parameter']){const _0x124f0c=String(_0x45dd9f['return_Parameter'])[_0x2404d5(0x118)](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x26f16d=JSON[_0x2404d5(0x110)](decodeBase64Utf8(_0x124f0c));return{..._0x26f16d,'resultCode':0x0};}}return _0x187d00||{'resultCode':NET_ERROR_CODE};}catch(_0x1ca1e5){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3435d3);}}function decodeBase64Utf8(_0x1b5413){const _0x5958f3=atob(_0x1b5413);try{const _0x489b7d=new Uint8Array(_0x5958f3['length']);for(let _0x195545=0x0;_0x195545<_0x5958f3['length'];_0x195545++)_0x489b7d[_0x195545]=_0x5958f3['charCodeAt'](_0x195545);return new TextDecoder('utf-8')['decode'](_0x489b7d);}catch(_0x3b331e){return _0x5958f3;}}async function fetchCpeApi(_0x592710,_0x38b738,_0x44b1e1,_0x39a27e={},_0x5e4e38=0xbb8){if(!_0x38b738)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x592710,_0x39a27e,_0x38b738,_0x44b1e1,_0x5e4e38);}function isEmpty(_0xb97e61){return!_0xb97e61||typeof _0xb97e61==='object'&&Object['keys'](_0xb97e61)['length']===0x0;}async function fetchAll(_0x134501){const _0x20342d=_0x14b3,_0x37043f=_0x134501['token'],_0x4c0788=_0x134501[_0x20342d(0x100)],_0x2a3017=0xbb8,_0x1c901d=await Promise[_0x20342d(0xf5)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x37043f,_0x4c0788,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x37043f,_0x4c0788,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x37043f,_0x4c0788,{},0x9c4),fetchCpeApi(_0x20342d(0x115),_0x37043f,_0x4c0788,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x37043f,_0x4c0788,{},0xbb8)]),_0x32282a=[];let _0x308213=readResult(_0x1c901d[0x0],_0x32282a),_0x84288a=readResult(_0x1c901d[0x1],_0x32282a),_0x4eb53b=readResult(_0x1c901d[0x2],_0x32282a),_0x36fcc6=readResult(_0x1c901d[0x3],_0x32282a);const _0x2f9291=readResult(_0x1c901d[0x4],_0x32282a);if(_0x4eb53b)_0x4eb53b=_0x4eb53b['MainRouter']||_0x4eb53b['Router']||_0x4eb53b;const _0x3496b4=[_0x308213,_0x84288a,_0x4eb53b,_0x36fcc6,_0x2f9291]['filter'](_0x43b187=>!isEmpty(_0x43b187))['length'],_0x1bb8e8=_0x3496b4===0x0?classifyFault(_0x32282a):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x3496b4+_0x20342d(0xfd)+(_0x1bb8e8||'-')+'\x20|\x20失败码=['+_0x32282a['join'](',')+']'),{'rf':_0x308213,'ca':_0x84288a,'topo':_0x4eb53b,'sim':_0x36fcc6,'traffic':_0x2f9291,'failCodes':_0x32282a,'fault':_0x1bb8e8,'successCount':_0x3496b4};}function saveCache(_0x50c08e){const _0x30823f=_0x14b3;try{const _0x321d25=parseTrafficData(_0x50c08e['traffic']),_0x5eb1b5={'rf':{'WorkMode':_0x50c08e['rf']?.['WorkMode'],'SSB_RSRP':_0x50c08e['rf']?.['SSB_RSRP'],'RSRP':_0x50c08e['rf']?.['RSRP'],'SSB_SINR':_0x50c08e['rf']?.['SSB_SINR'],'SINR':_0x50c08e['rf']?.['SINR'],'SSB_RSRQ':_0x50c08e['rf']?.[_0x30823f(0x102)],'RSRQ':_0x50c08e['rf']?.['RSRQ'],'SSB_RSSI':_0x50c08e['rf']?.['SSB_RSSI'],'RSSI':_0x50c08e['rf']?.['RSSI'],'BAND':_0x50c08e['rf']?.['BAND'],'NR_BAND':_0x50c08e['rf']?.[_0x30823f(0xf7)],'LTE_BAND':_0x50c08e['rf']?.['LTE_BAND'],'PCI':_0x50c08e['rf']?.[_0x30823f(0xf1)],'SPN':_0x50c08e['rf']?.['SPN']},'ca':{'main_CA_info':_0x50c08e['ca']?.['main_CA_info']||{},'sub_CA_info':_0x50c08e['ca']?.[_0x30823f(0x11c)]||[]},'topo':{'NetStatus':_0x50c08e['topo']?.['NetStatus'],'UpTime':_0x50c08e[_0x30823f(0x108)]?.['UpTime'],'Name':_0x50c08e['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x50c08e['topo'])},'sim':{'Operator':_0x50c08e['sim']?.['Operator'],'SPN':_0x50c08e[_0x30823f(0x107)]?.['SPN']},'traffic':{'todayBytes':_0x321d25['todayBytes'],'monthBytes':_0x321d25['monthBytes'],'todayRx':_0x321d25['todayRx'],'todayTx':_0x321d25['todayTx'],'monthRx':_0x321d25['monthRx'],'monthTx':_0x321d25[_0x30823f(0x103)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x5eb1b5));}catch(_0x4a5bd7){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x4a5bd7);}}function loadCache(){try{const _0xc7cbfc=Keychain['get'](KEY_CACHE);if(!_0xc7cbfc)return null;const _0x44cfc1=JSON['parse'](_0xc7cbfc);if(!_0x44cfc1||typeof _0x44cfc1!=='object')return null;return _0x44cfc1;}catch(_0x543ca5){return null;}}
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
