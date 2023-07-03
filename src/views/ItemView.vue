<!-- Ask에서 질문을 클릭 했을 때 해당질문의 상세 페이지 -->
<template>
  <div>
    <!--🟡 사용자 정보 -->
    <section>
      <!-- 👇UserProfile.vue 컴포넌트 들고오기 -->
      <!-- :info로 축약가능 -->
      <user-profile props:info="fetchedItem">
        <!-- :info라고 props넘겨준다. -->
        <!-- 🐛🐛v-slot 은 template을 같이 써줘야만 가능하다. -->
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`" class="link-text">
            {{ fetchedItem.user }}
          </router-link>
        </template>

        <template v-slot:time>
          {{ "Posted " + fetchedItem.time_ago }}
        </template>
      </user-profile>
    </section>

    <!--🟡 질문 제목  -->
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <!--🟡 질문 댓글 (본문)  -->
    <section class="content-container">
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
//헬퍼함수 꺼내오기
//vuex bindings에 fetchedItem으로 되어있음.
import { mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    // store의 getters의 fetchedAsk라는 변수를 바로 쓰고싶다면, store에 정의된 대로 객체가 아니라 배열로 연결하면 된다.
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    //ASK의 list에서 클릭해서 이동하며 해당 값을 넣어주었음. -> this.$route.params.id사용가능
    const itemId = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
.content-container {
  padding: 0.5rem;
}
</style>
