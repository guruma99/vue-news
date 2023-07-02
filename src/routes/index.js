import { createRouter, createWebHistory } from "vue-router";
// import NewsView from "../views/NewsView.vue";
// import JobsView from "../views/JobsView.vue";
// import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

// Vue.use(VueRouter);
// this.$route로 각 페이지의 라우트정보에 접근할 수 있다.
const routes = [
  {
    path: "/",
    redirect: "news",
  },
  {
    //path: url 주소
    path: "/news",
    name: "news",
    //component: url 주소로 갔을 때 표시될 컴포넌트 =page
    // component: NewsView,
    component: createListView("NewsView"),
  },
  {
    path: "/ask",
    name: "ask",
    // component: AskView,
    component: createListView("AskView"),
  },
  {
    path: "/jobs",
    name: "jobs",
    // component: JobsView,
    component: createListView("JobsView"),
  },
  {
    //params으로 vue 라우터가 집어넣는다.
    path: "/user/:id",
    component: UserView,
  },
  {
    path: "/item/:id",
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
