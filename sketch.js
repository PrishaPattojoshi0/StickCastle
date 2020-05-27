var rect1,rect2;
var box1,box2,box3;

function setup() {
  createCanvas(800,500);

  rect1 = createSprite(230,300,10,400);
  rect2 = createSprite(570,300,10,400);

  box1 = createSprite(300,335,90,330);
  box2 = createSprite(400,340,90,320);
  box3 = createSprite(500,335,90,330);
}

function draw() {
  background(0,0,0); 
  
  drawSprites();
}