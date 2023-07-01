<template>
  <div>
    <!--🟡 사용자 정보 -->
    <section>
      <!-- 👇UserProfile.vue 컴포넌트 들고오기 -->
      <user-profile :info="fetchedItem">
        <!-- :info라고 props넘겨준다. -->
        <template v-slot:username>
          <!-- <div>{{ fetchedItem.user }}</div> -->
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
