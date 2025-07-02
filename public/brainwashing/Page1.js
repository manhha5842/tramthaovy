
let intervalTime60 = 60;
let frameCountdown60 = intervalTime60;
let intervalTime30 = 30;
let frameCountdown30 = intervalTime30;
let intervalTime10 = 10;
let frameCountdown10 = intervalTime10;
let loop3_1 = 1;
let loop3_2 = 1;
let loop3_3 = 1;
let blink = false;

function page1() {
    frameCountdown60--;
    frameCountdown30 -= 10;
    frameCountdown10 -= 6;

    if (step === 1 || step === 2) {
        for (let i = 1; i <= 41; i++) {
            if (i === 2 || i === 35) { //  animation
                showBg(loop3_1, i);
            } else if (i === 19 || i === 22) {//  static
                showBg(2, i);
            } else if (i === 4 || i === 20 || i === 31) {
                showBg(loop3_2, i);
            } else if (i === 9 || i === 16 || i === 23 || i === 30 || i === 15 || i === 17) {
                showBg(loop3_2, i);
                showBgGreen(i);
            } else {
                showBg(loop3_3, i);
            }
        }
        if (frameCountdown60 <= 0) {
            loop3_1 = (loop3_1 + 1) % 3 + 1;
        }
        if (frameCountdown10 <= 0) {
            loop3_3 = (loop3_3 + 1) % 3 + 4;
        }
        if (frameCountdown30 <= 0) {
            loop3_2 = (loop3_2 + 1) % 3 + 7;
        }
    } else if (step === 3 || step === 4) {
        if (blink === false) {
            if (countAppeared <= 1) {
                showBg(10, 7);
            } else if (countAppeared <= 2) {
                showBg(11, 10);
                showBg(10, 7);
            } else if (countAppeared <= 3) {
                showBg(14, 21);
                showBg(11, 10);
                showBg(10, 7);
            } else if (countAppeared <= 4) {
                showBg(12, 36);
                showBg(14, 21);
                showBg(11, 10);
                showBg(10, 7);
            } else if (countAppeared <= 5) {
                showBg(14, 25);
                showBg(12, 36);
                showBg(14, 21);
                showBg(11, 10);
                showBg(10, 7);
            } else if (countAppeared <= 6) {
                showBg(13, 40);
                showBg(14, 25);
                showBg(12, 36);
                showBg(14, 21);
                showBg(11, 10);
                showBg(10, 7);
                blink = true;
            }
        } else {
            if ((countAppeared % 3 !== 0 && countAppeared > 6) || (blink == true && countAppeared % 3 !== 0)) {
                showBg(13, 40);
                showBg(12, 36);
                showBg(14, 25);
                showBg(14, 21);
                showBg(11, 10);
                showBg(10, 7);
            }
        }
        for (let i = 1; i <= 41; i++) {
            if (i === 2 || i === 35) {
                showBg(loop3_1, i);
                if (frameCountdown60 <= 0) {
                    loop3_1 = (loop3_1 + 1) % 3 + 1;
                }
            } else if (i === 19 || i === 22) {
                showBg(2, i);
                showBg(2, i);
            } else if (i === 4 || i === 20 || i === 31) {
                showBg(loop3_2, i);
                if (frameCountdown30 <= 0) {
                    loop3_2 = (loop3_2 + 1) % 3 + 7;
                }
            } else if (i === 9 || i === 16 || i === 23 || i === 30 || i === 15 || i === 17) {
                showBg(loop3_2, i);
                showBgGreen(i);
            } else if (i === 7 || i === 10 || i === 21 || i === 25 || i === 36 || i === 40) {

            } else {
                showBg(loop3_3, i);
                if (frameCountdown10 <= 0) {
                    loop3_3 = (loop3_3 + 1) % 3 + 4;
                }
            }
        }
    }

    if (step === 1) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text("Surfing social networks, I feel like I'm on a cross because\n it seems like anything can be judged by others", width / 2, height - 50 - padding, 1200, 100);

    } else if (step == 2) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text("I wonder if it's worth it to explain my actions to people I don't even know?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 3) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text("The more I share, the more I expose myself to judgment.\n But is silence the only alternative to avoid the scrutinizing?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 4) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text("Sometimes, the opportunity to speak up about the truth doesn't even exist", width / 2, height - 50 - padding, 1200, 100);
    }

    if (frameCountdown60 <= 0) {
        frameCountdown60 = intervalTime60;

    }
    if (frameCountdown30 <= 0) {
        frameCountdown30 = intervalTime60;
        if (step == 3 || step == 4) {
            countAppeared += 0.25;
        } else {
            countAppeared = 0;
            blink = false;
        }
    }
    if (frameCountdown10 <= 0) frameCountdown10 = intervalTime10;



}
