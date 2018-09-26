

<template>
  <div class="page">
    <div class="page-content text-center" v-bind:style="loginBodyObj">
      <!-- <div className="headBG" v-bind:style="headStyleObj"></div>
      <div className="bottomBG" v-bind:style="bottomStyleObj"></div> -->
      <div class="login">
        <md-button class="md-button button button-balanced button-block" v-bind:style="loginBtn" @click.native="youkeLogin()">游客登陆</md-button>
        <md-button class="md-button button button-balanced button-block" v-bind:style="loginBtn" @click.native="wechatLogin()">微信登陆</md-button>
      </div>

    </div>
  </div>
</template>


<script>
  
//  let user = JSON.parse(sessionStorage.getItem('user'));
//     if( user && user.account ){
//       let loginHttp=getData({url:`${httpAddress}/login?account=${user.account}`})
//       if( loginHttp && loginHttp.errcode==0 ){
//         // if(sessionStorage.rooms){
//         //   document.location.href=`#/playGame`
//         // }else{
//         //   document.location.href="#/"
//         // }
//       $router.push('/')
//         window.nameTit=loginHttp.data.account;
//         window.name=loginHttp.data.name;
//       }
//     }

    let { ip, httpAddress, socketAddress, imgAddress } = $serverConfig;

    // let brower = $isWeiXin()?0:1;
    // let code = sessionStorage.getItem('code');
    // let loginHttp;

    // if(!code){
    //   loginHttp = $getData({url:`${httpAddress}/login?account=guest_353849`})
    // }else{
    //     let wechat_auth = $getData({url:`${httpAddress}/wechat_auth?code=${code}&brower=${brower}`})
    //     if(wechat_auth){
    //       loginHttp = $getData({url:`${httpAddress}/login?account=${wechat_auth.account}`})
    //     }else{
    //       console.log(`获取玩家信息出错！`)
    //     }
    // }
    // console.log("loginHttp")
    // console.log(loginHttp)
    // if(loginHttp && loginHttp.constructor === Object){
    //   sessionStorage.setItem(`user`,JSON.stringify(loginHttp))
    // }


  export default {
    data () {
      return {
        loginBodyObj:{
          height: '100%',
          position: 'relative',
          backgroundImage:`url(${imgAddress}/loading.jpg)`,
          backgroundPosition:'center',        
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain'
        },
        loginBtn:{
          background:'#09bb07',
          width:'60%',
          left:'50%',
          marginLeft:'-30%',

        },
        headStyleObj:{
          backgroundImage:`url(${imgAddress}/login_top.png)`,
          backgroundRepeat:'repeat-x',
          height:'69px',
          position: 'absolute',
          top: '0px',
          width: '100%',
        },
        bottomStyleObj:{
          backgroundImage:`url(${imgAddress}/login_top.png)`,
          backgroundRepeat:'repeat-x',
          height:'69px',
          position: 'absolute',
          bottom: '0px',
          width: '100%',
          transform: 'rotate(180deg)'

        },
        
       
      }
    },
    async created(){
      let user = JSON.parse(sessionStorage.getItem('user'));
      if( user && user.account ){
        let loginHttp=await $getData({url:`${httpAddress}/login?account=${user.account}`})
        if( loginHttp && loginHttp.errcode==0 ){
          // if(sessionStorage.rooms){
          //   document.location.href=`#/playGame`
          // }else{
          //   document.location.href="#/"
          // }
          console.log(11)
          $router.push('/')
        }
      }
    },
    // beforeRouteEnter (to, from, next) {
    //   console.log(2)
    //   next()
    //   // getPost(to.params.id, (err, post) => {
    //   //   next(vm => vm.setData(err, post))
    //   // })
    // },
    
    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    // beforeRouteUpdate (to, from, next) {
    //   console.log(3)
    //   next()
    //   // this.post = null
    //   // getPost(to.params.id, (err, post) => {
    //   //   this.setData(err, post)
    //   //   next()
    //   // })
    // },
    methods:{
        youkeLogin(){
          
        },
        async wechatLogin(){
          let brower = $isWeiXin()?0:1;
          let code = sessionStorage.getItem('code');
          let loginHttp;

          if(!code){
            loginHttp =await  $getData({url:`${httpAddress}/login?account=guest_353849`})
          }else{
              let wechat_auth =await  $getData({url:`${httpAddress}/wechat_auth?code=${code}&brower=${brower}`})
              if(wechat_auth){
                loginHttp =await  $getData({url:`${httpAddress}/login?account=${wechat_auth.account}`})
              }else{
                console.log(`获取玩家信息出错！`)
              }
          }
          console.log("loginHttp")
          console.log(loginHttp)
          if(loginHttp && loginHttp.constructor === Object){
            sessionStorage.setItem(`user`,JSON.stringify(loginHttp.data))
            $router.push('/')
          }
        }
    }
  }
</script>


<style lang='less'>
  .login{
    display: flex;
    position: absolute;
    width: 100%;
    bottom:9rem;
    flex-direction:column;
    justify-content:center ;
    align-content:center;
     
  }
  
</style>


