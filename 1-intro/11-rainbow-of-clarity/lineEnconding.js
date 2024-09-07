function solution(s) {
  let strSplited = [];
  strSplited.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) strSplited[strSplited.length - 1] += s[i];
    else strSplited.push(s[i])
  }

  return strSplited.map(el => el.length == 1 ? el : el.length + el[0]).join("");
}

/* -------------------------------------------------------------------------- */

function solution2(s) {
  return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}
