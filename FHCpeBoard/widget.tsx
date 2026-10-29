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

const _0x184169=_0x3209;(function(_0x391ca6,_0x446d6d){const _0x10ab20=_0x3209,_0x5d9618=_0x391ca6();while(!![]){try{const _0xe25dcd=-parseInt(_0x10ab20(0xf1))/0x1*(parseInt(_0x10ab20(0xe9))/0x2)+parseInt(_0x10ab20(0xdc))/0x3*(parseInt(_0x10ab20(0xe2))/0x4)+-parseInt(_0x10ab20(0xdb))/0x5+parseInt(_0x10ab20(0xd5))/0x6*(-parseInt(_0x10ab20(0xf9))/0x7)+parseInt(_0x10ab20(0xdf))/0x8*(-parseInt(_0x10ab20(0xe0))/0x9)+parseInt(_0x10ab20(0xea))/0xa*(-parseInt(_0x10ab20(0xef))/0xb)+parseInt(_0x10ab20(0xd7))/0xc*(parseInt(_0x10ab20(0xf7))/0xd);if(_0xe25dcd===_0x446d6d)break;else _0x5d9618['push'](_0x5d9618['shift']());}catch(_0x2df488){_0x5d9618['push'](_0x5d9618['shift']());}}}(_0x2425,0xcb1e0));const TOKEN_KEY=_0x184169(0xf4),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x1a3eef,_0x196d48){try{const _0x45d215=Keychain['get'](_0x1a3eef);return _0x45d215===null||_0x45d215===undefined||_0x45d215===''?_0x196d48:String(_0x45d215)['trim']();}catch(_0x2d70da){return _0x196d48;}}function _0x3209(_0x4e05ef,_0x3b4e60){_0x4e05ef=_0x4e05ef-0xcf;const _0x242579=_0x2425();let _0x32094a=_0x242579[_0x4e05ef];if(_0x3209['qQbUxF']===undefined){var _0x45f92d=function(_0x2c538f){const _0x3aa93f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4a5f2d='',_0x1a3eef='';for(let _0x196d48=0x0,_0x45d215,_0x2d70da,_0xf662d1=0x0;_0x2d70da=_0x2c538f['charAt'](_0xf662d1++);~_0x2d70da&&(_0x45d215=_0x196d48%0x4?_0x45d215*0x40+_0x2d70da:_0x2d70da,_0x196d48++%0x4)?_0x4a5f2d+=String['fromCharCode'](0xff&_0x45d215>>(-0x2*_0x196d48&0x6)):0x0){_0x2d70da=_0x3aa93f['indexOf'](_0x2d70da);}for(let _0xa18b57=0x0,_0x2c0428=_0x4a5f2d['length'];_0xa18b57<_0x2c0428;_0xa18b57++){_0x1a3eef+='%'+('00'+_0x4a5f2d['charCodeAt'](_0xa18b57)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1a3eef);};_0x3209['fpRfBd']=_0x45f92d,_0x3209['hzvLHl']={},_0x3209['qQbUxF']=!![];}const _0x4bf8aa=_0x242579[0x0];_0x3209['ZcqVga']!==_0x4bf8aa&&(_0x3209['hzvLHl']={},_0x3209['ZcqVga']=_0x4bf8aa);const _0x499faf=_0x3209['hzvLHl'][_0x4e05ef];return _0x499faf===undefined?(_0x32094a=_0x3209['fpRfBd'](_0x32094a),_0x3209['hzvLHl'][_0x4e05ef]=_0x32094a):_0x32094a=_0x499faf,_0x32094a;}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xf662d1){const _0x2c8ae6=_0x184169;try{if(_0xf662d1['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0xf662d1['token'])['trim']());if(_0xf662d1['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0xf662d1['mac'])['trim']()||DEFAULT_MAC);if(_0xf662d1['deviceName']!==undefined)Keychain[_0x2c8ae6(0xeb)](NAME_KEY,String(_0xf662d1[_0x2c8ae6(0xe5)])['trim']()||DEFAULT_NAME);}catch(_0xa18b57){console[_0x2c8ae6(0xf6)]('⚠️\x20保存设置失败\x20|\x20'+_0xa18b57);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x2c0428,_0x5613c7){const _0x5e36c6=_0x184169;if(_0x2c0428===undefined||_0x2c0428===null||_0x2c0428==='')return _0x5613c7;const _0x232ffd=String(_0x2c0428)[_0x5e36c6(0xf3)]();return _0x232ffd==='-'||_0x232ffd==='undefined'?_0x5613c7:_0x232ffd;}function firstValid(_0x4a2427,_0x3747d0){for(const _0x48e47c of _0x4a2427){const _0xf0a867=getValidValue(_0x48e47c,'');if(_0xf0a867)return _0xf0a867;}return _0x3747d0;}function resolveOperator(_0x222aaa,_0x3d247a){const _0x27de3f=_0x184169,_0x2e4198=getOperatorName(_0x3d247a&&_0x3d247a[_0x27de3f(0xfa)]||'',_0x3d247a&&_0x3d247a['SPN']||'');if(_0x2e4198==='未知'&&_0x222aaa&&_0x222aaa['SPN'])return String(_0x222aaa['SPN']);return _0x2e4198;}function formatUptime(_0x52c061){const _0x2e64f1=_0x184169,_0x2db837=parseInt(_0x52c061||0x0)||0x0,_0x43bce2=Math['floor'](_0x2db837/0x15180),_0x11125d=Math['floor'](_0x2db837%0x15180/0xe10),_0x5435a7=Math[_0x2e64f1(0xe7)](_0x2db837%0xe10/0x3c),_0x2e552c=[];if(_0x43bce2>0x0)_0x2e552c['push'](_0x43bce2+'天');if(_0x11125d>0x0||_0x43bce2>0x0)_0x2e552c['push'](_0x11125d+'小时');return _0x2e552c[_0x2e64f1(0xe8)](_0x5435a7+'分'),_0x2e552c['join']('\x20');}function formatUptimeShort(_0x5aefdf){const _0x113c99=_0x184169,_0x21e5e0=parseInt(_0x5aefdf||0x0)||0x0,_0x37de9e=Math['floor'](_0x21e5e0/0x15180),_0x261101=Math['floor'](_0x21e5e0%0x15180/0xe10),_0x583908=Math['floor'](_0x21e5e0%0xe10/0x3c),_0x355634=[];if(_0x37de9e>0x0)_0x355634['push'](_0x37de9e+'天');if(_0x261101>0x0||_0x37de9e>0x0)_0x355634[_0x113c99(0xe8)](_0x261101+'时');return _0x355634['push'](_0x583908+'分'),_0x355634['join']('');}function trafficMbToBytes(_0x58e47f){const _0x2f65ef=parseFloat(_0x58e47f||0x0);if(isNaN(_0x2f65ef))return 0x0;return Math['round'](_0x2f65ef*0x400*0x400);}function _0x2425(){const _0x18b7c7=['B25SAw5Lrgv2AwnLCW','Dw5KzwzPBMvK','5lIT5zU95BM/55s1','ntyXntaXmhjHueHpBa','ouDmBwLbDW','A2v5CW','C3vIx0nbx2LUzM8','nZu1ody2nhb5tKjuqW','oujMsvDruG','u0LouG','mte2nZG3mLzAyKjJrG','CMvWBgfJzq','Dg9gAxHLza','zgv2AwnLtMfTzq','u1ncx1jtuLa','zMXVB3i','ChvZAa','ntCWodjnyLfosgO','mZK0ndy4meriAhLpua','C2v0','uLntsq','5y2v6l295RoI','Aw5JBhvKzxm','mtftuhLivg4','5lIT5zU956E75yQO','mJv4tu5urvy','C3rYAw5NAwz5','DhjPBq','q1bfx1rps0vo','DhjHzMzPyW','Bg9N','mti5ntCZmdHNBevls3y','CMvZDwX0q29Kzq','ntK4ndGWneHjyxPKDG','t3bLCMf0B3i','tMv0u3rHDhvZ','vu5jq09n','u2vXDwvUy2vjza','BwLU','B2jQzwn0','u1bo','BNvTyMvY','Bw9UDgHcExrLCW','nMHov3z2Bq','nZq2ntCYnMq2otzLnJe2yW','ndHIzwjTDhm'];_0x2425=function(){return _0x18b7c7;};return _0x2425();}function formatTraffic(_0x4c6f69){const _0x364bb8=Number(_0x4c6f69||0x0);if(!isFinite(_0x364bb8)||_0x364bb8<=0x0)return'0M';const _0x14acea=0x400*0x400,_0x1f5c13=0x400*_0x14acea;if(_0x364bb8>=_0x1f5c13)return(_0x364bb8/_0x1f5c13)['toFixed'](0x1)+'G';return(_0x364bb8/_0x14acea)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x446ee0){const _0x5f146c=_0x184169,_0x2e1ec9=Number(_0x446ee0||0x0);if(!isFinite(_0x2e1ec9)||_0x2e1ec9<=0x0)return'0';const _0x2cbdf3=0x400,_0x937c78=0x400*_0x2cbdf3,_0x30d27b=0x400*_0x937c78;if(_0x2e1ec9>=_0x30d27b){const _0x515b02=_0x2e1ec9/_0x30d27b;return(_0x515b02>=0x64?_0x515b02['toFixed'](0x0):_0x515b02[_0x5f146c(0xe4)](0x1)['replace'](/\.0$/,''))+'G';}if(_0x2e1ec9>=_0x937c78)return Math['round'](_0x2e1ec9/_0x937c78)+'M';if(_0x2e1ec9>=_0x2cbdf3)return Math['round'](_0x2e1ec9/_0x2cbdf3)+'K';return String(Math['round'](_0x2e1ec9));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x58c276){if(!_0x58c276)return ZERO_TRAFFIC;const _0x39510d=_0x58c276['day_rx_traffic']!==undefined||_0x58c276['day_tx_traffic']!==undefined||_0x58c276['month_rx_traffic']!==undefined||_0x58c276['month_tx_traffic']!==undefined;if(!_0x39510d)return{'todayBytes':Number(_0x58c276['todayBytes'])||0x0,'monthBytes':Number(_0x58c276['monthBytes'])||0x0,'todayRx':Number(_0x58c276['todayRx'])||0x0,'todayTx':Number(_0x58c276['todayTx'])||0x0,'monthRx':Number(_0x58c276['monthRx'])||0x0,'monthTx':Number(_0x58c276['monthTx'])||0x0};const _0x5e5bfb=trafficMbToBytes(_0x58c276['day_rx_traffic']),_0x1bb99b=trafficMbToBytes(_0x58c276['day_tx_traffic']),_0x1c1dfe=trafficMbToBytes(_0x58c276['month_rx_traffic']),_0x28fa8d=trafficMbToBytes(_0x58c276['month_tx_traffic']);return{'todayBytes':_0x5e5bfb+_0x1bb99b,'monthBytes':_0x1c1dfe+_0x28fa8d,'todayRx':_0x5e5bfb,'todayTx':_0x1bb99b,'monthRx':_0x1c1dfe,'monthTx':_0x28fa8d};}function trafficRxRatio(_0xde0db9,_0x24424c){const _0x10ca9d=_0x184169,_0x2fe404=Number(_0xde0db9||0x0)+Number(_0x24424c||0x0);if(!isFinite(_0x2fe404)||_0x2fe404<=0x0)return 0.5;return Math[_0x10ca9d(0xd0)](0.94,Math['max'](0.06,Number(_0xde0db9||0x0)/_0x2fe404));}function getOperatorName(_0x3cc43a,_0x508ee6){const _0x2b9c72=_0x184169;if(!_0x3cc43a)return _0x508ee6||'未知';const _0x4ec036=String(_0x3cc43a)['toUpperCase']();if(_0x4ec036[_0x2b9c72(0xee)]('CMCC')||_0x4ec036==='中国移动'||_0x4ec036['includes']('CHINA\x20MOBILE'))return _0x2b9c72(0xf0);if(_0x4ec036[_0x2b9c72(0xee)]('CUCC')||_0x4ec036==='中国联通'||_0x4ec036['includes']('CHINA\x20UNICOM')||_0x4ec036['includes'](_0x2b9c72(0xfc)))return'中国联通';if(_0x4ec036['includes']('CTCC')||_0x4ec036==='CT'||_0x4ec036==='中国电信'||_0x4ec036['includes']('CHINA\x20TELECOM')||_0x4ec036['includes']('TELECOM'))return'中国电信';if(_0x4ec036['includes']('CBN')||_0x4ec036===_0x2b9c72(0xda)||_0x4ec036['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x3cc43a;}function getSignalColor(_0x492f19,_0x5aa1a3){let _0x2b90c8=parseInt(_0x492f19);if(isNaN(_0x2b90c8))_0x2b90c8=-0x78;if(_0x2b90c8>-0x59)return _0x5aa1a3['ok'];if(_0x2b90c8>-0x63)return _0x5aa1a3['warn'];return _0x5aa1a3['bad'];}function getSinrColor(_0x2b3bb2,_0x1dc64e){let _0x5a05dd=parseFloat(_0x2b3bb2);if(isNaN(_0x5a05dd))_0x5a05dd=0x0;if(_0x5a05dd>0xf)return _0x1dc64e['ok'];if(_0x5a05dd>0x8)return _0x1dc64e['warn'];return _0x1dc64e['bad'];}function getAllBands(_0x3e7a2e,_0x2a889a,_0x37bed8){const _0x29dcde=_0x184169,_0x2ec8f5=[],_0x12b2ea=_0x37bed8?'N':'B',_0x85b199=getValidValue(_0x3e7a2e?.['BAND']||_0x3e7a2e?.['NR_BAND']||_0x3e7a2e?.['LTE_BAND'],'');if(_0x85b199)_0x2ec8f5['push'](_0x12b2ea+_0x85b199);for(const _0x2a20ae of _0x2a889a?.['sub_CA_info']||[]){const _0x302463=String(_0x2a20ae?.['Band']||'');if(_0x302463&&_0x302463!=='-')_0x2ec8f5['push'](_0x12b2ea+_0x302463);}if(_0x2ec8f5['length']===0x0)_0x2ec8f5[_0x29dcde(0xe8)](_0x37bed8?'N78':'B3');return _0x2ec8f5;}function getCaBadgeText(_0x258369,_0x2de56c,_0x2d5810){const _0x3ea3ae=(_0x2de56c?'5G\x20':'4G\x20')+_0x2d5810;if(!_0x2de56c)return _0x3ea3ae;const _0x260881=0x1+(_0x258369&&_0x258369['sub_CA_info']||[])['length'];if(_0x260881>=0x4)return'5GA+';if(_0x260881===0x3)return'5GA';if(_0x260881===0x2)return'5G+';return _0x3ea3ae;}function getCarrierCountText(_0x122057){const _0x50e357=_0x184169,_0x51667b=(_0x122057&&_0x122057['sub_CA_info']||[])['length'];if(_0x51667b===0x0)return _0x50e357(0xed);if(_0x51667b===0x1)return'双载波';if(_0x51667b===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x2f8ac2,_0xf4c232,_0x442e52){const _0x1562bb=String(_0x442e52||'')['toUpperCase']();if(!_0xf4c232){if(!_0x1562bb||_0x1562bb==='4G'||_0x1562bb==='LTE')return'4G\x20LTE';return'4G\x20'+_0x1562bb;}const _0x3c3912=0x1+(_0x2f8ac2&&_0x2f8ac2['sub_CA_info']||[])['length'];if(_0x3c3912>=0x4)return'5GA+';if(_0x3c3912===0x3)return'5GA';if(_0x3c3912===0x2)return'5G+';return _0x1562bb?'5G\x20'+_0x1562bb:'5G\x20SA';}function rsrpToPercent(_0x4e1a75){const _0x35c88e=_0x184169;let _0x3bbea0=parseInt(_0x4e1a75);if(isNaN(_0x3bbea0))_0x3bbea0=-0x78;const _0x4159f7=Math[_0x35c88e(0xd0)](-0x46,Math['max'](-0x78,_0x3bbea0)),_0x3efe66=(_0x4159f7+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x3efe66*0x5a));}function sinrToPercent(_0x49b5a6){let _0x20dab4=parseFloat(_0x49b5a6);if(isNaN(_0x20dab4))_0x20dab4=0x0;return Math['min'](0x64,Math['max'](0x0,_0x20dab4/0x19*0x64));}function resolveDeviceName(_0x1e3eeb,_0x1525ac){const _0x4b6583=_0x184169,_0x28029a=_0x1e3eeb&&_0x1e3eeb['Name']!=null?String(_0x1e3eeb['Name'])['trim']():'';if(!_0x28029a)return _0x1525ac;if(_0x28029a==='--'||_0x28029a===_0x4b6583(0xd9)||_0x28029a==='null'||_0x28029a==='0')return _0x1525ac;return _0x28029a;}function rsrpToBars(_0x569518){const _0x273421=parseInt(_0x569518);if(isNaN(_0x273421))return 0x0;if(_0x273421>=-0x55)return 0x4;if(_0x273421>=-0x5f)return 0x3;if(_0x273421>=-0x69)return 0x2;if(_0x273421>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x48df7b){const _0x4347f7=_0x184169;if(!_0x48df7b)return 0x0;if(typeof _0x48df7b[_0x4347f7(0xd8)]===_0x4347f7(0xd3))return _0x48df7b['onlineDevices'];const _0x2c5347=_0x48df7b['MainBaseInfo'];if(!Array['isArray'](_0x2c5347))return 0x0;return _0x2c5347['filter'](_0x3627c6=>_0x3627c6&&String(_0x3627c6[_0x4347f7(0xfb)])==='1')['length'];}function urlDecode(_0x3d52a3){const _0x3781a0=[];for(let _0x2049ba=0x0;_0x2049ba<_0x3d52a3['length'];_0x2049ba+=0x2)_0x3781a0['push'](parseInt(_0x3d52a3['substr'](_0x2049ba,0x2),0x10));let _0x27e4a9='';for(let _0x443860=0x0;_0x443860<_0x3781a0['length'];){const _0x5b9815=_0x3781a0[_0x443860];if(_0x5b9815<0x80)_0x27e4a9+=String['fromCharCode'](_0x5b9815),_0x443860++;else{if(_0x5b9815>>0x5===0x6)_0x27e4a9+=String['fromCharCode']((_0x5b9815&0x1f)<<0x6|_0x3781a0[_0x443860+0x1]&0x3f),_0x443860+=0x2;else _0x5b9815>>0x4===0xe?(_0x27e4a9+=String['fromCharCode']((_0x5b9815&0xf)<<0xc|(_0x3781a0[_0x443860+0x1]&0x3f)<<0x6|_0x3781a0[_0x443860+0x2]&0x3f),_0x443860+=0x3):(_0x27e4a9+=String['fromCharCode']((_0x5b9815&0x7)<<0x12|(_0x3781a0[_0x443860+0x1]&0x3f)<<0xc|(_0x3781a0[_0x443860+0x2]&0x3f)<<0x6|_0x3781a0[_0x443860+0x3]),_0x443860+=0x4);}}return _0x27e4a9;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x292eb7='0123456789ABCDEF';let _0x3026c2='';for(let _0x57af79=0x0;_0x57af79<0x20;_0x57af79++)_0x3026c2+=_0x292eb7[Math['floor'](Math['random']()*0x10)];return _0x3026c2;}function generateSequenceId(_0x23f151){return _0x23f151+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x4af516){if(!_0x4af516||_0x4af516['length']===0x0)return null;if(_0x4af516['some'](_0x5435a0=>AUTH_ERROR_CODES['indexOf'](_0x5435a0)>=0x0))return'auth';if(_0x4af516['some'](_0x2c4e45=>DEVICE_ERROR_CODES['indexOf'](_0x2c4e45)>=0x0))return'device';return'network';}function readResult(_0x4c909b,_0x3b0859){const _0x1e4e52=_0x184169;if(!_0x4c909b||_0x4c909b['status']!=='fulfilled'||!_0x4c909b['value'])return _0x3b0859[_0x1e4e52(0xe8)](NET_ERROR_CODE),null;const _0x1f1779=_0x4c909b['value'];if(_0x1f1779['resultCode']===0x0)return _0x1f1779;return _0x3b0859[_0x1e4e52(0xe8)](typeof _0x1f1779['resultCode']===_0x1e4e52(0xd3)?_0x1f1779[_0x1e4e52(0xf8)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0x54f834,_0x173efa,_0x42a986,_0x57f4de,_0x386b56){const _0x43d33f=_0x184169;if(!_0x42a986)return null;const _0x99bd0f={'CmdType':_0x54f834,..._0x173efa};if(!_0x99bd0f['SequenceId'])_0x99bd0f[_0x43d33f(0xcf)]=generateSequenceId(_0x54f834);const _0x3046b7={'appVersion':urlDecode('322e322e3531'),'mac':_0x57f4de,'timeout':0x3,'token':_0x42a986,'appType':urlDecode(_0x43d33f(0xd6)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x99bd0f)}),'operatorId':getOperatorId()},_0x2879ba=new AbortController(),_0x1e9b48=setTimeout(()=>{try{_0x2879ba['abort']();}catch(_0x426019){}},_0x386b56);try{const _0x47a9e4=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x42a986},'body':JSON[_0x43d33f(0xf2)](_0x3046b7),'signal':_0x2879ba['signal']}),_0x168742=await _0x47a9e4['json']();if(_0x168742&&_0x168742['rspParam']){const _0x21149a=JSON['parse'](_0x168742['rspParam']);if(_0x21149a['Result']===0x0&&_0x21149a['return_Parameter']){const _0x571b54=String(_0x21149a['return_Parameter'])['replace'](/\\\//g,'/')[_0x43d33f(0xe3)](/\\n/g,'')['replace'](/\\/g,'')[_0x43d33f(0xf3)](),_0x25eb4c=JSON['parse'](decodeBase64Utf8(_0x571b54));return{..._0x25eb4c,'resultCode':0x0};}}return _0x168742||{'resultCode':NET_ERROR_CODE};}catch(_0x1c7149){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x1e9b48);}}function decodeBase64Utf8(_0x4da066){const _0x28507b=atob(_0x4da066);try{const _0x491c17=new Uint8Array(_0x28507b['length']);for(let _0x4be99d=0x0;_0x4be99d<_0x28507b['length'];_0x4be99d++)_0x491c17[_0x4be99d]=_0x28507b['charCodeAt'](_0x4be99d);return new TextDecoder('utf-8')['decode'](_0x491c17);}catch(_0x5438a0){return _0x28507b;}}async function fetchCpeApi(_0x1f233c,_0x238ed9,_0x368dfc,_0x16be7c={},_0x51e4e0=0xbb8){if(!_0x238ed9)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x1f233c,_0x16be7c,_0x238ed9,_0x368dfc,_0x51e4e0);}function isEmpty(_0x900360){const _0x4a53bd=_0x184169;return!_0x900360||typeof _0x900360==='object'&&Object[_0x4a53bd(0xdd)](_0x900360)['length']===0x0;}async function fetchAll(_0x5926ea){const _0x57d6ef=_0x5926ea['token'],_0x1237a5=_0x5926ea['mac'],_0xa61f4b=0xbb8,_0x3241ff=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x57d6ef,_0x1237a5,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x57d6ef,_0x1237a5,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x57d6ef,_0x1237a5,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x57d6ef,_0x1237a5,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x57d6ef,_0x1237a5,{},0xbb8)]),_0x321ae2=[];let _0x8dd19e=readResult(_0x3241ff[0x0],_0x321ae2),_0x3bd9e2=readResult(_0x3241ff[0x1],_0x321ae2),_0x24ddc1=readResult(_0x3241ff[0x2],_0x321ae2),_0x4ddac3=readResult(_0x3241ff[0x3],_0x321ae2);const _0x2f5de5=readResult(_0x3241ff[0x4],_0x321ae2);if(_0x24ddc1)_0x24ddc1=_0x24ddc1['MainRouter']||_0x24ddc1['Router']||_0x24ddc1;const _0x3a250f=[_0x8dd19e,_0x3bd9e2,_0x24ddc1,_0x4ddac3,_0x2f5de5]['filter'](_0x1e9b3b=>!isEmpty(_0x1e9b3b))['length'],_0x526410=_0x3a250f===0x0?classifyFault(_0x321ae2):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x3a250f+'/5\x20|\x20fault='+(_0x526410||'-')+'\x20|\x20失败码=['+_0x321ae2['join'](',')+']'),{'rf':_0x8dd19e,'ca':_0x3bd9e2,'topo':_0x24ddc1,'sim':_0x4ddac3,'traffic':_0x2f5de5,'failCodes':_0x321ae2,'fault':_0x526410,'successCount':_0x3a250f};}function saveCache(_0x54bd17){const _0x50ff77=_0x184169;try{const _0x3761ea=parseTrafficData(_0x54bd17[_0x50ff77(0xf5)]),_0x131cc1={'rf':{'WorkMode':_0x54bd17['rf']?.['WorkMode'],'SSB_RSRP':_0x54bd17['rf']?.[_0x50ff77(0xe6)],'RSRP':_0x54bd17['rf']?.['RSRP'],'SSB_SINR':_0x54bd17['rf']?.['SSB_SINR'],'SINR':_0x54bd17['rf']?.[_0x50ff77(0xe1)],'SSB_RSRQ':_0x54bd17['rf']?.['SSB_RSRQ'],'RSRQ':_0x54bd17['rf']?.['RSRQ'],'SSB_RSSI':_0x54bd17['rf']?.['SSB_RSSI'],'RSSI':_0x54bd17['rf']?.[_0x50ff77(0xec)],'BAND':_0x54bd17['rf']?.['BAND'],'NR_BAND':_0x54bd17['rf']?.['NR_BAND'],'LTE_BAND':_0x54bd17['rf']?.['LTE_BAND'],'PCI':_0x54bd17['rf']?.['PCI'],'SPN':_0x54bd17['rf']?.[_0x50ff77(0xd2)]},'ca':{'main_CA_info':_0x54bd17['ca']?.['main_CA_info']||{},'sub_CA_info':_0x54bd17['ca']?.[_0x50ff77(0xde)]||[]},'topo':{'NetStatus':_0x54bd17['topo']?.['NetStatus'],'UpTime':_0x54bd17['topo']?.['UpTime'],'Name':_0x54bd17['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x54bd17['topo'])},'sim':{'Operator':_0x54bd17['sim']?.['Operator'],'SPN':_0x54bd17['sim']?.['SPN']},'traffic':{'todayBytes':_0x3761ea['todayBytes'],'monthBytes':_0x3761ea[_0x50ff77(0xd4)],'todayRx':_0x3761ea['todayRx'],'todayTx':_0x3761ea['todayTx'],'monthRx':_0x3761ea['monthRx'],'monthTx':_0x3761ea['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x50ff77(0xf2)](_0x131cc1));}catch(_0x1d0855){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x1d0855);}}function loadCache(){const _0x2e5112=_0x184169;try{const _0x13d6f3=Keychain['get'](KEY_CACHE);if(!_0x13d6f3)return null;const _0x2c18d5=JSON['parse'](_0x13d6f3);if(!_0x2c18d5||typeof _0x2c18d5!==_0x2e5112(0xd1))return null;return _0x2c18d5;}catch(_0x477b09){return null;}}
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
