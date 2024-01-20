int solution(vector<vector<int>> m) {
    int sum = 0;

    for (int i = 0; i < m.size(); i++) {
        for (int j = 0; j < m[0].size(); j++) {
            if (m[i][j] == 0) continue;

            if (i >= 1 and m[i - 1][j] == 0) {
                m[i][j] = 0;
                continue;
            }

            sum += m[i][j];
        }
    }

    return sum;
}
