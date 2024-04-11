const showPopupButton2 = document.getElementById('showPopupTypePair');
    const overlayTypePair = document.getElementById('overlayTypePair');
    const popupTypePair = document.getElementById('popupTypePair');
    const closePopupButton2 = document.getElementById('closePopupTypePair');
    const inputFormTypePair = document.getElementById('inputFormTypePair');
    const tableBody2 = document.querySelector('#myTableTypePair tbody');
	const searchInput2 = document.getElementById('searchInputTypePair');
    let selectedRow2 = null;
    let rowCount2 = tableBody2.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton2.addEventListener('click', function() {
      overlayTypePair.style.display = 'block';
      popupTypePair.style.display = 'block';
    });

    closePopupButton2.addEventListener('click', function() {
      overlayTypePair.style.display = 'none';
      popupTypePair.style.display = 'none';
    });

    inputFormTypePair.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value12 = document.getElementById('inputTypePair1').value;

      if (selectedRow2) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow2.cells[1].textContent = value12;
        selectedRow2 = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow2 = document.createElement('tr');
        const numberCell2 = document.createElement('td');
        const cell12 = document.createElement('td');
        const editButtonCell2 = document.createElement('td');
        const editButton2 = document.createElement('button');
        const deleteButtonCell2 = document.createElement('td');
        const deleteButton2 = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell2.textContent = rowCount2;
        cell12.textContent = value12;

        editButton2.textContent = 'Ред';
        deleteButton2.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton2.addEventListener('click', function() {
          selectedRow2 = newRow2;
          document.getElementById('inputTypePair1').value = selectedRow2.cells[1].textContent;
		  overlayTypePair.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupTypePair.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton2.addEventListener('click', function() {
          newRow2.remove(); // Удаляем строку из таблицы
          updateRowNumbers2(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow2.appendChild(numberCell2);
        newRow2.appendChild(cell12);
        editButtonCell2.appendChild(editButton2);
        newRow2.appendChild(editButtonCell2);
        deleteButtonCell2.appendChild(deleteButton2);
        newRow2.appendChild(deleteButtonCell2);

        // Добавляем строку в таблицу
        tableBody2.appendChild(newRow2);

        rowCount2++;
      }

      // Сбрасываем значения input
      document.getElementById('inputTypePair1').value = '';

      overlayTypePair.style.display = 'none';
      popupTypePair.style.display = 'none';
    });

 function updateRowNumbers2() {
    const rows2 = tableBody2.children;
    for (let i = 0; i < rows2.length; i++) {
      rows2[i].cells[0].textContent = i + 1;
    }
    rowCount2 = rows2.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputTypePair.addEventListener('input', function() {
      const searchValue = searchInputTypePair.value.toLowerCase();
      const rows2 = tableBody2.getElementsByTagName('tr');
      for (let row of rows2) {
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
