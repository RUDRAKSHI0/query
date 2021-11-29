var bunny,bunny_walking;
var ground,groundImage;

function preload() {
  bunny_walking = loadAnimation("bunny.png","bunny2.png")
  groundImage = loadImage("background.png")
}
function setup() {
  createCanvas(800,400);
  bunny = createSprite(50,160,20,50);
  bunny.addAnimation("walking",bunny_walking);

  ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}