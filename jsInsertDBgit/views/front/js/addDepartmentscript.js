const showPopupButtonDepartment = document.getElementById('showPopupDepartment');
    const overlayDepartment = document.getElementById('overlayDepartment');
    const popupDepartment = document.getElementById('popupDepartment');
    const closePopupButtonDepartment = document.getElementById('closePopupDepartment');
    
    showPopupButtonDepartment.addEventListener('click', function() {
      overlayDepartment.style.display = 'block';
      popupDepartment.style.display = 'block';
    });

    closePopupButtonDepartment.addEventListener('click', function() {
      overlayDepartment.style.display = 'none';
      popupDepartment.style.display = 'none';
    });

    const overlayDepartmentEdit = document.querySelectorAll('[id^="overlayDepartmentEdit"]');
    const popupDepartmentEdit = document.querySelectorAll('[id^="popupDepartmentEdit"]');
    
    const closePopupDepartmentEdit = document.querySelectorAll('[id^="closePopupDepartmentEdit"]');
    
    const buttons = document.querySelectorAll('[id^="showPopupDepartmentEdit"]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {  
        overlayDepartmentEdit[i].style.display = 'block';
        popupDepartmentEdit[i].style.display = 'block';
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      closePopupDepartmentEdit[i].addEventListener('click', function() {
          overlayDepartmentEdit[i].style.display = 'none';
          popupDepartmentEdit[i].style.display = 'none';
        });
      }