vector<string> solution(vector<string> pic) {
    for(auto& s : pic)
        s = "*" + s + "*";

    pic.insert(pic.begin(), string(pic[0].size(), '*'));
    pic.insert(pic.end(), string(pic[0].size(), '*'));
    
    return pic;
}
