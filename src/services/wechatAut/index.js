
function isWeiXin() {
    let ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
}
      
function getCodeParamUri({appid,redirect_uri,response_type,scope,state}){
  // return `appid=`+appid+`&redirect_uri=`+encodeURIComponent(redirect_uri)+`&response_type=`+response_type+`&scope=`+scope+`&state=`+state+`#wechat_redirect`;
  return `appid=${appid}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=${response_type}&scope=${scope}&state=${state}#wechat_redirect`

}


// if(!sessionStorage.code){
//   console.log(`缓存中没有code，跳转授权`)
//   if(isWeiXin()){
//     console.log(`微信浏览器`)
//     let getCodeParam = {
//       appid : 'wx5bbaf74896332a74',
//       redirect_uri : 'http://aiqu.dx1ydb.com/web_h5/c.html',
//       response_type : 'code',
//       scope : 'snsapi_userinfo',
//       state : 'STATE',
//     }
//     document.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?`+getCodeParamUri(getCodeParam);
//   }else{
//     console.log(`非微信浏览器`)
//     let getCodeParam = {
//       appid : 'wx2ce82cbbc1951ad5',
//       redirect_uri : 'http://aiqu.dx1ydb.com/web_h5/c.html',
//       response_type : 'code',
//       scope : 'snsapi_login',
//       state : 'STATE',
//     }
//     document.location.href=`https://open.weixin.qq.com/connect/qrconnect?`+getCodeParamUri(getCodeParam);
//   }
// }

window.$isWeiXin = isWeiXin
