const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300,400,50);
	bobObject2 = new Bob(350,400,50);
	bobObject3 = new Bob(400,400,50);
	bobObject4 = new Bob(450,400,50);
	bobObject5 = new Bob(500,400,50);
	
	ground = new Roof(400,150,600,20);

	rope1 = new Rope(bobObject1.body,ground.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,ground.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,ground.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,ground.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,ground.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
    bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
}



