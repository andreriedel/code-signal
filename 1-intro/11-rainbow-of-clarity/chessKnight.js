function solution(cell) {
  let i = cell[1] - 1;
  let j = cell.charCodeAt(0) - 97;
  let ans = 0;
  if (i - 2 >= 0 && j - 1 >= 0) ans++;
  if (i - 1 >= 0 && j - 2 >= 0) ans++;
  if (i - 2 >= 0 && j + 1 <= 7) ans++;
  if (i - 1 >= 0 && j + 2 <= 7) ans++;
  if (i + 2 <= 7 && j - 1 >= 0) ans++;
  if (i + 1 <= 7 && j - 2 >= 0) ans++;
  if (i + 2 <= 7 && j + 1 <= 7) ans++;
  if (i + 1 <= 7 && j + 2 <= 7) ans++;
  return ans;
}
