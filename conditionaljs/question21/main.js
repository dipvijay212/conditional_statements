function equation(a, b, c) {
    let dis = b * b - 4 * a * c;
  
    if (dis > 0) {
      // Real and distinct roots
      let root1 = (-b + Math.sqrt(dis)) / (2 * a);
      let root2 = (-b - Math.sqrt(dis)) / (2 * a);
      console.log(`The roots are real and distinct: x1 = ${root1}, x2 = ${root2}`);
    } else if (dis === 0) {
      // Real and equal roots
      let root = -b / (2 * a);
      console.log(`The roots are real and equal: x = ${root}`);
    } else {
      // Complex roots
      let realPart = -b / (2 * a);
      let ipart = Math.sqrt(-dis) / (2 * a);
      console.log(`The roots are complex: x1 = ${realPart} + ${ipart}i, x2 = ${realPart} - ${ipart}i`);
    }
  }
  
  // Example usage:
  let a = 1;
  let b = -3;
  let c = 2;
  
  equation(a, b, c);