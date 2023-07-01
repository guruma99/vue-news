//✅ Store: 공통 저장소로 언제든지 빼서 쓸 수 있다.
//vuex: 상태관리 라이브러리(도구)
//api를 vuex에서 호출한다고 하면 actions에서 해야된다.
import { createStore } from "vuex";
//api들고옴
// import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

//👇인스턴스: 내보내야한다.
export const store = createStore({
  //스테이트에 news,jobs,ask,user,item이라는 배열형태로 속성을 선언한다.
  //상태(state) 라는것은 여러 컴포넌트간에 공유되는 데이터 속성을 말한다.
  state: {
    news: [],
    jobs: [],
    ask: [],
    //use는 하나라서 객체로{}
    // 여기서 타입 정의를 하면 props로 데이터를 받아 쓸 때도 영향을 미친다.
    user: {},
    item: {},
  },

  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },

  mutations,
  // mutations: {
  //   SET_NEWS() {} ==>> SET_NEWS: function(){} 이걸 축약한거!
  //   👇3️⃣ mutations에서 state의 값을 넘겨줄 때 첫번째 인자는 state가 된다.
  //   mutations의 주요 목적으로, state속성을 변경시킬 수 있게 된다.
  //   mutations 내에 함수 형태로 작성한다.
  //   actions의 response.data가 news란 이름으로 넘어온다. 두번째 인자는 작성자마음.
  //   SET_NEWS(state, news) {
  //     state.news = news;
  //   },
  //   SET_JOBS(state, jobs) {
  //     state.jobs = jobs;
  //   },
  //   SET_ASK(state, ask) {
  //     state.ask = ask;
  //   },
  // },

  actions,
  // actions: {
  //   //FETCH_NEWS함수선언
  //   //API 호출은 actions에서 !
  //   FETCH_NEWS(context) {
  //     fetchNewsList()
  //       .then((response) => {
  //         console.log(response.data);
  //         //👇state에 이렇게 바로 넣고싶은데,, 안 담아진다! 순서있음
  //         //state.news = response.data;
  //         //👇2️⃣ Actions에서 commit을해서 Mutations에 값을 넘기고 있다.
  //         // Actions의 주요 목적은 mutations를 실행시키는 것
  //         // commit('함수명', '전달인자')으로 Mutations 호출한다.
  //         context.commit("SET_NEWS", response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_JOBS({ commit }) {
  //     fetchJobsList()
  //       .then(({ data }) => {
  //         console.log(commit);
  //         commit("SET_JOBS", data);
  //       })
  //       .catch((error) => console.log(error));
  //   },
  //   FETCH_ASK({ commit }) {
  //     fetchAskList()
  //       .then(({ data }) => {
  //         commit("SET_ASK", data);
  //       })
  //       .catch((error) => console.log(error));
  //   },
  // },
});
