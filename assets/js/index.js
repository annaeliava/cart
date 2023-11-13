function showShippingModal() {
    let modal = document.getElementById('modal-shipping');
    modal.style.display = 'flex';
}

function closeModalShipping() {
    let modal = document.getElementById('modal-shipping');
    modal.style.display = 'none';
}

function showCardModal() {
    let modal = document.getElementById('modal-payment');
    modal.style.display = 'flex';
}

function closeModalPayment() {
    let modal = document.getElementById('modal-payment');
    modal.style.display = 'none';
}

function chooseShipping() {
    let pickpoint = document.getElementById('shipping-point');
    let carrier = document.getElementById('shipping-carrier');

    if (carrier.onclick.value === 'true') {
        if (pickpoint.hasAttribute('style', 'border-color:#CB11AB')) {
            pickpoint.style.borderColor = 'rgba(203, 17, 171, 0.15)';
        }
        carrier.style.borderColor = '#CB11AB';
        console.log('asdad')
    } else if (pickpoint.onclick.value === 'true') {
        if (carrier.hasAttribute('style', 'border-color:#CB11AB')) {
            carrier.style.borderColor = 'rgba(203, 17, 171, 0.15)';
        }
        pickpoint.style.borderColor = '#CB11AB';
        console.log('pressed')
    }
}

function hideCart() {
    let div = document.getElementById("cart__main");
    let img = document.getElementById("cart-hide-img");
    let label = document.getElementById("cart-label");
    let input = document.getElementById("cart");

    if (div.style.display === 'none') {
        div.style.display = 'block';
        img.src = './assets/img/hide-btn.svg';
        label.innerHTML = 'Выбрать все';
        input.style.display = 'block';
    } else {
        div.style.display = 'none';
        img.src = './assets/img/show-btn.svg';
        label.innerHTML = `<span class="cart__selectAll__modified">266 товаров · 2 100 569 сом</span>`;
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

function likeItem(id) {
    let imgId = 'like-' + id;
    let img = document.getElementById(imgId);
    localStorage.setItem(imgId, 'liked');
    img.classList.toggle('btn__liked');
}