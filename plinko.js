class plinko{
    constructor(x,y,r){
        var options={
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,this.r);
    }
}