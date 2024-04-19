const showPopupButton4 = document.getElementById('showPopupFaculties');
    const overlayFaculties = document.getElementById('overlayFaculties');
    const popupFaculties = document.getElementById('popupFaculties');
    const closePopupButton4 = document.getElementById('closePopupFaculties');
    const inputFormFaculties = document.getElementById('inputFormFaculties');
    const tableBody4 = document.querySelector('#myTableFaculties tbody');
	const searchInput4 = document.getElementById('searchInputFaculties');
    let selectedRow4 = null;
    let rowCount4 = tableBody4.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton4.addEventListener('click', function() {
      overlayFaculties.style.display = 'block';
      popupFaculties.style.display = 'block';
    });

    closePopupButton4.addEventListener('click', function() {
      overlayFaculties.style.display = 'none';
      popupFaculties.style.display = 'none';
    });

    inputFormFaculties.addEventListener('submit', function(event) {
      //event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value14 = document.getElementById('inputFaculties1').value;
      const value24 = document.getElementById('inputFaculties2').value;


      if (selectedRow4) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow4.cells[1].textContent = value14;
        selectedRow4.cells[2].textContent = value24;

        selectedRow4 = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow4 = document.createElement('tr');
        const numberCell4 = document.createElement('td');
        const cell14 = document.createElement('td');
        const cell24 = document.createElement('td');
        const editButtonCell4 = document.createElement('td');
        const editButton4 = document.createElement('button');
        const deleteButtonCell4 = document.createElement('td');
        const deleteButton4 = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell4.textContent = rowCount4;
        cell14.textContent = value14;
        cell24.textContent = value24;
        editButton4.textContent = 'Ред';
        deleteButton4.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton4.addEventListener('click', function() {
          selectedRow4 = newRow4;
          document.getElementById('inputTeacher4').value = selectedRow4.cells[1].textContent;
          document.getElementById('inputTeacher4').value = selectedRow4.cells[2].textContent;
		  overlayFaculties.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupFaculties.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton4.addEventListener('click', function() {
          newRow4.remove(); // Удаляем строку из таблицы
          updateRowNumbers4(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow4.appendChild(numberCell4);
        newRow4.appendChild(cell14);
        newRow4.appendChild(cell24);
        editButtonCell4.appendChild(editButton4);
        newRow4.appendChild(editButtonCell4);
        deleteButtonCell4.appendChild(deleteButton4);
        newRow4.appendChild(deleteButtonCell4);

        // Добавляем строку в таблицу
        tableBody4.appendChild(newRow4);

        rowCount4++;
      }

      // Сбрасываем значения input
      document.getElementById('inputFaculties1').value = '';
      document.getElementById('inputFaculties2').value = '';

      overlayFaculties.style.display = 'none';
      popupFaculties.style.display = 'none';
    });

 function updateRowNumbers4() {
    const rows4 = tableBody4.children;
    for (let i = 0; i < rows4.length; i++) {
      rows4[i].cells[0].textContent = i + 1;
    }
    rowCount4 = rows4.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputFaculties.addEventListener('input', function() {
      const searchValue = searchInputFaculties.value.toLowerCase();
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
