storedValuesForDiagram = JSON.parse(sessionStorage.getItem("storedValuesString"));

setInterval(updateStoredValuesForDiagram, 499);
setInterval(windowResized, 499);

function updateStoredValuesForDiagram() {
    storedValuesForDiagram = JSON.parse(sessionStorage.getItem("storedValuesString"));
}

function setup() {
    if (windowWidth <= 600) {
        var canvasWidth = windowWidth;
    } else {
        var canvasWidth = windowWidth / 2;
    }

    var canvasHeight = storedValuesForDiagram.textSideHeight;
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("diagramSide");
}

function windowResized() {
    if (windowWidth <= 600) {
        var canvasWidth = windowWidth;
    } else {
        var canvasWidth = windowWidth / 2;
    }

    var canvasHeight = storedValuesForDiagram.textSideHeight;

    resizeCanvas(canvasWidth, canvasHeight);
}


function draw() {
    background("white");
    strokeCap(ROUND);

    if (storedValuesForDiagram.H >= storedValuesForDiagram.r1) {
        var scaler = height * .75 / storedValuesForDiagram.H;
    } else {
        var scaler = width * .65 / storedValuesForDiagram.r1;
    }

    var centerOfCanvas = width / 2;

    var HLengthOnScreen = storedValuesForDiagram.H * scaler;
    //Point H is moved down from the top of the canvas by a safe amount
    var Hy1 = height * .10;
    //Point H is drawn later so it is on top of a line

    var r1LengthOnScreen = storedValuesForDiagram.r1 * scaler;
    var r1x1 = (width - r1LengthOnScreen) / 2;
    var r1x2 = r1x1 + r1LengthOnScreen;
    var r1y = Hy1 + HLengthOnScreen;

    strokeWeight(10);
    stroke("blue");
    line(r1x1, r1y, r1x2, r1y);

    var hLengthOnScreen = storedValuesForDiagram.h * scaler;
    var hy2 = r1y - hLengthOnScreen;

    line(centerOfCanvas, r1y, centerOfCanvas, hy2);

    var r2LengthOnScreen = storedValuesForDiagram.r2 * scaler;
    var r2x1 = (width - r2LengthOnScreen) / 2;
    var r2x2 = r2LengthOnScreen + r2x1;
    var r2y = r1y - hLengthOnScreen;

    line(r2x1, r2y, r2x2, r2y);

    stroke("orange");
    line(r1x1, r1y, centerOfCanvas, Hy1);

    stroke("green");
    point(centerOfCanvas, Hy1);

    for (let heightOfScale = 0, count = 0; heightOfScale < HLengthOnScreen; heightOfScale = heightOfScale + scaler, count++) {
        var xOfScale = width * .85;
        var newLiney1 = r1y - heightOfScale;
        var newLiney2 = newLiney1 - scaler;

        if (count % 2 == 1) {
            stroke(105, 105, 105);
        } else {
            stroke(211, 211, 211);
        }

        strokeCap(SQUARE);
        line(xOfScale, newLiney1, xOfScale, newLiney2);

        var textHeight = scaler * .20;
        var unitx = xOfScale + 15;
        var unity = newLiney2 + (textHeight / 2);

        textSize(textHeight);
        stroke("white");
        text(count, unitx, unity);
    }
}