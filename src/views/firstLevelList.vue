<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title=""
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div>
    </div>
    <div class="content">
      <van-tabs v-model="active" @change="getList" animated swipeable>
          <van-tab v-for="(item,index) in tabTitle" :key="index" :title="item.name">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <div class="card" v-for="(item,index) in list" :key="index">
                <div class="header" @click="toSecondLevel(item.discussion_id,item.discussion_name)">
                  <img :src="themePic" alt="">
                  <span>{{item.discussion_name}}</span>
                </div>
                <ul>

                  <li v-for="(cItem,cIndex) in item.documents" :key="cIndex" @click="goDetails(cItem.id,item.discussion_id)">
                    <div class="sort-two">
                      <p class="double_wrap">{{cItem.title}}</p>
                      <p class="msg">{{cItem.org_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{(cItem.create_time).substr(0,10)}}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </van-list>
          </van-tab>
      </van-tabs>

    </div>

  </div>
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
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    data() {
      return {
        active:0,
        themePic:'./static/theme.png',
        tabTitle:[
          {
            name:'基础资料库',
            domain_ids:[]
          },
          {
            name:'动态信息树',
            domain_ids:[]
          },
          {
            name:'任务发布',
            domain_ids:[]
          },
          {
            name:'政策风向标',
            domain_ids:[]
          },
          {
            name:'亮点追踪',
            domain_ids:[]
          },
          {
            name:'领导讲话',
            domain_ids:[]
          },
          {
            name:'互动留言',
            domain_ids:[]
          },
        ],
        list:[],
        domain_ids:this.$route.query.domain_ids,
        loading: false,
        finished: false,
        page:1,
        limit:10
      }
    },
      beforeRouteLeave (to, from, next) {
        if (to.name == 'secondLevelList' || to.name == 'articleDetails') {
          from.meta.keepAlive = true;
        } else {
          from.meta.keepAlive = false;
        }

        next();
      },
      created () {
        // BM.appointment.webview.setTitleBarVisible(false)
      },
      mounted () {
        this.$nextTick(() => {
          this.active = Number(this.$route.query.active);
        })
      },
      methods: {
        onClickLeft () {
          this.$router.go(-1);
        },
        getList (name) {
          this.active = name;
          switch (name) {
            case 0:
              this.domain_ids = JSON.stringify([1]);
              break;
            case 1:
              this.domain_ids = JSON.stringify([3]);
              break;
            case 2:
              this.domain_ids = JSON.stringify([7]);
              break;
            case 3:
              this.domain_ids = JSON.stringify([2]);
              break;
            case 4:
              this.domain_ids = JSON.stringify([4]);
              break;
            case 5:
              this.domain_ids = JSON.stringify([5]);
              break;
            case 6:
              this.domain_ids = JSON.stringify([6]);
              break;
          }
          this.page = 1;
          this.list = [];
          this.loading = true;
          this.finished = false;
          this.onLoad()
        },
        initWait () {
          let method = 'get';
          let data = {
            domain_ids: this.domain_ids,
            page: this.page,
            limit: this.limit
          };
          this.$services.ArticleListSearchForMobile({method, data}).success((res) => {
            if (res.success) {
              if (res.data.length > 0) {
                console.log(this.list)
                this.list = [...this.list, ...res.data];
                this.page++;
                this.loading = false;
                console.log(this.list.length, res.count)
                if (this.list.length >= res.count) {
                  this.finished = true;
                }
              }
            } else {
              Dialog({message: res.msg});
            }
          });
        },
        onLoad () {
          console.log(this.finished)
          setTimeout(() => {
            this.initWait();
          }, 100);
        },
        goDetails (id, discussion_id) {
          // sessionStorage.setItem('contentScroll',$('.scroll-body').eq(this.active).scrollTop())
          this.$router.push(`/articleDetails?id=${id}&discussion_id=${discussion_id}`)
        },
        toSecondLevel (discussion_id, discussion_name) {
          // sessionStorage.setItem('contentScroll',$('.scroll-body').eq(this.active).scrollTop());
          this.$router.push(`/secondLevelList?discussion_id=${discussion_id}&discussion_name=${discussion_name}`)
        },
      },
  }
</script>

<style lang="scss" scoped>
  /deep/ .van-tabs__wrap{
    position: sticky;
    top: 44px;
    left: 0;
    z-index: 100;
  }
    .content{
      .scroll-body{
        /*height: calc(100vh - 90px);*/
        /*overflow-y: auto;*/
      }

      .card{
        background: #ffffff;
        margin-bottom: 8px;
        padding: 12px 12px;
        .header{
          width: 100%;
          height: 36px;
          line-height: 36px;
          display: flex;
          img{
            margin-right: 11px;
            width: 36px;
            height: 36px;
          }
          span{
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
          }
        }
        ul{
          li{
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
    }
</style>
