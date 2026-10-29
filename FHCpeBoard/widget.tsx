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

const _0x56f9c8=_0x521f;(function(_0x1a50a7,_0x261bca){const _0x2cd679=_0x521f,_0x1bd5a4=_0x1a50a7();while(!![]){try{const _0x2baa47=parseInt(_0x2cd679(0x17a))/0x1*(parseInt(_0x2cd679(0x198))/0x2)+parseInt(_0x2cd679(0x174))/0x3*(parseInt(_0x2cd679(0x175))/0x4)+-parseInt(_0x2cd679(0x186))/0x5+parseInt(_0x2cd679(0x199))/0x6+parseInt(_0x2cd679(0x18e))/0x7+-parseInt(_0x2cd679(0x192))/0x8+-parseInt(_0x2cd679(0x189))/0x9;if(_0x2baa47===_0x261bca)break;else _0x1bd5a4['push'](_0x1bd5a4['shift']());}catch(_0x482156){_0x1bd5a4['push'](_0x1bd5a4['shift']());}}}(_0xbe43,0x5b6a5));function _0xbe43(){const _0x3e009f=['zMXVB3i','nZm0uhjTEKjO','q0HjtKeGtu9csuXf','u1ncx1jtuLa','nZq2ntCYnMq2otzLnJe2yW','CM91BMq','zgf5x3j4x3rYywzMAwm','DxrMltG','q0HjtKeGqLjpqurdqvnu','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','yMfK','Dg9gAxHLza','Dg9KyxLcExrLCW','mte3mduXnxjyrxbetq','r0vux0zjteLos19ut1bpte9hwv9jtKzp','Aw5KzxHpzG','nZmXotCZnNnzEeP0Ea','zgv2AwnLtMfTzq','5zUB6l295RoI','zNjVBunOyxjdB2rL','nuDb','mZiWmty4mw9bEMXbCa','CMvWBgfJzq','ChvZAa','BM93','mJuYoda0mgrSrvzzyq','DMfSDwu','BNvTyMvY','C3vIx0nbx2LUzM8','u1ncx1njtLi','AM9PBG','mtK2mKHArvrWvq','mJa5ntuZnKvhs2n3uq','5lIj6l295RoI','5y+m6l295RoI','tMfTzq','q1bfx1DjreDfvf9dqunirq','r0vux0nfteXvtefsx1rsquzgsunFsu5gtW','C29Tzq','5lIT5zU956E75yQO','B2jQzwn0','zgv2AwnL','Bw9UDgHFDhHFDhjHzMzPyW','tJC4','Dg9tDhjPBMC','lZuGFcbMyxvSDd0','mtj0ChHIEe4','mJeXmtu2CvndC1b4','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','tLjFqKfora','Bwf4'];_0xbe43=function(){return _0x3e009f;};return _0xbe43();}const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x56f9c8(0x19d),DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x599e67,_0x15edbe){try{const _0x3a1bd0=Keychain['get'](_0x599e67);return _0x3a1bd0===null||_0x3a1bd0===undefined||_0x3a1bd0===''?_0x15edbe:String(_0x3a1bd0)['trim']();}catch(_0x2986b8){return _0x15edbe;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2dd07e){const _0x318d2a=_0x56f9c8;try{if(_0x2dd07e['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2dd07e['token'])['trim']());if(_0x2dd07e['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x2dd07e['mac'])['trim']()||DEFAULT_MAC);if(_0x2dd07e['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x2dd07e[_0x318d2a(0x18a)])['trim']()||DEFAULT_NAME);}catch(_0x10581e){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x10581e);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x498a63,_0x12d604){if(_0x498a63===undefined||_0x498a63===null||_0x498a63==='')return _0x12d604;const _0x39359f=String(_0x498a63)['trim']();return _0x39359f==='-'||_0x39359f==='undefined'?_0x12d604:_0x39359f;}function firstValid(_0x134e9c,_0x4ae9a9){for(const _0x5555da of _0x134e9c){const _0x23b9cf=getValidValue(_0x5555da,'');if(_0x23b9cf)return _0x23b9cf;}return _0x4ae9a9;}function resolveOperator(_0x59ce5c,_0x16c6d0){const _0xcd2f6=getOperatorName(_0x16c6d0&&_0x16c6d0['Operator']||'',_0x16c6d0&&_0x16c6d0['SPN']||'');if(_0xcd2f6==='未知'&&_0x59ce5c&&_0x59ce5c['SPN'])return String(_0x59ce5c['SPN']);return _0xcd2f6;}function formatUptime(_0x2d0c7b){const _0x5679fe=_0x56f9c8,_0x49fa33=parseInt(_0x2d0c7b||0x0)||0x0,_0x2a6934=Math[_0x5679fe(0x179)](_0x49fa33/0x15180),_0x4eda23=Math['floor'](_0x49fa33%0x15180/0xe10),_0x19fc93=Math['floor'](_0x49fa33%0xe10/0x3c),_0x2463a7=[];if(_0x2a6934>0x0)_0x2463a7[_0x5679fe(0x190)](_0x2a6934+'天');if(_0x4eda23>0x0||_0x2a6934>0x0)_0x2463a7['push'](_0x4eda23+'小时');return _0x2463a7['push'](_0x19fc93+'分'),_0x2463a7['join']('\x20');}function formatUptimeShort(_0x1e7d63){const _0x3826a6=_0x56f9c8,_0x4b4ab0=parseInt(_0x1e7d63||0x0)||0x0,_0x6a0a59=Math['floor'](_0x4b4ab0/0x15180),_0x57ffc2=Math['floor'](_0x4b4ab0%0x15180/0xe10),_0x2c0f07=Math[_0x3826a6(0x179)](_0x4b4ab0%0xe10/0x3c),_0x36053d=[];if(_0x6a0a59>0x0)_0x36053d['push'](_0x6a0a59+'天');if(_0x57ffc2>0x0||_0x6a0a59>0x0)_0x36053d['push'](_0x57ffc2+'时');return _0x36053d[_0x3826a6(0x190)](_0x2c0f07+'分'),_0x36053d[_0x3826a6(0x197)]('');}function trafficMbToBytes(_0x125941){const _0x2a482e=parseFloat(_0x125941||0x0);if(isNaN(_0x2a482e))return 0x0;return Math['round'](_0x2a482e*0x400*0x400);}function formatTraffic(_0x274b14){const _0x2c5d1f=_0x56f9c8,_0x46e87e=Number(_0x274b14||0x0);if(!isFinite(_0x46e87e)||_0x46e87e<=0x0)return'0M';const _0x2b5003=0x400*0x400,_0x23518f=0x400*_0x2b5003;if(_0x46e87e>=_0x23518f)return(_0x46e87e/_0x23518f)['toFixed'](0x1)+'G';return(_0x46e87e/_0x2b5003)[_0x2c5d1f(0x184)](0x1)+'M';}function formatTrafficShort(_0x16cd1a){const _0x2a5c1c=_0x56f9c8,_0x40d373=Number(_0x16cd1a||0x0);if(!isFinite(_0x40d373)||_0x40d373<=0x0)return'0';const _0x2c7658=0x400,_0x31f795=0x400*_0x2c7658,_0x32f8c4=0x400*_0x31f795;if(_0x40d373>=_0x32f8c4){const _0x3e9146=_0x40d373/_0x32f8c4;return(_0x3e9146>=0x64?_0x3e9146['toFixed'](0x0):_0x3e9146['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x40d373>=_0x31f795)return Math['round'](_0x40d373/_0x31f795)+'M';if(_0x40d373>=_0x2c7658)return Math[_0x2a5c1c(0x17e)](_0x40d373/_0x2c7658)+'K';return String(Math[_0x2a5c1c(0x17e)](_0x40d373));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x1edd03){const _0x1f1ac5=_0x56f9c8;if(!_0x1edd03)return ZERO_TRAFFIC;const _0x17d8a9=_0x1edd03[_0x1f1ac5(0x17f)]!==undefined||_0x1edd03['day_tx_traffic']!==undefined||_0x1edd03['month_rx_traffic']!==undefined||_0x1edd03[_0x1f1ac5(0x1a3)]!==undefined;if(!_0x17d8a9)return{'todayBytes':Number(_0x1edd03[_0x1f1ac5(0x185)])||0x0,'monthBytes':Number(_0x1edd03['monthBytes'])||0x0,'todayRx':Number(_0x1edd03['todayRx'])||0x0,'todayTx':Number(_0x1edd03['todayTx'])||0x0,'monthRx':Number(_0x1edd03['monthRx'])||0x0,'monthTx':Number(_0x1edd03['monthTx'])||0x0};const _0x5a7530=trafficMbToBytes(_0x1edd03['day_rx_traffic']),_0x5b4115=trafficMbToBytes(_0x1edd03['day_tx_traffic']),_0x4cf4a0=trafficMbToBytes(_0x1edd03['month_rx_traffic']),_0xf7d948=trafficMbToBytes(_0x1edd03['month_tx_traffic']);return{'todayBytes':_0x5a7530+_0x5b4115,'monthBytes':_0x4cf4a0+_0xf7d948,'todayRx':_0x5a7530,'todayTx':_0x5b4115,'monthRx':_0x4cf4a0,'monthTx':_0xf7d948};}function trafficRxRatio(_0x30047f,_0x1c3108){const _0x47287b=Number(_0x30047f||0x0)+Number(_0x1c3108||0x0);if(!isFinite(_0x47287b)||_0x47287b<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x30047f||0x0)/_0x47287b));}function getOperatorName(_0xbe1588,_0x514e37){const _0x22d549=_0x56f9c8;if(!_0xbe1588)return _0x514e37||'未知';const _0x557054=String(_0xbe1588)['toUpperCase']();if(_0x557054['includes']('CMCC')||_0x557054===_0x22d549(0x1a0)||_0x557054['includes'](_0x22d549(0x17b)))return'中国移动';if(_0x557054['includes']('CUCC')||_0x557054==='中国联通'||_0x557054['includes']('CHINA\x20UNICOM')||_0x557054['includes']('UNICOM'))return'中国联通';if(_0x557054['includes']('CTCC')||_0x557054==='CT'||_0x557054==='中国电信'||_0x557054['includes']('CHINA\x20TELECOM')||_0x557054['includes']('TELECOM'))return'中国电信';if(_0x557054['includes']('CBN')||_0x557054==='中国广电'||_0x557054['includes'](_0x22d549(0x181)))return'中国广电';return _0xbe1588;}function getSignalColor(_0xa6c3cc,_0x211c96){let _0x2b7014=parseInt(_0xa6c3cc);if(isNaN(_0x2b7014))_0x2b7014=-0x78;if(_0x2b7014>-0x59)return _0x211c96['ok'];if(_0x2b7014>-0x63)return _0x211c96['warn'];return _0x211c96['bad'];}function getSinrColor(_0x2fb85c,_0x48b9cd){const _0x1ed7c2=_0x56f9c8;let _0x1e1cf1=parseFloat(_0x2fb85c);if(isNaN(_0x1e1cf1))_0x1e1cf1=0x0;if(_0x1e1cf1>0xf)return _0x48b9cd['ok'];if(_0x1e1cf1>0x8)return _0x48b9cd['warn'];return _0x48b9cd[_0x1ed7c2(0x183)];}function getAllBands(_0x3b1063,_0x580af8,_0x1f0f1f){const _0x37d393=_0x56f9c8,_0x11d867=[],_0x11f25f=_0x1f0f1f?'N':'B',_0x1a0b77=getValidValue(_0x3b1063?.['BAND']||_0x3b1063?.[_0x37d393(0x177)]||_0x3b1063?.['LTE_BAND'],'');if(_0x1a0b77)_0x11d867['push'](_0x11f25f+_0x1a0b77);for(const _0x1a151f of _0x580af8?.[_0x37d393(0x195)]||[]){const _0x4e5298=String(_0x1a151f?.['Band']||'');if(_0x4e5298&&_0x4e5298!=='-')_0x11d867['push'](_0x11f25f+_0x4e5298);}if(_0x11d867['length']===0x0)_0x11d867['push'](_0x1f0f1f?_0x37d393(0x1a4):'B3');return _0x11d867;}function getCaBadgeText(_0x390557,_0x4b7877,_0x181ca4){const _0x2fe167=(_0x4b7877?'5G\x20':'4G\x20')+_0x181ca4;if(!_0x4b7877)return _0x2fe167;const _0x21766d=0x1+(_0x390557&&_0x390557['sub_CA_info']||[])['length'];if(_0x21766d>=0x4)return'5GA+';if(_0x21766d===0x3)return'5GA';if(_0x21766d===0x2)return'5G+';return _0x2fe167;}function getCarrierCountText(_0x2883d0){const _0x34b8d7=_0x56f9c8,_0x3e1503=(_0x2883d0&&_0x2883d0[_0x34b8d7(0x195)]||[])['length'];if(_0x3e1503===0x0)return'单载波';if(_0x3e1503===0x1)return _0x34b8d7(0x19b);if(_0x3e1503===0x2)return _0x34b8d7(0x19a);return _0x34b8d7(0x18b);}function getNetworkModeText(_0x55dc73,_0x1a5c14,_0x270ece){const _0x2ea0a6=_0x56f9c8,_0x314f2e=String(_0x270ece||'')['toUpperCase']();if(!_0x1a5c14){if(!_0x314f2e||_0x314f2e==='4G'||_0x314f2e==='LTE')return'4G\x20LTE';return'4G\x20'+_0x314f2e;}const _0x5667d0=0x1+(_0x55dc73&&_0x55dc73['sub_CA_info']||[])['length'];if(_0x5667d0>=0x4)return'5GA+';if(_0x5667d0===0x3)return _0x2ea0a6(0x18d);if(_0x5667d0===0x2)return'5G+';return _0x314f2e?'5G\x20'+_0x314f2e:'5G\x20SA';}function rsrpToPercent(_0x1c3495){let _0x50ee83=parseInt(_0x1c3495);if(isNaN(_0x50ee83))_0x50ee83=-0x78;const _0x57870e=Math['min'](-0x46,Math['max'](-0x78,_0x50ee83)),_0x5a4948=(_0x57870e+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x5a4948*0x5a));}function sinrToPercent(_0x4d39d6){const _0x2bb4a5=_0x56f9c8;let _0x31bb80=parseFloat(_0x4d39d6);if(isNaN(_0x31bb80))_0x31bb80=0x0;return Math['min'](0x64,Math[_0x2bb4a5(0x178)](0x0,_0x31bb80/0x19*0x64));}function resolveDeviceName(_0x4abe72,_0x39d460){const _0x240a53=_0x4abe72&&_0x4abe72['Name']!=null?String(_0x4abe72['Name'])['trim']():'';if(!_0x240a53)return _0x39d460;if(_0x240a53==='--'||_0x240a53==='undefined'||_0x240a53==='null'||_0x240a53==='0')return _0x39d460;return _0x240a53;}function rsrpToBars(_0x428b4b){const _0x24a7b7=parseInt(_0x428b4b);if(isNaN(_0x24a7b7))return 0x0;if(_0x24a7b7>=-0x55)return 0x4;if(_0x24a7b7>=-0x5f)return 0x3;if(_0x24a7b7>=-0x69)return 0x2;if(_0x24a7b7>=-0x73)return 0x1;return 0x1;}function _0x521f(_0x38d5bf,_0xa483c9){_0x38d5bf=_0x38d5bf-0x174;const _0xbe4363=_0xbe43();let _0x521f73=_0xbe4363[_0x38d5bf];if(_0x521f['qHdDoG']===undefined){var _0x214a19=function(_0x33cfb1){const _0x1414e5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x7e67cb='',_0x599e67='';for(let _0x15edbe=0x0,_0x3a1bd0,_0x2986b8,_0x2dd07e=0x0;_0x2986b8=_0x33cfb1['charAt'](_0x2dd07e++);~_0x2986b8&&(_0x3a1bd0=_0x15edbe%0x4?_0x3a1bd0*0x40+_0x2986b8:_0x2986b8,_0x15edbe++%0x4)?_0x7e67cb+=String['fromCharCode'](0xff&_0x3a1bd0>>(-0x2*_0x15edbe&0x6)):0x0){_0x2986b8=_0x1414e5['indexOf'](_0x2986b8);}for(let _0x10581e=0x0,_0x498a63=_0x7e67cb['length'];_0x10581e<_0x498a63;_0x10581e++){_0x599e67+='%'+('00'+_0x7e67cb['charCodeAt'](_0x10581e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x599e67);};_0x521f['fnZxkj']=_0x214a19,_0x521f['uQXvSI']={},_0x521f['qHdDoG']=!![];}const _0x571bdf=_0xbe4363[0x0];_0x521f['bUlUHA']!==_0x571bdf&&(_0x521f['uQXvSI']={},_0x521f['bUlUHA']=_0x571bdf);const _0x211cb=_0x521f['uQXvSI'][_0x38d5bf];return _0x211cb===undefined?(_0x521f73=_0x521f['fnZxkj'](_0x521f73),_0x521f['uQXvSI'][_0x38d5bf]=_0x521f73):_0x521f73=_0x211cb,_0x521f73;}function countOnlineDevices(_0x123bc6){if(!_0x123bc6)return 0x0;if(typeof _0x123bc6['onlineDevices']==='number')return _0x123bc6['onlineDevices'];const _0x39605a=_0x123bc6['MainBaseInfo'];if(!Array['isArray'](_0x39605a))return 0x0;return _0x39605a['filter'](_0x46a756=>_0x46a756&&String(_0x46a756['NetStatus'])==='1')['length'];}function urlDecode(_0x382d9e){const _0x4686b9=_0x56f9c8,_0x459b63=[];for(let _0xedd760=0x0;_0xedd760<_0x382d9e['length'];_0xedd760+=0x2)_0x459b63['push'](parseInt(_0x382d9e['substr'](_0xedd760,0x2),0x10));let _0x210465='';for(let _0x1d397c=0x0;_0x1d397c<_0x459b63['length'];){const _0xe6d119=_0x459b63[_0x1d397c];if(_0xe6d119<0x80)_0x210465+=String['fromCharCode'](_0xe6d119),_0x1d397c++;else{if(_0xe6d119>>0x5===0x6)_0x210465+=String['fromCharCode']((_0xe6d119&0x1f)<<0x6|_0x459b63[_0x1d397c+0x1]&0x3f),_0x1d397c+=0x2;else _0xe6d119>>0x4===0xe?(_0x210465+=String[_0x4686b9(0x18c)]((_0xe6d119&0xf)<<0xc|(_0x459b63[_0x1d397c+0x1]&0x3f)<<0x6|_0x459b63[_0x1d397c+0x2]&0x3f),_0x1d397c+=0x3):(_0x210465+=String['fromCharCode']((_0xe6d119&0x7)<<0x12|(_0x459b63[_0x1d397c+0x1]&0x3f)<<0xc|(_0x459b63[_0x1d397c+0x2]&0x3f)<<0x6|_0x459b63[_0x1d397c+0x3]),_0x1d397c+=0x4);}}return _0x210465;}const REMOTE_URL=urlDecode(_0x56f9c8(0x176)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x582421=_0x56f9c8;return Date['now']()[_0x582421(0x1a5)]();}function generateUUID(){const _0x230d0f=_0x56f9c8,_0x3131be='0123456789ABCDEF';let _0x45fed7='';for(let _0x9ee6b2=0x0;_0x9ee6b2<0x20;_0x9ee6b2++)_0x45fed7+=_0x3131be[Math[_0x230d0f(0x179)](Math['random']()*0x10)];return _0x45fed7;}function generateSequenceId(_0x5eb03d){const _0x487a10=_0x56f9c8;return _0x5eb03d+'_'+Date[_0x487a10(0x191)]()['toString'](0x24);}function classifyFault(_0x11ca26){const _0x7f5b2d=_0x56f9c8;if(!_0x11ca26||_0x11ca26['length']===0x0)return null;if(_0x11ca26[_0x7f5b2d(0x19f)](_0x8aa449=>AUTH_ERROR_CODES[_0x7f5b2d(0x188)](_0x8aa449)>=0x0))return'auth';if(_0x11ca26['some'](_0xe72e0f=>DEVICE_ERROR_CODES[_0x7f5b2d(0x188)](_0xe72e0f)>=0x0))return _0x7f5b2d(0x1a2);return'network';}function readResult(_0x378aa5,_0x12f2d9){const _0x215b7f=_0x56f9c8;if(!_0x378aa5||_0x378aa5['status']!=='fulfilled'||!_0x378aa5['value'])return _0x12f2d9[_0x215b7f(0x190)](NET_ERROR_CODE),null;const _0x58f606=_0x378aa5[_0x215b7f(0x193)];if(_0x58f606['resultCode']===0x0)return _0x58f606;return _0x12f2d9['push'](typeof _0x58f606['resultCode']===_0x215b7f(0x194)?_0x58f606['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x1ce1ed,_0x12c563,_0x13dd5e,_0x1e91be,_0x2f3988){const _0x2fa0ef=_0x56f9c8;if(!_0x13dd5e)return null;const _0x3310c8={'CmdType':_0x1ce1ed,..._0x12c563};if(!_0x3310c8['SequenceId'])_0x3310c8['SequenceId']=generateSequenceId(_0x1ce1ed);const _0xec1638={'appVersion':urlDecode('322e322e3531'),'mac':_0x1e91be,'timeout':0x3,'token':_0x13dd5e,'appType':urlDecode(_0x2fa0ef(0x17d)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x3310c8)}),'operatorId':getOperatorId()},_0x207f3c=new AbortController(),_0x2333c1=setTimeout(()=>{try{_0x207f3c['abort']();}catch(_0x54aeac){}},_0x2f3988);try{const _0x56d7a4=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x13dd5e},'body':JSON['stringify'](_0xec1638),'signal':_0x207f3c['signal']}),_0x4d9e86=await _0x56d7a4['json']();if(_0x4d9e86&&_0x4d9e86['rspParam']){const _0x5f44d6=JSON['parse'](_0x4d9e86['rspParam']);if(_0x5f44d6['Result']===0x0&&_0x5f44d6['return_Parameter']){const _0x47362b=String(_0x5f44d6['return_Parameter'])[_0x2fa0ef(0x18f)](/\\\//g,'/')['replace'](/\\n/g,'')[_0x2fa0ef(0x18f)](/\\/g,'')['trim'](),_0x18a5a3=JSON['parse'](decodeBase64Utf8(_0x47362b));return{..._0x18a5a3,'resultCode':0x0};}}return _0x4d9e86||{'resultCode':NET_ERROR_CODE};}catch(_0x4059ad){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x2333c1);}}function decodeBase64Utf8(_0x3dd874){const _0x10ac89=_0x56f9c8,_0x1bbec5=atob(_0x3dd874);try{const _0x3b08cd=new Uint8Array(_0x1bbec5['length']);for(let _0x26def4=0x0;_0x26def4<_0x1bbec5['length'];_0x26def4++)_0x3b08cd[_0x26def4]=_0x1bbec5['charCodeAt'](_0x26def4);return new TextDecoder(_0x10ac89(0x180))['decode'](_0x3b08cd);}catch(_0x232364){return _0x1bbec5;}}async function fetchCpeApi(_0xdcd35a,_0x4c7c5b,_0x28af93,_0x32cb01={},_0x1f823f=0xbb8){if(!_0x4c7c5b)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0xdcd35a,_0x32cb01,_0x4c7c5b,_0x28af93,_0x1f823f);}function isEmpty(_0x33cfa2){return!_0x33cfa2||typeof _0x33cfa2==='object'&&Object['keys'](_0x33cfa2)['length']===0x0;}async function fetchAll(_0x44465f){const _0x48f87d=_0x56f9c8,_0x5ce51c=_0x44465f['token'],_0x5f1b42=_0x44465f['mac'],_0xb0e575=0xbb8,_0x4260ac=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x5ce51c,_0x5f1b42,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x5ce51c,_0x5f1b42,{},0x9c4),fetchCpeApi(_0x48f87d(0x187),_0x5ce51c,_0x5f1b42,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x5ce51c,_0x5f1b42,{},0x9c4),fetchCpeApi(_0x48f87d(0x19e),_0x5ce51c,_0x5f1b42,{},0xbb8)]),_0x5f2bb1=[];let _0x31f189=readResult(_0x4260ac[0x0],_0x5f2bb1),_0x29719e=readResult(_0x4260ac[0x1],_0x5f2bb1),_0x2a9302=readResult(_0x4260ac[0x2],_0x5f2bb1),_0x1c5d9e=readResult(_0x4260ac[0x3],_0x5f2bb1);const _0xdc4e21=readResult(_0x4260ac[0x4],_0x5f2bb1);if(_0x2a9302)_0x2a9302=_0x2a9302['MainRouter']||_0x2a9302['Router']||_0x2a9302;const _0x55308f=[_0x31f189,_0x29719e,_0x2a9302,_0x1c5d9e,_0xdc4e21]['filter'](_0x5c7a14=>!isEmpty(_0x5c7a14))['length'],_0xde07d4=_0x55308f===0x0?classifyFault(_0x5f2bb1):null;return console['log'](_0x48f87d(0x182)+_0x55308f+_0x48f87d(0x1a6)+(_0xde07d4||'-')+'\x20|\x20失败码=['+_0x5f2bb1['join'](',')+']'),{'rf':_0x31f189,'ca':_0x29719e,'topo':_0x2a9302,'sim':_0x1c5d9e,'traffic':_0xdc4e21,'failCodes':_0x5f2bb1,'fault':_0xde07d4,'successCount':_0x55308f};}function saveCache(_0x57c6f0){const _0x2ef0fe=_0x56f9c8;try{const _0x6b8ff8=parseTrafficData(_0x57c6f0['traffic']),_0x1059d2={'rf':{'WorkMode':_0x57c6f0['rf']?.['WorkMode'],'SSB_RSRP':_0x57c6f0['rf']?.[_0x2ef0fe(0x17c)],'RSRP':_0x57c6f0['rf']?.['RSRP'],'SSB_SINR':_0x57c6f0['rf']?.[_0x2ef0fe(0x196)],'SINR':_0x57c6f0['rf']?.['SINR'],'SSB_RSRQ':_0x57c6f0['rf']?.['SSB_RSRQ'],'RSRQ':_0x57c6f0['rf']?.['RSRQ'],'SSB_RSSI':_0x57c6f0['rf']?.['SSB_RSSI'],'RSSI':_0x57c6f0['rf']?.['RSSI'],'BAND':_0x57c6f0['rf']?.['BAND'],'NR_BAND':_0x57c6f0['rf']?.['NR_BAND'],'LTE_BAND':_0x57c6f0['rf']?.['LTE_BAND'],'PCI':_0x57c6f0['rf']?.['PCI'],'SPN':_0x57c6f0['rf']?.['SPN']},'ca':{'main_CA_info':_0x57c6f0['ca']?.['main_CA_info']||{},'sub_CA_info':_0x57c6f0['ca']?.[_0x2ef0fe(0x195)]||[]},'topo':{'NetStatus':_0x57c6f0['topo']?.['NetStatus'],'UpTime':_0x57c6f0['topo']?.['UpTime'],'Name':_0x57c6f0['topo']?.[_0x2ef0fe(0x19c)],'onlineDevices':countOnlineDevices(_0x57c6f0['topo'])},'sim':{'Operator':_0x57c6f0['sim']?.['Operator'],'SPN':_0x57c6f0['sim']?.['SPN']},'traffic':{'todayBytes':_0x6b8ff8['todayBytes'],'monthBytes':_0x6b8ff8['monthBytes'],'todayRx':_0x6b8ff8['todayRx'],'todayTx':_0x6b8ff8['todayTx'],'monthRx':_0x6b8ff8['monthRx'],'monthTx':_0x6b8ff8['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x1059d2));}catch(_0x115247){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x115247);}}function loadCache(){const _0x37b38d=_0x56f9c8;try{const _0x54f708=Keychain['get'](KEY_CACHE);if(!_0x54f708)return null;const _0x504d28=JSON['parse'](_0x54f708);if(!_0x504d28||typeof _0x504d28!==_0x37b38d(0x1a1))return null;return _0x504d28;}catch(_0x33ea27){return null;}}
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
