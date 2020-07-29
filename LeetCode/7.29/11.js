/*
Tow Points
最大化(j-i)*min(height[j],height[i])
每次小的向内收缩，正确性显然。
*/
var maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let max = j * (Math.min(height[0], height[j]));
    while (i < j) {
        if (height[i] < height[j]) {
            i++;
            if (height[i - 1] < height[i]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        } else {
            j--;
            if (height[1 + j] < height[j]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        }
    }
    return max;
};