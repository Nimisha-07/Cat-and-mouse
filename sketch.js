var jerry, jeeryimg, jerryteasing, jerryrunning, jerrycaught;
var tom, tomimg, tomtocatch, tomgonnacatch, tomcaught;
var garden,gardenimg;


function preload() {


gardenimg= loadImage("garden.png");

tomimg= loadAnimation("cat1.png");
tomtocatch= loadAnimation("cat2.png");
tomgonnacatch= loadAnimation("cat3.png");
tomcaught= loadAnimation("cat4.png");

jerryimg= loadAnimation("mouse1.png");
jerryteasing= loadAnimation("mouse2.png");
jerryrunning= loadAnimation("mouse3.png");
jerrycaught= loadAnimation("mouse4.png");


}

function setup(){

createCanvas(1000,800);

jerry= createSprite(200,500);
jerry.addAnimation("jerry", jerryimg);
//jerry.velocityX=2;

tom= createSprite(800,500);
tom.addAnimation("tom", tomimg);
//tom.velocityX= 3;


tom.scale=0.2;
jerry.scale=0.1;

}

function draw() {

background(gardenimg);
  
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
  tom.velocityX=0;
  tom.addAnimation("tomlastimage", tomcaught);
  tom.changeAnimation("tomlastimage");
  jerry.addAnimation("jerrylastimage", jerrycaught);
  jerry.changeAnimation("jerrylastimage");
}




drawSprites();


}


function keyPressed(){
   if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("tom", tomtocatch);
     jerry.addAnimation("jerryteasing", jerryteasing);
     jerry.frameDelay=25;
     jerry.changeAnimation("jerryteasing");

   }
   
  //For moving and changing animation write code here


}
