<template>
  <div class="wrap">
    <nav-bar :title="title"></nav-bar>
    <div v-if="list.length>0">
      <ul class="address_list">
        <li v-for="(item, index) in list" :key="index">
          <div class="left_wrap">
            <p class="msg_wrap">
              <span class="name">{{item.name}}</span>
              <span class="phone">{{item.phone}}</span>
              <span class="icon_status"></span>
            </p>
            <p class="address">{{item.address}}</p>
          </div>
          <span class="shu"></span>
          <span class="edit" @click="goRoute('/myPage/editAddress')">编辑</span>
        </li>
      </ul>
    </div>
    <no-data :content="content" v-else></no-data>
    <div class="pay-bar" @click="goRoute('/myPage/addAddress')">添加收货地址</div>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "地址管理",
      content: "暂无地址，快去添加地址吧~",
      list: [
        {
          name: "肖智华",
          phone: "187****9212",
          status: 1,
          address: "浙江省 杭州市 江干区 红普路788号绿谷发展中心6号楼9层",
        },
        {
          name: "陈信红",
          phone: "137****0812",
          status: 0,
          address: "浙江省 杭州市 西湖区 文三路486号明珠公寓1幢1单元702室",
        },
      ],
    };
  },
  components: {
    noData,
    navBar,
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .address_list {
    li {
      margin-top: 10px;
      display: flex;
      align-items: center;
      min-height: 67px;
      background: #ffffff;
      padding: 12px 20px;
    }
    .left_wrap {
      width: 257px;
      margin-right: 27px;
    }
    .msg_wrap {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }
    .name {
      font-size: 16px;
      color: #333333;
    }
    .phone {
      font-size: 16px;
      color: #333333;
      line-height: 23px;
    }
    .address {
      font-size: 13px;
      color: #666666;
      line-height: 19px;
    }
    .shu {
      display: block;
      width: 1px;
      height: 30px;
      background: #bebec0;
      margin-right: 20px;
    }
    .edit {
      color: #999999;
      font-size: 14px;
    }
  }
}
</style>
