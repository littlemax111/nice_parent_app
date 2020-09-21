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
      list:[
        {
          name:'古墩校区',
          position: [120.097325, 30.290273],
        },
        {
          name:'西湖校区',
          position: [120.097325, 30.290273],
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var map = new AMap.Map("container", {
        resizeEnable: false,
        center: [120.097325, 30.290273],
        zoom: 13,
      });
      var marker = new AMap.Marker({
        position: [120.097325, 30.290273],
      });
      marker.setLabel({
        content:'古墩校区'
      })
      map.add(marker);
      marker.on("click", this.onMarkerClick); //绑定click事件
    },
    onMarkerClick() {
      var d = new Date();
      var t0 = d.getTime();
      let lng = '120.097325';
      let lat = '30.290273.1';
      let name = '纳思学院古墩校区';
      window.location.href =
      `https://ditu.amap.com/regeo?lng=${lng}&lat=${lat}&name=${name}&src=uriapi`
      // `https://uri.amap.com/marker?position=${lon},${lat}&name=${name}`
        //  "androidamap://viewMap?sourceApplication=appname&poiname=纳思学院古墩校区&lat=120.097325&lon=30.290273.1&dev=0";
      //判断是否切出浏览器
      setTimeout(function() {
        let hidden =
          window.document.hidden ||
          window.document.mozHidden ||
          window.document.msHidden ||
          window.document.webkitHidden;
        if (typeof hidden == "undefined" || hidden == false) {
          //应用宝下载地址
          window.location.href =
            "https://uri.amap.com/marker?position=116.473195,39.993253";
        }
      }, 2500);
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
