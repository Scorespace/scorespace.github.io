$(document).ready(function(){
    $(document).bind('wheel', function(){
        if($(window).scrollTop() == 0){
            $("#scrollarrow").stop().fadeIn();
        } else{
            $("#scrollarrow").stop().fadeOut();
        }
    });
    
    $("#scrollarrow").click(function(){
        $("#scrollarrow").stop().fadeOut();
        $('.navbar').slideUp();
        $('html, body').animate({scrollTop: $(window).innerHeight() + "px"});
    });
});