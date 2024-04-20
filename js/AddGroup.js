const addGroup = document.getElementById('AddGroup');
const remGroup = document.getElementById('RemoveGroup')
const Groupbody = document.getElementById('Group');


addGroup.addEventListener ('click', function() {
    const NewButton1 = document.createElement('option');
    NewButton1.innerHTML = "New group";
    NewButton1.classList.add("gruppy-btn");
    Groupbody.appendChild(NewButton1);
    remGroup.addEventListener ('click', function() {NewButton1.remove()});
});

