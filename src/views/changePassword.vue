<template>
    <div>
      <div>
        <van-nav-bar
          title="修改密码"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <div>
        <van-field v-model="password" type="password" label="新密码" @input="getFullText" @blur="changeBlur"/>
        <!-- 输入密码 -->
        <van-field v-model="repeatPassword" type="password" label="确认密码" @input="getFullText" @blur="changeBlur"/>
      </div>
      <div class="save-bar" @click="changePass" :style="{opacity:fullLogin}">保存</div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
  import { Toast } from 'vant';
  export default {
    data(){
      return{
        password:'',
        repeatPassword:'',
        fullLogin:0.2
      }
    },
    methods:{
      changeBlur(){
        window.scroll(0,0);//失焦后强制让页面归位
      },
      onClickLeft(){
          this.$router.go(-1);
      },
      getFullText(){
        console.log('1')
        console.log(this.password,this.repeatPassword)
        if(this.password && this.repeatPassword) {
          this.fullLogin = 1
        }else{
          this.fullLogin = 0.2
        }
      },
      changePass(){
        if(this.fullLogin == 0.2){
          return
        }
        if(this.password !== this.repeatPassword){
          Toast('请填写相同密码！')
          return
        }
        Dialog.confirm({
          title: '标题',
          message: '修改密码后将强制退出登录，请确认！'
        }).then(() => {
          let that = this;
          let method = 'post';
          let data = {
            password:this.password
          };
          this.$services.ChangePassword({method,data}).success((res) => {
            if(res.success){
              that.outLogin();
            }else {
              Dialog({ message: res.msg});
            }
          });
        }).catch(() => {

        });

      },
      outLogin(){
        var method = 'get';
        var data = {};
        this.$services.SsoLogout({method,data}).success(function(res){
          if(res.success){
            localStorage.removeItem('user');
            this.$router.push('/login');
          }else {
            Dialog({ message: res.msg});
          }
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .save-bar{
    background: #D81F13;
    border-radius: 3px;
    height: 44px;
    line-height: 44px;
    width: 90%;
    margin: 20px auto;
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
  }
</style>
