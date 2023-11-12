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
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}
