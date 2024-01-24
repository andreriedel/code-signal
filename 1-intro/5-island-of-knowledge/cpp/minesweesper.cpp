vector<vector<int>> solution(vector<vector<bool>> matrix) {
    int m = matrix.size();
    int n = matrix[0].size();

    vector<vector<int>> res(m, vector<int>(n));

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int q = 0;
            
            if (i > 0) { // verifica se tem linha de cima
                if (j > 0) { // verifica se tem coluna da esquerda
                    if (matrix[i - 1][j - 1] == true) {
                        q++;
                    }
                }
                
                if (matrix[i - 1][j] == true) {
                    q++;
                }
                
                if (j < n - 1) { // verifica se tem coluna da direita
                    if (matrix[i - 1][j + 1] == true) {
                        q++;
                    }
                }
            }
            if (i < m - 1) { // verifica se tem linha de baixo
                if (j > 0) { // verifica se tem coluna da esquerda
                    if (matrix[i + 1][j - 1] == true) {
                        q++;
                    }
                }

                if (matrix[i + 1][j] == true) {
                    q++;
                }

                if (j < n - 1) { // verifica se tem coluna da direita
                    if (matrix[i + 1][j + 1] == true) {
                        q++;
                    }
                }
            }
            
            if (j > 0) { // verifica se tem coluna da esquerda
                if (matrix[i][j - 1] == true) {
                    q++;
                }
            }
            
            if (j < n - 1) { // verifica se tem coluna da direita
                if (matrix[i][j + 1] == true) {
                    q++;
                }
            }

            res[i][j] = q;            
        }
    }

    return res;
}
