let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

showCalculation();

function updateCalculation(number) {
  calculation += number;
  showCalculation();
  localStorage.setItem('calculation', JSON.stringify(calculation))
}

function showCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}

function clearCalculation() {
  calculation = '';

  document.querySelector('.js-calculation')
  .innerHTML = calculation;
}