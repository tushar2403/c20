
var FixedRect,MovingRect


function setup() {
  createCanvas(1200,800);
  FixedRect = createSprite(600, 400, 50, 80);
  FixedRect.shapeColor="green";
  MovingRect = createSprite(600, 400, 50, 80);
  MovingRect.shapeColor="green";
}

function draw() {
  background(0);  
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;
  if(MovingRect.x-FixedRect.x <FixedRect.width/2+MovingRect.width/2
    && FixedRect.x-MovingRect.x <FixedRect.width/2+MovingRect.width/2
    && MovingRect.y-FixedRect.y <FixedRect.height/2+MovingRect.height/2
    && FixedRect.y-MovingRect.y <FixedRect.height/2+MovingRect.height/2 ) {
      FixedRect.shapeColor="red";
      MovingRect.shapeColor="red";   
    }
    else{
      FixedRect.shapeColor="green";
      MovingRect.shapeColor="green";    
    }

  drawSprites();
}