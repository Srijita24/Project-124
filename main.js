function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(90, 220);

    canvas = createCanvas(550,550);
    canvas.position(650,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#000099')
}