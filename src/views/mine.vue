<template>
    <div>
      <div class="person-card">
        <div class="user">{{getName(userName)}}</div>
        <div class="user-msg">
            <p>{{userName}}</p>
            <p>{{orgName}}</p>
        </div>
      </div>
      <!--<van-cell is-link @click="toSecondLevel">-->
        <!--<template slot="title">-->
          <!--<img class="icon" :src="iconList[0]" alt="">-->
          <!--<span class="custom-title">互动留言</span>-->
        <!--</template>-->
      <!--</van-cell>-->
      <!-- <van-cell is-link @click="$router.push('/changePassword')">
        <template slot="title">
          <img class="icon" :src="iconList[1]" alt="">
          <span class="custom-title">修改密码</span>
        </template>
      </van-cell> -->
      <div class="logout" @click="outLogin">退出登录</div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
   data(){
     return {
       iconList:[
         './static/message.png',
         './static/changePass.png'
       ],
       userName:'',
       orgName:''
     }
   },
    mounted(){
      let user = localStorage.getItem('user');
      if(user) {
        user = JSON.parse(user);
        this.userName = user.name;
        this.orgName = user.org_name;
      }
      // BM.appointment.webview.setTitleBarVisible(true)
    },
    methods:{
      getName(val){
        if(val && val.length>2){
          return val.substring(val.length-2)
        }else {
          return ''
        }
      },
      outLogin(){
        Dialog.confirm({
          title: '提示',
          message: '是否退出登录？'
        }).then(() => {
          let method = 'get';
          let data = {};
          this.$services.SsoLogout({method,data}).success((res) => {
            if(res.success){
              localStorage.removeItem('user');
              this.$router.push('/login');
            }else {
              Dialog({ message: res.msg});
            }
          });
        }).catch(() => {

        });

      },
      toSecondLevel(){
        this.$router.push(`/secondLevelList?discussion_id=[6,8]&discussion_name=互动留言`)
      },
    }
  }
</script>

<style lang="scss" scoped>
    .person-card{
      width: 100%;
      height: 96px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      background: #fff;
      .user{
        width: 63px;
        height: 63px;
        border-radius: 100%;
        background: #1890ff;
        font-size: 23px;
        color: #fff;
        text-align: center;
        line-height: 63px;
        margin-right: 16px;
      }
      p:first-child{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        line-height: 16px;
        margin-bottom: 8px;
      }
      p:last-child{
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #666666;
        line-height: 13px;
      }
    }
    img.icon{
      width: 18px;
      height: 18px;
      vertical-align: sub;
      margin-right: 6px;
    }
    .custom-title{
      font-size: 15px;
      color: #333333;
    }
    .logout{
      height: 44px;
      width: 100%;
      background: #ffffff;
      margin-top: 8px;
      font-size: 15px;
      color: #333333;
      text-align: center;
      line-height: 44px;
    }
</style>
