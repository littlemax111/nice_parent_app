<template>
  <div>
    <navBar :title="title"></navBar>
    <div class="wrap">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="left">
            <img :src="pdfIcon" alt="" />
            <span class="single_wrap">{{ item.name }}</span>
          </div>
          <div class="right">
            <van-icon name="arrow" class="arrow" />
          </div>
        </li>
      </ul>
    </div>
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
      title: "学习资料",
      pdfIcon: require("../../assets/images/study/pdf.svg"),
      list: [
        {
          name: "第1讲 数学 · 有理数和数轴",
        },
        {
          name: "第2讲 数学 · 绝对值和比较大小",
        },
        {
          name: "第3讲 数学 · 有理数的加减",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrap {
  padding-bottom: 50px;
  margin-top: 10px;
  ul {
    width: 100%;
    height: auto;
    padding-left: 20px;

    background: #ffffff;
    li {
      width: 100%;
      height: 47px;
      padding-right: 18px;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        width: 80%;
        img {
          width: 17px;
          margin-right: 18px;
        }
        span {
          font-size: 16px;

          color: #232b36;
        }
      }
      .right {
        .arrow {
          color: #999999;
          font-size: 20px;
        }
      }
    }
    li:last-child {
      border-bottom: none;
    }
  }
}
</style>
