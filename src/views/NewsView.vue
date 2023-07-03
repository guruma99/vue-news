<!-- eslint-disable  -->
<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },

  // mixins: [ListMixin],

  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus;
    },
  },

  async created() {
    this.$store.commit("updateLoadingStatus", true);
    // bus.emitter.$emit("start:spinner");
    // this.$store
    //   .dispatch("FETCH_NEWS")
    //   .then(() => {
    //     console.log("페치됨");
    //     console.log(this.$store.state.LoadingStatus);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      await this.$store.dispatch("FETCH_NEWS");
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this.$store.commit("updateLoadingStatus", false);
      }, 3000); // 3초 지연
    }
  },
  // methods: {
  //   enterKeyFunction() {
  //     this.emitter.emit("start:spinner");
  //   },
  // },
};
</script>

<style></style>
