function solution(cell1, cell2) {
  let board = [];

  for (let i = 0; i < 8; i++) {
    let row = [];
    
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0) { // lines 1, 3, 5, 7
          row.push(j % 2 == 0 ? 0 : 1); // cols a, c, e, g black; others white
        }
        if (i % 2 == 1) { // lines 2, 4, 6, 8
          row.push(j % 2 == 0 ? 1 : 0); // cols a, c, e, g white; others black
        }
    }
    
    board.push(row);
  }
  
  coord1 = [cell1.charCodeAt(0) - 65, cell1.charAt(1) - 1];
  coord2 = [cell2.charCodeAt(0) - 65, cell2.charAt(1) - 1];

  return board[coord1[0]][coord1[1]] == board[coord2[0]][coord2[1]];
}
