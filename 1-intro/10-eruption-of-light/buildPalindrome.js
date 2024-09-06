function solution(st) {
  let i = 0;
  while (!isPalindrome(st)) {
    let aux = st.slice(0, st.length - i) + st[i] + st.slice(st.length - i);
    st = aux;
    i++;
  }
  return st;
}

const isPalindrome = s => s == s.split('').reverse().join('');
