function idToNumber(id){
    const idInnerText = document.getElementById(id).innerText;
    const idNumber = parseFloat(idInnerText);
    return idNumber;
  
}
function fieldToText(idName) {
    const idField = document.getElementById(idName);
    const valueText = idField.value;
    return valueText;
}

function addToCart(target) {
    const productName = target.childNodes[3].childNodes[3].innerText;
    const productPriceValue = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const productPrice = parseFloat(productPriceValue);

    const newCartItem = document.createElement('li');
    newCartItem.innerText = productName; 
    const cart = document.getElementById('cart-list');
    cart.appendChild(newCartItem);
    
    const totalPrice = idToNumber('total-price');
    const newTotalPrice = totalPrice + productPrice;

    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
    document.getElementById('grand-total-price').innerText = newTotalPrice.toFixed(2);



     //btn show condition
    if(newTotalPrice>= 200){
        const btnApply = document.getElementById('btn-apply');
        btnApply.removeAttribute('disabled');

    }
    if(newTotalPrice !== 0 ){
        
    document.getElementById('btn-buy').disabled = false;
    }
}

document.getElementById('btn-apply').addEventListener('click',function(){
    const fild = fieldToText('Coupon-field');
    if(fild === "SELL200"){
    const totalPrice = idToNumber('total-price');
    const discount =  totalPrice * 0.2 ; 
    document.getElementById('discount').innerText = discount.toFixed(2);
    const payPrice  =  totalPrice - discount ; 
    document.getElementById('grand-total-price').innerText = payPrice.toFixed(2);
    document.getElementById('warnig').innerText = ' ' ;
    document.getElementById('success').innerText = 'Coupon code applied successfully' ;
    document.getElementById('Coupon-field').value = '';
    }
    else{
        document.getElementById('warnig').innerText = 'Invalid Coupon code' ;
        document.getElementById('success').innerText = ' ' ;
        document.getElementById('Coupon-field').value = '';
    }
})

function resetAllValue() {
     
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('grand-total-price').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';

     
    document.getElementById('success').innerText = '';
    document.getElementById('warnig').innerText = '';
    document.getElementById('Coupon-field').value = '';

     
    const btnApply = document.getElementById('btn-apply');
    btnApply.setAttribute('disabled', 'true');

    const btnBuy = document.getElementById('btn-buy');
    btnBuy.disabled = true;

   
    const cartList = document.getElementById('cart-list');
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
}
