bool solution(vector<int> v) {
    int aux, c = 0;
    int n = v.size();

    for (int i = 1; i < n; i++) {
        if (v[i - 1] >= v[i]) {
            aux = i;
            c++;
        }
    }

    if (c > 1) return false;
    if (c == 0) return true;

    // if c == 1:
    if (aux == 1 or aux == n - 1) return true;
    if (v[aux - 1] < v[aux + 1]) return true;
    if (v[aux - 2] < v[aux]) return true;

    return false;
}
