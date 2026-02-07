function setup() {
    const canvasWidth = windowWidth / 2
    const canvasHeight = windowHeight / 2
    createCanvas(canvasWidth, canvasHeight);
}

function windowResized() {
    const canvasWidth = windowWidth / 2
    const canvasHeight = windowHeight / 2
    resizeCanvas(canvasWidth, canvasHeight)
}

function draw() {
    background("aqua");
}
