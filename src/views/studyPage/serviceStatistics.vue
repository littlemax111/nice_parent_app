<template>
  <div>
    <navBar :title="title"></navBar>
    <div class="wrap">
      <div class="pic-logo">
        <img :src="studyPic" alt="" />
      </div>
      <ul class="list">
        <li>
          <span>累计学习次数</span>
          <span>100</span>
        </li>
        <li>
          <span>累计答题道数</span>
          <span>219</span>
        </li>
        <li>
          <span>累计服务天数</span>
          <span>100</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";

import { Icon } from "vant";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "服务统计",
      studyPic: require("../../assets/images/study/study.png"),
      list: [],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrap {
  .pic-logo {
    width: 100%;
    height: 236px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 170px;
    }
  }
  ul.list {
    width: 100%;
    height: auto;
    padding-left: 20px;
    background: #ffffff;
    li {
      width: 100%;
      height: 57px;
      padding: 0 28px 0 0;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:first-child {
        font-size: 16px;
        color: #333333;
      }
      span:last-child {
        font-size: 24px;
        font-family: DINPro-Medium, DINPro;
        font-weight: 600;
        color: #e94831;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
</style>
