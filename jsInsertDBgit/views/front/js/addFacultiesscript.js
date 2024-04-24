const showPopupButton4 = document.getElementById('showPopupFaculties');
    const overlayFaculties = document.getElementById('overlayFaculties');
    const popupFaculties = document.getElementById('popupFaculties');
    const closePopupButton4 = document.getElementById('closePopupFaculties');
    

    showPopupButton4.addEventListener('click', function() {
      overlayFaculties.style.display = 'block';
      popupFaculties.style.display = 'block';
    });

    closePopupButton4.addEventListener('click', function() {
      overlayFaculties.style.display = 'none';
      popupFaculties.style.display = 'none';
    });

    
    const overlayFacultiesEdit = document.querySelectorAll('[id^="overlayFacultiesEdit"]');
    const popupFacultiesEdit = document.querySelectorAll('[id^="popupFacultiesEdit"]');
    
    const closePopupFacultiesEdit = document.querySelectorAll('[id^="closePopupFacultiesEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupFacultiesEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayFacultiesEdit[i].style.display = 'block';
        popupFacultiesEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
        closePopupFacultiesEdit[i].addEventListener('click', function() {
          overlayFacultiesEdit[i].style.display = 'none';
          popupFacultiesEdit[i].style.display = 'none';
        });
      }