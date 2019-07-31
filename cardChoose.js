const firstCard = document.querySelector('.first-card')
const secondCard = document.querySelector('.second-card')

firstCard.addEventListener('click', cardClick);
//secondCard.addEventListener('click', cardClick);

function cardClick() {
    firstCard.classList.toggle('first-card__active');
    secondCard.classList.toggle('second-card__active');
}