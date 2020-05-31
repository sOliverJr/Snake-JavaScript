var numOfBlocks = 20;
var blockSize = 20;
var headX = 0;
var headY = 0;
var speedX = 0;
var speedY = 0;
var tailLenght = 3;
var tailBlocks = [];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  headX = numOfBlocks/2;
  headY = numOfBlocks/2;
}

function draw() {
  background(0);
  
  headX = headX + speedX;
  headY = headY + speedY;
  
  if(headX < 0){
    headX = numOfBlocks -1;
  }
  if(headX > numOfBlocks){
    headX = 0;
  }
  if(headY < 0){
    headY = numOfBlocks -1;
  }
  if(headY > numOfBlocks){
    headY = 0;
  }
  
  fill(255);
  rect(headX * blockSize, headY * blockSize, blockSize, blockSize);
}

function keyPressed() {
  if(key == 'w'){
    speedX = 0;
    speedY = -1;
  }else if(key == 's'){
    speedX = 0;
    speedY = 1;
  }else if(key == 'a'){
    speedX = -1;
    speedY = 0;
  }else if(key == 'd'){
    speedX = 1;
    speedY = 0;
  }
}