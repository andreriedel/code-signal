const solution = (s1, s2) => {
    let r = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            s2 = s2.replace(s1[i], '');
            r++;
        }
    }
   
    return r;
}
