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

const _0x5a2d38=_0x5d4e;(function(_0xffff77,_0x5e99a0){const _0x380b3a=_0x5d4e,_0x3adba2=_0xffff77();while(!![]){try{const _0x77fc6a=parseInt(_0x380b3a(0x95))/0x1*(parseInt(_0x380b3a(0xa6))/0x2)+-parseInt(_0x380b3a(0x93))/0x3+parseInt(_0x380b3a(0x88))/0x4*(parseInt(_0x380b3a(0x9b))/0x5)+-parseInt(_0x380b3a(0x92))/0x6+-parseInt(_0x380b3a(0x94))/0x7*(parseInt(_0x380b3a(0xa5))/0x8)+parseInt(_0x380b3a(0x8a))/0x9*(parseInt(_0x380b3a(0xa1))/0xa)+parseInt(_0x380b3a(0xa8))/0xb*(parseInt(_0x380b3a(0x9a))/0xc);if(_0x77fc6a===_0x5e99a0)break;else _0x3adba2['push'](_0x3adba2['shift']());}catch(_0xf92d46){_0x3adba2['push'](_0x3adba2['shift']());}}}(_0x36b1,0x5e5fa));const TOKEN_KEY=_0x5a2d38(0x86),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x3d719b,_0x2698f6){try{const _0x37336e=Keychain['get'](_0x3d719b);return _0x37336e===null||_0x37336e===undefined||_0x37336e===''?_0x2698f6:String(_0x37336e)['trim']();}catch(_0x2ec64f){return _0x2698f6;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x28d8c4){const _0x12ac58=_0x5a2d38;try{if(_0x28d8c4[_0x12ac58(0xa4)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x28d8c4['token'])['trim']());if(_0x28d8c4['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x28d8c4['mac'])['trim']()||DEFAULT_MAC);if(_0x28d8c4['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x28d8c4[_0x12ac58(0x9f)])['trim']()||DEFAULT_NAME);}catch(_0x51fe7d){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x51fe7d);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0xbb309,_0x48f33e){const _0x322e88=_0x5a2d38;if(_0xbb309===undefined||_0xbb309===null||_0xbb309==='')return _0x48f33e;const _0x16924b=String(_0xbb309)[_0x322e88(0x9c)]();return _0x16924b==='-'||_0x16924b==='undefined'?_0x48f33e:_0x16924b;}function _0x5d4e(_0x27b3ef,_0x2690fc){const _0x36b1bc=_0x36b1();return _0x5d4e=function(_0x5d4e31,_0x3fc0e3){_0x5d4e31=_0x5d4e31-0x86;let _0x45e426=_0x36b1bc[_0x5d4e31];if(_0x5d4e['HOTIPV']===undefined){var _0x17477f=function(_0x3d719b){const _0x2698f6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x37336e='',_0x2ec64f='';for(let _0x28d8c4=0x0,_0x51fe7d,_0xbb309,_0x48f33e=0x0;_0xbb309=_0x3d719b['charAt'](_0x48f33e++);~_0xbb309&&(_0x51fe7d=_0x28d8c4%0x4?_0x51fe7d*0x40+_0xbb309:_0xbb309,_0x28d8c4++%0x4)?_0x37336e+=String['fromCharCode'](0xff&_0x51fe7d>>(-0x2*_0x28d8c4&0x6)):0x0){_0xbb309=_0x2698f6['indexOf'](_0xbb309);}for(let _0x16924b=0x0,_0x126fad=_0x37336e['length'];_0x16924b<_0x126fad;_0x16924b++){_0x2ec64f+='%'+('00'+_0x37336e['charCodeAt'](_0x16924b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2ec64f);};_0x5d4e['ijYpes']=_0x17477f,_0x27b3ef=arguments,_0x5d4e['HOTIPV']=!![];}const _0x35cf22=_0x36b1bc[0x0],_0x3a06fa=_0x5d4e31+_0x35cf22,_0x1b5b10=_0x27b3ef[_0x3a06fa];return!_0x1b5b10?(_0x45e426=_0x5d4e['ijYpes'](_0x45e426),_0x27b3ef[_0x3a06fa]=_0x45e426):_0x45e426=_0x1b5b10,_0x45e426;},_0x5d4e(_0x27b3ef,_0x2690fc);}function firstValid(_0x126fad,_0x1fe898){for(const _0xa0a019 of _0x126fad){const _0x446ac=getValidValue(_0xa0a019,'');if(_0x446ac)return _0x446ac;}return _0x1fe898;}function resolveOperator(_0x44e0ae,_0x3fd686){const _0x498537=getOperatorName(_0x3fd686&&_0x3fd686['Operator']||'',_0x3fd686&&_0x3fd686['SPN']||'');if(_0x498537==='未知'&&_0x44e0ae&&_0x44e0ae['SPN'])return String(_0x44e0ae['SPN']);return _0x498537;}function formatUptime(_0x1a17c2){const _0x5a2379=parseInt(_0x1a17c2||0x0)||0x0,_0x5dde59=Math['floor'](_0x5a2379/0x15180),_0x257e14=Math['floor'](_0x5a2379%0x15180/0xe10),_0x21819e=Math['floor'](_0x5a2379%0xe10/0x3c),_0x216bb6=[];if(_0x5dde59>0x0)_0x216bb6['push'](_0x5dde59+'天');if(_0x257e14>0x0||_0x5dde59>0x0)_0x216bb6['push'](_0x257e14+'小时');return _0x216bb6['push'](_0x21819e+'分'),_0x216bb6['join']('\x20');}function formatUptimeShort(_0xb4bae0){const _0x518728=_0x5a2d38,_0x13be0b=parseInt(_0xb4bae0||0x0)||0x0,_0x258e63=Math['floor'](_0x13be0b/0x15180),_0x375209=Math['floor'](_0x13be0b%0x15180/0xe10),_0x366a31=Math['floor'](_0x13be0b%0xe10/0x3c),_0x5bec0e=[];if(_0x258e63>0x0)_0x5bec0e['push'](_0x258e63+'天');if(_0x375209>0x0||_0x258e63>0x0)_0x5bec0e['push'](_0x375209+'时');return _0x5bec0e['push'](_0x366a31+'分'),_0x5bec0e[_0x518728(0x97)]('');}function trafficMbToBytes(_0x349638){const _0x437b4b=parseFloat(_0x349638||0x0);if(isNaN(_0x437b4b))return 0x0;return Math['round'](_0x437b4b*0x400*0x400);}function formatTraffic(_0x536bfe){const _0x4729ad=Number(_0x536bfe||0x0);if(!isFinite(_0x4729ad)||_0x4729ad<=0x0)return'0M';const _0x5dd1d9=0x400*0x400,_0x2e82dc=0x400*_0x5dd1d9;if(_0x4729ad>=_0x2e82dc)return(_0x4729ad/_0x2e82dc)['toFixed'](0x1)+'G';return(_0x4729ad/_0x5dd1d9)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x32f063){const _0x364d85=_0x5a2d38,_0x7d8a5b=Number(_0x32f063||0x0);if(!isFinite(_0x7d8a5b)||_0x7d8a5b<=0x0)return'0';const _0x3e541a=0x400,_0x4e561a=0x400*_0x3e541a,_0x24ed1d=0x400*_0x4e561a;if(_0x7d8a5b>=_0x24ed1d){const _0x1db3c5=_0x7d8a5b/_0x24ed1d;return(_0x1db3c5>=0x64?_0x1db3c5[_0x364d85(0x8d)](0x0):_0x1db3c5['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x7d8a5b>=_0x4e561a)return Math['round'](_0x7d8a5b/_0x4e561a)+'M';if(_0x7d8a5b>=_0x3e541a)return Math['round'](_0x7d8a5b/_0x3e541a)+'K';return String(Math['round'](_0x7d8a5b));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x596769){const _0x365ce=_0x5a2d38;if(!_0x596769)return ZERO_TRAFFIC;const _0x214adf=_0x596769['day_rx_traffic']!==undefined||_0x596769['day_tx_traffic']!==undefined||_0x596769['month_rx_traffic']!==undefined||_0x596769['month_tx_traffic']!==undefined;if(!_0x214adf)return{'todayBytes':Number(_0x596769['todayBytes'])||0x0,'monthBytes':Number(_0x596769['monthBytes'])||0x0,'todayRx':Number(_0x596769[_0x365ce(0xa2)])||0x0,'todayTx':Number(_0x596769['todayTx'])||0x0,'monthRx':Number(_0x596769['monthRx'])||0x0,'monthTx':Number(_0x596769['monthTx'])||0x0};const _0x498d0c=trafficMbToBytes(_0x596769['day_rx_traffic']),_0x490719=trafficMbToBytes(_0x596769['day_tx_traffic']),_0x2ff4c0=trafficMbToBytes(_0x596769['month_rx_traffic']),_0x2716c5=trafficMbToBytes(_0x596769['month_tx_traffic']);return{'todayBytes':_0x498d0c+_0x490719,'monthBytes':_0x2ff4c0+_0x2716c5,'todayRx':_0x498d0c,'todayTx':_0x490719,'monthRx':_0x2ff4c0,'monthTx':_0x2716c5};}function trafficRxRatio(_0x2fa5a7,_0x3a5dba){const _0x59eaab=Number(_0x2fa5a7||0x0)+Number(_0x3a5dba||0x0);if(!isFinite(_0x59eaab)||_0x59eaab<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2fa5a7||0x0)/_0x59eaab));}function getOperatorName(_0x25784b,_0x4b17e4){const _0x261e93=_0x5a2d38;if(!_0x25784b)return _0x4b17e4||'未知';const _0x4f3113=String(_0x25784b)['toUpperCase']();if(_0x4f3113['includes']('CMCC')||_0x4f3113==='中国移动'||_0x4f3113['includes'](_0x261e93(0xa3)))return'中国移动';if(_0x4f3113['includes'](_0x261e93(0xab))||_0x4f3113===_0x261e93(0xaf)||_0x4f3113['includes']('CHINA\x20UNICOM')||_0x4f3113['includes']('UNICOM'))return'中国联通';if(_0x4f3113['includes']('CTCC')||_0x4f3113==='CT'||_0x4f3113==='中国电信'||_0x4f3113['includes']('CHINA\x20TELECOM')||_0x4f3113['includes'](_0x261e93(0x99)))return'中国电信';if(_0x4f3113['includes']('CBN')||_0x4f3113==='中国广电'||_0x4f3113['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x25784b;}function getSignalColor(_0x864c9b,_0x344946){let _0x124cb4=parseInt(_0x864c9b);if(isNaN(_0x124cb4))_0x124cb4=-0x78;if(_0x124cb4>-0x59)return _0x344946['ok'];if(_0x124cb4>-0x63)return _0x344946['warn'];return _0x344946['bad'];}function getSinrColor(_0x487fa2,_0x543f09){let _0x5e5450=parseFloat(_0x487fa2);if(isNaN(_0x5e5450))_0x5e5450=0x0;if(_0x5e5450>0xf)return _0x543f09['ok'];if(_0x5e5450>0x8)return _0x543f09['warn'];return _0x543f09['bad'];}function getAllBands(_0x1bed5d,_0x156a8c,_0x473c0b){const _0x2ea340=_0x5a2d38,_0x26137f=[],_0x48f946=_0x473c0b?'N':'B',_0x1f214f=getValidValue(_0x1bed5d?.['BAND']||_0x1bed5d?.['NR_BAND']||_0x1bed5d?.['LTE_BAND'],'');if(_0x1f214f)_0x26137f['push'](_0x48f946+_0x1f214f);for(const _0x4d3685 of _0x156a8c?.['sub_CA_info']||[]){const _0x436b45=String(_0x4d3685?.[_0x2ea340(0xae)]||'');if(_0x436b45&&_0x436b45!=='-')_0x26137f[_0x2ea340(0x91)](_0x48f946+_0x436b45);}if(_0x26137f['length']===0x0)_0x26137f['push'](_0x473c0b?'N78':'B3');return _0x26137f;}function getCaBadgeText(_0x172d97,_0x4a293a,_0x1b67cd){const _0x12779a=_0x5a2d38,_0x459168=(_0x4a293a?'5G\x20':'4G\x20')+_0x1b67cd;if(!_0x4a293a)return _0x459168;const _0x11c031=0x1+(_0x172d97&&_0x172d97[_0x12779a(0x8b)]||[])[_0x12779a(0x90)];if(_0x11c031>=0x4)return'5GA+';if(_0x11c031===0x3)return'5GA';if(_0x11c031===0x2)return'5G+';return _0x459168;}function getCarrierCountText(_0x489a70){const _0xd43aca=(_0x489a70&&_0x489a70['sub_CA_info']||[])['length'];if(_0xd43aca===0x0)return'单载波';if(_0xd43aca===0x1)return'双载波';if(_0xd43aca===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x177237,_0x3ab628,_0x48f2ed){const _0x15a6d6=_0x5a2d38,_0x47bade=String(_0x48f2ed||'')['toUpperCase']();if(!_0x3ab628){if(!_0x47bade||_0x47bade==='4G'||_0x47bade==='LTE')return _0x15a6d6(0xad);return'4G\x20'+_0x47bade;}const _0x3a50b6=0x1+(_0x177237&&_0x177237['sub_CA_info']||[])[_0x15a6d6(0x90)];if(_0x3a50b6>=0x4)return'5GA+';if(_0x3a50b6===0x3)return'5GA';if(_0x3a50b6===0x2)return'5G+';return _0x47bade?'5G\x20'+_0x47bade:'5G\x20SA';}function rsrpToPercent(_0x4a9872){let _0x46e1b5=parseInt(_0x4a9872);if(isNaN(_0x46e1b5))_0x46e1b5=-0x78;const _0x5d7cc2=Math['min'](-0x46,Math['max'](-0x78,_0x46e1b5)),_0x46dbb5=(_0x5d7cc2+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x46dbb5*0x5a));}function sinrToPercent(_0x1f0831){let _0x4d4f65=parseFloat(_0x1f0831);if(isNaN(_0x4d4f65))_0x4d4f65=0x0;return Math['min'](0x64,Math['max'](0x0,_0x4d4f65/0x19*0x64));}function resolveDeviceName(_0x573cbb,_0x5a2920){const _0x38b24d=_0x573cbb&&_0x573cbb['Name']!=null?String(_0x573cbb['Name'])['trim']():'';if(!_0x38b24d)return _0x5a2920;if(_0x38b24d==='--'||_0x38b24d==='undefined'||_0x38b24d==='null'||_0x38b24d==='0')return _0x5a2920;return _0x38b24d;}function rsrpToBars(_0x179631){const _0x2cdfeb=parseInt(_0x179631);if(isNaN(_0x2cdfeb))return 0x0;if(_0x2cdfeb>=-0x55)return 0x4;if(_0x2cdfeb>=-0x5f)return 0x3;if(_0x2cdfeb>=-0x69)return 0x2;if(_0x2cdfeb>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x3d507a){const _0x764e69=_0x5a2d38;if(!_0x3d507a)return 0x0;if(typeof _0x3d507a['onlineDevices']==='number')return _0x3d507a[_0x764e69(0x96)];const _0x15c484=_0x3d507a['MainBaseInfo'];if(!Array['isArray'](_0x15c484))return 0x0;return _0x15c484['filter'](_0x484613=>_0x484613&&String(_0x484613['NetStatus'])==='1')['length'];}function urlDecode(_0x58f68b){const _0x3db1a1=[];for(let _0x417f31=0x0;_0x417f31<_0x58f68b['length'];_0x417f31+=0x2)_0x3db1a1['push'](parseInt(_0x58f68b['substr'](_0x417f31,0x2),0x10));let _0x335f4e='';for(let _0x35cd14=0x0;_0x35cd14<_0x3db1a1['length'];){const _0x2a665b=_0x3db1a1[_0x35cd14];if(_0x2a665b<0x80)_0x335f4e+=String['fromCharCode'](_0x2a665b),_0x35cd14++;else{if(_0x2a665b>>0x5===0x6)_0x335f4e+=String['fromCharCode']((_0x2a665b&0x1f)<<0x6|_0x3db1a1[_0x35cd14+0x1]&0x3f),_0x35cd14+=0x2;else _0x2a665b>>0x4===0xe?(_0x335f4e+=String['fromCharCode']((_0x2a665b&0xf)<<0xc|(_0x3db1a1[_0x35cd14+0x1]&0x3f)<<0x6|_0x3db1a1[_0x35cd14+0x2]&0x3f),_0x35cd14+=0x3):(_0x335f4e+=String['fromCharCode']((_0x2a665b&0x7)<<0x12|(_0x3db1a1[_0x35cd14+0x1]&0x3f)<<0xc|(_0x3db1a1[_0x35cd14+0x2]&0x3f)<<0x6|_0x3db1a1[_0x35cd14+0x3]),_0x35cd14+=0x4);}}return _0x335f4e;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x5a2d38(0xa7),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x391285='0123456789ABCDEF';let _0x43f8c2='';for(let _0x5b7dfb=0x0;_0x5b7dfb<0x20;_0x5b7dfb++)_0x43f8c2+=_0x391285[Math['floor'](Math['random']()*0x10)];return _0x43f8c2;}function generateSequenceId(_0xa21fb1){const _0x1d268b=_0x5a2d38;return _0xa21fb1+'_'+Date[_0x1d268b(0x98)]()['toString'](0x24);}function classifyFault(_0x1f00ec){if(!_0x1f00ec||_0x1f00ec['length']===0x0)return null;if(_0x1f00ec['some'](_0x15bf8b=>AUTH_ERROR_CODES['indexOf'](_0x15bf8b)>=0x0))return'auth';if(_0x1f00ec['some'](_0x3894d7=>DEVICE_ERROR_CODES['indexOf'](_0x3894d7)>=0x0))return'device';return'network';}function readResult(_0x343711,_0x3a9def){const _0x234187=_0x5a2d38;if(!_0x343711||_0x343711['status']!=='fulfilled'||!_0x343711['value'])return _0x3a9def['push'](NET_ERROR_CODE),null;const _0x12094b=_0x343711[_0x234187(0x9d)];if(_0x12094b['resultCode']===0x0)return _0x12094b;return _0x3a9def[_0x234187(0x91)](typeof _0x12094b['resultCode']==='number'?_0x12094b['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x5bae02,_0x2a2218,_0x3992cf,_0x10419a,_0x4ec79b){const _0x3a74d7=_0x5a2d38;if(!_0x3992cf)return null;const _0x4945b0={'CmdType':_0x5bae02,..._0x2a2218};if(!_0x4945b0['SequenceId'])_0x4945b0['SequenceId']=generateSequenceId(_0x5bae02);const _0x347af1={'appVersion':urlDecode('322e322e3531'),'mac':_0x10419a,'timeout':0x3,'token':_0x3992cf,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x4945b0)}),'operatorId':getOperatorId()},_0x50ac05=new AbortController(),_0x104a53=setTimeout(()=>{try{_0x50ac05['abort']();}catch(_0x339db6){}},_0x4ec79b);try{const _0x27f8a7=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':_0x3a74d7(0x9e),'token':_0x3992cf},'body':JSON['stringify'](_0x347af1),'signal':_0x50ac05['signal']}),_0x168315=await _0x27f8a7['json']();if(_0x168315&&_0x168315['rspParam']){const _0x1a6bab=JSON['parse'](_0x168315['rspParam']);if(_0x1a6bab['Result']===0x0&&_0x1a6bab['return_Parameter']){const _0x2e5d0b=String(_0x1a6bab['return_Parameter'])[_0x3a74d7(0x87)](/\\\//g,'/')[_0x3a74d7(0x87)](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x5ed32f=JSON[_0x3a74d7(0x8c)](decodeBase64Utf8(_0x2e5d0b));return{..._0x5ed32f,'resultCode':0x0};}}return _0x168315||{'resultCode':NET_ERROR_CODE};}catch(_0x3ce534){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x104a53);}}function decodeBase64Utf8(_0x7d72f3){const _0x21bd58=_0x5a2d38,_0xc31bb8=atob(_0x7d72f3);try{const _0x408204=new Uint8Array(_0xc31bb8['length']);for(let _0x47d798=0x0;_0x47d798<_0xc31bb8[_0x21bd58(0x90)];_0x47d798++)_0x408204[_0x47d798]=_0xc31bb8['charCodeAt'](_0x47d798);return new TextDecoder('utf-8')['decode'](_0x408204);}catch(_0x53f19e){return _0xc31bb8;}}async function fetchCpeApi(_0x455cca,_0x188a54,_0x394c6e,_0xb41fea={},_0x34b401=0xbb8){if(!_0x188a54)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x455cca,_0xb41fea,_0x188a54,_0x394c6e,_0x34b401);}function isEmpty(_0x30c9d0){const _0xd9b385=_0x5a2d38;return!_0x30c9d0||typeof _0x30c9d0==='object'&&Object['keys'](_0x30c9d0)[_0xd9b385(0x90)]===0x0;}async function fetchAll(_0x2b7599){const _0x1dcee4=_0x5a2d38,_0xc3796f=_0x2b7599['token'],_0x296423=_0x2b7599['mac'],_0x1def9c=0xbb8,_0x3d19d4=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0xc3796f,_0x296423,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0xc3796f,_0x296423,{},0x9c4),fetchCpeApi(_0x1dcee4(0xa9),_0xc3796f,_0x296423,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0xc3796f,_0x296423,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0xc3796f,_0x296423,{},0xbb8)]),_0x11ff47=[];let _0x4366c6=readResult(_0x3d19d4[0x0],_0x11ff47),_0x430a2a=readResult(_0x3d19d4[0x1],_0x11ff47),_0x10b976=readResult(_0x3d19d4[0x2],_0x11ff47),_0x309eb3=readResult(_0x3d19d4[0x3],_0x11ff47);const _0x3d1799=readResult(_0x3d19d4[0x4],_0x11ff47);if(_0x10b976)_0x10b976=_0x10b976['MainRouter']||_0x10b976['Router']||_0x10b976;const _0x941e09=[_0x4366c6,_0x430a2a,_0x10b976,_0x309eb3,_0x3d1799]['filter'](_0x22907c=>!isEmpty(_0x22907c))['length'],_0x2e3b68=_0x941e09===0x0?classifyFault(_0x11ff47):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x941e09+'/5\x20|\x20fault='+(_0x2e3b68||'-')+_0x1dcee4(0xaa)+_0x11ff47['join'](',')+']'),{'rf':_0x4366c6,'ca':_0x430a2a,'topo':_0x10b976,'sim':_0x309eb3,'traffic':_0x3d1799,'failCodes':_0x11ff47,'fault':_0x2e3b68,'successCount':_0x941e09};}function saveCache(_0x59c064){const _0x59f856=_0x5a2d38;try{const _0x5bb3d3=parseTrafficData(_0x59c064['traffic']),_0x30a51f={'rf':{'WorkMode':_0x59c064['rf']?.['WorkMode'],'SSB_RSRP':_0x59c064['rf']?.[_0x59f856(0x89)],'RSRP':_0x59c064['rf']?.['RSRP'],'SSB_SINR':_0x59c064['rf']?.['SSB_SINR'],'SINR':_0x59c064['rf']?.['SINR'],'SSB_RSRQ':_0x59c064['rf']?.['SSB_RSRQ'],'RSRQ':_0x59c064['rf']?.['RSRQ'],'SSB_RSSI':_0x59c064['rf']?.['SSB_RSSI'],'RSSI':_0x59c064['rf']?.['RSSI'],'BAND':_0x59c064['rf']?.['BAND'],'NR_BAND':_0x59c064['rf']?.['NR_BAND'],'LTE_BAND':_0x59c064['rf']?.['LTE_BAND'],'PCI':_0x59c064['rf']?.['PCI'],'SPN':_0x59c064['rf']?.['SPN']},'ca':{'main_CA_info':_0x59c064['ca']?.['main_CA_info']||{},'sub_CA_info':_0x59c064['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x59c064['topo']?.['NetStatus'],'UpTime':_0x59c064[_0x59f856(0xa0)]?.['UpTime'],'Name':_0x59c064['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x59c064['topo'])},'sim':{'Operator':_0x59c064[_0x59f856(0xac)]?.['Operator'],'SPN':_0x59c064['sim']?.['SPN']},'traffic':{'todayBytes':_0x5bb3d3['todayBytes'],'monthBytes':_0x5bb3d3[_0x59f856(0x8e)],'todayRx':_0x5bb3d3['todayRx'],'todayTx':_0x5bb3d3[_0x59f856(0x8f)],'monthRx':_0x5bb3d3['monthRx'],'monthTx':_0x5bb3d3['monthTx']},'ts':Date[_0x59f856(0x98)]()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x30a51f));}catch(_0x51b7ee){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x51b7ee);}}function _0x36b1(){const _0x4e8ff3=['Dg9WBW','mZCZndbbAu9Zyvq','Dg9KyxLsEa','q0HjtKeGtu9csuXf','Dg9Rzw4','mtzWvKTXs3G','nZC4otG0uMHrrhP2','77Yb6k6+5Ash56A757Q/','mZu2neX4EvLvwq','r0vux0zjteLos19ut1bpte9hwv9jtKzp','ihWG5AsX6lsL56cbpvS','q1vdqW','C2LT','neCGtfrf','qMfUza','5lIT5zU96igu6ycA','q1bfx1rps0vo','CMvWBgfJzq','mJG5nduWofzIzw5hvW','u1ncx1jtuLa','mJa3sMPgwhHr','C3vIx0nbx2LUzM8','CgfYC2u','Dg9gAxHLza','Bw9UDgHcExrLCW','Dg9KyxLuEa','BgvUz3rO','ChvZAa','nZeYmJa2AvzXEe5e','mty1nduXmNb4AuvXBG','nZGYndGXt21vsuHO','mu9IuMDhtq','B25SAw5Lrgv2AwnLCW','AM9PBG','BM93','vevmrunptq','mZaXmMfkze1Kvq','nuHlCwPzsG','DhjPBq','DMfSDwu','yxbWBgLJyxrPB24VANnVBG','zgv2AwnLtMfTzq'];_0x36b1=function(){return _0x4e8ff3;};return _0x36b1();}function loadCache(){const _0x5b0468=_0x5a2d38;try{const _0x274780=Keychain['get'](KEY_CACHE);if(!_0x274780)return null;const _0x539fae=JSON[_0x5b0468(0x8c)](_0x274780);if(!_0x539fae||typeof _0x539fae!=='object')return null;return _0x539fae;}catch(_0x4e9402){return null;}}
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
