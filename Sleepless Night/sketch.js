// Sleepless Night
// Jienan Chen ATCL
// November 22, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let img;
let img1;
let img2;
let pic;

let ep1;

let state;

function preload() {
  img = loadImage("assets/night.jpg");
  img1 = loadImage("assets/night1.jpg");
  img2 = loadImage("assets/night2.jpg");

  ep1 = loadSound("assets/1.mp3");


}


function setup() {
  createCanvas(windowWidth, windowHeight);

  let nums = [1, 2, 3];
  choice = random(nums);

  if (choice === 1) {
    console.log("1");
    pic = img;
  }

  if (choice === 2) {
    console.log("2");
    pic = img1;
  }

  if (choice === 3) {
    console.log("3");
    pic = img2;
  }
  
  state = 0;
}


function draw() {
  if (state === 0) {
    cursor(ARROW);
    background(pic);
    mainPage();
    episodeButton()
  }
  if (state === 1){
    background(61,59,79);
    episodePage();
    cursor(CROSS);
  }
}

function mainPage(){
  textSize(height*0.0975);
  textFont("Georgia");
  textAlign(LEFT);
  fill(255);
  text("Sleepless Night", width*0.05, height*0.21);
}

function episodeButton(){
  rectMode(CORNER);
  noStroke();
  fill(255, 255, 255, 55);
  rect(width/2, height/1.3, width/2.5, height/7);
  textAlign(CENTER);
  textSize(height/15);
  fill(120,100, 144);
  text("Browse Episodes", width/1.43, height/1.16);
}

function episodePage(){
  textAlign(CENTER);
  textSize(height*0.0675);
  fill(255);
  text("Episodes",width/2, height/8);
  stroke(255);
  line(width*3/8, height/6.5, width*5/8, height/6.5);

  textAlign(LEFT);
  textSize(height*0.0475);
  text("Use the numerical keys on your keyboard to select an episode of the show to listen to.\n 1 on your keyboard corresponds to the first episode, 2 corresponds to the second etc. \n Press BACKSPACE to pause the episode, ENTER to resume playing and DELETE \n to stop the episode.", width*0.05, height/3.78 );
  textSize(height*0.0325);
  text("Episode 1 - Sleepless Night\n Episode 2 - Moving\n Episode 3 - I Miss Home\n Episode 4 - First Day\n Episode 5 - Peer Editing\n Episode 6 - Late Night Practicing", width*0.05, height/2);
}

function mousePressed(){
  if (mouseX > width/2 - width/2.5/2  & mouseX < width/2 + width/2.5/2 & mouseY >  height/1.3 - height/7 & mouseY < height/1.3 + height/7/2) {
    state = 1;
    //console.log("yes");
  }
}

function keyPressed(){
  if (state === 1){
    if (keyCode === 49 || keyCode === 97 || keyCode === ENTER){
      ep1.setVolume(1.0);
      ep1.play();
    }
    if (keyCode === BACKSPACE){
      ep1.pause();
    }
    if (keyCode === DELETE){
      ep1.stop();
    }
  }
}