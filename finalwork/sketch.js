// 最終課題を制作しよう

let w = 400;
let h = 400;
let loopStatus = true;
function setup() {
  createCanvas(w, h);
  background(255,255,255);
  frameRate(5);
}

function draw() {
  background(255,255,255);
  icon(200,200, 300, 5);
  
  push();
  stroke(color(218,112, 214));
  translate(260, 260);
  rotate(frameCount );
  guruguru(20, 65);
  pop();

  push();
  stroke(color(255, 215, 0));
  translate(92, 230);
  rotate(-frameCount );
  guruguru(10, 40);
  pop();

  push();
  stroke(color(0, 0, 200));
  translate(160, 120);
  rotate(-frameCount );
  guruguru(30, 60);
  pop();

  
}
function icon(x, y, size, num) {
  
  const d = size / num;
  for (let i = 0; i < num; i++) {
    
    if(i==0){
      fill(56,56,56);
    }
    
    else if(i==1){
      fill(102,89,144);
    }
    
    else if(i==2){
      fill(170,165,209);
    }
    
    else if(i==3){
      fill(248,172,172);
    }
    
    else{
      fill(247,201,206);
    }
    ellipse(x, y, size - i * d, size - i * d);
    
    
    fill(0,0,0)
    textSize(50);
    textFont("fantasy");
    text("Grobun IT",x-100,y+10)
  }
}

function guruguru(n, r){
  let rad = TWO_PI / n;

  for(i = 0; i < TWO_PI; i += 0.1){
    let y1 = 0;
    let y2 = 0;
    if(sin(i * n) >= 0){
      y1 = r;
    }else{
      y2 = r*0.01;
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }
  
}

function mousePressed(){
  if(loopStatus){
    noLoop();
    loopStatus = false;
  }else{
    loop();
    loopStatus = true;
  }
}
