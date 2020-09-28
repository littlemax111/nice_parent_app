<template>
  <div class="wrap">
    <navBar :title="message.title"></navBar>
    <div class="news_wrap">
      <h3 class="title">{{message.title}}</h3>
      <p class="message">
        <span>{{ message.author }}</span>
        <span class="time">{{ message.ctime }}</span>
        <i class="look"></i>
        {{ message.read_num }}
        <i class="good"></i>
        {{ message.zan_num }}
      </p>
      <div class="content" v-html="message.content">
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { formatDate } from "../../utils/utils.js";

export default {
  data() {
    return {
      title: "学霸作息时间表刷爆朋友圈…",
      content: "当前暂无内容",
      message: {
      },
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
          list.ctime = formatDate(list.ctime*1000,3)
          this.message = list
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
