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

function validateName() {
    let regex = /[^a-zA-Zа-яА-ЯёЁ]/;
    let name = document.getElementById("name-form");
    let name_value = document.getElementById("name-form").value;
    if(!(regex.test(name_value))) {
        name.classList.add('form__error');
        name.style.borderBottomWidth = '1px';
        name.style.borderBottomStyle = 'solid';
        name.style.borderBottomColor = "#F55123";
        document.getElementById('error__name').style.display = 'block';
    }
}

function validateSurname() {
    let regex = /[а-яА-Я]/;
    let name = document.getElementById("surname-form");
    let name_value = document.getElementById("surname-form").value;
    if(!(regex.test(name_value))) {
        name.classList.add('form__error');
        name.style.borderBottomWidth = '1px';
        name.style.borderBottomStyle = 'solid';
        name.style.borderBottomColor = "#F55123";
        document.getElementById('error__surname').style.display = 'block';
    }
}

function validatePhone() {
    let regex = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let tel = document.getElementById("tel-form");
    let tel_value = document.getElementById("tel-form").value;
    if(!(regex.test(tel_value))) {
        tel.classList.add('form__error');
        tel.style.borderBottomWidth = '1px';
        tel.style.borderBottomStyle = 'solid';
        tel.style.borderBottomColor = "#F55123";
        document.getElementById('error__phone').style.display = 'block';
    }
}


function validateEmail() {
    let regex =  /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let mail = document.getElementById("email-form");
    let mail_value = mail.value;

    if(!(regex.test(mail_value))) {
        mail.classList.add('form__error');
        mail.style.borderBottomWidth = '1px';
        mail.style.borderBottomStyle = 'solid';
        mail.style.borderBottomColor = "#F55123";
        document.getElementById('error__email').style.display = 'block';
    }
}

function validateInn() {
    let regex = /^[0-9]*$/;
    let inn = document.getElementById('inn-form');
    let inn_value = inn.value;

    if(!(regex.test(inn_value))) {
        inn.classList.add('form__error');
        inn.style.borderBottomWidth = '1px';
        inn.style.borderBottomStyle = 'solid';
        inn.style.borderBottomColor = "#F55123";
        document.getElementById('error__inn').textContent = 'Укажите ИНН';
    } else {
        document.getElementById('error__inn').textContent = 'Для таможенного оформления';
    }
}

function submit(e) {
    e.preventDefault();

    let form = document.getElementById("form"); 

    form.scrollTo({ 
        top: form.clientHeight, 
        left: form.clientWidth, 
        behavior: "smooth", 
    })
}


var inp = document.getElementById("tel-form");

inp.onclick = function() {
    inp.value = "+";
}

var old = 0;

inp.onkeydown = function() {
    var curLen = inp.value.length;
    
    if (curLen < old){
        old--;
        return;
    }
    
    if (curLen == 2) 
        inp.value = inp.value + "(";
    
    if (curLen == 6)
        inp.value = inp.value + ")";
      
     if (curLen == 10)
        inp.value = inp.value + "-"; 
      
     if (curLen == 13)
        inp.value = inp.value + "-";  
      
     if (curLen > 15)
        inp.value = inp.value.substring(0, inp.value.length - 1);
      
    old++;
}