function setup() {
  createCanvas(800,500);
}

function draw() {
  background(0,0,0); 
  
  rect(15, 100, 15, 300);
  rect(410, 100, 15, 300);
  rect(30, 190, 50, 210); 
  rect(360, 190, 50, 210); 
  rect(310, 200, 50, 200); 
  rect(80, 200, 50, 200); 
  rect(130, 250, 50, 150); 
  rect(260, 250, 50, 150);
  rect(180, 280, 80, 120);

  triangle(75, 210, 105, 160, 135, 210);
  triangle(365, 210, 335, 160, 305, 210); 
  triangle(180, 290, 225, 170, 260, 290);
  triangle(25, 190, 55, 130, 85, 190);
  triangle(415, 190, 385, 130, 355, 190); 
  
  drawSprites();
}
