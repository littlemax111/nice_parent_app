<template>
  <div>
    <!--<div>-->
      <!--&lt;!&ndash;<van-nav-bar&ndash;&gt;-->
        <!--&lt;!&ndash;title="动态"&ndash;&gt;-->
      <!--&lt;!&ndash;/>&ndash;&gt;-->
    <!--</div>-->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item v-model="domain_id" :options="workList" @change="initWait"/>
      </van-dropdown-menu>
    </van-sticky>

    <div class="content">
      <van-tabs v-model="active" animated @click="getList">

        <van-tab v-for="(item,index) in tabTitle" :key="index" :title="tabTitle[index]">
            <ul v-if="active == 0">
              <li v-for="(item,index) in list" :key="index">
                <p class="double_wrap" @click="goDetails(item.id,item.domain_name)">{{item.title}}</p>
                <div class="clear">
                  <span v-if="item.execute_state == 'processing'" style="color: #4281E7;">进行中</span>
                  <span v-if="item.execute_state == 'wait_confirm'" style="color: #FFA04F;">待审核</span>
                  <span v-if="item.execute_state == 'done'" style="color:#35B94D;">已完成</span>
                  <span v-if="item.execute_state == 'unfinished'" style="color: #FC5552;">未完成</span>
                  <!--<span v-if="item.execute_state == 'delay'"style="color: #FC5552;">超时</span>-->
                  <span v-if="item.execute_state == 'delay'">
                                    <span v-if="is_opened_status == 'False'" style="color: #a6a9ad;">超时</span>
                                    <span v-if="is_opened_status == 'True'" style="color: #4281E7;">处理中</span>
                                </span>
                  <span>{{item.domain_name}}</span>
                  <span>计划结束时间：{{item.plan_end_date}}</span>
                </div>
              </li>
            </ul>
            <ul v-if="active == 1">
              <li v-for="(item,index) in list" :key="index">
                <p class="double_wrap" @click="goDetails(item.id,item.domain_name)">{{item.title}}</p>
                <div class="clear">
                  <span v-if="item.execute_state == 'processing'" style="color: #4281E7;">进行中</span>
                  <span v-if="item.execute_state == 'wait_confirm'" style="color: #FFA04F;">待审核</span>
                  <span v-if="item.execute_state == 'done'" style="color:#35B94D;">已完成</span>
                  <span v-if="item.execute_state == 'unfinished'" style="color: #FC5552;">未完成</span>
                  <!--<span v-if="item.execute_state == 'delay'"style="color: #FFA04F;">处理中</span>-->
                  <span v-if="item.execute_state == 'delay'">
                                    <span v-if="is_opened_status == 'False'" style="color: #a6a9ad;">超时</span>
                                    <span v-if="is_opened_status == 'True'" style="color: #4281E7;">处理中</span>
                                </span>
                  <span>{{item.domain_name}}</span>
                  <span>计划结束时间：{{item.plan_end_date}}</span>
                </div>
              </li>
            </ul>
        </van-tab>
      </van-tabs>
    </div>
</div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        active:0,
        tabTitle:['待办','超时'],
        list: [],
        workList:[],
        expiration_date:'',
        is_opened_status:'',
        domain_id:'',
        is_opened:'True'
      }
    },
    watch: {},
    created() {
      // this.expiration_date = this.dateString();
      // BM.appointment.webview.setTitleBarVisible(true)
       this.initConditions(()=>{
         this.initWait();
       });
    },
    mounted(name) {
      // this.active = name;
      // if(name == 0){
      //   this.is_opened = 'True'
      //   this.initWait()
      // }else {
      //   this.is_opened = 'False'
      //   this.initWait();
      // }
    },
    beforeRouteLeave(to, from, next) {
      if (to.name == "secondLevelList") {
        from.meta.keepAlive = true;
      } else {
        from.meta.keepAlive = false;
      }
      next();
    },
    methods: {
      // dateString: function () {
      //   let date = new Date();
      //   let year = date.getFullYear();
      //   let month = (date.getMonth()+1)>10?(date.getMonth()+1):'0'+(date.getMonth()+1);
      //   let day = (date.getDate())>10?(date.getDate()):'0'+(date.getDate());
      //   let hour = (date.getHours())>10?(date.getHours()):'0'+(date.getHours());
      //   let minute = (date.getMinutes())>10?(date.getMinutes()):'0'+(date.getMinutes());
      //   let seconds = (date.getSeconds())>10?(date.getSeconds()):'0'+(date.getSeconds());
      //   return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
      // },
      getList(name){
        // console.log(name)
        if(name == 0){
          this.is_opened = 'True'
          this.initWait()
        }else {
          this.is_opened = 'False'
          this.initWait();
        }
      },
      initWait(){
        console.log('1111')
        let method = 'post';
        let data = {
          page:10,
          limit:0,
          org_id:'',
          state:'delay',
          domain_id:this.domain_id,
          is_opened:this.is_opened,
        };
        this.$services.GetWorkList({method,data}).success((res) => {
          if(res.success){
            this.is_opened_status = this.is_opened
            this.$nextTick(()=>{
              this.list = res.data;
              console.log(this.list)
            })
          }else{
            Toast({ message: res.msg});
          }
        });
      },
      initConditions(callback){
        var that =this;
        let method = 'post';
        let data = {
          expiration_date:this.expiration_date
        };
        this.loading = true;
        this.$services.GetWorkItemReport({method,data}).success(function(res){
          that.loading = false;
          if(res.success){
            if(res.data.report2.list.length>0){
              that.workList = res.data.report2.list.filter(item => {
                return (item.overtime || item.rodo);
              });
            }
            let arr = []
              that.workList.map((item)=>{
                let obj = {};
                obj.text = item.label;
                obj.value = item.id;
                arr.push(obj)
              })
            that.workList = arr;
            if(that.workList.length>0){
              that.domain_id = that.workList[0].value;
            }
            if(callback){
              callback();
            }
          }else{
            Toast({ message: res.msg});
          }
        });
      },
      goDetails(discussion_id,discussion_name){
        this.$router.push(`/secondLevelList?discussion_id=${discussion_id}&discussion_name=${discussion_name}`)
      }
    },

  }
</script>

<style lang="scss" scoped>
  /deep/ .van-tabs__wrap{
    position: sticky;
    top: 50px;
    left: 0;
    z-index: 1;
  }
  .content{

    ul{
      /*height: calc(100vh - 150px);*/
      /*overflow-y: auto;*/
      /*margin-top: 10px;*/
      padding-bottom: 50px;
     li{
       padding: 16px;
       background: #ffffff;
       p{
         font-size: 16px;
         color: #333333;
         line-height: 22px;
       }
      div{
        margin-top: 8px;
        span{
          display: block;
          float: left;
          margin-right: 12px;
        }
        span:first-child{

          border-radius: 2px;
          color: #fff;
          font-size: 10px;
          padding: 2px 4px;
        }
        span:nth-child(2){
          font-size: 12px;
          color: #999999;
        }
        span:last-child{
          font-size: 12px;
          color: #999999;
        }
      }
     }
    }
  }
</style>
