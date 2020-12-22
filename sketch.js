var bullet,speed,thickness,wall,weight








function preload(){

}
 
function setup(){
  createCanvas(1200,600)
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)

  bullet=createSprite(100,200,50,10)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,200)
}
                       
function draw(){
  background(255)
if(hasCollide(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed  /(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}
  drawSprites();
}
 function hasCollide(Lbullet,Lwall){
   bulletRightEdge=Lbullet.x +Lbullet.width;
   wallLeftEdge=Lwall.x
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
  return false
 }
