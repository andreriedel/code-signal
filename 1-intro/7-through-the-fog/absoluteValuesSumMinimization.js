function solution(a) {
  let ans = [];
  let minDiffSum = Infinity;

  for (let i = 0; i < a.length; i++) {
    let diffSum = 0
    for (let j = 0; j < a.length; j++) {
      diffSum += Math.abs(a[j] - a[i]);
    }

    if (diffSum < minDiffSum) {
      minDiffSum = diffSum;
      ans = [a[i]];
    }

    if (diffSum == minDiffSum) {
      minDiffSum = diffSum;
      ans.push(a[i]);
    }
  }

  return Math.min(...ans);
}

/* -------------------------------------------------------------------------- */

function solution2(a) {
  return a[Math.ceil(a.length / 2) - 1];
}
