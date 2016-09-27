/**
 * Created by Administrator on 2016/9/17.
 */

$(function () {
    $('.hu-box-wor').hover(function () {
            $(this).addClass('font-weight')
        },
        function () {
            $(this).removeClass('font-weight')
        })
});

$(function () {
    $('.hu-box-info').hover(function () {
        $(this).addClass('font-weight');
        $(this).css("box-shadow","2px 2px 10px #ccc");
    }, function () {
        $(this).removeClass('font-weight');
        $(this).css("box-shadow","none");
    }
   )
});