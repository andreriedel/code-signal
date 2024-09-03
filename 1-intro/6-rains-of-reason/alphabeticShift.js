function solution(inputString) {
  return String.fromCharCode(...inputString.split('').map(c => c == 'z' ? 97 : c.charCodeAt() + 1));
}
