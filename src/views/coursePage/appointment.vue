<template>
  <div>
    <navBar :title="title" class="nav_wrap"></navBar>
    <div class="out-appointment">
      <div class="course-message">
        <h2>初二数学寒假精品课长期班</h2>
        <p>
          <span>时间</span>
          <span>09月02日-01月07日</span>
        </p>
      </div>
      <div class="person-message">
        <ul>
          <li>
            <p>联系方式</p>
            <p>187****9210</p>
          </li>
          <li>
            <p>孩子姓名</p>
            <p>肖剑</p>
          </li>
          <li>
            <p>学习中心</p>

            <van-field
              readonly
              clickable
              name="picker"
              :value="value"
              placeholder="请选择学习中心"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
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

export default {
  data() {
    return {
      title: "我要预约",
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
     goAppointment(){
        this.$router.push(`/coursePage/appointmented`)
    }
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
