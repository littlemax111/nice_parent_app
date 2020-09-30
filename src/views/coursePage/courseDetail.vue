<template>
  <div>
    <navBar :title="title" class="nav_wrap" :routeName="routeName"></navBar>
    <div class="wrap">
      <div class="out-course">
        <div class="course-message">
          <h2>{{info.title}}</h2>
          <p>
            <span>时间</span>
            <span>{{info.begin_time}}-{{info.end_time}}</span>
          </p>
          <h3 >
            <span v-if='info.class_mode!="1V1"'>￥</span>
            <span v-if='info.class_mode!="1V1"'>{{info.price}}</span>
          </h3>
        </div>
        <div class="pic">
          <img :src="imgList[0]" alt="" />
          <img :src="imgList[1]" alt="" />
          <img :src="imgList[2]" alt="" />
          <img :src="imgList[3]" alt="" />
          <img :src="imgList[4]" alt="" />
        </div>
      </div>
      <div class="appointment-bar">
        <div class="customer-icon" @click="show = true">
          <img :src="customerIcon" alt="" />
          <p>客服</p>
        </div>
        <div class="customer-service" v-if="type === 'done'">
          <div class="l" @click="goCar">加入选课单</div>
          <div class="r" @click="goBying">立即购课</div>
        </div>
        <div
          class="customer-service-wait"
          v-if="type === 'wait'"
          @click="goAppointment"
        >
          <div class="m">我要预约</div>
        </div>
      </div>
      <!-- 客服弹窗 -->
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      info:{},
      routeName:'/coursePage/index',
      type: this.$route.query.type,
      title: "课程详情",
      courseName:this.$route.query.courseName,
      imgList: [
        require("../../assets/images/course/course-one.png"),
        require("../../assets/images/course/course-two.png"),
        require("../../assets/images/course/course-three.png"),
        require("../../assets/images/course/course-four.png"),
        require("../../assets/images/course/course-five.png"),
      ],
      customerIcon: require("../../assets/images/course/customer.png"),
      show: false,
      actions: [ {
        name:'呼叫  400 688 1614',
        color:'rgb(14, 153, 255)'
      }],
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {
    this.getDetail();
  },
  mounted() {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    getDetail() {
      let method = "post";
      let id = this.$route.query.id;
      let data = {
        data: {
          class_id: id,
        },
      };
      this.$services.classesDetail({ method, data }).success((res) => {
        if (res.code === 200) {
          let info = res.data.class;
          this.info = info;
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
    goAppointment() {
      this.$router.push(`/coursePage/appointment?id=${this.info.class_id}`);
    },
    goBying() {
      this.$router.push(`/coursePage/byingCourseMessage`);
    },
    goCar() {
      this.$router.push(`/coursePage/courseCar`);
    },
    onSelect(){
      window.location.href = 'tel:010-123451'
    }
  },
};
</script>
<style lang="scss" scoped>
.out-course {
  margin-bottom: 10px;
  padding-bottom: 50px;
  .course-message {
    padding: 18px 20px 0;
    height: auto;
    background: #ffffff;
    margin-bottom: 10px;
    h2 {
      height: 32px;
      line-height: 32px;
      margin-bottom: 13px;
      font-size: 23px;
      font-weight: 600;
      color: #333333;
    }
    p {
      height: 20px;
      line-height: 20px;
      span:first-child {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        color: #999999;
      }
      span:last-child {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }
    }
    h3 {
      height: 54px;
      line-height: 54px;
      margin-top: 18px;
      border-top: 1px solid #e2e2e2;
      font-size: 0;
      span:first-child {
        font-size: 12px;
        color: #e94831;
      }
      span:last-child {
        font-size: 20px;
        font-weight: 600;
        color: #e94831;
      }
    }
  }
  .pic {
    img {
      display: block;
      width: 100%;
    }
  }
}
.appointment-bar {
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 20px 0 25px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  .customer-icon {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 19px;
      height: 19px;
    }
    p {
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      color: #333333;
    }
  }
  .customer-service {
    width: 261px;
    height: 44px;
    line-height: 44px;

    font-size: 14px;
    div.l {
      width: 50%;
      text-align: center;
      color: #e94831;
      border-radius: 22px 0px 0px 22px;
      border: 1px solid #e94831;
    }
    div.r {
      width: 50%;
      text-align: center;
      color: #ffffff;
      background: #e94831;
      border-radius: 0px 22px 22px 0px;
      border: 1px solid #e94831;
    }
  }
  .customer-service-wait {
    width: 130px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #e94831;
    border-radius: 22px;
    font-size: 14px;
    color: #ffffff;
  }
}
</style>
