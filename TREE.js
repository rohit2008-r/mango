class TREE {
  constructor(x,y,r){

    this.body = Bodies.rectangle(x, y, r);
    this.x = x;
    this.r = r;
    this.y =y;
    this.image = loadImage("tree.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 1000, 300, 600, 600);
    pop();
  }
}  
  

