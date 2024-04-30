const showPopupButtonDepartment = document.getElementById('showPopupDepartment');
    const overlayDepartment = document.getElementById('overlayDepartment');
    const overlayDepartmentEdit = document.getElementById('overlayDepartmentEdit');
    const popupDepartment = document.getElementById('popupDepartment');
    const popupDepartmentEdit = document.getElementById('popupDepartmentEdit');
    const closePopupButtonDepartment = document.getElementById('closePopupDepartment');
    const closePopupButtonDepartmentEdit = document.getElementById('closePopupDepartmentEdit');
    const inputFormDepartment = document.getElementById('inputFormDepartment');
    const tableBodyDepartment = document.querySelector('#myTableDepartment tbody');
	const searchInputDepartment = document.getElementById('searchInputDepartment');
    let selectedRowDepartment = null;
    let rowCountDepartment = tableBodyDepartment.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButtonDepartment.addEventListener('click', function() {
      overlayDepartment.style.display = 'block';
      popupDepartment.style.display = 'block';
    });

    closePopupButtonDepartment.addEventListener('click', function() {
      overlayDepartment.style.display = 'none';
      popupDepartment.style.display = 'none';
    });
    closePopupButtonDepartmentEdit.addEventListener('click', function() {
      overlayDepartmentEdit.style.display = 'none';
      popupDepartmentEdit.style.display = 'none';
    });

    inputFormDepartment.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const valueDepartment1 = document.getElementById('inputDepartment1').value;
      const valueDepartment2 = document.getElementById('inputDepartment2').value;

      if (selectedRowDepartment) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRowDepartment.cells[1].textContent = valueDepartment1;
        selectedRowDepartment.cells[2].textContent = valueDepartment2;
        selectedRowDepartment = null;
      } else {
        // Создаем новую строку для таблицы
        const newRowDepartment = document.createElement('tr');
        const numberCellDepartment = document.createElement('td');
        const cellDepartment1 = document.createElement('td');
        const cellDepartment2 = document.createElement('td');
        const editButtonCellDepartment = document.createElement('td');
        const editButtonDepartment = document.createElement('button');
        const deleteButtonCellDepartment = document.createElement('td');
        const deleteButtonDepartment = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCellDepartment.textContent = rowCountDepartment;
        cellDepartment1.textContent = valueDepartment1;
        cellDepartment2.textContent = valueDepartment2;
        editButtonDepartment.textContent = 'Ред';
        deleteButtonDepartment.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButtonDepartment.addEventListener('click', function() {
          selectedRowDepartment = newRowDepartment;
          document.getElementById('inputDepartment1').value = selectedRowDepartment.cells[1].textContent;
          document.getElementById('inputDepartment2').value = selectedRowDepartment.cells[2].textContent;
		  overlayDepartmentEdit.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupDepartmentEdit.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButtonDepartment.addEventListener('click', function() {
          newRowDepartment.remove(); // Удаляем строку из таблицы
          updateRowNumbersDepartment(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRowDepartment.appendChild(numberCellDepartment);
        newRowDepartment.appendChild(cellDepartment1);
        newRowDepartment.appendChild(cellDepartment2);
        editButtonCellDepartment.appendChild(editButtonDepartment);
        newRowDepartment.appendChild(editButtonCellDepartment);
        deleteButtonCellDepartment.appendChild(deleteButtonDepartment);
        newRowDepartment.appendChild(deleteButtonCellDepartment);

        // Добавляем строку в таблицу
        tableBodyDepartment.appendChild(newRowDepartment);

        rowCountDepartment++;
      }

      // Сбрасываем значения input
      document.getElementById('inputDepartment1').value = '';
      document.getElementById('inputDepartment2').value = '';

      overlayDepartment.style.display = 'none';
      popupDepartment.style.display = 'none';
    });

 function updateRowNumbersDepartment() {
    const rowsDepartment = tableBodyDepartment.children;
    for (let i = 0; i < rowsDepartment.length; i++) {
      rowsDepartment[i].cells[0].textContent = i + 1;
    }
    rowCountDepartment = rowsDepartment.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputDepartment.addEventListener('input', function() {
      const searchValueDepartment = searchInputDepartment.value.toLowerCase();
      const rowsDepartment = tableBodyDepartment.getElementsByTagName('tr');
      for (let row of rowsDepartment) {
        let found = false;
        const cells = row.getElementsByTagName('td');
        for (let cell of cells) {
          if (cell.textContent.toLowerCase().includes(searchValueDepartment)) {
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
