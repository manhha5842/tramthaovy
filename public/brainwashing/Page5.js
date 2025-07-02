let chain_1, chain_2, chain_3, chain_4, chain_5, chain_6;
let chainWidth, chainHeight;
function page5() {
    frameCountdown60--;
    frameCountdown30 -= 10;
    frameCountdown10 -= 6;


    for (let i = 1; i <= 41; i++) {
        if (i === 2 || i === 35) { //  animation
            showBg(loop3_1, i);
        } else if (i === 19 || i === 22) {//  static
            showBg(2, i);
        } else if (i === 4 || i === 20 || i === 31) {
            showBg(loop3_2, i);
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


    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(13);
    textFont(pressStart2P);
    fill(0, 255, 0);
    if (step === 1) {
        text("Technology is truly something unpredictable", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 2) {
        text("The necessity of media has reached a point\n where I feel there is no alternative but to be entangled with it?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 3) {
        text("Haha, I don't mean to say everything is bad", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 4) {
        text("This work is just some of the trauma I experienced \nwhen consuming things in the wrong way", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 5) {
        text("There are so many good and bad things but \nI'm still finding a way to balance everything", width / 2, height - 50 - padding, 1200, 100);
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
