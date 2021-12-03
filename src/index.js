const value = document.getElementById("value");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const plusFunc = () => {
  ++Number(value.innerText)
};

const minusFunc = () => {
  ++Number(value.innerText) 
};

plus.addEventListener("click", plusFunc);
minus.addEventListener("click", minusFunc);
