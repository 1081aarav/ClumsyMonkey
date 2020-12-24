
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,340,50,50);
  monkey.addAnimation("jumping", monkey_running);
  //For adding animations, declare a variable in the preload function
  monkey.scale=0.2;
  ground=createSprite(300,400,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  //. monkey.collide(ground);
}
function draw() {
  background("white");
  text("Survival_Time:"+ score,300, 100, 15, 15);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY= -12;
    
  }
   if(monkey.y<=150){
    monkey.velocityY=8;
  }
  monkey.collide(ground);
  if(frameCount%5===0){
    score+=5;
  }
  drawBananas();
  drawObstacles();

  drawSprites();
}
function drawBananas(){
  if(frameCount%80==0){
    bananaImage=createSprite(500,Math.round(random(120, 200)),50,50);
    bananaImage.addImage(bananaImg);
    bananaImage.scale=0.1;
    bananaImage.collide(ground);
    bananaImage.velocityX=-8;
    bananaImage.lifetime=60;
  }
}
function drawObstacles(){
  if(frameCount%300===0){
     obstacleImage=createSprite(550,400,50,50);
    obstacleImage.addImage(obstacleImg);
    obstacleImage.scale=0.2;
    obstacleImage.collide(ground);
    obstacleImage.velocityX=-10;
    obstacleImage.lifetime=60;
  }
} 
  

  



