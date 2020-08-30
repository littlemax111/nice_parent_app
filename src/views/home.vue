<template>
<div>
  <div>
    <van-tabbar v-model="active" active-color="#D81F13" inactive-color="#666666">

      <van-tabbar-item replace to="/index">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? iconList[1] : iconList[0]"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dynamic">
        <span>动态</span>
        <template #icon="props">
          <img :src="props.active ? iconList[3] : iconList[2]"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? iconList[5] : iconList[4]"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>






</div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return{
        active: 0,
        iconList: [
          './static/one_static.svg',
          './static/one_checked.svg',
          './static/two_static.svg',
          './static/two_checked.svg',
          './static/three_static.svg',
          './static/three_checked.svg',
        ]
      }
    },
    watch:{
      '$route' (to, from) {// 对路由变化作出响应
          // console(to,from)
        console.log(this.$route.path);
        // if(to.path == 'index'){
        //   this.active = 0
        // }else if(from.path == 'firstLevelList'){
        //   this.active = 1
        // }else if(from.path == 'mine'){
        //   this.active = 2
        // }
      }
    },
    created(){

    },
    mounted(){
      console.log(this.$route.path)
      if(this.$route.path == '/index'){
        this.active = 0
      }else if(this.$route.path == '/dynamic'){
        this.active = 1
      }else if(this.$route.path == '/mine'){
        this.active = 2
      }
    },
    methods:{
      // tabbarActive(){
      //   const href = window.location.href.split("#/")[1];
      //   for(let i=0;i<4;i++){
      //     console.log(href)
      //     // if(href==this.tabbar[i]){
      //     //   this.active=i;
      //     // }
      //   }
      // },
    }
  }
</script>

<style scoped>

</style>
