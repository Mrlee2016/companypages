$(function(){
    var picCount = $("#idContainer2").attr("picCount");
    slider.init("idContainer2","idSlider2",picCount);

    $(window).bind("resize",function() {
        slider.resize();
    });
    $(window).bind("orientationchange",function(){
        slider.orientationchange();
    });
});