export default function burger() {
  const burgerButton = document.querySelector('.burger');
  const elementList = document.querySelector('.nav__list');
  

  burgerButton.addEventListener('click', () => {
    elementList.classList.toggle('nav__list--opened')
    
  });

  
}