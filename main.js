status = "" ;
object = "" ;

function preload() {

}

function setup() {
    canvas = createCanvas(450 , 350) ;
    canvas.position(460,70) ;
    video = createCapture(VIDEO) ;
    video.hide() ;
}

function draw() {
    image(video , 0 , 0 , 450 , 350) ;
}

function start() {
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Objects" ;
    object = document.getElementById("object").value ;
}

function modelLoaded() {
    console.log("Model Loaded!") ;
    status = true ;
}