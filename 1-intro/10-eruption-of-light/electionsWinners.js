function solution(votes, k) {
  const maxVote = Math.max(...votes);
  if (k == 0) return votes.filter(el => el == maxVote).length > 1 ? 0 : 1;
  else return votes.filter(el => el + k > maxVote).length
}
