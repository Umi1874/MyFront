import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  if (to.name == "foo") {
    window.location.reload();
  }
  next();
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
