bool solution(vector<int> a, vector<int> b) {
    vector<int> aux;

    for (int i = 0; i < a.size(); i++) {
        if (a[i] != b[i]) {
            aux.push_back(i);
        }
    }

    if (aux.size() == 0) {
        return true;
    }

    if (aux.size() == 2) {
        if ((a[aux[1]] == b[aux[0]]) and (a[aux[0]] == b[aux[1]])) {
            return true;
        }
    }

    return false;
}
