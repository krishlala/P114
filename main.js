img = 0;
function preload() {
    img = loadImage('https://i.postimg.cc/TwxRTjM4/mustache-removebg-preview.png');
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
        noseX = results[0].pose.nose.x-45;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function cam_off() {
    video.remove();
    document.getElementById("off").style.display="none";
    document.getElementById("on").style.display="inline-block";
}

function cam_on() {
    setup();
    document.getElementById("on").style.display="none";
    document.getElementById("off").style.display="inline-block";
}
