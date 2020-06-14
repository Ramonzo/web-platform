class Driver{
  constructor(node_id, start_time, move_v){
    this.node_id = node_id;
    this.start_time = start_time;
    this.move_v = move_v;
    this.timer = millis();
    this.startTimer = millis();
    this.show = true;
    this.start = false;
  }
  draw(){
    if(this.start == true){
      push();
      imageMode(CENTER);
      noStroke();
      translate(node[this.node_id][0], node[this.node_id][1]);
      let a = atan2((this.node_id == 9 ? node[this.node_id-1][1] : node[this.node_id+1][1])  - node[this.node_id][1] / 2, (this.node_id == 9 ? node[this.node_id-1][0] : node[this.node_id+1][0]) - node[this.node_id][0] / 2);
      rotate(a);
      image(truckImg, 0, 0, 20, 20);
      pop();
    }
  }
  setNodeId(node_id){
  }
  move(){
    if((millis() - this.timer) >= this.move_v && this.start == true){
      this.timer = millis();
      if(this.node_id+1 > 9){
        this.start = false;
      }else{
        this.node_id++;
      }
    }else if((millis() - this.startTimer) >= this.start_time){
      this.start = true;
    }
  }
}
