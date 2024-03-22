const getStoredValue = ()=>{
    const storedStringParseValue = localStorage.getItem("cart");
    if(storedStringParseValue){
        return JSON.parse(storedStringParseValue);
    }
    return [];
}

const setValueInLocalStorage = (cart) => {
const valueStringified = JSON.stringify(cart);
localStorage.setItem('cart', valueStringified);

}
const addToLocalStorage = (id) => {
    const cart = getStoredValue();
    cart.push(id);
    setValueInLocalStorage(cart);

}
export { addToLocalStorage,setValueInLocalStorage,getStoredValue } 