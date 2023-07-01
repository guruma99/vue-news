<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>created : {{ this.$store.state.user.created }}</p>
  </div>
</template>

<script>
export default {
  //computed 연산식을 이용하면 👆위의 템플릿의 표현식이
  //<p>name : {{ this.$store.state.user.id }}</p> 이 부분을
  // name : {{ userInfo.id }}로 축약 할 수 있다. ✅정돈 된 형태가 될수 있다!
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    //파라미터로 꺼내온다.
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    //디스패치로 넘겨서 userview를 호출한다.
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
