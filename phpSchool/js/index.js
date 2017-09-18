/**
 * Created by Administrator on 2017/9/17.
 */
window.onload = function () {
    //头部导航栏样式切换
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
                        //newClassName = curClassName.slice(0, k) + curClassName.slice(k + 6);
                        newClassName = curClassName.replace(/\s*active/, '');
                    }
                    a[i].className = newClassName;
                }
                //添加选中样式
                className += ' active';
                target.className = className.trim();
            }
        }
    }, false);
    //学员祝福图片切换
    var studentsArr = [
        {
            url: './img/1.png',
            wishers: '解放路实际付款了师傅的说法看见对方会计师1'
        }, {
            url: './img/2.png',
            wishers: '解放路实际付款了师傅的说法看见对方会计师2'
        }, {
            url: './img/3.png',
            wishers: '解放路实际付款了师傅的说法看见对方会计师3'
        }, {
            url: './img/8.png',
            wishers: '解放路实际付款了师傅的说法看见对方会计师4'
        }
    ];
    var img = blessing.getElementsByTagName('img')[0];
    var span = blessing.getElementsByTagName('span')[0];
    var index = 0, len = studentsArr.length;
    //setInterval();
    /*setInterval(function () {
     if(index<len){
     //img.setAttribute('src', studentsArr[index].url);
     img.src=studentsArr[index].url;
     span.innerText=studentsArr[index].wishers;
     index++;
     }else{
     index=0;
     }
     }, 2000);*/
    //setTimeout();
    function Carousel(){
        if (index < len) {
            img.src=studentsArr[index].url;
            span.innerText=studentsArr[index].wishers;
            index++;
        }else{
            index=0;
        }
        setTimeout(arguments.callee,2000);
    }
    setTimeout(Carousel, 2000);
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
