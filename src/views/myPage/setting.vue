<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div>
      <ul class="setting_wrap">
        <li>
          <span>账号安全</span>
          <i class="icon_arrow"></i>
        </li>
        <li>
          <span>地址管理</span>
          <i class="icon_arrow"></i>
        </li>
      </ul>
      <ul class="setting_wrap">
        <li>
          <span>接受推送通知</span>
          <i class="icon_arrow"></i>
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
        <li>
          <span>关于</span>
          <p>
            <span class="icon_word">当前版本 1.1.2</span>
            <i class="icon_arrow"></i>
          </p>
        </li>
      </ul>
      <p class='logout_btn'>退出当前账号</p>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "设置",
    };
  },
  components: {
    navBar,
  },
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
