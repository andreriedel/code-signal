function solution(inputString) {
  return (inputString.match(/[0-9]+/g) || []).reduce(t, el => t + Number(el), 0);
}
