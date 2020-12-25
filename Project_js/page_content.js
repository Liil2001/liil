//时间
var nowtTime = document.querySelector('.nowTime');
var nowTime_time = document.querySelector('.nowTime_time');

function nowtTimer() {
    var datas = new Date;
    var nowYear = datas.getFullYear();
    var nowMonth = datas.getUTCMonth();
    var nowDay = datas.getDate();
    var nowHours = datas.getHours();
    var nowMins = datas.getMinutes();
    var nowSecs = datas.getSeconds();
    if (nowSecs > 10) {
        nowSecs = datas.getSeconds();
    } else {
        nowSecs = '0' + datas.getSeconds();
    }
    var real_time = nowYear + '-' + nowMonth + '-' + nowDay + '  ' + nowHours + ':' + nowMins + ':' + nowSecs;
    nowTime_time.innerHTML = real_time;
}
var timerGo = setInterval(nowtTimer, 1000);
//cube大小
//左侧边栏
var cube = document.querySelector('.cube');
var cube_size_s = document.querySelector('.cube_size_s');
var cube_size_m = document.querySelector('.cube_size_m');
var cube_size_l = document.querySelector('.cube_size_l');
//正方体
var cube_left = document.querySelector('.cube_left');
var cube_right = document.querySelector('.cube_right');
var cube_front = document.querySelector('.cube_front');
var cube_back = document.querySelector('.cube_back');
var cube_top = document.querySelector('.cube_top');
var cube_bottom = document.querySelector('.cube_bottom');
//cube_left
//cube_right
//cube_front
//cube_back
//cube_top
//cube_bottom
cube_size_s.addEventListener('click', function() {
    cube_left.className = 'cube_left_s';
    cube_right.className = 'cube_right_s';
    cube_front.className = 'cube_front_s';
    cube_back.className = 'cube_back_s';
    cube_top.className = 'cube_top_s';
    cube_bottom.className = 'cube_bottom_s';
})
cube_size_m.addEventListener('click', function() {
    cube_left.className = 'cube_left';
    cube_right.className = 'cube_right';
    cube_front.className = 'cube_front';
    cube_back.className = 'cube_back';
    cube_top.className = 'cube_top';
    cube_bottom.className = 'cube_bottom';
})
cube_size_l.addEventListener('click', function() {
    cube_left.className = 'cube_left_l';
    cube_right.className = 'cube_right_l';
    cube_front.className = 'cube_front_l';
    cube_back.className = 'cube_back_l';
    cube_top.className = 'cube_top_l';
    cube_bottom.className = 'cube_bottom_l';
})