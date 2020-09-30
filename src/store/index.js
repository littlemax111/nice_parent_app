import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from './actions';
import getters from './getters'


Vue.use(Vuex)

const state={
  grade:{config_id:-1,name:'选择在读年级'},
  school:{campus_id:1,campus_name:'滨江'},
  city:{id:6,name:'杭州'},
  classDate:'',
  gradeList:[],
  campusList:[],
  studentMsg:{},
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
