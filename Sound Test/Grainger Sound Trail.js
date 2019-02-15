// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let Grainger

function preload(){
soundFormats('ogg', 'mp3');
Grainger=loadSound('assets/PercyGrainger_BritishFolkMusicSettingsNo22CountryGardens_894231793622_1_1.mp3');
}

function setup() {
    Grainger.setVolume(0.9);
    Grainger.play();
  }


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
