<template>
  <div class="wrap">
    <nav-bar :title="title" :routeName="routeName"></nav-bar>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      v-if="orderList.length > 0"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div>
          <ul class="list_wrap">
            <li v-for="(item, index) in orderList" :key="index">
              <p class="order_wrap">
                <span class="number">订单编号: Y{{ item.reserve_id }}</span>
                <span class="status">{{ item.ctime }}</span>
              </p>
              <div class="msg_wrap">
                <h4 class="title">
                  <span>{{ item.name }}</span>
                </h4>
                <p>孩子姓名: {{ item.child_name }}</p>
                <p>联系方式: {{ item.mobile }}</p>
                <p>学习中心: {{ item.campus_id }}</p>
              </div>
            </li>
          </ul>
        </div>
      </van-list>
    </van-pull-refresh>

    <no-data :content="content" v-else></no-data>
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";
import { Dialog } from "vant";
import { formatDate, prefixInteger } from "../../utils/utils.js";
import { campusFilter } from "../../utils/filters.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      routeName: "",
      title: "我的预定",
      content: "您还没有相关订单哦~",
      orderList: [],
      tabIndex: 0,
      pageIndex: 1,
      pageSize: 1,
    };
  },
  components: {
    noData,
    navBar,
  },
  created() {
    this.getPreordain();
  },
  computed: {
    ...mapState(["campusList"]),
  },
  methods: {
    //路由跳转
    goRoute(name) {
      window.scroll(0, 0); //失焦后强制让页面归位
      this.$router.push(name);
    },
    onLoad() {
      setTimeout(() => {
        setTimeout(() => {
          if (this.pageIndex != 1) {
            setTimeout(() => {
              this.getPreordain();
            }, 100);
          }
        }, 1000);
      }, 1000);
    },
    onRefresh() {
      this.loading = false;
      this.finished = false;
      this.pageIndex = 1;
      this.pageSize = 1;
      this.orderList = [];
      this.getPreordain();
    },
    //预定
    getPreordain() {
      let method = "post";
      let token = localStorage.getItem("token");
      let data = {
        data: {},
        token: token,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      this.$services.reserveList({ method, data }).success((res) => {
        if (res.code === 200) {
          let list = res.data.list;
          list.map((item, index) => {
            item.ctime = formatDate(item.ctime * 1000, 1);
            item.campus_id = campusFilter(this.campusList, item.campus_id);
            item.reserve_id = prefixInteger(item.reserve_id, 8);
          });
          this.orderList = this.orderList.concat(list);
          this.pageIndex++;
          this.loading = false;
          if (this.orderList.length >= res.totalCount) {
            this.finished = true;
          }
        } else {
          Dialog({ message: res.msg });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #f7f7f7;
  min-height: 100vh;
  .tab_title {
    top: 46px;
    position: sticky;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding: 0 33px;
    .active {
      color: #e94831;
      border-bottom: 3px solid #e94831;
    }
  }
  .list_wrap {
    padding: 16px 15px;
    li {
      min-height: 140px;
      background: #ffffff;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      font-size: 12px;
      color: #666;
      line-height: 16px;
      margin-bottom: 16px;
      padding-left: 15px;
    }
    .order_wrap {
      height: 40px;
      display: flex;
      align-items: center;
      padding-right: 14px;
      justify-content: space-between;
      border-bottom: 1px solid #e2e2e2;
    }
    .pay {
      color: #fa4500;
    }
    .status {
      font-size: 14px;
    }
    .msg_wrap {
      padding-right: 14px;
      padding-bottom: 19px;
    }
    .title {
      font-size: 15px;
      color: #2c3540;
      line-height: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
    .money {
      font-size: 16px;
      font-weight: 500;
      color: #2c3540;
    }
    .icon_money {
      color: #2c3540;
      font-size: 12px;
      font-style: normal;
    }
    p {
      margin-top: 7px;
    }
    .total_wrap {
      margin-top: 14px;
      margin-bottom: 18px;
      text-align: right;
      padding-right: 14px;
    }
    .btn_wrap {
      font-size: 14px;
      padding-bottom: 20px;
      i {
        display: inline-block;
        width: 100px;
        height: 32px;
        text-align: center;
        line-height: 30px;
        border-radius: 16px;
        font-style: normal;
      }
    }
    .cancel_btn {
      color: #2c3540;
      border: 1px solid #dddddd;
      margin-right: 6px;
    }
    .success_btn {
      color: #fff;
      background: #e94831;
      border: 1px solid #e94831;
    }
  }
}
</style>
