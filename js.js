const spinBtn = document.querySelector('.spin-button');
const wheel = document.querySelector('.wheel');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__button');
const popupWheel = document.querySelector('.popup-wheel');
const popupGirl = document.querySelector('.popup-girl');
const popupGircle = document.querySelector('.popup-circle');
const popupArrow = document.querySelector('.popup-arrow');
const giftsTexts = {win1:'100 ФРИСПИНОВ', win2:'400 ФРИСПИНОВ', win3:'100.000 РУБЛЕЙ'}
const popupTitleText = document.querySelector('.popup-title-sub');
const popupTextSub = document.querySelector('.popup-text-sub');
const gifts = [];
let winList = ['win1', 'win2', 'win3'];


function wheelSpin() {
  if (gifts.length == 0) {
    spinBtn.disabled = true;
    const item = winList[Math.floor(Math.random()*winList.length)];
    wheel.classList.add('wheel-spinner-' + item);
    gifts.push(item);
    winList = winList.filter((row) => row != item)
    setTimeout(() => {
      popupTitleText.textContent = giftsTexts[item];
      popup.classList.add('popup_opened')
    },5000)
  }
};

function spinAgain() {
  if (gifts.length == 1) {
    wheel.classList.remove('wheel-spinner-' + gifts[0]);
    popup.classList.remove('popup_opened')
    const item = winList[Math.floor(Math.random()*winList.length)];
    wheel.classList.add('wheel-spinner-' + item);
    gifts.push(item);
    setTimeout(() => {
      popupTitleText.textContent = popupTitleText.textContent + ' + ' + giftsTexts[item];
      popupTextSub.textContent = ' ';
      popupBtn.textContent = 'ЗАБРАТЬ ПРИЗ'
      popupWheel.classList.add('popup-wheel-hidden')
      popupGircle.classList.add('popup-circle-hidden')
      popupArrow.classList.add('popup-arrow-hidden')
      popupGirl.classList.add('popup-girl-visible')
      popup.classList.add('popup_opened')
    },5000)
  } else if (gifts.length == 2) {
    window.location.reload()
  }
}

spinBtn.addEventListener('click', wheelSpin);
popupBtn.addEventListener('click', spinAgain);
