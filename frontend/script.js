// the all-mighty global expression : )
let expr = '';
console.log(`exp: ${expr}`)

// let's get all the elements
let display = document.querySelector('#display');
let b7 = document.querySelector('#b7');
let b8 = document.querySelector('#b8');
let b9 = document.querySelector('#b9');
let addButton = document.querySelector('#add');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let subButton = document.querySelector('#sub');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let mulButton = document.querySelector('#mul');
let b0 = document.querySelector('#b0');
let divButton = document.querySelector('#div');
let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');
let dotButton = document.querySelector('#dot')


console.log(`exp2: ${expr}`)

// adding event handlers
b1.addEventListener('click', () => {
  buttonPress(1);
  display.innerText += "1"
});
b2.addEventListener('click', () => {
  buttonPress(2);
  display.innerText += "2"
});
b3.addEventListener('click', () => {
  buttonPress(3);
  display.innerText += "3"
});
b4.addEventListener('click', () => {
  buttonPress(4);
  display.innerText += "4"
});
b5.addEventListener('click', () => {
  buttonPress(5);
  display.innerText += "5"
});
b6.addEventListener('click', () => {
  buttonPress(6);
  display.innerText += "6"
});
b7.addEventListener('click', () => {
  buttonPress(7);
  display.innerText += "7"
});
b8.addEventListener('click', () => {
  buttonPress(8);
  display.innerText += "8"
});
b9.addEventListener('click', () => {
  buttonPress(9);
  display.innerText += "9"
});
b0.addEventListener('click', () => {
  buttonPress(0);
  display.innerText += "0"
});
addButton.addEventListener('click', () => {
  buttonPress('+');
  display.innerText += "+"
});
subButton.addEventListener('click', () => {
  buttonPress('-');
  display.innerText += "-"
});
mulButton.addEventListener('click', () => {
  buttonPress('*');
  display.innerText += "*"
});
divButton.addEventListener('click', ()=> {
  buttonPress("/")
  display.innerText += "/"
});
dotButton.addEventListener("click", () => {
  buttonPress('.');
  display.innerText += '.'
})
equalsButton.addEventListener('click', doCalc);
clearButton.addEventListener("click", doClear)


console.log(`exp3: ${expr}`)

// event handlers
function buttonPress(number) {
  expr += number;
  console.log(expr);
}

async function doCalc() {
  if (expr.includes('+')) {
    let numbers = expr.split('+');
    let response = await doAdd(numbers[0], numbers[1]);
    console.log(response);
    display.innerText = response.result
    expr = response.result
  } else if (expr.includes('-')) {
    let numbers = expr.split('-');
    let response = await doSubtract(numbers[0], numbers[1]);
    console.log(response);
    display.innerText = response.result
    expr = response.result
  } else if (expr.includes('*')) {
    let numbers = expr.split('*');
    let response = await doMultiply(numbers[0], numbers[1]);
    console.log(response);
    display.innerText = response.result
    expr = response.result
  } else if (expr.includes('/')) {
    let numbers = expr.split('/');
    let response = await doDivide(numbers[0], numbers[1]);
    console.log(response);
    display.innerText = response.result
    expr = response.result
  } else {
    //reset display
  }
}

function doClear() {
    expr = '';
    display.innerText = ""
}

async function doAdd(a, b) {
  const response = await fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first: a,
      second: b,
    }),
  });

  const data = await response.json();
  return data;
}

async function doSubtract(a, b) {
  const response = await fetch('http://localhost:3000/sub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first: a,
      second: b,
    }),
  });

  const data = await response.json();
  return data;
}

async function doMultiply(a, b) {
  const response = await fetch('http://localhost:3000/mul', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first: a,
      second: b,
    }),
  });

  const data = await response.json();
  return data;
}

async function doDivide(a, b) {
  const response = await fetch('http://localhost:3000/div', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first: a,
      second: b,
    }),
  });

  const data = await response.json();
  return data;
}