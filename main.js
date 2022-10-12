x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_sqr = "";
draw_tri = "";


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML+ "listening...";
    recognition.start()
}

recognition.onresult = function(event)  {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "speech has been recognized as: " + content;
    if(content=="circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing circle..."
        draw_circle = "set";
    }

    if(content=="rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing rectangle..."
        draw_rect = "set";
    }

    if(content=="square")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing square..."
        draw_sqr= "set";
    }
    
    if(content=="triangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "drawing triangle..."
        draw_tri= "set";
    }
}

function setup()
{
    canvas = createCanvas(900,600);
}

function draw(){
if(draw_circle=="set")
{
    radius = Math.floor(Math.random() * 100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML = "circle is drawn";
    draw_circle = "";
}
if(draw_rect=="set")
{
    radius = Math.floor(Math.random() * 100);
    rect(x,y,70,50);
    document.getElementById("status").innerHTML ="rectangle is drawn.";
    draw_rect = "";
}
if(draw_sqr=="set")
{
    radius = Math.floor(Math.random() * 100);
    sqr(x,y,50,50);
    document.getElementById("status").innerHTML ="square is drawn"
    draw_sqr = "";
}
if(draw_tri=="set")
{
    radius = Math.floor(Math.random() * 100);
    tri(x,y,b= 30,h = 50);
    document.getElementById("status").innerHTML =
    draw_tri = "";
}
}