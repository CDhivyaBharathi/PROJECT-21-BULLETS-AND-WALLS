var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed=random(223,312)
  weight=random(30,52)
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
 
}

function draw() {
 

   
  background(0);
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
      
    }
    if(damage<10){
      wall.shapeColor = color(0,250,0);
      
    }
  }
   
  drawSprites();
}

function hasCollided(object1,object2){
   bulletRightEdge = object1.x + object1.width;
   wallLeftEdge = object2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
  
}