const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');
const form = document.querySelector('form');

const changeAnswersLabel = document.querySelector('main label');
const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

const checkFieldLength = () => {
	inputs.forEach(input => {
		if (input.value.length == 0) {
			form.addEventListener('submit', () => {
				alert('Nog niet alle velden zijn ingevuld')
			})
		}
	});
    textareas.forEach(textarea => {
		if (textarea.value.length == 0) {
			form.addEventListener('submit', () => {
				alert('Nog niet alle velden zijn ingevuld')
			})
		}
	});
}
checkFieldLength()

if(changeAnswersSelect) {
    changeAnswersLabel.classList.remove('hidden');
    changeAnswersSelect.classList.remove('hidden');
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}