const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {

    fetch('https://api.ratesapi.io/api/latest?base=USD&symbols=GBP')
    .then(res => res.json())
    .then(data => )
}

calculate()