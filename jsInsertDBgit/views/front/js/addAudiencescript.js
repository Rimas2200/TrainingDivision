const showPopupButton3 = document.getElementById('showPopupAudience');
    const overlayAudience = document.getElementById('overlayAudience');
    const popupAudience = document.getElementById('popupAudience');
    const closePopupButton3 = document.getElementById('closePopupAudience');
    
    showPopupButton3.addEventListener('click', function() {
      overlayAudience.style.display = 'block';
      popupAudience.style.display = 'block';
    });

    closePopupButton3.addEventListener('click', function() {
      overlayAudience.style.display = 'none';
      popupAudience.style.display = 'none';
    });

    
    const overlayAudienceEdit = document.querySelectorAll('[id^="overlayAudienceEdit"]');
    const popupAudienceEdit = document.querySelectorAll('[id^="popupAudienceEdit"]');
    
    const closePopupButton21 = document.querySelectorAll('[id^="closePopupAudienceEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupAudienceEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayAudienceEdit[i].style.display = 'block';
        popupAudienceEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
          closePopupButton21[i].addEventListener('click', function() {
          overlayAudienceEdit[i].style.display = 'none';
          popupAudienceEdit[i].style.display = 'none';
        });
      }