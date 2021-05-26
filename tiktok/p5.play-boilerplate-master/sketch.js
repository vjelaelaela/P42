var hr,mn,se


function setup() {
  createCanvas(800,400);
  hr=hour()
  mn=minute()
  se=second()
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(200,200)  
  drawSprites();
  rotate(-90)
  seAngle = map(se, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  strokeWeight(7)
 push() 
rotate(seAngle)
stroke(255,0,0)
line(0,0,100,0)
pop()
push()
rotate(mnAngle)
stroke(0,255,0)
line(0,0,70,0)
pop()
push()
rotate(hrAngle)
stroke(0,0,255)
line(0,0,50,0)
pop()
}