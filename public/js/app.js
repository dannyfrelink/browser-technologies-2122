const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

if(changeAnswersSelect) {
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}