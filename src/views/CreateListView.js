//CreateListView.js -- 하이오더컴포넌트
// 요청하는 역할 담당
import ListView from "./ListView.vue";
// import { h } from "vue";
import { defineComponent, h } from "vue";
//function 하나꺼내기
export default function createListView(name) {
  return defineComponent({
    //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name, //👉 name은 NewsView, JobsView, AskView가 될 수 있다., 내가 직접지정도 가능
    created() {
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          console.log("페치됨");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render() {
      //내부적으로 템플릿을 변환해주고 그 변환해줄때 렌더함수를 쓴다. 그 랜더함수로 컴포넌트를 로딩한다.
      return h(ListView);
    },
  });
}
