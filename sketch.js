var PLAY = 1;
var LOADING = 1;
var END = 0;
var gameState = PLAY;
var mainCar,mainCarImg;
var car1,car1Img;
var car2,car2Img;
var car3,car3Img;
var car4,car4Img;
var car5,car5Img;
var car6,car6Img;
var car7,car7Img;
var car8,car8Img;
var car9,car9Img;
var car10,car10Img;
var car11,car11Img;
var road,roadImg;
var score = 0;
var carHorn;
var gameOver,gameOverImg;
var logo,logoImg;

function preload(){
mainCarImg=loadImage("car0.png");
car1Img=loadImage("car1.png");  
car2Img=loadImage("car2.png");  
car3Img=loadImage("car3.png");  
car4Img=loadImage("car4.png");  
car5Img=loadImage("car5.png");  
car6Img=loadImage("car6.png"); 
roadImg=loadImage("road.png"); 
  

carHorn=loadSound("carHorn.mp3"); 
gameOverImg=loadImage("gameOver.png");
logoImg = loadImage("game street logo'.jpeg");  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  road=createSprite(width/2,height/2);
  road.addImage(roadImg);
  road.velocityY=8;
  road.scale=2.2;
  
  mainCar=createSprite(width/2,height-200,40,40);
  mainCar.addImage(mainCarImg);
  mainCar.scale=0.4;
 
  gameOver=createSprite(width/2,height/4);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.5
 
 
   
  //logo = createSprite(width/2,height/2);
  //logo.addImage(logoImg);
  //logo.scale=0.55;
  
 score = 0; 
  
  car1G=new Group();
  car2G=new Group();
  car3G=new Group();
  car4G=new Group();
  car5G=new Group();
  car6G=new Group();
  car7G=new Group();
  car8G=new Group();
  car9G=new Group();
  car10G=new Group();
  car11G=new Group();
  
  car2G.debug=true
  car3G.debug=true;
  car4G.debug=true;
  car5G.debug=true;
  car6G.debug=true;
  car6G.debug=true;
  car7G.debug=true;
  car8G.debug=true;
  car9G.debug=true;
  car10G.debug=true;
  car11G.debug=true;
  
  
  
}

function draw(){
  background (0);
  
  
   //=true;
  
  
  if(gameState === LOADING){
    
  }
   
 
  
  if(gameState==PLAY){
    
    //=false;
    
   gameOver.visible=false;  
 
   
    
    
   
    if(road.y > 400) {
     road.y=height/2;
   }
    score = score + Math.round(getFrameRate()/60);
    
    
    if(keyDown("right")){
      mainCar.x=mainCar.x+5;
    }
    
    if(keyDown("left")){
      mainCar.x=mainCar.x-5;
    }
    
    if(keyDown("up")){
      carHorn.play();
    }
    
    if(keyDown("space")){
      car2G.setVelocityYEach(10);
    car3G.setVelocityYEach(10);
    car4G.setVelocityYEach(10);
    car5G.setVelocityYEach(10);
    car6G.setVelocityYEach(10);
    car7G.setVelocityYEach(10);
    car8G.setVelocityYEach(10);
    car9G.setVelocityYEach(10);
    car10G.setVelocityYEach(10);
    car11G.setVelocityYEach(10);
      road.velocityY=10;
    }
    
    if(keyWentUp("space")){
      car2G.setVelocityYEach(4);
    car3G.setVelocityYEach(4);
    car4G.setVelocityYEach(4);
    car5G.setVelocityYEach(4);
    car6G.setVelocityYEach(4);
    car7G.setVelocityYEach(4);
    car8G.setVelocityYEach(4);
    car9G.setVelocityYEach(4);
    car10G.setVelocityYEach(4);
    car11G.setVelocityYEach(4);
      road.velocityY=4
    }
    
    if(mainCar.isTouching( car2G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car3G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car4G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car5G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car6G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car7G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car8G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car9G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car10G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    if(mainCar.isTouching( car11G)){
      gameState=END;
      gameOver.visible=true;
    }
    
    
    var randomNum=Math.round(random(1,12));
    if(frameCount % 60 === 0){
      var rand = Math.round(random(1,11));
    switch(rand) {
      case 1: createCar2();
              break;
      case 2:  createCar3();
              break;
      case 3:  createCar4();
              break;
      case 4:  createCar5();
              break;
      case 5:  createCar6();
              break;
      case 6:  createCar7();
              break;
      case 7: createCar8();
              break;
      case 8:  createCar9();
              break;
      case 9:  createCar10();
              break;
      case 10:  createCar11();
              break;
      default: break;
      
      
      
      
      
      
    }
    }
    
    
    
   
  }
 
  else if(gameState === END){
    
    if(keyDown("right")){
      //=false;
    }
     
    road.velocityY=0;
    car2G.velocityY=0;
    car3G.velocityY=0;
    car4G.velocityY=0;
    car5G.velocityY=0;
    car6G.velocityY=0;
    car7G.velocityY=0;
    car8G.velocityY=0;
    car9G.velocityY=0;
    car10G.velocityY=0;
    car11G.velocityY=0;
    
    
    car2G.destroyEach();
    car3G.destroyEach();
    car4G.destroyEach();
    car5G.destroyEach();
    car6G.destroyEach();
    car7G.destroyEach();
    car8G.destroyEach();
    car9G.destroyEach();
    car10G.destroyEach();
    car11G.destroyEach();
    
    car2G.setVelocityYEach(0);
    car3G.setVelocityYEach(0);
    car4G.setVelocityYEach(0);
    car5G.setVelocityYEach(0);
    car6G.setVelocityYEach(0);
    car7G.setVelocityYEach(0);
    car8G.setVelocityYEach(0);
    car9G.setVelocityYEach(0);
    car10G.setVelocityYEach(0);
    car11G.setVelocityYEach(0);
    
    if(mousePressedOver(gameOver)){
    console.log("Restart the Game");
    reset();
  }

    
  }
  
  
  drawSprites();
   fill("white");
  text("Score: "+ score, 500,50);
}





  function  createCar1(){
   car1=createSprite(random(80,width-330),40,10,10);
   car1.addImage(car1Img);
   car1.velocityY=4;
   car1.scale=0.7;
   car1.lifetime=200;
   car1G.add(car1);
}
 function createCar2(){
   car2=createSprite(random(80,width-330),40,10,10);
   car2.addImage(car2Img);
   car2.velocityY=4;
   car2.scale=0.7;
   car2.lifetime=200;
   car2G.add(car2);
 }
 function createCar3(){
   car3=createSprite(random(80,width-330),40,10,10);
   car3.addImage(car3Img);
   car3.velocityY=4;
   car3.scale=0.7;
   car3.lifetime=200;
   car3G.add(car3);
 }
function createCar4(){
   car4=createSprite(random(80,width-330),40,10,10);
   car4.addImage(car4Img);
   car4.velocityY=4;
   car4.scale=0.7;
   car4.lifetime=200;
   car4G.add(car4);
 }
 function createCar5(){
   car5=createSprite(random(80,width-330),40,10,10);
   car5.addImage(car5Img);
   car5.velocityY=4;
   car5.scale=0.7;
   car5.lifetime=200;
   car5G.add(car5);
 }
 
 function createCar6(){
   car6=createSprite(random(80,width-330),40,10,10);
   car6.addImage(car6Img);
   car6.velocityY=4;
   car6.scale=0.7;
   car6.lifetime=200;
   car6G.add(car6);
 }
function createCar7(){
   car7=createSprite(random(80,width-330),40,10,10);
   car7.addImage(car2Img);
   car7.velocityY=4;
   car7.scale=0.7;
   car7.lifetime=200;
   car7G.add(car7);
 }
 function createCar8(){
   car8=createSprite(random(80,width-330),40,10,10);
   car8.addImage(car3Img);
   car8.velocityY=4;
   car8.scale=0.7;
   car8.lifetime=200;
   car8G.add(car8);
 }
function createCar9(){
   car9=createSprite(random(80,width-330),40,10,10);
   car9.addImage(car4Img);
   car9.velocityY=4;
   car9.scale=0.7;
   car9.lifetime=200;
   car9G.add(car9);
 }
 function createCar10(){
   car10=createSprite(random(80,width-330),40,10,10);
   car10.addImage(car5Img);
   car10.velocityY=4;
   car10.scale=0.7;
   car10.lifetime=200;
   car10G.add(car10);
 }
 
 function createCar11(){
   car11=createSprite(random(80,width-330),40,10,10);
   car11.addImage(car6Img);
   car11.velocityY=4;
   car11.scale=0.7;
   car11.lifetime=200;
   car11G.add(car11);
   
 }
 
function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  //=false;
    car2G.destroyEach();
    car3G.destroyEach();
    car4G.destroyEach();
    car5G.destroyEach();
    car6G.destroyEach();
    car7G.destroyEach();
    car8G.destroyEach();
    car9G.destroyEach();
    car10G.destroyEach();
    car11G.destroyEach();
    road.velocityY=8;
  score = 0;
}

