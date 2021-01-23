const Engine=Matter.Engine; 
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine , world; 
var fairy , star , bg , starBody;
var fairypic , starpic , bgpic;
var music;

var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload()
{
   //preload the images here
   fairypic = loadAnimation("fairy1.png" , "fairy2.png");

   starpic = loadImage("star.png");

   bgpic = loadImage("starnight.png");

   music = loadSound("JoyMusic.mp3");
}

function setup() {
  var canvas = createCanvas(800, 750);
  engine= Engine.create(); 
  world= engine.world;
  music.play();

  bg = createSprite(400,350);
  bg.addImage(bgpic);

  fairy = createSprite(200 , 500);
  fairy.addAnimation ("fairy" , fairypic);
  fairy.scale = 0.2;
  fairy.velocityX = 0;
  
  star = createSprite(700,5);
  star.addImage("star" , starpic);
  star.scale = 0.3;
  star.visible = false;
  
  var star_Options = {
    isStatic:true
  }

  starBody = Bodies.circle(700,5,20 , star_Options);
  World.add(world , starBody);
  
  
  
}
function musicPLAY()
{
  if(gameState === PLAY)
  {
    music.play();

  }

}

function draw() {
  background("black");
  Engine.update(engine);
  
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  if(starBody.position.y > 470)
  {
    Matter.Body.setStatic(starBody , true);
  }

  if(fairy.x> 570)
  {
     fairy.velocityX = 0;

  }
  console.log(fairy.x);

  drawSprites();
}


function keyPressed()
{
  if(keyCode === LEFT_ARROW && gameState === PLAY)
  {
     fairy.velocityX = -4;

  }
  
  if(keyCode === RIGHT_ARROW && gameState === PLAY)
  {
     fairy.velocityX = 5;

  }

  if(keyCode === DOWN_ARROW && gameState === PLAY)
  {
    star.visible = true;
    Matter.Body.setStatic(starBody , false);

  }

  
  

}

function keyReleased()
{
  if(keyCode === LEFT_ARROW && gameState === PLAY)
  {
    fairy.velocityX = 0;

  }

  if(keyCode === RIGHT_ARROW && gameState === PLAY)
  {
    fairy.velocityX = 0;

  }


}