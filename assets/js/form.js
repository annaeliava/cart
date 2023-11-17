let input_name = document.querySelector('#name-form');
let label_name = document.getElementById('form__label__name');

let input_surname = document.querySelector('#surname-form');
let label_surname = document.getElementById('form__label__surname');

let input_email = document.querySelector('#email-form');
let label_email = document.getElementById('form__label__email');

let input_tel = document.querySelector('#tel-form');
let label_tel = document.getElementById('form__label__tel');

let input_inn = document.querySelector('#inn-form');
let label_inn = document.getElementById('form__label__inn');

input_name.addEventListener('input', function(e) {
    if(e.target.value.length > 0){
        label_name.innerText = "Имя";
    } else {
        label_name.innerText = "";
    }
});

input_surname.addEventListener('input', function(e){
    if(e.target.value.length > 0){
        label_surname.innerText = "Фамилия";
    } else {
        label_surname.innerText = "";
    }
});

input_email.addEventListener('input', function(e){
    if(e.target.value.length > 0){
        label_email.innerText = "Почта";
    } else {
        label_email.innerText = "";
    }
});

input_tel.addEventListener('input', function(e){
    if(e.target.value.length > 0){
        label_tel.innerText = "Телефон";
    } else {
        label_tel.innerText = "";
    }
});

input_inn.addEventListener('input', function(e){
    if(e.target.value.length > 0) {
        label_inn.innerText = "ИНН";
    } else {
        label_inn.innerText = "";
    }
});