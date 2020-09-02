<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="video_wrap">
      <video src="../../assets/images/home/case.mp4" controls></video>
    </div>
    <div class="message_wrap">
      <div class="title_wrap">
        <h3 class="title">如何高效学习英语</h3>
        <i class="share"></i>
      </div>
      <p class="teacher">
        <span>讲师：顾颖</span>
        <span class="shu">|</span>
        <span>2000人观看</span>
      </p>
    </div>
    <div class="teacher_wrap">
      <h3 class="common_title">
        <i></i>
        <span>讲师介绍</span>
      </h3>
      <div class="detail_wrap">
        <p class="name">
          <span>田宏杰</span>
          <span class="shu">|</span>
          <span>北京师范大学资深心理学老师</span>
        </p>
        <p class="detail">
          国家二级心理咨询师，20年实战心理教学经验，帮
          助上万家庭解决孩子问题，被誉为“最了解儿童心
          理”之一
        </p>
      </div>
    </div>
    <div class="teacher_wrap">
      <h3 class="common_title">
        <i></i>
        课程内容
      </h3>
      <div class="detail_wrap">
        <div>
          <p class="name">
            <span>1、孩子的心理状况分析</span>
          </p>
          <p class="detail">在老师的带领下，分析孩子的心理问题，从孩子的描述中查找孩子的心理状况。</p>
        </div>

        <div>
          <p class="name">
            <span>2、挫折教育的误区</span>
          </p>
          <p class="detail">多给孩子制造挫折,他才能愈挫愈勇。很多父母觉得现在的小孩,没吃过苦,没遇到什么挫折。</p>
        </div>
      </div>
    </div>
    <div class="recommend">
      <h3 class="common_title">
        <i></i>
        课程推荐
      </h3>
      <ul class="class_list">
        <li
          v-for="(item, index) in classList"
          :key="index"
          @click='goRoute("/homePage/classDetail")'
        >
          <img :src="item.img" alt />
          <p class="title class='single_wrap'">{{item.title}}</p>
          <p class="sub_title">{{item.sub_title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "趣味跟读",
      classList: [
        {
          img: require("../../assets/images/home/class1.png"),
          title: "如何高效学习英语",
          sub_title: "讲师:顾颖",
        },
        {
          img: require("../../assets/images/home/class2.png"),
          title: "如何学习动能定理",
          sub_title: "讲师:章进",
        },
        {
          img: require("../../assets/images/home/class3.png"),
          title: "疯狂的动物实验室",
          sub_title: "讲师:薛可可",
        },
        {
          img: require("../../assets/images/home/class4.png"),
          title: "高中语法入门指南",
          sub_title: "讲师:刘婷",
        },
      ],
    };
  },
  components: {
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  min-height: 100vh;
  .video_wrap {
    height: 210px;
    video {
      width: 100%;
    }
  }
  .message_wrap {
    padding: 17px 20px;
    border-bottom: 1px solid #f2f2f2;
    .title_wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .share {
      width: 18px;
      height: 19px;
      display: inline-block;
      background: url("../../assets/images/home/share.svg");
      background-size: cover;
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: #050505;
      line-height: 25px;
      margin-bottom: 10px;
    }
    .teacher {
      color: #a1a5bb;
      font-size: 13px;
      line-height: 18px;
    }
    .shu {
      padding: 0 5px;
    }
  }
  .teacher_wrap {
    border-bottom: 1px solid #f2f2f2;
  }
  .common_title {
    line-height: 25px;
    font-weight: 500;
    color: #050505;
    padding-left: 20px;
    margin-top: 22px;
    font-size: 18px;
    height: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 19px;
    i {
      width: 4px;
      height: 18px;
      background: #e94831;
      border-radius: 4px;
      display: inline-block;
      padding-top: 5px;
      margin-right: 6px;
    }
  }
  .detail_wrap {
    padding: 0 33px;
    .name {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: #050505;
      margin-bottom: 8px;
    }
    .detail {
      color: #666666;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .shu {
      color: #e5e5e5;
    }
  }
  .class_list {
    padding:0 20px 40px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 160px;
      height: 151px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      opacity: 0.9;
      margin-bottom: 15px;
    }
    img {
      width: 100%;
      height: 90px;
    }
    .title {
      font-size: 14px;
      color: #050505;
      padding-left: 12px;
    }
    .sub_title {
      color: #999999;
      font-size: 12px;
      padding-left: 12px;
    }
  }
}
</style>
