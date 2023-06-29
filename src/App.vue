<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- URI에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <Transition name="page">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
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
