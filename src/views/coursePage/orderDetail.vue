<template>
  <div>
    <div v-if="status === 'waitPay'">
      <div class="pay-status">
        <span>等待付款</span>
        <span class="time">还剩11:33自动取消</span>
      </div>
    </div>
    <div v-if="status === 'successPay'">
      <div class="pay-status">支付成功</div>
    </div>
    <div v-if="status === 'cancelPay'">
      <div class="pay-status">已取消</div>
    </div>
    <div class="detail-card">
      <h2>
        <span class="title">初二数学寒假精品课长期班</span>
        <span class="price">
          <i>￥</i>
          4500
        </span>
      </h2>
      <p>意向时间：12月18日-12月18日 13:00~15:00</p>
      <p>意向校区：滨江学习中心</p>
      <p>意向老师：待定</p>
    </div>
    <div class="pay-detail">
      <h2 class="nav-header">
        <p>费用明细</p>
      </h2>
      <div class="detail">
        <p>
          <span>订单合计</span>
          <span>￥3200</span>
        </p>
        <h3>
          <span>总计：</span>
          <span>
            <i>￥</i>
            <i>3200</i>
          </span>
        </h3>
      </div>
    </div>
    <div class="pay-way">
      <h2 class="nav-header">
        <p>支付方式</p>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: this.$route.query.type,
      bg: require("../../assets/images/course/pay-bg.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
$normalMargin: 10px;
.pay-status {
  width: 100%;
  height: 70px;
  font-size: 17px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  background: url("../../assets/images/course/pay-bg.png") no-repeat center
    center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  span.time {
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.detail-card {
  padding: 10px 14px 13px;
  background: #ffffff;
  h2 {
    font-size: 0;
    .title {
      font-size: 15px;
      color: #333333;
    }
    .price {
      font-size: 16px;
      color: #151515;
      i {
        font-size: 12px;
        font-style: normal;
      }
    }
  }
  p {
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    margin-top: 9px;
    line-height: 19px;
  }
}
.pay-detail {
  margin-top: $normalMargin;
  .detail {
    background: #ffffff;
    height: auto;
    padding: 12px 12px 8px;
    p {
      height: 18px;
      line-height: 18px;
      font-size: 13px;
      margin-bottom: 9px;;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    p:last-child{
      margin-bottom: 20px;
    }
    h3 {
      font-size: 0;
      text-align: right;
      span:first-child {
        font-size: 14px;
        color: #333333;
      }
      span:last-child {
        font-size: 0;

        font-weight: 600;
        color: #fa4500;
        i:first-child {
          font-style: normal;
          font-size: 12px;
        }
        i:last-child {
          font-style: normal;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
