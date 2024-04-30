const radioButtons = document.getElementsByName('adressaudience');
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    var radio1 = document.getElementById('radioAudience');
    var radio2 = document.getElementById('radioAdress');
        let AudienceId = document.getElementById('audience');
        let AdressId = document.getElementById('adress');
        if (radio1.checked) {
            console.log(radio1);
            AdressId.style.display = 'none';
            AudienceId.style.display = '';
        }
        else if (radio2.checked) {
            console.log(radio2);
            AudienceId.style.display = 'none';
            AdressId.style.display = 'inline-flex';
        }
  });
});