let eyePos = [1, 6, 13, 20, 27, 34, 35, 36, 37, 38, 39, 40, 41, 33, 26, 19, 12, 5, 4, 3, 2, 7, 14, 21, 28, 29, 30, 31, 32, 25, 18, 11, 10, 9, 8, 15, 22, 23, 24, 17, 16];
let counterEye = 0;
let quietSecond = 100;
let blinkEye = false;
function page3() {
    frameCountdown10 -= 6;
    for (let i = 1; i <= 41; i++) {
        showBg(loop3_3, i);
    }
    if (step == 1) {
        counterEye = 0;
        blinkEye = false;

    } else {

        if (!blinkEye) {
            counterEye += 1;
            for (let i = 0; i < eyePos.length; i++) {
                if (counterEye > i * 10) {
                    showBg(17, eyePos[i]);
                    if (eyePos[i] == eyePos[eyePos.length - 1]) {
                        blinkEye = true;
                    }
                }
            }
        }
        if (blinkEye) {
            for (let i = 0; i < eyePos.length; i++) {
                if (counterEye > i * 10) {
                    if (counterEye % 180 > 10) {
                        showBg(17, eyePos[i]);
                    }
                }
            }
            counterEye += 1;
        }
    }



    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(13);
    textFont(pressStart2P);
    fill(0, 255, 0);
    if (step === 1) {
        text("And I'm also scared by how cheap personal data is", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 2) {
        text("Have to go to the bathroom at home because \nI'm afraid that there will be hidden cameras somewhere", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 3) {
        text("and those videos might be posted in some private chat group.", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 4) {
        text("At home? We installed security cameras in the house to protect ourselves,\nbut then it makes me more insecure than ever ? ", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 5) {
        text("It's disgusting but then what can I do?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 6) {
        text("I'm still trying to protect myself but it's so miserable and tiring that they always find new way ", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 7) {
        text("Really tiring haha…", width / 2, height - 50 - padding, 1200, 100);
    }

    if (frameCountdown10 <= 0) {
        loop3_3 = (loop3_3 + 1) % 3 + 4;
    }
}