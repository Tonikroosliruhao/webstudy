/*
    模60剩余系。
*/
var numPairsDivisibleBy60 = function (time) {
    let ans = 0
    for (let i = 0; i < time.length; i++) {
        let length = time.length;
        let index = i + 1;
        while (index < length) {
            if ((time[i] + time[index]) % 60 == 0) {
                ans++;
            }
            index++;
        }
    }
    return ans;
};