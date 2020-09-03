<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="content">
      <h3 class="title">绑定新手机号</h3>
      <p class="sub_title">
       需要您输入新手机号和验证码进行绑定
      </p>
      <div class="input_wrap">
        <div class="input_item">
          <input type="password" placeholder="请输入验证码" />
        </div>
        <div class="input_item">
          <input type="password" placeholder="请输入验证码" class="yan_input" />
          <span>获取验证码</span>
        </div>
        <div class="submit_btn">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "绑定新手机号",
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
}
</style>
