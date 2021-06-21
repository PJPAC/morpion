let identifiant = 0;

const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");
// const btnStopClear = document.querySelector("#timerClear");
const clock = document.querySelector("#timerTime");
const date = new Date(0);
// const paused = false;

/**
 * @param {HTMLElement} appear
 * @param {HTMLElement} disappear
 */

const toggle = (disappear, appear) => {
    disappear.classList.add('d-none');      // disappear.classList.replace('d-block', 'd-none');
    disappear.classList.remove('d-block');
    appear.classList.add('d-block');        // appear.classList.replace('d-none', 'd-block');
    appear.classList.remove('d-none');
};

const increment = () => {
        clock.innerText = date.toISOString().substr(14, 5);
        date.setSeconds(date.getSeconds()+1);
}

const start = () => { 
    date.setTime(0);
    increment();
    toggle(btnStart, btnPause); 
    identifiant = setInterval(increment, 1000);      // Invoquer une fonction à interval régulier
}
const pause = () => {
    toggle(btnPause, btnResume);
    clearInterval(identifiant); 
}
const resume = () => {
    toggle(btnResume, btnPause);
    identifiant = setInterval(increment, 1000);
//    paused = false;
}
const clear = () => {
    clearInterval(identifiant);
}

btnStart.addEventListener ("click", start);
btnPause.addEventListener ("click", pause);
btnResume.addEventListener ("click", resume);
