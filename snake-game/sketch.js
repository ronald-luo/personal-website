let snake;
resolution = 10;
let food;
let w;
let h;

function setup() {
    createCanvas(500,500);
    w = floor(width/resolution);
    h = floor(height/resolution)
    frameRate(9)
    snake = new Snake();
    foodlocation();
}

function foodlocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function draw() {
    background(51);
    scale(resolution);

    if (snake.eat(food)) {
        foodlocation();
    }

    snake.update();
    snake.show();

    noStroke()
    fill(255, 204, 100);
    rect(food.x, food.y, 1, 1);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0,-1);
    }
    else if (keyCode === DOWN_ARROW) {
        snake.setDir(0,1);
    }
    else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1,0);
    }
    else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1,0);
    }

}