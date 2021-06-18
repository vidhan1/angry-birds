//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var bird;
var log1, log2, log3, log4;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create(); //creating variable engine & world that can be changed & controlled
  world = engine.world;

  box1 = new Box(700, 320, 70, 70); //new = new object
  box2 = new Box( 920, 320, 70,70);
  box3 = new Box(700, 240, 70, 70); //new = new object
  box4 = new Box( 920, 240, 70,70);
  box5 = new Box( 810, 160, 70,70);
  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  ground = new Ground(600,height,1200,20)

  pig1 =new Pig(810,350);
  pig2 =new Pig(810,220);
  bird = new Bird(100,100);
}

function draw() {
  background(0);  
  Engine.update(engine);

  box2.display();
  box1.display();
  box3.display();
  box4.display();
  box5.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  ground.display();
  pig1.display();
  pig2.display();

  bird.display();
}

/*
ANGLE
  using degrees

radians - more accurate than degrees

pi = 22/7

360 deg = 2pi rad
180 deg = pi rad
90 deg = pi/2 rad
60 deg = pi/3 rad
45 deg = pi/4 rad
30 deg = pi/6 rad
*/