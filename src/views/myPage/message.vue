<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <ul class="message_wrap" v-if="messageList.length>0">
      <li v-for="(item, index) in messageList" :key="index">
        <p class="time">{{item.time}}</p>
        <div class="content_wrap">
          <h4 class="title">{{item.title}}</h4>
          <p class="content">{{item.content}}</p>
          <p class="look_msg">
            <span>查看消息详情</span>
            <i></i>
          </p>
        </div>
      </li>
    </ul>
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
      title: "消息中心",
      content: "暂无消息",
      messageList: [
        {
          time: "2020年08月08日  16:00",
          title: "中小学德育调研",
          content: "中小学德育调研研究会邀请你参与中小学德育调研,即可参与>>",
        },
        {
          time: "2020年08月08日  16:00",
          title: "中小学德育调研",
          content: "中小学德育调研研究会邀请你参与中小学德育调研,即可参与>>",
        },
      ],
    };
  },
  components: {
    noData,
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .message_wrap {
    padding: 27px 16px;
    li {
      margin-bottom: 28px;
      .time {
        font-size: 12px;
        color: #666666;
        text-align: center;
        height: 28px;
        line-height: 28px;
      }
    }
    .content_wrap {
      background: #fff;
      min-height: 150px;
      border-radius: 6px;
      padding: 0 12px;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      padding: 16px 0 12px 0;
    }
    .content {
      color: #666666;
      font-size: 14px;
      line-height: 21px;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
    }
    .look_msg {
      color: #666666;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      i {
        width: 8px;
        height: 13px;
        display: inline-block;
        background: url("../../assets/images/my/more.svg");
        background-size: cover;
        position: absolute;
        right: 25px;
      }
    }
  }
}
</style>
