const solution = arr => {
  let moves = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      const diff = (arr[i] - arr[i + 1]) + 1;
      arr[i + 1] = arr[i] + 1;
      moves += diff;
    }
  }

  return moves;
}

/* -------------------------------------------------------------------------- */

const solution2 = arr => {
  const ans = arr.reduce((tot, val, idx, arr) => {
    while (val >= arr[idx + 1]) {
      tot++;
      val[idx + 1]++;
      return tot;
    }
  }, 0);

  return ans;
}
