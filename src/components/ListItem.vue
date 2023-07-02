<template>
  <div>
    <ul class="news-list">
      <li v-for:="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <!-- v-bind:to=""를 :to 로 축약 할 수 있어요 -->
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-bind:to="`/user/${item.user}`"
              class="link-text"
              v-if="item.user"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<!-- 🧐 페이지에 따라 분기 시키는 방법
1️⃣<template v-if>가상의 태그를 사용하여 vue내부적으로 분기처리 하여 ,
v-if 안에 해당되는 조건이 있다면 조건안의 것을 뿌릴 것이고 
<template v-else> 라면 해당태그 안의 내용을 뿌린다.
2️⃣ <router-link>, <a>태그 등에 바로 v-if, v-else 를 사용할 수 있다. -->

<script>
export default {
  created() {
    // this.$route로 각 페이지의 라우트정보에 접근할 수 있다.
    // console.log(this.$route.path === "/news");
    // const name = this.$route.name;
    // if (name === "news") {
    //   this.$store.dispatch("FETCH_NEWS");
    //   // actionName = "FETCH_NEWS";
    // } else if (name === "ask") {
    //   this.$store.dispatch("FETCH_ASK");
    //   // actionName = "FETCH_ASK";
    // } else if (name === "jobs") {
    //   this.$store.dispatch("FETCH_JOBS");
    //   // actionName = "FETCH_JOBS";
    // }
    // this.$store.dispatch(actionName);
  },
  //computed속성으로 데이터 뿌려줄 것들을 연결시켜준다.
  // 🐛🐛 es-lint 에서는 if문 사용할 때에 꼭! else가 마무리 되어야 오류로 잡지 않는다.
  computed: {
    listItems() {
      // const name = this.$route.name;
      // if (name === "news") {
      //   return this.$store.state.news;
      // } else if (name === "ask") {
      //   return this.$store.state.ask;
      // } else {
      //   return this.$store.state.jobs;
      // }
      return this.$store.state.list;
    },
  },
};
</script>

<style>
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
