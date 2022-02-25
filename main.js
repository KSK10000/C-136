status1="";
function preload(){

}
function draw(){
image(video, 0, 0, 450, 450);
}
function setup(){
canvas=createCanvas(450, 450);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects....";
}
function modelloaded(){
    console.log("Your model is successfully loaded");
    status1=true;
}