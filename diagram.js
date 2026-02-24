const storedValuesForDiagram = JSON.parse(sessionStorage.getItem("storedValuesString"));

function setup() {
    const canvasWidth = rowOrColumnWidth();
    const canvasHeight = storedValuesForDiagram.textSideHeight;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("diagramSide");
}

function windowResized() {
    let canvasWidth = rowOrColumnWidth();
    let canvasHeight = storedValuesForDiagram.textSideHeight;
    resizeCanvas(canvasWidth, canvasHeight);
}

function rowOrColumnWidth() {
    if (windowWidth <= 600) {
        return windowWidth;
    } else {
        return windowWidth / 2;
    }
}

function draw() {
    background("aqua");
}
