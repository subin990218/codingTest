function solution(answers) {
    var answer = [];
    let count = [0,0,0];
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === pattern1[i%5]) count[0]++;
      if (answers[i] === pattern2[i%8]) count[1]++;
      if (answers[i] === pattern3[i%10]) count[2]++;
    }

    const maxScore = Math.max(...count);
      for (let i = 0; i < 3; i++) {
          if (count[i] === maxScore) {
              answer.push(i + 1);  
          }
      }
    return answer;
}