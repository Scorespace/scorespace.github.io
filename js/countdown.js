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
    
        var t = getTimeRemaining("03/01/19 21:00 PST")
        $(".countdown").html("<b>" + "JAM STARTS IN: " + t.days + t.hours + t.minutes + t.seconds + "</b>");

    }, 1000);
});

