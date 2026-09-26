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

const _0x6c27d8=_0x1b46;(function(_0x10ea27,_0x238067){const _0x4b93d1=_0x1b46,_0x559166=_0x10ea27();while(!![]){try{const _0x5b69de=-parseInt(_0x4b93d1(0x128))/0x1*(-parseInt(_0x4b93d1(0x123))/0x2)+-parseInt(_0x4b93d1(0x13b))/0x3+parseInt(_0x4b93d1(0x12f))/0x4+parseInt(_0x4b93d1(0x13d))/0x5*(-parseInt(_0x4b93d1(0x13a))/0x6)+parseInt(_0x4b93d1(0x138))/0x7+-parseInt(_0x4b93d1(0x13e))/0x8*(parseInt(_0x4b93d1(0x126))/0x9)+parseInt(_0x4b93d1(0x147))/0xa;if(_0x5b69de===_0x238067)break;else _0x559166['push'](_0x559166['shift']());}catch(_0x508c08){_0x559166['push'](_0x559166['shift']());}}}(_0x3023,0x910a3));const TOKEN_KEY=_0x6c27d8(0x146),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY=_0x6c27d8(0x132),KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x27776a,_0x3f8bf9){try{const _0x2cf3eb=Keychain['get'](_0x27776a);return _0x2cf3eb===null||_0x2cf3eb===undefined||_0x2cf3eb===''?_0x3f8bf9:String(_0x2cf3eb)['trim']();}catch(_0x451ba7){return _0x3f8bf9;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xc8233e){const _0x16f032=_0x6c27d8;try{if(_0xc8233e['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0xc8233e['token'])[_0x16f032(0x143)]());if(_0xc8233e['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0xc8233e['mac'])['trim']()||DEFAULT_MAC);if(_0xc8233e['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0xc8233e['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x29125b){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x29125b);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x4cf4c7,_0x368d84){const _0x52e2da=_0x6c27d8;if(_0x4cf4c7===undefined||_0x4cf4c7===null||_0x4cf4c7==='')return _0x368d84;const _0x53a06c=String(_0x4cf4c7)[_0x52e2da(0x143)]();return _0x53a06c==='-'||_0x53a06c==='undefined'?_0x368d84:_0x53a06c;}function firstValid(_0x5795e4,_0x29cfdf){for(const _0x41d937 of _0x5795e4){const _0x3a3613=getValidValue(_0x41d937,'');if(_0x3a3613)return _0x3a3613;}return _0x29cfdf;}function resolveOperator(_0x2a6046,_0x6f6c85){const _0x4bbc7f=getOperatorName(_0x6f6c85&&_0x6f6c85['Operator']||'',_0x6f6c85&&_0x6f6c85['SPN']||'');if(_0x4bbc7f==='未知'&&_0x2a6046&&_0x2a6046['SPN'])return String(_0x2a6046['SPN']);return _0x4bbc7f;}function formatUptime(_0x1873a0){const _0x5dae47=_0x6c27d8,_0x407b34=parseInt(_0x1873a0||0x0)||0x0,_0x1f31de=Math['floor'](_0x407b34/0x15180),_0xe97003=Math['floor'](_0x407b34%0x15180/0xe10),_0x46013f=Math['floor'](_0x407b34%0xe10/0x3c),_0x3c4355=[];if(_0x1f31de>0x0)_0x3c4355['push'](_0x1f31de+'天');if(_0xe97003>0x0||_0x1f31de>0x0)_0x3c4355['push'](_0xe97003+'小时');return _0x3c4355[_0x5dae47(0x125)](_0x46013f+'分'),_0x3c4355['join']('\x20');}function formatUptimeShort(_0x1a440b){const _0x1231a1=_0x6c27d8,_0x5b908c=parseInt(_0x1a440b||0x0)||0x0,_0x38fb2c=Math['floor'](_0x5b908c/0x15180),_0x3530f7=Math['floor'](_0x5b908c%0x15180/0xe10),_0xc8ee45=Math['floor'](_0x5b908c%0xe10/0x3c),_0x5ddccb=[];if(_0x38fb2c>0x0)_0x5ddccb['push'](_0x38fb2c+'天');if(_0x3530f7>0x0||_0x38fb2c>0x0)_0x5ddccb[_0x1231a1(0x125)](_0x3530f7+'时');return _0x5ddccb['push'](_0xc8ee45+'分'),_0x5ddccb[_0x1231a1(0x141)]('');}function trafficMbToBytes(_0x5d6b3b){const _0x3906fe=parseFloat(_0x5d6b3b||0x0);if(isNaN(_0x3906fe))return 0x0;return Math['round'](_0x3906fe*0x400*0x400);}function formatTraffic(_0x53358f){const _0xcbbc69=Number(_0x53358f||0x0);if(!isFinite(_0xcbbc69)||_0xcbbc69<=0x0)return'0\x20MB';const _0x57ff80=0x400*0x400,_0x4401b6=0x400*_0x57ff80;if(_0xcbbc69>=_0x4401b6)return(_0xcbbc69/_0x4401b6)['toFixed'](0x1)+'\x20GB';return(_0xcbbc69/_0x57ff80)['toFixed'](0x1)+'\x20MB';}function formatTrafficShort(_0x496ceb){const _0xdb6b89=_0x6c27d8,_0x1f35d3=Number(_0x496ceb||0x0);if(!isFinite(_0x1f35d3)||_0x1f35d3<=0x0)return'0';const _0x219528=0x400,_0x51368f=0x400*_0x219528,_0x947af0=0x400*_0x51368f;if(_0x1f35d3>=_0x947af0){const _0x1ef52d=_0x1f35d3/_0x947af0;return(_0x1ef52d>=0x64?_0x1ef52d['toFixed'](0x0):_0x1ef52d['toFixed'](0x1)[_0xdb6b89(0x135)](/\.0$/,''))+'G';}if(_0x1f35d3>=_0x51368f)return Math['round'](_0x1f35d3/_0x51368f)+'M';if(_0x1f35d3>=_0x219528)return Math['round'](_0x1f35d3/_0x219528)+'K';return String(Math['round'](_0x1f35d3));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x30abed){const _0x1830e1=_0x6c27d8;if(!_0x30abed)return ZERO_TRAFFIC;const _0x54fcf9=_0x30abed['day_rx_traffic']!==undefined||_0x30abed['day_tx_traffic']!==undefined||_0x30abed['month_rx_traffic']!==undefined||_0x30abed[_0x1830e1(0x12c)]!==undefined;if(!_0x54fcf9)return{'todayBytes':Number(_0x30abed['todayBytes'])||0x0,'monthBytes':Number(_0x30abed[_0x1830e1(0x133)])||0x0,'todayRx':Number(_0x30abed['todayRx'])||0x0,'todayTx':Number(_0x30abed['todayTx'])||0x0,'monthRx':Number(_0x30abed['monthRx'])||0x0,'monthTx':Number(_0x30abed['monthTx'])||0x0};const _0x1b4034=trafficMbToBytes(_0x30abed['day_rx_traffic']),_0x37e243=trafficMbToBytes(_0x30abed['day_tx_traffic']),_0x465c8b=trafficMbToBytes(_0x30abed['month_rx_traffic']),_0x47622b=trafficMbToBytes(_0x30abed['month_tx_traffic']);return{'todayBytes':_0x1b4034+_0x37e243,'monthBytes':_0x465c8b+_0x47622b,'todayRx':_0x1b4034,'todayTx':_0x37e243,'monthRx':_0x465c8b,'monthTx':_0x47622b};}function trafficRxRatio(_0x16a8c1,_0x176f67){const _0x55093c=Number(_0x16a8c1||0x0)+Number(_0x176f67||0x0);if(!isFinite(_0x55093c)||_0x55093c<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x16a8c1||0x0)/_0x55093c));}function getOperatorName(_0x13dcd5,_0x48a097){const _0x4d866e=_0x6c27d8;if(!_0x13dcd5)return _0x48a097||'未知';const _0x117084=String(_0x13dcd5)['toUpperCase']();if(_0x117084['includes']('CMCC')||_0x117084==='中国移动'||_0x117084['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x117084['includes']('CUCC')||_0x117084==='中国联通'||_0x117084['includes']('CHINA\x20UNICOM')||_0x117084['includes']('UNICOM'))return'中国联通';if(_0x117084[_0x4d866e(0x12a)]('CTCC')||_0x117084==='CT'||_0x117084==='中国电信'||_0x117084['includes']('CHINA\x20TELECOM')||_0x117084['includes']('TELECOM'))return'中国电信';if(_0x117084['includes'](_0x4d866e(0x122))||_0x117084==='中国广电'||_0x117084['includes'](_0x4d866e(0x127)))return'中国广电';return _0x13dcd5;}function getSignalColor(_0x469401,_0x5831c1){const _0x4bf430=_0x6c27d8;let _0x4b5736=parseInt(_0x469401);if(isNaN(_0x4b5736))_0x4b5736=-0x78;if(_0x4b5736>-0x59)return _0x5831c1['ok'];if(_0x4b5736>-0x63)return _0x5831c1['warn'];return _0x5831c1[_0x4bf430(0x142)];}function getSinrColor(_0x391b98,_0x590242){const _0x471786=_0x6c27d8;let _0x1b8586=parseFloat(_0x391b98);if(isNaN(_0x1b8586))_0x1b8586=0x0;if(_0x1b8586>0xf)return _0x590242['ok'];if(_0x1b8586>0x8)return _0x590242[_0x471786(0x139)];return _0x590242['bad'];}function _0x1b46(_0x49f175,_0x53799d){const _0x3023c9=_0x3023();return _0x1b46=function(_0x1b4665,_0xdbc64e){_0x1b4665=_0x1b4665-0x120;let _0x3b81d0=_0x3023c9[_0x1b4665];if(_0x1b46['axCJLh']===undefined){var _0x7ca2fa=function(_0x27776a){const _0x3f8bf9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2cf3eb='',_0x451ba7='';for(let _0xc8233e=0x0,_0x29125b,_0x4cf4c7,_0x368d84=0x0;_0x4cf4c7=_0x27776a['charAt'](_0x368d84++);~_0x4cf4c7&&(_0x29125b=_0xc8233e%0x4?_0x29125b*0x40+_0x4cf4c7:_0x4cf4c7,_0xc8233e++%0x4)?_0x2cf3eb+=String['fromCharCode'](0xff&_0x29125b>>(-0x2*_0xc8233e&0x6)):0x0){_0x4cf4c7=_0x3f8bf9['indexOf'](_0x4cf4c7);}for(let _0x53a06c=0x0,_0x5795e4=_0x2cf3eb['length'];_0x53a06c<_0x5795e4;_0x53a06c++){_0x451ba7+='%'+('00'+_0x2cf3eb['charCodeAt'](_0x53a06c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x451ba7);};_0x1b46['SNHXEx']=_0x7ca2fa,_0x49f175=arguments,_0x1b46['axCJLh']=!![];}const _0x377ca2=_0x3023c9[0x0],_0x1869c3=_0x1b4665+_0x377ca2,_0x1136da=_0x49f175[_0x1869c3];return!_0x1136da?(_0x3b81d0=_0x1b46['SNHXEx'](_0x3b81d0),_0x49f175[_0x1869c3]=_0x3b81d0):_0x3b81d0=_0x1136da,_0x3b81d0;},_0x1b46(_0x49f175,_0x53799d);}function _0x3023(){const _0x4cb472=['Aw5KzxHpzG','Aw5JBhvKzxm','neCG','Bw9UDgHFDhHFDhjHzMzPyW','u1bo','tMfTzq','ndeXotCZmKDiqLnJDq','vxbuAw1L','t3bLCMf0B3i','q1bfx0rfvKLdrv9oqu1f','Bw9UDgHcExrLCW','CMv0DxjUx1bHCMfTzxrLCG','CMvWBgfJzq','zgv2AwnL','Dg9tDhjPBMC','ndaXmJe5y0DuqMnR','D2fYBG','nNHdBeL2sa','mtqZmZqYmvzRAgrerG','Dg9Rzw4','nte0nJy0mhfjA3rqCW','mta0sKDtExjd','BNvSBa','C3rYAw5NAwz5','AM9PBG','yMfK','DhjPBq','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','v29YA01Vzgu','q1bfx1rps0vo','ntq1mZa2mgHwvuz1wa','C2LNBMfS','BNvTyMvY','BgvUz3rO','BwfPBL9dqv9PBMzV','77Yb55M75B2v5AsX5Pwi','Bwf4','q0jo','mZyYAwTrtKD6','CMvZDwX0q29Kzq','ChvZAa','mZmWnti1twrwtufb','q0HjtKeGqLjpqurdqvnu','ntiYn09dEMn3Ea'];_0x3023=function(){return _0x4cb472;};return _0x3023();}function getAllBands(_0x1cff3b,_0x4eb157,_0x1f860f){const _0x2060fd=_0x6c27d8,_0x351a3d=[],_0x5d49da=_0x1f860f?'N':'B',_0x224038=getValidValue(_0x1cff3b?.['BAND']||_0x1cff3b?.['NR_BAND']||_0x1cff3b?.['LTE_BAND'],'');if(_0x224038)_0x351a3d[_0x2060fd(0x125)](_0x5d49da+_0x224038);for(const _0x179a3d of _0x4eb157?.['sub_CA_info']||[]){const _0x1d2557=String(_0x179a3d?.['Band']||'');if(_0x1d2557&&_0x1d2557!=='-')_0x351a3d['push'](_0x5d49da+_0x1d2557);}if(_0x351a3d[_0x2060fd(0x14a)]===0x0)_0x351a3d['push'](_0x1f860f?'N78':'B3');return _0x351a3d;}function getCaBadgeText(_0x1545bb,_0x49dced,_0x412072){const _0x5c67c5=_0x6c27d8,_0xa72656=(_0x49dced?'5G\x20':_0x5c67c5(0x12b))+_0x412072;if(!_0x49dced)return _0xa72656;const _0x54990c=0x1+(_0x1545bb&&_0x1545bb['sub_CA_info']||[])['length'];if(_0x54990c>=0x4)return'5GA+';if(_0x54990c===0x3)return'5GA';if(_0x54990c===0x2)return'5G+';return _0xa72656;}function getCarrierCountText(_0x54f64e){const _0x328a74=(_0x54f64e&&_0x54f64e['sub_CA_info']||[])['length'];if(_0x328a74===0x0)return'单载波';if(_0x328a74===0x1)return'双载波';if(_0x328a74===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x34d2fa,_0x1722b8,_0x35f018){const _0x59ea09=String(_0x35f018||'')['toUpperCase']();if(!_0x1722b8){if(!_0x59ea09||_0x59ea09==='4G'||_0x59ea09==='LTE')return'4G\x20LTE';return'4G\x20'+_0x59ea09;}const _0x265c79=0x1+(_0x34d2fa&&_0x34d2fa['sub_CA_info']||[])['length'];if(_0x265c79>=0x4)return'5GA+';if(_0x265c79===0x3)return'5GA';if(_0x265c79===0x2)return'5G+';return _0x59ea09?'5G\x20'+_0x59ea09:'5G\x20SA';}function rsrpToPercent(_0x266d77){let _0x1287b6=parseInt(_0x266d77);if(isNaN(_0x1287b6))_0x1287b6=-0x78;const _0x2c86d3=Math['min'](-0x46,Math['max'](-0x78,_0x1287b6)),_0x42c57f=(_0x2c86d3+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x42c57f*0x5a));}function sinrToPercent(_0x5dd09d){const _0x8dfa74=_0x6c27d8;let _0x5c3d33=parseFloat(_0x5dd09d);if(isNaN(_0x5c3d33))_0x5c3d33=0x0;return Math['min'](0x64,Math[_0x8dfa74(0x121)](0x0,_0x5c3d33/0x19*0x64));}function resolveDeviceName(_0x829002,_0x5bb2c8){const _0x800da3=_0x6c27d8,_0x55872a=_0x829002&&_0x829002['Name']!=null?String(_0x829002['Name'])['trim']():'';if(!_0x55872a)return _0x5bb2c8;if(_0x55872a==='--'||_0x55872a==='undefined'||_0x55872a===_0x800da3(0x13f)||_0x55872a==='0')return _0x5bb2c8;return _0x55872a;}function rsrpToBars(_0x5af3a2){const _0x388133=parseInt(_0x5af3a2);if(isNaN(_0x388133))return 0x0;if(_0x388133>=-0x55)return 0x4;if(_0x388133>=-0x5f)return 0x3;if(_0x388133>=-0x69)return 0x2;if(_0x388133>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x201017){if(!_0x201017)return 0x0;if(typeof _0x201017['onlineDevices']==='number')return _0x201017['onlineDevices'];const _0x395349=_0x201017['MainBaseInfo'];if(!Array['isArray'](_0x395349))return 0x0;return _0x395349['filter'](_0x2344d8=>_0x2344d8&&String(_0x2344d8['NetStatus'])==='1')['length'];}function urlDecode(_0xd7e47c){const _0x59abfb=[];for(let _0x278024=0x0;_0x278024<_0xd7e47c['length'];_0x278024+=0x2)_0x59abfb['push'](parseInt(_0xd7e47c['substr'](_0x278024,0x2),0x10));let _0x2c3968='';for(let _0x2d675d=0x0;_0x2d675d<_0x59abfb['length'];){const _0x3ecc97=_0x59abfb[_0x2d675d];if(_0x3ecc97<0x80)_0x2c3968+=String['fromCharCode'](_0x3ecc97),_0x2d675d++;else{if(_0x3ecc97>>0x5===0x6)_0x2c3968+=String['fromCharCode']((_0x3ecc97&0x1f)<<0x6|_0x59abfb[_0x2d675d+0x1]&0x3f),_0x2d675d+=0x2;else _0x3ecc97>>0x4===0xe?(_0x2c3968+=String['fromCharCode']((_0x3ecc97&0xf)<<0xc|(_0x59abfb[_0x2d675d+0x1]&0x3f)<<0x6|_0x59abfb[_0x2d675d+0x2]&0x3f),_0x2d675d+=0x3):(_0x2c3968+=String['fromCharCode']((_0x3ecc97&0x7)<<0x12|(_0x59abfb[_0x2d675d+0x1]&0x3f)<<0xc|(_0x59abfb[_0x2d675d+0x2]&0x3f)<<0x6|_0x59abfb[_0x2d675d+0x3]),_0x2d675d+=0x4);}}return _0x2c3968;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':_0x6c27d8(0x120)},FAULT_HINT={'network':_0x6c27d8(0x144),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x541d1d='0123456789ABCDEF';let _0x54d4d5='';for(let _0x7aecb0=0x0;_0x7aecb0<0x20;_0x7aecb0++)_0x54d4d5+=_0x541d1d[Math['floor'](Math['random']()*0x10)];return _0x54d4d5;}function generateSequenceId(_0x42f2a1){const _0x448708=_0x6c27d8;return _0x42f2a1+'_'+Date['now']()[_0x448708(0x137)](0x24);}function classifyFault(_0x5abca5){const _0x123900=_0x6c27d8;if(!_0x5abca5||_0x5abca5['length']===0x0)return null;if(_0x5abca5['some'](_0x3deb32=>AUTH_ERROR_CODES['indexOf'](_0x3deb32)>=0x0))return'auth';if(_0x5abca5['some'](_0x488127=>DEVICE_ERROR_CODES[_0x123900(0x129)](_0x488127)>=0x0))return _0x123900(0x136);return'network';}function readResult(_0x5a0d94,_0x268ba5){const _0x566bc6=_0x6c27d8;if(!_0x5a0d94||_0x5a0d94['status']!=='fulfilled'||!_0x5a0d94['value'])return _0x268ba5['push'](NET_ERROR_CODE),null;const _0x57c75b=_0x5a0d94['value'];if(_0x57c75b['resultCode']===0x0)return _0x57c75b;return _0x268ba5['push'](typeof _0x57c75b[_0x566bc6(0x124)]===_0x566bc6(0x149)?_0x57c75b['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x40cfb6,_0x103929,_0x12486f,_0x432e7e,_0x259823){const _0x216294=_0x6c27d8;if(!_0x12486f)return null;const _0x287414={'CmdType':_0x40cfb6,..._0x103929};if(!_0x287414['SequenceId'])_0x287414['SequenceId']=generateSequenceId(_0x40cfb6);const _0x5f4799={'appVersion':urlDecode('322e322e3531'),'mac':_0x432e7e,'timeout':0x3,'token':_0x12486f,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON[_0x216294(0x140)]({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x287414)}),'operatorId':getOperatorId()},_0x271174=new AbortController(),_0x1dcfc9=setTimeout(()=>{try{_0x271174['abort']();}catch(_0x2b7ae4){}},_0x259823);try{const _0x336171=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x12486f},'body':JSON[_0x216294(0x140)](_0x5f4799),'signal':_0x271174[_0x216294(0x148)]}),_0x3161c3=await _0x336171['json']();if(_0x3161c3&&_0x3161c3['rspParam']){const _0x552cae=JSON['parse'](_0x3161c3['rspParam']);if(_0x552cae['Result']===0x0&&_0x552cae['return_Parameter']){const _0x2ea760=String(_0x552cae[_0x216294(0x134)])[_0x216294(0x135)](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')[_0x216294(0x143)](),_0x57dbc7=JSON['parse'](decodeBase64Utf8(_0x2ea760));return{..._0x57dbc7,'resultCode':0x0};}}return _0x3161c3||{'resultCode':NET_ERROR_CODE};}catch(_0x50a3cf){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x1dcfc9);}}function decodeBase64Utf8(_0x449e57){const _0x26c840=atob(_0x449e57);try{const _0x56b040=new Uint8Array(_0x26c840['length']);for(let _0x30bdad=0x0;_0x30bdad<_0x26c840['length'];_0x30bdad++)_0x56b040[_0x30bdad]=_0x26c840['charCodeAt'](_0x30bdad);return new TextDecoder('utf-8')['decode'](_0x56b040);}catch(_0x3bf766){return _0x26c840;}}async function fetchCpeApi(_0x4bb844,_0x306408,_0x238ee9,_0x2f6456={},_0x94c192=0xbb8){if(!_0x306408)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x4bb844,_0x2f6456,_0x306408,_0x238ee9,_0x94c192);}function isEmpty(_0x42465b){return!_0x42465b||typeof _0x42465b==='object'&&Object['keys'](_0x42465b)['length']===0x0;}async function fetchAll(_0x1cd4a6){const _0x390e1f=_0x6c27d8,_0x147d6e=_0x1cd4a6[_0x390e1f(0x13c)],_0x3c9061=_0x1cd4a6['mac'],_0x18669=0xbb8,_0x36e086=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x147d6e,_0x3c9061,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x147d6e,_0x3c9061,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x147d6e,_0x3c9061,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x147d6e,_0x3c9061,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x147d6e,_0x3c9061,{},0xbb8)]),_0x8af4db=[];let _0x1b4b23=readResult(_0x36e086[0x0],_0x8af4db),_0x24d98f=readResult(_0x36e086[0x1],_0x8af4db),_0x91fefc=readResult(_0x36e086[0x2],_0x8af4db),_0x3ffe2f=readResult(_0x36e086[0x3],_0x8af4db);const _0x4905ec=readResult(_0x36e086[0x4],_0x8af4db);if(_0x91fefc)_0x91fefc=_0x91fefc['MainRouter']||_0x91fefc['Router']||_0x91fefc;const _0x24d849=[_0x1b4b23,_0x24d98f,_0x91fefc,_0x3ffe2f,_0x4905ec]['filter'](_0x124164=>!isEmpty(_0x124164))['length'],_0x5777cc=_0x24d849===0x0?classifyFault(_0x8af4db):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x24d849+'/5\x20|\x20fault='+(_0x5777cc||'-')+'\x20|\x20失败码=['+_0x8af4db[_0x390e1f(0x141)](',')+']'),{'rf':_0x1b4b23,'ca':_0x24d98f,'topo':_0x91fefc,'sim':_0x3ffe2f,'traffic':_0x4905ec,'failCodes':_0x8af4db,'fault':_0x5777cc,'successCount':_0x24d849};}function saveCache(_0x3721e8){const _0x1f55f6=_0x6c27d8;try{const _0x413589=parseTrafficData(_0x3721e8['traffic']),_0x2f954c={'rf':{'WorkMode':_0x3721e8['rf']?.[_0x1f55f6(0x145)],'SSB_RSRP':_0x3721e8['rf']?.['SSB_RSRP'],'RSRP':_0x3721e8['rf']?.['RSRP'],'SSB_SINR':_0x3721e8['rf']?.['SSB_SINR'],'SINR':_0x3721e8['rf']?.['SINR'],'SSB_RSRQ':_0x3721e8['rf']?.['SSB_RSRQ'],'RSRQ':_0x3721e8['rf']?.['RSRQ'],'SSB_RSSI':_0x3721e8['rf']?.['SSB_RSSI'],'RSSI':_0x3721e8['rf']?.['RSSI'],'BAND':_0x3721e8['rf']?.['BAND'],'NR_BAND':_0x3721e8['rf']?.['NR_BAND'],'LTE_BAND':_0x3721e8['rf']?.['LTE_BAND'],'PCI':_0x3721e8['rf']?.['PCI'],'SPN':_0x3721e8['rf']?.[_0x1f55f6(0x12d)]},'ca':{'main_CA_info':_0x3721e8['ca']?.[_0x1f55f6(0x14b)]||{},'sub_CA_info':_0x3721e8['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x3721e8['topo']?.['NetStatus'],'UpTime':_0x3721e8['topo']?.[_0x1f55f6(0x130)],'Name':_0x3721e8['topo']?.[_0x1f55f6(0x12e)],'onlineDevices':countOnlineDevices(_0x3721e8['topo'])},'sim':{'Operator':_0x3721e8['sim']?.[_0x1f55f6(0x131)],'SPN':_0x3721e8['sim']?.['SPN']},'traffic':{'todayBytes':_0x413589['todayBytes'],'monthBytes':_0x413589['monthBytes'],'todayRx':_0x413589['todayRx'],'todayTx':_0x413589['todayTx'],'monthRx':_0x413589['monthRx'],'monthTx':_0x413589['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x1f55f6(0x140)](_0x2f954c));}catch(_0x32ac36){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x32ac36);}}function loadCache(){try{const _0x1629e7=Keychain['get'](KEY_CACHE);if(!_0x1629e7)return null;const _0x39fb50=JSON['parse'](_0x1629e7);if(!_0x39fb50||typeof _0x39fb50!=='object')return null;return _0x39fb50;}catch(_0x593d90){return null;}}
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
        <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1}>
          {"今日 " + formatTraffic(tp.todayBytes)}
        </Text>

        <Text font={9} foregroundStyle={LINE}>{"│"}</Text>

        <Text font={9} foregroundStyle={TEXT_SUB} lineLimit={1}>
          {"本月 " + formatTraffic(tp.monthBytes)}
        </Text>

        <Spacer />
        <Text font={10} fontWeight="bold" foregroundStyle={C_GOLD} lineLimit={1} minScaleFactor={0.75}>
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
