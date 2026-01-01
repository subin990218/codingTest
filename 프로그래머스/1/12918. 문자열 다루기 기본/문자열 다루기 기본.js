function solution(s) {
    var answer = true;
    if (s.length !== 4 && s.length !== 6) {
        answer = false;
    } 
    for (let elem of s) {
        if ('0' > elem || elem > '9') {
            answer = false
            return answer
        } 
    }
    return answer;
}