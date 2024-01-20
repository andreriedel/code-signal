int solution(vector<int> v) {
    int mv = v[0] * v[1];

    for (int i = 0; i < v.size() - 1; i++)
        mv = max(v[i] * v[i + 1], mv);

    return mv;
}
