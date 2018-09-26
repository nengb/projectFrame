

<template>
  <div class="page">
    <div class="page-content text-center" v-bind:style="loginBodyObj">
      <div class="share">
          <div class="headimg" >
                <img :src="headImg.src"  alt="">
                <div class="downSrc">下载地址：<a href="http://aiqu.dx1ydb.com/download">http://aiqu.dx1ydb.com/download</a> </div>
          </div>
          <div class="user" >
              <div class="diao">
                <div class="gang"></div>
                <div class="yuan"></div>
                </div>
                
              <div class="shadow"></div>
              <div class="shadow-body">
                  <div class="user-headimg">
                      <div class='user-crown'><img :src="user.crownImgSrc" alt=""></div>
                      <div class='user-head'><img :src="pageData.user.headimg" alt=""></div>
                  </div>
                  <div class="user-info">
                      <div class="user-ch">称号：{{pageData.user.crownName}}</div>
                      <div class="user-name">昵称：{{pageData.user.name}}</div>
                  </div>
              </div>
          </div>
          <div class="good " >
            <div class="good-big">
                <div class="diao diaoTop">
                  <div class="gang"></div>
                  <div class="yuan"></div>
                </div>
                <div class="diao diaoBottom">
                  <div class="gang"></div>
                  <div class="yuan"></div>
                </div>
              <div class="shadow"></div>
                <div class="shadow-body">
                    <img :src="pageData.goodImgArr[0].goodImg" alt="">
                </div>
            </div>
            <div v-if="pageData.goodImgArr.length == 2" class="good-small">
                   <div class="diao diaoTop">
                  <div class="gang"></div>
                  <div class="yuan"></div>
                </div>
                <div class="diao diaoBottom">
                  <div class="gang"></div>
                  <div class="yuan"></div>
                </div>
              <div class="shadow"></div>
                <div class="shadow-body">
                    <img :src="pageData.goodImgArr[1].goodImg" alt="">
                </div>
            </div>
            

          </div>
           <div class="zhanji" >
              <div class="shadow"></div>
              <div class="shadow-body">
                <div class="title"></div>
                <div class="getTimes">
                    <div class="top">今日抓取次数</div>
                    <div class="bottom">{{pageData.todayData.allCount}}次</div>
                </div>
                <div class="getTimes">
                    <div class="top">今日抓中次数</div>
                    <div class="bottom">{{pageData.todayData.sucCount}}次</div>
                </div>
              </div>
             
          </div>
           <!-- <div class="zhanji userGood" >
              <div class="diao diaoTop">
                  <div class="gang"></div>
                  <div class="yuan"></div>
                </div>
              <div class="shadow"></div>
              <div class="shadow-body">
                <div class="title"></div>
               
              </div>
              
          </div> -->
      </div>
    </div>
  </div>
</template>


<script>
  
    let { ip, httpAddress, socketAddress, imgAddress, getHrefNew, getQueryString } = $serverConfig;

  export default {
    data () {
      return {
        loginBodyObj:{
          height: '100%',
          position: 'relative',
          backgroundColor:`#5ca1fc`,
          backgroundPosition:'center',        
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain'
        },
        headImg:{
          src:require('../../static/image/share/head.png'),
          style:{
            width:'100%'
          },
    
        },
        user:{
          headImgSrc:'',
        },

        pageData:{
          user: {
            name: "robot",
            headimg: "",
            crownName: "不屈猎手"
          },
          goodImgArr: [
            {
              goodImg: "",
              goodName: "",
              goodType: 1
            },
          ],
          todayData: {
            allCount: 0,
            sucCount: 0
          }
        },
        userGoodData:{
          
        },

       
      }
    },
    async created(){

      let mac_addr = getQueryString("mac_addr");
      let time = getQueryString("time");
      let userid = getQueryString("userid");
      let getPageData = await $getData({url:`${httpAddress}/getUserSuccess?userid=${userid}&mac_addr=${mac_addr}&time=${time}`})

      if( getPageData && getPageData.errcode==0 ){
        // let goodImgArr = this.getPageData.goodImgArr;
        getPageData.data.goodImgArr.sort((a,b)=>{return a.goodType<b.goodType})
        console.log(getPageData.data.goodImgArr)
        this.pageData = getPageData.data;
        let crownNum = getPageData.data.user.crownNum;
        this.user.crownImgSrc = require(`../../static/image/share/crown${crownNum}.png`)
        //获取玩家最近抓中的娃娃记录
        // let getUserGood = await $getData({url:`${httpAddress}/get_other_play_records?account=keys&userid=${userid}&page=1`})
        // if( getUserGood && getUserGood.errcode==0 ){

        // }
      }
    },

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
  .page{
    // background: url(`${require('../../static/image/share/head.jpg')}`)
    // background:#5ba0fd;
    background:url('../../static/image/share/bg1.png') repeat-x;

  }
  .share{
    width:100%;
    background:url('../../static/image/share/bg.png') repeat-x;
    background-size:contain;
     
  }
  .headimg{
    width:100%;
    position: relative;
    z-index: 30;

  }
  .downSrc{
    width: 277px;
    height: 38px;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 38px;
    background-color: #5d9ffd;
    color: white;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    bottom: 27px;
    left:50%;
    margin-left:-138.5px; 
    border-radius: 7px;
    box-shadow:7.5px 4px #2361b8
  }
  .downSrc a{
    color: white;
  }

  .user{
    z-index: 11;
  
    margin:50px 20px 0;
    height:174px;
    position: relative;

  }
  .user-headimg{
    // background: url('../../static/image/share/userhead.png');
    width:100px;
    // height:100px;
    background-size: contain;
    margin:16px 20px 0 10px;
    position: relative;
  }
 
  .user-crown{

  }
  .user-head{
    border-radius: 50%;
    overflow: hidden;
    width: 78px;
    height: 78px;
    left:50%;
    margin-left: -39px;
    margin-top: -18px;
    position: absolute;
    background: url('../../static/image/share/userHeadBg.png') center no-repeat;
    background-size:cover;
    padding:3px;
  }
  .user-head img{
    border-radius: 50%;
    display: block;
  }
  .user-info{
    // margin
    padding: 28px 0;
    color: #1d5eb2;
    font-weight: bold;
    font-size: 22px;
    line-height: 40px;
    text-align: left;
  }
  .user-cn{
    
  }
  .user-name{
    
  }
 
  .shadow{
    background-color: #346ac4;
    transform: translate(0px, 2px) rotate(-4deg);
 
    position:absolute;

    width: 100%+2px;
    height: 100%;
    margin-left:-2px;
    margin-top:2px;
    border-radius: 25px;
  }
  .shadow-body{
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 25px;
    border:5px solid #509afb;
    display: flex;
    z-index: 1;
  }
  .diao{
    top: -95px;
    left: 50%;
    // margin-left: -6px;
    transform: translate(-6px,0);
    position: absolute;
    width:12px;
    height:100px;
    z-index: 2;
    margin: 0 auto;

  }
  .diaoBottom{
    bottom: -45px;
    top:auto;
    z-index: 1;

  }
  .diaoBottom .gang{
  }
  .diao .gang{
    height:100%;
    width:4px;
    margin: 0 auto;
    background-color: #1e5eb6;
  }
  .diao .yuan{
    position: absolute;
    // bottom:0;
    // left: 0;
    width:12px;
    height:12px;
    border-radius: 50%;
    background-color: #1e5eb6;
  }
  .good{
    margin: 30px 0 ;
    position: relative;
    display: flex;
    justify-content:center;
    z-index: 6
  }
  .good-big {
      width: 172px;
      height:166px;
      position: relative;
  }
  .good-small{
    width: 115px;
      height:100px;
      position: relative;
      margin:66px 0 0 20px;;
  }
  .zhanji{
    margin: 0 15px 30px;
    position: relative;
     color: #1d5eb2;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;
    z-index: 5;

  }
  .zhanji .title{
    background: url('../../static/image/share/zhanji.png') center no-repeat;
    width:192px;
    height:39px;
    background-size: contain;
    margin: 28px auto 0;

  }
  .zhanji .shadow-body {
    display: flex;
    flex-direction:column;
    padding:0 0 10px;
  }
  .getTimes{
    border:2px dashed  #59abfd;
    border-radius: 10px;
    margin:12px 32px ;
    padding:5px 0 ;
  }
  .userGood{
    z-index: 4;
  }
</style>


