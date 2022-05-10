let loanAmountSlider = document.querySelector('#loan-amount-slider');
let loanMonthsSlider = document.querySelector('#loan-amount-months-slider');
let loanAmountInput = document.querySelector('#loan-amount');
let loanAmountMonthsInput = document.querySelector('#loan-amount-months');

const resultAmountPayable = document.querySelector('#amount-payable');
const resultMonthlyPayable = document.querySelector('#monthly-repayment');

const apr = 12;


const calculateMonthlyPayments = (loanAmount, loanMonths) => {
    let interest = (loanAmount / 100) * apr;
    return (loanAmount + interest) / loanMonths; //MONTHLY PAYMENTS
}
loanAmountSlider.step = 100;
loanAmountSlider.addEventListener('input', loanCalc);
loanMonthsSlider.addEventListener('input', loanCalcMonths);
loanAmountInput.addEventListener('input', updateInput);
loanAmountMonthsInput.addEventListener('input', updateInputMonths);


function loanCalc() {
    let inputLoan = Math.floor(parseInt(loanAmountSlider.value));
    let inputMonths = Math.floor(parseInt(loanMonthsSlider.value));
    let interest = (inputLoan / 100) * apr;
    let monthlyPayments = (inputLoan + interest) / inputMonths;

    loanAmountInput.value = inputLoan;
    resultAmountPayable.innerText = `GBP ${inputLoan + interest}`;

    resultMonthlyPayable.innerText = `GBP ${Math.round(monthlyPayments)}`

}

function loanCalcMonths() {
    let inputLoan = Math.floor(parseInt(loanAmountSlider.value));
    let inputMonths = Math.floor(parseInt(loanMonthsSlider.value));
    let interest = (inputLoan / 100) * apr;
    let monthlyPayments = (inputLoan + interest) / inputMonths;

    loanAmountMonthsInput.value = inputMonths;
    resultMonthlyPayable.innerText = `GBP ${Math.round(monthlyPayments)}`
}


loanCalc();
loanCalcMonths();

