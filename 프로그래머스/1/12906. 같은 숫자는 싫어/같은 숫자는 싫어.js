function solution(arr)
{
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        // answer가 비어있거나, 마지막 값과 현재 값이 다르면 추가
        if (answer.length === 0 || answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
