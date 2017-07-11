console.log('Hello world');

function $(selector) {
  return document.querySelector(selector);
}

const plant = $('#plant');
const leftEye = $('#left-eye');
const leftCheek = $('#left-cheek');
var sayings = [	
	"Remember to hydrate, my friend",
	"Is it hot in here or is it just me?",
	"We both thrive in adverse condition",
	"My favorite dessert is the desert. How about you?",
	"I miss you. Everything succs without you",
	"Beleaf in yourself",
	"Aloe there",
	"I'm a succa for puns",
	"Aloe ya vera much",
	"CactI + Cactyou = cactUS",
	"Lettuce be friends",
	"Turnip the beet!",
	"It's party thyme!",
	"Stay succulent. Teeheehee.",
	"If you don't water me, it's ok. I'll still love you.",
	"Do my leaves look fat?",
	"I'll make you a flower one of these days, just to see you smile.",
	"Scientists named me dog tongue after the shape of my leaves.",
	"A little more sunshine please, mommy."
	]


	var positionKeyframes = [ {motionOffset: "0%"}, {motionOffset: "100%"} ];
	var positionTiming = {duration: 5000, iterations: Infinity};
	heart.animate(positionKeyframes, positionTiming);

$('.button-wink').addEventListener('click', () => {
  wink();
  // heart();
  setTimeout(wink, 300);
});

$('.button-quote').addEventListener('click', () => {
	var rand = Math.floor(Math.random()*sayings.length);
	document.getElementById('quote').innerHTML = sayings[rand];
});

function wink() {
  plant.classList.toggle('rotate');
  leftEye.classList.toggle('wink');
  leftCheek.classList.toggle('wink');
}


// function heart(){
// 	var positionKeyframes = [ {motionOffset: "100%"}, {motionOffset: "0%"} ];
// 	var positionTiming = {duration: 5000, iterations: Infinity};
// heart.animate(positionKeyframes, positionTiming);
// }
