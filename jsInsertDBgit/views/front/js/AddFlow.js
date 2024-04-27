const addFlow = document.getElementById('AddFlow');
const Flowbody = document.getElementById('Flow');

addFlow.addEventListener ('click', function() {
    const NewButton = document.createElement('button');
    NewButton.innerHTML = "New flow";
    NewButton.classList.add("napravleniya-btn");
    Flowbody.appendChild(NewButton);
});