<template>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          shape="round"
          background="#D81F13"
          placeholder="关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <div class="search-content">
        <div class="history-search" v-if="historyList.length>0">
          <div class="header">
            <span>历史搜索</span>
            <img :src="deletaImg" alt="" @click="deleteHistory">
          </div>
          <ul class="clear">
            <li v-for="(item,index) in historyList" :key="index" @click="toList(item)">{{item}}</li>
          </ul>
        </div>
        <div class="hot-search">
          <div class="header">
          <span>热词搜索</span>
          </div>
          <ul class="clear">
            <li v-for="(item,index) in hotWordList" @click="toList(item)"><span>{{index+1}}</span>{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';
  import { Dialog } from 'vant';
  export default {
    data(){
      return{
        value:'',
        deletaImg:'./static/delete.png',
        historyList:[],
        hotWordList:[]
      }
    },
    name: 'search',
    watch: {

    },
    created() {
      this.initHot();
      // BM.appointment.webview.setTitleBarVisible(true)
    },
    mounted() {
        let historyList = localStorage.getItem('historyList');
        if(historyList){
          this.historyList = JSON.parse(historyList)
        }
    },
    methods: {
      onSearch(val) {
        if(val){
          if(this.historyList.length < 10){
            this.historyList.push(val)
          }else {
            this.historyList.push(val);
            this.historyList.pop();
          }
        }

        console.log(this.historyList)
        localStorage.setItem('historyList',JSON.stringify(this.historyList));
        this.toList(this.value);
      },
      toList(val){
        this.$router.push(`/searchList?all_article_search_keywords=${val}`)
      },
      deleteHistory(){
        localStorage.removeItem('historyList');
        this.historyList = [];

      },
      onCancel() {
        this.$router.go(-1);
      },
      initHot(){

        let method = 'get';
        let data = {
          hot_words_limit:10
        };
        var that =this;
        this.$services.AllArticleSearchInitial({method,data}).success((res) => {
          if(res.success){
            that.hotWordList = res.search_hot_words;
          }else {
            Dialog({ message: res.msg});
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

  .van-search__action{
    color: #fff;
  }
  .search-content{
    padding: 16px;
    height: calc(100vh - 54px);
    background: #fff;
    .header{
      display: flex;
      justify-content: space-between;
      span{
        font-family: PingFangSC-Medium;
        font-size: 15px;
        color: #333333;
      }
      img{
        width: 16px;
        height: 16px;
      }
    }
    ul{
      margin-top: 16px;
      li{
        float: left;
        font-size: 13px;
        color: #666666;
        padding:0 12px;
        background: #F9F9F9;
        border-radius: 14px;
        margin: 0px 8px 6px 0;
        height: 26px;
        line-height: 26px;
        span{
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #FFFFFF;
          -webkit-border-radius: 1px;
          -moz-border-radius: 1px;
          border-radius: 1px;
          width: 13px;
          height: 13px;
          text-align: center;
          line-height: 13px;
          display: inline-block;
          background:#4381E6;
          margin-right: 8px;
        }
      }
      li:first-child{
        span{
          background: #D81F13;
        }
      }
      li:nth-child(2){
        span{
          background: #FF8A2E;
        }
      }
      li:nth-child(3){
        span{
          background: #A651FF;
        }
      }
    }
    .hot-search{
      margin-top: 16px;
    }
  }
</style>
