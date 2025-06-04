export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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