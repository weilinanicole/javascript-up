var oUserName = document.getElementById('userName'); // 用户名输入框
var oUl = document.getElementById('imgList');
var aImg = oUl.getElementsByTagName('img'); // 头像
var oTxt = document.getElementById('txt'); // 文本域
var oBtn = document.getElementById('btn'); // 广播按钮
var oList = document.getElementById('list'); // 留言列表
var oMax = document.getElementById('max'); // 可输入的最多的字符个数
var len = oMax.innerHTML;
oTxt.setAttribute('maxlength', len); // 给文本域设置最大值
var url = ''; // 选择的哪张图片的地址

// 处理头像
for (var i = 0; i < aImg.length; i++) {
    aImg[i].onclick = function() {
        for (var i = 0; i < aImg.length; i++) {
            aImg[i].className = '';
        }
        this.className = 'active';
        url = this.getAttribute('src');
    }
}

// 处理字数
oTxt.onkeyup = function() {
    var txt = this.value;
    oMax.innerHTML = len - txt.length;
}

// 广播
oBtn.onclick = function() {
    var txt1 = oUserName.value;
    var txt2 = oTxt.value;
    // 只要这三者有一个没有，则不向下走
    if (!txt1 || !txt2 || !url) {
        alert('请输入完整')
    } else {
        // 创建li标签
        var oLi = document.createElement('li');
        oLi.innerHTML = `<img src="${url}">
        <b>${txt1}</b>说：
        <span>“${txt2}”</span>
        <time datetime="">${new Date().toLocaleString()}</time>`;

        // 创建a
        var oA = document.createElement('a');
        oA.href = 'javascript:;';
        oA.innerHTML = '删除';
        oA.onclick = function() {
            var parent = this.parentNode;
            parent.parentNode.removeChild(parent);
        }
        oLi.appendChild(oA);

        oList.appendChild(oLi);

        // 添加完成之后，再清空原来的输入
        oUserName.value = '';
        oTxt.value = '';
        url = ''
        for (var i = 0; i < aImg.length; i++) {
            aImg[i].className = '';
        }
    }
}