// ✅ index.js파일, 여기서 호출할 수 있게끔 api 함수들을 정리한다.
// node_modules/axios 노드모듈에 설치된 라이브러리 axios를 들고온다.
import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정 (토큰처리한다고 하면 토큰관련된 로직들도 공통적으로 사용할 수 있음)
//주소가 뒷 부분이 달라지고 앞부분은 동일할 때, baseUrl로 묶어서.
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
//baseUrl 다음 +로 변수를 연결, 뒤의 나머지 주소를 붙여서 처리한다.
//ES6 문법: 자바스크립트 변수와 문자를 연결하는 것을 ``백틱과 $달러 쓰며 바꿀 수 있다.
function fetchNewsList() {
  //   return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  //   return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  //   return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}
export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
};

//api가 많아질때는 import export로 모듈화를 할 수 있다. 그에 대한것은 다음 섹션에서!
