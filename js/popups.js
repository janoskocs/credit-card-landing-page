//Live chat disabled popup
// When the user clicks on <div>, open the popup


let chatBtn = document.querySelector('#live-chat-btn');
let applyForLoanBtn = document.querySelector('#apply-for-loan-btn');

chatBtn.addEventListener('click', function () {
    let popup = document.querySelector('.popuptext');
    popup.classList.toggle('show');
})


applyForLoanBtn.addEventListener('click', function () {
    let popup = document.querySelector('.popuptext');
    popup.classList.toggle('show');
})