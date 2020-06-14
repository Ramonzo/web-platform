let screenW = 0;
let screenH = 0;
let mapImg;

function preload(){
  mapImg = loadImage("assets/img/map.png");
}

function setup() {
  screenW = (windowWidth*61)/100;
  screenH = (windowHeight*80)/100;
  let myCanvas = createCanvas(screenW, screenH);
  myCanvas.parent("map");
}

function draw() {
  background(255);
  image(mapImg, -3000, -3000, 5000, 5000);
  drawLines();
}
