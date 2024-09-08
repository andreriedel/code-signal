function solution(code) {
  let ans = "";
  for (let i = 0; i < code.length / 8; i++)
    ans += String.fromCharCode(Number.parseInt(code.slice(i * 8, i * 8 + 8), 2));
  return ans;
} 

/* -------------------------------------------------------------------------- */

function solution(code) {
  return code.match(/.{8}/g).reduce((t, x)=> t + String.fromCharCode(parseInt(b, x)), "");
}
