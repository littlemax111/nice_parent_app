<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="wrap">
      <van-calendar
        :poppable="false"
        :show-confirm="false"
        :row-height="42"
        :show-mark="false"
        @confirm="onConfirm"
        type="range"
        :style="{ height: '320px' }"
      />
    </div>
    <div class="bottom_wrap">
      <div class="time_wrap">
        <p class="time">{{date}}</p>
        <p class="frequency">每周一1次课，共19次课</p>
      </div>
      <div class="btn" @click='$router.push(`/coursePage/byingCourseMessage`)'>确定</div>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Calendar } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "选择上课时间",
      date: "选择上课时间",
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
    };
  },
  components: {
    navBar,
  },
  watch: {},
  computed: {
    ...mapState(["classDate"]),
  },
  created() {},
  mounted() {},

  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.$store.commit("classDate", this.date);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
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
}
.bottom_wrap {
  position: fixed;
  bottom: 0;
  height: 56px;
  background: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px 0 22px;
  justify-content: space-between;
  .time {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
  }
  .frequency {
    font-size: 12px;
    color: #999999;
    line-height: 16px;
  }
  .btn {
    width: 111px;
    height: 40px;
    background: #e94831;
    border-radius: 20px;
    font-size: 14px;
    color:#fff;
    text-align: center;
    line-height: 40px;
  }
}
/deep/ .van-calendar__header-title {
  display: none;
}
/deep/ .van-calendar__day--start {
  width: 42px;
  height: 42px;
  color: #fff;
  background-color: #fe5e5d;
  border-radius: 100%;
}
/deep/ .van-calendar__day--end {
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
