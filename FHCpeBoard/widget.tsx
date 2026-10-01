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

const _0x28c0f4=_0x1af8;function _0x1af8(_0x1d1315,_0x1e91fb){const _0x25909a=_0x2590();return _0x1af8=function(_0x1af8c1,_0x1402f1){_0x1af8c1=_0x1af8c1-0x161;let _0x42876a=_0x25909a[_0x1af8c1];if(_0x1af8['uPFaXz']===undefined){var _0x3782e0=function(_0x3bdb58){const _0x18e316='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1554bc='',_0x2a1a05='';for(let _0x3eac4d=0x0,_0x448360,_0x9b0cf3,_0x9050e4=0x0;_0x9b0cf3=_0x3bdb58['charAt'](_0x9050e4++);~_0x9b0cf3&&(_0x448360=_0x3eac4d%0x4?_0x448360*0x40+_0x9b0cf3:_0x9b0cf3,_0x3eac4d++%0x4)?_0x1554bc+=String['fromCharCode'](0xff&_0x448360>>(-0x2*_0x3eac4d&0x6)):0x0){_0x9b0cf3=_0x18e316['indexOf'](_0x9b0cf3);}for(let _0x4b8f3f=0x0,_0x40ab90=_0x1554bc['length'];_0x4b8f3f<_0x40ab90;_0x4b8f3f++){_0x2a1a05+='%'+('00'+_0x1554bc['charCodeAt'](_0x4b8f3f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2a1a05);};_0x1af8['tAYPJU']=_0x3782e0,_0x1d1315=arguments,_0x1af8['uPFaXz']=!![];}const _0x5b93e2=_0x25909a[0x0],_0x5333b3=_0x1af8c1+_0x5b93e2,_0x3ff693=_0x1d1315[_0x5333b3];return!_0x3ff693?(_0x42876a=_0x1af8['tAYPJU'](_0x42876a),_0x1d1315[_0x5333b3]=_0x42876a):_0x42876a=_0x3ff693,_0x42876a;},_0x1af8(_0x1d1315,_0x1e91fb);}(function(_0xf854a8,_0x2e3867){const _0x4281f5=_0x1af8,_0x1258e8=_0xf854a8();while(!![]){try{const _0xf7f676=parseInt(_0x4281f5(0x16b))/0x1+parseInt(_0x4281f5(0x18a))/0x2*(-parseInt(_0x4281f5(0x17b))/0x3)+-parseInt(_0x4281f5(0x182))/0x4+-parseInt(_0x4281f5(0x18e))/0x5*(parseInt(_0x4281f5(0x173))/0x6)+-parseInt(_0x4281f5(0x17e))/0x7*(parseInt(_0x4281f5(0x181))/0x8)+parseInt(_0x4281f5(0x171))/0x9*(-parseInt(_0x4281f5(0x179))/0xa)+-parseInt(_0x4281f5(0x174))/0xb*(-parseInt(_0x4281f5(0x167))/0xc);if(_0xf7f676===_0x2e3867)break;else _0x1258e8['push'](_0x1258e8['shift']());}catch(_0x136edc){_0x1258e8['push'](_0x1258e8['shift']());}}}(_0x2590,0x886cf));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x28c0f4(0x17c),DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x3bdb58,_0x18e316){const _0x4a24d7=_0x28c0f4;try{const _0x1554bc=Keychain[_0x4a24d7(0x16d)](_0x3bdb58);return _0x1554bc===null||_0x1554bc===undefined||_0x1554bc===''?_0x18e316:String(_0x1554bc)['trim']();}catch(_0x2a1a05){return _0x18e316;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x3eac4d){const _0x47772d=_0x28c0f4;try{if(_0x3eac4d['token']!==undefined)Keychain[_0x47772d(0x163)](TOKEN_KEY,String(_0x3eac4d['token'])['trim']());if(_0x3eac4d['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x3eac4d['mac'])['trim']()||DEFAULT_MAC);if(_0x3eac4d['deviceName']!==undefined)Keychain[_0x47772d(0x163)](NAME_KEY,String(_0x3eac4d['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x448360){console['log'](_0x47772d(0x184)+_0x448360);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x9b0cf3,_0x9050e4){if(_0x9b0cf3===undefined||_0x9b0cf3===null||_0x9b0cf3==='')return _0x9050e4;const _0x4b8f3f=String(_0x9b0cf3)['trim']();return _0x4b8f3f==='-'||_0x4b8f3f==='undefined'?_0x9050e4:_0x4b8f3f;}function firstValid(_0x40ab90,_0x40a72f){for(const _0x481592 of _0x40ab90){const _0x5cd901=getValidValue(_0x481592,'');if(_0x5cd901)return _0x5cd901;}return _0x40a72f;}function resolveOperator(_0x3c2d47,_0x4dec62){const _0x27cf1c=_0x28c0f4,_0x3d33a6=getOperatorName(_0x4dec62&&_0x4dec62[_0x27cf1c(0x172)]||'',_0x4dec62&&_0x4dec62['SPN']||'');if(_0x3d33a6==='未知'&&_0x3c2d47&&_0x3c2d47[_0x27cf1c(0x169)])return String(_0x3c2d47['SPN']);return _0x3d33a6;}function formatUptime(_0x4639a9){const _0x5cf05c=parseInt(_0x4639a9||0x0)||0x0,_0x29bcfe=Math['floor'](_0x5cf05c/0x15180),_0x28bc60=Math['floor'](_0x5cf05c%0x15180/0xe10),_0x4b4196=Math['floor'](_0x5cf05c%0xe10/0x3c),_0x345b45=[];if(_0x29bcfe>0x0)_0x345b45['push'](_0x29bcfe+'天');if(_0x28bc60>0x0||_0x29bcfe>0x0)_0x345b45['push'](_0x28bc60+'小时');return _0x345b45['push'](_0x4b4196+'分'),_0x345b45['join']('\x20');}function formatUptimeShort(_0x5b1060){const _0x5dcc78=_0x28c0f4,_0x291079=parseInt(_0x5b1060||0x0)||0x0,_0x3af390=Math[_0x5dcc78(0x178)](_0x291079/0x15180),_0x5f3dca=Math[_0x5dcc78(0x178)](_0x291079%0x15180/0xe10),_0x3a3865=Math['floor'](_0x291079%0xe10/0x3c),_0x3d6da5=[];if(_0x3af390>0x0)_0x3d6da5['push'](_0x3af390+'天');if(_0x5f3dca>0x0||_0x3af390>0x0)_0x3d6da5[_0x5dcc78(0x16f)](_0x5f3dca+'时');return _0x3d6da5[_0x5dcc78(0x16f)](_0x3a3865+'分'),_0x3d6da5[_0x5dcc78(0x164)]('');}function trafficMbToBytes(_0x582c90){const _0x24ca45=parseFloat(_0x582c90||0x0);if(isNaN(_0x24ca45))return 0x0;return Math['round'](_0x24ca45*0x400*0x400);}function formatTraffic(_0x2ec5b7){const _0x4529dc=Number(_0x2ec5b7||0x0);if(!isFinite(_0x4529dc)||_0x4529dc<=0x0)return'0M';const _0x3d6f8f=0x400*0x400,_0x36364a=0x400*_0x3d6f8f;if(_0x4529dc>=_0x36364a)return(_0x4529dc/_0x36364a)['toFixed'](0x1)+'G';return(_0x4529dc/_0x3d6f8f)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x4d6ea3){const _0x13eae6=Number(_0x4d6ea3||0x0);if(!isFinite(_0x13eae6)||_0x13eae6<=0x0)return'0';const _0x2482eb=0x400,_0x45ab99=0x400*_0x2482eb,_0x30e213=0x400*_0x45ab99;if(_0x13eae6>=_0x30e213){const _0x354cae=_0x13eae6/_0x30e213;return(_0x354cae>=0x64?_0x354cae['toFixed'](0x0):_0x354cae['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x13eae6>=_0x45ab99)return Math['round'](_0x13eae6/_0x45ab99)+'M';if(_0x13eae6>=_0x2482eb)return Math['round'](_0x13eae6/_0x2482eb)+'K';return String(Math['round'](_0x13eae6));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x1e89d8){const _0x4e7773=_0x28c0f4;if(!_0x1e89d8)return ZERO_TRAFFIC;const _0x4f2a4b=_0x1e89d8['day_rx_traffic']!==undefined||_0x1e89d8['day_tx_traffic']!==undefined||_0x1e89d8['month_rx_traffic']!==undefined||_0x1e89d8['month_tx_traffic']!==undefined;if(!_0x4f2a4b)return{'todayBytes':Number(_0x1e89d8['todayBytes'])||0x0,'monthBytes':Number(_0x1e89d8['monthBytes'])||0x0,'todayRx':Number(_0x1e89d8['todayRx'])||0x0,'todayTx':Number(_0x1e89d8['todayTx'])||0x0,'monthRx':Number(_0x1e89d8['monthRx'])||0x0,'monthTx':Number(_0x1e89d8[_0x4e7773(0x180)])||0x0};const _0x45e20d=trafficMbToBytes(_0x1e89d8['day_rx_traffic']),_0x4e93f4=trafficMbToBytes(_0x1e89d8['day_tx_traffic']),_0x263e2a=trafficMbToBytes(_0x1e89d8[_0x4e7773(0x175)]),_0xdd8b10=trafficMbToBytes(_0x1e89d8['month_tx_traffic']);return{'todayBytes':_0x45e20d+_0x4e93f4,'monthBytes':_0x263e2a+_0xdd8b10,'todayRx':_0x45e20d,'todayTx':_0x4e93f4,'monthRx':_0x263e2a,'monthTx':_0xdd8b10};}function trafficRxRatio(_0x5eae80,_0xc73fcd){const _0x217a19=Number(_0x5eae80||0x0)+Number(_0xc73fcd||0x0);if(!isFinite(_0x217a19)||_0x217a19<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x5eae80||0x0)/_0x217a19));}function getOperatorName(_0x1ff63a,_0x375a4b){const _0x4a7ae5=_0x28c0f4;if(!_0x1ff63a)return _0x375a4b||'未知';const _0x352d1a=String(_0x1ff63a)['toUpperCase']();if(_0x352d1a['includes']('CMCC')||_0x352d1a===_0x4a7ae5(0x18f)||_0x352d1a['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x352d1a['includes'](_0x4a7ae5(0x18b))||_0x352d1a==='中国联通'||_0x352d1a['includes'](_0x4a7ae5(0x185))||_0x352d1a['includes']('UNICOM'))return'中国联通';if(_0x352d1a['includes']('CTCC')||_0x352d1a==='CT'||_0x352d1a==='中国电信'||_0x352d1a['includes']('CHINA\x20TELECOM')||_0x352d1a['includes']('TELECOM'))return'中国电信';if(_0x352d1a['includes']('CBN')||_0x352d1a==='中国广电'||_0x352d1a['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x1ff63a;}function getSignalColor(_0x426cc4,_0x48445f){let _0x80dd08=parseInt(_0x426cc4);if(isNaN(_0x80dd08))_0x80dd08=-0x78;if(_0x80dd08>-0x59)return _0x48445f['ok'];if(_0x80dd08>-0x63)return _0x48445f['warn'];return _0x48445f['bad'];}function getSinrColor(_0x40fd35,_0x435b72){let _0x1400ac=parseFloat(_0x40fd35);if(isNaN(_0x1400ac))_0x1400ac=0x0;if(_0x1400ac>0xf)return _0x435b72['ok'];if(_0x1400ac>0x8)return _0x435b72['warn'];return _0x435b72['bad'];}function getAllBands(_0x104361,_0x5ec4e4,_0x4fd510){const _0xafab38=[],_0x5f4a63=_0x4fd510?'N':'B',_0x94f090=getValidValue(_0x104361?.['BAND']||_0x104361?.['NR_BAND']||_0x104361?.['LTE_BAND'],'');if(_0x94f090)_0xafab38['push'](_0x5f4a63+_0x94f090);for(const _0x1a762b of _0x5ec4e4?.['sub_CA_info']||[]){const _0x29a039=String(_0x1a762b?.['Band']||'');if(_0x29a039&&_0x29a039!=='-')_0xafab38['push'](_0x5f4a63+_0x29a039);}if(_0xafab38['length']===0x0)_0xafab38['push'](_0x4fd510?'N78':'B3');return _0xafab38;}function getCaBadgeText(_0x4ef905,_0x225bfc,_0x400e97){const _0x136169=_0x28c0f4,_0x4d9020=(_0x225bfc?'5G\x20':_0x136169(0x16a))+_0x400e97;if(!_0x225bfc)return _0x4d9020;const _0x4fd6df=0x1+(_0x4ef905&&_0x4ef905['sub_CA_info']||[])['length'];if(_0x4fd6df>=0x4)return'5GA+';if(_0x4fd6df===0x3)return'5GA';if(_0x4fd6df===0x2)return'5G+';return _0x4d9020;}function getCarrierCountText(_0x384364){const _0x3c3f37=(_0x384364&&_0x384364['sub_CA_info']||[])['length'];if(_0x3c3f37===0x0)return'单载波';if(_0x3c3f37===0x1)return'双载波';if(_0x3c3f37===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x265324,_0x34bb23,_0x4162d4){const _0x165580=_0x28c0f4,_0x2c0b3a=String(_0x4162d4||'')[_0x165580(0x17a)]();if(!_0x34bb23){if(!_0x2c0b3a||_0x2c0b3a==='4G'||_0x2c0b3a==='LTE')return'4G\x20LTE';return'4G\x20'+_0x2c0b3a;}const _0x160b83=0x1+(_0x265324&&_0x265324['sub_CA_info']||[])['length'];if(_0x160b83>=0x4)return'5GA+';if(_0x160b83===0x3)return'5GA';if(_0x160b83===0x2)return'5G+';return _0x2c0b3a?'5G\x20'+_0x2c0b3a:'5G\x20SA';}function rsrpToPercent(_0x2b1f98){const _0x31bd4e=_0x28c0f4;let _0x1b4ff8=parseInt(_0x2b1f98);if(isNaN(_0x1b4ff8))_0x1b4ff8=-0x78;const _0x74e7b1=Math['min'](-0x46,Math['max'](-0x78,_0x1b4ff8)),_0x3f3b70=(_0x74e7b1+0x78)/0x32;return Math[_0x31bd4e(0x186)](0x64,Math['max'](0xa,0xa+_0x3f3b70*0x5a));}function sinrToPercent(_0x105ced){let _0x27e8a9=parseFloat(_0x105ced);if(isNaN(_0x27e8a9))_0x27e8a9=0x0;return Math['min'](0x64,Math['max'](0x0,_0x27e8a9/0x19*0x64));}function resolveDeviceName(_0x56b38c,_0x368b98){const _0x182688=_0x56b38c&&_0x56b38c['Name']!=null?String(_0x56b38c['Name'])['trim']():'';if(!_0x182688)return _0x368b98;if(_0x182688==='--'||_0x182688==='undefined'||_0x182688==='null'||_0x182688==='0')return _0x368b98;return _0x182688;}function _0x2590(){const _0xef6baa=['Bw9UDgHFCNHFDhjHzMzPyW','uM91DgvY','DxrMltG','zMXVB3i','mJm1mtuWyuXcChbO','Dg9vChbLCKnHC2u','odeZowLfwwXOva','q1bfx1DjreDfvf9dqunirq','v29YA01Vzgu','mtr2AwzKAMq','y2HHCKnVzgvbDa','Bw9UDgHuEa','ndmWmJy0rwjnve1z','mZy2ntK2menkBKrizq','r0vux0zjteLos19ut1bpte9hwv9jtKzp','4PQG77Ipios/NEwTMoIUVUE9RUwKSEI0Psb8ia','q0HjtKeGvu5jq09n','BwLU','C2LNBMfS','C3rYAw5NAwz5','zMLSDgvY','nZzwy3bnDfy','q1vdqW','BwfPBL9dqv9PBMzV','BNvTyMvY','nte0ndvQD0jAu1y','5lIT5zU956E75yQO','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','twfPBLjVDxrLCG','C2v0','AM9PBG','ywjVCNq','CgfYC2u','mtK1mJrOzKHxwKm','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','u1bo','neCG','ndiYodeYy0LoDNPc','tMv0u3rHDhvZ','z2v0','CNnWugfYyw0','ChvZAa','tfrfx0jbtKq','otbeBxznuLG','t3bLCMf0B3i','mZu0vvzIEKL0','mtqYmZrLAuPXqvK'];_0x2590=function(){return _0xef6baa;};return _0x2590();}function rsrpToBars(_0x547033){const _0x37df8c=parseInt(_0x547033);if(isNaN(_0x37df8c))return 0x0;if(_0x37df8c>=-0x55)return 0x4;if(_0x37df8c>=-0x5f)return 0x3;if(_0x37df8c>=-0x69)return 0x2;if(_0x37df8c>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1aa4b9){const _0x3a19ed=_0x28c0f4;if(!_0x1aa4b9)return 0x0;if(typeof _0x1aa4b9['onlineDevices']===_0x3a19ed(0x18d))return _0x1aa4b9['onlineDevices'];const _0x368115=_0x1aa4b9['MainBaseInfo'];if(!Array['isArray'](_0x368115))return 0x0;return _0x368115[_0x3a19ed(0x189)](_0xcd0e21=>_0xcd0e21&&String(_0xcd0e21[_0x3a19ed(0x16c)])==='1')['length'];}function urlDecode(_0x294a0c){const _0x421d1e=[];for(let _0x80e5a7=0x0;_0x80e5a7<_0x294a0c['length'];_0x80e5a7+=0x2)_0x421d1e['push'](parseInt(_0x294a0c['substr'](_0x80e5a7,0x2),0x10));let _0x23161d='';for(let _0x398319=0x0;_0x398319<_0x421d1e['length'];){const _0x53664d=_0x421d1e[_0x398319];if(_0x53664d<0x80)_0x23161d+=String['fromCharCode'](_0x53664d),_0x398319++;else{if(_0x53664d>>0x5===0x6)_0x23161d+=String['fromCharCode']((_0x53664d&0x1f)<<0x6|_0x421d1e[_0x398319+0x1]&0x3f),_0x398319+=0x2;else _0x53664d>>0x4===0xe?(_0x23161d+=String['fromCharCode']((_0x53664d&0xf)<<0xc|(_0x421d1e[_0x398319+0x1]&0x3f)<<0x6|_0x421d1e[_0x398319+0x2]&0x3f),_0x398319+=0x3):(_0x23161d+=String['fromCharCode']((_0x53664d&0x7)<<0x12|(_0x421d1e[_0x398319+0x1]&0x3f)<<0xc|(_0x421d1e[_0x398319+0x2]&0x3f)<<0x6|_0x421d1e[_0x398319+0x3]),_0x398319+=0x4);}}return _0x23161d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x28c0f4(0x168),'auth':_0x28c0f4(0x161)};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x825fcd='0123456789ABCDEF';let _0xaea223='';for(let _0x1cee8b=0x0;_0x1cee8b<0x20;_0x1cee8b++)_0xaea223+=_0x825fcd[Math['floor'](Math['random']()*0x10)];return _0xaea223;}function generateSequenceId(_0x23dd95){return _0x23dd95+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x294e41){if(!_0x294e41||_0x294e41['length']===0x0)return null;if(_0x294e41['some'](_0x1c68e7=>AUTH_ERROR_CODES['indexOf'](_0x1c68e7)>=0x0))return'auth';if(_0x294e41['some'](_0x52569b=>DEVICE_ERROR_CODES['indexOf'](_0x52569b)>=0x0))return'device';return'network';}function readResult(_0x38b088,_0x1bd073){const _0x1130df=_0x28c0f4;if(!_0x38b088||_0x38b088['status']!=='fulfilled'||!_0x38b088['value'])return _0x1bd073['push'](NET_ERROR_CODE),null;const _0x3f5ab1=_0x38b088['value'];if(_0x3f5ab1['resultCode']===0x0)return _0x3f5ab1;return _0x1bd073[_0x1130df(0x16f)](typeof _0x3f5ab1['resultCode']==='number'?_0x3f5ab1['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x4afb76,_0x564ef9,_0x54346c,_0x35e796,_0x1622e7){const _0x3f461e=_0x28c0f4;if(!_0x54346c)return null;const _0x3025e1={'CmdType':_0x4afb76,..._0x564ef9};if(!_0x3025e1['SequenceId'])_0x3025e1['SequenceId']=generateSequenceId(_0x4afb76);const _0x2c3751={'appVersion':urlDecode('322e322e3531'),'mac':_0x35e796,'timeout':0x3,'token':_0x54346c,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x3f461e(0x188)](_0x3025e1)}),'operatorId':getOperatorId()},_0x4de097=new AbortController(),_0x2ed3f4=setTimeout(()=>{const _0x8a9b=_0x3f461e;try{_0x4de097[_0x8a9b(0x165)]();}catch(_0x50a29e){}},_0x1622e7);try{const _0x6fcbf6=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x54346c},'body':JSON['stringify'](_0x2c3751),'signal':_0x4de097[_0x3f461e(0x187)]}),_0x110ac5=await _0x6fcbf6['json']();if(_0x110ac5&&_0x110ac5['rspParam']){const _0x21ee08=JSON['parse'](_0x110ac5[_0x3f461e(0x16e)]);if(_0x21ee08['Result']===0x0&&_0x21ee08['return_Parameter']){const _0x52f239=String(_0x21ee08['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x44fa37=JSON['parse'](decodeBase64Utf8(_0x52f239));return{..._0x44fa37,'resultCode':0x0};}}return _0x110ac5||{'resultCode':NET_ERROR_CODE};}catch(_0x1feb5d){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x2ed3f4);}}function decodeBase64Utf8(_0x3e316a){const _0x3cd0dc=_0x28c0f4,_0x47d5c7=atob(_0x3e316a);try{const _0x50a8cf=new Uint8Array(_0x47d5c7['length']);for(let _0x571ebc=0x0;_0x571ebc<_0x47d5c7['length'];_0x571ebc++)_0x50a8cf[_0x571ebc]=_0x47d5c7[_0x3cd0dc(0x17f)](_0x571ebc);return new TextDecoder(_0x3cd0dc(0x177))['decode'](_0x50a8cf);}catch(_0x538ff9){return _0x47d5c7;}}async function fetchCpeApi(_0xc092ae,_0x5cdbc3,_0x3a3d3d,_0x510351={},_0x21e119=0xbb8){if(!_0x5cdbc3)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0xc092ae,_0x510351,_0x5cdbc3,_0x3a3d3d,_0x21e119);}function isEmpty(_0x16cdc6){return!_0x16cdc6||typeof _0x16cdc6==='object'&&Object['keys'](_0x16cdc6)['length']===0x0;}async function fetchAll(_0x5e80b7){const _0x20d569=_0x28c0f4,_0x2e396c=_0x5e80b7['token'],_0x2a9f13=_0x5e80b7['mac'],_0x2cdbd1=0xbb8,_0x48d64a=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x2e396c,_0x2a9f13,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x2e396c,_0x2a9f13,{},0x9c4),fetchCpeApi(_0x20d569(0x183),_0x2e396c,_0x2a9f13,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x2e396c,_0x2a9f13,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x2e396c,_0x2a9f13,{},0xbb8)]),_0x515734=[];let _0x4eb1b2=readResult(_0x48d64a[0x0],_0x515734),_0x4b12b0=readResult(_0x48d64a[0x1],_0x515734),_0x198996=readResult(_0x48d64a[0x2],_0x515734),_0x1909e4=readResult(_0x48d64a[0x3],_0x515734);const _0x455b5f=readResult(_0x48d64a[0x4],_0x515734);if(_0x198996)_0x198996=_0x198996[_0x20d569(0x162)]||_0x198996[_0x20d569(0x176)]||_0x198996;const _0x23a4ee=[_0x4eb1b2,_0x4b12b0,_0x198996,_0x1909e4,_0x455b5f]['filter'](_0xfe1ef4=>!isEmpty(_0xfe1ef4))['length'],_0x26b1d4=_0x23a4ee===0x0?classifyFault(_0x515734):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x23a4ee+'/5\x20|\x20fault='+(_0x26b1d4||'-')+'\x20|\x20失败码=['+_0x515734['join'](',')+']'),{'rf':_0x4eb1b2,'ca':_0x4b12b0,'topo':_0x198996,'sim':_0x1909e4,'traffic':_0x455b5f,'failCodes':_0x515734,'fault':_0x26b1d4,'successCount':_0x23a4ee};}function saveCache(_0x305dc4){const _0xa0de8b=_0x28c0f4;try{const _0x26e803=parseTrafficData(_0x305dc4['traffic']),_0xed82d8={'rf':{'WorkMode':_0x305dc4['rf']?.[_0xa0de8b(0x17d)],'SSB_RSRP':_0x305dc4['rf']?.['SSB_RSRP'],'RSRP':_0x305dc4['rf']?.['RSRP'],'SSB_SINR':_0x305dc4['rf']?.['SSB_SINR'],'SINR':_0x305dc4['rf']?.['SINR'],'SSB_RSRQ':_0x305dc4['rf']?.['SSB_RSRQ'],'RSRQ':_0x305dc4['rf']?.['RSRQ'],'SSB_RSSI':_0x305dc4['rf']?.['SSB_RSSI'],'RSSI':_0x305dc4['rf']?.['RSSI'],'BAND':_0x305dc4['rf']?.['BAND'],'NR_BAND':_0x305dc4['rf']?.['NR_BAND'],'LTE_BAND':_0x305dc4['rf']?.[_0xa0de8b(0x170)],'PCI':_0x305dc4['rf']?.['PCI'],'SPN':_0x305dc4['rf']?.['SPN']},'ca':{'main_CA_info':_0x305dc4['ca']?.[_0xa0de8b(0x18c)]||{},'sub_CA_info':_0x305dc4['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x305dc4['topo']?.[_0xa0de8b(0x16c)],'UpTime':_0x305dc4['topo']?.['UpTime'],'Name':_0x305dc4['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x305dc4['topo'])},'sim':{'Operator':_0x305dc4['sim']?.['Operator'],'SPN':_0x305dc4['sim']?.['SPN']},'traffic':{'todayBytes':_0x26e803['todayBytes'],'monthBytes':_0x26e803['monthBytes'],'todayRx':_0x26e803['todayRx'],'todayTx':_0x26e803['todayTx'],'monthRx':_0x26e803['monthRx'],'monthTx':_0x26e803['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0xed82d8));}catch(_0x2c268f){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x2c268f);}}function loadCache(){const _0x264e66=_0x28c0f4;try{const _0x4ad219=Keychain['get'](KEY_CACHE);if(!_0x4ad219)return null;const _0x35d652=JSON[_0x264e66(0x166)](_0x4ad219);if(!_0x35d652||typeof _0x35d652!=='object')return null;return _0x35d652;}catch(_0x402448){return null;}}
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
