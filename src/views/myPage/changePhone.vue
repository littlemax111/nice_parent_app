<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="content">
      <h3 class="title">验证旧手机号</h3>
      <p class="sub_title">
        需要先对尾号
        <span class="color_red">9212</span>手机号进行身份验证
      </p>
      <p class="phone">187****9212</p>
      <div class="input_wrap">
        <div class="input_item">
          <input type="password" placeholder="请输入验证码" class="yan_input" />
          <span>获取验证码</span>
        </div>
        <div class="submit_btn">下一步</div>
      </div>
    </div>
    <p class="call_phone">
      验证手机号遇到问题？
      <span>拨打客服电话</span>
    </p>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "更换手机号",
    };
  },
  components: {
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  height: 100vh;
  .color_red {
    color: #e94831;
  }
  .content {
    padding: 0 30px;
  }
  .title {
    height: 38px;
    font-size: 27px;
    line-height: 38px;
    color: #232b36;
    margin-top: 37px;
    font-weight: 600;
  }
  .sub_title {
    font-size: 14px;
    color: #626b80;
    margin-top: 3px;
  }
  .input_wrap {
    margin-top: 20px;
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
  .submit_btn {
    background: rgba(233, 72, 49, 0.2);
    color: #ffffff;
    text-align: center;
    width: 317px;
    height: 49px;
    border-radius: 23px;
    padding-left: 20px;
    padding-top: 13px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .call_phone {
    font-size: 12px;
    color: #a2a7b5;
    line-height: 16px;
    text-align: center;
    position: absolute;
    bottom: 22px;
    left: 96px;
    span {
      color: #e94831;
    }
  }
  .sub_title {
    font-size: 14px;
    margin-top: 3px;
    color: #626b80;
    line-height: 20px;
  }
  .phone {
    margin-top: 20px;
    font-size: 20px;
    color: #232b36;
    line-height: 28px;
  }
}
</style>
