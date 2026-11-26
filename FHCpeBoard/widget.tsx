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

const _0x39cf9a=_0x5d35;(function(_0x4ed75f,_0x3f5db4){const _0x5ebdf1=_0x5d35,_0x52665a=_0x4ed75f();while(!![]){try{const _0x1157dc=-parseInt(_0x5ebdf1(0x1ba))/0x1+-parseInt(_0x5ebdf1(0x1b7))/0x2+parseInt(_0x5ebdf1(0x1b3))/0x3+parseInt(_0x5ebdf1(0x1b6))/0x4+-parseInt(_0x5ebdf1(0x1d4))/0x5+parseInt(_0x5ebdf1(0x1b4))/0x6*(-parseInt(_0x5ebdf1(0x1b5))/0x7)+parseInt(_0x5ebdf1(0x1af))/0x8;if(_0x1157dc===_0x3f5db4)break;else _0x52665a['push'](_0x52665a['shift']());}catch(_0x4200f2){_0x52665a['push'](_0x52665a['shift']());}}}(_0x52a3,0xb0b53));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0x39cf9a(0x1d6);function readKey(_0x142f70,_0x199b5c){try{const _0x577c27=Keychain['get'](_0x142f70);return _0x577c27===null||_0x577c27===undefined||_0x577c27===''?_0x199b5c:String(_0x577c27)['trim']();}catch(_0x46ffae){return _0x199b5c;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x23d3b7){const _0xc6e747=_0x39cf9a;try{if(_0x23d3b7['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x23d3b7[_0xc6e747(0x1bb)])['trim']());if(_0x23d3b7['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x23d3b7['mac'])['trim']()||DEFAULT_MAC);if(_0x23d3b7['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x23d3b7['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0xfa114d){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0xfa114d);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x181cb7,_0x150631){const _0x2c83ad=_0x39cf9a;if(_0x181cb7===undefined||_0x181cb7===null||_0x181cb7==='')return _0x150631;const _0x3e49b8=String(_0x181cb7)[_0x2c83ad(0x1d5)]();return _0x3e49b8==='-'||_0x3e49b8==='undefined'?_0x150631:_0x3e49b8;}function firstValid(_0x400b51,_0x352f19){for(const _0x36dce3 of _0x400b51){const _0x9f1983=getValidValue(_0x36dce3,'');if(_0x9f1983)return _0x9f1983;}return _0x352f19;}function resolveOperator(_0x46863d,_0x535e3e){const _0x31eeab=_0x39cf9a,_0x50b65e=getOperatorName(_0x535e3e&&_0x535e3e['Operator']||'',_0x535e3e&&_0x535e3e['SPN']||'');if(_0x50b65e==='未知'&&_0x46863d&&_0x46863d['SPN'])return String(_0x46863d[_0x31eeab(0x1be)]);return _0x50b65e;}function formatUptime(_0x204103){const _0x3bc27c=parseInt(_0x204103||0x0)||0x0,_0x2b975d=Math['floor'](_0x3bc27c/0x15180),_0x2a152c=Math['floor'](_0x3bc27c%0x15180/0xe10),_0x36e1ee=Math['floor'](_0x3bc27c%0xe10/0x3c),_0x1fbd1c=[];if(_0x2b975d>0x0)_0x1fbd1c['push'](_0x2b975d+'天');if(_0x2a152c>0x0||_0x2b975d>0x0)_0x1fbd1c['push'](_0x2a152c+'小时');return _0x1fbd1c['push'](_0x36e1ee+'分'),_0x1fbd1c['join']('\x20');}function formatUptimeShort(_0x5247e0){const _0x42a7ee=parseInt(_0x5247e0||0x0)||0x0,_0x143c89=Math['floor'](_0x42a7ee/0x15180),_0x578d7d=Math['floor'](_0x42a7ee%0x15180/0xe10),_0x4e449e=Math['floor'](_0x42a7ee%0xe10/0x3c),_0xbc7030=[];if(_0x143c89>0x0)_0xbc7030['push'](_0x143c89+'天');if(_0x578d7d>0x0||_0x143c89>0x0)_0xbc7030['push'](_0x578d7d+'时');return _0xbc7030['push'](_0x4e449e+'分'),_0xbc7030['join']('');}function trafficMbToBytes(_0x53c63c){const _0x420f4a=parseFloat(_0x53c63c||0x0);if(isNaN(_0x420f4a))return 0x0;return Math['round'](_0x420f4a*0x400*0x400);}function formatTraffic(_0x108b12){const _0x2c5432=Number(_0x108b12||0x0);if(!isFinite(_0x2c5432)||_0x2c5432<=0x0)return'0M';const _0x3d6a5d=0x400*0x400,_0x2a02ea=0x400*_0x3d6a5d;if(_0x2c5432>=_0x2a02ea)return(_0x2c5432/_0x2a02ea)['toFixed'](0x1)+'G';return(_0x2c5432/_0x3d6a5d)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x5000e9){const _0x27d70b=_0x39cf9a,_0xfce231=Number(_0x5000e9||0x0);if(!isFinite(_0xfce231)||_0xfce231<=0x0)return'0';const _0x23183a=0x400,_0x2488e1=0x400*_0x23183a,_0x1840e7=0x400*_0x2488e1;if(_0xfce231>=_0x1840e7){const _0xfe1436=_0xfce231/_0x1840e7;return(_0xfe1436>=0x64?_0xfe1436[_0x27d70b(0x1cd)](0x0):_0xfe1436['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0xfce231>=_0x2488e1)return Math['round'](_0xfce231/_0x2488e1)+'M';if(_0xfce231>=_0x23183a)return Math[_0x27d70b(0x1cb)](_0xfce231/_0x23183a)+'K';return String(Math['round'](_0xfce231));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x3bd3e9){const _0x3657a0=_0x39cf9a;if(!_0x3bd3e9)return ZERO_TRAFFIC;const _0xe4d0a8=_0x3bd3e9['day_rx_traffic']!==undefined||_0x3bd3e9[_0x3657a0(0x1c1)]!==undefined||_0x3bd3e9['month_rx_traffic']!==undefined||_0x3bd3e9['month_tx_traffic']!==undefined;if(!_0xe4d0a8)return{'todayBytes':Number(_0x3bd3e9[_0x3657a0(0x1ae)])||0x0,'monthBytes':Number(_0x3bd3e9['monthBytes'])||0x0,'todayRx':Number(_0x3bd3e9['todayRx'])||0x0,'todayTx':Number(_0x3bd3e9['todayTx'])||0x0,'monthRx':Number(_0x3bd3e9['monthRx'])||0x0,'monthTx':Number(_0x3bd3e9['monthTx'])||0x0};const _0x38df37=trafficMbToBytes(_0x3bd3e9['day_rx_traffic']),_0x280662=trafficMbToBytes(_0x3bd3e9['day_tx_traffic']),_0x5dd7a6=trafficMbToBytes(_0x3bd3e9['month_rx_traffic']),_0x528f48=trafficMbToBytes(_0x3bd3e9['month_tx_traffic']);return{'todayBytes':_0x38df37+_0x280662,'monthBytes':_0x5dd7a6+_0x528f48,'todayRx':_0x38df37,'todayTx':_0x280662,'monthRx':_0x5dd7a6,'monthTx':_0x528f48};}function trafficRxRatio(_0x318c78,_0x340301){const _0x10f885=Number(_0x318c78||0x0)+Number(_0x340301||0x0);if(!isFinite(_0x10f885)||_0x10f885<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x318c78||0x0)/_0x10f885));}function getOperatorName(_0x175bf6,_0x27007a){const _0x12c181=_0x39cf9a;if(!_0x175bf6)return _0x27007a||'未知';const _0x4c4e57=String(_0x175bf6)['toUpperCase']();if(_0x4c4e57[_0x12c181(0x1c0)]('CMCC')||_0x4c4e57==='中国移动'||_0x4c4e57[_0x12c181(0x1c0)]('CHINA\x20MOBILE'))return'中国移动';if(_0x4c4e57['includes']('CUCC')||_0x4c4e57==='中国联通'||_0x4c4e57['includes']('CHINA\x20UNICOM')||_0x4c4e57['includes']('UNICOM'))return'中国联通';if(_0x4c4e57['includes'](_0x12c181(0x1c8))||_0x4c4e57==='CT'||_0x4c4e57==='中国电信'||_0x4c4e57['includes']('CHINA\x20TELECOM')||_0x4c4e57['includes']('TELECOM'))return'中国电信';if(_0x4c4e57['includes'](_0x12c181(0x1bc))||_0x4c4e57===_0x12c181(0x1d2)||_0x4c4e57['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x175bf6;}function getSignalColor(_0x368fb2,_0x381e01){let _0x4f9ce2=parseInt(_0x368fb2);if(isNaN(_0x4f9ce2))_0x4f9ce2=-0x78;if(_0x4f9ce2>-0x59)return _0x381e01['ok'];if(_0x4f9ce2>-0x63)return _0x381e01['warn'];return _0x381e01['bad'];}function getSinrColor(_0x3aa93c,_0x5887ed){const _0x18d15f=_0x39cf9a;let _0x195783=parseFloat(_0x3aa93c);if(isNaN(_0x195783))_0x195783=0x0;if(_0x195783>0xf)return _0x5887ed['ok'];if(_0x195783>0x8)return _0x5887ed[_0x18d15f(0x1ca)];return _0x5887ed['bad'];}function getAllBands(_0x2b8344,_0x7934d7,_0x29a8f6){const _0x1d3ec4=_0x39cf9a,_0x53ca7c=[],_0x19abe9=_0x29a8f6?'N':'B',_0x231ed7=getValidValue(_0x2b8344?.[_0x1d3ec4(0x1c7)]||_0x2b8344?.['NR_BAND']||_0x2b8344?.['LTE_BAND'],'');if(_0x231ed7)_0x53ca7c['push'](_0x19abe9+_0x231ed7);for(const _0x5958bf of _0x7934d7?.['sub_CA_info']||[]){const _0x148ce9=String(_0x5958bf?.['Band']||'');if(_0x148ce9&&_0x148ce9!=='-')_0x53ca7c['push'](_0x19abe9+_0x148ce9);}if(_0x53ca7c['length']===0x0)_0x53ca7c['push'](_0x29a8f6?'N78':'B3');return _0x53ca7c;}function getCaBadgeText(_0x260afa,_0x3961c9,_0x14bf32){const _0xc7dc2=(_0x3961c9?'5G\x20':'4G\x20')+_0x14bf32;if(!_0x3961c9)return _0xc7dc2;const _0x2efb6b=0x1+(_0x260afa&&_0x260afa['sub_CA_info']||[])['length'];if(_0x2efb6b>=0x4)return'5GA+';if(_0x2efb6b===0x3)return'5GA';if(_0x2efb6b===0x2)return'5G+';return _0xc7dc2;}function getCarrierCountText(_0x451119){const _0x1144cf=_0x39cf9a,_0x3e6170=(_0x451119&&_0x451119['sub_CA_info']||[])[_0x1144cf(0x1c5)];if(_0x3e6170===0x0)return _0x1144cf(0x1d3);if(_0x3e6170===0x1)return'双载波';if(_0x3e6170===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x4a397a,_0x4eb2a8,_0x288a70){const _0x2de58e=_0x39cf9a,_0x327b71=String(_0x288a70||'')['toUpperCase']();if(!_0x4eb2a8){if(!_0x327b71||_0x327b71==='4G'||_0x327b71===_0x2de58e(0x1d0))return'4G\x20LTE';return'4G\x20'+_0x327b71;}const _0x1875fe=0x1+(_0x4a397a&&_0x4a397a['sub_CA_info']||[])['length'];if(_0x1875fe>=0x4)return'5GA+';if(_0x1875fe===0x3)return'5GA';if(_0x1875fe===0x2)return'5G+';return _0x327b71?'5G\x20'+_0x327b71:'5G\x20SA';}function rsrpToPercent(_0x48a0e5){let _0x27a0b6=parseInt(_0x48a0e5);if(isNaN(_0x27a0b6))_0x27a0b6=-0x78;const _0x41c110=Math['min'](-0x46,Math['max'](-0x78,_0x27a0b6)),_0x10645e=(_0x41c110+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x10645e*0x5a));}function sinrToPercent(_0x707243){let _0x3e0cb9=parseFloat(_0x707243);if(isNaN(_0x3e0cb9))_0x3e0cb9=0x0;return Math['min'](0x64,Math['max'](0x0,_0x3e0cb9/0x19*0x64));}function resolveDeviceName(_0x2575a0,_0x3f7d88){const _0x568001=_0x2575a0&&_0x2575a0['Name']!=null?String(_0x2575a0['Name'])['trim']():'';if(!_0x568001)return _0x3f7d88;if(_0x568001==='--'||_0x568001==='undefined'||_0x568001==='null'||_0x568001==='0')return _0x3f7d88;return _0x568001;}function rsrpToBars(_0x3cb415){const _0xe582f9=parseInt(_0x3cb415);if(isNaN(_0xe582f9))return 0x0;if(_0xe582f9>=-0x55)return 0x4;if(_0xe582f9>=-0x5f)return 0x3;if(_0xe582f9>=-0x69)return 0x2;if(_0xe582f9>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x469310){if(!_0x469310)return 0x0;if(typeof _0x469310['onlineDevices']==='number')return _0x469310['onlineDevices'];const _0x25d698=_0x469310['MainBaseInfo'];if(!Array['isArray'](_0x25d698))return 0x0;return _0x25d698['filter'](_0x9c4792=>_0x9c4792&&String(_0x9c4792['NetStatus'])==='1')['length'];}function urlDecode(_0x30bd0c){const _0x5c6593=_0x39cf9a,_0x68c102=[];for(let _0x42421d=0x0;_0x42421d<_0x30bd0c['length'];_0x42421d+=0x2)_0x68c102['push'](parseInt(_0x30bd0c[_0x5c6593(0x1c3)](_0x42421d,0x2),0x10));let _0x58718d='';for(let _0x5058d1=0x0;_0x5058d1<_0x68c102['length'];){const _0x22f58a=_0x68c102[_0x5058d1];if(_0x22f58a<0x80)_0x58718d+=String[_0x5c6593(0x1b9)](_0x22f58a),_0x5058d1++;else{if(_0x22f58a>>0x5===0x6)_0x58718d+=String['fromCharCode']((_0x22f58a&0x1f)<<0x6|_0x68c102[_0x5058d1+0x1]&0x3f),_0x5058d1+=0x2;else _0x22f58a>>0x4===0xe?(_0x58718d+=String['fromCharCode']((_0x22f58a&0xf)<<0xc|(_0x68c102[_0x5058d1+0x1]&0x3f)<<0x6|_0x68c102[_0x5058d1+0x2]&0x3f),_0x5058d1+=0x3):(_0x58718d+=String['fromCharCode']((_0x22f58a&0x7)<<0x12|(_0x68c102[_0x5058d1+0x1]&0x3f)<<0xc|(_0x68c102[_0x5058d1+0x2]&0x3f)<<0x6|_0x68c102[_0x5058d1+0x3]),_0x5058d1+=0x4);}}return _0x58718d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x39cf9a(0x1d7),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x4f5a1b=_0x39cf9a,_0x150848='0123456789ABCDEF';let _0x4b21aa='';for(let _0x3c2e4c=0x0;_0x3c2e4c<0x20;_0x3c2e4c++)_0x4b21aa+=_0x150848[Math[_0x4f5a1b(0x1da)](Math[_0x4f5a1b(0x1c2)]()*0x10)];return _0x4b21aa;}function generateSequenceId(_0x34d97d){return _0x34d97d+'_'+Date['now']()['toString'](0x24);}function _0x5d35(_0x3ddd79,_0x62f87){_0x3ddd79=_0x3ddd79-0x1ae;const _0x52a336=_0x52a3();let _0x5d35b0=_0x52a336[_0x3ddd79];if(_0x5d35['hLLnNj']===undefined){var _0x4aee1e=function(_0x4ff265){const _0x8cb205='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x37c856='',_0x142f70='';for(let _0x199b5c=0x0,_0x577c27,_0x46ffae,_0x23d3b7=0x0;_0x46ffae=_0x4ff265['charAt'](_0x23d3b7++);~_0x46ffae&&(_0x577c27=_0x199b5c%0x4?_0x577c27*0x40+_0x46ffae:_0x46ffae,_0x199b5c++%0x4)?_0x37c856+=String['fromCharCode'](0xff&_0x577c27>>(-0x2*_0x199b5c&0x6)):0x0){_0x46ffae=_0x8cb205['indexOf'](_0x46ffae);}for(let _0xfa114d=0x0,_0x181cb7=_0x37c856['length'];_0xfa114d<_0x181cb7;_0xfa114d++){_0x142f70+='%'+('00'+_0x37c856['charCodeAt'](_0xfa114d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x142f70);};_0x5d35['OWtmHX']=_0x4aee1e,_0x5d35['FDmzjY']={},_0x5d35['hLLnNj']=!![];}const _0x15577b=_0x52a336[0x0];_0x5d35['gdeOOH']!==_0x15577b&&(_0x5d35['FDmzjY']={},_0x5d35['gdeOOH']=_0x15577b);const _0x1a0dc5=_0x5d35['FDmzjY'][_0x3ddd79];return _0x1a0dc5===undefined?(_0x5d35b0=_0x5d35['OWtmHX'](_0x5d35b0),_0x5d35['FDmzjY'][_0x3ddd79]=_0x5d35b0):_0x5d35b0=_0x1a0dc5,_0x5d35b0;}function classifyFault(_0x57e1ab){const _0x2b41b6=_0x39cf9a;if(!_0x57e1ab||_0x57e1ab['length']===0x0)return null;if(_0x57e1ab['some'](_0x1176c7=>AUTH_ERROR_CODES[_0x2b41b6(0x1d9)](_0x1176c7)>=0x0))return _0x2b41b6(0x1d1);if(_0x57e1ab['some'](_0x1c0064=>DEVICE_ERROR_CODES['indexOf'](_0x1c0064)>=0x0))return'device';return'network';}function _0x52a3(){const _0x5d150b=['mty2mKTVwxzqzW','mtC2ntrRDKfsDhG','mZuYmJu0ngjuCe9nwG','nJy1nZaYthPcyLji','C3vIx0nbx2LUzM8','zNjVBunOyxjdB2rL','nZeXnJG1tLfYquTk','Dg9Rzw4','q0jo','uM91DgvY','u1bo','AM9PBG','Aw5JBhvKzxm','zgf5x3r4x3rYywzMAwm','CMfUzg9T','C3vIC3rY','ChvZAa','BgvUz3rO','r0vux0nbuLjjrvjFquDhuKvhqvrjt05Fsu5gtW','qKfora','q1rdqW','CNnWugfYyw0','D2fYBG','CM91BMq','B2jQzwn0','Dg9gAxHLza','Bg9N','tLjFqKfora','tfrf','yxv0Aa','5lIT5zU95BM/55s1','5y2v6l295RoI','mJKZotGWEwnxvK1i','DhjPBq','54o954gRq1bf','77Yb6k6+5Ash56A757Q/','BM93','Aw5KzxHpzG','zMXVB3i','y2HHCKnVzgvbDa','CMv0DxjUx1bHCMfTzxrLCG','Dg9KyxLcExrLCW','ntC4mtm5mNPcs1vOBq','vxbuAw1L','ywXSu2v0DgXLza','5PYQ6ywn572UifrVA2vU','mJC2nZiZm2T0EgjbsG'];_0x52a3=function(){return _0x5d150b;};return _0x52a3();}function readResult(_0x5ca9de,_0x54c16a){const _0xdd6343=_0x39cf9a;if(!_0x5ca9de||_0x5ca9de['status']!=='fulfilled'||!_0x5ca9de['value'])return _0x54c16a['push'](NET_ERROR_CODE),null;const _0x10dcf6=_0x5ca9de['value'];if(_0x10dcf6['resultCode']===0x0)return _0x10dcf6;return _0x54c16a[_0xdd6343(0x1c4)](typeof _0x10dcf6['resultCode']==='number'?_0x10dcf6['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3563fb,_0x42966f,_0x5da4bc,_0x264a6c,_0x3b9c76){const _0x29c6f4=_0x39cf9a;if(!_0x5da4bc)return null;const _0x35e82d={'CmdType':_0x3563fb,..._0x42966f};if(!_0x35e82d['SequenceId'])_0x35e82d['SequenceId']=generateSequenceId(_0x3563fb);const _0x264c05={'appVersion':urlDecode('322e322e3531'),'mac':_0x264a6c,'timeout':0x3,'token':_0x5da4bc,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x35e82d)}),'operatorId':getOperatorId()},_0x414c51=new AbortController(),_0x2edc97=setTimeout(()=>{try{_0x414c51['abort']();}catch(_0x437182){}},_0x3b9c76);try{const _0x1f50b1=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x5da4bc},'body':JSON['stringify'](_0x264c05),'signal':_0x414c51['signal']}),_0x220b4b=await _0x1f50b1['json']();if(_0x220b4b&&_0x220b4b['rspParam']){const _0x26a503=JSON['parse'](_0x220b4b[_0x29c6f4(0x1c9)]);if(_0x26a503['Result']===0x0&&_0x26a503[_0x29c6f4(0x1dc)]){const _0x173742=String(_0x26a503['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x288437=JSON['parse'](decodeBase64Utf8(_0x173742));return{..._0x288437,'resultCode':0x0};}}return _0x220b4b||{'resultCode':NET_ERROR_CODE};}catch(_0x2abf00){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x2edc97);}}function decodeBase64Utf8(_0x2de69a){const _0x4fa69c=_0x39cf9a,_0x506415=atob(_0x2de69a);try{const _0x485d0a=new Uint8Array(_0x506415['length']);for(let _0x48c5e2=0x0;_0x48c5e2<_0x506415['length'];_0x48c5e2++)_0x485d0a[_0x48c5e2]=_0x506415[_0x4fa69c(0x1db)](_0x48c5e2);return new TextDecoder('utf-8')['decode'](_0x485d0a);}catch(_0x4b47d8){return _0x506415;}}async function fetchCpeApi(_0x447a4a,_0x484bb3,_0x3b038c,_0x16d18f={},_0x5ccce3=0xbb8){const _0x2d7ab5=_0x39cf9a;if(!_0x484bb3)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0x2d7ab5(0x1b2)};return await performCpeRequest(_0x447a4a,_0x16d18f,_0x484bb3,_0x3b038c,_0x5ccce3);}function isEmpty(_0x12e2da){const _0x3b0050=_0x39cf9a;return!_0x12e2da||typeof _0x12e2da===_0x3b0050(0x1cc)&&Object['keys'](_0x12e2da)['length']===0x0;}async function fetchAll(_0x8b9d47){const _0x5e88e6=_0x39cf9a,_0x2747da=_0x8b9d47['token'],_0x450bd8=_0x8b9d47['mac'],_0x5a92dd=0xbb8,_0x5c8f53=await Promise[_0x5e88e6(0x1b1)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x2747da,_0x450bd8,{},0x9c4),fetchCpeApi(_0x5e88e6(0x1c6),_0x2747da,_0x450bd8,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x2747da,_0x450bd8,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x2747da,_0x450bd8,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x2747da,_0x450bd8,{},0xbb8)]),_0xd78cd7=[];let _0x1d08ed=readResult(_0x5c8f53[0x0],_0xd78cd7),_0x13bcf4=readResult(_0x5c8f53[0x1],_0xd78cd7),_0x371aa5=readResult(_0x5c8f53[0x2],_0xd78cd7),_0x59ee4b=readResult(_0x5c8f53[0x3],_0xd78cd7);const _0xa537c9=readResult(_0x5c8f53[0x4],_0xd78cd7);if(_0x371aa5)_0x371aa5=_0x371aa5['MainRouter']||_0x371aa5[_0x5e88e6(0x1bd)]||_0x371aa5;const _0xf27ae5=[_0x1d08ed,_0x13bcf4,_0x371aa5,_0x59ee4b,_0xa537c9]['filter'](_0x5c7424=>!isEmpty(_0x5c7424))['length'],_0x51c030=_0xf27ae5===0x0?classifyFault(_0xd78cd7):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0xf27ae5+'/5\x20|\x20fault='+(_0x51c030||'-')+'\x20|\x20失败码=['+_0xd78cd7[_0x5e88e6(0x1bf)](',')+']'),{'rf':_0x1d08ed,'ca':_0x13bcf4,'topo':_0x371aa5,'sim':_0x59ee4b,'traffic':_0xa537c9,'failCodes':_0xd78cd7,'fault':_0x51c030,'successCount':_0xf27ae5};}function saveCache(_0x2e3858){const _0x5b2916=_0x39cf9a;try{const _0x52eb30=parseTrafficData(_0x2e3858['traffic']),_0x6426fe={'rf':{'WorkMode':_0x2e3858['rf']?.['WorkMode'],'SSB_RSRP':_0x2e3858['rf']?.['SSB_RSRP'],'RSRP':_0x2e3858['rf']?.['RSRP'],'SSB_SINR':_0x2e3858['rf']?.['SSB_SINR'],'SINR':_0x2e3858['rf']?.['SINR'],'SSB_RSRQ':_0x2e3858['rf']?.['SSB_RSRQ'],'RSRQ':_0x2e3858['rf']?.['RSRQ'],'SSB_RSSI':_0x2e3858['rf']?.['SSB_RSSI'],'RSSI':_0x2e3858['rf']?.['RSSI'],'BAND':_0x2e3858['rf']?.['BAND'],'NR_BAND':_0x2e3858['rf']?.[_0x5b2916(0x1cf)],'LTE_BAND':_0x2e3858['rf']?.['LTE_BAND'],'PCI':_0x2e3858['rf']?.['PCI'],'SPN':_0x2e3858['rf']?.[_0x5b2916(0x1be)]},'ca':{'main_CA_info':_0x2e3858['ca']?.['main_CA_info']||{},'sub_CA_info':_0x2e3858['ca']?.[_0x5b2916(0x1b8)]||[]},'topo':{'NetStatus':_0x2e3858['topo']?.['NetStatus'],'UpTime':_0x2e3858['topo']?.[_0x5b2916(0x1b0)],'Name':_0x2e3858['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x2e3858['topo'])},'sim':{'Operator':_0x2e3858['sim']?.['Operator'],'SPN':_0x2e3858['sim']?.['SPN']},'traffic':{'todayBytes':_0x52eb30['todayBytes'],'monthBytes':_0x52eb30['monthBytes'],'todayRx':_0x52eb30['todayRx'],'todayTx':_0x52eb30['todayTx'],'monthRx':_0x52eb30['monthRx'],'monthTx':_0x52eb30['monthTx']},'ts':Date[_0x5b2916(0x1d8)]()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x6426fe));}catch(_0x1a8a41){console[_0x5b2916(0x1ce)]('⚠️\x20写缓存失败\x20|\x20'+_0x1a8a41);}}function loadCache(){try{const _0x212fef=Keychain['get'](KEY_CACHE);if(!_0x212fef)return null;const _0x56c390=JSON['parse'](_0x212fef);if(!_0x56c390||typeof _0x56c390!=='object')return null;return _0x56c390;}catch(_0x597593){return null;}}
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
