function setup() {
    const canvasWidth = windowWidth / 2
    const canvasHeight = windowHeight / 2
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("diagramSide");
}

function windowResized() {
    const canvasWidth = windowWidth / 2
    const canvasHeight = windowHeight / 2
    resizeCanvas(canvasWidth, canvasHeight)
}

function draw() {
    background("aqua");
}
