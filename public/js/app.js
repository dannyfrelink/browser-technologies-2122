const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');
const form = document.querySelector('form');

const button = document.querySelector('button');
const loader = document.querySelector('#loader');
const anchor = document.querySelector('a');
const loaderBack = document.querySelector('#loader_back');

const changeAnswersLabel = document.querySelector('main label');
const changeAnswersSelect = document.querySelector('select');
const changeAnswersButton = document.querySelector('#change_answers_button');

const checkFieldLength = () => {
    form.addEventListener('submit', (event) => {
        inputs.forEach(input => {
            if (input.value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        })
        textareas.forEach(textarea => {
            if (textarea.value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        });
    })
}
checkFieldLength();

const showLoaders = () => {
    if(button && loader) {
        button.addEventListener('click', () => {
            loader.classList.remove('hidden');
        });
    }

    if(anchor && loaderBack) {
        anchor.addEventListener('click', () => {
            loaderBack.classList.remove('hidden');
        });
    }
}
showLoaders();

if(changeAnswersSelect) {
    changeAnswersLabel.classList.remove('hidden');
    changeAnswersSelect.classList.remove('hidden');
    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', () => {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}