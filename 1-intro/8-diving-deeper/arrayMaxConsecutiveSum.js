// TLE

function solution(inputArray, k) {
  let maxConsecutiveSum = 0;

  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let consecutiveSum = 0;

    for (let j = 0; j < k; j++)
      consecutiveSum += inputArray[i + j];

    if (consecutiveSum > maxConsecutiveSum)
      maxConsecutiveSum = consecutiveSum;
  }

  return maxConsecutiveSum;
}

/* -------------------------------------------------------------------------- */

function solution2(inputArray, k) {
  sum = maxSum = inputArray.slice(0,k).reduce((x, y) => x + y);

  for (i = k; i < inputArray.length; i++) {
      sum += inputArray[i] - inputArray[i - k]
      if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}
