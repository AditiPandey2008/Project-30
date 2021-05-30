const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var ground1,ground2,ground3,chain;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  
  world = engine.world;
  b1=new Block(480,275);
  b2=new Block(510,275);
  b3=new Block(540,275);
  b4=new Block(570,275);
  b5=new Block(600,275);
  b6=new Block(450,275);
  b7=new Block(630,275);
  b8=new Block(480,235);
  b9=new Block(510,235);
  b10=new Block(540,235);
  b11=new Block(570,235);
  b12=new Block(600,235);
  b13=new Block(499,195);
  b14=new Block(530,195);
  b15=new Block(560,195);
  b16=new Block(530,155);
  b17=new Block(800,100);
  b18=new Block(800,140);
  b19=new Block(830,140);
  b20=new Block(770,140);
  b21=new Block(800,180);
  b22=new Block(830,180);
  b23=new Block(860,180);
  b24=new Block(770,180);
  b25=new Block(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain=new Chain(this.polygon,{x:200,y:200});
}
function draw() {
 background("brown"); 
 
  Engine.update(engine);
  fill("white")
  textSize(22)
  text("Press space to get a new shot",400,100);
  fill(135,206,234);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("yellow");
  b13.display();
  b14.display();
  b15.display();
  fill("lightgreen");
  b16.display();
  fill(254,192,203);
  b17.display();
  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  chain.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain.attach(this.polygon);
  }
  
}