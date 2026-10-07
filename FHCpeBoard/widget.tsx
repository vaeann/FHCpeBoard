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

const _0x4f62f0=_0x2213;(function(_0x262dac,_0xbd9068){const _0x2d9e94=_0x2213,_0x895c54=_0x262dac();while(!![]){try{const _0x1fe703=-parseInt(_0x2d9e94(0x195))/0x1+-parseInt(_0x2d9e94(0x1a0))/0x2+-parseInt(_0x2d9e94(0x19a))/0x3*(-parseInt(_0x2d9e94(0x194))/0x4)+-parseInt(_0x2d9e94(0x18c))/0x5*(parseInt(_0x2d9e94(0x1ad))/0x6)+-parseInt(_0x2d9e94(0x1b9))/0x7+parseInt(_0x2d9e94(0x1b4))/0x8*(parseInt(_0x2d9e94(0x19b))/0x9)+parseInt(_0x2d9e94(0x1b5))/0xa;if(_0x1fe703===_0xbd9068)break;else _0x895c54['push'](_0x895c54['shift']());}catch(_0x448673){_0x895c54['push'](_0x895c54['shift']());}}}(_0x19a5,0xcb5f1));const TOKEN_KEY=_0x4f62f0(0x19f),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x4f62f0(0x1b1),DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x10be4f,_0x51b798){try{const _0x1875d8=Keychain['get'](_0x10be4f);return _0x1875d8===null||_0x1875d8===undefined||_0x1875d8===''?_0x51b798:String(_0x1875d8)['trim']();}catch(_0x19c505){return _0x51b798;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x133432){const _0x45a94e=_0x4f62f0;try{if(_0x133432[_0x45a94e(0x1b3)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x133432['token'])['trim']());if(_0x133432['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x133432[_0x45a94e(0x1ba)])['trim']()||DEFAULT_MAC);if(_0x133432['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x133432['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x450683){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x450683);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x1908fc,_0x554eb1){if(_0x1908fc===undefined||_0x1908fc===null||_0x1908fc==='')return _0x554eb1;const _0x842cb7=String(_0x1908fc)['trim']();return _0x842cb7==='-'||_0x842cb7==='undefined'?_0x554eb1:_0x842cb7;}function firstValid(_0x43f140,_0x4c8674){for(const _0x4840b0 of _0x43f140){const _0x3d24fb=getValidValue(_0x4840b0,'');if(_0x3d24fb)return _0x3d24fb;}return _0x4c8674;}function resolveOperator(_0x4ed93e,_0x2a0d23){const _0x149c4d=_0x4f62f0,_0x2c5b63=getOperatorName(_0x2a0d23&&_0x2a0d23[_0x149c4d(0x1bd)]||'',_0x2a0d23&&_0x2a0d23['SPN']||'');if(_0x2c5b63==='未知'&&_0x4ed93e&&_0x4ed93e['SPN'])return String(_0x4ed93e[_0x149c4d(0x1b6)]);return _0x2c5b63;}function formatUptime(_0x2a6da4){const _0x212e2c=parseInt(_0x2a6da4||0x0)||0x0,_0x587fc2=Math['floor'](_0x212e2c/0x15180),_0xfc7796=Math['floor'](_0x212e2c%0x15180/0xe10),_0x1a5a3c=Math['floor'](_0x212e2c%0xe10/0x3c),_0x20ea26=[];if(_0x587fc2>0x0)_0x20ea26['push'](_0x587fc2+'天');if(_0xfc7796>0x0||_0x587fc2>0x0)_0x20ea26['push'](_0xfc7796+'小时');return _0x20ea26['push'](_0x1a5a3c+'分'),_0x20ea26['join']('\x20');}function formatUptimeShort(_0x15f0a1){const _0x2a76ff=parseInt(_0x15f0a1||0x0)||0x0,_0x3ddf77=Math['floor'](_0x2a76ff/0x15180),_0x51fd34=Math['floor'](_0x2a76ff%0x15180/0xe10),_0x2dfc4d=Math['floor'](_0x2a76ff%0xe10/0x3c),_0xfa6bc1=[];if(_0x3ddf77>0x0)_0xfa6bc1['push'](_0x3ddf77+'天');if(_0x51fd34>0x0||_0x3ddf77>0x0)_0xfa6bc1['push'](_0x51fd34+'时');return _0xfa6bc1['push'](_0x2dfc4d+'分'),_0xfa6bc1['join']('');}function trafficMbToBytes(_0x2a3e1c){const _0x5a752a=parseFloat(_0x2a3e1c||0x0);if(isNaN(_0x5a752a))return 0x0;return Math['round'](_0x5a752a*0x400*0x400);}function formatTraffic(_0x390044){const _0x131aeb=Number(_0x390044||0x0);if(!isFinite(_0x131aeb)||_0x131aeb<=0x0)return'0M';const _0x2ea15e=0x400*0x400,_0x2947be=0x400*_0x2ea15e;if(_0x131aeb>=_0x2947be)return(_0x131aeb/_0x2947be)['toFixed'](0x1)+'G';return(_0x131aeb/_0x2ea15e)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x373db9){const _0x1721ce=Number(_0x373db9||0x0);if(!isFinite(_0x1721ce)||_0x1721ce<=0x0)return'0';const _0x3c7f3f=0x400,_0x436857=0x400*_0x3c7f3f,_0xa964ed=0x400*_0x436857;if(_0x1721ce>=_0xa964ed){const _0x522c95=_0x1721ce/_0xa964ed;return(_0x522c95>=0x64?_0x522c95['toFixed'](0x0):_0x522c95['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x1721ce>=_0x436857)return Math['round'](_0x1721ce/_0x436857)+'M';if(_0x1721ce>=_0x3c7f3f)return Math['round'](_0x1721ce/_0x3c7f3f)+'K';return String(Math['round'](_0x1721ce));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x37aaf1){const _0x1507fa=_0x4f62f0;if(!_0x37aaf1)return ZERO_TRAFFIC;const _0x142f1f=_0x37aaf1['day_rx_traffic']!==undefined||_0x37aaf1['day_tx_traffic']!==undefined||_0x37aaf1[_0x1507fa(0x1a1)]!==undefined||_0x37aaf1['month_tx_traffic']!==undefined;if(!_0x142f1f)return{'todayBytes':Number(_0x37aaf1[_0x1507fa(0x19c)])||0x0,'monthBytes':Number(_0x37aaf1[_0x1507fa(0x198)])||0x0,'todayRx':Number(_0x37aaf1['todayRx'])||0x0,'todayTx':Number(_0x37aaf1['todayTx'])||0x0,'monthRx':Number(_0x37aaf1[_0x1507fa(0x192)])||0x0,'monthTx':Number(_0x37aaf1[_0x1507fa(0x1a3)])||0x0};const _0x306373=trafficMbToBytes(_0x37aaf1['day_rx_traffic']),_0xf59ea3=trafficMbToBytes(_0x37aaf1['day_tx_traffic']),_0x45a5cb=trafficMbToBytes(_0x37aaf1[_0x1507fa(0x1a1)]),_0x9ef91f=trafficMbToBytes(_0x37aaf1['month_tx_traffic']);return{'todayBytes':_0x306373+_0xf59ea3,'monthBytes':_0x45a5cb+_0x9ef91f,'todayRx':_0x306373,'todayTx':_0xf59ea3,'monthRx':_0x45a5cb,'monthTx':_0x9ef91f};}function trafficRxRatio(_0x1a76b6,_0xf35ee4){const _0xd7d76f=Number(_0x1a76b6||0x0)+Number(_0xf35ee4||0x0);if(!isFinite(_0xd7d76f)||_0xd7d76f<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x1a76b6||0x0)/_0xd7d76f));}function getOperatorName(_0x27b31d,_0x215cde){const _0x2c315b=_0x4f62f0;if(!_0x27b31d)return _0x215cde||'未知';const _0x24d7be=String(_0x27b31d)['toUpperCase']();if(_0x24d7be['includes']('CMCC')||_0x24d7be==='中国移动'||_0x24d7be['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x24d7be[_0x2c315b(0x1a7)]('CUCC')||_0x24d7be==='中国联通'||_0x24d7be['includes']('CHINA\x20UNICOM')||_0x24d7be[_0x2c315b(0x1a7)]('UNICOM'))return _0x2c315b(0x1a6);if(_0x24d7be['includes']('CTCC')||_0x24d7be==='CT'||_0x24d7be==='中国电信'||_0x24d7be['includes']('CHINA\x20TELECOM')||_0x24d7be['includes']('TELECOM'))return'中国电信';if(_0x24d7be[_0x2c315b(0x1a7)]('CBN')||_0x24d7be==='中国广电'||_0x24d7be['includes']('CHINA\x20BROADCAST'))return _0x2c315b(0x1af);return _0x27b31d;}function getSignalColor(_0x19bca7,_0x13f4ff){let _0x9433a0=parseInt(_0x19bca7);if(isNaN(_0x9433a0))_0x9433a0=-0x78;if(_0x9433a0>-0x59)return _0x13f4ff['ok'];if(_0x9433a0>-0x63)return _0x13f4ff['warn'];return _0x13f4ff['bad'];}function getSinrColor(_0x4e17e7,_0x4d1c1a){const _0x3704aa=_0x4f62f0;let _0x1d10e6=parseFloat(_0x4e17e7);if(isNaN(_0x1d10e6))_0x1d10e6=0x0;if(_0x1d10e6>0xf)return _0x4d1c1a['ok'];if(_0x1d10e6>0x8)return _0x4d1c1a[_0x3704aa(0x1ae)];return _0x4d1c1a['bad'];}function getAllBands(_0x28182a,_0x268510,_0x2cef2a){const _0x5e99b5=_0x4f62f0,_0x428e42=[],_0x38909f=_0x2cef2a?'N':'B',_0x3cf652=getValidValue(_0x28182a?.['BAND']||_0x28182a?.['NR_BAND']||_0x28182a?.['LTE_BAND'],'');if(_0x3cf652)_0x428e42['push'](_0x38909f+_0x3cf652);for(const _0x22f246 of _0x268510?.[_0x5e99b5(0x1bb)]||[]){const _0x333d35=String(_0x22f246?.['Band']||'');if(_0x333d35&&_0x333d35!=='-')_0x428e42['push'](_0x38909f+_0x333d35);}if(_0x428e42['length']===0x0)_0x428e42['push'](_0x2cef2a?'N78':'B3');return _0x428e42;}function getCaBadgeText(_0xb90e5c,_0x36eaa7,_0x280b60){const _0x59672a=_0x4f62f0,_0x4b8bcc=(_0x36eaa7?'5G\x20':'4G\x20')+_0x280b60;if(!_0x36eaa7)return _0x4b8bcc;const _0x514c31=0x1+(_0xb90e5c&&_0xb90e5c['sub_CA_info']||[])['length'];if(_0x514c31>=0x4)return'5GA+';if(_0x514c31===0x3)return _0x59672a(0x193);if(_0x514c31===0x2)return'5G+';return _0x4b8bcc;}function getCarrierCountText(_0x4907a6){const _0x498f4f=_0x4f62f0,_0x3add61=(_0x4907a6&&_0x4907a6['sub_CA_info']||[])['length'];if(_0x3add61===0x0)return'单载波';if(_0x3add61===0x1)return'双载波';if(_0x3add61===0x2)return _0x498f4f(0x1a2);return'四载波';}function getNetworkModeText(_0x3c213,_0xd98024,_0x108e86){const _0x1d18e3=_0x4f62f0,_0x3d5ebd=String(_0x108e86||'')['toUpperCase']();if(!_0xd98024){if(!_0x3d5ebd||_0x3d5ebd==='4G'||_0x3d5ebd==='LTE')return'4G\x20LTE';return'4G\x20'+_0x3d5ebd;}const _0x77b4f9=0x1+(_0x3c213&&_0x3c213['sub_CA_info']||[])['length'];if(_0x77b4f9>=0x4)return'5GA+';if(_0x77b4f9===0x3)return'5GA';if(_0x77b4f9===0x2)return'5G+';return _0x3d5ebd?'5G\x20'+_0x3d5ebd:_0x1d18e3(0x1ac);}function rsrpToPercent(_0x5df20d){const _0x49e6bc=_0x4f62f0;let _0x2711c9=parseInt(_0x5df20d);if(isNaN(_0x2711c9))_0x2711c9=-0x78;const _0xd2abf3=Math['min'](-0x46,Math['max'](-0x78,_0x2711c9)),_0x15ebf3=(_0xd2abf3+0x78)/0x32;return Math['min'](0x64,Math[_0x49e6bc(0x1a8)](0xa,0xa+_0x15ebf3*0x5a));}function sinrToPercent(_0x298f6d){let _0x2a5a39=parseFloat(_0x298f6d);if(isNaN(_0x2a5a39))_0x2a5a39=0x0;return Math['min'](0x64,Math['max'](0x0,_0x2a5a39/0x19*0x64));}function resolveDeviceName(_0x3e9b31,_0x5c7308){const _0x22dcec=_0x3e9b31&&_0x3e9b31['Name']!=null?String(_0x3e9b31['Name'])['trim']():'';if(!_0x22dcec)return _0x5c7308;if(_0x22dcec==='--'||_0x22dcec==='undefined'||_0x22dcec==='null'||_0x22dcec==='0')return _0x5c7308;return _0x22dcec;}function _0x19a5(){const _0x277b1e=['Bwf4','CMvWBgfJzq','C29Tzq','Dg9WBW','nuCGu0e','nLP3qLzvta','D2fYBG','5lIT5zU95BM/55s1','CMvZDwX0q29Kzq','q1bfx1DjreDfvf9dqunirq','ANnVBG','Dg9Rzw4','mtG0nduWnhzZEhb0wq','mZy1mdC5odbvyuHMs2e','u1bo','572r57UC6k+35Rgc5AsX6lsL','Aw5KzxHpzG','mJC4odCXnKXVuvLPrq','BwfJ','C3vIx0nbx2LUzM8','tLjFqKfora','t3bLCMf0B3i','zNjVBunOyxjdB2rL','nZi3mZG1zLDfrwLH','uLnsuq','nZq2ntCYnMq2otzLnJe2yW','C2v0','tfrfx0jbtKq','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','Bw9UDgHsEa','nuDb','ng5gqxH3tG','mte3nZCYovLwuvDXBq','A2v5CW','twfPBLjVDxrLCG','Bw9UDgHcExrLCW','CNnWugfYyw0','nde5ote2rKPABuzs','ovDNBKfPsa','Dg9KyxLcExrLCW','ywjVCNq','Dg9KyxLsEa','q1bfx1rps0vo','mJKZmZq2mfDWC25dua','Bw9UDgHFCNHFDhjHzMzPyW','5lIj6l295RoI','Bw9UDgHuEa','uM91DgvY','C2LT','5lIT5zU96igu6ycA','Aw5JBhvKzxm'];_0x19a5=function(){return _0x277b1e;};return _0x19a5();}function rsrpToBars(_0x123cee){const _0x45c286=parseInt(_0x123cee);if(isNaN(_0x45c286))return 0x0;if(_0x45c286>=-0x55)return 0x4;if(_0x45c286>=-0x5f)return 0x3;if(_0x45c286>=-0x69)return 0x2;if(_0x45c286>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x5a2b2a){if(!_0x5a2b2a)return 0x0;if(typeof _0x5a2b2a['onlineDevices']==='number')return _0x5a2b2a['onlineDevices'];const _0x902227=_0x5a2b2a['MainBaseInfo'];if(!Array['isArray'](_0x902227))return 0x0;return _0x902227['filter'](_0x4ab8e6=>_0x4ab8e6&&String(_0x4ab8e6['NetStatus'])==='1')['length'];}function urlDecode(_0x51f38c){const _0xe0eb7b=_0x4f62f0,_0x50e666=[];for(let _0x54b657=0x0;_0x54b657<_0x51f38c['length'];_0x54b657+=0x2)_0x50e666['push'](parseInt(_0x51f38c['substr'](_0x54b657,0x2),0x10));let _0x342e11='';for(let _0x47c8a7=0x0;_0x47c8a7<_0x50e666['length'];){const _0x47b858=_0x50e666[_0x47c8a7];if(_0x47b858<0x80)_0x342e11+=String[_0xe0eb7b(0x18b)](_0x47b858),_0x47c8a7++;else{if(_0x47b858>>0x5===0x6)_0x342e11+=String['fromCharCode']((_0x47b858&0x1f)<<0x6|_0x50e666[_0x47c8a7+0x1]&0x3f),_0x47c8a7+=0x2;else _0x47b858>>0x4===0xe?(_0x342e11+=String['fromCharCode']((_0x47b858&0xf)<<0xc|(_0x50e666[_0x47c8a7+0x1]&0x3f)<<0x6|_0x50e666[_0x47c8a7+0x2]&0x3f),_0x47c8a7+=0x3):(_0x342e11+=String[_0xe0eb7b(0x18b)]((_0x47b858&0x7)<<0x12|(_0x50e666[_0x47c8a7+0x1]&0x3f)<<0xc|(_0x50e666[_0x47c8a7+0x2]&0x3f)<<0x6|_0x50e666[_0x47c8a7+0x3]),_0x47c8a7+=0x4);}}return _0x342e11;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function _0x2213(_0x56a29a,_0x1eac1e){const _0x19a52d=_0x19a5();return _0x2213=function(_0x2213e7,_0x2d7c63){_0x2213e7=_0x2213e7-0x18b;let _0x45cdad=_0x19a52d[_0x2213e7];if(_0x2213['SwXuGq']===undefined){var _0x4c3820=function(_0x10be4f){const _0x51b798='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1875d8='',_0x19c505='';for(let _0x133432=0x0,_0x450683,_0x1908fc,_0x554eb1=0x0;_0x1908fc=_0x10be4f['charAt'](_0x554eb1++);~_0x1908fc&&(_0x450683=_0x133432%0x4?_0x450683*0x40+_0x1908fc:_0x1908fc,_0x133432++%0x4)?_0x1875d8+=String['fromCharCode'](0xff&_0x450683>>(-0x2*_0x133432&0x6)):0x0){_0x1908fc=_0x51b798['indexOf'](_0x1908fc);}for(let _0x842cb7=0x0,_0x43f140=_0x1875d8['length'];_0x842cb7<_0x43f140;_0x842cb7++){_0x19c505+='%'+('00'+_0x1875d8['charCodeAt'](_0x842cb7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x19c505);};_0x2213['tWCtCs']=_0x4c3820,_0x56a29a=arguments,_0x2213['SwXuGq']=!![];}const _0x647b52=_0x19a52d[0x0],_0x11d21e=_0x2213e7+_0x647b52,_0x161ee1=_0x56a29a[_0x11d21e];return!_0x161ee1?(_0x45cdad=_0x2213['tWCtCs'](_0x45cdad),_0x56a29a[_0x11d21e]=_0x45cdad):_0x45cdad=_0x161ee1,_0x45cdad;},_0x2213(_0x56a29a,_0x1eac1e);}function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x3d9e84='0123456789ABCDEF';let _0x3007e8='';for(let _0x123b9c=0x0;_0x123b9c<0x20;_0x123b9c++)_0x3007e8+=_0x3d9e84[Math['floor'](Math['random']()*0x10)];return _0x3007e8;}function generateSequenceId(_0x3958b0){return _0x3958b0+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x5e43ff){const _0x46fa4b=_0x4f62f0;if(!_0x5e43ff||_0x5e43ff['length']===0x0)return null;if(_0x5e43ff[_0x46fa4b(0x1aa)](_0x2ada3f=>AUTH_ERROR_CODES['indexOf'](_0x2ada3f)>=0x0))return'auth';if(_0x5e43ff['some'](_0x46bd7a=>DEVICE_ERROR_CODES[_0x46fa4b(0x1b8)](_0x46bd7a)>=0x0))return'device';return'network';}function readResult(_0x1e9a64,_0x3e950c){const _0x24f1a2=_0x4f62f0;if(!_0x1e9a64||_0x1e9a64['status']!=='fulfilled'||!_0x1e9a64['value'])return _0x3e950c['push'](NET_ERROR_CODE),null;const _0x5758d0=_0x1e9a64['value'];if(_0x5758d0[_0x24f1a2(0x1b0)]===0x0)return _0x5758d0;return _0x3e950c['push'](typeof _0x5758d0['resultCode']==='number'?_0x5758d0['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x231fc8,_0x201dce,_0x3b25dd,_0x27c17f,_0x2e1ead){const _0x3cec32=_0x4f62f0;if(!_0x3b25dd)return null;const _0xc6efac={'CmdType':_0x231fc8,..._0x201dce};if(!_0xc6efac['SequenceId'])_0xc6efac['SequenceId']=generateSequenceId(_0x231fc8);const _0x50dd68={'appVersion':urlDecode('322e322e3531'),'mac':_0x27c17f,'timeout':0x3,'token':_0x3b25dd,'appType':urlDecode(_0x3cec32(0x18e)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0xc6efac)}),'operatorId':getOperatorId()},_0x5aaa05=new AbortController(),_0x366317=setTimeout(()=>{const _0x7c8f64=_0x3cec32;try{_0x5aaa05[_0x7c8f64(0x19d)]();}catch(_0x471755){}},_0x2e1ead);try{const _0x393ae6=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x3b25dd},'body':JSON['stringify'](_0x50dd68),'signal':_0x5aaa05['signal']}),_0xefcc39=await _0x393ae6[_0x3cec32(0x1b2)]();if(_0xefcc39&&_0xefcc39[_0x3cec32(0x199)]){const _0xf1dc6d=JSON['parse'](_0xefcc39['rspParam']);if(_0xf1dc6d['Result']===0x0&&_0xf1dc6d['return_Parameter']){const _0x58268c=String(_0xf1dc6d['return_Parameter'])['replace'](/\\\//g,'/')[_0x3cec32(0x1a9)](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x31e8c9=JSON['parse'](decodeBase64Utf8(_0x58268c));return{..._0x31e8c9,'resultCode':0x0};}}return _0xefcc39||{'resultCode':NET_ERROR_CODE};}catch(_0xed989f){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x3cec32(0x1b7)};}finally{clearTimeout(_0x366317);}}function decodeBase64Utf8(_0x5c963c){const _0xf4b424=atob(_0x5c963c);try{const _0x1998f3=new Uint8Array(_0xf4b424['length']);for(let _0x55bcda=0x0;_0x55bcda<_0xf4b424['length'];_0x55bcda++)_0x1998f3[_0x55bcda]=_0xf4b424['charCodeAt'](_0x55bcda);return new TextDecoder('utf-8')['decode'](_0x1998f3);}catch(_0x30eb83){return _0xf4b424;}}async function fetchCpeApi(_0x45d981,_0x227772,_0x44f032,_0x271061={},_0x226d47=0xbb8){if(!_0x227772)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x45d981,_0x271061,_0x227772,_0x44f032,_0x226d47);}function isEmpty(_0x1c3dcc){const _0x1a0fdd=_0x4f62f0;return!_0x1c3dcc||typeof _0x1c3dcc==='object'&&Object[_0x1a0fdd(0x196)](_0x1c3dcc)['length']===0x0;}async function fetchAll(_0x387f73){const _0x3199de=_0x4f62f0,_0x19cc2a=_0x387f73['token'],_0x2cb08=_0x387f73['mac'],_0x59567c=0xbb8,_0x43e4c3=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x19cc2a,_0x2cb08,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x19cc2a,_0x2cb08,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x19cc2a,_0x2cb08,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x19cc2a,_0x2cb08,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x19cc2a,_0x2cb08,{},0xbb8)]),_0x1ed8de=[];let _0x201256=readResult(_0x43e4c3[0x0],_0x1ed8de),_0x2f7022=readResult(_0x43e4c3[0x1],_0x1ed8de),_0x2c7092=readResult(_0x43e4c3[0x2],_0x1ed8de),_0x3b5c22=readResult(_0x43e4c3[0x3],_0x1ed8de);const _0x3712d0=readResult(_0x43e4c3[0x4],_0x1ed8de);if(_0x2c7092)_0x2c7092=_0x2c7092[_0x3199de(0x197)]||_0x2c7092[_0x3199de(0x1a4)]||_0x2c7092;const _0x3a29bc=[_0x201256,_0x2f7022,_0x2c7092,_0x3b5c22,_0x3712d0]['filter'](_0x3f8eaa=>!isEmpty(_0x3f8eaa))['length'],_0x253038=_0x3a29bc===0x0?classifyFault(_0x1ed8de):null;return console['log'](_0x3199de(0x191)+_0x3a29bc+'/5\x20|\x20fault='+(_0x253038||'-')+'\x20|\x20失败码=['+_0x1ed8de['join'](',')+']'),{'rf':_0x201256,'ca':_0x2f7022,'topo':_0x2c7092,'sim':_0x3b5c22,'traffic':_0x3712d0,'failCodes':_0x1ed8de,'fault':_0x253038,'successCount':_0x3a29bc};}function saveCache(_0x4d5226){const _0x57d640=_0x4f62f0;try{const _0x4de290=parseTrafficData(_0x4d5226['traffic']),_0x2381ba={'rf':{'WorkMode':_0x4d5226['rf']?.['WorkMode'],'SSB_RSRP':_0x4d5226['rf']?.['SSB_RSRP'],'RSRP':_0x4d5226['rf']?.['RSRP'],'SSB_SINR':_0x4d5226['rf']?.['SSB_SINR'],'SINR':_0x4d5226['rf']?.['SINR'],'SSB_RSRQ':_0x4d5226['rf']?.['SSB_RSRQ'],'RSRQ':_0x4d5226['rf']?.[_0x57d640(0x18d)],'SSB_RSSI':_0x4d5226['rf']?.['SSB_RSSI'],'RSSI':_0x4d5226['rf']?.['RSSI'],'BAND':_0x4d5226['rf']?.['BAND'],'NR_BAND':_0x4d5226['rf']?.[_0x57d640(0x1bc)],'LTE_BAND':_0x4d5226['rf']?.[_0x57d640(0x190)],'PCI':_0x4d5226['rf']?.['PCI'],'SPN':_0x4d5226['rf']?.['SPN']},'ca':{'main_CA_info':_0x4d5226['ca']?.['main_CA_info']||{},'sub_CA_info':_0x4d5226['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x4d5226['topo']?.['NetStatus'],'UpTime':_0x4d5226[_0x57d640(0x1ab)]?.['UpTime'],'Name':_0x4d5226['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x4d5226['topo'])},'sim':{'Operator':_0x4d5226[_0x57d640(0x1a5)]?.['Operator'],'SPN':_0x4d5226['sim']?.['SPN']},'traffic':{'todayBytes':_0x4de290['todayBytes'],'monthBytes':_0x4de290['monthBytes'],'todayRx':_0x4de290[_0x57d640(0x19e)],'todayTx':_0x4de290['todayTx'],'monthRx':_0x4de290['monthRx'],'monthTx':_0x4de290['monthTx']},'ts':Date['now']()};Keychain[_0x57d640(0x18f)](KEY_CACHE,JSON['stringify'](_0x2381ba));}catch(_0x237ecc){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x237ecc);}}function loadCache(){try{const _0x14d220=Keychain['get'](KEY_CACHE);if(!_0x14d220)return null;const _0x194582=JSON['parse'](_0x14d220);if(!_0x194582||typeof _0x194582!=='object')return null;return _0x194582;}catch(_0x192799){return null;}}
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
