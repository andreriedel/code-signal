function solution(inputArray) {
  const allPossibilities = permute(inputArray);

  for (let possibility of allPossibilities) {
    let isValid = true;

    for (let j = 1; j < possibility.length; j++) {
      let mismatches = 0;

      for (let k = 0; k < possibility[j].length; k++) {
        if (possibility[j][k] != possibility[j - 1][k]) mismatches++;
      }

      if (mismatches != 1) {
        isValid = false;
      }
    }

    if (isValid) return true;
  }

  return false;
}

function permute(array) {
  let result = [];

  if (array.length === 0) return [];
  if (array.length === 1) return [array];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const remaining = array.slice(0, i).concat(array.slice(i + 1));
    const remainingPermuted = permute(remaining);

    for (let perm of remainingPermuted) {
      result.push([current].concat(perm));
    }
  }

  return result;
}
