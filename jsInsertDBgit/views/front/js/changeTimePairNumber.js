const TimeChange = document.getElementById ('time');

TimeChange.addEventListener('change', function(){
    const PairNumberChange = document.getElementById('PairNumber');
    const TimeSelect = document.getElementById('Timeselect');
    if (TimeChange.checked) {
        PairNumberChange.style.display = 'none';
        TimeSelect.style.display = 'inline-flex';
    }
    else {
        TimeSelect.style.display = 'none';
        PairNumberChange.style.display = '';
    }
});