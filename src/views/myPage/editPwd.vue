<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div class="content">
      <h3 class="title">修改密码</h3>
      <div class="input_wrap">
        <div class="input_item">
          <input
            type="password"
            placeholder="请输入原密码"
            v-model="oldPassword"
          />
        </div>
        <div class="input_item">
          <input
            type="password"
            placeholder="请输入新密码"
            v-model="newPassword"
          />
        </div>
        <div class="input_item">
          <input
            type="password"
            placeholder="请重复输入新密码"
            v-model="rePassword"
          />
        </div>
        <button
          class="input_item submit_btn"
          :class="{ 'disable-btn': !submitAllow, 'orange-btn': submitAllow }"
          :disabled="!submitAllow"
          @click.stop="handleSubmit('/myPage/setting')"
        >
          完成
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      routeName: "",
      title: "设置密码",
      oldPassword: "",
      newPassword: "",
      rePassword: "",
    };
  },
  components: {
    navBar,
  },
  computed: {
    submitAllow() {
      if (this.oldPassword && this.newPassword && this.rePassword) {
        return true;
      }
      return false;
    },
  },
  methods: {
    //路由跳转+表单提交
    submitFn(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    handleSubmit(name) {
      let method = "post";
      let token = localStorage.getItem('token')
      let data = {
        data: {
          mobile: this.oldPassword,
          passwd: this.newPassword,
          confirmpwd: this.rePassword,
        },
        token: token,
      };
      this.$services.resetPwd({ method, data }).success((res) => {
        if (res.code === 200) {
          let token = res.data.token;
          window.scroll(0, 0); //失焦后强制让页面归位
          this.$router.push(name);
        } else {
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
  .disable-btn {
    background: rgba(233, 72, 49, 0.2);
  }
  .orange-btn {
    background: rgb(233, 72, 49);
  }
  .submit_btn {
    border: none;
    color: #ffffff;
    text-align: center;
    padding: 0;
    display: block;
  }
}
</style>
