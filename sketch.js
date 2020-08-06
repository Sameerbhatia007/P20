var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(50,90);
  weight=random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  collide(wall,car);  
  drawSprites();
}
function collide(ob1,ob2){
if(ob1.x - ob2.x < ob1.width/2 + ob1.width/2){
 ob1.velocityX = 0;
 ob2.velocityX = 0; 
 deformation = 0.5*weight*speed*speed/2250
  if(deformation < 100){
    car.shapeColor = "green";
  }
  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow";
  }
  if(deformation > 180){
    car.shapeColor = "red";
  }
}
}