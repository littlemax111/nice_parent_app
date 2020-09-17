<template>
  <div class="wrap">
    <form action="/" class="top_wrap">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入科目或年级"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onclear"
      />
    </form>
    <div v-if="show" class='content'>
      <div class="history_wrap">
        <h3 class="title">
          <span>历史搜索</span>
          <span class="icon_delect" @click="clearHistory()"></span>
        </h3>
        <ul>
          <li v-for="(item, index) in historyList" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="history_wrap">
        <h3 class="title">
          <span>热门搜索</span>
        </h3>
        <ul>
          <li v-for="(item, index) in hotList" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div v-else class='content'>
      <div v-if="list.length>0" class="list_wrap">
        <ul class="list">
          <li v-for="(item, index) in list" :key="index" @click="toDetails(index)">
            <div class="top">
              <div class="title">
                <span class="tips">{{ item.tips }}</span>
                <span class="course-name">{{ item.courseNmae }}</span>
              </div>
              <div class="time">
                <span class="time-tips">{{ item.time }}</span>
                <span class="course-tips">{{ item.couse }}</span>
              </div>
              <div class="place">{{ item.place }}</div>
            </div>
            <div class="bottom">
              <div class="price">
                <span class="tag">¥</span>
                <span class="total">{{ item.total }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <no-data :content="content" v-else></no-data>
    </div>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
export default {
  data() {
    return {
      value: "",
      historyList: ["数学"],
      hotList: ["数学", "语文", "英语", "科学", "三年级", "三年级"],
      hotIndex: 0,
      historyIndex: 0,
      show: true,
      list: [
        {
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          tips: "在线",
          courseNmae: "初二语文寒假精品课",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
        {
          tips: "面授",
          courseNmae: "初一英语寒假精品课",
          time: "09月02日-01月07日",
          couse: "6课时",
          place: "滨江学习中心",
          total: 2299,
        },
        {
          tips: "面授",
          courseNmae: "初三科学寒假精品课",
          time: "09月02日-01月07日",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
      ],
      content: "没有搜到相关课程~",
    };
  },
  methods: {
    onSearch(val) {
      this.historyList.push(val);
      this.show = false;
    },
    onCancel() {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push("/homePage/index");
    },
    clearHistory() {
      this.historyList = [];
    },
    onclear() {
      this.show = true;
    },
  },
  components: {
    noData,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .top_wrap {
    margin-bottom: 17px;
    position: fixed;
    width:100%;
  }
  .content{
    padding-top:76px;
  }
  .history_wrap {
    padding: 0 15px;
    .title {
      margin-top: 13px;
      font-weight: 500;
      color: #232b36;
      line-height: 24px;
      font-size: 17px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon_delect {
      display: inline-block;
      width: 17px;
      height: 17px;
      background: url("../../assets/images/home/delect.svg");
      background-size: cover;
      margin-left: 9px;
    }
    ul {
      margin-top: 18px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    li {
      margin-bottom: 13px;
      padding: 5px 19px;
      background: #f7f7f7;
      border-radius: 15px;
      color: #232b36;
      font-size: 13px;
      line-height: 19px;
      margin-right: 10px;
    }
  }
  .list_wrap {
    ul.list {
      width: 100%;
      height: auto;
      padding: 0 20px 50px;
      li {
        width: 100%;
        height: 155px;
        padding: 24px 15px 0;
        margin-bottom: 15px;
        background: #ffffff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        .top {
          border-bottom: 1px solid #e2e2e2;
          padding-bottom: 16px;
          .title {
            height: 17px;
            line-height: 17px;
            display: flex;
            align-items: center;
            .tips {
              display: block;
              width: 29px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              font-size: 10px;
              color: #d94831;
              background: #fce4e0;
              border-radius: 2px;
              margin-right: 5px;
            }
            .course-name {
              font-size: 17px;
              font-weight: 500;
              color: #333333;
            }
          }
          .time {
            margin: 15px 0 10px;
            overflow: hidden;
            font-size: 0px;
            height: 13px;
            line-height: 13px;
            color: #a2a7b5;
            .time-tips {
              font-size: 13px;
              padding-right: 10px;
              margin-right: 10px;
              border-right: 1px solid #e2e2e2;
            }
            .course-tips {
              font-size: 13px;
            }
          }
          .place {
            font-size: 13px;
            line-height: 13px;
            color: #a2a7b5;
          }
        }
        .bottom {
          padding-top: 14px;
          font-size: 0;
          text-align: right;
          .price {
            line-height: 18px;
            span {
              color: #e94831;
            }
            span.tag {
              font-size: 13px;
              margin-right: 2px;
            }
            span.total {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
