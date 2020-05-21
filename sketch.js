var roofRight,roofLeft;

function setup() {
  createCanvas(800,400);

  roofRight=createSprite(350,300,angle,30);
  roofleft=createSprite(450,300,angle,30);
}

function draw() {
  background(255,255,255); 
  
  roofRight.display();
  roofLeft.display();
}