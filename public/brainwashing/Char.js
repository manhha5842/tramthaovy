class Char {
    constructor(code, x, y, textSize, blur) {
        this.code = code;
        this.x = x;
        this.y = y;
        this.textSize = textSize;
        this.blur = blur;
    }
    update(blur) {
        this.blur = blur;
    }
    hide() {
        this.blur -= 50;
    }
    show() {
        textFont(pressStart2P);
        fill(0, 200, 0, this.blur);
        textSize(this.textSize);
        text(this.code, this.x, this.y);
    }
}

