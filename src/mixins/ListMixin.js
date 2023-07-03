//mixin

export default {
  //재사용할 컴포넌트 옵션
  created() {
    // #1
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("페치됨");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
