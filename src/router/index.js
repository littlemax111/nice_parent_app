import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/coursePage",
      name: "coursePage",
      component: () => import('@/views/coursePage/index.vue'),
    },
  ],
});
