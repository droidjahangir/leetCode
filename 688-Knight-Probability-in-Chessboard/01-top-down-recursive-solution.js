const DIRECTIONS = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
];

var knightProbability = function(N, K, r, c) {
    if (r < 0 || c < 0 || r >= N || c >= N) {
        return 0;
    }

    if (K === 0) {
        return 1;
    }

    let res = 0;

    for (let dir of DIRECTIONS) {
        res += knightProbability(N, K - 1, r + dir[0], c + dir[1]) / 8;
    }

    return res;
};

console.log(knightProbability(6, 2, 2, 2))