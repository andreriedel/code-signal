int solution(std::vector<int> arr) {
    for (int i = 1; ; i++) {
        int t = true;

        for (int j : arr)
            t = t && (j % i); // valida se os saltos irão cair nos obstáculos

        if (t) return i;
    }
}
