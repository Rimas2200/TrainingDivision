// const addFlow = document.getElementById('AddFlow');
// const remFlow = document.getElementById('RemoveFlow')
// const Flowbody = document.getElementById('Flow');

// addFlow.addEventListener ('click', function() {
//     var flowName = prompt("Введите название потока"); // Открываем диалоговое окно для ввода имени кнопки
//         if (flowName) { // Проверяем, было ли введено имя
//             var newFlow = document.createElement('option');
//             newFlow.innerHTML = flowName;
//             Flowbody.appendChild(newFlow);
//         }
//     // const NewButton = document.createElement('button');
//     // NewButton.innerHTML = "New flow";
//     // NewButton.classList.add("napravleniya-btn");
//     // Flowbody.appendChild(NewButton);
// });
// remFlow.addEventListener('click', function() {
//     // Удаление последнего option
//     var options = Flowbody.getElementsByTagName('option');
//     if (options.length > 0) {
//         Flowbody.removeChild(options[options.length - 1]);
//     }
// });