class CodeStream {
    constructor(x) {
        this.x = x;
        this.chars = [];
        this.textSize = floor(random(8, 28));
        this.maxNum = 35;
        this.keep = 0;
        this.test = 2;
        this.test2 = 2;
        this.speed = this.textSize * 2;
        this.y = random((-this.textSize * this.maxNum) * 3, 0);
        for (let i = 0; i < height + (this.textSize * this.maxNum); i += this.textSize) {
            this.chars.push(new Char(floor(random(2)), this.x, i, this.textSize, 0));
        }
    }

    update() {
        this.y += this.speed;
        this.keep = 0;
        for (let i = this.chars.length - 1; i >= 0; i--) {
            if (this.chars[i].y < this.y && this.chars[i].y > this.y - (this.maxNum * this.textSize)) {
                this.chars[i].update(255 * this.test);
                this.test -= 0.05;
                this.keep++;
            } else {
                this.chars[i].update(0);
            }

        }
        this.test = 2;
        if (this.y > height + (this.textSize * this.maxNum) * 2) {
            this.y = 0;
            this.done = true;
        }
    }

    display() {
        for (let i = 0; i < this.chars.length; i++) {
            this.chars[i].show();
        }
    }
}
