//ELIGIBILITY CHECKER APP
let chatBtn = document.querySelector('#live-chat-btn');//select eligbility button; copied from live chat btn
let popup = document.querySelector('.popuptext');
const standardIncome = 25000;
const standardScore = 750;

chatBtn.addEventListener('click', function () {
    if (eligible() === true) {
        popup.innerText = 'Congratulations, you are eligible!';
        popup.classList.toggle('show');
    } else if (eligible() === undefined) {
        popup.innerText = 'Please enter valid numbers.';
        popup.classList.toggle('show');
    } else {
        popup.innerText = 'I am afraid we are unable to offer any credit to you at the moment.';
        popup.classList.toggle('show');
    }

})


const eligible = function () {
    let yearlyIncome = parseInt(document.querySelector('.income-input').value);
    let creditScore = parseInt(document.querySelector('.credit-score-input').value);

    if (yearlyIncome > standardIncome && creditScore > standardScore) {
        return true;
    } else if (isNaN(yearlyIncome) || isNaN(creditScore)) {
        return undefined;
    } else {
        return false;
    }
}


