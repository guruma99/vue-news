<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <!-- 기존의 데이터 바인딩, props로 받아온 것 :
        👉 <div>username: {{ info.id }}</div> -->

      <!-- ✅
        ItemView -> info.user , UserView -> info.id 로 페이지마다 접근하는 속성이 다른데,
        기존 배운 방법인 가상태그 template에 v-if, else로 접근할 수도 있겠지만
        좀 더 쉬운 접근으로 slot으로 name을 정의하고 사용했다.-->
      <slot name="username">
        <!-- 상위 컴포넌트or페이지에서 정의할 영역 -->
      </slot>
      <div class="time">
        <!--👉기존: time: {{ info.created }} -->
        <slot name="time">
          <!-- 상위 컴포넌트or페이지에서 정의할 영역 -->
        </slot>
      </div>
      <slot name="karma">
        <!-- 상위 컴포넌트or페이지에서 정의할 영역 -->
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  //info라고 하는 것이 Object타입으로 내려오게 됨.
  props: {
    info: Object,
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   },
  // },
};
</script>
<style>
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
