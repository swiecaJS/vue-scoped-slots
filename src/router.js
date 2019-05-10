import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/basic",
      name: "basic",
      component: () => import("./views/Basic.vue")
    },
    {
      path: "/advanced",
      name: "advanced",
      component: () => import("./views/Advanced.vue")
    }
  ]
});
