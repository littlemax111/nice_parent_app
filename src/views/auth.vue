<!--<template>-->
  <!--<div class="main-box">-->
    <!--<van-overlay :show="show" @click="show = false">-->
    <!--<div class="wrapper" @click.stop>-->
      <!--<div class="block">-->
        <!--<van-loading type="spinner" color="#1989fa" />-->
      <!--</div>-->
    <!--</div>-->
  <!--</van-overlay>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import { Overlay,Dialog } from 'vant';-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--show:true,-->
        <!--username:''-->
      <!--}-->
    <!--},-->
    <!--watch: {-->
      <!--'$route' (to, from) {// 对路由变化作出响应-->

      <!--}-->
    <!--},-->
    <!--created() {-->
      <!--let user = localStorage.getItem('user');-->
      <!--if(user){-->
        <!--this.$router.push('/index')-->
      <!--}else{-->
        <!--BM.appointment.system.getUser(res=>{-->
          <!--this.username = res.account;-->
          <!--if(!this.username){-->
            <!--Dialog({ message: '您暂无查看权限'});-->
          <!--}else{-->
            <!--this.loginIn();-->
          <!--}-->
        <!--});-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->

    <!--},-->
    <!--methods: {-->
        <!--loginIn() {-->
              <!--let method = "post";-->
              <!--let data = {-->
                <!--username: this.username,-->
                <!--sso:true-->
              <!--};-->
              <!--this.$services.login({method, data}).success((res) => {-->

                <!--if(res.success){-->
                  <!--this.show = false;-->

                  <!--localStorage.setItem('user',JSON.stringify(res.data))-->
                 <!--this.$router.push(`index`);-->
                <!--}else {-->
                  <!--Dialog({ message: res.msg});-->
                <!--}-->
              <!--})-->
      <!--},-->
    <!--},-->

  <!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
  <!--.wrapper {-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--justify-content: center;-->
    <!--height: 100%;-->
  <!--}-->

  <!--.block {-->
    <!--width: 30px;-->
    <!--height: 30px;-->
    <!--margin: 0 auto;-->
  <!--}-->
<!--</style>-->


<template>
  <div class="main-box">
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-loading type="spinner" color="#1989fa" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import { Overlay } from 'vant';

  export default {
    data() {
      return {
        show:true
      }
    },
    watch: {
      '$route' (to, from) {// 对路由变化作出响应

      }
    },
    created() {

    },
    mounted() {
      localStorage.removeItem('user')
      this.$router.replace(`/login`)
    },
    methods: {

    },

  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 30px;
    height: 30px;
    margin: 0 auto;
  }
</style>
