
function menu() {
    if (keyIsDown(27)) {
        //big part
        rectMode(CORNER);
        fill(21, 21, 21);
        rect(width / 2 - 500, height / 5 + titleSize / 2 + 5, 1000, 400);

        //part 1
        rectMode(CORNER);
        fill(21, 21, 21);
        stroke(0, 255, 0);
        strokeWeight(1);
        rect(width / 2 - 500 + 25, height / 5 + titleSize / 2 + 5 + 25, 950, 60);
        strokeWeight(0);

        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        fill(0, 255, 0);
        textSize(24);
        text("USER MANUAL", width / 2 - 500 + 25 + 950 / 2, height / 5 + titleSize / 2 + 5 + 25 + 30);

        //part 2
        rectMode(CORNER);
        fill(21, 21, 21);
        stroke(0, 255, 0);
        strokeWeight(1);
        rect(width / 2 - 500 + 25, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25, 475 - 12.5, 265);
        strokeWeight(0);

        //part 2.1
        rectMode(CORNER);
        fill(21, 21, 21);
        stroke(0, 255, 0);
        strokeWeight(1);
        rect(width / 2 - 500 + 25, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25, 475 - 12.5, 265 / 6);
        strokeWeight(0);

        let col1 = width / 2 - 500 + 25 + 15;
        let col2 = col1 + (475 - 12.5) / 2;
        let row1 = height / 5 + titleSize / 2 + 5 + 25 + 60 + 25 + 24 + 265 / 10;
        rectMode(CORNER);
        textAlign(LEFT, CENTER);
        fill(0, 255, 0);
        textSize(24);
        text("PRESS", col1, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25 + 24);
        text("TO", col1 + (475 - 12.5) / 2, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25 + 24);

        //part 2.2
        rectMode(CORNER);
        textAlign(LEFT, CENTER);
        fill(255);
        textSize(14);
        text("1-5", col1, row1 + 265 / 6);
        text("Change chanel", col2, row1 + 265 / 6);
        text("Space", col1, row1 + (265 / 6) * 2);
        text("Read", col2, row1 + (265 / 6) * 2);
        text("ESC", col1, row1 + (265 / 6) * 3);
        text("Open menu", col2, row1 + (265 / 6) * 3);
        image(homeIcon, col1 + 14, row1 + (265 / 6) * 4, 27, 27 / 150 * 137);
        text("Return home", col2, row1 + (265 / 6) * 4);

        //part 3
        rectMode(CORNER);
        fill(21, 21, 21);
        stroke(0, 255, 0);
        strokeWeight(1);
        rect(width / 2 - 500 + 25 + 25 + 475 - 12.5, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25, 475 - 12.5, 265);
        rect(width / 2 - 500 + 25 + 25 + 475 - 12.5, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25, 475 - 12.5, 265 / 6);
        strokeWeight(0);

        let col3 = width / 2 - 500 + 25 + 25 + 475 - 12.5 + (475 - 12.5) / 2;
        let row2 = height / 5 + titleSize / 2 + 5 + 25 + 60 + 25 + 12 + 265 / 10;
        rectMode(CORNER);
        textAlign(CENTER, CENTER);
        fill(0, 255, 0);
        textSize(10);
        text("Abstract", col3, height / 5 + titleSize / 2 + 5 + 25 + 60 + 25 + 12 * 2);

        fill(255);
        text("The project is a code-based interactive work,", col3, row2 + 265 / 6 + 10);
        text("a collection of personal experiences", col3, row2 + 265 / 6 + 13 + 10);
        text("about the challenges I faced while  ", col3, row2 + 265 / 6 + 13 * 2 + 10);
        text("growing up in digital age. It comprises ", col3, row2 + 265 / 6 + 13 * 3 + 10);
        text("four main processes: judgment, ", col3, row2 + 265 / 6 + 13 * 4 + 10);
        text("information overload,privacy concerns, ", col3, row2 + 265 / 6 + 13 * 5 + 10);
        text("addictive tendencies, and", col3, row2 + 265 / 6 + 13 * 6 + 10);
        text("the final part is my reflective thinking.", col3, row2 + 265 / 6 + 13 * 7 + 10);
        
        rectMode(CENTER);
        textAlign(LEFT, CENTER);
    }
}