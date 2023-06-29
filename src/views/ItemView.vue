<template>
  <div>
    <!--🟡 질문 상세 정보 영역 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <!-- v-bind:to=""를 :to 로 축약 할 수 있어요 -->
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
    </section>

    <!--🟡 질문 댓글 영역 -->
    <section class="content-container">
      <h2>{{ fetchedItem.title }}</h2>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
//헬퍼함수 꺼내오기
//vuex bindings에 fetchedItem으로 되어있음.
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
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
