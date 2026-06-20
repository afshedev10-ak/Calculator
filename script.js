'use strict';

const display    = document.getElementById('display');
const expression = document.getElementById('expression');
const calcError  = document.getElementById('calcError');

let firstNumber      = '';
let secondNumber     = '';
let operator         = null;
let shouldResetScreen = false;
let errorTimer       = null;


function updateExpression() {
  if (operator !== null) {
    const sym = { '*': '×', '/': '÷' }[operator] || operator;
    expression.textContent = secondNumber !== ''
      ? `${firstNumber} ${sym} ${secondNumber}`
      : `${firstNumber} ${sym}`;
  } else {
    expression.textContent = '';
  }
}


function showError(msg) {
  calcError.textContent = msg;
  calcError.classList.add('visible');
  clearTimeout(errorTimer);
  errorTimer = setTimeout(() => {
    calcError.classList.remove('visible');
  }, 2000);
}


function hideError() {
  clearTimeout(errorTimer);
  calcError.classList.remove('visible');
}



function appendNumber(number) {
  hideError();

  if (shouldResetScreen) {
    display.value    = '';
    shouldResetScreen = false;

    if (operator === null) {
      firstNumber  = '';
      secondNumber = '';
    }
  }

  if (operator !== null) {

    secondNumber    += number;
    display.value    = secondNumber;
  } else {

    firstNumber     += number;
    display.value    = firstNumber;
  }

  updateExpression();
}



function appendDecimal() {
  hideError();

  if (shouldResetScreen) {
    display.value     = '0';
    shouldResetScreen = false;
    if (operator === null) { firstNumber = '0'; secondNumber = ''; }
  }

  if (operator !== null) {

    if (secondNumber.includes('.')) return;
    if (secondNumber === '') secondNumber = '0'; 
    secondNumber += '.';
    display.value = secondNumber;
  } else {
  
    if (firstNumber.includes('.')) return;
    if (firstNumber === '') firstNumber = '0'; 
    firstNumber += '.';
    display.value = firstNumber;
  }

  updateExpression();
}


function setOperator(op) {
  hideError();
  if (display.value === '' && firstNumber === '') return;  

  if (firstNumber !== '' && secondNumber !== '') {
    calculate(true); 
  }

  firstNumber       = firstNumber || display.value;
  operator          = op;
  secondNumber      = '';
  shouldResetScreen = false;

  updateExpression();
  display.value = firstNumber;
}


function calculate(silent = false) {
  hideError();

  if (operator === null || secondNumber === '') return;

  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/':
      if (num2 === 0) {
        showError('Cannot divide by zero');
        clearDisplay();
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  result = parseFloat(result.toPrecision(10));

  display.value    = result;
  expression.textContent = '';
  firstNumber      = result.toString();
  secondNumber     = '';
  operator         = null;

  if (!silent) {
    shouldResetScreen = true;
  }
}


function clearDisplay() {
  hideError();
  display.value        = '';
  expression.textContent = '';
  firstNumber          = '';
  secondNumber         = '';
  operator             = null;
  shouldResetScreen    = false;
}


function deleteLast() {
  hideError();


  if (operator !== null && secondNumber !== '') {
    secondNumber  = secondNumber.slice(0, -1);
    display.value = secondNumber;
    updateExpression();
    return;
  }

  if (operator !== null && secondNumber === '') {
    operator      = null;
    display.value = firstNumber;
    updateExpression();
    return;
  }

  if (firstNumber !== '') {
    firstNumber   = firstNumber.slice(0, -1);
    display.value = firstNumber;
    updateExpression();
  }
}


document.addEventListener('keydown', (e) => {
  const handled = [
    '0','1','2','3','4','5','6','7','8','9',
    '+','-','*','/',
    'Enter','=','Backspace','Escape','Delete','.'
  ];
  if (!handled.includes(e.key)) return;
  e.preventDefault();

  if (e.key >= '0' && e.key <= '9') {
    appendNumber(e.key);
  } else if (e.key === '.') {
    appendDecimal();
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    setOperator(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape' || e.key === 'Delete') {
    clearDisplay();
  }
});



const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
  localStorage.setItem('calc-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

applyTheme(root.getAttribute('data-theme') || 'light');
