// 工具方法

// 随机数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 排序函数
function ab(a, b) {
    return a - b;
}

// 补0
function toTwo(n) {
    return n < 10 ? '0' + n : '' + n;
}

// 取一个随机数。最小值，最大值，个数
function getNumber(min, max, len) {
    var arr = [];

    while (arr.length < len) {
        // 取得一个随机数
        var n = getRandom(min, max);
        // 如果n在arr里面没有出现过，则添加
        if (arr.indexOf(n) === -1) {
            arr.push(n);
        }
    }

    // 排序
    arr.sort(ab);

    // 补0
    for (var i = 0; i < arr.length; i++) {
        arr[i] = toTwo(arr[i]);
    }

    return arr;
}