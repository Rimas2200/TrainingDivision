const showPopupButtonDirection = document.getElementById('showPopupDirection');
    const overlayDirection = document.getElementById('overlayDirection');
    const overlayDirectionEdit = document.getElementById('overlayDirectionEdit');
    const popupDirection = document.getElementById('popupDirection');
    const popupDirectionEdit = document.getElementById('popupDirectionEdit');
    const closePopupButtonDirection = document.getElementById('closePopupDirection');
    const closePopupButtonDirectionEdit = document.getElementById('closePopupDirectionEdit');
    const inputFormDirection = document.getElementById('inputFormDirection');
    const tableBodyDirection = document.querySelector('#myTableDirection tbody');
	const searchInputDirection = document.getElementById('searchInputDirection');
    let selectedRowDirection = null;
    let rowCountDirection = tableBodyDirection.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButtonDirection.addEventListener('click', function() {
      overlayDirection.style.display = 'block';
      popupDirection.style.display = 'block';
    });

    closePopupButtonDirection.addEventListener('click', function() {
      overlayDirection.style.display = 'none';
      popupDirection.style.display = 'none';
    });
    closePopupButtonDirectionEdit.addEventListener('click', function() {
      overlayDirectionEdit.style.display = 'none';
      popupDirectionEdit.style.display = 'none';
    });

    inputFormDirection.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const valueDirection1 = document.getElementById('inputDirection1').value;
      const valueDirection2 = document.getElementById('inputDirection2').value;
      const valueDirection3 = document.getElementById('inputDirection3').value;


      if (selectedRowDirection) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRowDirection.cells[1].textContent = valueDirection1;
        selectedRowDirection.cells[2].textContent = valueDirection2;
        selectedRowDirection.cells[3].textContent = valueDirection3;
		
        selectedRowDirection = null;
      } else {
        // Создаем новую строку для таблицы
        const newRowDirection = document.createElement('tr');
        const numberCellDirection = document.createElement('td');
        const cellDirection1 = document.createElement('td');
        const cellDirection2 = document.createElement('td');
        const cellDirection3 = document.createElement('td');
        const editButtonCellDirection = document.createElement('td');
        const editButtonDirection = document.createElement('button');
        const deleteButtonCellDirection = document.createElement('td');
        const deleteButtonDirection = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCellDirection.textContent = rowCountDirection;
        cellDirection1.textContent = valueDirection1;
        cellDirection2.textContent = valueDirection2;
        cellDirection3.textContent = valueDirection3;
        editButtonDirection.textContent = 'Ред';
        deleteButtonDirection.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButtonDirection.addEventListener('click', function() {
          selectedRowDirection = newRowDirection;
          document.getElementById('inputDirection1').value = selectedRowDirection.cells[1].textContent;
          document.getElementById('inputDirection2').value = selectedRowDirection.cells[2].textContent;
          document.getElementById('inputDirection3').value = selectedRowDirection.cells[3].textContent;
		  overlayDirectionEdit.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupDirectionEdit.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButtonDirection.addEventListener('click', function() {
          newRowDirection.remove(); // Удаляем строку из таблицы
          updateRowNumbersDirection(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRowDirection.appendChild(numberCellDirection);
        newRowDirection.appendChild(cellDirection1);
        newRowDirection.appendChild(cellDirection2);
        newRowDirection.appendChild(cellDirection3);
        editButtonCellDirection.appendChild(editButtonDirection);
        newRowDirection.appendChild(editButtonCellDirection);
        deleteButtonCellDirection.appendChild(deleteButtonDirection);
        newRowDirection.appendChild(deleteButtonCellDirection);

        // Добавляем строку в таблицу
        tableBodyDirection.appendChild(newRowDirection);

        rowCountDirection++;
      }

      // Сбрасываем значения input
      document.getElementById('inputDirection1').value = '';
      document.getElementById('inputDirection2').value = '';
      document.getElementById('inputDirection3').value = '';

      overlayDirection.style.display = 'none';
      popupDirection.style.display = 'none';
    });

 function updateRowNumbersDirection() {
    const rowsDirection = tableBodyDirection.children;
    for (let i = 0; i < rowsDirection.length; i++) {
      rowsDirection[i].cells[0].textContent = i + 1;
    }
    rowCountDirection = rowsDirection.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputDirection.addEventListener('input', function() {
      const searchValue = searchInputDirection.value.toLowerCase();
      const rowsDirection = tableBodyDirection.getElementsByTagName('tr');
      for (let row of rowsDirection) {
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
