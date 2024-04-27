const Addpair = document.getElementById('AddPairbtn');

Addpair.addEventListener ('click', function() {
      var table = document.getElementById('monday');

      // Создаем первую строку (зеленую)
      var row1 = document.createElement('tr');
      for (var i = 0; i < 4; i++) {
        var cell = document.createElement('td');
        row1.appendChild(cell);
      }
      row1.style.backgroundColor = 'green';
      table.appendChild(row1);

      // Создаем вторую строку
      var row2 = document.createElement('tr');
      table.appendChild(row2);

      // Создаем ячейки для второй строки
      for (var i = 0; i < 4; i++) {
        var cell = document.createElement('td');
        cell.setAttribute('data-id', i+1);
        row2.appendChild(cell);
      }

      // Создаем кнопку для удаления строки
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('deletePair');
      deleteButton.addEventListener('click', function() {
        table.removeChild(row1);
        table.removeChild(row2);
      });

      // Добавляем кнопку в четвертую ячейку второй строки
      row2.lastChild.appendChild(deleteButton);
});