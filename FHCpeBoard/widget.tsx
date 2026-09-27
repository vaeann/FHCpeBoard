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

const _0x4e9de1=_0x58e1;(function(_0x31875a,_0x31111b){const _0x11335a=_0x58e1,_0x383ed3=_0x31875a();while(!![]){try{const _0x445053=-parseInt(_0x11335a(0x16d))/0x1+parseInt(_0x11335a(0x17c))/0x2*(parseInt(_0x11335a(0x163))/0x3)+-parseInt(_0x11335a(0x17b))/0x4+parseInt(_0x11335a(0x181))/0x5*(-parseInt(_0x11335a(0x17f))/0x6)+parseInt(_0x11335a(0x186))/0x7*(parseInt(_0x11335a(0x187))/0x8)+-parseInt(_0x11335a(0x169))/0x9+parseInt(_0x11335a(0x18a))/0xa;if(_0x445053===_0x31111b)break;else _0x383ed3['push'](_0x383ed3['shift']());}catch(_0x3576f3){_0x383ed3['push'](_0x383ed3['shift']());}}}(_0x4b24,0xbe803));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4045ef,_0x3d84c6){try{const _0x4b5200=Keychain['get'](_0x4045ef);return _0x4b5200===null||_0x4b5200===undefined||_0x4b5200===''?_0x3d84c6:String(_0x4b5200)['trim']();}catch(_0x210dd0){return _0x3d84c6;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x480f86){const _0x851833=_0x58e1;try{if(_0x480f86['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x480f86['token'])['trim']());if(_0x480f86['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x480f86['mac'])['trim']()||DEFAULT_MAC);if(_0x480f86[_0x851833(0x183)]!==undefined)Keychain['set'](NAME_KEY,String(_0x480f86[_0x851833(0x183)])['trim']()||DEFAULT_NAME);}catch(_0xecfe36){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0xecfe36);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x3d5e85,_0x10351c){if(_0x3d5e85===undefined||_0x3d5e85===null||_0x3d5e85==='')return _0x10351c;const _0x13d2c4=String(_0x3d5e85)['trim']();return _0x13d2c4==='-'||_0x13d2c4==='undefined'?_0x10351c:_0x13d2c4;}function firstValid(_0x3f60e0,_0xa3a988){for(const _0x52249d of _0x3f60e0){const _0x5cc9ac=getValidValue(_0x52249d,'');if(_0x5cc9ac)return _0x5cc9ac;}return _0xa3a988;}function resolveOperator(_0x177f16,_0x1b1f23){const _0x16f512=getOperatorName(_0x1b1f23&&_0x1b1f23['Operator']||'',_0x1b1f23&&_0x1b1f23['SPN']||'');if(_0x16f512==='未知'&&_0x177f16&&_0x177f16['SPN'])return String(_0x177f16['SPN']);return _0x16f512;}function formatUptime(_0x1a0fe7){const _0x10aba2=_0x58e1,_0x75a995=parseInt(_0x1a0fe7||0x0)||0x0,_0x2ea2c1=Math['floor'](_0x75a995/0x15180),_0x194463=Math['floor'](_0x75a995%0x15180/0xe10),_0x37b7c6=Math['floor'](_0x75a995%0xe10/0x3c),_0x5b669e=[];if(_0x2ea2c1>0x0)_0x5b669e[_0x10aba2(0x16c)](_0x2ea2c1+'天');if(_0x194463>0x0||_0x2ea2c1>0x0)_0x5b669e['push'](_0x194463+'小时');return _0x5b669e['push'](_0x37b7c6+'分'),_0x5b669e['join']('\x20');}function formatUptimeShort(_0x17447b){const _0x5510cf=_0x58e1,_0x1ed123=parseInt(_0x17447b||0x0)||0x0,_0x1aeb57=Math['floor'](_0x1ed123/0x15180),_0x19691d=Math['floor'](_0x1ed123%0x15180/0xe10),_0x559ff4=Math[_0x5510cf(0x162)](_0x1ed123%0xe10/0x3c),_0x1c93a1=[];if(_0x1aeb57>0x0)_0x1c93a1['push'](_0x1aeb57+'天');if(_0x19691d>0x0||_0x1aeb57>0x0)_0x1c93a1['push'](_0x19691d+'时');return _0x1c93a1['push'](_0x559ff4+'分'),_0x1c93a1['join']('');}function trafficMbToBytes(_0x4c3ba5){const _0x183821=parseFloat(_0x4c3ba5||0x0);if(isNaN(_0x183821))return 0x0;return Math['round'](_0x183821*0x400*0x400);}function formatTraffic(_0x7049c0){const _0x563a2a=_0x58e1,_0x41180b=Number(_0x7049c0||0x0);if(!isFinite(_0x41180b)||_0x41180b<=0x0)return'0\x20MB';const _0x23747f=0x400*0x400,_0x3c73b9=0x400*_0x23747f;if(_0x41180b>=_0x3c73b9)return(_0x41180b/_0x3c73b9)['toFixed'](0x1)+'\x20GB';return(_0x41180b/_0x23747f)[_0x563a2a(0x164)](0x1)+_0x563a2a(0x160);}function formatTrafficShort(_0x58e406){const _0x2382d9=_0x58e1,_0x3a8c21=Number(_0x58e406||0x0);if(!isFinite(_0x3a8c21)||_0x3a8c21<=0x0)return'0';const _0x3cd919=0x400,_0x5a3456=0x400*_0x3cd919,_0x4a0938=0x400*_0x5a3456;if(_0x3a8c21>=_0x4a0938){const _0x961b26=_0x3a8c21/_0x4a0938;return(_0x961b26>=0x64?_0x961b26['toFixed'](0x0):_0x961b26[_0x2382d9(0x164)](0x1)['replace'](/\.0$/,''))+'G';}if(_0x3a8c21>=_0x5a3456)return Math[_0x2382d9(0x168)](_0x3a8c21/_0x5a3456)+'M';if(_0x3a8c21>=_0x3cd919)return Math['round'](_0x3a8c21/_0x3cd919)+'K';return String(Math['round'](_0x3a8c21));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x5129be){const _0x1ec996=_0x58e1;if(!_0x5129be)return ZERO_TRAFFIC;const _0x376fed=_0x5129be['day_rx_traffic']!==undefined||_0x5129be[_0x1ec996(0x16f)]!==undefined||_0x5129be['month_rx_traffic']!==undefined||_0x5129be[_0x1ec996(0x175)]!==undefined;if(!_0x376fed)return{'todayBytes':Number(_0x5129be['todayBytes'])||0x0,'monthBytes':Number(_0x5129be['monthBytes'])||0x0,'todayRx':Number(_0x5129be['todayRx'])||0x0,'todayTx':Number(_0x5129be['todayTx'])||0x0,'monthRx':Number(_0x5129be['monthRx'])||0x0,'monthTx':Number(_0x5129be['monthTx'])||0x0};const _0x4ee08f=trafficMbToBytes(_0x5129be[_0x1ec996(0x17d)]),_0x20c901=trafficMbToBytes(_0x5129be['day_tx_traffic']),_0x584817=trafficMbToBytes(_0x5129be['month_rx_traffic']),_0x1de173=trafficMbToBytes(_0x5129be['month_tx_traffic']);return{'todayBytes':_0x4ee08f+_0x20c901,'monthBytes':_0x584817+_0x1de173,'todayRx':_0x4ee08f,'todayTx':_0x20c901,'monthRx':_0x584817,'monthTx':_0x1de173};}function trafficRxRatio(_0x49933a,_0x247b7b){const _0x22494d=Number(_0x49933a||0x0)+Number(_0x247b7b||0x0);if(!isFinite(_0x22494d)||_0x22494d<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x49933a||0x0)/_0x22494d));}function getOperatorName(_0x25367e,_0x32635d){const _0x5c00cb=_0x58e1;if(!_0x25367e)return _0x32635d||'未知';const _0x48285a=String(_0x25367e)['toUpperCase']();if(_0x48285a['includes']('CMCC')||_0x48285a==='中国移动'||_0x48285a[_0x5c00cb(0x170)]('CHINA\x20MOBILE'))return'中国移动';if(_0x48285a['includes']('CUCC')||_0x48285a==='中国联通'||_0x48285a['includes']('CHINA\x20UNICOM')||_0x48285a['includes']('UNICOM'))return'中国联通';if(_0x48285a['includes']('CTCC')||_0x48285a==='CT'||_0x48285a==='中国电信'||_0x48285a[_0x5c00cb(0x170)]('CHINA\x20TELECOM')||_0x48285a['includes']('TELECOM'))return _0x5c00cb(0x165);if(_0x48285a['includes']('CBN')||_0x48285a==='中国广电'||_0x48285a['includes'](_0x5c00cb(0x180)))return'中国广电';return _0x25367e;}function getSignalColor(_0x5769e3,_0x563feb){const _0x2f3243=_0x58e1;let _0x5d3f15=parseInt(_0x5769e3);if(isNaN(_0x5d3f15))_0x5d3f15=-0x78;if(_0x5d3f15>-0x59)return _0x563feb['ok'];if(_0x5d3f15>-0x63)return _0x563feb[_0x2f3243(0x172)];return _0x563feb['bad'];}function getSinrColor(_0x51f09f,_0x136237){let _0x2ff2d8=parseFloat(_0x51f09f);if(isNaN(_0x2ff2d8))_0x2ff2d8=0x0;if(_0x2ff2d8>0xf)return _0x136237['ok'];if(_0x2ff2d8>0x8)return _0x136237['warn'];return _0x136237['bad'];}function getAllBands(_0x5b39c2,_0x539378,_0x4abe13){const _0x4dd222=[],_0x32b60b=_0x4abe13?'N':'B',_0x2c6e23=getValidValue(_0x5b39c2?.['BAND']||_0x5b39c2?.['NR_BAND']||_0x5b39c2?.['LTE_BAND'],'');if(_0x2c6e23)_0x4dd222['push'](_0x32b60b+_0x2c6e23);for(const _0x3aee38 of _0x539378?.['sub_CA_info']||[]){const _0x5bc933=String(_0x3aee38?.['Band']||'');if(_0x5bc933&&_0x5bc933!=='-')_0x4dd222['push'](_0x32b60b+_0x5bc933);}if(_0x4dd222['length']===0x0)_0x4dd222['push'](_0x4abe13?'N78':'B3');return _0x4dd222;}function getCaBadgeText(_0x4de471,_0x498c0d,_0x236cbb){const _0x5bad68=_0x58e1,_0x871780=(_0x498c0d?_0x5bad68(0x182):'4G\x20')+_0x236cbb;if(!_0x498c0d)return _0x871780;const _0x480d96=0x1+(_0x4de471&&_0x4de471['sub_CA_info']||[])['length'];if(_0x480d96>=0x4)return'5GA+';if(_0x480d96===0x3)return'5GA';if(_0x480d96===0x2)return'5G+';return _0x871780;}function getCarrierCountText(_0xe68f0c){const _0xe33417=_0x58e1,_0x419098=(_0xe68f0c&&_0xe68f0c['sub_CA_info']||[])[_0xe33417(0x174)];if(_0x419098===0x0)return'单载波';if(_0x419098===0x1)return'双载波';if(_0x419098===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x13316e,_0x2605e4,_0x55c9dd){const _0x37edf8=_0x58e1,_0x50390a=String(_0x55c9dd||'')['toUpperCase']();if(!_0x2605e4){if(!_0x50390a||_0x50390a==='4G'||_0x50390a===_0x37edf8(0x15e))return'4G\x20LTE';return'4G\x20'+_0x50390a;}const _0x19a5b2=0x1+(_0x13316e&&_0x13316e[_0x37edf8(0x173)]||[])['length'];if(_0x19a5b2>=0x4)return'5GA+';if(_0x19a5b2===0x3)return'5GA';if(_0x19a5b2===0x2)return'5G+';return _0x50390a?'5G\x20'+_0x50390a:'5G\x20SA';}function rsrpToPercent(_0x52309a){let _0x402c2a=parseInt(_0x52309a);if(isNaN(_0x402c2a))_0x402c2a=-0x78;const _0x5ea17a=Math['min'](-0x46,Math['max'](-0x78,_0x402c2a)),_0x5f48d1=(_0x5ea17a+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x5f48d1*0x5a));}function sinrToPercent(_0x24e20b){let _0x7cd2b8=parseFloat(_0x24e20b);if(isNaN(_0x7cd2b8))_0x7cd2b8=0x0;return Math['min'](0x64,Math['max'](0x0,_0x7cd2b8/0x19*0x64));}function resolveDeviceName(_0x417096,_0x486077){const _0x5103a9=_0x417096&&_0x417096['Name']!=null?String(_0x417096['Name'])['trim']():'';if(!_0x5103a9)return _0x486077;if(_0x5103a9==='--'||_0x5103a9==='undefined'||_0x5103a9==='null'||_0x5103a9==='0')return _0x486077;return _0x5103a9;}function rsrpToBars(_0x5c1713){const _0x477f18=parseInt(_0x5c1713);if(isNaN(_0x477f18))return 0x0;if(_0x477f18>=-0x55)return 0x4;if(_0x477f18>=-0x5f)return 0x3;if(_0x477f18>=-0x69)return 0x2;if(_0x477f18>=-0x73)return 0x1;return 0x1;}function _0x4b24(){const _0x4a9019=['zgf5x3j4x3rYywzMAwm','yxv0Aa','nKn6rLb6Bq','q0HjtKeGqLjpqurdqvnu','nti2odmWnu1AruHetW','nuCG','zgv2AwnLtMfTzq','ywXSu2v0DgXLza','CgfYC2u','mZKZnfrQChrltW','ndm3nK1ry1vrvq','CMvZDwX0q29Kzq','zNjVBunOyxjdB2rL','nda1mdm5mtbizhjfvvG','r0vux1jgx1njr05btf9jtKzp','u1ncx1jtuLa','tfrf','AxnbCNjHEq','ie1c','C2LT','zMXVB3i','ntyXmdi3uuHOsLL0','Dg9gAxHLza','5lIT5zU955s15l+H','Dg9tDhjPBMC','nZq2ntCYnMq2otzLnJe2yW','CM91BMq','mZuWotmXnM9QsgfbyW','B25SAw5Lrgv2AwnLCW','uLntsq','ChvZAa','mtq3nJu5ovLrrLbcqG','zgv2AwnL','zgf5x3r4x3rYywzMAwm','Aw5JBhvKzxm','572r57UC6k+35Rgc5AsX6lsL','D2fYBG','C3vIx0nbx2LUzM8','BgvUz3rO','Bw9UDgHFDhHFDhjHzMzPyW','CMvWBgfJzq','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','Dg9WBW','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','Dg9KyxLuEa','mZm3nZm1nNznzNLoBG','mNfkDuPKDG'];_0x4b24=function(){return _0x4a9019;};return _0x4b24();}function countOnlineDevices(_0x495370){const _0x5b92ad=_0x58e1;if(!_0x495370)return 0x0;if(typeof _0x495370['onlineDevices']==='number')return _0x495370[_0x5b92ad(0x16a)];const _0x36fc6a=_0x495370['MainBaseInfo'];if(!Array[_0x5b92ad(0x15f)](_0x36fc6a))return 0x0;return _0x36fc6a['filter'](_0x4f1b13=>_0x4f1b13&&String(_0x4f1b13['NetStatus'])==='1')['length'];}function _0x58e1(_0x56f9dc,_0x571fb3){const _0x4b24c2=_0x4b24();return _0x58e1=function(_0x58e1f9,_0x1a80a2){_0x58e1f9=_0x58e1f9-0x15e;let _0x3edfa7=_0x4b24c2[_0x58e1f9];if(_0x58e1['kzJCdj']===undefined){var _0x28a0d1=function(_0x4045ef){const _0x3d84c6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4b5200='',_0x210dd0='';for(let _0x480f86=0x0,_0xecfe36,_0x3d5e85,_0x10351c=0x0;_0x3d5e85=_0x4045ef['charAt'](_0x10351c++);~_0x3d5e85&&(_0xecfe36=_0x480f86%0x4?_0xecfe36*0x40+_0x3d5e85:_0x3d5e85,_0x480f86++%0x4)?_0x4b5200+=String['fromCharCode'](0xff&_0xecfe36>>(-0x2*_0x480f86&0x6)):0x0){_0x3d5e85=_0x3d84c6['indexOf'](_0x3d5e85);}for(let _0x13d2c4=0x0,_0x3f60e0=_0x4b5200['length'];_0x13d2c4<_0x3f60e0;_0x13d2c4++){_0x210dd0+='%'+('00'+_0x4b5200['charCodeAt'](_0x13d2c4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x210dd0);};_0x58e1['qNKSJd']=_0x28a0d1,_0x56f9dc=arguments,_0x58e1['kzJCdj']=!![];}const _0x50564b=_0x4b24c2[0x0],_0xb5e249=_0x58e1f9+_0x50564b,_0x16a73c=_0x56f9dc[_0xb5e249];return!_0x16a73c?(_0x3edfa7=_0x58e1['qNKSJd'](_0x3edfa7),_0x56f9dc[_0xb5e249]=_0x3edfa7):_0x3edfa7=_0x16a73c,_0x3edfa7;},_0x58e1(_0x56f9dc,_0x571fb3);}function urlDecode(_0x5635ae){const _0x497d3b=_0x58e1,_0x41be6b=[];for(let _0x3c9e6c=0x0;_0x3c9e6c<_0x5635ae['length'];_0x3c9e6c+=0x2)_0x41be6b['push'](parseInt(_0x5635ae['substr'](_0x3c9e6c,0x2),0x10));let _0x212eb0='';for(let _0x9635cb=0x0;_0x9635cb<_0x41be6b[_0x497d3b(0x174)];){const _0x34b694=_0x41be6b[_0x9635cb];if(_0x34b694<0x80)_0x212eb0+=String[_0x497d3b(0x189)](_0x34b694),_0x9635cb++;else{if(_0x34b694>>0x5===0x6)_0x212eb0+=String['fromCharCode']((_0x34b694&0x1f)<<0x6|_0x41be6b[_0x9635cb+0x1]&0x3f),_0x9635cb+=0x2;else _0x34b694>>0x4===0xe?(_0x212eb0+=String['fromCharCode']((_0x34b694&0xf)<<0xc|(_0x41be6b[_0x9635cb+0x1]&0x3f)<<0x6|_0x41be6b[_0x9635cb+0x2]&0x3f),_0x9635cb+=0x3):(_0x212eb0+=String['fromCharCode']((_0x34b694&0x7)<<0x12|(_0x41be6b[_0x9635cb+0x1]&0x3f)<<0xc|(_0x41be6b[_0x9635cb+0x2]&0x3f)<<0x6|_0x41be6b[_0x9635cb+0x3]),_0x9635cb+=0x4);}}return _0x212eb0;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x4e9de1(0x179),'auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x82662d=_0x4e9de1;return Date['now']()[_0x82662d(0x166)]();}function generateUUID(){const _0x46edf7='0123456789ABCDEF';let _0xf057b0='';for(let _0xd9a136=0x0;_0xd9a136<0x20;_0xd9a136++)_0xf057b0+=_0x46edf7[Math['floor'](Math['random']()*0x10)];return _0xf057b0;}function generateSequenceId(_0x3904a6){return _0x3904a6+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x888026){const _0xa2c21b=_0x4e9de1;if(!_0x888026||_0x888026['length']===0x0)return null;if(_0x888026['some'](_0x42a7a9=>AUTH_ERROR_CODES['indexOf'](_0x42a7a9)>=0x0))return _0xa2c21b(0x17e);if(_0x888026['some'](_0x487d8d=>DEVICE_ERROR_CODES['indexOf'](_0x487d8d)>=0x0))return _0xa2c21b(0x16e);return'network';}function readResult(_0x4ee620,_0x3b602b){const _0x3d0c19=_0x4e9de1;if(!_0x4ee620||_0x4ee620['status']!=='fulfilled'||!_0x4ee620['value'])return _0x3b602b[_0x3d0c19(0x16c)](NET_ERROR_CODE),null;const _0x5ae930=_0x4ee620['value'];if(_0x5ae930[_0x3d0c19(0x188)]===0x0)return _0x5ae930;return _0x3b602b['push'](typeof _0x5ae930['resultCode']==='number'?_0x5ae930['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x36d8b4,_0x24d2ad,_0x360053,_0x2eb34e,_0x4b0dce){const _0x254f5e=_0x4e9de1;if(!_0x360053)return null;const _0x17f9fd={'CmdType':_0x36d8b4,..._0x24d2ad};if(!_0x17f9fd['SequenceId'])_0x17f9fd['SequenceId']=generateSequenceId(_0x36d8b4);const _0x4862bf={'appVersion':urlDecode('322e322e3531'),'mac':_0x2eb34e,'timeout':0x3,'token':_0x360053,'appType':urlDecode(_0x254f5e(0x167)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x17f9fd)}),'operatorId':getOperatorId()},_0x4606f6=new AbortController(),_0x1f24b2=setTimeout(()=>{try{_0x4606f6['abort']();}catch(_0x465999){}},_0x4b0dce);try{const _0x235e04=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x360053},'body':JSON['stringify'](_0x4862bf),'signal':_0x4606f6['signal']}),_0x3dec32=await _0x235e04['json']();if(_0x3dec32&&_0x3dec32['rspParam']){const _0x125e4a=JSON['parse'](_0x3dec32['rspParam']);if(_0x125e4a['Result']===0x0&&_0x125e4a['return_Parameter']){const _0x8e73bf=String(_0x125e4a['return_Parameter'])['replace'](/\\\//g,'/')[_0x254f5e(0x176)](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x2c8555=JSON['parse'](decodeBase64Utf8(_0x8e73bf));return{..._0x2c8555,'resultCode':0x0};}}return _0x3dec32||{'resultCode':NET_ERROR_CODE};}catch(_0x80361d){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x254f5e(0x171)};}finally{clearTimeout(_0x1f24b2);}}function decodeBase64Utf8(_0x56b686){const _0x1f0084=atob(_0x56b686);try{const _0x500929=new Uint8Array(_0x1f0084['length']);for(let _0x1f3b8f=0x0;_0x1f3b8f<_0x1f0084['length'];_0x1f3b8f++)_0x500929[_0x1f3b8f]=_0x1f0084['charCodeAt'](_0x1f3b8f);return new TextDecoder('utf-8')['decode'](_0x500929);}catch(_0x5e17e0){return _0x1f0084;}}async function fetchCpeApi(_0x59a0da,_0x30d295,_0x56aa69,_0x1c66c7={},_0x1f1af9=0xbb8){if(!_0x30d295)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x59a0da,_0x1c66c7,_0x30d295,_0x56aa69,_0x1f1af9);}function isEmpty(_0x497ada){return!_0x497ada||typeof _0x497ada==='object'&&Object['keys'](_0x497ada)['length']===0x0;}async function fetchAll(_0x59e397){const _0x5ec0a8=_0x4e9de1,_0x259c00=_0x59e397['token'],_0x15c42a=_0x59e397['mac'],_0x3ca655=0xbb8,_0x39a2b3=await Promise[_0x5ec0a8(0x184)]([fetchCpeApi(_0x5ec0a8(0x18b),_0x259c00,_0x15c42a,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x259c00,_0x15c42a,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x259c00,_0x15c42a,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x259c00,_0x15c42a,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x259c00,_0x15c42a,{},0xbb8)]),_0x5561f2=[];let _0x149ea5=readResult(_0x39a2b3[0x0],_0x5561f2),_0x17c595=readResult(_0x39a2b3[0x1],_0x5561f2),_0x2c49ac=readResult(_0x39a2b3[0x2],_0x5561f2),_0x627acb=readResult(_0x39a2b3[0x3],_0x5561f2);const _0x4edf71=readResult(_0x39a2b3[0x4],_0x5561f2);if(_0x2c49ac)_0x2c49ac=_0x2c49ac['MainRouter']||_0x2c49ac['Router']||_0x2c49ac;const _0x3ddc4a=[_0x149ea5,_0x17c595,_0x2c49ac,_0x627acb,_0x4edf71]['filter'](_0x216927=>!isEmpty(_0x216927))['length'],_0x11d989=_0x3ddc4a===0x0?classifyFault(_0x5561f2):null;return console['log'](_0x5ec0a8(0x177)+_0x3ddc4a+'/5\x20|\x20fault='+(_0x11d989||'-')+'\x20|\x20失败码=['+_0x5561f2['join'](',')+']'),{'rf':_0x149ea5,'ca':_0x17c595,'topo':_0x2c49ac,'sim':_0x627acb,'traffic':_0x4edf71,'failCodes':_0x5561f2,'fault':_0x11d989,'successCount':_0x3ddc4a};}function saveCache(_0x433eb7){const _0x2ccbeb=_0x4e9de1;try{const _0x1a6952=parseTrafficData(_0x433eb7['traffic']),_0x20c55c={'rf':{'WorkMode':_0x433eb7['rf']?.['WorkMode'],'SSB_RSRP':_0x433eb7['rf']?.[_0x2ccbeb(0x18c)],'RSRP':_0x433eb7['rf']?.['RSRP'],'SSB_SINR':_0x433eb7['rf']?.['SSB_SINR'],'SINR':_0x433eb7['rf']?.['SINR'],'SSB_RSRQ':_0x433eb7['rf']?.['SSB_RSRQ'],'RSRQ':_0x433eb7['rf']?.['RSRQ'],'SSB_RSSI':_0x433eb7['rf']?.['SSB_RSSI'],'RSSI':_0x433eb7['rf']?.[_0x2ccbeb(0x16b)],'BAND':_0x433eb7['rf']?.['BAND'],'NR_BAND':_0x433eb7['rf']?.['NR_BAND'],'LTE_BAND':_0x433eb7['rf']?.['LTE_BAND'],'PCI':_0x433eb7['rf']?.['PCI'],'SPN':_0x433eb7['rf']?.['SPN']},'ca':{'main_CA_info':_0x433eb7['ca']?.['main_CA_info']||{},'sub_CA_info':_0x433eb7['ca']?.[_0x2ccbeb(0x173)]||[]},'topo':{'NetStatus':_0x433eb7['topo']?.['NetStatus'],'UpTime':_0x433eb7[_0x2ccbeb(0x178)]?.['UpTime'],'Name':_0x433eb7['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x433eb7[_0x2ccbeb(0x178)])},'sim':{'Operator':_0x433eb7[_0x2ccbeb(0x161)]?.['Operator'],'SPN':_0x433eb7['sim']?.['SPN']},'traffic':{'todayBytes':_0x1a6952['todayBytes'],'monthBytes':_0x1a6952['monthBytes'],'todayRx':_0x1a6952['todayRx'],'todayTx':_0x1a6952[_0x2ccbeb(0x17a)],'monthRx':_0x1a6952['monthRx'],'monthTx':_0x1a6952['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x20c55c));}catch(_0x25ab3d){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x25ab3d);}}function loadCache(){const _0x5cb440=_0x4e9de1;try{const _0x24d1c3=Keychain['get'](KEY_CACHE);if(!_0x24d1c3)return null;const _0x5de12f=JSON[_0x5cb440(0x185)](_0x24d1c3);if(!_0x5de12f||typeof _0x5de12f!=='object')return null;return _0x5de12f;}catch(_0x177b18){return null;}}
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
