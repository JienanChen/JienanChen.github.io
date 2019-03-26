// Le Chartier's Principle Teaching Tool (for Ms. Sun)
// Jienan Chen
// March 25, 2019
//
// Extra for Experts:
// The project is dependant on arrays


//state
let state;

//button related
let button;
let buttonX, buttonY;
let buttonWidth, buttonHeight;
let buttonTextSize;
let buttonText = ["Concentration", "Pressure", "Temperature", "Catalyst"];
let buttonAndTextPlacement = [1, 3, 5, 7];
let drawingStates = ["concentration", "pressure", "temperature", "catalyst"];

//Equations related
let colour;
let equationTextXPlacementConstant, equationTextHeightConstant, subscriptHeight;
let equationTextSize, subscriptTextSize;
let xCors = [2, 4, 6, 8, 10, 12, 14, 16];
let subXCorsGeneral = [4, 10];
let generalEquation = ["1", "H", "+", "1", "Cl", "<=>", "2", "HCl"];
let fillColoursOriginal = ["black", "dodgerBlue", "black", "black", "dodgerBlue", "black", "black", "dodgerBlue"];

//concentration related
let concentrationMoreReactantOne = ["black", "magenta", "black", "black", "blue", "black", "black", "magenta"];
let concentrationMoreReactantTwo = ["black", "blue", "black", "black", "magenta", "black", "black", "magenta"];
let concentrationMoreProduct = ["black", "red", "black", "black", "red", "black", "black", "magenta"];
let concentrationLessReactantOne = ["black", "purple", "black", "black", "red", "black", "black", "blue"];
let concentrationLessReactantTwo = ["black", "red", "black", "black", "purple", "black", "black", "blue"];
let concentrationLessProduct = ["black", "blue", "black", "black", "blue", "black", "black", "magenta"];
let concentrationInfo = ["On your keyboard, click 1 to increase the concentration of hydrogen;", "2 to increase that of Chlorine; and 3 to increase that of HCl.", "3 will lower the concentration of hydrogen; 2 will lower that of chlorine; and", "3, that of HCl."];
let concentrationXCors = [0, 20, 40, 60];

//pressure related
let pressureEquation = ["1", "N", "+", "3", "H", "<=>", "2", "NH"];
let pressureSubscripts = ["2", "2", "3"];
let subXCorsPressure = [4, 10, 16.3];
let increasePressure = ["black", "magenta", "black", "black", "magenta", "black", "black", "red"];
let decreasePressure = ["black", "purple", "black", "black", "purple", "black", "black", "blue"];
let pressureInfo = ["On your keyboard, click 1 to increase the pressure;", "click 2 to decrease the pressure."];
let pressureXCors = [40, 60];

//temperature related
let heatX = [6, 15,];
let heatLocal;
let moreHeat = ["black", "blue", "black", "black", "blue", "black", "black", "red"];
let lessHeat = ["black", "red", "black", "black", "red", "black", "black", "blue"];
let tempInfo = ["On your keyboard, click 1 to increase the temperature;", "click 2 to decrease the temperature."];
let tempXCors = [20, 40];

//instruction related
let instructionHeight;
let legend = ["(in terms of concentration:) red = increased; dark blue (more than present shade) = decreased", "magenta = increased and decreased; purple = decreased and increased"];
let restartAndBack = "Click BACKSPACE to restart. Use LEFT_ARROW to return to menu."
let legendXCors = [90, 110];

//set up necessary "components"
function setup() {
  //canvas dimensions
  createCanvas(windowWidth, windowHeight);
  
  //button placement
  rectMode(CENTER);

  //button variables assigned values;
  buttonX = width / 2;
  buttonY = height / 8;
  buttonWidth = width / 2;
  buttonHeight = height / 4 - 10;
  buttonTextSize = (height / 4 - 10) / 4;

  //colour defined
  colour = fillColoursOriginal;

  //equation variables assigned values
  equationTextSize = height / 16;
  equationTextXPlacementConstant = width / 19;
  equationTextHeightConstant = height / 2;
  
  //subscript variables assigned values
  subscriptTextSize = height * 0.03;
  subscriptHeight = height / 32 * 17;

  //heat variables assigned values
  heatHeight = height / 3;
  heatLocal = random(heatX);
  
  //instructions variable assigned value
  instructionHeight = height * 0.63;

  //state defined
  state = "buttons";
}

function draw() {
  //what displays on the screen

  if (state === "buttons") {
    background(200);
    drawButtons();
    colour = fillColoursOriginal;
  }

  else if (state === "concentration") {
    background(255);
    writeGeneralEquation();
    addSubscriptsGeneral();
    concentrationInstructionsAndExplenation();
    printRestartAndBack();
  }
  
  else if (state === "pressure") {
    background(255);
    writePressureEquation();
    addSubscriptsPressure();
    pressureInstructionsAndExplenation()
    printRestartAndBack();
  }

  else if (state === "temperature") {
    background(255);
    writeGeneralEquation();
    addSubscriptsGeneral();
    writeInHeat();
    tempInstructionsAndExplenation();
    printRestartAndBack();
  }
  
  else if (state === "catalyst"){
    background(255);
    writeGeneralEquation();
    addSubscriptsGeneral();
    catalystExplenationEtAl();
  }
}

function drawButtons() {
  //draws the 4 buttons

  textAlign(CENTER);
  textSize(buttonTextSize);
  for (let i = 0; i < buttonAndTextPlacement.length; i++) {
    fill("white");
    strokeWeight(5);
    rect(buttonX, buttonAndTextPlacement[i] * buttonY, buttonWidth, buttonHeight);
    fill("black");
    text(buttonText[i], buttonX, buttonAndTextPlacement[i] * buttonY);
  }
}

function writeGeneralEquation() {
  //writes the main equation

  textAlign(CENTER);
  textSize(equationTextSize);
  for (let i = 0; i < xCors.length; i++) {
    fill(colour[i]);
    text(generalEquation[i], equationTextXPlacementConstant * xCors[i], equationTextHeightConstant);
  }
}

function writePressureEquation() {
  //writes the unique pressure equation

  textAlign(CENTER);
  textSize(equationTextSize);
  for (let i = 0; i < xCors.length; i++) {
    fill(colour[i]);
    text(pressureEquation[i], equationTextXPlacementConstant * xCors[i], equationTextHeightConstant);
  }
}

function writeInHeat() {
  //places HEAT either on left or right side of equation

  textAlign(CENTER);
  textSize(equationTextSize * 0.5);
  fill("red");
  text("HEAT", equationTextXPlacementConstant * heatLocal, heatHeight);
}

function addSubscriptsGeneral(){
  //adds in subscripts

  textAlign(CENTER);
  fill("black");
  textSize(subscriptTextSize);
  for (let i = 0; i < subXCorsGeneral.length; i++) {
    text("2", equationTextXPlacementConstant * subXCorsGeneral[i] + 20, subscriptHeight);
  } 
}

function addSubscriptsPressure(){
  //adds in the subscripts related to the pressure equation

  textAlign(CENTER);
  fill("black");
  textSize(subscriptTextSize);
    for (let i = 0; i < subXCorsPressure.length; i++) {
    text(pressureSubscripts[i], equationTextXPlacementConstant * subXCorsPressure[i] + 20, subscriptHeight);
    }
}

function concentrationInstructionsAndExplenation(){
  //adds in the explenation for how to use the keyboard when state = concentration

  fill("black");
  textAlign(LEFT);
  textSize(height* 0.03);
  for (let i = 0; i < concentrationInfo.length; i++){
    text(concentrationInfo[i], 30, instructionHeight + concentrationXCors[i]);
  }
  for (let i = 0; i < legend.length; i++){
    text(legend[i], 30, instructionHeight + legendXCors[i]);
  }
}

function pressureInstructionsAndExplenation(){
  //adds in the explenation for how to use the keyboard when state = pressure

  fill("black");
  textAlign(LEFT);
  textSize(height* 0.03);
  for (let i = 0; i < pressureInfo.length; i++){
    text(pressureInfo[i], 30, instructionHeight + pressureXCors[i]);
    text(legend[i], 30, instructionHeight + legendXCors[i]);
  } 
}

function tempInstructionsAndExplenation(){
  //adds in the explenation for how to use the keyboard when state = temperature

  fill("black");
  textAlign(LEFT);
  textSize(height* 0.03);
  for (let i = 0; i < tempInfo.length; i++){
    text(tempInfo[i], 30, instructionHeight + tempXCors[i]);
    text(legend[i], 30, instructionHeight + legendXCors[i]);
  }
  //places the HEAT in a (potential) new spot
 text("Click 0 to (potentially) change the position of HEAT (endo/exo).", 25, instructionHeight + 65 ); 
}

function catalystExplenationEtAl(){
  //adds in the explenation for why nothing happends when state = catalyst

  fill("orange");
  textAlign(CENTER);
  textSize(height* 0.04);
  text("Ms.Sun: A catalyst increases the rateof reaction, both forward and reverse.", width/2 , instructionHeight + 20);
  fill("black");
  textAlign(LEFT);
  textSize(height* 0.03);
  text("Use LEFT_ARROW to return to menu.", 0, instructionHeight + 155);
}

function printRestartAndBack(){
  //how to set the equation to its "prime state" and how to return to the menu

  fill("black");
  textAlign(LEFT);
  textSize(height* 0.03);
  text("Use LEFT_ARROW to return to menu.", 0, instructionHeight + 155);
}


function mousePressed() {
  //making the button clicking work

  for (let i = 0; i < buttonAndTextPlacement.length; i++) {
    if (state === "buttons" & mouseX > buttonX - buttonWidth / 2 & mouseX < buttonX + buttonWidth / 2 & mouseY > buttonAndTextPlacement[i] * buttonY - buttonHeight / 2 & mouseY < buttonAndTextPlacement[i] * buttonY + buttonHeight / 2)
      state = drawingStates[i];
  }
}

function keyPressed() {

  //concentration
  if (state === "concentration" & keyCode === 49) {
    colour = concentrationMoreReactantOne;
  } else if (state === "concentration" & keyCode === 50) {
    colour = concentrationMoreReactantTwo;
  } else if (state === "concentration" & keyCode === 51) {
    colour = concentrationMoreProduct;
  } else if (state === "concentration" & keyCode === 52) {
    colour = concentrationLessReactantOne;
  } else if (state === "concentration" & keyCode === 53) {
    colour = concentrationLessReactantTwo;
  } else if (state === "concentration" & keyCode === 54) {
    colour = concentrationLessProduct;
  }

  //pressure
  if (state === "pressure" & keyCode === 49) {
    colour = increasePressure;
  } else if (state === "pressure" & keyCode === 50) {
    colour = decreasePressure;
  }

  //temperature
  if (state === "temperature" & keyCode === 48) {
    console.log("enter")
    colour = fillColoursOriginal;
    heatLocal = random(heatX);
  } else if (heatLocal === heatX[0]) {
    if (state === "temperature" & keyCode === 49) {
      colour = moreHeat;
    } else if (state === "temperature" & keyCode === 50) {
      colour = lessHeat;
    }
  } else if (heatLocal === heatX[1]) {
    if (state === "temperature" & keyCode === 49) {
      colour = lessHeat;
    } else if (state === "temperature" & keyCode === 50) {
      colour = moreHeat;
    }
  }
  
  //no need to mind catalyst

  //reset
  if ((state === "concentration" || state === "pressure" || state === "temperature") & keyCode === BACKSPACE) {
    colour = fillColoursOriginal;
  }

  //go back to menu
  if (keyCode === LEFT_ARROW) {
    state = "buttons";
    drawButtons();
  }
}
