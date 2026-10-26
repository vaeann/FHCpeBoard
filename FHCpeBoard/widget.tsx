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

const _0xcf483d=_0x5355;(function(_0x36e755,_0x422d8e){const _0x2699f5=_0x5355,_0x5986b4=_0x36e755();while(!![]){try{const _0x77a5=-parseInt(_0x2699f5(0xd1))/0x1*(-parseInt(_0x2699f5(0xe1))/0x2)+parseInt(_0x2699f5(0xc6))/0x3+parseInt(_0x2699f5(0xda))/0x4+-parseInt(_0x2699f5(0xc4))/0x5+parseInt(_0x2699f5(0xbd))/0x6*(-parseInt(_0x2699f5(0xd8))/0x7)+parseInt(_0x2699f5(0xcd))/0x8*(parseInt(_0x2699f5(0xc9))/0x9)+parseInt(_0x2699f5(0xd7))/0xa;if(_0x77a5===_0x422d8e)break;else _0x5986b4['push'](_0x5986b4['shift']());}catch(_0x4f86bd){_0x5986b4['push'](_0x5986b4['shift']());}}}(_0x2fde,0x83c95));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0xcf483d(0xce);function readKey(_0x5ce78d,_0x82a865){try{const _0x4abc28=Keychain['get'](_0x5ce78d);return _0x4abc28===null||_0x4abc28===undefined||_0x4abc28===''?_0x82a865:String(_0x4abc28)['trim']();}catch(_0x5be297){return _0x82a865;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x40d2e9){const _0x124dfe=_0xcf483d;try{if(_0x40d2e9['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x40d2e9[_0x124dfe(0xc5)])[_0x124dfe(0xe5)]());if(_0x40d2e9['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x40d2e9['mac'])['trim']()||DEFAULT_MAC);if(_0x40d2e9[_0x124dfe(0xbc)]!==undefined)Keychain[_0x124dfe(0xcf)](NAME_KEY,String(_0x40d2e9['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x1da7f0){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x1da7f0);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x357a5e,_0x378785){if(_0x357a5e===undefined||_0x357a5e===null||_0x357a5e==='')return _0x378785;const _0x3951ee=String(_0x357a5e)['trim']();return _0x3951ee==='-'||_0x3951ee==='undefined'?_0x378785:_0x3951ee;}function firstValid(_0x1875c4,_0x37f649){for(const _0xa280f of _0x1875c4){const _0x4a4459=getValidValue(_0xa280f,'');if(_0x4a4459)return _0x4a4459;}return _0x37f649;}function _0x5355(_0x3b2a4a,_0x2fdd37){const _0x2fdeff=_0x2fde();return _0x5355=function(_0x53550d,_0x4cefd6){_0x53550d=_0x53550d-0xb2;let _0x22478b=_0x2fdeff[_0x53550d];if(_0x5355['sLfEjI']===undefined){var _0xd4a71e=function(_0x5ce78d){const _0x82a865='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4abc28='',_0x5be297='';for(let _0x40d2e9=0x0,_0x1da7f0,_0x357a5e,_0x378785=0x0;_0x357a5e=_0x5ce78d['charAt'](_0x378785++);~_0x357a5e&&(_0x1da7f0=_0x40d2e9%0x4?_0x1da7f0*0x40+_0x357a5e:_0x357a5e,_0x40d2e9++%0x4)?_0x4abc28+=String['fromCharCode'](0xff&_0x1da7f0>>(-0x2*_0x40d2e9&0x6)):0x0){_0x357a5e=_0x82a865['indexOf'](_0x357a5e);}for(let _0x3951ee=0x0,_0x1875c4=_0x4abc28['length'];_0x3951ee<_0x1875c4;_0x3951ee++){_0x5be297+='%'+('00'+_0x4abc28['charCodeAt'](_0x3951ee)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5be297);};_0x5355['ymScok']=_0xd4a71e,_0x3b2a4a=arguments,_0x5355['sLfEjI']=!![];}const _0x138638=_0x2fdeff[0x0],_0x296e48=_0x53550d+_0x138638,_0x537ccd=_0x3b2a4a[_0x296e48];return!_0x537ccd?(_0x22478b=_0x5355['ymScok'](_0x22478b),_0x3b2a4a[_0x296e48]=_0x22478b):_0x22478b=_0x537ccd,_0x22478b;},_0x5355(_0x3b2a4a,_0x2fdd37);}function resolveOperator(_0x3940ba,_0x5268c9){const _0x16d55=getOperatorName(_0x5268c9&&_0x5268c9['Operator']||'',_0x5268c9&&_0x5268c9['SPN']||'');if(_0x16d55==='未知'&&_0x3940ba&&_0x3940ba['SPN'])return String(_0x3940ba['SPN']);return _0x16d55;}function formatUptime(_0x9f9ed9){const _0x36f2fc=_0xcf483d,_0x147cdd=parseInt(_0x9f9ed9||0x0)||0x0,_0x5972c2=Math[_0x36f2fc(0xc2)](_0x147cdd/0x15180),_0x57abb9=Math['floor'](_0x147cdd%0x15180/0xe10),_0x3dff29=Math['floor'](_0x147cdd%0xe10/0x3c),_0x1e6388=[];if(_0x5972c2>0x0)_0x1e6388['push'](_0x5972c2+'天');if(_0x57abb9>0x0||_0x5972c2>0x0)_0x1e6388['push'](_0x57abb9+'小时');return _0x1e6388[_0x36f2fc(0xe0)](_0x3dff29+'分'),_0x1e6388['join']('\x20');}function formatUptimeShort(_0x51c8b4){const _0x47ed21=parseInt(_0x51c8b4||0x0)||0x0,_0x3719b8=Math['floor'](_0x47ed21/0x15180),_0x2a8b1d=Math['floor'](_0x47ed21%0x15180/0xe10),_0x49740a=Math['floor'](_0x47ed21%0xe10/0x3c),_0x32513d=[];if(_0x3719b8>0x0)_0x32513d['push'](_0x3719b8+'天');if(_0x2a8b1d>0x0||_0x3719b8>0x0)_0x32513d['push'](_0x2a8b1d+'时');return _0x32513d['push'](_0x49740a+'分'),_0x32513d['join']('');}function trafficMbToBytes(_0x50dfa5){const _0x52f10c=parseFloat(_0x50dfa5||0x0);if(isNaN(_0x52f10c))return 0x0;return Math['round'](_0x52f10c*0x400*0x400);}function formatTraffic(_0x12ac9a){const _0x54a8e5=Number(_0x12ac9a||0x0);if(!isFinite(_0x54a8e5)||_0x54a8e5<=0x0)return'0M';const _0x60d4d1=0x400*0x400,_0x506664=0x400*_0x60d4d1;if(_0x54a8e5>=_0x506664)return(_0x54a8e5/_0x506664)['toFixed'](0x1)+'G';return(_0x54a8e5/_0x60d4d1)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x34a92c){const _0x29ec0e=_0xcf483d,_0x492fd5=Number(_0x34a92c||0x0);if(!isFinite(_0x492fd5)||_0x492fd5<=0x0)return'0';const _0x2130e7=0x400,_0x2fa498=0x400*_0x2130e7,_0x968bf2=0x400*_0x2fa498;if(_0x492fd5>=_0x968bf2){const _0x2217d4=_0x492fd5/_0x968bf2;return(_0x2217d4>=0x64?_0x2217d4['toFixed'](0x0):_0x2217d4[_0x29ec0e(0xb4)](0x1)['replace'](/\.0$/,''))+'G';}if(_0x492fd5>=_0x2fa498)return Math[_0x29ec0e(0xb6)](_0x492fd5/_0x2fa498)+'M';if(_0x492fd5>=_0x2130e7)return Math['round'](_0x492fd5/_0x2130e7)+'K';return String(Math['round'](_0x492fd5));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x2d5476){const _0x6ee704=_0xcf483d;if(!_0x2d5476)return ZERO_TRAFFIC;const _0x293f4b=_0x2d5476['day_rx_traffic']!==undefined||_0x2d5476[_0x6ee704(0xb5)]!==undefined||_0x2d5476['month_rx_traffic']!==undefined||_0x2d5476['month_tx_traffic']!==undefined;if(!_0x293f4b)return{'todayBytes':Number(_0x2d5476['todayBytes'])||0x0,'monthBytes':Number(_0x2d5476['monthBytes'])||0x0,'todayRx':Number(_0x2d5476['todayRx'])||0x0,'todayTx':Number(_0x2d5476['todayTx'])||0x0,'monthRx':Number(_0x2d5476[_0x6ee704(0xd3)])||0x0,'monthTx':Number(_0x2d5476['monthTx'])||0x0};const _0x42d5e=trafficMbToBytes(_0x2d5476['day_rx_traffic']),_0x34def6=trafficMbToBytes(_0x2d5476['day_tx_traffic']),_0x7d6fb1=trafficMbToBytes(_0x2d5476['month_rx_traffic']),_0x442bdc=trafficMbToBytes(_0x2d5476['month_tx_traffic']);return{'todayBytes':_0x42d5e+_0x34def6,'monthBytes':_0x7d6fb1+_0x442bdc,'todayRx':_0x42d5e,'todayTx':_0x34def6,'monthRx':_0x7d6fb1,'monthTx':_0x442bdc};}function trafficRxRatio(_0x276032,_0x407f78){const _0xd65c77=_0xcf483d,_0x387c7f=Number(_0x276032||0x0)+Number(_0x407f78||0x0);if(!isFinite(_0x387c7f)||_0x387c7f<=0x0)return 0.5;return Math['min'](0.94,Math[_0xd65c77(0xd0)](0.06,Number(_0x276032||0x0)/_0x387c7f));}function getOperatorName(_0xed1e9,_0xe7921e){const _0x101a2d=_0xcf483d;if(!_0xed1e9)return _0xe7921e||'未知';const _0x1ca2ca=String(_0xed1e9)['toUpperCase']();if(_0x1ca2ca['includes']('CMCC')||_0x1ca2ca==='中国移动'||_0x1ca2ca['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x1ca2ca['includes']('CUCC')||_0x1ca2ca==='中国联通'||_0x1ca2ca[_0x101a2d(0xdc)]('CHINA\x20UNICOM')||_0x1ca2ca[_0x101a2d(0xdc)]('UNICOM'))return'中国联通';if(_0x1ca2ca[_0x101a2d(0xdc)]('CTCC')||_0x1ca2ca==='CT'||_0x1ca2ca==='中国电信'||_0x1ca2ca['includes'](_0x101a2d(0xc7))||_0x1ca2ca['includes']('TELECOM'))return'中国电信';if(_0x1ca2ca[_0x101a2d(0xdc)]('CBN')||_0x1ca2ca==='中国广电'||_0x1ca2ca['includes']('CHINA\x20BROADCAST'))return _0x101a2d(0xbf);return _0xed1e9;}function getSignalColor(_0xfc3dbf,_0x2ff0b1){let _0xe89d86=parseInt(_0xfc3dbf);if(isNaN(_0xe89d86))_0xe89d86=-0x78;if(_0xe89d86>-0x59)return _0x2ff0b1['ok'];if(_0xe89d86>-0x63)return _0x2ff0b1['warn'];return _0x2ff0b1['bad'];}function getSinrColor(_0x1e67d2,_0x25f212){let _0x166f60=parseFloat(_0x1e67d2);if(isNaN(_0x166f60))_0x166f60=0x0;if(_0x166f60>0xf)return _0x25f212['ok'];if(_0x166f60>0x8)return _0x25f212['warn'];return _0x25f212['bad'];}function getAllBands(_0x1729e8,_0x5b2fde,_0x11f5e1){const _0x493e1b=_0xcf483d,_0x1009dd=[],_0x5245e6=_0x11f5e1?'N':'B',_0x228732=getValidValue(_0x1729e8?.['BAND']||_0x1729e8?.['NR_BAND']||_0x1729e8?.['LTE_BAND'],'');if(_0x228732)_0x1009dd['push'](_0x5245e6+_0x228732);for(const _0x464841 of _0x5b2fde?.[_0x493e1b(0xd9)]||[]){const _0x3332ef=String(_0x464841?.[_0x493e1b(0xe4)]||'');if(_0x3332ef&&_0x3332ef!=='-')_0x1009dd['push'](_0x5245e6+_0x3332ef);}if(_0x1009dd['length']===0x0)_0x1009dd['push'](_0x11f5e1?_0x493e1b(0xca):'B3');return _0x1009dd;}function getCaBadgeText(_0xf7007c,_0x3ba0fe,_0x24c9ce){const _0x52ecf2=_0xcf483d,_0x1348de=(_0x3ba0fe?_0x52ecf2(0xde):'4G\x20')+_0x24c9ce;if(!_0x3ba0fe)return _0x1348de;const _0x504f0e=0x1+(_0xf7007c&&_0xf7007c[_0x52ecf2(0xd9)]||[])['length'];if(_0x504f0e>=0x4)return'5GA+';if(_0x504f0e===0x3)return'5GA';if(_0x504f0e===0x2)return'5G+';return _0x1348de;}function getCarrierCountText(_0x185f5d){const _0x3e91bd=_0xcf483d,_0x336872=(_0x185f5d&&_0x185f5d['sub_CA_info']||[])['length'];if(_0x336872===0x0)return'单载波';if(_0x336872===0x1)return'双载波';if(_0x336872===0x2)return'三载波';return _0x3e91bd(0xd6);}function getNetworkModeText(_0x165fdf,_0x342203,_0x38485a){const _0x30d2a0=_0xcf483d,_0x2e36d7=String(_0x38485a||'')['toUpperCase']();if(!_0x342203){if(!_0x2e36d7||_0x2e36d7==='4G'||_0x2e36d7==='LTE')return'4G\x20LTE';return'4G\x20'+_0x2e36d7;}const _0x420017=0x1+(_0x165fdf&&_0x165fdf[_0x30d2a0(0xd9)]||[])['length'];if(_0x420017>=0x4)return _0x30d2a0(0xc8);if(_0x420017===0x3)return'5GA';if(_0x420017===0x2)return'5G+';return _0x2e36d7?'5G\x20'+_0x2e36d7:'5G\x20SA';}function rsrpToPercent(_0xa0b10e){let _0x1c2fa4=parseInt(_0xa0b10e);if(isNaN(_0x1c2fa4))_0x1c2fa4=-0x78;const _0x2c5ab3=Math['min'](-0x46,Math['max'](-0x78,_0x1c2fa4)),_0x961664=(_0x2c5ab3+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x961664*0x5a));}function sinrToPercent(_0x2a0f70){let _0x3376e9=parseFloat(_0x2a0f70);if(isNaN(_0x3376e9))_0x3376e9=0x0;return Math['min'](0x64,Math['max'](0x0,_0x3376e9/0x19*0x64));}function resolveDeviceName(_0x2f6dd2,_0x4f7905){const _0x295a93=_0xcf483d,_0x543e79=_0x2f6dd2&&_0x2f6dd2['Name']!=null?String(_0x2f6dd2['Name'])['trim']():'';if(!_0x543e79)return _0x4f7905;if(_0x543e79==='--'||_0x543e79===_0x295a93(0xb8)||_0x543e79===_0x295a93(0xdd)||_0x543e79==='0')return _0x4f7905;return _0x543e79;}function rsrpToBars(_0x268608){const _0x822c52=parseInt(_0x268608);if(isNaN(_0x822c52))return 0x0;if(_0x822c52>=-0x55)return 0x4;if(_0x822c52>=-0x5f)return 0x3;if(_0x822c52>=-0x69)return 0x2;if(_0x822c52>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x4082f2){const _0x16dc58=_0xcf483d;if(!_0x4082f2)return 0x0;if(typeof _0x4082f2['onlineDevices']==='number')return _0x4082f2['onlineDevices'];const _0x23e146=_0x4082f2['MainBaseInfo'];if(!Array['isArray'](_0x23e146))return 0x0;return _0x23e146['filter'](_0xd47c05=>_0xd47c05&&String(_0xd47c05[_0x16dc58(0xdb)])==='1')[_0x16dc58(0xbe)];}function urlDecode(_0xbec909){const _0x157c8c=_0xcf483d,_0x421606=[];for(let _0x3383f8=0x0;_0x3383f8<_0xbec909['length'];_0x3383f8+=0x2)_0x421606['push'](parseInt(_0xbec909['substr'](_0x3383f8,0x2),0x10));let _0x393354='';for(let _0x13d529=0x0;_0x13d529<_0x421606['length'];){const _0x2c7672=_0x421606[_0x13d529];if(_0x2c7672<0x80)_0x393354+=String['fromCharCode'](_0x2c7672),_0x13d529++;else{if(_0x2c7672>>0x5===0x6)_0x393354+=String[_0x157c8c(0xb7)]((_0x2c7672&0x1f)<<0x6|_0x421606[_0x13d529+0x1]&0x3f),_0x13d529+=0x2;else _0x2c7672>>0x4===0xe?(_0x393354+=String[_0x157c8c(0xb7)]((_0x2c7672&0xf)<<0xc|(_0x421606[_0x13d529+0x1]&0x3f)<<0x6|_0x421606[_0x13d529+0x2]&0x3f),_0x13d529+=0x3):(_0x393354+=String['fromCharCode']((_0x2c7672&0x7)<<0x12|(_0x421606[_0x13d529+0x1]&0x3f)<<0xc|(_0x421606[_0x13d529+0x2]&0x3f)<<0x6|_0x421606[_0x13d529+0x3]),_0x13d529+=0x4);}}return _0x393354;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0xcf483d(0xdf),'device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':_0xcf483d(0xcc)};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x48e68c='0123456789ABCDEF';let _0x54c216='';for(let _0x550843=0x0;_0x550843<0x20;_0x550843++)_0x54c216+=_0x48e68c[Math['floor'](Math['random']()*0x10)];return _0x54c216;}function generateSequenceId(_0x9bd3da){const _0x2e32f0=_0xcf483d;return _0x9bd3da+'_'+Date[_0x2e32f0(0xc3)]()[_0x2e32f0(0xb3)](0x24);}function classifyFault(_0x1e216e){if(!_0x1e216e||_0x1e216e['length']===0x0)return null;if(_0x1e216e['some'](_0x5dd16c=>AUTH_ERROR_CODES['indexOf'](_0x5dd16c)>=0x0))return'auth';if(_0x1e216e['some'](_0xe46f45=>DEVICE_ERROR_CODES['indexOf'](_0xe46f45)>=0x0))return'device';return'network';}function _0x2fde(){const _0x31c0f1=['DhjPBq','CNnWugfYyw0','Dg9tDhjPBMC','Dg9gAxHLza','zgf5x3r4x3rYywzMAwm','CM91BMq','zNjVBunOyxjdB2rL','Dw5KzwzPBMvK','u1ncx1jtu0K','u1ncx1jtuLa','DMfSDwu','zgv2AwnLtMfTzq','mtGYnJa2ngnSDfDctq','BgvUz3rO','5lIT5zU95BM/55s1','qKfora','C2LNBMfS','zMXVB3i','BM93','mZqZnJm2nu1WEwflsW','Dg9Rzw4','mtmYnJKYnfDAywvprW','q0HjtKeGvevmrunptq','nuDbkW','mJC5AwfgBMrj','tJC4','ue9tva','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','mtiXmdK2B2HmAhfX','54o954gRq1bf','C2v0','Bwf4','mtiXy0jtt0Tr','r0vux1jgx1njr05btf9jtKzp','Bw9UDgHsEa','Dg9WBW','vxbuAw1L','5zUB6l295RoI','nZK5mti2mhrxD2j5wa','mJfcEgjHAfK','C3vIx0nbx2LUzM8','ntCXmdG4rwT5v0Tm','tMv0u3rHDhvZ','Aw5JBhvKzxm','BNvSBa','nuCG','77Yb5Qoa5P+L572r57UC','ChvZAa','ndCZoeTgAgfbuW','uLntsq','C3rYAw5NAwz5','qMfUza'];_0x2fde=function(){return _0x31c0f1;};return _0x2fde();}function readResult(_0x24e7d2,_0x2f4d87){const _0x4d6b48=_0xcf483d;if(!_0x24e7d2||_0x24e7d2['status']!=='fulfilled'||!_0x24e7d2['value'])return _0x2f4d87['push'](NET_ERROR_CODE),null;const _0x31422e=_0x24e7d2[_0x4d6b48(0xbb)];if(_0x31422e['resultCode']===0x0)return _0x31422e;return _0x2f4d87['push'](typeof _0x31422e['resultCode']==='number'?_0x31422e['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x1be471,_0x1af516,_0x45bac2,_0x53917c,_0x5eaa4c){const _0x216670=_0xcf483d;if(!_0x45bac2)return null;const _0xeb3f76={'CmdType':_0x1be471,..._0x1af516};if(!_0xeb3f76['SequenceId'])_0xeb3f76['SequenceId']=generateSequenceId(_0x1be471);const _0x519c34={'appVersion':urlDecode('322e322e3531'),'mac':_0x53917c,'timeout':0x3,'token':_0x45bac2,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x216670(0xe3)](_0xeb3f76)}),'operatorId':getOperatorId()},_0x1cb19c=new AbortController(),_0x3f939a=setTimeout(()=>{try{_0x1cb19c['abort']();}catch(_0x389e38){}},_0x5eaa4c);try{const _0x3b08f8=await fetch(REMOTE_URL,{'method':_0x216670(0xcb),'headers':{'Content-Type':'application/json','token':_0x45bac2},'body':JSON['stringify'](_0x519c34),'signal':_0x1cb19c[_0x216670(0xc1)]}),_0x3217c7=await _0x3b08f8['json']();if(_0x3217c7&&_0x3217c7[_0x216670(0xb2)]){const _0x5cecdb=JSON['parse'](_0x3217c7['rspParam']);if(_0x5cecdb['Result']===0x0&&_0x5cecdb['return_Parameter']){const _0x358073=String(_0x5cecdb['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x4ae6bb=JSON['parse'](decodeBase64Utf8(_0x358073));return{..._0x4ae6bb,'resultCode':0x0};}}return _0x3217c7||{'resultCode':NET_ERROR_CODE};}catch(_0x52fb86){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3f939a);}}function decodeBase64Utf8(_0x36c69e){const _0x5c3268=_0xcf483d,_0x53d696=atob(_0x36c69e);try{const _0xaeef76=new Uint8Array(_0x53d696[_0x5c3268(0xbe)]);for(let _0x4294ac=0x0;_0x4294ac<_0x53d696[_0x5c3268(0xbe)];_0x4294ac++)_0xaeef76[_0x4294ac]=_0x53d696['charCodeAt'](_0x4294ac);return new TextDecoder('utf-8')['decode'](_0xaeef76);}catch(_0x283702){return _0x53d696;}}async function fetchCpeApi(_0x45ad40,_0xc66e3e,_0x51f95a,_0x262f69={},_0x280706=0xbb8){if(!_0xc66e3e)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x45ad40,_0x262f69,_0xc66e3e,_0x51f95a,_0x280706);}function isEmpty(_0x5733bd){const _0x3dc8aa=_0xcf483d;return!_0x5733bd||typeof _0x5733bd==='object'&&Object['keys'](_0x5733bd)[_0x3dc8aa(0xbe)]===0x0;}async function fetchAll(_0x54e9f1){const _0x5a07c2=_0xcf483d,_0x2871c4=_0x54e9f1['token'],_0x427cb6=_0x54e9f1['mac'],_0x2e1d75=0xbb8,_0x1ae4c7=await Promise['allSettled']([fetchCpeApi(_0x5a07c2(0xd2),_0x2871c4,_0x427cb6,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x2871c4,_0x427cb6,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x2871c4,_0x427cb6,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x2871c4,_0x427cb6,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x2871c4,_0x427cb6,{},0xbb8)]),_0x524386=[];let _0x2cafbb=readResult(_0x1ae4c7[0x0],_0x524386),_0x2ca7b2=readResult(_0x1ae4c7[0x1],_0x524386),_0x56d9a8=readResult(_0x1ae4c7[0x2],_0x524386),_0xa782b0=readResult(_0x1ae4c7[0x3],_0x524386);const _0x32baf4=readResult(_0x1ae4c7[0x4],_0x524386);if(_0x56d9a8)_0x56d9a8=_0x56d9a8['MainRouter']||_0x56d9a8['Router']||_0x56d9a8;const _0x5c6d89=[_0x2cafbb,_0x2ca7b2,_0x56d9a8,_0xa782b0,_0x32baf4]['filter'](_0x41fa3f=>!isEmpty(_0x41fa3f))['length'],_0x5189be=_0x5c6d89===0x0?classifyFault(_0x524386):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x5c6d89+'/5\x20|\x20fault='+(_0x5189be||'-')+'\x20|\x20失败码=['+_0x524386['join'](',')+']'),{'rf':_0x2cafbb,'ca':_0x2ca7b2,'topo':_0x56d9a8,'sim':_0xa782b0,'traffic':_0x32baf4,'failCodes':_0x524386,'fault':_0x5189be,'successCount':_0x5c6d89};}function saveCache(_0x2314c1){const _0x1d998f=_0xcf483d;try{const _0x17b6f1=parseTrafficData(_0x2314c1['traffic']),_0x42a577={'rf':{'WorkMode':_0x2314c1['rf']?.['WorkMode'],'SSB_RSRP':_0x2314c1['rf']?.[_0x1d998f(0xba)],'RSRP':_0x2314c1['rf']?.['RSRP'],'SSB_SINR':_0x2314c1['rf']?.['SSB_SINR'],'SINR':_0x2314c1['rf']?.['SINR'],'SSB_RSRQ':_0x2314c1['rf']?.['SSB_RSRQ'],'RSRQ':_0x2314c1['rf']?.['RSRQ'],'SSB_RSSI':_0x2314c1['rf']?.[_0x1d998f(0xb9)],'RSSI':_0x2314c1['rf']?.[_0x1d998f(0xe2)],'BAND':_0x2314c1['rf']?.[_0x1d998f(0xc0)],'NR_BAND':_0x2314c1['rf']?.['NR_BAND'],'LTE_BAND':_0x2314c1['rf']?.['LTE_BAND'],'PCI':_0x2314c1['rf']?.['PCI'],'SPN':_0x2314c1['rf']?.['SPN']},'ca':{'main_CA_info':_0x2314c1['ca']?.['main_CA_info']||{},'sub_CA_info':_0x2314c1['ca']?.[_0x1d998f(0xd9)]||[]},'topo':{'NetStatus':_0x2314c1['topo']?.[_0x1d998f(0xdb)],'UpTime':_0x2314c1['topo']?.[_0x1d998f(0xd5)],'Name':_0x2314c1['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x2314c1[_0x1d998f(0xd4)])},'sim':{'Operator':_0x2314c1['sim']?.['Operator'],'SPN':_0x2314c1['sim']?.['SPN']},'traffic':{'todayBytes':_0x17b6f1['todayBytes'],'monthBytes':_0x17b6f1['monthBytes'],'todayRx':_0x17b6f1['todayRx'],'todayTx':_0x17b6f1['todayTx'],'monthRx':_0x17b6f1['monthRx'],'monthTx':_0x17b6f1['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x42a577));}catch(_0xb50950){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0xb50950);}}function loadCache(){try{const _0xd2e178=Keychain['get'](KEY_CACHE);if(!_0xd2e178)return null;const _0x5926b4=JSON['parse'](_0xd2e178);if(!_0x5926b4||typeof _0x5926b4!=='object')return null;return _0x5926b4;}catch(_0x52709b){return null;}}
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
