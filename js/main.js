
// handle increment & decrement event
function handleQuintity(product, isIncrease, prevPrice, singlePrice){
    // update input value
    const products = document.getElementById(product +'-input');
    let convertProducts = parseInt(products.value);
    if(isIncrease === true){
        convertProducts = convertProducts + 1;
    }else if(convertProducts > 0){
        convertProducts = convertProducts - 1;
    }
    products.value = convertProducts;

    // update product price
    const productPrice = document.getElementById(prevPrice +'-price');
    let convertPrice = parseInt(productPrice.innerText);
    const updatePrice = convertProducts * singlePrice;
    productPrice.innerText = updatePrice;

    calculateTotal();
}

function getInput(productName){
    const productInput = document.getElementById(productName +'-input');
    const convertProductInput = parseInt(productInput.value);
    return convertProductInput;
}

function calculateTotal(){
    const phonePrice = getInput('phone') * 1000;
    const casePrice = getInput('case') * 50;
    const subTotal = phonePrice + casePrice;
    const tax = subTotal / 5;
    const total = subTotal + tax;
    console.log(total);

    // update total UI
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}


// incrememt & decrement button
const phonePlus = document.getElementById("phone-plus");
const phoneMinus = document.getElementById("phone-minus");
const casePlus = document.getElementById("case-plus");
const caseMinus = document.getElementById("case-minus");

phonePlus.addEventListener("click", function(){
    handleQuintity('phone',true, 'phone', 1000);
    
})

phoneMinus.addEventListener("click", function(){
    handleQuintity('phone', false, 'phone', 1000);
    
})

casePlus.addEventListener("click", function(){
    handleQuintity('case', true, 'case', 50);
    
})

caseMinus.addEventListener("click", function(){
    handleQuintity('case', false, 'case', 50);

})