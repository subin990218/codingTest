function solution(sizes) {
    var answer = 0;
    let [maxGaro, maxSaero] = [0,0]
    for (let i = 0; i < sizes.length; i += 1) {
        let [garo, saero] = sizes[i]
        if (garo < saero) {
            let tmp = garo;
            garo = saero;
            saero = tmp; 
            sizes[i][0] = garo;
            sizes[i][1] = saero
        }
    if (maxGaro < garo) {
        maxGaro = garo
    } if (maxSaero < saero) {
        maxSaero = saero
        }
    }
    answer = maxGaro * maxSaero
    return answer;
}