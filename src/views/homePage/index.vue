<template>
  <div class="wrap">
    <div class="top_wrap">
      <div class="grade_wrap" @click='goRoute("/homePage/grade")'>
        <span class="grade">{{grade.name}}</span>
        <i class="down_icon"></i>
      </div>
      <i class="seacher_icon"></i>
      <i class="shop_icon" @click='goRoute("/coursePage/courseCar")'></i>
    </div>
    <div class="banner_wrap">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in bannerList" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="sort_wrap">
      <ul>
        <li v-for="(item, index) in sortList" :key="index" @click="goRoute(item.page)">
          <img :src="item.img" />
          <span>{{item.titel}}</span>
        </li>
      </ul>
    </div>
    <div class="active_wrap">
      <img src="../../assets/images/home/active.png" alt />
    </div>
    <div class="public_class">
      <div class="title_wrap">
        <h3 class="title">精选公开课</h3>
        <span class="more" @click='goRoute("/homePage/publicClass")'>更多</span>
      </div>
      <ul class="class_list">
        <li
          v-for="(item, index) in classList"
          :key="index"
          @click='goRoute("/homePage/classDetail")'
        >
          <img :src="item.img" alt />
          <p class="title class='single_wrap'">{{item.title}}</p>
          <p class="sub_title">{{item.sub_title}}</p>
        </li>
      </ul>
    </div>
    <div class="study_center">
      <div class="study_wrap">
        <p class="distance">距离您6.04km</p>
        <p class="name">古墩学习中心</p>
        <p class="address">
          <i class="icon_address"></i> 杭州市西湖区古墩路543号大昌盛商务楼2
        </p>
        <p class="phone">
          <i class="icon_phone"></i> 400-688-1614
        </p>
      </div>
      <div class="study_btn">详情</div>
    </div>
    <div class="hot_news">
      <h3 class="title">热门资讯</h3>
      <ul>
        <li v-for="(item, index) in newsList" :key="index" @click='goRoute("/homePage/newsDetail")'>
          <div>
            <h3 class="title double_wrap">{{item.title}}</h3>
            <p class="time">{{item.time}}</p>
          </div>
          <img :src="item.img" />
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { Icon } from "vant";
import { Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem } from "vant";
import tabBar from "../../components/tabBar.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      bannerList: [
        require("../../assets/images/home/banner1.png"),
        require("../../assets/images/home/banner1.png"),
      ],
      newsList: [
        {
          img: require("../../assets/images/home/new1.png"),
          title: "孩子如果不懂得与世界如何相处 所有的教育都是徒劳",
          time: "2018-12-07 16:58",
        },
        {
          img: require("../../assets/images/home/new2.png"),
          title: "阅卷老师最讨厌的哪几种字体， 如果你写的是那样就糟了",
          time: "2018-12-06 17:58",
        },
        {
          img: require("../../assets/images/home/new1.png"),
          title: "让教育温暖起来,让每一个学生都喜欢上学习",
          time: "2018-12-05 12:58",
        },
      ],
      classList: [
        {
          img: require("../../assets/images/home/class1.png"),
          title: "如何高效学习英语",
          sub_title: "讲师:顾颖",
        },
        {
          img: require("../../assets/images/home/class2.png"),
          title: "如何学习动能定理",
          sub_title: "讲师:章进",
        },
      ],
      sortList: [
        {
          img: require("../../assets/images/home/icon_one.png"),
          titel: "1对1",
          page: "/coursePage/index",
        },
        {
          img: require("../../assets/images/home/icon_grade.png"),
          titel: "小班课",
          page: "/coursePage/index",
        },
        {
          img: require("../../assets/images/home/icon_online.png"),
          titel: "纳思网校",
          page: "/homePage/online",
        },
        {
          img: require("../../assets/images/home/icon_school.png"),
          titel: "校区查询",
          page: "/homePage/school",
        },
      ],
    };
  },
  components: {
    tabBar,
  },
  watch: {},
  created() {},
  mounted() {},
  computed: {
    ...mapState(["grade"]),
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    changeBlur() {
      window.scroll(0, 0); //失焦后强制让页面归位
    },
    getYZM() {
      let date = new Date();
      this.YZM =
        window.LOCAL_CONFIG.API_HOME +
        "/api/GetValidImg.png?v=" +
        date.getTime();
    },
    getFullText() {
      if (this.username && this.password && this.valid_code) {
        this.fullLogin = 1;
      }
    },
    loginIn() {
      let that = this;
      let method = "post";
      let data = {
        username: this.username,
        password: this.password,
        valid_code: this.valid_code,
      };
      this.$services.login({ method, data }).success((res) => {
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.data));
          this.$router.replace(`index`);
        } else {
          that.getYZM();
          Dialog({ message: res.msg });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  padding-bottom: 50px;
  background: #fff;
  min-height: 100vh;
  .top_wrap {
    padding: 18px 17px 19px 17px;
    display: flex;
    align-items: center;
    height: 38px;
    position: fixed;
    top:0px;
    width:100%;
    z-index:99;
    background: #fff;
    .grade_wrap {
      display: flex;
      align-items: center;
    }
    .grade {
      display: inline-block;
      color: #050505;
      font-weight: 600;
      font-size: 15px;
    }
    .down_icon {
      display: inline-block;
      width: 7px;
      height: 4px;
      background: url("../../assets/images/home/down.svg");
      background-size: cover;
      margin-left: 9px;
    }
    .seacher_icon {
      width: 18px;
      height: 18px;
      display: inline-block;
      background: url("../../assets/images/home/search.svg");
      background-size: cover;
      position: absolute;
      right: 56px;
    }
    .shop_icon {
      width: 18px;
      height: 19px;
      display: inline-block;
      background: url("../../assets/images/home/shopping.svg");
      background-size: cover;
      position: absolute;
      right: 17px;
    }
  }
  .banner_wrap {
    padding: 20px 17px 0 17px;
    height: 140px;
    margin-top: 38px;
  }
  .van-swipe-item {
    img {
      width: 100%;
      border-radius: 10px;
      height: 120px;
    }
  }
  .sort_wrap {
    margin-top: 16px;
    padding: 0 23px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 48px;
      height: 48px;
      border-radius: 15px;
      margin-bottom: 6px;
    }
    span {
      color: #4a4a4a;
      font-size: 12px;
    }
  }
  .active_wrap {
    margin-top: 12px;
    margin-bottom: 20px;
    padding: 0 16px;
    height: 104px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .public_class {
    margin-top: 23px;
    padding: 0 20px;
    .title_wrap {
      display: flex;
      vertical-align: bottom;
      justify-content: space-between;
      position: relative;
      height: 18px;
      line-height: 18px;
    }
    .title {
      font-size: 18px;
      color: #050505;
      font-weight: 600;
    }
    .more {
      color: #a1a5bb;
      font-size: 12px;
      display: inline-block;
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
  .class_list {
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    li {
      width: 160px;
      height: 151px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      opacity: 0.9;
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
  .study_center {
    width: 334px;
    height: 112px;
    margin: 0 auto;
    margin-top: 23px;
    background: url("../../assets/images/home/school_bg.png");
    background-size: cover;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 15px 17px;
    display: flex;
    color: #777777;
    .distance {
      font-size: 9px;
    }
    .name {
      font-size: 14px;
      color: #2c3540;
      margin-top: 5px;
    }
    .address {
      font-size: 11px;
      margin-top: 6px;
    }
    .icon_address {
      background: url("../../assets/images/home/address.svg");
      background-size: cover;
      display: inline-block;
      width: 10px;
      height: 12px;
      margin-right: 5px;
    }
    .icon_phone {
      background: url("../../assets/images/home/phone.svg");
      background-size: cover;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
    .phone {
      font-size: 12px;
      margin-top: 5px;
    }
    .study_btn {
      width: 53px;
      height: 23px;
      background: #e94831;
      box-shadow: 0px 5px 10px 0px rgba(233, 72, 49, 0.2);
      border-radius: 12px;
      text-align: center;
      font-size: 9px;
      color: #fff;
      line-height: 23px;
      margin-left: 9px;
    }
  }
  .hot_news {
    margin-top: 32px;
    padding-left: 20px;
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
      .title {
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
