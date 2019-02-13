$(document).ready(function(){
    $(document).bind('wheel', function(){
        if($(window).scrollTop() < 50){
            $("#scrollarrow").stop().fadeIn();
        } else{
            $("#scrollarrow").stop().fadeOut();
        }
    });
});