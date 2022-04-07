var inputs = document.querySelectorAll('input');
var textareas = document.querySelectorAll('textarea');
var form = document.querySelector('form');

var inputDate1 = document.querySelector('input[type="date"]:first-of-type');
var inputDate2 = document.querySelector('input[type="date"]:last-of-type');

var button = document.querySelector('button');
var loader = document.querySelector('#loader');
var anchor = document.querySelector('a');
var loaderBack = document.querySelector('#loader_back');

var changeAnswersLabel = document.querySelector('main label');
var changeAnswersSelect = document.querySelector('select');
var changeAnswersButton = document.querySelector('#change_answers_button');

function hideLoader() {
    if (loader) {
        if (document.body.classList) {
            return loader.classList.add('hidden');
        }
        else {
            return loader.style.display = 'none';
        }
    }
}

function checkFieldLength() {
    form.addEventListener('submit', function (e) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                e.preventDefault()
                hideLoader()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
        for (var i = 0; i < textareas.length; i++) {
            if (textareas[i].value.length == 0) {
                e.preventDefault()
                hideLoader()
                alert('Nog niet alle velden zijn ingevuld');
            }
        }
    })
}
if (form) {
    checkFieldLength();
}

function checkDates() {
    if (date1.getTime() > date2.getTime()) {
        return form.addEventListener('submit', function (e) {
            e.preventDefault()
            hideLoader()
            alert('Begindatum is na de einddatum');
        })
    }
}

if (inputDate1 && inputDate2) {
    var date1 = new Date(inputDate1.value);
    var date2 = new Date(inputDate2.value);

    inputDate1.addEventListener('change', function () {
        date1 = new Date(inputDate1.value)
        checkDates()
    })

    inputDate2.addEventListener('change', function (e) {
        date2 = new Date(inputDate2.value)
        checkDates()
    })
}

function showLoaders() {
    if (button && loader) {
        button.addEventListener('click', function () {
            if (document.body.classList) {
                loader.classList.remove('hidden');
            }
            else {
                loader.style.display = 'block';
            }
        });
    }

    if (anchor && loaderBack) {
        anchor.addEventListener('click', function () {
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

if (changeAnswersSelect) {
    if (document.body.classList) {
        changeAnswersLabel.classList.remove('hidden');
        changeAnswersSelect.classList.remove('hidden');
    }
    else {
        changeAnswersLabel.style.display = 'block';
        changeAnswersSelect.style.display = 'block';
    }

    changeAnswersButton.setAttribute('href', changeAnswersSelect.value);

    changeAnswersSelect.addEventListener('change', function () {
        changeAnswersButton.setAttribute('href', changeAnswersSelect.value);
    });
}