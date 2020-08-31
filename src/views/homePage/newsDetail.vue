<template>
  <div class="wrap">
    <navBar :title="title"></navBar>
    <div class="news_wrap">
      <h3 class="title">学霸作息时间表刷爆朋友圈，99%家长都感叹不已!</h3>
      <p class="message">
        <span>{{message.name}}</span>
        <span class="time">{{message.time}}</span>
        <i class="look"></i>
        {{message.look}}
        <i class="good"></i>
        {{message.good}}
      </p>
      <div class="content">
        <p>左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。</p>
        <img src="../../assets/images/home/new2.png" alt />
        <span>2018年上海外滩全景图</span>
        <p>左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。</p>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "学霸作息时间表刷爆朋友圈…",
      content: "当前暂无内容",
      message: {
        name: "纳小思",
        time: "2020-04-14",
        look: "5656",
        good: "80",
      },
    };
  },
  components: {
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  min-height: 100vh;
  .news_wrap {
    padding: 17px 24px;
  }
  .title {
    font-size: 24px;
    color: #333333;
    line-height: 34px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .message {
    line-height: 21px;
    color: #a2a7b5;
    font-size: 15px;
  }
  .time {
    margin-left: 6px;
  }
  .look {
    margin-left: 88px;
    display: inline-block;
    width: 17px;
    height: 12px;
    background: url("../../assets/images/home/look.svg");
    background-size: cover;
  }
  .good {
    margin-left: 4px;
    display: inline-block;
    width: 13px;
    height: 13px;
    background: url("../../assets/images/home/good.svg");
    background-size: cover;
  }
  .content {
    margin-top: 25px;
    color: #333333;
    line-height: 32px;
    font-size: 18px;
    img {
      width: 100%;
      margin-top: 20px;
    }
    span {
      color: #999999;
      line-height: 21px;
      font-size: 15px;
      display: inline-block;
      margin-bottom: 20px;
    }
  }
}
</style>
