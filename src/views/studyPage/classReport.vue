<template>
  <div>
    <navBar :title="title"></navBar>
    <div>
      <img :src="test" alt="" />
    </div>
    <noData :content="content" v-show="false"></noData>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import noData from "../../components/noData.vue";
import { Icon } from "vant";
export default {
  components: {
    navBar,
    noData,
  },
  data() {
    return {
      title: "课堂报告",
      content: "暂无学习报告",
      test: require("../../assets/images/study/test.png"),
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
