<template>
  <div>
    <div class="navWrap">
      <van-nav-bar
        @click-left="backFn"
        :right-text="status"
        @click-right="onClickRight"
      >
        <template #title>
          <span class="navTitle single_wrap">{{ title }}</span>
        </template>
        <template #left>
          <i class="icon_back"></i>
        </template>
      </van-nav-bar>
    </div>
    <div class="wrap">
      <ul class="list">
        <van-checkbox-group
          v-model="result"
          ref="checkboxGroup"
          checked-color="#E94831"
        >
          <li v-for="(item, index) in courseList" :key="index">
            <van-checkbox name="a">
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
              </div></van-checkbox
            >
          </li>
        </van-checkbox-group>
      </ul>
    </div>
    <div class="delete-bar">
      <div class="l-left" v-if="flag">
        <span>合计：</span>
        <span>
          <i class="tag">￥</i>
          <i class="price">3180</i>
        </span>
      </div>
      <div class="right" v-if="flag" @click="goOrderDetail">
        去结算
      </div>
      <div class="left" v-if="!flag">
        <van-checkbox v-model="checked" checked-color="#E94831"
          >全选</van-checkbox
        >
      </div>
      <div class="right" v-if="!flag">
        删除（2）
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  data() {
    return {
      flag: true,
      title: "购物单",
      result: [],
      checked: false,
     
      courseList: [
        {
          id: 1,
          tips: "面授",
          courseNmae: "初二数学寒假精品课",
          time: "09月02日-01月07日",
          couse: "10课时",
          place: "滨江学习中心",
          total: 1299,
        },
        {
          id: 2,
          tips: "在线",
          courseNmae: "初二语文寒假精品课",
          time: "09月02日-01月07日",
          couse: "12课时",
          place: "滨江学习中心",
          total: 2099,
        },
      ],
    };
  },
  computed:{
      status:function(){
          console.log(this.flag)
          return this.flag?'编辑':'完成'
      }
  },
  methods: {
    onClickRight() {
      this.flag = !this.flag;
    },
    toDetails(val) {
      let type = val % 2 === 0 ? "done" : "wait";
      this.$router.push(`/coursePage/courseDetail?type=${type}`);
    },
    backFn() {
      this.$router.go(-1); //返回上一层
    },
     goOrderDetail(){
        this.$router.push(`/coursePage/orderDetail?type=waitPay`)
    }
  },
};
</script>
<style lang="scss" scoped>
.navWrap {
  position: sticky;
  top: 0;
  .icon_back {
    width: 9px;
    height: 15px;
    display: inline-block;
    background: url("../../assets/images/home/back.svg");
    background-size: cover;
  }
  /deep/ .van-nav-bar__text {
    color: #232b36;
  }
  .navTitle {
    color: #232b36;
    font-size: 18px;
    font-weight: 400;
  }
}
.wrap {
  ul.list {
    width: 100%;
    height: auto;
    padding: 0 20px 56px;
    li {
      width: 100%;
      height: 156px;
      padding: 23px 15px 0;
      margin: 15px 0;
      background: #ffffff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      /deep/ .van-checkbox__label {
        width: 100%;
      }
      /deep/ .van-checkbox__icon {
        margin-bottom: 25px;
      }
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
            font-weight: 500;
            color: #333333;
          }
        }
        .time {
          margin: 15px 0 10px;
          overflow: hidden;
          font-size: 0px;
          line-height: 13px;
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
.delete-bar {
  width: 100%;
  height: 56px;
  padding: 0 15px;
  border: 1px solid #efefef;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l-left {
    font-size: 0;
    span:first-child {
      font-size: 14px;
      color: #333333;
    }
    span:last-child {
      font-size: 0;

      i.tag {
        font-style: normal;
        font-size: 10px;
        color: #e94831;
      }
      i.price {
        font-style: normal;
        font-size: 24px;
        font-family: DINEngschrift;
        color: #e94831;
      }
    }
  }
  .left {
    /deep/ .van-checkbox__label {
      color: #333333;
      font-size: 14px;
    }
    .van-checkbox__icon {
      margin-bottom: 0;
    }
  }
  .right {
    width: 111px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 20px;
    text-align: center;
    color: #ffffff;
    background: #e94831;
  }
}
.save-bar {
  width: 100%;
  height: 56px;
  border: 1px solid #efefef;
  background: #ffffff;
  position: fixed;
  bottom: 0;
}
</style>
