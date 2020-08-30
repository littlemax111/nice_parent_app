<template>
  <div>
    <div>
      <van-sticky>
        <van-nav-bar
          title="文档预览"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
    </div>
    {{content}}
    <iframe :src="content" frameborder="0" width="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts"></iframe>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      content: "",
      url: this.$route.query.url,
    };
  },
  created() {
    this.init();
    // BM.appointment.webview.setTitleBarVisible(false)
  },

  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    init() {
        if(this.url){
             
          this.content = `https://view.officeapps.live.com/op/view.aspx?src=${this.url}`
          

            // window.open(`https://view.officeapps.live.com/op/view.aspx?src=${url}`);
        }
    }
    
  }
};
</script>
