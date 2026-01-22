function solution(s){
    var answer = true;

    let pCount = 0; 
    let yCount = 0; 
    
    for (let elem of s) {
        if (elem === 'p' || elem === 'P') {
            pCount += 1;
        } else if (elem === 'y'|| elem === 'Y') {
            yCount += 1
        }
    }
    if (pCount === yCount) {
        answer = true
    } else {
        answer = false
    }

    return answer;
}