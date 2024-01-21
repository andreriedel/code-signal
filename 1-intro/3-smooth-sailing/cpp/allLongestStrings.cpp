vector<string> solution(vector<string> v) {
    vector<string> r;

    for(auto& s: v) {
        if(r.empty() || s.size() == r[0].size())
            r.push_back(s);
        else if (s.size() > r[0].size())
            r = vector<string> {s};
    }

    return r;
}
