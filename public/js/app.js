const changeAnswersLabel = document.querySelector('main label');
const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

if(changeAnswersSelect) {
    changeAnswersLabel.classList.remove('hidden');
    changeAnswersSelect.classList.remove('hidden');
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}