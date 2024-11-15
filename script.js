const inputField = document.getElementById("input");
const operand = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operator = ["+", "-", "*", "/"];
const operandBlock = document.getElementById("operandButton");
const operatorBlock = document.getElementById("operatorButton");
let str = "";

(function () {
  // Add Operands to the UI
  operand.forEach((val) => {
    const oprndBtn = createButton("col-lg-3 col-4 p-2 m-1", val);
    oprndBtn.addEventListener("click", (e) => getInput(e));
    operandBlock.appendChild(oprndBtn);
  });

  // Add clear button to the UI
  const AC = createButton("col-10 p-2 m-1", "AC");
  AC.addEventListener("click", () => clearInput());
  operatorBlock.appendChild(AC);

  // Add Operators to the UI
  operator.forEach((val) => {
    const oprtrBtn = createButton("col-10 p-2 m-1", val);
    oprtrBtn.addEventListener("click", (e) => getInput(e));

    operatorBlock.appendChild(oprtrBtn);
  });

  // Add Equals button to thr UI
  const ans = createButton("col-10 p-2 m-1", "=");
  ans.addEventListener("click", () => calculate());
  operatorBlock.appendChild(ans);
})();

function createButton(cssClass, val) {
  const Btn = document.createElement("button");
  Btn.setAttribute("class", cssClass);
  Btn.setAttribute("value", val);
  Btn.textContent = val;
  return Btn;
}

function getInput(e) {
  str += e.target.value;
  inputField.value = str;
}

function clearInput() {
  str = "";
  inputField.value = "";
}

function calculate() {
  if (
    str[0] == "*" ||
    str[0] == "/" ||
    str.includes("++") ||
    str.includes("--") ||
    str.includes("**") ||
    str.includes("//") ||
    str.includes("+-") ||
    str.includes("+*") ||
    str.includes("+/") ||
    str.includes("-+") ||
    str.includes("-*") ||
    str.includes("-/") ||
    str.includes("*+") ||
    str.includes("*-") ||
    str.includes("*/") ||
    str.includes("/+") ||
    str.includes("/-") ||
    str.includes("/*")
  ) {
    inputField.value = "Invalid Value";
  } else {
    console.log(str, typeof str);
    const ans = eval(str);
    inputField.value = ans;
    str = "" + ans;
  }
}
