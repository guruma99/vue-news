<!-- eslint-disable  -->
<template>
  <div>
    <ul class="news-list">
      <li v-for:="job in this.$store.state.jobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          <!-- OR연산자 : 좌항이 (job.points) 없는 경우에는 우항으로 (0으로) 표시해라 -->
          {{ job.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <!-- v-bind:href의 축약으로 ':href' 만 써도 된다. -->
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
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
