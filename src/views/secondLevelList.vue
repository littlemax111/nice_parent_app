<!--<li>-->
<!--<div class="sort-one">-->
<!--<div class="left">-->
<!--<p class="double_wrap">交通运输部等部门：有序恢复已暂停运营的交通运输服务</p>-->
<!--<p class="msg">新华社  02-04 09:14</p>-->
<!--</div>-->
<!--<div class="right">-->
<!--<img src="https://dss0.baidu.com/73F1bjeh1BF3odCf/it/u=1861722606,3643745052&fm=85&s=F2806BA5485321C04E94900A030060C3" alt="">-->
<!--</div>-->
<!--</div>-->
<!--</li>-->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div class="content">
      <van-sticky :offset-top="50">
        <div class="header">
          <img :src="themePic" alt="">
          <span>{{discussion_name}}</span>
        </div>
      </van-sticky>

        <ul>

          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <li v-for="(item,index) in list">
              <div class="sort-two">
                <p class="double_wrap" @click="goDetails(item.id)">{{item.title}}</p>
                <p class="msg">{{item.org_name}}&nbsp;&nbsp;{{item.create_time}}</p>
              </div>
            </li>
          </van-list>

        </ul>
    </div>

  </div>
</template>

<script>
  import { Dialog,Sticky  } from 'vant';
  export default {
    data() {
      return {
        themePic:'./static/theme.png',
        list:[],
        total:0,
        loading: false,
        finished: false,
        discussion_id:this.$route.query.discussion_id,
        discussion_name:this.$route.query.discussion_name,
      }
    },
    created() {
      // BM.appointment.webview.setTitleBarVisible(false)
    },
    mounted() {

    },
    beforeRouteLeave(to, from, next) {
      if (to.name == "articleDetails") {
        from.meta.keepAlive = true;
      } else {
        from.meta.keepAlive = false;
      }
      next();
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1);
      },
      onLoad() {
        setTimeout(() => {
          this.initPage();
        }, 100);
      },
      initPage(){
        let method = 'get';
        let data = {
          discussion_id:this.discussion_id,
          page:1,
          limit:10,
        };
        this.$services.ArticleListSearch({method,data}).success((res) => {
          if(res.success){
            this.list = [...this.list, ...res.data];
            this.page++;
            this.loading = false;
            if (this.list.length >= res.count) {
              this.finished = true;
            }
          }else {
            Dialog({ message: res.msg});
          }
        });
      },
      goDetails(id){

        this.$router.push(`/articleDetails?id=${id}&discussion_id=${this.discussion_id}`)
      },
    },

  }
</script>

<style lang="scss" scoped>
  .content{
    /*height: calc(100vh - 46px);*/
   // overflow-y: hidden;
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
      /*height: calc(100vh - 134px);*/
      /*overflow-y: auto;*/
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

</style>
