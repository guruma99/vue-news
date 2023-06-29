<!-- eslint-disable  -->
<template>
  <div>
    <!-- 👇user in users에서 user in this.$store.state.news로 바꿀 수 있게 된다. -->
    <!-- <div v-for="user in this.$store.state.news">
      {{ user.title }}
    </div> -->

    <p v-for="item in this.$store.state.news">
      <!-- item안에 있는 데이터를 연결할 때는 v-bind:href -->
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";

export default {
  // 필요없게됨
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    // 👇1️⃣ Actions를 실행
    // dispatch('함수명','전달인자')로 실행시킬 수 있다.
    // 실행시키면 FETCH_NEWS 로 코드의 제어가 넘어간다...
    this.$store.dispatch("FETCH_NEWS");

    // console.log("호출 전 : ", this);
    // #1
    // fetchNewsList()
    //   .then((response) => {
    //     console.log("호출 후 :", this);
    //     // 2
    //     this.users = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
