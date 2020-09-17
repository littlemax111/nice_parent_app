<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="appointment-status">
      <img :src="image" alt />
      <h2>纳思书院</h2>
      <p>版本号 1.1.2</p>
    </div>
    <div class="course-message">
      <ul>
        <li>
          <span>检查新版本</span>
          <i class="enter_arrow"></i>
        </li>
        <li @click="$router.push(`/myPage/userAgreement`)">
          <span>用户协议</span>
          <i class="enter_arrow"></i>
        </li>
        <li @click="$router.push(`/myPage/privacyAgreement`)">
          <span>隐私协议</span>
          <i class="enter_arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "关于",
      image: require("../../assets/images/my/logo.svg"),
    };
  },
};
</script>
<style lang="scss" scoped>
.appointment-status {
  padding: 40px 0 35px;
  text-align: center;
  img {
    width: 62px;
    height: 65px;
  }
  h2 {
    height: 25px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    margin-bottom: 6px;
  }
  p {
    height: 15px;
    font-size: 12px;
    color: #999999;
  }
}
.course-message {
  padding-left: 19px;
  background: #ffffff;
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
      height: 57px;
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
</style>
