const solution = arr => {
    const aux = arr.filter(el => el > -1).sort((a, b) => a - b);

    return arr.map(el => (el == -1) ? el : aux.shift());
}
