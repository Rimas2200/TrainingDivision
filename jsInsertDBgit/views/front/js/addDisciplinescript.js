const showPopupButtonDiscipline = document.getElementById('showPopupDiscipline');
    const overlayDiscipline = document.getElementById('overlayDiscipline');
    const popupDiscipline = document.getElementById('popupDiscipline');
    const closePopupButtonDiscipline = document.getElementById('closePopupDiscipline');
    
    showPopupButtonDiscipline.addEventListener('click', function() {
      overlayDiscipline.style.display = 'block';
      popupDiscipline.style.display = 'block';
    });

    closePopupButtonDiscipline.addEventListener('click', function() {
      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });


    const overlayDisciplineEdit = document.querySelectorAll('[id^="overlayDisciplineEdit"]');
    const popupDisciplineEdit = document.querySelectorAll('[id^="popupDisciplineEdit"]');
    
    const closePopupDisciplineEdit = document.querySelectorAll('[id^="closePopupDisciplineEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupDisciplineEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayDisciplineEdit[i].style.display = 'block';
        popupDisciplineEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      closePopupDisciplineEdit[i].addEventListener('click', function() {
        overlayDisciplineEdit[i].style.display = 'none';
        popupDisciplineEdit[i].style.display = 'none';
        });
      }