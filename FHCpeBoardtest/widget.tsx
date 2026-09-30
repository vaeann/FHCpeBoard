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

const _0x28ec1e=_0x18a6;(function(_0x4d3ee9,_0x2bbc4f){const _0x3fca78=_0x18a6,_0x222e62=_0x4d3ee9();while(!![]){try{const _0x2e27ad=-parseInt(_0x3fca78(0x1f0))/0x1+-parseInt(_0x3fca78(0x203))/0x2*(parseInt(_0x3fca78(0x1e3))/0x3)+-parseInt(_0x3fca78(0x1f7))/0x4*(parseInt(_0x3fca78(0x206))/0x5)+parseInt(_0x3fca78(0x1f4))/0x6+parseInt(_0x3fca78(0x1e9))/0x7+parseInt(_0x3fca78(0x1f8))/0x8+-parseInt(_0x3fca78(0x1f5))/0x9;if(_0x2e27ad===_0x2bbc4f)break;else _0x222e62['push'](_0x222e62['shift']());}catch(_0x322224){_0x222e62['push'](_0x222e62['shift']());}}}(_0x5d71,0x30ccc));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x51baa6,_0x4d3957){const _0x297ae4=_0x18a6;try{const _0x380f9b=Keychain['get'](_0x51baa6);return _0x380f9b===null||_0x380f9b===undefined||_0x380f9b===''?_0x4d3957:String(_0x380f9b)[_0x297ae4(0x1e1)]();}catch(_0x2ca61d){return _0x4d3957;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xe59496){const _0x31f1f3=_0x18a6;try{if(_0xe59496['token']!==undefined)Keychain[_0x31f1f3(0x1ff)](TOKEN_KEY,String(_0xe59496['token'])['trim']());if(_0xe59496['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0xe59496['mac'])['trim']()||DEFAULT_MAC);if(_0xe59496['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0xe59496['deviceName'])[_0x31f1f3(0x1e1)]()||DEFAULT_NAME);}catch(_0x5e02c7){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x5e02c7);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x28a126,_0xe8d1d7){const _0x17225c=_0x18a6;if(_0x28a126===undefined||_0x28a126===null||_0x28a126==='')return _0xe8d1d7;const _0x20e64c=String(_0x28a126)[_0x17225c(0x1e1)]();return _0x20e64c==='-'||_0x20e64c===_0x17225c(0x1e8)?_0xe8d1d7:_0x20e64c;}function _0x18a6(_0x8ffd88,_0x32c2d8){const _0x5d7135=_0x5d71();return _0x18a6=function(_0x18a6b7,_0x2fb54c){_0x18a6b7=_0x18a6b7-0x1e0;let _0x119569=_0x5d7135[_0x18a6b7];if(_0x18a6['ABbZrH']===undefined){var _0x1087ce=function(_0x51baa6){const _0x4d3957='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x380f9b='',_0x2ca61d='';for(let _0xe59496=0x0,_0x5e02c7,_0x28a126,_0xe8d1d7=0x0;_0x28a126=_0x51baa6['charAt'](_0xe8d1d7++);~_0x28a126&&(_0x5e02c7=_0xe59496%0x4?_0x5e02c7*0x40+_0x28a126:_0x28a126,_0xe59496++%0x4)?_0x380f9b+=String['fromCharCode'](0xff&_0x5e02c7>>(-0x2*_0xe59496&0x6)):0x0){_0x28a126=_0x4d3957['indexOf'](_0x28a126);}for(let _0x20e64c=0x0,_0x317d5d=_0x380f9b['length'];_0x20e64c<_0x317d5d;_0x20e64c++){_0x2ca61d+='%'+('00'+_0x380f9b['charCodeAt'](_0x20e64c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2ca61d);};_0x18a6['LKmIff']=_0x1087ce,_0x8ffd88=arguments,_0x18a6['ABbZrH']=!![];}const _0x209142=_0x5d7135[0x0],_0x300800=_0x18a6b7+_0x209142,_0x16f470=_0x8ffd88[_0x300800];return!_0x16f470?(_0x119569=_0x18a6['LKmIff'](_0x119569),_0x8ffd88[_0x300800]=_0x119569):_0x119569=_0x16f470,_0x119569;},_0x18a6(_0x8ffd88,_0x32c2d8);}function firstValid(_0x317d5d,_0x31ff4e){for(const _0x2ab7fc of _0x317d5d){const _0x359661=getValidValue(_0x2ab7fc,'');if(_0x359661)return _0x359661;}return _0x31ff4e;}function resolveOperator(_0x4b47bb,_0x3db006){const _0x5c3fd6=_0x18a6,_0x3ebb84=getOperatorName(_0x3db006&&_0x3db006[_0x5c3fd6(0x1f9)]||'',_0x3db006&&_0x3db006['SPN']||'');if(_0x3ebb84==='未知'&&_0x4b47bb&&_0x4b47bb['SPN'])return String(_0x4b47bb[_0x5c3fd6(0x1f3)]);return _0x3ebb84;}function formatUptime(_0x48c85e){const _0xc6fc3b=parseInt(_0x48c85e||0x0)||0x0,_0x1b115b=Math['floor'](_0xc6fc3b/0x15180),_0x15c15b=Math['floor'](_0xc6fc3b%0x15180/0xe10),_0x36df59=Math['floor'](_0xc6fc3b%0xe10/0x3c),_0x1756da=[];if(_0x1b115b>0x0)_0x1756da['push'](_0x1b115b+'天');if(_0x15c15b>0x0||_0x1b115b>0x0)_0x1756da['push'](_0x15c15b+'小时');return _0x1756da['push'](_0x36df59+'分'),_0x1756da['join']('\x20');}function formatUptimeShort(_0x1bb012){const _0x13d3da=parseInt(_0x1bb012||0x0)||0x0,_0x3d0ace=Math['floor'](_0x13d3da/0x15180),_0x476685=Math['floor'](_0x13d3da%0x15180/0xe10),_0x4f99f6=Math['floor'](_0x13d3da%0xe10/0x3c),_0x178710=[];if(_0x3d0ace>0x0)_0x178710['push'](_0x3d0ace+'天');if(_0x476685>0x0||_0x3d0ace>0x0)_0x178710['push'](_0x476685+'时');return _0x178710['push'](_0x4f99f6+'分'),_0x178710['join']('');}function trafficMbToBytes(_0x1a6c7d){const _0x496f42=parseFloat(_0x1a6c7d||0x0);if(isNaN(_0x496f42))return 0x0;return Math['round'](_0x496f42*0x400*0x400);}function formatTraffic(_0x1d8dff){const _0x36b839=_0x18a6,_0x4c773b=Number(_0x1d8dff||0x0);if(!isFinite(_0x4c773b)||_0x4c773b<=0x0)return'0M';const _0x3d21c3=0x400*0x400,_0x17df58=0x400*_0x3d21c3;if(_0x4c773b>=_0x17df58)return(_0x4c773b/_0x17df58)['toFixed'](0x1)+'G';return(_0x4c773b/_0x3d21c3)[_0x36b839(0x20f)](0x1)+'M';}function formatTrafficShort(_0x399a3d){const _0x5649b0=_0x18a6,_0x21193d=Number(_0x399a3d||0x0);if(!isFinite(_0x21193d)||_0x21193d<=0x0)return'0';const _0x433f17=0x400,_0x27e9c8=0x400*_0x433f17,_0x4c89ab=0x400*_0x27e9c8;if(_0x21193d>=_0x4c89ab){const _0x5e572c=_0x21193d/_0x4c89ab;return(_0x5e572c>=0x64?_0x5e572c['toFixed'](0x0):_0x5e572c['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x21193d>=_0x27e9c8)return Math['round'](_0x21193d/_0x27e9c8)+'M';if(_0x21193d>=_0x433f17)return Math[_0x5649b0(0x200)](_0x21193d/_0x433f17)+'K';return String(Math['round'](_0x21193d));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x40d2fd){const _0x308809=_0x18a6;if(!_0x40d2fd)return ZERO_TRAFFIC;const _0x2fb1bf=_0x40d2fd['day_rx_traffic']!==undefined||_0x40d2fd['day_tx_traffic']!==undefined||_0x40d2fd['month_rx_traffic']!==undefined||_0x40d2fd[_0x308809(0x1f1)]!==undefined;if(!_0x2fb1bf)return{'todayBytes':Number(_0x40d2fd['todayBytes'])||0x0,'monthBytes':Number(_0x40d2fd[_0x308809(0x209)])||0x0,'todayRx':Number(_0x40d2fd['todayRx'])||0x0,'todayTx':Number(_0x40d2fd[_0x308809(0x1fc)])||0x0,'monthRx':Number(_0x40d2fd['monthRx'])||0x0,'monthTx':Number(_0x40d2fd['monthTx'])||0x0};const _0x2aa5d7=trafficMbToBytes(_0x40d2fd['day_rx_traffic']),_0x5278f1=trafficMbToBytes(_0x40d2fd['day_tx_traffic']),_0x3102d6=trafficMbToBytes(_0x40d2fd[_0x308809(0x208)]),_0x1c9868=trafficMbToBytes(_0x40d2fd['month_tx_traffic']);return{'todayBytes':_0x2aa5d7+_0x5278f1,'monthBytes':_0x3102d6+_0x1c9868,'todayRx':_0x2aa5d7,'todayTx':_0x5278f1,'monthRx':_0x3102d6,'monthTx':_0x1c9868};}function trafficRxRatio(_0x4cf27c,_0x2437c2){const _0x2e6b0e=Number(_0x4cf27c||0x0)+Number(_0x2437c2||0x0);if(!isFinite(_0x2e6b0e)||_0x2e6b0e<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x4cf27c||0x0)/_0x2e6b0e));}function getOperatorName(_0x4e49fc,_0x21a720){const _0x344add=_0x18a6;if(!_0x4e49fc)return _0x21a720||'未知';const _0x2fcf06=String(_0x4e49fc)['toUpperCase']();if(_0x2fcf06['includes']('CMCC')||_0x2fcf06==='中国移动'||_0x2fcf06['includes'](_0x344add(0x1e7)))return'中国移动';if(_0x2fcf06['includes']('CUCC')||_0x2fcf06===_0x344add(0x204)||_0x2fcf06['includes']('CHINA\x20UNICOM')||_0x2fcf06['includes']('UNICOM'))return'中国联通';if(_0x2fcf06['includes']('CTCC')||_0x2fcf06==='CT'||_0x2fcf06==='中国电信'||_0x2fcf06[_0x344add(0x20c)]('CHINA\x20TELECOM')||_0x2fcf06['includes']('TELECOM'))return'中国电信';if(_0x2fcf06['includes']('CBN')||_0x2fcf06==='中国广电'||_0x2fcf06['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x4e49fc;}function getSignalColor(_0x3e0b2f,_0x220bc8){let _0x523064=parseInt(_0x3e0b2f);if(isNaN(_0x523064))_0x523064=-0x78;if(_0x523064>-0x59)return _0x220bc8['ok'];if(_0x523064>-0x63)return _0x220bc8['warn'];return _0x220bc8['bad'];}function getSinrColor(_0x3a7351,_0x583867){let _0x365043=parseFloat(_0x3a7351);if(isNaN(_0x365043))_0x365043=0x0;if(_0x365043>0xf)return _0x583867['ok'];if(_0x365043>0x8)return _0x583867['warn'];return _0x583867['bad'];}function getAllBands(_0x338051,_0x1ae1db,_0x521011){const _0x14ec75=[],_0x652481=_0x521011?'N':'B',_0x2e91d5=getValidValue(_0x338051?.['BAND']||_0x338051?.['NR_BAND']||_0x338051?.['LTE_BAND'],'');if(_0x2e91d5)_0x14ec75['push'](_0x652481+_0x2e91d5);for(const _0x3ffdf4 of _0x1ae1db?.['sub_CA_info']||[]){const _0x5f0fe9=String(_0x3ffdf4?.['Band']||'');if(_0x5f0fe9&&_0x5f0fe9!=='-')_0x14ec75['push'](_0x652481+_0x5f0fe9);}if(_0x14ec75['length']===0x0)_0x14ec75['push'](_0x521011?'N78':'B3');return _0x14ec75;}function getCaBadgeText(_0x5f84d4,_0x19092b,_0x2a8360){const _0x36eb74=_0x18a6,_0x264eb6=(_0x19092b?'5G\x20':'4G\x20')+_0x2a8360;if(!_0x19092b)return _0x264eb6;const _0x44fccc=0x1+(_0x5f84d4&&_0x5f84d4[_0x36eb74(0x20e)]||[])['length'];if(_0x44fccc>=0x4)return'5GA+';if(_0x44fccc===0x3)return'5GA';if(_0x44fccc===0x2)return'5G+';return _0x264eb6;}function getCarrierCountText(_0x12d8f7){const _0x4dda3c=_0x18a6,_0x458c21=(_0x12d8f7&&_0x12d8f7['sub_CA_info']||[])['length'];if(_0x458c21===0x0)return'单载波';if(_0x458c21===0x1)return _0x4dda3c(0x1e4);if(_0x458c21===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x578969,_0x4ed97f,_0x102fb6){const _0x31c559=String(_0x102fb6||'')['toUpperCase']();if(!_0x4ed97f){if(!_0x31c559||_0x31c559==='4G'||_0x31c559==='LTE')return'4G\x20LTE';return'4G\x20'+_0x31c559;}const _0x32c606=0x1+(_0x578969&&_0x578969['sub_CA_info']||[])['length'];if(_0x32c606>=0x4)return'5GA+';if(_0x32c606===0x3)return'5GA';if(_0x32c606===0x2)return'5G+';return _0x31c559?'5G\x20'+_0x31c559:'5G\x20SA';}function rsrpToPercent(_0x4bc4bc){let _0x4adac1=parseInt(_0x4bc4bc);if(isNaN(_0x4adac1))_0x4adac1=-0x78;const _0x240f5f=Math['min'](-0x46,Math['max'](-0x78,_0x4adac1)),_0x1471a9=(_0x240f5f+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x1471a9*0x5a));}function sinrToPercent(_0x32e07b){let _0xfaadd5=parseFloat(_0x32e07b);if(isNaN(_0xfaadd5))_0xfaadd5=0x0;return Math['min'](0x64,Math['max'](0x0,_0xfaadd5/0x19*0x64));}function resolveDeviceName(_0x1bb06d,_0x33054e){const _0x183b24=_0x1bb06d&&_0x1bb06d['Name']!=null?String(_0x1bb06d['Name'])['trim']():'';if(!_0x183b24)return _0x33054e;if(_0x183b24==='--'||_0x183b24==='undefined'||_0x183b24==='null'||_0x183b24==='0')return _0x33054e;return _0x183b24;}function rsrpToBars(_0x18ee1e){const _0x229b66=parseInt(_0x18ee1e);if(isNaN(_0x229b66))return 0x0;if(_0x229b66>=-0x55)return 0x4;if(_0x229b66>=-0x5f)return 0x3;if(_0x229b66>=-0x69)return 0x2;if(_0x229b66>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x580835){const _0x54f578=_0x18a6;if(!_0x580835)return 0x0;if(typeof _0x580835['onlineDevices']===_0x54f578(0x1eb))return _0x580835['onlineDevices'];const _0x2df3f1=_0x580835['MainBaseInfo'];if(!Array['isArray'](_0x2df3f1))return 0x0;return _0x2df3f1['filter'](_0x12d92e=>_0x12d92e&&String(_0x12d92e['NetStatus'])==='1')[_0x54f578(0x1ee)];}function urlDecode(_0x161b7e){const _0x192533=_0x18a6,_0xf31362=[];for(let _0x508d2a=0x0;_0x508d2a<_0x161b7e['length'];_0x508d2a+=0x2)_0xf31362['push'](parseInt(_0x161b7e['substr'](_0x508d2a,0x2),0x10));let _0x37f012='';for(let _0x6d0e02=0x0;_0x6d0e02<_0xf31362[_0x192533(0x1ee)];){const _0x57657c=_0xf31362[_0x6d0e02];if(_0x57657c<0x80)_0x37f012+=String['fromCharCode'](_0x57657c),_0x6d0e02++;else{if(_0x57657c>>0x5===0x6)_0x37f012+=String['fromCharCode']((_0x57657c&0x1f)<<0x6|_0xf31362[_0x6d0e02+0x1]&0x3f),_0x6d0e02+=0x2;else _0x57657c>>0x4===0xe?(_0x37f012+=String['fromCharCode']((_0x57657c&0xf)<<0xc|(_0xf31362[_0x6d0e02+0x1]&0x3f)<<0x6|_0xf31362[_0x6d0e02+0x2]&0x3f),_0x6d0e02+=0x3):(_0x37f012+=String['fromCharCode']((_0x57657c&0x7)<<0x12|(_0xf31362[_0x6d0e02+0x1]&0x3f)<<0xc|(_0xf31362[_0x6d0e02+0x2]&0x3f)<<0x6|_0xf31362[_0x6d0e02+0x3]),_0x6d0e02+=0x4);}}return _0x37f012;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0x28ec1e(0x1fe),'device':'！设备离线','auth':_0x28ec1e(0x1fa)},FAULT_HINT={'network':_0x28ec1e(0x205),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function _0x5d71(){const _0x4a7581=['mJCWmZi5zhzRCKvY','Bw9UDgHFDhHFDhjHzMzPyW','CMv0DxjUx1bHCMfTzxrLCG','u1bo','mta0ota2ngXRwNrfCq','mta4odqWnM53yxvpDW','CMvZDwX0q29Kzq','nZK2vhjRuerO','mJC1oty0ofPYzw9eCG','t3bLCMf0B3i','77Yb55M75B2v5AsX5Pwi','DhjHzMzPyW','Dg9KyxLuEa','Bg9N','77Yb5Qoa5P+L572r57UC','C2v0','CM91BMq','A2v5CW','r0vux0nfteXvtefsx1rsquzgsunFsu5gtW','mJb4y0Lps3y','5lIT5zU96igu6ycA','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','mZeZnufove1oAa','C3rYAw5NAwz5','Bw9UDgHFCNHFDhjHzMzPyW','Bw9UDgHcExrLCW','tMfTzq','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','Aw5JBhvKzxm','BwfPBL9dqv9PBMzV','C3vIx0nbx2LUzM8','Dg9gAxHLza','zMXVB3i','DhjPBq','r0vux1jgx1njr05btf9jtKzp','mJy1mtfnEgvHCw0','5y+m6l295RoI','zMLSDgvY','r0vux1njtv9jtKzp','q0HjtKeGtu9csuXf','Dw5KzwzPBMvK','mtK5mtqZmhfPCuDhwq','Dg9tDhjPBMC','BNvTyMvY','tfrfx0jbtKq','y2HHCKnVzgvbDa','BgvUz3rO','r0vux0nbuLjjrvjFquDhuKvhqvrjt05Fsu5gtW'];_0x5d71=function(){return _0x4a7581;};return _0x5d71();}function getOperatorId(){const _0x278b1e=_0x28ec1e;return Date['now']()[_0x278b1e(0x1ea)]();}function generateUUID(){const _0x245afe=_0x28ec1e,_0x44f7ac='0123456789ABCDEF';let _0x80cb27='';for(let _0x43dd7f=0x0;_0x43dd7f<0x20;_0x43dd7f++)_0x80cb27+=_0x44f7ac[Math[_0x245afe(0x1e0)](Math['random']()*0x10)];return _0x80cb27;}function generateSequenceId(_0xbd7b1d){return _0xbd7b1d+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x390595){if(!_0x390595||_0x390595['length']===0x0)return null;if(_0x390595['some'](_0xbd052f=>AUTH_ERROR_CODES['indexOf'](_0xbd052f)>=0x0))return'auth';if(_0x390595['some'](_0x7e3db1=>DEVICE_ERROR_CODES['indexOf'](_0x7e3db1)>=0x0))return'device';return'network';}function readResult(_0x1161f7,_0x1e0280){const _0x5309cd=_0x28ec1e;if(!_0x1161f7||_0x1161f7['status']!=='fulfilled'||!_0x1161f7['value'])return _0x1e0280['push'](NET_ERROR_CODE),null;const _0x4899d2=_0x1161f7['value'];if(_0x4899d2[_0x5309cd(0x1f6)]===0x0)return _0x4899d2;return _0x1e0280['push'](typeof _0x4899d2['resultCode']==='number'?_0x4899d2['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x30e4cf,_0x2e794e,_0x2506fd,_0x5155bc,_0x2398b5){const _0xec0a03=_0x28ec1e;if(!_0x2506fd)return null;const _0xe6172={'CmdType':_0x30e4cf,..._0x2e794e};if(!_0xe6172['SequenceId'])_0xe6172['SequenceId']=generateSequenceId(_0x30e4cf);const _0x1a803a={'appVersion':urlDecode('322e322e3531'),'mac':_0x5155bc,'timeout':0x3,'token':_0x2506fd,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0xe6172)}),'operatorId':getOperatorId()},_0x46f508=new AbortController(),_0x3150e5=setTimeout(()=>{try{_0x46f508['abort']();}catch(_0x28646b){}},_0x2398b5);try{const _0x211ac6=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x2506fd},'body':JSON['stringify'](_0x1a803a),'signal':_0x46f508['signal']}),_0x4c18b8=await _0x211ac6['json']();if(_0x4c18b8&&_0x4c18b8['rspParam']){const _0x1b40d4=JSON['parse'](_0x4c18b8['rspParam']);if(_0x1b40d4['Result']===0x0&&_0x1b40d4['return_Parameter']){const _0x30dba4=String(_0x1b40d4[_0xec0a03(0x1f2)])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x434136=JSON['parse'](decodeBase64Utf8(_0x30dba4));return{..._0x434136,'resultCode':0x0};}}return _0x4c18b8||{'resultCode':NET_ERROR_CODE};}catch(_0x1e01d5){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3150e5);}}function decodeBase64Utf8(_0x5effdf){const _0x1ec348=_0x28ec1e,_0x5aae25=atob(_0x5effdf);try{const _0x404cc7=new Uint8Array(_0x5aae25['length']);for(let _0x7b529b=0x0;_0x7b529b<_0x5aae25[_0x1ec348(0x1ee)];_0x7b529b++)_0x404cc7[_0x7b529b]=_0x5aae25[_0x1ec348(0x1ed)](_0x7b529b);return new TextDecoder('utf-8')['decode'](_0x404cc7);}catch(_0x3244e0){return _0x5aae25;}}async function fetchCpeApi(_0x1b3c77,_0x4d7092,_0x1dfc80,_0x29580e={},_0x1553a3=0xbb8){if(!_0x4d7092)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x1b3c77,_0x29580e,_0x4d7092,_0x1dfc80,_0x1553a3);}function isEmpty(_0x1c4e8a){const _0x605d86=_0x28ec1e;return!_0x1c4e8a||typeof _0x1c4e8a==='object'&&Object[_0x605d86(0x201)](_0x1c4e8a)['length']===0x0;}async function fetchAll(_0x10d75d){const _0x129edb=_0x28ec1e,_0x45ee17=_0x10d75d['token'],_0x30cf71=_0x10d75d['mac'],_0x14b4ec=0xbb8,_0xd06c4a=await Promise['allSettled']([fetchCpeApi(_0x129edb(0x1e2),_0x45ee17,_0x30cf71,{},0x9c4),fetchCpeApi(_0x129edb(0x1ef),_0x45ee17,_0x30cf71,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x45ee17,_0x30cf71,{},0x9c4),fetchCpeApi(_0x129edb(0x1e6),_0x45ee17,_0x30cf71,{},0x9c4),fetchCpeApi(_0x129edb(0x202),_0x45ee17,_0x30cf71,{},0xbb8)]),_0x57dd7c=[];let _0x55cc9a=readResult(_0xd06c4a[0x0],_0x57dd7c),_0x55432c=readResult(_0xd06c4a[0x1],_0x57dd7c),_0x1f1abf=readResult(_0xd06c4a[0x2],_0x57dd7c),_0x2e0b9b=readResult(_0xd06c4a[0x3],_0x57dd7c);const _0x386e6e=readResult(_0xd06c4a[0x4],_0x57dd7c);if(_0x1f1abf)_0x1f1abf=_0x1f1abf['MainRouter']||_0x1f1abf['Router']||_0x1f1abf;const _0x215ddf=[_0x55cc9a,_0x55432c,_0x1f1abf,_0x2e0b9b,_0x386e6e][_0x129edb(0x1e5)](_0x434629=>!isEmpty(_0x434629))[_0x129edb(0x1ee)],_0x54f326=_0x215ddf===0x0?classifyFault(_0x57dd7c):null;return console[_0x129edb(0x1fd)](_0x129edb(0x20b)+_0x215ddf+'/5\x20|\x20fault='+(_0x54f326||'-')+'\x20|\x20失败码=['+_0x57dd7c['join'](',')+']'),{'rf':_0x55cc9a,'ca':_0x55432c,'topo':_0x1f1abf,'sim':_0x2e0b9b,'traffic':_0x386e6e,'failCodes':_0x57dd7c,'fault':_0x54f326,'successCount':_0x215ddf};}function saveCache(_0x292e64){const _0x3a8755=_0x28ec1e;try{const _0x534f73=parseTrafficData(_0x292e64[_0x3a8755(0x1fb)]),_0x56b932={'rf':{'WorkMode':_0x292e64['rf']?.['WorkMode'],'SSB_RSRP':_0x292e64['rf']?.['SSB_RSRP'],'RSRP':_0x292e64['rf']?.['RSRP'],'SSB_SINR':_0x292e64['rf']?.['SSB_SINR'],'SINR':_0x292e64['rf']?.['SINR'],'SSB_RSRQ':_0x292e64['rf']?.['SSB_RSRQ'],'RSRQ':_0x292e64['rf']?.['RSRQ'],'SSB_RSSI':_0x292e64['rf']?.['SSB_RSSI'],'RSSI':_0x292e64['rf']?.['RSSI'],'BAND':_0x292e64['rf']?.['BAND'],'NR_BAND':_0x292e64['rf']?.['NR_BAND'],'LTE_BAND':_0x292e64['rf']?.[_0x3a8755(0x1ec)],'PCI':_0x292e64['rf']?.['PCI'],'SPN':_0x292e64['rf']?.['SPN']},'ca':{'main_CA_info':_0x292e64['ca']?.[_0x3a8755(0x20d)]||{},'sub_CA_info':_0x292e64['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x292e64['topo']?.['NetStatus'],'UpTime':_0x292e64['topo']?.['UpTime'],'Name':_0x292e64['topo']?.[_0x3a8755(0x20a)],'onlineDevices':countOnlineDevices(_0x292e64['topo'])},'sim':{'Operator':_0x292e64['sim']?.['Operator'],'SPN':_0x292e64['sim']?.['SPN']},'traffic':{'todayBytes':_0x534f73['todayBytes'],'monthBytes':_0x534f73['monthBytes'],'todayRx':_0x534f73['todayRx'],'todayTx':_0x534f73['todayTx'],'monthRx':_0x534f73['monthRx'],'monthTx':_0x534f73['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x3a8755(0x207)](_0x56b932));}catch(_0x21fe43){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x21fe43);}}function loadCache(){try{const _0x1e9cc2=Keychain['get'](KEY_CACHE);if(!_0x1e9cc2)return null;const _0x41ce83=JSON['parse'](_0x1e9cc2);if(!_0x41ce83||typeof _0x41ce83!=='object')return null;return _0x41ce83;}catch(_0x41dd9f){return null;}}
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
