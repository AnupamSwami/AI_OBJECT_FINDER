status = "" ;
object = "" ;
objects = [] ;

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
    if(status != "") {
        objectDetector.detect(video , gotResult) ;
        for(i = 0 ; i < objects.length ; i++ ) {
            fill('#0000FF') ;
            stroke('#0000FF') ;
            noFill() ;
            percent = floor(objects[i].confidence * 100) ;
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15) ;
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height) ;
            if(objects[i].label = object) {
                video.stop() ;
                objectDetector.detect(gotResult) ;
                document.getElementById("status").innerHTML = object + " Found" ;
                var synth = window.speechSynthesis ;
                speak_data = object + " Found " ;
                var utterThis = new SpeechSynthesisUtterance(speak_data) ;
                synth.speak(utterThis) ;
            }
        }
    }
}

function gotResult(error , results) {
    if(error) {
        console.error(error) ;
    }
    console.log(results) ;
    objects = results ;
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