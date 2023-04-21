const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  }

  console.log("The discount Percent of the Product is",calculateDiscountPercentage(100, 75));