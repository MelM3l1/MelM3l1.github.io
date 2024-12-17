function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(0); // black
  
  // Face
  fill(255, 255, 0); // yellow
  noStroke(0); // turn off stroke
  ellipse(250, 250, 300, 300); // Pac-Man's face
  
  // Mouth: Adjust the mouth angle based on mouseY
  let mouthAngle = map(mouseY, 0, height, 0, PI / 1.5); // Mapping mouseY to the mouth's angle range
  
  fill(0); // mouth
  arc(250, 250, 300, 300, mouthAngle, TWO_PI - mouthAngle, PIE); // Draw the mouth as an arc
  
  // Eye
  fill(0); // black
  ellipse(290, 160, 44, 44); // Eye of Pac-Man
}
