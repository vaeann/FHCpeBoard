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

const _0x358c9c=_0x201d;(function(_0x4a87a5,_0x33d316){const _0x40f894=_0x201d,_0x280ead=_0x4a87a5();while(!![]){try{const _0x1062ab=parseInt(_0x40f894(0x1de))/0x1+-parseInt(_0x40f894(0x1e2))/0x2*(parseInt(_0x40f894(0x1f0))/0x3)+parseInt(_0x40f894(0x1e6))/0x4*(-parseInt(_0x40f894(0x1f7))/0x5)+-parseInt(_0x40f894(0x1ff))/0x6+parseInt(_0x40f894(0x1fb))/0x7+parseInt(_0x40f894(0x1dc))/0x8*(-parseInt(_0x40f894(0x1e7))/0x9)+parseInt(_0x40f894(0x1db))/0xa;if(_0x1062ab===_0x33d316)break;else _0x280ead['push'](_0x280ead['shift']());}catch(_0x2f3663){_0x280ead['push'](_0x280ead['shift']());}}}(_0x28ab,0x91af4));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x358c9c(0x1ee),DEFAULT_MAC=_0x358c9c(0x1fd),DEFAULT_NAME='烽火CPE';function readKey(_0x3eeb8a,_0x4daa24){try{const _0x55af09=Keychain['get'](_0x3eeb8a);return _0x55af09===null||_0x55af09===undefined||_0x55af09===''?_0x4daa24:String(_0x55af09)['trim']();}catch(_0x3da6f4){return _0x4daa24;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x13f8b1){const _0x2b8f0c=_0x358c9c;try{if(_0x13f8b1['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x13f8b1['token'])[_0x2b8f0c(0x1e9)]());if(_0x13f8b1['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x13f8b1[_0x2b8f0c(0x1da)])['trim']()||DEFAULT_MAC);if(_0x13f8b1['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x13f8b1['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x18f976){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x18f976);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x2920f5,_0x2fe23a){if(_0x2920f5===undefined||_0x2920f5===null||_0x2920f5==='')return _0x2fe23a;const _0x2847a2=String(_0x2920f5)['trim']();return _0x2847a2==='-'||_0x2847a2==='undefined'?_0x2fe23a:_0x2847a2;}function firstValid(_0x326ffe,_0x3571ab){for(const _0x5b5674 of _0x326ffe){const _0x45527c=getValidValue(_0x5b5674,'');if(_0x45527c)return _0x45527c;}return _0x3571ab;}function resolveOperator(_0x45d037,_0x3cafa2){const _0x25d586=getOperatorName(_0x3cafa2&&_0x3cafa2['Operator']||'',_0x3cafa2&&_0x3cafa2['SPN']||'');if(_0x25d586==='未知'&&_0x45d037&&_0x45d037['SPN'])return String(_0x45d037['SPN']);return _0x25d586;}function formatUptime(_0x3f42a6){const _0x3aefab=parseInt(_0x3f42a6||0x0)||0x0,_0x46286f=Math['floor'](_0x3aefab/0x15180),_0x1b5bc6=Math['floor'](_0x3aefab%0x15180/0xe10),_0x5b44e1=Math['floor'](_0x3aefab%0xe10/0x3c),_0xde6ea8=[];if(_0x46286f>0x0)_0xde6ea8['push'](_0x46286f+'天');if(_0x1b5bc6>0x0||_0x46286f>0x0)_0xde6ea8['push'](_0x1b5bc6+'小时');return _0xde6ea8['push'](_0x5b44e1+'分'),_0xde6ea8['join']('\x20');}function formatUptimeShort(_0x1c39d9){const _0x58efa2=_0x358c9c,_0x27942a=parseInt(_0x1c39d9||0x0)||0x0,_0x125312=Math['floor'](_0x27942a/0x15180),_0x21d60c=Math['floor'](_0x27942a%0x15180/0xe10),_0x4a8d95=Math['floor'](_0x27942a%0xe10/0x3c),_0x481b02=[];if(_0x125312>0x0)_0x481b02['push'](_0x125312+'天');if(_0x21d60c>0x0||_0x125312>0x0)_0x481b02[_0x58efa2(0x1eb)](_0x21d60c+'时');return _0x481b02['push'](_0x4a8d95+'分'),_0x481b02['join']('');}function trafficMbToBytes(_0x2cff1e){const _0x460245=parseFloat(_0x2cff1e||0x0);if(isNaN(_0x460245))return 0x0;return Math['round'](_0x460245*0x400*0x400);}function formatTraffic(_0x2ed2fe){const _0x27e76c=Number(_0x2ed2fe||0x0);if(!isFinite(_0x27e76c)||_0x27e76c<=0x0)return'0M';const _0x5d541f=0x400*0x400,_0x13e574=0x400*_0x5d541f;if(_0x27e76c>=_0x13e574)return(_0x27e76c/_0x13e574)['toFixed'](0x1)+'G';return(_0x27e76c/_0x5d541f)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x2b5d6d){const _0x3cad1e=Number(_0x2b5d6d||0x0);if(!isFinite(_0x3cad1e)||_0x3cad1e<=0x0)return'0';const _0x15075d=0x400,_0x45038e=0x400*_0x15075d,_0x449a98=0x400*_0x45038e;if(_0x3cad1e>=_0x449a98){const _0x200bee=_0x3cad1e/_0x449a98;return(_0x200bee>=0x64?_0x200bee['toFixed'](0x0):_0x200bee['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x3cad1e>=_0x45038e)return Math['round'](_0x3cad1e/_0x45038e)+'M';if(_0x3cad1e>=_0x15075d)return Math['round'](_0x3cad1e/_0x15075d)+'K';return String(Math['round'](_0x3cad1e));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x1ea39b){const _0x540ff7=_0x358c9c;if(!_0x1ea39b)return ZERO_TRAFFIC;const _0x5654f9=_0x1ea39b['day_rx_traffic']!==undefined||_0x1ea39b[_0x540ff7(0x1e0)]!==undefined||_0x1ea39b['month_rx_traffic']!==undefined||_0x1ea39b['month_tx_traffic']!==undefined;if(!_0x5654f9)return{'todayBytes':Number(_0x1ea39b['todayBytes'])||0x0,'monthBytes':Number(_0x1ea39b['monthBytes'])||0x0,'todayRx':Number(_0x1ea39b['todayRx'])||0x0,'todayTx':Number(_0x1ea39b['todayTx'])||0x0,'monthRx':Number(_0x1ea39b['monthRx'])||0x0,'monthTx':Number(_0x1ea39b['monthTx'])||0x0};const _0x3ceac7=trafficMbToBytes(_0x1ea39b['day_rx_traffic']),_0x5b53af=trafficMbToBytes(_0x1ea39b['day_tx_traffic']),_0x5bc459=trafficMbToBytes(_0x1ea39b[_0x540ff7(0x1ef)]),_0x18a964=trafficMbToBytes(_0x1ea39b['month_tx_traffic']);return{'todayBytes':_0x3ceac7+_0x5b53af,'monthBytes':_0x5bc459+_0x18a964,'todayRx':_0x3ceac7,'todayTx':_0x5b53af,'monthRx':_0x5bc459,'monthTx':_0x18a964};}function trafficRxRatio(_0x3a58e9,_0x400531){const _0x3024af=Number(_0x3a58e9||0x0)+Number(_0x400531||0x0);if(!isFinite(_0x3024af)||_0x3024af<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x3a58e9||0x0)/_0x3024af));}function getOperatorName(_0x2bb0e6,_0x69358e){const _0x19323e=_0x358c9c;if(!_0x2bb0e6)return _0x69358e||'未知';const _0x402bb4=String(_0x2bb0e6)[_0x19323e(0x1fe)]();if(_0x402bb4['includes']('CMCC')||_0x402bb4==='中国移动'||_0x402bb4['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x402bb4['includes']('CUCC')||_0x402bb4==='中国联通'||_0x402bb4['includes']('CHINA\x20UNICOM')||_0x402bb4[_0x19323e(0x1e5)]('UNICOM'))return'中国联通';if(_0x402bb4[_0x19323e(0x1e5)]('CTCC')||_0x402bb4==='CT'||_0x402bb4===_0x19323e(0x1d9)||_0x402bb4['includes']('CHINA\x20TELECOM')||_0x402bb4[_0x19323e(0x1e5)]('TELECOM'))return'中国电信';if(_0x402bb4['includes']('CBN')||_0x402bb4==='中国广电'||_0x402bb4[_0x19323e(0x1e5)]('CHINA\x20BROADCAST'))return'中国广电';return _0x2bb0e6;}function getSignalColor(_0x27547f,_0x3f6d3d){let _0x46aef6=parseInt(_0x27547f);if(isNaN(_0x46aef6))_0x46aef6=-0x78;if(_0x46aef6>-0x59)return _0x3f6d3d['ok'];if(_0x46aef6>-0x63)return _0x3f6d3d['warn'];return _0x3f6d3d['bad'];}function getSinrColor(_0x308b5b,_0x51a4d6){let _0x2897b6=parseFloat(_0x308b5b);if(isNaN(_0x2897b6))_0x2897b6=0x0;if(_0x2897b6>0xf)return _0x51a4d6['ok'];if(_0x2897b6>0x8)return _0x51a4d6['warn'];return _0x51a4d6['bad'];}function getAllBands(_0x42641d,_0x21f457,_0x71ee54){const _0x1b63fa=_0x358c9c,_0x423c95=[],_0x1d31eb=_0x71ee54?'N':'B',_0x37df4c=getValidValue(_0x42641d?.[_0x1b63fa(0x1fc)]||_0x42641d?.[_0x1b63fa(0x1fa)]||_0x42641d?.['LTE_BAND'],'');if(_0x37df4c)_0x423c95['push'](_0x1d31eb+_0x37df4c);for(const _0x39fa10 of _0x21f457?.['sub_CA_info']||[]){const _0x19b82f=String(_0x39fa10?.['Band']||'');if(_0x19b82f&&_0x19b82f!=='-')_0x423c95[_0x1b63fa(0x1eb)](_0x1d31eb+_0x19b82f);}if(_0x423c95['length']===0x0)_0x423c95['push'](_0x71ee54?'N78':'B3');return _0x423c95;}function getCaBadgeText(_0x3ac52e,_0x23f311,_0x3c1317){const _0x4b1721=_0x358c9c,_0x59ada9=(_0x23f311?_0x4b1721(0x1dd):'4G\x20')+_0x3c1317;if(!_0x23f311)return _0x59ada9;const _0x31f3a3=0x1+(_0x3ac52e&&_0x3ac52e['sub_CA_info']||[])['length'];if(_0x31f3a3>=0x4)return'5GA+';if(_0x31f3a3===0x3)return'5GA';if(_0x31f3a3===0x2)return'5G+';return _0x59ada9;}function _0x201d(_0x160920,_0x145032){const _0x28abd8=_0x28ab();return _0x201d=function(_0x201df0,_0x1d793a){_0x201df0=_0x201df0-0x1d8;let _0x20dcec=_0x28abd8[_0x201df0];if(_0x201d['iEXaPE']===undefined){var _0xf561bf=function(_0x3eeb8a){const _0x4daa24='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x55af09='',_0x3da6f4='';for(let _0x13f8b1=0x0,_0x18f976,_0x2920f5,_0x2fe23a=0x0;_0x2920f5=_0x3eeb8a['charAt'](_0x2fe23a++);~_0x2920f5&&(_0x18f976=_0x13f8b1%0x4?_0x18f976*0x40+_0x2920f5:_0x2920f5,_0x13f8b1++%0x4)?_0x55af09+=String['fromCharCode'](0xff&_0x18f976>>(-0x2*_0x13f8b1&0x6)):0x0){_0x2920f5=_0x4daa24['indexOf'](_0x2920f5);}for(let _0x2847a2=0x0,_0x326ffe=_0x55af09['length'];_0x2847a2<_0x326ffe;_0x2847a2++){_0x3da6f4+='%'+('00'+_0x55af09['charCodeAt'](_0x2847a2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3da6f4);};_0x201d['qdTnKm']=_0xf561bf,_0x160920=arguments,_0x201d['iEXaPE']=!![];}const _0x218aca=_0x28abd8[0x0],_0x4d875c=_0x201df0+_0x218aca,_0x19a5a=_0x160920[_0x4d875c];return!_0x19a5a?(_0x20dcec=_0x201d['qdTnKm'](_0x20dcec),_0x160920[_0x4d875c]=_0x20dcec):_0x20dcec=_0x19a5a,_0x20dcec;},_0x201d(_0x160920,_0x145032);}function getCarrierCountText(_0x191fb7){const _0x3c0fc6=(_0x191fb7&&_0x191fb7['sub_CA_info']||[])['length'];if(_0x3c0fc6===0x0)return'单载波';if(_0x3c0fc6===0x1)return'双载波';if(_0x3c0fc6===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x23e238,_0x261ddd,_0x3c997e){const _0x56ea07=_0x358c9c,_0x1a0e22=String(_0x3c997e||'')['toUpperCase']();if(!_0x261ddd){if(!_0x1a0e22||_0x1a0e22==='4G'||_0x1a0e22==='LTE')return'4G\x20LTE';return _0x56ea07(0x1f9)+_0x1a0e22;}const _0x1c32d5=0x1+(_0x23e238&&_0x23e238[_0x56ea07(0x1f5)]||[])['length'];if(_0x1c32d5>=0x4)return'5GA+';if(_0x1c32d5===0x3)return'5GA';if(_0x1c32d5===0x2)return'5G+';return _0x1a0e22?'5G\x20'+_0x1a0e22:'5G\x20SA';}function rsrpToPercent(_0x27774e){let _0x20f342=parseInt(_0x27774e);if(isNaN(_0x20f342))_0x20f342=-0x78;const _0x144c00=Math['min'](-0x46,Math['max'](-0x78,_0x20f342)),_0x2a1b5f=(_0x144c00+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x2a1b5f*0x5a));}function sinrToPercent(_0x1e0229){let _0x1fac23=parseFloat(_0x1e0229);if(isNaN(_0x1fac23))_0x1fac23=0x0;return Math['min'](0x64,Math['max'](0x0,_0x1fac23/0x19*0x64));}function resolveDeviceName(_0xe0c6c6,_0x1011f8){const _0x34bbc5=_0x358c9c,_0x2196f3=_0xe0c6c6&&_0xe0c6c6['Name']!=null?String(_0xe0c6c6['Name'])[_0x34bbc5(0x1e9)]():'';if(!_0x2196f3)return _0x1011f8;if(_0x2196f3==='--'||_0x2196f3==='undefined'||_0x2196f3==='null'||_0x2196f3==='0')return _0x1011f8;return _0x2196f3;}function rsrpToBars(_0x1dbd6d){const _0x406b61=parseInt(_0x1dbd6d);if(isNaN(_0x406b61))return 0x0;if(_0x406b61>=-0x55)return 0x4;if(_0x406b61>=-0x5f)return 0x3;if(_0x406b61>=-0x69)return 0x2;if(_0x406b61>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x395615){const _0x1ee6a6=_0x358c9c;if(!_0x395615)return 0x0;if(typeof _0x395615['onlineDevices']==='number')return _0x395615['onlineDevices'];const _0x59c1c8=_0x395615[_0x1ee6a6(0x1f2)];if(!Array['isArray'](_0x59c1c8))return 0x0;return _0x59c1c8['filter'](_0x38377a=>_0x38377a&&String(_0x38377a['NetStatus'])==='1')['length'];}function urlDecode(_0x34967e){const _0x4df182=[];for(let _0x3a2b7b=0x0;_0x3a2b7b<_0x34967e['length'];_0x3a2b7b+=0x2)_0x4df182['push'](parseInt(_0x34967e['substr'](_0x3a2b7b,0x2),0x10));let _0xbfef2c='';for(let _0x2a4cf6=0x0;_0x2a4cf6<_0x4df182['length'];){const _0x298f03=_0x4df182[_0x2a4cf6];if(_0x298f03<0x80)_0xbfef2c+=String['fromCharCode'](_0x298f03),_0x2a4cf6++;else{if(_0x298f03>>0x5===0x6)_0xbfef2c+=String['fromCharCode']((_0x298f03&0x1f)<<0x6|_0x4df182[_0x2a4cf6+0x1]&0x3f),_0x2a4cf6+=0x2;else _0x298f03>>0x4===0xe?(_0xbfef2c+=String['fromCharCode']((_0x298f03&0xf)<<0xc|(_0x4df182[_0x2a4cf6+0x1]&0x3f)<<0x6|_0x4df182[_0x2a4cf6+0x2]&0x3f),_0x2a4cf6+=0x3):(_0xbfef2c+=String['fromCharCode']((_0x298f03&0x7)<<0x12|(_0x4df182[_0x2a4cf6+0x1]&0x3f)<<0xc|(_0x4df182[_0x2a4cf6+0x2]&0x3f)<<0x6|_0x4df182[_0x2a4cf6+0x3]),_0x2a4cf6+=0x4);}}return _0xbfef2c;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':_0x358c9c(0x1ea)},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x3f9ae4='0123456789ABCDEF';let _0x38ff30='';for(let _0x35b419=0x0;_0x35b419<0x20;_0x35b419++)_0x38ff30+=_0x3f9ae4[Math['floor'](Math['random']()*0x10)];return _0x38ff30;}function generateSequenceId(_0x9e943e){const _0x2c1a0d=_0x358c9c;return _0x9e943e+'_'+Date['now']()[_0x2c1a0d(0x200)](0x24);}function classifyFault(_0x1c5d3d){if(!_0x1c5d3d||_0x1c5d3d['length']===0x0)return null;if(_0x1c5d3d['some'](_0x1cd984=>AUTH_ERROR_CODES['indexOf'](_0x1cd984)>=0x0))return'auth';if(_0x1c5d3d['some'](_0x656f17=>DEVICE_ERROR_CODES['indexOf'](_0x656f17)>=0x0))return'device';return'network';}function readResult(_0x5523cf,_0x3990c1){const _0x10a6d5=_0x358c9c;if(!_0x5523cf||_0x5523cf['status']!=='fulfilled'||!_0x5523cf['value'])return _0x3990c1['push'](NET_ERROR_CODE),null;const _0x151689=_0x5523cf[_0x10a6d5(0x1e1)];if(_0x151689['resultCode']===0x0)return _0x151689;return _0x3990c1['push'](typeof _0x151689['resultCode']==='number'?_0x151689['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x4f06b9,_0x15c829,_0x2b9990,_0x1549b1,_0x29db84){const _0x12f37e=_0x358c9c;if(!_0x2b9990)return null;const _0x485b39={'CmdType':_0x4f06b9,..._0x15c829};if(!_0x485b39['SequenceId'])_0x485b39['SequenceId']=generateSequenceId(_0x4f06b9);const _0x5523aa={'appVersion':urlDecode('322e322e3531'),'mac':_0x1549b1,'timeout':0x3,'token':_0x2b9990,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x12f37e(0x1f3)),'Parameter':JSON['stringify'](_0x485b39)}),'operatorId':getOperatorId()},_0x39ff44=new AbortController(),_0xe2eb3e=setTimeout(()=>{try{_0x39ff44['abort']();}catch(_0x50c6f7){}},_0x29db84);try{const _0x1adba6=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':_0x12f37e(0x1ed),'token':_0x2b9990},'body':JSON['stringify'](_0x5523aa),'signal':_0x39ff44['signal']}),_0x5961ac=await _0x1adba6['json']();if(_0x5961ac&&_0x5961ac[_0x12f37e(0x1f8)]){const _0x3e65fa=JSON['parse'](_0x5961ac['rspParam']);if(_0x3e65fa['Result']===0x0&&_0x3e65fa['return_Parameter']){const _0x5e6419=String(_0x3e65fa['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x3f7cce=JSON['parse'](decodeBase64Utf8(_0x5e6419));return{..._0x3f7cce,'resultCode':0x0};}}return _0x5961ac||{'resultCode':NET_ERROR_CODE};}catch(_0x145160){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x12f37e(0x1e3)};}finally{clearTimeout(_0xe2eb3e);}}function decodeBase64Utf8(_0x3d4d95){const _0x1bc7a5=_0x358c9c,_0x535d86=atob(_0x3d4d95);try{const _0x4a1cb4=new Uint8Array(_0x535d86[_0x1bc7a5(0x1ec)]);for(let _0x451710=0x0;_0x451710<_0x535d86['length'];_0x451710++)_0x4a1cb4[_0x451710]=_0x535d86['charCodeAt'](_0x451710);return new TextDecoder(_0x1bc7a5(0x1df))['decode'](_0x4a1cb4);}catch(_0x50e303){return _0x535d86;}}async function fetchCpeApi(_0x199d74,_0x35914b,_0x4ffd28,_0x567e80={},_0x4d81aa=0xbb8){if(!_0x35914b)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x199d74,_0x567e80,_0x35914b,_0x4ffd28,_0x4d81aa);}function isEmpty(_0x72d68f){const _0x2f7d96=_0x358c9c;return!_0x72d68f||typeof _0x72d68f==='object'&&Object['keys'](_0x72d68f)[_0x2f7d96(0x1ec)]===0x0;}async function fetchAll(_0x1bf5ea){const _0x597cc3=_0x1bf5ea['token'],_0x26186d=_0x1bf5ea['mac'],_0x1c1ce6=0xbb8,_0x74c4f6=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x597cc3,_0x26186d,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x597cc3,_0x26186d,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x597cc3,_0x26186d,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x597cc3,_0x26186d,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x597cc3,_0x26186d,{},0xbb8)]),_0x13c483=[];let _0x527af3=readResult(_0x74c4f6[0x0],_0x13c483),_0xc0112c=readResult(_0x74c4f6[0x1],_0x13c483),_0x4f8616=readResult(_0x74c4f6[0x2],_0x13c483),_0x1bcd3e=readResult(_0x74c4f6[0x3],_0x13c483);const _0x5d4d3b=readResult(_0x74c4f6[0x4],_0x13c483);if(_0x4f8616)_0x4f8616=_0x4f8616['MainRouter']||_0x4f8616['Router']||_0x4f8616;const _0x2f15c0=[_0x527af3,_0xc0112c,_0x4f8616,_0x1bcd3e,_0x5d4d3b]['filter'](_0x258434=>!isEmpty(_0x258434))['length'],_0x5b87a4=_0x2f15c0===0x0?classifyFault(_0x13c483):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x2f15c0+'/5\x20|\x20fault='+(_0x5b87a4||'-')+'\x20|\x20失败码=['+_0x13c483['join'](',')+']'),{'rf':_0x527af3,'ca':_0xc0112c,'topo':_0x4f8616,'sim':_0x1bcd3e,'traffic':_0x5d4d3b,'failCodes':_0x13c483,'fault':_0x5b87a4,'successCount':_0x2f15c0};}function saveCache(_0x271837){const _0x93fab6=_0x358c9c;try{const _0x4b488d=parseTrafficData(_0x271837['traffic']),_0x225fa3={'rf':{'WorkMode':_0x271837['rf']?.['WorkMode'],'SSB_RSRP':_0x271837['rf']?.[_0x93fab6(0x1e4)],'RSRP':_0x271837['rf']?.['RSRP'],'SSB_SINR':_0x271837['rf']?.['SSB_SINR'],'SINR':_0x271837['rf']?.['SINR'],'SSB_RSRQ':_0x271837['rf']?.['SSB_RSRQ'],'RSRQ':_0x271837['rf']?.['RSRQ'],'SSB_RSSI':_0x271837['rf']?.['SSB_RSSI'],'RSSI':_0x271837['rf']?.['RSSI'],'BAND':_0x271837['rf']?.['BAND'],'NR_BAND':_0x271837['rf']?.['NR_BAND'],'LTE_BAND':_0x271837['rf']?.['LTE_BAND'],'PCI':_0x271837['rf']?.['PCI'],'SPN':_0x271837['rf']?.[_0x93fab6(0x1f6)]},'ca':{'main_CA_info':_0x271837['ca']?.['main_CA_info']||{},'sub_CA_info':_0x271837['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x271837[_0x93fab6(0x1f1)]?.[_0x93fab6(0x1f4)],'UpTime':_0x271837['topo']?.['UpTime'],'Name':_0x271837[_0x93fab6(0x1f1)]?.['Name'],'onlineDevices':countOnlineDevices(_0x271837['topo'])},'sim':{'Operator':_0x271837['sim']?.['Operator'],'SPN':_0x271837['sim']?.['SPN']},'traffic':{'todayBytes':_0x4b488d['todayBytes'],'monthBytes':_0x4b488d[_0x93fab6(0x1e8)],'todayRx':_0x4b488d['todayRx'],'todayTx':_0x4b488d['todayTx'],'monthRx':_0x4b488d['monthRx'],'monthTx':_0x4b488d['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x93fab6(0x1d8)](_0x225fa3));}catch(_0x89fcee){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x89fcee);}}function _0x28ab(){const _0xe7c372=['q1bfx1DjreDfvf9dqunirq','Bw9UDgHFCNHFDhjHzMzPyW','nJyZotbgyMTrwMe','Dg9WBW','twfPBKjHC2vjBMzV','nta2zJCZnZq','tMv0u3rHDhvZ','C3vIx0nbx2LUzM8','u1bo','mtaYmde5mgTKCgLnAq','CNnWugfYyw0','neCG','tLjFqKfora','mZuYmZC3mKPOrfD0tq','qKfora','rdHgnta3renbrJmW','Dg9vChbLCKnHC2u','mZu2ntq0nKriAgjgAq','Dg9tDhjPBMC','C3rYAw5NAwz5','5lIT5zU955s15l+H','BwfJ','mtaYnJC4odbgAunYB0m','mZG5nJH0D3H0rvm','nuCG','otq5mJq4sKTxDvfI','DxrMltG','zgf5x3r4x3rYywzMAwm','DMfSDwu','nNf1suvXsW','572r57UC6k+35Rgc5AsX6lsL','u1ncx1jtuLa','Aw5JBhvKzxm','nffrDMD4za','mtG4mu54DKLZwa','Bw9UDgHcExrLCW','DhjPBq','77Yb55M75B2v5AsX5Pwi','ChvZAa','BgvUz3rO','yxbWBgLJyxrPB24VANnVBG'];_0x28ab=function(){return _0xe7c372;};return _0x28ab();}function loadCache(){try{const _0x4e6754=Keychain['get'](KEY_CACHE);if(!_0x4e6754)return null;const _0xbc0672=JSON['parse'](_0x4e6754);if(!_0xbc0672||typeof _0xbc0672!=='object')return null;return _0xbc0672;}catch(_0x2faa3b){return null;}}
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
