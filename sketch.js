var roof,rope1,BobObject1,BobObject2,BobObject3,BobObject4,BobObject5,BobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof = new Roof(350,100,300,30);
	World.add(world, roof);
	BobObject1 = new Bob(250,300);
	BobObject2 = new Bob(300,300);
	BobObject3 = new Bob(350,300);
	BobObject4 = new Bob(400,300);
	BobObject5 = new Bob(450,300);
	rope1 = new Rope(BobObject1.body,roof.body,-100,0);
	 World.add(world, rope1);
	rope2 = new Rope(BobObject2.body,roof.body,-50,0);
	World.add(world, rope2);
	rope3 = new Rope(BobObject3.body,roof.body,0,0);
	World.add(world, rope3);
	rope4 = new Rope(BobObject4.body,roof.body,+50,0);
	World.add(world, rope4);
	rope5 = new Rope(BobObject5.body,roof.body,+100,0);
	World.add(world, rope5);
	Engine.run(engine);
	
  
}


function draw() {

  background("white");
  Engine.update(engine);
  roof.display();
  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(BobObject1.body,BobObject1.body.position,{x:-730,y:0});
}
}
