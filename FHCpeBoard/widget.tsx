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

const _0x3eb543=_0x31fb;(function(_0x57c000,_0x2152db){const _0x1266ae=_0x31fb,_0x15b045=_0x57c000();while(!![]){try{const _0x2d25e0=-parseInt(_0x1266ae(0x12c))/0x1*(-parseInt(_0x1266ae(0x131))/0x2)+-parseInt(_0x1266ae(0x12a))/0x3*(-parseInt(_0x1266ae(0x12f))/0x4)+-parseInt(_0x1266ae(0x13f))/0x5*(parseInt(_0x1266ae(0x142))/0x6)+parseInt(_0x1266ae(0x14c))/0x7+parseInt(_0x1266ae(0x129))/0x8*(parseInt(_0x1266ae(0x14e))/0x9)+parseInt(_0x1266ae(0x132))/0xa+-parseInt(_0x1266ae(0x127))/0xb;if(_0x2d25e0===_0x2152db)break;else _0x15b045['push'](_0x15b045['shift']());}catch(_0xa4e8a6){_0x15b045['push'](_0x15b045['shift']());}}}(_0x3758,0x5d93e));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x3eb543(0x140),DEFAULT_MAC=_0x3eb543(0x12b),DEFAULT_NAME='烽火CPE';function _0x31fb(_0xfa49f5,_0x166aa7){const _0x3758fc=_0x3758();return _0x31fb=function(_0x31fbb4,_0x5bae3b){_0x31fbb4=_0x31fbb4-0x127;let _0x1f21f4=_0x3758fc[_0x31fbb4];if(_0x31fb['SLJpGr']===undefined){var _0x3339a0=function(_0x33e393){const _0x5bb081='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x526e5c='',_0x55f0b4='';for(let _0x31fded=0x0,_0x1113ee,_0x7d301,_0x19d46b=0x0;_0x7d301=_0x33e393['charAt'](_0x19d46b++);~_0x7d301&&(_0x1113ee=_0x31fded%0x4?_0x1113ee*0x40+_0x7d301:_0x7d301,_0x31fded++%0x4)?_0x526e5c+=String['fromCharCode'](0xff&_0x1113ee>>(-0x2*_0x31fded&0x6)):0x0){_0x7d301=_0x5bb081['indexOf'](_0x7d301);}for(let _0x48c629=0x0,_0x554955=_0x526e5c['length'];_0x48c629<_0x554955;_0x48c629++){_0x55f0b4+='%'+('00'+_0x526e5c['charCodeAt'](_0x48c629)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x55f0b4);};_0x31fb['bCqRZe']=_0x3339a0,_0xfa49f5=arguments,_0x31fb['SLJpGr']=!![];}const _0x5f2b1e=_0x3758fc[0x0],_0x166b65=_0x31fbb4+_0x5f2b1e,_0x4c4be8=_0xfa49f5[_0x166b65];return!_0x4c4be8?(_0x1f21f4=_0x31fb['bCqRZe'](_0x1f21f4),_0xfa49f5[_0x166b65]=_0x1f21f4):_0x1f21f4=_0x4c4be8,_0x1f21f4;},_0x31fb(_0xfa49f5,_0x166aa7);}function readKey(_0x33e393,_0x5bb081){try{const _0x526e5c=Keychain['get'](_0x33e393);return _0x526e5c===null||_0x526e5c===undefined||_0x526e5c===''?_0x5bb081:String(_0x526e5c)['trim']();}catch(_0x55f0b4){return _0x5bb081;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x31fded){try{if(_0x31fded['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x31fded['token'])['trim']());if(_0x31fded['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x31fded['mac'])['trim']()||DEFAULT_MAC);if(_0x31fded['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x31fded['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x1113ee){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x1113ee);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x7d301,_0x19d46b){if(_0x7d301===undefined||_0x7d301===null||_0x7d301==='')return _0x19d46b;const _0x48c629=String(_0x7d301)['trim']();return _0x48c629==='-'||_0x48c629==='undefined'?_0x19d46b:_0x48c629;}function firstValid(_0x554955,_0x47fe4a){for(const _0x2379f5 of _0x554955){const _0x4a979d=getValidValue(_0x2379f5,'');if(_0x4a979d)return _0x4a979d;}return _0x47fe4a;}function resolveOperator(_0x1d8285,_0x241550){const _0x522b2d=getOperatorName(_0x241550&&_0x241550['Operator']||'',_0x241550&&_0x241550['SPN']||'');if(_0x522b2d==='未知'&&_0x1d8285&&_0x1d8285['SPN'])return String(_0x1d8285['SPN']);return _0x522b2d;}function formatUptime(_0x556d5f){const _0x54dd12=parseInt(_0x556d5f||0x0)||0x0,_0x18adaa=Math['floor'](_0x54dd12/0x15180),_0x3a6c3f=Math['floor'](_0x54dd12%0x15180/0xe10),_0x59ab86=Math['floor'](_0x54dd12%0xe10/0x3c),_0x5d745e=[];if(_0x18adaa>0x0)_0x5d745e['push'](_0x18adaa+'天');if(_0x3a6c3f>0x0||_0x18adaa>0x0)_0x5d745e['push'](_0x3a6c3f+'小时');return _0x5d745e['push'](_0x59ab86+'分'),_0x5d745e['join']('\x20');}function formatUptimeShort(_0x18f8b2){const _0x59620b=_0x3eb543,_0x30badc=parseInt(_0x18f8b2||0x0)||0x0,_0x207a3b=Math[_0x59620b(0x128)](_0x30badc/0x15180),_0xc6d5f6=Math['floor'](_0x30badc%0x15180/0xe10),_0x15917b=Math['floor'](_0x30badc%0xe10/0x3c),_0xc71724=[];if(_0x207a3b>0x0)_0xc71724['push'](_0x207a3b+'天');if(_0xc6d5f6>0x0||_0x207a3b>0x0)_0xc71724['push'](_0xc6d5f6+'时');return _0xc71724['push'](_0x15917b+'分'),_0xc71724['join']('');}function trafficMbToBytes(_0x580238){const _0x3184e1=parseFloat(_0x580238||0x0);if(isNaN(_0x3184e1))return 0x0;return Math['round'](_0x3184e1*0x400*0x400);}function _0x3758(){const _0x6adb55=['mKLeCwLirG','ndGYntC4meXotw5ouW','5lIT5zU956E75yQO','tMfTzq','AxnbCNjHEq','Dg9tDhjPBMC','C2LT','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','77Yb55M75B2v5AsX5Pwi','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','Bw9UDgHuEa','Aw5KzxHpzG','Bw9UDgHFDhHFDhjHzMzPyW','BwLU','nZaYmdy1sNDttKvK','q1bfx1DjreDfvf9dqunirq','Bw9UDgHFCNHFDhjHzMzPyW','nLbqv0j4DG','77Yb6k6+5Ash56A757Q/','nta2zJCZnZq','CM91BMq','Dw5KzwzPBMvK','vxbuAw1L','BgvUz3rO','BMv0D29YAW','uLntsq','DhjPBq','mtm4nJi5ngLcyuL5Ca','CNnWugfYyw0','mtm4ndy1q0ToC1DS','nuDbkW','Dg9gAxHLza','odqZnJKYm1PRvwfHua','zMXVB3i','mZjLvfPJsKC','ndGZnZG5EvzADMvx','rdHgnta3renbrJmW','nJq3ntfpsgXfC08','CMvWBgfJzq','ChvZAa','mtj2zejWDKe','Bw9UDgHcExrLCW'];_0x3758=function(){return _0x6adb55;};return _0x3758();}function formatTraffic(_0x577237){const _0x2b4cd9=_0x3eb543,_0x3dc906=Number(_0x577237||0x0);if(!isFinite(_0x3dc906)||_0x3dc906<=0x0)return'0M';const _0x1b6644=0x400*0x400,_0x57f455=0x400*_0x1b6644;if(_0x3dc906>=_0x57f455)return(_0x3dc906/_0x57f455)[_0x2b4cd9(0x150)](0x1)+'G';return(_0x3dc906/_0x1b6644)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x120653){const _0x2e6822=_0x3eb543,_0x21a559=Number(_0x120653||0x0);if(!isFinite(_0x21a559)||_0x21a559<=0x0)return'0';const _0x4851fd=0x400,_0x522cb5=0x400*_0x4851fd,_0x2e946c=0x400*_0x522cb5;if(_0x21a559>=_0x2e946c){const _0x4be6a7=_0x21a559/_0x2e946c;return(_0x4be6a7>=0x64?_0x4be6a7['toFixed'](0x0):_0x4be6a7['toFixed'](0x1)[_0x2e6822(0x12d)](/\.0$/,''))+'G';}if(_0x21a559>=_0x522cb5)return Math['round'](_0x21a559/_0x522cb5)+'M';if(_0x21a559>=_0x4851fd)return Math[_0x2e6822(0x145)](_0x21a559/_0x4851fd)+'K';return String(Math['round'](_0x21a559));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x7cfd4c){const _0x21d3d1=_0x3eb543;if(!_0x7cfd4c)return ZERO_TRAFFIC;const _0x28be5a=_0x7cfd4c['day_rx_traffic']!==undefined||_0x7cfd4c['day_tx_traffic']!==undefined||_0x7cfd4c[_0x21d3d1(0x141)]!==undefined||_0x7cfd4c[_0x21d3d1(0x13d)]!==undefined;if(!_0x28be5a)return{'todayBytes':Number(_0x7cfd4c['todayBytes'])||0x0,'monthBytes':Number(_0x7cfd4c[_0x21d3d1(0x130)])||0x0,'todayRx':Number(_0x7cfd4c['todayRx'])||0x0,'todayTx':Number(_0x7cfd4c['todayTx'])||0x0,'monthRx':Number(_0x7cfd4c['monthRx'])||0x0,'monthTx':Number(_0x7cfd4c['monthTx'])||0x0};const _0x295474=trafficMbToBytes(_0x7cfd4c['day_rx_traffic']),_0x3ccad5=trafficMbToBytes(_0x7cfd4c['day_tx_traffic']),_0x6c0baa=trafficMbToBytes(_0x7cfd4c['month_rx_traffic']),_0x568308=trafficMbToBytes(_0x7cfd4c['month_tx_traffic']);return{'todayBytes':_0x295474+_0x3ccad5,'monthBytes':_0x6c0baa+_0x568308,'todayRx':_0x295474,'todayTx':_0x3ccad5,'monthRx':_0x6c0baa,'monthTx':_0x568308};}function trafficRxRatio(_0x2f974a,_0x4a03b3){const _0x396e7d=Number(_0x2f974a||0x0)+Number(_0x4a03b3||0x0);if(!isFinite(_0x396e7d)||_0x396e7d<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2f974a||0x0)/_0x396e7d));}function getOperatorName(_0x1967b3,_0x57f6c1){const _0x2df78a=_0x3eb543;if(!_0x1967b3)return _0x57f6c1||'未知';const _0x16e26c=String(_0x1967b3)['toUpperCase']();if(_0x16e26c['includes']('CMCC')||_0x16e26c===_0x2df78a(0x133)||_0x16e26c['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x16e26c['includes']('CUCC')||_0x16e26c==='中国联通'||_0x16e26c['includes']('CHINA\x20UNICOM')||_0x16e26c['includes']('UNICOM'))return'中国联通';if(_0x16e26c['includes']('CTCC')||_0x16e26c==='CT'||_0x16e26c==='中国电信'||_0x16e26c['includes']('CHINA\x20TELECOM')||_0x16e26c['includes']('TELECOM'))return'中国电信';if(_0x16e26c['includes']('CBN')||_0x16e26c==='中国广电'||_0x16e26c['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x1967b3;}function getSignalColor(_0x1ac255,_0x4ab57f){let _0x2d53e7=parseInt(_0x1ac255);if(isNaN(_0x2d53e7))_0x2d53e7=-0x78;if(_0x2d53e7>-0x59)return _0x4ab57f['ok'];if(_0x2d53e7>-0x63)return _0x4ab57f['warn'];return _0x4ab57f['bad'];}function getSinrColor(_0x435049,_0x5c4b80){let _0x5ae118=parseFloat(_0x435049);if(isNaN(_0x5ae118))_0x5ae118=0x0;if(_0x5ae118>0xf)return _0x5c4b80['ok'];if(_0x5ae118>0x8)return _0x5c4b80['warn'];return _0x5c4b80['bad'];}function getAllBands(_0x4d9d66,_0x590cc7,_0x56dd08){const _0x35ba31=_0x3eb543,_0x181598=[],_0x549ea1=_0x56dd08?'N':'B',_0x958452=getValidValue(_0x4d9d66?.['BAND']||_0x4d9d66?.['NR_BAND']||_0x4d9d66?.['LTE_BAND'],'');if(_0x958452)_0x181598[_0x35ba31(0x12e)](_0x549ea1+_0x958452);for(const _0x53912b of _0x590cc7?.['sub_CA_info']||[]){const _0x59180f=String(_0x53912b?.['Band']||'');if(_0x59180f&&_0x59180f!=='-')_0x181598['push'](_0x549ea1+_0x59180f);}if(_0x181598['length']===0x0)_0x181598['push'](_0x56dd08?'N78':'B3');return _0x181598;}function getCaBadgeText(_0x3cad66,_0x3b67e6,_0x6b368a){const _0x361285=(_0x3b67e6?'5G\x20':'4G\x20')+_0x6b368a;if(!_0x3b67e6)return _0x361285;const _0x5d50af=0x1+(_0x3cad66&&_0x3cad66['sub_CA_info']||[])['length'];if(_0x5d50af>=0x4)return'5GA+';if(_0x5d50af===0x3)return'5GA';if(_0x5d50af===0x2)return'5G+';return _0x361285;}function getCarrierCountText(_0x1107d2){const _0x5e4a98=(_0x1107d2&&_0x1107d2['sub_CA_info']||[])['length'];if(_0x5e4a98===0x0)return'单载波';if(_0x5e4a98===0x1)return'双载波';if(_0x5e4a98===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x2502a6,_0x5199ad,_0x202fdd){const _0xc98e22=_0x3eb543,_0x21df5e=String(_0x202fdd||'')['toUpperCase']();if(!_0x5199ad){if(!_0x21df5e||_0x21df5e==='4G'||_0x21df5e==='LTE')return'4G\x20LTE';return'4G\x20'+_0x21df5e;}const _0x44238e=0x1+(_0x2502a6&&_0x2502a6['sub_CA_info']||[])['length'];if(_0x44238e>=0x4)return _0xc98e22(0x14f);if(_0x44238e===0x3)return'5GA';if(_0x44238e===0x2)return'5G+';return _0x21df5e?'5G\x20'+_0x21df5e:'5G\x20SA';}function rsrpToPercent(_0x50619e){const _0x33989a=_0x3eb543;let _0xdb42c8=parseInt(_0x50619e);if(isNaN(_0xdb42c8))_0xdb42c8=-0x78;const _0x3574a7=Math['min'](-0x46,Math['max'](-0x78,_0xdb42c8)),_0x414975=(_0x3574a7+0x78)/0x32;return Math[_0x33989a(0x13e)](0x64,Math['max'](0xa,0xa+_0x414975*0x5a));}function sinrToPercent(_0x148b6b){let _0x24ef94=parseFloat(_0x148b6b);if(isNaN(_0x24ef94))_0x24ef94=0x0;return Math['min'](0x64,Math['max'](0x0,_0x24ef94/0x19*0x64));}function resolveDeviceName(_0x745cf6,_0x247252){const _0x41cfd9=_0x3eb543,_0x1bcbda=_0x745cf6&&_0x745cf6['Name']!=null?String(_0x745cf6[_0x41cfd9(0x134)])[_0x41cfd9(0x14b)]():'';if(!_0x1bcbda)return _0x247252;if(_0x1bcbda==='--'||_0x1bcbda===_0x41cfd9(0x146)||_0x1bcbda==='null'||_0x1bcbda==='0')return _0x247252;return _0x1bcbda;}function rsrpToBars(_0x222a48){const _0x332c89=parseInt(_0x222a48);if(isNaN(_0x332c89))return 0x0;if(_0x332c89>=-0x55)return 0x4;if(_0x332c89>=-0x5f)return 0x3;if(_0x332c89>=-0x69)return 0x2;if(_0x332c89>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x29780b){const _0xaf14fe=_0x3eb543;if(!_0x29780b)return 0x0;if(typeof _0x29780b['onlineDevices']==='number')return _0x29780b['onlineDevices'];const _0x4e245e=_0x29780b['MainBaseInfo'];if(!Array[_0xaf14fe(0x135)](_0x4e245e))return 0x0;return _0x4e245e['filter'](_0x575938=>_0x575938&&String(_0x575938['NetStatus'])==='1')['length'];}function urlDecode(_0x111df7){const _0x4debbf=_0x3eb543,_0x3ffcb7=[];for(let _0x1b54f7=0x0;_0x1b54f7<_0x111df7[_0x4debbf(0x148)];_0x1b54f7+=0x2)_0x3ffcb7['push'](parseInt(_0x111df7['substr'](_0x1b54f7,0x2),0x10));let _0x466a41='';for(let _0x56fac5=0x0;_0x56fac5<_0x3ffcb7['length'];){const _0x3ec2d2=_0x3ffcb7[_0x56fac5];if(_0x3ec2d2<0x80)_0x466a41+=String['fromCharCode'](_0x3ec2d2),_0x56fac5++;else{if(_0x3ec2d2>>0x5===0x6)_0x466a41+=String['fromCharCode']((_0x3ec2d2&0x1f)<<0x6|_0x3ffcb7[_0x56fac5+0x1]&0x3f),_0x56fac5+=0x2;else _0x3ec2d2>>0x4===0xe?(_0x466a41+=String['fromCharCode']((_0x3ec2d2&0xf)<<0xc|(_0x3ffcb7[_0x56fac5+0x1]&0x3f)<<0x6|_0x3ffcb7[_0x56fac5+0x2]&0x3f),_0x56fac5+=0x3):(_0x466a41+=String['fromCharCode']((_0x3ec2d2&0x7)<<0x12|(_0x3ffcb7[_0x56fac5+0x1]&0x3f)<<0xc|(_0x3ffcb7[_0x56fac5+0x2]&0x3f)<<0x6|_0x3ffcb7[_0x56fac5+0x3]),_0x56fac5+=0x4);}}return _0x466a41;}const REMOTE_URL=urlDecode(_0x3eb543(0x13a)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x3eb543(0x143),'auth':_0x3eb543(0x139)},FAULT_HINT={'network':_0x3eb543(0x138),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x94b52d=_0x3eb543;return Date['now']()[_0x94b52d(0x136)]();}function generateUUID(){const _0xae2d5b='0123456789ABCDEF';let _0x58da7a='';for(let _0xcf402f=0x0;_0xcf402f<0x20;_0xcf402f++)_0x58da7a+=_0xae2d5b[Math['floor'](Math['random']()*0x10)];return _0x58da7a;}function generateSequenceId(_0x2003b7){return _0x2003b7+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x10a07f){const _0x2a4dfe=_0x3eb543;if(!_0x10a07f||_0x10a07f['length']===0x0)return null;if(_0x10a07f['some'](_0x3df448=>AUTH_ERROR_CODES['indexOf'](_0x3df448)>=0x0))return'auth';if(_0x10a07f['some'](_0xacd31f=>DEVICE_ERROR_CODES[_0x2a4dfe(0x13c)](_0xacd31f)>=0x0))return'device';return _0x2a4dfe(0x149);}function readResult(_0x3c9eb1,_0x186ccf){if(!_0x3c9eb1||_0x3c9eb1['status']!=='fulfilled'||!_0x3c9eb1['value'])return _0x186ccf['push'](NET_ERROR_CODE),null;const _0x589753=_0x3c9eb1['value'];if(_0x589753['resultCode']===0x0)return _0x589753;return _0x186ccf['push'](typeof _0x589753['resultCode']==='number'?_0x589753['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x225c07,_0x8632cf,_0x3270f6,_0x29aa32,_0xebd1d1){const _0x5c86b3=_0x3eb543;if(!_0x3270f6)return null;const _0x1fab57={'CmdType':_0x225c07,..._0x8632cf};if(!_0x1fab57['SequenceId'])_0x1fab57['SequenceId']=generateSequenceId(_0x225c07);const _0x3493aa={'appVersion':urlDecode('322e322e3531'),'mac':_0x29aa32,'timeout':0x3,'token':_0x3270f6,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x5c86b3(0x144)),'Parameter':JSON['stringify'](_0x1fab57)}),'operatorId':getOperatorId()},_0x3e2bf1=new AbortController(),_0x49d47b=setTimeout(()=>{try{_0x3e2bf1['abort']();}catch(_0x537dd3){}},_0xebd1d1);try{const _0x57cef2=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x3270f6},'body':JSON['stringify'](_0x3493aa),'signal':_0x3e2bf1['signal']}),_0x5a8917=await _0x57cef2['json']();if(_0x5a8917&&_0x5a8917[_0x5c86b3(0x14d)]){const _0x1d2358=JSON['parse'](_0x5a8917[_0x5c86b3(0x14d)]);if(_0x1d2358['Result']===0x0&&_0x1d2358['return_Parameter']){const _0xc84b17=String(_0x1d2358['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')[_0x5c86b3(0x14b)](),_0x45b304=JSON['parse'](decodeBase64Utf8(_0xc84b17));return{..._0x45b304,'resultCode':0x0};}}return _0x5a8917||{'resultCode':NET_ERROR_CODE};}catch(_0x6df788){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x49d47b);}}function decodeBase64Utf8(_0xdc8d83){const _0x282d88=atob(_0xdc8d83);try{const _0x4b94f6=new Uint8Array(_0x282d88['length']);for(let _0x4618e5=0x0;_0x4618e5<_0x282d88['length'];_0x4618e5++)_0x4b94f6[_0x4618e5]=_0x282d88['charCodeAt'](_0x4618e5);return new TextDecoder('utf-8')['decode'](_0x4b94f6);}catch(_0x578e11){return _0x282d88;}}async function fetchCpeApi(_0x6a331a,_0x5f4ee1,_0x2a3dd5,_0x130841={},_0x9ce740=0xbb8){if(!_0x5f4ee1)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x6a331a,_0x130841,_0x5f4ee1,_0x2a3dd5,_0x9ce740);}function isEmpty(_0x587785){const _0x3889f8=_0x3eb543;return!_0x587785||typeof _0x587785==='object'&&Object['keys'](_0x587785)[_0x3889f8(0x148)]===0x0;}async function fetchAll(_0x544908){const _0x5c7f6b=_0x544908['token'],_0x1050b0=_0x544908['mac'],_0x1246c2=0xbb8,_0x3e04b7=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x5c7f6b,_0x1050b0,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x5c7f6b,_0x1050b0,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x5c7f6b,_0x1050b0,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x5c7f6b,_0x1050b0,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x5c7f6b,_0x1050b0,{},0xbb8)]),_0x32ac24=[];let _0x1e5db9=readResult(_0x3e04b7[0x0],_0x32ac24),_0x3dab26=readResult(_0x3e04b7[0x1],_0x32ac24),_0x50e2f1=readResult(_0x3e04b7[0x2],_0x32ac24),_0x47be9a=readResult(_0x3e04b7[0x3],_0x32ac24);const _0x342e95=readResult(_0x3e04b7[0x4],_0x32ac24);if(_0x50e2f1)_0x50e2f1=_0x50e2f1['MainRouter']||_0x50e2f1['Router']||_0x50e2f1;const _0x199125=[_0x1e5db9,_0x3dab26,_0x50e2f1,_0x47be9a,_0x342e95]['filter'](_0x2909e7=>!isEmpty(_0x2909e7))['length'],_0x24da9c=_0x199125===0x0?classifyFault(_0x32ac24):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x199125+'/5\x20|\x20fault='+(_0x24da9c||'-')+'\x20|\x20失败码=['+_0x32ac24['join'](',')+']'),{'rf':_0x1e5db9,'ca':_0x3dab26,'topo':_0x50e2f1,'sim':_0x47be9a,'traffic':_0x342e95,'failCodes':_0x32ac24,'fault':_0x24da9c,'successCount':_0x199125};}function saveCache(_0x14154e){const _0x306bbd=_0x3eb543;try{const _0x4b93e4=parseTrafficData(_0x14154e['traffic']),_0x3e57b2={'rf':{'WorkMode':_0x14154e['rf']?.['WorkMode'],'SSB_RSRP':_0x14154e['rf']?.['SSB_RSRP'],'RSRP':_0x14154e['rf']?.['RSRP'],'SSB_SINR':_0x14154e['rf']?.['SSB_SINR'],'SINR':_0x14154e['rf']?.['SINR'],'SSB_RSRQ':_0x14154e['rf']?.['SSB_RSRQ'],'RSRQ':_0x14154e['rf']?.['RSRQ'],'SSB_RSSI':_0x14154e['rf']?.['SSB_RSSI'],'RSSI':_0x14154e['rf']?.[_0x306bbd(0x14a)],'BAND':_0x14154e['rf']?.['BAND'],'NR_BAND':_0x14154e['rf']?.['NR_BAND'],'LTE_BAND':_0x14154e['rf']?.['LTE_BAND'],'PCI':_0x14154e['rf']?.['PCI'],'SPN':_0x14154e['rf']?.['SPN']},'ca':{'main_CA_info':_0x14154e['ca']?.['main_CA_info']||{},'sub_CA_info':_0x14154e['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x14154e['topo']?.['NetStatus'],'UpTime':_0x14154e['topo']?.[_0x306bbd(0x147)],'Name':_0x14154e['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x14154e['topo'])},'sim':{'Operator':_0x14154e['sim']?.['Operator'],'SPN':_0x14154e[_0x306bbd(0x137)]?.['SPN']},'traffic':{'todayBytes':_0x4b93e4['todayBytes'],'monthBytes':_0x4b93e4[_0x306bbd(0x130)],'todayRx':_0x4b93e4['todayRx'],'todayTx':_0x4b93e4['todayTx'],'monthRx':_0x4b93e4['monthRx'],'monthTx':_0x4b93e4[_0x306bbd(0x13b)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x3e57b2));}catch(_0xa99452){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0xa99452);}}function loadCache(){try{const _0x14b44e=Keychain['get'](KEY_CACHE);if(!_0x14b44e)return null;const _0xf82234=JSON['parse'](_0x14b44e);if(!_0xf82234||typeof _0xf82234!=='object')return null;return _0xf82234;}catch(_0x46b489){return null;}}
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
