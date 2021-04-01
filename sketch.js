var Back_ground, Back_groundIMG
var Tom, jerry, Tom_img1, Tom_animation, Tom_img3, jerry_img1, jerry_animation, jerry_img3

function preload() {
    Back_groundIMG = loadImage("garden.png");
    Tom_img1 = loadImage("cat1.png");
    Tom_animation = loadAnimation("cat2.png","cat3.png");
    Tom_img3 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    Back_ground = createSprite(500,400,50,50);
    Back_ground.addImage(Back_groundIMG);

}

function draw() {

    background(255);
    

    drawSprites();
}


function keyPressed(){




}
