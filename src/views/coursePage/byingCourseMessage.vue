<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="wrap">
      <div class="title">
        <h2>初二数学寒假精品课长期班</h2>
        <p>
          <img :src="timeIcon" alt="" />
          09月02日-01月07日
        </p>
      </div>
      <div class="nav">
        <span class="nav-one">
          <i>学习中心</i>
          <i>选择意向学习中心</i>
        </span>
        <span class="nav-two">查看全部</span>
      </div>
      <div class="swiper">
        <van-swipe :loop="false" :width="290" :show-indicators="false">
          <van-swipe-item>
            <div class="card">
              <h2>滨江学习中心</h2>
            <h3>杭州市滨江区滨河路中赢国际3楼纳思书院</h3>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="card">
              <h2>滨江学习中心</h2>
            <h3>杭州市滨江区滨河路中赢国际3楼纳思书院</h3>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="card">
              <h2>滨江学习中心</h2>
            <h3>杭州市滨江区滨河路中赢国际3楼纳思书院</h3>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="card">
              <h2>滨江学习中心</h2>
            <h3>杭州市滨江区滨河路中赢国际3楼纳思书院</h3>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <span class="nav-one">
          <i>上课时间</i>
          <i>选择上课时间</i>
        </span>
      </div>
      <div class="class-time">
        <p>选择上课时间</p>
      </div>
      <div class="nav">
        <span class="nav-one">
          <i>上课时段</i>
          <i>选择每日意向上课时段</i>
        </span>
      </div>
      <div class="time-range">
        <ul class="clear">
          <li   :class="{'active':tabIndex===index}" v-for="(item,index) in timeRange" :key="index" @click="classTab(index)">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="pay-bar" @click="goOrderDetail">确认下单</div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      title: "购课信息确认",
      timeIcon: require("../../assets/images/course/time-icon.png"),
      tabIndex:0,
      timeRange:['08:00~10:00','12:00~14:00','14:00~16:00','16:00~18:00','18:00~20:00']
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    classTab(val){
        this.tabIndex = val
    },
     goOrderDetail(){
        this.$router.push(`/coursePage/orderDetail?type=waitPay`)
    }
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  .title {
    padding: 13px 16px;
    background: #ffffff;
    h2 {
      height: 24px;
      font-size: 17px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 6px;
    }
    p {
      height: 18px;
      line-height: 18px;
      font-size: 13px;
      color: #666666;
      img {
        width: 12px;
        height: 12px;
        vertical-align: middle;
      }
    }
  }
  .swiper {
    padding-left: 8px;
    .card{
      background: linear-gradient(270deg, #ed7e57 0%, #fa9261 100%);
    border-radius: 0.13333rem;
    height: 3.46667rem;
    padding: 0.64rem 0.4rem 0;
    }
    h2 {
      height: 30px;
      line-height: 30px;
      font-size: 21px;
      color: #ffffff;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 15px;
      color: #ffffff;
      line-height: 21px;
    }
  }
  .class-time {
    width: 345px;
    height: 77px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #cccccc;
    margin: 0 auto;
    p {
      font-size: 14px;
      color: #a4a4a4;
      margin-top: 27px;
      text-align: center;
    }
  }
  .time-range {
    overflow-x: auto;
    padding: 0 14px;
    ul {
      display: inline-flex;
      li {
        width: 105px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #cccccc;
        float: left;
        font-size: 15px;
        color: #333333;
        margin-right: 8px;
      }
      li.active{
          color: #E94831;
          border-color: #E94831;
      }
    }
  }
}
.nav {
  height: 57px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .nav-one {
    display: flex;
    align-items: center;
    i:first-child {
      font-style: normal;
      font-size: 17px;
      font-weight: 600;
      color: #333333;
      margin-right: 10px;
    }
    i:last-child {
      font-style: normal;
      font-size: 12px;
      color: #a4a4a4;
    }
  }
  .nav-two {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
  }
}

.van-swipe-item {
  // background: linear-gradient(270deg, #ed7e57 0%, #fa9261 100%);
  // border-radius: 5px;
  // height: 130px;
  // padding: 24px 15px 0;
  padding-right: 10px;
}
</style>
