class Snake {
    constructor() {
        this.body = []; 
        this.body[0] = createVector(0, 0);
        this.xdir = 1;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }
    
    eat(pos) {
        let x = this.body[0].x;
        let y = this.body[0].y;
        if (x == pos.x && y == pos.y) {
            return true;
        }
        return false;
    }

    update() {
        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;
    }

    show() {
        fill(255, 204, 0)
        rect(this.body[0].x, this.body[0].y, 1, 1)
        
    }
}