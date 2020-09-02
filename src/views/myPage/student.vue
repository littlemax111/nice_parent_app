<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="student_wrap">
      <div class="student_msg"></div>
      <p class="title">其他学员</p>
      <div class="change_wrap"></div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "我的学员",
    };
  },
  components: {
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .student_wrap {
    padding: 32px 15px;
  }
  .student_msg {
    height: 167px;
    background: linear-gradient(90deg, #eb4f37 0%, #f37255 100%);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 43px;
  }
  .title {
    font-size: 13px;
    color: #9c9c9c;
    line-height: 18px;
  }
  .change_wrap {
    height: 86px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background: #fff;
  }
}
</style>
