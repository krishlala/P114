img = 0;
function preload() {
    img = img.preload('https://i.postimg.cc/FRpT7v8Q/mustache.jpg');
}

function draw() {
    image(video, 0, 0, 426.666666667, 350);
    image(img, noseX, noseY, 90, 45);
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

var noseX =0;
var noseY =0;

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
