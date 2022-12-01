img="";
var status=false;
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error("error!");
    }
    console.log(results);
}
function draw(){
    image(img,0,0,500,400);
    fill("red");
    text("Dog",55,75);
    text("Cat",255,80);
    text("bowl",205,315);
    noFill();
    stroke("red")
    rect(45,60,200,300)
    rect(200,300,100,100)
    rect(240,65,200,310)
}