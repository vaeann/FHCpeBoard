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

const _0x13be9c=_0x2895;(function(_0x20ff40,_0x141331){const _0x1b01c6=_0x2895,_0x5569ed=_0x20ff40();while(!![]){try{const _0x5e6f3a=parseInt(_0x1b01c6(0x7a))/0x1*(parseInt(_0x1b01c6(0x86))/0x2)+-parseInt(_0x1b01c6(0x85))/0x3+-parseInt(_0x1b01c6(0x8f))/0x4+parseInt(_0x1b01c6(0x93))/0x5+-parseInt(_0x1b01c6(0x81))/0x6+parseInt(_0x1b01c6(0x72))/0x7+parseInt(_0x1b01c6(0x89))/0x8*(parseInt(_0x1b01c6(0x9d))/0x9);if(_0x5e6f3a===_0x141331)break;else _0x5569ed['push'](_0x5569ed['shift']());}catch(_0xd6317a){_0x5569ed['push'](_0x5569ed['shift']());}}}(_0x26c9,0x18ae7));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0x13be9c(0x74);function readKey(_0x36a574,_0xc5aaf8){try{const _0x209e76=Keychain['get'](_0x36a574);return _0x209e76===null||_0x209e76===undefined||_0x209e76===''?_0xc5aaf8:String(_0x209e76)['trim']();}catch(_0x28f2fd){return _0xc5aaf8;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xa8a79b){const _0x2f06ae=_0x13be9c;try{if(_0xa8a79b['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0xa8a79b['token'])['trim']());if(_0xa8a79b['mac']!==undefined)Keychain[_0x2f06ae(0x8b)](MAC_KEY,String(_0xa8a79b['mac'])['trim']()||DEFAULT_MAC);if(_0xa8a79b['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0xa8a79b['deviceName'])[_0x2f06ae(0x6d)]()||DEFAULT_NAME);}catch(_0x3f16d6){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x3f16d6);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x25fda,_0x1e1fc5){if(_0x25fda===undefined||_0x25fda===null||_0x25fda==='')return _0x1e1fc5;const _0x1dd88a=String(_0x25fda)['trim']();return _0x1dd88a==='-'||_0x1dd88a==='undefined'?_0x1e1fc5:_0x1dd88a;}function _0x26c9(){const _0x1d9d8=['uLnsuq','tfrf','C3vIx0nbx2LUzM8','Dg9KyxLsEa','ntG2mZu1BvnwExbk','B2jQzwn0','54o954gRq1bf','ChvZAa','nuDbkW','tMfTzq','77Yb5Qoa5P+L572r57UC','yxbWBgLJyxrPB24VANnVBG','ndK0ntfABuvlAgK','A2v5CW','Bw9UDgHsEa','neCG','vxbuAw1L','q0HjtKeGtu9csuXf','BwLU','nZi1nZbVquzkzNy','CNnWugfYyw0','Aw5JBhvKzxm','BMv0D29YAW','ndmWnZC2AxrLDLrx','nMjXExvgsa','ANnVBG','u1bo','mZy4ntG0CLLMz3Lw','q0HjtKeGvu5jq09n','C2v0','r0vux0zjteLos19ut1bpte9hwv9jtKzp','zMXVB3i','tMv0u3rHDhvZ','nJqZmJyWrMH2vfnA','u2vXDwvUy2vjza','5lIT5zU95BM/55s1','t3bLCMf0B3i','ntKZnuDgy1zmEq','Dg9gAxHLza','r0vux0nfteXvtefsx1rsquzgsunFsu5gtW','q01dqW','CMvWBgfJzq','tLjFqKfora','5zUB6l295RoI','AM9PBG','77Yb6k6+5Ash56A757Q/','BgvUz3rO','mZzcAw9oCLi','DhjPBq'];_0x26c9=function(){return _0x1d9d8;};return _0x26c9();}function firstValid(_0x1908c2,_0x14c584){for(const _0x351453 of _0x1908c2){const _0x3044ab=getValidValue(_0x351453,'');if(_0x3044ab)return _0x3044ab;}return _0x14c584;}function resolveOperator(_0x2e3c0b,_0x25220a){const _0x34deb9=_0x13be9c,_0x23510a=getOperatorName(_0x25220a&&_0x25220a[_0x34deb9(0x92)]||'',_0x25220a&&_0x25220a['SPN']||'');if(_0x23510a==='未知'&&_0x2e3c0b&&_0x2e3c0b['SPN'])return String(_0x2e3c0b['SPN']);return _0x23510a;}function formatUptime(_0xb51abf){const _0x75b3db=_0x13be9c,_0x3f5e60=parseInt(_0xb51abf||0x0)||0x0,_0x393174=Math[_0x75b3db(0x8d)](_0x3f5e60/0x15180),_0x5e4baf=Math['floor'](_0x3f5e60%0x15180/0xe10),_0x1f763a=Math['floor'](_0x3f5e60%0xe10/0x3c),_0x131362=[];if(_0x393174>0x0)_0x131362[_0x75b3db(0x75)](_0x393174+'天');if(_0x5e4baf>0x0||_0x393174>0x0)_0x131362['push'](_0x5e4baf+'小时');return _0x131362['push'](_0x1f763a+'分'),_0x131362['join']('\x20');}function formatUptimeShort(_0x29174b){const _0x582b04=_0x13be9c,_0x2db90b=parseInt(_0x29174b||0x0)||0x0,_0x4d9026=Math[_0x582b04(0x8d)](_0x2db90b/0x15180),_0x5c3bff=Math['floor'](_0x2db90b%0x15180/0xe10),_0x56f082=Math['floor'](_0x2db90b%0xe10/0x3c),_0x3ab902=[];if(_0x4d9026>0x0)_0x3ab902['push'](_0x4d9026+'天');if(_0x5c3bff>0x0||_0x4d9026>0x0)_0x3ab902[_0x582b04(0x75)](_0x5c3bff+'时');return _0x3ab902['push'](_0x56f082+'分'),_0x3ab902['join']('');}function trafficMbToBytes(_0x52b8e6){const _0x22ace1=parseFloat(_0x52b8e6||0x0);if(isNaN(_0x22ace1))return 0x0;return Math['round'](_0x22ace1*0x400*0x400);}function formatTraffic(_0x103d2c){const _0xac27ad=Number(_0x103d2c||0x0);if(!isFinite(_0xac27ad)||_0xac27ad<=0x0)return'0M';const _0x15e87e=0x400*0x400,_0x423e64=0x400*_0x15e87e;if(_0xac27ad>=_0x423e64)return(_0xac27ad/_0x423e64)['toFixed'](0x1)+'G';return(_0xac27ad/_0x15e87e)['toFixed'](0x1)+'M';}function _0x2895(_0x2b74b4,_0x10ea13){const _0x26c909=_0x26c9();return _0x2895=function(_0x2895cd,_0x33b72d){_0x2895cd=_0x2895cd-0x6d;let _0x4fa3a6=_0x26c909[_0x2895cd];if(_0x2895['iMWKfw']===undefined){var _0x60139f=function(_0x36a574){const _0xc5aaf8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x209e76='',_0x28f2fd='';for(let _0xa8a79b=0x0,_0x3f16d6,_0x25fda,_0x1e1fc5=0x0;_0x25fda=_0x36a574['charAt'](_0x1e1fc5++);~_0x25fda&&(_0x3f16d6=_0xa8a79b%0x4?_0x3f16d6*0x40+_0x25fda:_0x25fda,_0xa8a79b++%0x4)?_0x209e76+=String['fromCharCode'](0xff&_0x3f16d6>>(-0x2*_0xa8a79b&0x6)):0x0){_0x25fda=_0xc5aaf8['indexOf'](_0x25fda);}for(let _0x1dd88a=0x0,_0x1908c2=_0x209e76['length'];_0x1dd88a<_0x1908c2;_0x1dd88a++){_0x28f2fd+='%'+('00'+_0x209e76['charCodeAt'](_0x1dd88a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x28f2fd);};_0x2895['meUJFD']=_0x60139f,_0x2b74b4=arguments,_0x2895['iMWKfw']=!![];}const _0x2f0af6=_0x26c909[0x0],_0x58d0d7=_0x2895cd+_0x2f0af6,_0x2cc49e=_0x2b74b4[_0x58d0d7];return!_0x2cc49e?(_0x4fa3a6=_0x2895['meUJFD'](_0x4fa3a6),_0x2b74b4[_0x58d0d7]=_0x4fa3a6):_0x4fa3a6=_0x2cc49e,_0x4fa3a6;},_0x2895(_0x2b74b4,_0x10ea13);}function formatTrafficShort(_0x173740){const _0x527f4a=_0x13be9c,_0x510f58=Number(_0x173740||0x0);if(!isFinite(_0x510f58)||_0x510f58<=0x0)return'0';const _0x5ad92e=0x400,_0x35f32a=0x400*_0x5ad92e,_0x16ef9b=0x400*_0x35f32a;if(_0x510f58>=_0x16ef9b){const _0x1f33a4=_0x510f58/_0x16ef9b;return(_0x1f33a4>=0x64?_0x1f33a4[_0x527f4a(0x94)](0x0):_0x1f33a4['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x510f58>=_0x35f32a)return Math['round'](_0x510f58/_0x35f32a)+'M';if(_0x510f58>=_0x5ad92e)return Math['round'](_0x510f58/_0x5ad92e)+'K';return String(Math['round'](_0x510f58));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x46890a){if(!_0x46890a)return ZERO_TRAFFIC;const _0x5a42cd=_0x46890a['day_rx_traffic']!==undefined||_0x46890a['day_tx_traffic']!==undefined||_0x46890a['month_rx_traffic']!==undefined||_0x46890a['month_tx_traffic']!==undefined;if(!_0x5a42cd)return{'todayBytes':Number(_0x46890a['todayBytes'])||0x0,'monthBytes':Number(_0x46890a['monthBytes'])||0x0,'todayRx':Number(_0x46890a['todayRx'])||0x0,'todayTx':Number(_0x46890a['todayTx'])||0x0,'monthRx':Number(_0x46890a['monthRx'])||0x0,'monthTx':Number(_0x46890a['monthTx'])||0x0};const _0x820c47=trafficMbToBytes(_0x46890a['day_rx_traffic']),_0x403a95=trafficMbToBytes(_0x46890a['day_tx_traffic']),_0x9940=trafficMbToBytes(_0x46890a['month_rx_traffic']),_0x55a686=trafficMbToBytes(_0x46890a['month_tx_traffic']);return{'todayBytes':_0x820c47+_0x403a95,'monthBytes':_0x9940+_0x55a686,'todayRx':_0x820c47,'todayTx':_0x403a95,'monthRx':_0x9940,'monthTx':_0x55a686};}function trafficRxRatio(_0x14cd58,_0x5b3478){const _0x3e0092=Number(_0x14cd58||0x0)+Number(_0x5b3478||0x0);if(!isFinite(_0x3e0092)||_0x3e0092<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x14cd58||0x0)/_0x3e0092));}function getOperatorName(_0x244aa4,_0x5cdab2){const _0x3a7abf=_0x13be9c;if(!_0x244aa4)return _0x5cdab2||'未知';const _0x10d56d=String(_0x244aa4)['toUpperCase']();if(_0x10d56d['includes'](_0x3a7abf(0x96))||_0x10d56d==='中国移动'||_0x10d56d['includes'](_0x3a7abf(0x7f)))return'中国移动';if(_0x10d56d['includes']('CUCC')||_0x10d56d==='中国联通'||_0x10d56d['includes'](_0x3a7abf(0x8a))||_0x10d56d['includes']('UNICOM'))return'中国联通';if(_0x10d56d['includes']('CTCC')||_0x10d56d==='CT'||_0x10d56d==='中国电信'||_0x10d56d['includes']('CHINA\x20TELECOM')||_0x10d56d[_0x3a7abf(0x83)]('TELECOM'))return'中国电信';if(_0x10d56d['includes']('CBN')||_0x10d56d===_0x3a7abf(0x91)||_0x10d56d['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x244aa4;}function getSignalColor(_0xa8d75e,_0x300e54){let _0x5b97d1=parseInt(_0xa8d75e);if(isNaN(_0x5b97d1))_0x5b97d1=-0x78;if(_0x5b97d1>-0x59)return _0x300e54['ok'];if(_0x5b97d1>-0x63)return _0x300e54['warn'];return _0x300e54['bad'];}function getSinrColor(_0x1d5827,_0x55c653){let _0x48a163=parseFloat(_0x1d5827);if(isNaN(_0x48a163))_0x48a163=0x0;if(_0x48a163>0xf)return _0x55c653['ok'];if(_0x48a163>0x8)return _0x55c653['warn'];return _0x55c653['bad'];}function getAllBands(_0x3c51ca,_0x4ad9ca,_0x56f5a5){const _0xd42b1a=_0x13be9c,_0x3ff2d9=[],_0x37ea82=_0x56f5a5?'N':'B',_0x1bfe79=getValidValue(_0x3c51ca?.['BAND']||_0x3c51ca?.[_0xd42b1a(0x98)]||_0x3c51ca?.['LTE_BAND'],'');if(_0x1bfe79)_0x3ff2d9[_0xd42b1a(0x75)](_0x37ea82+_0x1bfe79);for(const _0x45213c of _0x4ad9ca?.[_0xd42b1a(0x70)]||[]){const _0x51e1f8=String(_0x45213c?.['Band']||'');if(_0x51e1f8&&_0x51e1f8!=='-')_0x3ff2d9[_0xd42b1a(0x75)](_0x37ea82+_0x51e1f8);}if(_0x3ff2d9['length']===0x0)_0x3ff2d9[_0xd42b1a(0x75)](_0x56f5a5?'N78':'B3');return _0x3ff2d9;}function getCaBadgeText(_0x39639e,_0x1b0bde,_0x70ede7){const _0x399c1e=(_0x1b0bde?'5G\x20':'4G\x20')+_0x70ede7;if(!_0x1b0bde)return _0x399c1e;const _0x728355=0x1+(_0x39639e&&_0x39639e['sub_CA_info']||[])['length'];if(_0x728355>=0x4)return'5GA+';if(_0x728355===0x3)return'5GA';if(_0x728355===0x2)return'5G+';return _0x399c1e;}function getCarrierCountText(_0x5747d9){const _0x4f084c=_0x13be9c,_0x50b4e2=(_0x5747d9&&_0x5747d9['sub_CA_info']||[])[_0x4f084c(0x9c)];if(_0x50b4e2===0x0)return'单载波';if(_0x50b4e2===0x1)return'双载波';if(_0x50b4e2===0x2)return'三载波';return _0x4f084c(0x99);}function getNetworkModeText(_0x2296f2,_0x24a170,_0x3d436b){const _0x56f881=_0x13be9c,_0x481417=String(_0x3d436b||'')['toUpperCase']();if(!_0x24a170){if(!_0x481417||_0x481417==='4G'||_0x481417===_0x56f881(0x6f))return'4G\x20LTE';return _0x56f881(0x7d)+_0x481417;}const _0x4d643a=0x1+(_0x2296f2&&_0x2296f2['sub_CA_info']||[])['length'];if(_0x4d643a>=0x4)return _0x56f881(0x76);if(_0x4d643a===0x3)return'5GA';if(_0x4d643a===0x2)return'5G+';return _0x481417?'5G\x20'+_0x481417:'5G\x20SA';}function rsrpToPercent(_0x28a161){let _0x1a01e5=parseInt(_0x28a161);if(isNaN(_0x1a01e5))_0x1a01e5=-0x78;const _0x29000c=Math['min'](-0x46,Math['max'](-0x78,_0x1a01e5)),_0x351877=(_0x29000c+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x351877*0x5a));}function sinrToPercent(_0x270973){const _0x53fc97=_0x13be9c;let _0xea58bb=parseFloat(_0x270973);if(isNaN(_0xea58bb))_0xea58bb=0x0;return Math[_0x53fc97(0x80)](0x64,Math['max'](0x0,_0xea58bb/0x19*0x64));}function resolveDeviceName(_0x3ed3b9,_0x438e69){const _0x17b3d1=_0x13be9c,_0x1ea826=_0x3ed3b9&&_0x3ed3b9[_0x17b3d1(0x77)]!=null?String(_0x3ed3b9['Name'])['trim']():'';if(!_0x1ea826)return _0x438e69;if(_0x1ea826==='--'||_0x1ea826==='undefined'||_0x1ea826==='null'||_0x1ea826==='0')return _0x438e69;return _0x1ea826;}function rsrpToBars(_0x4b8e7a){const _0x49aae3=parseInt(_0x4b8e7a);if(isNaN(_0x49aae3))return 0x0;if(_0x49aae3>=-0x55)return 0x4;if(_0x49aae3>=-0x5f)return 0x3;if(_0x49aae3>=-0x69)return 0x2;if(_0x49aae3>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x39453b){const _0x506490=_0x13be9c;if(!_0x39453b)return 0x0;if(typeof _0x39453b['onlineDevices']==='number')return _0x39453b['onlineDevices'];const _0x2fc095=_0x39453b['MainBaseInfo'];if(!Array['isArray'](_0x2fc095))return 0x0;return _0x2fc095['filter'](_0x24f2c3=>_0x24f2c3&&String(_0x24f2c3['NetStatus'])==='1')[_0x506490(0x9c)];}function urlDecode(_0x186782){const _0x57408e=[];for(let _0x424607=0x0;_0x424607<_0x186782['length'];_0x424607+=0x2)_0x57408e['push'](parseInt(_0x186782['substr'](_0x424607,0x2),0x10));let _0x379d2d='';for(let _0x2c26cd=0x0;_0x2c26cd<_0x57408e['length'];){const _0x4b5c68=_0x57408e[_0x2c26cd];if(_0x4b5c68<0x80)_0x379d2d+=String['fromCharCode'](_0x4b5c68),_0x2c26cd++;else{if(_0x4b5c68>>0x5===0x6)_0x379d2d+=String['fromCharCode']((_0x4b5c68&0x1f)<<0x6|_0x57408e[_0x2c26cd+0x1]&0x3f),_0x2c26cd+=0x2;else _0x4b5c68>>0x4===0xe?(_0x379d2d+=String['fromCharCode']((_0x4b5c68&0xf)<<0xc|(_0x57408e[_0x2c26cd+0x1]&0x3f)<<0x6|_0x57408e[_0x2c26cd+0x2]&0x3f),_0x2c26cd+=0x3):(_0x379d2d+=String['fromCharCode']((_0x4b5c68&0x7)<<0x12|(_0x57408e[_0x2c26cd+0x1]&0x3f)<<0xc|(_0x57408e[_0x2c26cd+0x2]&0x3f)<<0x6|_0x57408e[_0x2c26cd+0x3]),_0x2c26cd+=0x4);}}return _0x379d2d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0x13be9c(0x78),'device':_0x13be9c(0x9b),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x4872c7=_0x13be9c,_0xff319='0123456789ABCDEF';let _0x4079aa='';for(let _0x572759=0x0;_0x572759<0x20;_0x572759++)_0x4079aa+=_0xff319[Math[_0x4872c7(0x8d)](Math['random']()*0x10)];return _0x4079aa;}function generateSequenceId(_0x1d8637){return _0x1d8637+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x2c13dd){const _0x332ea7=_0x13be9c;if(!_0x2c13dd||_0x2c13dd['length']===0x0)return null;if(_0x2c13dd['some'](_0x306e4d=>AUTH_ERROR_CODES['indexOf'](_0x306e4d)>=0x0))return'auth';if(_0x2c13dd['some'](_0x1c3343=>DEVICE_ERROR_CODES['indexOf'](_0x1c3343)>=0x0))return'device';return _0x332ea7(0x84);}function readResult(_0x1b4266,_0x374233){if(!_0x1b4266||_0x1b4266['status']!=='fulfilled'||!_0x1b4266['value'])return _0x374233['push'](NET_ERROR_CODE),null;const _0xebabbc=_0x1b4266['value'];if(_0xebabbc['resultCode']===0x0)return _0xebabbc;return _0x374233['push'](typeof _0xebabbc['resultCode']==='number'?_0xebabbc['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x14d5b3,_0x26aed9,_0x5ed32b,_0x1e230b,_0x596015){const _0x5233b8=_0x13be9c;if(!_0x5ed32b)return null;const _0x2e9743={'CmdType':_0x14d5b3,..._0x26aed9};if(!_0x2e9743['SequenceId'])_0x2e9743[_0x5233b8(0x90)]=generateSequenceId(_0x14d5b3);const _0x4df0e1={'appVersion':urlDecode('322e322e3531'),'mac':_0x1e230b,'timeout':0x3,'token':_0x5ed32b,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x2e9743)}),'operatorId':getOperatorId()},_0x240d90=new AbortController(),_0x410e27=setTimeout(()=>{try{_0x240d90['abort']();}catch(_0x2d9572){}},_0x596015);try{const _0x219139=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':_0x5233b8(0x79),'token':_0x5ed32b},'body':JSON['stringify'](_0x4df0e1),'signal':_0x240d90['signal']}),_0x39851d=await _0x219139[_0x5233b8(0x87)]();if(_0x39851d&&_0x39851d[_0x5233b8(0x82)]){const _0x387be4=JSON['parse'](_0x39851d['rspParam']);if(_0x387be4['Result']===0x0&&_0x387be4['return_Parameter']){const _0xcb1a73=String(_0x387be4['return_Parameter'])['replace'](/\\\//g,'/')[_0x5233b8(0x97)](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0xef9ac0=JSON['parse'](decodeBase64Utf8(_0xcb1a73));return{..._0xef9ac0,'resultCode':0x0};}}return _0x39851d||{'resultCode':NET_ERROR_CODE};}catch(_0x5ae8ab){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x410e27);}}function decodeBase64Utf8(_0x824ce){const _0x4314df=atob(_0x824ce);try{const _0x27786b=new Uint8Array(_0x4314df['length']);for(let _0x137017=0x0;_0x137017<_0x4314df['length'];_0x137017++)_0x27786b[_0x137017]=_0x4314df['charCodeAt'](_0x137017);return new TextDecoder('utf-8')['decode'](_0x27786b);}catch(_0x2b81dc){return _0x4314df;}}async function fetchCpeApi(_0xd13e54,_0x4c61e0,_0x541114,_0x474402={},_0x473263=0xbb8){if(!_0x4c61e0)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0xd13e54,_0x474402,_0x4c61e0,_0x541114,_0x473263);}function isEmpty(_0x4908d1){const _0x2d4aba=_0x13be9c;return!_0x4908d1||typeof _0x4908d1==='object'&&Object[_0x2d4aba(0x7b)](_0x4908d1)['length']===0x0;}async function fetchAll(_0x51aa87){const _0x439754=_0x13be9c,_0x3f399c=_0x51aa87['token'],_0x5ab607=_0x51aa87['mac'],_0x7712a6=0xbb8,_0xe32e09=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x3f399c,_0x5ab607,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x3f399c,_0x5ab607,{},0x9c4),fetchCpeApi(_0x439754(0x8c),_0x3f399c,_0x5ab607,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x3f399c,_0x5ab607,{},0x9c4),fetchCpeApi(_0x439754(0x95),_0x3f399c,_0x5ab607,{},0xbb8)]),_0x1ba305=[];let _0x41d029=readResult(_0xe32e09[0x0],_0x1ba305),_0xa7c3fd=readResult(_0xe32e09[0x1],_0x1ba305),_0x3e4bd3=readResult(_0xe32e09[0x2],_0x1ba305),_0x5b88d2=readResult(_0xe32e09[0x3],_0x1ba305);const _0x41806b=readResult(_0xe32e09[0x4],_0x1ba305);if(_0x3e4bd3)_0x3e4bd3=_0x3e4bd3['MainRouter']||_0x3e4bd3['Router']||_0x3e4bd3;const _0x13c13e=[_0x41d029,_0xa7c3fd,_0x3e4bd3,_0x5b88d2,_0x41806b]['filter'](_0x5b77e6=>!isEmpty(_0x5b77e6))['length'],_0x30c7f8=_0x13c13e===0x0?classifyFault(_0x1ba305):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x13c13e+'/5\x20|\x20fault='+(_0x30c7f8||'-')+'\x20|\x20失败码=['+_0x1ba305[_0x439754(0x9a)](',')+']'),{'rf':_0x41d029,'ca':_0xa7c3fd,'topo':_0x3e4bd3,'sim':_0x5b88d2,'traffic':_0x41806b,'failCodes':_0x1ba305,'fault':_0x30c7f8,'successCount':_0x13c13e};}function saveCache(_0x4496f0){const _0x28212c=_0x13be9c;try{const _0xda0517=parseTrafficData(_0x4496f0['traffic']),_0x35e3fc={'rf':{'WorkMode':_0x4496f0['rf']?.['WorkMode'],'SSB_RSRP':_0x4496f0['rf']?.['SSB_RSRP'],'RSRP':_0x4496f0['rf']?.['RSRP'],'SSB_SINR':_0x4496f0['rf']?.['SSB_SINR'],'SINR':_0x4496f0['rf']?.['SINR'],'SSB_RSRQ':_0x4496f0['rf']?.['SSB_RSRQ'],'RSRQ':_0x4496f0['rf']?.[_0x28212c(0x6e)],'SSB_RSSI':_0x4496f0['rf']?.['SSB_RSSI'],'RSSI':_0x4496f0['rf']?.['RSSI'],'BAND':_0x4496f0['rf']?.['BAND'],'NR_BAND':_0x4496f0['rf']?.['NR_BAND'],'LTE_BAND':_0x4496f0['rf']?.['LTE_BAND'],'PCI':_0x4496f0['rf']?.['PCI'],'SPN':_0x4496f0['rf']?.['SPN']},'ca':{'main_CA_info':_0x4496f0['ca']?.['main_CA_info']||{},'sub_CA_info':_0x4496f0['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x4496f0['topo']?.[_0x28212c(0x8e)],'UpTime':_0x4496f0['topo']?.[_0x28212c(0x7e)],'Name':_0x4496f0['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x4496f0['topo'])},'sim':{'Operator':_0x4496f0['sim']?.[_0x28212c(0x92)],'SPN':_0x4496f0['sim']?.[_0x28212c(0x88)]},'traffic':{'todayBytes':_0xda0517['todayBytes'],'monthBytes':_0xda0517['monthBytes'],'todayRx':_0xda0517[_0x28212c(0x71)],'todayTx':_0xda0517['todayTx'],'monthRx':_0xda0517[_0x28212c(0x7c)],'monthTx':_0xda0517['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x35e3fc));}catch(_0x3db902){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x3db902);}}function loadCache(){const _0x24398c=_0x13be9c;try{const _0x547a44=Keychain['get'](KEY_CACHE);if(!_0x547a44)return null;const _0x239d6b=JSON['parse'](_0x547a44);if(!_0x239d6b||typeof _0x239d6b!==_0x24398c(0x73))return null;return _0x239d6b;}catch(_0x17e46c){return null;}}
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
