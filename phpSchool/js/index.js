/**
 * Created by Administrator on 2017/9/17.
 */
window.onload = function () {
    var navbar = document.getElementById('navbar');
    navbar.addEventListener('click', function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeType === 1 && target.nodeName === 'A') {
            var className = target.className;
            if (className.indexOf('active') < 0) {
                //清除相对应兄弟元素的样式
                var a = navbar.getElementsByTagName('a');
                for (var i = 0, len = a.length; i < len; i++) {
                    var curClassName = a[i].className.trim();
                    var newClassName = '', k;
                    if ((k = curClassName.indexOf('active')) >= 0) {
                        /*var curArray = curClassName.split(' ');
                         curArray.forEach(function (item, index, array) {
                         if (item !== 'active') {
                         newClassName += ' ' + item;
                         }
                         });*/
                        newClassName = curClassName.slice(0, k) + curClassName.slice(k + 6);
                    }
                    a[i].className = newClassName;
                }
                //添加选中样式
                className += ' active';
                target.className = className.trim();
            }
        }
    }, false);
};
/**
 * jQuery实现navbar样式切换
 */
/*$(document).ready(function () {
 $('#navbar').on('click', 'li a', function (e) {
 $('#navbar a').each(function (item, index) {
 if ($(this).hasClass('active')) {
 $(this).removeClass('active');
 }
 });
 $(this).addClass('active');
 });
 });*/
