<template>
  <div class="wrap">
    <van-icon name="cross" color="#9BA1B0" class="close_icon" size="21" />
    <div class="content">
      <h3 class="title">密码登录</h3>
      <p class="sub_title">已注册用户可以使用密码登录</p>
      <div class="input_wrap">
        <div class="input_item">
          <input type="number" placeholder="请输入手机号码" />
        </div>
        <div class="input_item">
          <input type="password" placeholder="请输入登录密码" />
        </div>
        <div class="input_item submit_btn">登录</div>
      </div>
      <div class="forget_wrap">
        <i>忘记密码</i>
        <i>密码登录</i>
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
    return {};
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    changeBlur() {
      window.scroll(0, 0); //失焦后强制让页面归位
    },
    getYZM() {
      let date = new Date();
      this.YZM =
        window.LOCAL_CONFIG.API_HOME +
        "/api/GetValidImg.png?v=" +
        date.getTime();
    },
    getFullText() {
      if (this.username && this.password && this.valid_code) {
        this.fullLogin = 1;
      }
    },
    loginIn() {
      let that = this;
      let method = "post";
      let data = {
        username: this.username,
        password: this.password,
        valid_code: this.valid_code,
      };
      this.$services.login({ method, data }).success((res) => {
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.data));
          this.$router.replace(`index`);
        } else {
          that.getYZM();
          Dialog({ message: res.msg });
        }
      });
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
    margin-top: 27px;
    font-weight: 600;
  }
  .sub_title {
    font-size: 14px;
    color: #626b80;
    margin-top: 3px;
  }
  .input_wrap {
    margin-top: 27px;
  }
  .input_item {
    width: 317px;
    height: 49px;
    background: #f7f7f7;
    border-radius: 23px;
    color: #bebec0;
    padding-left: 20px;
    padding-top: 13px;
    font-size: 16px;
    margin-bottom: 20px;
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
  }
  .submit_btn {
    background: rgba(233, 72, 49, 0.2);
    color: #ffffff;
    text-align: center;
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
    width:100%;
    span {
      color: #333;
    }
  }
}
</style>
