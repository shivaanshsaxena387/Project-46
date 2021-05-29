var stone,snake,lion,rhino,pc,oro,trap,forest
var trapImage,oroImage,pcImage, forestImage,stoneImage,bg,lion,lionImage,rhino,rhinoImage

function preload(){
  trapImage=loadImage("beartrap.png")
  stoneImage=loadImage("stone.png")
  oroImage=loadImage("orochimaru.png")
  pcImage=loadAnimation("h1.png","h2.png","h3.png","h4.png","h5.png","h6.png","h7.png","h8.png","h9.png","h10.png","h11.png","h12.png","h13.png","h14.png",)
  forestImage=loadImage("forest.png")
  lionImage=loadAnimation("tile000.png","tile001.png","tile002.png","tile003.png","tile004.png","tile005.png","tile006.png",
                     "tile007.png")
  rhinoImage=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png","r9.png",
                       "r10.png","r11.png","r12.png",)
  
}




function setup() {
  createCanvas(800,550,200,200)
  bg = createSprite(500,300)
  bg.addImage(forestImage)
  bg.scale=1.77
  bg.velocityX=-10

  pc=createSprite(10,200)
  pc.addAnimation("pc1",pcImage)
  pc.scale=0.9
  
    
 
}

function draw() {
  background("green");
  
    if(bg.x<0){
      bg.x=400
    }

    if(keyDown("space")){
      pc.velocityY=-3
    }

    pc.velocityY=pc.velocityY+0.5

   edges= createEdgeSprites()
    pc.collide(edges)

    obstacles();

  drawSprites()
}

function obstacles() {
  if(frameCount%180===0){
  obstacle=createSprite(800,530)
  obstacle.velocityX=-3
  obstacle.x=Math.round(random(780,540));
  var rand=Math.round(random(1,3));
  switch(rand){
    case 1:obstacle.addImage(trapImage);
    obstacle.scale=0.5
    break;

    case 2:obstacle.addAnimation("lion1",lionImage);
    obstacle.scale=2
    break;
    

    case 3:obstacle.addAnimation("rhino1",rhinoImage);
    obstacle.scale=2
    break;
  default:break;
  }
  
  
}
 }