const solution = n => {
    const arr = Array.from(n.toString()).map(Number);
    let r = 0;

    for (let i = 0; i < arr.length; i++)
        (i < arr.length / 2) ? r += arr[i] : r -= arr[i];

    return r == 0;
}
