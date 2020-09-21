const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 230, 70, 70);
    box4 = new Box(920, 230, 70, 70);
    box5 = new Box(810, 140, 70, 70);
    pig1 = new Pig(810, 320);
    pig2 = new Pig(810, 230);
    plank1 = new Plank(810, 275, 300, PI/2);
    plank2 = new Plank(810, 175, 300, PI/2);
    plank3 = new Plank(755, 140, 150, PI/3);
    plank4 = new Plank(865, 140, 150, -PI/3);
    bird1 = new Bird(100,100);
    ground = new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    pig1.display();
    pig2.display();
    
    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    
    bird1.display();
    
    ground.display();
   
}