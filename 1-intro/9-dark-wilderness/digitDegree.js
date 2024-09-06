function solution(n) {
  let ans = 0;
  while (n.toString().length > 1) {
    n = n.toString().split("").reduce((x, y) => x + parseInt(y), 0);
    ans++;
  }

  return ans;
}
