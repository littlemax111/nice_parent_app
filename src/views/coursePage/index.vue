<template>
  <div>
    <div class="header">
      <div class="top_wrap">
        <div class="grade_wrap">
          <span class="tips">选课</span>
          <div class="grade-tips" @click="$router.push(`/homePage/grade`)">
            <span class="grade">{{ grade.name }}</span>
            <i class="down_icon"></i>
          </div>
        </div>
        <i class="shop_icon" @click="$router.push(`/coursePage/courseCar`)"></i>
      </div>
      <ul class="nav">
        <li
          :class="{ isActive: index === tabIndex }"
          v-for="(item, index) in navList"
          :key="index"
          @click="changeTab(index, item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="wrap">
      <div class="bread-crumb">
        <div class="left">
          <span>查看意向校区课程</span>
          <span>
            {{ school.campus_name }}
            <img :src="moreIcon" alt />
          </span>
        </div>
        <div class="right" @click="$router.push(`/homePage/school`)">
          <img :src="addressIcon" alt />
          更换校区
        </div>
      </div>
      <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul class="list">
          <li
            v-for="(item, index) in courseList"
            :key="index"
            @click="toDetails(item.class_mode_type, item.class_id)"
          >
            <div class="top">
              <div class="title">
                <span class="tips">{{ item.class_modus }}</span>
                <span class="course-name">{{ item.title }}</span>
              </div>
              <div class="time">
                <span class="time-tips"
                  >{{ item.begin_time.substr(5, 10) }}-{{
                    item.end_time.substr(5, 10)
                  }}</span
                >
                <span class="course-tips">{{ item.period_num }}课时</span>
              </div>
              <div class="place">{{ school.campus_name }}</div>
            </div>
            <div class="bottom">
              <div class="price">
                <span class="tag" v-if="item.class_mode_type != 1">¥</span>
                <span class="total" v-if="item.class_mode_type == 1"
                  >立即预约</span
                >
                <span class="total" v-else>{{ item.total }}</span>
              </div>
            </div>
          </li>
        </ul>
      </van-list>
      <!-- </van-pull-refresh> -->
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from "../../components/tabBar.vue";
import { mapState } from "vuex";
import { Dialog } from "vant";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      pageIndex: 1,
      pageSize: 10,
      subject: "16",
      navList: [],
      isActive: true,
      tabIndex: 0,
      courseList: [
        // {
        //   type: 1,
        //   tips: "面授",
        //   courseNmae: "初二数学秋季精品课",
        //   time: "09月02日-01月07日",
        //   couse: "10课时",
        //   place: "滨江学习中心",
        //   total: 1299,
        // },
        // {
        //   type: 2,
        //   tips: "在线",
        //   courseNmae: "初三物理秋季1对1",
        //   time: "09月02日-01月07日",
        //   couse: "8课时",
        //   place: "滨江学习中心",
        //   total: "立即预约",
        // },
      ],
      addressIcon: require("../../assets/images/course/address.png"),
      moreIcon: require("../../assets/images/course/more.png"),
      totalCount: "",
    };
  },
  created() {
    this.getSubjectlist();
    this.initPosition();
  },
  methods: {
    initPosition() {
      let that = this;
      if (!this.school.campus_id) {
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
      } else {
        this.getCourselist();
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
          let value = {
            campus_id: data.campus_id,
            campus_name: data.campus_name,
          };
          this.$store.commit("school", value);
          this.getCourselist();
        }
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.courseList.length < this.totalCount) {
          this.getCourselist();
        }
      }, 3000);
    },
    onRefresh() {
      this.loading = false;
      this.finished = false;
      this.pageIndex = 1;
      this.pageSize = 10;
      this.courseList = [];
      this.getCourselist();
    },
    //校区列表
    getSubjectlist() {
      let method = "post";
      let data = {
        data: {},
      };
      this.$services.getSubject({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          this.navList = list;
        } else {
          //Dialog({ message: res.msg });
        }
      });
    },
    getCourselist() {
      let method = "post";
      let data = {
        data: {
          campus_id: this.school.campus_id,
          grade: this.grade.config_id,
          subject: this.subject,
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
          this.totalCount = res.totalCount;
          if (this.courseList.length >= res.totalCount) {
            this.finished = true;
            this.loading = false;
          }
        } else {
          //Dialog({ message: res.msg });
        }
      });
    },
    toDetails(type, classId) {
      let routeType = "";
      if (type === "1") {
        routeType = "wait";
      } else {
        routeType = "done";
      }
      this.$router.push(
        `/coursePage/courseDetail?type=${routeType}&id=${classId}`
      );
    },
    changeTab(index, item) {
      this.subject = item.config_id;
      this.tabIndex = index;
      this.onRefresh();
    },
  },
  components: {
    tabBar,
  },
  computed: {
    ...mapState(["grade", "school"]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  background: #ffffff;
  padding-top: 25px;
  position: sticky;
  top: 0;
  .top_wrap {
    padding: 0 17px;
    display: flex;
    align-items: center;
    height: 23px;
    position: relative;
    margin-bottom: 12px;

    .grade_wrap {
      display: flex;
      align-items: center;
      height: 100%;
      line-height: 100%;
    }
    .tips {
      font-size: 23px;
      line-height: 23px;
      font-weight: 600;
      color: #333333;
    }
    .grade-tips {
      font-size: 0;
      height: 100%;
      margin-left: 11px;
      display: flex;
      align-items: center;
      padding-top: 6px;
      .grade {
        display: inline-block;
        color: #666666;
        font-weight: 600;
        font-size: 13px;
      }
      .down_icon {
        display: inline-block;
        width: 7px;
        height: 4px;
        background: url("../../assets/images/home/down.svg");
        background-size: cover;
        margin-left: 6px;
      }
    }

    .shop_icon {
      width: 22px;
      height: 20px;
      display: inline-block;
      background: url("../../assets/images/course/shopping-car.png");
      background-size: cover;
      position: absolute;
      right: 17px;
    }
  }
  .nav {
    width: 100%;
    height: 33px;
    line-height: 33px;
    padding: 0 11px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    li {
      display: inline-block;
      font-size: 14px;
      color: #999999;
      text-align: center;
      padding: 0 11px;
      text-align: center;
      vertical-align: top;
    }
    li:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
      background: #ffffff;
    }
    .isActive {
      font-size: 15px;
      font-weight: 600;
      color: #333333;
    }
  }
}
.wrap {
  .bread-crumb {
    display: flex;
    margin: 22px 0;
    padding: 0 19px;
    justify-content: space-between;
    .left {
      display: flex;
      span:first-child {
        font-size: 12px;
        color: #333333;
      }
      span:last-child {
        font-size: 12px;
        margin-left: 8px;
        color: #e94831;
        img {
          width: 7px;
          height: 11px;
          margin-left: 10px;
        }
      }
    }
    .right {
      font-size: 12px;
      color: #333333;
      img {
        width: 10px;
        height: 12px;
      }
    }
  }
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
</style>
