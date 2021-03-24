var gameState=0;
var bgImg;
var playerImg;
var pointImg;
var time=0;

function preload(){
  bg = loadImage("Images/bg.png");
  playerImg = loadImage("Images/character.png");
  pointImg = loadImage("Images/diamond.png");
  

}

function setup(){
  var canvas = createCanvas(700,700);

}

function draw(){
background(bg);
var player = createSprite(200,300,50,100);
player.addImage(playerImg);
player.scale=0.2;

  stroke(1);
  strokeWeight(5);
  textSize(25);
  text("Collect a total of 50 Diamonds within 60 seconds to win", 25,50);
  text("Gems taken: ",200,150);
  //image(playerImg,10,250,50,100);
  //image(pointImg,300,250,40,40);

  text("Time Counter: ",200,100);

  if(keyDown("right_arrow")) {
    player.x = player.x + 3;
    
  }
  if(keyDown("left_arrow")) {
    player.x = player.x - 3;
  }

  spawnGems();
  drawSprites();    
}

function spawnGems() {
  if(frameCount%100===0) {
    gem = createSprite(100,-10,50,50);
    gem.addImage(pointImg);
    gem.scale=0.1;
    gem.velocity.y = 10;
    gem.lifetime = 70;
    gem.x = Math.round(random(50,380))
  } 
}

