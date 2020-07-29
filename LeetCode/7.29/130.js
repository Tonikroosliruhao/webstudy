/*
从四边向中间dfs找连通块，不修改
其他都改。
*/
var solve = function (board) {
    let n = board.length;
    if (n === 0) return [];
    let m = board[0].length;
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 'O') {
                    dfs(i, j);
                }
            }
        } else {
            for (let j of [0, m - 1]) {
                if (board[i][j] === 'O') {
                    dfs(i, j);
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === '#') {
                board[i][j] = 'O'
            }
        }
    }

    function dfs(i, j) {
        if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === 'O') {
            board[i][j] = '#';
            for (let dir of dirs) {
                dfs(i + dir[0], j + dir[1]);
            }
        }
    }
};