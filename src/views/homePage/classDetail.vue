<template>
  <div class="wrap">
    <nav-bar :title="message.title" :routeName="routeName"></nav-bar>
    <div class="video_wrap">
      <video v-if="message.vedio_url" :src="message.vedio_url" controls></video>
      <video v-else src="../../assets/images/home/case.mp4" controls></video>
    </div>
    <div class="message_wrap">
      <div class="title_wrap">
        <h3 class="title">{{ message.title }}</h3>
        <i class="share" @click="show = true"></i>
      </div>
      <p class="teacher">
        <span>讲师：{{ message.author }}</span>
        <span class="shu">|</span>
        <span>{{ message.read_num }}人观看</span>
      </p>
    </div>
    <div class="content" v-html="message.content"></div>
    <van-popup v-model="show" position="bottom">
      <div class="icon_wrap">
        <p>
          <i class="icon_weixin"></i>
          <span>微信好友</span>
        </p>
        <p>
          <i class="icon_friend"></i>
          <span>朋友圈</span>
        </p>
      </div>
      <p class="cancel_btn" @click="show = false">取消</p>
    </van-popup>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { formatDate } from "../../utils/utils.js";

export default {
  data() {
    return {
      routeName: "",
      show: false,
      title: "趣味跟读",
      message: {},
      classList: [
      ],
    };
  },
  components: {
    navBar,
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      let method = "post";
      let id = this.$route.query.id;
      let data = {
        data: {
          article_id: id,
        },
      };
      this.$services.articleDetail({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.article;
          list.ctime = formatDate(list.ctime * 1000, 3);
          this.message = list;
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
  .video_wrap {
    height: 210px;
    video {
      width: 100%;
    }
  }
  .message_wrap {
    padding: 17px 20px;
    border-bottom: 1px solid #f2f2f2;
    .title_wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .share {
      width: 18px;
      height: 19px;
      display: inline-block;
      background: url("../../assets/images/home/share.svg");
      background-size: cover;
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: #050505;
      line-height: 25px;
      margin-bottom: 10px;
    }
    .teacher {
      color: #a1a5bb;
      font-size: 13px;
      line-height: 18px;
    }
    .shu {
      padding: 0 5px;
    }
  }
  .teacher_wrap {
    border-bottom: 1px solid #f2f2f2;
  }
  .content {
    padding: 0 20px;
    p {
      padding: 0 20px;
    }
  }
  .class_list {
    padding: 0 20px 40px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 160px;
      height: 151px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      opacity: 0.9;
      margin-bottom: 15px;
    }
    img {
      width: 100%;
      height: 90px;
    }
    .title {
      font-size: 14px;
      color: #050505;
      padding-left: 12px;
    }
    .sub_title {
      color: #999999;
      font-size: 12px;
      padding-left: 12px;
    }
  }
  .icon_wrap {
    width: 100%;
    height: 120px;
    color: #333;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p:nth-child(2n + 1) {
      margin-right: 49px;
    }
    i {
      display: block;
      width: 50px;
      height: 50px;
      margin-bottom: 6px;
    }
    .icon_weixin {
      background: url("../../assets/images/home/icon_weixin.svg");
      background-size: cover;
    }
    .icon_friend {
      background: url("../../assets/images/home/icon_friend.svg");
      background-size: cover;
    }
  }
  .cancel_btn {
    width: 100%;
    height: 60px;
    background: #f5f5f8;
    color: #333333;
    font-size: 16px;
    text-align: center;
    line-height: 60px;
  }
}
</style>
