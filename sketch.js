
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, dustbinBase, paper;


function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,680,1600,20);

	dustbinBase = new Dustbin(1150,600,200,200);
	

	paper = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("pink");
  Engine.update(engine);


  drawSprites();

  ground.display();
  dustbinBase.display();
  paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}



