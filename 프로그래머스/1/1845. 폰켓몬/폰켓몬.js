function solution(nums) {
    var answer = 0;
    let pokemon = nums.length / 2
    let set = new Set(nums)
    if (pokemon > set.size) {
        answer = set.size;
    } else {
        answer = pokemon
    }
    return answer;
}