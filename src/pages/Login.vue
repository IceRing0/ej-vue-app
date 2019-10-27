<template>
  <div class="login">
    <div class="title">
      <h2>EJ家政服务平台</h2>
    </div>
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="user.username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="user.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="user.sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入验证码"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <br>
    <div class="footer">
      <van-row>
      <van-col span="17" class="regist">
        <van-button size="small" type="info">注册</van-button>
      </van-col>
      <van-col span="5">
        <van-button size="small" type="primary" @click="loginHandler">登录</van-button>
      </van-col>
    </van-row>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      user:{}
    }
  },
  methods: {
    loginHandler(){
      this.$router.push("/home");
    }
  }
}
</script>
<style scoped>
  .title {
    color:#1989fa;
    text-align: center;
    margin-top: 150px;
  }
  .container {
    margin: 0 30px;
  }
  .footer {
    margin: 0 30px;
  }
  .regist {
    text-align: right;
    margin-right: 20px;
  }
</style>