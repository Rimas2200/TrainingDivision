const Addpair = document.getElementById('AddPairbtn');

Addpair.addEventListener ('click', function() {
    var table = document.getElementById("monday");
    for (var i = 0; i < 3; i++) {
      var row = table.insertRow(-1); // Вставляем новую строку в конец таблицы
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Новая строка " + (i + 1);
      cell2.innerHTML = "Данные " + (i + 1);
    }
});