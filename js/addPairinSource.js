const AddPairSource = document.getElementById ("AddPairSource");
const DeletePairSource = document.getElementById ("DeletePairSource");
let PairCount = 2;
AddPairSource.addEventListener('click', function(){
    if (PairCount == 9){
        return false;
    }
    let CurrentPair = document.getElementById ("pair" + PairCount);
    CurrentPair.style.display = '';
    PairCount = PairCount + 1;
    console.log(PairCount);
});
DeletePairSource.addEventListener ('click', function(){
    if (PairCount == 2){
        return false;
    }
    PairCount = PairCount - 1;
    let CurrentPair = document.getElementById ("pair" + PairCount);
    CurrentPair.style.display = 'none';
    console.log(PairCount);
});