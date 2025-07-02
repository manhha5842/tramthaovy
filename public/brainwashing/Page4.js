let breakingPos = [1, 3, 7, 11, 39, 15, 19, 25, 36, 28, 38, 20, 41];
let breakingStaticArray = [1, 11, 19, 20, 36, 38];
let breakingDynamicArray = [3, 7, 39, 15, 25, 28, 41];
let madamPos = [];
let countBreaking = 0;
let madamTV = false;
var breakingArray = [];
var madamStaticArray = [];
var madamDynamicArray = [];
let showNews = false;
let fortyOneArray = Array.from({ length: 41 }, (_, index) => index + 1);

const { PI: π } = Math





function page4() {

    frameCountdown10 -= 6;
    if (step == 1) {
        countBreaking += 1;
        if (!madamTV && !showNews) {
            for (let i = 0; i < breakingPos.length; i++) {
                if (countBreaking >= i * 10) {
                    showText("BREAKING\nNEWS", breakingPos[i], 7)
                    if (breakingPos[i] == breakingPos[breakingPos.length - 1]) {
                        madamTV = true;
                        countBreaking = 0;
                    }
                    if (i > 5) {
                        breakingArray.push(breakingPos[i]);
                    }
                }
            }
        }
        if (madamTV && !showNews) {
            for (let i = 0; i < breakingPos.length; i++) {
                showText("BREAKING\nNEWS", breakingPos[i], 7);
            }
            for (let i = 0; i < madamPos.length; i++) {
                if (countBreaking >= i * 8 && madamPos[i]) {
                    showBg(16, madamPos[i]);
                    if (madamPos[i] == madamPos[madamPos.length - 2]) {
                        showNews = true;
                        madamTV = false;
                        countBreaking = 0;
                    }
                }
                if (i > madamPos.length / 2 && !madamStaticArray.includes(madamPos[i])) {
                    madamStaticArray.push(madamPos[i]);
                } else if (i <= madamPos.length / 2 && !madamDynamicArray.includes(madamPos[i])) {
                    madamDynamicArray.push(madamPos[i]);
                }

            }

        }
        if (showNews) {

            for (let i = 0; i < breakingStaticArray.length; i++) {
                showText("BREAKING\nNEWS", breakingStaticArray[i], 7);
            }
            for (let i = 0; i < madamStaticArray.length; i++) {
                showBg(16, madamStaticArray[i]);
            }

            if (countBreaking % 50 < 1) {
                swapRandomElements(breakingDynamicArray, madamDynamicArray, breakingArray.length);
            }
            for (let i = 0; i < breakingDynamicArray.length; i++) {
                showText("BREAKING\nNEWS", breakingDynamicArray[i], 7);
            }
            for (let i = 0; i < madamDynamicArray.length; i++) {
                showBg(16, madamDynamicArray[i]);
            }

        }
    } else if (step == 2) {

        showNews = false;
        madamTV = false;
        madamStaticArray.splice(0, madamDynamicArray.length)
        madamDynamicArray.splice(0, madamDynamicArray.length)
        countBreaking = 0;
    } else {
        for (let i = 1; i <= 41; i++) {
            showBg(loop3_3, i);
        }
        for (let i = 0; i < heartTVArray.length; i++) {
            heartTVArray[i].heart();
        }

    }


    if (frameCountdown10 <= 0) {
        loop3_3 = (loop3_3 + 1) % 3 + 4;
    }







    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(13);
    textFont(pressStart2P);
    fill(0, 255, 0);
    if (step === 1) {
        text("I don't remember when it started,\nbut the first thing I do after waking up is check my phone", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 2) {
        text("Am I suffering from FOMO or something?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 3) {
        text("Perhaps it all started when people feel easier to tell\nthey liked each other via text message than in person", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 4) {
        text("Losing a wifi connection is scarier than losing a human connection?", width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 5) {
        text("Even though I have accepted that this is a transition and growth,\nIt still makes me feel bad", width / 2, height - 50 - padding, 1200, 100);
    }

}


function swapRandomElements(array1, array2, numberOfSwaps) {
    for (let i = 0; i < numberOfSwaps; i++) {
        // Chọn ngẫu nhiên chỉ số từ mảng 1
        let index1 = Math.floor(Math.random() * array1.length);

        // Chọn ngẫu nhiên chỉ số từ mảng 2
        let index2 = Math.floor(Math.random() * array2.length);

        // Tráo đổi giá trị tại các chỉ số đã chọn
        let temp = array1[index1];
        array1[index1] = array2[index2];
        array2[index2] = temp;
    }
}