// Tool for creating your own font

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  background(80);
  textSize(textS);

  textFont("Helvetica"); // !!

  // insert letter, draw it until len ~ 100, click, copy array from console
  text("A", 0, 800); // !!

  circle(origin.x, origin.y, 50);
}

const origin = { x: 330, y: 400 }; // Adjust origin !!
const textS = 1100;
var listOfPoints = [];
let counter = 0;

function draw() {
  circle(mouseX, mouseY, 50);
}

function mouseMoved() {
  counter++;
  if (counter % 5 == 0) {
    let newPoint = {
      x: round((mouseX - origin.x) / 350, 1),
      y: round((mouseY - origin.y) / 350, 1),
    };

    console.log("length: " + listOfPoints.length);

    if (!listOfPoints.includes(newPoint)) listOfPoints.push(newPoint);
  }
}

function mouseClicked() {
  console.log("length: " + listOfPoints.length);
  console.log(JSON.stringify(listOfPoints, 4));
}
