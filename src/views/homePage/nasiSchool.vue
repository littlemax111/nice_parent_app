<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div>
      <img src="../../assets/images/home/nice1.png" alt />
    </div>
    <div class="fomr_wrap">
      <div class="form_list">
        <h3 class="title">免费领取价值299元测评课</h3>
        <div class="input_wrap">
          <input type="text" placeholder="请输入学生姓名" />
        </div>
        <div class="input_wrap">
          <input type="text" placeholder="请输入您的手机号" />
        </div>
        <div class="grade_wrap">
          <div class="garde_input" @click="gradePicker = true">
            <input type="text" placeholder="请选择年级" readonly v-model="grade" />
            <i class="icon_arrow"></i>
          </div>
          <div class="garde_input" @click="subjectPicker = true">
            <input type="text" placeholder="请选择科目" readonly v-model="subject" />
            <i class="icon_arrow"></i>
          </div>
        </div>
        <button class="btn">立即领取</button>
        <p class="committed">
          <i>*</i>纳思书院尊重并承诺保护您的个人信息
        </p>
      </div>
    </div>
    <div>
      <img src="../../assets/images/home/nice2.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice3.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice4.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice5.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice6.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice7.png" alt />
    </div>
    <div>
      <img src="../../assets/images/home/nice8.png" alt />
    </div>
    <van-popup v-model="gradePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="gardeConfirm"
        @cancel="gradePicker = false"
      />
    </van-popup>
    <van-popup v-model="subjectPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns2"
        @confirm="subjectConfirm"
        @cancel="subjectPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      routeName: "",
      title: "纳思网校",
      content: "当前暂无内容",
      grade: "",
      subject: "",
      columns: ["一年级", "二年级", "三年级", "四年级", "五年级"],
      gradePicker: false,
      columns2: ["英语", "数学", "语文", "物理", "化学"],
      subjectPicker: false,
    };
  },
  components: {
    noData,
    navBar,
  },
  methods: {
    gardeConfirm(value) {
      this.grade = value;
      this.gradePicker = false;
    },
    subjectConfirm(value) {
      this.subject = value;
      this.subjectPicker = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f6f6f6;
  min-height: 100vh;

  img {
    width: 100%;
    display: block;
  }
  .fomr_wrap {
    width: 375px;
    height: 300px;
    background: #FF4142;
    padding:0px 18px;
    .form_list {
      background: #ffffff;
      border-radius: 30px;
      height: 100%;
      padding: 19px 30px;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      color: #232b36;
      line-height: 28px;
      text-align: center;
      margin-bottom: 16px;
    }
    .input_wrap {
      width: 279px;
      height: 40px;
      line-height: 38px;
      font-size: 15px;
      border-radius: 3px;
      border: 1px solid #eeeeee;
      margin-bottom: 10px;
      padding-left: 14px;
    }
    input {
      border: none;
      width: 100%;
    }
    input::-webkit-input-placeholder {
      color: #bebec0;
    }
    input:-moz-placeholder {
      color: #bebec0;
    }
    input::-moz-placeholder {
      color: #bebec0;
    }
    input:-ms-input-placeholder {
      color: #bebec0;
    }
    .grade_wrap {
      display: flex;
      justify-content: space-between;
    }
    .garde_input {
      width: 134px;
      height: 40px;
      line-height: 38px;
      font-size: 15px;
      border-radius: 3px;
      border: 1px solid #eeeeee;
      margin-bottom: 10px;
      padding-left: 14px;
      position: relative;
    }
    .icon_arrow{
      background: url("../../assets/images/home/down_arrow.svg");
      background-size: cover;
      display: inline-block;
      width: 10px;
      height: 6px;
      margin-right: 5px;
      position: absolute;
      right:15px;
      top:16px;
    }
    .btn {
      width: 100%;
      height: 40px;
      background: #FF4142;
      border-radius: 20px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 17px;
      border: none;
      display: block;
    }
    .committed {
      font-size: 12px;
      line-height: 16px;
      margin-top:10px;
      text-align: center;
      color:#BEBEC0;
      i{
        color: #ff4142;
      }
    }
  }
}
</style>
