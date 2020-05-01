class Tanker {
  constructor(x, y, width, height, angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height, options);
     
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    Matter.Body.setAngle(this.body, angle);

    };

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      
    };
}
