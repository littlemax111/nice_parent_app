<template>
  <div>
    <div class="header">
      <ul class="nav">
        <li
          :class="{ isActive: index === 0 }"
          v-for="(item, index) in navList"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="main-content">
      <ul class="list">
        <li v-for="(item, index) in courseList" :key="index">
          <div class="top">
            <div class="title">
              <span class="tips">{{ item.tips }}</span>
              <span class="course-name">{{ item.courseNmae }}</span>
            </div>
            <div class="time">
              <span class="time-tips">{{ item.time }}</span>
              <span class="course-tips">{{ item.couse }}</span>
            </div>
            <div class="place">{{ item.place }}</div>
          </div>
          <div class="bottom">
            <div class="price">
              <span class="tag">¥</span>
              <span class="total">{{ item.total }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "推荐",
        },
        {
          name: "数学",
        },
        {
          name: "英语",
        },
        {
          name: "科学",
        },
        {
          name: "语文",
        },
        {
          name: "政治",
        },
        {
          name: "历史",
        },
      ],
      isActive: true,
      courseList: [
        {
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          tips: "在线",
          courseNmae: "初二语文寒假精品课",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
        {
          tips: "面授",
          courseNmae: "初一英语寒假精品课",
          time: "09月02日-01月07日",
          couse: "6课时",
          place: "滨江学习中心",
          total: 2299,
        },
        {
          tips: "面授",
          courseNmae: "初三科学寒假精品课",
          time: "09月02日-01月07日",
          couse: "8课时",
          place: "滨江学习中心",
          total: 999,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  .nav {
    width: 100%;
    display: flex;
    height: 33px;
    line-height: 33px;
    li {
      flex: 1;
      font-size: 14px;
      color: #999999;
    }
    .isActive {
      font-size: 15px;
      font-weight: 500;
      color: #333333;
    }
  }
}
.main-content {
  ul.list {
    width: 100%;
    height: auto;
    padding: 0 20px;
    li {
      width: 100%;
      height: 155px;
      padding: 24px 15px 0;
      margin-bottom: 15px;
      background: #ffffff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      .top {
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 16px;
        .title {
          height: 17px;
          line-height: 17px;
          display: flex;
          .tips {
            font-size: 10px;
            color: #d94831;
            background: #fce4e0;
            border-radius: 2px;
            padding: 2px 4px;
            margin-right: 5px;
          }
          .course-name {
            font-size: 17px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
          }
        }
        .time {
          margin: 15px 0 10px;
          overflow: hidden;
          font-size: 0px;
          line-height: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #a2a7b5;
          .time-tips {
            font-size: 13px;
            padding-right: 10px;
            margin-right: 10px;
            border-right: 1px solid #e2e2e2;
          }
          .course-tips {
            font-size: 13px;
          }
        }
        .place {
          font-size: 13px;
          line-height: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #a2a7b5;
        }
      }
      .bottom {
        padding-top: 14px;
        font-size: 0;
        text-align: right;
        .price {
            line-height: 18px;
          span {
            color: #e94831;
          }
          span.tag {
            font-size: 13px;
            margin-right: 2px;
          }
          span.total {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
