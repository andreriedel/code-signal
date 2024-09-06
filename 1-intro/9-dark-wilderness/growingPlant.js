function solution(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  while (desiredHeight > 0) {
    days++;
    desiredHeight -= upSpeed;
    if (desiredHeight <= 0) break;
    desiredHeight += downSpeed;
  }
  return days;
}

/* -------------------------------------------------------------------------- */

function solution2(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}
