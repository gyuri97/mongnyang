$(function () {


    $(".gnb>li").mouseenter(function () {
        $(".sub").stop().slideDown();
        $(".sub_menu").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_menu").stop().slideUp();
    });
});