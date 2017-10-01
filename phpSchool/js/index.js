/**
 * Created by Administrator on 2017/9/17.
 */
/*global window:true,document:true,setTimeout:true,$:true*/
/*jslint plusplus:true*/
window.onload = function () {
    'use strict';
    //学员祝福图片切换
    var studentsArr, blessing, img, span, index, len;
    studentsArr = [
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
    blessing = document.getElementById('blessing');
    function carousel() {
        if (index < len) {
            img.src = studentsArr[index].url;
            span.innerText = studentsArr[index].wishers;
            index++;
        } else {
            index = 0;
        }
        setTimeout(carousel, 2000);
    }

    if (blessing) {
        img = blessing.getElementsByTagName('img')[0];
        span = blessing.getElementsByTagName('span')[0];
        index = 0;
        len = studentsArr.length;
        setTimeout(carousel, 2000);
    }

    /**
     * 侧边客服电话
     */
    var asideLeft, asideRight, isSpread, isFold;
    asideLeft = document.getElementById('asideLeft');
    asideRight = document.getElementById('asideRight');
    isSpread = document.getElementById('isSpread');
    isFold = document.getElementById('isFold');
    asideLeft.addEventListener('click', function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement, id;
        if (target.nodeType === 1 && target.nodeName === 'DIV') {
            id = target.id;
            if (id === 'isSpread') {
                //this->asideLeft
                this.firstElementChild.style.display = 'none';
                isFold.style.display = 'block';
                asideRight.style.display = 'block';
            } else if (id === 'isFold') {
                this.lastElementChild.style.display = 'none';
                isSpread.style.display = 'block';
                asideRight.style.display = 'none';
            }
        }
    }, false);
    /*$('#asideLeft').on('click', 'div', function (e) {
     var target = e.target;
     if (target.id === 'isSpread') {
     $(this).hide();
     $('#isFold').show();
     $('#asideRight').show(400);
     } else if (target.id === 'isFold') {
     $(this).hide();
     $('#isSpread').show();
     $('#asideRight').hide(400);
     }
     });*/
};

