function fixCart(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] = cart[i] * 2; // multiply each item by 2 to correct the bug
    }
    return cart;
  }
const cart = [2, 3, 5, 1];
console.log(fixCart(cart)); // Output: [4, 6, 10, 2]
    