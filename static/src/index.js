// 获取弹窗和背景遮罩元素
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

// 打开弹窗函数
function openModal() {
    modal.classList.add('active'); // 显示弹窗
    overlay.classList.add('active'); // 显示背景遮罩
}

// 关闭弹窗函数
function closeModal() {
    modal.classList.remove('active'); // 隐藏弹窗
    overlay.classList.remove('active'); // 隐藏背景遮罩
}

function getTimeDifference() {
    // 目标日期（2024年6月13日）
    var targetDate = new Date('2024-06-13T00:00:00');
    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate - targetDate);
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    var timeString = '距离2024年6月13日已过去：' + days + '天 ' + hours + '小时 ' + minutes + '分钟 ' + seconds + '秒';
    return timeString;
}