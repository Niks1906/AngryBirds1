class Ground {
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(600,385,1200,10,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(225);
        rect(pos.x,pos.y,1200,10);
    }
}