<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <van-cell-group class='mt'>
      <van-field v-model="value" label="" placeholder="请输入在读学校" />
    </van-cell-group>
    <div class="pay-bar" @click="goAppointment">保存</div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "在读学校",
      value:''
    };
  },
  components: {
    navBar,
  },
  methods: {
    goAppointment() {
      this.$router.go(-1);//返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f6f6f6;
  height: 100vh;
  .mt{
    margin-top:9px;
  }
}
</style>
