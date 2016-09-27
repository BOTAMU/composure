/**
 * Created by Administrator on 2016/9/17.
 */
$(function () {
    /***************************************主导航样式*****************************************/
    $('#keDl a').click(function(){
        $("#keDl a").eq($(this).index()).addClass("ke-span").siblings().removeClass('ke-span');
    });
    /***************************************主图轮播*******************************************/
    //点击左右箭头切换大图
    var hImg = $(".home_carouse .home_img").length - 1;
    var hNum = 0;
    $(".home_change .top_prev").click(function () {
        (hNum - 1) < 0 ? ho = hImg : ho = hNum - 1;
        bSwitch(hNum, ho);
        hNum = ho;
    });
    $(".home_change .down_next").click(function () {
        (hNum + 1) > hImg ? ho = 0 : ho = hNum + 1;
        bSwitch(hNum, ho);
        hNum = ho;
    });
    function bSwitch(hNum, ho) {
        $(".home_carouse .home_img:eq(" + hNum + ")").fadeOut();
        $(".home_carouse .home_img:eq(" + ho + ")").fadeIn();
    }

    //定时器轮播，鼠标移入暂停，移出继续轮播
    $(function () {
        var switchTime;
        $(".home_carouse").hover(function () {
            clearInterval(switchTime);
        }, function () {
            switchTime = setInterval(function () {
                (hNum + 1) > hImg ? ho = 0 : ho = hNum + 1;
                bSwitch(hNum, ho);
                hNum = ho;
            }, 3000);
        }).trigger("mouseleave");
    });

    /***************************************广告关闭*******************************************/
    //获取广告id
    var advert = document.getElementById('advert');
    //获取关闭close的id
    var close = document.getElementById('close');

    close.onclick = function () {
        advert.style.display = 'none';
    }
});