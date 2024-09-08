function solution(grid) {
  let arr = new Array(10).fill(0);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[grid[i][j]] == 1) return false
      arr[grid[i][j]]++;
    }
    arr = arr.fill(0);
  }
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      if (arr[grid[i][j]] == 1) return false
      arr[grid[i][j]]++;
    }
    arr = arr.fill(0);
  }
  for (let k = 0; k < 9; k++) {
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = Math.floor(k / 3) * 3;
        let y = Math.floor((k % 3) / 3) * 3;
        if (arr[grid[x + i][y + j]] == 1) return false
        arr[grid[x + i][y + j]]++;
      }
    }
    arr = arr.fill(0);
  }
  return true;
}
