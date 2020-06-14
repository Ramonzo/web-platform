//Faz recalculos caso a tela seja alterada de tamanho.
function windowResized() {
  resizeCanvas(screenW, screenH);
}
//Draw highway lines
function drawLines(){
  //Line Proportie
  stroke(color("#D3F4E1"));
  strokeWeight(8);
  //Lines
  line(node[0][0], node[0][1], node[1][0], node[1][1]);
  line(node[1][0], node[1][1], node[2][0], node[2][1]);
  line(node[2][0], node[2][1], node[3][0], node[3][1]);
  line(node[3][0], node[3][1], node[4][0], node[4][1]);
  line(node[4][0], node[4][1], node[5][0], node[5][1]);
  line(node[5][0], node[5][1], node[6][0], node[6][1]);
  line(node[6][0], node[6][1], node[7][0], node[7][1]);
  line(node[7][0], node[7][1], node[8][0], node[8][1]);
  line(node[8][0], node[8][1], node[9][0], node[9][1]);
  line(node[9][0], node[9][1], node[10][0], node[10][1]);
}
//Create echo toten representation
function createToten(){
}
//Draw echo toten representation
function drawToten(){
  ellipseMode(CENTER);
  noStronke();
  
}
