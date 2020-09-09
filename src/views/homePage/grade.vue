<template>
  <div class="wrap">
    <div class="top_wrap">
      <van-icon name="cross" color="#9BA1B0" class="close_icon" size="18" @click="backFn()" />
      <div class="city_wrap" @click='goRoute("/homePage/city")'>
        <span class="city">{{city}}</span>
        <i class="down_icon"></i>
      </div>
    </div>
    <h3 class="title">选择在读年级</h3>
    <p class="sub_title">为了更精准推荐课程，请选择孩子所在年级</p>
    <div>
      <ul class="select_wrap">
        <li v-for="(item, index) in gradeList" :key="index">
          <p>{{item.big}}</p>
          <div class="grade_item">
            <i
              v-for="(value, index) in item.small"
              :key="value.id"
              :class="{'active':grade.id===value.id}"
              @click="addClassname(value)"
            >{{value.name}}</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Icon } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      city: "杭州市",
      gradeList: [
        {
          big: "小学",
          small: [
            { name: "一年级", id: 1 },
            { name: "二年级", id: 2 },
            { name: "三年级", id: 3 },
            { name: "四年级", id: 4 },
            { name: "五年级", id: 5 },
            { name: "六年级", id: 6 },
          ],
        },
        {
          big: "初中",
          small: [
            { name: "初一", id: 7 },
            { name: "初二", id: 8 },
            { name: "初三", id: 9 },
          ],
        },
        {
          big: "高中",
          small: [
            { name: "高一", id: 10 },
            { name: "高二", id: 11 },
            { name: "高三", id: 12 },
          ],
        },
      ],
    };
  },
  watch: {},
  created() {},
  mounted() {},
  computed: {
    ...mapState(["grade"]),
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    backFn() {
      this.$router.go(-1); //返回上一层
    },
    addClassname(value) {
      this.$store.commit("grade", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  height: 100vh;
  padding: 14px 20px 0 20px;
  .top_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .city_wrap {
    display: flex;
    align-items: center;
  }
  .city {
    display: inline-block;
    color: #232b36;
    font-weight: 400;
    font-size: 14px;
  }
  .down_icon {
    display: inline-block;
    width: 7px;
    height: 4px;
    background: url("../../assets/images/home/down.svg");
    background-size: cover;
    margin-left: 9px;
  }
  .title {
    font-size: 27px;
    font-weight: 600;
    color: #232b36;
    line-height: 38px;
    margin-top: 26px;
    margin-bottom: 6px;
  }
  .sub_title {
    font-size: 14px;
    color: #a2a7b5;
    margin-bottom: 48px;
  }
  .select_wrap {
    li {
      margin-bottom: 22px;
      p {
        font-size: 15px;
        color: #a2a7b5;
        margin-bottom: 12px;
      }
      .grade_item {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
      }
      i {
        display: inline-block;
        width: 105px;
        height: 44px;
        background: #f7f7f7;
        border-radius: 21px;
        font-style: normal;
        font-size: 15px;
        text-align: center;
        line-height: 44px;
        color: #232b36;
        margin-bottom: 10px;
      }
      .active {
        color: #e94831;
        background: rgba(233, 72, 49, 0.1);
        border-radius: 43px;
      }
    }
  }
}
</style>
