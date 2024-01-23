int solution(vector<int> arr) {
    int moves = 0;
    for (int i = 0; i < arr.size() - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            const int diff = (arr[i] - arr[i + 1]) + 1;
            arr[i + 1] = arr[i] + 1;
            moves += diff;
        }
    }

    return moves;
}

/* -------------------------------------------------------------------------- */

int solution2(vector<int> arr) {
    int moves = 0;
    int m = -1e6;
    for (int val : arr) {
        m = max(m + 1, val);
        moves += m - val;
    }

    return moves;
}
