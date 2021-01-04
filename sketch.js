var catLastImg,catImg2;
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat.addAnimation("catLastImage",catImg3);
   cat.addAnimation("catRunning", catImg2);
}

function draw() 
{
    background(255);
    //Write condition here to evalute if tom and jerry collide
    text(mouseX + ',' + mouseY,10,50);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.changeAnimation("catRunning");  
}

}