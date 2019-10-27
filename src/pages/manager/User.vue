<template>
  <div class="user">
    <div class="top-my">我的</div>
    <div class="top-img">
      <img src="../../assets/images/1.jpg" alt="">
      <span>张辉</span>
    </div>
   <div class="address" @click="addressHandler">
     <span>常用地址</span>
   </div>
   <div class="logout" @click="logoutHandler">
     <span>退出 </span>
   </div>
  </div>
</template>
<script>
export default {
  methods:{
    logoutHandler(){
      this.$router.push({name:"login"})
    },
    addressHandler(){
       this.$router.push({name:"address"})
    }

  }
}
</script>
<style scoped>
  .top-my{
    text-align: center;
    margin-top: 1em;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .top-img{
    margin-top: 40px;
  }
  .top-img img{
    margin: 0 0 20px 120px;
    
  }
  .top-img span{
    margin-left:-80px; 
  }
  .address{
    margin: 10px 0 20px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .address span{
    margin: 20px;

  }
  .logout{
    margin: 10px 0 20px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .logout span{
    margin: 20px;

  }
</style>