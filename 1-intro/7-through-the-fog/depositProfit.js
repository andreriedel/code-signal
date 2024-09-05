function solution(deposit, rate, threshold) {
  let y = 0;

  while (deposit < threshold) {
    deposit *= (1 + rate / 100);
    y++;
  }

  return y;
}

/* -------------------------------------------------------------------------- */

function solution2(deposit, rate, threshold) {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}
