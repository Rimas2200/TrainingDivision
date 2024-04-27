const showPopupButton2 = document.getElementById('showPopupTypePair');
const overlayTypePair = document.getElementById('overlayTypePair');
const popupTypePair = document.getElementById('popupTypePair');
const closePopupButton2 = document.getElementById('closePopupTypePair');
   

    showPopupButton2.addEventListener('click', function() {
      overlayTypePair.style.display = 'block';
      popupTypePair.style.display = 'block';
    });

    closePopupButton2.addEventListener('click', function() {
      overlayTypePair.style.display = 'none';
      popupTypePair.style.display = 'none';
    });



const overlayTypePair1 = document.querySelectorAll('[id^="overlayTypePair1"]');
const popupTypePair1 = document.querySelectorAll('[id^="popupTypePair1"]');

const closePopupButton21 = document.querySelectorAll('[id^="closePopupTypePair1"]');

const buttons = document.querySelectorAll('[id^="showPopupTypePairEdit"]');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {  
    overlayTypePair1[i].style.display = 'block';
    popupTypePair1[i].style.display = 'block';
  });
}
for (let i = 0; i < buttons.length; i++) {
      closePopupButton21[i].addEventListener('click', function() {
      overlayTypePair1[i].style.display = 'none';
      popupTypePair1[i].style.display = 'none';
    });
  }