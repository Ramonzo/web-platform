//Toten Class
class Toten {
  constructor(node_id){
    this.size = 15;
    this.state = 0;
    this.node_id = node_id;
  }
  draw(){
    if(frameCount % 20 == 0){
      this.setState();
    }
    if(this.state == 0){
      fill(color("#78C29E"));
    }else if(this.state == 1){
      fill(color("#009790"));
    }else if(this.state == 2){
      fill(color("#FF805C"));
    }
    ellipseMode(CENTER);
    noStroke();
    ellipse(node[this.node_id][0], node[this.node_id][1], this.size, this.size);
    fill(color("white"));
    text("324T-"+(this.node_id+1), node[this.node_id][0]+10, node[this.node_id][1]);
  }
  setState(){
    let percent = random(0, 100);
    if(percent <= 80){
      this.state = 0;
    }else if(percent <= 90){
      this.state = 1;
    }else if(percent <= 100){
      this.state = 2;
    }
  }
  getState(){
    return this.state;
  }
  getNodeId(){
    return this.node_id;
  }
}
