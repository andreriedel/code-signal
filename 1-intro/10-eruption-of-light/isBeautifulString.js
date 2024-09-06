function solution(inputString) {
  let alphabet = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push(0);
  }
  for (let i = 0; i < inputString.length; i++) {
    alphabet[inputString.charCodeAt(i) - 97]++;
  }
  for (let i = 1; i <= 26; i++) {
    if (alphabet[i] > alphabet[i - 1]) return false;
  }

  return true;
}

/* -------------------------------------------------------------------------- */

function solution2(inputString) {
  s = "abcdefghijklmnopqrstuvwxyz";

  for (i = 1; i < s.length; i++) {
    if (inputString.split(s[i]).length - 1 > inputString.split(s[i - 1]).length - 1)
      return false;
  }
  return true;
}
