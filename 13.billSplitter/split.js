function calculateBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
  
    const billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return billDetails;
}
// function calculateBill(costPerDish, numPeople) {
//     const totalBill = costPerDish * numPeople;
//     const billPerPerson = totalBill / numPeople;
  
//     return {
//       totalBill: totalBill,
//       billPerPerson: billPerPerson
//     };
// }/
const billDetails = calculateBill(605, 3);
console.log(billDetails);  

  
  