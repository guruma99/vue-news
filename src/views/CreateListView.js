//✅ CreateListView.js -- 하이오더컴포넌트
//요청하는 역할 담당
import ListView from "./ListView.vue";
//👇vue3에서는 하이오더컴포넌트 정의할 때 import 를 이렇게 두개 꼭 해줘야 함.
import { defineComponent, h } from "vue";
//function 하나꺼내기
export default function createListView(name) {
  // 💡defineComponent : 컴포넌트를 선언하는 헬퍼 함수
  return defineComponent({
    //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name, //👉 name은 NewsView, JobsView, AskView가 될 수 있다., 네이밍 다르게도 가능
    created() {
      //해당 페이지의 라우트 이름을 이용해서 list에 넘기기
      //⚪1️⃣action으로 가고,
      this.$store.dispatch("FETCH_LIST", this.$route.name);
    },
    // 👇render 함수는 Vue.js에서 가상 DOM 구조를 생성하고 화면에 그리는 데 사용되는 함수입니다.
    // 일반적으로 Vue.js 개발에서는 template 또는 JSX를 사용하여 컴포넌트 구조를 작성하며,
    // 내부적으로 Vue는 이를 render 함수로 변환하여 사용합니다.
    render() {
      //내부적으로 템플릿을 변환해주고 그 변환해줄때 렌더함수를 쓴다. 그 랜더함수로 컴포넌트를 로딩한다.
      // h: createElement 함수-- 컴포넌트 트리와 관련된 Virtual DOM 노드를 생성하는 함수

      return h(ListView);
    },
  });
}
