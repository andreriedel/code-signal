function solution(s) {
  let alphabet = [];  

  for (let i = 0; i < 26; i++) {
    alphabet.push(0);
  }

  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - 97]++;
  }

  let ans = 0;

  for (let i = 0; i < 26; i++) {
    if (alphabet[i] > 0) ans++;
  }

  return ans;
}

/* -------------------------------------------------------------------------- */

function solution2(s) {
  return new Set(s).size;
}
