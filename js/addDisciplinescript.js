const showPopupButton = document.getElementById('showPopupDiscipline');
    const overlayDiscipline = document.getElementById('overlayDiscipline');
    const popupDiscipline = document.getElementById('popupDiscipline');
    const closePopupButton = document.getElementById('closePopupDiscipline');
    const inputFormDiscipline = document.getElementById('inputFormDiscipline');
    const tableBody = document.querySelector('#myTableDiscipline tbody');
	const searchInput = document.getElementById('searchInputDiscipline');
    let selectedRow = null;
    let rowCount = tableBody.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton.addEventListener('click', function() {
      overlayDiscipline.style.display = 'block';
      popupDiscipline.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function() {
      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });

    inputFormDiscipline.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value1 = document.getElementById('inputDiscipline1').value;


      if (selectedRow) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow.cells[1].textContent = value1;
		
        selectedRow = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow = document.createElement('tr');
        const numberCell = document.createElement('td');
        const cell1 = document.createElement('td');
        const editButtonCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButtonCell = document.createElement('td');
        const deleteButton = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell.textContent = rowCount;
        cell1.textContent = value1;
        editButton.textContent = 'Ред';
        deleteButton.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton.addEventListener('click', function() {
          selectedRow = newRow;
          document.getElementById('inputDiscipline1').value = selectedRow.cells[1].textContent;
		  overlayDiscipline.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupDiscipline.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton.addEventListener('click', function() {
          newRow.remove(); // Удаляем строку из таблицы
          updateRowNumbers(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow.appendChild(numberCell);
        newRow.appendChild(cell1);
        editButtonCell.appendChild(editButton);
        newRow.appendChild(editButtonCell);
        deleteButtonCell.appendChild(deleteButton);
        newRow.appendChild(deleteButtonCell);

        // Добавляем строку в таблицу
        tableBody.appendChild(newRow);

        rowCount++;
      }

      // Сбрасываем значения input
      document.getElementById('inputDiscipline1').value = '';

      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });

 function updateRowNumbers() {
    const rows = tableBody.children;
    for (let i = 0; i < rows.length; i++) {
      rows[i].cells[0].textContent = i + 1;
    }
    rowCount = rows.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputDiscipline.addEventListener('input', function() {
      const searchValue = searchInputDiscipline.value.toLowerCase();
      const rows = tableBody.getElementsByTagName('tr');
      for (let row of rows) {
        let found = false;
        const cells = row.getElementsByTagName('td');
        for (let cell of cells) {
          if (cell.textContent.toLowerCase().includes(searchValue)) {
            found = true;
            break;
          }
        }
        if (found) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    });
