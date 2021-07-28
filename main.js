function preload() {
    
}

function draw() {
    image(video, 0, 0, 426.666666667, 350);

}

function setup() {
    canvas = createCanvas(426.666666667, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot() {
    save("myImg.png");
}