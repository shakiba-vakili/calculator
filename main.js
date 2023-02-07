// Property
let displayBox = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");

function showDisplay(event) {
  const x = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

function calculate() {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
}

function allClear() {
  displayBox.innerText = 0;
}

function clear() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);

list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});

// *********************
// *********************
// *********************
// *********************
// Property
let result = document.getElementById("inputtext");

let calculate2 = (Number) => {
  result.value = result.value + Number;
  // result.value+=Number;
};

let Result2 = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid input correct");
  }
};

function clear2() {
  let text = result.value;
  result.value = text.substring(0, text.length - 1);
  // از صفر تا اول يعني از اولين حرف تا يكي به اخري كه اخر حذف شده
  // substring(indexStart, indexEnd)
  // result.value = remove.value.slice(0, -1);
}

function DEL2() {
  let text = result.value;
  result.value = text.substring(0, -text.length);
}

// *********************
// *********************
// *********************
// *********************
// DOM
const darkModeDOM = document.getElementById("dark-mode");
const calculatorDOM = document.getElementById("calc3");
const buttonsDOM = document.getElementsByClassName("but-calc3");
const displayResultDOM = document.getElementById("displayResult");

// Property
let displayResultDOMScrollWidth = displayResultDOM.scrollWidth;
let displayResultDOMScrollX = 0;
// dark mode
const bodyDOM = document.getElementsByTagName("body")[0];
const schemeDOM = document.querySelector(".switch input");
const shadow = document.querySelectorAll(".shadow");

schemeDOM.addEventListener("change", function (event) {
  const thisElement = event.target;
  if (thisElement.checked) {
    // Dark Mode
    bodyDOM.classList.add("dark-mode");
    // bodyDOM.classList.remove("shadow");
  } else {
    // Light Mode
    bodyDOM.classList.remove("dark-mode");
    // bodyDOM.classList.add("shadow");
  }
});

window.onkeyup = globalKeyPressedHandler;

function globalKeyPressedHandler(event) {
  const pressedKey = event.key;
  const validKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "=",
    "-",
    "+",
    "*",
    "/",
    "Enter",
    "Backspace",
    "Delete",
  ];
  const functionalKey = {
    equal: ["Enter", "="],
    backspace: ["Backspace"],
    clear: ["Delete"],
  };
  var btnName = pressedKey;

  loopThrowObject(functionalKey, function (element1, index, mainArray) {
    const currentElement = functionalKey[element1];
    currentElement.forEach(function (element2) {
      if (element2 == pressedKey) {
        btnName = element1;
      }
    });
  });

  const target = {
    value: pressedKey,
    name: btnName,
  };

  const thisEvent = {
    target: target,
  };
  if (validKeys.includes(pressedKey)) {
    buttonsDOMClick(thisEvent);
  }
}

let result3 = document.getElementById("displayResult");

let calculate3 = (Number) => {
  result3.value = result3.value + Number;
  // result.value+=Number;
};

let Result3 = () => {
  result3.value = eval(result3.value);
};
function clear3() {
  let text3 = result.value;
  result3.value = text3.substring(0, text3.length - 1);
  // از صفر تا اول يعني از اولين حرف تا يكي به اخري كه اخر حذف شده
  // substring(indexStart, indexEnd)
  // result.value = remove.value.slice(0, -1);
}

function DEL3() {
  let text3 = result3.value;
  result3.value = text3.substring(0, -text3.length);
}
