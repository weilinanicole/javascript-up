// 业务逻辑

window.onload = function() {
    var oBox = document.getElementById('box');
    var aRed = oBox.querySelectorAll('.red'); // 所有的红球
    var aBlue = oBox.querySelectorAll('.blue'); // 所有的蓝球
    var oBnt1 = document.getElementById('btn1'); // 机选一注
    var oBtn2 = document.getElementById('btn2'); // 清空
    var timer = null; // 时间对象
    var onOff = true; // 开关

    // 机选一注
    oBnt1.onclick = function() {
        // 如果开关是真，则可以执行
        if (onOff) {
            onOff = false;
            timer = setInterval(autoFn, 50); // 开启定时器

            // 3秒钟以后清除由setInterval开启的定时器
            setTimeout(function() {
                clearInterval(timer);
                onOff = true;
            }, 3000);
        }
    }

    // 清空
    oBtn2.onclick = function() {
        for (var i = 0; i < aRed.length; i++) {
            aRed[i].innerHTML = '';
        }
        for (var i = 0; i < aBlue.length; i++) {
            aBlue[i].innerHTML = '';
        }
    }

    function autoFn() {
        // 5个红球
        var arr1 = getNumber(1, 33, 5);
        for (var i = 0; i < aRed.length; i++) {
            aRed[i].innerHTML = arr1[i];
        }

        // 2个蓝球
        var arr2 = getNumber(1, 16, 2);
        for (var i = 0; i < aBlue.length; i++) {
            aBlue[i].innerHTML = arr2[i];
        }
    }
}




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