var block
var block2

function setup() {
  createCanvas(1000, 600);
  block = createSprite(380, 300, 100, 100);
  block2 = createSprite(200, 200, 200, 200);
  block.shapeColor = "teal"
  block2.shapeColor = "yellow"
  block.velocityX = -5
  block2.velocityX = 5
  block.velocityY = -3
  block2.velocityY = 3
}

function draw() {
  background("black");
  //block.x = World.mouseX;
  //block.y = World.mouseY;
  if(block.x -block2.x < block2.width/2 + block.width/2
    && block2.x -block.x < block2.width/2 + block.width/2
    && block.y -block2.y < block2.height/2 + block.height/2
    && block2.y -block.y < block2.height/2 + block.height/2){
    block.shapeColor = "red"
    block2.shapeColor = "cyan"
  }
  else{
    block.shapeColor = "teal"
    block2.shapeColor = "yellow"
  }
  if(block.x -block2.x < block2.width/2 + block.width/2
    && block2.x -block.x < block2.width/2 + block.width/2){
      block.velocityX = block.velocityX * (-1)
      block2.velocityX = block2.velocityX * (-1)
    }
  if(block.y -block2.y < block2.height/2 + block.height/2
      && block2.y -block.y < block2.height/2 + block.height/2){
        block.velocityY = block.velocityY * (-1)
        block2.velocityY = block2.velocityY * (-1)
      }
  drawSprites();
}