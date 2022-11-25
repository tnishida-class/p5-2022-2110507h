// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let x;


function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
}

function draw(){
  background(160, 192, 255);
  
  if(keyIsDown(" ".charCodeAt(0))){x=5;}
  else{x=1;}   

  //console.log(count)                         
  // BLANK[1]
  

  count=(count+x)%cycle;

  if(count<100){ellipse(width / 2, height / 2, count)}

  else{ellipse(width / 2, height / 2, 200-count);
}
}
