$(document).ready(function () {

    $("#keTop li").mouseenter(function () {

        $("#keTop li").eq($(this).index()).addClass("kem").siblings().removeClass('kem');
        $("#keTop span").eq($(1).index(this)).addClass("kel").siblings().removeClass('kel');

    });

    $("#keTop li").mouseleave(function () {

        $("#keTop li").eq($(this).index()).addClass("ken").siblings().removeClass('ken');
        $("#keTop span").eq($(1).index(this)).addClass("kej").siblings().removeClass('kej');

    });

    $('#liuLi2').hover(function(){
        $('.liu-fb').css('display','block');
    },function(){
        $('.liu-fb').css('display','none');
    });
});
