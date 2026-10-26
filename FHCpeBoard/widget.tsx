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

const _0x147697=_0x1687;(function(_0x845705,_0x1451df){const _0x493e5a=_0x1687,_0x3c0b39=_0x845705();while(!![]){try{const _0x3ed61d=-parseInt(_0x493e5a(0x1cf))/0x1*(parseInt(_0x493e5a(0x1af))/0x2)+parseInt(_0x493e5a(0x1c8))/0x3*(-parseInt(_0x493e5a(0x1d8))/0x4)+parseInt(_0x493e5a(0x1dc))/0x5*(parseInt(_0x493e5a(0x1ce))/0x6)+-parseInt(_0x493e5a(0x1c2))/0x7*(-parseInt(_0x493e5a(0x1ca))/0x8)+parseInt(_0x493e5a(0x1c5))/0x9*(parseInt(_0x493e5a(0x1ab))/0xa)+-parseInt(_0x493e5a(0x1cb))/0xb*(-parseInt(_0x493e5a(0x1d4))/0xc)+parseInt(_0x493e5a(0x1d0))/0xd*(parseInt(_0x493e5a(0x1c0))/0xe);if(_0x3ed61d===_0x1451df)break;else _0x3c0b39['push'](_0x3c0b39['shift']());}catch(_0x2f5d00){_0x3c0b39['push'](_0x3c0b39['shift']());}}}(_0x4bda,0x57c1f));function _0x4bda(){const _0x4e6a06=['Bwf4','CNnWugfYyw0','5lIT5zU95BM/55s1','nxf4s1D4CG','C3rYAw5NAwz5','mZqYmJbOtvvVvuC','mdeYmZq1nJC4oufcq0rfrG','zMXVB3i','uM91DgvY','mJjmz0nzChu','q1bfx0rfvKLdrv9nqum','Bg9N','6k6+5Ash56A757Q/cKnqrsdMNkROGztNVzhMIjBLT7lLHBpMNlO','5lIj6l295RoI','C2v0','u2vXDwvUy2vjza','q0HjtKeGvu5jq09n','nuDb','BgvUz3rO','r0vux0zjteLos19ut1bpte9hwv9jtKzp','572r57UC6k+35Rgc5AsX6lsL','CMvZDwX0q29Kzq','twfPBLjVDxrLCG','BwfJ','tMv0u3rHDhvZ','Aw5JBhvKzxm','nZbID0jwvKW','77Yb55M75B2v5AsX5Pwi','n1zKu3nwsa','5PYQ6ywn572UifrVA2vU','u1ncx1jtu0K','mZy5qM9czxfK','Bw9UDgHcExrLCW','tLjFqKfora','m1HhBg5Vra','zMLSDgvY','mZi3odmYvefAuuPJ','mtqZAfvZA2zV','qKfora','Aw5KzxHpzG','mZqXmJe0B0HOserj','ndy3mZrMugvMENm','nZy1odqZtxL0wxLZ','nZq2ntCYnMq2otzLnJe2yW','CMvWBgfJzq','A2v5CW','ndmXnZK2u2rzsgPZ','vxbuAw1L','yxv0Aa','ANnVBG','nta3odiWC3LnDMfA'];_0x4bda=function(){return _0x4e6a06;};return _0x4bda();}const TOKEN_KEY='CPE_TOKEN',MAC_KEY=_0x147697(0x1b0),NAME_KEY='CPE_DEVICE_NAME',KEY_CACHE='CPE_WIDGET_CACHE',DEFAULT_MAC='D8F507DCAF30',DEFAULT_NAME='烽火CPE';function readKey(_0x4d2294,_0x4fe74f){try{const _0x249012=Keychain['get'](_0x4d2294);return _0x249012===null||_0x249012===undefined||_0x249012===''?_0x4fe74f:String(_0x249012)['trim']();}catch(_0x33b8dd){return _0x4fe74f;}}function loadSettings(){return{'token':readKey(TOKEN_KEY,''),'mac':readKey(MAC_KEY,DEFAULT_MAC),'deviceName':readKey(NAME_KEY,DEFAULT_NAME)};}function saveSettings(_0xd69774){const _0x36b6fc=_0x147697;try{if(_0xd69774['token']!==undefined)Keychain['set'](TOKEN_KEY,String(_0xd69774['token'])['trim']());if(_0xd69774[_0x36b6fc(0x1bd)]!==undefined)Keychain['set'](MAC_KEY,String(_0xd69774['mac'])['trim']()||DEFAULT_MAC);if(_0xd69774['deviceName']!==undefined)Keychain[_0x36b6fc(0x1b4)](NAME_KEY,String(_0xd69774['deviceName'])['trim']()||DEFAULT_NAME);}catch(_0x4d6174){console[_0x36b6fc(0x1b1)]('⚠️\x20保存设置失败\x20|\x20'+_0x4d6174);}}function hasToken(){return readKey(TOKEN_KEY,'')!=='';}function getValidValue(_0x3f6aa9,_0xd64f81){if(_0x3f6aa9===undefined||_0x3f6aa9===null||_0x3f6aa9==='')return _0xd64f81;const _0xa7cc19=String(_0x3f6aa9)['trim']();return _0xa7cc19==='-'||_0xa7cc19==='undefined'?_0xd64f81:_0xa7cc19;}function firstValid(_0x485269,_0x25b882){for(const _0x3f1627 of _0x485269){const _0x1a4a7b=getValidValue(_0x3f1627,'');if(_0x1a4a7b)return _0x1a4a7b;}return _0x25b882;}function resolveOperator(_0x581bbb,_0x4cdb13){const _0x205d23=getOperatorName(_0x4cdb13&&_0x4cdb13['Operator']||'',_0x4cdb13&&_0x4cdb13['SPN']||'');if(_0x205d23==='未知'&&_0x581bbb&&_0x581bbb['SPN'])return String(_0x581bbb['SPN']);return _0x205d23;}function formatUptime(_0x2c82c7){const _0x832811=parseInt(_0x2c82c7||0x0)||0x0,_0x5899e2=Math['floor'](_0x832811/0x15180),_0x4b59ad=Math['floor'](_0x832811%0x15180/0xe10),_0x329681=Math['floor'](_0x832811%0xe10/0x3c),_0x4b16d9=[];if(_0x5899e2>0x0)_0x4b16d9['push'](_0x5899e2+'天');if(_0x4b59ad>0x0||_0x5899e2>0x0)_0x4b16d9['push'](_0x4b59ad+'小时');return _0x4b16d9['push'](_0x329681+'分'),_0x4b16d9['join']('\x20');}function formatUptimeShort(_0x13e2cd){const _0x56eadd=parseInt(_0x13e2cd||0x0)||0x0,_0x5119e5=Math['floor'](_0x56eadd/0x15180),_0x459414=Math['floor'](_0x56eadd%0x15180/0xe10),_0x394451=Math['floor'](_0x56eadd%0xe10/0x3c),_0xc7ddb1=[];if(_0x5119e5>0x0)_0xc7ddb1['push'](_0x5119e5+'天');if(_0x459414>0x0||_0x5119e5>0x0)_0xc7ddb1['push'](_0x459414+'时');return _0xc7ddb1['push'](_0x394451+'分'),_0xc7ddb1['join']('');}function trafficMbToBytes(_0x505950){const _0x5e4483=parseFloat(_0x505950||0x0);if(isNaN(_0x5e4483))return 0x0;return Math['round'](_0x5e4483*0x400*0x400);}function formatTraffic(_0x2d8e01){const _0x395f55=Number(_0x2d8e01||0x0);if(!isFinite(_0x395f55)||_0x395f55<=0x0)return'0M';const _0x2b7f21=0x400*0x400,_0x1f960a=0x400*_0x2b7f21;if(_0x395f55>=_0x1f960a)return(_0x395f55/_0x1f960a)['toFixed'](0x1)+'G';return(_0x395f55/_0x2b7f21)['toFixed'](0x1)+'M';}function formatTrafficShort(_0x303279){const _0xacc0d3=Number(_0x303279||0x0);if(!isFinite(_0xacc0d3)||_0xacc0d3<=0x0)return'0';const _0xfc8af2=0x400,_0x5f4a67=0x400*_0xfc8af2,_0x56815b=0x400*_0x5f4a67;if(_0xacc0d3>=_0x56815b){const _0x14baa5=_0xacc0d3/_0x56815b;return(_0x14baa5>=0x64?_0x14baa5['toFixed'](0x0):_0x14baa5['toFixed'](0x1)['replace'](/\.0$/,''))+'G';}if(_0xacc0d3>=_0x5f4a67)return Math['round'](_0xacc0d3/_0x5f4a67)+'M';if(_0xacc0d3>=_0xfc8af2)return Math['round'](_0xacc0d3/_0xfc8af2)+'K';return String(Math['round'](_0xacc0d3));}const ZERO_TRAFFIC={'todayBytes':0x0,'monthBytes':0x0,'todayRx':0x0,'todayTx':0x0,'monthRx':0x0,'monthTx':0x0};function parseTrafficData(_0x4982f9){const _0x3bb233=_0x147697;if(!_0x4982f9)return ZERO_TRAFFIC;const _0x10b348=_0x4982f9['day_rx_traffic']!==undefined||_0x4982f9['day_tx_traffic']!==undefined||_0x4982f9['month_rx_traffic']!==undefined||_0x4982f9['month_tx_traffic']!==undefined;if(!_0x10b348)return{'todayBytes':Number(_0x4982f9['todayBytes'])||0x0,'monthBytes':Number(_0x4982f9[_0x3bb233(0x1c6)])||0x0,'todayRx':Number(_0x4982f9['todayRx'])||0x0,'todayTx':Number(_0x4982f9['todayTx'])||0x0,'monthRx':Number(_0x4982f9['monthRx'])||0x0,'monthTx':Number(_0x4982f9['monthTx'])||0x0};const _0x378b88=trafficMbToBytes(_0x4982f9['day_rx_traffic']),_0x2fffeb=trafficMbToBytes(_0x4982f9['day_tx_traffic']),_0x3cd0d2=trafficMbToBytes(_0x4982f9['month_rx_traffic']),_0x295239=trafficMbToBytes(_0x4982f9['month_tx_traffic']);return{'todayBytes':_0x378b88+_0x2fffeb,'monthBytes':_0x3cd0d2+_0x295239,'todayRx':_0x378b88,'todayTx':_0x2fffeb,'monthRx':_0x3cd0d2,'monthTx':_0x295239};}function trafficRxRatio(_0x3be95e,_0x26f0f8){const _0x8bd23b=_0x147697,_0x5a020e=Number(_0x3be95e||0x0)+Number(_0x26f0f8||0x0);if(!isFinite(_0x5a020e)||_0x5a020e<=0x0)return 0.5;return Math['min'](0.94,Math[_0x8bd23b(0x1d9)](0.06,Number(_0x3be95e||0x0)/_0x5a020e));}function getOperatorName(_0x291413,_0x54f105){const _0x3e35f7=_0x147697;if(!_0x291413)return _0x54f105||'未知';const _0x4e2809=String(_0x291413)['toUpperCase']();if(_0x4e2809['includes']('CMCC')||_0x4e2809==='中国移动'||_0x4e2809['includes']('CHINA\x20MOBILE'))return'中国移动';if(_0x4e2809['includes']('CUCC')||_0x4e2809==='中国联通'||_0x4e2809['includes'](_0x3e35f7(0x1b6))||_0x4e2809['includes']('UNICOM'))return'中国联通';if(_0x4e2809[_0x3e35f7(0x1bf)]('CTCC')||_0x4e2809==='CT'||_0x4e2809==='中国电信'||_0x4e2809['includes']('CHINA\x20TELECOM')||_0x4e2809['includes']('TELECOM'))return'中国电信';if(_0x4e2809['includes']('CBN')||_0x4e2809==='中国广电'||_0x4e2809['includes']('CHINA\x20BROADCAST'))return _0x3e35f7(0x1db);return _0x291413;}function getSignalColor(_0xf11cf8,_0x46856d){let _0x161ca5=parseInt(_0xf11cf8);if(isNaN(_0x161ca5))_0x161ca5=-0x78;if(_0x161ca5>-0x59)return _0x46856d['ok'];if(_0x161ca5>-0x63)return _0x46856d['warn'];return _0x46856d['bad'];}function getSinrColor(_0x3a5d05,_0x4db32f){let _0xfb3662=parseFloat(_0x3a5d05);if(isNaN(_0xfb3662))_0xfb3662=0x0;if(_0xfb3662>0xf)return _0x4db32f['ok'];if(_0xfb3662>0x8)return _0x4db32f['warn'];return _0x4db32f['bad'];}function getAllBands(_0x3ea82f,_0x515035,_0x1c2421){const _0x3d2f08=[],_0x11589d=_0x1c2421?'N':'B',_0x2d76a7=getValidValue(_0x3ea82f?.['BAND']||_0x3ea82f?.['NR_BAND']||_0x3ea82f?.['LTE_BAND'],'');if(_0x2d76a7)_0x3d2f08['push'](_0x11589d+_0x2d76a7);for(const _0x114311 of _0x515035?.['sub_CA_info']||[]){const _0x47aea5=String(_0x114311?.['Band']||'');if(_0x47aea5&&_0x47aea5!=='-')_0x3d2f08['push'](_0x11589d+_0x47aea5);}if(_0x3d2f08['length']===0x0)_0x3d2f08['push'](_0x1c2421?'N78':'B3');return _0x3d2f08;}function getCaBadgeText(_0x416a20,_0x32848b,_0x5d0c38){const _0x1e32dd=_0x147697,_0x4ebba1=(_0x32848b?'5G\x20':'4G\x20')+_0x5d0c38;if(!_0x32848b)return _0x4ebba1;const _0x1855ac=0x1+(_0x416a20&&_0x416a20['sub_CA_info']||[])[_0x1e32dd(0x1b8)];if(_0x1855ac>=0x4)return'5GA+';if(_0x1855ac===0x3)return _0x1e32dd(0x1b7);if(_0x1855ac===0x2)return'5G+';return _0x4ebba1;}function getCarrierCountText(_0x40840e){const _0x267438=_0x147697,_0xb1e67b=(_0x40840e&&_0x40840e['sub_CA_info']||[])[_0x267438(0x1b8)];if(_0xb1e67b===0x0)return'单载波';if(_0xb1e67b===0x1)return'双载波';if(_0xb1e67b===0x2)return _0x267438(0x1b3);return'四载波';}function getNetworkModeText(_0x47c69a,_0x3ad9e0,_0x5b85ea){const _0xf66de2=String(_0x5b85ea||'')['toUpperCase']();if(!_0x3ad9e0){if(!_0xf66de2||_0xf66de2==='4G'||_0xf66de2==='LTE')return'4G\x20LTE';return'4G\x20'+_0xf66de2;}const _0x3ed7a1=0x1+(_0x47c69a&&_0x47c69a['sub_CA_info']||[])['length'];if(_0x3ed7a1>=0x4)return'5GA+';if(_0x3ed7a1===0x3)return'5GA';if(_0x3ed7a1===0x2)return'5G+';return _0xf66de2?'5G\x20'+_0xf66de2:'5G\x20SA';}function rsrpToPercent(_0x288bee){let _0x230c6e=parseInt(_0x288bee);if(isNaN(_0x230c6e))_0x230c6e=-0x78;const _0xc07a9=Math['min'](-0x46,Math['max'](-0x78,_0x230c6e)),_0x1bc6e2=(_0xc07a9+0x78)/0x32;return Math['min'](0x64,Math['max'](0xa,0xa+_0x1bc6e2*0x5a));}function sinrToPercent(_0xe56c6d){let _0x44dc38=parseFloat(_0xe56c6d);if(isNaN(_0x44dc38))_0x44dc38=0x0;return Math['min'](0x64,Math['max'](0x0,_0x44dc38/0x19*0x64));}function resolveDeviceName(_0x4acd96,_0x4cb69b){const _0x2a1348=_0x4acd96&&_0x4acd96['Name']!=null?String(_0x4acd96['Name'])['trim']():'';if(!_0x2a1348)return _0x4cb69b;if(_0x2a1348==='--'||_0x2a1348==='undefined'||_0x2a1348==='null'||_0x2a1348==='0')return _0x4cb69b;return _0x2a1348;}function rsrpToBars(_0x17069f){const _0xc86121=parseInt(_0x17069f);if(isNaN(_0xc86121))return 0x0;if(_0xc86121>=-0x55)return 0x4;if(_0xc86121>=-0x5f)return 0x3;if(_0xc86121>=-0x69)return 0x2;if(_0xc86121>=-0x73)return 0x1;return 0x1;}function countOnlineDevices(_0x1bce75){const _0x552deb=_0x147697;if(!_0x1bce75)return 0x0;if(typeof _0x1bce75['onlineDevices']==='number')return _0x1bce75['onlineDevices'];const _0x4384cf=_0x1bce75['MainBaseInfo'];if(!Array['isArray'](_0x4384cf))return 0x0;return _0x4384cf[_0x552deb(0x1c9)](_0xa7f420=>_0xa7f420&&String(_0xa7f420['NetStatus'])==='1')['length'];}function urlDecode(_0x3dc18c){const _0xa73130=[];for(let _0x286c77=0x0;_0x286c77<_0x3dc18c['length'];_0x286c77+=0x2)_0xa73130['push'](parseInt(_0x3dc18c['substr'](_0x286c77,0x2),0x10));let _0x1b9cad='';for(let _0x17fb95=0x0;_0x17fb95<_0xa73130['length'];){const _0xc870d8=_0xa73130[_0x17fb95];if(_0xc870d8<0x80)_0x1b9cad+=String['fromCharCode'](_0xc870d8),_0x17fb95++;else{if(_0xc870d8>>0x5===0x6)_0x1b9cad+=String['fromCharCode']((_0xc870d8&0x1f)<<0x6|_0xa73130[_0x17fb95+0x1]&0x3f),_0x17fb95+=0x2;else _0xc870d8>>0x4===0xe?(_0x1b9cad+=String['fromCharCode']((_0xc870d8&0xf)<<0xc|(_0xa73130[_0x17fb95+0x1]&0x3f)<<0x6|_0xa73130[_0x17fb95+0x2]&0x3f),_0x17fb95+=0x3):(_0x1b9cad+=String['fromCharCode']((_0xc870d8&0x7)<<0x12|(_0xa73130[_0x17fb95+0x1]&0x3f)<<0xc|(_0xa73130[_0x17fb95+0x2]&0x3f)<<0x6|_0xa73130[_0x17fb95+0x3]),_0x17fb95+=0x4);}}return _0x1b9cad;}const REMOTE_URL=urlDecode('68747470733a2f2f686f6d652e6d69666f6e2e636f6d2f4e6574776f726b506c6174666f726d2f726573742f6465766963652f696e766f6b6553657276696365'),NET_ERROR_CODE=-0x1,AUTH_ERROR_CODES=[-0x3e8,0x2711,0x2712],DEVICE_ERROR_CODES=[0x4e27,0x4e2c],FAULT_TEXT={'network':'！检查网络','device':'！设备离线','auth':_0x147697(0x1c1)},FAULT_HINT={'network':'网络不可用\x0a请检查手机网络','device':_0x147697(0x1b2),'auth':'登录失效\x0a请打开看板重新登录'};function getOperatorId(){return Date['now']()['toString']();}function generateUUID(){const _0x10cda4=_0x147697,_0x3eb09c=_0x10cda4(0x1ac);let _0x1c906c='';for(let _0x458bc4=0x0;_0x458bc4<0x20;_0x458bc4++)_0x1c906c+=_0x3eb09c[Math[_0x10cda4(0x1ad)](Math['random']()*0x10)];return _0x1c906c;}function generateSequenceId(_0x43dff1){return _0x43dff1+'_'+Date['now']()['toString'](0x24);}function classifyFault(_0x4dce25){const _0xc23aba=_0x147697;if(!_0x4dce25||_0x4dce25['length']===0x0)return null;if(_0x4dce25['some'](_0x172190=>AUTH_ERROR_CODES[_0xc23aba(0x1cd)](_0x172190)>=0x0))return _0xc23aba(0x1d6);if(_0x4dce25['some'](_0x366033=>DEVICE_ERROR_CODES['indexOf'](_0x366033)>=0x0))return'device';return'network';}function _0x1687(_0x7e1398,_0x2be129){const _0x4bda79=_0x4bda();return _0x1687=function(_0x168793,_0xd7c510){_0x168793=_0x168793-0x1ab;let _0xae1614=_0x4bda79[_0x168793];if(_0x1687['zpThfp']===undefined){var _0x2d824f=function(_0x4d2294){const _0x4fe74f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x249012='',_0x33b8dd='';for(let _0xd69774=0x0,_0x4d6174,_0x3f6aa9,_0xd64f81=0x0;_0x3f6aa9=_0x4d2294['charAt'](_0xd64f81++);~_0x3f6aa9&&(_0x4d6174=_0xd69774%0x4?_0x4d6174*0x40+_0x3f6aa9:_0x3f6aa9,_0xd69774++%0x4)?_0x249012+=String['fromCharCode'](0xff&_0x4d6174>>(-0x2*_0xd69774&0x6)):0x0){_0x3f6aa9=_0x4fe74f['indexOf'](_0x3f6aa9);}for(let _0xa7cc19=0x0,_0x485269=_0x249012['length'];_0xa7cc19<_0x485269;_0xa7cc19++){_0x33b8dd+='%'+('00'+_0x249012['charCodeAt'](_0xa7cc19)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x33b8dd);};_0x1687['hFgnxG']=_0x2d824f,_0x7e1398=arguments,_0x1687['zpThfp']=!![];}const _0x4a714f=_0x4bda79[0x0],_0x2c629e=_0x168793+_0x4a714f,_0x3704e6=_0x7e1398[_0x2c629e];return!_0x3704e6?(_0xae1614=_0x1687['hFgnxG'](_0xae1614),_0x7e1398[_0x2c629e]=_0xae1614):_0xae1614=_0x3704e6,_0xae1614;},_0x1687(_0x7e1398,_0x2be129);}function readResult(_0x3f39d6,_0x525ec4){const _0x3c6901=_0x147697;if(!_0x3f39d6||_0x3f39d6['status']!=='fulfilled'||!_0x3f39d6['value'])return _0x525ec4['push'](NET_ERROR_CODE),null;const _0x3ef526=_0x3f39d6['value'];if(_0x3ef526[_0x3c6901(0x1bb)]===0x0)return _0x3ef526;return _0x525ec4['push'](typeof _0x3ef526['resultCode']==='number'?_0x3ef526['resultCode']:NET_ERROR_CODE),null;}async function performCpeRequest(_0x5c5e60,_0x23a0da,_0x8a90e6,_0x23e2d9,_0x23ca88){const _0x41f306=_0x147697;if(!_0x8a90e6)return null;const _0x41d725={'CmdType':_0x5c5e60,..._0x23a0da};if(!_0x41d725[_0x41f306(0x1b5)])_0x41d725['SequenceId']=generateSequenceId(_0x5c5e60);const _0x422bc9={'appVersion':urlDecode('322e322e3531'),'mac':_0x23e2d9,'timeout':0x3,'token':_0x8a90e6,'appType':urlDecode(_0x41f306(0x1d1)),'reqParam':JSON[_0x41f306(0x1dd)]({'ID':generateUUID(),'Version':'1','Plugin_Name':urlDecode('506c7567696e5f4944'),'RPCMethod':urlDecode('506f7374'),'Parameter':JSON['stringify'](_0x41d725)}),'operatorId':getOperatorId()},_0x19a7f0=new AbortController(),_0x4cfebd=setTimeout(()=>{try{_0x19a7f0['abort']();}catch(_0x1bf170){}},_0x23ca88);try{const _0x5a3d44=await fetch(REMOTE_URL,{'method':'POST','headers':{'Content-Type':'application/json','token':_0x8a90e6},'body':JSON['stringify'](_0x422bc9),'signal':_0x19a7f0['signal']}),_0x2e19e3=await _0x5a3d44[_0x41f306(0x1d7)]();if(_0x2e19e3&&_0x2e19e3[_0x41f306(0x1da)]){const _0x3bdb3b=JSON['parse'](_0x2e19e3['rspParam']);if(_0x3bdb3b['Result']===0x0&&_0x3bdb3b['return_Parameter']){const _0x5a138d=String(_0x3bdb3b['return_Parameter'])['replace'](/\\\//g,'/')['replace'](/\\n/g,'')[_0x41f306(0x1d2)](/\\/g,'')['trim'](),_0x5a8d3d=JSON['parse'](decodeBase64Utf8(_0x5a138d));return{..._0x5a8d3d,'resultCode':0x0};}}return _0x2e19e3||{'resultCode':NET_ERROR_CODE};}catch(_0x10a79c){return{'resultCode':NET_ERROR_CODE,'resultDesc':_0x41f306(0x1ba)};}finally{clearTimeout(_0x4cfebd);}}function decodeBase64Utf8(_0x15272b){const _0x597882=_0x147697,_0x53b581=atob(_0x15272b);try{const _0x815a63=new Uint8Array(_0x53b581['length']);for(let _0x1bf96b=0x0;_0x1bf96b<_0x53b581[_0x597882(0x1b8)];_0x1bf96b++)_0x815a63[_0x1bf96b]=_0x53b581['charCodeAt'](_0x1bf96b);return new TextDecoder('utf-8')['decode'](_0x815a63);}catch(_0x47505d){return _0x53b581;}}async function fetchCpeApi(_0x486c30,_0x15b099,_0x1f412a,_0x744f11={},_0x35aa5a=0xbb8){const _0x4d87b2=_0x147697;if(!_0x15b099)return{'resultCode':AUTH_ERROR_CODES[0x0],'resultDesc':_0x4d87b2(0x1c3)};return await performCpeRequest(_0x486c30,_0x744f11,_0x15b099,_0x1f412a,_0x35aa5a);}function isEmpty(_0x49c82d){const _0x7b4278=_0x147697;return!_0x49c82d||typeof _0x49c82d==='object'&&Object[_0x7b4278(0x1d3)](_0x49c82d)['length']===0x0;}async function fetchAll(_0x2f0aad){const _0x4f7dbb=_0x147697,_0x13ae9c=_0x2f0aad['token'],_0x30a042=_0x2f0aad['mac'],_0x3a7ddb=0xbb8,_0x14c9bf=await Promise['allSettled']([fetchCpeApi('GET_RF_SIGNAL_INFO',_0x13ae9c,_0x30a042,{},0x9c4),fetchCpeApi('GET_CARRIER_AGGREGATION_INFO',_0x13ae9c,_0x30a042,{},0x9c4),fetchCpeApi(_0x4f7dbb(0x1b9),_0x13ae9c,_0x30a042,{},0x9c4),fetchCpeApi('GET_SIM_INFO',_0x13ae9c,_0x30a042,{},0x9c4),fetchCpeApi('GET_CELLULAR_TRAFFIC_INFO',_0x13ae9c,_0x30a042,{},0xbb8)]),_0x10937c=[];let _0x3f1813=readResult(_0x14c9bf[0x0],_0x10937c),_0xa0ea61=readResult(_0x14c9bf[0x1],_0x10937c),_0x3f0687=readResult(_0x14c9bf[0x2],_0x10937c),_0x510cb9=readResult(_0x14c9bf[0x3],_0x10937c);const _0x255f99=readResult(_0x14c9bf[0x4],_0x10937c);if(_0x3f0687)_0x3f0687=_0x3f0687[_0x4f7dbb(0x1bc)]||_0x3f0687[_0x4f7dbb(0x1ae)]||_0x3f0687;const _0x3ca655=[_0x3f1813,_0xa0ea61,_0x3f0687,_0x510cb9,_0x255f99][_0x4f7dbb(0x1c9)](_0x306397=>!isEmpty(_0x306397))['length'],_0x434483=_0x3ca655===0x0?classifyFault(_0x10937c):null;return console[_0x4f7dbb(0x1b1)]('📡\x20取数完成\x20|\x20成功='+_0x3ca655+'/5\x20|\x20fault='+(_0x434483||'-')+'\x20|\x20失败码=['+_0x10937c['join'](',')+']'),{'rf':_0x3f1813,'ca':_0xa0ea61,'topo':_0x3f0687,'sim':_0x510cb9,'traffic':_0x255f99,'failCodes':_0x10937c,'fault':_0x434483,'successCount':_0x3ca655};}function saveCache(_0x4353c7){const _0x4b7b46=_0x147697;try{const _0x5ba14a=parseTrafficData(_0x4353c7['traffic']),_0x15ceb4={'rf':{'WorkMode':_0x4353c7['rf']?.['WorkMode'],'SSB_RSRP':_0x4353c7['rf']?.['SSB_RSRP'],'RSRP':_0x4353c7['rf']?.['RSRP'],'SSB_SINR':_0x4353c7['rf']?.['SSB_SINR'],'SINR':_0x4353c7['rf']?.['SINR'],'SSB_RSRQ':_0x4353c7['rf']?.['SSB_RSRQ'],'RSRQ':_0x4353c7['rf']?.['RSRQ'],'SSB_RSSI':_0x4353c7['rf']?.[_0x4b7b46(0x1c4)],'RSSI':_0x4353c7['rf']?.['RSSI'],'BAND':_0x4353c7['rf']?.[_0x4b7b46(0x1cc)],'NR_BAND':_0x4353c7['rf']?.[_0x4b7b46(0x1c7)],'LTE_BAND':_0x4353c7['rf']?.['LTE_BAND'],'PCI':_0x4353c7['rf']?.['PCI'],'SPN':_0x4353c7['rf']?.['SPN']},'ca':{'main_CA_info':_0x4353c7['ca']?.['main_CA_info']||{},'sub_CA_info':_0x4353c7['ca']?.['sub_CA_info']||[]},'topo':{'NetStatus':_0x4353c7['topo']?.[_0x4b7b46(0x1be)],'UpTime':_0x4353c7['topo']?.[_0x4b7b46(0x1d5)],'Name':_0x4353c7['topo']?.['Name'],'onlineDevices':countOnlineDevices(_0x4353c7['topo'])},'sim':{'Operator':_0x4353c7['sim']?.['Operator'],'SPN':_0x4353c7['sim']?.['SPN']},'traffic':{'todayBytes':_0x5ba14a['todayBytes'],'monthBytes':_0x5ba14a['monthBytes'],'todayRx':_0x5ba14a['todayRx'],'todayTx':_0x5ba14a['todayTx'],'monthRx':_0x5ba14a['monthRx'],'monthTx':_0x5ba14a['monthTx']},'ts':Date['now']()};Keychain['set'](KEY_CACHE,JSON['stringify'](_0x15ceb4));}catch(_0x321da1){console['log']('⚠️\x20写缓存失败\x20|\x20'+_0x321da1);}}function loadCache(){try{const _0x56570c=Keychain['get'](KEY_CACHE);if(!_0x56570c)return null;const _0xe8340e=JSON['parse'](_0x56570c);if(!_0xe8340e||typeof _0xe8340e!=='object')return null;return _0xe8340e;}catch(_0x2a8431){return null;}}
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
