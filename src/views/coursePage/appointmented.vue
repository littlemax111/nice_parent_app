<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="appointment-status">
      <img :src="image" alt="" />
      <h2>预约成功</h2>
      <p>我们的咨询顾问在24小时内与您联系</p>
    </div>
    <div class="course-message">
      <ul>
        <li>
          <span>课程名称</span>
          <span>初二数学寒假精品课长期班</span>
        </li>
        <li>
          <span>课程时间</span>
          <span>2020.09.02-2021.01.07</span>
        </li>
        <li>
          <span>课程课次</span>
          <span>3课次</span>
        </li>
        <li>
          <span>咨询点</span>
          <span>滨江中赢学习中心</span>
        </li>
        <li>
          <span>授课老师</span>
          <span>待定</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "预约成功",
      image: require("../../assets/images/course/appoint-success.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
.appointment-status {
  padding: 40px 0 35px;
  text-align: center;
  img {
    width: 50px;
  }
  h2 {
    height: 25px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    margin-bottom: 6px;
  }
  p {
    height: 15px;
    font-size: 12px;
    color: #999999;
  }
}
.course-message {
  padding-left: 19px;
  background: #ffffff;
  ul {
    li {
      width: 100%;
      height: 57px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 20px;
      span:first-child {
        font-size: 16px;
        color: #333333;
      }
      span:last-child {
        font-size: 14px;
        color: #666666;
      }
    }
    li:last-child {
      border-bottom: none;
    }
  }
}
</style>
