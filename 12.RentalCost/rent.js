function calculateRentalCost(numDays, carType) {
    let rentalCost;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        console.log("Invalid car type");
        return null;
    }
  
    const totalCost = rentalCost * numDays;
    return totalCost;
  }
  const rentalCost = calculateRentalCost(5, "Luxury");
  console.log(rentalCost);  
    