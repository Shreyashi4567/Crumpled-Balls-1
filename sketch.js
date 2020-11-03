const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, ground;
var box1, box2, box3;

function setup()
{
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  paper = new Paper(150, 300, 20);
  ground = new Ground(200, 350, 2000, 10);
  box1 = new Dustbin(800,320,20,50);
  box2 = new Dustbin(900,290,20,100);
  box3 = new Dustbin(850,340,100,20);

}
function draw()
{
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-2});
  }
}