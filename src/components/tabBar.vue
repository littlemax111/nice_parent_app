<template>
  <div>
    <div class="tabbar_wrap">
      <van-tabbar v-model="active" active-color="#E94831" inactive-color="#A1A5BB">
        <van-tabbar-item icon="home-o" to="/homePage/index">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/coursePage/index">
          <span>选课</span>
          <template #icon="props">
            <img :src="props.active ? icon2.active : icon2.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/studyPage/index">
          <span>学习</span>
          <template #icon="props">
            <img :src="props.active ? icon3.active : icon3.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/myPage/index">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? icon4.active : icon4.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "tabBar",
  data() {
    return {
      active: 0,
      icon: {
        active: require("../assets/images/home/home_yes.png"),
        inactive: require("../assets/images/home/home_none.png"),
      },
      icon2: {
        active: require("../assets/images/home/course_yes.png"),
        inactive: require("../assets/images/home/course_none.png"),
      },
      icon3: {
        active: require("../assets/images/home/study_yes.png"),
        inactive: require("../assets/images/home/study_none.png"),
      },
      icon4: {
        active: require("../assets/images/home/my_yes.png"),
        inactive: require("../assets/images/home/my_none.png"),
      },
    };
  },
  props: [],
  // watch: {
  //   acitveIndex: (newVal, oldVal) => {
  //     console.log(newVal)
  //     this.active = newVal;
  //   },
  // },
 mounted(){
        if(this.$route.path === '/homePage/index'){
        this.active = 0
      }else if(this.$route.path === '/coursePage/index'){
        this.active = 1
      }else if(this.$route.path === '/studyPage/index'){
        this.active = 2
      }else if(this.$route.path === '/myPage/index'){
        this.active = 3
      }
    },
  methods: {},
};
</script>

<style scoped lang="scss">
.dataWrap {
  width: 150px;
  height: 123px;
  margin: 0 auto;
  margin-top: 182px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  color: #a1a5bb;
  font-size: 14px;
  text-align: center;
  margin-top: 23px;
}
</style>
