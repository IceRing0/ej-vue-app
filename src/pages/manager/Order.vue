<template>
  <div class="order">
    <div class="top">
      <van-tabs v-model="active" @change="tabChangeHandler" class="tabs">
        <!-- <van-tab name="order_all" title="全部订单"></van-tab>
        <van-tab name="order_dpd" title="待派单"></van-tab>
        <van-tab name="order_djd" title="待接单"></van-tab>
        <van-tab name="order_wfw" title="未服务"></van-tab> -->
        <van-tab title="全部订单"></van-tab>
        <van-tab title="待派单"></van-tab>
        <van-tab title="待接单"></van-tab>
        <van-tab title="未服务"></van-tab>
      </van-tabs>
      <!-- <router-view></router-view> -->
    </div>
    <div class="container">
      <van-panel v-for="o in order" :key="o.id" :title="'订单号:'+o.id" :desc="'地址: '+o.address.province+' '+o.address.city+' '+o.address.address" :status="o.status">
      </van-panel>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      active:0,
      order:[]
    }
  },
  created(){
    this.findAllOrder();
  },
  computed:{
    ...mapState("order",["orders"])
  },
  methods:{
    ...mapActions("order",["findOrderByCustomerId"]),
    tabChangeHandler(index){
      // this.$router.push({path})
      if(index == 0){
        this.order = this.orders
      }else if(index == 1){
        this.order = this.orders.filter((order)=>{return order.status==="待派单"})
      }else if(index == 2){
        this.order = this.orders.filter(o=>o.status=="待接单")
      }else if(index == 3){
        this.order = this.orders.filter(o=>o.status=="未服务")
      }
    },
    findAllOrder(){
      let promise = this.findOrderByCustomerId();
      promise.then((response)=>{
        this.order = response.data
      })
    }
  }
}
</script>
<style>
.order{
  width: 100%;
  position: absolute;
}
.top{
  position: fixed;
  top: 200;
  right: 0;
  left:0;
  z-index: 2;
}
.container{
  margin-top: 50px;
  padding-bottom: 50px;
}
</style>