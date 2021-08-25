var path, pathImg
var run, run_running
var invisible_sides
var invisible_sides2

function preload()

{
  //pre-load images
  run_running=loadAnimation("Runner-1.png","Runner-2.png")
  pathImg=loadImage("path.png")
}

function setup(){


  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,200,200);
  path.addImage(pathImg);
  path.veloctiyY = 4;
  path.scale=1.2
  run=createSprite(200,200,50,50)
  run.addAnimation("run",run_running)
  run.scale=0.125  
  invisible_sides=createSprite(10,200,20,400)
  invisible_sides.visible=false
  invisible_sides2=createSprite(390,200,20,400)
  invisible_sides2.visible=false
 
 

}

function draw() {
  background("pink");
  drawSprites()
  
if(path.y > 400){
  path.y = height/2;
}
run.x=mouseX
run.collide(invisible_sides)
run.collide(invisible_sides2)
}

