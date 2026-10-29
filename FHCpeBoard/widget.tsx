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

const _0x3559fc=_0xa778;(function(_0x75f3b2,_0x4bab0b){const _0x5dc87c=_0xa778,_0x4d30a5=_0x75f3b2();while(!![]){try{const _0x4bb165=-parseInt(_0x5dc87c(0x1c9))/0x1+parseInt(_0x5dc87c(0x1e7))/0x2*(-parseInt(_0x5dc87c(0x1c7))/0x3)+-parseInt(_0x5dc87c(0x1de))/0x4+-parseInt(_0x5dc87c(0x1d1))/0x5+parseInt(_0x5dc87c(0x1ec))/0x6*(parseInt(_0x5dc87c(0x1e6))/0x7)+-parseInt(_0x5dc87c(0x1cd))/0x8*(-parseInt(_0x5dc87c(0x1d3))/0x9)+-parseInt(_0x5dc87c(0x1e0))/0xa*(-parseInt(_0x5dc87c(0x1cf))/0xb);if(_0x4bb165===_0x4bab0b)break;else _0x4d30a5['push'](_0x4d30a5['shift']());}catch(_0x303fc5){_0x4d30a5['push'](_0x4d30a5['shift']());}}}(_0x4660,0xc7bc5));const TOKEN_KEY='CPE_TOKEN',MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE=_0x3559fc(0x1d6),DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME=_0x3559fc(0x1c5);function readKey(_0x78a4c2,_0x32702d){try{const _0x28003c=Keychain['get'](_0x78a4c2);return _0x28003c===null||_0x28003c===undefined||_0x28003c===''?_0x32702d:String(_0x28003c)['trim']();}catch(_0x2664ea){return _0x32702d;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x5a5ddd){const _0x15dd74=_0x3559fc;try{if(_0x5a5ddd['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x5a5ddd['token'])['trim']());if(_0x5a5ddd['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x5a5ddd['mac'])['trim']()||DEFAULT_MAC);if(_0x5a5ddd['deviceName']!==undefined)Keychain[_0x15dd74(0x1cb)](NAME_KEY,String(_0x5a5ddd['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x47746b){console['log'](_0x15dd74(0x1c6)+_0x47746b);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x2de17f,_0xf413bb){const _0x3a9c64=_0x3559fc;if(_0x2de17f===undefined||_0x2de17f===null||_0x2de17f==='')return _0xf413bb;const _0x59e31f=String(_0x2de17f)[_0x3a9c64(0x1e5)]();return _0x59e31f==='-'||_0x59e31f==='undefined'?_0xf413bb:_0x59e31f;}function firstValid(_0x3d9f81,_0x2bc019){for(const _0x2619ca of _0x3d9f81){const _0x44a966=getValidValue(_0x2619ca,'');if(_0x44a966)return _0x44a966;}return _0x2bc019;}function resolveOperator(_0x54f703,_0x3e12ef){const _0x1dcfff=getOperatorName(_0x3e12ef&&_0x3e12ef['Operator']||'',_0x3e12ef&&_0x3e12ef['SPN']||'');if(_0x1dcfff==='未知'&&_0x54f703&&_0x54f703['SPN'])return String(_0x54f703['SPN']);return _0x1dcfff;}function formatUptime(_0x4521ab){const _0x2d8508=_0x3559fc,_0x270f72=parseInt(_0x4521ab||0x0)||0x0,_0x34cabd=Math['floor'](_0x270f72/0x15180),_0x3a1ce5=Math[_0x2d8508(0x1df)](_0x270f72%0x15180/0xe10),_0x59c05c=Math['floor'](_0x270f72%0xe10/0x3c),_0x2c549c=[];if(_0x34cabd>0x0)_0x2c549c['push'](_0x34cabd+'天');if(_0x3a1ce5>0x0||_0x34cabd>0x0)_0x2c549c['push'](_0x3a1ce5+'小时');return _0x2c549c[_0x2d8508(0x1dd)](_0x59c05c+'分'),_0x2c549c['join']('\x20');}function formatUptimeShort(_0x5840c8){const _0x33ccfe=_0x3559fc,_0x4a8cea=parseInt(_0x5840c8||0x0)||0x0,_0x1bd3ca=Math['floor'](_0x4a8cea/0x15180),_0x246ebf=Math['floor'](_0x4a8cea%0x15180/0xe10),_0x17ae4e=Math[_0x33ccfe(0x1df)](_0x4a8cea%0xe10/0x3c),_0x4704cc=[];if(_0x1bd3ca>0x0)_0x4704cc['push'](_0x1bd3ca+'天');if(_0x246ebf>0x0||_0x1bd3ca>0x0)_0x4704cc['push'](_0x246ebf+'时');return _0x4704cc['push'](_0x17ae4e+'分'),_0x4704cc['join']('');}function trafficMbToBytes(_0x7d084e){const _0x4cac01=parseFloat(_0x7d084e||0x0);if(isNaN(_0x4cac01))return 0x0;return Math['round'](_0x4cac01*0x400*0x400);}function formatTraffic(_0x4976ec){const _0x24e8f0=Number(_0x4976ec||0x0);if(!isFinite(_0x24e8f0)||_0x24e8f0<=0x0)return'0M';const _0x4e5438=0x400*0x400,_0x1d4914=0x400*_0x4e5438;if(_0x24e8f0>=_0x1d4914)return(_0x24e8f0/_0x1d4914)['toFixed'](0x1)+'G';return(_0x24e8f0/_0x4e5438)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x561eee){const _0x5aec23=Number(_0x561eee||0x0);if(!isFinite(_0x5aec23)||_0x5aec23<=0x0)return'0';const _0x4bcd0b=0x400,_0x2e6928=0x400*_0x4bcd0b,_0x30e6ef=0x400*_0x2e6928;if(_0x5aec23>=_0x30e6ef){const _0x10351=_0x5aec23/_0x30e6ef;return(_0x10351>=0x64?_0x10351['toFixed'](0x0):_0x10351['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x5aec23>=_0x2e6928)return Math['round'](_0x5aec23/_0x2e6928)+'M';if(_0x5aec23>=_0x4bcd0b)return Math['round'](_0x5aec23/_0x4bcd0b)+'K';return String(Math['round'](_0x5aec23));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x17a8ef){if(!_0x17a8ef)return ZERO_TRAFFIC;const _0x4897c6=_0x17a8ef['day_rx_traffic']!==undefined||_0x17a8ef['day_tx_traffic']!==undefined||_0x17a8ef['month_rx_traffic']!==undefined||_0x17a8ef['month_tx_traffic']!==undefined;if(!_0x4897c6)return{'todayBytes':Number(_0x17a8ef['todayBytes'])||0x0,'monthBytes':Number(_0x17a8ef['monthBytes'])||0x0,'todayRx':Number(_0x17a8ef['todayRx'])||0x0,'todayTx':Number(_0x17a8ef['todayTx'])||0x0,'monthRx':Number(_0x17a8ef['monthRx'])||0x0,'monthTx':Number(_0x17a8ef['monthTx'])||0x0};const _0x7dbd9b=trafficMbToBytes(_0x17a8ef['day_rx_traffic']),_0xa2bec5=trafficMbToBytes(_0x17a8ef['day_tx_traffic']),_0x36e853=trafficMbToBytes(_0x17a8ef['month_rx_traffic']),_0xdcadaf=trafficMbToBytes(_0x17a8ef['month_tx_traffic']);return{'todayBytes':_0x7dbd9b+_0xa2bec5,'monthBytes':_0x36e853+_0xdcadaf,'todayRx':_0x7dbd9b,'todayTx':_0xa2bec5,'monthRx':_0x36e853,'monthTx':_0xdcadaf};}function trafficRxRatio(_0x545373,_0x31c94c){const _0x3cfdc4=Number(_0x545373||0x0)+Number(_0x31c94c||0x0);if(!isFinite(_0x3cfdc4)||_0x3cfdc4<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x545373||0x0)/_0x3cfdc4));}function getOperatorName(_0xde337a,_0x1100b2){const _0xaa1eb5=_0x3559fc;if(!_0xde337a)return _0x1100b2||'未知';const _0x4ebe10=String(_0xde337a)['toUpperCase']();if(_0x4ebe10[_0xaa1eb5(0x1eb)]('CMCC')||_0x4ebe10==='中国移动'||_0x4ebe10['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x4ebe10['includes'](_0xaa1eb5(0x1e8))||_0x4ebe10==='中国联通'||_0x4ebe10['includes']('CHINA\x20UNICOM')||_0x4ebe10['includes']('UNICOM'))return'中国联通';if(_0x4ebe10[_0xaa1eb5(0x1eb)]('CTCC')||_0x4ebe10==='CT'||_0x4ebe10===_0xaa1eb5(0x1da)||_0x4ebe10[_0xaa1eb5(0x1eb)]('CHINA\x20TELECOM')||_0x4ebe10['includes']('TELECOM'))return'中国电信';if(_0x4ebe10['includes']('CBN')||_0x4ebe10==='中国广电'||_0x4ebe10['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0xde337a;}function getSignalColor(_0x51feaf,_0x8209ed){let _0x13a50f=parseInt(_0x51feaf);if(isNaN(_0x13a50f))_0x13a50f=-0x78;if(_0x13a50f>-0x59)return _0x8209ed['ok'];if(_0x13a50f>-0x63)return _0x8209ed['warn'];return _0x8209ed['bad'];}function getSinrColor(_0xa7746e,_0x5c484c){let _0x4f5c0e=parseFloat(_0xa7746e);if(isNaN(_0x4f5c0e))_0x4f5c0e=0x0;if(_0x4f5c0e>0xf)return _0x5c484c['ok'];if(_0x4f5c0e>0x8)return _0x5c484c['warn'];return _0x5c484c['bad'];}function getAllBands(_0x252ba4,_0xff910b,_0x3cb807){const _0xdc4818=_0x3559fc,_0x11f7f0=[],_0xa0faa0=_0x3cb807?'N':'B',_0x13bb58=getValidValue(_0x252ba4?.['BAND']||_0x252ba4?.['NR_BAND']||_0x252ba4?.['LTE_BAND'],'');if(_0x13bb58)_0x11f7f0['push'](_0xa0faa0+_0x13bb58);for(const _0x30d52a of _0xff910b?.['sub_CA_info']||[]){const _0x5e13ed=String(_0x30d52a?.[_0xdc4818(0x1e2)]||'');if(_0x5e13ed&&_0x5e13ed!=='-')_0x11f7f0['push'](_0xa0faa0+_0x5e13ed);}if(_0x11f7f0['length']===0x0)_0x11f7f0['push'](_0x3cb807?'N78':'B3');return _0x11f7f0;}function getCaBadgeText(_0xd3a793,_0x20bf6f,_0x5ae0b8){const _0x273f15=_0x3559fc,_0x38e473=(_0x20bf6f?'5G\x20':'4G\x20')+_0x5ae0b8;if(!_0x20bf6f)return _0x38e473;const _0x3632b8=0x1+(_0xd3a793&&_0xd3a793['sub_CA_info']||[])[_0x273f15(0x1ca)];if(_0x3632b8>=0x4)return'5GA+';if(_0x3632b8===0x3)return'5GA';if(_0x3632b8===0x2)return'5G+';return _0x38e473;}function getCarrierCountText(_0x47b843){const _0x366c93=_0x3559fc,_0x4d9086=(_0x47b843&&_0x47b843['sub_CA_info']||[])['length'];if(_0x4d9086===0x0)return _0x366c93(0x1cc);if(_0x4d9086===0x1)return'双载波';if(_0x4d9086===0x2)return _0x366c93(0x1d5);return'四载波';}function getNetworkModeText(_0xc0ef6,_0x49b789,_0x5bdf56){const _0xfa18fb=_0x3559fc,_0x2d5b5d=String(_0x5bdf56||'')['toUpperCase']();if(!_0x49b789){if(!_0x2d5b5d||_0x2d5b5d==='4G'||_0x2d5b5d==='LTE')return _0xfa18fb(0x1dc);return'4G\x20'+_0x2d5b5d;}const _0x43ad94=0x1+(_0xc0ef6&&_0xc0ef6['sub_CA_info']||[])[_0xfa18fb(0x1ca)];if(_0x43ad94>=0x4)return'5GA+';if(_0x43ad94===0x3)return'5GA';if(_0x43ad94===0x2)return _0xfa18fb(0x1d2);return _0x2d5b5d?'5G\x20'+_0x2d5b5d:'5G\x20SA';}function rsrpToPercent(_0x228f74){const _0x17c477=_0x3559fc;let _0x4e55d0=parseInt(_0x228f74);if(isNaN(_0x4e55d0))_0x4e55d0=-0x78;const _0x509a47=Math['min'](-0x46,Math[_0x17c477(0x1e9)](-0x78,_0x4e55d0)),_0x2f924d=(_0x509a47+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x2f924d*0x5a));}function sinrToPercent(_0x27a057){let _0x1e7cfb=parseFloat(_0x27a057);if(isNaN(_0x1e7cfb))_0x1e7cfb=0x0;return Math['min'](0x64,Math['max'](0x0,_0x1e7cfb/0x19*0x64));}function resolveDeviceName(_0x33a976,_0x4e5518){const _0x596654=_0x33a976&&_0x33a976['Name']!=null?String(_0x33a976['Name'])['trim']():'';if(!_0x596654)return _0x4e5518;if(_0x596654==='--'||_0x596654==='undefined'||_0x596654==='null'||_0x596654==='0')return _0x4e5518;return _0x596654;}function rsrpToBars(_0x43a312){const _0x6f0177=parseInt(_0x43a312);if(isNaN(_0x6f0177))return 0x0;if(_0x6f0177>=-0x55)return 0x4;if(_0x6f0177>=-0x5f)return 0x3;if(_0x6f0177>=-0x69)return 0x2;if(_0x6f0177>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x4a0eb7){if(!_0x4a0eb7)return 0x0;if(typeof _0x4a0eb7['onlineDevices']==='number')return _0x4a0eb7['onlineDevices'];const _0x4cd874=_0x4a0eb7['MainBaseInfo'];if(!Array['isArray'](_0x4cd874))return 0x0;return _0x4cd874['filter'](_0x36c3af=>_0x36c3af&&String(_0x36c3af['NetStatus'])==='1')['length'];}function urlDecode(_0x3c19d3){const _0x4a22f2=[];for(let _0x4104f8=0x0;_0x4104f8<_0x3c19d3['length'];_0x4104f8+=0x2)_0x4a22f2['push'](parseInt(_0x3c19d3['substr'](_0x4104f8,0x2),0x10));let _0x2d7d68='';for(let _0x3f49e7=0x0;_0x3f49e7<_0x4a22f2['length'];){const _0x1542e2=_0x4a22f2[_0x3f49e7];if(_0x1542e2<0x80)_0x2d7d68+=String['fromCharCode'](_0x1542e2),_0x3f49e7++;else{if(_0x1542e2>>0x5===0x6)_0x2d7d68+=String['fromCharCode']((_0x1542e2&0x1f)<<0x6|_0x4a22f2[_0x3f49e7+0x1]&0x3f),_0x3f49e7+=0x2;else _0x1542e2>>0x4===0xe?(_0x2d7d68+=String['fromCharCode']((_0x1542e2&0xf)<<0xc|(_0x4a22f2[_0x3f49e7+0x1]&0x3f)<<0x6|_0x4a22f2[_0x3f49e7+0x2]&0x3f),_0x3f49e7+=0x3):(_0x2d7d68+=String['fromCharCode']((_0x1542e2&0x7)<<0x12|(_0x4a22f2[_0x3f49e7+0x1]&0x3f)<<0xc|(_0x4a22f2[_0x3f49e7+0x2]&0x3f)<<0x6|_0x4a22f2[_0x3f49e7+0x3]),_0x3f49e7+=0x4);}}return _0x2d7d68;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':_0x3559fc(0x1e3),'auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x10da52=_0x3559fc;return Date[_0x10da52(0x1e4)]()[_0x10da52(0x1d9)]();}function generateUUID(){const _0x446fec='0123456789ABCDEF';let _0x229e8e='';for(let _0x2193a4=0x0;_0x2193a4<0x20;_0x2193a4++)_0x229e8e+=_0x446fec[Math['floor'](Math['random']()*0x10)];return _0x229e8e;}function generateSequenceId(_0x13772f){return _0x13772f+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x45153f){const _0x44a95b=_0x3559fc;if(!_0x45153f||_0x45153f['length']===0x0)return null;if(_0x45153f['some'](_0x465a06=>AUTH_ERROR_CODES['indexOf'](_0x465a06)>=0x0))return'auth';if(_0x45153f[_0x44a95b(0x1ea)](_0x21c254=>DEVICE_ERROR_CODES['indexOf'](_0x21c254)>=0x0))return'device';return'network';}function readResult(_0x3eef79,_0xc0539c){if(!_0x3eef79||_0x3eef79['status']!=='fulfilled'||!_0x3eef79['value'])return _0xc0539c['push'](NET_ERROR_CODE),null;const _0x5d5cd1=_0x3eef79['value'];if(_0x5d5cd1['resultCode']===0x0)return _0x5d5cd1;return _0xc0539c['push'](typeof _0x5d5cd1['resultCode']==='number'?_0x5d5cd1['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x289168,_0x5386c6,_0xd65ccd,_0x592a04,_0xed0b33){const _0x538285=_0x3559fc;if(!_0xd65ccd)return null;const _0x5ccca9={'CmdType':_0x289168,..._0x5386c6};if(!_0x5ccca9['SequenceId'])_0x5ccca9['SequenceId']=generateSequenceId(_0x289168);const _0x3999c5={'appVersion':urlDecode('322e322e3531'),'mac':_0x592a04,'timeout':0x3,'token':_0xd65ccd,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x5ccca9)}),'operatorId':getOperatorId()},_0x3f960f=new AbortController(),_0x3ac3e7=setTimeout(()=>{const _0x59bfd9=_0xa778;try{_0x3f960f[_0x59bfd9(0x1db)]();}catch(_0x9b2345){}},_0xed0b33);try{const _0x5d8444=await fetch(REMOTE_URL,{'method':_0x538285(0x1c8),'headers':{'Content-Type':'application/json','token':_0xd65ccd},'body':JSON[_0x538285(0x1d0)](_0x3999c5),'signal':_0x3f960f['signal']}),_0x3568b1=await _0x5d8444['json']();if(_0x3568b1&&_0x3568b1['rspParam']){const _0xece60f=JSON['parse'](_0x3568b1['rspParam']);if(_0xece60f['Result']===0x0&&_0xece60f['return_Parameter']){const _0x11e2d7=String(_0xece60f['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0xf03b17=JSON['parse'](decodeBase64Utf8(_0x11e2d7));return{..._0xf03b17,'resultCode':0x0};}}return _0x3568b1||{'resultCode':NET_ERROR_CODE};}catch(_0x4efcf1){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3ac3e7);}}function decodeBase64Utf8(_0x1b4bbf){const _0x21290b=atob(_0x1b4bbf);try{const _0x127b9f=new Uint8Array(_0x21290b['length']);for(let _0x1cdb66=0x0;_0x1cdb66<_0x21290b['length'];_0x1cdb66++)_0x127b9f[_0x1cdb66]=_0x21290b['charCodeAt'](_0x1cdb66);return new TextDecoder('utf-8')['decode'](_0x127b9f);}catch(_0x4bcd57){return _0x21290b;}}function _0x4660(){const _0x12c2a6=['Bwf4','C29Tzq','Aw5JBhvKzxm','mtiWmZboreDyq0q','t3bLCMf0B3i','54o954gRq1bf','4PQG77Ipios/NEwTMoIUVUE9RUwKSEI0Psb8ia','mZKXmMHMtLzmtW','ue9tva','nZe0otqXvhLXrvPb','BgvUz3rO','C2v0','5y2v6l295RoI','mtC2ofbNuwfAza','twfPBLjVDxrLCG','mJjTy1D3vve','C3rYAw5NAwz5','ntm0odK1mgneyK5jCa','nuCR','ndKYmtjszeLYAxu','Dg9KyxLuEa','5lIj6l295RoI','q1bfx1DjreDfvf9dqunirq','tMfTzq','ywXSu2v0DgXLza','Dg9tDhjPBMC','5lIT5zU955s15l+H','ywjVCNq','neCGtfrf','ChvZAa','ndmXntiYmgrbtNfQAG','zMXVB3i','odGZmtmZme1JthDHBG','u0LouG','qMfUza','77Yb6k6+5Ash56A757Q/','BM93','DhjPBq','mZeWmxnrsvPnwq','mJC4t1nrwfLR','q1vdqW'];_0x4660=function(){return _0x12c2a6;};return _0x4660();}async function fetchCpeApi(_0x5c4aac,_0x15bb48,_0x1e4f01,_0x48d9a6={},_0x17eb2c=0xbb8){if(!_0x15bb48)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x5c4aac,_0x48d9a6,_0x15bb48,_0x1e4f01,_0x17eb2c);}function isEmpty(_0x494f14){return!_0x494f14||typeof _0x494f14==='object'&&Object['keys'](_0x494f14)['length']===0x0;}function _0xa778(_0x2eefa2,_0x627ca8){_0x2eefa2=_0x2eefa2-0x1c4;const _0x4660c8=_0x4660();let _0xa778e2=_0x4660c8[_0x2eefa2];if(_0xa778['tNtMmj']===undefined){var _0x43a7a2=function(_0x4d9cab){const _0x19f0b3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e4376='',_0x78a4c2='';for(let _0x32702d=0x0,_0x28003c,_0x2664ea,_0x5a5ddd=0x0;_0x2664ea=_0x4d9cab['charAt'](_0x5a5ddd++);~_0x2664ea&&(_0x28003c=_0x32702d%0x4?_0x28003c*0x40+_0x2664ea:_0x2664ea,_0x32702d++%0x4)?_0x2e4376+=String['fromCharCode'](0xff&_0x28003c>>(-0x2*_0x32702d&0x6)):0x0){_0x2664ea=_0x19f0b3['indexOf'](_0x2664ea);}for(let _0x47746b=0x0,_0x2de17f=_0x2e4376['length'];_0x47746b<_0x2de17f;_0x47746b++){_0x78a4c2+='%'+('00'+_0x2e4376['charCodeAt'](_0x47746b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x78a4c2);};_0xa778['XbSxDh']=_0x43a7a2,_0xa778['OHDiZV']={},_0xa778['tNtMmj']=!![];}const _0x539f55=_0x4660c8[0x0];_0xa778['nAkTwF']!==_0x539f55&&(_0xa778['OHDiZV']={},_0xa778['nAkTwF']=_0x539f55);const _0x5b52b3=_0xa778['OHDiZV'][_0x2eefa2];return _0x5b52b3===undefined?(_0xa778e2=_0xa778['XbSxDh'](_0xa778e2),_0xa778['OHDiZV'][_0x2eefa2]=_0xa778e2):_0xa778e2=_0x5b52b3,_0xa778e2;}async function fetchAll(_0x17c342){const _0x4f8c9b=_0x3559fc,_0x186ed3=_0x17c342['token'],_0x3ee35c=_0x17c342['mac'],_0x167239=0xbb8,_0x359cc5=await Promise[_0x4f8c9b(0x1d8)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x186ed3,_0x3ee35c,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x186ed3,_0x3ee35c,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x186ed3,_0x3ee35c,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x186ed3,_0x3ee35c,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x186ed3,_0x3ee35c,{},0xbb8)]),_0x4e9596=[];let _0x29300a=readResult(_0x359cc5[0x0],_0x4e9596),_0x4df127=readResult(_0x359cc5[0x1],_0x4e9596),_0x10611f=readResult(_0x359cc5[0x2],_0x4e9596),_0x3d2fcf=readResult(_0x359cc5[0x3],_0x4e9596);const _0x41fd5f=readResult(_0x359cc5[0x4],_0x4e9596);if(_0x10611f)_0x10611f=_0x10611f[_0x4f8c9b(0x1ce)]||_0x10611f['Router']||_0x10611f;const _0x2ae593=[_0x29300a,_0x4df127,_0x10611f,_0x3d2fcf,_0x41fd5f]['filter'](_0x5c0867=>!isEmpty(_0x5c0867))['length'],_0x1f0a8e=_0x2ae593===0x0?classifyFault(_0x4e9596):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x2ae593+'/5\x20|\x20fault='+(_0x1f0a8e||'-')+'\x20|\x20失败码=['+_0x4e9596['join'](',')+']'),{'rf':_0x29300a,'ca':_0x4df127,'topo':_0x10611f,'sim':_0x3d2fcf,'traffic':_0x41fd5f,'failCodes':_0x4e9596,'fault':_0x1f0a8e,'successCount':_0x2ae593};}function saveCache(_0x30f1aa){const _0x5555d9=_0x3559fc;try{const _0x50d690=parseTrafficData(_0x30f1aa['traffic']),_0x5f47df={'rf':{'WorkMode':_0x30f1aa['rf']?.['WorkMode'],'SSB_RSRP':_0x30f1aa['rf']?.['SSB_RSRP'],'RSRP':_0x30f1aa['rf']?.['RSRP'],'SSB_SINR':_0x30f1aa['rf']?.['SSB_SINR'],'SINR':_0x30f1aa['rf']?.[_0x5555d9(0x1e1)],'SSB_RSRQ':_0x30f1aa['rf']?.['SSB_RSRQ'],'RSRQ':_0x30f1aa['rf']?.['RSRQ'],'SSB_RSSI':_0x30f1aa['rf']?.['SSB_RSSI'],'RSSI':_0x30f1aa['rf']?.['RSSI'],'BAND':_0x30f1aa['rf']?.['BAND'],'NR_BAND':_0x30f1aa['rf']?.['NR_BAND'],'LTE_BAND':_0x30f1aa['rf']?.['LTE_BAND'],'PCI':_0x30f1aa['rf']?.['PCI'],'SPN':_0x30f1aa['rf']?.['SPN']},'ca':{'main_CA_info':_0x30f1aa['ca']?.['main_CA_info']||{},'sub_CA_info':_0x30f1aa['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x30f1aa['topo']?.['NetStatus'],'UpTime':_0x30f1aa['topo']?.['UpTime'],'Name':_0x30f1aa['topo']?.[_0x5555d9(0x1d7)],'onlineDevices':countOnlineDevices(_0x30f1aa['topo'])},'sim':{'Operator':_0x30f1aa['sim']?.[_0x5555d9(0x1c4)],'SPN':_0x30f1aa['sim']?.['SPN']},'traffic':{'todayBytes':_0x50d690['todayBytes'],'monthBytes':_0x50d690['monthBytes'],'todayRx':_0x50d690['todayRx'],'todayTx':_0x50d690[_0x5555d9(0x1d4)],'monthRx':_0x50d690['monthRx'],'monthTx':_0x50d690['monthTx']},'ts':Date[_0x5555d9(0x1e4)]()};Keychain[_0x5555d9(0x1cb)](KEY_CACHE,JSON[_0x5555d9(0x1d0)](_0x5f47df));}catch(_0xd6f422){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0xd6f422);}}function loadCache(){try{const _0x47df50=Keychain['get'](KEY_CACHE);if(!_0x47df50)return null;const _0x219f1e=JSON['parse'](_0x47df50);if(!_0x219f1e||typeof _0x219f1e!=='object')return null;return _0x219f1e;}catch(_0xdebf16){return null;}}
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
