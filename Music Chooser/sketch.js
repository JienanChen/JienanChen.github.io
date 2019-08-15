// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let buttonX, buttonY, buttonW, buttonH;
let choice;

function setup() {
  createCanvas(windowWidth, windowHeight);
  choice = 0;
}

function draw() {
  background(220);
  drawButton();
  noLoop();
}

 function drawButton(){
   rectMode(CENTER);
   textAlign(CENTER);
   fill("green");
   noStroke();
   rect(width/2,height/1.15,width/3,height/8);
  
   fill(255);
   textSize(floor(height/34));
   text("Click for music.",width/2,height/1.13);
 }

 function mousePressed(){
   if ((mouseX >= buttonX && mouseX <= buttonX + buttonW) && (mouseY >= buttonY && mouseY <= buttonY + buttonH)){
     choice = floor(random(1,4));
   }
 
  if (choice === 1){
    window.location = "https://www.youtube.com/watch?v=pzlw6fUux4o";
    }
    if (choice === 2){
      window.location = "https://www.youtube.com/watch?v=BOZEj8wyj-I";
    }
    if (choice === 3){
     window.location = "https://www.youtube.com/watch?v=3HSRIDtwsfM";
   }
 }
