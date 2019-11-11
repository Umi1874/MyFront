import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/foo",
    component: () => import("../views/foo.vue")
  },
  {
    path: "/bar",
    component: () => import("../views/bar.vue")
  },
  {
    path: "/user/:id",
    component: () => import("../views/user.vue")
  }
];

const createRouter = () =>
  new Router({
    routes: constantRoutes
  });
const router = createRouter();
export default router;
