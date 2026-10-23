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

const _0x166ec7=_0x2ae4;(function(_0x534dc3,_0x274d64){const _0x3a8f03=_0x2ae4,_0x331a58=_0x534dc3();while(!![]){try{const _0x238a2d=-parseInt(_0x3a8f03(0x134))/0x1+-parseInt(_0x3a8f03(0x129))/0x2+parseInt(_0x3a8f03(0x124))/0x3+parseInt(_0x3a8f03(0x12e))/0x4+parseInt(_0x3a8f03(0x141))/0x5+-parseInt(_0x3a8f03(0x13d))/0x6*(-parseInt(_0x3a8f03(0x135))/0x7)+-parseInt(_0x3a8f03(0x13f))/0x8*(-parseInt(_0x3a8f03(0x14a))/0x9);if(_0x238a2d===_0x274d64)break;else _0x331a58['push'](_0x331a58['shift']());}catch(_0x2ec57c){_0x331a58['push'](_0x331a58['shift']());}}}(_0x142a,0x7e997));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY=_0x166ec7(0x12a),KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC=_0x166ec7(0x133),DEFAULT_NAME='烽火CPE';function readKey(_0x2694ca,_0x4d4c6a){try{const _0x2c4f7a=Keychain['get'](_0x2694ca);return _0x2c4f7a===null||_0x2c4f7a===undefined||_0x2c4f7a===''?_0x4d4c6a:String(_0x2c4f7a)['trim']();}catch(_0xb28833){return _0x4d4c6a;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2f1ee4){const _0x27c71d=_0x166ec7;try{if(_0x2f1ee4['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2f1ee4['token'])['trim']());if(_0x2f1ee4['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x2f1ee4['mac'])[_0x27c71d(0x128)]()||DEFAULT_MAC);if(_0x2f1ee4[_0x27c71d(0x13c)]!==undefined)Keychain['set'](NAME_KEY,String(_0x2f1ee4['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x1670a3){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x1670a3);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x20d5df,_0x220357){if(_0x20d5df===undefined||_0x20d5df===null||_0x20d5df==='')return _0x220357;const _0x1ce3b0=String(_0x20d5df)['trim']();return _0x1ce3b0==='-'||_0x1ce3b0==='undefined'?_0x220357:_0x1ce3b0;}function firstValid(_0xdd8e21,_0x1cc350){for(const _0x1e666a of _0xdd8e21){const _0x33e901=getValidValue(_0x1e666a,'');if(_0x33e901)return _0x33e901;}return _0x1cc350;}function resolveOperator(_0x115164,_0x2a2ff1){const _0x3b33a8=_0x166ec7,_0x2535ea=getOperatorName(_0x2a2ff1&&_0x2a2ff1['Operator']||'',_0x2a2ff1&&_0x2a2ff1['SPN']||'');if(_0x2535ea==='未知'&&_0x115164&&_0x115164[_0x3b33a8(0x140)])return String(_0x115164['SPN']);return _0x2535ea;}function formatUptime(_0x2fcb84){const _0x56f1bb=_0x166ec7,_0x34023c=parseInt(_0x2fcb84||0x0)||0x0,_0x6e5235=Math['floor'](_0x34023c/0x15180),_0x1f3e17=Math['floor'](_0x34023c%0x15180/0xe10),_0x5ee7f9=Math[_0x56f1bb(0x146)](_0x34023c%0xe10/0x3c),_0x2d41d9=[];if(_0x6e5235>0x0)_0x2d41d9['push'](_0x6e5235+'天');if(_0x1f3e17>0x0||_0x6e5235>0x0)_0x2d41d9['push'](_0x1f3e17+'小时');return _0x2d41d9['push'](_0x5ee7f9+'分'),_0x2d41d9['join']('\x20');}function formatUptimeShort(_0x3a10e1){const _0x37dc91=_0x166ec7,_0x355752=parseInt(_0x3a10e1||0x0)||0x0,_0x1651fa=Math['floor'](_0x355752/0x15180),_0x5cc6cf=Math[_0x37dc91(0x146)](_0x355752%0x15180/0xe10),_0x2e869f=Math['floor'](_0x355752%0xe10/0x3c),_0x341911=[];if(_0x1651fa>0x0)_0x341911['push'](_0x1651fa+'天');if(_0x5cc6cf>0x0||_0x1651fa>0x0)_0x341911['push'](_0x5cc6cf+'时');return _0x341911[_0x37dc91(0x142)](_0x2e869f+'分'),_0x341911['join']('');}function trafficMbToBytes(_0xeedf6a){const _0x46a206=parseFloat(_0xeedf6a||0x0);if(isNaN(_0x46a206))return 0x0;return Math['round'](_0x46a206*0x400*0x400);}function formatTraffic(_0x14a4f7){const _0x3b06d1=Number(_0x14a4f7||0x0);if(!isFinite(_0x3b06d1)||_0x3b06d1<=0x0)return'0M';const _0x274b99=0x400*0x400,_0x3c0461=0x400*_0x274b99;if(_0x3b06d1>=_0x3c0461)return(_0x3b06d1/_0x3c0461)['toFixed'](0x1)+'G';return(_0x3b06d1/_0x274b99)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x30642f){const _0x553596=_0x166ec7,_0x3f6da0=Number(_0x30642f||0x0);if(!isFinite(_0x3f6da0)||_0x3f6da0<=0x0)return'0';const _0x532750=0x400,_0x34c409=0x400*_0x532750,_0x2a0449=0x400*_0x34c409;if(_0x3f6da0>=_0x2a0449){const _0x5daade=_0x3f6da0/_0x2a0449;return(_0x5daade>=0x64?_0x5daade['toFixed'](0x0):_0x5daade['toFixed'](0x1)[_0x553596(0x149)](/\.0$/,''))+'G';}if(_0x3f6da0>=_0x34c409)return Math['round'](_0x3f6da0/_0x34c409)+'M';if(_0x3f6da0>=_0x532750)return Math['round'](_0x3f6da0/_0x532750)+'K';return String(Math[_0x553596(0x143)](_0x3f6da0));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0xceea0){const _0x5a4cb5=_0x166ec7;if(!_0xceea0)return ZERO_TRAFFIC;const _0x248c92=_0xceea0['day_rx_traffic']!==undefined||_0xceea0['day_tx_traffic']!==undefined||_0xceea0['month_rx_traffic']!==undefined||_0xceea0[_0x5a4cb5(0x121)]!==undefined;if(!_0x248c92)return{'todayBytes':Number(_0xceea0['todayBytes'])||0x0,'monthBytes':Number(_0xceea0[_0x5a4cb5(0x126)])||0x0,'todayRx':Number(_0xceea0['todayRx'])||0x0,'todayTx':Number(_0xceea0['todayTx'])||0x0,'monthRx':Number(_0xceea0['monthRx'])||0x0,'monthTx':Number(_0xceea0['monthTx'])||0x0};const _0x57e6c4=trafficMbToBytes(_0xceea0['day_rx_traffic']),_0x3dc1fb=trafficMbToBytes(_0xceea0['day_tx_traffic']),_0x4b0bb2=trafficMbToBytes(_0xceea0['month_rx_traffic']),_0x5d3d46=trafficMbToBytes(_0xceea0['month_tx_traffic']);return{'todayBytes':_0x57e6c4+_0x3dc1fb,'monthBytes':_0x4b0bb2+_0x5d3d46,'todayRx':_0x57e6c4,'todayTx':_0x3dc1fb,'monthRx':_0x4b0bb2,'monthTx':_0x5d3d46};}function trafficRxRatio(_0x5e3b6a,_0x465bd5){const _0x9a61e0=Number(_0x5e3b6a||0x0)+Number(_0x465bd5||0x0);if(!isFinite(_0x9a61e0)||_0x9a61e0<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x5e3b6a||0x0)/_0x9a61e0));}function getOperatorName(_0x4493ac,_0x3f6c42){const _0x8cf454=_0x166ec7;if(!_0x4493ac)return _0x3f6c42||'未知';const _0x1b3804=String(_0x4493ac)[_0x8cf454(0x132)]();if(_0x1b3804['includes']('CMCC')||_0x1b3804==='中国移动'||_0x1b3804['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x1b3804['includes']('CUCC')||_0x1b3804==='中国联通'||_0x1b3804['includes']('CHINA\x20UNICOM')||_0x1b3804['includes']('UNICOM'))return'中国联通';if(_0x1b3804['includes']('CTCC')||_0x1b3804==='CT'||_0x1b3804===_0x8cf454(0x13e)||_0x1b3804['includes']('CHINA\x20TELECOM')||_0x1b3804['includes']('TELECOM'))return'中国电信';if(_0x1b3804['includes']('CBN')||_0x1b3804==='中国广电'||_0x1b3804[_0x8cf454(0x12d)]('CHINA\x20BROADCAST'))return'中国广电';return _0x4493ac;}function getSignalColor(_0x2e8457,_0x41021b){const _0x9699ba=_0x166ec7;let _0x229297=parseInt(_0x2e8457);if(isNaN(_0x229297))_0x229297=-0x78;if(_0x229297>-0x59)return _0x41021b['ok'];if(_0x229297>-0x63)return _0x41021b[_0x9699ba(0x145)];return _0x41021b['bad'];}function getSinrColor(_0x266c73,_0x1b598e){let _0x2cc4eb=parseFloat(_0x266c73);if(isNaN(_0x2cc4eb))_0x2cc4eb=0x0;if(_0x2cc4eb>0xf)return _0x1b598e['ok'];if(_0x2cc4eb>0x8)return _0x1b598e['warn'];return _0x1b598e['bad'];}function getAllBands(_0x48be22,_0xb74d67,_0x48f299){const _0x46c951=_0x166ec7,_0x4b93e2=[],_0x5d2c7c=_0x48f299?'N':'B',_0xd6a356=getValidValue(_0x48be22?.['BAND']||_0x48be22?.['NR_BAND']||_0x48be22?.['LTE_BAND'],'');if(_0xd6a356)_0x4b93e2[_0x46c951(0x142)](_0x5d2c7c+_0xd6a356);for(const _0x58a9ce of _0xb74d67?.[_0x46c951(0x136)]||[]){const _0x23a1b8=String(_0x58a9ce?.['Band']||'');if(_0x23a1b8&&_0x23a1b8!=='-')_0x4b93e2['push'](_0x5d2c7c+_0x23a1b8);}if(_0x4b93e2['length']===0x0)_0x4b93e2['push'](_0x48f299?'N78':'B3');return _0x4b93e2;}function getCaBadgeText(_0x2ea6f7,_0x263876,_0x3b9293){const _0x479c15=_0x166ec7,_0x3064b7=(_0x263876?_0x479c15(0x11f):'4G\x20')+_0x3b9293;if(!_0x263876)return _0x3064b7;const _0x5577ab=0x1+(_0x2ea6f7&&_0x2ea6f7['sub_CA_info']||[])['length'];if(_0x5577ab>=0x4)return'5GA+';if(_0x5577ab===0x3)return'5GA';if(_0x5577ab===0x2)return'5G+';return _0x3064b7;}function getCarrierCountText(_0x4957de){const _0x353709=_0x166ec7,_0x1fa5be=(_0x4957de&&_0x4957de['sub_CA_info']||[])['length'];if(_0x1fa5be===0x0)return'单载波';if(_0x1fa5be===0x1)return'双载波';if(_0x1fa5be===0x2)return'三载波';return _0x353709(0x120);}function getNetworkModeText(_0x3f3464,_0x1f8dc7,_0x50baa1){const _0x1f8b07=_0x166ec7,_0x4686d9=String(_0x50baa1||'')['toUpperCase']();if(!_0x1f8dc7){if(!_0x4686d9||_0x4686d9==='4G'||_0x4686d9===_0x1f8b07(0x11d))return'4G\x20LTE';return _0x1f8b07(0x137)+_0x4686d9;}const _0x7cd117=0x1+(_0x3f3464&&_0x3f3464['sub_CA_info']||[])['length'];if(_0x7cd117>=0x4)return _0x1f8b07(0x13b);if(_0x7cd117===0x3)return'5GA';if(_0x7cd117===0x2)return'5G+';return _0x4686d9?'5G\x20'+_0x4686d9:'5G\x20SA';}function rsrpToPercent(_0x48a40a){const _0x1d08a0=_0x166ec7;let _0x2110f9=parseInt(_0x48a40a);if(isNaN(_0x2110f9))_0x2110f9=-0x78;const _0x2f2792=Math['min'](-0x46,Math[_0x1d08a0(0x12c)](-0x78,_0x2110f9)),_0x158fb2=(_0x2f2792+0x78)/0x32;return Math[_0x1d08a0(0x123)](0x64,Math[_0x1d08a0(0x12c)](0xa,0xa+_0x158fb2*0x5a));}function sinrToPercent(_0x37925c){let _0x2debcb=parseFloat(_0x37925c);if(isNaN(_0x2debcb))_0x2debcb=0x0;return Math['min'](0x64,Math['max'](0x0,_0x2debcb/0x19*0x64));}function _0x2ae4(_0x358251,_0x53c9da){const _0x142aec=_0x142a();return _0x2ae4=function(_0x2ae487,_0x14d1c4){_0x2ae487=_0x2ae487-0x11d;let _0x30c5ee=_0x142aec[_0x2ae487];if(_0x2ae4['EzRQgF']===undefined){var _0x933a04=function(_0x2694ca){const _0x4d4c6a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c4f7a='',_0xb28833='';for(let _0x2f1ee4=0x0,_0x1670a3,_0x20d5df,_0x220357=0x0;_0x20d5df=_0x2694ca['charAt'](_0x220357++);~_0x20d5df&&(_0x1670a3=_0x2f1ee4%0x4?_0x1670a3*0x40+_0x20d5df:_0x20d5df,_0x2f1ee4++%0x4)?_0x2c4f7a+=String['fromCharCode'](0xff&_0x1670a3>>(-0x2*_0x2f1ee4&0x6)):0x0){_0x20d5df=_0x4d4c6a['indexOf'](_0x20d5df);}for(let _0x1ce3b0=0x0,_0xdd8e21=_0x2c4f7a['length'];_0x1ce3b0<_0xdd8e21;_0x1ce3b0++){_0xb28833+='%'+('00'+_0x2c4f7a['charCodeAt'](_0x1ce3b0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb28833);};_0x2ae4['XCkKuZ']=_0x933a04,_0x358251=arguments,_0x2ae4['EzRQgF']=!![];}const _0x2c985b=_0x142aec[0x0],_0x2046e5=_0x2ae487+_0x2c985b,_0x4d78a5=_0x358251[_0x2046e5];return!_0x4d78a5?(_0x30c5ee=_0x2ae4['XCkKuZ'](_0x30c5ee),_0x358251[_0x2046e5]=_0x30c5ee):_0x30c5ee=_0x4d78a5,_0x30c5ee;},_0x2ae4(_0x358251,_0x53c9da);}function resolveDeviceName(_0x327800,_0x14c40e){const _0x4690cf=_0x166ec7,_0x51fbed=_0x327800&&_0x327800['Name']!=null?String(_0x327800[_0x4690cf(0x131)])[_0x4690cf(0x128)]():'';if(!_0x51fbed)return _0x14c40e;if(_0x51fbed==='--'||_0x51fbed==='undefined'||_0x51fbed===_0x4690cf(0x147)||_0x51fbed==='0')return _0x14c40e;return _0x51fbed;}function rsrpToBars(_0x7ce7fd){const _0x5d369b=parseInt(_0x7ce7fd);if(isNaN(_0x5d369b))return 0x0;if(_0x5d369b>=-0x55)return 0x4;if(_0x5d369b>=-0x5f)return 0x3;if(_0x5d369b>=-0x69)return 0x2;if(_0x5d369b>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x4e95e4){if(!_0x4e95e4)return 0x0;if(typeof _0x4e95e4['onlineDevices']==='number')return _0x4e95e4['onlineDevices'];const _0xbacd05=_0x4e95e4['MainBaseInfo'];if(!Array['isArray'](_0xbacd05))return 0x0;return _0xbacd05['filter'](_0x123b26=>_0x123b26&&String(_0x123b26['NetStatus'])==='1')['length'];}function urlDecode(_0x1d9a71){const _0x5176f9=_0x166ec7,_0x272782=[];for(let _0x424085=0x0;_0x424085<_0x1d9a71['length'];_0x424085+=0x2)_0x272782[_0x5176f9(0x142)](parseInt(_0x1d9a71['substr'](_0x424085,0x2),0x10));let _0x19deb3='';for(let _0x519494=0x0;_0x519494<_0x272782['length'];){const _0x423c42=_0x272782[_0x519494];if(_0x423c42<0x80)_0x19deb3+=String['fromCharCode'](_0x423c42),_0x519494++;else{if(_0x423c42>>0x5===0x6)_0x19deb3+=String['fromCharCode']((_0x423c42&0x1f)<<0x6|_0x272782[_0x519494+0x1]&0x3f),_0x519494+=0x2;else _0x423c42>>0x4===0xe?(_0x19deb3+=String[_0x5176f9(0x127)]((_0x423c42&0xf)<<0xc|(_0x272782[_0x519494+0x1]&0x3f)<<0x6|_0x272782[_0x519494+0x2]&0x3f),_0x519494+=0x3):(_0x19deb3+=String[_0x5176f9(0x127)]((_0x423c42&0x7)<<0x12|(_0x272782[_0x519494+0x1]&0x3f)<<0xc|(_0x272782[_0x519494+0x2]&0x3f)<<0x6|_0x272782[_0x519494+0x3]),_0x519494+=0x4);}}return _0x19deb3;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0x166ec7(0x125),'device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':_0x166ec7(0x12b),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':_0x166ec7(0x144)};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x39cfe5='0123456789ABCDEF';let _0x2201a1='';for(let _0x30b81e=0x0;_0x30b81e<0x20;_0x30b81e++)_0x2201a1+=_0x39cfe5[Math['floor'](Math['random']()*0x10)];return _0x2201a1;}function _0x142a(){const _0x3cd09e=['nuDbkW','zgv2AwnLtMfTzq','nNPdsvLMBW','5lIT5zU955s15l+H','otK1ntuXmNz4zhHlvW','u1bo','mteZmdm3mfLoCgTuBG','ChvZAa','CM91BMq','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','D2fYBG','zMXVB3i','BNvSBa','nta2yZC1nJC2otzLnwy0otq0','CMvWBgfJzq','owHIDercua','lZuGFcbMyxvSDd0','tfrf','BgvUz3rO','nuCG','5zUB6l295RoI','Bw9UDgHFDhHFDhjHzMzPyW','CNnWugfYyw0','BwLU','mti4odi2mgzdr2zXyG','77Yb5Qoa5P+L572r57UC','Bw9UDgHcExrLCW','zNjVBunOyxjdB2rL','DhjPBq','mte3mZe5oe5VwuTQEG','q1bfx0rfvKLdrv9oqu1f','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','Bwf4','Aw5JBhvKzxm','mtGXndu2u2rgswLL','C29Tzq','572r57UC6k+35Rgc5AsX6lsL','tMfTzq','Dg9vChbLCKnHC2u','rdHgnta3renbrJmW','otq2odiYs3LLExLu','nZq2nZi1y0zOv1ju','C3vIx0nbx2LUzM8','neCG','zMLSDgvY','Dg9KyxLuEa','tLjFqKfora'];_0x142a=function(){return _0x3cd09e;};return _0x142a();}function generateSequenceId(_0xe578ba){return _0xe578ba+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0xc9c5cb){const _0x3ba257=_0x166ec7;if(!_0xc9c5cb||_0xc9c5cb[_0x3ba257(0x11e)]===0x0)return null;if(_0xc9c5cb[_0x3ba257(0x12f)](_0x144751=>AUTH_ERROR_CODES['indexOf'](_0x144751)>=0x0))return'auth';if(_0xc9c5cb['some'](_0x1fa5fd=>DEVICE_ERROR_CODES['indexOf'](_0x1fa5fd)>=0x0))return'device';return'network';}function readResult(_0x1be771,_0x54e945){if(!_0x1be771||_0x1be771['status']!=='fulfilled'||!_0x1be771['value'])return _0x54e945['push'](NET_ERROR_CODE),null;const _0x535238=_0x1be771['value'];if(_0x535238['resultCode']===0x0)return _0x535238;return _0x54e945['push'](typeof _0x535238['resultCode']==='number'?_0x535238['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x2b5e8a,_0x4e7fd8,_0x30a729,_0x285d11,_0x41426a){const _0xd95c0d=_0x166ec7;if(!_0x30a729)return null;const _0x4e32b1={'CmdType':_0x2b5e8a,..._0x4e7fd8};if(!_0x4e32b1['SequenceId'])_0x4e32b1['SequenceId']=generateSequenceId(_0x2b5e8a);const _0x12ae5c={'appVersion':urlDecode('322e322e3531'),'mac':_0x285d11,'timeout':0x3,'token':_0x30a729,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode(_0xd95c0d(0x148)),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x4e32b1)}),'operatorId':getOperatorId()},_0x1c4f7b=new AbortController(),_0x500c4b=setTimeout(()=>{try{_0x1c4f7b['abort']();}catch(_0x4e9cdf){}},_0x41426a);try{const _0xee5893=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x30a729},'body':JSON['stringify'](_0x12ae5c),'signal':_0x1c4f7b['signal']}),_0x3310d3=await _0xee5893['json']();if(_0x3310d3&&_0x3310d3['rspParam']){const _0x455859=JSON['parse'](_0x3310d3[_0xd95c0d(0x122)]);if(_0x455859['Result']===0x0&&_0x455859['return_Parameter']){const _0x1d7a5e=String(_0x455859['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x2bcb4c=JSON['parse'](decodeBase64Utf8(_0x1d7a5e));return{..._0x2bcb4c,'resultCode':0x0};}}return _0x3310d3||{'resultCode':NET_ERROR_CODE};}catch(_0x29859a){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0xd95c0d(0x130)};}finally{clearTimeout(_0x500c4b);}}function decodeBase64Utf8(_0x2ee8b3){const _0x8dbe9d=_0x166ec7,_0x28c4b5=atob(_0x2ee8b3);try{const _0x5b3c2a=new Uint8Array(_0x28c4b5[_0x8dbe9d(0x11e)]);for(let _0x1fa1f7=0x0;_0x1fa1f7<_0x28c4b5['length'];_0x1fa1f7++)_0x5b3c2a[_0x1fa1f7]=_0x28c4b5['charCodeAt'](_0x1fa1f7);return new TextDecoder('utf-8')['decode'](_0x5b3c2a);}catch(_0x3e3bec){return _0x28c4b5;}}async function fetchCpeApi(_0x4ccae0,_0x4c649e,_0x4f6df1,_0x160143={},_0xdea63d=0xbb8){if(!_0x4c649e)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x4ccae0,_0x160143,_0x4c649e,_0x4f6df1,_0xdea63d);}function isEmpty(_0x39a792){return!_0x39a792||typeof _0x39a792==='object'&&Object['keys'](_0x39a792)['length']===0x0;}async function fetchAll(_0x453c19){const _0x5ecc53=_0x166ec7,_0xd0ef0c=_0x453c19['token'],_0x20b000=_0x453c19['mac'],_0x50097c=0xbb8,_0x4bd8bf=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0xd0ef0c,_0x20b000,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0xd0ef0c,_0x20b000,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0xd0ef0c,_0x20b000,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0xd0ef0c,_0x20b000,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0xd0ef0c,_0x20b000,{},0xbb8)]),_0x28881f=[];let _0x2e666b=readResult(_0x4bd8bf[0x0],_0x28881f),_0x51d12b=readResult(_0x4bd8bf[0x1],_0x28881f),_0x4def76=readResult(_0x4bd8bf[0x2],_0x28881f),_0x54490f=readResult(_0x4bd8bf[0x3],_0x28881f);const _0x47685a=readResult(_0x4bd8bf[0x4],_0x28881f);if(_0x4def76)_0x4def76=_0x4def76['MainRouter']||_0x4def76['Router']||_0x4def76;const _0x978039=[_0x2e666b,_0x51d12b,_0x4def76,_0x54490f,_0x47685a][_0x5ecc53(0x138)](_0x2574f2=>!isEmpty(_0x2574f2))['length'],_0x11a650=_0x978039===0x0?classifyFault(_0x28881f):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x978039+_0x5ecc53(0x14b)+(_0x11a650||'-')+'\x20|\x20失败码=['+_0x28881f['join'](',')+']'),{'rf':_0x2e666b,'ca':_0x51d12b,'topo':_0x4def76,'sim':_0x54490f,'traffic':_0x47685a,'failCodes':_0x28881f,'fault':_0x11a650,'successCount':_0x978039};}function saveCache(_0x3b5335){const _0x49b041=_0x166ec7;try{const _0x163db6=parseTrafficData(_0x3b5335['traffic']),_0x1f1ff3={'rf':{'WorkMode':_0x3b5335['rf']?.['WorkMode'],'SSB_RSRP':_0x3b5335['rf']?.['SSB_RSRP'],'RSRP':_0x3b5335['rf']?.['RSRP'],'SSB_SINR':_0x3b5335['rf']?.['SSB_SINR'],'SINR':_0x3b5335['rf']?.['SINR'],'SSB_RSRQ':_0x3b5335['rf']?.['SSB_RSRQ'],'RSRQ':_0x3b5335['rf']?.['RSRQ'],'SSB_RSSI':_0x3b5335['rf']?.['SSB_RSSI'],'RSSI':_0x3b5335['rf']?.['RSSI'],'BAND':_0x3b5335['rf']?.['BAND'],'NR_BAND':_0x3b5335['rf']?.[_0x49b041(0x13a)],'LTE_BAND':_0x3b5335['rf']?.['LTE_BAND'],'PCI':_0x3b5335['rf']?.['PCI'],'SPN':_0x3b5335['rf']?.['SPN']},'ca':{'main_CA_info':_0x3b5335['ca']?.['main_CA_info']||{},'sub_CA_info':_0x3b5335['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x3b5335['topo']?.['NetStatus'],'UpTime':_0x3b5335['topo']?.['UpTime'],'Name':_0x3b5335['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x3b5335['topo'])},'sim':{'Operator':_0x3b5335['sim']?.['Operator'],'SPN':_0x3b5335['sim']?.['SPN']},'traffic':{'todayBytes':_0x163db6['todayBytes'],'monthBytes':_0x163db6['monthBytes'],'todayRx':_0x163db6['todayRx'],'todayTx':_0x163db6[_0x49b041(0x139)],'monthRx':_0x163db6['monthRx'],'monthTx':_0x163db6['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x1f1ff3));}catch(_0x19d43d){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x19d43d);}}function loadCache(){try{const _0xff0e4e=Keychain['get'](KEY_CACHE);if(!_0xff0e4e)return null;const _0x450bb4=JSON['parse'](_0xff0e4e);if(!_0x450bb4||typeof _0x450bb4!=='object')return null;return _0x450bb4;}catch(_0x4ffbf4){return null;}}
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
