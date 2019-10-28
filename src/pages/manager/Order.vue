<template>
  <div class="order">
    <div>
      <router-link to="/order_all">all</router-link>
      <van-tabs v-model="active" @change="tabChangeHandler">
        <van-tab name="/order_all" title="全部订单"></van-tab>
        <van-tab name="/order_dpd" title="待派单"></van-tab>
        <van-tab name="/order_djd" title="待接单"></van-tab>
        <van-tab name="/order_wfw" title="未服务"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  },
  methods:{
    tabChangeHandler(path){
      this.$router.push({path})
    }
  }
}
</script>