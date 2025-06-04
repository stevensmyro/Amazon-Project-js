export const cart = [];

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

     let added = button.parentElement.querySelector(`.js-added-to-cart-${productId}`);
    added.innerHTML = 'Added'
    added.classList.add('added-text')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      added.classList.remove('added-text')
    }, 2000)  
   }