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

const _0x3ee49a=_0x429e;(function(_0x216086,_0x4e3505){const _0x45e959=_0x429e,_0x3750e9=_0x216086();while(!![]){try{const _0xb20842=-parseInt(_0x45e959(0x85))/0x1+-parseInt(_0x45e959(0x81))/0x2*(-parseInt(_0x45e959(0x8e))/0x3)+parseInt(_0x45e959(0x9a))/0x4+parseInt(_0x45e959(0x82))/0x5*(-parseInt(_0x45e959(0x91))/0x6)+parseInt(_0x45e959(0x90))/0x7+-parseInt(_0x45e959(0x9c))/0x8+-parseInt(_0x45e959(0x98))/0x9;if(_0xb20842===_0x4e3505)break;else _0x3750e9['push'](_0x3750e9['shift']());}catch(_0x178320){_0x3750e9['push'](_0x3750e9['shift']());}}}(_0x26e4,0x49a34));const TOKEN_KEY='CPE_TOKEN',MAC_KEY=_0x3ee49a(0x86),NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x5de54b,_0x1ffe09){const _0x207892=_0x3ee49a;try{const _0x165605=Keychain['get'](_0x5de54b);return _0x165605===null||_0x165605===undefined||_0x165605===''?_0x1ffe09:String(_0x165605)[_0x207892(0x77)]();}catch(_0xe4c3c4){return _0x1ffe09;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x49ce38){const _0x52f8c8=_0x3ee49a;try{if(_0x49ce38['token']!==undefined)Keychain[_0x52f8c8(0x97)](TOKEN_KEY,String(_0x49ce38[_0x52f8c8(0x79)])[_0x52f8c8(0x77)]());if(_0x49ce38['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x49ce38['mac'])['trim']()||DEFAULT_MAC);if(_0x49ce38['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x49ce38['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x237073){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x237073);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0xb7ac7b,_0x2aa338){if(_0xb7ac7b===undefined||_0xb7ac7b===null||_0xb7ac7b==='')return _0x2aa338;const _0x2b1d5f=String(_0xb7ac7b)['trim']();return _0x2b1d5f==='-'||_0x2b1d5f==='undefined'?_0x2aa338:_0x2b1d5f;}function firstValid(_0x2d129a,_0x11413d){for(const _0x1bdff9 of _0x2d129a){const _0x262fd3=getValidValue(_0x1bdff9,'');if(_0x262fd3)return _0x262fd3;}return _0x11413d;}function resolveOperator(_0x13ceea,_0x4b5559){const _0x2f365e=_0x3ee49a,_0x2c3e6e=getOperatorName(_0x4b5559&&_0x4b5559['Operator']||'',_0x4b5559&&_0x4b5559[_0x2f365e(0x89)]||'');if(_0x2c3e6e==='未知'&&_0x13ceea&&_0x13ceea['SPN'])return String(_0x13ceea['SPN']);return _0x2c3e6e;}function formatUptime(_0x3291c4){const _0xb8bd75=_0x3ee49a,_0x484801=parseInt(_0x3291c4||0x0)||0x0,_0x3b5cf0=Math[_0xb8bd75(0x99)](_0x484801/0x15180),_0x38dfb0=Math['floor'](_0x484801%0x15180/0xe10),_0x1e81e3=Math['floor'](_0x484801%0xe10/0x3c),_0x214fc0=[];if(_0x3b5cf0>0x0)_0x214fc0['push'](_0x3b5cf0+'天');if(_0x38dfb0>0x0||_0x3b5cf0>0x0)_0x214fc0['push'](_0x38dfb0+'小时');return _0x214fc0['push'](_0x1e81e3+'分'),_0x214fc0[_0xb8bd75(0x8c)]('\x20');}function _0x26e4(){const _0x19ad4b=['nda0mJqYzeH1whjq','mtq4mdq3nvfltfLIvG','zgvJB2rL','CNnWugfYyw0','mZG3ntDXv0vysNu','q1bfx0rfvKLdrv9nqum','ywXSu2v0DgXLza','A2v5CW','u1bo','C3rYAw5NAwz5','5y2v6l295RoI','AM9PBG','Bw9UDgHuEa','m0XeugnYta','nta2yZC1nJC2otzLnwy0otq0','mZK0mJG5mgjYq09Nua','nLbwr2zYCa','q0HjtKeGvu5jq09n','5zUB6l295RoI','5lIT5zU956E75yQO','tfrfx0jbtKq','q0jo','C2v0','nJiWotCZB0rmDK1H','zMXVB3i','mtaZota5mNrOtefAyW','u1ncx1njtLi','mJu1nZu2mhrLy1veCG','Bwf4','CgfYC2u','Dg9KyxLuEa','ihWG5AsX6lsL56cbpvS','B25SAw5Lrgv2AwnLCW','Dg9tDhjPBMC','BgvUz3rO','DhjPBq','Bg9N','Dg9Rzw4','Aw5JBhvKzxm','qKfora','ChvZAa','C3vIx0nbx2LUzM8','CM91BMq','lZuGFcbMyxvSDd0','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq'];_0x26e4=function(){return _0x19ad4b;};return _0x26e4();}function formatUptimeShort(_0x366961){const _0xca235c=_0x3ee49a,_0x41a619=parseInt(_0x366961||0x0)||0x0,_0x3a7dd7=Math['floor'](_0x41a619/0x15180),_0x3b9b7b=Math['floor'](_0x41a619%0x15180/0xe10),_0x22fe05=Math['floor'](_0x41a619%0xe10/0x3c),_0xe1383b=[];if(_0x3a7dd7>0x0)_0xe1383b['push'](_0x3a7dd7+'天');if(_0x3b9b7b>0x0||_0x3a7dd7>0x0)_0xe1383b['push'](_0x3b9b7b+'时');return _0xe1383b[_0xca235c(0x7c)](_0x22fe05+'分'),_0xe1383b['join']('');}function trafficMbToBytes(_0x1f76a9){const _0x26c0d5=_0x3ee49a,_0x5566f8=parseFloat(_0x1f76a9||0x0);if(isNaN(_0x5566f8))return 0x0;return Math[_0x26c0d5(0x7e)](_0x5566f8*0x400*0x400);}function formatTraffic(_0x54f25f){const _0x4aaedf=Number(_0x54f25f||0x0);if(!isFinite(_0x4aaedf)||_0x4aaedf<=0x0)return'0M';const _0x366e7f=0x400*0x400,_0x27a0f6=0x400*_0x366e7f;if(_0x4aaedf>=_0x27a0f6)return(_0x4aaedf/_0x27a0f6)['toFixed'](0x1)+'G';return(_0x4aaedf/_0x366e7f)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x3454fe){const _0x9e220f=Number(_0x3454fe||0x0);if(!isFinite(_0x9e220f)||_0x9e220f<=0x0)return'0';const _0xa76fa3=0x400,_0x18f7b8=0x400*_0xa76fa3,_0x441157=0x400*_0x18f7b8;if(_0x9e220f>=_0x441157){const _0x4a361c=_0x9e220f/_0x441157;return(_0x4a361c>=0x64?_0x4a361c['toFixed'](0x0):_0x4a361c['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x9e220f>=_0x18f7b8)return Math['round'](_0x9e220f/_0x18f7b8)+'M';if(_0x9e220f>=_0xa76fa3)return Math['round'](_0x9e220f/_0xa76fa3)+'K';return String(Math['round'](_0x9e220f));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x1e82b4){const _0x18e42b=_0x3ee49a;if(!_0x1e82b4)return ZERO_TRAFFIC;const _0x5dc2da=_0x1e82b4['day_rx_traffic']!==undefined||_0x1e82b4['day_tx_traffic']!==undefined||_0x1e82b4['month_rx_traffic']!==undefined||_0x1e82b4['month_tx_traffic']!==undefined;if(!_0x5dc2da)return{'todayBytes':Number(_0x1e82b4['todayBytes'])||0x0,'monthBytes':Number(_0x1e82b4['monthBytes'])||0x0,'todayRx':Number(_0x1e82b4['todayRx'])||0x0,'todayTx':Number(_0x1e82b4['todayTx'])||0x0,'monthRx':Number(_0x1e82b4['monthRx'])||0x0,'monthTx':Number(_0x1e82b4[_0x18e42b(0x8d)])||0x0};const _0x24b39d=trafficMbToBytes(_0x1e82b4['day_rx_traffic']),_0x126e73=trafficMbToBytes(_0x1e82b4['day_tx_traffic']),_0x379f88=trafficMbToBytes(_0x1e82b4['month_rx_traffic']),_0x1bf017=trafficMbToBytes(_0x1e82b4['month_tx_traffic']);return{'todayBytes':_0x24b39d+_0x126e73,'monthBytes':_0x379f88+_0x1bf017,'todayRx':_0x24b39d,'todayTx':_0x126e73,'monthRx':_0x379f88,'monthTx':_0x1bf017};}function trafficRxRatio(_0x2abe66,_0xe2cbe2){const _0x5ac510=_0x3ee49a,_0x2b24f9=Number(_0x2abe66||0x0)+Number(_0xe2cbe2||0x0);if(!isFinite(_0x2b24f9)||_0x2b24f9<=0x0)return 0.5;return Math['min'](0.94,Math[_0x5ac510(0x9d)](0.06,Number(_0x2abe66||0x0)/_0x2b24f9));}function getOperatorName(_0x35af2c,_0x88c89e){const _0x2def8c=_0x3ee49a;if(!_0x35af2c)return _0x88c89e||'未知';const _0x6a1cdc=String(_0x35af2c)['toUpperCase']();if(_0x6a1cdc['includes']('CMCC')||_0x6a1cdc===_0x2def8c(0x94)||_0x6a1cdc['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x6a1cdc['includes']('CUCC')||_0x6a1cdc==='中国联通'||_0x6a1cdc['includes'](_0x2def8c(0x92))||_0x6a1cdc['includes']('UNICOM'))return'中国联通';if(_0x6a1cdc['includes']('CTCC')||_0x6a1cdc==='CT'||_0x6a1cdc==='中国电信'||_0x6a1cdc['includes']('CHINA\x20TELECOM')||_0x6a1cdc[_0x2def8c(0x7a)]('TELECOM'))return'中国电信';if(_0x6a1cdc['includes'](_0x2def8c(0x96))||_0x6a1cdc==='中国广电'||_0x6a1cdc['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x35af2c;}function getSignalColor(_0xdcb85b,_0x4c874e){let _0x482b39=parseInt(_0xdcb85b);if(isNaN(_0x482b39))_0x482b39=-0x78;if(_0x482b39>-0x59)return _0x4c874e['ok'];if(_0x482b39>-0x63)return _0x4c874e['warn'];return _0x4c874e['bad'];}function getSinrColor(_0x54102b,_0x5863fd){let _0x5c03b8=parseFloat(_0x54102b);if(isNaN(_0x5c03b8))_0x5c03b8=0x0;if(_0x5c03b8>0xf)return _0x5863fd['ok'];if(_0x5c03b8>0x8)return _0x5863fd['warn'];return _0x5863fd['bad'];}function getAllBands(_0x56797b,_0x5af5c0,_0x3c78ed){const _0x5608d7=_0x3ee49a,_0x3c5a98=[],_0x57230c=_0x3c78ed?'N':'B',_0x16f65e=getValidValue(_0x56797b?.['BAND']||_0x56797b?.['NR_BAND']||_0x56797b?.[_0x5608d7(0x95)],'');if(_0x16f65e)_0x3c5a98['push'](_0x57230c+_0x16f65e);for(const _0x433533 of _0x5af5c0?.['sub_CA_info']||[]){const _0x54f105=String(_0x433533?.['Band']||'');if(_0x54f105&&_0x54f105!=='-')_0x3c5a98['push'](_0x57230c+_0x54f105);}if(_0x3c5a98['length']===0x0)_0x3c5a98[_0x5608d7(0x7c)](_0x3c78ed?'N78':'B3');return _0x3c5a98;}function getCaBadgeText(_0x1b1740,_0x44a7db,_0x18ed7f){const _0x1d182a=(_0x44a7db?'5G\x20':'4G\x20')+_0x18ed7f;if(!_0x44a7db)return _0x1d182a;const _0x5ae1e5=0x1+(_0x1b1740&&_0x1b1740['sub_CA_info']||[])['length'];if(_0x5ae1e5>=0x4)return'5GA+';if(_0x5ae1e5===0x3)return'5GA';if(_0x5ae1e5===0x2)return'5G+';return _0x1d182a;}function getCarrierCountText(_0x360b45){const _0x5aa4f0=_0x3ee49a,_0x3a7958=(_0x360b45&&_0x360b45[_0x5aa4f0(0x7d)]||[])[_0x5aa4f0(0x76)];if(_0x3a7958===0x0)return _0x5aa4f0(0x8b);if(_0x3a7958===0x1)return'双载波';if(_0x3a7958===0x2)return'三载波';return _0x5aa4f0(0x93);}function getNetworkModeText(_0x18982e,_0x547489,_0x2464a6){const _0x36228e=String(_0x2464a6||'')['toUpperCase']();if(!_0x547489){if(!_0x36228e||_0x36228e==='4G'||_0x36228e==='LTE')return'4G\x20LTE';return'4G\x20'+_0x36228e;}const _0x3078af=0x1+(_0x18982e&&_0x18982e['sub_CA_info']||[])['length'];if(_0x3078af>=0x4)return'5GA+';if(_0x3078af===0x3)return'5GA';if(_0x3078af===0x2)return'5G+';return _0x36228e?'5G\x20'+_0x36228e:'5G\x20SA';}function rsrpToPercent(_0x1339b5){let _0x3745bb=parseInt(_0x1339b5);if(isNaN(_0x3745bb))_0x3745bb=-0x78;const _0x5485ce=Math['min'](-0x46,Math['max'](-0x78,_0x3745bb)),_0x3a43be=(_0x5485ce+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x3a43be*0x5a));}function sinrToPercent(_0x29cbbb){let _0xbe4aec=parseFloat(_0x29cbbb);if(isNaN(_0xbe4aec))_0xbe4aec=0x0;return Math['min'](0x64,Math['max'](0x0,_0xbe4aec/0x19*0x64));}function resolveDeviceName(_0x248a9b,_0x459d66){const _0x4c5ef5=_0x248a9b&&_0x248a9b['Name']!=null?String(_0x248a9b['Name'])['trim']():'';if(!_0x4c5ef5)return _0x459d66;if(_0x4c5ef5==='--'||_0x4c5ef5==='undefined'||_0x4c5ef5==='null'||_0x4c5ef5==='0')return _0x459d66;return _0x4c5ef5;}function rsrpToBars(_0x1e7422){const _0x2fe8fd=parseInt(_0x1e7422);if(isNaN(_0x2fe8fd))return 0x0;if(_0x2fe8fd>=-0x55)return 0x4;if(_0x2fe8fd>=-0x5f)return 0x3;if(_0x2fe8fd>=-0x69)return 0x2;if(_0x2fe8fd>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x721c6d){const _0x3af7ef=_0x3ee49a;if(!_0x721c6d)return 0x0;if(typeof _0x721c6d[_0x3af7ef(0xa1)]==='number')return _0x721c6d['onlineDevices'];const _0xf149bc=_0x721c6d['MainBaseInfo'];if(!Array['isArray'](_0xf149bc))return 0x0;return _0xf149bc['filter'](_0x1e75e7=>_0x1e75e7&&String(_0x1e75e7['NetStatus'])==='1')['length'];}function urlDecode(_0x1c6238){const _0x4c6ba4=_0x3ee49a,_0xab793c=[];for(let _0x2af161=0x0;_0x2af161<_0x1c6238[_0x4c6ba4(0x76)];_0x2af161+=0x2)_0xab793c['push'](parseInt(_0x1c6238['substr'](_0x2af161,0x2),0x10));let _0x36c93f='';for(let _0x4ee78f=0x0;_0x4ee78f<_0xab793c['length'];){const _0x294988=_0xab793c[_0x4ee78f];if(_0x294988<0x80)_0x36c93f+=String['fromCharCode'](_0x294988),_0x4ee78f++;else{if(_0x294988>>0x5===0x6)_0x36c93f+=String['fromCharCode']((_0x294988&0x1f)<<0x6|_0xab793c[_0x4ee78f+0x1]&0x3f),_0x4ee78f+=0x2;else _0x294988>>0x4===0xe?(_0x36c93f+=String['fromCharCode']((_0x294988&0xf)<<0xc|(_0xab793c[_0x4ee78f+0x1]&0x3f)<<0x6|_0xab793c[_0x4ee78f+0x2]&0x3f),_0x4ee78f+=0x3):(_0x36c93f+=String['fromCharCode']((_0x294988&0x7)<<0x12|(_0xab793c[_0x4ee78f+0x1]&0x3f)<<0xc|(_0xab793c[_0x4ee78f+0x2]&0x3f)<<0x6|_0xab793c[_0x4ee78f+0x3]),_0x4ee78f+=0x4);}}return _0x36c93f;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':_0x3ee49a(0x80)};function getOperatorId(){const _0x5499f8=_0x3ee49a;return Date['now']()[_0x5499f8(0xa2)]();}function _0x429e(_0x2fe928,_0x45c74a){const _0x26e4c7=_0x26e4();return _0x429e=function(_0x429e14,_0x4c8436){_0x429e14=_0x429e14-0x76;let _0x275678=_0x26e4c7[_0x429e14];if(_0x429e['fgySmn']===undefined){var _0x35f6ab=function(_0x5de54b){const _0x1ffe09='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x165605='',_0xe4c3c4='';for(let _0x49ce38=0x0,_0x237073,_0xb7ac7b,_0x2aa338=0x0;_0xb7ac7b=_0x5de54b['charAt'](_0x2aa338++);~_0xb7ac7b&&(_0x237073=_0x49ce38%0x4?_0x237073*0x40+_0xb7ac7b:_0xb7ac7b,_0x49ce38++%0x4)?_0x165605+=String['fromCharCode'](0xff&_0x237073>>(-0x2*_0x49ce38&0x6)):0x0){_0xb7ac7b=_0x1ffe09['indexOf'](_0xb7ac7b);}for(let _0x2b1d5f=0x0,_0x2d129a=_0x165605['length'];_0x2b1d5f<_0x2d129a;_0x2b1d5f++){_0xe4c3c4+='%'+('00'+_0x165605['charCodeAt'](_0x2b1d5f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe4c3c4);};_0x429e['zVSlrz']=_0x35f6ab,_0x2fe928=arguments,_0x429e['fgySmn']=!![];}const _0x945a1b=_0x26e4c7[0x0],_0x29d5ea=_0x429e14+_0x945a1b,_0x480672=_0x2fe928[_0x29d5ea];return!_0x480672?(_0x275678=_0x429e['zVSlrz'](_0x275678),_0x2fe928[_0x29d5ea]=_0x275678):_0x275678=_0x480672,_0x275678;},_0x429e(_0x2fe928,_0x45c74a);}function generateUUID(){const _0x49369d='0123456789ABCDEF';let _0x12c6be='';for(let _0xb5421e=0x0;_0xb5421e<0x20;_0xb5421e++)_0x12c6be+=_0x49369d[Math['floor'](Math['random']()*0x10)];return _0x12c6be;}function generateSequenceId(_0x4f9b29){const _0x4ffbb2=_0x3ee49a;return _0x4f9b29+'_'+Date['now']()[_0x4ffbb2(0xa2)](0x24);}function classifyFault(_0x260ff2){if(!_0x260ff2||_0x260ff2['length']===0x0)return null;if(_0x260ff2['some'](_0x3bd315=>AUTH_ERROR_CODES['indexOf'](_0x3bd315)>=0x0))return'auth';if(_0x260ff2['some'](_0x3c4cc5=>DEVICE_ERROR_CODES['indexOf'](_0x3c4cc5)>=0x0))return'device';return'network';}function readResult(_0x13a262,_0x59a8f8){if(!_0x13a262||_0x13a262['status']!=='fulfilled'||!_0x13a262['value'])return _0x59a8f8['push'](NET_ERROR_CODE),null;const _0x4ce861=_0x13a262['value'];if(_0x4ce861['resultCode']===0x0)return _0x4ce861;return _0x59a8f8['push'](typeof _0x4ce861['resultCode']==='number'?_0x4ce861['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x151416,_0x451971,_0x5c05fa,_0x2cc300,_0xfdced2){const _0x49656b=_0x3ee49a;if(!_0x5c05fa)return null;const _0x436626={'CmdType':_0x151416,..._0x451971};if(!_0x436626['SequenceId'])_0x436626['SequenceId']=generateSequenceId(_0x151416);const _0x3787={'appVersion':urlDecode('322e322e3531'),'mac':_0x2cc300,'timeout':0x3,'token':_0x5c05fa,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode(_0x49656b(0x8f)),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON[_0x49656b(0x8a)](_0x436626)}),'operatorId':getOperatorId()},_0x2e9a81=new AbortController(),_0x4a97dd=setTimeout(()=>{try{_0x2e9a81['abort']();}catch(_0x13b9a5){}},_0xfdced2);try{const _0x101998=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x5c05fa},'body':JSON['stringify'](_0x3787),'signal':_0x2e9a81['signal']}),_0x272b2e=await _0x101998['json']();if(_0x272b2e&&_0x272b2e[_0x49656b(0x84)]){const _0xddbed0=JSON['parse'](_0x272b2e['rspParam']);if(_0xddbed0['Result']===0x0&&_0xddbed0['return_Parameter']){const _0x2b5f45=String(_0xddbed0['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x27ed0a=JSON['parse'](decodeBase64Utf8(_0x2b5f45));return{..._0x27ed0a,'resultCode':0x0};}}return _0x272b2e||{'resultCode':NET_ERROR_CODE};}catch(_0x491c82){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x4a97dd);}}function decodeBase64Utf8(_0x51a5ef){const _0x5e453d=_0x3ee49a,_0x4be5d1=atob(_0x51a5ef);try{const _0x1cf816=new Uint8Array(_0x4be5d1['length']);for(let _0x33b9a0=0x0;_0x33b9a0<_0x4be5d1['length'];_0x33b9a0++)_0x1cf816[_0x33b9a0]=_0x4be5d1['charCodeAt'](_0x33b9a0);return new TextDecoder('utf-8')[_0x5e453d(0x83)](_0x1cf816);}catch(_0x408d8b){return _0x4be5d1;}}async function fetchCpeApi(_0x5864e1,_0x543008,_0x120e39,_0x1a4891={},_0x4262e5=0xbb8){if(!_0x543008)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x5864e1,_0x1a4891,_0x543008,_0x120e39,_0x4262e5);}function isEmpty(_0x448171){const _0x79aef=_0x3ee49a;return!_0x448171||typeof _0x448171==='object'&&Object[_0x79aef(0x88)](_0x448171)['length']===0x0;}async function fetchAll(_0x55dd56){const _0x5cbd2c=_0x3ee49a,_0x78a607=_0x55dd56['token'],_0x43c682=_0x55dd56['mac'],_0x295efc=0xbb8,_0x1b1fb0=await Promise[_0x5cbd2c(0x87)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x78a607,_0x43c682,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x78a607,_0x43c682,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x78a607,_0x43c682,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x78a607,_0x43c682,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x78a607,_0x43c682,{},0xbb8)]),_0x33cb40=[];let _0x48df7d=readResult(_0x1b1fb0[0x0],_0x33cb40),_0x49a5d2=readResult(_0x1b1fb0[0x1],_0x33cb40),_0x560d03=readResult(_0x1b1fb0[0x2],_0x33cb40),_0x28dc48=readResult(_0x1b1fb0[0x3],_0x33cb40);const _0x4f59c4=readResult(_0x1b1fb0[0x4],_0x33cb40);if(_0x560d03)_0x560d03=_0x560d03['MainRouter']||_0x560d03['Router']||_0x560d03;const _0x2b8acc=[_0x48df7d,_0x49a5d2,_0x560d03,_0x28dc48,_0x4f59c4]['filter'](_0x1adc0f=>!isEmpty(_0x1adc0f))['length'],_0x33f093=_0x2b8acc===0x0?classifyFault(_0x33cb40):null;return console[_0x5cbd2c(0x78)]('📡\x20取数完成\x20|\x20成功='+_0x2b8acc+_0x5cbd2c(0x7f)+(_0x33f093||'-')+_0x5cbd2c(0xa0)+_0x33cb40['join'](',')+']'),{'rf':_0x48df7d,'ca':_0x49a5d2,'topo':_0x560d03,'sim':_0x28dc48,'traffic':_0x4f59c4,'failCodes':_0x33cb40,'fault':_0x33f093,'successCount':_0x2b8acc};}function saveCache(_0x278c3d){const _0x22a55f=_0x3ee49a;try{const _0x430bb8=parseTrafficData(_0x278c3d['traffic']),_0x185690={'rf':{'WorkMode':_0x278c3d['rf']?.['WorkMode'],'SSB_RSRP':_0x278c3d['rf']?.['SSB_RSRP'],'RSRP':_0x278c3d['rf']?.['RSRP'],'SSB_SINR':_0x278c3d['rf']?.[_0x22a55f(0x9b)],'SINR':_0x278c3d['rf']?.['SINR'],'SSB_RSRQ':_0x278c3d['rf']?.['SSB_RSRQ'],'RSRQ':_0x278c3d['rf']?.['RSRQ'],'SSB_RSSI':_0x278c3d['rf']?.['SSB_RSSI'],'RSSI':_0x278c3d['rf']?.['RSSI'],'BAND':_0x278c3d['rf']?.[_0x22a55f(0x7b)],'NR_BAND':_0x278c3d['rf']?.['NR_BAND'],'LTE_BAND':_0x278c3d['rf']?.['LTE_BAND'],'PCI':_0x278c3d['rf']?.['PCI'],'SPN':_0x278c3d['rf']?.[_0x22a55f(0x89)]},'ca':{'main_CA_info':_0x278c3d['ca']?.['main_CA_info']||{},'sub_CA_info':_0x278c3d['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x278c3d['topo']?.['NetStatus'],'UpTime':_0x278c3d['topo']?.['UpTime'],'Name':_0x278c3d['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x278c3d['topo'])},'sim':{'Operator':_0x278c3d['sim']?.['Operator'],'SPN':_0x278c3d['sim']?.['SPN']},'traffic':{'todayBytes':_0x430bb8['todayBytes'],'monthBytes':_0x430bb8['monthBytes'],'todayRx':_0x430bb8['todayRx'],'todayTx':_0x430bb8[_0x22a55f(0x9f)],'monthRx':_0x430bb8['monthRx'],'monthTx':_0x430bb8['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x185690));}catch(_0x162fc0){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x162fc0);}}function loadCache(){const _0x1682db=_0x3ee49a;try{const _0x5e928d=Keychain['get'](KEY_CACHE);if(!_0x5e928d)return null;const _0x4d9fed=JSON[_0x1682db(0x9e)](_0x5e928d);if(!_0x4d9fed||typeof _0x4d9fed!=='object')return null;return _0x4d9fed;}catch(_0x2857d7){return null;}}
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
