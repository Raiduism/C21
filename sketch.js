const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);


  ball_options ={

    restitution: 0.95
  }
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  b1 = createImg("right.png");
  b1.position(350, 50);
  b1.size(50, 50);
  b1.mouseClicked(HForce);

  b2 = createImg("up.png");
  b2.position(50, 350);
  b2.size(50, 50);
  b2.mouseClicked(VForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
}

function HForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.01, y: 0});
}

function VForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.01});
}

