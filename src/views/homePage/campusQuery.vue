<template>
  <div class="wrap">
    <div class="top_wrap">
      <div class="school_wrap">
        <div class="query_wrap">
          <i class="icon_back" @click="backFn"></i>
          <h3 class="title">校区查询</h3>
          <div class="name_wrap" @click="show=!show">
            <span :class="{'red_color':show}">{{name}}</span>
            <i class="icon_up" v-if="show"></i>
            <i class="icon_down" v-else></i>
          </div>
        </div>
        <div class="img_wrap">
          <img src="../../assets/images/home/query.svg" alt />
        </div>
      </div>
      <div class="search_wrap" v-if="show">
        <ul>
          <li
            v-for="(item, index) in campusList"
            :key="index"
            :class="{'active':campusIndex==index}"
            @click="addClassname(item,index)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <van-popup v-model="show" position="top" />
    <div class="list_wrap">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click='goDetail'>
          <p class="title">{{item.campus_name}}</p>
          <div>
            <i class="icon_address"></i>
            <span class="name setWidth single_wrap">{{item.address}}</span>
            <i class="icon_more"></i>
          </div>
          <div>
            <i class="icon_phone"></i>
            <span class="name">{{item.costomer_name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
import { IndexBar, IndexAnchor } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      show: false,
      name: "全部",
      campusIndex: 0,
      campusList: [
        { id: 0, name: "全部" },
        { id: 0, name: "上城区" },
        { id: 0, name: "下城区" },
        { id: 0, name: "江干区" },
        { id: 0, name: "拱墅区" },
        { id: 0, name: "西湖区" },
        { id: 0, name: "滨江区" },
        { id: 0, name: "萧山区" },
      ],
      list: [
      ],
    };
  },
  components: {
    navBar,
  },
  computed: {
    ...mapState(["city"]),
  },
  created(){
    this.getCampuslist();
  },
  methods: {
    backFn() {
      this.$router.go(-1); //返回上一层
    },
    addClassname(item, index) {
      this.campusIndex = index;
      this.name = item.name;
    },
    goDetail(){
      this.$router.push(`/homePage/campusDetail`)
    },
    //校区列表
    getCampuslist() {
      let method = "post";
      let data = {
        data: {},
      };
      this.$services.getCampus({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          this.list = list;
        } else {
          //Dialog({ message: res.msg });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fcfdff;
  min-height: 100vh;
  .setWidth{
    width:270px;
    display: block;
  }
  .top_wrap {
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #fcfdff;
    .school_wrap {
      display: flex;
      padding: 12px 20px 0px 20px;
    }
    .query_wrap {
      width: 135px;
      padding-top: 8px;
      padding-left: 7px;
    }
    .icon_back {
      width: 9px;
      height: 15px;
      display: block;
      background: url("../../assets/images/home/back.svg");
      background-size: cover;
    }
    .title {
      margin: 33px 0 7px 0;
      font-size: 24px;
      font-weight: 500;
      color: #232b36;
      line-height: 33px;
      margin-left: 10px;
    }
    .name_wrap {
      margin-left: 10px;
      width: 66px;
      height: 28px;
      background: #f7f7f7;
      border-radius: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #232b36;
        font-size: 12px;
      }
      .red_color {
        color: #e94831;
      }
      .icon_down {
        background: url("../../assets/images/home/down_arrow.svg");
        background-size: cover;
        display: inline-block;
        width: 10px;
        height: 6px;
        margin-left: 6px;
      }
      .icon_up {
        background: url("../../assets/images/home/icon_up.svg");
        background-size: cover;
        display: inline-block;
        width: 10px;
        height: 6px;
        margin-left: 6px;
      }
    }
    .img_wrap {
      width: 200px;
      height: 135px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .search_wrap {
    padding: 15px 0px 10px 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      width: 105px;
      height: 44px;
      background: #f7f7f7;
      border-radius: 21px;
      text-align: center;
      line-height: 44px;
      font-size: 15px;
      color: #232b36;
      margin-bottom: 11px;
      margin-right: 10px;
    }
    .active {
      color: #e94831;
      background: rgba(233, 72, 49, 0.1);
    }
  }
  .list_wrap {
    padding: 21px 20px;
    li {
      width: 100%;
      height: 104px;
      background: #ffffff;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-bottom: 12px;
      padding: 17px 17px 0;
      font-size: 12px;
      color: #777777;
    }
    .title {
      font-size: 15px;
      font-weight: 500;
      color: #2c3540;
      line-height: 21px;
      margin-bottom: 11px;
    }
    div {
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      position: relative;
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
}
</style>
