bool solution(string str) {
    int arr[256] = { 0 };

    for (char c : str) {
        arr[c]++;
    }

    int count = 0;
    for (int i = 0; i < 256; i++) {
        count += arr[i] % 2;
    }
    
    return count <= 1;
}
