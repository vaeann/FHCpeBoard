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

const _0x2484f1=_0x4787;(function(_0x24b507,_0x3290e7){const _0x164558=_0x4787,_0x273b79=_0x24b507();while(!![]){try{const _0x5c568f=-parseInt(_0x164558(0xd0))/0x1+-parseInt(_0x164558(0xc1))/0x2*(-parseInt(_0x164558(0xd7))/0x3)+parseInt(_0x164558(0xba))/0x4+-parseInt(_0x164558(0xdf))/0x5*(-parseInt(_0x164558(0xc8))/0x6)+parseInt(_0x164558(0xe3))/0x7*(parseInt(_0x164558(0xc5))/0x8)+-parseInt(_0x164558(0xda))/0x9+-parseInt(_0x164558(0xc4))/0xa*(parseInt(_0x164558(0xc7))/0xb);if(_0x5c568f===_0x3290e7)break;else _0x273b79['push'](_0x273b79['shift']());}catch(_0x27b54e){_0x273b79['push'](_0x273b79['shift']());}}}(_0x16ee,0xc6dd5));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x5a5654,_0x25a2bd){const _0x2f7ca7=_0x4787;try{const _0x3c4186=Keychain['get'](_0x5a5654);return _0x3c4186===null||_0x3c4186===undefined||_0x3c4186===''?_0x25a2bd:String(_0x3c4186)[_0x2f7ca7(0xdd)]();}catch(_0x3a0872){return _0x25a2bd;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x382bd5){const _0x3c9123=_0x4787;try{if(_0x382bd5['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x382bd5['token'])['trim']());if(_0x382bd5['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x382bd5['mac'])['trim']()||DEFAULT_MAC);if(_0x382bd5['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x382bd5['deviceName'])[_0x3c9123(0xdd)]()||DEFAULT_NAME);}catch(_0x128b56){console[_0x3c9123(0xd8)]('⚠️\x20保存设置失败\x20|\x20'+_0x128b56);}}function _0x16ee(){const _0x524558=['5lIT5zU955s15l+H','ywjVCNq','nJi5mtm4oeDSD3bHBa','zNjVBunOyxjdB2rL','u1bo','D2fYBG','tfrf','q1vdqW','5y2v6l295RoI','mtC0odmYEfH1ENz5','BgvUz3rO','C2v0','mtbpzMzYwfm','ofPXBw9mBq','mdeYmZq1nJC4oufcq0rfrG','mJi1nZK0mtrbEgvjEva','mJa2mJa2ohDUwNPqAq','Bw9UDgHFCNHFDhjHzMzPyW','BwLU','Aw5JBhvKzxm','5PYQ6ywn572UifrVA2vU','C29Tzq','CMvWBgfJzq','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','mtiWmJK4ow5JrLzHBG','B25SAw5Lrgv2AwnLCW','tLjFqKfora','zgf5x3r4x3rYywzMAwm','u1ncx1jtuLa','tMv0u3rHDhvZ','uLnsua','ndjsDePYBhe','Bg9N','nta2yZC1nJC2otzLnwy0otq0','mteWnte2mdrIA0XQBe8','Dg9WBW','CM91BMq','DhjPBq','vevmrunptq','mJbPBKn2qwe','77Yb6k6+5Ash56A757Q/','y2HHCKnVzgvbDa','C3rHDhvZ','nZG4nZq5nuDADLPtDW','55M75B2v5AsX5PwicUIVT+AjK+w8GoECI+ADV+MhJEAwSoEzU+w9Lq','ChvZAa','5lIT5zU95BM/55s1'];_0x16ee=function(){return _0x524558;};return _0x16ee();}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x305d9b,_0x181a00){if(_0x305d9b===undefined||_0x305d9b===null||_0x305d9b==='')return _0x181a00;const _0x1e9dc3=String(_0x305d9b)['trim']();return _0x1e9dc3==='-'||_0x1e9dc3==='undefined'?_0x181a00:_0x1e9dc3;}function firstValid(_0x44a66b,_0x54dd1e){for(const _0x3bc7ad of _0x44a66b){const _0x4c40a3=getValidValue(_0x3bc7ad,'');if(_0x4c40a3)return _0x4c40a3;}return _0x54dd1e;}function resolveOperator(_0x2de513,_0x325b6f){const _0x5e1d03=getOperatorName(_0x325b6f&&_0x325b6f['Operator']||'',_0x325b6f&&_0x325b6f['SPN']||'');if(_0x5e1d03==='未知'&&_0x2de513&&_0x2de513['SPN'])return String(_0x2de513['SPN']);return _0x5e1d03;}function formatUptime(_0xae72a4){const _0x3a7d73=_0x4787,_0x33590d=parseInt(_0xae72a4||0x0)||0x0,_0x100c2e=Math['floor'](_0x33590d/0x15180),_0x3d5d71=Math['floor'](_0x33590d%0x15180/0xe10),_0x3385b1=Math['floor'](_0x33590d%0xe10/0x3c),_0x74ef33=[];if(_0x100c2e>0x0)_0x74ef33[_0x3a7d73(0xb6)](_0x100c2e+'天');if(_0x3d5d71>0x0||_0x100c2e>0x0)_0x74ef33['push'](_0x3d5d71+'小时');return _0x74ef33[_0x3a7d73(0xb6)](_0x3385b1+'分'),_0x74ef33['join']('\x20');}function formatUptimeShort(_0xa5ac1a){const _0x4d87a3=_0x4787,_0x1bfb69=parseInt(_0xa5ac1a||0x0)||0x0,_0x5e9d0f=Math['floor'](_0x1bfb69/0x15180),_0x440446=Math['floor'](_0x1bfb69%0x15180/0xe10),_0x470457=Math['floor'](_0x1bfb69%0xe10/0x3c),_0x211ad9=[];if(_0x5e9d0f>0x0)_0x211ad9['push'](_0x5e9d0f+'天');if(_0x440446>0x0||_0x5e9d0f>0x0)_0x211ad9['push'](_0x440446+'时');return _0x211ad9[_0x4d87a3(0xb6)](_0x470457+'分'),_0x211ad9['join']('');}function trafficMbToBytes(_0x4d0dd3){const _0x4442b0=_0x4787,_0x3fcbcf=parseFloat(_0x4d0dd3||0x0);if(isNaN(_0x3fcbcf))return 0x0;return Math[_0x4442b0(0xdc)](_0x3fcbcf*0x400*0x400);}function formatTraffic(_0x892c82){const _0x4163ff=Number(_0x892c82||0x0);if(!isFinite(_0x4163ff)||_0x4163ff<=0x0)return'0M';const _0x2a715c=0x400*0x400,_0x125c6f=0x400*_0x2a715c;if(_0x4163ff>=_0x125c6f)return(_0x4163ff/_0x125c6f)['toFixed'](0x1)+'G';return(_0x4163ff/_0x2a715c)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x18519f){const _0x3a98a2=Number(_0x18519f||0x0);if(!isFinite(_0x3a98a2)||_0x3a98a2<=0x0)return'0';const _0x49af0f=0x400,_0x23c0f8=0x400*_0x49af0f,_0x860205=0x400*_0x23c0f8;if(_0x3a98a2>=_0x860205){const _0x2f4527=_0x3a98a2/_0x860205;return(_0x2f4527>=0x64?_0x2f4527['toFixed'](0x0):_0x2f4527['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x3a98a2>=_0x23c0f8)return Math['round'](_0x3a98a2/_0x23c0f8)+'M';if(_0x3a98a2>=_0x49af0f)return Math['round'](_0x3a98a2/_0x49af0f)+'K';return String(Math['round'](_0x3a98a2));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x579ad6){const _0x307213=_0x4787;if(!_0x579ad6)return ZERO_TRAFFIC;const _0x4f5586=_0x579ad6['day_rx_traffic']!==undefined||_0x579ad6['day_tx_traffic']!==undefined||_0x579ad6['month_rx_traffic']!==undefined||_0x579ad6['month_tx_traffic']!==undefined;if(!_0x4f5586)return{'todayBytes':Number(_0x579ad6['todayBytes'])||0x0,'monthBytes':Number(_0x579ad6['monthBytes'])||0x0,'todayRx':Number(_0x579ad6['todayRx'])||0x0,'todayTx':Number(_0x579ad6['todayTx'])||0x0,'monthRx':Number(_0x579ad6['monthRx'])||0x0,'monthTx':Number(_0x579ad6['monthTx'])||0x0};const _0x32a560=trafficMbToBytes(_0x579ad6['day_rx_traffic']),_0x3f55af=trafficMbToBytes(_0x579ad6[_0x307213(0xd3)]),_0x5e7637=trafficMbToBytes(_0x579ad6[_0x307213(0xc9)]),_0x57124f=trafficMbToBytes(_0x579ad6['month_tx_traffic']);return{'todayBytes':_0x32a560+_0x3f55af,'monthBytes':_0x5e7637+_0x57124f,'todayRx':_0x32a560,'todayTx':_0x3f55af,'monthRx':_0x5e7637,'monthTx':_0x57124f};}function trafficRxRatio(_0x20cab3,_0x5ada3c){const _0x3af790=_0x4787,_0x41a6b8=Number(_0x20cab3||0x0)+Number(_0x5ada3c||0x0);if(!isFinite(_0x41a6b8)||_0x41a6b8<=0x0)return 0.5;return Math[_0x3af790(0xca)](0.94,Math['max'](0.06,Number(_0x20cab3||0x0)/_0x41a6b8));}function getOperatorName(_0x441f29,_0x4e370e){const _0x24e7e4=_0x4787;if(!_0x441f29)return _0x4e370e||'未知';const _0x12d04a=String(_0x441f29)['toUpperCase']();if(_0x12d04a['includes']('CMCC')||_0x12d04a==='中国移动'||_0x12d04a['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x12d04a['includes'](_0x24e7e4(0xbf))||_0x12d04a==='中国联通'||_0x12d04a['includes']('CHINA\x20UNICOM')||_0x12d04a['includes']('UNICOM'))return'中国联通';if(_0x12d04a['includes']('CTCC')||_0x12d04a==='CT'||_0x12d04a===_0x24e7e4(0xb8)||_0x12d04a['includes']('CHINA\x20TELECOM')||_0x12d04a['includes'](_0x24e7e4(0xde)))return'中国电信';if(_0x12d04a[_0x24e7e4(0xcb)]('CBN')||_0x12d04a===_0x24e7e4(0xb7)||_0x12d04a['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x441f29;}function getSignalColor(_0x15d714,_0x33e074){const _0x1d8b33=_0x4787;let _0x56aba7=parseInt(_0x15d714);if(isNaN(_0x56aba7))_0x56aba7=-0x78;if(_0x56aba7>-0x59)return _0x33e074['ok'];if(_0x56aba7>-0x63)return _0x33e074[_0x1d8b33(0xbd)];return _0x33e074['bad'];}function getSinrColor(_0x5d0118,_0x246e75){let _0x1ed0f1=parseFloat(_0x5d0118);if(isNaN(_0x1ed0f1))_0x1ed0f1=0x0;if(_0x1ed0f1>0xf)return _0x246e75['ok'];if(_0x1ed0f1>0x8)return _0x246e75['warn'];return _0x246e75['bad'];}function _0x4787(_0x433b18,_0x42289a){_0x433b18=_0x433b18-0xb6;const _0x16ee43=_0x16ee();let _0x4787fc=_0x16ee43[_0x433b18];if(_0x4787['xcpDkM']===undefined){var _0x392fcb=function(_0x1fce0f){const _0x439d43='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3c1682='',_0x5a5654='';for(let _0x25a2bd=0x0,_0x3c4186,_0x3a0872,_0x382bd5=0x0;_0x3a0872=_0x1fce0f['charAt'](_0x382bd5++);~_0x3a0872&&(_0x3c4186=_0x25a2bd%0x4?_0x3c4186*0x40+_0x3a0872:_0x3a0872,_0x25a2bd++%0x4)?_0x3c1682+=String['fromCharCode'](0xff&_0x3c4186>>(-0x2*_0x25a2bd&0x6)):0x0){_0x3a0872=_0x439d43['indexOf'](_0x3a0872);}for(let _0x128b56=0x0,_0x305d9b=_0x3c1682['length'];_0x128b56<_0x305d9b;_0x128b56++){_0x5a5654+='%'+('00'+_0x3c1682['charCodeAt'](_0x128b56)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5a5654);};_0x4787['tRPaxZ']=_0x392fcb,_0x4787['moziep']={},_0x4787['xcpDkM']=!![];}const _0x1eaae3=_0x16ee43[0x0];_0x4787['bwwZMp']!==_0x1eaae3&&(_0x4787['moziep']={},_0x4787['bwwZMp']=_0x1eaae3);const _0x36dfbb=_0x4787['moziep'][_0x433b18];return _0x36dfbb===undefined?(_0x4787fc=_0x4787['tRPaxZ'](_0x4787fc),_0x4787['moziep'][_0x433b18]=_0x4787fc):_0x4787fc=_0x36dfbb,_0x4787fc;}function getAllBands(_0x36e1ae,_0x3ac654,_0x15ea8b){const _0x4c8165=_0x4787,_0x465c60=[],_0x3be721=_0x15ea8b?'N':'B',_0x35241d=getValidValue(_0x36e1ae?.['BAND']||_0x36e1ae?.['NR_BAND']||_0x36e1ae?.['LTE_BAND'],'');if(_0x35241d)_0x465c60['push'](_0x3be721+_0x35241d);for(const _0x3dd3a1 of _0x3ac654?.['sub_CA_info']||[]){const _0x142987=String(_0x3dd3a1?.['Band']||'');if(_0x142987&&_0x142987!=='-')_0x465c60['push'](_0x3be721+_0x142987);}if(_0x465c60[_0x4c8165(0xc2)]===0x0)_0x465c60['push'](_0x15ea8b?'N78':'B3');return _0x465c60;}function getCaBadgeText(_0x4b169c,_0x4cfabc,_0x1538e3){const _0x4c93e9=(_0x4cfabc?'5G\x20':'4G\x20')+_0x1538e3;if(!_0x4cfabc)return _0x4c93e9;const _0x110d40=0x1+(_0x4b169c&&_0x4b169c['sub_CA_info']||[])['length'];if(_0x110d40>=0x4)return'5GA+';if(_0x110d40===0x3)return'5GA';if(_0x110d40===0x2)return'5G+';return _0x4c93e9;}function getCarrierCountText(_0x1397ed){const _0x962513=_0x4787,_0x5df887=(_0x1397ed&&_0x1397ed['sub_CA_info']||[])['length'];if(_0x5df887===0x0)return _0x962513(0xc0);if(_0x5df887===0x1)return'双载波';if(_0x5df887===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x541520,_0x1bf5b6,_0x16b2eb){const _0x808564=_0x4787,_0x502549=String(_0x16b2eb||'')['toUpperCase']();if(!_0x1bf5b6){if(!_0x502549||_0x502549==='4G'||_0x502549===_0x808564(0xbe))return'4G\x20LTE';return'4G\x20'+_0x502549;}const _0x2effd6=0x1+(_0x541520&&_0x541520['sub_CA_info']||[])[_0x808564(0xc2)];if(_0x2effd6>=0x4)return'5GA+';if(_0x2effd6===0x3)return'5GA';if(_0x2effd6===0x2)return'5G+';return _0x502549?'5G\x20'+_0x502549:'5G\x20SA';}function rsrpToPercent(_0x25512d){const _0x6eb4d2=_0x4787;let _0x8112e7=parseInt(_0x25512d);if(isNaN(_0x8112e7))_0x8112e7=-0x78;const _0x2ae320=Math['min'](-0x46,Math['max'](-0x78,_0x8112e7)),_0x5b0d81=(_0x2ae320+0x78)/0x32;return Math[_0x6eb4d2(0xca)](0x64,Math['max'](0xa,0xa+_0x5b0d81*0x5a));}function sinrToPercent(_0x375d77){const _0x5d2989=_0x4787;let _0x4095ee=parseFloat(_0x375d77);if(isNaN(_0x4095ee))_0x4095ee=0x0;return Math[_0x5d2989(0xca)](0x64,Math['max'](0x0,_0x4095ee/0x19*0x64));}function resolveDeviceName(_0x57f859,_0xd291bd){const _0x41b043=_0x57f859&&_0x57f859['Name']!=null?String(_0x57f859['Name'])['trim']():'';if(!_0x41b043)return _0xd291bd;if(_0x41b043==='--'||_0x41b043==='undefined'||_0x41b043==='null'||_0x41b043==='0')return _0xd291bd;return _0x41b043;}function rsrpToBars(_0x1e7b1e){const _0x4abac6=parseInt(_0x1e7b1e);if(isNaN(_0x4abac6))return 0x0;if(_0x4abac6>=-0x55)return 0x4;if(_0x4abac6>=-0x5f)return 0x3;if(_0x4abac6>=-0x69)return 0x2;if(_0x4abac6>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x46c302){const _0xbd09ec=_0x4787;if(!_0x46c302)return 0x0;if(typeof _0x46c302[_0xbd09ec(0xd1)]==='number')return _0x46c302['onlineDevices'];const _0x12cfd6=_0x46c302['MainBaseInfo'];if(!Array['isArray'](_0x12cfd6))return 0x0;return _0x12cfd6['filter'](_0xae491b=>_0xae491b&&String(_0xae491b['NetStatus'])==='1')['length'];}function urlDecode(_0x2fda30){const _0x56b5ad=_0x4787,_0x5f3184=[];for(let _0x5f580b=0x0;_0x5f580b<_0x2fda30['length'];_0x5f580b+=0x2)_0x5f3184['push'](parseInt(_0x2fda30['substr'](_0x5f580b,0x2),0x10));let _0x3b9bdb='';for(let _0x44276d=0x0;_0x44276d<_0x5f3184['length'];){const _0x405690=_0x5f3184[_0x44276d];if(_0x405690<0x80)_0x3b9bdb+=String['fromCharCode'](_0x405690),_0x44276d++;else{if(_0x405690>>0x5===0x6)_0x3b9bdb+=String['fromCharCode']((_0x405690&0x1f)<<0x6|_0x5f3184[_0x44276d+0x1]&0x3f),_0x44276d+=0x2;else _0x405690>>0x4===0xe?(_0x3b9bdb+=String['fromCharCode']((_0x405690&0xf)<<0xc|(_0x5f3184[_0x44276d+0x1]&0x3f)<<0x6|_0x5f3184[_0x44276d+0x2]&0x3f),_0x44276d+=0x3):(_0x3b9bdb+=String[_0x56b5ad(0xbb)]((_0x405690&0x7)<<0x12|(_0x5f3184[_0x44276d+0x1]&0x3f)<<0xc|(_0x5f3184[_0x44276d+0x2]&0x3f)<<0x6|_0x5f3184[_0x44276d+0x3]),_0x44276d+=0x4);}}return _0x3b9bdb;}const REMOTE_URL=urlDecode(_0x2484f1(0xcf)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x2484f1(0xe0),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':_0x2484f1(0xe4)};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x54645f=_0x2484f1,_0x5deca5=_0x54645f(0xc6);let _0x4b4094='';for(let _0x248e16=0x0;_0x248e16<0x20;_0x248e16++)_0x4b4094+=_0x5deca5[Math['floor'](Math['random']()*0x10)];return _0x4b4094;}function generateSequenceId(_0xa10617){return _0xa10617+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x589a95){const _0x32bf0e=_0x2484f1;if(!_0x589a95||_0x589a95['length']===0x0)return null;if(_0x589a95['some'](_0x43f3d0=>AUTH_ERROR_CODES['indexOf'](_0x43f3d0)>=0x0))return'auth';if(_0x589a95[_0x32bf0e(0xcd)](_0x3f1b0f=>DEVICE_ERROR_CODES['indexOf'](_0x3f1b0f)>=0x0))return'device';return'network';}function readResult(_0x3adfcf,_0x3fd2d1){const _0x583f17=_0x2484f1;if(!_0x3adfcf||_0x3adfcf[_0x583f17(0xe2)]!=='fulfilled'||!_0x3adfcf['value'])return _0x3fd2d1['push'](NET_ERROR_CODE),null;const _0x431d48=_0x3adfcf['value'];if(_0x431d48['resultCode']===0x0)return _0x431d48;return _0x3fd2d1['push'](typeof _0x431d48['resultCode']==='number'?_0x431d48['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x1f2fd3,_0x49b4e6,_0x220f40,_0x46b3f9,_0xc81712){const _0x2ca2e0=_0x2484f1;if(!_0x220f40)return null;const _0x23159b={'CmdType':_0x1f2fd3,..._0x49b4e6};if(!_0x23159b['SequenceId'])_0x23159b['SequenceId']=generateSequenceId(_0x1f2fd3);const _0x44985f={'appVersion':urlDecode('322e322e3531'),'mac':_0x46b3f9,'timeout':0x3,'token':_0x220f40,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode(_0x2ca2e0(0xd9)),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x23159b)}),'operatorId':getOperatorId()},_0x1f3cbf=new AbortController(),_0x5259df=setTimeout(()=>{const _0x6185c8=_0x2ca2e0;try{_0x1f3cbf[_0x6185c8(0xb9)]();}catch(_0x33b5c4){}},_0xc81712);try{const _0x46a805=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x220f40},'body':JSON['stringify'](_0x44985f),'signal':_0x1f3cbf['signal']}),_0x1b4a80=await _0x46a805['json']();if(_0x1b4a80&&_0x1b4a80['rspParam']){const _0x22d391=JSON['parse'](_0x1b4a80['rspParam']);if(_0x22d391['Result']===0x0&&_0x22d391['return_Parameter']){const _0xa6c939=String(_0x22d391['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')[_0x2ca2e0(0xce)](/\\/g,'')['trim'](),_0x1d9502=JSON['parse'](decodeBase64Utf8(_0xa6c939));return{..._0x1d9502,'resultCode':0x0};}}return _0x1b4a80||{'resultCode':NET_ERROR_CODE};}catch(_0x585347){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x5259df);}}function decodeBase64Utf8(_0xc2756){const _0x44ebe5=_0x2484f1,_0x3c26ee=atob(_0xc2756);try{const _0x4e8bea=new Uint8Array(_0x3c26ee[_0x44ebe5(0xc2)]);for(let _0x44aeb5=0x0;_0x44aeb5<_0x3c26ee[_0x44ebe5(0xc2)];_0x44aeb5++)_0x4e8bea[_0x44aeb5]=_0x3c26ee[_0x44ebe5(0xe1)](_0x44aeb5);return new TextDecoder('utf-8')['decode'](_0x4e8bea);}catch(_0x95397){return _0x3c26ee;}}async function fetchCpeApi(_0x395e91,_0x45e712,_0x45edeb,_0x59313c={},_0x31da81=0xbb8){const _0x23f405=_0x2484f1;if(!_0x45e712)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0x23f405(0xcc)};return await performCpeRequest(_0x395e91,_0x59313c,_0x45e712,_0x45edeb,_0x31da81);}function isEmpty(_0x52b9eb){return!_0x52b9eb||typeof _0x52b9eb==='object'&&Object['keys'](_0x52b9eb)['length']===0x0;}async function fetchAll(_0x2a10b8){const _0x3d645c=_0x2a10b8['token'],_0x2d09f7=_0x2a10b8['mac'],_0x4ace04=0xbb8,_0x29b411=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x3d645c,_0x2d09f7,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x3d645c,_0x2d09f7,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x3d645c,_0x2d09f7,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x3d645c,_0x2d09f7,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x3d645c,_0x2d09f7,{},0xbb8)]),_0x4492f9=[];let _0x59331d=readResult(_0x29b411[0x0],_0x4492f9),_0x39c375=readResult(_0x29b411[0x1],_0x4492f9),_0x4482c6=readResult(_0x29b411[0x2],_0x4492f9),_0x528b34=readResult(_0x29b411[0x3],_0x4492f9);const _0x21c4ed=readResult(_0x29b411[0x4],_0x4492f9);if(_0x4482c6)_0x4482c6=_0x4482c6['MainRouter']||_0x4482c6['Router']||_0x4482c6;const _0x147404=[_0x59331d,_0x39c375,_0x4482c6,_0x528b34,_0x21c4ed]['filter'](_0x5878c3=>!isEmpty(_0x5878c3))['length'],_0x5b4581=_0x147404===0x0?classifyFault(_0x4492f9):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x147404+'/5\x20|\x20fault='+(_0x5b4581||'-')+'\x20|\x20失败码=['+_0x4492f9['join'](',')+']'),{'rf':_0x59331d,'ca':_0x39c375,'topo':_0x4482c6,'sim':_0x528b34,'traffic':_0x21c4ed,'failCodes':_0x4492f9,'fault':_0x5b4581,'successCount':_0x147404};}function saveCache(_0x2fdb8d){const _0x50a3a6=_0x2484f1;try{const _0x296f00=parseTrafficData(_0x2fdb8d['traffic']),_0x5706d7={'rf':{'WorkMode':_0x2fdb8d['rf']?.['WorkMode'],'SSB_RSRP':_0x2fdb8d['rf']?.[_0x50a3a6(0xd4)],'RSRP':_0x2fdb8d['rf']?.[_0x50a3a6(0xd6)],'SSB_SINR':_0x2fdb8d['rf']?.['SSB_SINR'],'SINR':_0x2fdb8d['rf']?.['SINR'],'SSB_RSRQ':_0x2fdb8d['rf']?.['SSB_RSRQ'],'RSRQ':_0x2fdb8d['rf']?.['RSRQ'],'SSB_RSSI':_0x2fdb8d['rf']?.['SSB_RSSI'],'RSSI':_0x2fdb8d['rf']?.['RSSI'],'BAND':_0x2fdb8d['rf']?.['BAND'],'NR_BAND':_0x2fdb8d['rf']?.[_0x50a3a6(0xd2)],'LTE_BAND':_0x2fdb8d['rf']?.['LTE_BAND'],'PCI':_0x2fdb8d['rf']?.['PCI'],'SPN':_0x2fdb8d['rf']?.[_0x50a3a6(0xbc)]},'ca':{'main_CA_info':_0x2fdb8d['ca']?.['main_CA_info']||{},'sub_CA_info':_0x2fdb8d['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x2fdb8d['topo']?.[_0x50a3a6(0xd5)],'UpTime':_0x2fdb8d['topo']?.['UpTime'],'Name':_0x2fdb8d[_0x50a3a6(0xdb)]?.['Name'],'onlineDevices':countOnlineDevices(_0x2fdb8d['topo'])},'sim':{'Operator':_0x2fdb8d['sim']?.['Operator'],'SPN':_0x2fdb8d['sim']?.['SPN']},'traffic':{'todayBytes':_0x296f00['todayBytes'],'monthBytes':_0x296f00['monthBytes'],'todayRx':_0x296f00['todayRx'],'todayTx':_0x296f00['todayTx'],'monthRx':_0x296f00['monthRx'],'monthTx':_0x296f00['monthTx']},'ts':Date['now']()};Keychain[_0x50a3a6(0xc3)](KEY_CACHE,JSON['stringify'](_0x5706d7));}catch(_0x2b044f){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x2b044f);}}function loadCache(){try{const _0x1fa930=Keychain['get'](KEY_CACHE);if(!_0x1fa930)return null;const _0x2b4a6f=JSON['parse'](_0x1fa930);if(!_0x2b4a6f||typeof _0x2b4a6f!=='object')return null;return _0x2b4a6f;}catch(_0x1a4574){return null;}}
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
