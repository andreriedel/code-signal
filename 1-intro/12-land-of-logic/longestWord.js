function solution(text) {
  return text.match(/[A-Za-z]+/g).sort((a, b)=>{return b.length > a.length})[0];
}
