function Lights(color) {
    if (color === 'red') {
      console.log("Stop");
    } else if (color === 'yellow') {
      console.log("Get Ready");
    } else if (color === 'green') {
      console.log("Go");
    } else {
      console.log("Invalid");
    }
  }
  
  
  Lights('red'); 
  Lights('yellow'); 
  Lights('green'); 
  Lights('blue'); 