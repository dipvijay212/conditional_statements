function calculateElectricityBill(units) {
  let bill = 0;


  if (units <= 100) {
    bill = units * 3.50;
  }
  else if (units <= 200) {
    bill = 100 * 3.50 + (units - 100) * 4.50;
  }
  else {
    bill = 100 * 3.50 + 100 * 4.50 + (units - 200) * 5.50;
  }

  return bill;
}

// Example usage:
let units = 250;
let bill = calculateElectricityBill(units);
console.log(`Your electricity bill for ${units} units is: ₹${bill.toFixed(2)}`);