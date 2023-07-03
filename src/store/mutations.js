export default {
  //   3️⃣mutations에서 state의 값을 넘겨줄 때 첫번째 인자는 state가 된다.
  //   mutations의 주요 목적으로, state속성을 변경시킬 수 있게 된다.
  //   mutations 내에 함수 형태로 작성한다.
  //   actions의 response.data가 두번째 인자로 넘어온다. 두번째 인자 네이밍은 작성자마음.
  // SET_NEWS() {} ==>> SET_NEWS: function(){} 이걸 축약해 작성한 것!
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },

  // ⚪4️⃣ state에 값 담기
  SET_LIST(state, list) {
    state.list = list;
  },

  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },

  //로딩스피너 상태
  updateLoadingStatus(state, isLoading) {
    state.loadingStatus = isLoading;
  },
};
