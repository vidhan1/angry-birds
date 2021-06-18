class Box{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {
            restitution:0.7 ,
            friction:1.5,
            density:1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
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

/*
this - keyword that refers to the object
     - only used inside a class

     1. Rotation -- changing angle
                -rotate()
    2. Translation - changing position without rotation
                -translate()

*/