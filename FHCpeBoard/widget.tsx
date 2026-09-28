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

const _0x49b677=_0xe17e;(function(_0x39bbb1,_0x1036ef){const _0x3b935c=_0xe17e,_0x326411=_0x39bbb1();while(!![]){try{const _0x3d2b3b=parseInt(_0x3b935c(0x19c))/0x1*(parseInt(_0x3b935c(0x177))/0x2)+-parseInt(_0x3b935c(0x17f))/0x3*(-parseInt(_0x3b935c(0x1a3))/0x4)+parseInt(_0x3b935c(0x19b))/0x5+parseInt(_0x3b935c(0x191))/0x6+-parseInt(_0x3b935c(0x17b))/0x7*(-parseInt(_0x3b935c(0x1a5))/0x8)+parseInt(_0x3b935c(0x17a))/0x9*(-parseInt(_0x3b935c(0x19d))/0xa)+parseInt(_0x3b935c(0x197))/0xb*(-parseInt(_0x3b935c(0x1a9))/0xc);if(_0x3d2b3b===_0x1036ef)break;else _0x326411['push'](_0x326411['shift']());}catch(_0x5046e3){_0x326411['push'](_0x326411['shift']());}}}(_0x20f9,0xd49ef));const TOKEN_KEY='CPE_TOKEN',MAC_KEY=_0x49b677(0x199),NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC=_0x49b677(0x17e),DEFAULT_NAME='烽火CPE';function _0x20f9(){const _0x31c57d=['5lIT5zU956E75yQO','mtK0ntu1mg1uEMjnwa','ntq3nK5Ty1H6va','otG5oduWAK5dA1zz','DhjPBq','Dg9gAxHLza','twfPBLjVDxrLCG','neCG','zMLSDgvY','mtuXmJyZnKPOsNj6Dq','neCGtfrf','mtiYmdH1yMzUvg8','CgfYC2u','zgv2AwnLtMfTzq','ChvZAa','nZCXnLDWqLvztG','uLnsuq','B2jQzwn0','C2LNBMfS','u0LouG','nJj6vgTPrwe','5y2v6l295RoI','C3vIx0nbx2LUzM8','otbbvuzYq3u','mtq3rxHYzuvZ','zgv2AwnL','Bwf4','rdHgnta3renbrJmW','nMTmEgXRrG','Dg9vChbLCKnHC2u','Aw5JBhvKzxm','5lIT5zU95BM/55s1','v29YA01Vzgu','nuDb','C2LT','5lIj6l295RoI','D2fYBG','vevmrunptq','BM93','uLntsq','uM91DgvY','Dw5KzwzPBMvK','Bw9UDgHuEa','BgvUz3rO','CMfUzg9T','Dg9tDhjPBMC','mZCWmJiYoenTCfLcuG','r0vux0zjteLos19ut1bpte9hwv9jtKzp','Bw9UDgHcExrLCW','Dg9KyxLuEa','CMvWBgfJzq','q1rdqW','mtC3mw1jDwPvvW','zgf5x3j4x3rYywzMAwm','q1bfx0rfvKLdrv9nqum'];_0x20f9=function(){return _0x31c57d;};return _0x20f9();}function readKey(_0x540b99,_0x1f5d4b){const _0x2df274=_0x49b677;try{const _0x276a68=Keychain['get'](_0x540b99);return _0x276a68===null||_0x276a68===undefined||_0x276a68===''?_0x1f5d4b:String(_0x276a68)[_0x2df274(0x19e)]();}catch(_0x44ccc2){return _0x1f5d4b;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0x5102ef){const _0x3ec26f=_0x49b677;try{if(_0x5102ef['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0x5102ef['token'])[_0x3ec26f(0x19e)]());if(_0x5102ef['mac']!==undefined)Keychain['set'](MAC_KEY,String(_0x5102ef['mac'])['trim']()||DEFAULT_MAC);if(_0x5102ef[_0x3ec26f(0x1a7)]!==undefined)Keychain['set'](NAME_KEY,String(_0x5102ef['deviceName'])[_0x3ec26f(0x19e)]()||DEFAULT_NAME);}catch(_0x2c1596){console['log']('⚠️\x20保存设置失败\x20|\x20'+_0x2c1596);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x42693a,_0x59f00d){if(_0x42693a===undefined||_0x42693a===null||_0x42693a==='')return _0x59f00d;const _0x242ed0=String(_0x42693a)['trim']();return _0x242ed0==='-'||_0x242ed0==='undefined'?_0x59f00d:_0x242ed0;}function firstValid(_0x4ced3a,_0x1f7519){for(const _0xd9a11 of _0x4ced3a){const _0x57afd1=getValidValue(_0xd9a11,'');if(_0x57afd1)return _0x57afd1;}return _0x1f7519;}function resolveOperator(_0x30cfeb,_0x5d2488){const _0x78f420=getOperatorName(_0x5d2488&&_0x5d2488['Operator']||'',_0x5d2488&&_0x5d2488['SPN']||'');if(_0x78f420==='未知'&&_0x30cfeb&&_0x30cfeb['SPN'])return String(_0x30cfeb['SPN']);return _0x78f420;}function formatUptime(_0x38b062){const _0x2a65f5=parseInt(_0x38b062||0x0)||0x0,_0x131d60=Math['floor'](_0x2a65f5/0x15180),_0x3b92a0=Math['floor'](_0x2a65f5%0x15180/0xe10),_0x1e11ed=Math['floor'](_0x2a65f5%0xe10/0x3c),_0x2e9e54=[];if(_0x131d60>0x0)_0x2e9e54['push'](_0x131d60+'天');if(_0x3b92a0>0x0||_0x131d60>0x0)_0x2e9e54['push'](_0x3b92a0+'小时');return _0x2e9e54['push'](_0x1e11ed+'分'),_0x2e9e54['join']('\x20');}function formatUptimeShort(_0x1b5772){const _0x1acbde=parseInt(_0x1b5772||0x0)||0x0,_0x5289e4=Math['floor'](_0x1acbde/0x15180),_0x29fa46=Math['floor'](_0x1acbde%0x15180/0xe10),_0x6bcf30=Math['floor'](_0x1acbde%0xe10/0x3c),_0x3613e5=[];if(_0x5289e4>0x0)_0x3613e5['push'](_0x5289e4+'天');if(_0x29fa46>0x0||_0x5289e4>0x0)_0x3613e5['push'](_0x29fa46+'时');return _0x3613e5['push'](_0x6bcf30+'分'),_0x3613e5['join']('');}function trafficMbToBytes(_0x2e6259){const _0x1af119=parseFloat(_0x2e6259||0x0);if(isNaN(_0x1af119))return 0x0;return Math['round'](_0x1af119*0x400*0x400);}function formatTraffic(_0x35873e){const _0x1b7f7b=_0x49b677,_0x569d32=Number(_0x35873e||0x0);if(!isFinite(_0x569d32)||_0x569d32<=0x0)return'0M';const _0x3b908b=0x400*0x400,_0x15e94a=0x400*_0x3b908b;if(_0x569d32>=_0x15e94a)return(_0x569d32/_0x15e94a)[_0x1b7f7b(0x19f)](0x1)+'G';return(_0x569d32/_0x3b908b)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x4c24cd){const _0x24e809=Number(_0x4c24cd||0x0);if(!isFinite(_0x24e809)||_0x24e809<=0x0)return'0';const _0x4892c5=0x400,_0x340a23=0x400*_0x4892c5,_0x5b936d=0x400*_0x340a23;if(_0x24e809>=_0x5b936d){const _0x53ca43=_0x24e809/_0x5b936d;return(_0x53ca43>=0x64?_0x53ca43['toFixed'](0x0):_0x53ca43['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0x24e809>=_0x340a23)return Math['round'](_0x24e809/_0x340a23)+'M';if(_0x24e809>=_0x4892c5)return Math['round'](_0x24e809/_0x4892c5)+'K';return String(Math['round'](_0x24e809));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x33d107){const _0x578832=_0x49b677;if(!_0x33d107)return ZERO_TRAFFIC;const _0x480d05=_0x33d107[_0x578832(0x198)]!==undefined||_0x33d107['day_tx_traffic']!==undefined||_0x33d107['month_rx_traffic']!==undefined||_0x33d107['month_tx_traffic']!==undefined;if(!_0x480d05)return{'todayBytes':Number(_0x33d107['todayBytes'])||0x0,'monthBytes':Number(_0x33d107['monthBytes'])||0x0,'todayRx':Number(_0x33d107['todayRx'])||0x0,'todayTx':Number(_0x33d107['todayTx'])||0x0,'monthRx':Number(_0x33d107['monthRx'])||0x0,'monthTx':Number(_0x33d107['monthTx'])||0x0};const _0x31f03d=trafficMbToBytes(_0x33d107['day_rx_traffic']),_0x5220e9=trafficMbToBytes(_0x33d107['day_tx_traffic']),_0x2dd4ce=trafficMbToBytes(_0x33d107['month_rx_traffic']),_0xa59537=trafficMbToBytes(_0x33d107['month_tx_traffic']);return{'todayBytes':_0x31f03d+_0x5220e9,'monthBytes':_0x2dd4ce+_0xa59537,'todayRx':_0x31f03d,'todayTx':_0x5220e9,'monthRx':_0x2dd4ce,'monthTx':_0xa59537};}function trafficRxRatio(_0x4d5551,_0x375c8a){const _0x392756=Number(_0x4d5551||0x0)+Number(_0x375c8a||0x0);if(!isFinite(_0x392756)||_0x392756<=0x0)return 0.5;return Math['min'](0.94,Math['max'](0.06,Number(_0x4d5551||0x0)/_0x392756));}function getOperatorName(_0x1e098d,_0x1888d8){const _0x464262=_0x49b677;if(!_0x1e098d)return _0x1888d8||'未知';const _0x1e7790=String(_0x1e098d)['toUpperCase']();if(_0x1e7790[_0x464262(0x181)]('CMCC')||_0x1e7790==='中国移动'||_0x1e7790['includes']('CHINA\x20MOBILE'))return _0x464262(0x19a);if(_0x1e7790[_0x464262(0x181)]('CUCC')||_0x1e7790==='中国联通'||_0x1e7790['includes']('CHINA\x20UNICOM')||_0x1e7790['includes']('UNICOM'))return'中国联通';if(_0x1e7790['includes'](_0x464262(0x196))||_0x1e7790==='CT'||_0x1e7790==='中国电信'||_0x1e7790['includes']('CHINA\x20TELECOM')||_0x1e7790['includes'](_0x464262(0x188)))return'中国电信';if(_0x1e7790['includes']('CBN')||_0x1e7790===_0x464262(0x182)||_0x1e7790['includes']('CHINA\x20BROADCAST'))return'中国广电';return _0x1e098d;}function getSignalColor(_0x21243c,_0x444350){const _0x2be88d=_0x49b677;let _0x43215c=parseInt(_0x21243c);if(isNaN(_0x43215c))_0x43215c=-0x78;if(_0x43215c>-0x59)return _0x444350['ok'];if(_0x43215c>-0x63)return _0x444350[_0x2be88d(0x187)];return _0x444350['bad'];}function getSinrColor(_0x55a297,_0x43e6d6){let _0x42506e=parseFloat(_0x55a297);if(isNaN(_0x42506e))_0x42506e=0x0;if(_0x42506e>0xf)return _0x43e6d6['ok'];if(_0x42506e>0x8)return _0x43e6d6['warn'];return _0x43e6d6['bad'];}function getAllBands(_0x2fe27a,_0x1911d6,_0x1fda48){const _0x56c9e7=_0x49b677,_0x2c4cb8=[],_0xee4eac=_0x1fda48?'N':'B',_0x59ec29=getValidValue(_0x2fe27a?.['BAND']||_0x2fe27a?.['NR_BAND']||_0x2fe27a?.['LTE_BAND'],'');if(_0x59ec29)_0x2c4cb8[_0x56c9e7(0x1a8)](_0xee4eac+_0x59ec29);for(const _0x584ef2 of _0x1911d6?.['sub_CA_info']||[]){const _0x2f750c=String(_0x584ef2?.['Band']||'');if(_0x2f750c&&_0x2f750c!=='-')_0x2c4cb8['push'](_0xee4eac+_0x2f750c);}if(_0x2c4cb8[_0x56c9e7(0x18e)]===0x0)_0x2c4cb8['push'](_0x1fda48?'N78':'B3');return _0x2c4cb8;}function getCaBadgeText(_0xb5a8d9,_0x2876ed,_0x342858){const _0x185ae1=_0x49b677,_0x5b4965=(_0x2876ed?'5G\x20':'4G\x20')+_0x342858;if(!_0x2876ed)return _0x5b4965;const _0xb3d10d=0x1+(_0xb5a8d9&&_0xb5a8d9['sub_CA_info']||[])['length'];if(_0xb3d10d>=0x4)return'5GA+';if(_0xb3d10d===0x3)return _0x185ae1(0x184);if(_0xb3d10d===0x2)return'5G+';return _0x5b4965;}function getCarrierCountText(_0xda3c61){const _0xc00379=_0x49b677,_0x2fbdf7=(_0xda3c61&&_0xda3c61['sub_CA_info']||[])['length'];if(_0x2fbdf7===0x0)return _0xc00379(0x178);if(_0x2fbdf7===0x1)return'双载波';if(_0x2fbdf7===0x2)return _0xc00379(0x186);return'四载波';}function getNetworkModeText(_0x33dad6,_0x9e9615,_0x51de2a){const _0x459192=_0x49b677,_0x8cf59c=String(_0x51de2a||'')[_0x459192(0x180)]();if(!_0x9e9615){if(!_0x8cf59c||_0x8cf59c==='4G'||_0x8cf59c==='LTE')return _0x459192(0x1a4);return _0x459192(0x1a1)+_0x8cf59c;}const _0x342ec7=0x1+(_0x33dad6&&_0x33dad6[_0x459192(0x179)]||[])['length'];if(_0x342ec7>=0x4)return'5GA+';if(_0x342ec7===0x3)return'5GA';if(_0x342ec7===0x2)return'5G+';return _0x8cf59c?'5G\x20'+_0x8cf59c:'5G\x20SA';}function rsrpToPercent(_0x2966fd){const _0xd52d9e=_0x49b677;let _0x5171f7=parseInt(_0x2966fd);if(isNaN(_0x5171f7))_0x5171f7=-0x78;const _0x597159=Math['min'](-0x46,Math['max'](-0x78,_0x5171f7)),_0x1ab3e4=(_0x597159+0x78)/0x32;return Math['min'](0x64,Math[_0xd52d9e(0x17d)](0xa,0xa+_0x1ab3e4*0x5a));}function sinrToPercent(_0x33fec9){const _0x500f59=_0x49b677;let _0x4ba304=parseFloat(_0x33fec9);if(isNaN(_0x4ba304))_0x4ba304=0x0;return Math['min'](0x64,Math[_0x500f59(0x17d)](0x0,_0x4ba304/0x19*0x64));}function resolveDeviceName(_0x4ea5f2,_0x357046){const _0xde240b=_0x49b677,_0x440909=_0x4ea5f2&&_0x4ea5f2['Name']!=null?String(_0x4ea5f2['Name'])['trim']():'';if(!_0x440909)return _0x357046;if(_0x440909==='--'||_0x440909===_0xde240b(0x18c)||_0x440909==='null'||_0x440909==='0')return _0x357046;return _0x440909;}function rsrpToBars(_0x1791e4){const _0x5ade27=parseInt(_0x1791e4);if(isNaN(_0x5ade27))return 0x0;if(_0x5ade27>=-0x55)return 0x4;if(_0x5ade27>=-0x5f)return 0x3;if(_0x5ade27>=-0x69)return 0x2;if(_0x5ade27>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0xc69813){const _0x5f4790=_0x49b677;if(!_0xc69813)return 0x0;if(typeof _0xc69813['onlineDevices']==='number')return _0xc69813['onlineDevices'];const _0x1810c9=_0xc69813['MainBaseInfo'];if(!Array['isArray'](_0x1810c9))return 0x0;return _0x1810c9[_0x5f4790(0x1a2)](_0x181a3c=>_0x181a3c&&String(_0x181a3c['NetStatus'])==='1')['length'];}function urlDecode(_0x44d335){const _0x186f58=_0x49b677,_0x3d99d9=[];for(let _0x20813a=0x0;_0x20813a<_0x44d335['length'];_0x20813a+=0x2)_0x3d99d9[_0x186f58(0x1a8)](parseInt(_0x44d335['substr'](_0x20813a,0x2),0x10));let _0x102c1d='';for(let _0x441fe8=0x0;_0x441fe8<_0x3d99d9['length'];){const _0x458b06=_0x3d99d9[_0x441fe8];if(_0x458b06<0x80)_0x102c1d+=String['fromCharCode'](_0x458b06),_0x441fe8++;else{if(_0x458b06>>0x5===0x6)_0x102c1d+=String['fromCharCode']((_0x458b06&0x1f)<<0x6|_0x3d99d9[_0x441fe8+0x1]&0x3f),_0x441fe8+=0x2;else _0x458b06>>0x4===0xe?(_0x102c1d+=String['fromCharCode']((_0x458b06&0xf)<<0xc|(_0x3d99d9[_0x441fe8+0x1]&0x3f)<<0x6|_0x3d99d9[_0x441fe8+0x2]&0x3f),_0x441fe8+=0x3):(_0x102c1d+=String['fromCharCode']((_0x458b06&0x7)<<0x12|(_0x3d99d9[_0x441fe8+0x1]&0x3f)<<0xc|(_0x3d99d9[_0x441fe8+0x2]&0x3f)<<0x6|_0x3d99d9[_0x441fe8+0x3]),_0x441fe8+=0x4);}}return _0x102c1d;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':'！登录失效'},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':'设备离线\x0aCPE\x20未联网或已关机','auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){const _0x48c509=_0x49b677;return Date[_0x48c509(0x189)]()[_0x48c509(0x190)]();}function generateUUID(){const _0x2b55fe=_0x49b677,_0x3e82fd='0123456789ABCDEF';let _0x1324f3='';for(let _0x5192b6=0x0;_0x5192b6<0x20;_0x5192b6++)_0x1324f3+=_0x3e82fd[Math['floor'](Math[_0x2b55fe(0x18f)]()*0x10)];return _0x1324f3;}function generateSequenceId(_0x56f379){return _0x56f379+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x296f3f){const _0x3f30c6=_0x49b677;if(!_0x296f3f||_0x296f3f['length']===0x0)return null;if(_0x296f3f['some'](_0x1f509f=>AUTH_ERROR_CODES['indexOf'](_0x1f509f)>=0x0))return'auth';if(_0x296f3f['some'](_0x5c2d9f=>DEVICE_ERROR_CODES['indexOf'](_0x5c2d9f)>=0x0))return _0x3f30c6(0x17c);return'network';}function readResult(_0x2d38df,_0xeae0bc){if(!_0x2d38df||_0x2d38df['status']!=='fulfilled'||!_0x2d38df['value'])return _0xeae0bc['push'](NET_ERROR_CODE),null;const _0x4aaa31=_0x2d38df['value'];if(_0x4aaa31['resultCode']===0x0)return _0x4aaa31;return _0xeae0bc['push'](typeof _0x4aaa31['resultCode']==='number'?_0x4aaa31['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0xbec4d1,_0x1feb19,_0x527221,_0x666f49,_0x41dff7){const _0x4d09a8=_0x49b677;if(!_0x527221)return null;const _0x2e062e={'CmdType':_0xbec4d1,..._0x1feb19};if(!_0x2e062e['SequenceId'])_0x2e062e['SequenceId']=generateSequenceId(_0xbec4d1);const _0x3ad3fb={'appVersion':urlDecode('322e322e3531'),'mac':_0x666f49,'timeout':0x3,'token':_0x527221,'appType':urlDecode('7465726d696e616c'),'reqParam':JSON['stringify']({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x2e062e)}),'operatorId':getOperatorId()},_0x4032e9=new AbortController(),_0x3208b4=setTimeout(()=>{try{_0x4032e9['abort']();}catch(_0xf8c9e){}},_0x41dff7);try{const _0x563e83=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x527221},'body':JSON['stringify'](_0x3ad3fb),'signal':_0x4032e9[_0x4d09a8(0x175)]}),_0x1079bc=await _0x563e83['json']();if(_0x1079bc&&_0x1079bc['rspParam']){const _0x499bd5=JSON[_0x4d09a8(0x1a6)](_0x1079bc['rspParam']);if(_0x499bd5['Result']===0x0&&_0x499bd5['return_Parameter']){const _0x2e6919=String(_0x499bd5['return_Parameter'])[_0x4d09a8(0x195)](/\\\//g,'/')['replace'](/\\n/g,'')['replace'](/\\/g,'')['trim'](),_0x53629c=JSON[_0x4d09a8(0x1a6)](decodeBase64Utf8(_0x2e6919));return{..._0x53629c,'resultCode':0x0};}}return _0x1079bc||{'resultCode':NET_ERROR_CODE};}catch(_0x4ac3a7){return{'resultCode':NET_ERROR_CODE,'resultDesc':'网络请求失败'};}finally{clearTimeout(_0x3208b4);}}function decodeBase64Utf8(_0x3676db){const _0x39c116=_0x49b677,_0x464002=atob(_0x3676db);try{const _0x305dff=new Uint8Array(_0x464002[_0x39c116(0x18e)]);for(let _0x9ce359=0x0;_0x9ce359<_0x464002['length'];_0x9ce359++)_0x305dff[_0x9ce359]=_0x464002['charCodeAt'](_0x9ce359);return new TextDecoder('utf-8')['decode'](_0x305dff);}catch(_0x3c1d19){return _0x464002;}}async function fetchCpeApi(_0x24e57d,_0x41bad4,_0x2d5d1c,_0x4b83b8={},_0x69e07e=0xbb8){if(!_0x41bad4)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':'未配置\x20Token'};return await performCpeRequest(_0x24e57d,_0x4b83b8,_0x41bad4,_0x2d5d1c,_0x69e07e);}function _0xe17e(_0x31f2e5,_0x90a8cb){const _0x20f993=_0x20f9();return _0xe17e=function(_0xe17e40,_0x2bf612){_0xe17e40=_0xe17e40-0x173;let _0x5b3722=_0x20f993[_0xe17e40];if(_0xe17e['TRXcQf']===undefined){var _0x492ce2=function(_0x540b99){const _0x1f5d4b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x276a68='',_0x44ccc2='';for(let _0x5102ef=0x0,_0x2c1596,_0x42693a,_0x59f00d=0x0;_0x42693a=_0x540b99['charAt'](_0x59f00d++);~_0x42693a&&(_0x2c1596=_0x5102ef%0x4?_0x2c1596*0x40+_0x42693a:_0x42693a,_0x5102ef++%0x4)?_0x276a68+=String['fromCharCode'](0xff&_0x2c1596>>(-0x2*_0x5102ef&0x6)):0x0){_0x42693a=_0x1f5d4b['indexOf'](_0x42693a);}for(let _0x242ed0=0x0,_0x4ced3a=_0x276a68['length'];_0x242ed0<_0x4ced3a;_0x242ed0++){_0x44ccc2+='%'+('00'+_0x276a68['charCodeAt'](_0x242ed0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44ccc2);};_0xe17e['sySwYx']=_0x492ce2,_0x31f2e5=arguments,_0xe17e['TRXcQf']=!![];}const _0x4ee8f4=_0x20f993[0x0],_0x1f5edc=_0xe17e40+_0x4ee8f4,_0x5bfd59=_0x31f2e5[_0x1f5edc];return!_0x5bfd59?(_0x5b3722=_0xe17e['sySwYx'](_0x5b3722),_0x31f2e5[_0x1f5edc]=_0x5b3722):_0x5b3722=_0x5bfd59,_0x5b3722;},_0xe17e(_0x31f2e5,_0x90a8cb);}function isEmpty(_0x9e3477){const _0x4ef031=_0x49b677;return!_0x9e3477||typeof _0x9e3477===_0x4ef031(0x174)&&Object['keys'](_0x9e3477)['length']===0x0;}async function fetchAll(_0x3eccf3){const _0x84755f=_0x49b677,_0x3d30b9=_0x3eccf3['token'],_0x405666=_0x3eccf3['mac'],_0x2e25ea=0xbb8,_0x76cb14=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x3d30b9,_0x405666,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x3d30b9,_0x405666,{},0x9c4),fetchCpeApi(_0x84755f(0x192),_0x3d30b9,_0x405666,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x3d30b9,_0x405666,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x3d30b9,_0x405666,{},0xbb8)]),_0x342b86=[];let _0x5c7f8b=readResult(_0x76cb14[0x0],_0x342b86),_0x57457c=readResult(_0x76cb14[0x1],_0x342b86),_0x132171=readResult(_0x76cb14[0x2],_0x342b86),_0x1732b9=readResult(_0x76cb14[0x3],_0x342b86);const _0x455a4d=readResult(_0x76cb14[0x4],_0x342b86);if(_0x132171)_0x132171=_0x132171[_0x84755f(0x1a0)]||_0x132171[_0x84755f(0x18b)]||_0x132171;const _0x1dc6fb=[_0x5c7f8b,_0x57457c,_0x132171,_0x1732b9,_0x455a4d]['filter'](_0x95c0a1=>!isEmpty(_0x95c0a1))['length'],_0x4efd4b=_0x1dc6fb===0x0?classifyFault(_0x342b86):null;return console['log']('📡\x20取数完成\x20|\x20成功='+_0x1dc6fb+'/5\x20|\x20fault='+(_0x4efd4b||'-')+'\x20|\x20失败码=['+_0x342b86['join'](',')+']'),{'rf':_0x5c7f8b,'ca':_0x57457c,'topo':_0x132171,'sim':_0x1732b9,'traffic':_0x455a4d,'failCodes':_0x342b86,'fault':_0x4efd4b,'successCount':_0x1dc6fb};}function saveCache(_0x236899){const _0x25d56c=_0x49b677;try{const _0xa841b7=parseTrafficData(_0x236899['traffic']),_0x26a582={'rf':{'WorkMode':_0x236899['rf']?.[_0x25d56c(0x183)],'SSB_RSRP':_0x236899['rf']?.['SSB_RSRP'],'RSRP':_0x236899['rf']?.['RSRP'],'SSB_SINR':_0x236899['rf']?.['SSB_SINR'],'SINR':_0x236899['rf']?.[_0x25d56c(0x176)],'SSB_RSRQ':_0x236899['rf']?.['SSB_RSRQ'],'RSRQ':_0x236899['rf']?.[_0x25d56c(0x173)],'SSB_RSSI':_0x236899['rf']?.['SSB_RSSI'],'RSSI':_0x236899['rf']?.[_0x25d56c(0x18a)],'BAND':_0x236899['rf']?.['BAND'],'NR_BAND':_0x236899['rf']?.['NR_BAND'],'LTE_BAND':_0x236899['rf']?.['LTE_BAND'],'PCI':_0x236899['rf']?.['PCI'],'SPN':_0x236899['rf']?.['SPN']},'ca':{'main_CA_info':_0x236899['ca']?.['main_CA_info']||{},'sub_CA_info':_0x236899['ca']?.[_0x25d56c(0x179)]||[]},'topo':{'NetStatus':_0x236899['topo']?.['NetStatus'],'UpTime':_0x236899['topo']?.['UpTime'],'Name':_0x236899['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x236899['topo'])},'sim':{'Operator':_0x236899[_0x25d56c(0x185)]?.['Operator'],'SPN':_0x236899['sim']?.['SPN']},'traffic':{'todayBytes':_0xa841b7['todayBytes'],'monthBytes':_0xa841b7[_0x25d56c(0x193)],'todayRx':_0xa841b7['todayRx'],'todayTx':_0xa841b7[_0x25d56c(0x194)],'monthRx':_0xa841b7['monthRx'],'monthTx':_0xa841b7[_0x25d56c(0x18d)]},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x26a582));}catch(_0x227845){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x227845);}}function loadCache(){const _0x16a55c=_0x49b677;try{const _0x34e119=Keychain['get'](KEY_CACHE);if(!_0x34e119)return null;const _0xc38d7d=JSON[_0x16a55c(0x1a6)](_0x34e119);if(!_0xc38d7d||typeof _0xc38d7d!=='object')return null;return _0xc38d7d;}catch(_0x54e75b){return null;}}
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
