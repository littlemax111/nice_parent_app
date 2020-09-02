<template>
  <div>
    <navBar :title="title"></navBar>
  
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
      title: "待看回放",
    
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>

</style>
