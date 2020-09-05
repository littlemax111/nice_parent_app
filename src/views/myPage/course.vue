<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <ul class="tab_title">
        <li
          v-for="(item, index) in tabTitle"
          :key="index"
          :class="{'active':tabIndex==index,'mr':index===0}"
          @click="addClassname(index)"
        >{{item}}</li>
      </ul>
    <div v-if="courseList.length>0">
      <ul class="list">
        <li v-for="(item, index) in courseList" :key="index">
          <div class="status_wrap">
            <i class="status_ing" v-if="item.status===1">今日</i>
            <i class="status_end" v-if="item.status===0"></i>
            <span>{{item.classTime}}</span>
            <span class="status active" v-if="item.status===1">进行中</span>
            <span class="status" v-if="item.status===0">已完结</span>
          </div>
          <div class="top">
            <div class="title">
              <span class="tips">{{ item.tips }}</span>
              <span class="course-name">{{ item.courseNmae }}</span>
            </div>
            <div class="time">
              <span class="time-tips">{{ item.time }}</span>
              <span class="shu"></span>
              <span class="course-tips">{{ item.couse }}</span>
            </div>
            <div class="place">{{ item.place }}</div>
          </div>
        </li>
      </ul>
    </div>
    <no-data :content="content" v-else></no-data>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "我的课程",
      content: "您还没有相关课程哦~",
      courseList: [
        {
          status: 1,
          classTime: "19:00-20:00",
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          status: 0,
          classTime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初二语文寒假精品课",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
        {
          status: 1,
          classTime: "19:00-20:00",
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          status: 1,
          classTime: "19:00-20:00",
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          status: 1,
          classTime: "19:00-20:00",
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
      ],
      tabTitle: ["全部", "进行中", "已完结"],
      tabIndex: 0,
    };
  },
  components: {
    noData,
    navBar,
  },
  methods: {
    addClassname(index) {
      this.tabIndex = index;
      switch (index) {
        case 0:
          this.courseList = [
            {
              status: 1,
              classTime: "19:00-20:00",
              tips: "面授",
              courseNmae: "初二数学寒假精品课",
              time: "09月02日-01月07日",
              couse: "10课时",
              place: "滨江学习中心",
              total: 1299,
            },
            {
              status: 0,
              classTime: "2020.04.20 ",
              tips: "在线",
              courseNmae: "初二语文寒假精品课",
              time: "09月02日-01月07日",
              couse: "12课时",
              place: "滨江学习中心",
              total: 2099,
            },
          ];
          break;
        case 1:
          this.courseList = [
            {
              status: 1,
              classTime: "19:00-20:00",
              tips: "面授",
              courseNmae: "初二数学寒假精品课",
              time: "09月02日-01月07日",
              couse: "10课时",
              place: "滨江学习中心",
              total: 1299,
            },
          ];
          break;
        default:
          this.courseList = [
            {
              status: 0,
              classTime: "19:00-20:00",
              tips: "面授",
              courseNmae: "初二数学寒假精品课",
              time: "09月02日-01月07日",
              couse: "10课时",
              place: "滨江学习中心",
              total: 1299,
            },
          ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .tab_title {
    top:46px;
    position: sticky;
    z-index:100;
    width:100%;
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding: 0 33px;
    .active {
      color: #e94831;
      border-bottom: 3px solid #e94831;
    }
  }
  ul.list {
    width: 100%;
    height: auto;
    padding: 30px 20px 50px;
    .status_wrap {
      height: 46px;
      display: flex;
      align-items: center;
      color: #979ea7;
      font-size: 12px;
      border-bottom: 1px solid #e2e2e2;
      padding-right: 10px;
      position: relative;
      .status_ing {
        display: block;
        width: 29px;
        height: 16px;
        background: #7c8592;
        border-radius: 4px 1px 4px 1px;
        color: #fff;
        font-size: 10px;
        font-style: normal;
        text-align: center;
        line-height: 16px;
        margin-right: 3px;
       
      }
      .status_end {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #fa4500;
        border-radius: 100%;
        margin-right: 6px;
      }
      .status {
        font-size: 14px;
        position: absolute;
        right: 10px;
      }
      .active {
        color: #fa4500;
      }
    }
    li {
      width: 100%;
      height: 155px;
      padding: 0 0 15px 15px;
      margin-bottom: 15px;
      background: #ffffff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      .top {
        margin-top: 18px;
        padding-bottom: 16px;
        .title {
          height: 17px;
          line-height: 17px;
          display: flex;
          align-items: center;
          .tips {
            font-size: 10px;
            color: #d94831;
            background: #fce4e0;
            border-radius: 2px;
            display: inline-block;
            width: 29px;
            height: 18px;
            line-height: 18px;
            margin-right: 5px;
            text-align: center;
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
          line-height: 13px;
          color: #a2a7b5;
          display: flex;
          .time-tips {
            font-size: 13px;
            padding-right: 10px;
          }
          .shu {
            background: #e2e2e2;
            height: 11px;
            width: 1px;
            display: inline-block;
            margin-right: 10px;
            margin-top: 1px;
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
}
</style>
