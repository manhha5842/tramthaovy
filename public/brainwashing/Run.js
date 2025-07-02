
let codeStreams = [];
let img, homeIcon, glitchGoblin, pressStart2P, song;
let titleSize = 70;
let imageTV1, imageTV1Green, imageTV1Height, imageTV1Width,
    imageTV2, imageTV2Green, imageTV2Height, imageTV2Width,
    imageTV3, imageTV3Green, imageTV3Height, imageTV3Width,
    speakerOff, speakerOn, girl;
let girtWidth, girlHeight;
let imageTV1BG = [];
let imageTV2BG = [];
let imageTV3BG = [];
let homeIconX, homeIconY, homeIconWidth, homeIconHeight;
let speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight;
let step;
let tvData = [];
let tvs = [];
let countAppeared = 0;
let padding = 0;
let page = 1;
let heartPos = [2, 4, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 22, 23, 24, 30];
let heartTVArray;
let chainMask;
let counterMask = 0;
let opacity = 0;
let chainBlink = false;
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
    imageTV1Height = 77;
    imageTV1Width = imageTV1Height * 614 / 450;
    imageTV2Height = 83;
    imageTV2Width = imageTV2Height * 422 / 406;
    imageTV3Height = 77;
    imageTV3Width = imageTV3Height * 685 / 418;
    step = 1;
    tvData = [
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 240, y: height / 2 - 120, width: imageTV1Width, height: imageTV1Height, angle: -185 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 135, y: height / 2 - 120, width: imageTV3Width, height: imageTV3Height, angle: 5 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 20, y: height / 2 - 120, width: imageTV3Width, height: imageTV3Height, angle: 1 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 85, y: height / 2 - 110, width: imageTV1Width, height: imageTV1Height, angle: 8 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 + 90 + 79, y: height / 2 - 115, width: imageTV2Width, height: imageTV2Height, angle: -8 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 290, y: height / 2 - 50, width: imageTV1Width, height: imageTV1Height, angle: -182 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 205, y: height / 2 - 45, width: imageTV2Width, height: imageTV2Height, angle: 10 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 110, y: height / 2 - 50, width: imageTV1Width, height: imageTV1Height, angle: -185 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 20, y: height / 2 - 50, width: imageTV2Width, height: imageTV2Height, angle: 8 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 80, y: height / 2 - 50, width: imageTV3Width, height: imageTV3Height, angle: -3 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 190, y: height / 2 - 55, width: imageTV3Width, height: imageTV3Height, angle: -4 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 + 290, y: height / 2 - 60, width: imageTV2Width, height: imageTV2Height, angle: -15 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 320, y: height / 2 + 8, width: imageTV3Width, height: imageTV3Height, angle: 5 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 215, y: height / 2 + 20, width: imageTV3Width, height: imageTV3Height, angle: 5 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 115, y: height / 2 + 15, width: imageTV2Width, height: imageTV2Height, angle: -5 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 20, y: height / 2 + 15, width: imageTV3Width, height: imageTV3Height, angle: 1 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 85, y: height / 2 + 15, width: imageTV1Width, height: imageTV1Height, angle: 8 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 + 90 + 84, y: height / 2 + 15, width: imageTV2Width, height: imageTV2Height, angle: -8 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 260, y: height / 2 + 15, width: imageTV1Width, height: imageTV1Height, angle: 8 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 300, y: height / 2 + 75, width: imageTV2Width, height: imageTV2Height, angle: -10 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 200, y: height / 2 + 80, width: imageTV3Width, height: imageTV3Height, angle: -3 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 110, y: height / 2 + 80, width: imageTV2Width, height: imageTV2Height, angle: 5 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 25, y: height / 2 + 80, width: imageTV1Width, height: imageTV1Height, angle: -188 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 + 60, y: height / 2 + 80, width: imageTV2Width, height: imageTV2Height, angle: 3 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 140, y: height / 2 + 80, width: imageTV1Width, height: imageTV1Height, angle: 8 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 255, y: height / 2 + 80, width: imageTV3Width, height: imageTV3Height, angle: -3 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 290, y: height / 2 + 150, width: imageTV2Width, height: imageTV2Height, angle: 3 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 210, y: height / 2 + 155, width: imageTV2Width, height: imageTV2Height, angle: -10 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 125, y: height / 2 + 140, width: imageTV1Width, height: imageTV1Height, angle: 4 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 20, y: height / 2 + 140, width: imageTV3Width, height: imageTV3Height, angle: 0 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 90, y: height / 2 + 145, width: imageTV3Width, height: imageTV3Height, angle: 0 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 185, y: height / 2 + 145, width: imageTV1Width, height: imageTV1Height, angle: 4 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 285, y: height / 2 + 150, width: imageTV3Width, height: imageTV3Height, angle: 10 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 - 330, y: height / 2 + 209, width: imageTV3Width, height: imageTV3Height, angle: 10 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 230, y: height / 2 + 215, width: imageTV1Width, height: imageTV1Height, angle: -3 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 - 140, y: height / 2 + 205, width: imageTV2Width, height: imageTV2Height, angle: 10 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 - 60, y: height / 2 + 200, width: imageTV1Width, height: imageTV1Height, angle: 180 },
        { imageName: "imageTV2", image: imageTV2, x: width / 2 + 20, y: height / 2 + 205, width: imageTV2Width, height: imageTV2Height, angle: 5 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 100, y: height / 2 + 210, width: imageTV1Width, height: imageTV1Height, angle: -188 },
        { imageName: "imageTV1", image: imageTV1, x: width / 2 + 190, y: height / 2 + 210, width: imageTV1Width, height: imageTV1Height, angle: 4 },
        { imageName: "imageTV3", image: imageTV3, x: width / 2 + 292, y: height / 2 + 215, width: imageTV3Width, height: imageTV3Height, angle: -5 },
    ];
    for (let i = 0; i < tvData.length; i++) {
        let tv = new TV(
            tvData[i].image,
            tvData[i].x,
            tvData[i].y,
            tvData[i].width,
            tvData[i].height,
            tvData[i].angle
        );
        tvs.push(tv);
    }
    girlHeight = 704;
    if (width / height < 1.2) {
        padding = 10;
    }
    girtWidth = girlHeight * 3960 / 2160;


    fortyOneArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < fortyOneArray.length; i++) {
        if (!breakingPos.includes(fortyOneArray[i])) {
            madamPos.push(fortyOneArray[i]);
        }
    }
    heartTVArray = generateArrayTv(heartPos);
    chainHeight = 785;
    chainWidth = chainHeight * 3960 / 2160;

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function preload() {
    song = loadSound('song/snow.mp3');
    glitchGoblin = loadFont('font/GlitchGoblin-2O87v.ttf');
    pressStart2P = loadFont('font/PressStart2P-Regular.ttf');
    girl = loadImage('image/girlBody.png');
    homeIcon = loadImage('image/HomeButton.png');
    speakerOn = loadImage('image/SpeakerOn.png');
    speakerOff = loadImage('image/SpeakerOff.png');
    imageTV1 = loadImage('image/TV-1.png');
    imageTV2 = loadImage('image/TV-2.png');
    imageTV3 = loadImage('image/TV-3.png');
    imageTV1Green = loadImage('image/TV-1-green.png');
    imageTV2Green = loadImage('image/TV-2-green.png');
    imageTV3Green = loadImage('image/TV-3-green.png');
    for (let i = 0; i < 17; i++) {
        imageTV1BG.push(loadImage(`image/TV-1-BG-${i + 1}.png`));
        imageTV2BG.push(loadImage(`image/TV-2-BG-${i + 1}.png`));
        imageTV3BG.push(loadImage(`image/TV-3-BG-${i + 1}.png`));
    }
    chain_1 = loadImage('image/chain_1.png');
    chain_2 = loadImage('image/chain_2.png');
    chain_3 = loadImage('image/chain_3.png');
    chain_4 = loadImage('image/chain_4.png');
    chain_5 = loadImage('image/chain_5.png');
    chain_6 = loadImage('image/chain_6.png');


}
function draw() {
    background(21, 21, 21);
    textAlign(CENTER, CENTER);
    textSize(titleSize);
    textFont(glitchGoblin);
    fill(255, 255, 255);
    text("digital apparatus", width / 2 + 4, height / 6 - padding);
    fill(0, 255, 0);
    text("digital apparatus", width / 2, height / 6 - padding);

    textFont(pressStart2P);
    textSize(20);
    rectMode(CENTER);
    textAlign(LEFT, CENTER);
    fill(255);
    image(homeIcon, homeIconX, homeIconY, homeIconWidth, homeIconHeight);
    text("ESC", homeIconX + 50, 45);
    text("0" + page, speakerOffX - 50 - speakerOffWidth, 45);

    if (song.isPlaying()) {
        image(speakerOn, speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight);
    } else {
        image(speakerOff, speakerOffX, speakerOffY, speakerOffWidth, speakerOffHeight);
    }
    if (isMouseOver(homeIconX , homeIconY , homeIconWidth, homeIconHeight) || isMouseOver(speakerOffX , speakerOffY, speakerOffWidth, speakerOffHeight)) {
        cursor(HAND);
    } else { cursor(); }

    if (page == 1) {
        page1();
    } else if (page == 2) {
        page2();
    } else if (page == 3) {
        page3();
    } else if (page == 4) {
        page4();
    } else if (page == 5) {
        page5();
    }

    //TV
    for (let i = 0; i < tvs.length; i++) {
        tvs[i].show();
    }
    rectMode(CENTER);
    imageMode(CENTER);
    image(girl, width / 2 - 25, height / 2 + 50, girtWidth, girlHeight);


    // image(chain_1, width / 2, height / 2, chainWidth, chainHeight);
    // image(chain_2, width / 2, height / 2, chainWidth, chainHeight);
    // image(chain_3, width / 2, height / 2, chainWidth, chainHeight);
    // image(chain_4, width / 2, height / 2, chainWidth, chainHeight);
    // image(chain_5, width / 2, height / 2, chainWidth, chainHeight);
    // image(chain_6, width / 2, height / 2, chainWidth, chainHeight);


    menu();
    if (page == 5 && step == 2) {
        drawChain();
    }
    if (page == 5 && step == 3) {
        eraseChain();
    }
}

function eraseChain() {
    if (chainBlink) {
        if (opacity <= 255) {
            push();
            tint(255, opacity);
            image(chain_1, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_2, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_3, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_4, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_5, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_6, width / 2, height / 2, chainWidth, chainHeight);
            pop();
        }
        opacity -= 4;
    } else {
        opacity = 1;
    }
}
function drawChain() {
    opacity += 2;

    if (opacity < 255) {
        push();
        tint(255, opacity);
        image(chain_1, width / 2, height / 2, chainWidth, chainHeight);
        image(chain_2, width / 2, height / 2, chainWidth, chainHeight);
        image(chain_3, width / 2, height / 2, chainWidth, chainHeight);
        image(chain_4, width / 2, height / 2, chainWidth, chainHeight);
        image(chain_5, width / 2, height / 2, chainWidth, chainHeight);
        image(chain_6, width / 2, height / 2, chainWidth, chainHeight);
        pop();
    } else {
        opacity = 255;
        counterMask += 1;
        if ((counterMask > 70 && counterMask < 80) || (counterMask > 140 && counterMask < 150) || (counterMask > 210 && counterMask < 220)) {
            chainBlink = false;
        } else {
            if (counterMask > 230) {
                counterMask = 230;
            }
            chainBlink = true;
            image(chain_1, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_2, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_3, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_4, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_5, width / 2, height / 2, chainWidth, chainHeight);
            image(chain_6, width / 2, height / 2, chainWidth, chainHeight);
        }
    }
}

function keyPressed() {



    // Kiểm tra nếu phím Space được nhấn
    if (key === ' ') {
        step++;
        if (page >= 1 && page <= 2 && step > 4) {
            step = 1;
        } else if (page === 3 && step > 7) {
            step = 1;
        } else if ((page === 4 || page === 5) && step > 5) {
            step = 1;
        }

        if (step == 4 || step == 3) {
            countAppeared = 0;
        }
    } else if (key === '1') {
        page = 1;
        opacity = 0;
        step = 1;

    } else if (key === '2') {
        page = 2;
        opacity = 0;
        step = 1;

    } else if (key === '3') {
        opacity = 0;
        page = 3;
        step = 1;
    } else if (key === '4') {
        opacity = 0;
        page = 4;
        step = 1;
    } else if (key === '5') {
        page = 5;
        step = 1;
    }

}
function mousePressed() {
    if (isMouseOver(homeIconX , homeIconY , homeIconWidth, homeIconHeight)) {
        window.location.href = "index.html";
    }

    if (isMouseOver(speakerOffX , speakerOffY, speakerOffWidth, speakerOffHeight)) {
        if (song.isPlaying()) {
            song.stop();
        } else {
            song.play();
        }
    }
}

function isMouseOver(x, y, w, h) {
    return mouseX > x - w / 2 && mouseX < x + w / 2 &&
        mouseY > y - h / 2 && mouseY < y + h / 2;
}
