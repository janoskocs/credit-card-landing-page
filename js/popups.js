//Live chat disabled popup
// When the user clicks on <div>, open the popup


let chatBtn = document.querySelector('#live-chat-btn');

chatBtn.addEventListener('click', function () {
    let popup = document.querySelector('.popuptext');
    popup.classList.toggle('show');
})
