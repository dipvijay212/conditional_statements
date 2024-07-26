
function GPA(grades) {
    let totalPoints = 0;
    let totalCredits = 0;
  
    for (let subject in grades) {
      let grade = grades[subject];
      let credits = 1; 
  
      let points = 0;
      if (grade === 'A') {
        points = 4;
      } else if (grade === 'B') {
        points = 3;
      } else if (grade === 'C') {
        points = 2;
      } else if (grade === 'D') {
        points = 1;
      } else {
        points = 0;
      }
  
      totalPoints += points * credits;
      totalCredits += credits;
    }
  
    let gpa = totalPoints / totalCredits;
  
    gpa = Math.round(gpa * 100) / 100;
  
    console.log(`The student's GPA is ${gpa}.`);
  }
  
  let grades = {
    Math: 'C',
    Science: 'A',
    English: 'B',
    History: 'B'
  };
  
  GPA(grades);