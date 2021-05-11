class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.6
    }
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;

    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //ellipseMode(CENTER);
    imageMode(CENTER);
		image(this.image,0,0,70,70);
    //strokeWeight(4);
    //stroke("blue");
    //fill(255);
    //ellipse(0, 0, this.radius);
    pop();
  }
}