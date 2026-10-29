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

const _0x5788a4=_0x2d06;(function(_0x54a9c1,_0x44eed2){const _0x43ec65=_0x2d06,_0x21216c=_0x54a9c1();while(!![]){try{const _0x331c64=-parseInt(_0x43ec65(0x13a))/0x1+parseInt(_0x43ec65(0x14f))/0x2+-parseInt(_0x43ec65(0x139))/0x3+-parseInt(_0x43ec65(0x144))/0x4+parseInt(_0x43ec65(0x156))/0x5+parseInt(_0x43ec65(0x140))/0x6+parseInt(_0x43ec65(0x13e))/0x7*(-parseInt(_0x43ec65(0x135))/0x8);if(_0x331c64===_0x44eed2)break;else _0x21216c['push'](_0x21216c['shift']());}catch(_0x157537){_0x21216c['push'](_0x21216c['shift']());}}}(_0x4cfe,0xc0921));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x5bb4fd,_0x1b0885){const _0x6e27ce=_0x2d06;try{const _0x37d1ef=Keychain[_0x6e27ce(0x155)](_0x5bb4fd);return _0x37d1ef===null||_0x37d1ef===undefined||_0x37d1ef===''?_0x1b0885:String(_0x37d1ef)[_0x6e27ce(0x14d)]();}catch(_0x3f2cda){return _0x1b0885;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2175ef){const _0x501f16=_0x2d06;try{if(_0x2175ef['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2175ef['token'])['trim']());if(_0x2175ef['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x2175ef['mac'])['trim']()||DEFAULT_MAC);if(_0x2175ef['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x2175ef['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x4881d4){console[_0x501f16(0x149)]('⚠️\x20保存设置失败\x20|\x20'+_0x4881d4);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x5ba2e5,_0xfd5aa3){if(_0x5ba2e5===undefined||_0x5ba2e5===null||_0x5ba2e5==='')return _0xfd5aa3;const _0x4ee20f=String(_0x5ba2e5)['trim']();return _0x4ee20f==='-'||_0x4ee20f==='undefined'?_0xfd5aa3:_0x4ee20f;}function firstValid(_0x2af289,_0x308f74){for(const _0x38b5c6 of _0x2af289){const _0x14b9bc=getValidValue(_0x38b5c6,'');if(_0x14b9bc)return _0x14b9bc;}return _0x308f74;}function _0x2d06(_0x22126b,_0x3f53ea){_0x22126b=_0x22126b-0x133;const _0x4cfe29=_0x4cfe();let _0x2d0616=_0x4cfe29[_0x22126b];if(_0x2d06['cHtWrh']===undefined){var _0x4b7ef8=function(_0x155f3c){const _0x395658='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x248042='',_0x5bb4fd='';for(let _0x1b0885=0x0,_0x37d1ef,_0x3f2cda,_0x2175ef=0x0;_0x3f2cda=_0x155f3c['charAt'](_0x2175ef++);~_0x3f2cda&&(_0x37d1ef=_0x1b0885%0x4?_0x37d1ef*0x40+_0x3f2cda:_0x3f2cda,_0x1b0885++%0x4)?_0x248042+=String['fromCharCode'](0xff&_0x37d1ef>>(-0x2*_0x1b0885&0x6)):0x0){_0x3f2cda=_0x395658['indexOf'](_0x3f2cda);}for(let _0x4881d4=0x0,_0x5ba2e5=_0x248042['length'];_0x4881d4<_0x5ba2e5;_0x4881d4++){_0x5bb4fd+='%'+('00'+_0x248042['charCodeAt'](_0x4881d4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5bb4fd);};_0x2d06['XvQlwC']=_0x4b7ef8,_0x2d06['thXrYh']={},_0x2d06['cHtWrh']=!![];}const _0x5781bb=_0x4cfe29[0x0];_0x2d06['jBkheM']!==_0x5781bb&&(_0x2d06['thXrYh']={},_0x2d06['jBkheM']=_0x5781bb);const _0x74856a=_0x2d06['thXrYh'][_0x22126b];return _0x74856a===undefined?(_0x2d0616=_0x2d06['XvQlwC'](_0x2d0616),_0x2d06['thXrYh'][_0x22126b]=_0x2d0616):_0x2d0616=_0x74856a,_0x2d0616;}function resolveOperator(_0x239e9b,_0xbcaa8c){const _0x57ce46=_0x2d06,_0x415e1a=getOperatorName(_0xbcaa8c&&_0xbcaa8c['Operator']||'',_0xbcaa8c&&_0xbcaa8c['SPN']||'');if(_0x415e1a==='未知'&&_0x239e9b&&_0x239e9b[_0x57ce46(0x161)])return String(_0x239e9b[_0x57ce46(0x161)]);return _0x415e1a;}function formatUptime(_0x538f80){const _0x181d22=parseInt(_0x538f80||0x0)||0x0,_0x3697a5=Math['floor'](_0x181d22/0x15180),_0x5b3bc8=Math['floor'](_0x181d22%0x15180/0xe10),_0x265227=Math['floor'](_0x181d22%0xe10/0x3c),_0x4e1390=[];if(_0x3697a5>0x0)_0x4e1390['push'](_0x3697a5+'天');if(_0x5b3bc8>0x0||_0x3697a5>0x0)_0x4e1390['push'](_0x5b3bc8+'小时');return _0x4e1390['push'](_0x265227+'分'),_0x4e1390['join']('\x20');}function formatUptimeShort(_0x2d60c2){const _0x2a1311=_0x2d06,_0x314e72=parseInt(_0x2d60c2||0x0)||0x0,_0x557bed=Math[_0x2a1311(0x147)](_0x314e72/0x15180),_0x4ea1b7=Math['floor'](_0x314e72%0x15180/0xe10),_0xb93672=Math[_0x2a1311(0x147)](_0x314e72%0xe10/0x3c),_0xf1571=[];if(_0x557bed>0x0)_0xf1571['push'](_0x557bed+'天');if(_0x4ea1b7>0x0||_0x557bed>0x0)_0xf1571['push'](_0x4ea1b7+'时');return _0xf1571['push'](_0xb93672+'分'),_0xf1571['join']('');}function trafficMbToBytes(_0xd61642){const _0x9a27a6=parseFloat(_0xd61642||0x0);if(isNaN(_0x9a27a6))return 0x0;return Math['round'](_0x9a27a6*0x400*0x400);}function formatTraffic(_0x7eb116){const _0x2f0cd5=_0x2d06,_0x4134a8=Number(_0x7eb116||0x0);if(!isFinite(_0x4134a8)||_0x4134a8<=0x0)return'0M';const _0x40325b=0x400*0x400,_0x5786a3=0x400*_0x40325b;if(_0x4134a8>=_0x5786a3)return(_0x4134a8/_0x5786a3)[_0x2f0cd5(0x15a)](0x1)+'G';return(_0x4134a8/_0x40325b)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x4a7911){const _0x35ccaf=_0x2d06,_0x46d319=Number(_0x4a7911||0x0);if(!isFinite(_0x46d319)||_0x46d319<=0x0)return'0';const _0x3a1acc=0x400,_0x191e1f=0x400*_0x3a1acc,_0x2c1638=0x400*_0x191e1f;if(_0x46d319>=_0x2c1638){const _0x1fc295=_0x46d319/_0x2c1638;return(_0x1fc295>=0x64?_0x1fc295['toFixed'](0x0):_0x1fc295['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x46d319>=_0x191e1f)return Math[_0x35ccaf(0x159)](_0x46d319/_0x191e1f)+'M';if(_0x46d319>=_0x3a1acc)return Math['round'](_0x46d319/_0x3a1acc)+'K';return String(Math['round'](_0x46d319));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x540cd0){const _0xa3e34a=_0x2d06;if(!_0x540cd0)return ZERO_TRAFFIC;const _0x11932e=_0x540cd0['day_rx_traffic']!==undefined||_0x540cd0['day_tx_traffic']!==undefined||_0x540cd0['month_rx_traffic']!==undefined||_0x540cd0['month_tx_traffic']!==undefined;if(!_0x11932e)return{'todayBytes':Number(_0x540cd0[_0xa3e34a(0x151)])||0x0,'monthBytes':Number(_0x540cd0['monthBytes'])||0x0,'todayRx':Number(_0x540cd0['todayRx'])||0x0,'todayTx':Number(_0x540cd0['todayTx'])||0x0,'monthRx':Number(_0x540cd0['monthRx'])||0x0,'monthTx':Number(_0x540cd0['monthTx'])||0x0};const _0xf4fc93=trafficMbToBytes(_0x540cd0['day_rx_traffic']),_0x375209=trafficMbToBytes(_0x540cd0['day_tx_traffic']),_0x1a53f1=trafficMbToBytes(_0x540cd0[_0xa3e34a(0x158)]),_0x9caf5a=trafficMbToBytes(_0x540cd0[_0xa3e34a(0x13b)]);return{'todayBytes':_0xf4fc93+_0x375209,'monthBytes':_0x1a53f1+_0x9caf5a,'todayRx':_0xf4fc93,'todayTx':_0x375209,'monthRx':_0x1a53f1,'monthTx':_0x9caf5a};}function trafficRxRatio(_0x1a834d,_0x3b4f95){const _0x3655c5=Number(_0x1a834d||0x0)+Number(_0x3b4f95||0x0);if(!isFinite(_0x3655c5)||_0x3655c5<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x1a834d||0x0)/_0x3655c5));}function getOperatorName(_0x3949d0,_0x1d7d6b){const _0x225dd8=_0x2d06;if(!_0x3949d0)return _0x1d7d6b||'未知';const _0x4b7341=String(_0x3949d0)['toUpperCase']();if(_0x4b7341['includes'](_0x225dd8(0x13f))||_0x4b7341==='中国移动'||_0x4b7341[_0x225dd8(0x157)]('CHINA\x20MOBILE'))return'中国移动';if(_0x4b7341['includes']('CUCC')||_0x4b7341===_0x225dd8(0x143)||_0x4b7341['includes']('CHINA\x20UNICOM')||_0x4b7341['includes']('UNICOM'))return'中国联通';if(_0x4b7341['includes']('CTCC')||_0x4b7341==='CT'||_0x4b7341===_0x225dd8(0x15f)||_0x4b7341['includes']('CHINA\x20TELECOM')||_0x4b7341['includes']('TELECOM'))return'中国电信';if(_0x4b7341['includes']('CBN')||_0x4b7341==='中国广电'||_0x4b7341['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x3949d0;}function getSignalColor(_0xf30cd1,_0x3f306a){let _0x407757=parseInt(_0xf30cd1);if(isNaN(_0x407757))_0x407757=-0x78;if(_0x407757>-0x59)return _0x3f306a['ok'];if(_0x407757>-0x63)return _0x3f306a['warn'];return _0x3f306a['bad'];}function getSinrColor(_0xcdc985,_0x2d1623){const _0x1519e3=_0x2d06;let _0x107a2b=parseFloat(_0xcdc985);if(isNaN(_0x107a2b))_0x107a2b=0x0;if(_0x107a2b>0xf)return _0x2d1623['ok'];if(_0x107a2b>0x8)return _0x2d1623[_0x1519e3(0x14a)];return _0x2d1623['bad'];}function getAllBands(_0x6b3576,_0x2687dd,_0x209ba6){const _0x50abb2=[],_0x3ebd70=_0x209ba6?'N':'B',_0xf4417a=getValidValue(_0x6b3576?.['BAND']||_0x6b3576?.['NR_BAND']||_0x6b3576?.['LTE_BAND'],'');if(_0xf4417a)_0x50abb2['push'](_0x3ebd70+_0xf4417a);for(const _0x583dc2 of _0x2687dd?.['sub_CA_info']||[]){const _0x3acb24=String(_0x583dc2?.['Band']||'');if(_0x3acb24&&_0x3acb24!=='-')_0x50abb2['push'](_0x3ebd70+_0x3acb24);}if(_0x50abb2['length']===0x0)_0x50abb2['push'](_0x209ba6?'N78':'B3');return _0x50abb2;}function getCaBadgeText(_0x3ef496,_0x8cc1b2,_0x3c6be9){const _0x403fc7=_0x2d06,_0x34dbe9=(_0x8cc1b2?'5G\x20':'4G\x20')+_0x3c6be9;if(!_0x8cc1b2)return _0x34dbe9;const _0x526312=0x1+(_0x3ef496&&_0x3ef496['sub_CA_info']||[])['length'];if(_0x526312>=0x4)return'5GA+';if(_0x526312===0x3)return _0x403fc7(0x138);if(_0x526312===0x2)return'5G+';return _0x34dbe9;}function getCarrierCountText(_0x1e4879){const _0xd6073a=(_0x1e4879&&_0x1e4879['sub_CA_info']||[])['length'];if(_0xd6073a===0x0)return'单载波';if(_0xd6073a===0x1)return'双载波';if(_0xd6073a===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x48307d,_0x532515,_0xaa3bb0){const _0x4f5041=_0x2d06,_0x23b64e=String(_0xaa3bb0||'')['toUpperCase']();if(!_0x532515){if(!_0x23b64e||_0x23b64e==='4G'||_0x23b64e==='LTE')return'4G\x20LTE';return'4G\x20'+_0x23b64e;}const _0x1fb429=0x1+(_0x48307d&&_0x48307d[_0x4f5041(0x136)]||[])['length'];if(_0x1fb429>=0x4)return'5GA+';if(_0x1fb429===0x3)return'5GA';if(_0x1fb429===0x2)return _0x4f5041(0x14e);return _0x23b64e?'5G\x20'+_0x23b64e:'5G\x20SA';}function rsrpToPercent(_0x3f2232){let _0x3bd728=parseInt(_0x3f2232);if(isNaN(_0x3bd728))_0x3bd728=-0x78;const _0x45c398=Math['min'](-0x46,Math['max'](-0x78,_0x3bd728)),_0x3059dd=(_0x45c398+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x3059dd*0x5a));}function sinrToPercent(_0x5bff5c){let _0x1cd76d=parseFloat(_0x5bff5c);if(isNaN(_0x1cd76d))_0x1cd76d=0x0;return Math['min'](0x64,Math['max'](0x0,_0x1cd76d/0x19*0x64));}function resolveDeviceName(_0x22ef4b,_0x1b3f82){const _0x161f15=_0x2d06,_0x1461cb=_0x22ef4b&&_0x22ef4b['Name']!=null?String(_0x22ef4b[_0x161f15(0x137)])['trim']():'';if(!_0x1461cb)return _0x1b3f82;if(_0x1461cb==='--'||_0x1461cb==='undefined'||_0x1461cb===_0x161f15(0x15c)||_0x1461cb==='0')return _0x1b3f82;return _0x1461cb;}function rsrpToBars(_0x15ce3d){const _0x352a4b=parseInt(_0x15ce3d);if(isNaN(_0x352a4b))return 0x0;if(_0x352a4b>=-0x55)return 0x4;if(_0x352a4b>=-0x5f)return 0x3;if(_0x352a4b>=-0x69)return 0x2;if(_0x352a4b>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x5a9de9){const _0x19590f=_0x2d06;if(!_0x5a9de9)return 0x0;if(typeof _0x5a9de9['onlineDevices']==='number')return _0x5a9de9['onlineDevices'];const _0x2aef66=_0x5a9de9['MainBaseInfo'];if(!Array['isArray'](_0x2aef66))return 0x0;return _0x2aef66['filter'](_0x114116=>_0x114116&&String(_0x114116['NetStatus'])==='1')[_0x19590f(0x148)];}function urlDecode(_0xd1437a){const _0x341b5a=_0x2d06,_0x1660e0=[];for(let _0x3740de=0x0;_0x3740de<_0xd1437a['length'];_0x3740de+=0x2)_0x1660e0['push'](parseInt(_0xd1437a['substr'](_0x3740de,0x2),0x10));let _0x5ce48e='';for(let _0x563799=0x0;_0x563799<_0x1660e0['length'];){const _0x25fb7f=_0x1660e0[_0x563799];if(_0x25fb7f<0x80)_0x5ce48e+=String[_0x341b5a(0x13c)](_0x25fb7f),_0x563799++;else{if(_0x25fb7f>>0x5===0x6)_0x5ce48e+=String['fromCharCode']((_0x25fb7f&0x1f)<<0x6|_0x1660e0[_0x563799+0x1]&0x3f),_0x563799+=0x2;else _0x25fb7f>>0x4===0xe?(_0x5ce48e+=String['fromCharCode']((_0x25fb7f&0xf)<<0xc|(_0x1660e0[_0x563799+0x1]&0x3f)<<0x6|_0x1660e0[_0x563799+0x2]&0x3f),_0x563799+=0x3):(_0x5ce48e+=String['fromCharCode']((_0x25fb7f&0x7)<<0x12|(_0x1660e0[_0x563799+0x1]&0x3f)<<0xc|(_0x1660e0[_0x563799+0x2]&0x3f)<<0x6|_0x1660e0[_0x563799+0x3]),_0x563799+=0x4);}}return _0x5ce48e;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x5788a4(0x154),'auth':_0x5788a4(0x13d)};function getOperatorId(){const _0x376297=_0x5788a4;return Date['now']()[_0x376297(0x134)]();}function generateUUID(){const _0x1c4e42=_0x5788a4,_0x6a3d50='0123456789ABCDEF';let _0x41f923='';for(let _0x4882ba=0x0;_0x4882ba<0x20;_0x4882ba++)_0x41f923+=_0x6a3d50[Math[_0x1c4e42(0x147)](Math['random']()*0x10)];return _0x41f923;}function generateSequenceId(_0x59ee54){return _0x59ee54+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x50f5a8){if(!_0x50f5a8||_0x50f5a8['length']===0x0)return null;if(_0x50f5a8['some'](_0x512a3c=>AUTH_ERROR_CODES['indexOf'](_0x512a3c)>=0x0))return'auth';if(_0x50f5a8['some'](_0x33b069=>DEVICE_ERROR_CODES['indexOf'](_0x33b069)>=0x0))return'device';return'network';}function readResult(_0x5b4ab7,_0x1d9440){const _0x4b1808=_0x5788a4;if(!_0x5b4ab7||_0x5b4ab7[_0x4b1808(0x142)]!=='fulfilled'||!_0x5b4ab7['value'])return _0x1d9440['push'](NET_ERROR_CODE),null;const _0x1e5982=_0x5b4ab7['value'];if(_0x1e5982['resultCode']===0x0)return _0x1e5982;return _0x1d9440['push'](typeof _0x1e5982['resultCode']==='number'?_0x1e5982['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3b1df2,_0x8ae308,_0x256fad,_0x466390,_0x58b402){const _0x279f9a=_0x5788a4;if(!_0x256fad)return null;const _0x3294ec={'CmdType':_0x3b1df2,..._0x8ae308};if(!_0x3294ec['SequenceId'])_0x3294ec['SequenceId']=generateSequenceId(_0x3b1df2);const _0xae527a={'appVersion':urlDecode('322e322e3531'),'mac':_0x466390,'timeout':0x3,'token':_0x256fad,'appType':urlDecode(_0x279f9a(0x152)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x3294ec)}),'operatorId':getOperatorId()},_0x392535=new AbortController(),_0x36159d=setTimeout(()=>{try{_0x392535['abort']();}catch(_0x22e44a){}},_0x58b402);try{const _0x25d6cc=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x256fad},'body':JSON['stringify'](_0xae527a),'signal':_0x392535[_0x279f9a(0x145)]}),_0x3657a5=await _0x25d6cc['json']();if(_0x3657a5&&_0x3657a5['rspParam']){const _0x23e4dd=JSON['parse'](_0x3657a5['rspParam']);if(_0x23e4dd['Result']===0x0&&_0x23e4dd['return_Parameter']){const _0xb63220=String(_0x23e4dd['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')[_0x279f9a(0x153)](/\\/g,'')['trim'](),_0x43a47f=JSON['parse'](decodeBase64Utf8(_0xb63220));return{..._0x43a47f,'resultCode':0x0};}}return _0x3657a5||{'resultCode':NET_ERROR_CODE};}catch(_0x196933){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x36159d);}}function decodeBase64Utf8(_0x464d07){const _0x594bec=_0x5788a4,_0x1c7c2d=atob(_0x464d07);try{const _0x4b9ab4=new Uint8Array(_0x1c7c2d['length']);for(let _0x3ec734=0x0;_0x3ec734<_0x1c7c2d[_0x594bec(0x148)];_0x3ec734++)_0x4b9ab4[_0x3ec734]=_0x1c7c2d['charCodeAt'](_0x3ec734);return new TextDecoder('utf-8')['decode'](_0x4b9ab4);}catch(_0x305f03){return _0x1c7c2d;}}async function fetchCpeApi(_0x3ce9ad,_0x235667,_0x22f768,_0x3c51ff={},_0x331ddc=0xbb8){if(!_0x235667)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x3ce9ad,_0x3c51ff,_0x235667,_0x22f768,_0x331ddc);}function isEmpty(_0x152238){return!_0x152238||typeof _0x152238==='object'&&Object['keys'](_0x152238)['length']===0x0;}async function fetchAll(_0x169a21){const _0x1c86d0=_0x5788a4,_0x479cf2=_0x169a21['token'],_0x3be6d8=_0x169a21['mac'],_0x2e89e4=0xbb8,_0x487f62=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x479cf2,_0x3be6d8,{},0x9c4),fetchCpeApi(_0x1c86d0(0x146),_0x479cf2,_0x3be6d8,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x479cf2,_0x3be6d8,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x479cf2,_0x3be6d8,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x479cf2,_0x3be6d8,{},0xbb8)]),_0x321775=[];let _0x3fa026=readResult(_0x487f62[0x0],_0x321775),_0xef6d99=readResult(_0x487f62[0x1],_0x321775),_0x14dab9=readResult(_0x487f62[0x2],_0x321775),_0x31466a=readResult(_0x487f62[0x3],_0x321775);const _0x20c672=readResult(_0x487f62[0x4],_0x321775);if(_0x14dab9)_0x14dab9=_0x14dab9['MainRouter']||_0x14dab9['Router']||_0x14dab9;const _0x23f979=[_0x3fa026,_0xef6d99,_0x14dab9,_0x31466a,_0x20c672]['filter'](_0x2663fd=>!isEmpty(_0x2663fd))['length'],_0x5ae88f=_0x23f979===0x0?classifyFault(_0x321775):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x23f979+'/5\x20|\x20fault='+(_0x5ae88f||'-')+_0x1c86d0(0x150)+_0x321775['join'](',')+']'),{'rf':_0x3fa026,'ca':_0xef6d99,'topo':_0x14dab9,'sim':_0x31466a,'traffic':_0x20c672,'failCodes':_0x321775,'fault':_0x5ae88f,'successCount':_0x23f979};}function saveCache(_0x138f04){const _0x535044=_0x5788a4;try{const _0x37e4aa=parseTrafficData(_0x138f04['traffic']),_0x42c0c9={'rf':{'WorkMode':_0x138f04['rf']?.['WorkMode'],'SSB_RSRP':_0x138f04['rf']?.['SSB_RSRP'],'RSRP':_0x138f04['rf']?.['RSRP'],'SSB_SINR':_0x138f04['rf']?.[_0x535044(0x141)],'SINR':_0x138f04['rf']?.['SINR'],'SSB_RSRQ':_0x138f04['rf']?.['SSB_RSRQ'],'RSRQ':_0x138f04['rf']?.[_0x535044(0x15b)],'SSB_RSSI':_0x138f04['rf']?.['SSB_RSSI'],'RSSI':_0x138f04['rf']?.['RSSI'],'BAND':_0x138f04['rf']?.['BAND'],'NR_BAND':_0x138f04['rf']?.['NR_BAND'],'LTE_BAND':_0x138f04['rf']?.['LTE_BAND'],'PCI':_0x138f04['rf']?.[_0x535044(0x133)],'SPN':_0x138f04['rf']?.['SPN']},'ca':{'main_CA_info':_0x138f04['ca']?.['main_CA_info']||{},'sub_CA_info':_0x138f04['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x138f04[_0x535044(0x14c)]?.['NetStatus'],'UpTime':_0x138f04['topo']?.['UpTime'],'Name':_0x138f04['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x138f04['topo'])},'sim':{'Operator':_0x138f04['sim']?.['Operator'],'SPN':_0x138f04[_0x535044(0x15d)]?.['SPN']},'traffic':{'todayBytes':_0x37e4aa['todayBytes'],'monthBytes':_0x37e4aa['monthBytes'],'todayRx':_0x37e4aa['todayRx'],'todayTx':_0x37e4aa['todayTx'],'monthRx':_0x37e4aa[_0x535044(0x14b)],'monthTx':_0x37e4aa[_0x535044(0x160)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x42c0c9));}catch(_0x31adfb){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x31adfb);}}function loadCache(){const _0x5bd8ec=_0x5788a4;try{const _0x26014f=Keychain[_0x5bd8ec(0x155)](KEY_CACHE);if(!_0x26014f)return null;const _0x38c0e9=JSON[_0x5bd8ec(0x15e)](_0x26014f);if(!_0x38c0e9||typeof _0x38c0e9!=='object')return null;return _0x38c0e9;}catch(_0x7644ef){return null;}}function _0x4cfe(){const _0x4731e4=['ihWG5AsX6lsL56cbpvS','Dg9KyxLcExrLCW','nZq2ntCYnMq2otzLnJe2yW','CMvWBgfJzq','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','z2v0','ntyZmde1nu5RthLsDq','Aw5JBhvKzxm','Bw9UDgHFCNHFDhjHzMzPyW','CM91BMq','Dg9gAxHLza','uLnsuq','BNvSBa','C2LT','CgfYC2u','5lIT5zU955s15l+H','Bw9UDgHuEa','u1bo','uenj','Dg9tDhjPBMC','mZm0mtzLvKn5Bwi','C3vIx0nbx2LUzM8','tMfTzq','nuDb','mZKYnta5oe9SwNLnBq','ndy3otGXDffUDgvs','Bw9UDgHFDhHFDhjHzMzPyW','zNjVBunOyxjdB2rL','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','nJiZs2nVsKns','q01dqW','mJu5mJyWmfjVu2jRra','u1ncx1njtLi','C3rHDhvZ','5lIT5zU96igu6ycA','nJi4mJe2tNfzreHT','C2LNBMfS','r0vux0nbuLjjrvjFquDhuKvhqvrjt05Fsu5gtW','zMXVB3i','BgvUz3rO','Bg9N','D2fYBG','Bw9UDgHsEa','Dg9WBW','DhjPBq','nuCR','mZa3mtu4ng9hww9KBG'];_0x4cfe=function(){return _0x4731e4;};return _0x4cfe();}
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
