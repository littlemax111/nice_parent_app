<template>
  <div>
    <navBar :title="title"></navBar>
    <div class="wrap" v-if="show">
      <ul class="list">
        <li v-for="(item, index) in courseList" :key="index">
          <div class="top">
            <div class="time">
              <div class="ing-l-status"></div>
              <span class="l-time">{{ item.Ltime }}</span>
            </div>
            <span class="over-status">待观看</span>
          </div>
          <div class="bottom" @click="toCourse">
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
    </div>
      <no-data :content="content" v-else></no-data>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import noData from "../../components/noData.vue";
import { Icon } from "vant";
export default {
  components: {
    navBar,
    noData
  },
  data() {
    return {
        show:true,
      title: "待看回放",
      content:'暂无回放课程',
      courseList: [
        {
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初二语文寒假精品课",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
        {
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初一英语寒假精品课",
          time: "09月02日-01月07日",
          couse: "6课时",
          place: "滨江学习中心",
          total: 2299,
        },
        {
          Ltime: "2020.04.20 ",
          tips: "在线",
          courseNmae: "初三科学寒假精品课",
          time: "09月02日-01月07日",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrap {
  padding: 23px 21px 0;
  ul.list {
    width: 100%;
    height: auto;
    padding: 0 0 50px;
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
          height: 18px;
          line-height: 18px;
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
    }
  }
}
</style>
