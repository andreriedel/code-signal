vector<int> solution(vector<int> v) {
    for (int i = 0; i < v.size() - 1; i++) {
        if (v[i] == -1) continue;

        for (int j = i + 1; j < v.size(); j++) {
            if (v[j] == -1) continue;
            if (v[i] > v[j]) swap(v[i], v[j]);
        }
    }

    return v;
}
