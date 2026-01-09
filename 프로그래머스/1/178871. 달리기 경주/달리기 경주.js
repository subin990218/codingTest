function solution(players, callings) {
  const pos = {};
  for (let i = 0; i < players.length; i++) {
    pos[players[i]] = i;
  }

  for (const name of callings) {
    const i = pos[name];         
    const front = players[i - 1];

    players[i - 1] = name;
    players[i] = front;

    pos[name] = i - 1;
    pos[front] = i;
  }

  return players;
}
