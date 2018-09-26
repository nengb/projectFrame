
// var ip = '192.168.0.112' ;
// let ip = '118.31.164.217' ;  //爱趣抓娃娃
// var ip = '47.97.32.55' ;	 //测试服务器
// // var ip = '47.97.32.228' ; //飞爪不可
// // var ip = '47.96.42.99' ;	//哎呀抓娃娃
// // var ip = '47.96.42.31' ;	//容易抓娃娃
// // var ip = '192.168.1.3' ;	//测试

// window.httpAddress=`http://${ip}:9001`
// //socket
// window.socketAddress = `${ip}:10000`
// window.imgAddress = `http://${ip}/web_h5/dist/img_aiqu_pink`

// console.log("window.httpAddress")
// console.log(window.httpAddress)
import Vue from 'vue'
import Vonic from 'vonic'
import 'lib-flexible/flexible.js'

/* 全局自定义组件 */
//网络模块
import './services/net'
//微信网页授权
import './services/wechatAut'
import './services/serverConfig'
/* 页面组件 */
// app首页
import Index from './components/Index.vue'
// // 登录页
// import Login from './components/Login.vue'
// 分享页
import Share from './components/Share.vue'
import Anniversary from './components/Anniversary.vue'

const routes = [
  // { path: '/', component: Index },
  // { path: '/login', component: Login },
  { path: '/share', component: Share },
  { path: '/anniversary', component: Anniversary },
]


// const routes = { 
//   path: '/', 
//   component: Index,
//   children: [
//     { path: '/', component: Index },
//     { path: '/login', component: Login },
//   ]
// }


Vue.use(Vonic.app, {
  routes: routes,
})

// let user = JSON.parse(sessionStorage.getItem('user'));
// if(!user){
  // document.location.href="#/share"
// }


$router.beforeEach ((to, from, next) => {
    // console.log(`页面切换`)
    // let user = JSON.parse(sessionStorage.getItem('user'));
  
    // if (user && user.userid && !$socketNet.isPinging) {
    //   $socketNet.ip = $serverConfig.socketAddress;
    //     let onConnectOK = function(){
    //       console.log("onConnectOK");
    //       let sd = {
    //         // token:data.token,
    //         // roomid:data.roomid,
    //         // time:data.time,
    //         // sign:data.sign,
    //         userid:user.userid
    //       };
    //       console.log("连接服务器成功，正在登陆！！！");
    //       $socketNet.send("login",sd);
    //     };
    //     let onConnectFailed = function(){
    //       console.log("failed.");
    //       console.log("连接服务器失败！！！");
    //     };
    //     $socketNet.connect(onConnectOK,onConnectFailed);
    // } 
    next()
  }
)


