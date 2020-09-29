<template>
  <div>
    <navBar :title="title"  class="nav_wrap"></navBar>
    <div class="out-appointment">
      <div class="course-message">
        <h2>{{info.title}}</h2>
        <p>
          <span>时间</span>
          <span>{{info.begin_time}}-{{info.end_time}}</span>
        </p>
      </div>
      <div class="person-message">
        <ul>
          <li>
            <p>联系方式</p>
            <div class="item_wrap">
              <van-field
                v-model="mobile"
                label=""
                placeholder="请输入联系方式"
              />
            </div>
          </li>
          <li>
            <p>孩子姓名</p>
            <div class="item_wrap">
              <van-field
                v-model="student_name"
                label=""
                placeholder="请输入姓名"
              />
            </div>
          </li>
          <li>
            <p>学习中心</p>

            <van-field
              readonly
              clickable
              name="picker"
              :value="school.campus_name"
              placeholder="请选择学习中心"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                value='campus_name'
                :columns="campusList"
                value-key = "campus_name"
                @confirm="onConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>
          </li>
        </ul>
      </div>
    </div>
    <div class="tips">个人信息不会泄露，我们坚决保障您的隐私安全</div>
    <div class="pay-bar" @click="goAppointment">我要预约</div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Dialog } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "我要预约",
      value: "",
      showPicker: false,
      mobile: "",
      student_name: "",
      info:{},
      campus_id:'',
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {
    this.getDetail();
  },
  computed: {
    ...mapState(["grade", "school",'campusList']),
  },
  methods: {
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
    onConfirm(value) {
      this.campus_id = value.campus_id
      this.value = value.campus_name;
      this.showPicker = false;
    },
    goAppointment() {
      let method = "post";
      let token = localStorage.getItem("token");
      let data = {
        data: {
          mobile: this.mobile,
          child_name: this.student_name,
          campus_id: this.campus_id,
        },
        token: token,
      };
      this.$services.createReserve({ method, data }).success((res) => {
        if (res.code === 200) {
          this.$router.push(`/coursePage/appointmented`);
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.out-appointment {
  padding: 18px 20px 0;
  background: #fff;
  height: calc(100vh - 50px);
  .course-message {
    h2 {
      height: 31px;
      line-height: 31px;
      margin-bottom: 13px;
      font-size: 22px;
      font-weight: 600;
      color: #333333;
    }
    p {
      height: 20px;
      line-height: 20px;
      span:first-child {
        font-size: 14px;
        color: #999999;
      }
      span:last-child {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  .person-message {
    margin-top: 45px;
    ul {
      li {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
        padding-bottom: 5px;
        p:first-child {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #9e9e9e;
          margin-bottom: 11px;
        }
        p:last-child {
          height: 25px;
          line-height: 25px;
          font-size: 18px;
          color: #333333;
        }
      }
    }
  }
}
.tips {
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 78px;
  font-size: 12px;
  color: #999999;
}
/deep/ .van-cell {
  padding-left: 0;
  font-size: 18px;
}
/deep/ .van-cell::after {
  border-bottom: none;
}
</style>
