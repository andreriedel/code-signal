function solution(n) {
  let res = [];

  while (n > 0) {
    res.push(n % 10);
    n = Math.floor(n / 10);
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] % 2 == 1)
      return false;
  }

  return true;
}

/* -------------------------------------------------------------------------- */

function solution2(n) {
  n = n.toString();

  for (d of n) {
    if (parseInt(d) % 2 == 1)
      return false;
  }

  return true;
}

/* -------------------------------------------------------------------------- */

function solution3(n) {
  return !n.toString().match(/[13579]/)
}
/* -------------------------------------------------------------------------- */

function solution4(n) {
  return n.toString().split("").every(x => x % 2 == 0)
}
