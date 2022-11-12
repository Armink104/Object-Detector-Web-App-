status = "";
Kitchen_image = "";

function preload()
{
    Kitchen_image = loadImage("kitchen.jpg");
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
    objectDetector.detect(FKitchen_image, gotResult);
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
    image(Kitchen_image, 0, 0, 640, 420);
}