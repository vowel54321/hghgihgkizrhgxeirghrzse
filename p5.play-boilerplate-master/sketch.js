
var AnimeQ,PhysicsQ,MathsQ,BTSQ,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,cross;

function preload()
{
 AnimeQImg=loadAnimation("QP1NN.png","QP2NN.png","QP3NN.png","QP4NN.png","QP5NN.png")
}
function setup()
{
  AnimeQ = createSprite(235,135,20,20);
  AnimeQ.addAnimation("Animeq",AnimeQImg);
  //AnimeQ.setAnimation(AnimeQImg);
  PhysicsQ= createSprite(331,260,20,20);
  MathsQ= createSprite(264,365,20,20);
  BTSQ = createSprite(330,25,20,20);
  cross=createSprite(216.19,20,20);
  c1 = createSprite(106, 40,20,90);
c1.shapeColor=rgb(95,191,248);
c2 = createSprite(155,22,80,20);
c2.shapeColor= rgb(95,191,248);
c3 = createSprite (30,53,53,20);
c3.shapeColor= rgb(95,191,248);
c4= createSprite(85,121,90,20);
c4.shapeColor= rgb(95,191,248);
c5 = createSprite(170,116,20,90);
c5.shapeColor= rgb(95,191,248);
c6= createSprite(140,198,90,20);
c6.shapeColor = rgb(95,191,248);
c7 = createSprite(28,245,50,20);
c7.shapeColor=rgb(95,191,248);
c8 =createSprite(63,240,20,90);
c8.shapeColor=rgb (95,191,248);
c9 = createSprite(45,336,20,100);
c9.shapeColor=rgb(95,191,248);
c10 = createSprite(120,280,20,80);
c10.shapeColor= rgb(95,191,248);
c11 = createSprite(326,44,92,20);
c11.shapeColor=rgb(95,191,248);
c12 = createSprite(245,76,20,90);
c12.shapeColor=rgb(95,191,248);
c13 = createSprite(255,155,90,20);
c13.shapeColor=rgb(95,191,248);
c14= createSprite(329,125,20,100);
c14.shapeColor= rgb(95,191,248);
c15 = createSprite(345,215,100,20);
c15.shapeColor=rgb(95,191,248);
c16 = createSprite(338,280,120,20);
c16.shapeColor = rgb(95,191,248);
c17 = createSprite(270,289,20,70);
c17.shapeColor = rgb(95,191,248);
c18 = createSprite(315,365,20,70);
c18.shapeColor = rgb(95,191,248);
c19= createSprite(180,292,50,20);
c19.shapeColor= rgb(95,191,248);
c20 = createSprite(210,270,20,70);
c20.shapeColor=rgb(95,191,248);
c21=createSprite(189,346,20,80);
c21.shapeColor= rgb(95,191,248);
c22 = createSprite(258,389,80,20);
c22.shapeColor=rgb(95,191,248);
cross.velocityY=20;
cross.velocityX=10;
  }
  
function draw() {
background('black')
cross.scale=0.1;
//cross.setAnimation("CS.png_1");

cross.bounceOff(c1);
cross.bounceOff(c2);
cross.bounceOff(c3);
cross.bounceOff(c4);
cross.bounceOff(c5);
cross.bounceOff(c6);
cross.bounceOff(c7);
cross.bounceOff(c8);
cross.bounceOff(c9);
cross.bounceOff(c10);
cross.bounceOff(c11);
cross.bounceOff(c12);
cross.bounceOff(c13);
cross.bounceOff(c14);
cross.bounceOff(c15);
cross.bounceOff(c16);
cross.bounceOff(c17);
cross.bounceOff(c18);
cross.bounceOff(c19);
cross.bounceOff(c20);
cross.bounceOff(c21);
cross.bounceOff(c22);



PhysicsQ.scale=0.1;
//PhysicsQ.setAnimation("QM.png_1");

MathsQ.scale=0.1;
//MathsQ.setAnimation("QM.png_1");

BTSQ.scale=0.1;
////////////////////////////////////////////////////BTSQ.setAnimation("QM.png_1");




text("AnimeQ",245,135);
text('PhysicsQ',335,256);
text("MathsQ",236,353);
text("BTSQ",345,20);
drawSprites();
createEdgeSprites();
cross.bounceOff(edges);
}
