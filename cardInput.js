const cardInput = document.querySelectorAll('.card-input__item')
const cardBtn = document.querySelector('.card-btn')

cardBtn.addEventListener('click', () => {
    event.preventDefault();
    cardInput.forEach(item => {
        if(item.value == '') {
            item.classList.add('card-input__error')
        } else {
            item.classList.add('card-input__success')
        }
    })
})