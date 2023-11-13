let items = `[
    {
        "img": "/assets/img/item1.png",
        "name": "Футболка UZcotton мужская",
        "color": "белый",
        "size": 56,
        "company": "OOO Вайлдберриз",
        "fullprice": 1051,
        "discountprice": 522,
        "quantity": 1,
        "instock": 3,
        "id": 1
    },
    {
        "img": "/assets/img/item2.png",
        "name": "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        "color": "прозрачный",
        "company": "OOO Мегапрофстиль",
        "fullprice": 2300047,
        "discountprice": 2100047,
        "quantity": 200,
        "id": 2
    },
    {
        "img": "/assets/img/item3.png",
        "name": "Карандаши цветные Faber-Castell \\\"Замок\\\", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell",
        "company": "OOO Вайлдберриз",
        "fullprice": 950,
        "discountprice": 494,
        "quantity": 2,
        "instock": 4,
        "id": 3
    }
]`;

document.addEventListener("DOMContentLoaded", function (e) {
    showItems();
});

function showItems() {
    let pieces = JSON.parse(items);
    console.log(pieces);
    let content = "";
    for (let piece of pieces) {
        content += `<div class="item" id="item-${piece.id}">
            <div class="item__first">
                <div class="item__img__container">
                    <input type="checkbox" name="" id="checkbox-item">
                    <img class="item__img" src="${piece.img}" alt="item">
                </div>
                <div class="item__information">
                    <div class="item__name">${piece.name}</div>
                    ${piece.size || piece.color ?
                `<div class="item__details__container">
                        ${piece.color ? `<span class="item__details">Цвет: ${piece.color}</span>` : ''}
                        ${piece.size ? `<span class="item__details">Размер: ${piece.size}</span>` : ''}
                    </div>`
                :
                ''
            }
                    <div class="item__company">
                        <div class="item__company__name">Коледино WB</div>
                        <div class="item__company__container">
                            <span class="item__company__name">${piece.company}</span>
                            <img onmouseover="mouseOver(${piece.id})" onmouseout="mouseOut(${piece.id})" class="item__company__icon" src='/assets/img/warning.svg'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="company__info-${piece.id}" class="company__info">
                <div class="company__name">${piece.company}</div>
                <div class="company__txt">ОГРН: 5167746237148</div>
                <div class="company__txt">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</div>
            </div>
            <div class="item__second">
                <div class="item__edit">
                    <div class="item__edit__btns">
                        <div class="item__edit__less">
                            <div class="item__edit__txt" id="item-less">−</div>
                        </div>
                        <div class="item__edit__quantity" id="quantity-${piece.id}">${piece.quantity}</div>
                        <div class="item__edit__more">
                            <div class="item__edit__txt" id="item-more">+</div>
                        </div>
                    </div>
                    ${piece.instock ? `<div class="item__left" id="left=${piece.id}">Осталось ${piece.instock - piece.quantity} шт.</div>` : ''}
                    <div class="btn__item">
                        <button class="btn btn__like" onclick="likeItem(${piece.id})">
                            <img id="like-${piece.id}" class="btn__like__img" src="/assets/img/like.svg" />
                        </button>
                        <button class="btn btn__delete">
                            <img class="btn__delete__img" src="/assets/img/delete.svg" />
                        </button>
                    </div>
                </div>
                <div class="item__price__container">
                    <div class="${piece.discountprice > 10000 ? 'item__discount__modified' : 'item__discount'}" >
                        <span class="${piece.discountprice > 10000 ? 'item__discount__num__modified' : 'item__discount__num'}" id="discount-${piece.id}">
                            ${piece.discountprice > 10000 ? piece.discountprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&hairsp;') : piece.discountprice}
                        </span>
                        <span class="item__discount__currency">&nbsp;сом</span>
                    </div>
                    <div class="item__fullprice">
                        <span class="item__fullprice__num" id="fullprice-${piece.id}">
                            ${piece.fullprice > 10000 ? piece.fullprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;") : piece.fullprice}
                        </span>
                        <span class="item__fullprice__currency">&nbsp;сом</span>
                        <div class="item__fullprice__overline"></div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("cart__main").innerHTML = content;
}

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