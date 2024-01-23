const solution = arr => arr.reduce((sum, val, idx) => (sum[idx & 1] += val, sum), [0, 0]);
/* 
  Reduce recebe no segundo parâmetro o array [0, 0] como sendo o valor inicial
  de 'sum'. O primeiro parâmetro corresponde à função, na qual percorre o array
  'arr' adicionando os valores no primeiro ou no segundo índice de 'sum' de
  acordo com a expressão sum[idx & 1]. Outra forma é usar a expressão sum[idx %
  2]. Como o método reduce é iterativo, a cada iteração é preciso retornar o
  valor atualizado de 'sum'. Ao utilizar arrow function podemos usar o operador
  da vírgula para separar o retorno de uma expressão. Ou seja, antes da vírgula
  é realizado uma operação e após a vírgula é retornado o valor atualizado de
  sum.
*/
