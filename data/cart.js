export const cart = [{
    productId: '77a845b1-16ed-4eac-bdf9-5b591882113d',
    quantity: 2 
}, {
    productId: '36c64692-677f-4f58-b5ec-0dc2cf109e27',
    quantity: 1
}];                                                                 
//Метод с ID - D-Dyplicated the date or Normalizing the data

 export function addToCart(productId) {
    let matchingItem = cart.find(item => item.productId === productId);

        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                productId,
                quantity: 1
            });
        }
}
