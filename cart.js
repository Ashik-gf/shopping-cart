const addProducts =()=>{
    const productsValue = document.getElementById("produsct-name")
    const QuantityValue = document.getElementById("produsct-quantity")
    const product = productsValue.value;
    const quantity = QuantityValue.value;
    productsValue.value ='';
    QuantityValue.value='';
    console.log(product, quantity)
    displayCrat(product, quantity)
    saveProductToLcalStore(product, quantity)
}
const displayCrat = (product, quantity)=>{
    const container = document.getElementById("products-container")
    const containerBox = document.createElement('li')
    containerBox.innerHTML=`
    <li class="text-black bg-gray-300">${product}: ${quantity}</li>
    `
    container.appendChild(containerBox);
}
const getStoredShopingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLcalStore =(product,quantity)=>{
    const cart = getStoredShopingCart();
    cart[product]= quantity;
    const cartStringyfied = JSON.stringify(cart);
    console.log(cartStringyfied);
    localStorage.setItem('cart', cartStringyfied)
}
const displayProductsFromLocalStore = () =>{
    const saveCart = getStoredShopingCart();
    console.log(saveCart)
    for(const product in saveCart){
        const quantity = saveCart[product]
        displayCrat(product, quantity)
        console.log(product,quantity)
    }
}
displayProductsFromLocalStore()