
const cells = document.querySelectorAll(".case");
const combiList = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 4, 8,],
    [2, 4, 6,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
];
const markList = [];

let play = 0;
let mark = "";


const msDelay = (msInterval) => {      // www.sitepoint.com/delay-sleep-pause-wait/
    // disableGrid();
    const date = Date.now();
    let currentDate = null;
    console.log(parseInt(msInterval / 1000), " ms delay");
    do {
        currentDate = Date.now();
    } while (currentDate - date < msInterval);
    // enableGrid();
}

const CPUMove = () => {
    var mark = "cross";     // il a besoin d'un click pour acter une croix... pourquoi un click et pas immédiatement ?
    let index = parseInt(0);

    console.log("CPU");

    msDelay(2000);
    do {
        index = parseInt(Math.random() * (8 - 0) + 0);     // should give a random number btw 0 and 8
        console.log("msDelay index ", index, "content ", markList[index]);
    } while (markList[index]);  // if (markList[index]) {return false;} skip the player if a cell already used is selected
    const address = "case" + String(index);
    var element = document.getElementById(address);
    element.classList.add("cross");
    markList[index] = mark;    // record each play
    console.log("callback ", index, markList);
    enableGrid();
    return;
};

const playerMove = (e) => {     // en fait je ne comprends pas (e) et ne trouve rien qui s'y réfère dans mes notes...   
    // fait reference à e.target.id mais un passage par argument ne permet pas d'afficher les cercles... !!??
    var mark = "circle";
    console.log("in playerMove");

    do {    // ne fonctionnement pas en remplacement de if (markList[index]) { return false; } qui en lui-même n'indique pas qu'il va refaire des lectures jusqu'à ce que... 
        index = parseInt(e.target.id.substr(4, 1));  // e.target de clicker
    } while (markList[index]);
    // console.log("callback Player index ", index, "content ", markList[index]);
    e.target.classList.add(mark);
    markList[index] = mark;    // record each play
    // console.log("callback ", index, markList);
    disableGrid();
    return;
};

const callback = (e) => {
    // const callback = (e) => { // en fait je ne comprends pas (e), event ?, et ne trouve rien qui s'y réfère dans mes notes...  
    // fait reference à e.target.id 
    // Play against yourself - if time allows insert games options on the display
    /* 
    play++;
    if (play % 2 == 0) {
        mark = "cross";
    } else {
        mark = "circle";
    }
    index = parseInt(e.target.id.substr(4, 1));  // e.target de clicker
    if (markList[index]) {     // ! = different de ; mais attention à la notion de complexité & permet de sortie sans lire la suite
        return false;          // false n'est pas essentiel mais permet une bonne relecture
    }
    e.target.classList.add(mark);
    markList[index] = mark;    // record each play
    if (5 > play) {  // 5 pour tenir compte CPU, issue with markList.length is that if you start by playing in cell 8 then markList.length = 9
        return true;
    } else if (!hasWon(mark, play)) {
        return true;
    }
    */

    /*  Failled...
        play++; 
        let test = 0;
        if (play % 2 == 0) {    // pour être compréhensible il manque des exemples dans https://github.com/seeren-training/JavaScript/wiki/04
            msDelay(2000);
            mark = "cross";     // il a besoin d'un click pour acter une croix... pourquoi un click et pas immédiatement ?
            do {
                test = +1;
                index = parseInt(Math.random() * (8 - 0) + 0);     // should give a random number btw 0 and 8
                console.log("callback Random test ", test, "index ", index, "content ", markList[index]);
            } while (markList[index]) // {     // si markList[index] est vide/undefined alors sort sinon reprend une valeur au hasard
            const address = "case" + String(index);
            var element = document.getElementById(address);
            element.classList.add("cross");
        } else {
            mark = "circle";
            index = parseInt(e.target.id.substr(4, 1));  // e.target de clicker
            if (markList[index]) {     // Do While does not allow clicking at a different location as an infinite loop takes over
                return false;          // if (markList[index]) {return false;} skip the player if a cell already used is selected
            }
            console.log("callback Player test ", test, "index ", index, "content ", markList[index]);
            e.target.classList.add(mark);
        };
        */

    /* Failed again    
    for (play = 1; play < 9; play++) {
        console.log(play);
        if (play % 2 == 0) {
            console.log("before CPUMove");
            CPUMove();            // even moves
            console.log("after CPUMove");
        } else {
            // console.log("before playerMove");
            playerMove(e);         // odd moves
            console.log("after playerMove");
        };
        if (5 > play) {  // 5 pour tenir compte CPU, issue with markList.length is that if you start by playing in cell 8 then markList.length = 9
            console.log("5 > play");
            // return true;     // I don't get why we inserted these return true; they give a false feeling of control, suggest not to look at this section and I wasted hours looking for reasons why loops would not work... 
        } else if (!hasWon(mark, play)) {
            // return true;
        };
    }
    */

//    for (let play = 1; play < 9; play++) {
        play++;
        console.log("play ", play);
        if (play % 2 == 0) {
            mark = "cross";     // il a besoin d'un click pour acter une croix... pourquoi un click et pas immédiatement ?
            //    console.log("CPUMove");
            // sablier // as I can't get it to work eventhough it looks similar to modal then it is pretty obvious I don't really understand what I'm trying to do... 
                // const divLoader = document.createElement("div");    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
                // divLoader.classList.add("loader");
                // divLoader.innerHTML = `<div class="loader"></div>`;
                // document.body.appendChild(divLoader);
                // const loader = new bootstrap.Modal(divLoader);
                // loader.show();
                // TypeError: 'querySelector' called on an object that does not implement interface Element.
                // voir later with jQuery : https://forum.yiiframework.com/t/sablier-ou-barre-de-progression/74501
            // Delay
                // msDelay(2000);      // sometimes randomly looking for an empty cell can take more than 2s so that a hard delay is not the best choice...
            const date = Date.now();    // inspired by www.sitepoint.com/delay-sleep-pause-wait/
            let currentDate = null;
//            timeoutId = setTimeout(2000);
/* version X::: bourrin 
            let randomAttempt = 0;
            do {
                randomAttempt++;
                index = parseInt(Math.random() * (8 - 0) + 0);     // should give a random number btw 0 and 8
                    // console.log("callback Random index ", index, "content ", markList[index], "randomAttemp ", randomAttempt);
            } while (markList[index]);
            if (markList[index]) {
                play= play-1;
            } else {
*/ // version X+1 slightly more straightforward if not delicate... or the other way around... 
                let pool = [NaN]; // initialized array
                let j = 0;
                for (let i = 0; i < 9; i++) {
                    if (!markList[i]) {
                        pool[j] = i;    // should take note of the index of the empty cells
                        j++;
                    };
                }
                index = pool[parseInt(Math.random() * (8 - play) + 0)];     // should give a random number btw 0 and 8-play to use it as the index of the set of indexes of empty cells in the grid
                    console.log("callback Random index ", index, "content ", markList[index], "poll ", pool);
                do {    // splitted within the CPU section it should wait 2ms - time taken to find an empty cell
                    currentDate = Date.now();
                } while (currentDate - date < 2000);  // milliseconds
                const address = "case" + String(index);
                var element = document.getElementById(address);
                element.classList.add("cross");
                markList[index] = mark;    // record each play
                //  console.log("callback ", index, markList);
                e.target.classList.remove("loader");  // as long as it is deleted...
// belongs to version X            };
        } else {
            mark = "circle";
            //    console.log("playerMove");
            index = parseInt(e.target.id.substr(4, 1));  // e.target de clicker
            if (markList[index]) {
                play= play-1;
            } else {
//              // console.log("callback Player index ", index, "content ", markList[index]);
                e.target.classList.add(mark);
                markList[index] = mark;    // record each play
//              // console.log("callback ", index, markList);
            };
        };
        if (5 <= play) {
            hasWon(mark, play);
        };

        
//    }
    console.log(markList); 
};

const announcement = (mark) => {
    stop();
    toggle(btnPause, btnStart); // todo could be clear : toggle(btnPause, btnClear);
    disableGrid();
    incrementPlayer(mark);
    // (e.target).classList.remove(mark);  // mark = "player" & "CPU"
    modalCall(mark); // ToDO change the argument to transfer who wan... 
    return true;
}

const hasWon = (mark, play) => {
    console.log("has won");
    for (const combinaison of combiList) {
        let count = 0;
        for (i = 0; i < 3; i++) {
            if (mark === markList[combinaison[i]]) {
                count = count + 1;
            };
            if (count > 2) {
                announcement(mark);
                return true;
            };
        };
        // if (mark === markList[combinaison[0]]
        //    && mark === markList[combinaison[1]]
        //    && mark === markList[combinaison[2]]) {
        //     // console.log("Gagné !!");
        //     return true;
        //  };
    };
    if ((8 < play) && (count < 2)) {   // there is no winner...
        mark = "circrossle";
        announcement(mark);
        return true;
    }
    return false;
}

const initGrid = () => {
    cells.forEach((cell) => {
        cell.classList.remove("circle", "cross");
    });
    markList.splice(0);
    play = 0;
    enableGrid();
}

const enableGrid = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", callback);
    });
};
const disableGrid = () => {
    cells.forEach((cell) => {
        cell.removeEventListener("click", callback);
    });
};

btnStart.addEventListener("click", initGrid);
btnPause.addEventListener("click", disableGrid);
btnResume.addEventListener("click", enableGrid);