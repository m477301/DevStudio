class Ball {

    constructor() {

        this.xPos = Math.floor(Math.random() * WINDOW_SIZE);
        this.yPos = 0;
        this.radius = Math.floor(Math.random() * 50) + 5;
        this.xDir = 0,
        this.yDir = 1,
        this.xVel = Math.random() * (10 - (-10)) -10;  
        this.yVel = 0,
        this.yAcc = Math.floor(Math.random() * 2) + 0.25;
        this.xAcc = 0.8;

        this.r = random(155); 
        this.g = random(155);
        this.b = random(155); 

    }

    draw() {

        fill(this.r,this.g,this.b)
        circle(this.xPos, this.yPos, this.radius*2)
        fill(0)
        strokeWeight(10);
        stroke(51);
        this.yVel = this.yVel + this.yAcc;
        if(this.yPos + this.radius >= WINDOW_SIZE && this.yVel < 1) {
            this.xVel = this.xVel * this.xAcc;
        }
        this.yPos = this.yPos + this.yVel;
        this.xPos = this.xPos + this.xVel;

        this.checkHitsWalls();
    }
    
    checkHitsWalls() {

        // Ceiling
        if(this.yPos - this.radius <= 0) {
            this.yPos = this.radius;
            this.yVel = -0.8*this.yVel;
        }
        
        // Ground
        if(this.yPos + this.radius >= WINDOW_SIZE) {
            this.yPos = WINDOW_SIZE - this.radius;
            this.yVel = -0.8*this.yVel;
        }

        // Left Wall
        if(this.xPos - this.radius <= 0) {
            this.xPos = this.radius;
            this.xVel = -0.8*this.xVel;
        }

        // Right Wall
        if(this.xPos + this.radius >= WINDOW_SIZE) {
            this.xPos = WINDOW_SIZE - this.radius;
            this.xVel = -0.8*this.xVel;
        }
    }

}