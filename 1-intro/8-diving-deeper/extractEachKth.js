function solution(inputArray, k) {
  return inputArray.filter((el, i) => (i + 1) % k)
}
