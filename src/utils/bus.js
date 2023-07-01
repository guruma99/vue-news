import { createApp } from "vue";
import App from "../../src/App.vue";
// import Vue from "vue";

//bus.js
export const bus = createApp(App);
//bus.js
// export default new Vue();

// export default로 넘겨주면 import하는 곳에서 파일연결만 잘하면 자유롭게 작명하여 받을 수 있다.
