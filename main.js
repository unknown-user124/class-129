song="";
rightWristX = 0; rightWristY = 0;
 leftWristX = 0; leftWristY = 0;

function preload(){
    song=loadSound("music.mp3");

}
function play (){
    song.play();
}
function stop(){
    song.stop();
}




function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded); poseNet.on('pose', gotPoses);
}


function draw(){
    image(video , 0 ,0,600,500);

    fill("#FFC0CB");
    stroke("#FFC0CB")
    
    if(scoreLeftWrist>0.2)
    {

    circle(leftWristX , leftWristY , 20);
    InNumberleftWristY=number(leftWristY);
    remive_decimals=floor(InNumberleftWristY);
    leftWristY_divide_1000=remove_decimals/1000;
    volume=leftWristY_divide_1000 * 2;
    document.getElementById("volume").innerHTML="Volume="+volume;
    song.setVolume(volume);
    }
}
function gotPoses(results) { 
    if(results.length > 0) {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
rightWristX = results[0].pose.rightWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
 leftWristX = results[0].pose.leftWrist.x;
 leftWristY = results[0].pose.leftWrist.y; 
 console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY); } 
}

function modelLoaded() {
    console.log('PoseNet is intialized');
}