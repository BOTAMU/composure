

$(document).ready(function() {
	
/***************************************主图轮播*******************************************/
	//点击左右箭头切换大图
 	var hImg = $(".home_carouse .home_img").length-1;
	var hNum = 0;
 	$(".home_change .top_prev").click(function(){
		(hNum-1) < 0 ? ho = hImg : ho = hNum-1;
		bSwitch(hNum,ho);
		hNum = ho;
	});
	$(".home_change .down_next").click(function(){
		(hNum+1) > hImg ? ho = 0 : ho = hNum+1;
		bSwitch(hNum,ho);
		hNum = ho;
	});
	function bSwitch(hNum,ho){
		$(".home_carouse .home_img:eq("+hNum+")").fadeOut();
		$(".home_carouse .home_img:eq("+ho+")").fadeIn();
	}

	//定时器轮播，鼠标移入暂停，移出继续轮播
	$(function(){
		var switchTime;
		$(".home_carouse").hover(function(){
			clearInterval(switchTime);
		},function(){
			switchTime = setInterval(function(){
				(hNum+1)>hImg?ho=0:ho=hNum+1;
				bSwitch(hNum,ho);
				hNum=ho;
			},3000);
		}).trigger("mouseleave");
	});

    // //获取所有的图片li
    // var allImg = document.getElementById('carouseImg').getElementsByTagName('li');
    //
    // //获取所有信息info的li
    // var oInfo = document.getElementById('info_other').getElementsByTagName('li');
    //
    // //获取上一页
    // var topPrev = document.getElementById('topPrev');
    // //获取下一页
    // var downNext = document.getElementById('downNext');
    //
    // //显示当前下标(当前图片)
    // var index = 0;
    //
    // //change函数,作用是循环显示与隐藏
    // function change() {
	 //    for (var i = 0; i < allImg.length; i++) {
	 //        if (i == index) {
	 //            allImg[i].className = 'act';
	 //            oInfo[i].className = 'info';
	 //        } else {
	 //            allImg[i].className = '';
	 //            oInfo[i].className = '';
	 //        }
	 //    }
    // }
    //
    // //img()函数,作用是判断是否是最后一张图片
    // function img() {
	 //    index++;//每循环完一次自加1,作用切换第i张图片
	 //    if (index == allImg.length)// 判断是否是最后一张图片li，如果已经到达最后一张，则返回显示第一张
	 //    {
	 //        index = 0;//0为第一张图片
	 //    }
    // }
    //
    // //给左箭头添加点击事件
    // topPrev.onclick = function () {
	 //    index--;
	 //    if (index == -1) {
	 //        index = allImg.length - 1;
	 //    }
	 //    change();
    // };
    //
    // //给右箭头添加点击事件
    // downNext.onclick = function () {
    //     img();
    //     change();
    // };
    
/***************************************删除广告*******************************************/
    //获取广告id
    var advert = document.getElementById('advert');
    //获取关闭close的id
    var close = document.getElementById('close');

    close.onclick = function () {
        advert.style.display = 'none';
    };
/***************************************our services轮播***********************************/ 
	
/***************************************Store Featured Items轮播***************************/

	//获取bantLeft下所有的ul
	var bantLeft = document.getElementById('bantLeft');
	var allUl = bantLeft.getElementsByTagName('ul');
	//获取上一页与下一页
	var imgPrev = document.getElementById('imgPrev');
	var imgNext = document.getElementById('imgNext');

	var lhn = allUl.length-1, count = 0;

	imgPrev.onclick = function(){
		(count - 1) < 0 ? lh = lhn : lh = count - 1;
		lhMove(count);
		count = lh;
	};
	imgNext.onclick = function(){
		(count + 1) > lhn ? lh = 0 : lh = count + 1;
		lhMove(count);
		count = lh;
	};
	function lhMove(count) {
		$("#bantLeft").stop().css('left',-1200*count)
	}

	// var lhn = $("#bantLeft ul").length , count = 0;
	//
	// $('#imgPrev').click(function(){
	// 	count = (count > 0) ? (--count) : (lhn - 1);
	// 	lhnChange(count);
	// });
	// $('#imgNext').click(function(){
	// 	count = (count < lhn - 1) ? (++count) : 0;
	// 	lhnChange(count);
	// });
	// function lhnChange(num) {
	// 	$("#bantLeft").stop().animate({left: -1200 * num},1000);
	// }

/***************************************Recent Projects特效********************************/
    //标题导航title_nav
	var titleNav = document.getElementById('titleNav');
	var navLi = titleNav.getElementsByTagName('li');
	var comeBack = document.getElementById('comeBack');
	var backUl = comeBack.getElementsByTagName('ul');

	
	for(var h=0; h<navLi.length; h++){
		var lau = 0;
		navLi[h].lau = h;
		navLi[h].onmouseover = function(){
			for(var f=0; f<navLi.length; f++){
				if(f == this.lau){
					navLi[f].className = 'title_nav_active';
					backUl[f].style.display = 'block';
				}else{
					navLi[f].className = '';
					backUl[f].style.display = 'none';
				}
			}
		}
	}
    //显示隐藏
    $('.carouse_same_info').hover(
            function () {
                $(this).css('bottom', '0');
                $(this).css('opacity','.8');
            },
            function () {
                $(this).css('bottom', '-169px');
                $(this).css('opacity','1');
            }
    );
/***************************************Recent Posts特效*******************************************/
	var cas = $("#banCase li").length , cmd = 0;

	$("#nerPrev").click(function(){
		cmd = (cmd > 0) ? (--cmd) : (cas - 1);
		banChange(cmd);
	});
	$("#nerNext").click(function(){
		cmd = (cmd < cas - 1) ? (++cmd) : 0;
		banChange(cmd);
	});
	function banChange(num) {
		$("#banCase").stop().animate({left: -1118 * num},1000);
	}
});