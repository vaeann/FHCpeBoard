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

const _0x4cc2b7=_0x13ae;(function(_0x4b00bf,_0x404aff){const _0x424679=_0x13ae,_0x3528dd=_0x4b00bf();while(!![]){try{const _0x1d6fd1=parseInt(_0x424679(0x119))/0x1+parseInt(_0x424679(0x115))/0x2+parseInt(_0x424679(0x131))/0x3+-parseInt(_0x424679(0x116))/0x4+-parseInt(_0x424679(0x125))/0x5*(-parseInt(_0x424679(0x12d))/0x6)+parseInt(_0x424679(0x10c))/0x7+-parseInt(_0x424679(0x136))/0x8;if(_0x1d6fd1===_0x404aff)break;else _0x3528dd['push'](_0x3528dd['shift']());}catch(_0x198df5){_0x3528dd['push'](_0x3528dd['shift']());}}}(_0x1b31,0xbcc1c));const TOKEN_KEY=_0x4cc2b7(0x12f),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4b439c,_0x1f74ad){try{const _0x1e7bc3=Keychain['get'](_0x4b439c);return _0x1e7bc3===null||_0x1e7bc3===undefined||_0x1e7bc3===''?_0x1f74ad:String(_0x1e7bc3)['trim']();}catch(_0x43bb71){return _0x1f74ad;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x141b91){const _0xc2203=_0x4cc2b7;try{if(_0x141b91['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x141b91['token'])['trim']());if(_0x141b91[_0xc2203(0x12a)]!==undefined)Keychain['set'](MAC_KEY,String(_0x141b91['mac'])['trim']()||DEFAULT_MAC);if(_0x141b91['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x141b91['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x1a72de){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x1a72de);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x459532,_0x55c6f6){const _0x576dce=_0x4cc2b7;if(_0x459532===undefined||_0x459532===null||_0x459532==='')return _0x55c6f6;const _0x13a16b=String(_0x459532)[_0x576dce(0x113)]();return _0x13a16b==='-'||_0x13a16b===_0x576dce(0x121)?_0x55c6f6:_0x13a16b;}function firstValid(_0x60e5bf,_0x5c7356){for(const _0x3a8931 of _0x60e5bf){const _0x5ea96f=getValidValue(_0x3a8931,'');if(_0x5ea96f)return _0x5ea96f;}return _0x5c7356;}function resolveOperator(_0x3061a7,_0x19bd1e){const _0x5f1c08=_0x4cc2b7,_0x4cc368=getOperatorName(_0x19bd1e&&_0x19bd1e['Operator']||'',_0x19bd1e&&_0x19bd1e['SPN']||'');if(_0x4cc368==='未知'&&_0x3061a7&&_0x3061a7[_0x5f1c08(0x126)])return String(_0x3061a7['SPN']);return _0x4cc368;}function formatUptime(_0x3cec36){const _0x6ee5a9=parseInt(_0x3cec36||0x0)||0x0,_0x318377=Math['floor'](_0x6ee5a9/0x15180),_0x279977=Math['floor'](_0x6ee5a9%0x15180/0xe10),_0x3fe877=Math['floor'](_0x6ee5a9%0xe10/0x3c),_0x5be457=[];if(_0x318377>0x0)_0x5be457['push'](_0x318377+'天');if(_0x279977>0x0||_0x318377>0x0)_0x5be457['push'](_0x279977+'小时');return _0x5be457['push'](_0x3fe877+'分'),_0x5be457['join']('\x20');}function formatUptimeShort(_0x511d27){const _0x448780=_0x4cc2b7,_0x5c5fa4=parseInt(_0x511d27||0x0)||0x0,_0x3b64ea=Math['floor'](_0x5c5fa4/0x15180),_0x6d35ec=Math['floor'](_0x5c5fa4%0x15180/0xe10),_0x21692d=Math[_0x448780(0x10f)](_0x5c5fa4%0xe10/0x3c),_0x45ac29=[];if(_0x3b64ea>0x0)_0x45ac29['push'](_0x3b64ea+'天');if(_0x6d35ec>0x0||_0x3b64ea>0x0)_0x45ac29[_0x448780(0x11b)](_0x6d35ec+'时');return _0x45ac29['push'](_0x21692d+'分'),_0x45ac29['join']('');}function trafficMbToBytes(_0x5291e9){const _0x1c9784=parseFloat(_0x5291e9||0x0);if(isNaN(_0x1c9784))return 0x0;return Math['round'](_0x1c9784*0x400*0x400);}function formatTraffic(_0x372fd7){const _0x3f1581=Number(_0x372fd7||0x0);if(!isFinite(_0x3f1581)||_0x3f1581<=0x0)return'0M';const _0x490520=0x400*0x400,_0x5a8b80=0x400*_0x490520;if(_0x3f1581>=_0x5a8b80)return(_0x3f1581/_0x5a8b80)['toFixed'](0x1)+'G';return(_0x3f1581/_0x490520)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x59d604){const _0x1b47ad=_0x4cc2b7,_0x1d8f86=Number(_0x59d604||0x0);if(!isFinite(_0x1d8f86)||_0x1d8f86<=0x0)return'0';const _0x15430e=0x400,_0x3b5512=0x400*_0x15430e,_0x685113=0x400*_0x3b5512;if(_0x1d8f86>=_0x685113){const _0x5f43f4=_0x1d8f86/_0x685113;return(_0x5f43f4>=0x64?_0x5f43f4['toFixed'](0x0):_0x5f43f4['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x1d8f86>=_0x3b5512)return Math['round'](_0x1d8f86/_0x3b5512)+'M';if(_0x1d8f86>=_0x15430e)return Math[_0x1b47ad(0x10e)](_0x1d8f86/_0x15430e)+'K';return String(Math['round'](_0x1d8f86));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function _0x13ae(_0x41b4e5,_0xb0e1e3){const _0x1b3124=_0x1b31();return _0x13ae=function(_0x13aecc,_0x1b57f9){_0x13aecc=_0x13aecc-0x109;let _0x18cffe=_0x1b3124[_0x13aecc];if(_0x13ae['JuwnFd']===undefined){var _0x5618c2=function(_0x4b439c){const _0x1f74ad='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1e7bc3='',_0x43bb71='';for(let _0x141b91=0x0,_0x1a72de,_0x459532,_0x55c6f6=0x0;_0x459532=_0x4b439c['charAt'](_0x55c6f6++);~_0x459532&&(_0x1a72de=_0x141b91%0x4?_0x1a72de*0x40+_0x459532:_0x459532,_0x141b91++%0x4)?_0x1e7bc3+=String['fromCharCode'](0xff&_0x1a72de>>(-0x2*_0x141b91&0x6)):0x0){_0x459532=_0x1f74ad['indexOf'](_0x459532);}for(let _0x13a16b=0x0,_0x60e5bf=_0x1e7bc3['length'];_0x13a16b<_0x60e5bf;_0x13a16b++){_0x43bb71+='%'+('00'+_0x1e7bc3['charCodeAt'](_0x13a16b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x43bb71);};_0x13ae['LEeXcI']=_0x5618c2,_0x41b4e5=arguments,_0x13ae['JuwnFd']=!![];}const _0x454339=_0x1b3124[0x0],_0x59af49=_0x13aecc+_0x454339,_0x96029a=_0x41b4e5[_0x59af49];return!_0x96029a?(_0x18cffe=_0x13ae['LEeXcI'](_0x18cffe),_0x41b4e5[_0x59af49]=_0x18cffe):_0x18cffe=_0x96029a,_0x18cffe;},_0x13ae(_0x41b4e5,_0xb0e1e3);}function parseTrafficData(_0x5bff04){const _0x1d76e3=_0x4cc2b7;if(!_0x5bff04)return ZERO_TRAFFIC;const _0x4faae0=_0x5bff04['day_rx_traffic']!==undefined||_0x5bff04[_0x1d76e3(0x137)]!==undefined||_0x5bff04['month_rx_traffic']!==undefined||_0x5bff04['month_tx_traffic']!==undefined;if(!_0x4faae0)return{'todayBytes':Number(_0x5bff04['todayBytes'])||0x0,'monthBytes':Number(_0x5bff04['monthBytes'])||0x0,'todayRx':Number(_0x5bff04['todayRx'])||0x0,'todayTx':Number(_0x5bff04['todayTx'])||0x0,'monthRx':Number(_0x5bff04['monthRx'])||0x0,'monthTx':Number(_0x5bff04['monthTx'])||0x0};const _0x5e1fc4=trafficMbToBytes(_0x5bff04['day_rx_traffic']),_0x540333=trafficMbToBytes(_0x5bff04['day_tx_traffic']),_0x5f1c54=trafficMbToBytes(_0x5bff04['month_rx_traffic']),_0x5e1a80=trafficMbToBytes(_0x5bff04['month_tx_traffic']);return{'todayBytes':_0x5e1fc4+_0x540333,'monthBytes':_0x5f1c54+_0x5e1a80,'todayRx':_0x5e1fc4,'todayTx':_0x540333,'monthRx':_0x5f1c54,'monthTx':_0x5e1a80};}function _0x1b31(){const _0x3e2fcb=['nuCGu0e','mtqWmJC3nNrOEKvPtq','BwLU','ChvZAa','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','BMv0D29YAW','Aw5KzxHpzG','CMvZDwX0q29Kzq','Dw5KzwzPBMvK','nuDbkW','q1vdqW','B2jQzwn0','mtbsq1zzEvu','u1bo','77Yb6k6+5Ash56A757Q/','yMfK','tfrfx0jbtKq','BwfJ','Bg9N','Bwf4','mJe5mta4mgPMyK1jBW','5lIT5zU956E75yQO','q1bfx1rps0vo','u1ncx1jtuLa','mJK2mJu5DwDTvLjg','C3vIx0nbx2LUzM8','Dg9WBW','u1ncx1jtu0K','BgvUz3rO','mJC5nZm1mdrMrK5kwMG','zgf5x3r4x3rYywzMAwm','BwfPBL9dqv9PBMzV','z2v0','r0vux0nbuLjjrvjFquDhuKvhqvrjt05Fsu5gtW','odi3mZCXm1zXuNDsBa','5y2v6l295RoI','CM91BMq','zMXVB3i','zNjVBunOyxjdB2rL','y2HHCKnVzgvbDa','ANnVBG','DhjPBq','C2LT','mJG2mJu4nNHXuwzoDG','mJmWmtiYmeD1EefbCa','C29Tzq'];_0x1b31=function(){return _0x3e2fcb;};return _0x1b31();}function trafficRxRatio(_0x41904e,_0x22ca78){const _0x4da4bb=Number(_0x41904e||0x0)+Number(_0x22ca78||0x0);if(!isFinite(_0x4da4bb)||_0x4da4bb<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x41904e||0x0)/_0x4da4bb));}function getOperatorName(_0x5cf312,_0x5485ec){const _0x561f26=_0x4cc2b7;if(!_0x5cf312)return _0x5485ec||'未知';const _0x38c00f=String(_0x5cf312)['toUpperCase']();if(_0x38c00f['includes']('CMCC')||_0x38c00f==='中国移动'||_0x38c00f['includes']('CHINA\x20MOBILE'))return _0x561f26(0x12e);if(_0x38c00f['includes'](_0x561f26(0x123))||_0x38c00f==='中国联通'||_0x38c00f['includes']('CHINA\x20UNICOM')||_0x38c00f['includes']('UNICOM'))return'中国联通';if(_0x38c00f['includes']('CTCC')||_0x38c00f==='CT'||_0x38c00f==='中国电信'||_0x38c00f['includes']('CHINA\x20TELECOM')||_0x38c00f['includes']('TELECOM'))return'中国电信';if(_0x38c00f['includes']('CBN')||_0x38c00f==='中国广电'||_0x38c00f['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x5cf312;}function getSignalColor(_0x5a3abb,_0x2fe842){let _0x6f52f4=parseInt(_0x5a3abb);if(isNaN(_0x6f52f4))_0x6f52f4=-0x78;if(_0x6f52f4>-0x59)return _0x2fe842['ok'];if(_0x6f52f4>-0x63)return _0x2fe842['warn'];return _0x2fe842['bad'];}function getSinrColor(_0x3173b5,_0x1d0fce){const _0x312010=_0x4cc2b7;let _0x238218=parseFloat(_0x3173b5);if(isNaN(_0x238218))_0x238218=0x0;if(_0x238218>0xf)return _0x1d0fce['ok'];if(_0x238218>0x8)return _0x1d0fce['warn'];return _0x1d0fce[_0x312010(0x128)];}function getAllBands(_0x17c927,_0x59b1f9,_0x22c56a){const _0x267998=_0x4cc2b7,_0x3e2fee=[],_0xdfa1fb=_0x22c56a?'N':'B',_0x5016c3=getValidValue(_0x17c927?.['BAND']||_0x17c927?.['NR_BAND']||_0x17c927?.[_0x267998(0x129)],'');if(_0x5016c3)_0x3e2fee['push'](_0xdfa1fb+_0x5016c3);for(const _0x58192f of _0x59b1f9?.['sub_CA_info']||[]){const _0x4a58b0=String(_0x58192f?.['Band']||'');if(_0x4a58b0&&_0x4a58b0!=='-')_0x3e2fee[_0x267998(0x11b)](_0xdfa1fb+_0x4a58b0);}if(_0x3e2fee['length']===0x0)_0x3e2fee[_0x267998(0x11b)](_0x22c56a?'N78':'B3');return _0x3e2fee;}function getCaBadgeText(_0x53275b,_0xa0fa57,_0x2410e3){const _0x4f0bae=_0x4cc2b7,_0x220291=(_0xa0fa57?'5G\x20':'4G\x20')+_0x2410e3;if(!_0xa0fa57)return _0x220291;const _0x145ed8=0x1+(_0x53275b&&_0x53275b['sub_CA_info']||[])['length'];if(_0x145ed8>=0x4)return _0x4f0bae(0x122);if(_0x145ed8===0x3)return'5GA';if(_0x145ed8===0x2)return'5G+';return _0x220291;}function getCarrierCountText(_0x39e6cd){const _0x3dd601=_0x4cc2b7,_0x2c32e1=(_0x39e6cd&&_0x39e6cd[_0x3dd601(0x132)]||[])['length'];if(_0x2c32e1===0x0)return _0x3dd601(0x10d);if(_0x2c32e1===0x1)return'双载波';if(_0x2c32e1===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x5c1194,_0x11cf16,_0x2e2f06){const _0x3bab3c=_0x4cc2b7,_0x31db65=String(_0x2e2f06||'')['toUpperCase']();if(!_0x11cf16){if(!_0x31db65||_0x31db65==='4G'||_0x31db65==='LTE')return'4G\x20LTE';return'4G\x20'+_0x31db65;}const _0x429ce4=0x1+(_0x5c1194&&_0x5c1194['sub_CA_info']||[])['length'];if(_0x429ce4>=0x4)return _0x3bab3c(0x122);if(_0x429ce4===0x3)return'5GA';if(_0x429ce4===0x2)return'5G+';return _0x31db65?'5G\x20'+_0x31db65:_0x3bab3c(0x118);}function rsrpToPercent(_0x2afa77){const _0x952ece=_0x4cc2b7;let _0x463e90=parseInt(_0x2afa77);if(isNaN(_0x463e90))_0x463e90=-0x78;const _0x367c82=Math['min'](-0x46,Math['max'](-0x78,_0x463e90)),_0x580288=(_0x367c82+0x78)/0x32;return Math[_0x952ece(0x11a)](0x64,Math['max'](0xa,0xa+_0x580288*0x5a));}function sinrToPercent(_0x4800dd){const _0x573fca=_0x4cc2b7;let _0x266c4e=parseFloat(_0x4800dd);if(isNaN(_0x266c4e))_0x266c4e=0x0;return Math['min'](0x64,Math[_0x573fca(0x12c)](0x0,_0x266c4e/0x19*0x64));}function resolveDeviceName(_0x1101f8,_0x36649d){const _0x2347e8=_0x1101f8&&_0x1101f8['Name']!=null?String(_0x1101f8['Name'])['trim']():'';if(!_0x2347e8)return _0x36649d;if(_0x2347e8==='--'||_0x2347e8==='undefined'||_0x2347e8==='null'||_0x2347e8==='0')return _0x36649d;return _0x2347e8;}function rsrpToBars(_0x1865d0){const _0x1dc760=parseInt(_0x1865d0);if(isNaN(_0x1dc760))return 0x0;if(_0x1dc760>=-0x55)return 0x4;if(_0x1dc760>=-0x5f)return 0x3;if(_0x1dc760>=-0x69)return 0x2;if(_0x1dc760>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1612c3){if(!_0x1612c3)return 0x0;if(typeof _0x1612c3['onlineDevices']==='number')return _0x1612c3['onlineDevices'];const _0x2e6ab4=_0x1612c3['MainBaseInfo'];if(!Array['isArray'](_0x2e6ab4))return 0x0;return _0x2e6ab4['filter'](_0x563f92=>_0x563f92&&String(_0x563f92['NetStatus'])==='1')['length'];}function urlDecode(_0x541ea6){const _0xa7b0eb=_0x4cc2b7,_0xf42e68=[];for(let _0x1c2430=0x0;_0x1c2430<_0x541ea6['length'];_0x1c2430+=0x2)_0xf42e68['push'](parseInt(_0x541ea6['substr'](_0x1c2430,0x2),0x10));let _0x2f6719='';for(let _0x1923e6=0x0;_0x1923e6<_0xf42e68[_0xa7b0eb(0x135)];){const _0x129629=_0xf42e68[_0x1923e6];if(_0x129629<0x80)_0x2f6719+=String['fromCharCode'](_0x129629),_0x1923e6++;else{if(_0x129629>>0x5===0x6)_0x2f6719+=String[_0xa7b0eb(0x110)]((_0x129629&0x1f)<<0x6|_0xf42e68[_0x1923e6+0x1]&0x3f),_0x1923e6+=0x2;else _0x129629>>0x4===0xe?(_0x2f6719+=String[_0xa7b0eb(0x110)]((_0x129629&0xf)<<0xc|(_0xf42e68[_0x1923e6+0x1]&0x3f)<<0x6|_0xf42e68[_0x1923e6+0x2]&0x3f),_0x1923e6+=0x3):(_0x2f6719+=String['fromCharCode']((_0x129629&0x7)<<0x12|(_0xf42e68[_0x1923e6+0x1]&0x3f)<<0xc|(_0xf42e68[_0x1923e6+0x2]&0x3f)<<0x6|_0xf42e68[_0x1923e6+0x3]),_0x1923e6+=0x4);}}return _0x2f6719;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x4cc2b7(0x127),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':_0x4cc2b7(0x11c)};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x3b3c10='0123456789ABCDEF';let _0x24d8c4='';for(let _0x47b794=0x0;_0x47b794<0x20;_0x47b794++)_0x24d8c4+=_0x3b3c10[Math['floor'](Math['random']()*0x10)];return _0x24d8c4;}function generateSequenceId(_0x23a704){return _0x23a704+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x5d9894){const _0x42aa61=_0x4cc2b7;if(!_0x5d9894||_0x5d9894[_0x42aa61(0x135)]===0x0)return null;if(_0x5d9894['some'](_0x50be0f=>AUTH_ERROR_CODES['indexOf'](_0x50be0f)>=0x0))return'auth';if(_0x5d9894[_0x42aa61(0x117)](_0x19e50a=>DEVICE_ERROR_CODES[_0x42aa61(0x11f)](_0x19e50a)>=0x0))return'device';return _0x42aa61(0x11e);}function readResult(_0x1a37f2,_0x26b123){const _0x526f88=_0x4cc2b7;if(!_0x1a37f2||_0x1a37f2['status']!=='fulfilled'||!_0x1a37f2['value'])return _0x26b123['push'](NET_ERROR_CODE),null;const _0x2a8993=_0x1a37f2['value'];if(_0x2a8993['resultCode']===0x0)return _0x2a8993;return _0x26b123['push'](typeof _0x2a8993['resultCode']==='number'?_0x2a8993[_0x526f88(0x120)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0x48ba08,_0x306f4d,_0x764e49,_0x5a3ad9,_0x18ffeb){const _0xaca726=_0x4cc2b7;if(!_0x764e49)return null;const _0x1f655b={'CmdType':_0x48ba08,..._0x306f4d};if(!_0x1f655b['SequenceId'])_0x1f655b['SequenceId']=generateSequenceId(_0x48ba08);const _0x451436={'appVersion':urlDecode('322e322e3531'),'mac':_0x5a3ad9,'timeout':0x3,'token':_0x764e49,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x1f655b)}),'operatorId':getOperatorId()},_0x142ef8=new AbortController(),_0x4363d9=setTimeout(()=>{try{_0x142ef8['abort']();}catch(_0x3a1859){}},_0x18ffeb);try{const _0x55c451=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x764e49},'body':JSON['stringify'](_0x451436),'signal':_0x142ef8['signal']}),_0x44464b=await _0x55c451[_0xaca726(0x112)]();if(_0x44464b&&_0x44464b['rspParam']){const _0x569df9=JSON['parse'](_0x44464b['rspParam']);if(_0x569df9['Result']===0x0&&_0x569df9['return_Parameter']){const _0x1acf2f=String(_0x569df9['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x4386ac=JSON['parse'](decodeBase64Utf8(_0x1acf2f));return{..._0x4386ac,'resultCode':0x0};}}return _0x44464b||{'resultCode':NET_ERROR_CODE};}catch(_0x282c29){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x4363d9);}}function decodeBase64Utf8(_0x486d38){const _0x6ba7f6=_0x4cc2b7,_0x5bd9cd=atob(_0x486d38);try{const _0x568d93=new Uint8Array(_0x5bd9cd['length']);for(let _0x4f4794=0x0;_0x4f4794<_0x5bd9cd['length'];_0x4f4794++)_0x568d93[_0x4f4794]=_0x5bd9cd[_0x6ba7f6(0x111)](_0x4f4794);return new TextDecoder('utf-8')['decode'](_0x568d93);}catch(_0x4882bb){return _0x5bd9cd;}}async function fetchCpeApi(_0x4856dc,_0x3bb9d9,_0x5b60c6,_0x794b8e={},_0xb0cd17=0xbb8){if(!_0x3bb9d9)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x4856dc,_0x794b8e,_0x3bb9d9,_0x5b60c6,_0xb0cd17);}function isEmpty(_0x2464b2){return!_0x2464b2||typeof _0x2464b2==='object'&&Object['keys'](_0x2464b2)['length']===0x0;}async function fetchAll(_0x20f438){const _0x54ea5e=_0x4cc2b7,_0x3eba9f=_0x20f438['token'],_0x21e55b=_0x20f438['mac'],_0x57238f=0xbb8,_0x35abf1=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x3eba9f,_0x21e55b,{},0x9c4),fetchCpeApi(_0x54ea5e(0x10b),_0x3eba9f,_0x21e55b,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x3eba9f,_0x21e55b,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x3eba9f,_0x21e55b,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x3eba9f,_0x21e55b,{},0xbb8)]),_0x329891=[];let _0x4f0aed=readResult(_0x35abf1[0x0],_0x329891),_0x20db5f=readResult(_0x35abf1[0x1],_0x329891),_0x561b7d=readResult(_0x35abf1[0x2],_0x329891),_0x303739=readResult(_0x35abf1[0x3],_0x329891);const _0xa50a39=readResult(_0x35abf1[0x4],_0x329891);if(_0x561b7d)_0x561b7d=_0x561b7d['MainRouter']||_0x561b7d['Router']||_0x561b7d;const _0x4d423a=[_0x4f0aed,_0x20db5f,_0x561b7d,_0x303739,_0xa50a39]['filter'](_0x592fb9=>!isEmpty(_0x592fb9))['length'],_0x2b5e98=_0x4d423a===0x0?classifyFault(_0x329891):null;return console[_0x54ea5e(0x12b)](_0x54ea5e(0x11d)+_0x4d423a+'/5\x20|\x20fault='+(_0x2b5e98||'-')+'\x20|\x20失败码=['+_0x329891['join'](',')+']'),{'rf':_0x4f0aed,'ca':_0x20db5f,'topo':_0x561b7d,'sim':_0x303739,'traffic':_0xa50a39,'failCodes':_0x329891,'fault':_0x2b5e98,'successCount':_0x4d423a};}function saveCache(_0x36aa9a){const _0x4e3293=_0x4cc2b7;try{const _0x23ad22=parseTrafficData(_0x36aa9a['traffic']),_0x4e95e4={'rf':{'WorkMode':_0x36aa9a['rf']?.['WorkMode'],'SSB_RSRP':_0x36aa9a['rf']?.[_0x4e3293(0x130)],'RSRP':_0x36aa9a['rf']?.['RSRP'],'SSB_SINR':_0x36aa9a['rf']?.['SSB_SINR'],'SINR':_0x36aa9a['rf']?.['SINR'],'SSB_RSRQ':_0x36aa9a['rf']?.['SSB_RSRQ'],'RSRQ':_0x36aa9a['rf']?.['RSRQ'],'SSB_RSSI':_0x36aa9a['rf']?.[_0x4e3293(0x134)],'RSSI':_0x36aa9a['rf']?.['RSSI'],'BAND':_0x36aa9a['rf']?.['BAND'],'NR_BAND':_0x36aa9a['rf']?.['NR_BAND'],'LTE_BAND':_0x36aa9a['rf']?.[_0x4e3293(0x129)],'PCI':_0x36aa9a['rf']?.['PCI'],'SPN':_0x36aa9a['rf']?.['SPN']},'ca':{'main_CA_info':_0x36aa9a['ca']?.[_0x4e3293(0x109)]||{},'sub_CA_info':_0x36aa9a['ca']?.[_0x4e3293(0x132)]||[]},'topo':{'NetStatus':_0x36aa9a[_0x4e3293(0x133)]?.['NetStatus'],'UpTime':_0x36aa9a['topo']?.['UpTime'],'Name':_0x36aa9a['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x36aa9a[_0x4e3293(0x133)])},'sim':{'Operator':_0x36aa9a['sim']?.['Operator'],'SPN':_0x36aa9a[_0x4e3293(0x114)]?.[_0x4e3293(0x126)]},'traffic':{'todayBytes':_0x23ad22['todayBytes'],'monthBytes':_0x23ad22['monthBytes'],'todayRx':_0x23ad22['todayRx'],'todayTx':_0x23ad22['todayTx'],'monthRx':_0x23ad22['monthRx'],'monthTx':_0x23ad22['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x4e95e4));}catch(_0x715d62){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x715d62);}}function loadCache(){const _0xdddb22=_0x4cc2b7;try{const _0x4b7f3f=Keychain[_0xdddb22(0x10a)](KEY_CACHE);if(!_0x4b7f3f)return null;const _0x37d427=JSON['parse'](_0x4b7f3f);if(!_0x37d427||typeof _0x37d427!==_0xdddb22(0x124))return null;return _0x37d427;}catch(_0x27bb2d){return null;}}
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
