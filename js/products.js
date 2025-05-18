console.log(products);

let productsD = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {
    
    let element = document.createElement('div');
    
    let x = getDisplay(products[i]);
    element.innerHTML = x;
    
    productsD.appendChild(element)
}
let nameD = document.querySelector('#name')
nameD.onkeyup = _ => {
    productsD.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        if(!products[i].name.includes(nameD.value)){
            continue
        }
        if(typeD.value != -1 && products[i].type != typeD.value){
            continue
        }
        let element = document.createElement('div');
        let x = getDisplay(products[i]);
        element.innerHTML = x;
        productsD.appendChild(element)
    }
}

let typeD = document.querySelector('#type')
typeD.onchange = _ => {
    productsD.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        if(!products[i].name.includes(nameD.value)){
            continue
        }
        if(typeD.value != -1 && products[i].type != typeD.value){
            continue
        }
        let element = document.createElement('div');
        let x = getDisplay(products[i]);
        element.innerHTML = x;
        productsD.appendChild(element)
    }
}
