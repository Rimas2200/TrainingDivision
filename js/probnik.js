const ABC = document.getElementById ('abcde');

ABC.addEventListener ('click', function(){
    event.preventDefault();
    var table = document.getElementById('12345');

      // Создаем первую строку (зеленую)
      var row1 = document.createElement('tr');
        var cell = document.createElement('td');
        var cell2 = document.createElement('td');
        row1.appendChild(cell);
        row1.appendChild(cell2);
      row1.style.backgroundColor = 'green';
      table.appendChild(row1);

      // Создаем вторую строку
      var row2 = document.createElement('tr');
      table.appendChild(row2);
        var cell = document.createElement('td');
        var cell1 = document.createElement('td');
        cell.setAttribute('data-id', 1);
        cell.classList.add('vremennaya');
        row2.appendChild(cell);
        row2.appendChild(cell1);
    
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deletePair');
      deleteButton.addEventListener('click', function() {
        table.removeChild(row1);
        table.removeChild(row2);
      });
      row2.lastChild.appendChild(deleteButton);
});