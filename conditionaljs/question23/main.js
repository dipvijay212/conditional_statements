function Profit(cPrice, sPrice) {
    
    let ploss = sPrice - cPrice;
  

    if (ploss > 0) {
      console.log(`You made a profit of ${ploss}!`);
    } else if (ploss < 0) {
      console.log(`You made a loss of ${Math.abs(ploss)}.`);
    } else {
      console.log("You broke even.");
    }
  }
  

  let cPrice = 500;
  let sPrice = 150;
  
  Profit(cPrice, sPrice);