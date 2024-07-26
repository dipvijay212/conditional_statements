function Currency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
  
    if (fromCurrency === 'USD' && toCurrency === 'IND') {
      result = amount * 83.54; // 1 USD = 83.54 INR
    } else if (fromCurrency === 'USD' && toCurrency === 'GBP') {
      result = amount * 0.76; // 1 USD = 0.76 GBP
    } else if (fromCurrency === 'USD' && toCurrency === 'JPY') {
      result = amount * 109.23; // 1 USD = 109.23 JPY
    } else if (fromCurrency === 'IND' && toCurrency === 'USD') {
      result = amount * 0.01197; // 1 IND = 1.19 USD
    } else if (fromCurrency === 'IND' && toCurrency === 'GBP') {
      result = amount * 0.09; // 1 IND = 0.90 GBP
    } else if (fromCurrency === 'IND' && toCurrency === 'JPY') {
      result = amount * 1.89; // 1 IND = 130.23 JPY
    } else if (fromCurrency === 'GBP' && toCurrency === 'USD') {
      result = amount * 1.29; // 1 GBP = 1.32 USD
    } else if (fromCurrency === 'GBP' && toCurrency === 'IND') {
      result = amount * 108.23; // 1 GBP = 108.23 IND
    } else if (fromCurrency === 'GBP' && toCurrency === 'JPY') {
      result = amount * 144.23; // 1 GBP = 144.23 JPY
    } else if (fromCurrency === 'JPY' && toCurrency === 'USD') {
      result = amount * 0.0063; // 1 JPY = 0.0092 USD
    } else if (fromCurrency === 'JPY' && toCurrency === 'IND') {
      result = amount * 0.5274; // 1 JPY = 0.5274 IND
    } else if (fromCurrency === 'JPY' && toCurrency === 'GBP') {
      result = amount * 0.0048; // 1 JPY = 0.0069 GBP
    } else {
      result = 'Invalid';
    }
  
    document.getElementById("result").value = result;
  }