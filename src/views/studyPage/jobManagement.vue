<template>
  <div>
    <navBar :title="title"></navBar>

    <div class="wrap">
      <h2>上传图片</h2>
      <h3>完成老师布置的课堂作业，并拍照上传图片</h3>
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="pay-bar">提&nbsp;&nbsp;交</div>
  </div>
</template>
<script>
import navBar from "../../components/navBar.vue";
import { Uploader } from "vant";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: "作业管理",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #ffffff;
  padding: 19px 24px;
  h2 {
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    color: #232b36;
  }
  h3 {
    height: 20px;
    font-size: 14px;
    color: #a2a7b5;
    margin: 6px 0 32px;
  }
}
/deep/ .van-uploader__preview {
  margin: 0 21px 15px 0;
}
/deep/ .van-uploader__preview-image {
  width: 77px;
  height: 77px;
  border-radius: 8px;
}
</style>
