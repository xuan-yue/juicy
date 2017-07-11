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

heart.classList.add("fade");
heartSm.classList.add("fade");

$('.button-wink').addEventListener('click', () => {
  wink();
  setTimeout(wink, 300);
  //Make first heart visible
  heart.classList.remove("fade");
  //Set animation path for both hearts
  var positionKeyframes = [ {motionOffset: "0%"}, {motionOffset: "100%"} ];
  var positionTiming = {duration: 3000, iterations: 1};
  //Launch first heart
  heart.animate(positionKeyframes, positionTiming);
  //Launch second heart after 1st
  setTimeout(function(){
  	heartSm.classList.remove("fade");
  	heartSm.animate(positionKeyframes, positionTiming);
  	}, 1000);
  //Fade first heart
  setTimeout(function(){
       heart.classList.add("fade");
   }, 1300);
  setTimeout(function(){
  	heartSm.classList.add("fade");
  }, 2000);
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


// function heartFade(){
// 	// $('#heart').fadeTo("slow", 0);
// 	heart.classList.toggle('fade');
// }
