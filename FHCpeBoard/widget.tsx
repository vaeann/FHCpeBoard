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

const _0x407f6a=_0x4db2;(function(_0xe2487e,_0x1e09e3){const _0x5c081b=_0x4db2,_0xc489e0=_0xe2487e();while(!![]){try{const _0x534b96=parseInt(_0x5c081b(0xb6))/0x1*(-parseInt(_0x5c081b(0xbe))/0x2)+-parseInt(_0x5c081b(0xbf))/0x3+-parseInt(_0x5c081b(0xb3))/0x4*(-parseInt(_0x5c081b(0xab))/0x5)+-parseInt(_0x5c081b(0xa8))/0x6*(-parseInt(_0x5c081b(0xac))/0x7)+-parseInt(_0x5c081b(0xb9))/0x8*(parseInt(_0x5c081b(0xcd))/0x9)+parseInt(_0x5c081b(0xbd))/0xa*(parseInt(_0x5c081b(0xa4))/0xb)+-parseInt(_0x5c081b(0xb4))/0xc*(-parseInt(_0x5c081b(0xcb))/0xd);if(_0x534b96===_0x1e09e3)break;else _0xc489e0['push'](_0xc489e0['shift']());}catch(_0x33d44d){_0xc489e0['push'](_0xc489e0['shift']());}}}(_0x3c63,0xd697d));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0x407f6a(0xa9);function readKey(_0x467ceb,_0xccd987){const _0x573e7e=_0x407f6a;try{const _0x586646=Keychain[_0x573e7e(0xc9)](_0x467ceb);return _0x586646===null||_0x586646===undefined||_0x586646===''?_0xccd987:String(_0x586646)['trim']();}catch(_0x2943bc){return _0xccd987;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x3ff21c){const _0x8472dc=_0x407f6a;try{if(_0x3ff21c[_0x8472dc(0xbc)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x3ff21c['token'])['trim']());if(_0x3ff21c['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x3ff21c['mac'])['trim']()||DEFAULT_MAC);if(_0x3ff21c['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x3ff21c[_0x8472dc(0xa5)])[_0x8472dc(0xc3)]()||DEFAULT_NAME);}catch(_0x2f3386){console['log'](_0x8472dc(0xc7)+_0x2f3386);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x6ffd7d,_0x209b27){if(_0x6ffd7d===undefined||_0x6ffd7d===null||_0x6ffd7d==='')return _0x209b27;const _0x18f7a3=String(_0x6ffd7d)['trim']();return _0x18f7a3==='-'||_0x18f7a3==='undefined'?_0x209b27:_0x18f7a3;}function firstValid(_0x5e3ab4,_0x38643c){for(const _0x13e1b8 of _0x5e3ab4){const _0x471f57=getValidValue(_0x13e1b8,'');if(_0x471f57)return _0x471f57;}return _0x38643c;}function resolveOperator(_0x202cd1,_0x101209){const _0x3d1660=getOperatorName(_0x101209&&_0x101209['Operator']||'',_0x101209&&_0x101209['SPN']||'');if(_0x3d1660==='未知'&&_0x202cd1&&_0x202cd1['SPN'])return String(_0x202cd1['SPN']);return _0x3d1660;}function formatUptime(_0x3bad78){const _0xd33910=_0x407f6a,_0x2842a0=parseInt(_0x3bad78||0x0)||0x0,_0x32eeed=Math['floor'](_0x2842a0/0x15180),_0x3166b1=Math['floor'](_0x2842a0%0x15180/0xe10),_0x342b3f=Math[_0xd33910(0xb5)](_0x2842a0%0xe10/0x3c),_0x17e6fe=[];if(_0x32eeed>0x0)_0x17e6fe['push'](_0x32eeed+'天');if(_0x3166b1>0x0||_0x32eeed>0x0)_0x17e6fe['push'](_0x3166b1+'小时');return _0x17e6fe['push'](_0x342b3f+'分'),_0x17e6fe['join']('\x20');}function _0x4db2(_0x15e540,_0x4cec1d){_0x15e540=_0x15e540-0xa3;const _0x3c63cd=_0x3c63();let _0x4db2ec=_0x3c63cd[_0x15e540];if(_0x4db2['bdaxyV']===undefined){var _0x57b89d=function(_0x1620b0){const _0x336db3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4ec5ea='',_0x467ceb='';for(let _0xccd987=0x0,_0x586646,_0x2943bc,_0x3ff21c=0x0;_0x2943bc=_0x1620b0['charAt'](_0x3ff21c++);~_0x2943bc&&(_0x586646=_0xccd987%0x4?_0x586646*0x40+_0x2943bc:_0x2943bc,_0xccd987++%0x4)?_0x4ec5ea+=String['fromCharCode'](0xff&_0x586646>>(-0x2*_0xccd987&0x6)):0x0){_0x2943bc=_0x336db3['indexOf'](_0x2943bc);}for(let _0x2f3386=0x0,_0x6ffd7d=_0x4ec5ea['length'];_0x2f3386<_0x6ffd7d;_0x2f3386++){_0x467ceb+='%'+('00'+_0x4ec5ea['charCodeAt'](_0x2f3386)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x467ceb);};_0x4db2['fQZSXv']=_0x57b89d,_0x4db2['FIVMxk']={},_0x4db2['bdaxyV']=!![];}const _0x2786b9=_0x3c63cd[0x0];_0x4db2['ukMfjU']!==_0x2786b9&&(_0x4db2['FIVMxk']={},_0x4db2['ukMfjU']=_0x2786b9);const _0x421dca=_0x4db2['FIVMxk'][_0x15e540];return _0x421dca===undefined?(_0x4db2ec=_0x4db2['fQZSXv'](_0x4db2ec),_0x4db2['FIVMxk'][_0x15e540]=_0x4db2ec):_0x4db2ec=_0x421dca,_0x4db2ec;}function formatUptimeShort(_0x31676a){const _0x575285=parseInt(_0x31676a||0x0)||0x0,_0x152c32=Math['floor'](_0x575285/0x15180),_0x1bd91a=Math['floor'](_0x575285%0x15180/0xe10),_0x2fdeb5=Math['floor'](_0x575285%0xe10/0x3c),_0x26ca90=[];if(_0x152c32>0x0)_0x26ca90['push'](_0x152c32+'天');if(_0x1bd91a>0x0||_0x152c32>0x0)_0x26ca90['push'](_0x1bd91a+'时');return _0x26ca90['push'](_0x2fdeb5+'分'),_0x26ca90['join']('');}function trafficMbToBytes(_0x360eec){const _0x22a5b3=parseFloat(_0x360eec||0x0);if(isNaN(_0x22a5b3))return 0x0;return Math['round'](_0x22a5b3*0x400*0x400);}function formatTraffic(_0x33c2c7){const _0x57f2b4=_0x407f6a,_0x1371ac=Number(_0x33c2c7||0x0);if(!isFinite(_0x1371ac)||_0x1371ac<=0x0)return'0M';const _0x158030=0x400*0x400,_0x560a48=0x400*_0x158030;if(_0x1371ac>=_0x560a48)return(_0x1371ac/_0x560a48)[_0x57f2b4(0xc8)](0x1)+'G';return(_0x1371ac/_0x158030)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x3ae709){const _0x1bcf33=_0x407f6a,_0x2b87fc=Number(_0x3ae709||0x0);if(!isFinite(_0x2b87fc)||_0x2b87fc<=0x0)return'0';const _0x499fe0=0x400,_0x131fe7=0x400*_0x499fe0,_0x3718f7=0x400*_0x131fe7;if(_0x2b87fc>=_0x3718f7){const _0x155a04=_0x2b87fc/_0x3718f7;return(_0x155a04>=0x64?_0x155a04['toFixed'](0x0):_0x155a04[_0x1bcf33(0xc8)](0x1)['replace'](/\.0$/,''))+'G';}if(_0x2b87fc>=_0x131fe7)return Math['round'](_0x2b87fc/_0x131fe7)+'M';if(_0x2b87fc>=_0x499fe0)return Math['round'](_0x2b87fc/_0x499fe0)+'K';return String(Math['round'](_0x2b87fc));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x43eff5){const _0x1becdb=_0x407f6a;if(!_0x43eff5)return ZERO_TRAFFIC;const _0x430a54=_0x43eff5['day_rx_traffic']!==undefined||_0x43eff5['day_tx_traffic']!==undefined||_0x43eff5['month_rx_traffic']!==undefined||_0x43eff5['month_tx_traffic']!==undefined;if(!_0x430a54)return{'todayBytes':Number(_0x43eff5['todayBytes'])||0x0,'monthBytes':Number(_0x43eff5['monthBytes'])||0x0,'todayRx':Number(_0x43eff5['todayRx'])||0x0,'todayTx':Number(_0x43eff5['todayTx'])||0x0,'monthRx':Number(_0x43eff5['monthRx'])||0x0,'monthTx':Number(_0x43eff5['monthTx'])||0x0};const _0x32563b=trafficMbToBytes(_0x43eff5['day_rx_traffic']),_0x5f0ee4=trafficMbToBytes(_0x43eff5['day_tx_traffic']),_0x167066=trafficMbToBytes(_0x43eff5[_0x1becdb(0xc6)]),_0x3d0913=trafficMbToBytes(_0x43eff5['month_tx_traffic']);return{'todayBytes':_0x32563b+_0x5f0ee4,'monthBytes':_0x167066+_0x3d0913,'todayRx':_0x32563b,'todayTx':_0x5f0ee4,'monthRx':_0x167066,'monthTx':_0x3d0913};}function trafficRxRatio(_0x2d0732,_0x121dbc){const _0xceb376=Number(_0x2d0732||0x0)+Number(_0x121dbc||0x0);if(!isFinite(_0xceb376)||_0xceb376<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2d0732||0x0)/_0xceb376));}function getOperatorName(_0x45d89e,_0x1406fd){const _0x6d3a5c=_0x407f6a;if(!_0x45d89e)return _0x1406fd||'未知';const _0x9d39ab=String(_0x45d89e)['toUpperCase']();if(_0x9d39ab['includes']('CMCC')||_0x9d39ab==='中国移动'||_0x9d39ab['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x9d39ab['includes']('CUCC')||_0x9d39ab==='中国联通'||_0x9d39ab['includes']('CHINA\x20UNICOM')||_0x9d39ab['includes']('UNICOM'))return'中国联通';if(_0x9d39ab['includes']('CTCC')||_0x9d39ab==='CT'||_0x9d39ab==='中国电信'||_0x9d39ab['includes']('CHINA\x20TELECOM')||_0x9d39ab[_0x6d3a5c(0xc5)]('TELECOM'))return'中国电信';if(_0x9d39ab['includes'](_0x6d3a5c(0xca))||_0x9d39ab==='中国广电'||_0x9d39ab['includes']('CHINA\x20BROADCAST'))return _0x6d3a5c(0xc1);return _0x45d89e;}function getSignalColor(_0x51e2b9,_0x4fd7bb){let _0x3aed45=parseInt(_0x51e2b9);if(isNaN(_0x3aed45))_0x3aed45=-0x78;if(_0x3aed45>-0x59)return _0x4fd7bb['ok'];if(_0x3aed45>-0x63)return _0x4fd7bb['warn'];return _0x4fd7bb['bad'];}function getSinrColor(_0x538634,_0x3d8aa7){let _0x487646=parseFloat(_0x538634);if(isNaN(_0x487646))_0x487646=0x0;if(_0x487646>0xf)return _0x3d8aa7['ok'];if(_0x487646>0x8)return _0x3d8aa7['warn'];return _0x3d8aa7['bad'];}function getAllBands(_0x32e441,_0x3ff522,_0x439cd8){const _0x18f3e2=_0x407f6a,_0x49c2b6=[],_0x565c7e=_0x439cd8?'N':'B',_0x3dab02=getValidValue(_0x32e441?.['BAND']||_0x32e441?.[_0x18f3e2(0xae)]||_0x32e441?.['LTE_BAND'],'');if(_0x3dab02)_0x49c2b6['push'](_0x565c7e+_0x3dab02);for(const _0x443cce of _0x3ff522?.['sub_CA_info']||[]){const _0x370d55=String(_0x443cce?.['Band']||'');if(_0x370d55&&_0x370d55!=='-')_0x49c2b6['push'](_0x565c7e+_0x370d55);}if(_0x49c2b6['length']===0x0)_0x49c2b6[_0x18f3e2(0xb8)](_0x439cd8?'N78':'B3');return _0x49c2b6;}function getCaBadgeText(_0x1e11a5,_0x716651,_0x28968c){const _0x1b2946=_0x407f6a,_0x67cb70=(_0x716651?'5G\x20':'4G\x20')+_0x28968c;if(!_0x716651)return _0x67cb70;const _0x403401=0x1+(_0x1e11a5&&_0x1e11a5['sub_CA_info']||[])['length'];if(_0x403401>=0x4)return _0x1b2946(0xb2);if(_0x403401===0x3)return'5GA';if(_0x403401===0x2)return'5G+';return _0x67cb70;}function getCarrierCountText(_0x1f7982){const _0x30e8c9=_0x407f6a,_0xc5a799=(_0x1f7982&&_0x1f7982['sub_CA_info']||[])[_0x30e8c9(0xc0)];if(_0xc5a799===0x0)return'单载波';if(_0xc5a799===0x1)return _0x30e8c9(0xa6);if(_0xc5a799===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x554927,_0x1a2e8e,_0xefe8c0){const _0x301496=_0x407f6a,_0x1febcd=String(_0xefe8c0||'')['toUpperCase']();if(!_0x1a2e8e){if(!_0x1febcd||_0x1febcd==='4G'||_0x1febcd==='LTE')return'4G\x20LTE';return'4G\x20'+_0x1febcd;}const _0x2c3510=0x1+(_0x554927&&_0x554927['sub_CA_info']||[])['length'];if(_0x2c3510>=0x4)return'5GA+';if(_0x2c3510===0x3)return _0x301496(0xa7);if(_0x2c3510===0x2)return'5G+';return _0x1febcd?'5G\x20'+_0x1febcd:'5G\x20SA';}function rsrpToPercent(_0x29bda5){let _0x7bd32d=parseInt(_0x29bda5);if(isNaN(_0x7bd32d))_0x7bd32d=-0x78;const _0x461298=Math['min'](-0x46,Math['max'](-0x78,_0x7bd32d)),_0x2b3a7f=(_0x461298+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x2b3a7f*0x5a));}function _0x3c63(){const _0x2077ca=['mJmZDuz1wvz1','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','ChvZAa','mtuXotyWzuTOCKzp','DhjHzMzPyW','twfPBLjVDxrLCG','Dg9Rzw4','mta1mtbwDxLtweG','mtmYmZz0AfDZA1G','mtiXmtKYnxnMtxznrG','BgvUz3rO','5lIT5zU95BM/55s1','B2jQzwn0','DhjPBq','C2LNBMfS','Aw5JBhvKzxm','Bw9UDgHFCNHFDhjHzMzPyW','4PQG77Ipios/NEwTMoIUVUE9RUwKSEI0Psb8ia','Dg9gAxHLza','z2v0','q0jo','mtaZndG1odvNzMTLCvm','CgfYC2u','mZzjDvDHq2y','DMfSDwu','mte5owLUweDrrq','zgv2AwnLtMfTzq','5y+m6l295RoI','nuDb','nduWnMT6zfbmqG','54o954gRq1bf','Bw9UDgHuEa','mZaYmZbxyxDLzLi','mte2mJb4BgHsD1e','77Yb55M75B2v5AsX5Pwi','tLjFqKfora','DxrMltG','zNjVBunOyxjdB2rL','uMvZDwX0','nuDbkW','ndKYwKrivKzi','mtj1EwjPqvG','zMXVB3i'];_0x3c63=function(){return _0x2077ca;};return _0x3c63();}function sinrToPercent(_0x15396e){let _0x5530c7=parseFloat(_0x15396e);if(isNaN(_0x5530c7))_0x5530c7=0x0;return Math['min'](0x64,Math['max'](0x0,_0x5530c7/0x19*0x64));}function resolveDeviceName(_0x54763f,_0x37cec6){const _0x454327=_0x54763f&&_0x54763f['Name']!=null?String(_0x54763f['Name'])['trim']():'';if(!_0x454327)return _0x37cec6;if(_0x454327==='--'||_0x454327==='undefined'||_0x454327==='null'||_0x454327==='0')return _0x37cec6;return _0x454327;}function rsrpToBars(_0x5d9333){const _0x56bed1=parseInt(_0x5d9333);if(isNaN(_0x56bed1))return 0x0;if(_0x56bed1>=-0x55)return 0x4;if(_0x56bed1>=-0x5f)return 0x3;if(_0x56bed1>=-0x69)return 0x2;if(_0x56bed1>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x392be1){if(!_0x392be1)return 0x0;if(typeof _0x392be1['onlineDevices']==='number')return _0x392be1['onlineDevices'];const _0x4548c1=_0x392be1['MainBaseInfo'];if(!Array['isArray'](_0x4548c1))return 0x0;return _0x4548c1['filter'](_0x1df3e1=>_0x1df3e1&&String(_0x1df3e1['NetStatus'])==='1')['length'];}function urlDecode(_0xd5414b){const _0x3a5340=_0x407f6a,_0x42babc=[];for(let _0xaa75e4=0x0;_0xaa75e4<_0xd5414b['length'];_0xaa75e4+=0x2)_0x42babc['push'](parseInt(_0xd5414b['substr'](_0xaa75e4,0x2),0x10));let _0x2ba74e='';for(let _0x427ddc=0x0;_0x427ddc<_0x42babc['length'];){const _0x2ffbe8=_0x42babc[_0x427ddc];if(_0x2ffbe8<0x80)_0x2ba74e+=String[_0x3a5340(0xb0)](_0x2ffbe8),_0x427ddc++;else{if(_0x2ffbe8>>0x5===0x6)_0x2ba74e+=String[_0x3a5340(0xb0)]((_0x2ffbe8&0x1f)<<0x6|_0x42babc[_0x427ddc+0x1]&0x3f),_0x427ddc+=0x2;else _0x2ffbe8>>0x4===0xe?(_0x2ba74e+=String['fromCharCode']((_0x2ffbe8&0xf)<<0xc|(_0x42babc[_0x427ddc+0x1]&0x3f)<<0x6|_0x42babc[_0x427ddc+0x2]&0x3f),_0x427ddc+=0x3):(_0x2ba74e+=String[_0x3a5340(0xb0)]((_0x2ffbe8&0x7)<<0x12|(_0x42babc[_0x427ddc+0x1]&0x3f)<<0xc|(_0x42babc[_0x427ddc+0x2]&0x3f)<<0x6|_0x42babc[_0x427ddc+0x3]),_0x427ddc+=0x4);}}return _0x2ba74e;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':_0x407f6a(0xad)},FAULT_HINT={'network':_0x407f6a(0xb7),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x35005a=_0x407f6a,_0x185df6='0123456789ABCDEF';let _0x56d81d='';for(let _0x5bdb36=0x0;_0x5bdb36<0x20;_0x5bdb36++)_0x56d81d+=_0x185df6[Math[_0x35005a(0xb5)](Math['random']()*0x10)];return _0x56d81d;}function generateSequenceId(_0x3bb7a5){return _0x3bb7a5+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x2d4ae3){if(!_0x2d4ae3||_0x2d4ae3['length']===0x0)return null;if(_0x2d4ae3['some'](_0x215d97=>AUTH_ERROR_CODES['indexOf'](_0x215d97)>=0x0))return'auth';if(_0x2d4ae3['some'](_0x36ac19=>DEVICE_ERROR_CODES['indexOf'](_0x36ac19)>=0x0))return'device';return'network';}function readResult(_0x36829c,_0x2b5c66){const _0x5292f9=_0x407f6a;if(!_0x36829c||_0x36829c['status']!=='fulfilled'||!_0x36829c[_0x5292f9(0xa3)])return _0x2b5c66['push'](NET_ERROR_CODE),null;const _0x35d659=_0x36829c['value'];if(_0x35d659['resultCode']===0x0)return _0x35d659;return _0x2b5c66['push'](typeof _0x35d659['resultCode']==='number'?_0x35d659['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x10df94,_0x43eb92,_0x5b2411,_0x16ed21,_0x1cbdf3){const _0x1fc91b=_0x407f6a;if(!_0x5b2411)return null;const _0x2b420d={'CmdType':_0x10df94,..._0x43eb92};if(!_0x2b420d['SequenceId'])_0x2b420d['SequenceId']=generateSequenceId(_0x10df94);const _0x2e615e={'appVersion':urlDecode('322e322e3531'),'mac':_0x16ed21,'timeout':0x3,'token':_0x5b2411,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x2b420d)}),'operatorId':getOperatorId()},_0x12af9e=new AbortController(),_0x3045c5=setTimeout(()=>{try{_0x12af9e['abort']();}catch(_0x2fb89f){}},_0x1cbdf3);try{const _0x250f1c=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x5b2411},'body':JSON['stringify'](_0x2e615e),'signal':_0x12af9e[_0x1fc91b(0xc4)]}),_0x152e7f=await _0x250f1c['json']();if(_0x152e7f&&_0x152e7f['rspParam']){const _0x356832=JSON[_0x1fc91b(0xcc)](_0x152e7f['rspParam']);if(_0x356832[_0x1fc91b(0xb1)]===0x0&&_0x356832['return_Parameter']){const _0x22697a=String(_0x356832['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x412b74=JSON[_0x1fc91b(0xcc)](decodeBase64Utf8(_0x22697a));return{..._0x412b74,'resultCode':0x0};}}return _0x152e7f||{'resultCode':NET_ERROR_CODE};}catch(_0x4bcceb){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3045c5);}}function decodeBase64Utf8(_0x229624){const _0x44d78d=_0x407f6a,_0x1d1a68=atob(_0x229624);try{const _0x252426=new Uint8Array(_0x1d1a68['length']);for(let _0x22a7e6=0x0;_0x22a7e6<_0x1d1a68['length'];_0x22a7e6++)_0x252426[_0x22a7e6]=_0x1d1a68['charCodeAt'](_0x22a7e6);return new TextDecoder(_0x44d78d(0xaf))['decode'](_0x252426);}catch(_0x4d049e){return _0x1d1a68;}}async function fetchCpeApi(_0xe40446,_0x4e5090,_0x3e2a70,_0x45689b={},_0x501f51=0xbb8){if(!_0x4e5090)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0xe40446,_0x45689b,_0x4e5090,_0x3e2a70,_0x501f51);}function isEmpty(_0x54f7f9){const _0x26853a=_0x407f6a;return!_0x54f7f9||typeof _0x54f7f9===_0x26853a(0xc2)&&Object['keys'](_0x54f7f9)['length']===0x0;}async function fetchAll(_0xc627c3){const _0x1a0b7f=_0x407f6a,_0x5ce1a8=_0xc627c3[_0x1a0b7f(0xbc)],_0x6ba5a9=_0xc627c3['mac'],_0x2462bc=0xbb8,_0x12e81a=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x5ce1a8,_0x6ba5a9,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x5ce1a8,_0x6ba5a9,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x5ce1a8,_0x6ba5a9,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x5ce1a8,_0x6ba5a9,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x5ce1a8,_0x6ba5a9,{},0xbb8)]),_0x87ac58=[];let _0x524492=readResult(_0x12e81a[0x0],_0x87ac58),_0x4e8d37=readResult(_0x12e81a[0x1],_0x87ac58),_0x242e3d=readResult(_0x12e81a[0x2],_0x87ac58),_0x5600c7=readResult(_0x12e81a[0x3],_0x87ac58);const _0x32f0c0=readResult(_0x12e81a[0x4],_0x87ac58);if(_0x242e3d)_0x242e3d=_0x242e3d[_0x1a0b7f(0xbb)]||_0x242e3d['Router']||_0x242e3d;const _0x26df5a=[_0x524492,_0x4e8d37,_0x242e3d,_0x5600c7,_0x32f0c0]['filter'](_0x22c7bc=>!isEmpty(_0x22c7bc))['length'],_0x269619=_0x26df5a===0x0?classifyFault(_0x87ac58):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x26df5a+'/5\x20|\x20fault='+(_0x269619||'-')+'\x20|\x20失败码=['+_0x87ac58['join'](',')+']'),{'rf':_0x524492,'ca':_0x4e8d37,'topo':_0x242e3d,'sim':_0x5600c7,'traffic':_0x32f0c0,'failCodes':_0x87ac58,'fault':_0x269619,'successCount':_0x26df5a};}function saveCache(_0x4440a0){const _0x1a5b29=_0x407f6a;try{const _0x45385d=parseTrafficData(_0x4440a0[_0x1a5b29(0xba)]),_0xdeee04={'rf':{'WorkMode':_0x4440a0['rf']?.['WorkMode'],'SSB_RSRP':_0x4440a0['rf']?.['SSB_RSRP'],'RSRP':_0x4440a0['rf']?.['RSRP'],'SSB_SINR':_0x4440a0['rf']?.['SSB_SINR'],'SINR':_0x4440a0['rf']?.['SINR'],'SSB_RSRQ':_0x4440a0['rf']?.['SSB_RSRQ'],'RSRQ':_0x4440a0['rf']?.['RSRQ'],'SSB_RSSI':_0x4440a0['rf']?.['SSB_RSSI'],'RSSI':_0x4440a0['rf']?.['RSSI'],'BAND':_0x4440a0['rf']?.['BAND'],'NR_BAND':_0x4440a0['rf']?.[_0x1a5b29(0xae)],'LTE_BAND':_0x4440a0['rf']?.['LTE_BAND'],'PCI':_0x4440a0['rf']?.['PCI'],'SPN':_0x4440a0['rf']?.['SPN']},'ca':{'main_CA_info':_0x4440a0['ca']?.['main_CA_info']||{},'sub_CA_info':_0x4440a0['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x4440a0['topo']?.['NetStatus'],'UpTime':_0x4440a0['topo']?.['UpTime'],'Name':_0x4440a0['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x4440a0['topo'])},'sim':{'Operator':_0x4440a0['sim']?.['Operator'],'SPN':_0x4440a0['sim']?.['SPN']},'traffic':{'todayBytes':_0x45385d['todayBytes'],'monthBytes':_0x45385d['monthBytes'],'todayRx':_0x45385d['todayRx'],'todayTx':_0x45385d['todayTx'],'monthRx':_0x45385d['monthRx'],'monthTx':_0x45385d[_0x1a5b29(0xaa)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0xdeee04));}catch(_0x101085){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x101085);}}function loadCache(){try{const _0x2bcfc8=Keychain['get'](KEY_CACHE);if(!_0x2bcfc8)return null;const _0xbdfc05=JSON['parse'](_0x2bcfc8);if(!_0xbdfc05||typeof _0xbdfc05!=='object')return null;return _0xbdfc05;}catch(_0x1667fe){return null;}}
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
