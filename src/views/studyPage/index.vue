<template>
  <div>
    <div class="header">
      <div class="person-message">
        <h2>HI，肖剑同学</h2>
        <h3>纳思书院与你一起进步</h3>
        <ul class="modules">
          <li v-for="(item, index) in navList" :key="index" @click="goRouter(item.router)">
            <img :src="item.icon" alt />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <div class="select-nav">
        <div>我的课程</div>
        <div @click="show = true">
          <img :src="selectIcon" alt />
          <span>筛选</span>
        </div>
      </div>
      <ul class="list" v-if="flag">
        <li v-for="(item, index) in courseList" :key="index">
          <div class="top">
            <div class="time">
              <div class="ing-l-status" v-if="item.flag"></div>
              <span class="l-status" v-if="!item.flag">今日</span>
              <span class="l-time">{{ item.Ltime }}</span>
            </div>
            <span class="over-status" v-if="item.flag">已完结</span>
            <span class="ing-status" v-if="!item.flag">进入课堂</span>
          </div>
          <div class="bottom" @click="toCourse(item)">
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
        </li>
      </ul>
      <div v-if="!flag">
        <div class="dataWrap">
          <img src="../../assets/images/home/no_data.png" alt />
        </div>
        <p class="content">{{ content }}</p>
        <div class="choose-course-btn">去选课</div>
      </div>
    </div>

    <!-- 筛选弹窗 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%', width: '310px' }">
      <ul class="select_wrap">
        <h3>筛选</h3>
        <li v-for="(item, index) in screenList" :key="index">
          <p>{{ item.type }}</p>
          <div class="grade_item">
            <i
              v-for="(value, index) in item.small"
              :key="index"
              :class="{ active: index === 0 }"
            >{{ value }}</i>
          </div>
        </li>
      </ul>
      <div class="operation-bar clear">
        <div class="l" @click="(flag = true), (show = false)">重置</div>
        <div class="r" @click="(flag = false), (show = false)">确定</div>
      </div>
    </van-popup>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import noData from "../../components/noData.vue";
import tabBar from "../../components/tabBar.vue";
import { Popup } from "vant";
export default {
  components: {
    navBar,
    noData,
    tabBar,
  },
  data() {
    return {
      flag: true,
      content: "暂无课程，快去选课吧~",
      show: false,
      navList: [
        {
          name: "我的课表",
          icon: require("../../assets/images/study/nav-one.svg"),
          router: "/studyPage/myTimetable",
        },
        {
          name: "服务统计",
          icon: require("../../assets/images/study/nav-two.svg"),
          router: "/studyPage/serviceStatistics",
        },
        {
          name: "学习报告",
          icon: require("../../assets/images/study/nav-three.svg"),
          router: "/studyPage/studyReport",
        },
        {
          name: "待看回放",
          icon: require("../../assets/images/study/nav-four.svg"),
          router: "/studyPage/playBack",
        },
      ],
      courseList: [
        {
          link:'https://demo.chnnice.com/agora1vn/',
          flag: false,
          Ltime: "19:00-20:00",
          tips: "在线",
          courseNmae: "初三物理秋季小班 ",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          link:'https://demo.chnnice.com/agora1v1/',
          flag: false,
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初三化学秋季1对1",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
        {
          link:'',
          flag: false,
          Ltime: "2020.04.20 ",
          tips: "面授",
          courseNmae: "初三数学秋季小班",
          time: "每周日下午3点",
          couse: "6课时",
          place: "滨江学习中心",
          total: 2299,
        },
        {
           link:'',
          flag: false,
          Ltime: "2020.04.20 ",
          tips: "面授",
          courseNmae: "初三英语秋季大班",
          time: "每周日下午5点",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
        {
           link:'',
          type:3,
          flag: true,
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初二数学秋季大班",
          time: "每周日下午5点",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
        {
           link:'',
          type:3,
          flag: true,
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初一英语秋季小班",
          time: "每周日下午5点",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
        {
           link:'',
          flag: true,
          Ltime: "2020.04.20 ",
          tips: "面授",
          courseNmae: "初二数学秋季1对1",
          time: "每周六下午5点",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
        {
           link:'',
          flag: true,
          Ltime: "2020.04.20 ",
          tips: "面授",
          courseNmae: "初二英语秋季大班",
          time: "每周六上午9点",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
      ],
      screenList: [
        {
          type: "类型",
          small: [
            "全部",
            "面授1对1",
            "面授小班",
            "面授大班",
            "在线1对1",
            "在线小班",
            "在线大班",
          ],
        },
        {
          type: "科目",
          small: [
            "全部",
            "语文",
            "数学",
            "英语",
            "科学",
            "物理",
            "化学",
            "生物",
            "政治",
            "历史",
            "地理",
            "文综",
          ],
        },
        {
          type: "状态",
          small: ["全部", "进行中", "已完结"],
        },
      ],
      selectIcon: require("../../assets/images/study/screen.svg"),
    };
  },
  methods: {
    goRouter(url) {
      this.$router.push(`${url}`);
    },
    toCourse(item) {
      if (item.tips !== "面授") {
        this.$router.push(`/studyPage/courseList?link=${item.link}`);
      } 
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 150px;
  background: url("../../assets/images/my/bg.png") no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 22px 0 0 20px;
  position: sticky;
  top: 0;
  h2 {
    height: 28px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }
  h3 {
    height: 20px;
    font-size: 14px;
    color: #ffffff;
    margin-top: 5px;
  }
  .modules {
    width: 337px;
    height: 93px;
    position: absolute;
    left: 19px;
    bottom: -46px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 17px 0;
      img {
        width: 30px;
        height: 30px;
      }
      p {
        height: 16px;
        font-size: 12px;
        color: #4a4a4a;
      }
    }
  }
}
.wrap {
  padding: 0 21px;
  .select-nav {
    margin: 70px 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:first-child {
      font-size: 18px;
      font-weight: 600;
      color: #333333;
    }
    div:last-child {
      font-size: 0;
      span {
        font-size: 14px;
        color: #979ea7;
      }
      img {
        width: 12px;
        margin-right: 4px;
      }
    }
  }
  ul.list {
    padding-top: 16px;
    width: 100%;
    height: calc(100vh - 312px);
    overflow-y: auto;
    li {
      width: 100%;
      height: 155px;
      padding: 0 15px 0;
      margin-bottom: 15px;
      background: #ffffff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      .top {
        width: 100%;
        height: 46px;
        border-bottom: 1px solid #e2e2e2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
          display: flex;
          align-items: center;
          .ing-l-status {
            width: 5px;
            height: 5px;
            border-radius: 100%;
            background: #fa4500;
          }
          .l-status {
            width: 29px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            background: #7c8592;
            border-radius: 4px 1px 4px 1px;
            font-size: 10px;
            color: #ffffff;
          }
          .l-time {
            font-size: 12px;
            color: #979ea7;
            margin-left: 7px;
          }
        }
        .over-status {
          font-size: 14px;
          color: #979ea7;
        }
        .ing-status {
          font-size: 14px;
          color: #fa4500;
        }
      }
      .bottom {
        padding-top: 18px;
        .title {
          height: 16px;
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
    }
  }
  .dataWrap {
    width: 150px;
    height: 125px;
    margin: 0 auto;
    margin-top: 41px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    color: #a1a5bb;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }
  .choose-course-btn {
    width: 115px;
    height: 35px;
    line-height: 35px;
    background: #e94831;
    border-radius: 17px;
    font-size: 12px;
    text-align: center;
    margin: 16px auto 0;
    color: #ffffff;
  }
}
.screen {
  h2 {
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
  }
}
.select_wrap {
  padding: 18px 15px 20px 16px;
  height: calc(100vh - 66px);
  overflow-y: auto;
  h3 {
    height: 25px;
    font-size: 20px;
    color: #333333;
    margin-bottom: 15px;
  }
  li {
    margin-bottom: 22px;
    p {
      height: 25px;
      line-height: 25px;
      font-size: 18px;
      margin-bottom: 15px;
      color: #333333;
    }
    .grade_item {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }
    i {
      display: inline-block;
      width: 81px;
      height: 28px;
      background: #f7f7f7;
      border-radius: 17px;
      font-style: normal;
      font-size: 14px;
      text-align: center;
      line-height: 28px;
      color: #232b36;
      margin-bottom: 15px;
    }
    .active {
      color: #e94831;
      background: rgba(233, 72, 49, 0.1);
      border-radius: 43px;
    }
  }
}
.operation-bar {
  padding-left: 16px;
  position: fixed;
  bottom: 20px;
  div {
    width: 135px;
    height: 34px;
    line-height: 32px;
    text-align: center;
    border-radius: 17px;
    font-size: 14px;
    border: 1px solid #e94831;
  }
  .l {
    color: #e94831;
    margin-right: 10px;
  }
  .r {
    color: #ffffff;
    background: #e94831;
  }
}
</style>
