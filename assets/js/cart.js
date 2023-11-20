let items = `[
    {
        "img": "/assets/img/item1.jpg",
        "disable_img": "/assets/img/item1-disable.jpg",
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
        "img": "/assets/img/item2.jpg",
        "disable_img": "/assets/img/item2-disable.jpg",
        "name": "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        "color": "прозрачный",
        "company": "OOO Мегапрофстиль",
        "fullprice": 11500,
        "discountprice": 10500,
        "quantity": 200,
        "instock": 1000,
        "id": 2
    },
    {
        "img": "/assets/img/item3.jpg",
        "disable_img": "/assets/img/item3-disable.jpg",
        "name": "Карандаши цветные Faber-Castell \\\"Замок\\\", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell",
        "company": "OOO Вайлдберриз",
        "fullprice": 475,
        "discountprice": 247,
        "quantity": 2,
        "instock": 4,
        "id": 3
    }
]`;

document.addEventListener("DOMContentLoaded", function (e) {
    showItems(items);
    showNotInStock(items);
    shippingItems(items);
    anotherShippingItems(items);
});

function showItems(data) {
    let pieces = JSON.parse(data);
    let content = "";
    for (let piece of pieces) {
        content += `<div class="cart__hr" id="cart__hr__mobile"></div>
        <div class="item" id="item-${piece.id}" onmouseover="showBtns(${piece.id})" onmouseout="hideBtns(${piece.id})">
            <div class="item__first">
                <div class="item__img__container">
                    <input type="checkbox" name="cart-item" class="item__input" id="checkbox-${piece.id}" onclick="toggleItem(this)">
                    <img id="item-img-incart" class="item__img" src="${piece.img}" alt="item">
                    ${piece.size ? `<span class="notinstock__size__mobile">${piece.size}</span>` : ''}
                </div>
                <div class="item__information">
                <div class="item__price__mobile">
                    <div class="${piece.discountprice > 10000 ? 'item__discount__modified' : 'item__discount'}">
                        <span class="${piece.discountprice > 10000 ? 'item__discount__num__modified' : 'item__discount__num'} item-discount" id="discount-mobile-${piece.id}">
                            ${
                                piece.discountprice > 10000 ? 
                                (piece.discountprice * piece.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&hairsp;') 
                                : 
                                piece.discountprice * piece.quantity
                            }
                        </span>
                        <span class="item__discount__currency">&nbsp;сом</span>
                    </div>
                    <div class="item__fullprice">
                        <span class="item__fullprice__num" id="fullprice-mobile-${piece.id}">
                            ${
                                piece.fullprice > 10000 ? 
                                (piece.fullprice * +piece.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;") 
                                : 
                                piece.fullprice * piece.quantity
                            }
                        </span>
                        <span class="item__fullprice__currency">&nbsp;сом</span>
                        <div class="item__fullprice__overline"></div>
                    </div>
                </div>
                    <div class="item__name" id="cart-name-${piece.id}">${piece.name}</div>
                    ${
                        piece.size || piece.color ?
                `<div class="item__details__container">
                        ${
                            piece.color ? 
                            `<span class="item__details">Цвет: ${piece.color}</span>` 
                            : 
                            ''
                        }
                        ${
                            piece.size ? 
                            `<span class="item__details item__size">Размер: ${piece.size}</span>` 
                            : 
                            ''
                        }
                    </div>`
                :
                ''
            }
                    <div class="item__company">
                        <div class="item__company__name">Коледино WB</div>
                        <div class="item__company__container">
                            <span class="item__company__name">${piece.company}</span>
                            <img onmouseover="mouseOver(${piece.id})" onmouseout="mouseOut(${piece.id})" class="item__company__icon" src='/assets/img/warning.svg'/>
                            <div id="company__info-${piece.id}" class="company__info">
                                <div class="company__name">${piece.company}</div>
                                <div class="company__txt">ОГРН: 5167746237148</div>
                                <div class="company__txt">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item__second">
                <div class="item__edit">
                    <div class="item__edit__btns">
                        <button type="button" class="btn item__edit__less" id="less-${piece.id}" onclick="deleteItem(this)">
                            <div class="item__edit__txt" id="item-less">−</div>
                        </button>
                        <input type="number" class="item__edit__quantity" id="quantity-${piece.id}" value="${piece.quantity}"/>
                        <button type="button" class="btn item__edit__more" id="add-${piece.id}" onclick="addItem(this)">
                            <div class="item__edit__txt" id="item-more">+</div>
                        </button>
                    </div>
                        <div class="item__left" id="left-${piece.id}">${piece.instock < 2 ? `Осталось ${piece.instock - piece.quantity} шт.`: ''}</div>
                    <div class="btn__item" id="btns-${piece.id}">
                        <button class="btn btn__like" onclick="likeItem(${piece.id})">
                            <img id="like-${piece.id}" class="btn__like__img" src="/assets/img/like.svg" />
                        </button>
                        <button class="btn btn__delete" onclick="deleteItemCart(${piece.id})">
                            <img class="btn__delete__img" src="/assets/img/delete.svg" />
                        </button>
                    </div>
                </div>
                <div class="item__price__container">
                    <div class="${piece.discountprice > 10000 ? 'item__discount__modified' : 'item__discount'}" >
                        <span class="${piece.discountprice > 10000 ? 'item__discount__num__modified' : 'item__discount__num'} item-discount" id="discount-${piece.id}">
                            ${
                                piece.discountprice > 10000 ? 
                                (piece.discountprice * piece.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&hairsp;') 
                                : 
                                piece.discountprice * piece.quantity
                            }
                        </span>
                        <span class="item__discount__currency">&nbsp;сом</span>
                    </div>
                    <div class="item__fullprice">
                        <span class="item__fullprice__num" id="fullprice-${piece.id}">
                            ${
                                piece.fullprice > 10000 ? 
                                (piece.fullprice * +piece.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;") 
                                : 
                                piece.fullprice * piece.quantity
                            }
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

function showNotInStock(data) {
    let pieces = JSON.parse(data);
    let content = "";
    for (let piece of pieces) {
        content += `<div class="cart__hr" id="cart__hr__mobile"></div>
        <div class="notinstock__item" onmouseover="showNotInstockBtns(${piece.id})" onmouseout="hideNotInstockBtns(${piece.id})">
            <div class="notinstock__item__container">
                <div class="notinstock__img__container">
                    <img id="item-img-incart" class="item__img" src="${piece.disable_img}" />
                    ${piece.size? `<span class="notinstock__size__mobile">${piece.size}</span>` : ''}
                    ${piece.id === 3 ? `<span class="item__mobile__sizes">56/54/52...</span>` : ''}
                </div>
                <div class="notinstock__info">
                    <div class="notinstock__name">${piece.name}</div>
                    ${piece.color || piece.size ? `<div class="notinstock__details">
                        ${piece.color ? `<span class="notinstock__details__txt">Цвет: ${piece.color}</span>` : ''}
                        ${piece.size ? `<span class="notinstock__details__txt item__size">Размер: ${piece.size}</span>` : ''}
                    </div>`
                : ''}
                </div>
            </div>
            <div class="notinstock__item__btns__container"> 
                <div class="notinstock__btns">
                    <div class="btn__item" id="notinstock-btns-${piece.id}">
                        <button class="btn btn__like" onclick="likeItem(${piece.id})">
                            <img id="like-${piece.id}" class="btn__like__img" src="/assets/img/like.svg" />
                        </button>
                        <button class="btn btn__delete" onclick="deleteItemCart(${piece.id})">
                            <img class="btn__delete__img" src="/assets/img/delete.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("notinstock").innerHTML = content;
}

function shippingItems(data) {
    let pieces = JSON.parse(data);
    let content = "";
    for (let piece of pieces) {
        content += `<div class="shipping__item__container">
            <img class="shipping__item__img" src="${piece.img}" />
            ${
                piece.quantity > 0 ? 
                `<div class="shipping__item__txt" id="shipping-quantity-${piece.id}">
                    ${piece.quantity >= 184 ? 184 : piece.quantity}
                </div>`
                : 
                ``
            }
        </div>
        `
    }
    document.getElementById('shipping-top-items').innerHTML = content;
}

function anotherShippingItems(data) {
    let pieces = JSON.parse(data);
    let items = [pieces[1]];
    let content = "";
    for(let item of items) {
        content += `<div class="shipping__item__container">
        <img class="shipping__item__img" src="${item.img}" />
        ${
            item.quantity > 0? 
            `<div class="shipping__item__txt" id="shipping-quantity-another-${item.id}">16</div>`
            : 
            ``
        }
    </div>
    `
    }
    document.getElementById('shipping-bottom-items').innerHTML = content;
}

function toggleItem(e) {
    let id = e.id.replace(/\D/g,'');

    let discount = Number(document.getElementById(`discount-${id}`).textContent.replace(/\D/g,''));
    let fullprice = Number(document.getElementById(`fullprice-${id}`).textContent.replace(/\D/g,''));
    let quantity = Number(document.getElementById(`quantity-${id}`).value.replace(/\D/g,''));

    let cart_total = document.getElementById('total__price');
    let cart_fullprice = document.getElementById('total__fullprice');
    let cart_discount = document.getElementById('total__discount');
    let cart_quantity = document.getElementById('cart-quantity');
    let cart__mobile = document.getElementById('cart-mobile-quantity');
    let btn__price = document.getElementById('cart-select-price');
    let btn__quantity = document.getElementById('cart__selectAll__quantity');
    let total__quantity = document.getElementById('total__items');

    let prev_total = Number(cart_total.textContent.replace(/\D/g,''));
    let prev_fullprice = Number(cart_fullprice.textContent.replace(/\D/g,''));
    let prev_discount = Number(cart_discount.textContent.replace(/\D/g,''));
    let prev_quantity = Number(cart_quantity.textContent);
    let prev_quantity_mobile = Number(cart__mobile.textContent);

    if(e.checked){
        if(cart_total > 10000 || cart_fullprice > 10000 || discount > 10000 || fullprice > 10000 || prev_total > 10000 ) {
            let sumtotal = prev_total + discount;
            cart_total.innerHTML = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            btn__price.innerHTML = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            let sumfullprice = prev_fullprice + fullprice;
            cart_fullprice.innerHTML = sumfullprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            let diff = discount - fullprice;
            cart_quantity.innerText = prev_quantity + quantity;
            btn__quantity.innerText = prev_quantity + quantity;
            total__quantity.innerText = prev_quantity + quantity;
            cart__mobile.innerHTML = (prev_quantity_mobile + quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            if(prev_discount === 0) {
                let sumdiscount = prev_discount + diff;
                cart_discount.innerHTML = sumdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            } else {
                let sumdiscount = -(prev_discount - diff);
                cart_discount.innerHTML = sumdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            }
        } else {
            cart_total.innerText = prev_total + discount;
            cart_fullprice.innerText = prev_fullprice + fullprice;
            cart_quantity.innerText = prev_quantity + quantity;
            cart__mobile.innerText = prev_quantity_mobile + quantity;
            btn__price.innerText = prev_total + discount;
            btn__quantity.innerText = prev_quantity + quantity;
            total__quantity.innerText = prev_quantity + quantity;
            let diff = discount - fullprice;
            if(prev_discount === 0) {
                cart_discount.innerText = prev_discount + diff;
            } else {
                cart_discount.innerText = -(prev_discount - diff);
            }
        }
    } else {
        if(cart_total > 10000 || cart_fullprice > 10000 || discount > 10000 || fullprice > 10000 || prev_total > 10000 ) {
            let sumtotal = prev_total - discount;
            cart_total.innerHTML = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            let sumfullprice = prev_fullprice - fullprice;
            cart_fullprice.innerHTML = sumfullprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            let diff = discount - fullprice;
            let sumdiscount = -(prev_discount + diff);
            cart_discount.innerHTML = sumdiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            btn__price.innerHTML = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            btn__quantity.innerHTML = (prev_quantity - quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            total__quantity.innerHTML = (prev_quantity - quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_quantity.innerHTML = (prev_quantity - quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart__mobile.innerText = (prev_quantity_mobile - quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
        } else {
            cart_total.innerText = prev_total - discount;
            cart_fullprice.innerText = prev_fullprice - fullprice;
            let diff = discount - fullprice;
            cart_discount.innerText = -(prev_discount + diff);
            btn__price.innerText = prev_total - discount;
            btn__quantity.innerText = prev_quantity - quantity;
            total__quantity.innerText = prev_quantity - quantity;
            cart_quantity.innerText = prev_quantity - quantity;
            cart__mobile.innerText = prev_quantity_mobile - quantity;
        }
    }
}

function toggleSelectBtn() {
    let selectall = document.getElementsByName('selectAll');
    let checkboxes = document.getElementsByName('cart-item');
    let cart_total = document.getElementById('total__price');
    let cart_fullprice = document.getElementById('total__fullprice');
    let cart_discount = document.getElementById('total__discount');
    let cart_quantity = document.getElementById('cart-quantity');
    let cart__mobile = document.getElementById('cart-mobile-quantity');
    let total__quantity = document.getElementById('total__items');
    let btn__quantity = document.getElementById('cart__selectAll__quantity');
    let btn__price = document.getElementById('cart-select-price');

    // total price with discounts
    let allnum = [];

    document.querySelectorAll('.item-discount').forEach((a) => {
        return allnum.push(a.textContent.replace(/\D/g,''));
    });

    let num = [];

    allnum.forEach(element => { 
        if (!num.includes(element)) { 
            num.push(element); 
        } 
    }); 

    // total price without discounts
    let allprices = [];

    document.querySelectorAll('.item__fullprice__num').forEach((a) => {
        return allprices.push(a.textContent.replace(/\D/g,''));
    });

    let fullprices = [];

    allprices.forEach(element => { 
        if (!fullprices.includes(element)) { 
            fullprices.push(element); 
        } 
    }); 

    let prices_total = num.map((a) => {
        return Number(a);
    }).reduce((a,b) => a+b,0);
    
    let prices_fullprices = fullprices.map((a) => {
        return Number(a);
    }).reduce((a,b) => a+b, 0);

    // quantity 

    let allquantity = [];

    document.querySelectorAll('.item__edit__quantity').forEach((a) => {
        return allquantity.push(a.value.replace(/\D/g,''));
    });

    let quantity = allquantity.map((d) => {
        return Number(d);
    }).reduce((a,b) => a+b,0);

    for(let i=0; i<checkboxes.length; i++) {
        if(selectall[0].checked === true) {
            checkboxes[i].checked=true;

            if(prices_total > 10000 || prices_fullprices > 10000) {
                cart_total.innerHTML = prices_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                cart_fullprice.innerHTML = prices_fullprices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                cart_discount.innerHTML = (prices_total - prices_fullprices).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                cart_quantity.innerText = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                cart__mobile.innerHTML = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                total__quantity.innerHTML = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                btn__price.innerHTML = prices_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
                btn__quantity.innerHTML = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
            } else {
                cart_total.innerText = prices_total;
                cart_fullprice.innerText = prices_fullprices;
                cart_discount.innerText = prices_total - prices_fullprices;
                cart_quantity.innerText = quantity;
                cart__mobile.innerHTML = quantity;
                total__quantity.innerText = quantity;
                btn__price.innerText = prices_total;
                btn__quantity.innerText = quantity;
            }
        } else {
            checkboxes[i].checked=false;
            cart_total.innerText = 0;
            cart_fullprice.innerText = 0;
            cart_discount.innerText = 0;
            cart_quantity.innerText = 0;
            cart__mobile.innerHTML = 0;
            total__quantity.innerText = 0;
            btn__price.innerText = 0;
            btn__quantity.innerText = 0;
        }
    }
}

function sumPrice() {
    let cart_total = document.getElementById('total__price');
    let cart_fullprice = document.getElementById('total__fullprice');
    let cart_discount = document.getElementById('total__discount');
    let cart_quantity_total = document.getElementById('total__items');
    let cart_quantity = document.getElementById('cart-quantity');
    let cart__mobile = document.getElementById('cart-mobile-quantity');
    let btn__quantity = document.getElementById('cart__selectAll__quantity');
    let btn__price = document.getElementById('cart-select-price');

    // checking checkboxes 

    let checkboxes = Array.from(document.getElementsByName('cart-item'));

    let checked_id = [];
    
    for(let i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            checked_id.push(checkboxes[i].id);
        }
    }

    // fullprice

    let num = [];

    let num_mobile = [];

    // price with discount

    let prices = [];

    let prices_mobile = [];

    // show quantity in cart 

    let quantity = [];

    for(let i=0; i<checked_id.length; i++){
        let id = checked_id[i].slice(-1);
        
        num.push(Number(document.getElementById(`fullprice-${id}`).textContent.replace(/\D/g,'')));
        num_mobile.push(Number(document.getElementById(`fullprice-mobile-${id}`).textContent.replace(/\D/g,'')));

        prices.push(Number(document.getElementById(`discount-${id}`).textContent.replace(/\D/g,'')));
        prices_mobile.push(Number(document.getElementById(`discount-mobile-${id}`).textContent.replace(/\D/g,'')));

        quantity.push(Number(document.getElementById(`quantity-${id}`).value.replace(/\D/g,'')));
    }
    
        // with discount
        let prices_total = prices.map((a) => {
            return Number(a);
        }).reduce((a,b) => a+b,0);

        let prices_total_mobile = prices_mobile.map((a) => {
            return Number(a);
        }).reduce((a,b) => a+b,0);

        // fullprice
        let prices_fullprices = num.map((a) => {
            return Number(a);
        }).reduce((a,b) => a+b, 0);

        let prices_fullprices_mobile = num_mobile.map((a) => {
            return Number(a);
        }).reduce((a,b) => a+b, 0);

        // quantity

        let quantity_ = quantity.map((a) => {
            return Number(a);
        }).reduce((a,b) => a+b, 0);

        if(prices_total > 10000 || prices_fullprices > 10000) {
            cart_total.innerHTML = prices_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_total.innerHTML = prices_total_mobile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_fullprice.innerHTML = prices_fullprices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_fullprice.innerHTML = prices_fullprices_mobile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_discount.innerHTML = (prices_total - prices_fullprices).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            cart_quantity.innerText = quantity_;
            cart_quantity_total.innerText = quantity_;
            cart__mobile.innerText = quantity_;
            btn__quantity.innerText = quantity_;
            btn__price.innerHTML = prices_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
        } else {
            cart_total.innerText = prices_total;
            cart_fullprice.innerText = prices_fullprices;
            cart_discount.innerText = prices_total - prices_fullprices;
            cart_quantity.innerText = quantity_;
            cart_quantity_total.innerText = quantity_;
            cart__mobile.innerText = quantity_;
            btn__quantity.innerText = quantity_;
            btn__price.innerHTML = prices_total;
        }
}

function deleteItem(e) {
    let id = e.id.slice(5);
    let btn_less = document.getElementById(`less-${id}`);
    let btn_add = document.getElementById(`add-${id}`);
    let quantity = document.querySelector(`#quantity-${id}`);
    let quantity_num = Number(quantity.value);
    let checkbox = document.getElementById(`checkbox-${id}`);
    let shipping_quantity = document.getElementById(`shipping-quantity-${id}`);
    let another_shipping_quantity = document.getElementById(`shipping-quantity-another-${id}`);

    let num;  
    let price;
    let price_discount;

    let pieces = JSON.parse(items);

    for(let i=0; i<pieces.length; i++){
        if(pieces[i].id === +id) {
            num = +pieces[i].instock;
            price = +pieces[i].fullprice;
            price_discount = +pieces[i].discountprice;
        }
    }

    if(btn_add.disabled === true) {
        btn_add.disabled = false;
    }

    if(quantity_num > 1){
        let result = quantity_num - 1;
        quantity.value = result;

        if(Number(quantity.value) < 184) {
            shipping_quantity.innerText = result;
        } else {
            another_shipping_quantity.textContent = result - 184;
        }

        showLeftItems(id, num, result);
        calcCart(price, price_discount, result, id);

        if(checkbox.checked) {
            sumPrice();
        }

    } else if(quantity_num === 1) {
        let result = quantity_num - 1;
        quantity.value = result;
        
        if(Number(quantity.value) < 184) {
            shipping_quantity.textContent = result;
        } else {
            another_shipping_quantity.textContent = result - 184;
        }

        showLeftItems(id, num, result);
        calcCart(price, price_discount, result, id);

        
        if(checkbox.checked) {
            sumPrice();
        }

        btn_less.disabled = true;
    }
}

function addItem(e) {
    let id = e.id.slice(4);
    let btn_less = document.getElementById(`less-${id}`);
    let btn_add = document.getElementById(`add-${id}`);
    let quantity = document.querySelector(`#quantity-${id}`);
    let quantity_num = Number(quantity.value);
    let checkbox = document.getElementById(`checkbox-${id}`);
    let shipping_quantity = document.getElementById(`shipping-quantity-${id}`);
    let another_shipping_quantity = document.getElementById(`shipping-quantity-another-${id}`);

    let num;
    let price;
    let price_discount;

    let pieces = JSON.parse(items);

    for(let i=0; i<pieces.length; i++){
        if(pieces[i].id === +id) {
            num = +pieces[i].instock;
            price = +pieces[i].fullprice;
            price_discount = +pieces[i].discountprice;
        }
    }

    if(btn_less.disabled === true) {
        btn_less.disabled = false;
    }

    if(quantity_num < num && num - quantity_num != 1) {
        let result = quantity_num + 1;
        quantity.value = result;
        
        if(Number(quantity.value) < 184) {
            shipping_quantity.textContent = result;
        } else {
            another_shipping_quantity.textContent = result - 184;
        }

        showLeftItems(id, num, result);
        calcCart(price, price_discount, result, id);
    
        if(checkbox.checked) {
            sumPrice();
        }
    } else if (num - quantity_num === 1) {
        let result = quantity_num + 1;
        quantity.value = result;

        shipping_quantity.textContent = result;

        showLeftItems(id, num, result);
        calcCart(price, price_discount, result, id);

        if(checkbox.checked) {
            sumPrice();
        }

        btn_add.disabled = true;
    }
}

function showLeftItems(id, num, result){
    let left_cont = document.getElementById(`left-${id}`);
    let diff = num - result;

    if(left_cont) {
        left_cont.innerText = `Осталось ${diff} шт.`;
    }
}

function calcCart(price, price_discount, result, id) {
    let discount = document.getElementById(`discount-${id}`);
    let fullprice = document.getElementById(`fullprice-${id}`);

    let discount_mobile = document.getElementById(`discount-mobile-${id}`);
    let fullprice_mobile = document.getElementById(`fullprice-mobile-${id}`);
    
    let price_modified = Math.floor(Number(price) * result);
    let price_discount_modified = Math.floor(Number(price_discount) * result);

    if(price_modified > 10000 || price_discount_modified > 10000) {
        if(window.innerWidth < 1024) {
            discount.innerHTML = price_discount_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&hairsp;");
            discount_mobile.innerHTML = price_discount_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&hairsp;");
            fullprice.innerHTML = price_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&hairsp;");
            fullprice_mobile.innerHTML = price_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&hairsp;");
        } else {
            discount.innerHTML = price_discount_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            discount_mobile.innerHTML = price_discount_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            fullprice.innerHTML = price_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
            fullprice_mobile.innerHTML = price_modified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
        }
    } else {
        discount.innerText = price_discount_modified;
        discount_mobile.innerText = price_discount_modified;
        fullprice.innerText = price_modified;
        fullprice_mobile.innerText = price_modified;
    }
}

function deleteItemCart(id) {
    let pieces = JSON.parse(items).filter((a) => a.id !== id);
    let json = JSON.stringify(pieces);
    showItems(json);
    showNotInStock(json);
}