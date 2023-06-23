<!-- eslint-disable  -->
<template>
  <div>
    <!-- 🧐v-for 란? ask라는 배열을 반복해서 이 div태그를 돌린다. for문과 동일-->
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    var vm = this;
    fetchAskList()
      .then(function (response) {
        console.log(response);
        vm.ask = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
