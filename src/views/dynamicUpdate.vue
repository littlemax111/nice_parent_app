<template>
  <div class="main">
    <div class="dynamic">
      <van-sticky>
        <van-nav-bar
          title="动态更新"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
      <ul>
        <li class="clear" v-for="(item,index) in workList" :key="index">
          <div class="l">
            <span>{{item.label}}</span>
          </div>
          <div class="r">
            <span v-if="item.doc_count">文件</span>
            <span v-if="item.doc_count">{{item.doc_count.value}}</span>
            <span v-if="item.todo">待办</span>
            <span v-if="item.todo">{{item.todo.value}}</span>
            <span v-if="item.overtime">超时</span>
            <span v-if="item.overtime">{{item.overtime.value}}</span>
            <span v-if="item.nopass">不合格</span>
            <span v-if="item.nopass">{{item.nopass.value}}</span>
          </div>
        </li>
      </ul>
    </div>
    <van-divider>到底了</van-divider>
  </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    data(){
      return{
        value:'',
        banner:[
          './static/bannerIndex.png',
          './static/cup_one.svg',
          './static/cup_two.svg',
          './static/cup_three.svg',
        ],
        imgList:[
          './static/step_one.png',
          './static/step_two.png',
          './static/step_three.png',
          './static/step_four.png',
          './static/step_five.png',
          './static/step_six.png',
          './static/step_seven.png',
          './static/step_eight.png'
        ],
        workList:[],
        rateList:[],
      }
    },
    name: 'index',
    watch: {

    },
    created() {
      this.init();
      // BM.appointment.webview.setTitleBarVisible(false)
    },
    mounted() {

    },
    methods:{
      onClickLeft () {
        this.$router.go(-1);
      },
      init(){
        let method = 'post';
        let data = {};
        this.$services.GetWorkItemReport({method,data}).success((res) => {
          if(res.success){
            this.workList = res.data.report2.list;
          }else {
            Dialog({ message: res.msg});
          }
        });
      },
      getRate(val){
        return val.toFixed(2)
      },
    },

  }
</script>

<style lang="scss" scoped>
  .dynamic{
    padding-left: 16px;
    background: #ffffff;
    ul {
      li {
        border-bottom: 1px solid #e5e5e5;
        padding-right: 16px;
        height: 44px;
        span {
          display: block;
          height: 44px;
          line-height: 44px;
          float: left;
        }
        .l {
          span {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
          }
        }
        .r {
          span:nth-child(odd) {
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #D81F13;
            margin-left: 24px;
          }
          span:nth-child(even) {
            font-family: 'DIN-Bold';
            font-size: 24px;
            color: #D81F13;
            margin-left: 8px;
          }
          span:nth-child(3), span:nth-child(4) {
            color: #4381E6;
          }
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
  }
  .public-header{
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #666666;
  }
</style>
