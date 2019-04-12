function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    
    return {
        'total': t,
        'days': days + "d ",
        'hours': hours + "h ",
        'minutes': minutes + "m ",
        'seconds': seconds + "s "
    };
}

$(document).ready(function(){
    setInterval(function(){
        var devStart = getTimeRemaining("05/03/19 21:00 PST")
        var devEnd = getTimeRemaining("05/06/19 21:00 PST")
        
        var rateEnd = getTimeRemaining("05/09/19 21:00 PST")
        
        var gameStart = getTimeRemaining("05/10/19 21:00 PST")
        var gameEnd = getTimeRemaining("05/12/19 21:00 PST")
        
        if(gameEnd.total < 0){
            //Jam ended
            $(".countdown").html("<b>THE JAM HAS ENDED!</b>");
        } else if(gameStart.total < 0){
            //Gamers end when?
            $(".countdown").html("<b>" + "GAMERS END IN: " + gameEnd.days + gameEnd.hours + gameEnd.minutes + gameEnd.seconds + "</b>"); 
        } else if(rateEnd.total < 0){
            //Rating ends when?
            $(".countdown").html("<b>" + "RATING ENDS IN: " + gameStart.days + gameStart.hours + gameStart.minutes + gameStart.seconds + "</b>");  
        } else if(devEnd.total < 0){
            //Rating starts when?
            $(".countdown").html("<b>" + "RATING STARTS IN: " + rateEnd.days + rateEnd.hours + rateEnd.minutes + rateEnd.seconds + "</b>");  
        } else if(devStart.total < 0){
            //Dev ends when?
            $(".countdown").html("<b>" + "DEV TIME ENDS IN: " + devEnd.days + devEnd.hours + devEnd.minutes + devEnd.seconds + "</b>");  
        } else{
            //Jam starts when?
            $(".countdown").html("<b>" + "JAM STARTS IN: " + devStart.days + devStart.hours + devStart.minutes + devStart.seconds + "</b>"); 
        }
    }, 1000);
});

