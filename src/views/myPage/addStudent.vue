<template>
  <div>
    <navBar :title="title"></navBar>
    <div class="out-appointment">
      <div class="course-message">
        <h2>绑定学员信息</h2>
        <p>请输入您在报名时的学员信息</p>
      </div>
      <div class="person-message">
        <ul>
          <li>
            <p>所在城市</p>
            <div class='item_wrap'>
              <van-field
                readonly
                clickable
                name="picker"
                :value="city"
                placeholder="请选择城市"
                @click="showPicker1 = true"
              />
              <van-popup v-model="showPicker1" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="cityList"
                  @confirm="onConfirm1"
                  @cancel="showPicker1 = false"
                />
              </van-popup>
              <i class="enter_arrow"></i>
            </div>
          </li>
          <li>
            <p>联系方式</p>
            <div class='item_wrap'>
              <van-field v-model="value" label="" placeholder="请输入姓名" />
            </div>
          </li>
          <li>
            <p>所在年级</p>
            <div class='item_wrap'>
              <van-field
                readonly
                clickable
                name="picker"
                :value="grade"
                placeholder="请选择年级"
                @click="showPicker2 = true"
              />
              <van-popup v-model="showPicker2" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="gradeList"
                  @confirm="onConfirm2"
                  @cancel="showPicker2 = false"
                />
              </van-popup>
              <i class="enter_arrow"></i>
            </div>
          </li>
          <li>
            <p>学习中心</p>
            <div class='item_wrap'>
              <van-field
                readonly
                clickable
                name="picker"
                :value="school"
                placeholder="请选择学习中心"
                @click="showPicker3 = true"
              />
              <van-popup v-model="showPicker3" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="schoolList"
                  @confirm="onConfirm3"
                  @cancel="showPicker3 = false"
                />
              </van-popup>
              <i class="enter_arrow"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pay-bar" @click="goAppointment">提交</div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      city:"",
      grade:'',
      school:"",
      title: "添加学员",
      value: "",
      cityList: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      gradeList: ["一年级", "二年级", "三年级", "四年级", "五年级"],
      schoolList: ["古墩学习中心", "滨江学习中心", "凤起学习中心", "拱墅学习中心", "下沙学习中心"],
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
    };
  },
  components: {
    navBar,
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    onConfirm1(value) {
      this.city = value;
      this.showPicker1 = false;
    },
    onConfirm2(value) {
      this.grade = value;
      this.showPicker2 = false;
    },
    onConfirm3(value) {
      this.school = value;
      this.showPicker3 = false;
    },
    goAppointment() {
      this.$router.push(`/coursePage/appointmented`);
    },
  },
};
</script>
<style lang="scss" scoped>
.out-appointment {
  padding: 31px 20px 0;
  background: #fff;
  height: calc(100vh - 50px);
  .course-message {
    h2 {
      line-height: 39px;
      margin-bottom: 6px;
      font-size: 28px;
      font-weight: 600;
      color: #2c3540;
    }
    p {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      line-height: 20px;
      color: #626b80;
    }
  }
  .enter_arrow {
    width: 8px;
    height: 13px;
    display: inline-block;
    background: url("../../assets/images/my/more.svg");
    background-size: cover;
  }
  .person-message {
    margin-top: 29px;
    ul {
      li {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
        padding-bottom: 5px;
        position: relative;
        p:first-child {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #9e9e9e;
          margin-bottom: 11px;
        }
        .item_wrap {
          width:100%;
          height: 25px;
          line-height: 25px;
          font-size: 18px;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
  padding:0;
}
/deep/ .van-cell::after {
  border-bottom: none;
}
</style>
