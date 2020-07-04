var movingRect,fixedRect
var object

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400,200,80,30);
  fixedRect = createSprite(200,200,80,30);
  object = createSprite(300,300,20,10);
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//  isTouching();

if(isTouching(movingRect,object)){
  movingRect.shapeColor = "red";
   object.shapeColor = "red"; 
}
else{
  // movingRect.shapeColor = "green";
  object.shapeColor = "green";
}

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red"; 
}
else{
  // movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  
  drawSprites();
}

