<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- URI에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <router-view></router-view>
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
</style>
