const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;

function preload(){
    
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	dustbin = new Dustbin(600,680,200,20);
	paper= new Paper (100,600,50,20);

	Engine.run(engine);

}


function draw() 
{
  rectMode(CENTER);
  background("cyan");

 paper.display();
 ground.display();
 dustbin.display();

  drawSprites();
 
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}



}
