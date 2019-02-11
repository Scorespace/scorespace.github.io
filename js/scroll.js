$(document).ready(function(){
    $(document).bind('wheel', function(){
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if(scrollBottom > 0){
            $("#scrollarrow").stop().fadeIn();
        } else{
            $("#scrollarrow").stop().fadeOut();
        }
    });
});