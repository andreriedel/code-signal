const solution = (a, b) => {
  let aux = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      aux.push(i);
    }
  }

  if (aux.length == 0) {
    return true;
  }

  if (aux.length == 2) {
    if ((a[aux[1]] == b[aux[0]]) && (a[aux[0]] == b[aux[1]])) {
      return true;
    }
  }

  return false;
}

/* -------------------------------------------------------------------------- */

const solution2 = (a, b) => {
  const a2 = a.filter((val, idx) => val != b[idx]);
  const b2 = b.filter((val, idx) => val != a[idx]);

  return a2.length == 0 || (a2.length == 2 && a2.join(' ') == b2.reverse().join(' '));
}
