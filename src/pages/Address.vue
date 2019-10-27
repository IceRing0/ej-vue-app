<template>
    <div>
        <van-sticky>
        <van-nav-bar
            title="地址列表"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        </van-sticky>
        <van-tabbar v-model="active">
        <div class="confirm">
            <span>确认</span>
        </div>
      </van-tabbar>
    </div>
</template>
<script>
export default {
    methods:{
         onClickLeft(){
            this.$router.go(-1)
        },
    }
}
</script>
<style scoped>
    .confirm{
        background-color: red;
        width: 100%;
        position: relative;
    }
    .confirm span{
        color: white;
        position: absolute;
        left:45%;
        top: 25%;
        
    }
</style>