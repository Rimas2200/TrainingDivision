const showPopupButton = document.getElementById('showPopupTeacher');
    const overlayTeacher = document.getElementById('overlayTeacher');
    const overlayTeacherEdit = document.getElementById('overlayTeacherEdit');
    const popupTeacher = document.getElementById('popupTeacher');
    const popupTeacherEdit = document.getElementById('popupTeacherEdit');
    const closePopupButton = document.getElementById('closePopupTeacher');
    const closePopupButtonEdit = document.getElementById('closePopupTeacherEdit');
    const inputFormTeacher = document.getElementById('inputFormTeacher');
    const tableBody = document.querySelector('#myTableTeacher tbody');
	const searchInput = document.getElementById('searchInputTeacher');
    let selectedRow = null;
    let rowCount = tableBody.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton.addEventListener('click', function() {
      overlayTeacher.style.display = 'block';
      popupTeacher.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function() {
      overlayTeacher.style.display = 'none';
      popupTeacher.style.display = 'none';
    });
    closePopupButtonEdit.addEventListener('click', function() {
      overlayTeacherEdit.style.display = 'none';
      popupTeacherEdit.style.display = 'none';
    });

    inputFormTeacher.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value1 = document.getElementById('inputTeacher1').value;
      const value2 = document.getElementById('inputTeacher2').value;
      const value3 = document.getElementById('inputTeacher3').value;
      const value4 = document.getElementById('inputTeacher4').value;
      const value5 = document.getElementById('inputTeacher5').value;
      const value6 = document.getElementById('inputTeacher6').value;

      if (selectedRow) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow.cells[1].textContent = value1;
        selectedRow.cells[2].textContent = value2;
        selectedRow.cells[3].textContent = value3;
        selectedRow.cells[4].textContent = value4;
        selectedRow.cells[5].textContent = value5;
        selectedRow.cells[6].textContent = value6;
        selectedRow = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow = document.createElement('tr');
        const numberCell = document.createElement('td');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');
        const editButtonCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButtonCell = document.createElement('td');
        const deleteButton = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell.textContent = rowCount;
        cell1.textContent = value1;
        cell2.textContent = value2;
        cell3.textContent = value3;
        cell4.textContent = value4;
        cell5.textContent = value5;
        cell6.textContent = value6;
        editButton.textContent = 'Ред';
        deleteButton.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton.addEventListener('click', function() {
          selectedRow = newRow;
          document.getElementById('inputTeacher1').value = selectedRow.cells[1].textContent;
          document.getElementById('inputTeacher2').value = selectedRow.cells[2].textContent;
          document.getElementById('inputTeacher3').value = selectedRow.cells[3].textContent;
          document.getElementById('inputTeacher4').value = selectedRow.cells[4].textContent;
          document.getElementById('inputTeacher5').value = selectedRow.cells[5].textContent;
          document.getElementById('inputTeacher6').value = selectedRow.cells[6].textContent;
		  overlayTeacherEdit.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupTeacherEdit.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton.addEventListener('click', function() {
          newRow.remove(); // Удаляем строку из таблицы
          updateRowNumbers(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow.appendChild(numberCell);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        editButtonCell.appendChild(editButton);
        newRow.appendChild(editButtonCell);
        deleteButtonCell.appendChild(deleteButton);
        newRow.appendChild(deleteButtonCell);

        // Добавляем строку в таблицу
        tableBody.appendChild(newRow);

        rowCount++;
      }

      // Сбрасываем значения input
      document.getElementById('inputTeacher1').value = '';
      document.getElementById('inputTeacher2').value = '';
      document.getElementById('inputTeacher3').value = '';
      document.getElementById('inputTeacher4').value = '';
      document.getElementById('inputTeacher5').value = '';
      document.getElementById('inputTeacher6').value = '';

      overlayTeacher.style.display = 'none';
      popupTeacher.style.display = 'none';
    });

 function updateRowNumbers() {
    const rows = tableBody.children;
    for (let i = 0; i < rows.length; i++) {
      rows[i].cells[0].textContent = i + 1;
    }
    rowCount = rows.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputTeacher.addEventListener('input', function() {
      const searchValue = searchInputTeacher.value.toLowerCase();
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
