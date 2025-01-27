let hasName = false;

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str))||
           (str === "-") // ...and ensure strings of whitespace fail
}

try{
    let name = new URLSearchParams(location.search).get("name")
    
    
    products.forEach(element => {
        let model =""
        if(element.name.includes("Wallet")){
            model = "W"
        }
        if(element.name.includes("PEN")){
            model = "P"
        }
        
        for (let i = 0; i < element.name.length; i++) {
            let num = element.name[i];
            
            if(isNumeric(num)){
                console.log(num);
                model += (num)
            }
        }
        if(element.name.includes("L")){
            model += "L"
        }
        else if(element.name.includes("G")){
            model += "G"
        }
        if(element.name.includes("ZIRCON")){
            model += "Z"
        }
        console.log(model);
        if(model == name){
            product = element
            hasName = true;

        }
    });
}catch(err){
    //location.pathname = ''
}

try{
    if(!hasName){
        product = JSON.parse(localStorage.getItem('product'));
    }
}
catch(err){
    //location.pathname = ''
}



let images = document.querySelector('#images')
images.textContent = null
let i = 0;
for (let j = 0; j < product.images.length; j++) {
    const element = product.images[j];
    let image = document.createElement('img')
    image.src = 'imgs/' + element
    image.id = 'images'
    image.style.display = 'none'
    images.appendChild(image);
}

images.childNodes[i % images.childNodes.length].style.display = 'block'

let goRight = document.querySelector('.goRight')
let goLeft = document.querySelector('.goLeft')
goRight.addEventListener('click', _=>{
    images.childNodes.forEach(e =>{
        e.style.display = 'none'
    })
    images.childNodes[++i % images.childNodes.length].style.display = 'block'
})
goLeft.addEventListener('click', _=>{
    if(i <= 0){
        return;
    }
    images.childNodes.forEach(e =>{
        e.style.display = 'none'
    })
    images.childNodes[--i % images.childNodes.length].style.display = 'block'
})

console.log(images.style.translate);

let nameD = document.querySelector('#name')
nameD.innerText = product.name;

let priceD = document.querySelector('#price')
priceD.innerText = `${Math.ceil((product.price * (5/3)) / 3.65)} $`

let linkD = document.querySelector('#whatsapp')
linkD.href = `https://wa.me/+971557555987?text=${product.name}`

let detailsD = document.querySelector('#productDetails')
detailsD.innerHTML = product.discrption