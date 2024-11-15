// let num1 = 0;
// let num2 = 0;
// let operator;
// for (let char of val) {
//   if (char == "+" || char == "-" || char == "*" || char == "/") {
//     if (operator) {
//       if (operator == "+") {
//         num1 += num2;
//       } else if (operator == "-") {
//         num1 -= num2;
//       } else if (operator == "*") {
//         num1 *= num2;
//       } else {
//         num1 /= num2;
//       }
//     }
//     num2 = 0;
//     operator = char;
//   } else if (!operator) {
//     num1 = num1 * 10 + parseInt(char);
//     console.log(num1, "num1");
//   } else {
//     num2 = num2 * 10 + parseInt(char);
//     console.log(num2, "num2");
//   }
//   console.log(num1, "Answer");
// }
// if (operator) {
//   if (operator == "+") {
//     num1 += num2;
//   } else if (operator == "-") {
//     num1 -= num2;
//   } else if (operator == "*") {
//     num1 *= num2;
//   } else {
//     num1 /= num2;
//   }
// }
// formInput.value = num1;
// operator = 0;
// num1 = 0;
// num2 = 0;
//   console.log(operand, operator);

//   while (operator.length) {
//     let num1 = operand.shift();
//     let num2 = operand.shift();
//     let oprator = operator.shift();
//     // console.log(num1, num2, oprator);
//     if (oprator == "+") {
//       if (
//         (operator[0] == "-" || operator[0] == "+") &&
//         (operator.includes("*") || operator.includes("/"))
//       ) {
//         operand.unshift(num1 + num2);
//         operator.unshift(operator.shift());
//       } else {
//         operand.push(num1 + num2);
//       }
//     } else if (oprator == "-") {
//       if (
//         (operator[0] == "-" || operator[0] == "+") &&
//         (operator.includes("*") || operator.includes("/"))
//       ) {
//         operand.unshift(num1 - num2);
//         operator.unshift(operator.shift());
//       } else {
//         operand.push(num1 - num2);
//       }
//     } else if (oprator == "*") {
//       if (
//         (operator[0] == "-" || operator[0] == "+") &&
//         (operator.includes("*") || operator.includes("/"))
//       ) {
//         operand.push(num1 * num2);
//         operator.push(operator.shift());
//         console.log(operand, operator);
//       } else {
//         operand.unshift(num1 * num2);
//       }
//     } else {
//       if (
//         (operator[0] == "-" || operator[0] == "+") &&
//         (operator.includes("*") || operator.includes("/"))
//       ) {
//         operand.unshift(num1 / num2);
//         operator.unshift(operator.shift());
//       } else {
//         operand.push(num1 / num2);
//       }
//     }
//   }

//   return operand[0];

const formInput = document.getElementById("input");

function generateAnswer() {
  const val = formInput.value;

  const operator = [];
  const operand = [];
  makeArray(operator, operand, val);

  while (operator.includes("*") || operator.includes("/")) {
    let num1 = operand.shift();
    let num2 = operand.shift();
    let oprtr = operator.shift();
    if (oprtr == "*") {
      if (operator[0] == "+" || operator[0] == "-") {
        operand.push(num1 * num2);
        operator.push(operator.shift());
      } else {
        operand.unshift(num1 * num2);
      }
    } else if (oprtr == "/") {
      if (operator[0] == "+" || operator[0] == "-") {
        operand.push(num1 / num2);
        operator.push(operator.shift());
      } else {
        operand.unshift(num1 / num2);
      }
    } else {
      operand.push(num1);
      operand.unshift(num2);
      operator.push(oprtr);
    }
  }
  while (operator.length) {
    let num1 = operand.shift();
    let num2 = operand.shift();
    let oprtr = operator.shift();
    if (oprtr == "+") {
      operand.unshift(num1 + num2);
    } else {
      operand.unshift(num1 - num2);
    }
  }
  formInput.value = operand[0];
}

function makeArray(operator, operand, val) {
  let num1 = 0;
  for (let char of val) {
    if (char == "+" || char == "-" || char == "*" || char == "/") {
      operator.push(char);
      operand.push(parseInt(num1));
      num1 = 0;
    } else {
      num1 += char;
    }
  }
  if (num1) {
    operand.push(parseInt(num1));
  }
}

function insertInput(value) {
  if (formInput.value.length == 1 && formInput.value == "0") {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      return;
    }
    formInput.value = value;
  } else {
    formInput.value += value;
  }
}

function clearTextField() {
  formInput.value = "";
}

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ad omnis exercitationem accusantium error numquam vero illo, recusandae soluta dolorem commodi harum eligendi.
