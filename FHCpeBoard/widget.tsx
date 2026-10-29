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

const _0x5d51b2=_0x4b81;(function(_0x443a0c,_0x12206d){const _0x117261=_0x4b81,_0x363a0=_0x443a0c();while(!![]){try{const _0x41683d=parseInt(_0x117261(0xde))/0x1*(-parseInt(_0x117261(0xf4))/0x2)+-parseInt(_0x117261(0xe0))/0x3+parseInt(_0x117261(0xef))/0x4*(-parseInt(_0x117261(0xcd))/0x5)+-parseInt(_0x117261(0xfc))/0x6+-parseInt(_0x117261(0xdd))/0x7*(parseInt(_0x117261(0xf1))/0x8)+-parseInt(_0x117261(0xdf))/0x9*(-parseInt(_0x117261(0xd1))/0xa)+parseInt(_0x117261(0xce))/0xb;if(_0x41683d===_0x12206d)break;else _0x363a0['push'](_0x363a0['shift']());}catch(_0x5aad51){_0x363a0['push'](_0x363a0['shift']());}}}(_0xb491,0x4aaad));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY=_0x5d51b2(0xf3),KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x22cd3d,_0x42ab31){try{const _0x41e1d4=Keychain['get'](_0x22cd3d);return _0x41e1d4===null||_0x41e1d4===undefined||_0x41e1d4===''?_0x42ab31:String(_0x41e1d4)['trim']();}catch(_0x4776f1){return _0x42ab31;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x1cafa5){const _0x3903cb=_0x5d51b2;try{if(_0x1cafa5['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x1cafa5[_0x3903cb(0xfd)])['trim']());if(_0x1cafa5['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x1cafa5['mac'])['trim']()||DEFAULT_MAC);if(_0x1cafa5['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x1cafa5[_0x3903cb(0xd8)])['trim']()||DEFAULT_NAME);}catch(_0x34a21d){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x34a21d);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x491c81,_0x2558d7){if(_0x491c81===undefined||_0x491c81===null||_0x491c81==='')return _0x2558d7;const _0x124cd8=String(_0x491c81)['trim']();return _0x124cd8==='-'||_0x124cd8==='undefined'?_0x2558d7:_0x124cd8;}function firstValid(_0x5a78e6,_0x3d64eb){for(const _0x5c0936 of _0x5a78e6){const _0x25fa0c=getValidValue(_0x5c0936,'');if(_0x25fa0c)return _0x25fa0c;}return _0x3d64eb;}function resolveOperator(_0x14b3c0,_0x978ac4){const _0x152a66=getOperatorName(_0x978ac4&&_0x978ac4['Operator']||'',_0x978ac4&&_0x978ac4['SPN']||'');if(_0x152a66==='未知'&&_0x14b3c0&&_0x14b3c0['SPN'])return String(_0x14b3c0['SPN']);return _0x152a66;}function formatUptime(_0x5defd){const _0x2e3514=parseInt(_0x5defd||0x0)||0x0,_0x58957a=Math['floor'](_0x2e3514/0x15180),_0x2bd062=Math['floor'](_0x2e3514%0x15180/0xe10),_0x32b2c3=Math['floor'](_0x2e3514%0xe10/0x3c),_0x697dce=[];if(_0x58957a>0x0)_0x697dce['push'](_0x58957a+'天');if(_0x2bd062>0x0||_0x58957a>0x0)_0x697dce['push'](_0x2bd062+'小时');return _0x697dce['push'](_0x32b2c3+'分'),_0x697dce['join']('\x20');}function _0xb491(){const _0x2b3279=['Aw5JBhvKzxm','tMfTzq','BgvUz3rO','q0HjtKeGvu5jq09n','ndLdzMPgtgy','mtGZmJLLrgD3wKq','nty3uKTmC1r6','mta5mtaWn0PzsMPiuG','zgf5x3j4x3rYywzMAwm','Dg9KyxLcExrLCW','CMvWBgfJzq','u0LouG','DhjPBq','Dg9KyxLsEa','uM91DgvY','C3rYAw5NAwz5','CMvZDwX0q29Kzq','vevmrunptq','u2vXDwvUy2vjza','zNjVBunOyxjdB2rL','tMv0u3rHDhvZ','tJC4','mJu2ve5PzNLX','5zUB6l295RoI','nJiYnJrRCw1ctNC','twfPBLjVDxrLCG','q1bfx0rfvKLdrv9oqu1f','ohj6DKDpCq','tLjFqKfora','Dg9WBW','B25SAw5Lrgv2AwnLCW','77Yb6k6+5Ash56A757Q/','5y+m6l295RoI','DMfSDwu','zNvSzMLSBgvK','ndmWnJm4uuHxAwfe','Dg9Rzw4','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','mZi3nJvcA3jnqK0','mtm0nJGZnJDfqKnUCuG','Bwf4','q0HjtKeGqLjpqurdqvnu','mtaXnZbWrgDzvxe','uLnsua','BwLU','ywXSu2v0DgXLza','DxrMltG','C3rHDhvZ','neCG','zgv2AwnLtMfTzq'];_0xb491=function(){return _0x2b3279;};return _0xb491();}function formatUptimeShort(_0x24b674){const _0x5d309e=parseInt(_0x24b674||0x0)||0x0,_0xac653b=Math['floor'](_0x5d309e/0x15180),_0x58640e=Math['floor'](_0x5d309e%0x15180/0xe10),_0x4708de=Math['floor'](_0x5d309e%0xe10/0x3c),_0x4c8ed7=[];if(_0xac653b>0x0)_0x4c8ed7['push'](_0xac653b+'天');if(_0x58640e>0x0||_0xac653b>0x0)_0x4c8ed7['push'](_0x58640e+'时');return _0x4c8ed7['push'](_0x4708de+'分'),_0x4c8ed7['join']('');}function trafficMbToBytes(_0xe5ce1a){const _0x2707c3=parseFloat(_0xe5ce1a||0x0);if(isNaN(_0x2707c3))return 0x0;return Math['round'](_0x2707c3*0x400*0x400);}function formatTraffic(_0x5db57c){const _0x4947dc=Number(_0x5db57c||0x0);if(!isFinite(_0x4947dc)||_0x4947dc<=0x0)return'0M';const _0x4e0ef5=0x400*0x400,_0x21cdf0=0x400*_0x4e0ef5;if(_0x4947dc>=_0x21cdf0)return(_0x4947dc/_0x21cdf0)['toFixed'](0x1)+'G';return(_0x4947dc/_0x4e0ef5)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x300119){const _0x3d3ceb=Number(_0x300119||0x0);if(!isFinite(_0x3d3ceb)||_0x3d3ceb<=0x0)return'0';const _0x719ee6=0x400,_0x1b6fb8=0x400*_0x719ee6,_0x439c97=0x400*_0x1b6fb8;if(_0x3d3ceb>=_0x439c97){const _0x57477c=_0x3d3ceb/_0x439c97;return(_0x57477c>=0x64?_0x57477c['toFixed'](0x0):_0x57477c['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x3d3ceb>=_0x1b6fb8)return Math['round'](_0x3d3ceb/_0x1b6fb8)+'M';if(_0x3d3ceb>=_0x719ee6)return Math['round'](_0x3d3ceb/_0x719ee6)+'K';return String(Math['round'](_0x3d3ceb));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x5d9785){const _0x5d54af=_0x5d51b2;if(!_0x5d9785)return ZERO_TRAFFIC;const _0x32002f=_0x5d9785['day_rx_traffic']!==undefined||_0x5d9785['day_tx_traffic']!==undefined||_0x5d9785['month_rx_traffic']!==undefined||_0x5d9785['month_tx_traffic']!==undefined;if(!_0x32002f)return{'todayBytes':Number(_0x5d9785['todayBytes'])||0x0,'monthBytes':Number(_0x5d9785['monthBytes'])||0x0,'todayRx':Number(_0x5d9785['todayRx'])||0x0,'todayTx':Number(_0x5d9785['todayTx'])||0x0,'monthRx':Number(_0x5d9785['monthRx'])||0x0,'monthTx':Number(_0x5d9785['monthTx'])||0x0};const _0x544569=trafficMbToBytes(_0x5d9785[_0x5d54af(0xe1)]),_0x4e2355=trafficMbToBytes(_0x5d9785['day_tx_traffic']),_0x59d0bf=trafficMbToBytes(_0x5d9785['month_rx_traffic']),_0x3dfa78=trafficMbToBytes(_0x5d9785['month_tx_traffic']);return{'todayBytes':_0x544569+_0x4e2355,'monthBytes':_0x59d0bf+_0x3dfa78,'todayRx':_0x544569,'todayTx':_0x4e2355,'monthRx':_0x59d0bf,'monthTx':_0x3dfa78};}function trafficRxRatio(_0x555bff,_0x2666af){const _0x33a7b9=Number(_0x555bff||0x0)+Number(_0x2666af||0x0);if(!isFinite(_0x33a7b9)||_0x33a7b9<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x555bff||0x0)/_0x33a7b9));}function getOperatorName(_0x5385d8,_0x17dde3){const _0xcf00cf=_0x5d51b2;if(!_0x5385d8)return _0x17dde3||'未知';const _0x24c30e=String(_0x5385d8)['toUpperCase']();if(_0x24c30e['includes']('CMCC')||_0x24c30e==='中国移动'||_0x24c30e[_0xcf00cf(0xd9)]('CHINA\x20MOBILE'))return'中国移动';if(_0x24c30e['includes']('CUCC')||_0x24c30e==='中国联通'||_0x24c30e['includes'](_0xcf00cf(0xdc))||_0x24c30e['includes']('UNICOM'))return'中国联通';if(_0x24c30e['includes']('CTCC')||_0x24c30e==='CT'||_0x24c30e==='中国电信'||_0x24c30e['includes']('CHINA\x20TELECOM')||_0x24c30e['includes'](_0xcf00cf(0xea)))return'中国电信';if(_0x24c30e['includes']('CBN')||_0x24c30e==='中国广电'||_0x24c30e['includes'](_0xcf00cf(0xd0)))return'中国广电';return _0x5385d8;}function getSignalColor(_0x1dd07c,_0x424a36){let _0x2b5560=parseInt(_0x1dd07c);if(isNaN(_0x2b5560))_0x2b5560=-0x78;if(_0x2b5560>-0x59)return _0x424a36['ok'];if(_0x2b5560>-0x63)return _0x424a36['warn'];return _0x424a36['bad'];}function getSinrColor(_0x63d9f9,_0x4fbe23){let _0x5ac741=parseFloat(_0x63d9f9);if(isNaN(_0x5ac741))_0x5ac741=0x0;if(_0x5ac741>0xf)return _0x4fbe23['ok'];if(_0x5ac741>0x8)return _0x4fbe23['warn'];return _0x4fbe23['bad'];}function getAllBands(_0x29505b,_0x2a516a,_0x45863d){const _0x42ab22=_0x5d51b2,_0x5934b6=[],_0x2f9e07=_0x45863d?'N':'B',_0x5ee2b5=getValidValue(_0x29505b?.['BAND']||_0x29505b?.['NR_BAND']||_0x29505b?.['LTE_BAND'],'');if(_0x5ee2b5)_0x5934b6['push'](_0x2f9e07+_0x5ee2b5);for(const _0x452ed6 of _0x2a516a?.['sub_CA_info']||[]){const _0x41452a=String(_0x452ed6?.['Band']||'');if(_0x41452a&&_0x41452a!=='-')_0x5934b6['push'](_0x2f9e07+_0x41452a);}if(_0x5934b6[_0x42ab22(0xdb)]===0x0)_0x5934b6['push'](_0x45863d?_0x42ab22(0xee):'B3');return _0x5934b6;}function getCaBadgeText(_0x301fc1,_0xb09b3b,_0x3f50e2){const _0x351bc0=(_0xb09b3b?'5G\x20':'4G\x20')+_0x3f50e2;if(!_0xb09b3b)return _0x351bc0;const _0x425144=0x1+(_0x301fc1&&_0x301fc1['sub_CA_info']||[])['length'];if(_0x425144>=0x4)return'5GA+';if(_0x425144===0x3)return'5GA';if(_0x425144===0x2)return'5G+';return _0x351bc0;}function getCarrierCountText(_0xeef70a){const _0x2fcc92=_0x5d51b2,_0x60d723=(_0xeef70a&&_0xeef70a['sub_CA_info']||[])['length'];if(_0x60d723===0x0)return'单载波';if(_0x60d723===0x1)return _0x2fcc92(0xf9);if(_0x60d723===0x2)return'三载波';return _0x2fcc92(0xf0);}function getNetworkModeText(_0x468757,_0x9c5f44,_0x3bcc5a){const _0x5c495c=_0x5d51b2,_0x128ae6=String(_0x3bcc5a||'')['toUpperCase']();if(!_0x9c5f44){if(!_0x128ae6||_0x128ae6==='4G'||_0x128ae6==='LTE')return'4G\x20LTE';return _0x5c495c(0xd7)+_0x128ae6;}const _0x5ebfce=0x1+(_0x468757&&_0x468757['sub_CA_info']||[])['length'];if(_0x5ebfce>=0x4)return'5GA+';if(_0x5ebfce===0x3)return'5GA';if(_0x5ebfce===0x2)return'5G+';return _0x128ae6?'5G\x20'+_0x128ae6:'5G\x20SA';}function rsrpToPercent(_0x522c81){const _0x5b047c=_0x5d51b2;let _0x1e6a01=parseInt(_0x522c81);if(isNaN(_0x1e6a01))_0x1e6a01=-0x78;const _0x281972=Math['min'](-0x46,Math[_0x5b047c(0xcf)](-0x78,_0x1e6a01)),_0x304bbb=(_0x281972+0x78)/0x32;return Math[_0x5b047c(0xd3)](0x64,Math['max'](0xa,0xa+_0x304bbb*0x5a));}function sinrToPercent(_0x36ae62){let _0x3de5e7=parseFloat(_0x36ae62);if(isNaN(_0x3de5e7))_0x3de5e7=0x0;return Math['min'](0x64,Math['max'](0x0,_0x3de5e7/0x19*0x64));}function resolveDeviceName(_0x5eb859,_0x3bd97c){const _0x487e59=_0x5d51b2,_0x40df17=_0x5eb859&&_0x5eb859['Name']!=null?String(_0x5eb859[_0x487e59(0xda)])['trim']():'';if(!_0x40df17)return _0x3bd97c;if(_0x40df17==='--'||_0x40df17==='undefined'||_0x40df17==='null'||_0x40df17==='0')return _0x3bd97c;return _0x40df17;}function rsrpToBars(_0xc4d6db){const _0x2d1395=parseInt(_0xc4d6db);if(isNaN(_0x2d1395))return 0x0;if(_0x2d1395>=-0x55)return 0x4;if(_0x2d1395>=-0x5f)return 0x3;if(_0x2d1395>=-0x69)return 0x2;if(_0x2d1395>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x35c0cd){const _0x4c95f4=_0x5d51b2;if(!_0x35c0cd)return 0x0;if(typeof _0x35c0cd['onlineDevices']==='number')return _0x35c0cd[_0x4c95f4(0xf7)];const _0x420753=_0x35c0cd['MainBaseInfo'];if(!Array['isArray'](_0x420753))return 0x0;return _0x420753['filter'](_0x5018d3=>_0x5018d3&&String(_0x5018d3['NetStatus'])==='1')['length'];}function urlDecode(_0x5518fb){const _0x824a2=_0x5d51b2,_0x59ccf5=[];for(let _0xbd5d6a=0x0;_0xbd5d6a<_0x5518fb['length'];_0xbd5d6a+=0x2)_0x59ccf5['push'](parseInt(_0x5518fb['substr'](_0xbd5d6a,0x2),0x10));let _0x12dd4d='';for(let _0x3dcaa6=0x0;_0x3dcaa6<_0x59ccf5['length'];){const _0x2e93d2=_0x59ccf5[_0x3dcaa6];if(_0x2e93d2<0x80)_0x12dd4d+=String['fromCharCode'](_0x2e93d2),_0x3dcaa6++;else{if(_0x2e93d2>>0x5===0x6)_0x12dd4d+=String['fromCharCode']((_0x2e93d2&0x1f)<<0x6|_0x59ccf5[_0x3dcaa6+0x1]&0x3f),_0x3dcaa6+=0x2;else _0x2e93d2>>0x4===0xe?(_0x12dd4d+=String['fromCharCode']((_0x2e93d2&0xf)<<0xc|(_0x59ccf5[_0x3dcaa6+0x1]&0x3f)<<0x6|_0x59ccf5[_0x3dcaa6+0x2]&0x3f),_0x3dcaa6+=0x3):(_0x12dd4d+=String[_0x824a2(0xec)]((_0x2e93d2&0x7)<<0x12|(_0x59ccf5[_0x3dcaa6+0x1]&0x3f)<<0xc|(_0x59ccf5[_0x3dcaa6+0x2]&0x3f)<<0x6|_0x59ccf5[_0x3dcaa6+0x3]),_0x3dcaa6+=0x4);}}return _0x12dd4d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x5d51b2(0xf8),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x5d51b2(0xfe),'auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x546619='0123456789ABCDEF';let _0x330286='';for(let _0x32fcee=0x0;_0x32fcee<0x20;_0x32fcee++)_0x330286+=_0x546619[Math['floor'](Math['random']()*0x10)];return _0x330286;}function generateSequenceId(_0x4a9d5a){return _0x4a9d5a+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x322927){if(!_0x322927||_0x322927['length']===0x0)return null;if(_0x322927['some'](_0x2a3890=>AUTH_ERROR_CODES['indexOf'](_0x2a3890)>=0x0))return'auth';if(_0x322927['some'](_0x1c432f=>DEVICE_ERROR_CODES['indexOf'](_0x1c432f)>=0x0))return'device';return'network';}function _0x4b81(_0x5a8506,_0x21b9e3){_0x5a8506=_0x5a8506-0xcd;const _0xb4914a=_0xb491();let _0x4b8102=_0xb4914a[_0x5a8506];if(_0x4b81['KlyiJM']===undefined){var _0x45475c=function(_0xb8cb8e){const _0x24da47='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x286116='',_0x22cd3d='';for(let _0x42ab31=0x0,_0x41e1d4,_0x4776f1,_0x1cafa5=0x0;_0x4776f1=_0xb8cb8e['charAt'](_0x1cafa5++);~_0x4776f1&&(_0x41e1d4=_0x42ab31%0x4?_0x41e1d4*0x40+_0x4776f1:_0x4776f1,_0x42ab31++%0x4)?_0x286116+=String['fromCharCode'](0xff&_0x41e1d4>>(-0x2*_0x42ab31&0x6)):0x0){_0x4776f1=_0x24da47['indexOf'](_0x4776f1);}for(let _0x34a21d=0x0,_0x491c81=_0x286116['length'];_0x34a21d<_0x491c81;_0x34a21d++){_0x22cd3d+='%'+('00'+_0x286116['charCodeAt'](_0x34a21d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x22cd3d);};_0x4b81['XKyppc']=_0x45475c,_0x4b81['MCALEE']={},_0x4b81['KlyiJM']=!![];}const _0x96f4cd=_0xb4914a[0x0];_0x4b81['WlxEYr']!==_0x96f4cd&&(_0x4b81['MCALEE']={},_0x4b81['WlxEYr']=_0x96f4cd);const _0x45876f=_0x4b81['MCALEE'][_0x5a8506];return _0x45876f===undefined?(_0x4b8102=_0x4b81['XKyppc'](_0x4b8102),_0x4b81['MCALEE'][_0x5a8506]=_0x4b8102):_0x4b8102=_0x45876f,_0x4b8102;}function readResult(_0xd7ab02,_0x6e9c0){const _0x3fdf70=_0x5d51b2;if(!_0xd7ab02||_0xd7ab02[_0x3fdf70(0xd6)]!==_0x3fdf70(0xfb)||!_0xd7ab02[_0x3fdf70(0xfa)])return _0x6e9c0['push'](NET_ERROR_CODE),null;const _0x5e2754=_0xd7ab02[_0x3fdf70(0xfa)];if(_0x5e2754[_0x3fdf70(0xe9)]===0x0)return _0x5e2754;return _0x6e9c0['push'](typeof _0x5e2754['resultCode']==='number'?_0x5e2754['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x578813,_0x12b015,_0x4c574b,_0x16c7da,_0x4ade1d){const _0x4be8ae=_0x5d51b2;if(!_0x4c574b)return null;const _0x5de789={'CmdType':_0x578813,..._0x12b015};if(!_0x5de789['SequenceId'])_0x5de789[_0x4be8ae(0xeb)]=generateSequenceId(_0x578813);const _0x3c1085={'appVersion':urlDecode('322e322e3531'),'mac':_0x16c7da,'timeout':0x3,'token':_0x4c574b,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x4be8ae(0xe8)](_0x5de789)}),'operatorId':getOperatorId()},_0x3da29f=new AbortController(),_0x22e9cd=setTimeout(()=>{try{_0x3da29f['abort']();}catch(_0x557279){}},_0x4ade1d);try{const _0x48b9e0=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x4c574b},'body':JSON['stringify'](_0x3c1085),'signal':_0x3da29f['signal']}),_0x2dd447=await _0x48b9e0['json']();if(_0x2dd447&&_0x2dd447['rspParam']){const _0x5e0dea=JSON['parse'](_0x2dd447['rspParam']);if(_0x5e0dea['Result']===0x0&&_0x5e0dea['return_Parameter']){const _0x17daea=String(_0x5e0dea['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')[_0x4be8ae(0xe3)](/\\/g,'')[_0x4be8ae(0xe5)](),_0x49295c=JSON['parse'](decodeBase64Utf8(_0x17daea));return{..._0x49295c,'resultCode':0x0};}}return _0x2dd447||{'resultCode':NET_ERROR_CODE};}catch(_0xbeeec2){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x22e9cd);}}function decodeBase64Utf8(_0x5bc3a8){const _0x2398dc=_0x5d51b2,_0x119840=atob(_0x5bc3a8);try{const _0x4a816a=new Uint8Array(_0x119840[_0x2398dc(0xdb)]);for(let _0x3dbd45=0x0;_0x3dbd45<_0x119840['length'];_0x3dbd45++)_0x4a816a[_0x3dbd45]=_0x119840['charCodeAt'](_0x3dbd45);return new TextDecoder(_0x2398dc(0xd5))['decode'](_0x4a816a);}catch(_0x250b3b){return _0x119840;}}async function fetchCpeApi(_0x3eeef7,_0x6345c2,_0x16b834,_0x18bad7={},_0x2747ca=0xbb8){if(!_0x6345c2)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x3eeef7,_0x18bad7,_0x6345c2,_0x16b834,_0x2747ca);}function isEmpty(_0x5a3da1){return!_0x5a3da1||typeof _0x5a3da1==='object'&&Object['keys'](_0x5a3da1)['length']===0x0;}async function fetchAll(_0x426b61){const _0x535e9a=_0x5d51b2,_0x1248ad=_0x426b61[_0x535e9a(0xfd)],_0x561fa2=_0x426b61['mac'],_0x4249e2=0xbb8,_0x1eff10=await Promise[_0x535e9a(0xd4)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x1248ad,_0x561fa2,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x1248ad,_0x561fa2,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x1248ad,_0x561fa2,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x1248ad,_0x561fa2,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x1248ad,_0x561fa2,{},0xbb8)]),_0x2c4071=[];let _0x3a86e6=readResult(_0x1eff10[0x0],_0x2c4071),_0x2ab67b=readResult(_0x1eff10[0x1],_0x2c4071),_0x1faf67=readResult(_0x1eff10[0x2],_0x2c4071),_0xc18ccf=readResult(_0x1eff10[0x3],_0x2c4071);const _0x4f2e9c=readResult(_0x1eff10[0x4],_0x2c4071);if(_0x1faf67)_0x1faf67=_0x1faf67[_0x535e9a(0xf2)]||_0x1faf67[_0x535e9a(0xe7)]||_0x1faf67;const _0x2f3c0c=[_0x3a86e6,_0x2ab67b,_0x1faf67,_0xc18ccf,_0x4f2e9c]['filter'](_0x175659=>!isEmpty(_0x175659))['length'],_0x455d49=_0x2f3c0c===0x0?classifyFault(_0x2c4071):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x2f3c0c+'/5\x20|\x20fault='+(_0x455d49||'-')+'\x20|\x20失败码=['+_0x2c4071['join'](',')+']'),{'rf':_0x3a86e6,'ca':_0x2ab67b,'topo':_0x1faf67,'sim':_0xc18ccf,'traffic':_0x4f2e9c,'failCodes':_0x2c4071,'fault':_0x455d49,'successCount':_0x2f3c0c};}function saveCache(_0x5e0c8c){const _0x3b37d0=_0x5d51b2;try{const _0x36351c=parseTrafficData(_0x5e0c8c['traffic']),_0x594991={'rf':{'WorkMode':_0x5e0c8c['rf']?.['WorkMode'],'SSB_RSRP':_0x5e0c8c['rf']?.['SSB_RSRP'],'RSRP':_0x5e0c8c['rf']?.[_0x3b37d0(0xd2)],'SSB_SINR':_0x5e0c8c['rf']?.['SSB_SINR'],'SINR':_0x5e0c8c['rf']?.[_0x3b37d0(0xe4)],'SSB_RSRQ':_0x5e0c8c['rf']?.['SSB_RSRQ'],'RSRQ':_0x5e0c8c['rf']?.['RSRQ'],'SSB_RSSI':_0x5e0c8c['rf']?.['SSB_RSSI'],'RSSI':_0x5e0c8c['rf']?.['RSSI'],'BAND':_0x5e0c8c['rf']?.['BAND'],'NR_BAND':_0x5e0c8c['rf']?.[_0x3b37d0(0xf5)],'LTE_BAND':_0x5e0c8c['rf']?.['LTE_BAND'],'PCI':_0x5e0c8c['rf']?.['PCI'],'SPN':_0x5e0c8c['rf']?.['SPN']},'ca':{'main_CA_info':_0x5e0c8c['ca']?.['main_CA_info']||{},'sub_CA_info':_0x5e0c8c['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x5e0c8c[_0x3b37d0(0xf6)]?.[_0x3b37d0(0xed)],'UpTime':_0x5e0c8c[_0x3b37d0(0xf6)]?.['UpTime'],'Name':_0x5e0c8c['topo']?.[_0x3b37d0(0xda)],'onlineDevices':countOnlineDevices(_0x5e0c8c['topo'])},'sim':{'Operator':_0x5e0c8c['sim']?.['Operator'],'SPN':_0x5e0c8c['sim']?.['SPN']},'traffic':{'todayBytes':_0x36351c[_0x3b37d0(0xe2)],'monthBytes':_0x36351c['monthBytes'],'todayRx':_0x36351c[_0x3b37d0(0xe6)],'todayTx':_0x36351c['todayTx'],'monthRx':_0x36351c['monthRx'],'monthTx':_0x36351c['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x594991));}catch(_0x213b15){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x213b15);}}function loadCache(){try{const _0x443d12=Keychain['get'](KEY_CACHE);if(!_0x443d12)return null;const _0x350467=JSON['parse'](_0x443d12);if(!_0x350467||typeof _0x350467!=='object')return null;return _0x350467;}catch(_0x32b135){return null;}}
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
