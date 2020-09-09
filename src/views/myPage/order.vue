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
    <div v-if="orderList.length>0">
      <ul class="list_wrap">
        <li v-for="(item, index) in orderList" :key="index">
          <p class="order_wrap">
            <span class="number">订单编号: {{item.orderNumber}}</span>
            <span class="status pay" v-if="item.status===1">待支付</span>
            <span class="status" v-if="item.status===2">已支付</span>
            <span class="status" v-if="item.status===3">退款</span>
            <span class="status" v-if="item.status===0">已取消</span>
          </p>
          <div class="msg_wrap">
            <h4 class="title">
              <span>{{item.name}}</span>
              <span class="money">
                <i class="icon_money">￥</i>
                {{item.money}}
              </span>
            </h4>
            <p>意向时间: {{item.time}}</p>
            <p>意向校区: {{item.school}}</p>
            <p>意向老师: {{item.teacher}}</p>
          </div>
          <div class="total_wrap">
            <p>
              共1个课程，总计:
              <span>
                <span class="money">
                  <i class="icon_money">￥</i>
                  {{item.money}}
                </span>
              </span>
            </p>
            <p class="btn_wrap" v-if="item.status===1">
              <i class="cancel_btn" >取消订单</i>
              <i class="success_btn" @click='goRoute("/coursePage/byingCourseMessage")'>立即支付</i>
            </p>
          </div>
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
      title: "我的订单",
      content: "您还没有相关订单哦~",
      orderList: [
        {
          status: 0, //已取消
          orderNumber: "2048909067890987",
          name: "初二数学寒假精品课",
          time: "12月18日-12月18日 13:00~15:00",
          school: "滨江学习中心",
          teacher: "待定",
          money: "3200",
        },
        {
          status: 1, //待付款
          orderNumber: "2048909067890987",
          name: "初二数学寒假精品课",
          time: "12月18日-12月18日 13:00~15:00",
          school: "滨江学习中心",
          teacher: "待定",
          money: "3200",
        },
        {
          status: 2, //已付款
          orderNumber: "2048909067890987",
          name: "初二数学寒假精品课",
          time: "12月18日-12月18日 13:00~15:00",
          school: "滨江学习中心",
          teacher: "待定",
          money: "3200",
        },
        {
          status: 3, //退款
          orderNumber: "2048909067890987",
          name: "初二数学寒假精品课",
          time: "12月18日-12月18日 13:00~15:00",
          school: "滨江学习中心",
          teacher: "待定",
          money: "3200",
        },
      ],
      tabTitle: ["全部", "待付款", "已付款", "退款"],
      tabIndex: 0,
    };
  },
  components: {
    noData,
    navBar,
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    addClassname(index) {
      this.tabIndex = index;
      switch (index) {
        case 0:
          this.orderList = [
            {
              status: 0, //已取消
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
            {
              status: 1, //待付款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
            {
              status: 2, //已付款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
            {
              status: 3, //退款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
          ];
          break;
        case 1:
          this.orderList = [
            {
              status: 1, //待付款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
          ];
          break;
        case 2:
          this.orderList = [
            {
              status: 2, //已付款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
            },
          ];
          break;
        default:
          this.orderList = [
            {
              status: 3, //退款
              orderNumber: "2048909067890987",
              name: "初二数学寒假精品课",
              time: "12月18日-12月18日 13:00~15:00",
              school: "滨江学习中心",
              teacher: "待定",
              money: "3200",
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
    z-index:100;
    width:100%;
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
  .list_wrap {
    padding: 16px 15px;
    li {
      min-height: 216px;
      background: #ffffff;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      font-size: 12px;
      color: #979ea7;
      line-height: 16px;
      margin-bottom: 16px;
      padding-left: 15px;
    }
    .order_wrap {
      height: 40px;
      display: flex;
      align-items: center;
      padding-right: 14px;
      justify-content: space-between;
      border-bottom: 1px solid #e2e2e2;
    }
    .pay {
      color: #fa4500;
    }
    .status {
      font-size: 14px;
    }
    .msg_wrap {
      padding-right: 14px;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 19px;
    }
    .title {
      font-size: 15px;
      color: #2c3540;
      line-height: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
    .money {
      font-size: 16px;
      font-weight: 500;
      color: #2c3540;
    }
    .icon_money {
      color: #2c3540;
      font-size: 12px;
      font-style: normal;
    }
    p {
      margin-top: 7px;
    }
    .total_wrap {
      margin-top: 14px;
      margin-bottom: 18px;
      text-align: right;
      padding-right: 14px;
    }
    .btn_wrap {
      font-size: 14px;
      padding-bottom: 20px;
      i {
        display: inline-block;
        width: 100px;
        height: 32px;
        text-align: center;
        line-height: 30px;
        border-radius: 16px;
        font-style: normal;
      }
    }
    .cancel_btn {
      color: #2c3540;
      border: 1px solid #dddddd;
      margin-right: 6px;
    }
    .success_btn {
      color: #fff;
      background: #e94831;
      border: 1px solid #e94831;
    }
  }
}
</style>
