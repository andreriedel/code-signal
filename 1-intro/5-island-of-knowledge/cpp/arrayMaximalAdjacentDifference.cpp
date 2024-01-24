int solution(std::vector<int> arr) {
    int res = 0;
    
    for (int i = 1; i < arr.size(); i++)
        res = max(res, abs(arr[i] - arr[i - 1]));
    
    return res;
}
