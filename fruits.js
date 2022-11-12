status = "";
Fruits_image = "";

function preload()
{
    Fruits_image = loadImage("fruits.jpg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(Fruits_image, gotResult);
}

function gotResult(error, results) 
{ 
    if (error) {
    console.log(error);
    }
    console.log(results);
}

function draw() 
{ 
    image(Fruits_image, 0, 0, 640, 420); 
}