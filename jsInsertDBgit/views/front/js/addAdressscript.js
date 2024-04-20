const showPopupButtonAdress = document.getElementById('showPopupAdress');
    const overlayAdress = document.getElementById('overlayAdress');
    const popupAdress = document.getElementById('popupAdress');
    const closePopupButtonAdress = document.getElementById('closePopupAdress');
    const inputFormAdress = document.getElementById('inputFormAdress');
    const tableBodyAdress = document.querySelector('#myTableAdress tbody');
	const searchInputAdress = document.getElementById('searchInputAdress');
    let selectedRowAdress = null;
    let rowCountAdress = tableBodyAdress.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButtonAdress.addEventListener('click', function() {
      overlayAdress.style.display = 'block';
      popupAdress.style.display = 'block';
    });

    closePopupButtonAdress.addEventListener('click', function() {
      overlayAdress.style.display = 'none';
      popupAdress.style.display = 'none';
    });

    inputFormAdress.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const valueAdress1 = document.getElementById('inputAdress1').value;
      const valueAdress2 = document.getElementById('inputAdress2').value;

      if (selectedRowAdress) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRowAdress.cells[1].textContent = valueAdress1;
        selectedRowAdress.cells[2].textContent = valueAdress2;
        selectedRowAdress = null;
      } else {
        // Создаем новую строку для таблицы
        const newRowAdress = document.createElement('tr');
        const numberCellAdress = document.createElement('td');
        const cellAdress1 = document.createElement('td');
        const cellAdress2 = document.createElement('td');
        const editButtonCellAdress = document.createElement('td');
        const editButtonAdress = document.createElement('button');
        const deleteButtonCellAdress = document.createElement('td');
        const deleteButtonAdress = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCellAdress.textContent = rowCountAdress;
        cellAdress1.textContent = valueAdress1;
        cellAdress2.textContent = valueAdress2;
        editButtonAdress.textContent = 'Ред';
        deleteButtonAdress.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButtonAdress.addEventListener('click', function() {
          selectedRowAdress = newRowAdress;
          document.getElementById('inputAdress1').value = selectedRowAdress.cells[1].textContent;
          document.getElementById('inputAdress2').value = selectedRowAdress.cells[2].textContent;
		  overlayAdress.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupAdress.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButtonAdress.addEventListener('click', function() {
          newRowAdress.remove(); // Удаляем строку из таблицы
          updateRowNumbersAdress(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRowAdress.appendChild(numberCellAdress);
        newRowAdress.appendChild(cellAdress1);
        newRowAdress.appendChild(cellAdress2);
        editButtonCellAdress.appendChild(editButtonAdress);
        newRowAdress.appendChild(editButtonCellAdress);
        deleteButtonCellAdress.appendChild(deleteButtonAdress);
        newRowAdress.appendChild(deleteButtonCellAdress);

        // Добавляем строку в таблицу
        tableBodyAdress.appendChild(newRowAdress);

        rowCountAdress++;
      }

      // Сбрасываем значения input
      document.getElementById('inputAdress1').value = '';
      document.getElementById('inputAdress2').value = '';

      overlayAdress.style.display = 'none';
      popupAdress.style.display = 'none';
    });

 function updateRowNumbersAdress() {
    const rowsAdress = tableBodyAdress.children;
    for (let i = 0; i < rowsAdress.length; i++) {
      rowsAdress[i].cells[0].textContent = i + 1;
    }
    rowCountAdress = rowsAdress.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputAdress.addEventListener('input', function() {
      const searchValueAdress = searchInputAdress.value.toLowerCase();
      const rowsAdress = tableBodyAdress.getElementsByTagName('tr');
      for (let row of rowsAdress) {
        let found = false;
        const cells = row.getElementsByTagName('td');
        for (let cell of cells) {
          if (cell.textContent.toLowerCase().includes(searchValueAdress)) {
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
