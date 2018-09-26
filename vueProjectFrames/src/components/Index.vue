<template>

  <div class="page ">
    <div class="page-content text-center page-body">
      <!-- <h2 class="padding" v-text="msg"></h2>

      <router-link class="button button-assertive" to="/login">
        <i class="ion-information-circled"></i> About
      </router-link> -->
  
    <div class="indexBanner">
      <slider :pages="banners" :sliderinit="sliderinit"></slider>
    </div>

   
    <tabs :tab-items="navList"  :on-tab-click="onTabClick"></tabs>
     

    </div>
  </div>
</template>

<script>
  import slider from 'vue-concise-slider'// 引入slider组件
  let { ip, httpAddress, socketAddress, imgAddress } = $serverConfig;
      

  export default {
    data () {
      return {
        banners: [],
        navList:[],
        initialHeight: 200,
        mac_list:[],
        navArr:[],
        pageNum:1,
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:3000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
        
      }
    },
    async created(){
      
      let user = JSON.parse(sessionStorage.getItem('user'));
      
      let get = await $getData({url:`${httpAddress}/index?account=${user.account}`})
      let rooms = await $getData({url:`${httpAddress}/get_mac_room?account=${user.account}`})
      if(get && get.errcode == 0){
        // this.banners = get.data.notice;
        this.navList = get.data.navArr;
        get.data.notice.forEach(banner => {
          this.banners.push({
            title:banner.title,
            style:{
              backgroundImage:`url(${banner.img_url})`,
              width:'100%',
              height:'100%',
              backgroundSize:'contain',
              backgroundPosition:'center',        
              backgroundRepeat:'no-repeat',
              
            }
          })
        });

      }
      if(rooms && rooms.errcode == 0){
          this.mac_list = rooms.data;
      }
      // console.log("get")
      // console.log(get)
      // console.log("get")
      // console.log(get)
      // console.log("rooms")
      // console.log(rooms)
      // console.log(rooms.data)

     

    },
    methods:{
      getUserInfo(){
        $router.push('/myInfo')
      },
    }, 
    components: {
        slider
    }
  }
</script>

<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }
  
  .page.has-navbar .page-content {
    padding-top: 100px;
  }
  .page-content{
    background-color: #fee3ea
  }

  .page-body{
    padding:0 10px;
    background-color: #fee3ea!important
    
  }
  img{
    width: 100%;
    height: 100%;
  }
  
</style>
<style lang="less" scoped>
  .indexBanner{
    margin-top:10px;
    height:122px;
  }
  .nav{
    display: flex;
  }

</style>


