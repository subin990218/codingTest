function solution(s) {
    var answer = 0;
    const words = ["zero","one","two","three","four",
    "five","six","seven","eight","nine"
    ];

    for (let i = 0; i < words.length; i += 1) {
        s = s.split(words[i]).join(i)
    }
    answer = Number(s);
    return answer;
}