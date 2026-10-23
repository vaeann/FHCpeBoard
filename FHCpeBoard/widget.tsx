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

(function(_0x12ffaf,_0x51d2a1){const _0x30ccac=_0x1b23,_0x534f49=_0x12ffaf();while(!![]){try{const _0x5723d9=-parseInt(_0x30ccac(0xd7))/0x1+-parseInt(_0x30ccac(0xce))/0x2+parseInt(_0x30ccac(0xd4))/0x3+-parseInt(_0x30ccac(0xb7))/0x4+-parseInt(_0x30ccac(0xd1))/0x5+-parseInt(_0x30ccac(0xc4))/0x6*(parseInt(_0x30ccac(0xc6))/0x7)+parseInt(_0x30ccac(0xca))/0x8;if(_0x5723d9===_0x51d2a1)break;else _0x534f49['push'](_0x534f49['shift']());}catch(_0x1a1546){_0x534f49['push'](_0x534f49['shift']());}}}(_0x2a1e,0xcbc0d));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x3b5d1f,_0x428a8c){try{const _0x5b8042=Keychain['get'](_0x3b5d1f);return _0x5b8042===null||_0x5b8042===undefined||_0x5b8042===''?_0x428a8c:String(_0x5b8042)['trim']();}catch(_0x460ccc){return _0x428a8c;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x41354d){const _0x28810a=_0x1b23;try{if(_0x41354d[_0x28810a(0xcd)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x41354d['token'])['trim']());if(_0x41354d['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x41354d['mac'])[_0x28810a(0xba)]()||DEFAULT_MAC);if(_0x41354d['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x41354d[_0x28810a(0xd2)])[_0x28810a(0xba)]()||DEFAULT_NAME);}catch(_0x5afd98){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x5afd98);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x44ae36,_0x572648){if(_0x44ae36===undefined||_0x44ae36===null||_0x44ae36==='')return _0x572648;const _0x490351=String(_0x44ae36)['trim']();return _0x490351==='-'||_0x490351==='undefined'?_0x572648:_0x490351;}function firstValid(_0x4f1206,_0x3fdbbd){for(const _0x1855eb of _0x4f1206){const _0x54b237=getValidValue(_0x1855eb,'');if(_0x54b237)return _0x54b237;}return _0x3fdbbd;}function resolveOperator(_0x4aa292,_0x2862c6){const _0x8179e9=_0x1b23,_0x3167c2=getOperatorName(_0x2862c6&&_0x2862c6['Operator']||'',_0x2862c6&&_0x2862c6['SPN']||'');if(_0x3167c2==='未知'&&_0x4aa292&&_0x4aa292[_0x8179e9(0xb3)])return String(_0x4aa292['SPN']);return _0x3167c2;}function formatUptime(_0x15d6d9){const _0x2aa348=_0x1b23,_0x502566=parseInt(_0x15d6d9||0x0)||0x0,_0x3a7fd5=Math['floor'](_0x502566/0x15180),_0x33df07=Math[_0x2aa348(0xd5)](_0x502566%0x15180/0xe10),_0x3a30a2=Math['floor'](_0x502566%0xe10/0x3c),_0x305898=[];if(_0x3a7fd5>0x0)_0x305898['push'](_0x3a7fd5+'天');if(_0x33df07>0x0||_0x3a7fd5>0x0)_0x305898['push'](_0x33df07+'小时');return _0x305898['push'](_0x3a30a2+'分'),_0x305898['join']('\x20');}function _0x1b23(_0x210496,_0x4be4e4){const _0x2a1e16=_0x2a1e();return _0x1b23=function(_0x1b238c,_0x2346b6){_0x1b238c=_0x1b238c-0xaa;let _0xf49bd4=_0x2a1e16[_0x1b238c];if(_0x1b23['MpFvpf']===undefined){var _0x590afb=function(_0x3b5d1f){const _0x428a8c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5b8042='',_0x460ccc='';for(let _0x41354d=0x0,_0x5afd98,_0x44ae36,_0x572648=0x0;_0x44ae36=_0x3b5d1f['charAt'](_0x572648++);~_0x44ae36&&(_0x5afd98=_0x41354d%0x4?_0x5afd98*0x40+_0x44ae36:_0x44ae36,_0x41354d++%0x4)?_0x5b8042+=String['fromCharCode'](0xff&_0x5afd98>>(-0x2*_0x41354d&0x6)):0x0){_0x44ae36=_0x428a8c['indexOf'](_0x44ae36);}for(let _0x490351=0x0,_0x4f1206=_0x5b8042['length'];_0x490351<_0x4f1206;_0x490351++){_0x460ccc+='%'+('00'+_0x5b8042['charCodeAt'](_0x490351)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x460ccc);};_0x1b23['qDVRra']=_0x590afb,_0x210496=arguments,_0x1b23['MpFvpf']=!![];}const _0x22737b=_0x2a1e16[0x0],_0x4fb7d8=_0x1b238c+_0x22737b,_0x157edb=_0x210496[_0x4fb7d8];return!_0x157edb?(_0xf49bd4=_0x1b23['qDVRra'](_0xf49bd4),_0x210496[_0x4fb7d8]=_0xf49bd4):_0xf49bd4=_0x157edb,_0xf49bd4;},_0x1b23(_0x210496,_0x4be4e4);}function formatUptimeShort(_0x3713d9){const _0xe936da=parseInt(_0x3713d9||0x0)||0x0,_0x385aff=Math['floor'](_0xe936da/0x15180),_0x4ac576=Math['floor'](_0xe936da%0x15180/0xe10),_0x30c816=Math['floor'](_0xe936da%0xe10/0x3c),_0x490243=[];if(_0x385aff>0x0)_0x490243['push'](_0x385aff+'天');if(_0x4ac576>0x0||_0x385aff>0x0)_0x490243['push'](_0x4ac576+'时');return _0x490243['push'](_0x30c816+'分'),_0x490243['join']('');}function trafficMbToBytes(_0x10c295){const _0x57702b=_0x1b23,_0x1c666b=parseFloat(_0x10c295||0x0);if(isNaN(_0x1c666b))return 0x0;return Math[_0x57702b(0xb2)](_0x1c666b*0x400*0x400);}function formatTraffic(_0x47171c){const _0xbfca90=Number(_0x47171c||0x0);if(!isFinite(_0xbfca90)||_0xbfca90<=0x0)return'0M';const _0x274bc2=0x400*0x400,_0x3334a4=0x400*_0x274bc2;if(_0xbfca90>=_0x3334a4)return(_0xbfca90/_0x3334a4)['toFixed'](0x1)+'G';return(_0xbfca90/_0x274bc2)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x207502){const _0x23fca8=Number(_0x207502||0x0);if(!isFinite(_0x23fca8)||_0x23fca8<=0x0)return'0';const _0x154e23=0x400,_0x5150fc=0x400*_0x154e23,_0x3ea2ba=0x400*_0x5150fc;if(_0x23fca8>=_0x3ea2ba){const _0xa8463b=_0x23fca8/_0x3ea2ba;return(_0xa8463b>=0x64?_0xa8463b['toFixed'](0x0):_0xa8463b['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x23fca8>=_0x5150fc)return Math['round'](_0x23fca8/_0x5150fc)+'M';if(_0x23fca8>=_0x154e23)return Math['round'](_0x23fca8/_0x154e23)+'K';return String(Math['round'](_0x23fca8));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x4ecd0f){const _0x41de58=_0x1b23;if(!_0x4ecd0f)return ZERO_TRAFFIC;const _0x1fe1e3=_0x4ecd0f['day_rx_traffic']!==undefined||_0x4ecd0f['day_tx_traffic']!==undefined||_0x4ecd0f['month_rx_traffic']!==undefined||_0x4ecd0f['month_tx_traffic']!==undefined;if(!_0x1fe1e3)return{'todayBytes':Number(_0x4ecd0f[_0x41de58(0xac)])||0x0,'monthBytes':Number(_0x4ecd0f['monthBytes'])||0x0,'todayRx':Number(_0x4ecd0f['todayRx'])||0x0,'todayTx':Number(_0x4ecd0f['todayTx'])||0x0,'monthRx':Number(_0x4ecd0f['monthRx'])||0x0,'monthTx':Number(_0x4ecd0f['monthTx'])||0x0};const _0x30ea08=trafficMbToBytes(_0x4ecd0f[_0x41de58(0xd8)]),_0x3a72fd=trafficMbToBytes(_0x4ecd0f['day_tx_traffic']),_0x3e23be=trafficMbToBytes(_0x4ecd0f[_0x41de58(0xd0)]),_0x188eba=trafficMbToBytes(_0x4ecd0f[_0x41de58(0xbb)]);return{'todayBytes':_0x30ea08+_0x3a72fd,'monthBytes':_0x3e23be+_0x188eba,'todayRx':_0x30ea08,'todayTx':_0x3a72fd,'monthRx':_0x3e23be,'monthTx':_0x188eba};}function trafficRxRatio(_0x2ef6a6,_0x5a9ffc){const _0x19af2c=Number(_0x2ef6a6||0x0)+Number(_0x5a9ffc||0x0);if(!isFinite(_0x19af2c)||_0x19af2c<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x2ef6a6||0x0)/_0x19af2c));}function getOperatorName(_0x1343cc,_0x5ed607){const _0xb4d6f7=_0x1b23;if(!_0x1343cc)return _0x5ed607||'未知';const _0x4ce7bb=String(_0x1343cc)['toUpperCase']();if(_0x4ce7bb[_0xb4d6f7(0xcb)]('CMCC')||_0x4ce7bb==='中国移动'||_0x4ce7bb['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x4ce7bb[_0xb4d6f7(0xcb)]('CUCC')||_0x4ce7bb==='中国联通'||_0x4ce7bb[_0xb4d6f7(0xcb)]('CHINA\x20UNICOM')||_0x4ce7bb[_0xb4d6f7(0xcb)]('UNICOM'))return'中国联通';if(_0x4ce7bb['includes']('CTCC')||_0x4ce7bb==='CT'||_0x4ce7bb==='中国电信'||_0x4ce7bb['includes']('CHINA\x20TELECOM')||_0x4ce7bb[_0xb4d6f7(0xcb)]('TELECOM'))return _0xb4d6f7(0xaa);if(_0x4ce7bb[_0xb4d6f7(0xcb)]('CBN')||_0x4ce7bb==='中国广电'||_0x4ce7bb['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x1343cc;}function getSignalColor(_0x1697fd,_0x47bb74){let _0xb7abf5=parseInt(_0x1697fd);if(isNaN(_0xb7abf5))_0xb7abf5=-0x78;if(_0xb7abf5>-0x59)return _0x47bb74['ok'];if(_0xb7abf5>-0x63)return _0x47bb74['warn'];return _0x47bb74['bad'];}function getSinrColor(_0x2a436c,_0x12a8a8){const _0x4af3dc=_0x1b23;let _0x57514e=parseFloat(_0x2a436c);if(isNaN(_0x57514e))_0x57514e=0x0;if(_0x57514e>0xf)return _0x12a8a8['ok'];if(_0x57514e>0x8)return _0x12a8a8[_0x4af3dc(0xaf)];return _0x12a8a8['bad'];}function getAllBands(_0x30852a,_0x1ec3d3,_0x4292b2){const _0x2c6b81=_0x1b23,_0x3ecf38=[],_0x311d63=_0x4292b2?'N':'B',_0x59223c=getValidValue(_0x30852a?.[_0x2c6b81(0xb9)]||_0x30852a?.['NR_BAND']||_0x30852a?.['LTE_BAND'],'');if(_0x59223c)_0x3ecf38['push'](_0x311d63+_0x59223c);for(const _0x3da39b of _0x1ec3d3?.['sub_CA_info']||[]){const _0x575bd4=String(_0x3da39b?.['Band']||'');if(_0x575bd4&&_0x575bd4!=='-')_0x3ecf38['push'](_0x311d63+_0x575bd4);}if(_0x3ecf38['length']===0x0)_0x3ecf38['push'](_0x4292b2?'N78':'B3');return _0x3ecf38;}function getCaBadgeText(_0x410918,_0x51f434,_0x2ec46e){const _0xecb1b=_0x1b23,_0x127b98=(_0x51f434?'5G\x20':_0xecb1b(0xd3))+_0x2ec46e;if(!_0x51f434)return _0x127b98;const _0x882ba8=0x1+(_0x410918&&_0x410918['sub_CA_info']||[])['length'];if(_0x882ba8>=0x4)return _0xecb1b(0xc3);if(_0x882ba8===0x3)return'5GA';if(_0x882ba8===0x2)return _0xecb1b(0xcc);return _0x127b98;}function getCarrierCountText(_0x14db15){const _0x15fc4b=_0x1b23,_0x599c24=(_0x14db15&&_0x14db15['sub_CA_info']||[])['length'];if(_0x599c24===0x0)return'单载波';if(_0x599c24===0x1)return _0x15fc4b(0xb8);if(_0x599c24===0x2)return _0x15fc4b(0xc2);return'四载波';}function getNetworkModeText(_0x5097e8,_0x42e241,_0x4d0974){const _0x4c9381=_0x1b23,_0x200066=String(_0x4d0974||'')['toUpperCase']();if(!_0x42e241){if(!_0x200066||_0x200066==='4G'||_0x200066==='LTE')return _0x4c9381(0xbc);return'4G\x20'+_0x200066;}const _0x5a9221=0x1+(_0x5097e8&&_0x5097e8['sub_CA_info']||[])['length'];if(_0x5a9221>=0x4)return'5GA+';if(_0x5a9221===0x3)return'5GA';if(_0x5a9221===0x2)return'5G+';return _0x200066?'5G\x20'+_0x200066:_0x4c9381(0xc1);}function rsrpToPercent(_0x92eebe){const _0xcdc226=_0x1b23;let _0x4f4701=parseInt(_0x92eebe);if(isNaN(_0x4f4701))_0x4f4701=-0x78;const _0x1f7c44=Math['min'](-0x46,Math[_0xcdc226(0xbf)](-0x78,_0x4f4701)),_0x35199c=(_0x1f7c44+0x78)/0x32;return Math['min'](0x64,Math[_0xcdc226(0xbf)](0xa,0xa+_0x35199c*0x5a));}function sinrToPercent(_0x4753d6){let _0x3e1806=parseFloat(_0x4753d6);if(isNaN(_0x3e1806))_0x3e1806=0x0;return Math['min'](0x64,Math['max'](0x0,_0x3e1806/0x19*0x64));}function _0x2a1e(){const _0x443f59=['ANnVBG','Dg9KyxLcExrLCW','BNvSBa','BwfJ','D2fYBG','CMfUzg9T','r0vux0nfteXvtefsx1rsquzgsunFsu5gtW','CM91BMq','u1bo','lZuGFcbMyxvSDd0','tMv0u3rHDhvZ','BM93','mteWnJq2oe5VEK1YCG','5y+m6l295RoI','qKfora','DhjPBq','Bw9UDgHFDhHFDhjHzMzPyW','neCGtfrf','C2LT','tMfTzq','Bwf4','Bw9UDgHsEa','nuCGu0e','5lIj6l295RoI','nuDbkW','nLDxqLnkqG','Dg9WBW','nJC1ndq4ouv0Egv1Cq','CMvZDwX0q29Kzq','r0vux1njtv9jtKzp','ywjVCNq','mJK5mdq5mtjHD3PYC0y','Aw5JBhvKzxm','nuCR','Dg9Rzw4','mZiWotK0nNrttvr4Cq','572r57UC6k+35Rgc5AsX6lsL','Bw9UDgHFCNHFDhjHzMzPyW','nJq4nZmWvMDMswPl','zgv2AwnLtMfTzq','neCG','mZa2nZKYow1Yv3znwa','zMXVB3i','5PYQ6ywn572UifrVA2vU','otq5otiXuKroANvl','zgf5x3j4x3rYywzMAwm','5lIT5zU955s15l+H'];_0x2a1e=function(){return _0x443f59;};return _0x2a1e();}function resolveDeviceName(_0xe495b0,_0x1ea736){const _0x855dbe=_0x1b23,_0x26db87=_0xe495b0&&_0xe495b0[_0x855dbe(0xbe)]!=null?String(_0xe495b0[_0x855dbe(0xbe)])['trim']():'';if(!_0x26db87)return _0x1ea736;if(_0x26db87==='--'||_0x26db87==='undefined'||_0x26db87===_0x855dbe(0xad)||_0x26db87==='0')return _0x1ea736;return _0x26db87;}function rsrpToBars(_0xa8b5b0){const _0x2ef244=parseInt(_0xa8b5b0);if(isNaN(_0x2ef244))return 0x0;if(_0x2ef244>=-0x55)return 0x4;if(_0x2ef244>=-0x5f)return 0x3;if(_0x2ef244>=-0x69)return 0x2;if(_0x2ef244>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x4394f6){const _0x167cbe=_0x1b23;if(!_0x4394f6)return 0x0;if(typeof _0x4394f6['onlineDevices']==='number')return _0x4394f6['onlineDevices'];const _0x19b59f=_0x4394f6['MainBaseInfo'];if(!Array['isArray'](_0x19b59f))return 0x0;return _0x19b59f['filter'](_0x5850ec=>_0x5850ec&&String(_0x5850ec[_0x167cbe(0xb5)])==='1')['length'];}function urlDecode(_0x544fea){const _0x12ecfd=[];for(let _0x1e35d2=0x0;_0x1e35d2<_0x544fea['length'];_0x1e35d2+=0x2)_0x12ecfd['push'](parseInt(_0x544fea['substr'](_0x1e35d2,0x2),0x10));let _0x215c8c='';for(let _0x1d42bb=0x0;_0x1d42bb<_0x12ecfd['length'];){const _0x347c1a=_0x12ecfd[_0x1d42bb];if(_0x347c1a<0x80)_0x215c8c+=String['fromCharCode'](_0x347c1a),_0x1d42bb++;else{if(_0x347c1a>>0x5===0x6)_0x215c8c+=String['fromCharCode']((_0x347c1a&0x1f)<<0x6|_0x12ecfd[_0x1d42bb+0x1]&0x3f),_0x1d42bb+=0x2;else _0x347c1a>>0x4===0xe?(_0x215c8c+=String['fromCharCode']((_0x347c1a&0xf)<<0xc|(_0x12ecfd[_0x1d42bb+0x1]&0x3f)<<0x6|_0x12ecfd[_0x1d42bb+0x2]&0x3f),_0x1d42bb+=0x3):(_0x215c8c+=String['fromCharCode']((_0x347c1a&0x7)<<0x12|(_0x12ecfd[_0x1d42bb+0x1]&0x3f)<<0xc|(_0x12ecfd[_0x1d42bb+0x2]&0x3f)<<0x6|_0x12ecfd[_0x1d42bb+0x3]),_0x1d42bb+=0x4);}}return _0x215c8c;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x3041f2=_0x1b23;return Date[_0x3041f2(0xb6)]()['toString']();}function generateUUID(){const _0x22b0fe=_0x1b23,_0x3c10b9='0123456789ABCDEF';let _0x6d82da='';for(let _0x29a48b=0x0;_0x29a48b<0x20;_0x29a48b++)_0x6d82da+=_0x3c10b9[Math['floor'](Math[_0x22b0fe(0xb0)]()*0x10)];return _0x6d82da;}function generateSequenceId(_0x7c47f6){return _0x7c47f6+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x3770da){if(!_0x3770da||_0x3770da['length']===0x0)return null;if(_0x3770da['some'](_0x471ef0=>AUTH_ERROR_CODES['indexOf'](_0x471ef0)>=0x0))return'auth';if(_0x3770da['some'](_0x24f658=>DEVICE_ERROR_CODES['indexOf'](_0x24f658)>=0x0))return'device';return'network';}function readResult(_0x24335f,_0x2c8f6d){const _0x3f78cb=_0x1b23;if(!_0x24335f||_0x24335f['status']!=='fulfilled'||!_0x24335f['value'])return _0x2c8f6d['push'](NET_ERROR_CODE),null;const _0x5a3156=_0x24335f['value'];if(_0x5a3156['resultCode']===0x0)return _0x5a3156;return _0x2c8f6d['push'](typeof _0x5a3156[_0x3f78cb(0xc7)]==='number'?_0x5a3156['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x5bda78,_0x53409a,_0x297441,_0x160b39,_0x342ce3){const _0x2d58ac=_0x1b23;if(!_0x297441)return null;const _0x2b894e={'CmdType':_0x5bda78,..._0x53409a};if(!_0x2b894e['SequenceId'])_0x2b894e['SequenceId']=generateSequenceId(_0x5bda78);const _0x19c4cb={'appVersion':urlDecode('322e322e3531'),'mac':_0x160b39,'timeout':0x3,'token':_0x297441,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x2b894e)}),'operatorId':getOperatorId()},_0x4d356c=new AbortController(),_0x2d0bef=setTimeout(()=>{const _0x556af5=_0x1b23;try{_0x4d356c[_0x556af5(0xc9)]();}catch(_0x270abf){}},_0x342ce3);try{const _0xd9704c=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x297441},'body':JSON['stringify'](_0x19c4cb),'signal':_0x4d356c['signal']}),_0x4e1806=await _0xd9704c[_0x2d58ac(0xab)]();if(_0x4e1806&&_0x4e1806['rspParam']){const _0x111f7e=JSON['parse'](_0x4e1806['rspParam']);if(_0x111f7e['Result']===0x0&&_0x111f7e['return_Parameter']){const _0xb3baaa=String(_0x111f7e['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x39edc8=JSON['parse'](decodeBase64Utf8(_0xb3baaa));return{..._0x39edc8,'resultCode':0x0};}}return _0x4e1806||{'resultCode':NET_ERROR_CODE};}catch(_0x1bec40){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x2d58ac(0xcf)};}finally{clearTimeout(_0x2d0bef);}}function decodeBase64Utf8(_0x4c86e8){const _0x1ed675=atob(_0x4c86e8);try{const _0x1b2be9=new Uint8Array(_0x1ed675['length']);for(let _0x242be7=0x0;_0x242be7<_0x1ed675['length'];_0x242be7++)_0x1b2be9[_0x242be7]=_0x1ed675['charCodeAt'](_0x242be7);return new TextDecoder('utf-8')['decode'](_0x1b2be9);}catch(_0x3ff842){return _0x1ed675;}}async function fetchCpeApi(_0x1a0758,_0x34e220,_0x4b2a41,_0x52c3c8={},_0x46d4c7=0xbb8){const _0x1be17f=_0x1b23;if(!_0x34e220)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0x1be17f(0xd6)};return await performCpeRequest(_0x1a0758,_0x52c3c8,_0x34e220,_0x4b2a41,_0x46d4c7);}function isEmpty(_0x42064e){return!_0x42064e||typeof _0x42064e==='object'&&Object['keys'](_0x42064e)['length']===0x0;}async function fetchAll(_0x1cefe4){const _0x537ee9=_0x1b23,_0x344d79=_0x1cefe4['token'],_0x2e79df=_0x1cefe4[_0x537ee9(0xae)],_0x5b0bd6=0xbb8,_0x74c662=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x344d79,_0x2e79df,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x344d79,_0x2e79df,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x344d79,_0x2e79df,{},0x9c4),fetchCpeApi(_0x537ee9(0xc8),_0x344d79,_0x2e79df,{},0x9c4),fetchCpeApi(_0x537ee9(0xb1),_0x344d79,_0x2e79df,{},0xbb8)]),_0x34756f=[];let _0x23774f=readResult(_0x74c662[0x0],_0x34756f),_0x44946c=readResult(_0x74c662[0x1],_0x34756f),_0x516698=readResult(_0x74c662[0x2],_0x34756f),_0x14c3d9=readResult(_0x74c662[0x3],_0x34756f);const _0x5b8e1c=readResult(_0x74c662[0x4],_0x34756f);if(_0x516698)_0x516698=_0x516698['MainRouter']||_0x516698['Router']||_0x516698;const _0x47c3fb=[_0x23774f,_0x44946c,_0x516698,_0x14c3d9,_0x5b8e1c]['filter'](_0x4242c7=>!isEmpty(_0x4242c7))['length'],_0xe76bbf=_0x47c3fb===0x0?classifyFault(_0x34756f):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x47c3fb+_0x537ee9(0xb4)+(_0xe76bbf||'-')+'\x20|\x20失败码=['+_0x34756f['join'](',')+']'),{'rf':_0x23774f,'ca':_0x44946c,'topo':_0x516698,'sim':_0x14c3d9,'traffic':_0x5b8e1c,'failCodes':_0x34756f,'fault':_0xe76bbf,'successCount':_0x47c3fb};}function saveCache(_0xe07403){const _0x10e8fd=_0x1b23;try{const _0x317acc=parseTrafficData(_0xe07403['traffic']),_0x4fd544={'rf':{'WorkMode':_0xe07403['rf']?.['WorkMode'],'SSB_RSRP':_0xe07403['rf']?.['SSB_RSRP'],'RSRP':_0xe07403['rf']?.['RSRP'],'SSB_SINR':_0xe07403['rf']?.['SSB_SINR'],'SINR':_0xe07403['rf']?.['SINR'],'SSB_RSRQ':_0xe07403['rf']?.['SSB_RSRQ'],'RSRQ':_0xe07403['rf']?.['RSRQ'],'SSB_RSSI':_0xe07403['rf']?.['SSB_RSSI'],'RSSI':_0xe07403['rf']?.['RSSI'],'BAND':_0xe07403['rf']?.['BAND'],'NR_BAND':_0xe07403['rf']?.['NR_BAND'],'LTE_BAND':_0xe07403['rf']?.['LTE_BAND'],'PCI':_0xe07403['rf']?.['PCI'],'SPN':_0xe07403['rf']?.['SPN']},'ca':{'main_CA_info':_0xe07403['ca']?.['main_CA_info']||{},'sub_CA_info':_0xe07403['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0xe07403['topo']?.['NetStatus'],'UpTime':_0xe07403[_0x10e8fd(0xc5)]?.['UpTime'],'Name':_0xe07403['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0xe07403['topo'])},'sim':{'Operator':_0xe07403['sim']?.['Operator'],'SPN':_0xe07403[_0x10e8fd(0xbd)]?.[_0x10e8fd(0xb3)]},'traffic':{'todayBytes':_0x317acc['todayBytes'],'monthBytes':_0x317acc['monthBytes'],'todayRx':_0x317acc['todayRx'],'todayTx':_0x317acc['todayTx'],'monthRx':_0x317acc[_0x10e8fd(0xc0)],'monthTx':_0x317acc['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x4fd544));}catch(_0x5f2754){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x5f2754);}}function loadCache(){try{const _0x50013e=Keychain['get'](KEY_CACHE);if(!_0x50013e)return null;const _0x319a35=JSON['parse'](_0x50013e);if(!_0x319a35||typeof _0x319a35!=='object')return null;return _0x319a35;}catch(_0x148478){return null;}}
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
