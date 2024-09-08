function solution(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) matrix.push(new Array(n).fill(0));

  let i = 0, j = 0;
  let dir = "r";
  for (let x = 0; x < n*n; x++) {
    matrix[i][j] = x + 1;
    if (dir == "r") {
      if (j + 1 == n || matrix[i][j + 1] != 0) dir = "d", i++;
      else j++;
      continue;
    }
    if (dir == "d") {
      if (i + 1 == n || matrix[i + 1][j] != 0) dir = "l", j--;
      else i++;
      continue;
    }
    if (dir == "l") {
      if (j - 1 < 0 || matrix[i][j - 1] != 0) dir = "u", i--;
      else j--;
      continue;
    }
    if (dir == "u") {
      if (i - 1 < 0 || matrix[i - 1][j] != 0) dir = "r", j++;
      else i--;
      continue;
    }
  }

  return matrix;
}
