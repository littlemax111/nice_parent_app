<template>
  <div class="wrap">
    <navBar :title="title"></navBar>
    <h3 class="title">{{message.title}}</h3>
    <div class="img_wrap">
      <img src="../../assets/images/home/campus.png" alt />
    </div>
    <div class="address_wrap">
      <div>
        <i class="icon_address"></i>
        <span class="name">{{message.address}}</span>
        <i class="icon_more"></i>
      </div>
      <div>
        <i class="icon_phone"></i>
        <span class="name">{{message.phone}}</span>
      </div>
    </div>
    <div class="content border_bot">
      <p class="sub_title">
        <i class="shu"></i>
        <span>校区介绍</span>
      </p>
      <p
        class="word"
      >纳思书院解放校区位于底蕴丰厚的上城区，浙医二院斜对面，交通便利，教育服务辐射时代小学、崇文实验小学、金都天长小学、建兰中学、杭州中学、惠兴中学、杭十中、杭二中滨江校区、杭二中东河校区、杭四中吴山校区等，学术氛围浓厚。校区拥有2000多平方米，可容纳学员千余人，目前在读学员达1000有余。为广大中小学生提供一对一定制辅导、一对三精英小班、一对八精品小班、中高考百日集训、科学实验班课，小学数学思维班课等品质服务。</p>
    </div>
    <div class="content">
      <p class="sub_title">
        <i class="shu"></i>
        <span>服务时间</span>
      </p>
      <p class="word">
        周一至周日：08:00-21:00
        <br />注：节假日及寒暑假营业时间请以校区实际通知为准。
      </p>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  data() {
    return {
      title: "校区详情",
      message: {
        title: "解放伟星校区",
        address: "杭州市西湖区古墩路543号大昌盛商务楼2楼",
        phone: "400-688-1614",
      },
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
  .title {
    font-size: 20px;
    font-weight: 500;
    color: #232b36;
    line-height: 28px;
    padding: 12px 0 15px 20px;
  }
  .img_wrap {
    padding: 0 20px;
    height: 191px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .border_bot {
    border-bottom: 1px solid #f2f2f2;
  }
  .address_wrap {
    padding: 22px 20px 0;
    margin-top: 22px;
    height: 82px;
    border-bottom: 1px solid #f2f2f2;
    div {
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 12px;
      color: #777777;
    }
    .icon_address {
      background: url("../../assets/images/home/address.svg");
      background-size: cover;
      display: inline-block;
      width: 10px;
      height: 12px;
      margin-right: 5px;
    }
    .icon_phone {
      background: url("../../assets/images/home/phone.svg");
      background-size: cover;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
    .icon_more {
      width: 8px;
      height: 13px;
      display: inline-block;
      background: url("../../assets/images/my/more.svg");
      background-size: cover;
      position: absolute;
      right: 0px;
    }
    span {
      line-height: 16px;
      padding-left: 4px;
    }
  }
  .content {
    padding: 21px 20px;
    font-size: 13px;
    color: #666666;
    line-height: 21px;
    .sub_title {
      font-size: 18px;
      font-weight: 500;
      color: #050505;
      line-height: 25px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }
    .shu {
      display: block;
      width: 4px;
      height: 18px;
      background: #e94831;
      border-radius: 2px;
      margin-right: 4px;
    }
    .word {
      padding: 0 2px 0 13px;
    }
  }
}
</style>
