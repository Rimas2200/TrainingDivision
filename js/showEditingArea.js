const showPopupButtonEditingArea = document.getElementById('showEditingArea');
const overlayEditingArea = document.getElementById('overlayEditingArea');
const popupEditingArea = document.getElementById('popupEditingArea');
const closePopupButtonEditingArea = document.getElementById('closePopupEditingArea');
const inputFormEditingArea = document.getElementById('inputFormEditingArea');

showPopupButtonEditingArea.addEventListener('click', function() {
    overlayEditingArea.style.display = 'block';
    popupEditingArea.style.display = 'block';
  });

  closePopupButtonEditingArea.addEventListener('click', function() {
    overlayEditingArea.style.display = 'none';
    popupEditingArea.style.display = 'none';
  });
  inputFormEditingArea.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  });