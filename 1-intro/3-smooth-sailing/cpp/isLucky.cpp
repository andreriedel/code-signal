bool solution(int n) {
    int len = ((int)log10(n) + 1) / 2;
    int sum1 = 0, sum2 = 0;
    
    for (int i = 0; i < len; i++) {
        sum1 += n % 10;
        n /= 10;
    }

    for (int i = 0; i < len; i++) {
        sum2 += n % 10;
        n /= 10;
    }

    return sum1 == sum2;
}
