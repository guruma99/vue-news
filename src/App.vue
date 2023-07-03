<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- URI에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <Transition name="page">
      <router-view></router-view>
    </Transition>
    <!-- props로 받아온 것 -->
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  // data() {
  //   return {
  //     loadingStatus: true,
  //   };
  // },

  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus;
    },
  },

  // methods: {
  //   startSpinner() {
  //     this.loadingStatus = true;
  //   },
  //   endSpinner() {
  //     this.loadingStatus = false;
  //   },
  // },
  created() {
    // 🐛🐛 vue2에서만 eventBus 가능. 현재 vue3에서는 안먹는다.
    // 👇methods적기 전
    // bus.$on("start:spinner", () => (this.loadingStatus = true));
    // 👇methods적은 후
    // bus.emitter.on("start:spinner", this.startSpinner);
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
