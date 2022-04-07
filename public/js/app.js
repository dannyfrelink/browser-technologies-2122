var inputs = document.querySelectorAll('input');
var textareas = document.querySelectorAll('textarea');
var form = document.querySelector('form');

var button = document.querySelector('button');
var loader = document.querySelector('#loader');
var anchor = document.querySelector('a');
var loaderBack = document.querySelector('#loader_back');

var changeAnswersLabel = document.querySelector('main label');
var changeAnswersSelect = document.querySelector('select');
var changeAnswersButton = document.querySelector('#change_answers_button');

function checkFieldLength() {
    form.addEventListener('submit', function(event) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
        for (var i = 0; i < textareas.length; i++) {
            if (textareas[i].value.length == 0) {
                event.preventDefault()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
    })
}
checkFieldLength();

function showLoaders() {
    if(button && loader) {
        button.addEventListener('click', function() {
            if (document.body.classList) {
                loader.classList.remove('hidden');
            }
            else {
                loader.style.display = 'block';
            }
        });
    }

    if(anchor && loaderBack) {
        anchor.addEventListener('click', function() {
            if (document.body.classList) {
                loaderBack.classList.remove('hidden');
            }
            else {
                loaderBack.style.display = 'block';
            }
        });
    }
}
showLoaders();

if(changeAnswersSelect) {
    if(document.body.classList) {
        changeAnswersLabel.classList.remove('hidden');
        changeAnswersSelect.classList.remove('hidden');
    }
    else {
        changeAnswersLabel.style.display = 'block';
        changeAnswersSelect.style.display = 'block';
    }

    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', function() {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}