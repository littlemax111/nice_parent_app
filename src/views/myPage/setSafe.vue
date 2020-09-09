<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div class="course-message">
      <ul>
        <li @click='goRoute("/myPage/changePhone")'>
          <span>更换手机号</span>
          <i class="enter_arrow"></i>
        </li>
        <li @click='goRoute("/myPage/editPwd")'>
          <span>设置密码</span>
          <i class="enter_arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "账号安全",
      routeName:'',
    };
  },
  components: {
    navBar,
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f6f6f6;
  height: 100vh;
  .course-message {
    margin-top: 9px;
    background: #fff;
    padding-left: 15px;
    .enter_arrow {
      width: 8px;
      height: 13px;
      display: inline-block;
      background: url("../../assets/images/my/more.svg");
      background-size: cover;
      position: absolute;
      right: 25px;
    }
    ul {
      li {
        width: 100%;
        height: 46px;
        border-bottom: 1px solid #e2e2e2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 20px;
        span:first-child {
          font-size: 16px;
          color: #333333;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
