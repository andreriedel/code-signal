const solution = m => {
    let sum = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[0].length; j++) {
            if (m[i][j] == 0) continue;

            if (i >= 1 && m[i - 1][j] == 0) {
                m[i][j] = 0;
                continue;
            }

            sum += m[i][j];
        }
    }

    return sum;
}
