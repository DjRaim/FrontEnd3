const phoneInput = document.querySelector('.phoneInput');
const phoneCheck = document.querySelector('.phoneCheck');
const phoneResult = document.querySelector('.phoneResult');

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerText = 'ok';
        phoneResult.style.color = 'green';
    }else {
        phoneResult.innerText = 'not ok';
        phoneResult.style.color = 'red';}
});