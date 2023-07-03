<!-- news,jobs,ask 페이지에서 처음 보이는 게시글 목록들 표현하는 컴포넌트 -->
<template>
  <div>
    <ul class="news-list">
      <li v-for:="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          <!--✅ OR연산 : 좌항이 없다면 우항으로 -->
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
            <!-- domain이 있다면 앵커태그로 해당 페이지로 넘어가게하고 그 외에는 ask의 질문내역 상세페이지로 이동해라-->
            <template v-else>
              <!-- 🧐💡 바인딩 할 때!! route에 정의한 대로 링크작성 해야 정상적으로 동작한다.
              '/'를 써야 기존 주소에 덧 붙여진다.  -->
              <!-- v-bind:to=""를 :to 로 축약 할 수 있어요 -->
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <!--  -->

          <small class="link-text">
            <!-- 유저가 글을 작성한 시간 -->
            {{ item.time_ago }} by
            <router-link
              v-bind:to="`/user/${item.user}`"
              class="link-text"
              v-if="item.user"
            >
              {{ item.user }}
            </router-link>
            <!-- item.user가 있다면 유저이름을 띄우고, 그 외에는 도메인을 띄워라.-->
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
  <template v-else> 그 외라면 v-else 해당태그 안의 내용을 뿌린다.

2️⃣<router-link>, <a>태그 등에 바로 v-if, v-else 를 사용할 수 있다. -->

<script>
export default {
  //💡 created 메서드 : (컴포넌트가 생성)되자마자 호출되는 로직
  created() {
    // // this.$route로 각 페이지의 라우트정보에 접근할 수 있다.
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
  //template에서 꺼내쓰자.
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
      //👇Mixins 쓸 때 주석 풀기
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
