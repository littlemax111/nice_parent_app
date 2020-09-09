<template>
  <div class='wrap'>
    <nav-bar :title='title' :routeName="routeName"></nav-bar>
    <no-data :content='content'></no-data>
  </div>
</template>

<script>
import noData from "../../components/noData.vue"
import navBar from "../../components/navBar.vue"


export default {
  data() {
    return {
      routeName:'',
      title:'纳思网校',
      content:'当前暂无内容'
    };
  },
  components:{
    noData,
    navBar
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f6f6f6;
  height: 100vh;
}
</style>
