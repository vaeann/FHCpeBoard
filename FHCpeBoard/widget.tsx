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

const _0x1796d4=_0x495f;(function(_0x66fe76,_0x4524eb){const _0x59f8f4=_0x495f,_0x2c16ec=_0x66fe76();while(!![]){try{const _0x4668e7=parseInt(_0x59f8f4(0x1ba))/0x1+-parseInt(_0x59f8f4(0x1af))/0x2*(parseInt(_0x59f8f4(0x1bd))/0x3)+parseInt(_0x59f8f4(0x19d))/0x4+parseInt(_0x59f8f4(0x1a5))/0x5*(parseInt(_0x59f8f4(0x197))/0x6)+-parseInt(_0x59f8f4(0x1b3))/0x7*(-parseInt(_0x59f8f4(0x19b))/0x8)+-parseInt(_0x59f8f4(0x19e))/0x9*(-parseInt(_0x59f8f4(0x1a1))/0xa)+parseInt(_0x59f8f4(0x1b1))/0xb*(-parseInt(_0x59f8f4(0x1bb))/0xc);if(_0x4668e7===_0x4524eb)break;else _0x2c16ec['push'](_0x2c16ec['shift']());}catch(_0x54e302){_0x2c16ec['push'](_0x2c16ec['shift']());}}}(_0x17cd,0x487e2));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4812da,_0x19f2f8){const _0x4b0d97=_0x495f;try{const _0x1d6793=Keychain[_0x4b0d97(0x1ad)](_0x4812da);return _0x1d6793===null||_0x1d6793===undefined||_0x1d6793===''?_0x19f2f8:String(_0x1d6793)['trim']();}catch(_0x329b25){return _0x19f2f8;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x3a0f1b){const _0xa57328=_0x495f;try{if(_0x3a0f1b['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x3a0f1b['token'])['trim']());if(_0x3a0f1b['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x3a0f1b['mac'])['trim']()||DEFAULT_MAC);if(_0x3a0f1b['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x3a0f1b[_0xa57328(0x1b8)])['trim']()||DEFAULT_NAME);}catch(_0x4abf70){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x4abf70);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x23b92a,_0x5ff9f8){if(_0x23b92a===undefined||_0x23b92a===null||_0x23b92a==='')return _0x5ff9f8;const _0xe1ae06=String(_0x23b92a)['trim']();return _0xe1ae06==='-'||_0xe1ae06==='undefined'?_0x5ff9f8:_0xe1ae06;}function firstValid(_0x27ae90,_0x43cae8){for(const _0x4903c5 of _0x27ae90){const _0x5b09c1=getValidValue(_0x4903c5,'');if(_0x5b09c1)return _0x5b09c1;}return _0x43cae8;}function resolveOperator(_0x3ae60a,_0x1acd4a){const _0x4b7eb3=_0x495f,_0x42f4c8=getOperatorName(_0x1acd4a&&_0x1acd4a['Operator']||'',_0x1acd4a&&_0x1acd4a[_0x4b7eb3(0x199)]||'');if(_0x42f4c8==='未知'&&_0x3ae60a&&_0x3ae60a['SPN'])return String(_0x3ae60a['SPN']);return _0x42f4c8;}function formatUptime(_0x2dc195){const _0x4136d2=_0x495f,_0x538fbb=parseInt(_0x2dc195||0x0)||0x0,_0x315cde=Math[_0x4136d2(0x192)](_0x538fbb/0x15180),_0x2f4643=Math[_0x4136d2(0x192)](_0x538fbb%0x15180/0xe10),_0x43787a=Math['floor'](_0x538fbb%0xe10/0x3c),_0x4c81c6=[];if(_0x315cde>0x0)_0x4c81c6[_0x4136d2(0x1b7)](_0x315cde+'天');if(_0x2f4643>0x0||_0x315cde>0x0)_0x4c81c6['push'](_0x2f4643+'小时');return _0x4c81c6[_0x4136d2(0x1b7)](_0x43787a+'分'),_0x4c81c6['join']('\x20');}function formatUptimeShort(_0x158720){const _0x1e7084=_0x495f,_0x169ee5=parseInt(_0x158720||0x0)||0x0,_0x38b33c=Math['floor'](_0x169ee5/0x15180),_0x3b769f=Math['floor'](_0x169ee5%0x15180/0xe10),_0x26248a=Math[_0x1e7084(0x192)](_0x169ee5%0xe10/0x3c),_0x2dffe5=[];if(_0x38b33c>0x0)_0x2dffe5['push'](_0x38b33c+'天');if(_0x3b769f>0x0||_0x38b33c>0x0)_0x2dffe5['push'](_0x3b769f+'时');return _0x2dffe5['push'](_0x26248a+'分'),_0x2dffe5[_0x1e7084(0x1a6)]('');}function trafficMbToBytes(_0x310ac2){const _0x334b85=parseFloat(_0x310ac2||0x0);if(isNaN(_0x334b85))return 0x0;return Math['round'](_0x334b85*0x400*0x400);}function formatTraffic(_0x44f2f5){const _0x50ff49=_0x495f,_0x144957=Number(_0x44f2f5||0x0);if(!isFinite(_0x144957)||_0x144957<=0x0)return'0M';const _0x253f05=0x400*0x400,_0x45b9a9=0x400*_0x253f05;if(_0x144957>=_0x45b9a9)return(_0x144957/_0x45b9a9)['toFixed'](0x1)+'G';return(_0x144957/_0x253f05)[_0x50ff49(0x1c0)](0x1)+'M';}function formatTrafficShort(_0x44894b){const _0x281b06=_0x495f,_0x530af0=Number(_0x44894b||0x0);if(!isFinite(_0x530af0)||_0x530af0<=0x0)return'0';const _0x5903ed=0x400,_0xf7dd5d=0x400*_0x5903ed,_0x569485=0x400*_0xf7dd5d;if(_0x530af0>=_0x569485){const _0x7425fd=_0x530af0/_0x569485;return(_0x7425fd>=0x64?_0x7425fd['toFixed'](0x0):_0x7425fd['toFixed'](0x1)[_0x281b06(0x1ac)](/\.0$/,''))+'G';}if(_0x530af0>=_0xf7dd5d)return Math['round'](_0x530af0/_0xf7dd5d)+'M';if(_0x530af0>=_0x5903ed)return Math['round'](_0x530af0/_0x5903ed)+'K';return String(Math['round'](_0x530af0));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x6bcbc){const _0x25f4d4=_0x495f;if(!_0x6bcbc)return ZERO_TRAFFIC;const _0x1a4988=_0x6bcbc['day_rx_traffic']!==undefined||_0x6bcbc['day_tx_traffic']!==undefined||_0x6bcbc[_0x25f4d4(0x1a3)]!==undefined||_0x6bcbc['month_tx_traffic']!==undefined;if(!_0x1a4988)return{'todayBytes':Number(_0x6bcbc['todayBytes'])||0x0,'monthBytes':Number(_0x6bcbc[_0x25f4d4(0x1bf)])||0x0,'todayRx':Number(_0x6bcbc[_0x25f4d4(0x1ae)])||0x0,'todayTx':Number(_0x6bcbc['todayTx'])||0x0,'monthRx':Number(_0x6bcbc['monthRx'])||0x0,'monthTx':Number(_0x6bcbc['monthTx'])||0x0};const _0xbab0d1=trafficMbToBytes(_0x6bcbc['day_rx_traffic']),_0x449d7d=trafficMbToBytes(_0x6bcbc['day_tx_traffic']),_0x1e0659=trafficMbToBytes(_0x6bcbc[_0x25f4d4(0x1a3)]),_0x1c4590=trafficMbToBytes(_0x6bcbc['month_tx_traffic']);return{'todayBytes':_0xbab0d1+_0x449d7d,'monthBytes':_0x1e0659+_0x1c4590,'todayRx':_0xbab0d1,'todayTx':_0x449d7d,'monthRx':_0x1e0659,'monthTx':_0x1c4590};}function trafficRxRatio(_0x173fb0,_0x397ffd){const _0x4595a8=Number(_0x173fb0||0x0)+Number(_0x397ffd||0x0);if(!isFinite(_0x4595a8)||_0x4595a8<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x173fb0||0x0)/_0x4595a8));}function getOperatorName(_0x333486,_0x45c6b9){const _0x42a464=_0x495f;if(!_0x333486)return _0x45c6b9||'未知';const _0x491e5b=String(_0x333486)['toUpperCase']();if(_0x491e5b['includes']('CMCC')||_0x491e5b==='中国移动'||_0x491e5b['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x491e5b['includes']('CUCC')||_0x491e5b===_0x42a464(0x198)||_0x491e5b['includes']('CHINA\x20UNICOM')||_0x491e5b['includes']('UNICOM'))return'中国联通';if(_0x491e5b[_0x42a464(0x18d)]('CTCC')||_0x491e5b==='CT'||_0x491e5b===_0x42a464(0x1c3)||_0x491e5b[_0x42a464(0x18d)]('CHINA\x20TELECOM')||_0x491e5b['includes']('TELECOM'))return'中国电信';if(_0x491e5b['includes']('CBN')||_0x491e5b==='中国广电'||_0x491e5b['includes'](_0x42a464(0x1aa)))return'中国广电';return _0x333486;}function getSignalColor(_0x212778,_0x3e9da6){const _0x25f549=_0x495f;let _0x27ac49=parseInt(_0x212778);if(isNaN(_0x27ac49))_0x27ac49=-0x78;if(_0x27ac49>-0x59)return _0x3e9da6['ok'];if(_0x27ac49>-0x63)return _0x3e9da6[_0x25f549(0x1bc)];return _0x3e9da6['bad'];}function getSinrColor(_0x43c9ee,_0x4ebe13){const _0x3ce28c=_0x495f;let _0x40618b=parseFloat(_0x43c9ee);if(isNaN(_0x40618b))_0x40618b=0x0;if(_0x40618b>0xf)return _0x4ebe13['ok'];if(_0x40618b>0x8)return _0x4ebe13['warn'];return _0x4ebe13[_0x3ce28c(0x1a4)];}function getAllBands(_0x4e8007,_0x57dcc8,_0x2c839a){const _0xa6a1a5=_0x495f,_0x428407=[],_0x22436a=_0x2c839a?'N':'B',_0x5afc5d=getValidValue(_0x4e8007?.[_0xa6a1a5(0x1a9)]||_0x4e8007?.['NR_BAND']||_0x4e8007?.['LTE_BAND'],'');if(_0x5afc5d)_0x428407['push'](_0x22436a+_0x5afc5d);for(const _0x519594 of _0x57dcc8?.[_0xa6a1a5(0x1c2)]||[]){const _0x52a558=String(_0x519594?.[_0xa6a1a5(0x1a0)]||'');if(_0x52a558&&_0x52a558!=='-')_0x428407['push'](_0x22436a+_0x52a558);}if(_0x428407['length']===0x0)_0x428407['push'](_0x2c839a?'N78':'B3');return _0x428407;}function getCaBadgeText(_0x2f2171,_0x3fd6a9,_0x48bad8){const _0x15d10a=(_0x3fd6a9?'5G\x20':'4G\x20')+_0x48bad8;if(!_0x3fd6a9)return _0x15d10a;const _0x3a40a9=0x1+(_0x2f2171&&_0x2f2171['sub_CA_info']||[])['length'];if(_0x3a40a9>=0x4)return'5GA+';if(_0x3a40a9===0x3)return'5GA';if(_0x3a40a9===0x2)return'5G+';return _0x15d10a;}function getCarrierCountText(_0x4fc412){const _0x30c583=(_0x4fc412&&_0x4fc412['sub_CA_info']||[])['length'];if(_0x30c583===0x0)return'单载波';if(_0x30c583===0x1)return'双载波';if(_0x30c583===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x34b32a,_0x56bfc5,_0x2a2ad4){const _0x3324c6=_0x495f,_0x350fdf=String(_0x2a2ad4||'')['toUpperCase']();if(!_0x56bfc5){if(!_0x350fdf||_0x350fdf==='4G'||_0x350fdf===_0x3324c6(0x1b9))return'4G\x20LTE';return'4G\x20'+_0x350fdf;}const _0x4dc5e9=0x1+(_0x34b32a&&_0x34b32a[_0x3324c6(0x1c2)]||[])['length'];if(_0x4dc5e9>=0x4)return _0x3324c6(0x1b5);if(_0x4dc5e9===0x3)return _0x3324c6(0x1a2);if(_0x4dc5e9===0x2)return'5G+';return _0x350fdf?_0x3324c6(0x18c)+_0x350fdf:'5G\x20SA';}function rsrpToPercent(_0x218fc9){const _0x409692=_0x495f;let _0x458dc7=parseInt(_0x218fc9);if(isNaN(_0x458dc7))_0x458dc7=-0x78;const _0x503591=Math['min'](-0x46,Math[_0x409692(0x19c)](-0x78,_0x458dc7)),_0x1b54b8=(_0x503591+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x1b54b8*0x5a));}function sinrToPercent(_0x597506){let _0x3abb92=parseFloat(_0x597506);if(isNaN(_0x3abb92))_0x3abb92=0x0;return Math['min'](0x64,Math['max'](0x0,_0x3abb92/0x19*0x64));}function resolveDeviceName(_0x55847d,_0x2bc86a){const _0x30b7a3=_0x495f,_0x699fe8=_0x55847d&&_0x55847d['Name']!=null?String(_0x55847d[_0x30b7a3(0x19f)])[_0x30b7a3(0x191)]():'';if(!_0x699fe8)return _0x2bc86a;if(_0x699fe8==='--'||_0x699fe8==='undefined'||_0x699fe8===_0x30b7a3(0x1a7)||_0x699fe8==='0')return _0x2bc86a;return _0x699fe8;}function rsrpToBars(_0xa50744){const _0x562dd3=parseInt(_0xa50744);if(isNaN(_0x562dd3))return 0x0;if(_0x562dd3>=-0x55)return 0x4;if(_0x562dd3>=-0x5f)return 0x3;if(_0x562dd3>=-0x69)return 0x2;if(_0x562dd3>=-0x73)return 0x1;return 0x1;}function _0x17cd(){const _0x3e657d=['Bwf4','ntK1otq4yNvwugnH','nZjWB1HvD1q','tMfTzq','qMfUza','mZm0mZiWuxnbrxbj','nuDb','Bw9UDgHFCNHFDhjHzMzPyW','yMfK','nZbcuu9RCNy','AM9PBG','BNvSBa','zNvSzMLSBgvK','qKfora','q0HjtKeGqLjpqurdqvnu','v29YA01Vzgu','CMvWBgfJzq','z2v0','Dg9KyxLsEa','mJjOsxr6yue','C3vIC3rY','mtKYmtDjzu5iALe','uLnsua','mJfLBhPAvuW','BNvTyMvY','nuDbkW','tMv0u3rHDhvZ','ChvZAa','zgv2AwnLtMfTzq','tfrf','mJKYodyWBLviDwv2','mJK1mM9LBwrbBW','D2fYBG','mta4ntGYreLOBvjt','C2LT','Bw9UDgHcExrLCW','Dg9gAxHLza','Dg9tDhjPBMC','C3vIx0nbx2LUzM8','5lIT5zU955s15l+H','C29Tzq','nuCG','Aw5JBhvKzxm','Dg9WBW','Dg9KyxLcExrLCW','CgfYC2u','DhjPBq','zMXVB3i','DhjHzMzPyW','C2v0','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','C3rHDhvZ','mtyZndq2sg91AwHO','5lIT5zU96igu6ycA','u1bo','BgvUz3rO','oteWnJr5vK5MAMm'];_0x17cd=function(){return _0x3e657d;};return _0x17cd();}function countOnlineDevices(_0x383af9){const _0x2f2995=_0x495f;if(!_0x383af9)return 0x0;if(typeof _0x383af9['onlineDevices']==='number')return _0x383af9['onlineDevices'];const _0x18aa0d=_0x383af9['MainBaseInfo'];if(!Array['isArray'](_0x18aa0d))return 0x0;return _0x18aa0d['filter'](_0x3da79b=>_0x3da79b&&String(_0x3da79b[_0x2f2995(0x1b6)])==='1')['length'];}function urlDecode(_0x4146ff){const _0xef6916=_0x495f,_0x24c0f1=[];for(let _0x258736=0x0;_0x258736<_0x4146ff['length'];_0x258736+=0x2)_0x24c0f1['push'](parseInt(_0x4146ff[_0xef6916(0x1b0)](_0x258736,0x2),0x10));let _0x20403e='';for(let _0x14b661=0x0;_0x14b661<_0x24c0f1['length'];){const _0x556ab2=_0x24c0f1[_0x14b661];if(_0x556ab2<0x80)_0x20403e+=String['fromCharCode'](_0x556ab2),_0x14b661++;else{if(_0x556ab2>>0x5===0x6)_0x20403e+=String['fromCharCode']((_0x556ab2&0x1f)<<0x6|_0x24c0f1[_0x14b661+0x1]&0x3f),_0x14b661+=0x2;else _0x556ab2>>0x4===0xe?(_0x20403e+=String['fromCharCode']((_0x556ab2&0xf)<<0xc|(_0x24c0f1[_0x14b661+0x1]&0x3f)<<0x6|_0x24c0f1[_0x14b661+0x2]&0x3f),_0x14b661+=0x3):(_0x20403e+=String['fromCharCode']((_0x556ab2&0x7)<<0x12|(_0x24c0f1[_0x14b661+0x1]&0x3f)<<0xc|(_0x24c0f1[_0x14b661+0x2]&0x3f)<<0x6|_0x24c0f1[_0x14b661+0x3]),_0x14b661+=0x4);}}return _0x20403e;}const REMOTE_URL=urlDecode(_0x1796d4(0x195)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x538647=_0x1796d4;return Date['now']()[_0x538647(0x1c1)]();}function generateUUID(){const _0x8bdc9e='0123456789ABCDEF';let _0x183dd3='';for(let _0x5ddd68=0x0;_0x5ddd68<0x20;_0x5ddd68++)_0x183dd3+=_0x8bdc9e[Math['floor'](Math['random']()*0x10)];return _0x183dd3;}function generateSequenceId(_0xcb31af){const _0x1d20ae=_0x1796d4;return _0xcb31af+'_'+Date['now']()[_0x1d20ae(0x1c1)](0x24);}function classifyFault(_0x1a9587){const _0x2a5d7c=_0x1796d4;if(!_0x1a9587||_0x1a9587[_0x2a5d7c(0x19a)]===0x0)return null;if(_0x1a9587[_0x2a5d7c(0x18b)](_0x502c07=>AUTH_ERROR_CODES['indexOf'](_0x502c07)>=0x0))return'auth';if(_0x1a9587['some'](_0xa12c32=>DEVICE_ERROR_CODES['indexOf'](_0xa12c32)>=0x0))return'device';return'network';}function readResult(_0x240a54,_0x137ce5){const _0x5e55e7=_0x1796d4;if(!_0x240a54||_0x240a54[_0x5e55e7(0x196)]!==_0x5e55e7(0x1a8)||!_0x240a54['value'])return _0x137ce5[_0x5e55e7(0x1b7)](NET_ERROR_CODE),null;const _0x3ec07e=_0x240a54['value'];if(_0x3ec07e['resultCode']===0x0)return _0x3ec07e;return _0x137ce5['push'](typeof _0x3ec07e['resultCode']===_0x5e55e7(0x1b4)?_0x3ec07e['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x2c1b54,_0x1c818c,_0xde843f,_0x1c6728,_0x392d8c){const _0x183e13=_0x1796d4;if(!_0xde843f)return null;const _0x226760={'CmdType':_0x2c1b54,..._0x1c818c};if(!_0x226760['SequenceId'])_0x226760['SequenceId']=generateSequenceId(_0x2c1b54);const _0x2beffb={'appVersion':urlDecode('322e322e3531'),'mac':_0x1c6728,'timeout':0x3,'token':_0xde843f,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x226760)}),'operatorId':getOperatorId()},_0x2e8aac=new AbortController(),_0x30e484=setTimeout(()=>{try{_0x2e8aac['abort']();}catch(_0x29b93a){}},_0x392d8c);try{const _0x1918e7=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0xde843f},'body':JSON['stringify'](_0x2beffb),'signal':_0x2e8aac['signal']}),_0x5e4a74=await _0x1918e7['json']();if(_0x5e4a74&&_0x5e4a74['rspParam']){const _0x262fe8=JSON['parse'](_0x5e4a74['rspParam']);if(_0x262fe8['Result']===0x0&&_0x262fe8['return_Parameter']){const _0x41c26f=String(_0x262fe8['return_Parameter'])['replace'](/\\\//g,'/')[_0x183e13(0x1ac)](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x381d98=JSON['parse'](decodeBase64Utf8(_0x41c26f));return{..._0x381d98,'resultCode':0x0};}}return _0x5e4a74||{'resultCode':NET_ERROR_CODE};}catch(_0x2254bc){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x30e484);}}function decodeBase64Utf8(_0x31ae6c){const _0x2d1902=_0x1796d4,_0x5efffd=atob(_0x31ae6c);try{const _0x3b50b3=new Uint8Array(_0x5efffd[_0x2d1902(0x19a)]);for(let _0x32b07f=0x0;_0x32b07f<_0x5efffd['length'];_0x32b07f++)_0x3b50b3[_0x32b07f]=_0x5efffd['charCodeAt'](_0x32b07f);return new TextDecoder('utf-8')['decode'](_0x3b50b3);}catch(_0x2142ba){return _0x5efffd;}}async function fetchCpeApi(_0x267043,_0x2dce6a,_0x1e9566,_0x738a47={},_0x595381=0xbb8){if(!_0x2dce6a)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x267043,_0x738a47,_0x2dce6a,_0x1e9566,_0x595381);}function isEmpty(_0x1382a4){return!_0x1382a4||typeof _0x1382a4==='object'&&Object['keys'](_0x1382a4)['length']===0x0;}async function fetchAll(_0x3726ac){const _0xb292ee=_0x3726ac['token'],_0x86b6e1=_0x3726ac['mac'],_0x2f9c13=0xbb8,_0x3c3f5a=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0xb292ee,_0x86b6e1,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0xb292ee,_0x86b6e1,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0xb292ee,_0x86b6e1,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0xb292ee,_0x86b6e1,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0xb292ee,_0x86b6e1,{},0xbb8)]),_0x1efa9b=[];let _0x22096c=readResult(_0x3c3f5a[0x0],_0x1efa9b),_0x50a2a5=readResult(_0x3c3f5a[0x1],_0x1efa9b),_0x262fcc=readResult(_0x3c3f5a[0x2],_0x1efa9b),_0x37cc4a=readResult(_0x3c3f5a[0x3],_0x1efa9b);const _0xd4d423=readResult(_0x3c3f5a[0x4],_0x1efa9b);if(_0x262fcc)_0x262fcc=_0x262fcc['MainRouter']||_0x262fcc['Router']||_0x262fcc;const _0x285be9=[_0x22096c,_0x50a2a5,_0x262fcc,_0x37cc4a,_0xd4d423]['filter'](_0x44510e=>!isEmpty(_0x44510e))['length'],_0x44be6f=_0x285be9===0x0?classifyFault(_0x1efa9b):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x285be9+'/5\x20|\x20fault='+(_0x44be6f||'-')+'\x20|\x20失败码=['+_0x1efa9b['join'](',')+']'),{'rf':_0x22096c,'ca':_0x50a2a5,'topo':_0x262fcc,'sim':_0x37cc4a,'traffic':_0xd4d423,'failCodes':_0x1efa9b,'fault':_0x44be6f,'successCount':_0x285be9};}function saveCache(_0x317465){const _0xa5244b=_0x1796d4;try{const _0x2fa39c=parseTrafficData(_0x317465[_0xa5244b(0x193)]),_0x192dae={'rf':{'WorkMode':_0x317465['rf']?.[_0xa5244b(0x1ab)],'SSB_RSRP':_0x317465['rf']?.['SSB_RSRP'],'RSRP':_0x317465['rf']?.[_0xa5244b(0x1b2)],'SSB_SINR':_0x317465['rf']?.['SSB_SINR'],'SINR':_0x317465['rf']?.['SINR'],'SSB_RSRQ':_0x317465['rf']?.['SSB_RSRQ'],'RSRQ':_0x317465['rf']?.['RSRQ'],'SSB_RSSI':_0x317465['rf']?.['SSB_RSSI'],'RSSI':_0x317465['rf']?.['RSSI'],'BAND':_0x317465['rf']?.['BAND'],'NR_BAND':_0x317465['rf']?.['NR_BAND'],'LTE_BAND':_0x317465['rf']?.['LTE_BAND'],'PCI':_0x317465['rf']?.['PCI'],'SPN':_0x317465['rf']?.['SPN']},'ca':{'main_CA_info':_0x317465['ca']?.['main_CA_info']||{},'sub_CA_info':_0x317465['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x317465[_0xa5244b(0x18e)]?.['NetStatus'],'UpTime':_0x317465['topo']?.['UpTime'],'Name':_0x317465['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x317465[_0xa5244b(0x18e)])},'sim':{'Operator':_0x317465['sim']?.['Operator'],'SPN':_0x317465[_0xa5244b(0x1be)]?.['SPN']},'traffic':{'todayBytes':_0x2fa39c[_0xa5244b(0x18f)],'monthBytes':_0x2fa39c[_0xa5244b(0x1bf)],'todayRx':_0x2fa39c['todayRx'],'todayTx':_0x2fa39c['todayTx'],'monthRx':_0x2fa39c['monthRx'],'monthTx':_0x2fa39c['monthTx']},'ts':Date['now']()};Keychain[_0xa5244b(0x194)](KEY_CACHE,JSON['stringify'](_0x192dae));}catch(_0x4a0f0e){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x4a0f0e);}}function _0x495f(_0x11a3de,_0x4eddff){_0x11a3de=_0x11a3de-0x18b;const _0x17cd23=_0x17cd();let _0x495ff8=_0x17cd23[_0x11a3de];if(_0x495f['dOSMwg']===undefined){var _0x445c98=function(_0x422d23){const _0x1435b5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x15b86f='',_0x4812da='';for(let _0x19f2f8=0x0,_0x1d6793,_0x329b25,_0x3a0f1b=0x0;_0x329b25=_0x422d23['charAt'](_0x3a0f1b++);~_0x329b25&&(_0x1d6793=_0x19f2f8%0x4?_0x1d6793*0x40+_0x329b25:_0x329b25,_0x19f2f8++%0x4)?_0x15b86f+=String['fromCharCode'](0xff&_0x1d6793>>(-0x2*_0x19f2f8&0x6)):0x0){_0x329b25=_0x1435b5['indexOf'](_0x329b25);}for(let _0x4abf70=0x0,_0x23b92a=_0x15b86f['length'];_0x4abf70<_0x23b92a;_0x4abf70++){_0x4812da+='%'+('00'+_0x15b86f['charCodeAt'](_0x4abf70)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4812da);};_0x495f['HBsfKh']=_0x445c98,_0x495f['iwXtEX']={},_0x495f['dOSMwg']=!![];}const _0x551725=_0x17cd23[0x0];_0x495f['VxPCst']!==_0x551725&&(_0x495f['iwXtEX']={},_0x495f['VxPCst']=_0x551725);const _0x1ab0b5=_0x495f['iwXtEX'][_0x11a3de];return _0x1ab0b5===undefined?(_0x495ff8=_0x495f['HBsfKh'](_0x495ff8),_0x495f['iwXtEX'][_0x11a3de]=_0x495ff8):_0x495ff8=_0x1ab0b5,_0x495ff8;}function loadCache(){const _0x20cba1=_0x1796d4;try{const _0x8f4c51=Keychain['get'](KEY_CACHE);if(!_0x8f4c51)return null;const _0x2726f5=JSON[_0x20cba1(0x190)](_0x8f4c51);if(!_0x2726f5||typeof _0x2726f5!=='object')return null;return _0x2726f5;}catch(_0x4419ca){return null;}}
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
