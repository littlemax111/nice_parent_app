<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <ul class="list">
      <li class="photo">
        <span>孩子头像</span>
        <div class="img_wrap">
          <img :src="msg.img" alt />
          <i class="icon_arrow"></i>
        </div>
        <van-uploader>
          <div class="upload_wrap"></div>
        </van-uploader>
      </li>
      <li>
        <span>孩子姓名</span>
        <span class="icon_word">{{msg.name}}</span>
      </li>
      <li>
        <span>在读年级</span>
        <span class="icon_word">{{msg.grade}}</span>
      </li>
      <li>
        <span>所在城市</span>
        <span class="icon_word">{{msg.city}}</span>
      </li>
      <li @click="showPicker2 = true">
        <span>孩子性别</span>
        <p class="disflex">
          <span class="icon_word">{{msg.sex}}</span>
          <i class="icon_arrow ml"></i>
        </p>
      </li>
      <li @click='goRoute("/myPage/editSchool")'>
        <span>在读学校</span>
        <p class="disflex">
          <span class="icon_word">{{msg.school}}</span>
          <i class="icon_arrow ml"></i>
        </p>
      </li>
      <li>
        <span>学员编号</span>
        <span class="icon_word">{{msg.num}}</span>
      </li>
    </ul>
    <p class="contact">如需修改孩子姓名、在读年级和所在城市，请联系我们</p>
    <van-popup v-model="showPicker2" position="bottom">
      <van-picker
        show-toolbar
        :columns="sexList"
        @confirm="onConfirm2"
        @cancel="showPicker2 = false"
      />
    </van-popup>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "个人资料",
      sexList: ["女", "男"],
      showPicker2: false,
      msg: {
        img: require("../../assets/images/my/person.jpg"),
        name: "肖剑",
        grade: "初二",
        city: "杭州",
        sex: "女",
        school: "江南实验小学",
        num: "571020073138343",
      },
    };
  },
  components: {
    navBar,
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    onCancel() {
      //Toast('取消');
    },
    onConfirm2(value) {
      this.msg.sex = value;
      this.showPicker2 = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  min-height: 100vh;
  .disflex {
    display: flex;
    align-items: center;
  }
  .ml {
    margin-left: 14px;
  }
  .list {
    padding-left: 20px;
    li {
      height: 57px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-size: 16px;
      border-bottom: 1px solid #e2e2e2;
      padding-right: 22px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 7px;
      }
    }
    .photo {
      height: 92px;
      position: relative;
    }
    .icon_arrow {
      width: 8px;
      height: 13px;
      display: inline-block;
      background: url("../../assets/images/my/more.svg");
      background-size: cover;
    }
    .img_wrap {
      display: flex;
      align-items: center;
    }
    .icon_word {
      color: #666666;
      font-size: 14px;
    }
  }
  .contact {
    font-size: 12px;
    color: #666666;
    line-height: 16px;
    margin-top: 24px;
    padding-left: 20px;
  }
}
/deep/ .van-uploader {
  position: absolute;
  height: 92px;
  width: 355px;
  top: 0;
  left: 0;
}
/deep/ .van-uploader__input-wrapper{
  height: 92px;
  width: 355px;
}
</style>
