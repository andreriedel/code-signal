const solution = (img) => {
  let m = img.length - 2;
  let n = img[0].length - 2;
  
  let res = new Array(m);

  for (let i = 0; i < m; i++)
    res[i] = new Array(n);

  for (let i = 1; i < img.length - 1; i++) {
    for (let j = 1; j < img[i].length - 1; j++) {
        res[i - 1][j - 1] =
        Math.floor((
            img[i - 1][j - 1] + img[i - 1][j] + img[i - 1][j + 1] +
            img[i][j - 1] + img[i][j] + img[i][j + 1] +
            img[i + 1][j - 1] + img[i + 1][j] + img[i + 1][j + 1]
        ) / 9);
    }        
  }

  return res;
}
