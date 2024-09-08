function solution(time) {
  return (Number(time.slice(0, 2)) < 24 && Number(time.slice(3)) < 60);
}
