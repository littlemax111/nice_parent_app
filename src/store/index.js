import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from './actions';
import getters from './getters'


Vue.use(Vuex)

const state={
  grade:{id:10,name:'高一'},
  school:{id:5,name:'滨江学习中心'},
  city:{id:6,name:'杭州'}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
