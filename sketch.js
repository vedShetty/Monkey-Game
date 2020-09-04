var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){ 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(65,300,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,340,500,15); 
  ground.velocityX = -4;
 
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  score = 0;
  
}


function draw() {
  background("LIGHTBLUE");
  
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+ score, 100,50);
  
  ground.x = ground.width /2;
  
  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y>=295){
    monkey.velocityY = -10;
  }
  
 monkey.velocityY = monkey.velocityY + 0.4;
  
  spawnBanana();
  spawnObstacle();
  
  drawSprites();
}

function spawnBanana() {
  if (frameCount%100===0){
    banana = createSprite(400,100,40,10);
    banana.velocityX=-4; 
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y= Math.round(random(170,250));
    banana.lifetime=100;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacle(){
  if (frameCount%170===0){
    obstacle = createSprite(400,305,40,10);
    obstacle.velocityX=-4 ; 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    //obstacle.y= Math.round(random(170,250));
    obstacle.lifetime=100;
    
    obstacleGroup.add(obstacle);
  }
}




