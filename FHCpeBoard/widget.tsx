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

(function(_0x4a03ef,_0x454034){const _0x5a58f0=_0x59e4,_0x2ed8ed=_0x4a03ef();while(!![]){try{const _0x2db64a=parseInt(_0x5a58f0(0x148))/0x1*(parseInt(_0x5a58f0(0x140))/0x2)+-parseInt(_0x5a58f0(0x143))/0x3+parseInt(_0x5a58f0(0x13b))/0x4*(parseInt(_0x5a58f0(0x153))/0x5)+parseInt(_0x5a58f0(0x13d))/0x6+parseInt(_0x5a58f0(0x144))/0x7*(parseInt(_0x5a58f0(0x155))/0x8)+-parseInt(_0x5a58f0(0x139))/0x9*(-parseInt(_0x5a58f0(0x152))/0xa)+-parseInt(_0x5a58f0(0x15b))/0xb;if(_0x2db64a===_0x454034)break;else _0x2ed8ed['push'](_0x2ed8ed['shift']());}catch(_0x5b4517){_0x2ed8ed['push'](_0x2ed8ed['shift']());}}}(_0x2db5,0xa6cf5));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x57d8d1,_0x392779){const _0xef8322=_0x59e4;try{const _0xdfcc97=Keychain[_0xef8322(0x151)](_0x57d8d1);return _0xdfcc97===null||_0xdfcc97===undefined||_0xdfcc97===''?_0x392779:String(_0xdfcc97)['trim']();}catch(_0x774df1){return _0x392779;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x68e493){const _0x16e79f=_0x59e4;try{if(_0x68e493['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x68e493['token'])['trim']());if(_0x68e493[_0x16e79f(0x147)]!==undefined)Keychain[_0x16e79f(0x14f)](MAC_KEY,String(_0x68e493['mac'])['trim']()||DEFAULT_MAC);if(_0x68e493['deviceName']!==undefined)Keychain[_0x16e79f(0x14f)](NAME_KEY,String(_0x68e493['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x5d67fb){console['log'](_0x16e79f(0x145)+_0x5d67fb);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x340745,_0x3d2e71){if(_0x340745===undefined||_0x340745===null||_0x340745==='')return _0x3d2e71;const _0x1e52b4=String(_0x340745)['trim']();return _0x1e52b4==='-'||_0x1e52b4==='undefined'?_0x3d2e71:_0x1e52b4;}function _0x2db5(){const _0x4e4d6e=['CMv0DxjUx1bHCMfTzxrLCG','twfPBKjHC2vjBMzV','ChvZAa','ovb0qunKCa','Dg9KyxLuEa','mtm3ntm0oefwvMfUAa','tMv0u3rHDhvZ','mJyWmduYmhb3rgzsEq','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','5PYQ6ywn572UifrVA2vU','nZa2EgfOrgPt','BwLU','uLnsuq','mtiYodKYm2XmruffsG','otfwDKTyCgu','4PQG77Ipios/NEwTMoIUVUE9RUwKSEI0Psb8ia','u2vXDwvUy2vjza','BwfJ','mZqZmMTQtvHgqW','neCGtfrf','AM9PBG','B25SAw5Lrgv2AwnLCW','DMfSDwu','Bg9N','5lIT5zU95BM/55s1','C2v0','nuCR','z2v0','mJGZnJCXmfbAyLDwrq','mtbXyLjhtMe','BgvUz3rO','mJm0nZm2zg1cqLrX','Aw5JBhvKzxm','tJC4','tLjFqKfora','B2jQzwn0','Bw9UDgHFCNHFDhjHzMzPyW','mJa5nti5ndnxwgHsqMO'];_0x2db5=function(){return _0x4e4d6e;};return _0x2db5();}function firstValid(_0x5cd0cc,_0x2891d7){for(const _0xe9a4f8 of _0x5cd0cc){const _0x63e3b6=getValidValue(_0xe9a4f8,'');if(_0x63e3b6)return _0x63e3b6;}return _0x2891d7;}function resolveOperator(_0x1f0f77,_0x11348f){const _0x7273d5=getOperatorName(_0x11348f&&_0x11348f['Operator']||'',_0x11348f&&_0x11348f['SPN']||'');if(_0x7273d5==='未知'&&_0x1f0f77&&_0x1f0f77['SPN'])return String(_0x1f0f77['SPN']);return _0x7273d5;}function formatUptime(_0xe5c6b9){const _0x37a3c8=_0x59e4,_0x16fb38=parseInt(_0xe5c6b9||0x0)||0x0,_0x5d8c5e=Math['floor'](_0x16fb38/0x15180),_0x50930d=Math['floor'](_0x16fb38%0x15180/0xe10),_0x1ce256=Math['floor'](_0x16fb38%0xe10/0x3c),_0x55b264=[];if(_0x5d8c5e>0x0)_0x55b264['push'](_0x5d8c5e+'天');if(_0x50930d>0x0||_0x5d8c5e>0x0)_0x55b264['push'](_0x50930d+'小时');return _0x55b264['push'](_0x1ce256+'分'),_0x55b264[_0x37a3c8(0x14a)]('\x20');}function formatUptimeShort(_0x5c80f6){const _0x38dee8=_0x59e4,_0x558efc=parseInt(_0x5c80f6||0x0)||0x0,_0x21f40b=Math['floor'](_0x558efc/0x15180),_0x57ba54=Math['floor'](_0x558efc%0x15180/0xe10),_0x45ed44=Math['floor'](_0x558efc%0xe10/0x3c),_0x8aaea7=[];if(_0x21f40b>0x0)_0x8aaea7['push'](_0x21f40b+'天');if(_0x57ba54>0x0||_0x21f40b>0x0)_0x8aaea7['push'](_0x57ba54+'时');return _0x8aaea7[_0x38dee8(0x138)](_0x45ed44+'分'),_0x8aaea7['join']('');}function trafficMbToBytes(_0x4aab65){const _0x1a9e9d=parseFloat(_0x4aab65||0x0);if(isNaN(_0x1a9e9d))return 0x0;return Math['round'](_0x1a9e9d*0x400*0x400);}function formatTraffic(_0x43ae7b){const _0x58af01=Number(_0x43ae7b||0x0);if(!isFinite(_0x58af01)||_0x58af01<=0x0)return'0M';const _0x4cf3e2=0x400*0x400,_0x120628=0x400*_0x4cf3e2;if(_0x58af01>=_0x120628)return(_0x58af01/_0x120628)['toFixed'](0x1)+'G';return(_0x58af01/_0x4cf3e2)['toFixed'](0x1)+'M';}function _0x59e4(_0x5b527e,_0x208e02){const _0x2db58=_0x2db5();return _0x59e4=function(_0x59e490,_0x5a0dac){_0x59e490=_0x59e490-0x136;let _0x50a9ac=_0x2db58[_0x59e490];if(_0x59e4['emEyjP']===undefined){var _0x5da69a=function(_0x57d8d1){const _0x392779='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xdfcc97='',_0x774df1='';for(let _0x68e493=0x0,_0x5d67fb,_0x340745,_0x3d2e71=0x0;_0x340745=_0x57d8d1['charAt'](_0x3d2e71++);~_0x340745&&(_0x5d67fb=_0x68e493%0x4?_0x5d67fb*0x40+_0x340745:_0x340745,_0x68e493++%0x4)?_0xdfcc97+=String['fromCharCode'](0xff&_0x5d67fb>>(-0x2*_0x68e493&0x6)):0x0){_0x340745=_0x392779['indexOf'](_0x340745);}for(let _0x1e52b4=0x0,_0x5cd0cc=_0xdfcc97['length'];_0x1e52b4<_0x5cd0cc;_0x1e52b4++){_0x774df1+='%'+('00'+_0xdfcc97['charCodeAt'](_0x1e52b4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x774df1);};_0x59e4['HdWxCT']=_0x5da69a,_0x5b527e=arguments,_0x59e4['emEyjP']=!![];}const _0x2399b0=_0x2db58[0x0],_0x21b810=_0x59e490+_0x2399b0,_0x298706=_0x5b527e[_0x21b810];return!_0x298706?(_0x50a9ac=_0x59e4['HdWxCT'](_0x50a9ac),_0x5b527e[_0x21b810]=_0x50a9ac):_0x50a9ac=_0x298706,_0x50a9ac;},_0x59e4(_0x5b527e,_0x208e02);}function formatTrafficShort(_0x4e82ab){const _0x4eec32=Number(_0x4e82ab||0x0);if(!isFinite(_0x4eec32)||_0x4eec32<=0x0)return'0';const _0x141f5b=0x400,_0x252dc8=0x400*_0x141f5b,_0x56687f=0x400*_0x252dc8;if(_0x4eec32>=_0x56687f){const _0x4e0bb4=_0x4eec32/_0x56687f;return(_0x4e0bb4>=0x64?_0x4e0bb4['toFixed'](0x0):_0x4e0bb4['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x4eec32>=_0x252dc8)return Math['round'](_0x4eec32/_0x252dc8)+'M';if(_0x4eec32>=_0x141f5b)return Math['round'](_0x4eec32/_0x141f5b)+'K';return String(Math['round'](_0x4eec32));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x29312a){const _0x56f170=_0x59e4;if(!_0x29312a)return ZERO_TRAFFIC;const _0x2a5cf3=_0x29312a['day_rx_traffic']!==undefined||_0x29312a['day_tx_traffic']!==undefined||_0x29312a['month_rx_traffic']!==undefined||_0x29312a['month_tx_traffic']!==undefined;if(!_0x2a5cf3)return{'todayBytes':Number(_0x29312a['todayBytes'])||0x0,'monthBytes':Number(_0x29312a['monthBytes'])||0x0,'todayRx':Number(_0x29312a['todayRx'])||0x0,'todayTx':Number(_0x29312a['todayTx'])||0x0,'monthRx':Number(_0x29312a['monthRx'])||0x0,'monthTx':Number(_0x29312a['monthTx'])||0x0};const _0x13aa67=trafficMbToBytes(_0x29312a['day_rx_traffic']),_0x209b1f=trafficMbToBytes(_0x29312a['day_tx_traffic']),_0x3e68bc=trafficMbToBytes(_0x29312a[_0x56f170(0x15a)]),_0x4c58a3=trafficMbToBytes(_0x29312a['month_tx_traffic']);return{'todayBytes':_0x13aa67+_0x209b1f,'monthBytes':_0x3e68bc+_0x4c58a3,'todayRx':_0x13aa67,'todayTx':_0x209b1f,'monthRx':_0x3e68bc,'monthTx':_0x4c58a3};}function trafficRxRatio(_0x56aa22,_0x1934e7){const _0xc6ff17=Number(_0x56aa22||0x0)+Number(_0x1934e7||0x0);if(!isFinite(_0xc6ff17)||_0xc6ff17<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x56aa22||0x0)/_0xc6ff17));}function getOperatorName(_0x4cf78f,_0x3beec7){const _0x4e72ba=_0x59e4;if(!_0x4cf78f)return _0x3beec7||'未知';const _0x17af46=String(_0x4cf78f)['toUpperCase']();if(_0x17af46['includes']('CMCC')||_0x17af46==='中国移动'||_0x17af46[_0x4e72ba(0x156)]('CHINA\x20MOBILE'))return'中国移动';if(_0x17af46['includes']('CUCC')||_0x17af46==='中国联通'||_0x17af46['includes']('CHINA\x20UNICOM')||_0x17af46['includes']('UNICOM'))return'中国联通';if(_0x17af46[_0x4e72ba(0x156)]('CTCC')||_0x17af46==='CT'||_0x17af46==='中国电信'||_0x17af46['includes']('CHINA\x20TELECOM')||_0x17af46['includes']('TELECOM'))return'中国电信';if(_0x17af46[_0x4e72ba(0x156)]('CBN')||_0x17af46==='中国广电'||_0x17af46['includes']('CHINA\x20BROADCAST'))return _0x4e72ba(0x14e);return _0x4cf78f;}function getSignalColor(_0x4a059d,_0x443b46){let _0x49a3fe=parseInt(_0x4a059d);if(isNaN(_0x49a3fe))_0x49a3fe=-0x78;if(_0x49a3fe>-0x59)return _0x443b46['ok'];if(_0x49a3fe>-0x63)return _0x443b46['warn'];return _0x443b46['bad'];}function getSinrColor(_0xa6b3cb,_0x59c6e4){let _0x118e9d=parseFloat(_0xa6b3cb);if(isNaN(_0x118e9d))_0x118e9d=0x0;if(_0x118e9d>0xf)return _0x59c6e4['ok'];if(_0x118e9d>0x8)return _0x59c6e4['warn'];return _0x59c6e4['bad'];}function getAllBands(_0x1727ce,_0x256661,_0x4b2b50){const _0x50c20b=_0x59e4,_0x4e82b8=[],_0x2bf779=_0x4b2b50?'N':'B',_0x23b28=getValidValue(_0x1727ce?.['BAND']||_0x1727ce?.['NR_BAND']||_0x1727ce?.['LTE_BAND'],'');if(_0x23b28)_0x4e82b8[_0x50c20b(0x138)](_0x2bf779+_0x23b28);for(const _0x5cae6 of _0x256661?.['sub_CA_info']||[]){const _0x561af7=String(_0x5cae6?.['Band']||'');if(_0x561af7&&_0x561af7!=='-')_0x4e82b8['push'](_0x2bf779+_0x561af7);}if(_0x4e82b8['length']===0x0)_0x4e82b8['push'](_0x4b2b50?_0x50c20b(0x157):'B3');return _0x4e82b8;}function getCaBadgeText(_0x2f5b5f,_0x10def2,_0x285912){const _0x46749d=_0x59e4,_0x42470f=(_0x10def2?'5G\x20':'4G\x20')+_0x285912;if(!_0x10def2)return _0x42470f;const _0x31f41d=0x1+(_0x2f5b5f&&_0x2f5b5f['sub_CA_info']||[])[_0x46749d(0x154)];if(_0x31f41d>=0x4)return'5GA+';if(_0x31f41d===0x3)return'5GA';if(_0x31f41d===0x2)return _0x46749d(0x150);return _0x42470f;}function getCarrierCountText(_0x169b6d){const _0x4c16a1=(_0x169b6d&&_0x169b6d['sub_CA_info']||[])['length'];if(_0x4c16a1===0x0)return'单载波';if(_0x4c16a1===0x1)return'双载波';if(_0x4c16a1===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x405485,_0x435218,_0x586979){const _0x2a845c=_0x59e4,_0x1c482c=String(_0x586979||'')['toUpperCase']();if(!_0x435218){if(!_0x1c482c||_0x1c482c==='4G'||_0x1c482c==='LTE')return _0x2a845c(0x149);return'4G\x20'+_0x1c482c;}const _0x1952b9=0x1+(_0x405485&&_0x405485['sub_CA_info']||[])['length'];if(_0x1952b9>=0x4)return'5GA+';if(_0x1952b9===0x3)return'5GA';if(_0x1952b9===0x2)return'5G+';return _0x1c482c?'5G\x20'+_0x1c482c:'5G\x20SA';}function rsrpToPercent(_0xc9efd7){let _0x2a0132=parseInt(_0xc9efd7);if(isNaN(_0x2a0132))_0x2a0132=-0x78;const _0x304311=Math['min'](-0x46,Math['max'](-0x78,_0x2a0132)),_0x86e926=(_0x304311+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x86e926*0x5a));}function sinrToPercent(_0x2bc395){const _0x1571c5=_0x59e4;let _0x11aa83=parseFloat(_0x2bc395);if(isNaN(_0x11aa83))_0x11aa83=0x0;return Math[_0x1571c5(0x141)](0x64,Math['max'](0x0,_0x11aa83/0x19*0x64));}function resolveDeviceName(_0x5ea0e6,_0x398a06){const _0x562a08=_0x5ea0e6&&_0x5ea0e6['Name']!=null?String(_0x5ea0e6['Name'])['trim']():'';if(!_0x562a08)return _0x398a06;if(_0x562a08==='--'||_0x562a08==='undefined'||_0x562a08==='null'||_0x562a08==='0')return _0x398a06;return _0x562a08;}function rsrpToBars(_0x409426){const _0x3ed121=parseInt(_0x409426);if(isNaN(_0x3ed121))return 0x0;if(_0x3ed121>=-0x55)return 0x4;if(_0x3ed121>=-0x5f)return 0x3;if(_0x3ed121>=-0x69)return 0x2;if(_0x3ed121>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1d8e9f){const _0x2ef363=_0x59e4;if(!_0x1d8e9f)return 0x0;if(typeof _0x1d8e9f[_0x2ef363(0x14b)]==='number')return _0x1d8e9f['onlineDevices'];const _0xb050bd=_0x1d8e9f[_0x2ef363(0x137)];if(!Array['isArray'](_0xb050bd))return 0x0;return _0xb050bd['filter'](_0x4f71b7=>_0x4f71b7&&String(_0x4f71b7[_0x2ef363(0x13c)])==='1')['length'];}function urlDecode(_0x16fbb6){const _0x1a02c8=_0x59e4,_0x10adb9=[];for(let _0x177af5=0x0;_0x177af5<_0x16fbb6['length'];_0x177af5+=0x2)_0x10adb9[_0x1a02c8(0x138)](parseInt(_0x16fbb6['substr'](_0x177af5,0x2),0x10));let _0x5ec183='';for(let _0x11b274=0x0;_0x11b274<_0x10adb9['length'];){const _0x31ad76=_0x10adb9[_0x11b274];if(_0x31ad76<0x80)_0x5ec183+=String['fromCharCode'](_0x31ad76),_0x11b274++;else{if(_0x31ad76>>0x5===0x6)_0x5ec183+=String['fromCharCode']((_0x31ad76&0x1f)<<0x6|_0x10adb9[_0x11b274+0x1]&0x3f),_0x11b274+=0x2;else _0x31ad76>>0x4===0xe?(_0x5ec183+=String['fromCharCode']((_0x31ad76&0xf)<<0xc|(_0x10adb9[_0x11b274+0x1]&0x3f)<<0x6|_0x10adb9[_0x11b274+0x2]&0x3f),_0x11b274+=0x3):(_0x5ec183+=String['fromCharCode']((_0x31ad76&0x7)<<0x12|(_0x10adb9[_0x11b274+0x1]&0x3f)<<0xc|(_0x10adb9[_0x11b274+0x2]&0x3f)<<0x6|_0x10adb9[_0x11b274+0x3]),_0x11b274+=0x4);}}return _0x5ec183;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x413f41='0123456789ABCDEF';let _0x4955eb='';for(let _0x132031=0x0;_0x132031<0x20;_0x132031++)_0x4955eb+=_0x413f41[Math['floor'](Math['random']()*0x10)];return _0x4955eb;}function generateSequenceId(_0x5cade3){return _0x5cade3+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x1ff80e){const _0x3310aa=_0x59e4;if(!_0x1ff80e||_0x1ff80e[_0x3310aa(0x154)]===0x0)return null;if(_0x1ff80e['some'](_0x2b519e=>AUTH_ERROR_CODES['indexOf'](_0x2b519e)>=0x0))return'auth';if(_0x1ff80e['some'](_0x434777=>DEVICE_ERROR_CODES['indexOf'](_0x434777)>=0x0))return'device';return'network';}function readResult(_0x4a59fc,_0xdefeff){const _0x2e737f=_0x59e4;if(!_0x4a59fc||_0x4a59fc['status']!=='fulfilled'||!_0x4a59fc[_0x2e737f(0x14c)])return _0xdefeff['push'](NET_ERROR_CODE),null;const _0x3bdb6a=_0x4a59fc['value'];if(_0x3bdb6a['resultCode']===0x0)return _0x3bdb6a;return _0xdefeff['push'](typeof _0x3bdb6a['resultCode']==='number'?_0x3bdb6a['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x99ff74,_0x260da9,_0x389018,_0x52e750,_0x34e3d2){const _0x176fb4=_0x59e4;if(!_0x389018)return null;const _0x3ea5c8={'CmdType':_0x99ff74,..._0x260da9};if(!_0x3ea5c8[_0x176fb4(0x146)])_0x3ea5c8['SequenceId']=generateSequenceId(_0x99ff74);const _0x104b0c={'appVersion':urlDecode('322e322e3531'),'mac':_0x52e750,'timeout':0x3,'token':_0x389018,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x3ea5c8)}),'operatorId':getOperatorId()},_0x45ca27=new AbortController(),_0x22180d=setTimeout(()=>{try{_0x45ca27['abort']();}catch(_0x2f609d){}},_0x34e3d2);try{const _0x5ed997=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x389018},'body':JSON['stringify'](_0x104b0c),'signal':_0x45ca27['signal']}),_0x39b121=await _0x5ed997['json']();if(_0x39b121&&_0x39b121['rspParam']){const _0x4bb0f0=JSON['parse'](_0x39b121['rspParam']);if(_0x4bb0f0['Result']===0x0&&_0x4bb0f0[_0x176fb4(0x136)]){const _0x47bf91=String(_0x4bb0f0['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x51ed03=JSON['parse'](decodeBase64Utf8(_0x47bf91));return{..._0x51ed03,'resultCode':0x0};}}return _0x39b121||{'resultCode':NET_ERROR_CODE};}catch(_0x464fbd){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x22180d);}}function decodeBase64Utf8(_0x24e31c){const _0x51241e=atob(_0x24e31c);try{const _0x43fa4d=new Uint8Array(_0x51241e['length']);for(let _0x343dca=0x0;_0x343dca<_0x51241e['length'];_0x343dca++)_0x43fa4d[_0x343dca]=_0x51241e['charCodeAt'](_0x343dca);return new TextDecoder('utf-8')['decode'](_0x43fa4d);}catch(_0xbd2410){return _0x51241e;}}async function fetchCpeApi(_0x493226,_0x5a46fe,_0x87eb3e,_0x2e6f2d={},_0x45bd57=0xbb8){const _0x2d1517=_0x59e4;if(!_0x5a46fe)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0x2d1517(0x13f)};return await performCpeRequest(_0x493226,_0x2e6f2d,_0x5a46fe,_0x87eb3e,_0x45bd57);}function isEmpty(_0x1df6aa){const _0x304220=_0x59e4;return!_0x1df6aa||typeof _0x1df6aa===_0x304220(0x159)&&Object['keys'](_0x1df6aa)['length']===0x0;}async function fetchAll(_0x38fe53){const _0x5e51bb=_0x59e4,_0x1c4695=_0x38fe53['token'],_0xfe6c83=_0x38fe53['mac'],_0x4a9475=0xbb8,_0xb19a39=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x1c4695,_0xfe6c83,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x1c4695,_0xfe6c83,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x1c4695,_0xfe6c83,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x1c4695,_0xfe6c83,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x1c4695,_0xfe6c83,{},0xbb8)]),_0x384864=[];let _0x32f5e8=readResult(_0xb19a39[0x0],_0x384864),_0x1844b8=readResult(_0xb19a39[0x1],_0x384864),_0xde50f=readResult(_0xb19a39[0x2],_0x384864),_0x372620=readResult(_0xb19a39[0x3],_0x384864);const _0x3659e1=readResult(_0xb19a39[0x4],_0x384864);if(_0xde50f)_0xde50f=_0xde50f['MainRouter']||_0xde50f['Router']||_0xde50f;const _0x1fb7f9=[_0x32f5e8,_0x1844b8,_0xde50f,_0x372620,_0x3659e1]['filter'](_0xbd944d=>!isEmpty(_0xbd944d))[_0x5e51bb(0x154)],_0x4dba09=_0x1fb7f9===0x0?classifyFault(_0x384864):null;return console[_0x5e51bb(0x14d)](_0x5e51bb(0x13e)+_0x1fb7f9+'/5\x20|\x20fault='+(_0x4dba09||'-')+'\x20|\x20失败码=['+_0x384864['join'](',')+']'),{'rf':_0x32f5e8,'ca':_0x1844b8,'topo':_0xde50f,'sim':_0x372620,'traffic':_0x3659e1,'failCodes':_0x384864,'fault':_0x4dba09,'successCount':_0x1fb7f9};}function saveCache(_0x6185e6){const _0x1e3768=_0x59e4;try{const _0xadefe8=parseTrafficData(_0x6185e6['traffic']),_0xb7ae1f={'rf':{'WorkMode':_0x6185e6['rf']?.['WorkMode'],'SSB_RSRP':_0x6185e6['rf']?.['SSB_RSRP'],'RSRP':_0x6185e6['rf']?.['RSRP'],'SSB_SINR':_0x6185e6['rf']?.['SSB_SINR'],'SINR':_0x6185e6['rf']?.['SINR'],'SSB_RSRQ':_0x6185e6['rf']?.['SSB_RSRQ'],'RSRQ':_0x6185e6['rf']?.[_0x1e3768(0x142)],'SSB_RSSI':_0x6185e6['rf']?.['SSB_RSSI'],'RSSI':_0x6185e6['rf']?.['RSSI'],'BAND':_0x6185e6['rf']?.['BAND'],'NR_BAND':_0x6185e6['rf']?.[_0x1e3768(0x158)],'LTE_BAND':_0x6185e6['rf']?.['LTE_BAND'],'PCI':_0x6185e6['rf']?.['PCI'],'SPN':_0x6185e6['rf']?.['SPN']},'ca':{'main_CA_info':_0x6185e6['ca']?.['main_CA_info']||{},'sub_CA_info':_0x6185e6['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x6185e6['topo']?.[_0x1e3768(0x13c)],'UpTime':_0x6185e6['topo']?.['UpTime'],'Name':_0x6185e6['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x6185e6['topo'])},'sim':{'Operator':_0x6185e6['sim']?.['Operator'],'SPN':_0x6185e6['sim']?.['SPN']},'traffic':{'todayBytes':_0xadefe8['todayBytes'],'monthBytes':_0xadefe8['monthBytes'],'todayRx':_0xadefe8['todayRx'],'todayTx':_0xadefe8[_0x1e3768(0x13a)],'monthRx':_0xadefe8['monthRx'],'monthTx':_0xadefe8['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0xb7ae1f));}catch(_0x5b35dd){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x5b35dd);}}function loadCache(){const _0x515490=_0x59e4;try{const _0x1c5d89=Keychain[_0x515490(0x151)](KEY_CACHE);if(!_0x1c5d89)return null;const _0x3a4af1=JSON['parse'](_0x1c5d89);if(!_0x3a4af1||typeof _0x3a4af1!=='object')return null;return _0x3a4af1;}catch(_0x54ca74){return null;}}
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
