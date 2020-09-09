<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div class="student_wrap">
      <div class="student_msg">
        <div class="msg_wrap">
          <img src="../../assets/images/my/person.jpg" alt />
          <div class="name_wrap">
            <p class="name">{{msg.name}}</p>
            <p class="grade">{{msg.grade}}</p>
          </div>
          <i class="icon_login">当前登录</i>
        </div>
        <p class="id_wrap">ID: {{msg.id}}</p>
        <p class="address_wrap">
          <i class="icon_address"></i>
          <span>{{msg.address}}</span>
        </p>
      </div>
      <p class="title">其他学员</p>
      <div class="change_wrap">
        <img src="../../assets/images/my/person.jpg" alt />
        <div class="name_wrap">
          <p class="name">{{msg2.name}}</p>
          <p class="grade">{{msg2.grade}}</p>
        </div>
        <p class="btn">点击切换</p>
      </div>
      <p class="add_btn" @click='goRoute("/myPage/addStudent")'>添加学员</p>
      <p class="most_student">最多可关联3名学员</p>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      routeName:'/myPage/index',
      title: "我的学员",
      msg: {
        name: "肖剑",
        grade: "初二",
        id: "571020073138343",
        address: "古墩学习中心",
      },
      msg2: {
        name: "花花",
        grade: "初三",
      },
    };
  },
  components: {
    navBar,
  },
  methods:{
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
  }
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
    background: url("../../assets/images/my/student_bg.png");
    background-size: cover;
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
    padding: 23px 20px 28px 20px;
    color: #2c3540;
    position: relative;
    img {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      margin-right: 6px;
    }
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
    }
    .grade {
      font-size: 12px;
      color: #666666;
      line-height: 12px;
    }
    .btn {
      position: absolute;
      right: 20px;
      width: 75px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid #e94831;
      text-align: center;
      line-height: 24px;
      color: #e94831;
      font-size: 12px;
    }
  }
  .student_msg {
    padding: 22px 0 0 20px;
    color: #fff;
  }
  .msg_wrap {
    display: flex;
    align-items: center;
    position: relative;
    img {
      width: 40px;
      height: 40px;
      box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.05);
      margin-right: 16px;
      border-radius: 100%;
    }
    .name {
      font-size: 16px;
      line-height: 23px;
      text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      font-weight: 500;
    }
    .grade {
      font-size: 12px;
      line-height: 16px;
    }
    .icon_login {
      width: 62px;
      height: 20px;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 10px 0px 0px 10px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      font-style: normal;
    }
  }
  .id_wrap {
    margin: 23px 0 14px 0;
    font-size: 18px;
    line-height: 23px;
  }
  .address_wrap {
    display: flex;
    align-items: center;
    i {
      background: url("../../assets/images/my/white_address.svg");
      background-size: cover;
      display: inline-block;
      width: 10px;
      height: 12px;
      margin-right: 8px;
    }
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
  .add_btn {
    width: 115px;
    height: 34px;
    border-radius: 35px;
    border: 1px solid #e94831;
    text-align: center;
    line-height: 34px;
    font-size: 12px;
    color:#e94831;
    margin:0 auto;
    margin-top:42px;
    margin-bottom: 10px;
  }
  .most_student {
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    color: #9C9C9C;
  }
}
</style>
