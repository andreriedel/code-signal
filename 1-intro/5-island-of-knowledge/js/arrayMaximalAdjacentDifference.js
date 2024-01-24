const solution1 = (arr) => Math.max(...arr.slice(1).map((val, idx) => Math.abs(val - arr[idx])))
