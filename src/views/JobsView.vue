<!-- eslint-disable  -->
<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs">
      {{ job.title }}
    </div> -->
    <p v-for="job in this.$store.state.jobs">
      <!-- v-bind:href의 축약으로 ':href' 만 써도 된다. -->
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
