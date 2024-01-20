int solution(vector<int> v) {
    int n = 0;

    sort(v.begin(), v.end());

    for (int i = 1; i < v.size(); i++)
        n += v[i] - v[i - 1] - 1;

    return n;
}
