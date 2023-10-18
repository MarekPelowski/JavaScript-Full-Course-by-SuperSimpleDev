function isToggled(className) {
  const buttonElement = document.querySelector(`${className}`);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    turnOffButton();

    buttonElement.classList.add('is-toggled');
  }
} 


function turnOffButton() {
  const previousButton = document.querySelector('.is-toggled');
  
  if (previousButton) {
    previousButton.classList.remove('is-toggled')
  }
}