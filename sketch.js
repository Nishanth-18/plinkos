const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle ;
var count = 0;
var gameState = "start"
var plinkos = [];
var divisions = [];
var ground;
var divisionHeight = 300;
var score=0;


function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world

  for (var k =0; k<= width; k = k + 80)
  {
    divisions.push(new Division (k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background("black"); 
  textSize(20)

  textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  Engine.update(engine);

 
  for (var i = 0; i< plinkos.length; i++)
  {
    plinkos[i].display();
  }
  
  

  

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }



  if(particle!=null)
  {
    particle.display();
    if (particle.body.position.y>760)
    {
      if(particle.body.position.x<300)
      {
        score = score + 500;
        particle=null;
        if(count>=5) 
        {
          gameState = "end"
        }
      }
      else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) { score = score + 100; particle=null; if ( count>= 5) gameState ="end"; } else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) { score = score + 200; particle=null; if ( count>= 5) gameState ="end"; }


    }
  }


  
  
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX, 10 ,10 ,10);
  }
}

