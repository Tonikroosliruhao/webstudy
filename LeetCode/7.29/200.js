/*
红果果的dfs
*/
var numIslands = function (grid) {
    let cnt = 0;
    if (grid && grid.length) {
        const maxI = grid.length - 1, maxJ = grid[0].length - 1;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') {
                    cnt++;
                    dfs(i, j);
                }
            }
        }

        function dfs(i, j) {
            if (i < 0 || j < 0 || i > maxI || j > maxJ)     
                return;
            if (grid[i][j] === '1') {
                grid[i][j] = '0';
                dfs(i + 1, j); dfs(i, j + 1);
                dfs(i, j - 1); dfs(i - 1, j);             
            }
        }

    }
    return cnt;
};