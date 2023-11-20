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

function chooseShipping(e) {
    let pickpoint = document.getElementById('shipping-point');
    let carrier = document.getElementById('shipping-carrier');

    let div = e.id;

    if (div === carrier.id) {
        if (pickpoint.hasAttribute('style', 'border-color:#CB11AB')) {
            pickpoint.style.borderColor = 'rgba(203, 17, 171, 0.15)';
        }
        carrier.style.borderColor = '#CB11AB';
    } else if (div === pickpoint.id) {
        if (carrier.hasAttribute('style', 'border-color:#CB11AB')) {
            carrier.style.borderColor = 'rgba(203, 17, 171, 0.15)';
        }
        pickpoint.style.borderColor = '#CB11AB';
    }
}

function chooseAddress() {
    let cart = document.getElementById('total-address');
    let div = document.getElementById('address-form');

    let radio_checked = '';
    let chosen_arr = Array.from(document.getElementsByName('address')).map(
        (a) => {
            if(a.checked){
                radio_checked += a.id;
            }
        });

    let id = radio_checked.slice(0,1);
    let label_id = `label-${id}`;
    cart.innerText = document.getElementById(label_id).textContent;
    div.innerText = document.getElementById(label_id).textContent;
    closeModalShipping();
}

function chooseCard() {
    let cart_num = document.getElementById('total-card-num');
    let cart_img = document.getElementById('total-card-img');

    let num = document.getElementById('card-form-num');
    let img = document.getElementById('card-form-img');

    let radio_checked = '';
    let chosen_arr = Array.from(document.getElementsByName('card')).map(
        (a) => {
            if(a.checked){
                radio_checked += a.id;
            }
        });

        let id = radio_checked.slice(0,1);

        let img_id = `card-img-${id}`;
        let num_id = `card-num-${id}`;

        cart_num.innerText = document.getElementById(num_id).textContent;
        cart_img.src = document.getElementById(img_id).src;

        num.innerText = document.getElementById(num_id).textContent;
        img.src = document.getElementById(img_id).src;
        closeModalPayment();
}

let input_pay = document.querySelector('#payment-form');

input_pay.addEventListener('click', function(){
    let input = document.getElementById('payment-form');

    let price = document.getElementById('total__price').textContent;

    if(input.checked) {
        document.getElementById('total-btn-txt').innerText = `Оплатить ${price} сом`;
    } else {
        document.getElementById('total-btn-txt').innerText = `Заказать`;
    }
});
