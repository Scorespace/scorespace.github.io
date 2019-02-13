$(document).ready(function(){
    $(document).bind('wheel', function(){
        if($(window).scrollTop() == 0){
            $("#scrollarrow").stop().fadeIn();
        } else{
            $("#scrollarrow").stop().fadeOut();
        }
    });
});