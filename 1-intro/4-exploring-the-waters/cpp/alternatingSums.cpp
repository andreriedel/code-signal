vector<int> solution(vector<int> v) {
    vector<int> ans(2);

    for (int i = 0; i < v.size(); i++)
        ans[i % 2] += v[i];

    return ans;
}
