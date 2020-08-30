<template>
    <div class="main">
      <van-search
        @click="$router.push('/search')"
        shape="round"
        :disabled="true"
        background="#D81F13"
        placeholder="请输入搜索关键词"
      />
      <div class="banner">
        <img :src="banner[0]" alt="">
      </div>
      <div class="workBench">
        <ul class="clear">
          <li @click="toModules([1],0)">
            <img :src="imgList[0]" alt="">
            <p>基础资料库</p>
          </li>
          <li @click="toModules([3],1)">
            <img :src="imgList[1]" alt="">
            <p>动态信息树</p>
          </li>
          <li @click="toModules([7],2)">
            <img :src="imgList[2]" alt="">
            <p>任务发布</p>
          </li>
          <li @click="toModules([2],3)">
            <img :src="imgList[3]" alt="">
            <p>政策风向标</p>
          </li>
          <li @click="toModules([4],4)">
            <img :src="imgList[4]" alt="">
            <p>亮点追踪</p>
          </li>
          <li @click="toModules([5],5)">
            <img :src="imgList[5]" alt="">
            <p>领导讲话</p>
          </li>
          <li @click="toModules([6],6)">
            <img :src="imgList[6]" alt="">
            <p>互动留言</p>
          </li>
          <li @click="$router.push(`dynamicUpdate`)">
            <img :src="imgList[7]" alt="">
            <p>动态更新</p>
          </li>
        </ul>
      </div>
      <!--<div class="dynamic">-->
        <!--<div class="public-header">动态更新</div>-->
        <!--<ul>-->
          <!--<li class="clear" v-for="(item,index) in workList" :key="index">-->
            <!--<div class="l">-->
              <!--<span>{{item.label}}</span>-->
            <!--</div>-->
           <!--<div class="r">-->
             <!--<span v-if="item.doc_count">文件</span>-->
             <!--<span v-if="item.doc_count">{{item.doc_count.value}}</span>-->
             <!--<span v-if="item.todo">待办</span>-->
             <!--<span v-if="item.todo">{{item.todo.value}}</span>-->
             <!--<span v-if="item.overtime">超时</span>-->
             <!--<span v-if="item.overtime">{{item.overtime.value}}</span>-->
             <!--<span v-if="item.nopass">不合格</span>-->
             <!--<span v-if="item.nopass">{{item.nopass.value}}</span>-->
           <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <div class="rate">
        <div class="public-header">单位完成率排名</div>
        <ul>
          <li class="clear" v-for="(item,index) in rateList" :key="index">
           <div class="clear l">
             <!--<img v-if="index == 0" :src="banner[1]" alt="">-->
             <!--<img v-if="index == 1" :src="banner[2]" alt="">-->
             <!--<img v-if="index == 2" :src="banner[3]" alt="">-->
             <span>{{index+1}}</span>
             <span>{{item.org_name}}</span>
           </div>
            <div class="r">
              <span style="color: #4381E6;" v-if="item.ratio == 100">{{item.ratio}}%</span>
              <span style="color: #D81F13;" v-else>{{item.ratio}}%</span>
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
        entry:this.$route.query.entry,
      }
    },
    name: 'index',
    watch: {

    },
    created() {
     if(this.entry && this.entry === 'app'){
        this.logout();
     }else{
        this.init();
     }
    },
    mounted() {
      // BM.appointment.webview.setTitleBarVisible(true)
    },
    methods:{
      init(){
        let method = 'post';
        let data = {};
        this.$services.GetWorkItemReport({method,data}).success((res) => {
          if(res.success){
            this.workList = res.data.report2.list;
            this.rateList = res.data.report1.list;
            this.rateList = this.rateList.filter((item,index) => {
              return item.ratio>0
            })
          }else {
            // Dialog({ message: res.msg});
          }
        });
      },
      logout(){
         let method = 'get';
          let data = {};
          this.$services.SsoLogout({method,data}).success((res) => {
            if(res.success){
              localStorage.removeItem('user');
              this.$router.push(`login`);
            }else {
              Dialog({ message: res.msg});
            }
          });
      },
      getRate(val){
        return val.toFixed(2)
      },
      toModules(domain_ids,active){
        this.$router.push(`/firstLevelList?domain_ids=${JSON.stringify(domain_ids)}&active=${active}`)
      },
    },

  }
</script>

<style lang="scss" scoped>
  .banner{
    width: 100%;
    height: 150px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .workBench{
    padding-top: 8px;
    background: #fff;
    ul{
      background: #fff;
      li{
        border: none;
        width: 25%;
        float: left;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        justify-content: space-between;
        img{
          display:block;
          width: 40px;
          height: 40px;
        }
        p{
          font-size: 13px;
          color: #333333;
        }
      }
    }
  }
  .rate{
    padding-left: 16px;
    margin-top: 12px;
    background: #fff;
    ul{
      li{
        line-height: 44px;
        .l{
          display: flex;
          align-items: center;
          img{
            float: left;
            display: block;
            width: 22px;
            height: 22px;
            margin-right: 8px;
          }
          span{
            float: left;
            font-family: PingFangSC-Regular;
            font-size: 14px;
          }
        }
        .r{
          font-family: PingFangSC-Regular;
          font-size: 15px;
        }
      }
      /*li:first-child{*/
        /*.l{*/
          /*span{*/
            /*display: block;*/
            /*color: #D81F13;*/
          /*}*/
        /*}*/
        /*.r{*/
          /*span{*/
            /*display: block;*/
            /*color: #D81F13;*/
          /*}*/
        /*}*/
      /*}*/
      /*li:nth-child(2){*/
        /*.l{*/
          /*span{*/
            /*color: #FF9459;*/
          /*}*/
        /*}*/
        /*.r{*/
          /*span{*/
            /*color: #FF9459;*/
          /*}*/
        /*}*/
      /*}*/
      /*li:nth-child(3){*/
        /*.l{*/
          /*span{*/
            /*color: #4381E6;*/
          /*}*/
        /*}*/
        /*.r{*/
          /*span{*/
            /*color: #4381E6;*/
          /*}*/
        /*}*/
      /*}*/
    }
  }
  .public-header{
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #666666;
  }
  ul{
    width: 100%;
    li{
      border-bottom: 1px solid #e5e5e5;
      padding-right: 16px;
      height: 44px;
    }
    li:last-child{
      border-bottom: none;
    }
  }
</style>
