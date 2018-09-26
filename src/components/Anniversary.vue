

<template>
  <div class="page">
    <div class="page-content text-center" >
      <div class="anninversary">
          <div class="headimg" >
                <img :src="headImg.src"  alt="">
          </div>
          <div class="title">
            爱趣抓娃娃运营一周年，一路跌跌撞撞走来，感谢各位新老玩家的信赖与支持。在10月份在举办周年庆活动。对于充值玩家特推出以下回馈活动。下面的数额是以玩家总充值计算，不能叠加领取，仅以最高数值的奖励为准。活动礼品领取<span>从10月8号</span>到<span>从10月31</span>止，以玩家告知微信客服领取时的充值额度为领取额度，获得相应礼品（所以如果你持续有充值，越晚领取越多礼品哦，但是一定要记得最晚领取时间不要超过2018年10月31号）。不通过微信客服领取，则默认不参与该活动。
          </div>
          <div class="content">
            <div class="activity"><span>50元</span>：库存娃娃一个，随机赠送。发送你的ID给微信客服，客服将在你下次发货时，一起发货，不可单独领取发货，不可兑换，赠送的娃娃随机，价值不超过8元。</div>
            <div class="activity"><span>100元</span>：十二生肖1个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>200元</span>：十二生肖2个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>300元</span>：十二生肖3个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>500元</span>：十二生肖4个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>1000元</span>：十二生肖5个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>2000元</span>：十二生肖8个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
            <div class="activity"><span>50元</span>：十二生肖10个，随机赠送。发送你的ID给微信客服，客服将把娃娃放入你的背包。赠送的十二生肖娃娃兑换价值将限制为1元。</div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
  
    let { ip, httpAddress, socketAddress, imgAddress, getHrefNew, getQueryString } = $serverConfig;

  export default {
    data () {
      return {
        headImg:{
          src:require('../../static/image/anniversary/head.jpg'),
          style:{
            width:'100%'
          },
    
        },
       
      }
    },
    async created(){

     
    },

    methods:{
      
    }
  }
</script>


<style lang='less'>
  .page{

  }
  .anninversary{
    background-color: #ff6f04;
    height: 100%;
  }
 
</style>


