class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg  = loadImage("sprites/smoke.png")

    this.trajactory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var position = [this.body.position.x, this.body.position.y];
    this.trajactory.push(position);
    for(var I = 0; I<this.trajactory.length;I++){
      image (this.smokeimg,this.trajactory[I][0], this.trajactory[I][1])
    }
  }
}
