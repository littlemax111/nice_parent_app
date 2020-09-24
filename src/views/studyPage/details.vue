<template>
  <div class='wrap'>
    <navBar :title="title"></navBar>
    <div v-if="link" class="out-wrap">
      <iframe :src="link
" width="100%" height="100%" frameborder="0" allow="microphone;camera;midi;encrypted-media;"></iframe>
      
    </div>
   <div v-else>
      <div class="header">
      <h2>第1讲 数学 · 有理数和数轴</h2>
      <h3>01月04日-01月06日</h3>
      <div class="teacher-message">
        <img :src="teacherPic" alt="" />
        <span>
          <i>赵静</i>
          <i>主讲老师</i>
        </span>
      </div>
    </div>
    <div class="task">
      <h2>课堂任务</h2>
      <div class="record-card clear">
        <div class="l">
          <p>回放已生成</p>
          <p>2月21日 · 周五 19:00-21:00</p>
        </div>
        <div class="r">
          <p>观看回放</p>
        </div>
      </div>
      <div class="tips">
        <div class="record">
          <img :src="courseIcon" alt="" />
          <span>课堂报告</span>
        </div>
        <div class="status">已完成</div>
      </div>
    </div>
   </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Icon } from "vant";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "纳思云课堂",
      link:this.$route.query.link,
      teacherPic: require("../../assets/images/study/teacher-pic.png"),
      courseIcon: require("../../assets/images/study/course-red.svg"),
    };
  },
  destroyed(){
    alert(2)
    plus.screen.lockOrientation("portrait");
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.out-wrap{
  height: calc(100vw - 46px);
}
.header {
  width: 100%;
  min-height: 135px;
  background: #ffffff;
  font-size: 0;
  padding: 19px 19px 15px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #2c3540;
    margin-bottom: 11px;
  }
  h3 {
    height: 18px;
    line-height: 18px;
    font-size: 13px;
    color: #2c3540;
  }
  .teacher-message {
    font-size: 0;
    display: flex;
    align-items: center;
    margin-top: 22px;
    img {
      width: 33px;
      height: 33px;
      margin-right: 8px;
    }
    span {
      i {
        display: block;
        font-style: normal;
      }
      i:first-child {
        height: 15px;
        line-height: 15px;
        font-size: 11px;
        color: #777777;
      }
      i:last-child {
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        color: #bbbbbb;
        margin-top: 3px;
      }
    }
  }
}
.task {
  margin-top: 8px;
  padding: 20px 23px 17px;
  background: #ffffff;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #2c3540;
  }
  .record-card {
    background-color: #e94831;
    padding: 13px 17px 0 14px;
    margin: 25px 0;
    border-radius: 8px;
    height: 67px;
    .l {
      p:first-child {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
      }
      p:last-child {
        margin-top: 4px;
        height: 15px;
        line-height: 15px;
        font-size: 11px;
        color: #ffffff;
      }
    }
    .r {
      width: 73px;
      height: 24px;
      line-height: 24px;
      background: #ffffff;
      border-radius: 12px;
      margin-top: 10px;
      p {
        text-align: center;
        height: 15px;
        font-size: 11px;
        color: #e94831;
      }
    }
  }
}
.tips {
    display: flex;
    align-items: center;
    justify-content: space-between;
  .record {
      display: flex;
    img {
        width: 13px;
        margin-right: 6px;
    }
    span {
      font-size: 14px;
      color: #2c3540;
    }
  }
  .status {
    font-size: 14px;

    color: #979ea7;
  }
}
</style>
