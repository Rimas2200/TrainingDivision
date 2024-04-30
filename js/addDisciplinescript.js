const showPopupButtonDiscipline = document.getElementById('showPopupDiscipline');
    const overlayDiscipline = document.getElementById('overlayDiscipline');
    const overlayDisciplineEdit = document.getElementById('overlayDisciplineEdit');
    const popupDiscipline = document.getElementById('popupDiscipline');
    const popupDisciplineEdit = document.getElementById('popupDisciplineEdit');
    const closePopupButtonDiscipline = document.getElementById('closePopupDiscipline');
    const closePopupButtonDisciplineEdit = document.getElementById('closePopupDisciplineEdit');
    const inputFormDiscipline = document.getElementById('inputFormDiscipline');
    const tableBodyDiscipline = document.querySelector('#myTableDiscipline tbody');
	const searchInputDiscipline = document.getElementById('searchInputDiscipline');
    let selectedRowDiscipline = null;
    let rowCountDiscipline = tableBodyDiscipline.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButtonDiscipline.addEventListener('click', function() {
      overlayDiscipline.style.display = 'block';
      popupDiscipline.style.display = 'block';
    });

    closePopupButtonDiscipline.addEventListener('click', function() {
      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });
    closePopupButtonDisciplineEdit.addEventListener('click', function() {
      overlayDisciplineEdit.style.display = 'none';
      popupDisciplineEdit.style.display = 'none';
    });

    inputFormDiscipline.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const valueDiscipline1 = document.getElementById('inputDiscipline1').value;

      if (selectedRowDiscipline) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRowDiscipline.cells[1].textContent = valueDiscipline1;
		
        selectedRowDiscipline = null;
      } else {
        // Создаем новую строку для таблицы
        const newRowDiscipline = document.createElement('tr');
        const numberCellDiscipline = document.createElement('td');
        const cellDiscipline1 = document.createElement('td');
        const editButtonCellDiscipline = document.createElement('td');
        const editButtonDiscipline = document.createElement('button');
        const deleteButtonCellDiscipline = document.createElement('td');
        const deleteButtonDiscipline = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCellDiscipline.textContent = rowCountDiscipline;
        cellDiscipline1.textContent = valueDiscipline1;
        editButtonDiscipline.textContent = 'Ред';
        deleteButtonDiscipline.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButtonDiscipline.addEventListener('click', function() {
          selectedRowDiscipline = newRowDiscipline;
          document.getElementById('inputDiscipline1').value = selectedRowDiscipline.cells[1].textContent;
		  overlayDisciplineEdit.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupDisciplineEdit.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButtonDiscipline.addEventListener('click', function() {
          newRowDiscipline.remove(); // Удаляем строку из таблицы
          updateRowNumbersDiscipline(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRowDiscipline.appendChild(numberCellDiscipline);
        newRowDiscipline.appendChild(cellDiscipline1);
        editButtonCellDiscipline.appendChild(editButtonDiscipline);
        newRowDiscipline.appendChild(editButtonCellDiscipline);
        deleteButtonCellDiscipline.appendChild(deleteButtonDiscipline);
        newRowDiscipline.appendChild(deleteButtonCellDiscipline);

        // Добавляем строку в таблицу
        tableBodyDiscipline.appendChild(newRowDiscipline);

        rowCountDiscipline++;
      }

      // Сбрасываем значения input
      document.getElementById('inputDiscipline1').value = '';

      overlayDiscipline.style.display = 'none';
      popupDiscipline.style.display = 'none';
    });

 function updateRowNumbersDiscipline() {
    const rowsDiscipline = tableBodyDiscipline.children;
    for (let i = 0; i < rowsDiscipline.length; i++) {
      rowsDiscipline[i].cells[0].textContent = i + 1;
    }
    rowCountDiscipline = rowsDiscipline.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputDiscipline.addEventListener('input', function() {
      const searchValue = searchInputDiscipline.value.toLowerCase();
      const rowsDiscipline = tableBodyDiscipline.getElementsByTagName('tr');
      for (let row of rowsDiscipline) {
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
