<template>
  <div class="wrap">
    <div class="wrap_top">
      <p class="change_student" @click='goRoute("/myPage/student")'>
        <i class="icon_change"></i>切换学员
      </p>
      <div class="person_wrap" @click='goRoute("/myPage/person")'>
        <img v-if='studentMsg.avatar' :src="studentMsg.avatar" alt />
        <img v-else src="../../assets/images/my/person.jpg" alt />
        <div class="msg_wrap">
          <p class="name">
            {{studentMsg.student_name}}
            <i class="grade">{{studentMsg.school_grade}}</i>
          </p>
          <p class="phone">{{studentMsg.phone}}</p>
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
      <li @click='goRoute("/myPage/preordain")'>
        <i class="preordain" ></i>
        <span>我的预定</span>
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
     <tab-bar></tab-bar>
  </div>
</template>

<script>
import { Dialog } from "vant";
import tabBar from "../../components/tabBar.vue";
import { mapState } from "vuex";
import { genderFilter } from "../../utils/filters.js";
export default {
   components: {
    tabBar
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["studentMsg"]),
  },
  created() {
    this.getStudent();
  },
  mounted() {
     let token = location.getItem('token');
     if(!token){
       this.$router.push(`/login`)
     }
  },

  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    backFn() {
      this.$router.go(-1); //返回上一层
    },
    //我的学员
    getStudent() {
      let method = "post";
      let token = localStorage.getItem('token')
      let data = {
        data: {},
        token: token,
      };
      this.$services.studentList({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          if(list.length&&list.length>0){
            list[0].gander = genderFilter(list[0].gander)
            this.$store.commit('studentMsg',list[0])
          }
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
    .preordain {
      width: 23px;
      height: 20px;
      display: inline-block;
      background: url("../../assets/images/my/preordain.svg");
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
