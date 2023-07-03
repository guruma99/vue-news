<!-- 유저 상세페이지 -->
<template lang="">
  <div>
    <!-- :info라는 이름으로 props넘겨준다. -->
    <user-profile :info="userInfo">
      <!-- 🧐v-slot:name 하위 컴포넌트들을 미완성인 상태에서 가져와
        미완성이었던 부분들을 채워주며 사용하면 된다. -->
      <template v-slot:username>
        <div>{{ userInfo.id }}</div>
      </template>
      <template v-slot:time>
        <span>{{ "Joined" + userInfo.created }}, </span>
      </template>
      <template v-slot:karma>
        <span>{{ userInfo.carma }}</span>
      </template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  // computed는 오브젝트 형태로 작성해주고 리턴 값은 함수 형태로 작성해주면 된다.
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    console.log(userName);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
