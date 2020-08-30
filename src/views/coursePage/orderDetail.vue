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
            4500</span>
      </h2>
      <p>意向时间：12月18日-12月18日 13:00~15:00</p>
      <p>意向校区：滨江学习中心</p>
      <p>意向老师：待定</p>
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
      i{
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
</style>
