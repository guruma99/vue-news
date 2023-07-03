// 2️⃣ Actions에서 commit을해서 Mutations에 값을 넘기고 있다.
// Actions의 주요 목적은 mutations를 실행시키는 것
// commit('함수명', '전달인자')으로 Mutations 호출한다.

import {
  //api들고옴
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from "../api/index.js";

export default {
  // 👇promise 비동기 처리 패턴
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       // console.log(response.data);
  //       context.commit("SET_NEWS", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // 🧐 async&await 구문
  // --> 비동기처리코드에서 return 을 작성하지 않으면 생기는 일은?
  // 화면에서의 비동기순서를 보장할 수 없기 때문에(UX가 불안정해보이고 약간의 오류), 결과값을 항상 반환해줘야 한다.
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },

  //ES6 Destructuring 문법으로 {commit}, {data}가 가능하게 된다.
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        // console.log(commit);
        commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },

  async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  //♻️ 위의 news,ask,jobs를 List로 한 번에 처리하여 중복사용할 수 있다.
  //try , catch구문 작성은 action폴더 보다는 api 폴더의 index.js부분에서 한다. 가독성.
  async FETCH_LIST({ commit }, pageName) {
    // ⚪2️⃣api 호출하고
    const response = await fetchList(pageName);
    // ⚪3️⃣mutation호출
    commit("SET_LIST", response.data);
    return response;
  },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => console.log(error));
  },
};
