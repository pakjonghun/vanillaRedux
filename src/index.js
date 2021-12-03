import { createStore } from "redux";

const value = document.getElementById("value");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//리듀서만 스테이트를 관리한다!
//1. 처음에는 state=default 가 action type init으로 불려진다.
//2. 그 다음에는 내가 바꾸기 나름!!
//3. action 은 obj 여야 한다.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

const render = () => {
  value.innerText = store.getState();
};

//subscribe 는 리듀서 호출시 어떤 일을 한다.(여기서는 render)
store.subscribe(render);

function plusFunc() {
  //dispatch를 통해서 reducer 에 소통한다.
  store.dispatch({ type: INCREASE });
}

plus.addEventListener("click", plusFunc);
