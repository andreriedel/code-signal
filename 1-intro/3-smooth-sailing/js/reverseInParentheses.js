const solution = str => {
    let aux;

    while (str.includes("(")) {
        aux = str.split("(").pop().split(")")[0];
        str = str.replace("(" + aux + ")", aux.split("").reverse().join(""));
    }
   
    return str;
}
