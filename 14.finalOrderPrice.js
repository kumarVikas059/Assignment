const calculateTotalCost = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].unitPrice * cart[i].quantity;
  }
  return total;
};

const cart=[
    {unitPrice:20,quantity:5},
    {unitPrice:15,quantity:10},
    {unitPrice:30,quantity:5}
]
console.log("Cart total is:",calculateTotalCost(cart));