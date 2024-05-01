// JavaScript-код для сохранения выбранных элементов

// Получение элементов select
const disciplineSelect = document.getElementById('disciplineSelect');
const teacherSelect = document.getElementById('teacherSelect');
const audienceSelect = document.getElementById('audienceSelect');

// Добавление прослушивателей событий к элементам select
disciplineSelect.addEventListener('change', saveSelection);
teacherSelect.addEventListener('change', saveSelection);
audienceSelect.addEventListener('change', saveSelection);

// Функция для сохранения выбранного элемента в localStorage
function saveSelection() {
  const selectedDiscipline = disciplineSelect.value;
  const selectedTeacher = teacherSelect.value;
  const selectedAudience = audienceSelect.value;

  // Сохранение выбранных элементов в localStorage
  localStorage.setItem('selectedDiscipline', selectedDiscipline);
  localStorage.setItem('selectedTeacher', selectedTeacher);
  localStorage.setItem('selectedAudience', selectedAudience);
  
}

// Получение сохраненных выбранных элементов, если они есть
const savedDiscipline = localStorage.getItem('selectedDiscipline');
const savedTeacher = localStorage.getItem('selectedTeacher');
const savedAudience = localStorage.getItem('selectedAudience');

// Установка сохраненных выбранных элементов в качестве выбранных значений в выпадающих списках
if (savedDiscipline) {
  disciplineSelect.value = savedDiscipline;
}

if (savedTeacher) {
  teacherSelect.value = savedTeacher;
}

if (savedAudience) {
  audienceSelect.value = savedAudience;
}

const saveButton = document.getElementById('save');

// Добавление обработчика события клика на кнопку "Сохранить"
saveButton.addEventListener('click', saveData);

// Функция для сохранения данных
function saveData() {
  
  const selectedDiscipline = disciplineSelect.value;
  const selectedTeacher = teacherSelect.value;
  const selectedAudience = audienceSelect.value;

  
  console.log('Данные сохранены успешно!');
}