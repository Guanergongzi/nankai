/**
 * Created by i on 2016/10/31.
 */
$(function(){
    var $list_hover4 = $('#list_hover4');
    var $list_hidden = $('#list_hidden');
    var timer = null;

    $list_hover4.mousemove = function () {
        //clearInterval(timer);
        $list_hidden.style.display = 'block';
        //sportFrame($list_hidden, 'height', 150);
    };
//    $list_hover4. = function () {
//        timer = setInterval(function () {
//            $list_hidden.style.display = 'none';
//            sportFrame($list_hidden, 'height', 20);
//        }, 1000);
//    };
//    $list_hidden.onmouseover = function () {
//        clearInterval(timer);
//        &list_hidden.style.display = 'block';
//    };
//    $list_hidden.onmouseout = function () {
//        timer = setInterval(function () {
//            $list_hidden.style.display = 'none';
//        }, 2000)
//    };
});