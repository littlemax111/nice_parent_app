<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="money_wrap">
      <p class="money_title">余额(元)</p>
      <p class="num">111110.0</p>
    </div>
    <h3 class="title">账户明细</h3>
    <ul class="bill_list">
      <li v-for="(item, index) in billList" :key="index">
        <div class='course_wrap'>
          <p class="course_title">{{item.title}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class='total_wrap'>
          <span class="total">{{item.total}}</span>
          <i class="icon_back"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "我的钱包",
      billList: [
        {
          total: "-3180",
          title: "初二数学寒假精品课",
          time: "2017-09-12 02:02:44",
        },
        {
          total: "-3180",
          title: "初二数学寒假精品课",
          time: "2017-09-12 02:02:44",
        },
        {
          total: "-3180",
          title: "初二数学寒假精品课",
          time: "2017-09-12 02:02:44",
        },
      ],
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
  min-height: 100vh;
  .money_wrap {
    width: 345px;
    height: 112px;
    background: url("../../assets/images/my/money_bg.png");
    background-size: cover;
    border-radius: 9px;
    margin: 14px auto;
    color: #fff;
    padding-top: 21px;
  }
  .money_title {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 9px;
  }
  .num {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    color: #ffffff;
    line-height: 49px;
  }
  .title {
    padding: 8px 15px 0 15px;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    line-height: 26px;
  }
  .bill_list {
    margin-top: 21px;
    background: #fff;
    padding-left: 15px;
    li {
      height: 76px;
      border-bottom: 1px solid #f7f7f7;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 15px;
    }
    .course_title {
      font-size: 17px;
      line-height: 17px;
      color: #333;
      margin-top:19px;
    }
    .time {
      font-size: 13px;
      color: #999999;
      margin-top:15px;
      line-height: 12px;
    }
    .total {
      font-size: 16px;
      color: #333;
    }
  }
  .icon_back {
    width: 9px;
    height: 16px;
    display: inline-block;
    background: url("../../assets/images/my/more.svg");
    background-size: cover;
    margin-left: 9px;
  }
  .course_wrap{
    height:100%;
  }
  .total_wrap{
    height:100%;
    display: flex;
    align-items: center;
  }
}
</style>
