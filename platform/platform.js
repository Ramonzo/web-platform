//Screen Proportion based on parent div
let screenW = 0;
let screenH = 0;
//Image Brazil
let mapImg;
//Node
let node = [
            [50, 50],
            [90, 120],
            [160, 180],
            [210, 250],
            [260, 300],
            [300, 320],
            [330, 350],
            [400, 400],
            [450, 430],
            [480, 480]
           ];
//Toten Class
let totens = [];
//Driver Class
let drivers = [];

function preload(){
  mapImg = loadImage("assets/img/map.png");
}

function setup() {
  screenW = (windowWidth*61)/100;
  screenH = (windowHeight*80)/100;
  let myCanvas = createCanvas(screenW, screenH);
  myCanvas.parent("map");
  createToten();
}

function draw() {
  background(255);
  image(mapImg, -3000, -3000, 5000, 5000);
  drawLines();
  drawToten();
}
