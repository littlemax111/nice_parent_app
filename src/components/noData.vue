<template>
  <div>
    <div class="dataWrap" :style='style'>
      <img src="../assets/images/home/no_data.png" alt />
    </div>
    {{style}}
    <p class="content">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "noData",
  data() {
    return {};
  },
  props:['content','style']
};
</script>

<style scoped lang="scss">
.dataWrap {
  width: 150px;
  height: 125px;
  margin: 0 auto;
  margin-top: 182px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  color: #a1a5bb;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}
</style>
