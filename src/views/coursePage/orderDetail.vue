<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
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
    <div class="order-flow" v-if="status !== 'waitPay'">
      <p>
        <span>订单编号</span>
        <span>2048909067890987</span>
      </p>
      <p>
        <span>下单时间</span>
        <span>2019-01-10 16:56</span>
      </p>
      <p>
        <span>支付方式</span>
        <span>支付宝</span>
      </p>
    </div>
    <div class="pay-way" v-if="status === 'waitPay'">
      <h2 class="nav-header">
        <p>支付方式</p>
      </h2>
      <van-radio-group v-model="radio" checked-color="#E94831">
        <van-cell-group>
          <van-cell clickable @click="radio = '1'" size="large">
            <template #title>
              <img :src="payWay[0]" alt="" />
              <span class="custom-title">支付宝</span>
            </template>
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell clickable @click="radio = '2'" size="large">
            <template #title>
              <img :src="payWay[1]" alt="" />
              <span class="custom-title">微信</span>
            </template>
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="pay-detail" v-if="status === 'cancelPay'">
      <div class="detail">
        <p>
          <span>缴费金额</span>
          <span>￥3200</span>
        </p>
        <p>
          <span>课时消费</span>
          <span>-￥0</span>
        </p>
        <h3>
          <span>实退</span>
          <span>
            <i>￥</i>
            <i>3200</i>
          </span>
        </h3>
      </div>
    </div>
    <div class="pay-bar" v-if="status === 'waitPay'" @click="choosePay">
      待支付￥3200
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { RadioGroup, Radio, Dialog } from "vant";
export default {
    components: {
    navBar,
  },
  data() {
    return {
      title:'订单详情',
      status: this.$route.query.type,
      bg: require("../../assets/images/course/pay-bg.png"),
      payWay: [
        require("../../assets/images/course/ali-pay.png"),
        require("../../assets/images/course/wechat-pay.png"),
      ],
      radio: "1",
    };
  },
  methods: {
     //获取校区
    getCourselist() {
      let method = "post";
      let data = {
        data: {
          campus_id: "1",
        },
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      this.$services.classes({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          this.courseList = this.courseList.concat(list);
          this.pageIndex++;
          this.loading = false;
          if (this.courseList.length >= res.totalCount) {
            this.finished = true;
            this.loading = false;
          }
        } else {
          //Dialog({ message: res.msg });
        }
      });
    },
    choosePay() {
      Dialog.confirm({
        title: "订单确认",
        message: "是否确认下单？",
      })
        .then(() => {
          this.status = 'successPay'
          // on confirm
        })
        .catch(() => {
          this.status = 'cancelPay'
          // on cancel
        });
    },
  },
};
</script>
<style lang="scss" scoped>
$normalMargin: 10px;
.pay-status {
  width: 100%;
  height: 70px;
  font-size: 17px;
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
    font-weight: 400;
    color: #ffffff;
  }
}
.detail-card {
  padding: 10px 14px 13px;
  background: #ffffff;

  h2 {
    font-size: 0;
    display: flex;
    justify-content: space-between;
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
    color: #999999;
    margin-top: 9px;
    line-height: 19px;
  }
}
.pay-detail {
  margin: $normalMargin 0;
  .detail {
    background: #ffffff;
    height: auto;
    padding: 12px 12px 8px;
    p {
      height: 18px;
      line-height: 18px;
      font-size: 13px;
      margin-bottom: 9px;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    p:last-child {
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
.pay-way {
  background: #ffffff;

  .van-cell__title {
    display: flex;
    img {
      height: 24px;
      margin-right: 18px;
    }
    .custom-title {
      font-size: 16px;
      color: #333333;
    }
  }
  .van-cell::after {
    border-bottom: none;
  }
}
.order-flow {
  background: #ffffff;
  padding: 8px 15px;
  margin: 10px 0;
  p {
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
