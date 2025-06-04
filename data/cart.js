export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export  function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart))
}


export function calculateCartQuantity() {
  let cartQuantity = 0
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity
  });
  return cartQuantity;
}

export function addToCart (productId, quantity, button) {
   let matchingItem;
   let timeoutId;

    
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem  = cartItem
      }
    });

    if (matchingItem) {
      matchingItem.quantity += Number(quantity.value)
    } else {
      cart.push({
        productId,
        quantity: Number(quantity.value)
      });
     }

     saveToStorage();

     let added = button.parentElement.querySelector(`.js-added-to-cart-${productId}`);
    added.innerHTML = 'Added'
    added.classList.add('added-text')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      added.classList.remove('added-text')
    }, 2000)  
   }

   export function removeFromCart (productId) {
    const newCart = [];
    
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem)
      }
    });

    cart = newCart;

    saveToStorage();
   }
   