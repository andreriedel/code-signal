vector<vector<int>> solution(vector<vector<int>> image) {
    int m = image.size() - 2;
    int n = image[0].size() - 2;

    vector<vector<int>> res(m, vector<int>(n));
    
    for (int i = 1; i < image.size() - 1; i++) {
        for (int j = 1; j < image[i].size() - 1; j++) {
            res[i - 1][j - 1] =
            (
                image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] +
                image[i][j - 1] + image[i][j] + image[i][j + 1] +
                image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]
            ) / 9;
        }        
    }

    return res;
}
