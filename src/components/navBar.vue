<template>
  <div class="navWrap">
   <van-nav-bar  @click-left="backFn">
      <template #title>
        <span class='navTitle single_wrap'>{{title}}</span>
      </template>
      <template #left>
        <i class="icon_back"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: 'navBar',
  data () {
    return {
      
    }
  },
  props:["title"],
  methods:{
    backFn(){
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>

<style scoped lang="scss">
.navWrap{
  position: sticky;
  top: 0;
   .icon_back {
    width: 9px;
    height: 15px;
    display: inline-block;
    background: url("../assets/images/home/back.svg");
    background-size: cover;
  }
  .navTitle{
    color:#232B36;
    font-size: 18px;
    font-weight: 400;
  }
}

</style>
