const solution = (arr) => {
  for (let i = 1; ; i++)
    if (arr.every(el => el % i))
      return i;
}
