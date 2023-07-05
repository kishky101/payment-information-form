import '../styles/payment-information.scss'
import '../styles/credit-card.scss'

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

form.onsubmit = function(e) {
    e.preventDefault();
    let check =checkInputs(inputs);

    if (check === 4)  {
        return alert('Success')
    }
}


function checkInputs(inputs) {
    let check = 0;
    [...inputs].map(input => {
        if (input.value && input.checkValidity()) {
            check += 1 
        }
    })

    return check;
}


function buttonValidity(inputs, button) {
    const value = checkInputs(inputs);

    if (value === 4) {
        button.disabled = false;
    }else {
        button.disabled = true;
    }
}


setInterval(() => {
    buttonValidity(inputs, button)
}, 1000)