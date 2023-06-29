<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
  </div>
</template>

<script>
export default {};
</script>

<!-- 🧐 css가 캐스케이딩 스타일시트라서(cascading style sheet) 항상 상위 태그의 스타일이 아래로 상속된다.
  하지만, scoped은 해당 컴포넌트에만 적용되는 스타일을 정의할 수 있다. -->
<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 10px;
  /* font-size: 50px; */
}
.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>
