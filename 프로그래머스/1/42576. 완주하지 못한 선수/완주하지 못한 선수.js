function solution(participant, completion) {
  const map = new Map();

  // 참가자 카운트
  for (const name of participant) {
    map.set(name, (map.get(name) || 0) + 1);
  }

  // 완주자 카운트 차감
  for (const name of completion) {
    map.set(name, map.get(name) - 1);
  }

  for (const [name, count] of map) {
    if (count > 0) return name;
  }
}
