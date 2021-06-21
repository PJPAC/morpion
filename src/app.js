
/* let maVar = true;
maVar = 30.3;
maVar = "bob";
maVar = 'john';
maVar = null;
maVar = [];

// Fetch an item
const btnstart = document.querySelector("#timeStart");
// console.log(btnstart);

// Add an event
const 
*/
 

/* Version #1
// Quand on click sur le bouton "Start" il doit disparaitre et le bouton "Pause" doit apparaitre.
// Quand on click sur le bouton "Pause" il doit disparaitre et le bouton "Resume" doit apparaitre.
// Quand on click sur le bouton "Resume" il doit disparaitre et le bouton "Pause" doit reapparaitre.

const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");

const start = () => {
    btnStart.classList.remove('d-block');
    btnStart.classList.add('d-none');
    btnPause.classList.remove('d-none');
    btnPause.classList.add('d-block');    
}

const pause = () => {
    btnPause.classList.remove('d-block');
    btnPause.classList.add('d-none');
    btnResume.classList.remove('d-none');
    btnResume.classList.add('d-block');    
}
const resume = () => {
    btnResume.classList.remove('d-block');
    btnResume.classList.add('d-none');
    btnPause.classList.remove('d-none');
    btnPause.classList.add('d-block');    
}
btnStart.addEventListener ("click", start);
btnPause.addEventListener ("click", pause);
btnResume.addEventListener ("click", resume);

*/
/* Version #2
const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");

const toggle = (disappear, appear) => {
    disappear.classList.add('d-none');      // disappear.classList.replace('d-block', 'd-none');
    disappear.classList.remove('d-block');
    appear.classList.add('d-block');        // appear.classList.replace('d-none', 'd-block');
    appear.classList.remove('d-none');
};

const start = () => { toggle(btnStart, btnPause); }
const pause = () => { toggle(btnPause, btnResume); }
const resume = () => { toggle(btnResume, btnPause); }

btnStart.addEventListener ("click", start);
btnPause.addEventListener ("click", pause);
btnResume.addEventListener ("click", resume);

*/
/*
// Invoquer une fonction à interval régulier
let nombre = 0;
let minute = 0;
const clock = document.querySelector("#timerTime");
const increment = () => {
    nombre = nombre + 1;    // nombre =+ 1;
    if (nombre < 10) { clock.innerText = `00:0${nombre}`; 
    } else if (nombre < 60) { clock.innerText = `00:${nombre}`;
    } else if (nombre >= 60) { 
        minute = (nombre % 60);
        clock.innerText = `${nminute}:${nombre}`;
    }   
    
}

setInterval(increment, 1000);

*/

// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
/*
<!DOCTYPE HTML>
<html>
<head>
	<title>
		How to select a random element
		from array in JavaScript ?
	</title>
</head>
<body style = "text-align:center;">
	<h1 style = "color:green;">
		GeeksForGeeks
	</h1>	
	<p id = "GFG_UP" style =
		"font-size: 15px; font-weight: bold;">
	</p>
	<button id = "button" onclick = "GFG_Fun()">
		click here
	</button>
	<p id = "GFG_DOWN" style =
		"font-size: 24px; font-weight: bold; color: green;">
	</p>
	<script>
		var up = document.getElementById('GFG_UP');
		var down = document.getElementById('GFG_DOWN');
		
		var arr = ["GFG_1", "GeeksForGeeks",
				"Geeks", "Computer Science Portal"];
		
		up.innerHTML = "Click on the button to check "
			+ "the type of element.<br><br>" + arr;
		
		function GFG_Fun() {
			down.innerHTML =
				arr[Math.floor(Math.random() * arr.length)];
		}
	</script>
</body>
</html>
*/

