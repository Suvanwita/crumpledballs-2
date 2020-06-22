
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var paper,ground,Dustbin;


function setup() {
	var canvas = createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
	
	//create the paper
	paper=new Paper(50,50);
	
	//Create a Ground
	ground = new Ground(750,540,1500,20);
	 
	Dustbin=new DustbinWall(1300,450);
	
	Engine.run(engine);
  }

function draw() {
   background(240);
   Engine.update(engine);
   ground.display();
   
   Dustbin.display();
  
   paper.display();
 
   console.log();
  
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		if(paper.body.position.x<550){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
	}
	if(paper.body.position.x>=550){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:2});
	}

}
}

