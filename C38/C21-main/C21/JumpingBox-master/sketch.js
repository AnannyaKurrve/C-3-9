var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,1000);
    rectMode(CENTER);
   // engine = Engine.create();
	//world = engine.world;
 // Engine.run(engine);

    //score

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb("gold");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,580,350,30);
    block4.shapeColor = rgb(0,100,0);

   // block5=createSprite(1000,)

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   ball.velocityX = 4;
   ball.velocityY = 9;

    score = 0;
}


function draw() {
   // background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = rgb(255,128,0);
        //ball.velocityX = 10;
       // ball.velocityY = 10;
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
        music.play();
    }


    background("blue");
    textSize(20);
    fill(255);
    text("Score: "+ score, 500,40);
    drawSprites();

        

    if (ball.isTouching(block1)||ball.isTouching(block2)||ball.isTouching(block3)||ball.isTouching(block4)){
     score = score + Math.round(getFrameRate()/60);
      //if(score >= 0){
       // edges.velocityX = -6;
      }
    
     // if(keyDown("space") && ball.y >= 139) {
        //ball.velocityY = -12;
    //  }
    
     // ball.velocityY = ball.velocityY + 0.8
    
      if (edges.x < 0){
        edges.x = edges.width/2;
      }
    
      ball.collide(edges);
      
    }
    
     if (gameState === END ) {
      ball.velocityY = 0;
      ball.velocityX=0;


      
          rectMode(CENTER);
          background(0);
          ball.x= ball.position.x 
          ball.y= ball.position.y 
         
         
        }
      

            if(keyDown(LEFT_ARROW)){
             // ball.createSprite(random(20,750),100, 40,40);
            //  ball.shapeColor = rgb(255,255,255);
            ball.x=ball.x-5;
            // ball.velocityX=-10;
             // writeHeight(-1,0);
            }
            else if(keyDown(RIGHT_ARROW)){
             // ball.createSprite(random(20,750),100, 40,40);
             // ball.shapeColor = rgb(255,255,255);
             //ball.velocityX=10;
             ball.x=ball.x-5;
              //writeHeight(1,0);
            }
            else if(keyDown(UP_ARROW)){
              //ball.createSprite(random(20,750),100, 40,40);
              //ball.shapeColor = rgb(255,255,255);
            // ball.velocityY=10;
            ball.y=ball.y-5;
              //writeHeight(0,+1);
            }
            else if(keyDown(DOWN_ARROW)){
              //ball.createSprite(random(20,750),100, 40,40);
             // ball.shapeColor = rgb(255,255,255);
              //ball.velocityX=-10;
              ball.x=ball.x-5;
              //writeHeight(0,-1);
            }

           
         // }
       // }

      //}
   // }
  

  


