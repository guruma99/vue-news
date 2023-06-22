// import Vue from "vue";
import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./routes/index.js";

// 생성한 뷰 라우터 받아오기
const app = createApp(App);
app.use(router); // 라우터 사용
app.mount("#app");

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
//   router: router,
//   //router라고 써도됨 앞뒤가 같을 때
// }).$mount("#app");

// createApp(App).mount("#app");
