/**
 * Created by baby on 2017/1/9.
 */

$(function(){
    //点击music DIV 切换隐藏和显示
    $(".music").click(function(event) {
        $(".music img:eq(0)").toggle();
        $(".music img:eq(1)").toggleClass('cur');
        if($(".music img:eq(1)").hasClass("cur")){
            $("audio")[0].play();
        }else {
            $("audio")[0].pause();
            //$("audio")[0].currentTime = 0;
        }
    });
    var timer = null;
    var swiper = new Swiper(".swiper-container",{
        direction: 'vertical',   //切换方向   水平(horizontal)或垂直(vertical)
        autoplay : 5000,//z设置自动播放
        grabCursor : true,//设置鼠标移上样式
        mousewheelControl : true,//鼠标滚轮滑动
        onInit: function(swiper){                     //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper);           //隐藏动画元素
            swiperAnimate(swiper);                    //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);                //每个slide切换结束时也运行当前slide动画
            console.log(swiper.activeIndex);
            if(swiper.activeIndex == 0){
                $(".s1").addClass("current");
            }else {
                $(".s1").removeClass("current");
            }
           // clearTimeout(timer)
           //timer = setTimeout(function(){
           //    if(swiper.activeIndex == 0){
           //        $(".s1").addClass("current");
           //    }else {
           //        $(".s1").removeClass("current");
           //    }
           //},1000)
        },
    })
    //给Img添加类
    $(".swiper-wrapper").find('img').addClass('ani');
    /*给 s1里面的图片添加动画类*****************************/
    $(".s1 img:first").attr({
        "swiper-animate-effect": 'zoomIn',
        "swiper-animate-duration": '2s',
        "swiper-animate-delay":"0s"
    })
    $(".s1 img:eq(1)").attr({
       "swiper-animate-effect": 'zoomIn',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"0s"
    })
    //$(".s1 img:eq(2)").attr({
    //    "swiper-animate-effect": 'bounceInUp',
    //    "swiper-animate-duration": '2s',
    //    "swiper-animate-delay":".2s"
    //})
    $(".s1 img:eq(3)").attr({
        "swiper-animate-effect": 'bounceInDown',
        "swiper-animate-duration": '2s',
        "swiper-animate-delay":".2s"
    })
    /*给S2添加动画类***************************/
    $(".s2 div:first").attr({
        "swiper-animate-effect": 'slideInRight',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"0s"
    })
    $(".s2 div:last").attr({
        "swiper-animate-effect": 'slideInUp',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"1s"
    })
    /*给S3添加动画类***************************/
     $(".s3_title").attr({
        "swiper-animate-effect": 'slideInLeft',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"0s"
    })
    $(".s3_content").attr({
        "swiper-animate-effect": 'slideInRight',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"0s"
    })
    $(".s3_pic").attr({
        "swiper-animate-effect": 'slideInUp',
       "swiper-animate-duration": '2s',
       "swiper-animate-delay":"0s"
    })
    /*给S4添加动画类***************************/
    $(".s4 img").attr({
        "swiper-animate-effect": 'zoomIn',
        "swiper-animate-duration": '1s',
        "swiper-animate-delay":"0s"
    })
    $(".s4 h3").attr({
        "swiper-animate-effect": 'slideInDown',
        "swiper-animate-duration": '2s',
        "swiper-animate-delay":"0s"
    })
    $(".s4 p").attr({
        "swiper-animate-effect": 'slideInUp',
        "swiper-animate-duration": '2s',
        "swiper-animate-delay":"0s"
    })
    /*给S4添加动画类***************************/
    $(".s5 img:eq(0)").attr({
        "swiper-animate-effect": 'slideInUp',
        "swiper-animate-duration": '1s',
        "swiper-animate-delay":"1.5s"
    })
    $(".s5 img:eq(1)").attr({
        "swiper-animate-effect": 'bounceInRight',
        "swiper-animate-duration": '1.5s',
        "swiper-animate-delay":"2.5s"
    })
    $(".s5 img:eq(2)").attr({
        "swiper-animate-effect": 'zoomIn',
        "swiper-animate-duration": '1.5s',
        "swiper-animate-delay":"0s"
    })
    $(".speak1").attr({
        "swiper-animate-effect": 'zoomIn',
        "swiper-animate-duration": '2s',
        "swiper-animate-delay":"2.5s"
    })
    $(".speak2").attr({
        "swiper-animate-effect": 'zoomIn',
        "swiper-animate-duration": '1.5s',
        "swiper-animate-delay":"3s"
    })















    if(swiper.activeIndex == 0)
    {

        $(".swiper-slide").eq(0).addClass("current");
    }else {

        $(".swiper-slide").eq(0).removeClass("current");

    }




















})
