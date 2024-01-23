const solution = str => {
  let aux = str.split('').sort();
  let count = 0;

  while (aux.length) {
    let c = aux.shift();

    if (c == aux[0]) {
      aux.shift();
    } else {
      count++;
    }
  }

  return (count <= 1);
}

/* -------------------------------------------------------------------------- */

const solution2 = str => str.split('').sort().join('').replace(/(\w)\1/g,'').length <= 1;

/*
A expressão regular /(\w)\1/g captura um caractere qualquer e verifica se existe
um outro igual do lado dele.
*/
