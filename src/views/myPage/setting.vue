<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
      <ul class="setting_wrap">
        <li @click="goRoute('/myPage/safe')">
          <span>账号安全</span>
          <i class="icon_arrow"></i>
        </li>
        <li @click="goRoute('/myPage/address')">
          <span>地址管理</span>
          <i class="icon_arrow"></i>
        </li>
      </ul>
      <ul class="setting_wrap">
        <li>
          <span>接受推送通知</span>
          <van-switch v-model="checked" active-color="#E94831" />
        </li>
        <li>
          <span>清除缓存</span>
          <p>
            <span class="icon_word">6.7M</span>
            <i class="icon_arrow"></i>
          </p>
        </li>
        <li>
          <span>去评分</span>
          <i class="icon_arrow"></i>
        </li>
        <li @click="goRoute('/myPage/about')">
          <span>关于</span>
          <p>
            <span class="icon_word">当前版本 1.1.2</span>
            <i class="icon_arrow"></i>
          </p>
        </li>
      </ul>
      <p class='logout_btn' @click='goRoute("/login")'>退出当前账号</p>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      routeName:'/myPage/index',
      title: "设置",
      checked:false,
    };
  },
  components: {
    navBar,
  },
  methods:{
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  height: 100vh;
  .setting_wrap {
    margin-top: 12px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 15px;
    border-bottom: 1px solid #eeeeee;
    background: #fff;
    font-size: 16px;
    color: #232b36;
    height: 46px;
  }
  .icon_arrow {
    width: 8px;
    height: 13px;
    display: inline-block;
    background: url("../../assets/images/my/more.svg");
    background-size: cover;
  }
  .icon_word{
    color:#666666;
    padding-right: 6px;
  }
  .logout_btn{
    height:47px;
    line-height: 47px;
    text-align: center;
    color: #E94831;
    margin-top:12px;
    background: #fff;
    font-size: 16px;
  }
}
</style>
