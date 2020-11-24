var deformation1,deformation2,deformation3,deformation4;

var car1,car2,car3,car4 ;
var wall1, wall2, wall3, wall4;
var speed1, speed2, speed3,speed4, weight ;
var box1,box2,box3,box4;

function setup() {
  createCanvas(800,400);
box1=createSprite(400,45,800,90);
box2=createSprite(400,145,800,90);
box3=createSprite(400,245,800,90);
box4=createSprite(400,345,800,90);

car1=createSprite(100, 45, 30, 30);
car2=createSprite(100, 145, 30, 30);
car3=createSprite(100, 245, 30, 30);
car4=createSprite(100, 345, 30, 30);


  wall1=createSprite(720,45,15,70);
  wall2=createSprite(720,145,15,70);
  wall3=createSprite(720,245,15,70);
  wall4=createSprite(720,345,15,70);

  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  
  weight=random(400,1500);
  box1.shapeColor="black";
  box2.shapeColor="black";
  box3.shapeColor="black";
  box4.shapeColor="black";

  car1.shapeColor="white";
  car2.shapeColor="white";
  car3.shapeColor="white";
  car4.shapeColor="white";

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;  

}

function draw() {


  background(225,225,225);  

//damage of wall1
if(wall1.x-car1.x <(car1.width+wall1.width/2)) {
  car1.velocityX=0;
  deformation1=0.5*weight*speed1*speed1/22509;
  console.log(deformation1);

  if(deformation1>180) {
    car1.shapeColor=color(225,0,0);
  }

  if(deformation1<180 && deformation1>100) {
    car1.shapeColor=color(230,230,0);
  }

  if(deformation1<100) {
    car1.shapeColor=color(0,225,0);
  }


}

//damage of wall2
if(wall2.x-car2.x <(car2.width+wall2.width/2)) {
  car2.velocityX=0;
  deformation2=0.5*weight*speed2*speed2/22509;
  

  if(deformation2>180) {
    car2.shapeColor=color(225,0,0);
  }

  if(deformation2<180 && deformation2>100) {
    car2.shapeColor=color(230,230,0);
  }

  if(deformation2<100) {
    car2.shapeColor=color(0,225,0);
  }


}

//damage of wall 3
if(wall3.x-car3.x <(car3.width+wall3.width/2)) {
  car3.velocityX=0;
  deformation3=0.5*weight*speed3*speed3/22509;

  if(deformation3>180) {
    car3.shapeColor=color(225,0,0);
  }

  if(deformation3<180 && deformation3>100) {
    car3.shapeColor=color(230,230,0);
  }

  if(deformation3<100) {
    car3.shapeColor=color(0,225,0);
  }

  //damage of wall4
  if(wall4.x-car4.x <(car4.width+wall4.width/2)) {
    car4.velocityX=0;
    deformation4=0.5*weight*speed4*speed4/22509;
    
    if(deformation4>180) {
      car4.shapeColor=color(225,0,0);
    }
  
    if(deformation4<180 && deformation4>100) {
      car4.shapeColor=color(230,230,0);
    }
  
    if(deformation4<100) {
      car4.shapeColor=color(0,225,0);
    }
  
  
  }
  

}

  drawSprites();




}