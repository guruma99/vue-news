<!-- eslint-disable  -->
<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },

  mixins: [ListMixin],

  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus;
    },
  },

  // async created() {
  //   this.$store.commit("updateLoadingStatus", true);

  //   try {
  //     await this.$store.dispatch("FETCH_NEWS");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.$store.commit("updateLoadingStatus", false);
  //     // setTimeout(() => {
  //     //   this.$store.commit("updateLoadingStatus", false);
  //     // }, 500); // 3초 지연
  //   }
  // },
};
</script>

<style></style>
