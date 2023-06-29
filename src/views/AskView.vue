<!-- eslint-disable  -->
<template>
  <div>
    <!-- 🧐v-for 란? ask라는 배열을 반복해서 이 div태그를 돌린다. for문과 동일-->
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->

    <p v-for="item in fetchedAsk">
      <!-- 🧐 v-bind 란? item안에 있는 데이터를 연결할 때는 v-bind:href -->
      <!-- <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a> -->

      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    //#4️⃣index.js에서 getters의 fetchedAsk라는 변수를 바로 쓰고싶다면,
    // #2번과 같이 객체가 아니라 배열로 연결하면 된다.
    ...mapGetters(["fetchedAsk"]),

    //#3️⃣
    // ...mapGetters({
    //   //vuex에서 설정한 속성이 오른쪽 문자열부분,
    //   //이 속성의 이름이 왼쪽 컴포넌트에서 쓰일 이름과 다르다면? 그래도 똑같이 동작. vuex 바인딩됨.
    //   askItems: "fetchedAsk",
    // }),

    //#2️⃣
    // ...mapState({
    //   fetchedAsk: (state) => state.ask,
    // }),
    //#1️⃣
    // ask() {
    //   return this.$store.state;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // var vm = this;
    // fetchAskList()
    //   .then(function (response) {
    //     console.log(response);
    //     vm.ask = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
