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