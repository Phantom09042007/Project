var Back_ground, Back_groundIMG
var Tom, jerry, Tom_img1, Tom_animation, Tom_img3, jerry_img1, jerry_animation, jerry_img3

function preload() {
    Back_groundIMG = loadImage("images/garden.png");
    Tom_img1 = loadAnimation("images/cat1.png");
    Tom_animation = loadAnimation("images/cat2.png","images/cat3.png");
    Tom_img3 = loadImage("images/cat4.png");
    jerry_img1 = loadImage("images/mouse1.png");
    jerry_animation = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_img3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    Back_ground = createSprite(500,400,50,50);
    Back_ground.addImage(Back_groundIMG);
    Tom = createSprite(700, 600, 50, 50);
    Tom.addImage(Tom_img1);
    Tom.scale = 0.2
    jerry = createSprite(200,620,50,50)
    jerry.addImage(jerry_img1);
    jerry.scale = 0.17
}

function draw() {

    background(255);
    keyPressed();

    drawSprites();
}


function keyPressed(){
    if (keyDown("space")){
        Tom.velocityX = -3
        Tom.addAnimation("Changing",Tom_animation);
        Tom.changAnimation("Changing");
        jerry.addAnimation(jerry_animation);
    }




}
