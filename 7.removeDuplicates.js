function removeDuplicates(cart) {
    let uniqueCart = [];
  
    for (let i = 0; i < cart.length; i++) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
  
    return uniqueCart;
  }
let cart = ["apple", "banana", "orange", "apple", "banana"];
let uniqueCart = removeDuplicates(cart);
console.log(uniqueCart);