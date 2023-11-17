function hideCart() {
    let div = document.getElementById("cart__main");
    let img = document.getElementById("cart-hide-img");
    let label = document.getElementById("cart-label");
    let input = document.getElementById("cart");
    let total = document.getElementById('total__price').textContent;
    let quantity = document.getElementById('total__items').textContent;

    if (div.style.display === 'none') {
        div.style.display = 'block';
        img.src = './assets/img/hide-btn.svg';
        label.innerHTML = 'Выбрать все';
        input.style.display = 'block';
    } else {
        div.style.display = 'none';
        img.src = './assets/img/show-btn.svg';
        label.innerHTML = `<span class="cart__selectAll__modified">${quantity} товаров · ${total} сом</span>`;
        input.style.display = 'none';
    }
}

function hideNotInStock() {
    let div = document.getElementById("notinstock");
    let hr = document.getElementById("notinstock__hr");
    let img = document.getElementById("notinstock-hide-img");

    if (div.style.display === 'none') {
        div.style.display = 'block';
        hr.style.display = 'block';
        img.src = './assets/img/hide-btn.svg';
    } else {
        div.style.display = 'none';
        hr.style.display = 'none';
        img.src = './assets/img/show-btn.svg';
    }
}

function showBtns(id) {
    if(document.getElementById('left-' + id) === null) {
        let btns = document.getElementById('btns-' + id);
        btns.style.display = 'flex';
    } else {
    let div = document.getElementById('left-' + id);
    let btns = document.getElementById('btns-' + id);
    div.style.display = 'flex';
    btns.style.display = 'flex';
    }
}

function hideBtns(id) {
    if(document.getElementById('left-' + id) === null) {
        let btns = document.getElementById('btns-' + id);
        btns.style.display = 'none';
    } else {
    let div = document.getElementById('left-' + id);
    let btns = document.getElementById('btns-' + id);
    div.style.display = 'none';
    btns.style.display = 'none';
    }
}

function showNotInstockBtns(id) {
    let btns = document.getElementById('notinstock-btns-' + id);
    btns.style.display = 'flex';
}

function hideNotInstockBtns(id) {
    let btns = document.getElementById('notinstock-btns-' + id);
    btns.style.display = 'none';
}

function likeItem(id) {
    let imgId = 'like-' + id;
    let img = document.getElementById(imgId);
    localStorage.setItem(imgId, 'liked');
    img.classList.toggle('btn__liked');
}