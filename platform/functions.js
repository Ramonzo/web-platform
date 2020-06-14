//Faz recalculos caso a tela seja alterada de tamanho.
function windowResized() {
  resizeCanvas(screenW, screenH);
}
function drawLines(){
  stroke(color("#D3F4E1"));
  strokeWeight(4);
  line(50,50,100,100);
}
