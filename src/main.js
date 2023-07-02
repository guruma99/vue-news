//👇 vue 2버전 작성법
// vue 2와 vue 3은 앱을 만들 때부터 차이가 있어요.

// import Vue from 'vue'
// import App from './App.vue'
// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
//   router: router,
//   //router라고 써도됨! 앞,뒤가 같을 때
//   store,
// }).$mount("#app");

// 👇vue 3 은 이렇게 씁니다.
import { createApp } from "vue";
import App from "./App.vue";
// import mitt from "mitt";
// 생성한 뷰 라우터 받아오기
import { router } from "./routes/index.js";
import { store } from "./store/index.js";

// createApp(App).mount("#app");
// const emitter = mitt();
const app = createApp(App);
// app.config.globalProperties.emitter = emitter;
app.use(router); // 라우터 사용
app.use(store);
app.mount("#app");
