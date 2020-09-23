<template>
  <div>
    <navBar :title="title"></navBar>
    <div>
      <div id="container"></div>
    </div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
// import AMap from 'AMap'
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "校区详情",
      map: "",
      lnglats: [
        {
          name: "古墩校区",
          position: [120.097325, 30.290273],
        },
        {
          name: "湖墅校区",
          position: [120.151427,30.286186],
        },
        {
          name: "文一校区",
          position: [120.103607,30.286963],
        },
        {
          name: "纳思未来教工路店",
          position:[120.136496,30.276837]
        }
      ],
    };
  },
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: false,
        center: [120.097325, 30.290273],
        zoom: 13,
      });
      let that = this;
      for (let i = 0; i < that.lnglats.length; i++) {
        let marker = new AMap.Marker({
          position: that.lnglats[i].position,
        });
        marker.setMap(that.map);
        // 设置label标签
        // label默认蓝框白底左上角显示，样式className为：amap-marker-label
        marker.setLabel({
          offset: new AMap.Pixel(20, 20), //设置文本标注偏移量
          content: that.lnglats[i].name, //设置文本标注内容
          direction: "top", //设置文本标注方位
        });
        // 给标记加一个点击事件，传入对应的参数
        marker.on("click", function (e) {
          that.onMarkerClick(that.lnglats[i].position,that.lnglats[i].name);
        });
      }
    },
    onMarkerClick(item,name) {
      let map = new AMap.Map("container", {
        resizeEnable: false,
        center: [120.097325, 30.290273],
        zoom: 13,
      });
      window.location.href = `https://m.amap.com/share/index/lnglat=${item[0]},${item[1]}&name=${name}`;
    },
  },
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100vh - 46px);
}
</style>
