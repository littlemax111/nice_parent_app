<template>
  <div>
    <div>
      <van-sticky>
        <van-search
          background="#D81F13"
          shape="round"
          v-model="all_article_search_keywords"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </van-sticky>
    </div>
    <div class="content">
      <van-tabs v-model="active" @change="getList" animated swipeable>
        <van-tab v-for="(item,index) in domain_category" :key="index" :title="item.name" class="scroll-body">
          <ul>
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <li v-for="(item,index) in list" :key="index">
                <div class="sort-two">
                  <p class="double_wrap" @click="goDetails(item.id)">{{item.title}}</p>
                  <p class="msg">{{item.org_name}}&nbsp;&nbsp;{{item.create_time}}</p>
                </div>
              </li>
            </van-list>
          </ul>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    data() {
      return {
        active:0,
        list:[],
        total:0,
        loading: false,
        finished: false,
        page:1,
        all_article_search_keywords:this.$route.query.all_article_search_keywords,
        domain_ids:[],
        domain_category:[
          {
            name:'全部',
            id:''
          }
        ]
      }
    },
    watch: {
      '$route' (to, from) {// 对路由变化作出响应

      }
    },
    created() {
      this.initConditions();
      // BM.appointment.webview.setTitleBarVisible(true)
    },
    mounted() {

    },
    beforeRouteLeave(to, from, next) {
      if (to.name == 'articleDetails') {
        from.meta.keepAlive = true;
      } else {
        from.meta.keepAlive = false;
      }

      next();
    },
    methods: {
      onCancel(){
        this.$router.go(-1);
      },
      getList(index){
        this.domain_ids = new Array(1).fill(this.domain_category[index].id)
        this.finished = false
        this.loading = true;
        this.page = 1;
        this.list = [];
        this.onLoad();
      },
      initConditions(){
        let method = 'get';
        let data = {}
        this.$services.AllArticleSearchInitial({method,data}).success((res) => {
          if(res.success){
            this.domain_category = [...this.domain_category,...res.domain_category]
          }else {
            Dialog({ message: res.msg});
          }
        });

      },
      onSearch(){
        this.finished = false
        this.loading = true;
        this.page = 1;
        this.list = [];
        this.onLoad();
      },
      init(){
        let method = 'get';
        let data = {
          domain_ids:this.domain_ids!=''?JSON.stringify(this.domain_ids):JSON.stringify([]),
          limit:10,
          page:this.page,
          all_article_search_keywords:this.all_article_search_keywords,
          all_article_search_type:'or'
        }
        console.log(data.domain_ids)
        this.$services.AllArticleSearch({method,data}).success((res) => {
          if(res.success){

            this.list = [...this.list, ...res.data];
            this.page++;
            this.loading = false;
            if(this.list.length >= res.count) {
              this.finished = true;
            }
            this.$nextTick(()=>{
              this.signSearch();
            })
            // this.list = this.list.concat(res.data);
            // this.total = res.count;
          }else {
            Dialog({ message: res.msg});
          }
        });
      },
      onLoad() {
        console.log(this.page)
        setTimeout(() => {
          this.init();
        }, 100);
      },
      signSearch(){
        var searchText = this.all_article_search_keywords;//获取你输入的关键字
        var regExp = new RegExp(searchText, "g");//创建正则表达式，g表示全局的，如果不用g，则查找到第一个就不会继续向下查找了
        $("p.double_wrap").each(function()//遍历p里的文字；
        {
          var html = $(this).html();
          var newHtml = html.replace(regExp, "<span style='color:#ee0a24' >"+searchText+"</span>");//将找到的关键字替换，加上highlight属性；
          $(this).html(newHtml);//更新标题；

        });
      },
      goDetails(id){
        this.$router.push(`/articleDetails?id=${id}&discussion_id=`)
      },
    },

  }
</script>

<style lang="scss" scoped>
  .content{
    /*height: calc(100vh - 46px);*/
    /*overflow-y: auto;*/
    .header{
      width: 100%;
      height: 84px;
      display: flex;
      background: #fff;
      align-items: center;
      padding: 0 16px;
      margin-bottom: 8px;
      img{
        margin-right: 12px;
        width: 60px;
        height: 60px;
      }
      span{
        font-family: PingFangSC-Medium;
        font-size: 17px;
        color: #333333;
      }
    }
    ul{
      background: #ffffff;
      padding:0 12px;
      li{
        margin-bottom: 8px;
        padding: 16px 0;
        border-bottom: 1px solid #e5e5e5;
        .sort-one{
          display: flex;
          .left{
            flex: 1;
            p.double_wrap{
              font-size: 17px;
              color: #333333;
            }
            p.msg{
              margin-top: 8px;
              font-size: 12px;
              color: #999999;
            }
          }
          .right{
            margin-left: 12px;
            width: 128px;
            height:90px;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
        .sort-two{
          p.double_wrap{
            font-size: 17px;
            color: #333333;
          }
          p.msg{
            margin-top: 8px;
            font-size: 12px;
            color: #999999;
          }
        }
      }
      li:last-child{
        border: none;
      }
    }
  }
  /deep/ .van-tabs__wrap{
    position: sticky;
    top: 54px;
    left: 0;
    z-index: 100;
  }
  .van-search__action{
    color: #fff;
  }
</style>
