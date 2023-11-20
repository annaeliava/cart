function hideCart() {
    let div = document.getElementById("cart__main");
    let img = document.getElementById("cart-hide-img");
    let label_select = document.getElementById("cart-selectBtn");
    let total = document.getElementById('total__price').textContent;
    let quantity = document.getElementById('total__items').textContent;
    let price_quantity = document.getElementById('cart__selectAll');
    let btn__quantity = document.getElementById('cart__selectAll__quantity');
    let btn__price = document.getElementById('cart-select-price');

    if (div.style.display === 'none') {
        div.style.display = 'block';
        img.src = './assets/img/hide-btn.svg';
        label_select.style.display = 'block';
        price_quantity.style.display = 'none';
    } else {
        div.style.display = 'none';
        img.src = './assets/img/show-btn.svg';
        label_select.style.display = 'none';
        btn__quantity.textContent = quantity;
        btn__price.textContent = total;
        price_quantity.style.display = 'block';
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

function deleteAddress(btn) {
    let id = btn.id.slice(-1);
    let id_deleted = `address-${id}`;

    document.getElementById(id_deleted).remove();
}