<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <div class="mt">
      <van-field v-model="name" label="收货人" placeholder="填写姓名" />
      <van-field v-model="phone" type="tel" label="联系电话" placeholder="填写手机号" />
      <van-field
        v-model="city"
        label="所在地区"
        placeholder="选择所在地区"
        right-icon="arrow"
        @click="selectCity"
      />
      <van-field v-model="address" type="textarea" label="详细地址" placeholder="详细地址" rows="4" />
    </div>
    <div class="mt">
      <van-cell center title="设置为默认地址">
        <template #right-icon>
          <van-switch v-model="checked" size="24" active-color="#E94831" />
        </template>
      </van-cell>
    </div>
    <div class="pay-bar" @click='$router.push(`/myPage/address`)'>保存</div>
    <van-popup v-model="show" position="bottom">
      <van-area title :area-list="areaList" @confirm="onConfirm" @cancel="show = false" />
    </van-popup>
    <p class="delect mt">删除收货地址</p>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { Toast } from "vant";
export default {
  data() {
    return {
      routeName:'/myPage/address',
      show: false,
      title: "编辑地址",
      name: "肖智华",
      phone: "187****9212",
      city: "浙江省杭州市江干区",
      address: "红普路788号绿谷发展中心6号楼9层",
      checked: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },
    };
  },
  components: {
    navBar,
  },
  methods: {
    selectCity() {
      this.show = true;
    },
    onConfirm(value) {
      console.log(value);
      this.show = false;
      this.city = value[0].name;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f6f6f6;
  height: 100vh;
  .mt {
    margin-top: 10px;
  }
  .delect {
    height: 47px;
    background: #ffffff;
    line-height: 47px;
    color:#E94831;
    padding-left: 15px;
    font-size: 16px;
  }
}
/deep/ .van-address-edit {
  padding: 0;
}
</style>
