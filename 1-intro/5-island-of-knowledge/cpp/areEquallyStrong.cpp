bool solution(int yl, int yr, int fl, int fr) {
    return (yl == fl || yl == fr) && (yr == fl || yr == fr);
}
