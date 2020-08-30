<template>
    <div>
      <div>
        <van-sticky>
          <van-nav-bar
            title="文章详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
        </van-sticky>
      </div>
      <div class="content">
        <p class="title">{{info.title}}</p>
        <h3>
          <span>{{info.org_name}}</span>
          <span>{{info.create_user_name}}</span>
          <span>{{info.create_time}}</span>
        </h3>
        <div v-html="info.content" style="font-size: 14px;padding: 8px 0px;"></div>
      </div>
      <div class="attachment">
        <ul>
          <li v-for="(item,index) in attachmentList" :key="index" @click="isTop('download',item.url)">
            <img :src="filePic" alt="">
            {{item.file_name}}</li>
        </ul>
      </div>
      <div class="steps-main">
        <van-steps direction="vertical" :active="-1">
          <van-step v-for="(item,index) in infoReply" :key="index">
            <h3 class="single_wrap">{{item.title}}</h3>
            <h4>{{item.create_time}}</h4>
            <p class="triple_wrap">{{item.summary}}</p>
            <div class="note clear">
              <div class="l">备注：</div>
              <ul class="l">
                <li>{{item.memo}}</li>
              </ul>
            </div>
            <div class="note clear" style="margin-top: 8px">
              <div class="l">回复：</div>
              <ul class="l">
                <li v-for="(cItem,cIndex) in item.suggestion
" :key="cIndex">{{cItem.body}}</li>
              </ul>
            </div>
          </van-step>
        </van-steps>
      </div>
      <van-divider>到底了</van-divider>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    data(){
      return{
        filePic:'./static/file.png',
        info:{},
        infoReply:{},
        attachmentList:[],
        sid:this.$route.query.id,
        discussion_id:this.$route.query.discussion_id,
      }
    },
    created(){
      this.init();
      // BM.appointment.webview.setTitleBarVisible(false)
    },
    // beforeRouteLeave(to, from, next) {
    //   if (to.name == 'firstLevelList' || to.name == 'secondLevelList') {
    //     from.meta.keepAlive = true;
    //   }
    //   else {
    //
    //   }
    //   next();
    // },
    mounted(){

    },
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      },
      init(){

        let that=this;
        let method="get";
        //文章内容
        var data={
          doc_id: this.sid,
          discussion_id:this.discussion_id,
          usage:'read'
        };
        this.$services.ArticleForm({method,data}).success((res) => {
          if(res.success){
            this.info = res.data;
          }else{
            Dialog({ message: res.msg});
          }
        });
        var data={
          doc_id: this.sid,
          discussion_id: this.discussion_id,
          limit:10,
          page:1
        }
        this.$services.ArticleComment({method,data}).success(function(res){
          if(res.success){
            that.infoReply = res.data;

          }else {
            Dialog({ message: res.msg});
          }
        });
        var data={
          doc_id: this.sid,
          discussion_id: this.discussion_id,
        }
        this.$services.ArticleAttachment({method,data}).success(function(res){
          if(res.success){
            if(res.data.attachments && res.data.attachments.length>0){
              that.attachmentList = res.data.attachments;
            }


          }else {
            Dialog({ message: res.msg});
          }
        });
      },
      isTop(val,link){
        var that = this;
        var method = 'get';
        var arr = [];
        arr.push(that.sid);
        var data = {
          ids:JSON.stringify(arr),
          field:val,
          value:true
        };
        this.$services.ArticleTag({method,data}).success(function(res){
          if(res.success){
            // https://view.officeapps.live.com/op/view.aspx?src=
            // http://${window.location.host}${url}
        //  https://view.officeapps.live.com/op/view.aspx?src=
          let url = `${window.location.origin}${link}`;
          window.open(url)
          // that.$router.push(`preview?url=${url}`)
          

            // window.open(`https://view.officeapps.live.com/op/view.aspx?src=${url}`);
          }else {
            Dialog({ message: res.msg});
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    padding: 12px 16px;
    background: #fff;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #333333;
    }
    h3{
      margin-top: 13px;
      font-size: 0;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 13px;
      span{
        font-size: 13px;
        display: inline-block;
        height: 13px;
        line-height: 13px;
        color: #999;
        border-right: 2px solid #ccc;
        padding-right: 8px;
        margin-left: 8px;
      }
      span:first-child{
        margin-left: 0;
      }
      span:last-child{
        border: none;
      }
    }
  }
  .steps-main{
    h3{
      font-family: PingFangSC-Medium;
      font-size: 14px;
      line-height: 14px;
      color: #333333;
      word-break: break-all
    }
    h4{
      font-size: 12px;
      color: #666666;
      letter-spacing: -0.01px;
      line-height: 12px;
      margin: 4px 0 8px;
    }
    p{
      font-size: 14px;
      color: #333333;
      margin-bottom: 8px;
    }
    .note{
      display: flex;
      div.l{
        width: 50px;
        color: #666;
      }
      ul{
        flex: 1;
        color: #999;
        li{
          margin-bottom: 4px;
        }
      }
    }
  }
  .attachment{
    background-color: #ffffff;
    padding: 16px 8px;
    li{
      img{
        display: inline-block;
        width: 16px;
      }
      color: #0a61c2;
      font-size: 14px;
      line-height: 20px;
      margin: 4px 0;
    }
  }
</style>
