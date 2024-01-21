const solution = arr => arr.filter(val => val.length == Math.max(...arr.map(val => val.length)));
