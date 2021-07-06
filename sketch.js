var sp1image,sp2image,sp3image,sp4image, bgimage, issimage;
var iss,spacecraft;
var hasDocked = false;
function preload(){
sp1image = loadImage("spacecraft1.png");
sp2image = loadImage("spacecraft2.png");
sp3image = loadImage("spacecraft3.png");
sp4image = loadImage("spacecraft4.png");
bgimage = loadImage("spacebg.jpg");
issimage = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 130);
  iss.addImage(issimage);
  iss.scale = 0.25;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sp1image);
  spacecraft.scale = 0.15;
}

function draw() {
  background(bgimage);
if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sp3image);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sp4image);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sp2image);
  }

}  
if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white")
  text("Docking Successful!", 200, 300);
}
  drawSprites();
}