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

(function(_0x36623e,_0x513688){const _0xe324dd=_0x55e3,_0x44cbb5=_0x36623e();while(!![]){try{const _0x55246d=-parseInt(_0xe324dd(0x116))/0x1*(-parseInt(_0xe324dd(0x121))/0x2)+parseInt(_0xe324dd(0xff))/0x3+parseInt(_0xe324dd(0xf8))/0x4*(-parseInt(_0xe324dd(0x110))/0x5)+-parseInt(_0xe324dd(0x10a))/0x6*(parseInt(_0xe324dd(0xf7))/0x7)+parseInt(_0xe324dd(0x119))/0x8*(-parseInt(_0xe324dd(0x111))/0x9)+-parseInt(_0xe324dd(0xf9))/0xa*(-parseInt(_0xe324dd(0x104))/0xb)+parseInt(_0xe324dd(0x11a))/0xc;if(_0x55246d===_0x513688)break;else _0x44cbb5['push'](_0x44cbb5['shift']());}catch(_0x333bdd){_0x44cbb5['push'](_0x44cbb5['shift']());}}}(_0x8c5f,0x9c334));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x47f38c,_0x157ee9){const _0x1abc96=_0x55e3;try{const _0x3787dc=Keychain['get'](_0x47f38c);return _0x3787dc===null||_0x3787dc===undefined||_0x3787dc===''?_0x157ee9:String(_0x3787dc)[_0x1abc96(0x100)]();}catch(_0x20f818){return _0x157ee9;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x5c8397){const _0x171591=_0x55e3;try{if(_0x5c8397['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x5c8397['token'])['trim']());if(_0x5c8397[_0x171591(0x10e)]!==undefined)Keychain['set'](MAC_KEY,String(_0x5c8397['mac'])['trim']()||DEFAULT_MAC);if(_0x5c8397['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x5c8397['deviceName'])[_0x171591(0x100)]()||DEFAULT_NAME);}catch(_0x2c5fa0){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x2c5fa0);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x1af9c2,_0x4f6132){if(_0x1af9c2===undefined||_0x1af9c2===null||_0x1af9c2==='')return _0x4f6132;const _0xef4969=String(_0x1af9c2)['trim']();return _0xef4969==='-'||_0xef4969==='undefined'?_0x4f6132:_0xef4969;}function firstValid(_0x599f05,_0x5e00ae){for(const _0x3aa520 of _0x599f05){const _0xecadb8=getValidValue(_0x3aa520,'');if(_0xecadb8)return _0xecadb8;}return _0x5e00ae;}function resolveOperator(_0x3fe53c,_0x392c24){const _0xddd726=_0x55e3,_0x3a5e15=getOperatorName(_0x392c24&&_0x392c24['Operator']||'',_0x392c24&&_0x392c24['SPN']||'');if(_0x3a5e15==='未知'&&_0x3fe53c&&_0x3fe53c[_0xddd726(0x106)])return String(_0x3fe53c['SPN']);return _0x3a5e15;}function formatUptime(_0x3e55e4){const _0xadf0c5=parseInt(_0x3e55e4||0x0)||0x0,_0xc21e11=Math['floor'](_0xadf0c5/0x15180),_0x44e3cf=Math['floor'](_0xadf0c5%0x15180/0xe10),_0x367d89=Math['floor'](_0xadf0c5%0xe10/0x3c),_0x1def5b=[];if(_0xc21e11>0x0)_0x1def5b['push'](_0xc21e11+'天');if(_0x44e3cf>0x0||_0xc21e11>0x0)_0x1def5b['push'](_0x44e3cf+'小时');return _0x1def5b['push'](_0x367d89+'分'),_0x1def5b['join']('\x20');}function formatUptimeShort(_0x4248fb){const _0x10bf41=parseInt(_0x4248fb||0x0)||0x0,_0x1efee4=Math['floor'](_0x10bf41/0x15180),_0x29beee=Math['floor'](_0x10bf41%0x15180/0xe10),_0x66f4b1=Math['floor'](_0x10bf41%0xe10/0x3c),_0x120487=[];if(_0x1efee4>0x0)_0x120487['push'](_0x1efee4+'天');if(_0x29beee>0x0||_0x1efee4>0x0)_0x120487['push'](_0x29beee+'时');return _0x120487['push'](_0x66f4b1+'分'),_0x120487['join']('');}function trafficMbToBytes(_0x589a2f){const _0x4f49a5=parseFloat(_0x589a2f||0x0);if(isNaN(_0x4f49a5))return 0x0;return Math['round'](_0x4f49a5*0x400*0x400);}function formatTraffic(_0x48b38a){const _0x307694=Number(_0x48b38a||0x0);if(!isFinite(_0x307694)||_0x307694<=0x0)return'0M';const _0x194206=0x400*0x400,_0x4bf467=0x400*_0x194206;if(_0x307694>=_0x4bf467)return(_0x307694/_0x4bf467)['toFixed'](0x1)+'G';return(_0x307694/_0x194206)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x13046f){const _0x510c37=Number(_0x13046f||0x0);if(!isFinite(_0x510c37)||_0x510c37<=0x0)return'0';const _0x31a874=0x400,_0x4336fc=0x400*_0x31a874,_0x47a270=0x400*_0x4336fc;if(_0x510c37>=_0x47a270){const _0x25d053=_0x510c37/_0x47a270;return(_0x25d053>=0x64?_0x25d053['toFixed'](0x0):_0x25d053['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x510c37>=_0x4336fc)return Math['round'](_0x510c37/_0x4336fc)+'M';if(_0x510c37>=_0x31a874)return Math['round'](_0x510c37/_0x31a874)+'K';return String(Math['round'](_0x510c37));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x25a759){const _0x394093=_0x55e3;if(!_0x25a759)return ZERO_TRAFFIC;const _0x44fe41=_0x25a759['day_rx_traffic']!==undefined||_0x25a759['day_tx_traffic']!==undefined||_0x25a759['month_rx_traffic']!==undefined||_0x25a759['month_tx_traffic']!==undefined;if(!_0x44fe41)return{'todayBytes':Number(_0x25a759['todayBytes'])||0x0,'monthBytes':Number(_0x25a759['monthBytes'])||0x0,'todayRx':Number(_0x25a759['todayRx'])||0x0,'todayTx':Number(_0x25a759['todayTx'])||0x0,'monthRx':Number(_0x25a759['monthRx'])||0x0,'monthTx':Number(_0x25a759['monthTx'])||0x0};const _0x2d4e12=trafficMbToBytes(_0x25a759['day_rx_traffic']),_0x444486=trafficMbToBytes(_0x25a759[_0x394093(0x118)]),_0x89cb1d=trafficMbToBytes(_0x25a759[_0x394093(0x122)]),_0x2186ab=trafficMbToBytes(_0x25a759['month_tx_traffic']);return{'todayBytes':_0x2d4e12+_0x444486,'monthBytes':_0x89cb1d+_0x2186ab,'todayRx':_0x2d4e12,'todayTx':_0x444486,'monthRx':_0x89cb1d,'monthTx':_0x2186ab};}function trafficRxRatio(_0x51efe1,_0x19942e){const _0x40779e=Number(_0x51efe1||0x0)+Number(_0x19942e||0x0);if(!isFinite(_0x40779e)||_0x40779e<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x51efe1||0x0)/_0x40779e));}function getOperatorName(_0x4a1fd8,_0x45c98b){const _0x35d64a=_0x55e3;if(!_0x4a1fd8)return _0x45c98b||'未知';const _0xdf3d1=String(_0x4a1fd8)['toUpperCase']();if(_0xdf3d1['includes']('CMCC')||_0xdf3d1==='中国移动'||_0xdf3d1['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0xdf3d1['includes']('CUCC')||_0xdf3d1==='中国联通'||_0xdf3d1[_0x35d64a(0x101)]('CHINA\x20UNICOM')||_0xdf3d1['includes']('UNICOM'))return _0x35d64a(0xfb);if(_0xdf3d1['includes']('CTCC')||_0xdf3d1==='CT'||_0xdf3d1==='中国电信'||_0xdf3d1['includes'](_0x35d64a(0x11f))||_0xdf3d1['includes']('TELECOM'))return'中国电信';if(_0xdf3d1['includes']('CBN')||_0xdf3d1==='中国广电'||_0xdf3d1['includes']('CHINA\x20BROADCAST'))return _0x35d64a(0x102);return _0x4a1fd8;}function _0x55e3(_0x52a2ee,_0x3fca86){const _0x8c5f2b=_0x8c5f();return _0x55e3=function(_0x55e363,_0x420e85){_0x55e363=_0x55e363-0xf7;let _0x531613=_0x8c5f2b[_0x55e363];if(_0x55e3['wgxisg']===undefined){var _0x1d5585=function(_0x47f38c){const _0x157ee9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3787dc='',_0x20f818='';for(let _0x5c8397=0x0,_0x2c5fa0,_0x1af9c2,_0x4f6132=0x0;_0x1af9c2=_0x47f38c['charAt'](_0x4f6132++);~_0x1af9c2&&(_0x2c5fa0=_0x5c8397%0x4?_0x2c5fa0*0x40+_0x1af9c2:_0x1af9c2,_0x5c8397++%0x4)?_0x3787dc+=String['fromCharCode'](0xff&_0x2c5fa0>>(-0x2*_0x5c8397&0x6)):0x0){_0x1af9c2=_0x157ee9['indexOf'](_0x1af9c2);}for(let _0xef4969=0x0,_0x599f05=_0x3787dc['length'];_0xef4969<_0x599f05;_0xef4969++){_0x20f818+='%'+('00'+_0x3787dc['charCodeAt'](_0xef4969)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x20f818);};_0x55e3['fMdVTp']=_0x1d5585,_0x52a2ee=arguments,_0x55e3['wgxisg']=!![];}const _0x55d6ce=_0x8c5f2b[0x0],_0x13d6ca=_0x55e363+_0x55d6ce,_0x3fb3dd=_0x52a2ee[_0x13d6ca];return!_0x3fb3dd?(_0x531613=_0x55e3['fMdVTp'](_0x531613),_0x52a2ee[_0x13d6ca]=_0x531613):_0x531613=_0x3fb3dd,_0x531613;},_0x55e3(_0x52a2ee,_0x3fca86);}function getSignalColor(_0x53b753,_0xccfa73){let _0x43f8b2=parseInt(_0x53b753);if(isNaN(_0x43f8b2))_0x43f8b2=-0x78;if(_0x43f8b2>-0x59)return _0xccfa73['ok'];if(_0x43f8b2>-0x63)return _0xccfa73['warn'];return _0xccfa73['bad'];}function getSinrColor(_0x393506,_0x5416c5){const _0x1966f8=_0x55e3;let _0x2df16e=parseFloat(_0x393506);if(isNaN(_0x2df16e))_0x2df16e=0x0;if(_0x2df16e>0xf)return _0x5416c5['ok'];if(_0x2df16e>0x8)return _0x5416c5['warn'];return _0x5416c5[_0x1966f8(0x120)];}function getAllBands(_0x1abec7,_0x2d414d,_0x5d3b23){const _0xe10783=_0x55e3,_0x3fe375=[],_0x51e9ed=_0x5d3b23?'N':'B',_0x2d3d8c=getValidValue(_0x1abec7?.['BAND']||_0x1abec7?.['NR_BAND']||_0x1abec7?.[_0xe10783(0x115)],'');if(_0x2d3d8c)_0x3fe375['push'](_0x51e9ed+_0x2d3d8c);for(const _0x476572 of _0x2d414d?.['sub_CA_info']||[]){const _0x5ceb1c=String(_0x476572?.[_0xe10783(0x10c)]||'');if(_0x5ceb1c&&_0x5ceb1c!=='-')_0x3fe375['push'](_0x51e9ed+_0x5ceb1c);}if(_0x3fe375['length']===0x0)_0x3fe375['push'](_0x5d3b23?'N78':'B3');return _0x3fe375;}function getCaBadgeText(_0x3ace7b,_0x46ac65,_0x171780){const _0x38ffcc=(_0x46ac65?'5G\x20':'4G\x20')+_0x171780;if(!_0x46ac65)return _0x38ffcc;const _0x466bac=0x1+(_0x3ace7b&&_0x3ace7b['sub_CA_info']||[])['length'];if(_0x466bac>=0x4)return'5GA+';if(_0x466bac===0x3)return'5GA';if(_0x466bac===0x2)return'5G+';return _0x38ffcc;}function getCarrierCountText(_0x317e2c){const _0x31ba9f=_0x55e3,_0x48a398=(_0x317e2c&&_0x317e2c['sub_CA_info']||[])['length'];if(_0x48a398===0x0)return'单载波';if(_0x48a398===0x1)return _0x31ba9f(0x109);if(_0x48a398===0x2)return'三载波';return _0x31ba9f(0x10f);}function getNetworkModeText(_0x9fdb4c,_0x2461d3,_0x3f8389){const _0x2b32f8=_0x55e3,_0x22bcae=String(_0x3f8389||'')['toUpperCase']();if(!_0x2461d3){if(!_0x22bcae||_0x22bcae==='4G'||_0x22bcae===_0x2b32f8(0xfc))return'4G\x20LTE';return'4G\x20'+_0x22bcae;}const _0x35dbc0=0x1+(_0x9fdb4c&&_0x9fdb4c['sub_CA_info']||[])['length'];if(_0x35dbc0>=0x4)return'5GA+';if(_0x35dbc0===0x3)return _0x2b32f8(0x10d);if(_0x35dbc0===0x2)return'5G+';return _0x22bcae?_0x2b32f8(0x123)+_0x22bcae:'5G\x20SA';}function rsrpToPercent(_0x3641d3){let _0x1da8b3=parseInt(_0x3641d3);if(isNaN(_0x1da8b3))_0x1da8b3=-0x78;const _0x510dee=Math['min'](-0x46,Math['max'](-0x78,_0x1da8b3)),_0x4a72ee=(_0x510dee+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x4a72ee*0x5a));}function sinrToPercent(_0x4ce078){let _0xc1fd19=parseFloat(_0x4ce078);if(isNaN(_0xc1fd19))_0xc1fd19=0x0;return Math['min'](0x64,Math['max'](0x0,_0xc1fd19/0x19*0x64));}function resolveDeviceName(_0x396c14,_0x1a42c7){const _0x11209b=_0x396c14&&_0x396c14['Name']!=null?String(_0x396c14['Name'])['trim']():'';if(!_0x11209b)return _0x1a42c7;if(_0x11209b==='--'||_0x11209b==='undefined'||_0x11209b==='null'||_0x11209b==='0')return _0x1a42c7;return _0x11209b;}function rsrpToBars(_0x49abb4){const _0x5820d5=parseInt(_0x49abb4);if(isNaN(_0x5820d5))return 0x0;if(_0x5820d5>=-0x55)return 0x4;if(_0x5820d5>=-0x5f)return 0x3;if(_0x5820d5>=-0x69)return 0x2;if(_0x5820d5>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x108ee3){if(!_0x108ee3)return 0x0;if(typeof _0x108ee3['onlineDevices']==='number')return _0x108ee3['onlineDevices'];const _0x8da6fb=_0x108ee3['MainBaseInfo'];if(!Array['isArray'](_0x8da6fb))return 0x0;return _0x8da6fb['filter'](_0x9d2e70=>_0x9d2e70&&String(_0x9d2e70['NetStatus'])==='1')['length'];}function urlDecode(_0x17c85a){const _0x349f84=[];for(let _0x2cfbf5=0x0;_0x2cfbf5<_0x17c85a['length'];_0x2cfbf5+=0x2)_0x349f84['push'](parseInt(_0x17c85a['substr'](_0x2cfbf5,0x2),0x10));let _0x3ab567='';for(let _0x1a5e1b=0x0;_0x1a5e1b<_0x349f84['length'];){const _0x18e7fa=_0x349f84[_0x1a5e1b];if(_0x18e7fa<0x80)_0x3ab567+=String['fromCharCode'](_0x18e7fa),_0x1a5e1b++;else{if(_0x18e7fa>>0x5===0x6)_0x3ab567+=String['fromCharCode']((_0x18e7fa&0x1f)<<0x6|_0x349f84[_0x1a5e1b+0x1]&0x3f),_0x1a5e1b+=0x2;else _0x18e7fa>>0x4===0xe?(_0x3ab567+=String['fromCharCode']((_0x18e7fa&0xf)<<0xc|(_0x349f84[_0x1a5e1b+0x1]&0x3f)<<0x6|_0x349f84[_0x1a5e1b+0x2]&0x3f),_0x1a5e1b+=0x3):(_0x3ab567+=String['fromCharCode']((_0x18e7fa&0x7)<<0x12|(_0x349f84[_0x1a5e1b+0x1]&0x3f)<<0xc|(_0x349f84[_0x1a5e1b+0x2]&0x3f)<<0x6|_0x349f84[_0x1a5e1b+0x3]),_0x1a5e1b+=0x4);}}return _0x3ab567;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x4b4897=_0x55e3,_0x44be91='0123456789ABCDEF';let _0x565256='';for(let _0x435bb6=0x0;_0x435bb6<0x20;_0x435bb6++)_0x565256+=_0x44be91[Math[_0x4b4897(0x10b)](Math['random']()*0x10)];return _0x565256;}function generateSequenceId(_0x1ecd1a){return _0x1ecd1a+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x3cc7fb){const _0x2c9777=_0x55e3;if(!_0x3cc7fb||_0x3cc7fb['length']===0x0)return null;if(_0x3cc7fb['some'](_0x5d5cb7=>AUTH_ERROR_CODES[_0x2c9777(0xfd)](_0x5d5cb7)>=0x0))return _0x2c9777(0x103);if(_0x3cc7fb['some'](_0x4778a8=>DEVICE_ERROR_CODES[_0x2c9777(0xfd)](_0x4778a8)>=0x0))return'device';return'network';}function readResult(_0x28dda3,_0x45a225){const _0x327f33=_0x55e3;if(!_0x28dda3||_0x28dda3[_0x327f33(0x11c)]!=='fulfilled'||!_0x28dda3['value'])return _0x45a225['push'](NET_ERROR_CODE),null;const _0x143865=_0x28dda3['value'];if(_0x143865[_0x327f33(0x112)]===0x0)return _0x143865;return _0x45a225['push'](typeof _0x143865['resultCode']==='number'?_0x143865['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3257c0,_0x2ce17e,_0xe065f8,_0x563c3f,_0x246166){const _0x501c87=_0x55e3;if(!_0xe065f8)return null;const _0x436762={'CmdType':_0x3257c0,..._0x2ce17e};if(!_0x436762['SequenceId'])_0x436762['SequenceId']=generateSequenceId(_0x3257c0);const _0x2785b4={'appVersion':urlDecode('322e322e3531'),'mac':_0x563c3f,'timeout':0x3,'token':_0xe065f8,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x436762)}),'operatorId':getOperatorId()},_0x53fe2c=new AbortController(),_0x5813fc=setTimeout(()=>{try{_0x53fe2c['abort']();}catch(_0x5679f4){}},_0x246166);try{const _0x1f2be9=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':_0x501c87(0x117),'token':_0xe065f8},'body':JSON['stringify'](_0x2785b4),'signal':_0x53fe2c['signal']}),_0x5b803b=await _0x1f2be9['json']();if(_0x5b803b&&_0x5b803b['rspParam']){const _0x39ee3c=JSON[_0x501c87(0x114)](_0x5b803b['rspParam']);if(_0x39ee3c['Result']===0x0&&_0x39ee3c['return_Parameter']){const _0x5e5eaa=String(_0x39ee3c['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x5a5999=JSON['parse'](decodeBase64Utf8(_0x5e5eaa));return{..._0x5a5999,'resultCode':0x0};}}return _0x5b803b||{'resultCode':NET_ERROR_CODE};}catch(_0x3b7e47){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x5813fc);}}function decodeBase64Utf8(_0x3a3005){const _0x1e2345=atob(_0x3a3005);try{const _0x54374c=new Uint8Array(_0x1e2345['length']);for(let _0x3c2925=0x0;_0x3c2925<_0x1e2345['length'];_0x3c2925++)_0x54374c[_0x3c2925]=_0x1e2345['charCodeAt'](_0x3c2925);return new TextDecoder('utf-8')['decode'](_0x54374c);}catch(_0x1a3e3c){return _0x1e2345;}}async function fetchCpeApi(_0x146f15,_0x5643f2,_0x4182ef,_0x49a8ee={},_0x31f2c3=0xbb8){if(!_0x5643f2)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x146f15,_0x49a8ee,_0x5643f2,_0x4182ef,_0x31f2c3);}function isEmpty(_0x3531bd){return!_0x3531bd||typeof _0x3531bd==='object'&&Object['keys'](_0x3531bd)['length']===0x0;}async function fetchAll(_0x4a7e85){const _0x1bdbe8=_0x55e3,_0x2f6b53=_0x4a7e85['token'],_0xf688e1=_0x4a7e85['mac'],_0x32dcc7=0xbb8,_0x45eb6f=await Promise['allSettled']([fetchCpeApi(_0x1bdbe8(0xfe),_0x2f6b53,_0xf688e1,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x2f6b53,_0xf688e1,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x2f6b53,_0xf688e1,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x2f6b53,_0xf688e1,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x2f6b53,_0xf688e1,{},0xbb8)]),_0x161c82=[];let _0x10d824=readResult(_0x45eb6f[0x0],_0x161c82),_0xda319=readResult(_0x45eb6f[0x1],_0x161c82),_0x113370=readResult(_0x45eb6f[0x2],_0x161c82),_0x3f3cb8=readResult(_0x45eb6f[0x3],_0x161c82);const _0x34d526=readResult(_0x45eb6f[0x4],_0x161c82);if(_0x113370)_0x113370=_0x113370['MainRouter']||_0x113370['Router']||_0x113370;const _0x5e4c2d=[_0x10d824,_0xda319,_0x113370,_0x3f3cb8,_0x34d526][_0x1bdbe8(0x113)](_0x5c6311=>!isEmpty(_0x5c6311))['length'],_0x889ebc=_0x5e4c2d===0x0?classifyFault(_0x161c82):null;return console['log'](_0x1bdbe8(0x11e)+_0x5e4c2d+'/5\x20|\x20fault='+(_0x889ebc||'-')+'\x20|\x20失败码=['+_0x161c82['join'](',')+']'),{'rf':_0x10d824,'ca':_0xda319,'topo':_0x113370,'sim':_0x3f3cb8,'traffic':_0x34d526,'failCodes':_0x161c82,'fault':_0x889ebc,'successCount':_0x5e4c2d};}function saveCache(_0x1c3214){const _0x2b34e5=_0x55e3;try{const _0x3773f9=parseTrafficData(_0x1c3214['traffic']),_0x7c4f13={'rf':{'WorkMode':_0x1c3214['rf']?.[_0x2b34e5(0xfa)],'SSB_RSRP':_0x1c3214['rf']?.['SSB_RSRP'],'RSRP':_0x1c3214['rf']?.['RSRP'],'SSB_SINR':_0x1c3214['rf']?.['SSB_SINR'],'SINR':_0x1c3214['rf']?.['SINR'],'SSB_RSRQ':_0x1c3214['rf']?.['SSB_RSRQ'],'RSRQ':_0x1c3214['rf']?.['RSRQ'],'SSB_RSSI':_0x1c3214['rf']?.['SSB_RSSI'],'RSSI':_0x1c3214['rf']?.['RSSI'],'BAND':_0x1c3214['rf']?.['BAND'],'NR_BAND':_0x1c3214['rf']?.['NR_BAND'],'LTE_BAND':_0x1c3214['rf']?.['LTE_BAND'],'PCI':_0x1c3214['rf']?.[_0x2b34e5(0x11d)],'SPN':_0x1c3214['rf']?.['SPN']},'ca':{'main_CA_info':_0x1c3214['ca']?.['main_CA_info']||{},'sub_CA_info':_0x1c3214['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x1c3214['topo']?.['NetStatus'],'UpTime':_0x1c3214['topo']?.['UpTime'],'Name':_0x1c3214['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x1c3214[_0x2b34e5(0x105)])},'sim':{'Operator':_0x1c3214['sim']?.['Operator'],'SPN':_0x1c3214['sim']?.['SPN']},'traffic':{'todayBytes':_0x3773f9['todayBytes'],'monthBytes':_0x3773f9['monthBytes'],'todayRx':_0x3773f9['todayRx'],'todayTx':_0x3773f9['todayTx'],'monthRx':_0x3773f9[_0x2b34e5(0x11b)],'monthTx':_0x3773f9['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x7c4f13));}catch(_0x1bb3d3){console['log'](_0x2b34e5(0x107)+_0x1bb3d3);}}function _0x8c5f(){const _0x586556=['u1bo','4PQG77IpiowgMEE8K+wTMowKSEI0Psb8ia','B2jQzwn0','5y+m6l295RoI','mty3nJK4mKzbDxDMtG','zMXVB3i','qMfUza','nuDb','BwfJ','5zUB6l295RoI','nwrwBLj2Da','mJaWmJC3ugDLALzS','CMvZDwX0q29Kzq','zMLSDgvY','CgfYC2u','tfrfx0jbtKq','m0HuzuXcCa','yxbWBgLJyxrPB24VANnVBG','zgf5x3r4x3rYywzMAwm','mZiWANHeuKHc','nti4mte3nNHZvfbdwG','Bw9UDgHsEa','C3rHDhvZ','uenj','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','q0HjtKeGvevmrunptq','yMfK','ntC2mZiWDen1vvHX','Bw9UDgHFCNHFDhjHzMzPyW','nuCG','n0rxshjmDW','mtuWmtaZnMv0wKXtCq','mtbvB3Pqv0e','v29YA01Vzgu','5lIT5zU96igu6ycA','tfrf','Aw5KzxHpzG','r0vux1jgx1njr05btf9jtKzp','nZGXodK5qMfyBg5I','DhjPBq','Aw5JBhvKzxm','5lIT5zU95BM/55s1','yxv0Aa','nJGXnda3mw54A09gDW','Dg9WBW'];_0x8c5f=function(){return _0x586556;};return _0x8c5f();}function loadCache(){const _0x26b26c=_0x55e3;try{const _0x3d2e5c=Keychain['get'](KEY_CACHE);if(!_0x3d2e5c)return null;const _0x3f9e73=JSON[_0x26b26c(0x114)](_0x3d2e5c);if(!_0x3f9e73||typeof _0x3f9e73!==_0x26b26c(0x108))return null;return _0x3f9e73;}catch(_0x2a8184){return null;}}
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
