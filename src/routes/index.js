// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "news",
  },
  {
    //path: url 주소
    path: "/news",
    //component: url 주소로 갔을 때 표시될 컴포넌트 =page
    component: NewsView,
  },
  {
    path: "/ask",
    component: AskView,
  },
  {
    path: "/jobs",
    component: JobsView,
  },
  {
    path: "/user",
    component: UserView,
  },
  {
    path: "/item",
    component: ItemView,
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
