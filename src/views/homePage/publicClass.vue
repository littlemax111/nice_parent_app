<template>
  <div class="wrap">
    <van-nav-bar @click-left="backFn">
      <template #title>
        <ul class="tab_title">
          <li
            v-for="(item, index) in tabTitle"
            :key="index"
            :class="{ active: tabIndex == index, mr: index === 0 }"
            @click="addClassname(index)"
          >
            {{ item }}
          </li>
        </ul>
      </template>
      <template #left>
        <i class="icon_back"></i>
      </template>
    </van-nav-bar>

    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="content_wrap">
          <h3 class="title">{{ tabTitle2 }}</h3>
          <!-- 公开课 -->
          <ul
            class="public_class"
            v-if="tabIndex == 0"
            @click="goRoute('/homePage/classDetail')"
          >
            <li v-for="(item, index) in classList" :key="index">
              <img :src="item.thumb" alt />
              <div>
                <h4 class="single_wrap">{{ item.title }}</h4>
                <p class="message">
                  <span>{{ item.author }}</span>
                  {{ item.work }}
                </p>
                <p class="time">
                  <span>{{ item.ctime }}</span>
                  <span v-if="item.long">|</span>
                  <span>{{ item.long }}</span>
                </p>
              </div>
            </li>
          </ul>
          <!-- 资讯 -->
          <ul class="hot_news" v-if="tabIndex == 1">
            <li
              v-for="(item, index) in newsList"
              :key="index"
              @click="goRoute('/homePage/newsDetail')"
            >
              <div>
                <h3 class="new_title double_wrap">{{ item.title }}</h3>
                <p class="time">{{ item.ctime }}</p>
              </div>
              <img :src="item.thumb" />
            </li>
          </ul>
        </div>
      </van-list>
    <!-- </van-pull-refresh> -->
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";
import { formatDate } from "../../utils/utils.js";

export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      pageIndex: 1,
      pageSize: 1,
      title: "",
      content: "当前暂无内容",
      active: 0,
      tabTitle: ["公开课", "资讯"],
      tabIndex: 0,
      tabTitle2: "精选公开课",
      newsList: [],
      classList: [
        // {
        //   img: require("../../assets/images/home/teacher.png"),
        //   title: "如何利用小游戏，帮助孩子学英语",
        //   author: "田慧珍",
        //   work: "北京大学心理学教授",
        //   ctime: "2020-04-12 16:00",
        //   long: "60分钟",
        // },
      ],
    };
  },
  components: {
    noData,
    navBar,
  },
  created() {
    this.getclassList();
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    onLoad() {
      setTimeout(() => {
        if (this.pageIndex != 1) {
          if (this.tabIndex == 0) {
            console.log(1);
            this.getclassList();
          } else {
            this.getNews();
          }
        }
      }, 3000);
    },
    onRefresh() {
      this.loading = false;
      this.finished = false;
      this.pageIndex = 1;
      this.pageSize = 1;
      if (this.tabIndex == 0) {
        this.getclassList();
        this.classList = [];
      } else {
        this.getNews();
        this.newsList = [];
      }
    },
    //获取资讯
    getNews() {
      let method = "post";
      let data = {
        data: {
          type: "1",
          category_id: "1",
        },
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      this.$services.article({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          list.map((item, index) => {
            item.ctime = formatDate(item.ctime * 1000, 1);
          });
          this.newsList = this.newsList.concat(list);
          this.pageIndex++;
          this.loading = false;
          if (this.newsList.length >= res.totalCount) {
            this.finished = true;
          }
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
    //获取公开课
    getclassList() {
      let method = "post";
      let data = {
        data: {
          type: "2",
        },
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      this.$services.article({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          list.map((item, index) => {
            item.ctime = formatDate(item.ctime * 1000, 1);
          });
          this.classList = this.classList.concat(list);
          this.pageIndex++;
          this.loading = false;
          if (this.classList.length >= res.totalCount) {
            this.finished = true;
          }
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
    backFn() {
      this.$router.go(-1); //返回上一层
    },
    addClassname(index) {
      this.tabIndex = index;
      this.pageIndex = 1;
      this.pageSize = 1;
      this.loading = false;
      this.finished = false;
      switch (index) {
        case 0:
          this.tabTitle2 = "精选公开课";
          this.classList = [];
          this.getclassList();
          break;
        case 1:
          this.tabTitle2 = "热门资讯";
          this.newsList = [];
          this.getNews();
          break;
        default:
          this.tabTitle2 = "精选公开课";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  min-height: 100vh;
  .mr {
    margin-right: 37px;
  }
  .icon_back {
    width: 9px;
    height: 15px;
    display: inline-block;
    background: url("../../assets/images/home/back.svg");
    background-size: cover;
  }
  .tab_title {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #333333;
    height: 43px;
    line-height: 43px;
    .active {
      color: #e94831;
      border-bottom: 2px solid #e94831;
    }
  }
  .content_wrap {
    padding: 0 20px;
  }
  .title {
    margin-top: 19px;
    font-size: 18px;
    font-weight: 500;
    color: #050505;
  }
  .public_class {
    li {
      width: 335px;
      height: 110px;
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-top: 15px;
      padding: 12px 0 0 11px;
      display: flex;
    }
    img {
      width: 80px;
      height: 80px;
      margin-right: 15px;
    }
    h4 {
      font-weight: 500;
      color: #050505;
      font-size: 15px;
      margin-top: 6px;
      line-height: 15px;
      width: 214px;
    }
    .message {
      font-size: 14px;
      color: #4a4a4a;
      margin-top: 12px;
      line-height: 14px;
    }
    .time {
      font-size: 12px;
      color: #a1a5bb;
      margin-top: 17px;
      line-height: 12px;
    }
  }
  .hot_news {
    margin-top: 3px;
    .title {
      font-size: 18px;
      color: #050505;
      font-weight: 600;
      margin-bottom: 3px;
    }
    li {
      display: flex;
      padding: 13px 20px 13px 0px;
      border-bottom: 1px solid #f2f2f2;
      justify-content: space-between;
      .new_title {
        font-size: 15px;
        color: #050505;
        line-height: 21px;
        font-weight: 400;
      }
      img {
        width: 105px;
        height: 73px;
        margin-left: 20px;
      }
      .time {
        font-size: 12px;
        color: #a1a5bb;
        margin-top: 17px;
      }
    }
  }
}
</style>
