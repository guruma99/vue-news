//mixin

export default {
  //재사용할 컴포넌트 옵션
  created() {
    this.$store.commit("updateLoadingStatus", true);
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("fetched");
        this.$store.commit("updateLoadingStatus", false);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
