class TV {
    constructor(image, x, y, w, h, rotate) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotate = rotate;
        this.xHeartArray = [];
        this.yHeartArray = [];
    }
    import(type) {
        this.type = type;
    }
    background(background) {
        push();
        imageMode(CENTER);
        translate(this.x, this.y);
        rotate(radians(this.rotate));
        image(background, 0, 0, this.w, this.h);
        pop();
    }
    show() {
        push();
        imageMode(CENTER);
        translate(this.x, this.y);
        rotate(radians(this.rotate));
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
    heart() {
        push();
        strokeWeight(2);
        this.r = min(this.w, this.h) / 50;
        if (this.type == 1) {
            translate(this.x - 5, this.y);
        } else if (this.type == 2) {
            translate(this.x, this.y - 10);
        } else {
            translate(this.x, this.y);
        }
        if (this.rotate < -180) {
            rotate(radians(this.rotate));
            translate(-15, 0);
        } else {
            rotate(radians(180 + this.rotate));
        }
        // rotate(π);
        for (let i = 0; i < this.xHeartArray.length; i++) {
            stroke(243, 255, 238, 38);
            line(0, 0, this.xHeartArray[i], this.yHeartArray[i]);
        }
        for (let i = 20; i >= 0; i -= 0.5) {
            this.t = (frameCount - i) * 10 / 180;
            this.xHeart = this.r * 16 * pow(sin(this.t), 3);
            this.yHeart = this.r * (13 * cos(this.t) - 5 * cos(2 * this.t) - 2 * cos(3 * this.t) - cos(4 * this.t));
            stroke(243, 255, 238, 255 - i * 15);
            line(0, 0, this.xHeart, this.yHeart);
        }
        if (this.xHeartArray.length < 200) {
            this.xHeartArray.push(this.xHeart);
            this.yHeartArray.push(this.yHeart);
        }
        strokeWeight(0);
        resetMatrix();
        pop();
    }
}
function generateArrayTv(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let k = array[i] - 1;
        if (tvData[k].imageName == "imageTV1") {
            let a = new TV(imageTV1Green, tvData[k].x, tvData[k].y, tvData[k].width, tvData[k].height, tvData[k].angle);
            a.import(1);
            result.push(a);

        } else if (tvData[k].imageName == "imageTV2") {
            let a = new TV(imageTV1Green, tvData[k].x, tvData[k].y, tvData[k].width, tvData[k].height, tvData[k].angle);
            a.import(2);
            result.push(a);
        } else if (tvData[k].imageName == "imageTV3") {
            let a = new TV(imageTV1Green, tvData[k].x, tvData[k].y, tvData[k].width, tvData[k].height, tvData[k].angle);
            a.import(3);
            result.push(a);
        }
    }
    return result;
}

function showBgGreen(i) {
    i -= 1;
    if (tvData[i].imageName == "imageTV1") {
        let bg = new TV(imageTV1Green, tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    } else if (tvData[i].imageName == "imageTV2") {
        let bg = new TV(imageTV2Green, tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    } else if (tvData[i].imageName == "imageTV3") {
        let bg = new TV(imageTV3Green, tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    }
}
function showText(content, i, size) {
    i = i - 1;
    textSize(size);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textFont(pressStart2P);
    fill(0, 255, 0);
    if (tvData[i].imageName == "imageTV1") {
        push();
        if (tvData[i].angle < -180 || tvData[i].angle == 180) {
            translate(tvData[i].x + 7, tvData[i].y);
            rotate(radians(180 + tvData[i].angle));
        } else {
            translate(tvData[i].x - 7, tvData[i].y);
            rotate(radians(tvData[i].angle));
        }
        text(content, 0, 0, tvData[i].height, tvData[i].width);
        pop();

    } else if (tvData[i].imageName == "imageTV2") {
        push();
        translate(tvData[i].x, tvData[i].y - 5);
        rotate(radians(tvData[i].angle));
        text(content, 0, 0, tvData[i].height, tvData[i].width);
        pop();
    } else if (tvData[i].imageName == "imageTV3") {
        push();
        translate(tvData[i].x, tvData[i].y);
        rotate(radians(tvData[i].angle));
        text(content, 0, 0, tvData[i].height, tvData[i].width);
        pop();
    }
}
function showBg(numberImage, i) {
    numberImage -= 1;
    i -= 1;
    if (tvData[i].imageName == "imageTV1") {
        let bg = new TV(imageTV1BG[numberImage], tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    } else if (tvData[i].imageName == "imageTV2") {
        let bg = new TV(imageTV2BG[numberImage], tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    } else if (tvData[i].imageName == "imageTV3") {
        let bg = new TV(imageTV3BG[numberImage], tvData[i].x, tvData[i].y, tvData[i].width, tvData[i].height, tvData[i].angle);
        bg.show();
    }
}
function showHeart(i, TV) {
    i = i - 1;
    for (let i = 0; i < TV.length; i++) {
        if (TV[i].imageName == "imageTV1") {
            TV[i].heart();
        } else if (TV[i].imageName == "imageTV2") {
            TV[i].heart();
        } else if (TV[i].imageName == "imageTV3") {
            TV[i].heart();
        }
    }

} 