let carts = document.querySelectorAll('.add-cart');

let products =[
    {
    name:"Surgical gown",
    tag:"surgical",
    price:30,
    inCart: 0
    },
    {
    name:"Two piece uniform",
    tag:"uniform",
    price:40,
    inCart: 0
    },
    {
    name:"Patient gown",
    tag:"surgical",
    price:15,
    inCart: 0
    } 
];

for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if ( productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;

    }
}


function cartNumbers(product) {
     let productNumbers = localStorage.getItem('cartNumbers');
     productNumbers = parseInt(productNumbers);

     if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

     } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

     }
     setItems(product);
  
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
          cartItems ={
              ...cartItems, 
              [product.tag]: product
          }
        }
        cartItems[product.tag].inCart+= 1;
    }else{
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("The product proce is", product.price)
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        product.price
    }else{
        localStorage.setItem("totalCost", product.price);
    }

}


onLoadCartNumbers();