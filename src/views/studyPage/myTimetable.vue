<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="wrap">
      <van-calendar
      :title='calenderTitle'
        :poppable="false"
        :show-confirm="false"
        :row-height="42"
        :formatter="formatter"
        :show-mark="false"
        :style="{ height: '320px' }"
      />
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Swipe, SwipeItem, Calendar } from "vant";
export default {
  data() {
    return {
      title: "我的课表",
      calenderTitle:''
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {},
  mounted() {
    
  },

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    classTab(val) {
      this.tabIndex = val;
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

      if ((year === nowYear) && (month === nowMonth) && (date === nowaDate)) {
       day.text = '今';
      }

      if(date % 5 === 0){
        day.bottomInfo = 'select';
      }
      return day;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
}
/deep/ .van-calendar__header-title{
  display: none;
}
/deep/ .van-calendar__selected-day{
      width: 42px;
    height: 42px;
    color: #fff;
    background-color: #fe5e5d;
    border-radius: 100%;
}
/deep/ .van-calendar__bottom-info{
  bottom: 0.16rem;
    font-size: 0;
    background: #fe5e5d;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    left: 50%;
    border-radius: 100%;
}
/deep/ .van-calendar__weekday{
 color: #858c96;
}
</style>
