var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ground1;
var canvasWidth;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
// var block12;
// var block13;
// var block14;
// var block15;
// var block16;
// var block17;
// var block18;
// var block19;
// var block20;

var poloy;

function setup() {
  canvasWidth = windowWidth;
  createCanvas(canvasWidth, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(width / 2, height, width, 10, options);
  World.add(world, ground);

  ground1 = Bodies.rectangle(width / 1.3, height / 1.5, 250, 10, options);
  World.add(world, ground1);

  block1 = new Box(width / 1.18, height / 1.6, 35, 35, options);
  World.add(world, block1);

  block2 = new Box(width / 1.25, height / 1.6, 35, 35, options);
  World.add(world, block2);

  block3 = new Box(width / 1.3, height / 1.6, 35, 35, options);
  World.add(world, block3);

  block4 = new Box(width / 1.4, height / 1.6, 35, 35, options);
  World.add(world, block4);

  block5 = new Box(width / 1.5, height / 1.6, 35, 35, options);
  World.add(world, block5);

  block6 = new Box(width / 1.25, height / 1.9, 35, 35, options);
  World.add(world, block6);

  block7 = new Box(width / 1.35, height / 1.9, 35, 35, options);
  World.add(world, block7);

  block8 = new Box(width / 1.45, height / 1.9, 35, 35, options);
  World.add(world, block8);

  block9 = new Box(width / 1.3, height / 3, 35, 35, options);
  World.add(world, block9);

  block10 = new Box(width / 1.35, height / 3, 35, 35, options);
  World.add(world, block10);

  block11 = new Box(width / 1.325, height / 4, 35, 35, options);
  World.add(world, block11);

  poloy = Bodies.circle(width / 4, height / 2, 20);
  World.add(world, poloy);
}

function draw() {
  background(50);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 10);
  rect(ground1.position.x, ground1.position.y, 250, 10);
  ellipse(poloy.position.x, poloy.position.y, 40, 40);

  block1.show();
  block2.show();
  block3.show();
  block4.show();
  block5.show();
  block6.show();
  block7.show();
  block8.show();
  block9.show();
  block10.show();
  block11.show();

  fill(170);
  noStroke();
}
