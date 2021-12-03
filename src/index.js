import { createStore } from "redux";
import shortid from "shortid";

const ul = document.getElementById("ul");
const form = document.getElementById("form");
const input = document.getElementById("input");

const ADD = "ADD";
const DONE = "DONE";
const DELETE = "DELETE";

const reducer = (state = [], { text, type, id, isDone }) => {
  switch (type) {
    case ADD:
      return [{ text, id: shortid.generate(), isDone: 0 }, ...state];

    case DONE:
      const newState = state.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !+isDone ? 1 : 0 };
        }
        return item;
      });
      return newState;
    case DELETE:
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;
window.dispatch = dispatch;
function render() {
  const tags = getState().map(({ text, id, isDone }) => {
    return `<li class='${isDone ? "red" : ""}'
              onClick={dispatch({type:"${DONE}",id:"${id}",isDone:"${isDone}"})}>${text}
              <button onClick={dispatch({type:"${DELETE}",id:"${id}"})}>del</button>
            </li>`;
  });

  ul.innerHTML = tags.join("");
}

subscribe(render);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dispatch({ type: ADD, text: input.value });
});
