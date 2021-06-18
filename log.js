class Log{
    //PROPERTIES
    constructor(x, y, h,a){
        var options = {
            restitution:0.7 ,
            friction:1.5,
            density:1
        }
        
        this.body = Bodies.rectangle(x, y, 20, h, options);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body,a)
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        rectMode(CENTER);
        fill(255);
        
        //Add New Settings
        push();
        stroke("green");
        strokeWeight(4);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rect(0, 0, this.width, this.height) 

        //Remove the last added settings
        pop();
    }
}