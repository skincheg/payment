const firstCard = document.querySelector('.first-card')
const secondCard = document.querySelector('.second-card')

firstCard.addEventListener('click', cardClick);
//secondCard.addEventListener('click', cardClick);

function cardClick() {
    firstCard.classList.toggle('first-card__active');
    secondCard.classList.toggle('second-card__active');
}





const cardSelectYandex = document.querySelector('#card-select__item-yandex')
const cardSelectVisa = document.querySelector('#card-select__item-visa')
const cardSelectBitcoin = document.querySelector('#card-select__item-bitcoin')

cardSelectYandex.addEventListener('click', () => {
    cardSelectVisa.classList.remove('card-select__item-visa')
    cardSelectBitcoin.classList.remove('card-select__item-bitcoin')
    cardSelectYandex.classList.toggle('card-select__item-yandex')
})

cardSelectVisa.addEventListener('click', () => {
    cardSelectBitcoin.classList.remove('card-select__item-bitcoin')
    cardSelectYandex.classList.remove('card-select__item-yandex')
    cardSelectVisa.classList.toggle('card-select__item-visa')
})

cardSelectBitcoin.addEventListener('click', () => {
    cardSelectYandex.classList.remove('card-select__item-yandex')
    cardSelectVisa.classList.remove('card-select__item-visa')
    cardSelectBitcoin.classList.toggle('card-select__item-bitcoin')
})