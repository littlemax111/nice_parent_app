<template>
  <div class="main-box">
    <div class="login-bg">
      <img :src="imgList[0]" alt="">
      <div>驻马店文智库</div>
    </div>

    <div class="login-box">
      <div class="user-line">
        <div>
          <img :src="imgList[1]" alt="">
        </div>
        <input type="text" placeholder="请输入账号" v-model="username" @input="getFullText" @blur="changeBlur">
      </div>
      <div class="user-line">
        <div>
          <img :src="imgList[2]" alt="">
        </div>
        <input type="password"  placeholder="请输入密码" v-model="password" @input="getFullText" @blur="changeBlur">
      </div>
      <div class="user-line">
        <div>
          <img :src="imgList[3]" alt="">
        </div>
        <input type="text"  placeholder="请输入验证码" style="float: left;
width: 80%;" v-model="valid_code" @input="getFullText" @blur="changeBlur">
        <img :src="YZM" alt="" @click="getYZM">
      </div>
      <p class="login-bar" @click="loginIn" :style="{opacity:fullLogin}">登录</p>
    </div>
  </div>
</template>

<script>

  import { Dialog } from 'vant';
  export default {
    data() {
      return {
        imgList:[
          './static/banner.png',
          './static/account.svg',
          './static/password.svg',
          './static/yzm.svg',
        ],
        username:'',
        password:'',
        valid_code:'',
        code:'',
        YZM:window.LOCAL_CONFIG.API_HOME+'/api/GetValidImg.png',
        fullLogin:0.2
      }
    },
    watch: {

    },
    created() {

      // window.system.default.aa();
      // BM.appointment.system.getUser(res=>{
      //    alert(res.account)
      //  })
      // window.BM.appointment.system.getUser(res=>{
      //   alert(res.account)
      // })
    },
    mounted() {
      // BM.appointment.system.getUser(res=>{
      //   alert(res.account)
      // })

    },

    methods: {
      changeBlur(){
        window.scroll(0,0);//失焦后强制让页面归位
      },
      getYZM(){
        let date = new Date();
        this.YZM=window.LOCAL_CONFIG.API_HOME+'/api/GetValidImg.png?v='+date.getTime();
      },
      getFullText(){
        if(this.username && this.password && this.valid_code) {
          this.fullLogin = 1
        }
      },
      loginIn() {
      //  if(this.fullLogin == 0.2){
      //    return
      //  }
       let that = this;
        let method = "post";
        let data = {
          username: this.username,
          // sso:true
          password: this.password,
          valid_code: this.valid_code
        };
        this.$services.login({method, data}).success((res) => {
          if(res.success){
            localStorage.setItem('user',JSON.stringify(res.data))
           this.$router.replace(`index`);
          }else {
            that.getYZM();
            Dialog({ message: res.msg});
          }
        })
      },
    },

  }

</script>
<style lang="scss" scoped>
  .main-box{
    width: 100%;
    height: calc(100vh);
    background: #ffffff;
    .login-bg{
      width: 100%;
      height: 172px;
      position: relative;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      div{
        font-family: FZZZHONGJW--GB1-0;
        font-size: 20px;
        color: #D81F13;
        background: #FFFFFF;
        box-shadow: 0 2px 10px 0 rgba(0,76,41,0.09);
        border-radius: 30px;
        width: 150px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: absolute;
        left: 50%;
        margin-left: -75px;
        bottom: -30px;
      }
    }
    .login-box{
      padding: 0 28px;
      margin-top: 76px;
    }
    .user-line{
      border-bottom: 1px solid #ebebeb;
      height: 40px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      margin-top: 20px;
      div{
        width: 20px;
        img{
          width: 20px;
          height: 20px;
        }
      }
      input{
        margin-left: 12px;
        border: none;
        flex: 1;
        height: 40px;
        font-size: 14px;
        outline: 0;
        color: #999;
      }
      span{
        border: 1px solid #ebebeb;
        display: inline-block;
        width: 20%;
        color: #1DA164;
        font-size: 20px;
        float: left;
        text-align:center
      }
    }
    .login-bar{
      margin-top: .64rem;
      background: #D81F13;
      border-radius: 20px;
      height: 40px;
      line-height: 40px;
      box-shadow: 0 2px 10px 0 rgba(78,0,0,0.20);
      text-align: center;
      font-size: 16px;
      color: #FFFFFF;
    }
  }
  input::-webkit-input-placeholder{
    color: #BBBBBB;
  }

  input::-moz-placeholder{
    color: #BBBBBB;
  }
  input:-ms-input-placeholder{
    color: #BBBBBB;
  }
  input:-webkit-autofill {
    background-color: #FAFFBD;
    background-image: none;
    color: #000;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
</style>
