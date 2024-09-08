function solution(names) {
  let newNames = [];

  for (x of names) {
    if (newNames.includes(x)) x += "(1)";
    let i = 2;
    while (newNames.includes(x)) x = updateFileName(x, i), i++;
    newNames.push(x);
  }

  return newNames;
}

const updateFileName = (x, i) => x.match(/.*(?=\()/)[0] + "(" + i + ")";
