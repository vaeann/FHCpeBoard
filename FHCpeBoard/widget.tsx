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

const _0x379719=_0x2337;(function(_0x4e9afb,_0x1bbece){const _0x3879b3=_0x2337,_0x4def6c=_0x4e9afb();while(!![]){try{const _0x2695db=parseInt(_0x3879b3(0x1ca))/0x1+parseInt(_0x3879b3(0x1a2))/0x2+parseInt(_0x3879b3(0x1b1))/0x3+-parseInt(_0x3879b3(0x1ac))/0x4+parseInt(_0x3879b3(0x19e))/0x5*(-parseInt(_0x3879b3(0x1a0))/0x6)+-parseInt(_0x3879b3(0x1b0))/0x7*(-parseInt(_0x3879b3(0x1c4))/0x8)+parseInt(_0x3879b3(0x1b9))/0x9*(-parseInt(_0x3879b3(0x1ba))/0xa);if(_0x2695db===_0x1bbece)break;else _0x4def6c['push'](_0x4def6c['shift']());}catch(_0x1c2711){_0x4def6c['push'](_0x4def6c['shift']());}}}(_0x407d,0xb1a8d));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x5d51b7,_0x1a047a){const _0x101128=_0x2337;try{const _0x429cb8=Keychain[_0x101128(0x1a1)](_0x5d51b7);return _0x429cb8===null||_0x429cb8===undefined||_0x429cb8===''?_0x1a047a:String(_0x429cb8)['trim']();}catch(_0x4a94a9){return _0x1a047a;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x2e89e1){const _0x5e07f5=_0x2337;try{if(_0x2e89e1['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x2e89e1['token'])['trim']());if(_0x2e89e1['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x2e89e1['mac'])['trim']()||DEFAULT_MAC);if(_0x2e89e1['deviceName']!==undefined)Keychain['set'](NAME_KEY,String(_0x2e89e1['deviceName'])[_0x5e07f5(0x1cd)]()||DEFAULT_NAME);}catch(_0x39d3d3){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x39d3d3);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x427d2e,_0x3e2034){const _0x2ab5bb=_0x2337;if(_0x427d2e===undefined||_0x427d2e===null||_0x427d2e==='')return _0x3e2034;const _0x4b5467=String(_0x427d2e)[_0x2ab5bb(0x1cd)]();return _0x4b5467==='-'||_0x4b5467==='undefined'?_0x3e2034:_0x4b5467;}function firstValid(_0x261dcd,_0x5e7221){for(const _0x2898f8 of _0x261dcd){const _0x1d6698=getValidValue(_0x2898f8,'');if(_0x1d6698)return _0x1d6698;}return _0x5e7221;}function resolveOperator(_0x49e79e,_0x1ad6b3){const _0x578584=getOperatorName(_0x1ad6b3&&_0x1ad6b3['Operator']||'',_0x1ad6b3&&_0x1ad6b3['SPN']||'');if(_0x578584==='未知'&&_0x49e79e&&_0x49e79e['SPN'])return String(_0x49e79e['SPN']);return _0x578584;}function formatUptime(_0x168589){const _0x2c1f86=_0x2337,_0x3968fc=parseInt(_0x168589||0x0)||0x0,_0x261548=Math['floor'](_0x3968fc/0x15180),_0x1c4439=Math[_0x2c1f86(0x1a8)](_0x3968fc%0x15180/0xe10),_0x5a1db7=Math['floor'](_0x3968fc%0xe10/0x3c),_0x3088ea=[];if(_0x261548>0x0)_0x3088ea['push'](_0x261548+'天');if(_0x1c4439>0x0||_0x261548>0x0)_0x3088ea['push'](_0x1c4439+'小时');return _0x3088ea[_0x2c1f86(0x1bd)](_0x5a1db7+'分'),_0x3088ea['join']('\x20');}function formatUptimeShort(_0x3a39fd){const _0xbce567=_0x2337,_0x285705=parseInt(_0x3a39fd||0x0)||0x0,_0x1fb9fe=Math['floor'](_0x285705/0x15180),_0x433cba=Math['floor'](_0x285705%0x15180/0xe10),_0x2e052f=Math['floor'](_0x285705%0xe10/0x3c),_0x29fcb5=[];if(_0x1fb9fe>0x0)_0x29fcb5[_0xbce567(0x1bd)](_0x1fb9fe+'天');if(_0x433cba>0x0||_0x1fb9fe>0x0)_0x29fcb5[_0xbce567(0x1bd)](_0x433cba+'时');return _0x29fcb5['push'](_0x2e052f+'分'),_0x29fcb5[_0xbce567(0x1b2)]('');}function trafficMbToBytes(_0x597fc7){const _0x443335=_0x2337,_0x528597=parseFloat(_0x597fc7||0x0);if(isNaN(_0x528597))return 0x0;return Math[_0x443335(0x1ad)](_0x528597*0x400*0x400);}function formatTraffic(_0x133f99){const _0x5a937c=Number(_0x133f99||0x0);if(!isFinite(_0x5a937c)||_0x5a937c<=0x0)return'0M';const _0x2fe752=0x400*0x400,_0x97dfc=0x400*_0x2fe752;if(_0x5a937c>=_0x97dfc)return(_0x5a937c/_0x97dfc)['toFixed'](0x1)+'G';return(_0x5a937c/_0x2fe752)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x2f8d1e){const _0xfd0220=_0x2337,_0x18079d=Number(_0x2f8d1e||0x0);if(!isFinite(_0x18079d)||_0x18079d<=0x0)return'0';const _0x17e8bc=0x400,_0x354a3b=0x400*_0x17e8bc,_0x5a1c3e=0x400*_0x354a3b;if(_0x18079d>=_0x5a1c3e){const _0x1a50fa=_0x18079d/_0x5a1c3e;return(_0x1a50fa>=0x64?_0x1a50fa['toFixed'](0x0):_0x1a50fa['toFixed'](0x1)[_0xfd0220(0x1c3)](/\.0$/,''))+'G';}if(_0x18079d>=_0x354a3b)return Math['round'](_0x18079d/_0x354a3b)+'M';if(_0x18079d>=_0x17e8bc)return Math['round'](_0x18079d/_0x17e8bc)+'K';return String(Math[_0xfd0220(0x1ad)](_0x18079d));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x951f83){const _0xc134a0=_0x2337;if(!_0x951f83)return ZERO_TRAFFIC;const _0xbb713a=_0x951f83[_0xc134a0(0x19c)]!==undefined||_0x951f83['day_tx_traffic']!==undefined||_0x951f83['month_rx_traffic']!==undefined||_0x951f83['month_tx_traffic']!==undefined;if(!_0xbb713a)return{'todayBytes':Number(_0x951f83['todayBytes'])||0x0,'monthBytes':Number(_0x951f83[_0xc134a0(0x1c7)])||0x0,'todayRx':Number(_0x951f83['todayRx'])||0x0,'todayTx':Number(_0x951f83['todayTx'])||0x0,'monthRx':Number(_0x951f83[_0xc134a0(0x1b8)])||0x0,'monthTx':Number(_0x951f83['monthTx'])||0x0};const _0x1cc46f=trafficMbToBytes(_0x951f83['day_rx_traffic']),_0x5557dd=trafficMbToBytes(_0x951f83[_0xc134a0(0x1bb)]),_0x3f96c7=trafficMbToBytes(_0x951f83['month_rx_traffic']),_0x1720f7=trafficMbToBytes(_0x951f83['month_tx_traffic']);return{'todayBytes':_0x1cc46f+_0x5557dd,'monthBytes':_0x3f96c7+_0x1720f7,'todayRx':_0x1cc46f,'todayTx':_0x5557dd,'monthRx':_0x3f96c7,'monthTx':_0x1720f7};}function trafficRxRatio(_0x171b63,_0x3ce3f9){const _0x407a77=Number(_0x171b63||0x0)+Number(_0x3ce3f9||0x0);if(!isFinite(_0x407a77)||_0x407a77<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x171b63||0x0)/_0x407a77));}function getOperatorName(_0x46c556,_0x32daf9){const _0xed455c=_0x2337;if(!_0x46c556)return _0x32daf9||'未知';const _0x414f7a=String(_0x46c556)[_0xed455c(0x1af)]();if(_0x414f7a[_0xed455c(0x1a7)]('CMCC')||_0x414f7a==='中国移动'||_0x414f7a[_0xed455c(0x1a7)]('CHINA\x20MOBILE'))return'中国移动';if(_0x414f7a['includes']('CUCC')||_0x414f7a==='中国联通'||_0x414f7a[_0xed455c(0x1a7)]('CHINA\x20UNICOM')||_0x414f7a['includes']('UNICOM'))return _0xed455c(0x1aa);if(_0x414f7a[_0xed455c(0x1a7)]('CTCC')||_0x414f7a==='CT'||_0x414f7a==='中国电信'||_0x414f7a['includes']('CHINA\x20TELECOM')||_0x414f7a['includes']('TELECOM'))return'中国电信';if(_0x414f7a['includes']('CBN')||_0x414f7a===_0xed455c(0x1a6)||_0x414f7a['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x46c556;}function getSignalColor(_0x5877bc,_0xe18cea){let _0x462e0b=parseInt(_0x5877bc);if(isNaN(_0x462e0b))_0x462e0b=-0x78;if(_0x462e0b>-0x59)return _0xe18cea['ok'];if(_0x462e0b>-0x63)return _0xe18cea['warn'];return _0xe18cea['bad'];}function getSinrColor(_0x428a5e,_0x5c2336){let _0x346f9d=parseFloat(_0x428a5e);if(isNaN(_0x346f9d))_0x346f9d=0x0;if(_0x346f9d>0xf)return _0x5c2336['ok'];if(_0x346f9d>0x8)return _0x5c2336['warn'];return _0x5c2336['bad'];}function getAllBands(_0x2141f7,_0x1b7b91,_0x4cdc46){const _0x448df7=_0x2337,_0xe3fe9=[],_0x36bd78=_0x4cdc46?'N':'B',_0x245b02=getValidValue(_0x2141f7?.[_0x448df7(0x1c0)]||_0x2141f7?.['NR_BAND']||_0x2141f7?.['LTE_BAND'],'');if(_0x245b02)_0xe3fe9['push'](_0x36bd78+_0x245b02);for(const _0x49d79d of _0x1b7b91?.[_0x448df7(0x1ce)]||[]){const _0x33151f=String(_0x49d79d?.['Band']||'');if(_0x33151f&&_0x33151f!=='-')_0xe3fe9['push'](_0x36bd78+_0x33151f);}if(_0xe3fe9[_0x448df7(0x1bc)]===0x0)_0xe3fe9['push'](_0x4cdc46?'N78':'B3');return _0xe3fe9;}function _0x407d(){const _0x2501f5=['C2LT','C3rYAw5NAwz5','qKfora','C3rHDhvZ','572r57UC6k+35Rgc5AsX6lsL','CMvWBgfJzq','ndbnuLbuveW','Dg9tDhjPBMC','B25SAw5Lrgv2AwnLCW','Bw9UDgHcExrLCW','572r57UC5lIn5y+V55sOcUIVT+AJGoAFPEAjI+ACUUE9KEE7Na','zMLSDgvY','odaYnZa2ufD1tvrS','Dg9Rzw4','CMv0DxjUx1bHCMfTzxrLCG','DhjPBq','C3vIx0nbx2LUzM8','zgf5x3j4x3rYywzMAwm','nZq2ntCYnMq2otzLnJe2yW','mJeWmZvsAwjkCg0','BwLU','mtjxquPNwNa','z2v0','mJi0mZu0ngP3yxjTzq','DMfSDwu','A2v5CW','Dg9WBW','5lIT5zU95BM/55s1','Aw5JBhvKzxm','zMXVB3i','Bg9N','5lIT5zU96igu6ycA','BNvTyMvY','mtu5mta2ngfoAefvtG','CM91BMq','zgvJB2rL','Dg9vChbLCKnHC2u','mZa1mdmYtu15Evzy','ntuZmZuWuuLJz1ng','AM9PBG','C2LNBMfS','ywXSu2v0DgXLza','BM93','BwfPBL9dqv9PBMzV','nta2zJCZnZq','Bw9UDgHsEa','mZaXnvHLz0rbAa','mZu2mtbKq1Dnvvi','zgf5x3r4x3rYywzMAwm','BgvUz3rO','ChvZAa'];_0x407d=function(){return _0x2501f5;};return _0x407d();}function getCaBadgeText(_0x4f6e34,_0x5ecaef,_0x4ee147){const _0x999d1e=_0x2337,_0x1f0c58=(_0x5ecaef?'5G\x20':'4G\x20')+_0x4ee147;if(!_0x5ecaef)return _0x1f0c58;const _0xdcb58d=0x1+(_0x4f6e34&&_0x4f6e34['sub_CA_info']||[])[_0x999d1e(0x1bc)];if(_0xdcb58d>=0x4)return'5GA+';if(_0xdcb58d===0x3)return'5GA';if(_0xdcb58d===0x2)return'5G+';return _0x1f0c58;}function getCarrierCountText(_0x2454c5){const _0xc367f6=_0x2337,_0x21c84c=(_0x2454c5&&_0x2454c5['sub_CA_info']||[])[_0xc367f6(0x1bc)];if(_0x21c84c===0x0)return'单载波';if(_0x21c84c===0x1)return'双载波';if(_0x21c84c===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x6c6cc0,_0x429b7b,_0x3b96e2){const _0x39625c=String(_0x3b96e2||'')['toUpperCase']();if(!_0x429b7b){if(!_0x39625c||_0x39625c==='4G'||_0x39625c==='LTE')return'4G\x20LTE';return'4G\x20'+_0x39625c;}const _0x468437=0x1+(_0x6c6cc0&&_0x6c6cc0['sub_CA_info']||[])['length'];if(_0x468437>=0x4)return'5GA+';if(_0x468437===0x3)return'5GA';if(_0x468437===0x2)return'5G+';return _0x39625c?'5G\x20'+_0x39625c:'5G\x20SA';}function rsrpToPercent(_0x76a3e5){let _0x1de2c1=parseInt(_0x76a3e5);if(isNaN(_0x1de2c1))_0x1de2c1=-0x78;const _0x1924ac=Math['min'](-0x46,Math['max'](-0x78,_0x1de2c1)),_0xf04530=(_0x1924ac+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0xf04530*0x5a));}function sinrToPercent(_0x2bfa64){const _0x427c58=_0x2337;let _0xd06e5f=parseFloat(_0x2bfa64);if(isNaN(_0xd06e5f))_0xd06e5f=0x0;return Math[_0x427c58(0x19f)](0x64,Math['max'](0x0,_0xd06e5f/0x19*0x64));}function resolveDeviceName(_0x12cd02,_0x2d6a77){const _0xe1b45e=_0x12cd02&&_0x12cd02['Name']!=null?String(_0x12cd02['Name'])['trim']():'';if(!_0xe1b45e)return _0x2d6a77;if(_0xe1b45e==='--'||_0xe1b45e==='undefined'||_0xe1b45e==='null'||_0xe1b45e==='0')return _0x2d6a77;return _0xe1b45e;}function rsrpToBars(_0x1a6cff){const _0x538d0a=parseInt(_0x1a6cff);if(isNaN(_0x538d0a))return 0x0;if(_0x538d0a>=-0x55)return 0x4;if(_0x538d0a>=-0x5f)return 0x3;if(_0x538d0a>=-0x69)return 0x2;if(_0x538d0a>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x29040a){const _0x270571=_0x2337;if(!_0x29040a)return 0x0;if(typeof _0x29040a[_0x270571(0x1c6)]===_0x270571(0x1ab))return _0x29040a['onlineDevices'];const _0xab6939=_0x29040a['MainBaseInfo'];if(!Array['isArray'](_0xab6939))return 0x0;return _0xab6939[_0x270571(0x1c9)](_0xd3eb62=>_0xd3eb62&&String(_0xd3eb62['NetStatus'])==='1')['length'];}function urlDecode(_0x27122e){const _0x42d846=[];for(let _0x50212a=0x0;_0x50212a<_0x27122e['length'];_0x50212a+=0x2)_0x42d846['push'](parseInt(_0x27122e['substr'](_0x50212a,0x2),0x10));let _0x2f7270='';for(let _0x278d02=0x0;_0x278d02<_0x42d846['length'];){const _0xcc5615=_0x42d846[_0x278d02];if(_0xcc5615<0x80)_0x2f7270+=String['fromCharCode'](_0xcc5615),_0x278d02++;else{if(_0xcc5615>>0x5===0x6)_0x2f7270+=String['fromCharCode']((_0xcc5615&0x1f)<<0x6|_0x42d846[_0x278d02+0x1]&0x3f),_0x278d02+=0x2;else _0xcc5615>>0x4===0xe?(_0x2f7270+=String['fromCharCode']((_0xcc5615&0xf)<<0xc|(_0x42d846[_0x278d02+0x1]&0x3f)<<0x6|_0x42d846[_0x278d02+0x2]&0x3f),_0x278d02+=0x3):(_0x2f7270+=String['fromCharCode']((_0xcc5615&0x7)<<0x12|(_0x42d846[_0x278d02+0x1]&0x3f)<<0xc|(_0x42d846[_0x278d02+0x2]&0x3f)<<0x6|_0x42d846[_0x278d02+0x3]),_0x278d02+=0x4);}}return _0x2f7270;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':_0x379719(0x1c8),'device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x9fb722=_0x379719;return Date[_0x9fb722(0x1b5)]()[_0x9fb722(0x1c5)]();}function generateUUID(){const _0x2f4118='0123456789ABCDEF';let _0xe3b5d8='';for(let _0x5ad07a=0x0;_0x5ad07a<0x20;_0x5ad07a++)_0xe3b5d8+=_0x2f4118[Math['floor'](Math['random']()*0x10)];return _0xe3b5d8;}function generateSequenceId(_0x275a93){return _0x275a93+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x3decb7){if(!_0x3decb7||_0x3decb7['length']===0x0)return null;if(_0x3decb7['some'](_0x2dec74=>AUTH_ERROR_CODES['indexOf'](_0x2dec74)>=0x0))return'auth';if(_0x3decb7['some'](_0x7372fa=>DEVICE_ERROR_CODES['indexOf'](_0x7372fa)>=0x0))return'device';return'network';}function readResult(_0x5a9c50,_0x3b7732){const _0x489ff8=_0x379719;if(!_0x5a9c50||_0x5a9c50[_0x489ff8(0x1c1)]!=='fulfilled'||!_0x5a9c50[_0x489ff8(0x1a3)])return _0x3b7732['push'](NET_ERROR_CODE),null;const _0x1e7792=_0x5a9c50['value'];if(_0x1e7792['resultCode']===0x0)return _0x1e7792;return _0x3b7732['push'](typeof _0x1e7792['resultCode']===_0x489ff8(0x1ab)?_0x1e7792['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x534433,_0x581f30,_0x11dc6f,_0x444efa,_0x39e87e){const _0x23fa15=_0x379719;if(!_0x11dc6f)return null;const _0x4e7b2e={'CmdType':_0x534433,..._0x581f30};if(!_0x4e7b2e['SequenceId'])_0x4e7b2e['SequenceId']=generateSequenceId(_0x534433);const _0xe5dc20={'appVersion':urlDecode('322e322e3531'),'mac':_0x444efa,'timeout':0x3,'token':_0x11dc6f,'appType':urlDecode(_0x23fa15(0x19d)),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode(_0x23fa15(0x1b7)),'Parameter':JSON['stringify'](_0x4e7b2e)}),'operatorId':getOperatorId()},_0x49fa86=new AbortController(),_0x58fd36=setTimeout(()=>{try{_0x49fa86['abort']();}catch(_0x330cb3){}},_0x39e87e);try{const _0xf8b063=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x11dc6f},'body':JSON[_0x23fa15(0x1bf)](_0xe5dc20),'signal':_0x49fa86[_0x23fa15(0x1b3)]}),_0x5aeab9=await _0xf8b063['json']();if(_0x5aeab9&&_0x5aeab9['rspParam']){const _0x3c8144=JSON['parse'](_0x5aeab9['rspParam']);if(_0x3c8144['Result']===0x0&&_0x3c8144['return_Parameter']){const _0x7fb242=String(_0x3c8144[_0x23fa15(0x1cc)])[_0x23fa15(0x1c3)](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')[_0x23fa15(0x1cd)](),_0x10ac1e=JSON['parse'](decodeBase64Utf8(_0x7fb242));return{..._0x10ac1e,'resultCode':0x0};}}return _0x5aeab9||{'resultCode':NET_ERROR_CODE};}catch(_0x4783d5){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x23fa15(0x1c2)};}finally{clearTimeout(_0x58fd36);}}function decodeBase64Utf8(_0xf3ae84){const _0x1787b3=_0x379719,_0x1b055b=atob(_0xf3ae84);try{const _0xb6be5=new Uint8Array(_0x1b055b['length']);for(let _0x174a9a=0x0;_0x174a9a<_0x1b055b['length'];_0x174a9a++)_0xb6be5[_0x174a9a]=_0x1b055b['charCodeAt'](_0x174a9a);return new TextDecoder('utf-8')[_0x1787b3(0x1ae)](_0xb6be5);}catch(_0x597920){return _0x1b055b;}}async function fetchCpeApi(_0x365ddd,_0x236b51,_0x5803fd,_0x402041={},_0x1f8e72=0xbb8){if(!_0x236b51)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x365ddd,_0x402041,_0x236b51,_0x5803fd,_0x1f8e72);}function isEmpty(_0x109730){const _0x1a9614=_0x379719;return!_0x109730||typeof _0x109730==='object'&&Object[_0x1a9614(0x1a4)](_0x109730)['length']===0x0;}async function fetchAll(_0x17ec38){const _0x5c6f2b=_0x379719,_0x19f856=_0x17ec38[_0x5c6f2b(0x1cb)],_0x59b880=_0x17ec38['mac'],_0x4b3bfd=0xbb8,_0x1297e0=await Promise[_0x5c6f2b(0x1b4)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x19f856,_0x59b880,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x19f856,_0x59b880,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x19f856,_0x59b880,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x19f856,_0x59b880,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x19f856,_0x59b880,{},0xbb8)]),_0x59fb97=[];let _0x2a5fb9=readResult(_0x1297e0[0x0],_0x59fb97),_0x3a2c38=readResult(_0x1297e0[0x1],_0x59fb97),_0x43ff25=readResult(_0x1297e0[0x2],_0x59fb97),_0x321c42=readResult(_0x1297e0[0x3],_0x59fb97);const _0x455532=readResult(_0x1297e0[0x4],_0x59fb97);if(_0x43ff25)_0x43ff25=_0x43ff25['MainRouter']||_0x43ff25['Router']||_0x43ff25;const _0x12f31e=[_0x2a5fb9,_0x3a2c38,_0x43ff25,_0x321c42,_0x455532]['filter'](_0x4ce79e=>!isEmpty(_0x4ce79e))['length'],_0x2146f8=_0x12f31e===0x0?classifyFault(_0x59fb97):null;return console[_0x5c6f2b(0x1a9)]('📡\x20取数完成\x20|\x20成功='+_0x12f31e+'/5\x20|\x20fault='+(_0x2146f8||'-')+'\x20|\x20失败码=['+_0x59fb97['join'](',')+']'),{'rf':_0x2a5fb9,'ca':_0x3a2c38,'topo':_0x43ff25,'sim':_0x321c42,'traffic':_0x455532,'failCodes':_0x59fb97,'fault':_0x2146f8,'successCount':_0x12f31e};}function _0x2337(_0x2683ce,_0x284bd8){const _0x407d34=_0x407d();return _0x2337=function(_0x2337d5,_0x412c41){_0x2337d5=_0x2337d5-0x19c;let _0x2a5fef=_0x407d34[_0x2337d5];if(_0x2337['MQrPoR']===undefined){var _0x43b5c4=function(_0x5d51b7){const _0x1a047a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x429cb8='',_0x4a94a9='';for(let _0x2e89e1=0x0,_0x39d3d3,_0x427d2e,_0x3e2034=0x0;_0x427d2e=_0x5d51b7['charAt'](_0x3e2034++);~_0x427d2e&&(_0x39d3d3=_0x2e89e1%0x4?_0x39d3d3*0x40+_0x427d2e:_0x427d2e,_0x2e89e1++%0x4)?_0x429cb8+=String['fromCharCode'](0xff&_0x39d3d3>>(-0x2*_0x2e89e1&0x6)):0x0){_0x427d2e=_0x1a047a['indexOf'](_0x427d2e);}for(let _0x4b5467=0x0,_0x261dcd=_0x429cb8['length'];_0x4b5467<_0x261dcd;_0x4b5467++){_0x4a94a9+='%'+('00'+_0x429cb8['charCodeAt'](_0x4b5467)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a94a9);};_0x2337['iyHFOh']=_0x43b5c4,_0x2683ce=arguments,_0x2337['MQrPoR']=!![];}const _0x175af5=_0x407d34[0x0],_0x3bfcce=_0x2337d5+_0x175af5,_0x2c2201=_0x2683ce[_0x3bfcce];return!_0x2c2201?(_0x2a5fef=_0x2337['iyHFOh'](_0x2a5fef),_0x2683ce[_0x3bfcce]=_0x2a5fef):_0x2a5fef=_0x2c2201,_0x2a5fef;},_0x2337(_0x2683ce,_0x284bd8);}function saveCache(_0x122f1e){const _0x3d1e47=_0x379719;try{const _0x132e53=parseTrafficData(_0x122f1e['traffic']),_0x3be69a={'rf':{'WorkMode':_0x122f1e['rf']?.['WorkMode'],'SSB_RSRP':_0x122f1e['rf']?.['SSB_RSRP'],'RSRP':_0x122f1e['rf']?.['RSRP'],'SSB_SINR':_0x122f1e['rf']?.['SSB_SINR'],'SINR':_0x122f1e['rf']?.['SINR'],'SSB_RSRQ':_0x122f1e['rf']?.['SSB_RSRQ'],'RSRQ':_0x122f1e['rf']?.['RSRQ'],'SSB_RSSI':_0x122f1e['rf']?.['SSB_RSSI'],'RSSI':_0x122f1e['rf']?.['RSSI'],'BAND':_0x122f1e['rf']?.['BAND'],'NR_BAND':_0x122f1e['rf']?.['NR_BAND'],'LTE_BAND':_0x122f1e['rf']?.['LTE_BAND'],'PCI':_0x122f1e['rf']?.['PCI'],'SPN':_0x122f1e['rf']?.['SPN']},'ca':{'main_CA_info':_0x122f1e['ca']?.[_0x3d1e47(0x1b6)]||{},'sub_CA_info':_0x122f1e['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x122f1e[_0x3d1e47(0x1a5)]?.['NetStatus'],'UpTime':_0x122f1e['topo']?.['UpTime'],'Name':_0x122f1e['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x122f1e['topo'])},'sim':{'Operator':_0x122f1e[_0x3d1e47(0x1be)]?.['Operator'],'SPN':_0x122f1e['sim']?.['SPN']},'traffic':{'todayBytes':_0x132e53['todayBytes'],'monthBytes':_0x132e53['monthBytes'],'todayRx':_0x132e53['todayRx'],'todayTx':_0x132e53['todayTx'],'monthRx':_0x132e53['monthRx'],'monthTx':_0x132e53['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x3be69a));}catch(_0x1bd8b5){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x1bd8b5);}}function loadCache(){try{const _0x51d8d4=Keychain['get'](KEY_CACHE);if(!_0x51d8d4)return null;const _0x251ce6=JSON['parse'](_0x51d8d4);if(!_0x251ce6||typeof _0x251ce6!=='object')return null;return _0x251ce6;}catch(_0x2b8179){return null;}}
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
