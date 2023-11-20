function mouseOver(id) {
    let divId = 'company__info-' + id;
    let divInfo = document.getElementById(divId);
    divInfo.style.display = 'flex';
}

function mouseOut(id) {
    let divId = 'company__info-' + id;
    let divInfo = document.getElementById(divId);
    divInfo.style.display = 'none';
}

function mouseOverPrice() {
    let div = document.getElementById('total-shipping-underline-info');
    div.style.display = 'flex';
}

function mouseOutPrice() {
    let div = document.getElementById('total-shipping-underline-info');
    div.style.display = 'none';
}