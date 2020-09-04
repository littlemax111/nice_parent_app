<template>
  <div class="wrap">
    <van-icon name="cross" color="#9BA1B0" class="close_icon" size="21" @click="backFn" />
    <div class="content">
      <h3 class="title">验证码登录</h3>
      <p class="sub_title">若该手机号未注册，我们将为您自动注册</p>
      <div class="input_wrap">
        <div class="input_item">
          <input type="number" placeholder="请输入手机号码" v-model="phone"/>
        </div>
        <div class="input_item">
          <input type="password" placeholder="请输入验证码" v-model="code" class="yan_input" />
          <span>获取验证码</span>
        </div>
        <button 
          class="submit_btn"
          :class="{'disable-btn':!submitAllow,'orange-btn':submitAllow}" 
          :disabled="!submitAllow"
          @click.stop="handleSubmit('/homePage/index')">
          登录
        </button>
      </div>
      <div class="forget_wrap">
        <i @click='goRoute("/login")'>密码登录</i>
      </div>
    </div>
    <div class="agree_wrap">
      <p class="agree">
        登录代表您已阅读并同意
        <span>用户协议、隐私协议</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Icon } from "vant";

export default {
  data() {
    return {
      phone:'',
      code:'',
    };
  },
  watch: {},
  created() {},
  mounted() {},
  computed:{
    submitAllow(){
      if(this.phone && this.code ){
        return true
      }
      return false
    }
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    backFn() {
      this.$router.go(-1); //返回上一层
    },
    handleSubmit(name){
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  height: 100vh;
  .close_icon {
    padding-top: 14px;
    padding-left: 24px;
  }
  .content {
    padding: 0 30px;
  }
  .title {
    height: 38px;
    font-size: 27px;
    line-height: 38px;
    color: #232b36;
    margin-top: 20px;
    font-weight: 600;
  }
  .sub_title {
    font-size: 14px;
    color: #626b80;
    margin-top: 3px;
  }
  .input_wrap {
    margin-top: 50px;
  }
  .input_item {
    width: 317px;
    height: 49px;
    background: #f7f7f7;
    border-radius: 23px;
    color: #bebec0;
    padding-left: 20px;
    font-size: 16px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      margin: 0;
      padding: 0;
      color: #323233;
      line-height: inherit;
      text-align: left;
      background-color: transparent;
      border: 0;
      resize: none;
    }
    span {
      color: #e94831;
    }
    .yan_input {
      width: 60%;
    }
  }
  .disable-btn{
    background: rgba(233, 72, 49, 0.2);
  }
  .orange-btn{
    background: rgb(233, 72, 49,);
  }
  .submit_btn {
    color: #ffffff;
    text-align: center;
    width: 317px;
    height: 49px;
    border-radius: 23px;
    font-size: 16px;
    margin-bottom: 20px;
    border:none;
    display: block;
  }
    .forget_wrap {
    display: flex;
    justify-content: space-between;
    color: #626b80;
    font-size: 14px;
    i {
      font-style: normal;
    }
  }
  .agree_wrap {
    text-align: center;
    font-size: 12px;
    position: absolute;
    bottom: 21px;
    color: #a2a7b5;
    display: flex;
    justify-content: center;
    width: 100%;
    span {
      color: #333;
    }
  }
}
</style>
