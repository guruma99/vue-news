<!-- eslint-disable  -->
<template>
  <div>
    <ul class="news-list">
      <li v-for:="item in this.$store.state.news" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <!-- item안에 있는 데이터를 연결할 때는 v-bind:href -->
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>

    <!-- item안에 있는 데이터를 연결할 때는 v-bind:href -->
    <!-- <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p> -->
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
    //created 속성함수에서
    // this.$store.dispatch("FETCH_NEWS");
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
