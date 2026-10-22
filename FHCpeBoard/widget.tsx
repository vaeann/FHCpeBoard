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

(function(_0x3895eb,_0x391cf7){const _0x59543d=_0x4f85,_0x2020f9=_0x3895eb();while(!![]){try{const _0xd0de77=parseInt(_0x59543d(0xa6))/0x1*(-parseInt(_0x59543d(0xb9))/0x2)+parseInt(_0x59543d(0xa0))/0x3*(parseInt(_0x59543d(0xac))/0x4)+-parseInt(_0x59543d(0xbf))/0x5*(parseInt(_0x59543d(0xab))/0x6)+parseInt(_0x59543d(0xb3))/0x7+-parseInt(_0x59543d(0xb5))/0x8+-parseInt(_0x59543d(0xb6))/0x9+parseInt(_0x59543d(0xa5))/0xa;if(_0xd0de77===_0x391cf7)break;else _0x2020f9['push'](_0x2020f9['shift']());}catch(_0x2b1b6b){_0x2020f9['push'](_0x2020f9['shift']());}}}(_0x1859,0x950e4));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function _0x4f85(_0x52ffb9,_0x2e8416){const _0x18590d=_0x1859();return _0x4f85=function(_0x4f8518,_0x16ee12){_0x4f8518=_0x4f8518-0xa0;let _0x37f2d9=_0x18590d[_0x4f8518];if(_0x4f85['CCSFgN']===undefined){var _0x4954ca=function(_0x1177ef){const _0x245f87='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3ea675='',_0x55e5e4='';for(let _0x12ef24=0x0,_0x75f122,_0xc49aa6,_0x3557e7=0x0;_0xc49aa6=_0x1177ef['charAt'](_0x3557e7++);~_0xc49aa6&&(_0x75f122=_0x12ef24%0x4?_0x75f122*0x40+_0xc49aa6:_0xc49aa6,_0x12ef24++%0x4)?_0x3ea675+=String['fromCharCode'](0xff&_0x75f122>>(-0x2*_0x12ef24&0x6)):0x0){_0xc49aa6=_0x245f87['indexOf'](_0xc49aa6);}for(let _0x2c8f45=0x0,_0x1f2b81=_0x3ea675['length'];_0x2c8f45<_0x1f2b81;_0x2c8f45++){_0x55e5e4+='%'+('00'+_0x3ea675['charCodeAt'](_0x2c8f45)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x55e5e4);};_0x4f85['Betshu']=_0x4954ca,_0x52ffb9=arguments,_0x4f85['CCSFgN']=!![];}const _0x4f29e2=_0x18590d[0x0],_0x54bba4=_0x4f8518+_0x4f29e2,_0x5265d3=_0x52ffb9[_0x54bba4];return!_0x5265d3?(_0x37f2d9=_0x4f85['Betshu'](_0x37f2d9),_0x52ffb9[_0x54bba4]=_0x37f2d9):_0x37f2d9=_0x5265d3,_0x37f2d9;},_0x4f85(_0x52ffb9,_0x2e8416);}function _0x1859(){const _0x571292=['D2fYBG','mtbAENvSC0O','BwfJ','Bw9UDgHcExrLCW','mZyZBLjQvxrH','C3rHDhvZ','C29Tzq','z2v0','tfrf','mJqYmJKYmdbftfbAwNu','mwD1ve5QAq','C2v0','Dg9KyxLsEa','Dw5KzwzPBMvK','neCG','mta5nJC2ngr1ELLTDq','otC4ofbREKPnrq','C2LT','DhjPBq','BNvTyMvY','CNnWugfYyw0','4PQG77IpiowgMEE8K+wTMowKSEI0Psb8ia','q1rdqW','ndmWmdu0ofHUqKTSBG','CgfYC2u','ndy1oti4mg5cqM91sa','nZiXmJy1ngLsAwXcwG','y2HHCKnVzgvbDa','zMXVB3i','mtK0nJG3mevYqLnssW','Aw5JBhvKzxm','C3vIx0nbx2LUzM8','5y2v6l295RoI','5lIj6l295RoI'];_0x1859=function(){return _0x571292;};return _0x1859();}function readKey(_0x1177ef,_0x245f87){const _0xf8ae5f=_0x4f85;try{const _0x3ea675=Keychain['get'](_0x1177ef);return _0x3ea675===null||_0x3ea675===undefined||_0x3ea675===''?_0x245f87:String(_0x3ea675)[_0xf8ae5f(0xae)]();}catch(_0x55e5e4){return _0x245f87;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x12ef24){const _0x3bf8e6=_0x4f85;try{if(_0x12ef24['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x12ef24['token'])['trim']());if(_0x12ef24[_0x3bf8e6(0xc0)]!==undefined)Keychain[_0x3bf8e6(0xa7)](MAC_KEY,String(_0x12ef24[_0x3bf8e6(0xc0)])[_0x3bf8e6(0xae)]()||DEFAULT_MAC);if(_0x12ef24['deviceName']!==undefined)Keychain[_0x3bf8e6(0xa7)](NAME_KEY,String(_0x12ef24['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x75f122){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x75f122);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0xc49aa6,_0x3557e7){if(_0xc49aa6===undefined||_0xc49aa6===null||_0xc49aa6==='')return _0x3557e7;const _0x2c8f45=String(_0xc49aa6)['trim']();return _0x2c8f45==='-'||_0x2c8f45==='undefined'?_0x3557e7:_0x2c8f45;}function firstValid(_0x1f2b81,_0x3ba374){for(const _0x21db42 of _0x1f2b81){const _0x312b80=getValidValue(_0x21db42,'');if(_0x312b80)return _0x312b80;}return _0x3ba374;}function resolveOperator(_0x38b3de,_0x409dec){const _0x243cd2=getOperatorName(_0x409dec&&_0x409dec['Operator']||'',_0x409dec&&_0x409dec['SPN']||'');if(_0x243cd2==='未知'&&_0x38b3de&&_0x38b3de['SPN'])return String(_0x38b3de['SPN']);return _0x243cd2;}function formatUptime(_0xbea8db){const _0x56fe82=_0x4f85,_0x33b91e=parseInt(_0xbea8db||0x0)||0x0,_0x4f1806=Math['floor'](_0x33b91e/0x15180),_0x51ceec=Math[_0x56fe82(0xb8)](_0x33b91e%0x15180/0xe10),_0xba6796=Math['floor'](_0x33b91e%0xe10/0x3c),_0x286c90=[];if(_0x4f1806>0x0)_0x286c90['push'](_0x4f1806+'天');if(_0x51ceec>0x0||_0x4f1806>0x0)_0x286c90['push'](_0x51ceec+'小时');return _0x286c90['push'](_0xba6796+'分'),_0x286c90['join']('\x20');}function formatUptimeShort(_0xec0a47){const _0x3b8bcd=parseInt(_0xec0a47||0x0)||0x0,_0x428541=Math['floor'](_0x3b8bcd/0x15180),_0x3296e7=Math['floor'](_0x3b8bcd%0x15180/0xe10),_0x24ba8d=Math['floor'](_0x3b8bcd%0xe10/0x3c),_0x36a33d=[];if(_0x428541>0x0)_0x36a33d['push'](_0x428541+'天');if(_0x3296e7>0x0||_0x428541>0x0)_0x36a33d['push'](_0x3296e7+'时');return _0x36a33d['push'](_0x24ba8d+'分'),_0x36a33d['join']('');}function trafficMbToBytes(_0x4eb26c){const _0x507233=parseFloat(_0x4eb26c||0x0);if(isNaN(_0x507233))return 0x0;return Math['round'](_0x507233*0x400*0x400);}function formatTraffic(_0x17c953){const _0x52b903=Number(_0x17c953||0x0);if(!isFinite(_0x52b903)||_0x52b903<=0x0)return'0M';const _0x469836=0x400*0x400,_0x4137c1=0x400*_0x469836;if(_0x52b903>=_0x4137c1)return(_0x52b903/_0x4137c1)['toFixed'](0x1)+'G';return(_0x52b903/_0x469836)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x5a2dd5){const _0x127c52=Number(_0x5a2dd5||0x0);if(!isFinite(_0x127c52)||_0x127c52<=0x0)return'0';const _0x42948f=0x400,_0x322f15=0x400*_0x42948f,_0x5831cf=0x400*_0x322f15;if(_0x127c52>=_0x5831cf){const _0x414331=_0x127c52/_0x5831cf;return(_0x414331>=0x64?_0x414331['toFixed'](0x0):_0x414331['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x127c52>=_0x322f15)return Math['round'](_0x127c52/_0x322f15)+'M';if(_0x127c52>=_0x42948f)return Math['round'](_0x127c52/_0x42948f)+'K';return String(Math['round'](_0x127c52));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x42312f){if(!_0x42312f)return ZERO_TRAFFIC;const _0x52352f=_0x42312f['day_rx_traffic']!==undefined||_0x42312f['day_tx_traffic']!==undefined||_0x42312f['month_rx_traffic']!==undefined||_0x42312f['month_tx_traffic']!==undefined;if(!_0x52352f)return{'todayBytes':Number(_0x42312f['todayBytes'])||0x0,'monthBytes':Number(_0x42312f['monthBytes'])||0x0,'todayRx':Number(_0x42312f['todayRx'])||0x0,'todayTx':Number(_0x42312f['todayTx'])||0x0,'monthRx':Number(_0x42312f['monthRx'])||0x0,'monthTx':Number(_0x42312f['monthTx'])||0x0};const _0x1695fc=trafficMbToBytes(_0x42312f['day_rx_traffic']),_0x5c663d=trafficMbToBytes(_0x42312f['day_tx_traffic']),_0x2a5c89=trafficMbToBytes(_0x42312f['month_rx_traffic']),_0x369a4a=trafficMbToBytes(_0x42312f['month_tx_traffic']);return{'todayBytes':_0x1695fc+_0x5c663d,'monthBytes':_0x2a5c89+_0x369a4a,'todayRx':_0x1695fc,'todayTx':_0x5c663d,'monthRx':_0x2a5c89,'monthTx':_0x369a4a};}function trafficRxRatio(_0x2271e0,_0x10ac43){const _0x45b843=Number(_0x2271e0||0x0)+Number(_0x10ac43||0x0);if(!isFinite(_0x45b843)||_0x45b843<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2271e0||0x0)/_0x45b843));}function getOperatorName(_0x321f60,_0x1f713d){const _0x56803b=_0x4f85;if(!_0x321f60)return _0x1f713d||'未知';const _0x44566a=String(_0x321f60)['toUpperCase']();if(_0x44566a['includes']('CMCC')||_0x44566a==='中国移动'||_0x44566a['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x44566a[_0x56803b(0xba)]('CUCC')||_0x44566a==='中国联通'||_0x44566a['includes']('CHINA\x20UNICOM')||_0x44566a['includes']('UNICOM'))return'中国联通';if(_0x44566a['includes'](_0x56803b(0xb2))||_0x44566a==='CT'||_0x44566a==='中国电信'||_0x44566a['includes']('CHINA\x20TELECOM')||_0x44566a['includes']('TELECOM'))return'中国电信';if(_0x44566a['includes']('CBN')||_0x44566a==='中国广电'||_0x44566a['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x321f60;}function getSignalColor(_0x38b54b,_0x33e637){let _0x3bea67=parseInt(_0x38b54b);if(isNaN(_0x3bea67))_0x3bea67=-0x78;if(_0x3bea67>-0x59)return _0x33e637['ok'];if(_0x3bea67>-0x63)return _0x33e637['warn'];return _0x33e637['bad'];}function getSinrColor(_0x28a4d5,_0x316a11){const _0x138de5=_0x4f85;let _0x48464e=parseFloat(_0x28a4d5);if(isNaN(_0x48464e))_0x48464e=0x0;if(_0x48464e>0xf)return _0x316a11['ok'];if(_0x48464e>0x8)return _0x316a11[_0x138de5(0xbe)];return _0x316a11['bad'];}function getAllBands(_0x229938,_0xa1484c,_0x1f5435){const _0x277555=[],_0x53fcdf=_0x1f5435?'N':'B',_0x335e61=getValidValue(_0x229938?.['BAND']||_0x229938?.['NR_BAND']||_0x229938?.['LTE_BAND'],'');if(_0x335e61)_0x277555['push'](_0x53fcdf+_0x335e61);for(const _0x510ee6 of _0xa1484c?.['sub_CA_info']||[]){const _0x4a3527=String(_0x510ee6?.['Band']||'');if(_0x4a3527&&_0x4a3527!=='-')_0x277555['push'](_0x53fcdf+_0x4a3527);}if(_0x277555['length']===0x0)_0x277555['push'](_0x1f5435?'N78':'B3');return _0x277555;}function getCaBadgeText(_0x3591bb,_0x62afb7,_0x38f152){const _0x50ea08=_0x4f85,_0x31494d=(_0x62afb7?'5G\x20':_0x50ea08(0xaa))+_0x38f152;if(!_0x62afb7)return _0x31494d;const _0x202e0a=0x1+(_0x3591bb&&_0x3591bb['sub_CA_info']||[])['length'];if(_0x202e0a>=0x4)return'5GA+';if(_0x202e0a===0x3)return'5GA';if(_0x202e0a===0x2)return'5G+';return _0x31494d;}function getCarrierCountText(_0x2af983){const _0x58ce1d=_0x4f85,_0x46fe14=(_0x2af983&&_0x2af983['sub_CA_info']||[])['length'];if(_0x46fe14===0x0)return _0x58ce1d(0xbc);if(_0x46fe14===0x1)return'双载波';if(_0x46fe14===0x2)return _0x58ce1d(0xbd);return'四载波';}function getNetworkModeText(_0x42bebd,_0x4a8acf,_0x343018){const _0x3b3018=_0x4f85,_0x14b11b=String(_0x343018||'')['toUpperCase']();if(!_0x4a8acf){if(!_0x14b11b||_0x14b11b==='4G'||_0x14b11b===_0x3b3018(0xa4))return'4G\x20LTE';return'4G\x20'+_0x14b11b;}const _0x3662a0=0x1+(_0x42bebd&&_0x42bebd['sub_CA_info']||[])['length'];if(_0x3662a0>=0x4)return'5GA+';if(_0x3662a0===0x3)return'5GA';if(_0x3662a0===0x2)return'5G+';return _0x14b11b?'5G\x20'+_0x14b11b:'5G\x20SA';}function rsrpToPercent(_0x4dcb2a){let _0x43e22a=parseInt(_0x4dcb2a);if(isNaN(_0x43e22a))_0x43e22a=-0x78;const _0x526e80=Math['min'](-0x46,Math['max'](-0x78,_0x43e22a)),_0x591aa0=(_0x526e80+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x591aa0*0x5a));}function sinrToPercent(_0x4fc69c){let _0x6279bd=parseFloat(_0x4fc69c);if(isNaN(_0x6279bd))_0x6279bd=0x0;return Math['min'](0x64,Math['max'](0x0,_0x6279bd/0x19*0x64));}function resolveDeviceName(_0x3947ec,_0x5e1e20){const _0x2c92fa=_0x4f85,_0x2538bc=_0x3947ec&&_0x3947ec['Name']!=null?String(_0x3947ec['Name'])['trim']():'';if(!_0x2538bc)return _0x5e1e20;if(_0x2538bc==='--'||_0x2538bc===_0x2c92fa(0xa9)||_0x2538bc==='null'||_0x2538bc==='0')return _0x5e1e20;return _0x2538bc;}function rsrpToBars(_0xdd2412){const _0x2d20af=parseInt(_0xdd2412);if(isNaN(_0x2d20af))return 0x0;if(_0x2d20af>=-0x55)return 0x4;if(_0x2d20af>=-0x5f)return 0x3;if(_0x2d20af>=-0x69)return 0x2;if(_0x2d20af>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x5ad61f){const _0x5e44bc=_0x4f85;if(!_0x5ad61f)return 0x0;if(typeof _0x5ad61f['onlineDevices']===_0x5e44bc(0xaf))return _0x5ad61f['onlineDevices'];const _0x25d063=_0x5ad61f['MainBaseInfo'];if(!Array['isArray'](_0x25d063))return 0x0;return _0x25d063['filter'](_0x8027bc=>_0x8027bc&&String(_0x8027bc['NetStatus'])==='1')['length'];}function urlDecode(_0x33b1af){const _0x5b3bd5=[];for(let _0x484570=0x0;_0x484570<_0x33b1af['length'];_0x484570+=0x2)_0x5b3bd5['push'](parseInt(_0x33b1af['substr'](_0x484570,0x2),0x10));let _0x361e83='';for(let _0x53d743=0x0;_0x53d743<_0x5b3bd5['length'];){const _0x1f5972=_0x5b3bd5[_0x53d743];if(_0x1f5972<0x80)_0x361e83+=String['fromCharCode'](_0x1f5972),_0x53d743++;else{if(_0x1f5972>>0x5===0x6)_0x361e83+=String['fromCharCode']((_0x1f5972&0x1f)<<0x6|_0x5b3bd5[_0x53d743+0x1]&0x3f),_0x53d743+=0x2;else _0x1f5972>>0x4===0xe?(_0x361e83+=String['fromCharCode']((_0x1f5972&0xf)<<0xc|(_0x5b3bd5[_0x53d743+0x1]&0x3f)<<0x6|_0x5b3bd5[_0x53d743+0x2]&0x3f),_0x53d743+=0x3):(_0x361e83+=String['fromCharCode']((_0x1f5972&0x7)<<0x12|(_0x5b3bd5[_0x53d743+0x1]&0x3f)<<0xc|(_0x5b3bd5[_0x53d743+0x2]&0x3f)<<0x6|_0x5b3bd5[_0x53d743+0x3]),_0x53d743+=0x4);}}return _0x361e83;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x515a09='0123456789ABCDEF';let _0xa09244='';for(let _0x1b4b76=0x0;_0x1b4b76<0x20;_0x1b4b76++)_0xa09244+=_0x515a09[Math['floor'](Math['random']()*0x10)];return _0xa09244;}function generateSequenceId(_0x46813b){return _0x46813b+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x3aedcd){const _0x243a0f=_0x4f85;if(!_0x3aedcd||_0x3aedcd['length']===0x0)return null;if(_0x3aedcd['some'](_0x31d57f=>AUTH_ERROR_CODES['indexOf'](_0x31d57f)>=0x0))return'auth';if(_0x3aedcd[_0x243a0f(0xa2)](_0x5bbd4c=>DEVICE_ERROR_CODES['indexOf'](_0x5bbd4c)>=0x0))return'device';return'network';}function readResult(_0x42822a,_0x1193f5){const _0x1aac42=_0x4f85;if(!_0x42822a||_0x42822a[_0x1aac42(0xa1)]!=='fulfilled'||!_0x42822a['value'])return _0x1193f5['push'](NET_ERROR_CODE),null;const _0x1e0ea7=_0x42822a['value'];if(_0x1e0ea7['resultCode']===0x0)return _0x1e0ea7;return _0x1193f5['push'](typeof _0x1e0ea7['resultCode']==='number'?_0x1e0ea7['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x3a8ddd,_0x4d212d,_0x5ace5,_0x3ac1de,_0x3e5a2c){const _0x3427cf=_0x4f85;if(!_0x5ace5)return null;const _0x263415={'CmdType':_0x3a8ddd,..._0x4d212d};if(!_0x263415['SequenceId'])_0x263415['SequenceId']=generateSequenceId(_0x3a8ddd);const _0x400dc0={'appVersion':urlDecode('322e322e3531'),'mac':_0x3ac1de,'timeout':0x3,'token':_0x5ace5,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x263415)}),'operatorId':getOperatorId()},_0x4dbea4=new AbortController(),_0x14902c=setTimeout(()=>{try{_0x4dbea4['abort']();}catch(_0x50df7f){}},_0x3e5a2c);try{const _0x107891=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x5ace5},'body':JSON['stringify'](_0x400dc0),'signal':_0x4dbea4['signal']}),_0x29ddad=await _0x107891['json']();if(_0x29ddad&&_0x29ddad['rspParam']){const _0xb4846c=JSON[_0x3427cf(0xb4)](_0x29ddad[_0x3427cf(0xb0)]);if(_0xb4846c['Result']===0x0&&_0xb4846c['return_Parameter']){const _0x5e1402=String(_0xb4846c['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x15bb2b=JSON['parse'](decodeBase64Utf8(_0x5e1402));return{..._0x15bb2b,'resultCode':0x0};}}return _0x29ddad||{'resultCode':NET_ERROR_CODE};}catch(_0x45a408){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x14902c);}}function decodeBase64Utf8(_0x251e5a){const _0x430e93=_0x4f85,_0x11da1d=atob(_0x251e5a);try{const _0x69ffd0=new Uint8Array(_0x11da1d['length']);for(let _0x1fd90f=0x0;_0x1fd90f<_0x11da1d['length'];_0x1fd90f++)_0x69ffd0[_0x1fd90f]=_0x11da1d[_0x430e93(0xb7)](_0x1fd90f);return new TextDecoder('utf-8')['decode'](_0x69ffd0);}catch(_0x34e3c7){return _0x11da1d;}}async function fetchCpeApi(_0x376a1a,_0x47e052,_0x259695,_0x3b9497={},_0x4f57c3=0xbb8){if(!_0x47e052)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x376a1a,_0x3b9497,_0x47e052,_0x259695,_0x4f57c3);}function isEmpty(_0x29b09c){return!_0x29b09c||typeof _0x29b09c==='object'&&Object['keys'](_0x29b09c)['length']===0x0;}async function fetchAll(_0x3b2854){const _0x2c7ac1=_0x3b2854['token'],_0x502c88=_0x3b2854['mac'],_0x1d2aae=0xbb8,_0x438375=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x2c7ac1,_0x502c88,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x2c7ac1,_0x502c88,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x2c7ac1,_0x502c88,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x2c7ac1,_0x502c88,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x2c7ac1,_0x502c88,{},0xbb8)]),_0xd8c6cd=[];let _0x2dd800=readResult(_0x438375[0x0],_0xd8c6cd),_0x35c997=readResult(_0x438375[0x1],_0xd8c6cd),_0x15f12c=readResult(_0x438375[0x2],_0xd8c6cd),_0xb1ee80=readResult(_0x438375[0x3],_0xd8c6cd);const _0x1cd084=readResult(_0x438375[0x4],_0xd8c6cd);if(_0x15f12c)_0x15f12c=_0x15f12c['MainRouter']||_0x15f12c['Router']||_0x15f12c;const _0x2989a7=[_0x2dd800,_0x35c997,_0x15f12c,_0xb1ee80,_0x1cd084]['filter'](_0x1f73a9=>!isEmpty(_0x1f73a9))['length'],_0xf25929=_0x2989a7===0x0?classifyFault(_0xd8c6cd):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x2989a7+'/5\x20|\x20fault='+(_0xf25929||'-')+'\x20|\x20失败码=['+_0xd8c6cd['join'](',')+']'),{'rf':_0x2dd800,'ca':_0x35c997,'topo':_0x15f12c,'sim':_0xb1ee80,'traffic':_0x1cd084,'failCodes':_0xd8c6cd,'fault':_0xf25929,'successCount':_0x2989a7};}function saveCache(_0x316899){const _0x28c9a2=_0x4f85;try{const _0x2660ca=parseTrafficData(_0x316899['traffic']),_0x255dd4={'rf':{'WorkMode':_0x316899['rf']?.['WorkMode'],'SSB_RSRP':_0x316899['rf']?.['SSB_RSRP'],'RSRP':_0x316899['rf']?.['RSRP'],'SSB_SINR':_0x316899['rf']?.['SSB_SINR'],'SINR':_0x316899['rf']?.['SINR'],'SSB_RSRQ':_0x316899['rf']?.['SSB_RSRQ'],'RSRQ':_0x316899['rf']?.['RSRQ'],'SSB_RSSI':_0x316899['rf']?.['SSB_RSSI'],'RSSI':_0x316899['rf']?.['RSSI'],'BAND':_0x316899['rf']?.['BAND'],'NR_BAND':_0x316899['rf']?.['NR_BAND'],'LTE_BAND':_0x316899['rf']?.['LTE_BAND'],'PCI':_0x316899['rf']?.['PCI'],'SPN':_0x316899['rf']?.['SPN']},'ca':{'main_CA_info':_0x316899['ca']?.['main_CA_info']||{},'sub_CA_info':_0x316899['ca']?.[_0x28c9a2(0xbb)]||[]},'topo':{'NetStatus':_0x316899['topo']?.['NetStatus'],'UpTime':_0x316899['topo']?.['UpTime'],'Name':_0x316899['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x316899['topo'])},'sim':{'Operator':_0x316899['sim']?.['Operator'],'SPN':_0x316899[_0x28c9a2(0xad)]?.['SPN']},'traffic':{'todayBytes':_0x2660ca['todayBytes'],'monthBytes':_0x2660ca[_0x28c9a2(0xc1)],'todayRx':_0x2660ca[_0x28c9a2(0xa8)],'todayTx':_0x2660ca['todayTx'],'monthRx':_0x2660ca['monthRx'],'monthTx':_0x2660ca['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x255dd4));}catch(_0xfe06c2){console['log'](_0x28c9a2(0xb1)+_0xfe06c2);}}function loadCache(){const _0x512550=_0x4f85;try{const _0x365762=Keychain[_0x512550(0xa3)](KEY_CACHE);if(!_0x365762)return null;const _0x5946d7=JSON[_0x512550(0xb4)](_0x365762);if(!_0x5946d7||typeof _0x5946d7!=='object')return null;return _0x5946d7;}catch(_0x11d53b){return null;}}
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
