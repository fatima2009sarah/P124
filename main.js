function setup(){
    canvas = createCanvas(500 , 400);
    video = createCapture(VIDEO);
    canvas.position(660 , 125);
    video.size(500 , 400);
    video.position(80 ,125);
    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
   
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
  if (results > 0 ){
      console.log(results);
  }
}