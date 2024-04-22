let prevSelected = 0;
let currentState = {
	1 : {
	'pairNumber1' : '',
	'pairSelectDiscipline' : '',
	'pairSelectTeacher' : '',
	'pairSelectAudience' : '',
	},
	2 : {
    'pairNumber1' : '',
    'pairSelectDiscipline' : '',
    'pairSelectTeacher' : '',
    'pairSelectAudience' : '',
	},
	3 : {
	'pairNumber1' : '',
	'pairSelectDiscipline' : '',
	'pairSelectTeacher' : '',
	'pairSelectAudience' : '',
	}
};
function renderData(selectElement){
	if (prevSelected != 0){
		currentState[prevSelected].pairNumber1 = $('td[data-id="' + prevSelected + '"] input.pairNumber1').val();
		currentState[prevSelected].pairSelectDiscipline = $('td[data-id="' + prevSelected + '"] input.pairSelectDiscipline').val();
		currentState[prevSelected].pairSelectTeacher = $('td[data-id="' + prevSelected + '"] input.pairSelectTeacher').val();
		currentState[prevSelected].pairSelectAudience = $('td[data-id="' + prevSelected + '"] input.pairSelectAudience').val();
		$('td[data-id="' + prevSelected + '"]').html('');
}
let selectedGroupId = selectElement.value;
	let source = $('#source').html();
	$('td[data-id="' + selectedGroupId + '"]').html(source);
	$('td[data-id="' + selectedGroupId + '"] input.pairNumber1').val(currentState[selectedGroupId].pairNumber1);
	$('td[data-id="' + selectedGroupId + '"] input.pairSelectDiscipline').val(currentState[selectedGroupId].pairSelectDiscipline);
	$('td[data-id="' + selectedGroupId + '"] input.pairSelectTeacher').val(currentState[selectedGroupId].pairSelectTeacher);
	$('td[data-id="' + selectedGroupId + '"] input.pairSelectAudience').val(currentState[selectedGroupId].pairSelectAudience);
	prevSelected = selectedGroupId;
}