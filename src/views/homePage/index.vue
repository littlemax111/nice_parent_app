<template>
  <div class="wrap">
    <div class="top_wrap">
      <div class="grade_wrap" @click="goRoute('/homePage/grade')">
        <span class="grade">{{ grade.name }}</span>
        <i class="down_icon"></i>
      </div>
      <i class="seacher_icon" @click="goRoute('/homePage/search')"></i>
      <i class="shop_icon" @click="goRoute('/coursePage/courseCar')"></i>
    </div>
    <div class="banner_wrap">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.banner_url" :title="item.title" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="sort_wrap">
      <ul>
        <li
          v-for="(item, index) in sortList"
          :key="index"
          @click="goRoute(item.page)"
        >
          <img :src="item.img" />
          <span>{{ item.titel }}</span>
        </li>
      </ul>
    </div>
    <div class="active_wrap">
      <img src="../../assets/images/home/active.png" alt />
    </div>
    <div class="public_class">
      <div class="title_wrap">
        <h3 class="title">精选公开课</h3>
        <span class="more" @click="goRoute('/homePage/publicClass')">更多</span>
      </div>
      <ul class="class_list">
        <li
          v-for="(item, index) in classList"
          :key="index"
          @click="goRoute(`/homePage/classDetail?id=${item.article_id}`)"
        >
          <img :src="item.thumb" alt />
          <p class="title class='single_wrap'">{{ item.title }}</p>
          <p class="sub_title">{{ item.author }}</p>
        </li>
      </ul>
    </div>
    <div class="study_center">
      <div class="study_wrap">
        <p class="distance">{{nearestCampus.minDistance}}km</p>
        <p class="name">{{nearestCampus.campus_name}}</p>
        <p class="address single_wrap">
          <i class="icon_address"></i> {{nearestCampus.address}}
        </p>
        <p class="phone"><i class="icon_phone"></i> {{nearestCampus.costomer_mobile}}</p>
      </div>
      <div class="study_btn" @click="$router.push(`/homePage/schoolMap`)">
        详情
      </div>
    </div>
    <div class="hot_news">
      <h3 class="title">热门资讯</h3>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <ul>
          <li
            v-for="(item, index) in newsList"
            :key="index"
            @click="goRoute(`/homePage/newsDetail?id=${item.article_id}`)"
          >
            <div>
              <h3 class="title double_wrap">{{ item.title }}</h3>
              <p class="time">{{ item.ctime }}</p>
            </div>
            <img :src="item.thumb" />
          </li>
        </ul>
      </van-list>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem } from "vant";
import tabBar from "../../components/tabBar.vue";
import { mapState } from "vuex";
import { formatDate } from "../../utils/utils.js";
import { Dialog } from "vant";

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageIndex: 1,
      pageSize: 10,
      bannerList: [
        require("../../assets/images/home/banner1.png"),
        require("../../assets/images/home/banner1.png"),
      ],
      newsList: [],
      classList: [
        {
          img: require("../../assets/images/home/class1.png"),
          title: "如何高效学习英语",
          sub_title: "讲师:顾颖",
        },
      ],
      sortList: [
        {
          img: require("../../assets/images/home/icon_one.png"),
          titel: "纳思书院",
          page: "/homePage/nasiSchool",
        },
        {
          img: require("../../assets/images/home/icon_grade.png"),
          titel: "纳思锐才",
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
          page: "/homePage/campusQuery",
        },
      ],
    };
  },
  components: {
    tabBar,
  },
  watch: {},
  created() {
    this.getCampuslist();
    this.getGradelist();
    this.getBannerlist();
    this.getNews();
    this.getclassList();
    this.initPosition();
  },
  mounted() {},
  computed: {
    ...mapState(["grade", "school","nearestCampus"]),
  },
  methods: {
    initPosition() {
      let that = this;
      if (!this.nearestCampus.campus_id) {
        let mapObj = new AMap.Map("iCenter");
        mapObj.plugin("AMap.Geolocation", function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //显示定位按钮，默认：true
            buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
          AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
        });
        function onComplete(res) {
          // 经度
          let lng = res.position.lng;
          // 纬度
          let lat = res.position.lat;
          console.log(lng, lat);
          if (lng && lat) {
            that.setPosition(lng, lat);
          }
        }
        function onError(error) {
          console.log(error);
        }
      }
    },
    setPosition(lng, lat) {
      let method = "post";
      let data = {
        data: {
          location: `${lng},${lat}`, //必填(经度,纬度)
        },
      };
      this.$services.nearestCampus({ method, data }).success((res) => {
        if (res.code === 200) {
          let data = res.data.campus;
          let minDistance = res.data.minDistance
          let value = {
            campus_id: data.campus_id,
            campus_name: data.campus_name,
            address:data.address,
            costomer_mobile:data.costomer_mobile,
            minDistance:minDistance/1000
          };
          this.$store.commit("nearestCampus", value);
        }
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.pageIndex != 1) {
          this.getNews();
        }
      }, 2000);
    },
    //选择年级
    selectGrade() {
      if (this.grade.config_id === -1) {
        setTimeout(() => {
          this.$router.push(`/homePage/grade?mark=1`);
        }, 1000);
      }
    },
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    changeBlur() {
      window.scroll(0, 0); //失焦后强制让页面归位
    },
    getFullText() {
      if (this.username && this.password && this.valid_code) {
        this.fullLogin = 1;
      }
    },
    //校区列表
    getCampuslist() {
      let method = "post";
      let data = {
        data: {},
      };
      this.$services.getCampus({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          this.$store.commit("campusList", list);
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
    //年级列表
    getGradelist() {
      let method = "post";
      let data = {
        data: {},
      };
      this.$services.getGrade({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          this.$store.commit("gradeList", list);
          this.selectGrade();
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
    //获取banner
    getBannerlist() {
      let method = "post";
      let data = {
        data: {},
      };
      this.$services.banner({ method, data }).success((res) => {
        if (res.code === 200) {
          this.bannerList = res.data.list;
        } else {
          Dialog({ message: res.msg });
        }
      });
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
            item.ctime = formatDate(item.ctime * 1000, 2);
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
        pageIndex: 1,
        pageSize: 10,
      };
      this.$services.article({ method, data }).success((res) => {
        if (res.code === 200) {
          this.classList = res.data.list;
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
  padding-bottom: 50px;
  background: #fff;
  min-height: 100vh;
  .top_wrap {
    padding: 18px 17px 19px 17px;
    display: flex;
    align-items: center;
    height: 38px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 99;
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
    height: 140px;
    margin-top: 38px;
  }
  .van-swipe-item {
    img {
      width: 343px;
      border-radius: 10px;
      height: 120px;
      margin-left: 17px;
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
      width:258px;
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
