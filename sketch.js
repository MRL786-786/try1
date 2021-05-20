var manqabat;
var m2


function preload(){
  
  BG= loadImage("Screenshot (36).png")
  
 manqabat = loadSound("Ajal Allah ho Zahurak - Arabi Munqabat.mp3")
  
 m2 = loadSound("Abad-Wallah-Ma-Ninsa-Hussaina-Ba.mp3")
}

function setup() {
  createCanvas(1000,600);
  
}

function draw() {
  background(BG);
  
   
  if(keyIsDown(49)){
    manqabat.play();
  }
  
  if(keyIsDown(50)){
    m2.play();
  }
}
