$(document).ready(function(){
    if(window.matchMedia("(any-pointer: fine)").matches){
        if($(window).scrollTop() == 0){
            $('.navbar').slideDown();
        } else{
            $('.navbar').slideUp();
        }

        $(document).bind('wheel', function(){

            if($(window).scrollTop() == 0){
                $('.navbar').slideDown();
            } else{
                $('.navbar').slideUp();
            }

        });
    } else{
        $('.navbar').slideDown();
    }
});