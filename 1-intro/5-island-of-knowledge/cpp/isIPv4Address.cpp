bool solution(std::string str) {
    regex r("^((25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)(\\.(?!$)|$)){4}$");
    return regex_match(str, r)
}
