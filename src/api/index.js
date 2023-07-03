// ✅ api폴더의 index.js파일, 여기서 호출할 수 있게끔 api 함수들을 정리한다.
// node_modules/axios 노드모듈에 설치된 라이브러리 axios를 들고온다.
// 💡axios는 promise기반으로 api를 제공한다.
import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정 (토큰처리한다고 하면 토큰관련된 로직들도 공통적으로 사용할 수 있음)
//주소가 뒷 부분이 달라지고 앞부분은 동일할 때, baseUrl로 묶어서.
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
// baseUrl 다음 +로 변수를 연결, 뒤의 나머지 주소를 붙여서 처리한다.
// ES6 문법: 자바스크립트 변수와 문자를 연결하는 것을 ``백틱과 $달러 쓰며 바꿀 수 있다.
// try, catch는 자바스크립트의 전통적인 아주 오래된 예외처리 구문이다.

async function fetchNewsList() {
  try {
    //axios.get(config.baseUrl + "news/1.json");
    const response = await axios.get(`${config.baseUrl}news/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchJobsList() {
  try {
    //Lint에서 이렇게 쓰기도..
    return await axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (error) {
    console.log(error);
  }
}
//♻️ 위의 news,ask,jobs를 List로 한 번에 처리하여 중복사용할 수 있다.
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchCommentItem(id) {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
};

//api가 많아질때는 import export로 모듈화를 할 수 있다. 그에 대한것은 다음 섹션에서!
//순서: api호출-> 데이터 담아주기 -> 뿌려주기
