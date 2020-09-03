<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="wrap">
      <van-calendar
        :poppable="false"
        :show-confirm="false"
        :row-height="42"
        :formatter="formatter"
        @select="selectDay"
        :show-mark="false"
        :style="{ height: '320px' }"
      />
      <ul class="list" v-if="show">
        <li v-for="(item, index) in courseList" :key="index">
          <div class="top">
            <div class="time">
              <div class="ing-l-status"></div>
              <span class="l-time">{{ item.Ltime }}</span>
            </div>
            <span class="over-status">待观看</span>
          </div>
          <div class="bottom">
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
      <div v-if="!show">
        <div class="dataWrap">
          <img src="../../assets/images/home/no_data.png" alt />
        </div>
        <p class="content">{{ content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import noData from "../../components/noData.vue";
import { Calendar } from "vant";
export default {
  data() {
    return {
      title: "我的课表",
      show: false,
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
      ],
      content: "当日没有课程",
    };
  },
  components: {
    navBar,
    noData,
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    classTab(val) {
      this.tabIndex = val;
    },
    selectDay(val){
      let date = val.getDate()
       if (date % 5 === 0) {
        this.show = true;
      }else{
        this.show = false
      }
      // console.log(val.getDate())
      // if(val){
      //   val.getDate()
      // }
    },
    formatter(day) {
      //  console.log(day.date.getFullYear())

      const year = day.date.getFullYear();
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      const nowTime = new Date();
      const nowYear = nowTime.getFullYear();
      const nowMonth = nowTime.getMonth() + 1;
      const nowaDate = nowTime.getDate();
      // console.log(nowTime)

      if (year === nowYear && month === nowMonth && date === nowaDate) {
        day.text = "今";
      }

      if (date % 5 === 0) {
        day.bottomInfo = "select";
      }
      return day;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  ul.list {
    width: 100%;
    height: auto;
    padding: 18px 20px 0;
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
  .dataWrap {
    width: 150px;
    height: 123px;
    margin: 0 auto;
    margin-top: 61px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    color: #a1a5bb;
    font-size: 14px;
    text-align: center;
    margin-top: 23px;
  }
}
/deep/ .van-calendar__header-title {
  display: none;
}
/deep/ .van-calendar__selected-day {
  width: 42px;
  height: 42px;
  color: #fff;
  background-color: #fe5e5d;
  border-radius: 100%;
}
/deep/ .van-calendar__bottom-info {
  bottom: 0.16rem;
  font-size: 0;
  background: #fe5e5d;
  width: 4px;
  height: 4px;
  margin-left: -2px;
  left: 50%;
  border-radius: 100%;
}
/deep/ .van-calendar__weekday {
  color: #858c96;
}
</style>
