var subgroupMenu = document.getElementById("subgroup");
subgroupMenu.addEventListener("change", function() {
    var selectedValue = parseInt(subgroupMenu.value);
    var table = document.querySelector("monday");
    var rows = table.querySelectorAll("tbody tr");
    rows.forEach(function(row) {
        var rowContent = row.innerHTML;
        row.innerHTML = "";
        for (var i = 0; i < selectedValue; i++) {
            var cell = document.createElement("td");
            cell.innerHTML = rowContent;
            row.appendChild(cell);
        }
    });
});
