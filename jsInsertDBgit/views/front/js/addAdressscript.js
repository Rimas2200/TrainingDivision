const showPopupButtonAdress = document.getElementById('showPopupAdress');
    const overlayAdress = document.getElementById('overlayAdress');
    const popupAdress = document.getElementById('popupAdress');
    const closePopupButtonAdress = document.getElementById('closePopupAdress');
    
    showPopupButtonAdress.addEventListener('click', function() {
      overlayAdress.style.display = 'block';
      popupAdress.style.display = 'block';
    });

    closePopupButtonAdress.addEventListener('click', function() {
      overlayAdress.style.display = 'none';
      popupAdress.style.display = 'none';
    });

    const overlayAdressEdit = document.querySelectorAll('[id^="overlayAdressEdit"]');
    const popupAdressEdit = document.querySelectorAll('[id^="popupAdressEdit"]');
    
    const closePopupAdressEdit = document.querySelectorAll('[id^="closePopupAdressEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupAdressEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayAdressEdit[i].style.display = 'block';
        popupAdressEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      closePopupAdressEdit[i].addEventListener('click', function() {
          overlayAdressEdit[i].style.display = 'none';
          popupAdressEdit[i].style.display = 'none';
        });
      }