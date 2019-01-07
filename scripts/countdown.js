var startJam = new Date('Jan 4, 2019 9:00 PM PST');
var endDev = new Date('Jan 7, 2019 9:00 PM PST')
var startRate = new Date('Jan 10, 2019 9:00 PM PST');
var startGamer = new Date('Jan 11, 2019 9:00 PM PST');
var endGamer = new Date('Jan 14, 2019 9:00 PM PST');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

var countdowns = document.getElementsByClassName("countdown");

function showTimeUntilJam() {
    var now = new Date();
    
    var distance = startJam - now;
    var endDevDistance = endDev - now;
    var rateDistance = startRate - now;
    var gamerStartDistance = startGamer - now;
    var gamerEndDistance = endGamer - now;
    
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    
    var endDevDays = Math.floor(endDevDistance / _day);
    var endDevHours = Math.floor((endDevDistance % _day) / _hour);
    var endDevMinutes = Math.floor((endDevDistance % _hour) / _minute);
    var endDevSeconds = Math.floor((endDevDistance % _minute) / _second);
    
    var rateDays = Math.floor(rateDistance / _day);
    var rateHours = Math.floor((rateDistance % _day) / _hour);
    var rateMinutes = Math.floor((rateDistance % _hour) / _minute);
    var rateSeconds = Math.floor((rateDistance % _minute) / _second);
    
    var gameStartDays = Math.floor(gamerStartDistance / _day);
    var gameStartHours = Math.floor((gamerStartDistance % _day) / _hour);
    var gameStartMinutes = Math.floor((gamerStartDistance % _hour) / _minute);
    var gameStartSeconds = Math.floor((gamerStartDistance % _minute) / _second);
    
    var gameEndDays = Math.floor(gamerEndDistance / _day);
    var gameEndHours = Math.floor((gamerEndDistance % _day) / _hour);
    var gameEndMinutes = Math.floor((gamerEndDistance % _hour) / _minute);
    var gameEndSeconds = Math.floor((gamerEndDistance % _minute) / _second);
    
    for(var countdown of countdowns){
        
        if (distance < 0) {
            
            if(endDevDistance < 0){
                
                if(rateDistance < 0){

                    if(gamerStartDistance < 0){

                        if(gamerEndDistance < 0){
                            countdown.innerHTML = "JAM OVER!";
                        } else{
                            countdown.innerHTML = "GAME TIME ENDS IN:<br> ";
                            countdown.innerHTML += gameEndDays + 'd ';
                            countdown.innerHTML += gameEndHours + 'hr ';
                            countdown.innerHTML += gameEndMinutes + 'm ';
                            countdown.innerHTML += gameEndSeconds + 's '; 
                        }

                    } else{
                        countdown.innerHTML = "GAME TIME STARTS IN:<br>";
                        countdown.innerHTML += gameStartDays + 'd ';
                        countdown.innerHTML += gameStartHours + 'hr ';
                        countdown.innerHTML += gameStartMinutes + 'm ';
                        countdown.innerHTML += gameStartSeconds + 's ';     
                    }

                } else{
                    countdown.innerHTML = "RATING STARTS IN:<br>";
                    countdown.innerHTML += rateDays + 'd ';
                    countdown.innerHTML += rateHours + 'hr ';
                    countdown.innerHTML += rateMinutes + 'm ';
                    countdown.innerHTML += rateSeconds + 's ';  
                }
                
            } else{
                
                countdown.innerHTML = "DEV TIME ENDS IN:<br>";
                countdown.innerHTML += endDevDays + 'd ';
                countdown.innerHTML += endDevHours + 'hr ';
                countdown.innerHTML += endDevMinutes + 'm ';
                countdown.innerHTML += endDevSeconds + 's ';  
            }
            
        } else{
                countdown.innerHTML = "JAM STARTS IN: ";
                countdown.innerHTML += days + 'd ';
                countdown.innerHTML += hours + 'hr ';
                countdown.innerHTML += minutes + 'm ';
                countdown.innerHTML += seconds + 's ';
        }
        
    }
        
}

timer = setInterval(showTimeUntilJam, _second);
