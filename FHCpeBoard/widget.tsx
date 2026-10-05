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

const _0x4fd1ba=_0x3591;(function(_0x277d8e,_0x4a98ce){const _0x53663c=_0x3591,_0x5407c2=_0x277d8e();while(!![]){try{const _0x32e1a6=-parseInt(_0x53663c(0x1d9))/0x1+-parseInt(_0x53663c(0x1bf))/0x2+parseInt(_0x53663c(0x1cc))/0x3*(-parseInt(_0x53663c(0x1af))/0x4)+parseInt(_0x53663c(0x1c7))/0x5+-parseInt(_0x53663c(0x1d4))/0x6*(parseInt(_0x53663c(0x1b5))/0x7)+parseInt(_0x53663c(0x1c4))/0x8*(parseInt(_0x53663c(0x1c6))/0x9)+parseInt(_0x53663c(0x1c1))/0xa*(parseInt(_0x53663c(0x1ac))/0xb);if(_0x32e1a6===_0x4a98ce)break;else _0x5407c2['push'](_0x5407c2['shift']());}catch(_0x309b5d){_0x5407c2['push'](_0x5407c2['shift']());}}}(_0x2ce5,0xc6caf));const TOKEN_KEY='CPE_TOKEN',MAC_KEY=_0x4fd1ba(0x1c3),NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0x4fd1ba(0x1d8);function readKey(_0x4f4007,_0x170814){try{const _0x5ba1ad=Keychain['get'](_0x4f4007);return _0x5ba1ad===null||_0x5ba1ad===undefined||_0x5ba1ad===''?_0x170814:String(_0x5ba1ad)['trim']();}catch(_0x2fefcd){return _0x170814;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x33110b){const _0x17b813=_0x4fd1ba;try{if(_0x33110b['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x33110b['token'])['trim']());if(_0x33110b['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x33110b['mac'])[_0x17b813(0x1cb)]()||DEFAULT_MAC);if(_0x33110b['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x33110b['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x5e5115){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x5e5115);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x4a2c89,_0x38b275){const _0x5071c4=_0x4fd1ba;if(_0x4a2c89===undefined||_0x4a2c89===null||_0x4a2c89==='')return _0x38b275;const _0x4a6c52=String(_0x4a2c89)[_0x5071c4(0x1cb)]();return _0x4a6c52==='-'||_0x4a6c52==='undefined'?_0x38b275:_0x4a6c52;}function firstValid(_0x144d59,_0x284228){for(const _0x42bccd of _0x144d59){const _0x19b5ae=getValidValue(_0x42bccd,'');if(_0x19b5ae)return _0x19b5ae;}return _0x284228;}function resolveOperator(_0x5ce619,_0x3ed051){const _0x57a729=getOperatorName(_0x3ed051&&_0x3ed051['Operator']||'',_0x3ed051&&_0x3ed051['SPN']||'');if(_0x57a729==='未知'&&_0x5ce619&&_0x5ce619['SPN'])return String(_0x5ce619['SPN']);return _0x57a729;}function formatUptime(_0x17c9fb){const _0x47b2c6=parseInt(_0x17c9fb||0x0)||0x0,_0x1423f5=Math['floor'](_0x47b2c6/0x15180),_0x1fb19c=Math['floor'](_0x47b2c6%0x15180/0xe10),_0x45ae2c=Math['floor'](_0x47b2c6%0xe10/0x3c),_0x384cdf=[];if(_0x1423f5>0x0)_0x384cdf['push'](_0x1423f5+'天');if(_0x1fb19c>0x0||_0x1423f5>0x0)_0x384cdf['push'](_0x1fb19c+'小时');return _0x384cdf['push'](_0x45ae2c+'分'),_0x384cdf['join']('\x20');}function formatUptimeShort(_0xb710dd){const _0x405a5c=parseInt(_0xb710dd||0x0)||0x0,_0x2063e3=Math['floor'](_0x405a5c/0x15180),_0x42cfc0=Math['floor'](_0x405a5c%0x15180/0xe10),_0x5b1441=Math['floor'](_0x405a5c%0xe10/0x3c),_0x206530=[];if(_0x2063e3>0x0)_0x206530['push'](_0x2063e3+'天');if(_0x42cfc0>0x0||_0x2063e3>0x0)_0x206530['push'](_0x42cfc0+'时');return _0x206530['push'](_0x5b1441+'分'),_0x206530['join']('');}function trafficMbToBytes(_0x4bba9a){const _0x10f800=parseFloat(_0x4bba9a||0x0);if(isNaN(_0x10f800))return 0x0;return Math['round'](_0x10f800*0x400*0x400);}function formatTraffic(_0x28c112){const _0x1b316d=Number(_0x28c112||0x0);if(!isFinite(_0x1b316d)||_0x1b316d<=0x0)return'0M';const _0x20ff7e=0x400*0x400,_0x24c05b=0x400*_0x20ff7e;if(_0x1b316d>=_0x24c05b)return(_0x1b316d/_0x24c05b)['toFixed'](0x1)+'G';return(_0x1b316d/_0x20ff7e)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x448c73){const _0x43454f=_0x4fd1ba,_0xcef3be=Number(_0x448c73||0x0);if(!isFinite(_0xcef3be)||_0xcef3be<=0x0)return'0';const _0x157406=0x400,_0x2ccf54=0x400*_0x157406,_0xfafa2c=0x400*_0x2ccf54;if(_0xcef3be>=_0xfafa2c){const _0x3ff9fe=_0xcef3be/_0xfafa2c;return(_0x3ff9fe>=0x64?_0x3ff9fe['toFixed'](0x0):_0x3ff9fe['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0xcef3be>=_0x2ccf54)return Math[_0x43454f(0x1ba)](_0xcef3be/_0x2ccf54)+'M';if(_0xcef3be>=_0x157406)return Math['round'](_0xcef3be/_0x157406)+'K';return String(Math['round'](_0xcef3be));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x40f0a3){const _0x4adc6f=_0x4fd1ba;if(!_0x40f0a3)return ZERO_TRAFFIC;const _0x1b7b13=_0x40f0a3['day_rx_traffic']!==undefined||_0x40f0a3['day_tx_traffic']!==undefined||_0x40f0a3['month_rx_traffic']!==undefined||_0x40f0a3['month_tx_traffic']!==undefined;if(!_0x1b7b13)return{'todayBytes':Number(_0x40f0a3['todayBytes'])||0x0,'monthBytes':Number(_0x40f0a3['monthBytes'])||0x0,'todayRx':Number(_0x40f0a3['todayRx'])||0x0,'todayTx':Number(_0x40f0a3['todayTx'])||0x0,'monthRx':Number(_0x40f0a3['monthRx'])||0x0,'monthTx':Number(_0x40f0a3['monthTx'])||0x0};const _0x4620e0=trafficMbToBytes(_0x40f0a3[_0x4adc6f(0x1aa)]),_0xe825e0=trafficMbToBytes(_0x40f0a3['day_tx_traffic']),_0x520d7e=trafficMbToBytes(_0x40f0a3['month_rx_traffic']),_0x33e589=trafficMbToBytes(_0x40f0a3['month_tx_traffic']);return{'todayBytes':_0x4620e0+_0xe825e0,'monthBytes':_0x520d7e+_0x33e589,'todayRx':_0x4620e0,'todayTx':_0xe825e0,'monthRx':_0x520d7e,'monthTx':_0x33e589};}function trafficRxRatio(_0x37cacc,_0x473d11){const _0x497908=Number(_0x37cacc||0x0)+Number(_0x473d11||0x0);if(!isFinite(_0x497908)||_0x497908<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x37cacc||0x0)/_0x497908));}function getOperatorName(_0x1574c8,_0x1cce5d){const _0x2540b8=_0x4fd1ba;if(!_0x1574c8)return _0x1cce5d||'未知';const _0x3babe1=String(_0x1574c8)['toUpperCase']();if(_0x3babe1['includes']('CMCC')||_0x3babe1===_0x2540b8(0x1d2)||_0x3babe1[_0x2540b8(0x1ae)]('CHINA\x20MOBILE'))return'中国移动';if(_0x3babe1['includes']('CUCC')||_0x3babe1==='中国联通'||_0x3babe1[_0x2540b8(0x1ae)]('CHINA\x20UNICOM')||_0x3babe1['includes'](_0x2540b8(0x1a8)))return'中国联通';if(_0x3babe1[_0x2540b8(0x1ae)]('CTCC')||_0x3babe1==='CT'||_0x3babe1==='中国电信'||_0x3babe1['includes']('CHINA\x20TELECOM')||_0x3babe1['includes']('TELECOM'))return'中国电信';if(_0x3babe1['includes']('CBN')||_0x3babe1===_0x2540b8(0x1ab)||_0x3babe1['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x1574c8;}function getSignalColor(_0x51f029,_0x212cea){let _0x3802a2=parseInt(_0x51f029);if(isNaN(_0x3802a2))_0x3802a2=-0x78;if(_0x3802a2>-0x59)return _0x212cea['ok'];if(_0x3802a2>-0x63)return _0x212cea['warn'];return _0x212cea['bad'];}function getSinrColor(_0x92ba28,_0x2975e6){let _0x229e49=parseFloat(_0x92ba28);if(isNaN(_0x229e49))_0x229e49=0x0;if(_0x229e49>0xf)return _0x2975e6['ok'];if(_0x229e49>0x8)return _0x2975e6['warn'];return _0x2975e6['bad'];}function getAllBands(_0x2ad3de,_0x50396e,_0x1e2921){const _0x191273=_0x4fd1ba,_0x15b1a8=[],_0x3795e5=_0x1e2921?'N':'B',_0x4b5e1e=getValidValue(_0x2ad3de?.['BAND']||_0x2ad3de?.['NR_BAND']||_0x2ad3de?.['LTE_BAND'],'');if(_0x4b5e1e)_0x15b1a8['push'](_0x3795e5+_0x4b5e1e);for(const _0x5b082e of _0x50396e?.['sub_CA_info']||[]){const _0x58449e=String(_0x5b082e?.[_0x191273(0x1a9)]||'');if(_0x58449e&&_0x58449e!=='-')_0x15b1a8[_0x191273(0x1cd)](_0x3795e5+_0x58449e);}if(_0x15b1a8['length']===0x0)_0x15b1a8['push'](_0x1e2921?_0x191273(0x1d6):'B3');return _0x15b1a8;}function getCaBadgeText(_0x25828f,_0x584e87,_0x57682a){const _0x3e56c6=(_0x584e87?'5G\x20':'4G\x20')+_0x57682a;if(!_0x584e87)return _0x3e56c6;const _0x3902d0=0x1+(_0x25828f&&_0x25828f['sub_CA_info']||[])['length'];if(_0x3902d0>=0x4)return'5GA+';if(_0x3902d0===0x3)return'5GA';if(_0x3902d0===0x2)return'5G+';return _0x3e56c6;}function getCarrierCountText(_0x4c3dc1){const _0x104354=_0x4fd1ba,_0x42f5fa=(_0x4c3dc1&&_0x4c3dc1['sub_CA_info']||[])['length'];if(_0x42f5fa===0x0)return'单载波';if(_0x42f5fa===0x1)return'双载波';if(_0x42f5fa===0x2)return _0x104354(0x1c8);return'四载波';}function getNetworkModeText(_0x2e7513,_0x4bf4d8,_0x39aa73){const _0x3b4974=_0x4fd1ba,_0x1bfcb0=String(_0x39aa73||'')['toUpperCase']();if(!_0x4bf4d8){if(!_0x1bfcb0||_0x1bfcb0==='4G'||_0x1bfcb0===_0x3b4974(0x1ad))return'4G\x20LTE';return'4G\x20'+_0x1bfcb0;}const _0x415ca6=0x1+(_0x2e7513&&_0x2e7513['sub_CA_info']||[])['length'];if(_0x415ca6>=0x4)return'5GA+';if(_0x415ca6===0x3)return'5GA';if(_0x415ca6===0x2)return'5G+';return _0x1bfcb0?'5G\x20'+_0x1bfcb0:'5G\x20SA';}function rsrpToPercent(_0x4a89e0){let _0xc8ff93=parseInt(_0x4a89e0);if(isNaN(_0xc8ff93))_0xc8ff93=-0x78;const _0xa18b0=Math['min'](-0x46,Math['max'](-0x78,_0xc8ff93)),_0x2046f3=(_0xa18b0+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x2046f3*0x5a));}function sinrToPercent(_0x29c890){const _0x523cd2=_0x4fd1ba;let _0x5730c1=parseFloat(_0x29c890);if(isNaN(_0x5730c1))_0x5730c1=0x0;return Math['min'](0x64,Math[_0x523cd2(0x1ca)](0x0,_0x5730c1/0x19*0x64));}function _0x2ce5(){const _0x27dbe4=['ChvZAa','Dg9KyxLuEa','Bg9N','Dw5KzwzPBMvK','zMLSDgvY','5lIT5zU956E75yQO','Bw9UDgHuEa','nZHjwuXdz00','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','tJC4','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','54o954gRq1bf','mJCZodaXEvnktMPJ','DhjHzMzPyW','u2vXDwvUy2vjza','vu5jq09n','qMfUza','zgf5x3j4x3rYywzMAwm','5lIT5zU95BM/55s1','mtfKzhHwvxu','tfrf','Aw5JBhvKzxm','ndrIwxnJtfG','Dg9WBW','CgfYC2u','CMvZDwX0q29Kzq','r0vux1njtv9jtKzp','DMfSDwu','mZa1mdeXyvfXrwDL','C2LT','CMvWBgfJzq','CNnWugfYyw0','Dg9tDhjPBMC','CM91BMq','A2v5CW','BgvUz3rO','C3rYAw5NAwz5','u1ncx1jtuLe','mte3mJiZmfnqtMHZEq','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','mtuZmJGXotb5BxPOtei','AM9PBG','q1bfx0rfvKLdrv9nqum','mZG1mJbYEgLnzMG','nZq2ntCYnMq2otzLnJe2yW','mJK3wKziEujg','nJq4nJG0mfPmtLj3rq','5lIj6l295RoI','twfPBKjHC2vjBMzV','Bwf4','DhjPBq','mJa0mti2twLHzNzU'];_0x2ce5=function(){return _0x27dbe4;};return _0x2ce5();}function resolveDeviceName(_0x2da4ec,_0x386d4d){const _0x59052d=_0x4fd1ba,_0x443166=_0x2da4ec&&_0x2da4ec['Name']!=null?String(_0x2da4ec['Name'])['trim']():'';if(!_0x443166)return _0x386d4d;if(_0x443166==='--'||_0x443166===_0x59052d(0x1d0)||_0x443166==='null'||_0x443166==='0')return _0x386d4d;return _0x443166;}function rsrpToBars(_0x7c81b3){const _0x564279=parseInt(_0x7c81b3);if(isNaN(_0x564279))return 0x0;if(_0x564279>=-0x55)return 0x4;if(_0x564279>=-0x5f)return 0x3;if(_0x564279>=-0x69)return 0x2;if(_0x564279>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x6ef68e){const _0x539a20=_0x4fd1ba;if(!_0x6ef68e)return 0x0;if(typeof _0x6ef68e['onlineDevices']==='number')return _0x6ef68e['onlineDevices'];const _0x17013e=_0x6ef68e[_0x539a20(0x1c9)];if(!Array['isArray'](_0x17013e))return 0x0;return _0x17013e['filter'](_0x58b2d3=>_0x58b2d3&&String(_0x58b2d3['NetStatus'])==='1')['length'];}function _0x3591(_0x50478c,_0x47c37b){const _0x2ce5c1=_0x2ce5();return _0x3591=function(_0x35919e,_0x4ca906){_0x35919e=_0x35919e-0x1a8;let _0x2438b9=_0x2ce5c1[_0x35919e];if(_0x3591['VSinQA']===undefined){var _0x30db5e=function(_0x4f4007){const _0x170814='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5ba1ad='',_0x2fefcd='';for(let _0x33110b=0x0,_0x5e5115,_0x4a2c89,_0x38b275=0x0;_0x4a2c89=_0x4f4007['charAt'](_0x38b275++);~_0x4a2c89&&(_0x5e5115=_0x33110b%0x4?_0x5e5115*0x40+_0x4a2c89:_0x4a2c89,_0x33110b++%0x4)?_0x5ba1ad+=String['fromCharCode'](0xff&_0x5e5115>>(-0x2*_0x33110b&0x6)):0x0){_0x4a2c89=_0x170814['indexOf'](_0x4a2c89);}for(let _0x4a6c52=0x0,_0x144d59=_0x5ba1ad['length'];_0x4a6c52<_0x144d59;_0x4a6c52++){_0x2fefcd+='%'+('00'+_0x5ba1ad['charCodeAt'](_0x4a6c52)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2fefcd);};_0x3591['NCZvne']=_0x30db5e,_0x50478c=arguments,_0x3591['VSinQA']=!![];}const _0x1cdf5b=_0x2ce5c1[0x0],_0x5a8af4=_0x35919e+_0x1cdf5b,_0x484822=_0x50478c[_0x5a8af4];return!_0x484822?(_0x2438b9=_0x3591['NCZvne'](_0x2438b9),_0x50478c[_0x5a8af4]=_0x2438b9):_0x2438b9=_0x484822,_0x2438b9;},_0x3591(_0x50478c,_0x47c37b);}function urlDecode(_0x198a6c){const _0x373975=[];for(let _0xe2f39b=0x0;_0xe2f39b<_0x198a6c['length'];_0xe2f39b+=0x2)_0x373975['push'](parseInt(_0x198a6c['substr'](_0xe2f39b,0x2),0x10));let _0x1f5218='';for(let _0x5b1867=0x0;_0x5b1867<_0x373975['length'];){const _0x3655f4=_0x373975[_0x5b1867];if(_0x3655f4<0x80)_0x1f5218+=String['fromCharCode'](_0x3655f4),_0x5b1867++;else{if(_0x3655f4>>0x5===0x6)_0x1f5218+=String['fromCharCode']((_0x3655f4&0x1f)<<0x6|_0x373975[_0x5b1867+0x1]&0x3f),_0x5b1867+=0x2;else _0x3655f4>>0x4===0xe?(_0x1f5218+=String['fromCharCode']((_0x3655f4&0xf)<<0xc|(_0x373975[_0x5b1867+0x1]&0x3f)<<0x6|_0x373975[_0x5b1867+0x2]&0x3f),_0x5b1867+=0x3):(_0x1f5218+=String['fromCharCode']((_0x3655f4&0x7)<<0x12|(_0x373975[_0x5b1867+0x1]&0x3f)<<0xc|(_0x373975[_0x5b1867+0x2]&0x3f)<<0x6|_0x373975[_0x5b1867+0x3]),_0x5b1867+=0x4);}}return _0x1f5218;}const REMOTE_URL=urlDecode(_0x4fd1ba(0x1c0)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':_0x4fd1ba(0x1d5),'device':_0x4fd1ba(0x1d7),'auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x22682d=_0x4fd1ba;return Date['now']()[_0x22682d(0x1b9)]();}function generateUUID(){const _0x40f7f1='0123456789ABCDEF';let _0x2e6839='';for(let _0x5148b7=0x0;_0x5148b7<0x20;_0x5148b7++)_0x2e6839+=_0x40f7f1[Math['floor'](Math['random']()*0x10)];return _0x2e6839;}function generateSequenceId(_0x24bfef){return _0x24bfef+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x235a27){const _0x463b79=_0x4fd1ba;if(!_0x235a27||_0x235a27[_0x463b79(0x1bc)]===0x0)return null;if(_0x235a27['some'](_0x482d18=>AUTH_ERROR_CODES['indexOf'](_0x482d18)>=0x0))return'auth';if(_0x235a27['some'](_0x547bde=>DEVICE_ERROR_CODES['indexOf'](_0x547bde)>=0x0))return'device';return'network';}function readResult(_0x5de11d,_0x5f521f){const _0x138481=_0x4fd1ba;if(!_0x5de11d||_0x5de11d['status']!=='fulfilled'||!_0x5de11d[_0x138481(0x1b4)])return _0x5f521f['push'](NET_ERROR_CODE),null;const _0x4d8268=_0x5de11d['value'];if(_0x4d8268[_0x138481(0x1b2)]===0x0)return _0x4d8268;return _0x5f521f['push'](typeof _0x4d8268[_0x138481(0x1b2)]==='number'?_0x4d8268[_0x138481(0x1b2)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0xfc4b16,_0x1a1b8d,_0x24b477,_0x2347e3,_0x599f15){const _0x19352d=_0x4fd1ba;if(!_0x24b477)return null;const _0x474cc7={'CmdType':_0xfc4b16,..._0x1a1b8d};if(!_0x474cc7[_0x19352d(0x1db)])_0x474cc7['SequenceId']=generateSequenceId(_0xfc4b16);const _0x4346dd={'appVersion':urlDecode('322e322e3531'),'mac':_0x2347e3,'timeout':0x3,'token':_0x24b477,'appType':urlDecode(_0x19352d(0x1c5)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x474cc7)}),'operatorId':getOperatorId()},_0x58b164=new AbortController(),_0x260958=setTimeout(()=>{try{_0x58b164['abort']();}catch(_0x1bcb8c){}},_0x599f15);try{const _0x2e11b8=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x24b477},'body':JSON['stringify'](_0x4346dd),'signal':_0x58b164['signal']}),_0x4a5a98=await _0x2e11b8['json']();if(_0x4a5a98&&_0x4a5a98['rspParam']){const _0x54b091=JSON['parse'](_0x4a5a98[_0x19352d(0x1b8)]);if(_0x54b091['Result']===0x0&&_0x54b091['return_Parameter']){const _0x11afb1=String(_0x54b091['return_Parameter'])[_0x19352d(0x1b7)](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x4f3711=JSON[_0x19352d(0x1b1)](decodeBase64Utf8(_0x11afb1));return{..._0x4f3711,'resultCode':0x0};}}return _0x4a5a98||{'resultCode':NET_ERROR_CODE};}catch(_0x17fb10){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x260958);}}function decodeBase64Utf8(_0x22068b){const _0x56f9f7=atob(_0x22068b);try{const _0x58b30a=new Uint8Array(_0x56f9f7['length']);for(let _0x891b9a=0x0;_0x891b9a<_0x56f9f7['length'];_0x891b9a++)_0x58b30a[_0x891b9a]=_0x56f9f7['charCodeAt'](_0x891b9a);return new TextDecoder('utf-8')['decode'](_0x58b30a);}catch(_0x414375){return _0x56f9f7;}}async function fetchCpeApi(_0x2f7a2c,_0x27d72a,_0x32cace,_0x5a548d={},_0x2ed15d=0xbb8){if(!_0x27d72a)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x2f7a2c,_0x5a548d,_0x27d72a,_0x32cace,_0x2ed15d);}function isEmpty(_0x25bbe0){const _0x2a6434=_0x4fd1ba;return!_0x25bbe0||typeof _0x25bbe0==='object'&&Object[_0x2a6434(0x1bb)](_0x25bbe0)['length']===0x0;}async function fetchAll(_0x4fe6b9){const _0x2d427e=_0x4fd1ba,_0x173997=_0x4fe6b9['token'],_0x1f689d=_0x4fe6b9['mac'],_0x1e1dbc=0xbb8,_0x59c8d0=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x173997,_0x1f689d,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x173997,_0x1f689d,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x173997,_0x1f689d,{},0x9c4),fetchCpeApi(_0x2d427e(0x1b3),_0x173997,_0x1f689d,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x173997,_0x1f689d,{},0xbb8)]),_0x4652ca=[];let _0x4f5f14=readResult(_0x59c8d0[0x0],_0x4652ca),_0x5ab8c6=readResult(_0x59c8d0[0x1],_0x4652ca),_0x3fa528=readResult(_0x59c8d0[0x2],_0x4652ca),_0x265994=readResult(_0x59c8d0[0x3],_0x4652ca);const _0x654502=readResult(_0x59c8d0[0x4],_0x4652ca);if(_0x3fa528)_0x3fa528=_0x3fa528['MainRouter']||_0x3fa528['Router']||_0x3fa528;const _0x3dd053=[_0x4f5f14,_0x5ab8c6,_0x3fa528,_0x265994,_0x654502][_0x2d427e(0x1d1)](_0x2079ca=>!isEmpty(_0x2079ca))['length'],_0x545328=_0x3dd053===0x0?classifyFault(_0x4652ca):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x3dd053+'/5\x20|\x20fault='+(_0x545328||'-')+'\x20|\x20失败码=['+_0x4652ca[_0x2d427e(0x1c2)](',')+']'),{'rf':_0x4f5f14,'ca':_0x5ab8c6,'topo':_0x3fa528,'sim':_0x265994,'traffic':_0x654502,'failCodes':_0x4652ca,'fault':_0x545328,'successCount':_0x3dd053};}function saveCache(_0x363254){const _0x33aef8=_0x4fd1ba;try{const _0x336c2f=parseTrafficData(_0x363254[_0x33aef8(0x1da)]),_0x13190d={'rf':{'WorkMode':_0x363254['rf']?.['WorkMode'],'SSB_RSRP':_0x363254['rf']?.['SSB_RSRP'],'RSRP':_0x363254['rf']?.['RSRP'],'SSB_SINR':_0x363254['rf']?.['SSB_SINR'],'SINR':_0x363254['rf']?.['SINR'],'SSB_RSRQ':_0x363254['rf']?.[_0x33aef8(0x1be)],'RSRQ':_0x363254['rf']?.['RSRQ'],'SSB_RSSI':_0x363254['rf']?.['SSB_RSSI'],'RSSI':_0x363254['rf']?.['RSSI'],'BAND':_0x363254['rf']?.['BAND'],'NR_BAND':_0x363254['rf']?.['NR_BAND'],'LTE_BAND':_0x363254['rf']?.['LTE_BAND'],'PCI':_0x363254['rf']?.['PCI'],'SPN':_0x363254['rf']?.['SPN']},'ca':{'main_CA_info':_0x363254['ca']?.['main_CA_info']||{},'sub_CA_info':_0x363254['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x363254[_0x33aef8(0x1b0)]?.['NetStatus'],'UpTime':_0x363254[_0x33aef8(0x1b0)]?.['UpTime'],'Name':_0x363254['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x363254['topo'])},'sim':{'Operator':_0x363254[_0x33aef8(0x1b6)]?.['Operator'],'SPN':_0x363254['sim']?.['SPN']},'traffic':{'todayBytes':_0x336c2f['todayBytes'],'monthBytes':_0x336c2f['monthBytes'],'todayRx':_0x336c2f['todayRx'],'todayTx':_0x336c2f[_0x33aef8(0x1ce)],'monthRx':_0x336c2f['monthRx'],'monthTx':_0x336c2f[_0x33aef8(0x1d3)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x33aef8(0x1bd)](_0x13190d));}catch(_0x314a62){console[_0x33aef8(0x1cf)]('⚠️\x20写缓存失败\x20|\x20'+_0x314a62);}}function loadCache(){try{const _0x343c8d=Keychain['get'](KEY_CACHE);if(!_0x343c8d)return null;const _0x5f20c8=JSON['parse'](_0x343c8d);if(!_0x5f20c8||typeof _0x5f20c8!=='object')return null;return _0x5f20c8;}catch(_0x3b683b){return null;}}
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
