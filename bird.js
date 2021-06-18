class Bird{
    //PROPERTIES
    constructor(x, y){
        var options = {
            restitution:0.7 
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        rectMode(CENTER);
        fill("red");

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
        //Add New Settings
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rect(0, 0, this.width, this.height) 

        //Remove the last added settings
        pop();
    }
}