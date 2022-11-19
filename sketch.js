
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.boy, this.height);
    pop();
    *if (this.boy.velocity.x > 0 && this.boy.position.x > 400) {
      var position = [this.boy.position.x, this.boy.position.y];
      this.boy.push(position);
    }*/
    class PlayerBoy {
      constructor(x, y, width, height, archerAngle) {
        var options = {
          isStatic: true,
          density: 0.1
        };
        this.boy = width;
        this.height = cave;
        this.body = Bodies.boy(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/arrow.png");
        this.archerAngle = archerAngle;
        this.velocity = p5.Vector.fromAngle(archerAngle);
        World.add(world, this.body);




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
createSprite("boy");
createSprite("cave");
createSprite("cave");
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}function draw() {
  boy(boyImg);

  Engine.update(engine);

  playerBase.display();
  boy.display();
  playerArcher.display();

  boy.display();
  cave.display();


