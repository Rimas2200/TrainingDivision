const showPopupButtonDirection = document.getElementById('showPopupDirection');
    const overlayDirection = document.getElementById('overlayDirection');
    const popupDirection = document.getElementById('popupDirection');
    const closePopupButtonDirection = document.getElementById('closePopupDirection');
    
    showPopupButtonDirection.addEventListener('click', function() {
      overlayDirection.style.display = 'block';
      popupDirection.style.display = 'block';
    });

    closePopupButtonDirection.addEventListener('click', function() {
      overlayDirection.style.display = 'none';
      popupDirection.style.display = 'none';
    });
    
    const overlayDirectionEdit = document.querySelectorAll('[id^="overlayDirectionEdit"]');
    const popupDirectionEdit = document.querySelectorAll('[id^="popupDirectionEdit"]');
    
    const closePopupDirectionEdit = document.querySelectorAll('[id^="closePopupDirectionEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupDirectionEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayDirectionEdit[i].style.display = 'block';
        popupDirectionEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      closePopupDirectionEdit[i].addEventListener('click', function() {
        overlayDirectionEdit[i].style.display = 'none';
        popupDirectionEdit[i].style.display = 'none';
        });
      }