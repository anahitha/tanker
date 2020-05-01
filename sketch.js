// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;
var cannon;
var base;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200, 400, 400, 20);
    cannon = new Ground(150, 350, 100, 30);

    var base_options ={
        isStatic: true
    }
    base = Bodies.circle(100,350,20, base_options);
    World.add(world,base);

}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine);
    ground.display();
    cannon.display();
    ellipseMode(RADIUS);
    ellipse(base.position.x, base.position.y, 40, 40);
    

}


function keyReleased() {
    // Call the shoot method for the cannon.
}