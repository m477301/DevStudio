const WINDOW_SIZE = 500;
var balls = [];
var numberBalls = 3;

function setup() {
 createCanvas(WINDOW_SIZE, WINDOW_SIZE);
  for(let i = 0; i < numberBalls; i++) {
    ball = new Ball()
    balls.push(ball)
  }
}

function draw() {
  background(255);
  for(let i = 0; i < numberBalls; i++) {
    balls[i].draw();
  }
}