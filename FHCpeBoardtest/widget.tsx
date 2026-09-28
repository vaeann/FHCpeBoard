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

(function(_0x9242e2,_0x44743e){const _0x4f444d=_0x3195,_0x16863b=_0x9242e2();while(!![]){try{const _0x8e0b06=-parseInt(_0x4f444d(0x218))/0x1+parseInt(_0x4f444d(0x205))/0x2+parseInt(_0x4f444d(0x1f2))/0x3*(-parseInt(_0x4f444d(0x1ff))/0x4)+-parseInt(_0x4f444d(0x1f7))/0x5*(-parseInt(_0x4f444d(0x219))/0x6)+parseInt(_0x4f444d(0x212))/0x7*(-parseInt(_0x4f444d(0x209))/0x8)+parseInt(_0x4f444d(0x203))/0x9*(parseInt(_0x4f444d(0x1fe))/0xa)+parseInt(_0x4f444d(0x214))/0xb*(parseInt(_0x4f444d(0x215))/0xc);if(_0x8e0b06===_0x44743e)break;else _0x16863b['push'](_0x16863b['shift']());}catch(_0x448d73){_0x16863b['push'](_0x16863b['shift']());}}}(_0x1b4a,0x9d625));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x555203,_0x10fc18){try{const _0x260ced=Keychain['get'](_0x555203);return _0x260ced===null||_0x260ced===undefined||_0x260ced===''?_0x10fc18:String(_0x260ced)['trim']();}catch(_0x251b3a){return _0x10fc18;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x22a514){const _0x301924=_0x3195;try{if(_0x22a514['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x22a514['token'])['trim']());if(_0x22a514['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x22a514['mac'])['trim']()||DEFAULT_MAC);if(_0x22a514['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x22a514[_0x301924(0x201)])[_0x301924(0x216)]()||DEFAULT_NAME);}catch(_0x4b50e4){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x4b50e4);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x3237a5,_0x4f461d){if(_0x3237a5===undefined||_0x3237a5===null||_0x3237a5==='')return _0x4f461d;const _0x163044=String(_0x3237a5)['trim']();return _0x163044==='-'||_0x163044==='undefined'?_0x4f461d:_0x163044;}function firstValid(_0x420909,_0x29ea45){for(const _0x41b575 of _0x420909){const _0x3f4c9d=getValidValue(_0x41b575,'');if(_0x3f4c9d)return _0x3f4c9d;}return _0x29ea45;}function resolveOperator(_0x4ef259,_0x2e8b24){const _0x505e31=getOperatorName(_0x2e8b24&&_0x2e8b24['Operator']||'',_0x2e8b24&&_0x2e8b24['SPN']||'');if(_0x505e31==='未知'&&_0x4ef259&&_0x4ef259['SPN'])return String(_0x4ef259['SPN']);return _0x505e31;}function formatUptime(_0x5ee2cd){const _0x4912bd=_0x3195,_0x355b51=parseInt(_0x5ee2cd||0x0)||0x0,_0x4f298d=Math[_0x4912bd(0x20c)](_0x355b51/0x15180),_0x56b252=Math['floor'](_0x355b51%0x15180/0xe10),_0x194a75=Math['floor'](_0x355b51%0xe10/0x3c),_0x52285f=[];if(_0x4f298d>0x0)_0x52285f['push'](_0x4f298d+'天');if(_0x56b252>0x0||_0x4f298d>0x0)_0x52285f[_0x4912bd(0x1f5)](_0x56b252+'小时');return _0x52285f['push'](_0x194a75+'分'),_0x52285f['join']('\x20');}function formatUptimeShort(_0x981e72){const _0x44525e=_0x3195,_0x58c4df=parseInt(_0x981e72||0x0)||0x0,_0x2caa37=Math['floor'](_0x58c4df/0x15180),_0x4875aa=Math['floor'](_0x58c4df%0x15180/0xe10),_0x483d5b=Math[_0x44525e(0x20c)](_0x58c4df%0xe10/0x3c),_0x217a5e=[];if(_0x2caa37>0x0)_0x217a5e['push'](_0x2caa37+'天');if(_0x4875aa>0x0||_0x2caa37>0x0)_0x217a5e['push'](_0x4875aa+'时');return _0x217a5e[_0x44525e(0x1f5)](_0x483d5b+'分'),_0x217a5e['join']('');}function trafficMbToBytes(_0x4e584b){const _0x1ec7b3=parseFloat(_0x4e584b||0x0);if(isNaN(_0x1ec7b3))return 0x0;return Math['round'](_0x1ec7b3*0x400*0x400);}function formatTraffic(_0x4b66b8){const _0x3d8102=_0x3195,_0x5530a5=Number(_0x4b66b8||0x0);if(!isFinite(_0x5530a5)||_0x5530a5<=0x0)return'0M';const _0x5321a5=0x400*0x400,_0x167cc5=0x400*_0x5321a5;if(_0x5530a5>=_0x167cc5)return(_0x5530a5/_0x167cc5)[_0x3d8102(0x21c)](0x1)+'G';return(_0x5530a5/_0x5321a5)[_0x3d8102(0x21c)](0x1)+'M';}function formatTrafficShort(_0x4a1fb6){const _0x212a24=_0x3195,_0xa744fe=Number(_0x4a1fb6||0x0);if(!isFinite(_0xa744fe)||_0xa744fe<=0x0)return'0';const _0x27f76d=0x400,_0x45fb0f=0x400*_0x27f76d,_0x158290=0x400*_0x45fb0f;if(_0xa744fe>=_0x158290){const _0x4bce76=_0xa744fe/_0x158290;return(_0x4bce76>=0x64?_0x4bce76['toFixed'](0x0):_0x4bce76[_0x212a24(0x21c)](0x1)[_0x212a24(0x1fa)](/\.0$/,''))+'G';}if(_0xa744fe>=_0x45fb0f)return Math['round'](_0xa744fe/_0x45fb0f)+'M';if(_0xa744fe>=_0x27f76d)return Math['round'](_0xa744fe/_0x27f76d)+'K';return String(Math[_0x212a24(0x208)](_0xa744fe));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x369817){const _0x302b4e=_0x3195;if(!_0x369817)return ZERO_TRAFFIC;const _0x4edbd4=_0x369817['day_rx_traffic']!==undefined||_0x369817['day_tx_traffic']!==undefined||_0x369817['month_rx_traffic']!==undefined||_0x369817['month_tx_traffic']!==undefined;if(!_0x4edbd4)return{'todayBytes':Number(_0x369817['todayBytes'])||0x0,'monthBytes':Number(_0x369817['monthBytes'])||0x0,'todayRx':Number(_0x369817[_0x302b4e(0x1f3)])||0x0,'todayTx':Number(_0x369817['todayTx'])||0x0,'monthRx':Number(_0x369817['monthRx'])||0x0,'monthTx':Number(_0x369817['monthTx'])||0x0};const _0x375011=trafficMbToBytes(_0x369817['day_rx_traffic']),_0xdd717a=trafficMbToBytes(_0x369817['day_tx_traffic']),_0x1e037f=trafficMbToBytes(_0x369817['month_rx_traffic']),_0x553652=trafficMbToBytes(_0x369817['month_tx_traffic']);return{'todayBytes':_0x375011+_0xdd717a,'monthBytes':_0x1e037f+_0x553652,'todayRx':_0x375011,'todayTx':_0xdd717a,'monthRx':_0x1e037f,'monthTx':_0x553652};}function trafficRxRatio(_0x2f68ca,_0x1d867a){const _0x22fecf=Number(_0x2f68ca||0x0)+Number(_0x1d867a||0x0);if(!isFinite(_0x22fecf)||_0x22fecf<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2f68ca||0x0)/_0x22fecf));}function getOperatorName(_0x4bb936,_0x52394a){const _0x547394=_0x3195;if(!_0x4bb936)return _0x52394a||'未知';const _0x5abbb2=String(_0x4bb936)['toUpperCase']();if(_0x5abbb2['includes'](_0x547394(0x20a))||_0x5abbb2==='中国移动'||_0x5abbb2[_0x547394(0x206)]('CHINA\x20MOBILE'))return'中国移动';if(_0x5abbb2['includes']('CUCC')||_0x5abbb2==='中国联通'||_0x5abbb2['includes']('CHINA\x20UNICOM')||_0x5abbb2['includes']('UNICOM'))return'中国联通';if(_0x5abbb2[_0x547394(0x206)](_0x547394(0x1f9))||_0x5abbb2==='CT'||_0x5abbb2==='中国电信'||_0x5abbb2['includes']('CHINA\x20TELECOM')||_0x5abbb2['includes']('TELECOM'))return'中国电信';if(_0x5abbb2['includes']('CBN')||_0x5abbb2===_0x547394(0x1fc)||_0x5abbb2['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x4bb936;}function getSignalColor(_0x5a12d0,_0x11b8bf){let _0x27bf05=parseInt(_0x5a12d0);if(isNaN(_0x27bf05))_0x27bf05=-0x78;if(_0x27bf05>-0x59)return _0x11b8bf['ok'];if(_0x27bf05>-0x63)return _0x11b8bf['warn'];return _0x11b8bf['bad'];}function getSinrColor(_0x4fc674,_0x56cc3b){let _0x16c75f=parseFloat(_0x4fc674);if(isNaN(_0x16c75f))_0x16c75f=0x0;if(_0x16c75f>0xf)return _0x56cc3b['ok'];if(_0x16c75f>0x8)return _0x56cc3b['warn'];return _0x56cc3b['bad'];}function getAllBands(_0x525c7b,_0x34d605,_0x17db18){const _0x42f79c=_0x3195,_0x26ad4f=[],_0x4391d3=_0x17db18?'N':'B',_0xf50401=getValidValue(_0x525c7b?.['BAND']||_0x525c7b?.['NR_BAND']||_0x525c7b?.[_0x42f79c(0x213)],'');if(_0xf50401)_0x26ad4f['push'](_0x4391d3+_0xf50401);for(const _0x57f7cb of _0x34d605?.['sub_CA_info']||[]){const _0x4d3ac0=String(_0x57f7cb?.[_0x42f79c(0x1f4)]||'');if(_0x4d3ac0&&_0x4d3ac0!=='-')_0x26ad4f['push'](_0x4391d3+_0x4d3ac0);}if(_0x26ad4f['length']===0x0)_0x26ad4f['push'](_0x17db18?'N78':'B3');return _0x26ad4f;}function getCaBadgeText(_0x562d7e,_0x6c0d33,_0x37e7f8){const _0x34d1aa=(_0x6c0d33?'5G\x20':'4G\x20')+_0x37e7f8;if(!_0x6c0d33)return _0x34d1aa;const _0x961571=0x1+(_0x562d7e&&_0x562d7e['sub_CA_info']||[])['length'];if(_0x961571>=0x4)return'5GA+';if(_0x961571===0x3)return'5GA';if(_0x961571===0x2)return'5G+';return _0x34d1aa;}function getCarrierCountText(_0x2c8ad2){const _0x2d21ef=_0x3195,_0x44ffad=(_0x2c8ad2&&_0x2c8ad2[_0x2d21ef(0x210)]||[])['length'];if(_0x44ffad===0x0)return'单载波';if(_0x44ffad===0x1)return'双载波';if(_0x44ffad===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x5689ab,_0x4c9bcd,_0x3019b4){const _0x565ee1=_0x3195,_0x329506=String(_0x3019b4||'')['toUpperCase']();if(!_0x4c9bcd){if(!_0x329506||_0x329506==='4G'||_0x329506==='LTE')return'4G\x20LTE';return'4G\x20'+_0x329506;}const _0x336942=0x1+(_0x5689ab&&_0x5689ab['sub_CA_info']||[])['length'];if(_0x336942>=0x4)return'5GA+';if(_0x336942===0x3)return _0x565ee1(0x1f6);if(_0x336942===0x2)return'5G+';return _0x329506?'5G\x20'+_0x329506:'5G\x20SA';}function rsrpToPercent(_0x3175c4){let _0x3cea1d=parseInt(_0x3175c4);if(isNaN(_0x3cea1d))_0x3cea1d=-0x78;const _0x48e214=Math['min'](-0x46,Math['max'](-0x78,_0x3cea1d)),_0x229810=(_0x48e214+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x229810*0x5a));}function sinrToPercent(_0x3f162a){const _0x4675cf=_0x3195;let _0x154519=parseFloat(_0x3f162a);if(isNaN(_0x154519))_0x154519=0x0;return Math[_0x4675cf(0x1f8)](0x64,Math['max'](0x0,_0x154519/0x19*0x64));}function resolveDeviceName(_0x16ce0e,_0xfbe270){const _0x35c6a2=_0x16ce0e&&_0x16ce0e['Name']!=null?String(_0x16ce0e['Name'])['trim']():'';if(!_0x35c6a2)return _0xfbe270;if(_0x35c6a2==='--'||_0x35c6a2==='undefined'||_0x35c6a2==='null'||_0x35c6a2==='0')return _0xfbe270;return _0x35c6a2;}function rsrpToBars(_0x41fd24){const _0x4fbbf4=parseInt(_0x41fd24);if(isNaN(_0x4fbbf4))return 0x0;if(_0x4fbbf4>=-0x55)return 0x4;if(_0x4fbbf4>=-0x5f)return 0x3;if(_0x4fbbf4>=-0x69)return 0x2;if(_0x4fbbf4>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x971324){const _0xbd849b=_0x3195;if(!_0x971324)return 0x0;if(typeof _0x971324[_0xbd849b(0x21b)]==='number')return _0x971324[_0xbd849b(0x21b)];const _0x251f44=_0x971324['MainBaseInfo'];if(!Array['isArray'](_0x251f44))return 0x0;return _0x251f44[_0xbd849b(0x211)](_0x397dd8=>_0x397dd8&&String(_0x397dd8['NetStatus'])==='1')['length'];}function urlDecode(_0x144b66){const _0x1056cc=_0x3195,_0x4cdc4d=[];for(let _0x235331=0x0;_0x235331<_0x144b66['length'];_0x235331+=0x2)_0x4cdc4d['push'](parseInt(_0x144b66['substr'](_0x235331,0x2),0x10));let _0x35afff='';for(let _0x24c1c8=0x0;_0x24c1c8<_0x4cdc4d['length'];){const _0x2d3c8e=_0x4cdc4d[_0x24c1c8];if(_0x2d3c8e<0x80)_0x35afff+=String['fromCharCode'](_0x2d3c8e),_0x24c1c8++;else{if(_0x2d3c8e>>0x5===0x6)_0x35afff+=String[_0x1056cc(0x207)]((_0x2d3c8e&0x1f)<<0x6|_0x4cdc4d[_0x24c1c8+0x1]&0x3f),_0x24c1c8+=0x2;else _0x2d3c8e>>0x4===0xe?(_0x35afff+=String['fromCharCode']((_0x2d3c8e&0xf)<<0xc|(_0x4cdc4d[_0x24c1c8+0x1]&0x3f)<<0x6|_0x4cdc4d[_0x24c1c8+0x2]&0x3f),_0x24c1c8+=0x3):(_0x35afff+=String['fromCharCode']((_0x2d3c8e&0x7)<<0x12|(_0x4cdc4d[_0x24c1c8+0x1]&0x3f)<<0xc|(_0x4cdc4d[_0x24c1c8+0x2]&0x3f)<<0x6|_0x4cdc4d[_0x24c1c8+0x3]),_0x24c1c8+=0x4);}}return _0x35afff;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0xdc03c9='0123456789ABCDEF';let _0x1cea3f='';for(let _0x489f54=0x0;_0x489f54<0x20;_0x489f54++)_0x1cea3f+=_0xdc03c9[Math['floor'](Math['random']()*0x10)];return _0x1cea3f;}function generateSequenceId(_0x2f59d5){return _0x2f59d5+'_'+Date['now']()['toString'](0x24);}function _0x3195(_0x1f6ece,_0x286cc3){const _0x1b4a79=_0x1b4a();return _0x3195=function(_0x319507,_0x5073ba){_0x319507=_0x319507-0x1f2;let _0x3fe130=_0x1b4a79[_0x319507];if(_0x3195['lnFHgU']===undefined){var _0x17596d=function(_0x555203){const _0x10fc18='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x260ced='',_0x251b3a='';for(let _0x22a514=0x0,_0x4b50e4,_0x3237a5,_0x4f461d=0x0;_0x3237a5=_0x555203['charAt'](_0x4f461d++);~_0x3237a5&&(_0x4b50e4=_0x22a514%0x4?_0x4b50e4*0x40+_0x3237a5:_0x3237a5,_0x22a514++%0x4)?_0x260ced+=String['fromCharCode'](0xff&_0x4b50e4>>(-0x2*_0x22a514&0x6)):0x0){_0x3237a5=_0x10fc18['indexOf'](_0x3237a5);}for(let _0x163044=0x0,_0x420909=_0x260ced['length'];_0x163044<_0x420909;_0x163044++){_0x251b3a+='%'+('00'+_0x260ced['charCodeAt'](_0x163044)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x251b3a);};_0x3195['FDvjgq']=_0x17596d,_0x1f6ece=arguments,_0x3195['lnFHgU']=!![];}const _0x19e828=_0x1b4a79[0x0],_0x1c0551=_0x319507+_0x19e828,_0x47f511=_0x1f6ece[_0x1c0551];return!_0x47f511?(_0x3fe130=_0x3195['FDvjgq'](_0x3fe130),_0x1f6ece[_0x1c0551]=_0x3fe130):_0x3fe130=_0x47f511,_0x3fe130;},_0x3195(_0x1f6ece,_0x286cc3);}function classifyFault(_0xf8f26b){if(!_0xf8f26b||_0xf8f26b['length']===0x0)return null;if(_0xf8f26b['some'](_0x3ab046=>AUTH_ERROR_CODES['indexOf'](_0x3ab046)>=0x0))return'auth';if(_0xf8f26b['some'](_0x37eb9a=>DEVICE_ERROR_CODES['indexOf'](_0x37eb9a)>=0x0))return'device';return'network';}function readResult(_0xda91b4,_0xd87689){const _0x23fd47=_0x3195;if(!_0xda91b4||_0xda91b4['status']!==_0x23fd47(0x20b)||!_0xda91b4['value'])return _0xd87689[_0x23fd47(0x1f5)](NET_ERROR_CODE),null;const _0x21cc37=_0xda91b4['value'];if(_0x21cc37['resultCode']===0x0)return _0x21cc37;return _0xd87689['push'](typeof _0x21cc37['resultCode']==='number'?_0x21cc37['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x4d5d3b,_0x488103,_0x4c198b,_0x58e4c7,_0x6dd7fc){const _0x372bef=_0x3195;if(!_0x4c198b)return null;const _0x42befe={'CmdType':_0x4d5d3b,..._0x488103};if(!_0x42befe['SequenceId'])_0x42befe['SequenceId']=generateSequenceId(_0x4d5d3b);const _0x31ec98={'appVersion':urlDecode('322e322e3531'),'mac':_0x58e4c7,'timeout':0x3,'token':_0x4c198b,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x372bef(0x217)),'Parameter':JSON['stringify'](_0x42befe)}),'operatorId':getOperatorId()},_0x5ba01f=new AbortController(),_0x191f32=setTimeout(()=>{try{_0x5ba01f['abort']();}catch(_0x359939){}},_0x6dd7fc);try{const _0x986eca=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x4c198b},'body':JSON['stringify'](_0x31ec98),'signal':_0x5ba01f['signal']}),_0x5e3588=await _0x986eca[_0x372bef(0x204)]();if(_0x5e3588&&_0x5e3588['rspParam']){const _0x4ba57c=JSON['parse'](_0x5e3588['rspParam']);if(_0x4ba57c['Result']===0x0&&_0x4ba57c['return_Parameter']){const _0x120d95=String(_0x4ba57c['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x12b88c=JSON[_0x372bef(0x21a)](decodeBase64Utf8(_0x120d95));return{..._0x12b88c,'resultCode':0x0};}}return _0x5e3588||{'resultCode':NET_ERROR_CODE};}catch(_0xb90d34){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x191f32);}}function decodeBase64Utf8(_0x3c3ef6){const _0x203d44=_0x3195,_0x5b2fd6=atob(_0x3c3ef6);try{const _0x3a34c7=new Uint8Array(_0x5b2fd6['length']);for(let _0x400c73=0x0;_0x400c73<_0x5b2fd6['length'];_0x400c73++)_0x3a34c7[_0x400c73]=_0x5b2fd6[_0x203d44(0x200)](_0x400c73);return new TextDecoder('utf-8')['decode'](_0x3a34c7);}catch(_0xa6e9a7){return _0x5b2fd6;}}async function fetchCpeApi(_0x4324be,_0x38ff7a,_0x3a8595,_0x40ad99={},_0x286b75=0xbb8){if(!_0x38ff7a)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x4324be,_0x40ad99,_0x38ff7a,_0x3a8595,_0x286b75);}function _0x1b4a(){const _0x2e6b3e=['ChvZAa','nuDb','mty1C1v2uxLM','BwLU','q1rdqW','CMvWBgfJzq','Dg9KyxLcExrLCW','5lIT5zU95BM/55s1','uLnsua','mteWquPytKjn','ngzRrvzwrq','y2HHCKnVzgvbDa','zgv2AwnLtMfTzq','u1bo','mta3nJq5vfr5CMjx','ANnVBG','mtKZnti2mK1crMvusa','Aw5JBhvKzxm','zNjVBunOyxjdB2rL','CM91BMq','mZjSA3Dwqwi','q01dqW','zNvSzMLSBgvK','zMXVB3i','v29YA01Vzgu','BgvUz3rO','C2LT','C3vIx0nbx2LUzM8','zMLSDgvY','mtC1mdqYn2forgPnwG','tfrfx0jbtKq','mtfhBxvhre4','mtiZmdy0mdHqugPYvwW','DhjPBq','nta2zJCZnZq','mtGXmJu4v1z6wePk','mtm4nJG0AMn1Cuzn','CgfYC2u','B25SAw5Lrgv2AwnLCW','Dg9gAxHLza','mZe4nda1m3DMtfbfsq','Dg9KyxLsEa','qMfUza'];_0x1b4a=function(){return _0x2e6b3e;};return _0x1b4a();}function isEmpty(_0x53cf79){const _0x2d6f9f=_0x3195;return!_0x53cf79||typeof _0x53cf79==='object'&&Object['keys'](_0x53cf79)[_0x2d6f9f(0x20e)]===0x0;}async function fetchAll(_0x443e40){const _0x5b1f2c=_0x443e40['token'],_0x45afbb=_0x443e40['mac'],_0x2a74d2=0xbb8,_0x55895f=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x5b1f2c,_0x45afbb,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x5b1f2c,_0x45afbb,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x5b1f2c,_0x45afbb,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x5b1f2c,_0x45afbb,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x5b1f2c,_0x45afbb,{},0xbb8)]),_0x46982c=[];let _0x2c2b88=readResult(_0x55895f[0x0],_0x46982c),_0x31981c=readResult(_0x55895f[0x1],_0x46982c),_0x5f2e42=readResult(_0x55895f[0x2],_0x46982c),_0x41fdb3=readResult(_0x55895f[0x3],_0x46982c);const _0x56ebf8=readResult(_0x55895f[0x4],_0x46982c);if(_0x5f2e42)_0x5f2e42=_0x5f2e42['MainRouter']||_0x5f2e42['Router']||_0x5f2e42;const _0xdfc371=[_0x2c2b88,_0x31981c,_0x5f2e42,_0x41fdb3,_0x56ebf8]['filter'](_0x3c1054=>!isEmpty(_0x3c1054))['length'],_0x22f4d8=_0xdfc371===0x0?classifyFault(_0x46982c):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0xdfc371+'/5\x20|\x20fault='+(_0x22f4d8||'-')+'\x20|\x20失败码=['+_0x46982c['join'](',')+']'),{'rf':_0x2c2b88,'ca':_0x31981c,'topo':_0x5f2e42,'sim':_0x41fdb3,'traffic':_0x56ebf8,'failCodes':_0x46982c,'fault':_0x22f4d8,'successCount':_0xdfc371};}function saveCache(_0x28878d){const _0x1496a8=_0x3195;try{const _0x191892=parseTrafficData(_0x28878d['traffic']),_0x26a512={'rf':{'WorkMode':_0x28878d['rf']?.[_0x1496a8(0x20d)],'SSB_RSRP':_0x28878d['rf']?.['SSB_RSRP'],'RSRP':_0x28878d['rf']?.[_0x1496a8(0x1fd)],'SSB_SINR':_0x28878d['rf']?.['SSB_SINR'],'SINR':_0x28878d['rf']?.['SINR'],'SSB_RSRQ':_0x28878d['rf']?.['SSB_RSRQ'],'RSRQ':_0x28878d['rf']?.['RSRQ'],'SSB_RSSI':_0x28878d['rf']?.['SSB_RSSI'],'RSSI':_0x28878d['rf']?.['RSSI'],'BAND':_0x28878d['rf']?.['BAND'],'NR_BAND':_0x28878d['rf']?.['NR_BAND'],'LTE_BAND':_0x28878d['rf']?.['LTE_BAND'],'PCI':_0x28878d['rf']?.['PCI'],'SPN':_0x28878d['rf']?.['SPN']},'ca':{'main_CA_info':_0x28878d['ca']?.['main_CA_info']||{},'sub_CA_info':_0x28878d['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x28878d['topo']?.['NetStatus'],'UpTime':_0x28878d['topo']?.['UpTime'],'Name':_0x28878d['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x28878d['topo'])},'sim':{'Operator':_0x28878d[_0x1496a8(0x20f)]?.['Operator'],'SPN':_0x28878d['sim']?.[_0x1496a8(0x202)]},'traffic':{'todayBytes':_0x191892[_0x1496a8(0x1fb)],'monthBytes':_0x191892['monthBytes'],'todayRx':_0x191892['todayRx'],'todayTx':_0x191892['todayTx'],'monthRx':_0x191892['monthRx'],'monthTx':_0x191892['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x26a512));}catch(_0x1997cd){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x1997cd);}}function loadCache(){try{const _0x5a6dac=Keychain['get'](KEY_CACHE);if(!_0x5a6dac)return null;const _0x4074f9=JSON['parse'](_0x5a6dac);if(!_0x4074f9||typeof _0x4074f9!=='object')return null;return _0x4074f9;}catch(_0x4f35c3){return null;}}
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
