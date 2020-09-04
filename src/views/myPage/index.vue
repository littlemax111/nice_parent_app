<template>
  <div class="wrap">
    <div class="wrap_top">
      <p class="change_student" @click='goRoute("/myPage/student")'>
        <i class="icon_change"></i>切换学员
      </p>
      <div class="person_wrap" @click='goRoute("/myPage/person")'>
        <img src="../../assets/images/my/person.jpg" alt />
        <div class="msg_wrap">
          <p class="name">
            {{msg.name}}
            <i class="grade">{{msg.grade}}</i>
          </p>
          <p class="phone">{{msg.phone}}</p>
        </div>
        <i class="right_arrow"></i>
      </div>
    </div>
    <ul class="money_wrap">
      <li @click='goRoute("/myPage/money")'>
        <i class="icon_money"></i>
        <p>我的钱包</p>
      </li>
      <li @click='goRoute("/myPage/coupon")'>
        <i class="icon_coupon"></i>
        <p>优惠券</p>
      </li>
    </ul>
    <ul class="sort_wrap">
      <li @click='goRoute("/myPage/order")'>
        <i class="order" ></i>
        <span>我的订单</span>
        <i class="enter_arrow"></i>
      </li>
       <li @click='goRoute("/myPage/course")'>
        <i class="course" ></i>
        <span>我的课程</span>
        <i class="enter_arrow"></i>
      </li>
       <li @click='goRoute("/myPage/message")'>
        <i class="message" ></i>
        <span>消息中心</span>
        <i class="enter_arrow"></i>
      </li>
       <li @click='goRoute("/myPage/advice")'>
        <i class="advice" ></i>
        <span>意见反馈</span>
        <i class="enter_arrow"></i>
      </li>
       <li @click='goRoute("/myPage/setting")'>
        <i class="setting" ></i>
        <span>设置</span>
        <i class="enter_arrow"></i>
      </li>
    </ul>
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
         <van-tabbar-item icon="home-o" to="/studyPage/index">
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
      msg: {
        name: "肖剑",
        grade: "初二",
        phone: "15967119576",
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
    height: 190px;
    background: url("../../assets/images/my/bg.png");
    background-size: cover;
    color: #fff;
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
      background: url("../../assets/images/my/change.svg");
      background-size: cover;
      position: absolute;
      right: 68px;
      top:2px;
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
    .name {
      font-size: 18px;
    }
    .grade {
      display: inline-block;
      margin-left: 7px;
      font-style: normal;
      border-radius: 10px;
      border: 1px solid #ffffff;
      font-size: 12px;
      padding: 2px 10px;
    }
    .phone {
      font-size: 15px;
      line-height: 21px;
    }
    .right_arrow {
      display: inline-block;
      width: 8px;
      height: 13px;
      display: inline-block;
      background: url("../../assets/images/my/white_more.svg");
      background-size: cover;
      position: absolute;
      right: 25px;
    }
  }
  .money_wrap {
    margin-top: 14px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    li {
      width: 160px;
      height: 60px;
      background: #ffffff;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon_money {
      display: inline-block;
      background: url("../../assets/images/my/money.svg");
      background-size: cover;
      width: 25px;
      height: 21px;
    }
    .icon_coupon {
      display: inline-block;
      background: url("../../assets/images/my/coupon.svg");
      background-size: cover;
      width: 31px;
      height: 21px;
    }
    p {
      font-size: 15px;
      color: #333333;
      margin-left: 20px;
    }
  }
  .sort_wrap {
    padding: 12px 0 0 25px;
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e2e2e2;
      height: 58px;
      color: #666666;
      font-size: 18px;
      position: relative;
    }
    .order {
      width: 23px;
      height: 20px;
      display: inline-block;
      background: url("../../assets/images/my/icon_order.svg");
      background-size: cover;
      margin-right: 18px;
    }
    .enter_arrow{
      width: 8px;
      height: 13px;
      display: inline-block;
      background: url("../../assets/images/my/more.svg");
      background-size: cover;
      position: absolute;
      right:25px;
    }
    .course{
      width: 21px;
      height: 23px;
      display: inline-block;
      background: url("../../assets/images/my/icon_course.svg");
      background-size: cover;
      margin-right: 18px;
    }
    .message{
      width: 23px;
      height: 23px;
      display: inline-block;
      background: url("../../assets/images/my/icon_message.svg");
      background-size: cover;
      margin-right: 18px;
    }
    .advice{
      width: 23px;
      height: 21px;
      display: inline-block;
      background: url("../../assets/images/my/icon_advice.svg");
      background-size: cover;
      margin-right: 18px;
    }
    .setting{
      width: 23px;
      height: 23px;
      display: inline-block;
      background: url("../../assets/images/my/icon_setting.svg");
      background-size: cover;
      margin-right: 18px;
    }
  }
}
</style>
