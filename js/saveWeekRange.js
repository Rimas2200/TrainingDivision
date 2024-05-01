const saveSelected = document.getElementById ('saveWeekRange');

saveSelected.addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); // Получаем выбранные checkbox
    var selectedValues = [];
    
    checkboxes.forEach(function(checkbox) {
      selectedValues.push(checkbox.value); // Сохраняем значения выбранных checkbox в массив
    });
    
    console.log(selectedValues); // Выводим массив с выбранными значениями в консоль
    
    // Дополнительный код для сохранения массива выбранных значений или его использования
});