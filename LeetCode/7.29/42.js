/*
单调栈
维护递减的单调栈，每次更新时计算答案
每次计算一个，中间高度相等的元素可以合并计算
*/
var trap = function (height) {
    let top = 0;
    let i = 0, ans = 0;
    let preNumber = 0;
    let stack = [];
    for (i = 0; i < height.length; i++) {
        while (top > 0 && height[i] > height[stack[top]]) {
            preNumber = stack[top];
            top--;
            while (top > 0 && height[preNumber] == height[stack[top]]) top--;
            if (top > 0) {
                ans += (Math.min(height[stack[top]], height[i]) - height[preNumber]) * (i - stack[top] - 1);
            }
        }
        stack[++top] = i;
    }
    return ans;
};
