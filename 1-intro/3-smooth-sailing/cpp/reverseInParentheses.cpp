string solution(string s) {
    stack<int> st;

    for (int i = 0; i < s.size(); i++) {
        if (s[i] == '(')
            st.push(i);            
        if (s[i] == ')') {
            int start = st.top();
            st.pop();
            reverse(s.begin() + start + 1, s.begin() + i);
        }
    }

    string r;

    for (int i = 0; i < s.size(); i++) {
        if (s[i] != '(' and s[i] != ')')
            r = r + s[i];
    }

    return r;
}
