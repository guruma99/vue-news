<template lang="">
  <div>
    <!-- :info라고 props넘겨준다. -->
    <user-profile :info="userInfo">
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
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
