function solution(s) {
    var answer = 0;
    let numList = ["zero","one", "two", "three", "four", "five", "six", "seven","eight", "nine"]
    
    for (let i = 0; i < numList.length; i += 1) {
        s = s.split(numList[i]).join(i)
    }
    answer = Number(s)
    return answer;
}