function calculateDiscount(totalAmount) {
    let discount = 0;
  
   
    if (totalAmount < 100) {
      discount = 0; 
    } else if (totalAmount < 500) {
      discount = totalAmount * 0.05;
    } else if (totalAmount < 1000) {
      discount = totalAmount * 0.10; 
    } else {
      discount = totalAmount * 0.15; 
    }
  
    return discount;
  }
  
  // Example usage:
  let totalAmount = 750;
  let discount = calculateDiscount(totalAmount);
  console.log(`Discount: ₹${discount.toFixed(2)}`);
  console.log(`Amount to pay: ₹${(totalAmount - discount).toFixed(2)}`);