let codeStreams = [];
let img, girl, homeIcon, glitchGoblin, pressStart2P;
let homeIconX, homeIconY, homeIconWidth, homeIconHeight;
let speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight;
let song;
let widthGirl, heightGirl;
let titleSize = 70;
let cc = 0;
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    homeIconX = 50;
    homeIconY = 45;
    homeIconWidth = 22;
    homeIconHeight = homeIconWidth / 150 * 137;
    speakerOffX = width - 50;
    speakerOffY = 45;
    speakerOffWidth = 25;
    speakerOffHeight = speakerOffWidth / 150 * 137;
    // // Tạo các đối tượng CodeStream và thêm vào mảng codeStreams
    for (let x = 0; x < width; x += 30) {
        codeStreams.push(new CodeStream(random(width)));
    }

    let aspectRatio = 3960 / 2160;
    heightGirl = height;
    widthGirl = heightGirl * aspectRatio;
}
function preload() {
    song = loadSound('song/snow.mp3');
    speakerOn = loadImage('image/SpeakerOn.png');
    speakerOff = loadImage('image/SpeakerOff.png');
    glitchGoblin = loadFont('font/GlitchGoblin-2O87v.ttf');
    pressStart2P = loadFont('font/PressStart2P-Regular.ttf');
    girl = loadImage('image/girl.png');
    homeIcon = loadImage('image/HomeButton.png');
}
function draw() {
    background(21, 21, 21);
    if (random(1) < 0.7) {
        codeStreams.push(new CodeStream(random(width)));
    }

    if (song.isPlaying()) {
        image(speakerOn, speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight);
    } else {
        image(speakerOff, speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight);
    }
    if (isMouseOver(speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight)) {
        cursor(HAND);
    } else { cursor(); }
    // Hiển thị và cập nhật từng đối tượng CodeStream trong mảng codeStreams
    for (let i = 0; i < codeStreams.length; i++) {
        codeStreams[i].update();
        codeStreams[i].display();
        if (codeStreams[i].done && codeStreams.length > 40) {
            codeStreams.splice(i, 1);
        }
    }
    imageMode(CENTER);
    image(girl, width / 2, height / 2, widthGirl, heightGirl);

    textAlign(CENTER, CENTER);
    textSize(titleSize);
    textFont(glitchGoblin);
    fill(255, 255, 255);
    text("digital apparatus", width / 2 + 4, height / 5);
    fill(0, 255, 0);
    text("digital apparatus", width / 2, height / 5);

    textSize(13);
    textFont(pressStart2P);
    fill(255, 255, 255);
    text("They tell us what to eat, what to wear, what to care, what to love", width / 2, height / 5 + titleSize);

    rectMode(CENTER);
    fill(0, 255, 0);
    rect(width / 2, height / 2 - height / 15, 250, height / 13, 20);
    textFont(pressStart2P);
    fill(21, 21, 21);
    text("FIND MORE", width / 2, height / 2 - height / 15);
    if (mouseX > width / 2 - 125 && mouseX < width / 2 + 125 &&
        mouseY > height / 2 - height / 15 - height / 26.6 && mouseY < height / 2 - height / 15 + height / 26.6) {
        cursor(HAND);
    } else {
        cursor();
    }
    textFont(pressStart2P);
    textSize(20);
    textAlign(LEFT, CENTER);
    fill(255);
    text("ESC", 50, 35);
    menu();
}


function mousePressed() {
    if (isMouseOver(homeIconX, homeIconY, homeIconWidth, homeIconHeight)) {
        window.location.href = "index.html";
    }

    if (isMouseOver(speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight)) {
        if (song.isPlaying()) {
            song.stop();
        } else {
            song.play();
        }
    }
    if (mouseX > width / 2 - 125 && mouseX < width / 2 + 125 &&
        mouseY > height / 2 - height / 15 - height / 26.6 && mouseY < height / 2 - height / 15 + height / 26.6) {
        window.location.href = "run.html";
    }
}

function isMouseOver(x, y, w, h) {
    return mouseX > x - w / 2 && mouseX < x + w / 2 &&
        mouseY > y - h / 2 && mouseY < y + h / 2;
}