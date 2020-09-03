<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div class="top_wrap">
      <div class="city_wrap">
        <p class="title">当前选择城市</p>
        <p class="city">杭州</p>
      </div>
      <div class="positioning_wrap">
        <p class="title">当前定位城市</p>
        <p class="new_wrap">
          <i class="city">杭州</i>
          <span class="new">重新定位</span>
        </p>
      </div>
    </div>
    <van-index-bar :index-list="indexList" highlight-color='#E94831'>
      <van-index-anchor index="A" />
      <van-cell title="安徽省" />
      <van-cell title="安徽省" />
      <van-cell title="安徽省" />

      <van-index-anchor index="B" />
      <van-cell title="北京省" />
      <van-cell title="北京省" />
      <van-cell title="北京省" />
      <van-index-anchor index="C" />
      <van-cell title="重庆省" />
      <van-cell title="重庆省" />
      <van-cell title="重庆省" />
      <van-index-anchor index="D" />
      <van-cell title="大连" />
      <van-cell title="大连" />
      <van-cell title="大连" />
      <van-index-anchor index=E />
      <van-cell title="鄂城" />
      <van-cell title="鄂城" />
      <van-cell title="鄂城" />
      <van-index-anchor index=F />
      <van-cell title="福建省" />
      <van-cell title="福建省" />
      <van-cell title="福建省" />
      <van-index-anchor index=G />
      <van-cell title="甘肃省" />
      <van-cell title="甘肃省" />
      <van-cell title="甘肃省" />
    </van-index-bar>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { IndexBar, IndexAnchor } from "vant";

export default {
  data() {
    return {
      title: "选择城市",
      indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G',],
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
  .top_wrap {
    padding: 20px 16px;
    border-bottom: 9px solid #f6f6f6;
    position: absolute;
    width:100%;
    z-index: 1000;
  }
  .positioning_wrap {
    margin-top: 27px;
  }
  .title {
    font-size: 12px;
    line-height: 16px;
    color: #a2a7b5;
  }

  .city {
    width: 100px;
    height: 34px;
    background: #f7f7f7;
    border-radius: 21px;
    font-size: 15px;
    color: #232b36;
    line-height: 34px;
    text-align: center;
    font-style: normal;
    margin-top: 12px;
  }
  .new_wrap {
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    align-items: center;
  }
  .new {
    font-size: 12px;
    color: #e94831;
  }
}
/deep/ .van-index-bar__sidebar{
  margin-top:90px;
}
/deep/ .van-index-bar{
  margin-top:200px;
  position: relative;
  z-index: 100;
  background: #fff;
}
</style>
