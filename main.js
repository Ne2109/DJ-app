song="";

function preload()
{
    song= loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video = createCapture(Video);
    video.hide();
}

function play()
{
    song.play();
}