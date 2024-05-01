const addGroup = document.getElementById('AddGroup');
const remGroup = document.getElementById('RemoveGroup')
const Groupbody = document.getElementById('Group');


addGroup.addEventListener ('click', function() {
      var buttonName = prompt("Введите название группы"); // Открываем диалоговое окно для ввода имени кнопки
      if (buttonName) { // Проверяем, было ли введено имя
        var newGroup = document.createElement('option');
        newGroup.innerHTML = buttonName;
        Groupbody.appendChild(newGroup);
      }
    // const NewButton1 = document.createElement('option');
    // NewButton1.innerHTML = "New group";
    // Groupbody.appendChild(NewButton1);


    var table = document.querySelector('#monday');
    // Получаем все строки таблицы
    var rows = table.rows;
    console.log(rows);
    for (let i = 0; i < rows.length; i++) {
        let currentrow = rows[i];
        console.log(currentrow.cells.length);
        for (let j = 0; j < currentrow.cells.length; j++) {
            var newCell = rows[j].insertCell(-1);
            newCell.textContent = 'Новый столбец';
        }
    }
});
remGroup.addEventListener('click', function() {
    // Удаление последнего option
    var options = Groupbody.getElementsByTagName('option');
    if (options.length > 0) {
        Groupbody.removeChild(options[options.length - 1]);
    }
    
    // Удаление последнего столбца
    var table = document.querySelector('#monday');
    var rows = table.rows;
    if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            let currentrow = rows[i];
            if (currentrow.cells.length > 0) {
                currentrow.deleteCell(currentrow.cells.length - 1);
            }
        }
    }
});

