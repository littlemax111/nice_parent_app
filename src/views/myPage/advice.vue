<template>
  <div>
    <nav-bar :title="title"></nav-bar>
    <div class="wrap">
      <h2>所在学习中心</h2>
      <div class="location">
        <van-icon name="location-o" class="location-o" />
        <span>古墩学习中心</span>
      </div>

      <h2>建议</h2>
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="280"
        placeholder="请输入你的问题或建议（280字以内）"
        show-word-limit
      />
      <h2>类型<span>(选填)</span></h2>
      <ul class="clear">
        <li v-for="(item,index) in typeList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="pay-bar">提&nbsp;&nbsp;交</div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { Field } from "vant";

export default {
  data() {
    return {
      title: "意见反馈",
      message: "",
      typeList:[
        {
          name:'校区环境',
        },
         {
          name:'服务质量',
        },
         {
          name:'教学态度',
        },
         {
          name:'教学质量',
        }
      ]
    };
  },
  components: {
    navBar,
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  h2 {
    font-size: 13px;
    color: #777777;
    height: 41px;
    padding-top: 18px;
    padding-left: 16px;
  }
  .location {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    background: #ffffff;
    display: flex;
    align-items: center;
    .location-o {
      font-size: 14px;
      color: #2c3540;
      margin-right: 12px;
    }
    span {
      font-size: 14px;
      color: #2c3540;
    }
  }
  ul {
    padding: 0 15px;
    li {
      font-size: 12px;
      color: #a5a5a5;
      background: #e9e9e9;
      float: left;
      padding: 6px 15px;
      border-radius: 13px;
      margin-right: 11px;
      margin-bottom: 8px;
    }
    li:nth-child(4n){
      margin-right: 0;
    }
  }
}
</style>
