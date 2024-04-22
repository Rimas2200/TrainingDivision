const showPopupButton1 = document.getElementById('showPopupDiscipline');
    const overlayDiscipline = document.getElementById('overlayDiscipline');
    const popupDiscipline = document.getElementById('popupDiscipline');
    const closePopupButton1 = document.getElementById('closePopupDiscipline');
    const inputFormDiscipline = document.getElementById('inputFormDiscipline');
    const tableBody1 = document.querySelector('#myTableDiscipline tbody');
	const searchInput1 = document.getElementById('searchInputDiscipline');
    let selectedRow1 = null;
    let rowCount1 = tableBody1.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton1.addEventListener('click', function() {
      overlayDiscipline.style.display = 'block';
      popupDiscipline.style.display = 'block';
    });

    closePopupButton1.addEventListener('click', function() {
      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });

    inputFormDiscipline.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value11 = document.getElementById('inputDiscipline1').value;
      const value12 = document.getElementById('inputDiscipline2').value;
      const value13 = document.getElementById('inputDiscipline3').value;


      if (selectedRow1) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow1.cells[1].textContent = value11;
        selectedRow1.cells[2].textContent = value12;
        selectedRow1.cells[3].textContent = value13;
		
        selectedRow1 = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow1 = document.createElement('tr');
        const numberCell1 = document.createElement('td');
        const cell11 = document.createElement('td');
        const cell12 = document.createElement('td');
        const cell13 = document.createElement('td');
        const editButtonCell1 = document.createElement('td');
        const editButton1 = document.createElement('button');
        const deleteButtonCell1 = document.createElement('td');
        const deleteButton1 = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell1.textContent = rowCount1;
        cell11.textContent = value11;
        cell12.textContent = value12;
        cell13.textContent = value13;
        editButton1.textContent = 'Ред';
        deleteButton1.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton1.addEventListener('click', function() {
          selectedRow1 = newRow1;
          document.getElementById('inputDiscipline1').value = selectedRow1.cells[1].textContent;
          document.getElementById('inputDiscipline2').value = selectedRow1.cells[2].textContent;
          document.getElementById('inputDiscipline3').value = selectedRow1.cells[3].textContent;
		  overlayDiscipline.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupDiscipline.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton1.addEventListener('click', function() {
          newRow1.remove(); // Удаляем строку из таблицы
          updateRowNumbers1(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow1.appendChild(numberCell1);
        newRow1.appendChild(cell11);
        newRow1.appendChild(cell12);
        newRow1.appendChild(cell13);
        editButtonCell1.appendChild(editButton1);
        newRow1.appendChild(editButtonCell1);
        deleteButtonCell1.appendChild(deleteButton1);
        newRow1.appendChild(deleteButtonCell1);

        // Добавляем строку в таблицу
        tableBody1.appendChild(newRow1);

        rowCount1++;
      }

      // Сбрасываем значения input
      document.getElementById('inputDiscipline1').value = '';

      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });

 function updateRowNumbers1() {
    const rows1 = tableBody1.children;
    for (let i = 0; i < rows1.length; i++) {
      rows1[i].cells[0].textContent = i + 1;
    }
    rowCount1 = rows1.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputDiscipline.addEventListener('input', function() {
      const searchValue = searchInputDiscipline.value.toLowerCase();
      const rows1 = tableBody1.getElementsByTagName('tr');
      for (let row of rows1) {
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
