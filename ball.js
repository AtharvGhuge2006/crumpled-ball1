class Ball {
    constructor(x, y,radius) {
      var options = {
        
        'density':1.5,
        'friction': 1.5,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      strokeWeight(5)
      stroke('blue')
      fill('red')
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius)
    };
  };