const addGroup = document.getElementById('AddGroup');
const remGroup = document.getElementById('RemoveGroup')
const Groupbody = document.getElementById('Group');


addGroup.addEventListener ('click', function() {
    const NewButton1 = document.createElement('option');
    NewButton1.innerHTML = "New group";
    Groupbody.appendChild(NewButton1);
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
    // Проходимся по каждой строке таблицы

    // Создаем новую ячейку
     // -1 указывает на вставку ячейки в конец строки

    // Добавляем содержимое в новую ячейку
   
    remGroup.addEventListener ('click', function() {NewButton1.remove()});
});

