function preload() {
    
}

function draw() {
    image(video, 0, 0, 426.666666667, 350);
}

function setup() {
    canvas = createCanvas(426.666666667, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(426.666666667, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save("myImg.png");
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
