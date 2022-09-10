// Bottom up optimized solution
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

var knightProbability = function(n, k, row, column) {
    let prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    prevDp[row][column] = 1;
    for (let step = 1; step <= k; step++) {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                for (let i = 0; i < DIRECTIONS.length; i++) {
                    const currentDirection = DIRECTIONS[i];
                    const prevRow = r + currentDirection[0];
                    const prevCol = c + currentDirection[1];
                    if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
                        nextDp[r][c] =
                            nextDp[r][c] + prevDp[prevRow][prevCol] / 8;
                    }
                }
            }
        }
        prevDp = nextDp;
        nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += prevDp[i][j];
        }
    }

    return res;
};

knightProbability(3, 2,0,0)