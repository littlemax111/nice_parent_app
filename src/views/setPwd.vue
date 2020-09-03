<template>
  <div class="wrap">
    <van-icon name="cross" color="#9BA1B0" class="close_icon" size="21" @click="backFn" />
    <div class="content">
      <h3 class="title">设置新密码</h3>
      <div class="input_wrap">
        <div class="input_item">
          <input type="number" placeholder="设置8位以上登录密码" />
        </div>
        <div class="submit_btn" @click='goRoute("/login")'>确定</div>
      </div>
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
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    backFn() {
      this.$router.go(-1); //返回上一层
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
