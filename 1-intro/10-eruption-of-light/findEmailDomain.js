function solution(address) {
  return address.match(/@([^@]+)$/)[1];
}
