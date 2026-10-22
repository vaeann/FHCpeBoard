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

const _0x2910b4=_0x1cb2;(function(_0x6fea92,_0xd4e187){const _0x28de2a=_0x1cb2,_0x83ec81=_0x6fea92();while(!![]){try{const _0x10e604=-parseInt(_0x28de2a(0x99))/0x1+-parseInt(_0x28de2a(0x8b))/0x2*(parseInt(_0x28de2a(0x8f))/0x3)+parseInt(_0x28de2a(0xa3))/0x4*(-parseInt(_0x28de2a(0x9a))/0x5)+parseInt(_0x28de2a(0x8d))/0x6*(parseInt(_0x28de2a(0x8c))/0x7)+-parseInt(_0x28de2a(0x89))/0x8*(-parseInt(_0x28de2a(0xa8))/0x9)+parseInt(_0x28de2a(0xa7))/0xa*(-parseInt(_0x28de2a(0xa9))/0xb)+parseInt(_0x28de2a(0xa6))/0xc;if(_0x10e604===_0xd4e187)break;else _0x83ec81['push'](_0x83ec81['shift']());}catch(_0x4c369c){_0x83ec81['push'](_0x83ec81['shift']());}}}(_0x5a83,0x35597));function _0x1cb2(_0x10a3a8,_0x557bf7){const _0x5a8308=_0x5a83();return _0x1cb2=function(_0x1cb2e5,_0x38aa16){_0x1cb2e5=_0x1cb2e5-0x85;let _0x5d1a82=_0x5a8308[_0x1cb2e5];if(_0x1cb2['srDuKL']===undefined){var _0x737b8=function(_0x17b3b4){const _0xe22b59='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x501c30='',_0xe4fd86='';for(let _0x225507=0x0,_0x47362b,_0x51b216,_0x4d2505=0x0;_0x51b216=_0x17b3b4['charAt'](_0x4d2505++);~_0x51b216&&(_0x47362b=_0x225507%0x4?_0x47362b*0x40+_0x51b216:_0x51b216,_0x225507++%0x4)?_0x501c30+=String['fromCharCode'](0xff&_0x47362b>>(-0x2*_0x225507&0x6)):0x0){_0x51b216=_0xe22b59['indexOf'](_0x51b216);}for(let _0x58a92c=0x0,_0x5b93da=_0x501c30['length'];_0x58a92c<_0x5b93da;_0x58a92c++){_0xe4fd86+='%'+('00'+_0x501c30['charCodeAt'](_0x58a92c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe4fd86);};_0x1cb2['nYSMOl']=_0x737b8,_0x10a3a8=arguments,_0x1cb2['srDuKL']=!![];}const _0xf14b9a=_0x5a8308[0x0],_0x4a1102=_0x1cb2e5+_0xf14b9a,_0x2ee140=_0x10a3a8[_0x4a1102];return!_0x2ee140?(_0x5d1a82=_0x1cb2['nYSMOl'](_0x5d1a82),_0x10a3a8[_0x4a1102]=_0x5d1a82):_0x5d1a82=_0x2ee140,_0x5d1a82;},_0x1cb2(_0x10a3a8,_0x557bf7);}const TOKEN_KEY='CPE_TOKEN',MAC_KEY=_0x2910b4(0x90),NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x17b3b4,_0xe22b59){const _0x149f58=_0x2910b4;try{const _0x501c30=Keychain[_0x149f58(0x91)](_0x17b3b4);return _0x501c30===null||_0x501c30===undefined||_0x501c30===''?_0xe22b59:String(_0x501c30)['trim']();}catch(_0xe4fd86){return _0xe22b59;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x225507){const _0x27ad84=_0x2910b4;try{if(_0x225507['token']!==undefined)Keychain[_0x27ad84(0x9f)](TOKEN_KEY,String(_0x225507['token'])['trim']());if(_0x225507[_0x27ad84(0xb0)]!==undefined)Keychain['set'](MAC_KEY,String(_0x225507['mac'])['trim']()||DEFAULT_MAC);if(_0x225507['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x225507['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x47362b){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x47362b);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x51b216,_0x4d2505){if(_0x51b216===undefined||_0x51b216===null||_0x51b216==='')return _0x4d2505;const _0x58a92c=String(_0x51b216)['trim']();return _0x58a92c==='-'||_0x58a92c==='undefined'?_0x4d2505:_0x58a92c;}function firstValid(_0x5b93da,_0xdc546){for(const _0x19c2bd of _0x5b93da){const _0x3c4bb7=getValidValue(_0x19c2bd,'');if(_0x3c4bb7)return _0x3c4bb7;}return _0xdc546;}function resolveOperator(_0x88c177,_0x1dc4c9){const _0x56a1d9=getOperatorName(_0x1dc4c9&&_0x1dc4c9['Operator']||'',_0x1dc4c9&&_0x1dc4c9['SPN']||'');if(_0x56a1d9==='未知'&&_0x88c177&&_0x88c177['SPN'])return String(_0x88c177['SPN']);return _0x56a1d9;}function formatUptime(_0x4d611f){const _0x50f935=parseInt(_0x4d611f||0x0)||0x0,_0x1161e9=Math['floor'](_0x50f935/0x15180),_0x269edc=Math['floor'](_0x50f935%0x15180/0xe10),_0x1b5497=Math['floor'](_0x50f935%0xe10/0x3c),_0x83a1=[];if(_0x1161e9>0x0)_0x83a1['push'](_0x1161e9+'天');if(_0x269edc>0x0||_0x1161e9>0x0)_0x83a1['push'](_0x269edc+'小时');return _0x83a1['push'](_0x1b5497+'分'),_0x83a1['join']('\x20');}function formatUptimeShort(_0x4b946d){const _0x5bba4e=parseInt(_0x4b946d||0x0)||0x0,_0x1abe78=Math['floor'](_0x5bba4e/0x15180),_0x5d1ac2=Math['floor'](_0x5bba4e%0x15180/0xe10),_0x445056=Math['floor'](_0x5bba4e%0xe10/0x3c),_0x4e1fd2=[];if(_0x1abe78>0x0)_0x4e1fd2['push'](_0x1abe78+'天');if(_0x5d1ac2>0x0||_0x1abe78>0x0)_0x4e1fd2['push'](_0x5d1ac2+'时');return _0x4e1fd2['push'](_0x445056+'分'),_0x4e1fd2['join']('');}function trafficMbToBytes(_0x16aff6){const _0x207a46=parseFloat(_0x16aff6||0x0);if(isNaN(_0x207a46))return 0x0;return Math['round'](_0x207a46*0x400*0x400);}function formatTraffic(_0x1b8d0a){const _0x4ff76d=Number(_0x1b8d0a||0x0);if(!isFinite(_0x4ff76d)||_0x4ff76d<=0x0)return'0M';const _0xc83df3=0x400*0x400,_0x10b12e=0x400*_0xc83df3;if(_0x4ff76d>=_0x10b12e)return(_0x4ff76d/_0x10b12e)['toFixed'](0x1)+'G';return(_0x4ff76d/_0xc83df3)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x5ea4c4){const _0x13a7bf=_0x2910b4,_0x29456a=Number(_0x5ea4c4||0x0);if(!isFinite(_0x29456a)||_0x29456a<=0x0)return'0';const _0x5bd97d=0x400,_0x31907a=0x400*_0x5bd97d,_0x28b546=0x400*_0x31907a;if(_0x29456a>=_0x28b546){const _0x1f6b43=_0x29456a/_0x28b546;return(_0x1f6b43>=0x64?_0x1f6b43['toFixed'](0x0):_0x1f6b43['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x29456a>=_0x31907a)return Math[_0x13a7bf(0x9c)](_0x29456a/_0x31907a)+'M';if(_0x29456a>=_0x5bd97d)return Math['round'](_0x29456a/_0x5bd97d)+'K';return String(Math['round'](_0x29456a));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x3137d5){const _0x1dfd0d=_0x2910b4;if(!_0x3137d5)return ZERO_TRAFFIC;const _0x36d7c5=_0x3137d5['day_rx_traffic']!==undefined||_0x3137d5['day_tx_traffic']!==undefined||_0x3137d5['month_rx_traffic']!==undefined||_0x3137d5['month_tx_traffic']!==undefined;if(!_0x36d7c5)return{'todayBytes':Number(_0x3137d5['todayBytes'])||0x0,'monthBytes':Number(_0x3137d5['monthBytes'])||0x0,'todayRx':Number(_0x3137d5['todayRx'])||0x0,'todayTx':Number(_0x3137d5['todayTx'])||0x0,'monthRx':Number(_0x3137d5['monthRx'])||0x0,'monthTx':Number(_0x3137d5[_0x1dfd0d(0xac)])||0x0};const _0x421485=trafficMbToBytes(_0x3137d5['day_rx_traffic']),_0x4ea33c=trafficMbToBytes(_0x3137d5['day_tx_traffic']),_0x267828=trafficMbToBytes(_0x3137d5['month_rx_traffic']),_0x5a747a=trafficMbToBytes(_0x3137d5['month_tx_traffic']);return{'todayBytes':_0x421485+_0x4ea33c,'monthBytes':_0x267828+_0x5a747a,'todayRx':_0x421485,'todayTx':_0x4ea33c,'monthRx':_0x267828,'monthTx':_0x5a747a};}function trafficRxRatio(_0x5ce237,_0x470cf8){const _0x557d5d=Number(_0x5ce237||0x0)+Number(_0x470cf8||0x0);if(!isFinite(_0x557d5d)||_0x557d5d<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x5ce237||0x0)/_0x557d5d));}function getOperatorName(_0x47ecd3,_0xef693b){const _0x3ee706=_0x2910b4;if(!_0x47ecd3)return _0xef693b||'未知';const _0x51bbbb=String(_0x47ecd3)['toUpperCase']();if(_0x51bbbb['includes']('CMCC')||_0x51bbbb==='中国移动'||_0x51bbbb['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x51bbbb['includes']('CUCC')||_0x51bbbb==='中国联通'||_0x51bbbb['includes']('CHINA\x20UNICOM')||_0x51bbbb[_0x3ee706(0xab)]('UNICOM'))return'中国联通';if(_0x51bbbb['includes']('CTCC')||_0x51bbbb==='CT'||_0x51bbbb==='中国电信'||_0x51bbbb[_0x3ee706(0xab)](_0x3ee706(0x9e))||_0x51bbbb['includes']('TELECOM'))return'中国电信';if(_0x51bbbb['includes']('CBN')||_0x51bbbb==='中国广电'||_0x51bbbb['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x47ecd3;}function getSignalColor(_0x3f332c,_0x4783a2){let _0x4c92ae=parseInt(_0x3f332c);if(isNaN(_0x4c92ae))_0x4c92ae=-0x78;if(_0x4c92ae>-0x59)return _0x4783a2['ok'];if(_0x4c92ae>-0x63)return _0x4783a2['warn'];return _0x4783a2['bad'];}function getSinrColor(_0x1ac732,_0x940272){let _0x3483e6=parseFloat(_0x1ac732);if(isNaN(_0x3483e6))_0x3483e6=0x0;if(_0x3483e6>0xf)return _0x940272['ok'];if(_0x3483e6>0x8)return _0x940272['warn'];return _0x940272['bad'];}function getAllBands(_0x27affb,_0x884061,_0x50d719){const _0x191c3a=_0x2910b4,_0x3d9c0e=[],_0x4b211c=_0x50d719?'N':'B',_0x5e8eb8=getValidValue(_0x27affb?.['BAND']||_0x27affb?.['NR_BAND']||_0x27affb?.['LTE_BAND'],'');if(_0x5e8eb8)_0x3d9c0e['push'](_0x4b211c+_0x5e8eb8);for(const _0x2cc80a of _0x884061?.['sub_CA_info']||[]){const _0x62d08a=String(_0x2cc80a?.['Band']||'');if(_0x62d08a&&_0x62d08a!=='-')_0x3d9c0e[_0x191c3a(0x8a)](_0x4b211c+_0x62d08a);}if(_0x3d9c0e['length']===0x0)_0x3d9c0e[_0x191c3a(0x8a)](_0x50d719?_0x191c3a(0x98):'B3');return _0x3d9c0e;}function getCaBadgeText(_0x22b8a8,_0x2f7efc,_0x40a780){const _0x48bb2c=_0x2910b4,_0x40da05=(_0x2f7efc?'5G\x20':'4G\x20')+_0x40a780;if(!_0x2f7efc)return _0x40da05;const _0x20470a=0x1+(_0x22b8a8&&_0x22b8a8['sub_CA_info']||[])['length'];if(_0x20470a>=0x4)return _0x48bb2c(0x93);if(_0x20470a===0x3)return'5GA';if(_0x20470a===0x2)return'5G+';return _0x40da05;}function getCarrierCountText(_0x2314ae){const _0x572e49=_0x2910b4,_0x19b5de=(_0x2314ae&&_0x2314ae['sub_CA_info']||[])['length'];if(_0x19b5de===0x0)return'单载波';if(_0x19b5de===0x1)return _0x572e49(0x95);if(_0x19b5de===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0xccbb6d,_0x66c04e,_0x2e28a9){const _0x1ff843=_0x2910b4,_0x4cdd9a=String(_0x2e28a9||'')[_0x1ff843(0xaf)]();if(!_0x66c04e){if(!_0x4cdd9a||_0x4cdd9a==='4G'||_0x4cdd9a==='LTE')return'4G\x20LTE';return'4G\x20'+_0x4cdd9a;}const _0x59c1c6=0x1+(_0xccbb6d&&_0xccbb6d['sub_CA_info']||[])['length'];if(_0x59c1c6>=0x4)return _0x1ff843(0x93);if(_0x59c1c6===0x3)return'5GA';if(_0x59c1c6===0x2)return'5G+';return _0x4cdd9a?'5G\x20'+_0x4cdd9a:'5G\x20SA';}function rsrpToPercent(_0x12b2b9){const _0x56bed9=_0x2910b4;let _0x3b4990=parseInt(_0x12b2b9);if(isNaN(_0x3b4990))_0x3b4990=-0x78;const _0x3bcf6c=Math[_0x56bed9(0x97)](-0x46,Math['max'](-0x78,_0x3b4990)),_0x4dcd16=(_0x3bcf6c+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x4dcd16*0x5a));}function sinrToPercent(_0x4a51c0){let _0x49ec23=parseFloat(_0x4a51c0);if(isNaN(_0x49ec23))_0x49ec23=0x0;return Math['min'](0x64,Math['max'](0x0,_0x49ec23/0x19*0x64));}function resolveDeviceName(_0x5b0ef9,_0x3afb1d){const _0x1d99ab=_0x2910b4,_0x5a3b94=_0x5b0ef9&&_0x5b0ef9['Name']!=null?String(_0x5b0ef9[_0x1d99ab(0x85)])[_0x1d99ab(0x92)]():'';if(!_0x5a3b94)return _0x3afb1d;if(_0x5a3b94==='--'||_0x5a3b94==='undefined'||_0x5a3b94==='null'||_0x5a3b94==='0')return _0x3afb1d;return _0x5a3b94;}function _0x5a83(){const _0x2f40fc=['ndG0nde5nKvJu2vmvW','nJCWD3HWswfJ','mta3munMq2HPDG','mtyXmtvuuLHizeu','nta2zJCZnZq','Aw5JBhvKzxm','Bw9UDgHuEa','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','BwfPBL9dqv9PBMzV','Dg9vChbLCKnHC2u','BwfJ','Bw9UDgHcExrLCW','572r57UC6k+35Rgc5AsX6lsL','u0LouG','B2jQzwn0','BNvTyMvY','tMfTzq','zNjVBunOyxjdB2rL','zNvSzMLSBgvK','CNnWugfYyw0','mtm0mZjdAvzUy1G','ChvZAa','mKDMBu9itq','otfkrhvOywW','mtiXmdm4Dvbkt0Ls','BgvUz3rO','mta3mJC3De1NEgn5','q1bfx0rfvKLdrv9nqum','z2v0','DhjPBq','nuDbkW','ue9tva','5y+m6l295RoI','Dg9KyxLsEa','BwLU','tJC4','mJuXnJm4sgvnsxr0','mtu5ntvTu3DtCe8','CMvZDwX0q29Kzq','CM91BMq','yxv0Aa','q0HjtKeGvevmrunptq','C2v0','y2HHCKnVzgvbDa','Dg9Rzw4','tMv0u3rHDhvZ','mZi4svrWDvPP','BM93','uLnsuq'];_0x5a83=function(){return _0x2f40fc;};return _0x5a83();}function rsrpToBars(_0x5d9674){const _0xc8213b=parseInt(_0x5d9674);if(isNaN(_0xc8213b))return 0x0;if(_0xc8213b>=-0x55)return 0x4;if(_0xc8213b>=-0x5f)return 0x3;if(_0xc8213b>=-0x69)return 0x2;if(_0xc8213b>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x37b95a){const _0x22f208=_0x2910b4;if(!_0x37b95a)return 0x0;if(typeof _0x37b95a['onlineDevices']===_0x22f208(0xb5))return _0x37b95a['onlineDevices'];const _0x390a88=_0x37b95a['MainBaseInfo'];if(!Array['isArray'](_0x390a88))return 0x0;return _0x390a88['filter'](_0x475458=>_0x475458&&String(_0x475458[_0x22f208(0xa2)])==='1')['length'];}function urlDecode(_0x48950b){const _0x3d4773=_0x2910b4,_0x4ad3ae=[];for(let _0x44c5f4=0x0;_0x44c5f4<_0x48950b['length'];_0x44c5f4+=0x2)_0x4ad3ae['push'](parseInt(_0x48950b['substr'](_0x44c5f4,0x2),0x10));let _0x579305='';for(let _0x41c70a=0x0;_0x41c70a<_0x4ad3ae['length'];){const _0x1b4233=_0x4ad3ae[_0x41c70a];if(_0x1b4233<0x80)_0x579305+=String[_0x3d4773(0x86)](_0x1b4233),_0x41c70a++;else{if(_0x1b4233>>0x5===0x6)_0x579305+=String['fromCharCode']((_0x1b4233&0x1f)<<0x6|_0x4ad3ae[_0x41c70a+0x1]&0x3f),_0x41c70a+=0x2;else _0x1b4233>>0x4===0xe?(_0x579305+=String['fromCharCode']((_0x1b4233&0xf)<<0xc|(_0x4ad3ae[_0x41c70a+0x1]&0x3f)<<0x6|_0x4ad3ae[_0x41c70a+0x2]&0x3f),_0x41c70a+=0x3):(_0x579305+=String['fromCharCode']((_0x1b4233&0x7)<<0x12|(_0x4ad3ae[_0x41c70a+0x1]&0x3f)<<0xc|(_0x4ad3ae[_0x41c70a+0x2]&0x3f)<<0x6|_0x4ad3ae[_0x41c70a+0x3]),_0x41c70a+=0x4);}}return _0x579305;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x1b84ac=_0x2910b4;return Date[_0x1b84ac(0xa4)]()['toString']();}function generateUUID(){const _0x4f7659='0123456789ABCDEF';let _0x23c8bf='';for(let _0x557239=0x0;_0x557239<0x20;_0x557239++)_0x23c8bf+=_0x4f7659[Math['floor'](Math['random']()*0x10)];return _0x23c8bf;}function generateSequenceId(_0x4794be){return _0x4794be+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x26f0fb){const _0x4bd6e6=_0x2910b4;if(!_0x26f0fb||_0x26f0fb['length']===0x0)return null;if(_0x26f0fb['some'](_0x271fd1=>AUTH_ERROR_CODES['indexOf'](_0x271fd1)>=0x0))return _0x4bd6e6(0x9d);if(_0x26f0fb['some'](_0x400c78=>DEVICE_ERROR_CODES['indexOf'](_0x400c78)>=0x0))return'device';return'network';}function readResult(_0x4051fb,_0x9f81f7){const _0x5a2c7f=_0x2910b4;if(!_0x4051fb||_0x4051fb['status']!==_0x5a2c7f(0x87)||!_0x4051fb['value'])return _0x9f81f7['push'](NET_ERROR_CODE),null;const _0x1e05fa=_0x4051fb['value'];if(_0x1e05fa['resultCode']===0x0)return _0x1e05fa;return _0x9f81f7['push'](typeof _0x1e05fa['resultCode']==='number'?_0x1e05fa[_0x5a2c7f(0x9b)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0x1f036c,_0x427e17,_0x1703ce,_0xb6e2d9,_0x1a26d5){const _0x355eac=_0x2910b4;if(!_0x1703ce)return null;const _0x33ee2f={'CmdType':_0x1f036c,..._0x427e17};if(!_0x33ee2f['SequenceId'])_0x33ee2f['SequenceId']=generateSequenceId(_0x1f036c);const _0x17ea10={'appVersion':urlDecode('322e322e3531'),'mac':_0xb6e2d9,'timeout':0x3,'token':_0x1703ce,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x355eac(0xaa)),'Parameter':JSON['stringify'](_0x33ee2f)}),'operatorId':getOperatorId()},_0x43eb68=new AbortController(),_0x35111c=setTimeout(()=>{try{_0x43eb68['abort']();}catch(_0x4bd677){}},_0x1a26d5);try{const _0x55dc1f=await fetch(REMOTE_URL,{'method':_0x355eac(0x94),'headers':{'Content-Type':'application/json','token':_0x1703ce},'body':JSON['stringify'](_0x17ea10),'signal':_0x43eb68['signal']}),_0x38a84e=await _0x55dc1f['json']();if(_0x38a84e&&_0x38a84e['rspParam']){const _0xb391f7=JSON['parse'](_0x38a84e[_0x355eac(0x88)]);if(_0xb391f7['Result']===0x0&&_0xb391f7['return_Parameter']){const _0x2049cc=String(_0xb391f7['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x45b20e=JSON['parse'](decodeBase64Utf8(_0x2049cc));return{..._0x45b20e,'resultCode':0x0};}}return _0x38a84e||{'resultCode':NET_ERROR_CODE};}catch(_0x54d2df){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x355eac(0xb2)};}finally{clearTimeout(_0x35111c);}}function decodeBase64Utf8(_0x2d69eb){const _0x43797d=_0x2910b4,_0x7fd8d5=atob(_0x2d69eb);try{const _0x1ac3b8=new Uint8Array(_0x7fd8d5['length']);for(let _0x47dd11=0x0;_0x47dd11<_0x7fd8d5[_0x43797d(0x8e)];_0x47dd11++)_0x1ac3b8[_0x47dd11]=_0x7fd8d5[_0x43797d(0xa0)](_0x47dd11);return new TextDecoder('utf-8')['decode'](_0x1ac3b8);}catch(_0x58fc9d){return _0x7fd8d5;}}async function fetchCpeApi(_0x34e359,_0x38028a,_0x3e199f,_0x578db={},_0xdced35=0xbb8){if(!_0x38028a)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x34e359,_0x578db,_0x38028a,_0x3e199f,_0xdced35);}function isEmpty(_0x41b38a){return!_0x41b38a||typeof _0x41b38a==='object'&&Object['keys'](_0x41b38a)['length']===0x0;}async function fetchAll(_0xdbdc36){const _0x2deb88=_0x2910b4,_0xbb3f59=_0xdbdc36[_0x2deb88(0xa1)],_0x59d84a=_0xdbdc36['mac'],_0x363c5f=0xbb8,_0x1edba4=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0xbb3f59,_0x59d84a,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0xbb3f59,_0x59d84a,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0xbb3f59,_0x59d84a,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0xbb3f59,_0x59d84a,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0xbb3f59,_0x59d84a,{},0xbb8)]),_0x4992eb=[];let _0x257814=readResult(_0x1edba4[0x0],_0x4992eb),_0x1ccb0d=readResult(_0x1edba4[0x1],_0x4992eb),_0x311f83=readResult(_0x1edba4[0x2],_0x4992eb),_0x37a96b=readResult(_0x1edba4[0x3],_0x4992eb);const _0x577a67=readResult(_0x1edba4[0x4],_0x4992eb);if(_0x311f83)_0x311f83=_0x311f83['MainRouter']||_0x311f83['Router']||_0x311f83;const _0x27cdb9=[_0x257814,_0x1ccb0d,_0x311f83,_0x37a96b,_0x577a67]['filter'](_0x13d914=>!isEmpty(_0x13d914))['length'],_0x3e2521=_0x27cdb9===0x0?classifyFault(_0x4992eb):null;return console['log'](_0x2deb88(0xad)+_0x27cdb9+'/5\x20|\x20fault='+(_0x3e2521||'-')+'\x20|\x20失败码=['+_0x4992eb['join'](',')+']'),{'rf':_0x257814,'ca':_0x1ccb0d,'topo':_0x311f83,'sim':_0x37a96b,'traffic':_0x577a67,'failCodes':_0x4992eb,'fault':_0x3e2521,'successCount':_0x27cdb9};}function saveCache(_0x443c0e){const _0x2abafb=_0x2910b4;try{const _0x1725e5=parseTrafficData(_0x443c0e['traffic']),_0x53702c={'rf':{'WorkMode':_0x443c0e['rf']?.['WorkMode'],'SSB_RSRP':_0x443c0e['rf']?.['SSB_RSRP'],'RSRP':_0x443c0e['rf']?.['RSRP'],'SSB_SINR':_0x443c0e['rf']?.['SSB_SINR'],'SINR':_0x443c0e['rf']?.[_0x2abafb(0xb3)],'SSB_RSRQ':_0x443c0e['rf']?.['SSB_RSRQ'],'RSRQ':_0x443c0e['rf']?.[_0x2abafb(0xa5)],'SSB_RSSI':_0x443c0e['rf']?.['SSB_RSSI'],'RSSI':_0x443c0e['rf']?.['RSSI'],'BAND':_0x443c0e['rf']?.['BAND'],'NR_BAND':_0x443c0e['rf']?.['NR_BAND'],'LTE_BAND':_0x443c0e['rf']?.['LTE_BAND'],'PCI':_0x443c0e['rf']?.['PCI'],'SPN':_0x443c0e['rf']?.['SPN']},'ca':{'main_CA_info':_0x443c0e['ca']?.[_0x2abafb(0xae)]||{},'sub_CA_info':_0x443c0e['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x443c0e['topo']?.['NetStatus'],'UpTime':_0x443c0e['topo']?.['UpTime'],'Name':_0x443c0e['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x443c0e['topo'])},'sim':{'Operator':_0x443c0e['sim']?.['Operator'],'SPN':_0x443c0e['sim']?.['SPN']},'traffic':{'todayBytes':_0x1725e5['todayBytes'],'monthBytes':_0x1725e5[_0x2abafb(0xb1)],'todayRx':_0x1725e5[_0x2abafb(0x96)],'todayTx':_0x1725e5['todayTx'],'monthRx':_0x1725e5['monthRx'],'monthTx':_0x1725e5[_0x2abafb(0xac)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x53702c));}catch(_0x3c7a5a){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x3c7a5a);}}function loadCache(){const _0x403f9b=_0x2910b4;try{const _0x1de9ce=Keychain['get'](KEY_CACHE);if(!_0x1de9ce)return null;const _0x51d2ac=JSON['parse'](_0x1de9ce);if(!_0x51d2ac||typeof _0x51d2ac!==_0x403f9b(0xb4))return null;return _0x51d2ac;}catch(_0x3cafcf){return null;}}
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
