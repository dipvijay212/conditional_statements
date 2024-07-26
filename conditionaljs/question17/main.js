function checkPassFail(marks) {
    let totalMarks = 0;
    let passed = true;
    
    for (let i = 0; i < marks.length; i++) {
      if (marks[i] < 40) {
        passed = false;
        break;
      }
      totalMarks += marks[i];
    }
  
    // Calculate overall percentage
    let percentage = (totalMarks / (marks.length * 100)) * 100;
  
    // Print result
    if (passed) {
      console.log(`Congratulations! You have passed with ${percentage.toFixed(2)}%`);
    } else {
      console.log(`Sorry, you have failed. Your overall percentage is ${percentage.toFixed(2)}%`);
    }
  }
  
  // Example usage:
  let marks = [60, 70, 80, 90, 40];
  checkPassFail(marks);
  