<template>
  <div>
    <div class="header">
      <div class="person-message">
        <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)" />
        <h2>初二数学寒假精品课</h2>
        <h3>01月04日-01月06日</h3>
        <div class="teacher-message">
          <img :src="teacherPic" alt />
          <span>主讲老师</span>
        </div>
        <ul class="modules clear">
          <li v-for="(item, index) in navList" :key="index" @click="toMoudles(item.router)">
            <img :src="item.icon" alt />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="wrap">
        <ul class="list">
          <li class="clear" v-for="(item, index) in courseList" :key="index" @click="toDetails" >
            <div class="l">
              <p class="course-nmae single_wrap">{{ item.courseNmae }}</p>
              <p class="time single_wrap">{{ item.time }}</p>
            </div>
            <div class="r">
              <van-icon name="arrow" class="arrow" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 筛选弹窗 -->
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
      teacherPic: require("../../assets/images/study/teacher-pic.png"),
      navList: [
        {
          name: "学习资料",
          icon: require("../../assets/images/study/couser-nav-one.svg"),
          router: "/studyPage/learningMaterials",
        },
        {
          name: "作业管理",
          icon: require("../../assets/images/study/couser-nav-two.svg"),
          router: "/studyPage/jobManagement",
        },
        {
          name: "课堂报告",
          icon: require("../../assets/images/study/couser-nav-three.svg"),
          router: "/studyPage/classReport",
        },
      ],
      courseList: [
        {
          courseNmae: "第1讲 数学 · 有理数和数轴",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第2讲 数学 · 绝对值和比较大小",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第3讲 数学 · 有理数的加减",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第4讲 数学 · 无理数和3d轴",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第4讲 数学 · 无理数和3d轴",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第4讲 数学 · 无理数和3d轴",
          time: "2月21日 · 周五 19:00-21:00",
        },
        {
          courseNmae: "第4讲 数学 · 无理数和3d轴",
          time: "2月21日 · 周五 19:00-21:00",
        },
      ],
      screenList: [
        {
          type: "类型",
          small: [
            "全部",
            "面授1对1",
            "面授小班",
            "面授大班",
            "在线1对1",
            "在线小班",
            "在线大班",
          ],
        },
        {
          type: "科目",
          small: [
            "全部",
            "语文",
            "数学",
            "英语",
            "科学",
            "物理",
            "化学",
            "生物",
            "政治",
            "历史",
            "地理",
            "文综",
          ],
        },
        {
          type: "状态",
          small: ["全部", "进行中", "已完结"],
        },
      ],
      selectIcon: require("../../assets/images/study/screen.svg"),
    };
  },
  methods: {
    toDetails() {
      window.location.href=`${this.$route.query.link}`
      //plus.screen.lockOrientation("landscape");
      //this.$router.push(`/studyPage/details?link=${this.$route.query.link}`)
    },
    toMoudles(url) {
      if (url) {
        this.$router.push(`${url}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 280px;
  font-size: 0;
  background: #e94831;
  padding: 15px 17px;
  position: relative;
  .arrow-left {
    font-size: 20px;
    color: #ffffff;
  }
  h2 {
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 11px;
    margin-top: 10px;
  }
  h3 {
    height: 18px;
    font-size: 13px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .teacher-message {
    font-size: 0;
    display: flex;
    align-items: center;
    img {
      width: 33px;
      height: 33px;
      margin-right: 8px;
    }
    span {
      font-size: 12px;
      color: #ffffff;
      border-radius: 11px;
      background: rgba(251, 241, 241, 0.49);
      padding: 4px 10px;
    }
  }
  .modules {
    margin-top: 17px;
    li {
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-right: 47px;
      img {
        width: 20px;
      }
      p {
        height: 17px;
        line-height: 17px;
        font-size: 12px;
        color: #ffffff;
        margin-top: 10px;
      }
    }
  }
  .wrap {
    width: 345px;
    position: absolute;
    top: 235px;
    height: calc(100vh - 235px);
    overflow-y: auto;
    background: #f5f5f5;
    ul.list {
      width: 100%;
      height: auto;
      padding: 0 0 0;
      li {
        width: 100%;
        height: 90px;
        margin-bottom: 17px;
        padding: 17px 16px 0 21px;
        background: #ffffff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        .l {
          width: 80%;
          p.course-nmae {
            height: 21px;
            font-size: 15px;
            color: #2c3540;
          }
          p.time {
            height: 17px;
            font-size: 12px;
            margin-top: 8px;
            color: #777777;
          }
        }
        .r {
          width: 20%;
          text-align: right;
          margin-top: 18px;
          .arrow {
            color: #999999;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
