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

const _0xbc31d5=_0x4ec6;(function(_0x5e49c0,_0x177626){const _0x8f6ad1=_0x4ec6,_0x5c9254=_0x5e49c0();while(!![]){try{const _0x27f068=-parseInt(_0x8f6ad1(0x12e))/0x1*(parseInt(_0x8f6ad1(0x11c))/0x2)+parseInt(_0x8f6ad1(0x131))/0x3*(-parseInt(_0x8f6ad1(0x122))/0x4)+parseInt(_0x8f6ad1(0x13c))/0x5*(-parseInt(_0x8f6ad1(0x12b))/0x6)+-parseInt(_0x8f6ad1(0x121))/0x7*(parseInt(_0x8f6ad1(0x12d))/0x8)+-parseInt(_0x8f6ad1(0x114))/0x9+-parseInt(_0x8f6ad1(0x129))/0xa+parseInt(_0x8f6ad1(0x136))/0xb;if(_0x27f068===_0x177626)break;else _0x5c9254['push'](_0x5c9254['shift']());}catch(_0x346de5){_0x5c9254['push'](_0x5c9254['shift']());}}}(_0x5990,0xecb55));const TOKEN_KEY=_0xbc31d5(0x126),MAC_KEY='CPE_DEVICE_MAC',NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x50d4fd,_0x44a918){const _0x4f03eb=_0xbc31d5;try{const _0x13a1ab=Keychain[_0x4f03eb(0x133)](_0x50d4fd);return _0x13a1ab===null||_0x13a1ab===undefined||_0x13a1ab===''?_0x44a918:String(_0x13a1ab)['trim']();}catch(_0x56f961){return _0x44a918;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x5dad2e){const _0x3095e9=_0xbc31d5;try{if(_0x5dad2e['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x5dad2e['token'])['trim']());if(_0x5dad2e['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x5dad2e['mac'])['trim']()||DEFAULT_MAC);if(_0x5dad2e[_0x3095e9(0x11e)]!==undefined)Keychain['set'](NAME_KEY,String(_0x5dad2e[_0x3095e9(0x11e)])[_0x3095e9(0x116)]()||DEFAULT_NAME);}catch(_0x582d9c){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x582d9c);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x99f44d,_0x37ed35){if(_0x99f44d===undefined||_0x99f44d===null||_0x99f44d==='')return _0x37ed35;const _0x32f941=String(_0x99f44d)['trim']();return _0x32f941==='-'||_0x32f941==='undefined'?_0x37ed35:_0x32f941;}function firstValid(_0x2b5853,_0x19bf82){for(const _0x52b40e of _0x2b5853){const _0x2f62e8=getValidValue(_0x52b40e,'');if(_0x2f62e8)return _0x2f62e8;}return _0x19bf82;}function resolveOperator(_0x4d0e59,_0x2f463e){const _0x5a0837=getOperatorName(_0x2f463e&&_0x2f463e['Operator']||'',_0x2f463e&&_0x2f463e['SPN']||'');if(_0x5a0837==='未知'&&_0x4d0e59&&_0x4d0e59['SPN'])return String(_0x4d0e59['SPN']);return _0x5a0837;}function _0x5990(){const _0x1738d8=['nwHtr0vura','ndy5otG0nwHOrNv1wa','DMfSDwu','DhjPBq','77Yb5Qoa5P+L572r57UC','5PYQ6ywn572UifrVA2vU','mdeYmZq1nJC4oufcq0rfrG','ywXSu2v0DgXLza','Dg9WBW','otG2wgv3zeLl','Dg9tDhjPBMC','zgv2AwnLtMfTzq','tMv0u3rHDhvZ','D2fYBG','ndCXnZn6vu56s3u','nJrbruHRBgm','zgf5x3r4x3rYywzMAwm','q01dqW','Aw5JBhvKzxm','q1bfx1rps0vo','A2v5CW','u0LouG','mJC5ntKWvuHXBw9l','Bw9UDgHcExrLCW','mJGYmJGWmLbyqwXHEG','5lIT5zU956E75yQO','otG0sen4rhb4','mZq3qNjvtvjm','C3vIC3rY','CMvZDwX0q29Kzq','mtC2mtqYwefzu3vx','qMfUza','z2v0','v29YA01Vzgu','BgvUz3rO','ndmYmJuZodbfB1zlExm','qKfora','B2jQzwn0','tMfTzq','nuCG','C3rYAw5NAwz5'];_0x5990=function(){return _0x1738d8;};return _0x5990();}function formatUptime(_0x4ada5c){const _0x8e70e4=parseInt(_0x4ada5c||0x0)||0x0,_0x3b0515=Math['floor'](_0x8e70e4/0x15180),_0x5e153=Math['floor'](_0x8e70e4%0x15180/0xe10),_0x18d408=Math['floor'](_0x8e70e4%0xe10/0x3c),_0x187b31=[];if(_0x3b0515>0x0)_0x187b31['push'](_0x3b0515+'天');if(_0x5e153>0x0||_0x3b0515>0x0)_0x187b31['push'](_0x5e153+'小时');return _0x187b31['push'](_0x18d408+'分'),_0x187b31['join']('\x20');}function formatUptimeShort(_0x3e8eae){const _0x53070d=parseInt(_0x3e8eae||0x0)||0x0,_0x15f9ff=Math['floor'](_0x53070d/0x15180),_0x2e90eb=Math['floor'](_0x53070d%0x15180/0xe10),_0x5e1771=Math['floor'](_0x53070d%0xe10/0x3c),_0x54f7de=[];if(_0x15f9ff>0x0)_0x54f7de['push'](_0x15f9ff+'天');if(_0x2e90eb>0x0||_0x15f9ff>0x0)_0x54f7de['push'](_0x2e90eb+'时');return _0x54f7de['push'](_0x5e1771+'分'),_0x54f7de['join']('');}function trafficMbToBytes(_0x58c834){const _0x48001d=parseFloat(_0x58c834||0x0);if(isNaN(_0x48001d))return 0x0;return Math['round'](_0x48001d*0x400*0x400);}function formatTraffic(_0x59513f){const _0x3ac449=Number(_0x59513f||0x0);if(!isFinite(_0x3ac449)||_0x3ac449<=0x0)return'0M';const _0x3dac88=0x400*0x400,_0x40fc27=0x400*_0x3dac88;if(_0x3ac449>=_0x40fc27)return(_0x3ac449/_0x40fc27)['toFixed'](0x1)+'G';return(_0x3ac449/_0x3dac88)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x28683b){const _0x4005a7=Number(_0x28683b||0x0);if(!isFinite(_0x4005a7)||_0x4005a7<=0x0)return'0';const _0x45e5a4=0x400,_0x1efd34=0x400*_0x45e5a4,_0x15960e=0x400*_0x1efd34;if(_0x4005a7>=_0x15960e){const _0x233a6b=_0x4005a7/_0x15960e;return(_0x233a6b>=0x64?_0x233a6b['toFixed'](0x0):_0x233a6b['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x4005a7>=_0x1efd34)return Math['round'](_0x4005a7/_0x1efd34)+'M';if(_0x4005a7>=_0x45e5a4)return Math['round'](_0x4005a7/_0x45e5a4)+'K';return String(Math['round'](_0x4005a7));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x2152b9){const _0x3edde0=_0xbc31d5;if(!_0x2152b9)return ZERO_TRAFFIC;const _0x17e4a0=_0x2152b9['day_rx_traffic']!==undefined||_0x2152b9['day_tx_traffic']!==undefined||_0x2152b9['month_rx_traffic']!==undefined||_0x2152b9['month_tx_traffic']!==undefined;if(!_0x17e4a0)return{'todayBytes':Number(_0x2152b9['todayBytes'])||0x0,'monthBytes':Number(_0x2152b9[_0x3edde0(0x12a)])||0x0,'todayRx':Number(_0x2152b9['todayRx'])||0x0,'todayTx':Number(_0x2152b9['todayTx'])||0x0,'monthRx':Number(_0x2152b9['monthRx'])||0x0,'monthTx':Number(_0x2152b9['monthTx'])||0x0};const _0x229c16=trafficMbToBytes(_0x2152b9['day_rx_traffic']),_0x128523=trafficMbToBytes(_0x2152b9[_0x3edde0(0x123)]),_0x388e43=trafficMbToBytes(_0x2152b9['month_rx_traffic']),_0x4c5c94=trafficMbToBytes(_0x2152b9['month_tx_traffic']);return{'todayBytes':_0x229c16+_0x128523,'monthBytes':_0x388e43+_0x4c5c94,'todayRx':_0x229c16,'todayTx':_0x128523,'monthRx':_0x388e43,'monthTx':_0x4c5c94};}function trafficRxRatio(_0xa71131,_0x400cce){const _0x4628c5=Number(_0xa71131||0x0)+Number(_0x400cce||0x0);if(!isFinite(_0x4628c5)||_0x4628c5<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0xa71131||0x0)/_0x4628c5));}function getOperatorName(_0x4fbde7,_0x1a489e){const _0x222c54=_0xbc31d5;if(!_0x4fbde7)return _0x1a489e||'未知';const _0x5acade=String(_0x4fbde7)['toUpperCase']();if(_0x5acade['includes'](_0x222c54(0x124))||_0x5acade===_0x222c54(0x12c)||_0x5acade['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x5acade[_0x222c54(0x125)]('CUCC')||_0x5acade==='中国联通'||_0x5acade['includes']('CHINA\x20UNICOM')||_0x5acade['includes']('UNICOM'))return'中国联通';if(_0x5acade['includes']('CTCC')||_0x5acade==='CT'||_0x5acade==='中国电信'||_0x5acade['includes']('CHINA\x20TELECOM')||_0x5acade['includes']('TELECOM'))return'中国电信';if(_0x5acade['includes']('CBN')||_0x5acade==='中国广电'||_0x5acade['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x4fbde7;}function getSignalColor(_0xc802e4,_0x9c6dbc){let _0x4dae65=parseInt(_0xc802e4);if(isNaN(_0x4dae65))_0x4dae65=-0x78;if(_0x4dae65>-0x59)return _0x9c6dbc['ok'];if(_0x4dae65>-0x63)return _0x9c6dbc['warn'];return _0x9c6dbc['bad'];}function getSinrColor(_0x4c1137,_0x5c4572){const _0x25d782=_0xbc31d5;let _0x5dac77=parseFloat(_0x4c1137);if(isNaN(_0x5dac77))_0x5dac77=0x0;if(_0x5dac77>0xf)return _0x5c4572['ok'];if(_0x5dac77>0x8)return _0x5c4572[_0x25d782(0x120)];return _0x5c4572['bad'];}function getAllBands(_0x5f4acd,_0x3debf3,_0x3c2e3b){const _0x49efda=_0xbc31d5,_0x439778=[],_0x5138a6=_0x3c2e3b?'N':'B',_0x841497=getValidValue(_0x5f4acd?.['BAND']||_0x5f4acd?.['NR_BAND']||_0x5f4acd?.['LTE_BAND'],'');if(_0x841497)_0x439778['push'](_0x5138a6+_0x841497);for(const _0x21f253 of _0x3debf3?.['sub_CA_info']||[]){const _0x12dd69=String(_0x21f253?.[_0x49efda(0x132)]||'');if(_0x12dd69&&_0x12dd69!=='-')_0x439778['push'](_0x5138a6+_0x12dd69);}if(_0x439778['length']===0x0)_0x439778['push'](_0x3c2e3b?'N78':'B3');return _0x439778;}function getCaBadgeText(_0x32af90,_0x4967fb,_0x2a1449){const _0x2c484b=_0xbc31d5,_0x48e6b9=(_0x4967fb?_0x2c484b(0x13a):'4G\x20')+_0x2a1449;if(!_0x4967fb)return _0x48e6b9;const _0x45863e=0x1+(_0x32af90&&_0x32af90['sub_CA_info']||[])['length'];if(_0x45863e>=0x4)return'5GA+';if(_0x45863e===0x3)return'5GA';if(_0x45863e===0x2)return'5G+';return _0x48e6b9;}function getCarrierCountText(_0x1cf8d1){const _0x2b9abe=(_0x1cf8d1&&_0x1cf8d1['sub_CA_info']||[])['length'];if(_0x2b9abe===0x0)return'单载波';if(_0x2b9abe===0x1)return'双载波';if(_0x2b9abe===0x2)return'三载波';return'四载波';}function getNetworkModeText(_0x3d8670,_0x5c66ea,_0x222bf2){const _0x1b2f69=_0xbc31d5,_0x2569bf=String(_0x222bf2||'')['toUpperCase']();if(!_0x5c66ea){if(!_0x2569bf||_0x2569bf==='4G'||_0x2569bf==='LTE')return'4G\x20LTE';return'4G\x20'+_0x2569bf;}const _0x5ac8c0=0x1+(_0x3d8670&&_0x3d8670['sub_CA_info']||[])[_0x1b2f69(0x135)];if(_0x5ac8c0>=0x4)return'5GA+';if(_0x5ac8c0===0x3)return'5GA';if(_0x5ac8c0===0x2)return'5G+';return _0x2569bf?_0x1b2f69(0x13a)+_0x2569bf:'5G\x20SA';}function rsrpToPercent(_0x29e55b){let _0x1f0c6c=parseInt(_0x29e55b);if(isNaN(_0x1f0c6c))_0x1f0c6c=-0x78;const _0x17a5b2=Math['min'](-0x46,Math['max'](-0x78,_0x1f0c6c)),_0x5b58a9=(_0x17a5b2+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x5b58a9*0x5a));}function sinrToPercent(_0x1a7f06){let _0x245d3a=parseFloat(_0x1a7f06);if(isNaN(_0x245d3a))_0x245d3a=0x0;return Math['min'](0x64,Math['max'](0x0,_0x245d3a/0x19*0x64));}function resolveDeviceName(_0x439f1e,_0x4d4fde){const _0x38aae2=_0xbc31d5,_0x257ae1=_0x439f1e&&_0x439f1e[_0x38aae2(0x139)]!=null?String(_0x439f1e[_0x38aae2(0x139)])['trim']():'';if(!_0x257ae1)return _0x4d4fde;if(_0x257ae1==='--'||_0x257ae1==='undefined'||_0x257ae1==='null'||_0x257ae1==='0')return _0x4d4fde;return _0x257ae1;}function rsrpToBars(_0xce6a77){const _0x9ce01c=parseInt(_0xce6a77);if(isNaN(_0x9ce01c))return 0x0;if(_0x9ce01c>=-0x55)return 0x4;if(_0x9ce01c>=-0x5f)return 0x3;if(_0x9ce01c>=-0x69)return 0x2;if(_0x9ce01c>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x3498bc){if(!_0x3498bc)return 0x0;if(typeof _0x3498bc['onlineDevices']==='number')return _0x3498bc['onlineDevices'];const _0x18c6c2=_0x3498bc['MainBaseInfo'];if(!Array['isArray'](_0x18c6c2))return 0x0;return _0x18c6c2['filter'](_0x2e553e=>_0x2e553e&&String(_0x2e553e['NetStatus'])==='1')['length'];}function urlDecode(_0x58aa2c){const _0x1a0a1b=_0xbc31d5,_0x120fef=[];for(let _0x535db8=0x0;_0x535db8<_0x58aa2c['length'];_0x535db8+=0x2)_0x120fef['push'](parseInt(_0x58aa2c[_0x1a0a1b(0x12f)](_0x535db8,0x2),0x10));let _0x1b31e3='';for(let _0x5430fd=0x0;_0x5430fd<_0x120fef['length'];){const _0x179e32=_0x120fef[_0x5430fd];if(_0x179e32<0x80)_0x1b31e3+=String['fromCharCode'](_0x179e32),_0x5430fd++;else{if(_0x179e32>>0x5===0x6)_0x1b31e3+=String['fromCharCode']((_0x179e32&0x1f)<<0x6|_0x120fef[_0x5430fd+0x1]&0x3f),_0x5430fd+=0x2;else _0x179e32>>0x4===0xe?(_0x1b31e3+=String['fromCharCode']((_0x179e32&0xf)<<0xc|(_0x120fef[_0x5430fd+0x1]&0x3f)<<0x6|_0x120fef[_0x5430fd+0x2]&0x3f),_0x5430fd+=0x3):(_0x1b31e3+=String['fromCharCode']((_0x179e32&0x7)<<0x12|(_0x120fef[_0x5430fd+0x1]&0x3f)<<0xc|(_0x120fef[_0x5430fd+0x2]&0x3f)<<0x6|_0x120fef[_0x5430fd+0x3]),_0x5430fd+=0x4);}}return _0x1b31e3;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':_0xbc31d5(0x117),'device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0xa48291=_0xbc31d5,_0x2a5253=_0xa48291(0x119);let _0x32b7be='';for(let _0x27bd87=0x0;_0x27bd87<0x20;_0x27bd87++)_0x32b7be+=_0x2a5253[Math['floor'](Math['random']()*0x10)];return _0x32b7be;}function generateSequenceId(_0x30b7e4){const _0x5ab8d6=_0xbc31d5;return _0x30b7e4+'_'+Date['now']()[_0x5ab8d6(0x11d)](0x24);}function classifyFault(_0x3af907){if(!_0x3af907||_0x3af907['length']===0x0)return null;if(_0x3af907['some'](_0x45ca79=>AUTH_ERROR_CODES['indexOf'](_0x45ca79)>=0x0))return'auth';if(_0x3af907['some'](_0xce56b1=>DEVICE_ERROR_CODES['indexOf'](_0xce56b1)>=0x0))return'device';return'network';}function readResult(_0x5f55f7,_0x27e3fb){const _0x2910c0=_0xbc31d5;if(!_0x5f55f7||_0x5f55f7['status']!=='fulfilled'||!_0x5f55f7['value'])return _0x27e3fb['push'](NET_ERROR_CODE),null;const _0x36cf83=_0x5f55f7[_0x2910c0(0x115)];if(_0x36cf83['resultCode']===0x0)return _0x36cf83;return _0x27e3fb['push'](typeof _0x36cf83['resultCode']==='number'?_0x36cf83[_0x2910c0(0x130)]:NET_ERROR_CODE),null;}async function performCpeRequest(_0x51ff59,_0x5230ed,_0x3bf87f,_0x5905a8,_0x2c437c){const _0x3f8bf2=_0xbc31d5;if(!_0x3bf87f)return null;const _0x45ff98={'CmdType':_0x51ff59,..._0x5230ed};if(!_0x45ff98['SequenceId'])_0x45ff98['SequenceId']=generateSequenceId(_0x51ff59);const _0x18f5d4={'appVersion':urlDecode('322e322e3531'),'mac':_0x5905a8,'timeout':0x3,'token':_0x3bf87f,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x45ff98)}),'operatorId':getOperatorId()},_0x59e6d4=new AbortController(),_0x1004cf=setTimeout(()=>{try{_0x59e6d4['abort']();}catch(_0x1bf4a9){}},_0x2c437c);try{const _0xbd4921=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x3bf87f},'body':JSON[_0x3f8bf2(0x13b)](_0x18f5d4),'signal':_0x59e6d4['signal']}),_0x127c05=await _0xbd4921['json']();if(_0x127c05&&_0x127c05['rspParam']){const _0x484c22=JSON['parse'](_0x127c05['rspParam']);if(_0x484c22['Result']===0x0&&_0x484c22['return_Parameter']){const _0x181aa5=String(_0x484c22['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x82e418=JSON['parse'](decodeBase64Utf8(_0x181aa5));return{..._0x82e418,'resultCode':0x0};}}return _0x127c05||{'resultCode':NET_ERROR_CODE};}catch(_0x5b236c){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x1004cf);}}function decodeBase64Utf8(_0x30a205){const _0x283b6d=atob(_0x30a205);try{const _0x447dff=new Uint8Array(_0x283b6d['length']);for(let _0x559516=0x0;_0x559516<_0x283b6d['length'];_0x559516++)_0x447dff[_0x559516]=_0x283b6d['charCodeAt'](_0x559516);return new TextDecoder('utf-8')['decode'](_0x447dff);}catch(_0x5b0086){return _0x283b6d;}}async function fetchCpeApi(_0x24dafa,_0x1ec43b,_0x16bed6,_0x14c7dc={},_0x59f4a8=0xbb8){const _0xebdaa4=_0xbc31d5;if(!_0x1ec43b)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0xebdaa4(0x118)};return await performCpeRequest(_0x24dafa,_0x14c7dc,_0x1ec43b,_0x16bed6,_0x59f4a8);}function _0x4ec6(_0x156e1f,_0x719bf3){const _0x599006=_0x5990();return _0x4ec6=function(_0x4ec6a1,_0x305144){_0x4ec6a1=_0x4ec6a1-0x114;let _0x4b6b15=_0x599006[_0x4ec6a1];if(_0x4ec6['RKWhOw']===undefined){var _0x5b454c=function(_0x50d4fd){const _0x44a918='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x13a1ab='',_0x56f961='';for(let _0x5dad2e=0x0,_0x582d9c,_0x99f44d,_0x37ed35=0x0;_0x99f44d=_0x50d4fd['charAt'](_0x37ed35++);~_0x99f44d&&(_0x582d9c=_0x5dad2e%0x4?_0x582d9c*0x40+_0x99f44d:_0x99f44d,_0x5dad2e++%0x4)?_0x13a1ab+=String['fromCharCode'](0xff&_0x582d9c>>(-0x2*_0x5dad2e&0x6)):0x0){_0x99f44d=_0x44a918['indexOf'](_0x99f44d);}for(let _0x32f941=0x0,_0x2b5853=_0x13a1ab['length'];_0x32f941<_0x2b5853;_0x32f941++){_0x56f961+='%'+('00'+_0x13a1ab['charCodeAt'](_0x32f941)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x56f961);};_0x4ec6['MsVFii']=_0x5b454c,_0x156e1f=arguments,_0x4ec6['RKWhOw']=!![];}const _0x43f1ca=_0x599006[0x0],_0x51788c=_0x4ec6a1+_0x43f1ca,_0xbba598=_0x156e1f[_0x51788c];return!_0xbba598?(_0x4b6b15=_0x4ec6['MsVFii'](_0x4b6b15),_0x156e1f[_0x51788c]=_0x4b6b15):_0x4b6b15=_0xbba598,_0x4b6b15;},_0x4ec6(_0x156e1f,_0x719bf3);}function isEmpty(_0xe65451){const _0x42bac1=_0xbc31d5;return!_0xe65451||typeof _0xe65451==='object'&&Object[_0x42bac1(0x127)](_0xe65451)['length']===0x0;}async function fetchAll(_0xaa33af){const _0x2f8256=_0xbc31d5,_0x17de47=_0xaa33af['token'],_0x497b2a=_0xaa33af['mac'],_0x3860ea=0xbb8,_0x1e1c66=await Promise[_0x2f8256(0x11a)]([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x17de47,_0x497b2a,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x17de47,_0x497b2a,{},0x9c4),fetchCpeApi('GET_FILINK_TOPOLOGY_INFO',_0x17de47,_0x497b2a,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x17de47,_0x497b2a,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x17de47,_0x497b2a,{},0xbb8)]),_0x1bd2fc=[];let _0x54529=readResult(_0x1e1c66[0x0],_0x1bd2fc),_0x506a73=readResult(_0x1e1c66[0x1],_0x1bd2fc),_0x283967=readResult(_0x1e1c66[0x2],_0x1bd2fc),_0x143f12=readResult(_0x1e1c66[0x3],_0x1bd2fc);const _0x5b22d5=readResult(_0x1e1c66[0x4],_0x1bd2fc);if(_0x283967)_0x283967=_0x283967['MainRouter']||_0x283967['Router']||_0x283967;const _0x374da0=[_0x54529,_0x506a73,_0x283967,_0x143f12,_0x5b22d5]['filter'](_0x3b2c78=>!isEmpty(_0x3b2c78))['length'],_0x3d4ca1=_0x374da0===0x0?classifyFault(_0x1bd2fc):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x374da0+'/5\x20|\x20fault='+(_0x3d4ca1||'-')+'\x20|\x20失败码=['+_0x1bd2fc['join'](',')+']'),{'rf':_0x54529,'ca':_0x506a73,'topo':_0x283967,'sim':_0x143f12,'traffic':_0x5b22d5,'failCodes':_0x1bd2fc,'fault':_0x3d4ca1,'successCount':_0x374da0};}function saveCache(_0x3f0aa){const _0x3c55a6=_0xbc31d5;try{const _0xdc1687=parseTrafficData(_0x3f0aa['traffic']),_0x32ed57={'rf':{'WorkMode':_0x3f0aa['rf']?.[_0x3c55a6(0x134)],'SSB_RSRP':_0x3f0aa['rf']?.['SSB_RSRP'],'RSRP':_0x3f0aa['rf']?.['RSRP'],'SSB_SINR':_0x3f0aa['rf']?.['SSB_SINR'],'SINR':_0x3f0aa['rf']?.[_0x3c55a6(0x128)],'SSB_RSRQ':_0x3f0aa['rf']?.['SSB_RSRQ'],'RSRQ':_0x3f0aa['rf']?.['RSRQ'],'SSB_RSSI':_0x3f0aa['rf']?.['SSB_RSSI'],'RSSI':_0x3f0aa['rf']?.['RSSI'],'BAND':_0x3f0aa['rf']?.[_0x3c55a6(0x137)],'NR_BAND':_0x3f0aa['rf']?.['NR_BAND'],'LTE_BAND':_0x3f0aa['rf']?.['LTE_BAND'],'PCI':_0x3f0aa['rf']?.['PCI'],'SPN':_0x3f0aa['rf']?.['SPN']},'ca':{'main_CA_info':_0x3f0aa['ca']?.['main_CA_info']||{},'sub_CA_info':_0x3f0aa['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x3f0aa['topo']?.[_0x3c55a6(0x11f)],'UpTime':_0x3f0aa['topo']?.['UpTime'],'Name':_0x3f0aa['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x3f0aa[_0x3c55a6(0x11b)])},'sim':{'Operator':_0x3f0aa['sim']?.['Operator'],'SPN':_0x3f0aa['sim']?.['SPN']},'traffic':{'todayBytes':_0xdc1687['todayBytes'],'monthBytes':_0xdc1687[_0x3c55a6(0x12a)],'todayRx':_0xdc1687['todayRx'],'todayTx':_0xdc1687['todayTx'],'monthRx':_0xdc1687['monthRx'],'monthTx':_0xdc1687['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x32ed57));}catch(_0x200254){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x200254);}}function loadCache(){const _0x5f1362=_0xbc31d5;try{const _0x3c476e=Keychain['get'](KEY_CACHE);if(!_0x3c476e)return null;const _0x366300=JSON['parse'](_0x3c476e);if(!_0x366300||typeof _0x366300!==_0x5f1362(0x138))return null;return _0x366300;}catch(_0x112f98){return null;}}
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
