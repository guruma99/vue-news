//api들고옴
import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from "../api/index.js";
export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        // console.log(response.data);
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //ES6 Destructuring 문법으로 {commit}, {data}가 가능하게 된다.
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        // console.log(commit);
        commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch((error) => console.log(error));
  },
};
