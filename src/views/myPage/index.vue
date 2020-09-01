<template>
  <div class="wrap">
    <div class="wrap_top">
      <p class="change_student">
        <i class="icon_change"></i>切换学员
      </p>
      <div class="person_wrap">
        <img src="../../assets/images/home/logo.png" alt />
        <div class="msg_wrap">
          <p class="name">
            {{msg.name}}
            <i class='grade'>{{msg.grade}}</i>
          </p>
          <p class="phone">{{msg.phone}}</p>
        </div>
        <i class="right_arrow"></i>
      </div>
    </div>
    <div class="tabbar_wrap">
      <van-tabbar v-model="active" active-color="#E94831" inactive-color="#A1A5BB">
        <van-tabbar-item icon="home-o" to="/homePage/index">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/coursePage/index">
          <span>选课</span>
          <template #icon="props">
            <img :src="props.active ? icon2.active : icon2.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o">
          <span>学习</span>
          <template #icon="props">
            <img :src="props.active ? icon3.active : icon3.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/myPage/index">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? icon4.active : icon4.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      msg:{
        name:'肖剑',
        grade:'初二',
        phone:'15967119576'
      },
      active: 3,
      icon: {
        active: require("../../assets/images/home/home_yes.png"),
        inactive: require("../../assets/images/home/home_none.png"),
      },
      icon2: {
        active: require("../../assets/images/home/course_yes.png"),
        inactive: require("../../assets/images/home/course_none.png"),
      },
      icon3: {
        active: require("../../assets/images/home/study_yes.png"),
        inactive: require("../../assets/images/home/study_none.png"),
      },
      icon4: {
        active: require("../../assets/images/home/my_yes.png"),
        inactive: require("../../assets/images/home/my_none.png"),
      },
    };
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
  min-height: 100vh;
  padding-bottom: 50px;
  .wrap_top {
    padding: 25px 25px 0 20px;
    height: 171px;
    background: #eb4f37;
    color:#fff;
    .change_student {
      text-align: right;
      line-height: 21px;
      font-size: 15px;
      height: 21px;
      color: #fff;
      position: relative;
      margin-bottom: 32px;
    }
    .icon_change {
      width: 15px;
      height: 15px;
      display: inline-block;
      background: url("../../assets/images/home/shopping.svg");
      background-size: cover;
      position: absolute;
      right: 68px;
    }
  }
  .person_wrap {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      border: 1px solid #979797;
      margin-right: 16px;
    }
    .name{
      font-size: 18px;
    }
    .grade{
      display: inline-block;
      margin-left: 7px;
      font-style: normal;
      border-radius: 10px;
      border: 1px solid #FFFFFF;
      font-size: 12px;
      padding:2px 10px;
    }
    .phone{
      font-size: 15px;
      line-height: 21px;
    }
    .right_arrow{
      display: inline-block;
      width: 15px;
      height: 15px;
      display: inline-block;
      background: url("../../assets/images/home/shopping.svg");
      background-size: cover;
      position: absolute;
      right:25px;
    }
  }
}
</style>
