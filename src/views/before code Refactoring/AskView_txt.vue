<!-- eslint-disable  -->
<template>
  <div>
    <ul class="news-list">
      <!-- 🧐v-for 란? ask라는 배열을 반복해서 이 div태그를 돌린다. for문과 동일-->
      <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
      <!-- v-for:key 속성추가해야 에러가 뜨지않음 -->
      <li v-for:="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <!-- 🧐 v-bind 란? item안에 있는 데이터를 연결할 때는 v-bind:href -->
            <!-- <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a> -->
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
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
  </div>
</template>

<script>
// mapState는 computed라고 하는 속성을 사용해야한다.
// import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    //#4️⃣index.js에서 getters의 fetchedAsk라는 변수를 바로 쓰고싶다면,
    // #2번과 같이 객체가 아니라 배열로 연결하면 된다.
    ...mapGetters(["fetchedAsk"]),

    //mapGetters의 객체 표기법, 배열 표기법의 차이!
    //#3️⃣
    // ...mapGetters({
    //   //vuex에서 설정한 속성이 오른쪽 문자열부분,
    //   //이 속성의 이름이 왼쪽 컴포넌트에서 쓰일 이름과 다르다면? 그래도 똑같이 동작. vuex 바인딩됨.
    //   askItems: "fetchedAsk",
    // }),

    //#2️⃣객체 괄호 열어서!
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
