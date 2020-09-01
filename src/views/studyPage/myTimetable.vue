<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="wrap">
      <van-calendar
      :title='calenderTitle'
        :poppable="false"
        :show-confirm="false"
        :row-height="42"
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
  mounted() {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    classTab(val) {
      this.tabIndex = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
}
.van-calendar__header-title{
  display: none;
}
</style>
