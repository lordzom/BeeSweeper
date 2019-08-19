function Cell (i, j, w) {
this.i =i;
this.j = j;
this.x = i * w;
this.y = j * w;  
this.w = w;
this.neighborCount = 0;
  
  this.bee = false;
  this.revealed = false;
} 

  Cell.prototype.show = function (){
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
      if (this.bee) {
        fill(127);
  ellipse (this.x + this.w *0.5, this.y + this.w *0.5, this.w *0.5);
      } else {
        fill(200);
        rect(this.x , this.y, this.w, this.w);  
        if (this.neighborCount > 0) {
       textAlign (CENTER);
          fill(0);
          text(this.neighborCount, this.x + this.w *0.5, this.y + this.w - 6);          
      }       
    }
  }
}

