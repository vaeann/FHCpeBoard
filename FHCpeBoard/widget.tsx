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

const _0x5b2408=_0x306d;(function(_0x29dcd9,_0x5da1a6){const _0x3e5851=_0x306d,_0x539db2=_0x29dcd9();while(!![]){try{const _0x205eea=-parseInt(_0x3e5851(0x1b1))/0x1*(-parseInt(_0x3e5851(0x1cf))/0x2)+-parseInt(_0x3e5851(0x1cc))/0x3+-parseInt(_0x3e5851(0x1b5))/0x4*(parseInt(_0x3e5851(0x1d1))/0x5)+parseInt(_0x3e5851(0x1ca))/0x6*(parseInt(_0x3e5851(0x1d6))/0x7)+parseInt(_0x3e5851(0x1bb))/0x8*(parseInt(_0x3e5851(0x1c6))/0x9)+parseInt(_0x3e5851(0x1b0))/0xa+-parseInt(_0x3e5851(0x1b8))/0xb;if(_0x205eea===_0x5da1a6)break;else _0x539db2['push'](_0x539db2['shift']());}catch(_0x5661b6){_0x539db2['push'](_0x539db2['shift']());}}}(_0xc398,0xcd8e7));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x5b2408(0x1b9),DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x3aa227,_0x74b9a4){try{const _0x17b249=Keychain['get'](_0x3aa227);return _0x17b249===null||_0x17b249===undefined||_0x17b249===''?_0x74b9a4:String(_0x17b249)['trim']();}catch(_0x44ba6f){return _0x74b9a4;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2a3319){const _0x11a791=_0x5b2408;try{if(_0x2a3319[_0x11a791(0x1d0)]!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2a3319['token'])['trim']());if(_0x2a3319['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x2a3319['mac'])['trim']()||DEFAULT_MAC);if(_0x2a3319['deviceName']!==undefined)Keychain[_0x11a791(0x1c1)](NAME_KEY,String(_0x2a3319['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x40c3c9){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x40c3c9);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function _0xc398(){const _0x1502ce=['t3bLCMf0B3i','nJa5D3bzBuj3','DhjPBq','tfrfx0jbtKq','Bw9UDgHuEa','uMvZDwX0','nJG3ndC0nZa3mZnHmMyYzJy4nMy2zdy1mMu2zdy5nJy2zJzLmMu2mZzMnMqYzJrLnJu3ndC3nMy3mJzInta2yZyXnZq2nJzMnZi2zdjMnZi2ntCZnZqYzJy0nJu3nJy5nJm2ntjMnJK2ztC2nMy2yJy1ntm2ntCYnZy2otyZnJu','CMvWBgfJzq','zNjVBunOyxjdB2rL','r0vux1njtv9jtKzp','Dw5KzwzPBMvK','q1vdqW','uLntsq','CgfYC2u','BgvUz3rO','BwfJ','nJm3mJCWmgLpzhHxqW','nteZCNfeEerh','Dg9vChbLCKnHC2u','BNvSBa','q0jo','mJHduxfsteu','nuDbkW','nuCG','mtu5mdu5nJDeAgv6C0W','q1bfx1DjreDfvf9dqunirq','Dg9KyxLsEa','mJa0mtu0nffwuej0Ea','DMfSDwu','C3rYAw5NAwz5','twfPBLjVDxrLCG','Bwf4','zgv2AwnL','C2v0','B25SAw5Lrgv2AwnLCW','5lIT5zU95BM/55s1','AM9PBG','77Yb5Qoa5P+L572r57UC','mtHjrerwC0S','572r57UC6k+35Rgc5AsX6lsL','r0vux1jgx1njr05btf9jtKzp','Aw5JBhvKzxm','mta1odCWzefMvvrj','nta2yZC1nJC2otzLnwy0otq0','odq0mJGXtKnKyNbo','8j+tOsdLJ5BMLBdLROZMIjaGFcdMIjdLIP89','zNvSzMLSBgvK','mJzhsejZD1u','Dg9Rzw4','odu3ntvrD09yDNy','tMfTzq','ChvZAa','u0LouG'];_0xc398=function(){return _0x1502ce;};return _0xc398();}function getValidValue(_0x1b79ea,_0x5dbb97){if(_0x1b79ea===undefined||_0x1b79ea===null||_0x1b79ea==='')return _0x5dbb97;const _0x2bc59f=String(_0x1b79ea)['trim']();return _0x2bc59f==='-'||_0x2bc59f==='undefined'?_0x5dbb97:_0x2bc59f;}function firstValid(_0x39f50a,_0x4d626f){for(const _0x5d666f of _0x39f50a){const _0x2b9e5a=getValidValue(_0x5d666f,'');if(_0x2b9e5a)return _0x2b9e5a;}return _0x4d626f;}function resolveOperator(_0x302044,_0x3b0ae1){const _0x20a67b=getOperatorName(_0x3b0ae1&&_0x3b0ae1['Operator']||'',_0x3b0ae1&&_0x3b0ae1['SPN']||'');if(_0x20a67b==='未知'&&_0x302044&&_0x302044['SPN'])return String(_0x302044['SPN']);return _0x20a67b;}function formatUptime(_0xe8167d){const _0x1dc10c=_0x5b2408,_0x518a3a=parseInt(_0xe8167d||0x0)||0x0,_0x4bc71d=Math['floor'](_0x518a3a/0x15180),_0x2be75f=Math['floor'](_0x518a3a%0x15180/0xe10),_0x394e96=Math['floor'](_0x518a3a%0xe10/0x3c),_0x23d18e=[];if(_0x4bc71d>0x0)_0x23d18e['push'](_0x4bc71d+'天');if(_0x2be75f>0x0||_0x4bc71d>0x0)_0x23d18e['push'](_0x2be75f+'小时');return _0x23d18e['push'](_0x394e96+'分'),_0x23d18e[_0x1dc10c(0x1c4)]('\x20');}function formatUptimeShort(_0x5d027){const _0x181c97=_0x5b2408,_0x560a3a=parseInt(_0x5d027||0x0)||0x0,_0x4f6f73=Math['floor'](_0x560a3a/0x15180),_0x40016a=Math['floor'](_0x560a3a%0x15180/0xe10),_0x551c56=Math['floor'](_0x560a3a%0xe10/0x3c),_0x596ab6=[];if(_0x4f6f73>0x0)_0x596ab6['push'](_0x4f6f73+'天');if(_0x40016a>0x0||_0x4f6f73>0x0)_0x596ab6[_0x181c97(0x1d3)](_0x40016a+'时');return _0x596ab6[_0x181c97(0x1d3)](_0x551c56+'分'),_0x596ab6[_0x181c97(0x1c4)]('');}function trafficMbToBytes(_0x1d2111){const _0x30b293=parseFloat(_0x1d2111||0x0);if(isNaN(_0x30b293))return 0x0;return Math['round'](_0x30b293*0x400*0x400);}function formatTraffic(_0x1fd1d8){const _0x1b2466=Number(_0x1fd1d8||0x0);if(!isFinite(_0x1b2466)||_0x1b2466<=0x0)return'0M';const _0x1f12e6=0x400*0x400,_0x41bc12=0x400*_0x1f12e6;if(_0x1b2466>=_0x41bc12)return(_0x1b2466/_0x41bc12)['toFixed'](0x1)+'G';return(_0x1b2466/_0x1f12e6)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x31e092){const _0x4f2927=Number(_0x31e092||0x0);if(!isFinite(_0x4f2927)||_0x4f2927<=0x0)return'0';const _0x3da855=0x400,_0xb08630=0x400*_0x3da855,_0x4bff76=0x400*_0xb08630;if(_0x4f2927>=_0x4bff76){const _0x1265a6=_0x4f2927/_0x4bff76;return(_0x1265a6>=0x64?_0x1265a6['toFixed'](0x0):_0x1265a6['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x4f2927>=_0xb08630)return Math['round'](_0x4f2927/_0xb08630)+'M';if(_0x4f2927>=_0x3da855)return Math['round'](_0x4f2927/_0x3da855)+'K';return String(Math['round'](_0x4f2927));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function _0x306d(_0x899bd8,_0x3a2f53){const _0xc398d8=_0xc398();return _0x306d=function(_0x306d03,_0x56e471){_0x306d03=_0x306d03-0x1a3;let _0x38c006=_0xc398d8[_0x306d03];if(_0x306d['xjOKtC']===undefined){var _0x2a019a=function(_0x3aa227){const _0x74b9a4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x17b249='',_0x44ba6f='';for(let _0x2a3319=0x0,_0x40c3c9,_0x1b79ea,_0x5dbb97=0x0;_0x1b79ea=_0x3aa227['charAt'](_0x5dbb97++);~_0x1b79ea&&(_0x40c3c9=_0x2a3319%0x4?_0x40c3c9*0x40+_0x1b79ea:_0x1b79ea,_0x2a3319++%0x4)?_0x17b249+=String['fromCharCode'](0xff&_0x40c3c9>>(-0x2*_0x2a3319&0x6)):0x0){_0x1b79ea=_0x74b9a4['indexOf'](_0x1b79ea);}for(let _0x2bc59f=0x0,_0x39f50a=_0x17b249['length'];_0x2bc59f<_0x39f50a;_0x2bc59f++){_0x44ba6f+='%'+('00'+_0x17b249['charCodeAt'](_0x2bc59f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44ba6f);};_0x306d['ZkYYej']=_0x2a019a,_0x899bd8=arguments,_0x306d['xjOKtC']=!![];}const _0x48f5d8=_0xc398d8[0x0],_0x4e1bea=_0x306d03+_0x48f5d8,_0x393bef=_0x899bd8[_0x4e1bea];return!_0x393bef?(_0x38c006=_0x306d['ZkYYej'](_0x38c006),_0x899bd8[_0x4e1bea]=_0x38c006):_0x38c006=_0x393bef,_0x38c006;},_0x306d(_0x899bd8,_0x3a2f53);}function parseTrafficData(_0x5bd9b8){const _0x586bc9=_0x5b2408;if(!_0x5bd9b8)return ZERO_TRAFFIC;const _0x4122f4=_0x5bd9b8['day_rx_traffic']!==undefined||_0x5bd9b8['day_tx_traffic']!==undefined||_0x5bd9b8['month_rx_traffic']!==undefined||_0x5bd9b8['month_tx_traffic']!==undefined;if(!_0x4122f4)return{'todayBytes':Number(_0x5bd9b8['todayBytes'])||0x0,'monthBytes':Number(_0x5bd9b8['monthBytes'])||0x0,'todayRx':Number(_0x5bd9b8[_0x586bc9(0x1ba)])||0x0,'todayTx':Number(_0x5bd9b8['todayTx'])||0x0,'monthRx':Number(_0x5bd9b8['monthRx'])||0x0,'monthTx':Number(_0x5bd9b8[_0x586bc9(0x1a4)])||0x0};const _0x3dfeda=trafficMbToBytes(_0x5bd9b8['day_rx_traffic']),_0x4312ec=trafficMbToBytes(_0x5bd9b8['day_tx_traffic']),_0x1ff6cd=trafficMbToBytes(_0x5bd9b8['month_rx_traffic']),_0x2122aa=trafficMbToBytes(_0x5bd9b8['month_tx_traffic']);return{'todayBytes':_0x3dfeda+_0x4312ec,'monthBytes':_0x1ff6cd+_0x2122aa,'todayRx':_0x3dfeda,'todayTx':_0x4312ec,'monthRx':_0x1ff6cd,'monthTx':_0x2122aa};}function trafficRxRatio(_0x3867ee,_0x1f63a0){const _0x2e01cb=Number(_0x3867ee||0x0)+Number(_0x1f63a0||0x0);if(!isFinite(_0x2e01cb)||_0x2e01cb<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x3867ee||0x0)/_0x2e01cb));}function getOperatorName(_0x5021b0,_0x37b13f){const _0x50d365=_0x5b2408;if(!_0x5021b0)return _0x37b13f||'未知';const _0x2ee4e6=String(_0x5021b0)[_0x50d365(0x1b2)]();if(_0x2ee4e6['includes']('CMCC')||_0x2ee4e6==='中国移动'||_0x2ee4e6['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x2ee4e6['includes'](_0x50d365(0x1ab))||_0x2ee4e6==='中国联通'||_0x2ee4e6[_0x50d365(0x1c9)]('CHINA\x20UNICOM')||_0x2ee4e6['includes']('UNICOM'))return'中国联通';if(_0x2ee4e6['includes']('CTCC')||_0x2ee4e6==='CT'||_0x2ee4e6==='中国电信'||_0x2ee4e6['includes']('CHINA\x20TELECOM')||_0x2ee4e6['includes']('TELECOM'))return'中国电信';if(_0x2ee4e6['includes'](_0x50d365(0x1b4))||_0x2ee4e6==='中国广电'||_0x2ee4e6['includes']('CHINA\x20BROADCAST'))return _0x50d365(0x1c3);return _0x5021b0;}function getSignalColor(_0x3d84e4,_0x32900d){let _0x4ba934=parseInt(_0x3d84e4);if(isNaN(_0x4ba934))_0x4ba934=-0x78;if(_0x4ba934>-0x59)return _0x32900d['ok'];if(_0x4ba934>-0x63)return _0x32900d['warn'];return _0x32900d['bad'];}function getSinrColor(_0x306716,_0x262fd2){let _0x404eb0=parseFloat(_0x306716);if(isNaN(_0x404eb0))_0x404eb0=0x0;if(_0x404eb0>0xf)return _0x262fd2['ok'];if(_0x404eb0>0x8)return _0x262fd2['warn'];return _0x262fd2['bad'];}function getAllBands(_0x3ea0ae,_0x3d5c73,_0x49f31b){const _0x571965=[],_0x386dbe=_0x49f31b?'N':'B',_0x44f06a=getValidValue(_0x3ea0ae?.['BAND']||_0x3ea0ae?.['NR_BAND']||_0x3ea0ae?.['LTE_BAND'],'');if(_0x44f06a)_0x571965['push'](_0x386dbe+_0x44f06a);for(const _0x41d3bd of _0x3d5c73?.['sub_CA_info']||[]){const _0x396d56=String(_0x41d3bd?.['Band']||'');if(_0x396d56&&_0x396d56!=='-')_0x571965['push'](_0x386dbe+_0x396d56);}if(_0x571965['length']===0x0)_0x571965['push'](_0x49f31b?'N78':'B3');return _0x571965;}function getCaBadgeText(_0x13fb7f,_0x43bf42,_0x343502){const _0xd4ffa5=_0x5b2408,_0x2dd042=(_0x43bf42?'5G\x20':'4G\x20')+_0x343502;if(!_0x43bf42)return _0x2dd042;const _0x45a651=0x1+(_0x13fb7f&&_0x13fb7f['sub_CA_info']||[])['length'];if(_0x45a651>=0x4)return _0xd4ffa5(0x1b6);if(_0x45a651===0x3)return'5GA';if(_0x45a651===0x2)return'5G+';return _0x2dd042;}function getCarrierCountText(_0x3d3ffe){const _0x17f03c=_0x5b2408,_0x4b9a12=(_0x3d3ffe&&_0x3d3ffe['sub_CA_info']||[])[_0x17f03c(0x1ae)];if(_0x4b9a12===0x0)return'单载波';if(_0x4b9a12===0x1)return'双载波';if(_0x4b9a12===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x4cb463,_0x387715,_0x2ce5d6){const _0x32caf5=_0x5b2408,_0x26bf10=String(_0x2ce5d6||'')['toUpperCase']();if(!_0x387715){if(!_0x26bf10||_0x26bf10==='4G'||_0x26bf10==='LTE')return'4G\x20LTE';return'4G\x20'+_0x26bf10;}const _0x63926a=0x1+(_0x4cb463&&_0x4cb463['sub_CA_info']||[])['length'];if(_0x63926a>=0x4)return'5GA+';if(_0x63926a===0x3)return'5GA';if(_0x63926a===0x2)return'5G+';return _0x26bf10?_0x32caf5(0x1b7)+_0x26bf10:'5G\x20SA';}function rsrpToPercent(_0x367c99){let _0x495770=parseInt(_0x367c99);if(isNaN(_0x495770))_0x495770=-0x78;const _0x28a88e=Math['min'](-0x46,Math['max'](-0x78,_0x495770)),_0x2254cc=(_0x28a88e+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x2254cc*0x5a));}function sinrToPercent(_0x58b54c){const _0x44aa7c=_0x5b2408;let _0x3e9486=parseFloat(_0x58b54c);if(isNaN(_0x3e9486))_0x3e9486=0x0;return Math['min'](0x64,Math[_0x44aa7c(0x1bf)](0x0,_0x3e9486/0x19*0x64));}function resolveDeviceName(_0x60cb5d,_0x21fec8){const _0x8afc31=_0x5b2408,_0x253850=_0x60cb5d&&_0x60cb5d['Name']!=null?String(_0x60cb5d[_0x8afc31(0x1d2)])['trim']():'';if(!_0x253850)return _0x21fec8;if(_0x253850==='--'||_0x253850===_0x8afc31(0x1aa)||_0x253850===_0x8afc31(0x1b3)||_0x253850==='0')return _0x21fec8;return _0x253850;}function rsrpToBars(_0x188166){const _0x12de6d=parseInt(_0x188166);if(isNaN(_0x12de6d))return 0x0;if(_0x12de6d>=-0x55)return 0x4;if(_0x12de6d>=-0x5f)return 0x3;if(_0x12de6d>=-0x69)return 0x2;if(_0x12de6d>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x181daa){const _0x1633b0=_0x5b2408;if(!_0x181daa)return 0x0;if(typeof _0x181daa['onlineDevices']==='number')return _0x181daa[_0x1633b0(0x1c2)];const _0x4441be=_0x181daa['MainBaseInfo'];if(!Array['isArray'](_0x4441be))return 0x0;return _0x4441be['filter'](_0x28091c=>_0x28091c&&String(_0x28091c['NetStatus'])==='1')[_0x1633b0(0x1ae)];}function urlDecode(_0x134680){const _0x2ef8f2=_0x5b2408,_0x3deecc=[];for(let _0x3c91d4=0x0;_0x3c91d4<_0x134680['length'];_0x3c91d4+=0x2)_0x3deecc['push'](parseInt(_0x134680['substr'](_0x3c91d4,0x2),0x10));let _0x3aa6c4='';for(let _0x1a2b67=0x0;_0x1a2b67<_0x3deecc['length'];){const _0x4b78dc=_0x3deecc[_0x1a2b67];if(_0x4b78dc<0x80)_0x3aa6c4+=String[_0x2ef8f2(0x1a8)](_0x4b78dc),_0x1a2b67++;else{if(_0x4b78dc>>0x5===0x6)_0x3aa6c4+=String['fromCharCode']((_0x4b78dc&0x1f)<<0x6|_0x3deecc[_0x1a2b67+0x1]&0x3f),_0x1a2b67+=0x2;else _0x4b78dc>>0x4===0xe?(_0x3aa6c4+=String['fromCharCode']((_0x4b78dc&0xf)<<0xc|(_0x3deecc[_0x1a2b67+0x1]&0x3f)<<0x6|_0x3deecc[_0x1a2b67+0x2]&0x3f),_0x1a2b67+=0x3):(_0x3aa6c4+=String['fromCharCode']((_0x4b78dc&0x7)<<0x12|(_0x3deecc[_0x1a2b67+0x1]&0x3f)<<0xc|(_0x3deecc[_0x1a2b67+0x2]&0x3f)<<0x6|_0x3deecc[_0x1a2b67+0x3]),_0x1a2b67+=0x4);}}return _0x3aa6c4;}const REMOTE_URL=urlDecode(_0x5b2408(0x1a6)),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0x5b2408(0x1c5),'device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x457245='0123456789ABCDEF';let _0x2554ca='';for(let _0x7ba7e3=0x0;_0x7ba7e3<0x20;_0x7ba7e3++)_0x2554ca+=_0x457245[Math['floor'](Math['random']()*0x10)];return _0x2554ca;}function generateSequenceId(_0x19e2f3){return _0x19e2f3+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x1e39f0){const _0x583a44=_0x5b2408;if(!_0x1e39f0||_0x1e39f0[_0x583a44(0x1ae)]===0x0)return null;if(_0x1e39f0['some'](_0x566812=>AUTH_ERROR_CODES['indexOf'](_0x566812)>=0x0))return'auth';if(_0x1e39f0['some'](_0x377749=>DEVICE_ERROR_CODES['indexOf'](_0x377749)>=0x0))return _0x583a44(0x1c0);return'network';}function readResult(_0x4b89b4,_0x194ac1){const _0x4d8b8c=_0x5b2408;if(!_0x4b89b4||_0x4b89b4['status']!==_0x4d8b8c(0x1ce)||!_0x4b89b4['value'])return _0x194ac1[_0x4d8b8c(0x1d3)](NET_ERROR_CODE),null;const _0x5cc091=_0x4b89b4[_0x4d8b8c(0x1bc)];if(_0x5cc091['resultCode']===0x0)return _0x5cc091;return _0x194ac1['push'](typeof _0x5cc091['resultCode']==='number'?_0x5cc091['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x256fb6,_0x56d4fc,_0x54e17,_0x4beaf2,_0x3f5657){const _0x1ff493=_0x5b2408;if(!_0x54e17)return null;const _0x3ddce0={'CmdType':_0x256fb6,..._0x56d4fc};if(!_0x3ddce0['SequenceId'])_0x3ddce0['SequenceId']=generateSequenceId(_0x256fb6);const _0x233e9a={'appVersion':urlDecode('322e322e3531'),'mac':_0x4beaf2,'timeout':0x3,'token':_0x54e17,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode(_0x1ff493(0x1cb)),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x3ddce0)}),'operatorId':getOperatorId()},_0x6ec2ff=new AbortController(),_0x5d77a8=setTimeout(()=>{try{_0x6ec2ff['abort']();}catch(_0x3c4b55){}},_0x3f5657);try{const _0x3211a7=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x54e17},'body':JSON['stringify'](_0x233e9a),'signal':_0x6ec2ff['signal']}),_0x1d844a=await _0x3211a7['json']();if(_0x1d844a&&_0x1d844a['rspParam']){const _0x3f20fc=JSON[_0x1ff493(0x1ad)](_0x1d844a['rspParam']);if(_0x3f20fc[_0x1ff493(0x1a5)]===0x0&&_0x3f20fc['return_Parameter']){const _0x54fe72=String(_0x3f20fc['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')[_0x1ff493(0x1a7)](/\\/g,'')[_0x1ff493(0x1d7)](),_0x5bcb84=JSON['parse'](decodeBase64Utf8(_0x54fe72));return{..._0x5bcb84,'resultCode':0x0};}}return _0x1d844a||{'resultCode':NET_ERROR_CODE};}catch(_0x1cfc2f){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x1ff493(0x1c7)};}finally{clearTimeout(_0x5d77a8);}}function decodeBase64Utf8(_0x33f2d1){const _0x548512=atob(_0x33f2d1);try{const _0x83938f=new Uint8Array(_0x548512['length']);for(let _0x388283=0x0;_0x388283<_0x548512['length'];_0x388283++)_0x83938f[_0x388283]=_0x548512['charCodeAt'](_0x388283);return new TextDecoder('utf-8')['decode'](_0x83938f);}catch(_0x21be01){return _0x548512;}}async function fetchCpeApi(_0x4215c8,_0x32a91c,_0xa02698,_0x501962={},_0x5b2f1f=0xbb8){if(!_0x32a91c)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x4215c8,_0x501962,_0x32a91c,_0xa02698,_0x5b2f1f);}function isEmpty(_0x163249){return!_0x163249||typeof _0x163249==='object'&&Object['keys'](_0x163249)['length']===0x0;}async function fetchAll(_0x221e15){const _0x4955b2=_0x5b2408,_0x13697d=_0x221e15['token'],_0x419290=_0x221e15[_0x4955b2(0x1af)],_0x2947bd=0xbb8,_0x39fd12=await Promise['allSettled']([fetchCpeApi(_0x4955b2(0x1c8),_0x13697d,_0x419290,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x13697d,_0x419290,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x13697d,_0x419290,{},0x9c4),fetchCpeApi(_0x4955b2(0x1a9),_0x13697d,_0x419290,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x13697d,_0x419290,{},0xbb8)]),_0x355459=[];let _0x53cfaa=readResult(_0x39fd12[0x0],_0x355459),_0x2bf218=readResult(_0x39fd12[0x1],_0x355459),_0x147f5c=readResult(_0x39fd12[0x2],_0x355459),_0x1458f5=readResult(_0x39fd12[0x3],_0x355459);const _0x5bd5fa=readResult(_0x39fd12[0x4],_0x355459);if(_0x147f5c)_0x147f5c=_0x147f5c[_0x4955b2(0x1be)]||_0x147f5c['Router']||_0x147f5c;const _0x36c05b=[_0x53cfaa,_0x2bf218,_0x147f5c,_0x1458f5,_0x5bd5fa]['filter'](_0x178f3b=>!isEmpty(_0x178f3b))['length'],_0x5b4cca=_0x36c05b===0x0?classifyFault(_0x355459):null;return console['log'](_0x4955b2(0x1cd)+_0x36c05b+'/5\x20|\x20fault='+(_0x5b4cca||'-')+'\x20|\x20失败码=['+_0x355459['join'](',')+']'),{'rf':_0x53cfaa,'ca':_0x2bf218,'topo':_0x147f5c,'sim':_0x1458f5,'traffic':_0x5bd5fa,'failCodes':_0x355459,'fault':_0x5b4cca,'successCount':_0x36c05b};}function saveCache(_0x33e4fd){const _0x109bd5=_0x5b2408;try{const _0x537693=parseTrafficData(_0x33e4fd['traffic']),_0x3b169b={'rf':{'WorkMode':_0x33e4fd['rf']?.['WorkMode'],'SSB_RSRP':_0x33e4fd['rf']?.['SSB_RSRP'],'RSRP':_0x33e4fd['rf']?.['RSRP'],'SSB_SINR':_0x33e4fd['rf']?.['SSB_SINR'],'SINR':_0x33e4fd['rf']?.[_0x109bd5(0x1d4)],'SSB_RSRQ':_0x33e4fd['rf']?.['SSB_RSRQ'],'RSRQ':_0x33e4fd['rf']?.['RSRQ'],'SSB_RSSI':_0x33e4fd['rf']?.['SSB_RSSI'],'RSSI':_0x33e4fd['rf']?.[_0x109bd5(0x1ac)],'BAND':_0x33e4fd['rf']?.['BAND'],'NR_BAND':_0x33e4fd['rf']?.['NR_BAND'],'LTE_BAND':_0x33e4fd['rf']?.[_0x109bd5(0x1a3)],'PCI':_0x33e4fd['rf']?.['PCI'],'SPN':_0x33e4fd['rf']?.['SPN']},'ca':{'main_CA_info':_0x33e4fd['ca']?.['main_CA_info']||{},'sub_CA_info':_0x33e4fd['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x33e4fd['topo']?.['NetStatus'],'UpTime':_0x33e4fd['topo']?.['UpTime'],'Name':_0x33e4fd['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x33e4fd['topo'])},'sim':{'Operator':_0x33e4fd['sim']?.[_0x109bd5(0x1d5)],'SPN':_0x33e4fd['sim']?.['SPN']},'traffic':{'todayBytes':_0x537693['todayBytes'],'monthBytes':_0x537693['monthBytes'],'todayRx':_0x537693['todayRx'],'todayTx':_0x537693['todayTx'],'monthRx':_0x537693['monthRx'],'monthTx':_0x537693['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON[_0x109bd5(0x1bd)](_0x3b169b));}catch(_0x16da72){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x16da72);}}function loadCache(){try{const _0x4512db=Keychain['get'](KEY_CACHE);if(!_0x4512db)return null;const _0x44fa06=JSON['parse'](_0x4512db);if(!_0x44fa06||typeof _0x44fa06!=='object')return null;return _0x44fa06;}catch(_0x247e06){return null;}}
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
