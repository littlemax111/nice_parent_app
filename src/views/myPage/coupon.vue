<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <ul class="tab_title">
      <li
        v-for="(item, index) in tabTitle"
        :key="index"
        :class="{'active':tabIndex==index,'mr':index===0}"
        @click="addClassname(index)"
      >{{item}}</li>
    </ul>
    <div v-if="couponList.length>0">
      <ul class="coupon_wrap">
        <li v-for="(item, index) in couponList" :key="index">
          <div class="coupon_bg unUsed" v-if="item.status===0">
            <span>¥</span>
            <i>{{item.money}}</i>
          </div>
          <div class="coupon_bg used" v-else>
            <span>¥</span>
            <i>{{item.money}}</i>
          </div>
          <div class="msg">
            <h3 class="title">{{item.title}}</h3>
            <p class="time">{{item.time}}</p>
            <p class="use_person">{{item.usePerson}}</p>
          </div>
          <p class="btn unUsed_btn" v-if="item.status===0">使用</p>
          <p class="btn used_btn" v-if="item.status===1">已使用</p>
          <p class="btn used_btn" v-if="item.status===2">已过期</p>
        </li>
      </ul>
    </div>
    <no-data :content="content" v-else></no-data>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      routeName:'',
      title: "优惠券",
      content: "您还没有优惠券哦~",
      couponList: [
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
        {
          status: 0,
          money: "20",
          title: "寒假班两科联报优惠券",
          time: "2020.01.07 - 2020.01.21",
          usePerson: "仅限新生使用",
        },
      ],
      tabTitle: ["未使用", "已使用", "已过期"],
      tabIndex: 0,
    };
  },
  components: {
    noData,
    navBar,
  },
  methods: {
    addClassname(index) {
      this.tabIndex = index;
      switch (index) {
        case 0:
          this.couponList = [
            {
              status: 0,
              money: "20",
              title: "寒假班两科联报优惠券",
              time: "2020.01.07 - 2020.01.21",
              usePerson: "仅限新生使用",
            },
            {
              status: 0,
              money: "20",
              title: "寒假班两科联报优惠券",
              time: "2020.01.07 - 2020.01.21",
              usePerson: "仅限新生使用",
            },
          ];
          break;
        case 1:
          this.couponList = [
            {
              status: 1,
              money: "20",
              title: "寒假班两科联报优惠券",
              time: "2020.01.07 - 2020.01.21",
              usePerson: "纳思会员专享",
            },
          ];
          break;
        default:
          this.couponList = [
            {
              status: 2,
              money: "20",
              title: "寒假班两科联报优惠券",
              time: "2020.01.07 - 2020.01.21",
              usePerson: "纳思会员专享",
            },
          ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .tab_title {
    top:46px;
    position: sticky;
    width:100%;
    z-index:100;
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding: 0 33px;
    .active {
      color: #e94831;
      border-bottom: 3px solid #e94831;
    }
  }
  .coupon_wrap {
    padding: 23px 12px 23px 14px;
    li {
      height: 100px;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #777777;
    }
    .coupon_bg {
      width: 93px;
      height: 100px;
      color: #fff;
      line-height: 100px;
      text-align: center;
      span {
        font-size: 12px;
      }
      i {
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
      }
    }
    .unUsed {
      background: url("../../assets/images/my/coupon.png");
      background-size: cover;
    }
    .used {
      background: url("../../assets/images/my/coupon_failure.png");
      background-size: cover;
    }
    .msg {
      height: 100px;
      margin: 0 13px;
      padding: 16px 0;
    }
    .title {
      font-size: 15px;
      color: #2c3540;
      line-height: 21px;
      font-weight: 400;
    }
    .time {
      font-size: 10px;
      line-height: 14px;
      margin-top: 3px;
    }
    .use_person {
      font-size: 12px;
      margin-top: 15px;
    }
    .btn {
      width: 55px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 15px;
    }
    .unUsed_btn {
      color: #fe5e50;
      border: 1px solid #fe5e50;
    }
    .used_btn {
      border: 1px solid #e9e9e9;
      color: #e9e9e9;
    }
  }
}
</style>
