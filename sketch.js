var rect1,rect2;
var box1,box2,box3,box4,box5;

function setup() {
  createCanvas(800,500);

  rect1 = createSprite(130,300,10,400);
  rect2 = createSprite(750,300,10,400);

  box1 = createSprite(200,335,80,330);
  box2 = createSprite(320,360,130,280);
  box3 = createSprite(440,335,80,330);
  box4 = createSprite(560,360,130,280);
  box3 = createSprite(680,335,80,330);

  triangle();
}

function draw() {
  background(0,0,0); 
  
  drawSprites();
}

triangle(x1,y1,x2,y2,x3,y3);
x1,y1 = first point;
x2,y2 = second point;
x3,y3 = third point;
