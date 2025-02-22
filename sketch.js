const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,20);
    box1= new Box(200,300,50,50);
    box2= new Box(230,250,50,50);

    var ball_options ={
        restitution: 1.0
    }

    //ball = Bodies.circle(200,100,20, ball_options);
    //World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    //ellipseMode(RADIUS);
   // ellipse(ball.position.x, ball.position.y, 20, 20);
}