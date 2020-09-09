<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div class="top_wrap">
      <div class="city_wrap">
        <p class="title">当前选择城市</p>
        <p class="city">{{city.name}}</p>
      </div>
      <div class="positioning_wrap">
        <p class="title">当前定位城市</p>
        <p class="new_wrap">
          <i class="city">杭州</i>
          <span class="new">重新定位</span>
        </p>
      </div>
    </div>
    <van-index-bar :index-list="indexList" highlight-color="#E94831">
      <div v-for="(item, index) in cityList" :key="index">
      <van-index-anchor :index="item.title"  />
      <van-cell
        :title="value.name"
        v-for="(value, index) in item.list"
        :key="value.id"
        :class="{'active':city.id===value.id}"
        @click="addClassname(value)"
      />
      </div>
      
    </van-index-bar>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { IndexBar, IndexAnchor } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      routeName:'',
      title: "选择城市",
      indexList: ["A", "B", "C", "D", "E", "F", "G"],
      cityList: [
        {
          title: "A",
          list: [
            { id: 1, name: "安徽省1" },
            { id: 2, name: "安徽省2" },
            { id: 3, name: "安徽省3" },
          ],
        },
        {
          title: "B",
          list: [
            { id: 4, name: "北京省1" },
            { id: 5, name: "北京省2" },
            { id: 6, name: "北京省3" },
          ],
        },
        {
          title: "C",
          list: [
            { id: 7, name: "重庆省1" },
            { id: 8, name: "重庆省2" },
            { id: 9, name: "重庆省3" },
          ],
        },
        {
          title: "D",
          list: [
            { id: 10, name: "大连1" },
            { id: 11, name: "大连2" },
            { id: 12, name: "大连3" },
          ],
        },
        {
          title: "E",
          list: [
            { id: 13, name: "鄂城1" },
            { id: 14, name: "鄂城2" },
            { id: 15, name: "鄂城3" },
          ],
        },
        {
          title: "F",
          list: [
            { id: 16, name: "福建省1" },
            { id: 17, name: "福建省2" },
            { id: 18, name: "福建省3" },
          ],
        },
        {
          title: "G",
          list: [
            { id: 19, city: "甘肃省1" },
            { id: 20, city: "甘肃省2" },
            { id: 21, city: "甘肃省3" },
          ],
        },
      ],
    };
  },
  components: {
    navBar,
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    addClassname(value) {
      this.$store.commit("city", value);
    },
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
    width: 100%;
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
/deep/ .van-index-bar__sidebar {
  margin-top: 90px;
}
/deep/ .van-index-bar {
  margin-top: 200px;
  position: relative;
  z-index: 100;
  background: #fff;
}
.active span{
  color:#e94831
}
</style>
