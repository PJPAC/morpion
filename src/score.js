let scorePlayer = 0;
let scoreCPU = 0;
let scoreNul = 0;

const incrementPlayer = (mark) => {
    console.log("score");
    if (mark === "cross") {
        scoreCPU += 1;
        document.querySelector("#scoreCPU").innerText = scoreCPU;
    } else if (mark === "circle") {
        scorePlayer += 1;
        document.querySelector("#scorePlayer").innerText = scorePlayer; w = 2;
    } else {
        scoreNul +=1 ;
        document.querySelector("#scoreNul").innerText = scoreNul;
        // for instance -oox/xxo/oxo- or -0x0/xox/xoo-
        // !! needed to change css file to take into account a heigher set of items on the display
    };



};