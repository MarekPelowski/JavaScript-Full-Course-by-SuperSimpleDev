function isToggled(className) {
  const buttonElement = document.querySelector(`${className}`);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    buttonElement.classList.add('is-toggled');
  } 
}