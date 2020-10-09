<template>
  <div class="wrap">
    <navBar :title="title" class="nav_wrap"></navBar>
    <div>
      <h3 class="title">选择学习中心</h3>
      <div class="school_wrap">
        <ul class="addressList">
          <li
            v-for="(item, index) in addressList"
            :key="index"
            :class="{'active':addressIndex==index}"
            @click="addClassname(index)"
          >
            {{
            item
            }}
          </li>
        </ul>
        <ul class="schoolList">
          <li
            v-for="(item, index) in schoolList"
            :key="index"
            :class="{'active':school.campus_id===item.campus_id}"
            @click="addActive(item)"
          >
            <h4 class="address_title">{{item.campus_name}}</h4>
            <p>{{item.address}}</p>
            <p>纳思书院</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div v-else class='mt'> 
      <no-data ></no-data>
    </div> -->
  </div>
</template>

<script>
import noData from "../../components/noData.vue";
import navBar from "../../components/navBar.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "学习中心",
      addressList: ["西湖区", "萧山区", "下城区", "上城区", "拱墅区", "江干区"],
      schoolList: [
        {
          id:1,
          title: "教工路学习中心",
          detail: "杭州市西湖区教工路88号立元大厦1楼",
        },
        {
          id:2,
          title: "古墩学习中心",
          detail: "杭州市西湖区古墩路543号",
        },
        {
          id:3,
          title: "文一学习中心",
          detail: "杭州市西湖区教工路88号立元大厦1楼",
        },
        {
          id:4,
          title: "三墩学习中心",
          detail: "杭州市西湖区教工路88号立元大厦1楼",
        },
      ],
      addressIndex: 0,
      content:'当前城市暂无学习中心哦~'
    };
  },
  components: {
    noData,
    navBar,
  },
  computed: {
    ...mapState(["school"]),
  },
  watch: {},
  created() {
    this.getCampuslist();
  },
  mounted() {},

  methods: {
    addClassname(index) {
      this.addressIndex = index;
    },
    addActive(value) {
      this.$store.commit("school", value);
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
          this.schoolList = list;
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
  background: #f7f7f7;
  min-height: 100vh;
  .mt{
    margin-top:46px;
  }
  .title {
    padding: 14px 0 15px 27px;
    font-size: 27px;
    font-weight: 500;
    color: #333333;
    line-height: 38px;
    background: #fff;
    position: fixed;
    top: 46px;
    width: 100%;
  }
  .nav_wrap {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .school_wrap {
    display: flex;
    min-height: 100vh;
    padding-top: 113px;
    .addressList {
      width: 105px;
      background: #fff;
      position: fixed;
      li {
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #333333;
        font-size: 15px;
      }
      .active {
        background: #f7f7f7;
      }
    }
    .schoolList {
      width: 270px;
      background: #f7f7f7;
      padding-top: 12px;
      margin-left: 105px;
      li {
        height: 92px;
        border-bottom: 1px solid #eaeaea;
        padding-left: 20px;
        font-size: 12px;
        color: #999999;
        margin-bottom: 17px;
        p{
          width:240px;
        }
      }
      .address_title {
        font-size: 15px;
        color: #333333;
        margin-bottom: 6px;
        line-height: 24px;
      }
      .active {
        color: #e94831;
        .address_title {
          color: #e94831;
        }
      }
    }
  }
}
</style>
