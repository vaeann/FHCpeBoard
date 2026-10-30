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

const _0x19d402=_0x4b50;(function(_0x2eaf26,_0x98150f){const _0x42f838=_0x4b50,_0xb743eb=_0x2eaf26();while(!![]){try{const _0x542936=parseInt(_0x42f838(0x1b1))/0x1+parseInt(_0x42f838(0x18c))/0x2*(parseInt(_0x42f838(0x1b4))/0x3)+-parseInt(_0x42f838(0x1b3))/0x4*(-parseInt(_0x42f838(0x1a2))/0x5)+parseInt(_0x42f838(0x18d))/0x6*(parseInt(_0x42f838(0x19f))/0x7)+parseInt(_0x42f838(0x1b6))/0x8+parseInt(_0x42f838(0x1a0))/0x9+parseInt(_0x42f838(0x19b))/0xa*(-parseInt(_0x42f838(0x1af))/0xb);if(_0x542936===_0x98150f)break;else _0xb743eb['push'](_0xb743eb['shift']());}catch(_0x319d77){_0xb743eb['push'](_0xb743eb['shift']());}}}(_0x3a36,0xaee37));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY=_0x19d402(0x1b8),KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC=_0x19d402(0x196),DEFAULT_NAME='烽火CPE';function readKey(_0x516230,_0x4ffa33){try{const _0x226214=Keychain['get'](_0x516230);return _0x226214===null||_0x226214===undefined||_0x226214===''?_0x4ffa33:String(_0x226214)['trim']();}catch(_0x7acc2a){return _0x4ffa33;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2312ba){const _0x4eb7a6=_0x19d402;try{if(_0x2312ba['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2312ba['token'])['trim']());if(_0x2312ba['mac']!==undefined)Keychain[_0x4eb7a6(0x1a5)](MAC_KEY,String(_0x2312ba[_0x4eb7a6(0x18b)])['trim']()||DEFAULT_MAC);if(_0x2312ba['deviceName']!==undefined)Keychain[_0x4eb7a6(0x1a5)](NAME_KEY,String(_0x2312ba['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x31fbe2){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x31fbe2);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x2b9b9b,_0x31022e){if(_0x2b9b9b===undefined||_0x2b9b9b===null||_0x2b9b9b==='')return _0x31022e;const _0x4bba2b=String(_0x2b9b9b)['trim']();return _0x4bba2b==='-'||_0x4bba2b==='undefined'?_0x31022e:_0x4bba2b;}function firstValid(_0x158dda,_0x543e98){for(const _0x26c052 of _0x158dda){const _0x27aea4=getValidValue(_0x26c052,'');if(_0x27aea4)return _0x27aea4;}return _0x543e98;}function resolveOperator(_0x41cdbf,_0x2daa6a){const _0xa6ca0e=_0x19d402,_0x291cf3=getOperatorName(_0x2daa6a&&_0x2daa6a['Operator']||'',_0x2daa6a&&_0x2daa6a[_0xa6ca0e(0x1b7)]||'');if(_0x291cf3==='未知'&&_0x41cdbf&&_0x41cdbf['SPN'])return String(_0x41cdbf['SPN']);return _0x291cf3;}function formatUptime(_0x1639ad){const _0x1a467b=_0x19d402,_0x14fd8c=parseInt(_0x1639ad||0x0)||0x0,_0xbccedf=Math['floor'](_0x14fd8c/0x15180),_0x87b661=Math['floor'](_0x14fd8c%0x15180/0xe10),_0x116c46=Math['floor'](_0x14fd8c%0xe10/0x3c),_0x7d9f05=[];if(_0xbccedf>0x0)_0x7d9f05[_0x1a467b(0x1ae)](_0xbccedf+'天');if(_0x87b661>0x0||_0xbccedf>0x0)_0x7d9f05['push'](_0x87b661+'小时');return _0x7d9f05['push'](_0x116c46+'分'),_0x7d9f05['join']('\x20');}function formatUptimeShort(_0x5d1e44){const _0x17e654=_0x19d402,_0x3f2e2b=parseInt(_0x5d1e44||0x0)||0x0,_0x41b7dd=Math[_0x17e654(0x18a)](_0x3f2e2b/0x15180),_0x3d63ef=Math['floor'](_0x3f2e2b%0x15180/0xe10),_0x4221c9=Math['floor'](_0x3f2e2b%0xe10/0x3c),_0x5265f8=[];if(_0x41b7dd>0x0)_0x5265f8['push'](_0x41b7dd+'天');if(_0x3d63ef>0x0||_0x41b7dd>0x0)_0x5265f8[_0x17e654(0x1ae)](_0x3d63ef+'时');return _0x5265f8[_0x17e654(0x1ae)](_0x4221c9+'分'),_0x5265f8['join']('');}function trafficMbToBytes(_0x3c0b97){const _0x4ae28b=parseFloat(_0x3c0b97||0x0);if(isNaN(_0x4ae28b))return 0x0;return Math['round'](_0x4ae28b*0x400*0x400);}function formatTraffic(_0x735ed3){const _0x108f4c=Number(_0x735ed3||0x0);if(!isFinite(_0x108f4c)||_0x108f4c<=0x0)return'0M';const _0x292390=0x400*0x400,_0x279944=0x400*_0x292390;if(_0x108f4c>=_0x279944)return(_0x108f4c/_0x279944)['toFixed'](0x1)+'G';return(_0x108f4c/_0x292390)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x318c2a){const _0x19ae65=_0x19d402,_0xb12097=Number(_0x318c2a||0x0);if(!isFinite(_0xb12097)||_0xb12097<=0x0)return'0';const _0x199e72=0x400,_0x41a40f=0x400*_0x199e72,_0x2e1b2b=0x400*_0x41a40f;if(_0xb12097>=_0x2e1b2b){const _0x236819=_0xb12097/_0x2e1b2b;return(_0x236819>=0x64?_0x236819[_0x19ae65(0x188)](0x0):_0x236819['toFixed'](0x1)[_0x19ae65(0x1a6)](/\.0$/,''))+'G';}if(_0xb12097>=_0x41a40f)return Math['round'](_0xb12097/_0x41a40f)+'M';if(_0xb12097>=_0x199e72)return Math['round'](_0xb12097/_0x199e72)+'K';return String(Math['round'](_0xb12097));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x4b5a8d){const _0x59caaa=_0x19d402;if(!_0x4b5a8d)return ZERO_TRAFFIC;const _0x5965fa=_0x4b5a8d[_0x59caaa(0x194)]!==undefined||_0x4b5a8d['day_tx_traffic']!==undefined||_0x4b5a8d[_0x59caaa(0x192)]!==undefined||_0x4b5a8d['month_tx_traffic']!==undefined;if(!_0x5965fa)return{'todayBytes':Number(_0x4b5a8d[_0x59caaa(0x1a8)])||0x0,'monthBytes':Number(_0x4b5a8d['monthBytes'])||0x0,'todayRx':Number(_0x4b5a8d['todayRx'])||0x0,'todayTx':Number(_0x4b5a8d['todayTx'])||0x0,'monthRx':Number(_0x4b5a8d['monthRx'])||0x0,'monthTx':Number(_0x4b5a8d['monthTx'])||0x0};const _0x3b213d=trafficMbToBytes(_0x4b5a8d['day_rx_traffic']),_0x4859c7=trafficMbToBytes(_0x4b5a8d['day_tx_traffic']),_0x104b05=trafficMbToBytes(_0x4b5a8d['month_rx_traffic']),_0x124839=trafficMbToBytes(_0x4b5a8d['month_tx_traffic']);return{'todayBytes':_0x3b213d+_0x4859c7,'monthBytes':_0x104b05+_0x124839,'todayRx':_0x3b213d,'todayTx':_0x4859c7,'monthRx':_0x104b05,'monthTx':_0x124839};}function _0x4b50(_0x54243d,_0x66285b){_0x54243d=_0x54243d-0x188;const _0x3a36e8=_0x3a36();let _0x4b50b2=_0x3a36e8[_0x54243d];if(_0x4b50['OlHnaI']===undefined){var _0x5e8a65=function(_0x128396){const _0x4cebf4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x140f22='',_0x516230='';for(let _0x4ffa33=0x0,_0x226214,_0x7acc2a,_0x2312ba=0x0;_0x7acc2a=_0x128396['charAt'](_0x2312ba++);~_0x7acc2a&&(_0x226214=_0x4ffa33%0x4?_0x226214*0x40+_0x7acc2a:_0x7acc2a,_0x4ffa33++%0x4)?_0x140f22+=String['fromCharCode'](0xff&_0x226214>>(-0x2*_0x4ffa33&0x6)):0x0){_0x7acc2a=_0x4cebf4['indexOf'](_0x7acc2a);}for(let _0x31fbe2=0x0,_0x2b9b9b=_0x140f22['length'];_0x31fbe2<_0x2b9b9b;_0x31fbe2++){_0x516230+='%'+('00'+_0x140f22['charCodeAt'](_0x31fbe2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x516230);};_0x4b50['JGXoEG']=_0x5e8a65,_0x4b50['pGCaDb']={},_0x4b50['OlHnaI']=!![];}const _0x257a5e=_0x3a36e8[0x0];_0x4b50['yAvBNz']!==_0x257a5e&&(_0x4b50['pGCaDb']={},_0x4b50['yAvBNz']=_0x257a5e);const _0x37bc1d=_0x4b50['pGCaDb'][_0x54243d];return _0x37bc1d===undefined?(_0x4b50b2=_0x4b50['JGXoEG'](_0x4b50b2),_0x4b50['pGCaDb'][_0x54243d]=_0x4b50b2):_0x4b50b2=_0x37bc1d,_0x4b50b2;}function trafficRxRatio(_0x112846,_0xa4e2a4){const _0x138490=_0x19d402,_0x49868a=Number(_0x112846||0x0)+Number(_0xa4e2a4||0x0);if(!isFinite(_0x49868a)||_0x49868a<=0x0)return 0.5;return Math[_0x138490(0x1bb)](0.94,Math['max'](0.06,Number(_0x112846||0x0)/_0x49868a));}function getOperatorName(_0x778961,_0x419dec){const _0x5ea918=_0x19d402;if(!_0x778961)return _0x419dec||'未知';const _0x429838=String(_0x778961)[_0x5ea918(0x193)]();if(_0x429838['includes'](_0x5ea918(0x1ac))||_0x429838==='中国移动'||_0x429838[_0x5ea918(0x1b9)]('CHINA\x20MOBILE'))return'中国移动';if(_0x429838['includes']('CUCC')||_0x429838===_0x5ea918(0x198)||_0x429838['includes']('CHINA\x20UNICOM')||_0x429838['includes']('UNICOM'))return'中国联通';if(_0x429838['includes']('CTCC')||_0x429838==='CT'||_0x429838==='中国电信'||_0x429838['includes']('CHINA\x20TELECOM')||_0x429838['includes']('TELECOM'))return'中国电信';if(_0x429838['includes']('CBN')||_0x429838==='中国广电'||_0x429838['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x778961;}function getSignalColor(_0x488fab,_0x1cd4c0){let _0x2de10c=parseInt(_0x488fab);if(isNaN(_0x2de10c))_0x2de10c=-0x78;if(_0x2de10c>-0x59)return _0x1cd4c0['ok'];if(_0x2de10c>-0x63)return _0x1cd4c0['warn'];return _0x1cd4c0['bad'];}function getSinrColor(_0x5ec09c,_0x1fba18){const _0x292f12=_0x19d402;let _0x33dda0=parseFloat(_0x5ec09c);if(isNaN(_0x33dda0))_0x33dda0=0x0;if(_0x33dda0>0xf)return _0x1fba18['ok'];if(_0x33dda0>0x8)return _0x1fba18[_0x292f12(0x189)];return _0x1fba18['bad'];}function getAllBands(_0x500b9d,_0x479558,_0x41eac7){const _0x1069f4=_0x19d402,_0x5b8b2f=[],_0x439958=_0x41eac7?'N':'B',_0x1079d2=getValidValue(_0x500b9d?.['BAND']||_0x500b9d?.['NR_BAND']||_0x500b9d?.['LTE_BAND'],'');if(_0x1079d2)_0x5b8b2f['push'](_0x439958+_0x1079d2);for(const _0x1bb792 of _0x479558?.['sub_CA_info']||[]){const _0x132a2c=String(_0x1bb792?.[_0x1069f4(0x1a1)]||'');if(_0x132a2c&&_0x132a2c!=='-')_0x5b8b2f['push'](_0x439958+_0x132a2c);}if(_0x5b8b2f['length']===0x0)_0x5b8b2f['push'](_0x41eac7?'N78':'B3');return _0x5b8b2f;}function getCaBadgeText(_0x3a5cd9,_0x101235,_0x536d85){const _0x56bbcd=_0x19d402,_0x350aa0=(_0x101235?'5G\x20':'4G\x20')+_0x536d85;if(!_0x101235)return _0x350aa0;const _0x24237a=0x1+(_0x3a5cd9&&_0x3a5cd9['sub_CA_info']||[])[_0x56bbcd(0x199)];if(_0x24237a>=0x4)return _0x56bbcd(0x195);if(_0x24237a===0x3)return'5GA';if(_0x24237a===0x2)return _0x56bbcd(0x18f);return _0x350aa0;}function getCarrierCountText(_0x5c6522){const _0x49232d=_0x19d402,_0x2e7334=(_0x5c6522&&_0x5c6522['sub_CA_info']||[])[_0x49232d(0x199)];if(_0x2e7334===0x0)return _0x49232d(0x190);if(_0x2e7334===0x1)return'双载波';if(_0x2e7334===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x299ca9,_0x5fdee1,_0x4bd199){const _0x27d186=_0x19d402,_0x149a9c=String(_0x4bd199||'')['toUpperCase']();if(!_0x5fdee1){if(!_0x149a9c||_0x149a9c==='4G'||_0x149a9c==='LTE')return'4G\x20LTE';return'4G\x20'+_0x149a9c;}const _0x43d84a=0x1+(_0x299ca9&&_0x299ca9['sub_CA_info']||[])['length'];if(_0x43d84a>=0x4)return'5GA+';if(_0x43d84a===0x3)return'5GA';if(_0x43d84a===0x2)return'5G+';return _0x149a9c?_0x27d186(0x1a4)+_0x149a9c:'5G\x20SA';}function rsrpToPercent(_0x452301){const _0x1fd72b=_0x19d402;let _0x1800fe=parseInt(_0x452301);if(isNaN(_0x1800fe))_0x1800fe=-0x78;const _0x128166=Math['min'](-0x46,Math['max'](-0x78,_0x1800fe)),_0x50cbf5=(_0x128166+0x78)/0x32;return Math[_0x1fd72b(0x1bb)](0x64,Math['max'](0xa,0xa+_0x50cbf5*0x5a));}function sinrToPercent(_0x216619){const _0x3dfa28=_0x19d402;let _0xec18d1=parseFloat(_0x216619);if(isNaN(_0xec18d1))_0xec18d1=0x0;return Math[_0x3dfa28(0x1bb)](0x64,Math['max'](0x0,_0xec18d1/0x19*0x64));}function resolveDeviceName(_0x538d67,_0x52cfb0){const _0x1cbc72=_0x538d67&&_0x538d67['Name']!=null?String(_0x538d67['Name'])['trim']():'';if(!_0x1cbc72)return _0x52cfb0;if(_0x1cbc72==='--'||_0x1cbc72==='undefined'||_0x1cbc72==='null'||_0x1cbc72==='0')return _0x52cfb0;return _0x1cbc72;}function rsrpToBars(_0x4585d0){const _0x4f4861=parseInt(_0x4585d0);if(isNaN(_0x4f4861))return 0x0;if(_0x4f4861>=-0x55)return 0x4;if(_0x4f4861>=-0x5f)return 0x3;if(_0x4f4861>=-0x69)return 0x2;if(_0x4f4861>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x5a1ff1){const _0x48c8db=_0x19d402;if(!_0x5a1ff1)return 0x0;if(typeof _0x5a1ff1['onlineDevices']===_0x48c8db(0x1ab))return _0x5a1ff1['onlineDevices'];const _0x103eaf=_0x5a1ff1['MainBaseInfo'];if(!Array['isArray'](_0x103eaf))return 0x0;return _0x103eaf['filter'](_0x136f80=>_0x136f80&&String(_0x136f80[_0x48c8db(0x19c)])==='1')['length'];}function urlDecode(_0xec3d77){const _0x22281d=_0x19d402,_0x18e983=[];for(let _0x15ecf8=0x0;_0x15ecf8<_0xec3d77[_0x22281d(0x199)];_0x15ecf8+=0x2)_0x18e983['push'](parseInt(_0xec3d77['substr'](_0x15ecf8,0x2),0x10));let _0x4abc16='';for(let _0x191638=0x0;_0x191638<_0x18e983['length'];){const _0x14529e=_0x18e983[_0x191638];if(_0x14529e<0x80)_0x4abc16+=String['fromCharCode'](_0x14529e),_0x191638++;else{if(_0x14529e>>0x5===0x6)_0x4abc16+=String['fromCharCode']((_0x14529e&0x1f)<<0x6|_0x18e983[_0x191638+0x1]&0x3f),_0x191638+=0x2;else _0x14529e>>0x4===0xe?(_0x4abc16+=String[_0x22281d(0x1aa)]((_0x14529e&0xf)<<0xc|(_0x18e983[_0x191638+0x1]&0x3f)<<0x6|_0x18e983[_0x191638+0x2]&0x3f),_0x191638+=0x3):(_0x4abc16+=String['fromCharCode']((_0x14529e&0x7)<<0x12|(_0x18e983[_0x191638+0x1]&0x3f)<<0xc|(_0x18e983[_0x191638+0x2]&0x3f)<<0x6|_0x18e983[_0x191638+0x3]),_0x191638+=0x4);}}return _0x4abc16;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0x19d402(0x1b5),'device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x521cf4='0123456789ABCDEF';let _0x4f482b='';for(let _0x4720a6=0x0;_0x4720a6<0x20;_0x4720a6++)_0x4f482b+=_0x521cf4[Math['floor'](Math['random']()*0x10)];return _0x4f482b;}function generateSequenceId(_0x29e7b1){return _0x29e7b1+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0xda633e){const _0x8580e3=_0x19d402;if(!_0xda633e||_0xda633e['length']===0x0)return null;if(_0xda633e['some'](_0x38040e=>AUTH_ERROR_CODES['indexOf'](_0x38040e)>=0x0))return'auth';if(_0xda633e['some'](_0x1dadf8=>DEVICE_ERROR_CODES['indexOf'](_0x1dadf8)>=0x0))return'device';return _0x8580e3(0x1b2);}function readResult(_0x539d65,_0x5593f2){const _0x2d642f=_0x19d402;if(!_0x539d65||_0x539d65['status']!=='fulfilled'||!_0x539d65['value'])return _0x5593f2['push'](NET_ERROR_CODE),null;const _0x18431f=_0x539d65['value'];if(_0x18431f['resultCode']===0x0)return _0x18431f;return _0x5593f2['push'](typeof _0x18431f[_0x2d642f(0x1b0)]==='number'?_0x18431f['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x2e4af5,_0x41b632,_0x3cf735,_0x4084fa,_0x5a9d83){const _0x14d7ee=_0x19d402;if(!_0x3cf735)return null;const _0x5a2323={'CmdType':_0x2e4af5,..._0x41b632};if(!_0x5a2323[_0x14d7ee(0x1a9)])_0x5a2323['SequenceId']=generateSequenceId(_0x2e4af5);const _0x27a737={'appVersion':urlDecode('322e322e3531'),'mac':_0x4084fa,'timeout':0x3,'token':_0x3cf735,'appType':urlDecode(_0x14d7ee(0x197)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode(_0x14d7ee(0x1ba)),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x5a2323)}),'operatorId':getOperatorId()},_0x53222e=new AbortController(),_0x5d0d34=setTimeout(()=>{try{_0x53222e['abort']();}catch(_0xb79a20){}},_0x5a9d83);try{const _0x2840cf=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x3cf735},'body':JSON['stringify'](_0x27a737),'signal':_0x53222e['signal']}),_0x4b8631=await _0x2840cf[_0x14d7ee(0x1a7)]();if(_0x4b8631&&_0x4b8631['rspParam']){const _0x5b7c06=JSON['parse'](_0x4b8631['rspParam']);if(_0x5b7c06['Result']===0x0&&_0x5b7c06[_0x14d7ee(0x1ad)]){const _0x3bd807=String(_0x5b7c06['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x431e87=JSON['parse'](decodeBase64Utf8(_0x3bd807));return{..._0x431e87,'resultCode':0x0};}}return _0x4b8631||{'resultCode':NET_ERROR_CODE};}catch(_0x5e5e38){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x5d0d34);}}function decodeBase64Utf8(_0x42cddc){const _0x10f88f=atob(_0x42cddc);try{const _0x532fd9=new Uint8Array(_0x10f88f['length']);for(let _0x25ca77=0x0;_0x25ca77<_0x10f88f['length'];_0x25ca77++)_0x532fd9[_0x25ca77]=_0x10f88f['charCodeAt'](_0x25ca77);return new TextDecoder('utf-8')['decode'](_0x532fd9);}catch(_0x2da3d6){return _0x10f88f;}}async function fetchCpeApi(_0x1b90ca,_0x4e5dcd,_0x3df2d0,_0x5a7b8b={},_0x36a876=0xbb8){if(!_0x4e5dcd)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x1b90ca,_0x5a7b8b,_0x4e5dcd,_0x3df2d0,_0x36a876);}function isEmpty(_0x153620){return!_0x153620||typeof _0x153620==='object'&&Object['keys'](_0x153620)['length']===0x0;}async function fetchAll(_0x10928e){const _0x15a521=_0x19d402,_0x3750f3=_0x10928e['token'],_0x11897a=_0x10928e['mac'],_0x1c0950=0xbb8,_0x24bbc0=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x3750f3,_0x11897a,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x3750f3,_0x11897a,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x3750f3,_0x11897a,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x3750f3,_0x11897a,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x3750f3,_0x11897a,{},0xbb8)]),_0x57e144=[];let _0x30ca36=readResult(_0x24bbc0[0x0],_0x57e144),_0xfbfbe1=readResult(_0x24bbc0[0x1],_0x57e144),_0x3a2926=readResult(_0x24bbc0[0x2],_0x57e144),_0x1ee424=readResult(_0x24bbc0[0x3],_0x57e144);const _0x1976fa=readResult(_0x24bbc0[0x4],_0x57e144);if(_0x3a2926)_0x3a2926=_0x3a2926['MainRouter']||_0x3a2926['Router']||_0x3a2926;const _0x5560f3=[_0x30ca36,_0xfbfbe1,_0x3a2926,_0x1ee424,_0x1976fa]['filter'](_0x29f3cf=>!isEmpty(_0x29f3cf))['length'],_0x26fc30=_0x5560f3===0x0?classifyFault(_0x57e144):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x5560f3+'/5\x20|\x20fault='+(_0x26fc30||'-')+'\x20|\x20失败码=['+_0x57e144[_0x15a521(0x1a3)](',')+']'),{'rf':_0x30ca36,'ca':_0xfbfbe1,'topo':_0x3a2926,'sim':_0x1ee424,'traffic':_0x1976fa,'failCodes':_0x57e144,'fault':_0x26fc30,'successCount':_0x5560f3};}function _0x3a36(){const _0x4804c0=['BwfJ','mJC2mti2tvfJDK1f','mZu5odq4mMjNtu5tEq','t3bLCMf0B3i','nuCR','5y2v6l295RoI','Dg9WBW','Bw9UDgHFCNHFDhjHzMzPyW','Dg9vChbLCKnHC2u','zgf5x3j4x3rYywzMAwm','nuDbkW','rdHgnta3renbrJmW','nZq2ntCYnMq2otzLnJe2yW','5lIT5zU96igu6ycA','BgvUz3rO','C2LT','mtbctLjcu2q','tMv0u3rHDhvZ','u0LouG','Bw9UDgHuEa','n1jQuujhta','mtK3otqZm0j5yxvkzW','qMfUza','nZe5mejgsxHcAq','AM9PBG','nuCG','C2v0','CMvWBgfJzq','ANnVBG','Dg9KyxLcExrLCW','u2vXDwvUy2vjza','zNjVBunOyxjdB2rL','BNvTyMvY','q01dqW','CMv0DxjUx1bHCMfTzxrLCG','ChvZAa','ndG4mZuXnZfetMPrAKG','CMvZDwX0q29Kzq','mtm2ndiXmxHZEhDZuW','BMv0D29YAW','mJuXnMjOu3HTsW','mJreuKfpB3e','77Yb5Qoa5P+L572r57UC','nZCWndaYngTKzvn1wq','u1bo','q1bfx0rfvKLdrv9oqu1f','Aw5JBhvKzxm','nta2yZC1nJC2otzLnwy0otq0','BwLU','Dg9gAxHLza','D2fYBG','zMXVB3i'];_0x3a36=function(){return _0x4804c0;};return _0x3a36();}function saveCache(_0x484390){const _0x218470=_0x19d402;try{const _0x55a28a=parseTrafficData(_0x484390['traffic']),_0x157649={'rf':{'WorkMode':_0x484390['rf']?.['WorkMode'],'SSB_RSRP':_0x484390['rf']?.['SSB_RSRP'],'RSRP':_0x484390['rf']?.['RSRP'],'SSB_SINR':_0x484390['rf']?.['SSB_SINR'],'SINR':_0x484390['rf']?.[_0x218470(0x19d)],'SSB_RSRQ':_0x484390['rf']?.['SSB_RSRQ'],'RSRQ':_0x484390['rf']?.['RSRQ'],'SSB_RSSI':_0x484390['rf']?.['SSB_RSSI'],'RSSI':_0x484390['rf']?.['RSSI'],'BAND':_0x484390['rf']?.['BAND'],'NR_BAND':_0x484390['rf']?.['NR_BAND'],'LTE_BAND':_0x484390['rf']?.['LTE_BAND'],'PCI':_0x484390['rf']?.['PCI'],'SPN':_0x484390['rf']?.['SPN']},'ca':{'main_CA_info':_0x484390['ca']?.['main_CA_info']||{},'sub_CA_info':_0x484390['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x484390['topo']?.[_0x218470(0x19c)],'UpTime':_0x484390[_0x218470(0x191)]?.['UpTime'],'Name':_0x484390['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x484390['topo'])},'sim':{'Operator':_0x484390[_0x218470(0x19a)]?.[_0x218470(0x18e)],'SPN':_0x484390['sim']?.['SPN']},'traffic':{'todayBytes':_0x55a28a['todayBytes'],'monthBytes':_0x55a28a['monthBytes'],'todayRx':_0x55a28a['todayRx'],'todayTx':_0x55a28a['todayTx'],'monthRx':_0x55a28a['monthRx'],'monthTx':_0x55a28a[_0x218470(0x19e)]},'ts':Date['now']()};Keychain[_0x218470(0x1a5)](KEY_CACHE,JSON['stringify'](_0x157649));}catch(_0x2ec438){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x2ec438);}}function loadCache(){try{const _0x4e1577=Keychain['get'](KEY_CACHE);if(!_0x4e1577)return null;const _0x242342=JSON['parse'](_0x4e1577);if(!_0x242342||typeof _0x242342!=='object')return null;return _0x242342;}catch(_0x1a0b22){return null;}}
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
