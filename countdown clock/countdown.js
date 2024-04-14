var countDownDate = new Date("April 17, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));
    
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    if(distance < 0){
        clearInterval(x);
    document.getElementById("days").innerHTML = 0o0;
    document.getElementById("hours").innerHTML = 0o0;
    document.getElementById("minutes").innerHTML = 0o0;
    document.getElementById("seconds").innerHTML = 0o0;
    }
   
    
},1000);

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})