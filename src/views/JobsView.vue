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

  // created() {
  //   this.$store
  //     .dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log("페치됨");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
