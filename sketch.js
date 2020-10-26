
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,wall1,wall2,wall3;
function preload()
{

}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(800,740,1600,20)
    ball=new Ball(250,250,25)
    wall1=new Dustbin(1100,height-30,200,20)
    wall2=new Dustbin(1000,height-70,20,100)
    wall3=new Dustbin(1200,height-70,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(144, 3, 252);
  Engine.update(engine)
  ground.display()
  ball.display()
  wall1.display()
  wall2.display()
  wall3.display()
  drawSprites();
  
}
 function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:165,y:-165})
      
    }
    console.log("hello world")
}


