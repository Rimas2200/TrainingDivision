const showPopupButtonWeekRange = document.getElementById('showWeekRange');
const overlayWeekRange = document.getElementById('overlayWeekRange');
const popupWeekRange = document.getElementById('popupWeekRange');
const closePopupButtonWeekRange = document.getElementById('closePopupWeekRange');
const inputFormWeekRange = document.getElementById('inputFormWeekRange');

showPopupButtonWeekRange.addEventListener('click', function() {
    overlayWeekRange.style.display = 'block';
    popupWeekRange.style.display = 'block';
  });

  closePopupButtonWeekRange.addEventListener('click', function() {
    overlayWeekRange.style.display = 'none';
    popupWeekRange.style.display = 'none';
  });
  inputFormTeacher.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  });