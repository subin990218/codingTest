function solution(array, commands) {
    var answer = [];
    for (let elem of commands) {
        let [i,j,k] = elem;
        let slicedArray = array.slice(i-1, j)
        slicedArray.sort((a,b) => a-b)
        let theNumber = slicedArray[k-1]
        answer.push(theNumber)
    }
    return answer;
}