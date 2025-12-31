function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length-1; i += 1) {
        for (let j = i+1; j < numbers.length; j += 1) {
            let result = numbers[i] + numbers[j]
            answer.push(result);
        }
    }
    answer = [...new Set(answer)]
    answer.sort((a,b)=>a-b)
    return answer;
}