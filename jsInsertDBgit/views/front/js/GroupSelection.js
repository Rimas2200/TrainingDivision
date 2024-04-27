let prevSelected = 0;
let currentState = {
	1 : {
	'pairNumber1' : '#1',
	'pairSelectDiscipline' : 'Дисциплина',
	'pairSelectTeacher' : 'Преподаватель',
	'pairSelectAudience' : 'Аудитория',
	},
	2 : {
    'pairNumber1' : '#1',
    'pairSelectDiscipline' : 'Дисциплина',
    'pairSelectTeacher' : 'Преподаватель',
    'pairSelectAudience' : 'Аудитория',
	},
	3 : {
	'pairNumber1' : '#1',
	'pairSelectDiscipline' : 'Дисциплина',
	'pairSelectTeacher' : 'Преподаватель',
	'pairSelectAudience' : 'Аудитория',
	}
};

function renderData(selectElement){
	if (prevSelected != 0){
		currentState[prevSelected].pairNumber1 = $('td[data-id="' + prevSelected + '"] select.pairNumber1').val();
		currentState[prevSelected].pairSelectDiscipline = $('td[data-id="' + prevSelected + '"] select.pairSelectDiscipline').val();
		currentState[prevSelected].pairSelectTeacher = $('td[data-id="' + prevSelected + '"] select.pairSelectTeacher').val();
		currentState[prevSelected].pairSelectAudience = $('td[data-id="' + prevSelected + '"] select.pairSelectAudience').val();
		$('td[data-id="' + prevSelected + '"]').html('');
	}
	let selectedGroupId = selectElement.value;
	let source = $('#source').html();
	$('td[data-id="' + selectedGroupId + '"]').html(source);
	$('td[data-id="' + selectedGroupId + '"] select.pairNumber1').val(currentState[selectedGroupId].pairNumber1);
	$('td[data-id="' + selectedGroupId + '"] select.pairSelectDiscipline').val(currentState[selectedGroupId].pairSelectDiscipline);
	$('td[data-id="' + selectedGroupId + '"] select.pairSelectTeacher').val(currentState[selectedGroupId].pairSelectTeacher);
	$('td[data-id="' + selectedGroupId + '"] select.pairSelectAudience').val(currentState[selectedGroupId].pairSelectAudience);
	prevSelected = selectedGroupId;
}