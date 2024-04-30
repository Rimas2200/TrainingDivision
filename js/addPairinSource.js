const AddPairSource = document.getElementById ("AddPairSource");
const DeletePairSource = document.getElementById ("DeletePairSource");
let PairCount = 2;
AddPairSource.addEventListener('click', function(){
    let CurrentPair = document.getElementById ("pair" + PairCount);
    CurrentPair.style.display = '';
    PairCount = PairCount + 1;
    console.log(PairCount);
});
DeletePairSource.addEventListener ('click', function(){
    PairCount = PairCount - 1;
    let CurrentPair = document.getElementById ("pair" + PairCount);
    CurrentPair.style.display = 'none';
    console.log(PairCount);
});