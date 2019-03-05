// Experience Muhammad
// Jienan Chen
// March 4, 2019
//
// Extra for Experts:
// Using the mouse wheel to control the volume (you have to click the sound icon to make it happen)

//Muhammad image
let instructions;
let muhammadImage;
let secondMuhammad;


let display;

//sounds
//volume control

let dynamic;

//sound set 1
let again;
let order;
let question;
let imperatif;
let whoops;

//sound set 2
let anger;
let gibberish;
let frustrationNoise;
let haecDies;
let patience;

//sound set 3
let end;
let happy;
let jienanVars;
let smack;
let outtake;

//sound set 4
let awkwardMoment;
let notHappy;
let mansbridge;
let lady;
let moreFrench;

//sound set 5
let distraction;
let japanese;
let frenchWhat;
let thankYou;
let cough;

//sound set 6
let cold;
let delight;
let uh;
let kinematics;
let comment;

//sond set 7
let precious;
let explenation;
let physics;
let law;
let advice;

//sound set 8
let flub;
let realize;
let shoot;
let screwUp;
let water;

//sound set 9
let politician;
let language;
let lateComer;
let ok;
let welcome;

//sound set 0
let gregory; 
let gun; 
let excuse;
let reprise; 
let sun; 


function preload() {
  
  //image preload
  muhammadImage = loadImage("assets/muhammad.png");
  secondMuhammad = loadImage("assets/muhammad1.png");
  instructions = loadImage("assets/muhammadProgramInfo.png");

  //ensure audio compatability
  soundFormats("wav", "m4a");

  //Load the sounds in the 10 sound sets. Each sound set is numbered with the numeric key which "activates" it
  //sound set 1 preload
  again = loadSound("assets/LetsDoThisAgain.m4a");
  order = loadSound("assets/order.m4a");
  question = loadSound("assets/question.m4a");
  imperatif = loadSound("assets/violentOrder.m4a");
  whoops = loadSound("assets/whoops.m4a");

  //sound set 2 preload
  anger = loadSound("assets/Angry Muhammad.m4a");
  gibberish = loadSound("assets/French Gibberish.m4a");
  frustrationNoise = loadSound("assets/Frustrated Noise.m4a");
  haecDies = loadSound("assets/Haec Dies.m4a");
  patience = loadSound("assets/Patience.m4a");

  //sound set 3 preload
  end = loadSound("assets/End.m4a");
  happy = loadSound("assets/happiness.m4a");
  jienanVars = loadSound("assets/Jienan.m4a");
  smack = loadSound("assets/Mouth Sounds.m4a");
  outtake = loadSound("assets/Outtake.m4a");

  //sound set 4 preload
  awkwardMoment = loadSound("assets/awkwardness.m4a");
  notHappy = loadSound("assets/discontent.m4a");
  mansbridge = loadSound("assets/false mansbridge.m4a");
  lady = loadSound("assets/Hellier.wav");
  moreFrench = loadSound("assets/more french.m4a");

  //sound set 5 preload
  distraction = loadSound("assets/distraction.m4a");
  japanese = loadSound("assets/japanese.m4a");
  frenchWhat = loadSound("assets/Quoi.wav");
  thankYou = loadSound("assets/thank you.m4a");
  cough = loadSound("assets/violent cough.m4a");

  //sound set 6 preload
  cold = loadSound("assets/Baby It's Cold Outside.m4a");
  delight = loadSound("assets/delight.m4a");
  uh = loadSound("assets/uh.m4a");
  kinematics = loadSound("assets/kinematics.m4a");
  comment = loadSound("assets/violence.m4a");

  //sound set 7 preload
  precious = loadSound("assets/chrome book.m4a");
  explenation = loadSound("assets/explenation.m4a");
  physics = loadSound("assets/physics.m4a");
  law = loadSound("assets/police.m4a");
  advice = loadSound("assets/wilderness.m4a");

  //sound set 8 preload
  flub = loadSound("assets/flub.m4a");
  realize = loadSound("assets/remark.m4a");
  shoot = loadSound("assets/shoot.m4a");
  screwUp = loadSound("assets/teleprompter.m4a");
  water = loadSound("assets/water.m4a");

  //sound set 9 preload
  politician = loadSound("assets/jamal.m4a");
  language = loadSound("assets/late.m4a");
  lateComer = loadSound("assets/late.m4a");
  ok = loadSound("assets/ok.m4a");
  welcome = loadSound("assets/welcome.m4a");

  //sound set 0 preload
  gregory = loadSound("assets/director.m4a");
  gun = loadSound("assets/gun.m4a");
  excuse = loadSound("assets/likely excuse.m4a");
  reprise = loadSound("assets/reprise.m4a");
  sun = loadSound("assets/sun.m4a");
}


function setup() {
  //canvas display
  createCanvas(windowWidth, windowHeight);
  background(instructions);
  //volume info
  setAllTheVolumes(0.5);
  //play no sound at start
  display = "menu";
}


function draw() {
  //permits the continuous change between the instructions and the 2 images of Muhammad
  keyPressed();
}

function setAllTheVolumes(dynamic) {
  //set all the volumes of the 50 sound files from the 10 sound sets
  
  //set volume of sounds from sound set 1
  again.setVolume(dynamic);
  order.setVolume(dynamic);
  question.setVolume(dynamic);
  imperatif.setVolume(dynamic);
  whoops.setVolume(dynamic);

  //set volume of sounds from sound set 2
  anger.setVolume(dynamic);
  gibberish.setVolume(dynamic);
  frustrationNoise.setVolume(dynamic);
  haecDies.setVolume(dynamic);
  patience.setVolume(dynamic);

  //set volume of sounds from sound set 3
  end.setVolume(dynamic);
  happy.setVolume(dynamic);
  jienanVars.setVolume(dynamic);
  smack.setVolume(dynamic);
  outtake.setVolume(dynamic);

  //set volume of sounds from sound set 4
  awkwardMoment.setVolume(dynamic);
  notHappy.setVolume(dynamic);
  mansbridge.setVolume(dynamic);
  lady.setVolume(dynamic);
  moreFrench.setVolume(dynamic);

  //set volume of sounds from sound set 5
  distraction.setVolume(dynamic);
  japanese.setVolume(dynamic);
  frenchWhat.setVolume(dynamic);
  thankYou.setVolume(dynamic);
  cough.setVolume(dynamic);

  //set volume of sounds from sound set 6
  distraction.setVolume(dynamic);
  japanese.setVolume(dynamic);
  frenchWhat.setVolume(dynamic);
  thankYou.setVolume(dynamic);
  cough.setVolume(dynamic);

  //set volume of sounds from sound set 7
  precious.setVolume(dynamic);
  explenation.setVolume(dynamic);
  physics.setVolume(dynamic);
  law.setVolume(dynamic);
  advice.setVolume(dynamic);

  //set volume of sounds from sound set 8
  flub.setVolume(dynamic);
  realize.setVolume(dynamic);
  shoot.setVolume(dynamic);
  screwUp.setVolume(dynamic);
  water.setVolume(dynamic);

  //set volume of sounds from sound set 9
  politician.setVolume(dynamic);
  language.setVolume(dynamic);
  lateComer.setVolume(dynamic);
  ok.setVolume(dynamic);
  welcome.setVolume(dynamic);

  //set volume of sounds from sound set 0
  gregory.setVolume(dynamic);
  gun.setVolume(dynamic);
  excuse.setVolume(dynamic);
  reprise.setVolume(dynamic);
  sun.setVolume(dynamic);
}

function noSound() {
  //stop the sound(s) playing
  
  //stop sounds in sound set 1
  again.stop();
  order.stop();
  question.stop();
  imperatif.stop();
  whoops.stop();

  //stop sounds in sound set 2
  anger.stop();
  gibberish.stop();
  frustrationNoise.stop();
  haecDies.stop();
  patience.stop();

  //stop sounds in sound set 3
  end.stop();
  happy.stop();
  jienanVars.stop();
  smack.stop();
  outtake.stop();

  //stop sounds in sound set 4
  awkwardMoment.stop();
  notHappy.stop();
  mansbridge.stop();
  lady.stop();
  moreFrench.stop();

  //stop sounds in sound set 5
  distraction.stop();
  japanese.stop();
  frenchWhat.stop();
  thankYou.stop();
  cough.stop();

  //stop sounds in sound set 6
  cold.stop();
  delight.stop();
  uh.stop();
  kinematics.stop();
  comment.stop();

  //stop sounds in sound set 7
  precious.stop();
  explenation.stop();
  physics.stop();
  law.stop();
  advice.stop();

  //stop sounds in sound set 8
  flub.stop();
  realize.stop();
  shoot.stop();
  screwUp.stop();
  water.stop();

  //stop sounds in sound set 9
  politician.stop();
  language.stop();
  lateComer.stop();
  ok.stop();
  welcome.stop();

  //stop sounds in sound set 0
  gregory.stop();
  gun.stop();
  excuse.stop();
  reprise.stop();
  sun.stop();
}


function keyPressed() {
  //switch between the instructions and the 2 images of Muhammad

  if (keyCode === LEFT_ARROW) {
    //display instructions
    image(instructions, 0, 0);
    instructions.resize(windowWidth, windowHeight);
    display = "menu";
    keyCode = "";
    noSound();
  } else if (keyCode === RIGHT_ARROW) {
    //display Muhammad image 1
    image(muhammadImage, 0, 0);
    muhammadImage.resize(windowWidth, windowHeight);
    display = "";
    keyCode = "";
  }
}

function keyTyped() {
  //play sounds from the sound set associated with its numeric key

  if (key === "1" && display !== "menu" ) {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      again.loop();
    } else if (choice === "b") {
      order.loop();
    } else if (choice === "c") {
      question.loop();
    } else if (choice === "d") {
      imperatif.loop();
    } else if (choice === "e") {
      whoops.loop();
    }
  }

  else if (key === "2" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      anger.loop();
    } else if (choice === "b") {
      gibberish.loop();
    } else if (choice === "c") {
      frustrationNoise.loop();
    } else if (choice === "d") {
      haecDies.loop();
    } else if (choice === "e") {
      patience.loop();
    }
  }

  else if (key === "3" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      end.loop();
    } else if (choice === "b") {
      happy.loop();
    } else if (choice === "c") {
      jienanVars.loop();
    } else if (choice === "d") {
      smack.loop();
    } else if (choice === "e") {
      outtake.loop();
    }
  }

  else if (key === "4" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      awkwardMoment.loop();
    } else if (choice === "b") {
      notHappy.loop();
    } else if (choice === "c") {
      mansbridge.loop();
    } else if (choice === "d") {
      lady.loop();
    } else if (choice === "e") {
      moreFrench.loop();
    }
  }

  else if (key === "5" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      distraction.loop();
    } else if (choice === "b") {
      japanese.loop();
    } else if (choice === "c") {
      frenchWhat.loop();
    } else if (choice === "d") {
      thankYou.loop();
    } else if (choice === "e") {
      cough.loop();
    }
  }

  else if (key === "6" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      cold.loop();
    } else if (choice === "b") {
      delight.loop();
    } else if (choice === "c") {
      uh.loop();
    } else if (choice === "d") {
      kinematics.loop();
    } else if (choice === "e") {
      comment.loop();
    }
  }

  else if (key === "7" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      precious.loop();
    } else if (choice === "b") {
      explenation.loop();
    } else if (choice === "c") {
      physics.loop();
    } else if (choice === "d") {
      law.loop();
    } else if (choice === "e") {
      advice.loop();
    }
  }

  else if (key === "8" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      flub.loop();
    } else if (choice === "b") {
      realize.loop();
    } else if (choice === "c") {
      shoot.loop();
    } else if (choice === "d") {
      screwUp.loop();
    } else if (choice === "e") {
      water.loop();
    }
  }

  else if (key === "9" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      politician.loop();
    } else if (choice === "b") {
      language.loop();
    } else if (choice === "c") {
      lateComer.loop();
    } else if (choice === "d") {
      ok.loop();
    } else if (choice === "e") {
      welcome.loop();
    }
  }

  else if (key === "0" && display !== "menu") {
    selection = ["a", "b", "c", "d", "e"];
    choice = random(selection);
    if (choice === "a") {
      gregory.loop();
    } else if (choice === "b") {
      gun.loop();
    } else if (choice === "c") {
      excuse.loop();
    } else if (choice === "d") {
      reprise.loop();
    } else if (choice === "e") {
      sun.loop();
    }
  }
}


function mouseWheel(event) {
  //change the volume using the mouse wheel

  if (event.delta > 0) {
    dynamic = dynamic += 0.1;
  } else {
    dynamic = dynamic -= 0.1;
  }
  dynamic = constrain(dynamic, 0, 1.0);
}


function mouseClicked() {
  //stop all sounds from playing

  noSound();
}


function mouseMoved() {
  //alernate between the 2 images of Muhammad
  
  if (mouseY > height / 2 && display !== "menu") {
    image(muhammadImage, 0, 0);
    muhammadImage.resize(windowWidth, windowHeight);
  } else if (mouseY < height / 2 && display !== "menu") {
    image(secondMuhammad, 0, 0);
    secondMuhammad.resize(windowWidth, windowHeight);
  }
}


