const showPopupButton3 = document.getElementById('showPopupAudience');
    const overlayAudience = document.getElementById('overlayAudience');
    const overlayAudienceEdit = document.getElementById('overlayAudienceEdit');
    const popupAudience = document.getElementById('popupAudience');
    const popupAudienceEdit = document.getElementById('popupAudienceEdit');
    const closePopupButton3 = document.getElementById('closePopupAudience');
    const closePopupButtonAudienceEdit = document.getElementById('closePopupAudienceEdit');
    const inputFormAudience = document.getElementById('inputFormAudience');
    const tableBody3 = document.querySelector('#myTableAudience tbody');
	const searchInput3 = document.getElementById('searchInputAudience');
    let selectedRow3 = null;
    let rowCount3 = tableBody3.children.length + 1; // Устанавливаем начальное значение rowCount

    showPopupButton3.addEventListener('click', function() {
      overlayAudience.style.display = 'block';
      popupAudience.style.display = 'block';
    });

    closePopupButton3.addEventListener('click', function() {
      overlayAudience.style.display = 'none';
      popupAudience.style.display = 'none';
    });
    closePopupButtonAudienceEdit.addEventListener('click', function() {
      overlayAudienceEdit.style.display = 'none';
      popupAudienceEdit.style.display = 'none';
    });

    inputFormAudience.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Получаем значения из input
      const value13 = document.getElementById('inputAudience1').value;
      const value14 = document.getElementById('inputAudience2').value;

      if (selectedRow3) {
        // Если выбрана строка для редактирования, обновляем значения ячеек
        selectedRow3.cells[1].textContent = value13;
        selectedRow3.cells[2].textContent = value14;
        selectedRow3 = null;
      } else {
        // Создаем новую строку для таблицы
        const newRow3 = document.createElement('tr');
        const numberCell3 = document.createElement('td');
        const cell13 = document.createElement('td');
        const cell14 = document.createElement('td');
        const editButtonCell3 = document.createElement('td');
        const editButton3 = document.createElement('button');
        const deleteButtonCell3 = document.createElement('td');
        const deleteButton3 = document.createElement('button');

        // Устанавливаем значения ячеек
        numberCell3.textContent = rowCount3;
        cell13.textContent = value13;
        cell14.textContent = value14;
        editButton3.textContent = 'Ред';
        deleteButton3.textContent = 'Уд';

        // Добавляем обработчики событий на кнопки редактирования и удаления
        editButton3.addEventListener('click', function() {
          selectedRow3 = newRow3;
          document.getElementById('inputAudience1').value = selectedRow3.cells[1].textContent;
		  overlayAudienceEdit.style.display = 'block'; // Отображаем overlay при нажатии на кнопку "Редактировать"
		  popupAudienceEdit.style.display = 'block'; // Отображаем всплывающее окно при нажатии на кнопку "Редактировать"
        });

        deleteButton3.addEventListener('click', function() {
          newRow3.remove(); // Удаляем строку из таблицы
          updateRowNumbers3(); // Обновляем номера строк
        });

        // Добавляем ячейки в строку
        newRow3.appendChild(numberCell3);
        newRow3.appendChild(cell13);
        newRow3.appendChild(cell14);
        editButtonCell3.appendChild(editButton3);
        newRow3.appendChild(editButtonCell3);
        deleteButtonCell3.appendChild(deleteButton3);
        newRow3.appendChild(deleteButtonCell3);

        // Добавляем строку в таблицу
        tableBody3.appendChild(newRow3);

        rowCount3++;
      }

      // Сбрасываем значения input
      document.getElementById('inputAudience1').value = '';


      overlayAudience.style.display = 'none';
      popupAudience.style.display = 'none';
    });

 function updateRowNumbers3() {
    const rows3 = tableBody3.children;
    for (let i = 0; i < rows3.length; i++) {
      rows3[i].cells[0].textContent = i + 1;
    }
    rowCount3 = rows3.length + 1; // Обновляем значение rowCount после удаления
  }
  
searchInputAudience.addEventListener('input', function() {
      const searchValue = searchInputAudience.value.toLowerCase();
      const rows3 = tableBody.getElementsByTagName('tr');
      for (let row of rows3) {
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
