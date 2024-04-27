const showPopupButton = document.getElementById('showPopupTeacher');
    const overlayTeacher = document.getElementById('overlayTeacher');
    const popupTeacher = document.getElementById('popupTeacher');
    const closePopupButton = document.getElementById('closePopupTeacher');
    
    showPopupButton.addEventListener('click', function() {
      overlayTeacher.style.display = 'block';
      popupTeacher.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function() {
      overlayTeacher.style.display = 'none';
      popupTeacher.style.display = 'none';
    });

    const overlayTeacherEdit = document.querySelectorAll('[id^="overlayTeacherEdit"]');
    const popupTeacherEdit = document.querySelectorAll('[id^="popupTeacherEdit"]');
    
    const closePopupTeacherEdit = document.querySelectorAll('[id^="closePopupTeacherEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupTeacherEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayTeacherEdit[i].style.display = 'block';
        popupTeacherEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      closePopupTeacherEdit[i].addEventListener('click', function() {
        overlayTeacherEdit[i].style.display = 'none';
        popupTeacherEdit[i].style.display = 'none';
        });
      }