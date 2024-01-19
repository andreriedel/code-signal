int solution(int y) {
    return (y % 100 == 0) ? (y / 100) : (y / 100 + 1);
}
