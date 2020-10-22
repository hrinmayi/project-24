
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
ball=new Paper(200,650,20);
ground=new Ground(400,675,800,20);
bin1=new Box(650,600,100,10);
bin2=new Box(695,600,100,10);
bin3=new Box(673,600,100,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
   
  drawSprites();
 
}

function keypressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyforce(paperObject.body,paperObject.Body.position,{x:85,y:-85});
}
}