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
          @click="changeTab(index)"
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
            {{school.title}}
            <img :src="moreIcon" alt />
          </span>
        </div>
        <div class="right" @click="$router.push(`/homePage/school`)">
          <img :src="addressIcon" alt  />
          更换校区
        </div>
      </div>
      <ul class="list">
        <li
          v-for="(item, index) in courseList"
          :key="index"
          @click="toDetails(index)"
        >
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
     <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from "../../components/tabBar.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      navList: [
        {
          name: "推荐",
        },
        {
          name: "数学",
        },
        {
          name: "英语",
        },
        {
          name: "科学",
        },
        {
          name: "语文",
        },
        {
          name: "政治",
        },
        {
          name: "历史",
        },
        {
          name: "生物",
        },
      ],
      isActive: true,
      tabIndex:0,
      courseList: [
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
      addressIcon: require("../../assets/images/course/address.png"),
      moreIcon: require("../../assets/images/course/more.png"),
    };
  },
  methods: {
    toDetails(val) {
      let type = val % 2 === 0 ? "done" : "wait";
      this.$router.push(`/coursePage/courseDetail?type=${type}`);
    },
    changeTab(index){
      this.tabIndex = index
    }
  },
  components: {
    tabBar,
  },
  computed: {
    ...mapState(["grade","school"]),
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
    white-space:nowrap;
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
    li:first-child{
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
