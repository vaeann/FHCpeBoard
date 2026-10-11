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

(function(_0x57e217,_0x4cd75d){const _0x3415f0=_0x1e52,_0x13853d=_0x57e217();while(!![]){try{const _0x532db0=parseInt(_0x3415f0(0x79))/0x1*(-parseInt(_0x3415f0(0x9d))/0x2)+-parseInt(_0x3415f0(0x93))/0x3+parseInt(_0x3415f0(0x98))/0x4*(parseInt(_0x3415f0(0x7b))/0x5)+-parseInt(_0x3415f0(0x97))/0x6*(parseInt(_0x3415f0(0xa8))/0x7)+-parseInt(_0x3415f0(0x85))/0x8+-parseInt(_0x3415f0(0x95))/0x9+parseInt(_0x3415f0(0x9b))/0xa;if(_0x532db0===_0x4cd75d)break;else _0x13853d['push'](_0x13853d['shift']());}catch(_0x3d200f){_0x13853d['push'](_0x13853d['shift']());}}}(_0x5460,0x391be));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4c0178,_0x5f6a4b){try{const _0x397857=Keychain['get'](_0x4c0178);return _0x397857===null||_0x397857===undefined||_0x397857===''?_0x5f6a4b:String(_0x397857)['trim']();}catch(_0x25f11a){return _0x5f6a4b;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x67dbb6){const _0x51d83a=_0x1e52;try{if(_0x67dbb6[_0x51d83a(0x8f)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x67dbb6['token'])['trim']());if(_0x67dbb6['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x67dbb6['mac'])[_0x51d83a(0x9c)]()||DEFAULT_MAC);if(_0x67dbb6['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x67dbb6['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x28ee5f){console[_0x51d83a(0x8a)]('⚠️\x20保存设置失败\x20|\x20'+_0x28ee5f);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0xa1241f,_0x2a00ed){const _0x4e77cb=_0x1e52;if(_0xa1241f===undefined||_0xa1241f===null||_0xa1241f==='')return _0x2a00ed;const _0x2b20d7=String(_0xa1241f)['trim']();return _0x2b20d7==='-'||_0x2b20d7===_0x4e77cb(0x8e)?_0x2a00ed:_0x2b20d7;}function firstValid(_0x17474b,_0xc67027){for(const _0x269bf0 of _0x17474b){const _0x2bdb94=getValidValue(_0x269bf0,'');if(_0x2bdb94)return _0x2bdb94;}return _0xc67027;}function resolveOperator(_0x2ca62f,_0x3b7fe9){const _0x4090cb=getOperatorName(_0x3b7fe9&&_0x3b7fe9['Operator']||'',_0x3b7fe9&&_0x3b7fe9['SPN']||'');if(_0x4090cb==='未知'&&_0x2ca62f&&_0x2ca62f['SPN'])return String(_0x2ca62f['SPN']);return _0x4090cb;}function formatUptime(_0x478a39){const _0x19d101=_0x1e52,_0x2aac22=parseInt(_0x478a39||0x0)||0x0,_0x41f933=Math['floor'](_0x2aac22/0x15180),_0x1e65f7=Math['floor'](_0x2aac22%0x15180/0xe10),_0x204141=Math['floor'](_0x2aac22%0xe10/0x3c),_0x4fb0d8=[];if(_0x41f933>0x0)_0x4fb0d8['push'](_0x41f933+'天');if(_0x1e65f7>0x0||_0x41f933>0x0)_0x4fb0d8[_0x19d101(0x7f)](_0x1e65f7+'小时');return _0x4fb0d8['push'](_0x204141+'分'),_0x4fb0d8['join']('\x20');}function formatUptimeShort(_0x1cfae0){const _0x221cb6=_0x1e52,_0x2c9f1f=parseInt(_0x1cfae0||0x0)||0x0,_0x25a141=Math[_0x221cb6(0x88)](_0x2c9f1f/0x15180),_0x23c471=Math['floor'](_0x2c9f1f%0x15180/0xe10),_0x45c812=Math['floor'](_0x2c9f1f%0xe10/0x3c),_0x361de4=[];if(_0x25a141>0x0)_0x361de4['push'](_0x25a141+'天');if(_0x23c471>0x0||_0x25a141>0x0)_0x361de4['push'](_0x23c471+'时');return _0x361de4['push'](_0x45c812+'分'),_0x361de4['join']('');}function trafficMbToBytes(_0xad95cf){const _0x36456c=parseFloat(_0xad95cf||0x0);if(isNaN(_0x36456c))return 0x0;return Math['round'](_0x36456c*0x400*0x400);}function formatTraffic(_0x19dfea){const _0x5a62e3=Number(_0x19dfea||0x0);if(!isFinite(_0x5a62e3)||_0x5a62e3<=0x0)return'0M';const _0x3bd672=0x400*0x400,_0x48f73c=0x400*_0x3bd672;if(_0x5a62e3>=_0x48f73c)return(_0x5a62e3/_0x48f73c)['toFixed'](0x1)+'G';return(_0x5a62e3/_0x3bd672)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x132d3b){const _0x2bb706=_0x1e52,_0x18b01c=Number(_0x132d3b||0x0);if(!isFinite(_0x18b01c)||_0x18b01c<=0x0)return'0';const _0x5806be=0x400,_0x418448=0x400*_0x5806be,_0x33b0ad=0x400*_0x418448;if(_0x18b01c>=_0x33b0ad){const _0x1c60de=_0x18b01c/_0x33b0ad;return(_0x1c60de>=0x64?_0x1c60de[_0x2bb706(0xa4)](0x0):_0x1c60de['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x18b01c>=_0x418448)return Math['round'](_0x18b01c/_0x418448)+'M';if(_0x18b01c>=_0x5806be)return Math[_0x2bb706(0x99)](_0x18b01c/_0x5806be)+'K';return String(Math['round'](_0x18b01c));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x3b3c22){const _0x1930d1=_0x1e52;if(!_0x3b3c22)return ZERO_TRAFFIC;const _0x59242f=_0x3b3c22['day_rx_traffic']!==undefined||_0x3b3c22['day_tx_traffic']!==undefined||_0x3b3c22['month_rx_traffic']!==undefined||_0x3b3c22['month_tx_traffic']!==undefined;if(!_0x59242f)return{'todayBytes':Number(_0x3b3c22[_0x1930d1(0x96)])||0x0,'monthBytes':Number(_0x3b3c22['monthBytes'])||0x0,'todayRx':Number(_0x3b3c22['todayRx'])||0x0,'todayTx':Number(_0x3b3c22['todayTx'])||0x0,'monthRx':Number(_0x3b3c22['monthRx'])||0x0,'monthTx':Number(_0x3b3c22['monthTx'])||0x0};const _0x5e98b0=trafficMbToBytes(_0x3b3c22['day_rx_traffic']),_0x12d9a0=trafficMbToBytes(_0x3b3c22['day_tx_traffic']),_0x5f3863=trafficMbToBytes(_0x3b3c22['month_rx_traffic']),_0x518eda=trafficMbToBytes(_0x3b3c22['month_tx_traffic']);return{'todayBytes':_0x5e98b0+_0x12d9a0,'monthBytes':_0x5f3863+_0x518eda,'todayRx':_0x5e98b0,'todayTx':_0x12d9a0,'monthRx':_0x5f3863,'monthTx':_0x518eda};}function trafficRxRatio(_0xaeed3d,_0x459b7d){const _0x3dac40=Number(_0xaeed3d||0x0)+Number(_0x459b7d||0x0);if(!isFinite(_0x3dac40)||_0x3dac40<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0xaeed3d||0x0)/_0x3dac40));}function _0x5460(){const _0x5e24fb=['nta2zJCZnZq','r0vux0nbuLjjrvjFquDhuKvhqvrjt05Fsu5gtW','mtm4mdi2vKfyEuHj','twfPBLjVDxrLCG','D2fYBG','ndy2odfJuwzsEhK','q01dqW','nxfAt0H4sG','q0jo','y2HHCKnVzgvbDa','AM9PBG','ChvZAa','C29Tzq','nuDb','tMv0u3rHDhvZ','nuCGu0e','Dg9tDhjPBMC','mJaYnda4uvbOzLjt','C3rYAw5NAwz5','q1rdqW','zMXVB3i','C2LT','Bg9N','BgvUz3rO','u1ncx1jtu0K','tMfTzq','Dw5KzwzPBMvK','Dg9Rzw4','Dg9KyxLuEa','ywjVCNq','Aw5KzxHpzG','mZm2odyXEvvhC29N','C2LNBMfS','mtq1ota0ng5WCeroCq','Dg9KyxLcExrLCW','mZznDNLYz3G','nJC2mJKYvxzdtMvl','CM91BMq','q0HjtKeGvu5jq09n','oda5nJi0mhnICfHyAW','DhjPBq','mtr6EuD4qMO','uM91DgvY','u1ncx1njtLi','neCG','5lIj6l295RoI','5zUB6l295RoI','zMLSDgvY','Dg9gAxHLza','Aw5JBhvKzxm'];_0x5460=function(){return _0x5e24fb;};return _0x5460();}function getOperatorName(_0x207b3e,_0x2f9741){const _0x382228=_0x1e52;if(!_0x207b3e)return _0x2f9741||'未知';const _0x42169f=String(_0x207b3e)['toUpperCase']();if(_0x42169f[_0x382228(0xa5)](_0x382228(0x7a))||_0x42169f==='中国移动'||_0x42169f['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x42169f['includes']('CUCC')||_0x42169f==='中国联通'||_0x42169f['includes'](_0x382228(0x9a))||_0x42169f['includes']('UNICOM'))return'中国联通';if(_0x42169f['includes'](_0x382228(0x87))||_0x42169f==='CT'||_0x42169f==='中国电信'||_0x42169f['includes']('CHINA\x20TELECOM')||_0x42169f['includes']('TELECOM'))return'中国电信';if(_0x42169f['includes'](_0x382228(0x7c))||_0x42169f==='中国广电'||_0x42169f['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x207b3e;}function getSignalColor(_0x51b16a,_0x9e31ab){let _0x2be5ea=parseInt(_0x51b16a);if(isNaN(_0x2be5ea))_0x2be5ea=-0x78;if(_0x2be5ea>-0x59)return _0x9e31ab['ok'];if(_0x2be5ea>-0x63)return _0x9e31ab['warn'];return _0x9e31ab['bad'];}function getSinrColor(_0x39043d,_0x3d2bcf){const _0x4fae52=_0x1e52;let _0x5b2ae9=parseFloat(_0x39043d);if(isNaN(_0x5b2ae9))_0x5b2ae9=0x0;if(_0x5b2ae9>0xf)return _0x3d2bcf['ok'];if(_0x5b2ae9>0x8)return _0x3d2bcf[_0x4fae52(0x78)];return _0x3d2bcf['bad'];}function getAllBands(_0x5d460e,_0x3af769,_0x487989){const _0x56d1e8=[],_0x3e047e=_0x487989?'N':'B',_0x31d97c=getValidValue(_0x5d460e?.['BAND']||_0x5d460e?.['NR_BAND']||_0x5d460e?.['LTE_BAND'],'');if(_0x31d97c)_0x56d1e8['push'](_0x3e047e+_0x31d97c);for(const _0x107214 of _0x3af769?.['sub_CA_info']||[]){const _0x1efd80=String(_0x107214?.['Band']||'');if(_0x1efd80&&_0x1efd80!=='-')_0x56d1e8['push'](_0x3e047e+_0x1efd80);}if(_0x56d1e8['length']===0x0)_0x56d1e8['push'](_0x487989?'N78':'B3');return _0x56d1e8;}function getCaBadgeText(_0x88c738,_0x84f73c,_0x358990){const _0x4e1503=_0x1e52,_0x50f383=(_0x84f73c?'5G\x20':_0x4e1503(0xa0))+_0x358990;if(!_0x84f73c)return _0x50f383;const _0x283a94=0x1+(_0x88c738&&_0x88c738['sub_CA_info']||[])['length'];if(_0x283a94>=0x4)return'5GA+';if(_0x283a94===0x3)return _0x4e1503(0x81);if(_0x283a94===0x2)return'5G+';return _0x50f383;}function getCarrierCountText(_0x18e674){const _0x34b73b=_0x1e52,_0x50574d=(_0x18e674&&_0x18e674['sub_CA_info']||[])['length'];if(_0x50574d===0x0)return'单载波';if(_0x50574d===0x1)return'双载波';if(_0x50574d===0x2)return _0x34b73b(0xa1);return _0x34b73b(0xa2);}function _0x1e52(_0xd9e91,_0x172f83){const _0x546062=_0x5460();return _0x1e52=function(_0x1e52e2,_0x5a5927){_0x1e52e2=_0x1e52e2-0x78;let _0x13534a=_0x546062[_0x1e52e2];if(_0x1e52['SXkxQe']===undefined){var _0xb6d43a=function(_0x4c0178){const _0x5f6a4b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x397857='',_0x25f11a='';for(let _0x67dbb6=0x0,_0x28ee5f,_0xa1241f,_0x2a00ed=0x0;_0xa1241f=_0x4c0178['charAt'](_0x2a00ed++);~_0xa1241f&&(_0x28ee5f=_0x67dbb6%0x4?_0x28ee5f*0x40+_0xa1241f:_0xa1241f,_0x67dbb6++%0x4)?_0x397857+=String['fromCharCode'](0xff&_0x28ee5f>>(-0x2*_0x67dbb6&0x6)):0x0){_0xa1241f=_0x5f6a4b['indexOf'](_0xa1241f);}for(let _0x2b20d7=0x0,_0x17474b=_0x397857['length'];_0x2b20d7<_0x17474b;_0x2b20d7++){_0x25f11a+='%'+('00'+_0x397857['charCodeAt'](_0x2b20d7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x25f11a);};_0x1e52['ybFVyI']=_0xb6d43a,_0xd9e91=arguments,_0x1e52['SXkxQe']=!![];}const _0x34c194=_0x546062[0x0],_0x2053cf=_0x1e52e2+_0x34c194,_0x4443dd=_0xd9e91[_0x2053cf];return!_0x4443dd?(_0x13534a=_0x1e52['ybFVyI'](_0x13534a),_0xd9e91[_0x2053cf]=_0x13534a):_0x13534a=_0x4443dd,_0x13534a;},_0x1e52(_0xd9e91,_0x172f83);}function getNetworkModeText(_0x43d2d6,_0x25d953,_0x5d46b0){const _0x220787=_0x1e52,_0x41287e=String(_0x5d46b0||'')['toUpperCase']();if(!_0x25d953){if(!_0x41287e||_0x41287e==='4G'||_0x41287e==='LTE')return'4G\x20LTE';return'4G\x20'+_0x41287e;}const _0x1a5703=0x1+(_0x43d2d6&&_0x43d2d6['sub_CA_info']||[])['length'];if(_0x1a5703>=0x4)return'5GA+';if(_0x1a5703===0x3)return'5GA';if(_0x1a5703===0x2)return'5G+';return _0x41287e?'5G\x20'+_0x41287e:_0x220787(0x83);}function rsrpToPercent(_0x36306a){let _0x303771=parseInt(_0x36306a);if(isNaN(_0x303771))_0x303771=-0x78;const _0x3fbce3=Math['min'](-0x46,Math['max'](-0x78,_0x303771)),_0x162ba6=(_0x3fbce3+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x162ba6*0x5a));}function sinrToPercent(_0x24b3f2){let _0x2c82c7=parseFloat(_0x24b3f2);if(isNaN(_0x2c82c7))_0x2c82c7=0x0;return Math['min'](0x64,Math['max'](0x0,_0x2c82c7/0x19*0x64));}function resolveDeviceName(_0x466077,_0x47cb4c){const _0x5b545d=_0x1e52,_0x19155f=_0x466077&&_0x466077[_0x5b545d(0x8d)]!=null?String(_0x466077['Name'])['trim']():'';if(!_0x19155f)return _0x47cb4c;if(_0x19155f==='--'||_0x19155f==='undefined'||_0x19155f==='null'||_0x19155f==='0')return _0x47cb4c;return _0x19155f;}function rsrpToBars(_0x37614f){const _0x158007=parseInt(_0x37614f);if(isNaN(_0x158007))return 0x0;if(_0x158007>=-0x55)return 0x4;if(_0x158007>=-0x5f)return 0x3;if(_0x158007>=-0x69)return 0x2;if(_0x158007>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1ca9fb){const _0x31c17e=_0x1e52;if(!_0x1ca9fb)return 0x0;if(typeof _0x1ca9fb['onlineDevices']==='number')return _0x1ca9fb['onlineDevices'];const _0x5cbd0a=_0x1ca9fb['MainBaseInfo'];if(!Array['isArray'](_0x5cbd0a))return 0x0;return _0x5cbd0a['filter'](_0x30f575=>_0x30f575&&String(_0x30f575[_0x31c17e(0x82)])==='1')['length'];}function urlDecode(_0x130f26){const _0x2e4188=[];for(let _0x46da54=0x0;_0x46da54<_0x130f26['length'];_0x46da54+=0x2)_0x2e4188['push'](parseInt(_0x130f26['substr'](_0x46da54,0x2),0x10));let _0x37ad5c='';for(let _0x46c306=0x0;_0x46c306<_0x2e4188['length'];){const _0x399b74=_0x2e4188[_0x46c306];if(_0x399b74<0x80)_0x37ad5c+=String['fromCharCode'](_0x399b74),_0x46c306++;else{if(_0x399b74>>0x5===0x6)_0x37ad5c+=String['fromCharCode']((_0x399b74&0x1f)<<0x6|_0x2e4188[_0x46c306+0x1]&0x3f),_0x46c306+=0x2;else _0x399b74>>0x4===0xe?(_0x37ad5c+=String['fromCharCode']((_0x399b74&0xf)<<0xc|(_0x2e4188[_0x46c306+0x1]&0x3f)<<0x6|_0x2e4188[_0x46c306+0x2]&0x3f),_0x46c306+=0x3):(_0x37ad5c+=String['fromCharCode']((_0x399b74&0x7)<<0x12|(_0x2e4188[_0x46c306+0x1]&0x3f)<<0xc|(_0x2e4188[_0x46c306+0x2]&0x3f)<<0x6|_0x2e4188[_0x46c306+0x3]),_0x46c306+=0x4);}}return _0x37ad5c;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x430f21='0123456789ABCDEF';let _0x345470='';for(let _0x4d98f0=0x0;_0x4d98f0<0x20;_0x4d98f0++)_0x345470+=_0x430f21[Math['floor'](Math['random']()*0x10)];return _0x345470;}function generateSequenceId(_0x223d4a){const _0x18f4c8=_0x1e52;return _0x223d4a+'_'+Date['now']()[_0x18f4c8(0x84)](0x24);}function classifyFault(_0x550aca){const _0x3c2344=_0x1e52;if(!_0x550aca||_0x550aca[_0x3c2344(0x8b)]===0x0)return null;if(_0x550aca[_0x3c2344(0x80)](_0x1bf093=>AUTH_ERROR_CODES[_0x3c2344(0x92)](_0x1bf093)>=0x0))return'auth';if(_0x550aca['some'](_0x403a2b=>DEVICE_ERROR_CODES['indexOf'](_0x403a2b)>=0x0))return'device';return'network';}function readResult(_0x1ee2b2,_0x1dde6d){if(!_0x1ee2b2||_0x1ee2b2['status']!=='fulfilled'||!_0x1ee2b2['value'])return _0x1dde6d['push'](NET_ERROR_CODE),null;const _0x44d1e5=_0x1ee2b2['value'];if(_0x44d1e5['resultCode']===0x0)return _0x44d1e5;return _0x1dde6d['push'](typeof _0x44d1e5['resultCode']==='number'?_0x44d1e5['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x58f87c,_0x5f25d4,_0x286194,_0x58d418,_0x363035){const _0x1229b2=_0x1e52;if(!_0x286194)return null;const _0x2db5a2={'CmdType':_0x58f87c,..._0x5f25d4};if(!_0x2db5a2['SequenceId'])_0x2db5a2['SequenceId']=generateSequenceId(_0x58f87c);const _0x23f8b9={'appVersion':urlDecode('322e322e3531'),'mac':_0x58d418,'timeout':0x3,'token':_0x286194,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON[_0x1229b2(0x86)]({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x1229b2(0xa6)),'Parameter':JSON[_0x1229b2(0x86)](_0x2db5a2)}),'operatorId':getOperatorId()},_0x92872f=new AbortController(),_0x361798=setTimeout(()=>{const _0x1e0aaa=_0x1229b2;try{_0x92872f[_0x1e0aaa(0x91)]();}catch(_0x1d0203){}},_0x363035);try{const _0x2395b6=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x286194},'body':JSON['stringify'](_0x23f8b9),'signal':_0x92872f[_0x1229b2(0x94)]}),_0x13c5a4=await _0x2395b6['json']();if(_0x13c5a4&&_0x13c5a4['rspParam']){const _0x495fb4=JSON['parse'](_0x13c5a4['rspParam']);if(_0x495fb4['Result']===0x0&&_0x495fb4['return_Parameter']){const _0x570c2f=String(_0x495fb4['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x53be10=JSON['parse'](decodeBase64Utf8(_0x570c2f));return{..._0x53be10,'resultCode':0x0};}}return _0x13c5a4||{'resultCode':NET_ERROR_CODE};}catch(_0x559828){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x361798);}}function decodeBase64Utf8(_0x484b9a){const _0x4bb570=_0x1e52,_0x437269=atob(_0x484b9a);try{const _0x221b79=new Uint8Array(_0x437269['length']);for(let _0x30b65e=0x0;_0x30b65e<_0x437269[_0x4bb570(0x8b)];_0x30b65e++)_0x221b79[_0x30b65e]=_0x437269[_0x4bb570(0x7d)](_0x30b65e);return new TextDecoder('utf-8')['decode'](_0x221b79);}catch(_0x415b9){return _0x437269;}}async function fetchCpeApi(_0xa61527,_0xab7926,_0x42c439,_0x345688={},_0x318f00=0xbb8){if(!_0xab7926)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0xa61527,_0x345688,_0xab7926,_0x42c439,_0x318f00);}function isEmpty(_0x50a089){return!_0x50a089||typeof _0x50a089==='object'&&Object['keys'](_0x50a089)['length']===0x0;}async function fetchAll(_0x4af44a){const _0x4a5d85=_0x1e52,_0x51e959=_0x4af44a['token'],_0x11da0b=_0x4af44a['mac'],_0x59af61=0xbb8,_0x197710=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x51e959,_0x11da0b,{},0x9c4),fetchCpeApi(_0x4a5d85(0xa7),_0x51e959,_0x11da0b,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x51e959,_0x11da0b,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x51e959,_0x11da0b,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x51e959,_0x11da0b,{},0xbb8)]),_0x5428fd=[];let _0x3cb039=readResult(_0x197710[0x0],_0x5428fd),_0x126105=readResult(_0x197710[0x1],_0x5428fd),_0x157564=readResult(_0x197710[0x2],_0x5428fd),_0x5eeed8=readResult(_0x197710[0x3],_0x5428fd);const _0x4b1b63=readResult(_0x197710[0x4],_0x5428fd);if(_0x157564)_0x157564=_0x157564[_0x4a5d85(0xa9)]||_0x157564[_0x4a5d85(0x9e)]||_0x157564;const _0x9a3609=[_0x3cb039,_0x126105,_0x157564,_0x5eeed8,_0x4b1b63][_0x4a5d85(0xa3)](_0x4d975c=>!isEmpty(_0x4d975c))['length'],_0x4ecb7d=_0x9a3609===0x0?classifyFault(_0x5428fd):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x9a3609+'/5\x20|\x20fault='+(_0x4ecb7d||'-')+'\x20|\x20失败码=['+_0x5428fd[_0x4a5d85(0x7e)](',')+']'),{'rf':_0x3cb039,'ca':_0x126105,'topo':_0x157564,'sim':_0x5eeed8,'traffic':_0x4b1b63,'failCodes':_0x5428fd,'fault':_0x4ecb7d,'successCount':_0x9a3609};}function saveCache(_0x1fa6a4){const _0x176797=_0x1e52;try{const _0x58a241=parseTrafficData(_0x1fa6a4['traffic']),_0x131be0={'rf':{'WorkMode':_0x1fa6a4['rf']?.['WorkMode'],'SSB_RSRP':_0x1fa6a4['rf']?.['SSB_RSRP'],'RSRP':_0x1fa6a4['rf']?.['RSRP'],'SSB_SINR':_0x1fa6a4['rf']?.[_0x176797(0x9f)],'SINR':_0x1fa6a4['rf']?.['SINR'],'SSB_RSRQ':_0x1fa6a4['rf']?.['SSB_RSRQ'],'RSRQ':_0x1fa6a4['rf']?.['RSRQ'],'SSB_RSSI':_0x1fa6a4['rf']?.[_0x176797(0x8c)],'RSSI':_0x1fa6a4['rf']?.['RSSI'],'BAND':_0x1fa6a4['rf']?.['BAND'],'NR_BAND':_0x1fa6a4['rf']?.['NR_BAND'],'LTE_BAND':_0x1fa6a4['rf']?.['LTE_BAND'],'PCI':_0x1fa6a4['rf']?.['PCI'],'SPN':_0x1fa6a4['rf']?.['SPN']},'ca':{'main_CA_info':_0x1fa6a4['ca']?.['main_CA_info']||{},'sub_CA_info':_0x1fa6a4['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x1fa6a4['topo']?.['NetStatus'],'UpTime':_0x1fa6a4['topo']?.['UpTime'],'Name':_0x1fa6a4['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x1fa6a4['topo'])},'sim':{'Operator':_0x1fa6a4[_0x176797(0x89)]?.['Operator'],'SPN':_0x1fa6a4['sim']?.['SPN']},'traffic':{'todayBytes':_0x58a241['todayBytes'],'monthBytes':_0x58a241['monthBytes'],'todayRx':_0x58a241['todayRx'],'todayTx':_0x58a241[_0x176797(0x90)],'monthRx':_0x58a241['monthRx'],'monthTx':_0x58a241['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x131be0));}catch(_0x5f17f2){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x5f17f2);}}function loadCache(){try{const _0x1d1f56=Keychain['get'](KEY_CACHE);if(!_0x1d1f56)return null;const _0x5dde57=JSON['parse'](_0x1d1f56);if(!_0x5dde57||typeof _0x5dde57!=='object')return null;return _0x5dde57;}catch(_0x8953db){return null;}}
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
