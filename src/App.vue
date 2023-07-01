<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- URI에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <Transition name="page">
      <router-view></router-view>
    </Transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    //👇methods적기 전
    // bus.$on("start:spinner", () => (this.loadingStatus = true));
    //👇methods적은 후
    bus.$on("start:spinner", this.startSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
