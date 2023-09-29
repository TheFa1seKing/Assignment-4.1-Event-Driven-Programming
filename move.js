// global variables
var intervalID = 0;
var change =100;

function start()
{
    var i = 0;
    var image = document.getElementById("memeImage");
    intervalID = setInterval(function() 
    {
        image.style.left = change+"px"; //By adding to the left the image will move right
        image.style.top = change+"px";//By adding to the top the image will move down
       document.getElementById("msg").innerHTML = " X = " + image.style.left+ " y = " + image.style.top;
      change +=2;  // change = change + 5
    },50);
    document.getElementById( "start").disabled = true; // this is to make it so only one butten can be pressed at a time
    document.getElementById("stop").disabled = false;// this is to make it so only one butten can be pressed at a time
}

function stop()
{
    clearInterval(intervalID);
    document.getElementById("start").disabled = false;// this is to make it so only one butten can be pressed at a time
    document.getElementById("stop").disabled = true;// this is to make it so only one butten can be pressed at a time
}