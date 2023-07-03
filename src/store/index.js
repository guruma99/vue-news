//✅ Store: 공통 저장소로 언제든지 빼서 쓸 수 있다.
//vuex: 상태관리 라이브러리(도구)
import { createStore } from "vuex";
//api들고옴
//import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
//stroe폴더의 index.js 이 파일 안에서 state, mutations, actions 한 번에 작성해 관리 할 수 있지만 코드정리 위해 따로 분할하였다.
import mutations from "./mutations.js";
import actions from "./actions.js";

//👇인스턴스: 내보내야한다.
export const store = createStore({
  //스테이트에 news,jobs,ask,user,item이라는 배열형태로 속성을 선언한다.
  //상태(state) 라는것은 여러 컴포넌트간에 공유되는 데이터 속성을 말한다.
  //여기서 타입 정의를 하면 props로 데이터를 받아 쓸 때도 영향을 미친다.
  //👇state에 이렇게 바로 넣고싶은데,, 안 담아진다! 순서있음
  //state.news = response.data;
  state: {
    news: [],
    jobs: [],
    ask: [],
    //user은 사용자 하나라서 객체로{}
    user: {},
    item: {},
    list: [],
    //로딩스피너 상태
    loadingStatus: false,
  },

  getters: {
    // fetchedAsk(state) {
    //   return state.ask;
    // },
    fetchedItem(state) {
      return state.item;
    },
  },

  //mutations: mutations 라서 좌&우가 같다면 축약 가능.
  mutations,

  //actions: actions 라서 좌&우가 같다면 축약 가능.
  actions,
});
