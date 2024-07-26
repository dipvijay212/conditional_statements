
function calculateIncomeTax(income) {
    let tax = 0;
  
    if (income <= 250000) {
      tax = 0;
    }
    else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    }
    else if (income <= 1000000) {
      tax = (250000 * 0.05) + ((income - 500000) * 0.10);
    }
    else {
      tax = (250000 * 0.05) + (500000 * 0.10) + ((income - 1000000) * 0.15);
    }
  
    return tax;
  }
  
  // Example usage:
  let income = 750000;
  let tax = calculateIncomeTax(income);
  console.log(`Your income tax on ${income} is: ${tax.toFixed(2)}`);